# HsH_Toast
This is an ongoing toast project

Features
 - Supports HTML inside it's message
 - Read time extending on hover
 - Shows the hour:min:sec on toast
 - Dismiss on click ( if set )
 - Custom timeout
 - No dependency except the stylesheet
 - Start and End event emitting
 - help() method will print the available options and events to the console.
 - Responsive
 
TODO
 - Wrapper class for counting and regulating the amount of toast on the screen.
 - Custom Icons
 

**Usage**:


*Calling a default toast*

```js
new hshToast();
```

*Call with options*

```js
new hshToast({
    timeout: 5000,
    message: "This is a test toast with a long running text. It can be whatever you want.",
    kind: "error",
    title: "HsH Toast"
});
```

*Call with html inside*

```js
new hshToast({
    timeout: 5000,
    message: `<ul> <li>Li One</li> <li>Li Two</li> </ul>`,
    kind: "warning",
    title: "HsH Toast"
});
```

*Add event callbacks*

```js
let toast = new hshToast();

toast.on("start",function(id){
  console.log("Toast showing with id: " id);
}

toast.on("end",function(id){
  console.log("Toast dismissed with id: " id);
}
```

*Set hover delay and click dismiss*

```js
new hshToast({
    timeout: 5000,
    message: "You can not dismiss this toast with a click and it does not respond to hover.",
    kind: "success",
    title: "HsH Toast",
    clickDismiss: false,
    hoverDelay:false
});
```
