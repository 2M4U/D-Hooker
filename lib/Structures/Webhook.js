const { Hook, File } = require("../Discord/Discord");
const Console = require("../Utilities/Console")
const Embed = require("./Embed");

module.exports = class Webhook {
    constructor(opts) {
        this.payload = {};

        switch (typeof opts === "string") {
            case true:
                this.url = opts;
                this.errors = true;
                this.retry = true;
                break;
            case false:
                this.url = opts.url;
                this.errors = opts.errors === undefined ? true : false;
                this.retry = opts.retry === undefined ? true : false;
                break;
            default:
                this.url = opts;
                this.errors = true;
                this.retry = true;
                break;
        }
    }

    username(username) {
        switch (username.length > 32) {
            case true:
                Console(`The username specified was ${username.length} characters.\nDiscord Webhook usernames must be under 32 characters.`, "error");
                break;
            case false:
                this.payload.username = username;
                return this;
        }

    }

    avatar(avatar) {
        this.payload.avatar_url = avatar;

        return this;
    }

    async file(file) {
        try {
            const res = await File(this.url, file, this.payload);
            if (res.statusCode !== 200) {
                throw new Error(`Error sending file-hook: \nDiscord Returned: HTTP_ERR_CODE::${res.statusCode}`);
            }
        } catch (err) {
            if (this.errors) {
                throw new Error(err.message);
            }
        }
    }

    async send(payload) {
        let endofPayload = {
            ...this.payload
        };

        switch (typeof payload === "string") {
            case true:
                endofPayload.content = payload;
                break;
            case false:
                endofPayload = {
                    ...endofPayload,
                    ...payload.json()
                }
                break;
        }
        try {
            const res = await Hook(this.url, endofPayload);

            if (res.status === 429 && this.retry) {
                const body = await res.json();
                const wait = body["retry_after"];
                setTimeout(() => Hook(this.url, endofPayload), wait);
            } else if (res.status != 204) {
                throw new Error(`Error sending webhook - Discord Returned: HTTP_ERR_CODE::${res.status} - ${res.statusTitle}`);
            }
        } catch (err) {
            if (this.errors) {
                throw new Error(err.message);
            }
        }
    }

    async customSuccess(title, name, value, position) {
        const embed = new Embed()
            .title(title)
            .timestamp()
            .colour(65340)
        if (name !== undefined && value !== undefined) {
            embed.field(name, value, position)
        }
        await this.send(embed);
    }

    async customWarn(title, name, value, position) {
        const embed = new Embed()
            .title(title)
            .timestamp()
            .colour(16763904)
        if (name !== undefined && value !== undefined) {
            embed.field(name, value, position)
        }
        await this.send(embed);
    }

    async customError(title, name, value, position) {
        const embed = new Embed()
            .title(title)
            .timestamp()
            .colour(16729149)
        if (name !== undefined && value !== undefined) {
            embed.field(name, value, position)
        }
        await this.send(embed);
    }
    async success(name, value, position) {
        const embed = new Embed()
            .title("SUCCESSFUL")
            .timestamp()
            .colour(65340)
        if (name !== undefined && value !== undefined) {
            embed.field(name, value, position)
        }
        await this.send(embed);
    }

    async warn(name, value, position) {
        const embed = new Embed()
            .title("WARNING")
            .timestamp()
            .colour(16763904)
        if (name !== undefined && value !== undefined) {
            embed.field(name, value, position)
        }
        await this.send(embed);
    }

    async error(name, value, position) {
        const embed = new Embed()
            .title("ERROR")
            .timestamp()
            .colour(16729149)
        if (name !== undefined && value !== undefined) {
            embed.field(name, value, position)
        }
        await this.send(embed);
    }

};