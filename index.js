module.exports = run;

var child_process = require('child_process')
var PathArray = require('path-array')
var path = require('path')

function run() {
  var gyp_script = path.resolve(__dirname, 'gyp', 'gyp_main.py')

  var pypath = new PathArray(process.env, 'PYTHONPATH')
  pypath.unshift(path.join(__dirname, 'gyp', 'pylib'))

  var args = [gyp_script].concat(process.argv.slice(2))

  var cp = child_process.spawn('python', args, {
    stdio: [ 0, 1, 2 ]
  })

  cp.on('exit', onCpExit)
}

function onCpExit(code) {
  process.exit(code);
}
