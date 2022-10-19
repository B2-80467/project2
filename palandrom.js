let a="madam"
let str = "";
 for(i=a.length-1;i>=0;i--){
   str+=a[i];
}
if(str==a){
console.log("Palindrome");
}else {
console.log("Not a palindrome");
}
