var size = prompt("Please enter the size");
for (let k = 0; k < size+1; k++) {
  var e;
  for (let j = 0; j < size-k+1; j++) {
    e = e + ' ';
  }
  var d;
  for (let i = 1; i < 2*k+2; i++) {
    d = d + '#';
  }
  var t=e+d;
  console.log(t);
}
