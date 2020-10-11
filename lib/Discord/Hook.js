const fetch = require("node-fetch");

module.exports = (url, payload) => new Promise((resolve, reject) => {
    fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0; (compatiable; d-hooker/1.0 +https://github.com/CyberCDN/D-Hooker)"
            },
            body: JSON.stringify(payload)
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
});