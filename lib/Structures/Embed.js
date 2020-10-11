const { Colour } = require("../Utilities/Utilities");
const Console = require("../Utilities/Console");

module.exports = class Embed {
    constructor() {
        this.payload = {
            embeds: [{ fields: [] }]
        };
    }

    printJSON() {
        return Console(this.payload, "debug");
    }
    json() {
        return this.payload;
    }

    text(txt) {
        this.payload.content = txt;
        return this;
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

    author(author, img, url) {
        this.payload.embeds[0].author = {};
        this.payload.embeds[0].author.name = author;
        this.payload.embeds[0].author.url = url;
        this.payload.embeds[0].author.icon_url = img;
        return this;
    }

    title(title) {
        this.payload.embeds[0].title = title;
        return this;
    }

    url(url) {
        this.payload.embeds[0].url = url;
        return this;
    }

    thumbnail(img) {
        this.payload.embeds[0].thumbnail = {};
        this.payload.embeds[0].thumbnail.url = img;
        return this;
    }

    image(img) {
        this.payload.embeds[0].image = {};
        this.payload.embeds[0].image.url = img;
        return this;
    }

    colour(colour) {
        this.payload.embeds[0].color = colour;
        return this;
    }

    timestamp(date) {
        if (date) {
            this.payload.embeds[0].timestamp = date;
        } else {
            this.payload.embeds[0].timestamp = new Date();
        };

        return this;
        // /** TO FIX TIMESTAMP **/
        // this.payload.embeds[0].timestamp = new Date();
        // return this;
    }

    desc(desc) {
        this.payload.embeds[0].description = desc;
        return this;
    }

    field(name, value, position) {
        const fields = {
            name: name,
            value: value,
            inline: position
        };

        switch (value.length > 1024) {
            case true:
                Console(`The value given was ${value.length} characters, fields of Discord embeds must be under 1024 characters`, "warn")
                break;
            case false:
                this.payload.embeds[0].fields.push(fields);
                break;
        }
        return this;
    }

    removefieldname(name) {
        this.payload.embeds[0].fields = this.payload.embeds[0].fields.filter(field => field.name == name);
        return this;
    }

    footer(footer, img) {
        this.payload.embeds[0].footer = {};
        this.payload.embeds[0].footer.icon_url = img;
        this.payload.embeds[0].footer.text = footer;
        return this;
    }

};