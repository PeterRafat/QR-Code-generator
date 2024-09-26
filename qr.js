let inputTxt = document.getElementById("content--input");
let contentBtn = document.getElementById("content--btn");
let contentRight = document.getElementById("content--right");
let imgGenerate = document.getElementById("imgGenerate");

function generateQr() {
    if(inputTxt.value.length>0)
    {
        imgGenerate.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example "
                        + inputTxt.value;     
    }
    else
    {
        inputTxt.classList.add("error");
        setTimeout(()=>{
            inputTxt.classList.remove("error")
        },1000)
    }
    
}
contentBtn.onclick=function(){generateQr();}