function changetext(){
    let ele=document.getElementsByTagName('h1');
    ele[0].innerText="Hi this is new DOM";
}

function changeclr(){
    let p=document.getElementsByTagName('h2');
    p[0].innerText="witchh";
}
function changecolor(){
    let body=document.getElementsByTagName('body');
    body[0].style.backgroundColor="lightblue";
}
function changeimage(){
    let ele3=document.getElementsByTagName('body');
    ele3[0].style.backgroundImage="url('bbd.jpg')";


}
for(let i=1;i<9;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line+=j;
    }
    console.log(line);

}
var str="your name";
let count=0;
for(let char){
    if(str.includes(char)){
        count++;
    }
    
}
return count++;
