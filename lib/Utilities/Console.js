const colors = require("colors");
module.exports = function(logMessage, type = "info") {
    let logString;
    let logFormatting;

    switch (type) {
        case "debug":
            logString = colors.white(logMessage);
            logFormatting = colors.red(colors.bold("[ DEBUG ] [D-Hooker]:"));
            break;
        case "info":
            logString = colors.white(logMessage);
            logFormatting = colors.white(colors.bold("[ INFO ] [D-Hooker]:"));
            break;
        case "error":
            logString = colors.white(logMessage);
            logFormatting = colors.black(colors.bold("[ ERROR ] [D-Hooker]:"));
            break;
        case "warn":
            logString = colors.red(logMessage);
            logFormatting = colors.bgRed(colors.white(colors.bold("[ WARN ] [D-Hooker]:")));
            break;
        case "success":
            logString = colors.green(logMessage);
            logFormatting = colors.bgGreen(colors.black(colors.bold("[ SUCCESS ] [D-Hooker]:")));
            break;
        default:
            logString = colors.white(logMessage);
            logFormatting = colors.white(colors.bold("[ INFO ] [D-Hooker]:"));
            break;
    }
    console.log(logFormatting, logString);
};