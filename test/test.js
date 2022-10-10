new hshToast({
    timeout: 5000,
    message: "This is a test toast with a long running text. It can be whatever.",
    kind: "error",
    title: "System"
});

const popInTime = 500;
setTimeout(() => {
    new hshToast({
        timeout: 5000000,
        message: "This is a test toast!",
        kind: "info",
        title: "System"
    });

    setTimeout(() => {
        new hshToast({
            timeout: 5000,
            message: "This is a test toast!",
            kind: "warning",
            title: "System"
        });

        setTimeout(() => {
            new hshToast({
                timeout: 5000,
                message: "This is a different length text test toast!",
                kind: "success",
                title: "System"
            });
        }, popInTime);

    }, popInTime);
    
}, popInTime);



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomKind(){
    let kinds = ["warning","info","error","success"];
    return kinds[Math.floor(Math.random()*kinds.length)];
}

let randomToastCounter = 0;
const testToastBtn = document.querySelector(".testToast");
const toastTextEl = document.querySelector(".toastText");
testToastBtn.addEventListener("click",function(){
    let text = `Random toast ${randomToastCounter}`;
    if( toastTextEl.value ){
        text = toastTextEl.value;
    }
    let options = {
        timeout: getRandomInt(0,10000),
        kind: getRandomKind(),
        message: text,
        title: "System"
    };
    randomToastCounter++;
    new hshToast(options);
});



