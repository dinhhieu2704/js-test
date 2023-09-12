var logMess = '';
var pointing = 0;
var finish = 100;

function showProgress(pointing) {
  console.log(new Date().toLocaleString('en-GB'));
  logMess = '[';
  for (let i = 0; i < finish; i++) {
    logMess += i < pointing ? '|' : '.';
  }
  logMess += ']';
  console.log(logMess);
  pointing += 10;
  progressing = false;
  if (pointing <= finish) {
    showProgress(pointing);
  } else {
    console.log('Success!!!');
  }
}

showProgress(pointing);
