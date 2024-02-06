function zipList(list1, list2){
  let returnList = {};
  let oddCounter = 1;
  for(let i =0; i < list1.length; i++){
    returnList[2*i] = list1[i];
  }
  for(let j = 0; j < list2.length; j++){
    returnList[j+oddCounter] = list2[j];
    oddCounter++;
  }

  return returnList;
}

function zipListTheEasyWay(list1, list2){
  return
}

let a = ["a", "b", "c"];
let b = [1, 2, 3];
console.log(zipList(a,b));