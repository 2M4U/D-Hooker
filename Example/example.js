const { Webhook, Embed } = require("../index");

const URL = "https://discordapp.com/api/webhooks/735555231319982080/zcZkHY9DppUD_meYv-7t7q89YnUnh86mTrsHyS7gJti3giKXQaD7-EGrGI-jf1uyvjAi"; // Dead Webhook

const dhooker = new Webhook(URL);

const img = "https://logos.flamingtext.com/Name-Logos/Hooker-design-stripes-name.gif";

dhooker.username("D-Hooker Test");
dhooker.avatar(img);

const embed = new Embed()
    // .text("D-Hooker Text")
    // .author("D-Hooker Author", img, "https://example.com/")
    // .title("D-Hooker Title")
    // .desc("D-Hooker Description")
    // .url("https://example.com/")
    // .image(img)
    // .colour(16763904)
    // .thumbnail(img)
    // .field("D-Hooker Field", "D-Hooker field Desc", true)
    // .field("D-Hooker Field1", "D-Hooker field Desc", false)
    // .field("D-Hooker Field", "D-Hooker field Desc", true)
    // .field("D-Hooker Field", "D-Hooker field Desc", true)
    // .footer("D-Hooker Footer", img)
    // .removefieldname(2)
    .timestamp("12:00")
    .printJSON()

dhooker.send(embed)