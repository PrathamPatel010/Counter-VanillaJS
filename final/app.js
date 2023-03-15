// setting initial count
let count = 0;

// select value and buttons
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(function(btn) {
    // adding event listener and using event object
    btn.addEventListener('click', function(e) {
        // using even object : whichever button was pressed, just give me all classes it contain
        let styles = e.currentTarget.classList;

        // this is just for testing:
        // console.log(styles)

        // logic of changing the value
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else {
            count++;
        }
        // changing the text value in UI
        value.textContent = count;

        if (count > 0) {
            value.style.color = "#22c55e";
        } else if (count == 0) {
            value.style.color = "#222";
        } else {
            value.style.color = "#dc2626";
        }
    })
})