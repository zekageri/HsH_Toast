let randomToastCounter = 0;
const testToastBtn = document.querySelector("#toastWithText");
const testToastHTMLBtn = document.querySelector("#toastWithHtml");

const toastTextEl = document.querySelector("#customText");
const toastHTMLEl = document.querySelector("#customHTML");

new hshToast({
    timeout: 10000,
    message: "Welcome. Please feel free to try HsH Toast!",
    kind: "info",
    title: "HsH Toast"
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomKind(){
    let kinds = ["warning","info","error","success"];
    return kinds[Math.floor(Math.random()*kinds.length)];
}

testToastBtn.addEventListener("click",function(){
    addMessage( toastTextEl.value );
});
testToastHTMLBtn.addEventListener("click",function(){
    addMessage( toastHTMLEl.value );
});


function addMessage(msg){
    let text = `Random toast ${randomToastCounter}`;
    if( msg ){ text = msg; }
    let options = {
        timeout: getRandomInt(0,10000),
        kind: getRandomKind(),
        message: text,
        title: "HsH Toast"
    };
    randomToastCounter++;
    new hshToast(options);
}



