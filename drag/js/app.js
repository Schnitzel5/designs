console.log("test");

function drag(event) {
    event.preventDefault();
    event.target.style.marginTop = (event.clientY) + "px";
    event.target.style.marginLeft = (event.clientX) + "px";
    console.log(`X ${event.clientX}   Y ${event.clientY}`);
}