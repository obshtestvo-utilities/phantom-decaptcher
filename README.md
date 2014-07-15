## phantom-decaptcha
CAPTCHA solving for phantomjs via nodejs librarires.

## Requirements
Requires both `phantomjs` and `nodejs`.

It also needs a `require('./node_modules/phantomjs-nodify')` in the start of your phantomjs script.
This minimizes the gap between nodejs and phantomjs.

## Comes with

 - script for manual solving of CAPTCHA by downloading the image and offering the user to type the text
  in the command line.
 - automatic solving of CAPTCHA via decaptcha services (currently only `deathbycaptcha`)

### Caveats
Because `phantomjs` can't download files there's a script ([auto/bridge.js](auto/bridge.js)) that acts
as a bridge between the nodejs decaptcha library (that accepts a stream of data) and phantomjs.

It's doing so by simply downloading a file and streaming it to the decaptcha.