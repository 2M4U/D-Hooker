const Form = require("form-data");
const fs = require("fs");

module.exports = (url, file, { username, avatar }) => new Promise((resolve, reject) => {
    const formData = new Form();
    if (username) {
        formData.append("username", username);
    }
    if (avatar) {
        formData.append("avatar_url", avatar);
    }

    formData.append("file", fs.createReadStream(file));

    formData.submit(url, (err, res) => {
        if (err) {
            reject(err);
        } else {
            resolve(res);
        }
    });
});