console.log("Hello World");

var a = 4;
var b = "Hello";

console.log(a);
console.log(b);

var c = "Two";
if(c=="One"){
	
	console.log("Statement is True");	
}
else if (c=="Two"){
	console.log("Statement is Two");		
}
else if (c=="Three"){
	console.log("Statement is Three");		
}
else{
	
	console.log("Nothing is Matched");	
}

for (var i=1; i<=100;i++){
	console.log(i)
}
for (var i=0; i<=100;i=i+5){
	console.log(i)
}

var j=1;
while(j<5){
	console.log(j);
	j++
}

var k=1;
do{
	console.log(k);
	k++
}while(j<5)

function add(a,b){
	return a+b;
}
console.log(add(1181,1212))