# D-Hooker
_Custom Webhook Module for Discord_

<kbd>[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8ac009bb0d644ce5878d4ec53273fbcd)](https://www.codacy.com/gh/CyberCDN/D-Hooker/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CyberCDN/D-Hooker&amp;utm_campaign=Badge_Grade)
</kbd>

## Example Usage

```js
const { Webhook, Embed } = require("../index");

const URL = "https://discordapp.com/api/webhooks/735555236134982080/zcZkHY9DppUD_meYv-7t7q89YnEXAMPLE7gJti3giKXQaD7-EGrGI-jf1uyvjAi";

const dhooker = new Webhook(URL);

const img = "https://logos.flamingtext.com/Name-Logos/Hooker-design-stripes-name.gif";

dhooker.username("D-Hooker Test");
dhooker.avatar(img);

const embed = new Embed();
embed.text("D-Hooker Text")
    .author("D-Hooker Author", img, "https://example.com/")
    .title("D-Hooker Title")
    .desc("D-Hooker Description")
    .url("https://example.com/")
    .image(img)
    .colour(16763904)
    .thumbnail(img)
    .field("D-Hooker Field", "D-Hooker field Desc", true)
    .footer("D-Hooker Footer", img)
    .timestamp();

dhooker.send(embed);
```

## License

The MIT License (MIT)

Copyright (c) 2020 Johnty O'Reilly

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
