let myArrah = [1, 26, 51, 76, 100];

for (x of myArrah) {
  if (x < 25) {
    console.log("E");
  } else if (x > 25 && x < 50) {
    console.log("D");
  } else if (x > 50 && x < 75) {
    console.log("C");
  } else {
    if (x > 75 && x < 100) {
      console.log("B");
    } else {
      console.log("A");
    }
  }
}
