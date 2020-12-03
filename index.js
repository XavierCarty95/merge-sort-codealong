
let unsortedArray = [2,1]

function mergeSort(array){
 let midpoint = array.length/2;
 let firstHalf = array.splice(0,midpoint);
 let secondHalf = array.splice(midpoint, array.length);
 if(array.length < 2){
     return array
 }else {
 return merge(mergeSort(firstHalf), mergeSort(secondHalf));
 }
}

mergeSort(unsortedArray);


function merge(array){





}