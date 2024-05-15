const button = document.querySelector('.btn'),
color = document.querySelector('.color');

const hex = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"a",
"b",
"c",
"d",
"e",
"f",
];

button.addEventListener('click', () =>{
let hexcolor = generatehex();
document.body.style.backgroundColor = hexcolor;
color.textContent = hexcolor;

})

function generatehex (){
let hexcolor = '#';
for(let i = 0; i < 6; i++){
hexcolor += hex[getrandomhex()];
}
return hexcolor;
}

function getrandomhex (){
return Math.floor(Math.random() * hex.length);
}
