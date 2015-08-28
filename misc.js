'use sctict';

function StopWatch() {
  this.start = new Date();
}
StopWatch.prototype.stop = function () {
  this.end = new Date();
}
StopWatch.prototype.toString = function () {
  var end = this.end;
  if (!end) {
    end = new Date();
  }
  var date = new Date(end - this.start);
  return Misc.getTimeString(date);
}

function Misc() {
}
Misc.getTimeString = function (time) {
  if (!time) {
    time = new Date();
  }
  return time.toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}
Misc.watch = new StopWatch();

module.exports = Misc;