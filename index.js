
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let num = fromN;

  function add(fromN, toN) {

    if (fromN + 1 <= toN) {
      num += (fromN + 1)
      add(fromN + 1, toN)
    }
  }

  add(fromN, toN)


  return num;

}

console.log(sum(3, 7))

module.exports = sum;
