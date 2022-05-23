//3.i used this callback function to make my code more cleaner
const listener = (err, port) => {
  err
    ? console.log(`listener error => ${err}`)
    : console.log(`go to localhost:${port}`);
};
module.exports = listener;
