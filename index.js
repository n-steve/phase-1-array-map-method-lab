const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
 
const titleCased = () => {
  const string = tutorials.map(tutorial => {
    const result = tutorial.split(" ");
    let newResult = "";
for (const variable of result){
 newResult += variable[0].toUpperCase()  + variable.slice(1) + " "
}
    return newResult = newResult.slice(0,newResult.length-1)
  })
  return string;
}
console.log(titleCased())