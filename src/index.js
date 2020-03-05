module.exports = function check(str, bracketsConfig) {
  if (str.length === 0 || bracketsConfig === null || bracketsConfig === undefined) throw new Error();

  if (str.length % 2 !== 0) return false;

  let arr = [];

  for (const elem of str){
    if (elem !== arr[arr.length - 1]) {
      let config = bracketsConfig.find(el => el[0] === elem);
      if (config === undefined) return false;
      arr.push(config[1]);
    } else {
      arr.pop();
    }
  }
   
   return arr.length === 0 ? true : false;
}
