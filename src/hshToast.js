class hshToast {
    template = `
    <div class="hsh-toast %toastClass%" id="%id%">
        <div class="hsh-toast-ico-wrap">
            <span class="hsh-toast-ico">
                %ico%
            </span>
        </div>
        <div class="hsh-toast-message-wrap">
            <div class="hsh-toast-message-header">
                <span class="hsh-toast-title">%title%</span>
                <span class="hsh-toast-time">%time%</span>
            </div>
            <span class="hsh-toast-message">
                %message%
            </span>
        </div>
    </div>`;

    kindIco = {
        "warning" : `<?xml version="1.0" encoding="UTF-8"?>
            <svg fill="currentColor" enable-background="new 0 0 486.463 486.463" version="1.1" viewBox="0 0 486.46 486.46" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="m243.22 333.38c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4 0.6-14.3-10.7-25.6-24.4-25.6z"/>
                <path d="m474.62 421.98c15.7-27.1 15.8-59.4 0.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8 0.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-0.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-0.3 47.1z"/>
                <path d="m237.02 157.88c-11.9 3.4-19.3 14.2-19.3 27.3 0.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7 0.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9 0.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9 0.6-12.5 1.7-25 2.3-37.5 0-4.5-0.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z"/>
            </svg>`,

        "info": `<?xml version="1.0" encoding="UTF-8"?>
            <svg fill="currentColor" enable-background="new 0 0 330 330" version="1.1" viewBox="0 0 330 330" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="m165 8e-3c-90.981 0-165 74.016-165 164.99 0 90.977 74.019 164.99 165 164.99s165-74.015 165-164.99c0-90.975-74.019-164.99-165-164.99zm0 299.98c-74.439 0-135-60.557-135-134.99s60.561-134.99 135-134.99 135 60.557 135 134.99c0 74.437-60.561 134.99-135 134.99z"/>
                <path d="m165 130.01c-8.284 0-15 6.716-15 15v99.983c0 8.284 6.716 15 15 15s15-6.716 15-15v-99.983c0-8.283-6.716-15-15-15z"/>
                <path d="m165 70.011c-3.95 0-7.811 1.6-10.61 4.39-2.79 2.79-4.39 6.66-4.39 10.61s1.6 7.81 4.39 10.61c2.79 2.79 6.66 4.39 10.61 4.39s7.81-1.6 10.609-4.39c2.79-2.8 4.391-6.66 4.391-10.61s-1.601-7.82-4.391-10.61c-2.799-2.791-6.659-4.39-10.609-4.39z"/>
            </svg>`,

        "success":`<?xml version="1.0" encoding="UTF-8"?>
            <svg fill="currentColor" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="evenodd">
                <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z"/>
                <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="var(--svg-status-bg, #fff)"/>
                <path d="M6.278 7.697L5.045 6.464a.296.296 0 0 0-.42-.002l-.613.614a.298.298 0 0 0 .002.42l1.91 1.909a.5.5 0 0 0 .703.005l.265-.265L9.997 6.04a.291.291 0 0 0-.009-.408l-.614-.614a.29.29 0 0 0-.408-.009L6.278 7.697z"/>
                </g>
            </svg>`,

        "error":`<?xml version="1.0" encoding="UTF-8"?>
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m11 7h2v7h-2zm0 8h2v2h-2z"/>
                <path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"/>
            </svg>`,
    };
    options = {
        timeout: 5000,
        message: "This is a default toast message.",
        kind: "info",
        title: "HsH Toast",
        clickDismiss    : true,
        hoverDelay      : true,
    };
    me      = null;
    id      = "";
    events = {
        "start": null,
        "end": null,
        "hover":null,
        "hoverOut":null
    };
    constructor(options){
        if( options ){
            this.options    = {...options};
        }
        this.id         = this.newID();
        this.getContainer();
        this.addMe();
    }

    help(){
        console.log("[HSH_TOAST] - See options below");
        console.log(this.options);
        console.log("Events: ", this.events);
    }

    on(event,cb){
        if( !this.events.hasOwnProperty(event) ){
            console.warn(`[HSH_TOAST] - No such event as ${event}`);
            return;
        }
        this.events[event] = cb;
    }

    getContainer(){
        this.containerEl = document.querySelector(".hsh-toast-container");
        if( !this.containerEl ){
            let body = document.querySelector("body");
            body.insertAdjacentHTML("beforeend",`
                <div class="hsh-toast-container"></div>
            `);
        }
    }

    newID(idStrLen = 32) {
        var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + "_";
        idStr += (new Date()).getTime().toString(36) + "_";
        do {
            idStr += (Math.floor((Math.random() * 35))).toString(36);
        } while (idStr.length < idStrLen);
        return (idStr);
    }

    pad(number) {
        return (number < 10 ? '0' : '') + number
    }

    getTimeString(){
        var date = new Date;
        let hour = this.pad(date.getHours());
        let min = this.pad(date.getMinutes());
        let sec = this.pad(date.getSeconds());
        return `${hour}:${min}:${sec}`;
    }

    addMe(){
        let newToast = this.template;
        
        newToast = newToast.replace(
            "%ico%",
            this.kindIco[this.options.kind]
        ).replace(
            "%message%",
            this.options.message
        ).replace(
            "%id%",
            this.id
        ).replace(
            "%toastClass%",
            this.options.kind
        ).replace(
            "%title%",
            this.options.title
        ).replace(
            "%time%",
            this.getTimeString()
        )
        this.containerEl.insertAdjacentHTML("beforeend",newToast);
        this.emitEvent("start");
        this.toastEl = document.querySelector(`#${this.id}`);
        this.setHoverEvents();
        this.handleRemove();
        this.setClickEvent();
    }

    emitEvent(event){
        if( !this.events[event] ){ return; }
        this.events[event](this.id);
    }

    setClickEvent(){
        if( !this.options.clickDismiss ){ return; }
        let self = this;
        this.toastEl.addEventListener("click",function(e){
            self.remove();
        });
    }

    setHoverEvents(){
        if( !this.options.hoverDelay ){ return; }
        let self = this;
        this.toastEl.addEventListener("mouseenter",function(e){
            self.toastEl.classList.add("hovered");
            self.emitEvent("hover");
        });
        this.toastEl.addEventListener("mouseleave",function(e){
            self.toastEl.classList.remove("hovered");
            self.emitEvent("hoverOut");
        });
    }

    handleRemove(){
        let self = this;
        setTimeout(() => {
            if( self.toastEl.classList.contains("hovered") ){
                setTimeout(() => {
                    self.handleRemove();
                }, 200);
                return;
            }
            self.remove();
        }, self.options.timeout);
    }

    remove(){
        let self = this;
        this.emitEvent("end");
        self.toastEl.classList.add("out");
        setTimeout(() => {
            self.toastEl.remove();
        }, 400);
    }
};