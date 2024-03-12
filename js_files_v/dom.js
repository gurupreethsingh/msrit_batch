// find main heading using class name
var mainheading=document.querySelector(".mainheading");
console.log(mainheading);
console.log(mainheading.textContent);
console.log(mainheading.innerHTML);
// mainheading.style.color="red";
// mainheading.style.textAlign="center";
// mainheading.style.border="1px solid blue";
// mainheading.style.padding="30px";




function applycss()
{
    var mainheading=document.querySelector(".mainheading");
    mainheading.style.color="red";
mainheading.style.textAlign="center";
mainheading.style.border="1px solid blue";
mainheading.style.padding="30px";
}

function removecss()
{
    var mainheading=document.querySelector(".mainheading");
    mainheading.style.color="";
mainheading.style.textAlign="";
mainheading.style.border="";
mainheading.style.padding="";
}

function changecolor()
{
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * (256))} , ${Math.floor(Math.random() * (256))} , ${Math.floor(Math.random() * (256))})`;
}

var secondpara=document.querySelector("#secondpara");

function changeparastyle()
{
    var secondpara=document.querySelector("#secondpara");
    secondpara.style.color="red";
secondpara.style.textAlign="center";
secondpara.style.border="1px solid blue";
secondpara.style.padding="30px";
}


function removeparastyle()
{
    var secondpara=document.querySelector("#secondpara");
    secondpara.style.color="";
secondpara.style.textAlign="";
secondpara.style.border="";
secondpara.style.padding="";
}

function changeparacolor()
{
    var secondpara=document.querySelector("#secondpara");
    secondpara.style.backgroundColor = `rgb(${Math.floor(Math.random() * (256))} , ${Math.floor(Math.random() * (256))} , ${Math.floor(Math.random() * (256))})`;
}

function takeinput()
{
    let greeting = prompt("Enter your name");
    let secondheading=document.querySelector(".subheading");
    secondheading.innerHTML=greeting;
}