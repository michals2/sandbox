const timer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hi2");
  }, 500);
  setTimeout(() => {
    resolve("hi");
  }, 1000);
});

timer.then(successMessage => {
  console.log(`the success message is ${successMessage}`);
});
