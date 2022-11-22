const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 50);
  }
}, 50);

setTimeout(() => {
  process.stdout.write("\n HI HI HI   ");
}, 2000);
