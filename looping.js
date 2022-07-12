//for loop
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.count("even number", i);
  }
}

// for loop another method
let i = 0;
for (; i <= 10; ) {
  i++;
  console.count("numbers", i);
}

//while loop
let j = 0;
while (j <= 5) {
  j++;
  console.log("numbers", j);
}
