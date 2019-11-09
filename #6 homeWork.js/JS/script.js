
let arr1 = new Array('hello', 'world', 23, '23', null, 'mido', 'zulu', 'CA', 'amigo', 1991, 1999, 1990);

function filterBy(anyArr, dataType) {

  for (let i = 0; i < anyArr.length; i++) {
    if (typeof (anyArr[i]) === typeof (dataType)) {
      anyArr.splice(i, 1);
      i--;
    }
  }
  console.log(anyArr);
}



filterBy(arr1, 'sample');