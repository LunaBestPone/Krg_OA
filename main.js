let args = process.argv.slice(2);

let phonetic_map = new Map();
phonetic_map.set('0', 'Zero');
phonetic_map.set('1', 'One');
phonetic_map.set('2', 'Two');
phonetic_map.set('3', 'Three');
phonetic_map.set('4', 'Four');
phonetic_map.set('5', 'Five');
phonetic_map.set('6', 'Six');
phonetic_map.set('7', 'Seven');
phonetic_map.set('8', 'Eight');
phonetic_map.set('9', 'Nine');

if (args.length === 0) {
  console.log('Usage: node main.js [List of integers seperated by space]');
  process.exit(1);
}

let output = '';

for (const num of args){
  let result = '';
  for (const c of num) {
    if (phonetic_map.has(c)) {
      result += phonetic_map.get(c);
    } else {
      console.log('Error: Input contains non-Integer, exiting.');
      process.exit(1);
    }
  }
  result += ',';
  output += result;
}

// remove the last character
console.log(output.slice(0,-1));
