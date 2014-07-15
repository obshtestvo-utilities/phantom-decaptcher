var flow = require('./node_modules/q');
var spawn = require("child_process").spawn;

Decaptcha = function() {}
Decaptcha.prototype = {
    solve: function(captchaUrl) {
        var captchaReady = flow.defer();
        var decaptcha = spawn('node', ['bridge.js', captchaUrl]);
        var text = '';
        decaptcha.stdout.on('data', function(data) {
            text = text + data;
        })
        decaptcha.on("exit", function () {
            captchaReady.resolve(text);
        })
        return captchaReady.promise;
    }
}

exports = module.exports = Decaptcha;