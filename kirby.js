'use strict';

let i = 0;
let s = 0;
let dir = 1;
let progress = 0;
setInterval(function() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  for (let i = 0; i < s; i++) {
    process.stdout.write(' ');
  }
  switch(i) {
    case 0:
      process.stdout.write('<(^_^<)');
      i++;
      break;
    case 1:
      process.stdout.write('<(^_^)>');
      i++;
      break;
    case 2:
      process.stdout.write('(>^_^)>');
      i++;
      break;
    default:
      process.stdout.write('<(^_^)>');
      i = 0;
  };
  for (let i = 0; i < (11 - s); i++) {
    process.stdout.write(' ');
  }
  s += dir;
  if (s == 10) {
    dir = -1;
  }
  if (s == 0) {
    dir = 1;
  }
  process.stdout.write('[' + progress++ + '/100]');
}, 100);
