//arajadranq 1

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("Gagarin"));

//arajadranq 2

function checkSpam(str) {
  let loverstr = str.toLowerCase();
  if (loverstr.includes("viagra") || loverstr.includes("xxx")) {
    return true;
  }
  return false;
}
console.log(checkSpam("viagra"));

//arajadranq 3
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}
console.log(truncate("barevner", 5));

//arajadranq 4

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue("$1250000"));
