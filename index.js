function sumItems(array) {
  let sum = 0;

  for (const ele of array) {
    if (!Array.isArray(ele)) {
      sum += ele;
    } else {
      sum += sumItems(ele);
    }
  }
  return sum;
}
module.exports = sumItems;