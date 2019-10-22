const agrv = process.argv.slice(2);
for (let num of agrv) {
if (num <= 0) {
  console.log("sorry no one can go back to the past");
};
if (!Number(num)) {
   console.log("no time provided")
 };
if (num > 0) {
  setTimeout(() => {
      process.stdout.write(`${num} sec `) ;
        process.stdout.write("\x07")} , num * 1000)
    };
};