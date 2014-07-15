// this is meant to be run in nodejs

var spawn = require('child_process').spawn;
var Downloader = require('downloader');

var loggerConfig = {
    type: "file",
    details: {
        filename: 'error.log'
    }
}
var logger = require('logger-generator')(loggerConfig)
var downloader = new Downloader(logger);
var decaptcha = spawn('node', [require.resolve('decaptcher/run.js')]);

decaptcha.stdout.pipe(process.stdout);
downloader.pipe(process.argv[2], decaptcha.stdin)