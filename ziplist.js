function zipList(list1, list2){
  let returnList = [];
  for(let i = 0; i < list1.length; i++){
    returnList.push(list1[i],list2[i]);
  }

  return returnList;
}

const zipListTheEasyWay = (list1, list2) => _.flatten(_.zip(list1,list2));


let a = ["a","b","c"];
let b = [1,2,3];

console.log(zipList(a,b));
console.log(zipListTheEasyWay(a,b));