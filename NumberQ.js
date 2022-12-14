let number1 = Math.floor(Math.random()* 50)+ 1;
let number2 = Math.floor(Math.random()* 50)- 1;
let number3 = number1 + number2;

let result = prompt(`Cuanto es ${number1} + ${number2}?`)

try{
console.log('⬛⬛⬛1️⃣2️⃣3️⃣⬛⬛⬛')  
console.log('Question Number 123...')
console.log(`operation ${number1} + ${number2}`)
 
  if (number3 == result){
  console.log(`success ✅ : ${number3}`);
}else{
  console.error(`Fail ❌ : ${number3}`)
} 
console.log('⬛⬛⬛⬅️0️⃣➡️⬛⬛⬛')
  
} catch(e) {
  console.log('f')
}
