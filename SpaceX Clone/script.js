/* The code is declaring and initializing variables using the `const` and `let` keywords. */
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay')
const menu = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter')
let scrollStarted = false

/* The code `btn.addEventListener('click', navToggle)` is adding an event listener to the `btn`
element. When the button is clicked, it will call the `navToggle` function. */
btn.addEventListener('click', navToggle);
document.addEventListener('scroll',scrollPage)


/**
 * The `navToggle` function toggles the visibility of a navigation menu and applies corresponding CSS
 * classes to elements.
 */

function navToggle() {
    /* The code `btn.classList.toggle('open')` is toggling the presence of the CSS class 'open' on the
    `btn` element. If the class is already present, it will be removed. If it is not present, it
    will be added. */
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}
/**
 * The function `scrollPage` checks the scroll position of the window and performs certain actions
 * based on the scroll position.
 */
function scrollPage() {
    /* `const scrollPos = window.scrollY` is assigning the current vertical scroll position of the
    window to the variable `scrollPos`. The `window.scrollY` property returns the number of pixels
    that the document is currently scrolled vertically. */
    const scrollPos = window.scrollY

    if(scrollPos>100 && !scrollStarted){
        countUp();
        scrollStarted = true
    } else if (scrollPos<100 && scrollStarted){
        reset();
        scrollStarted = false
    }
}

function countUp() {
    counters.forEach((counter)=>{
        counters.innerText = '0'

        const updateCounter = ()=>{
            //Get count target
            const target = +counter.getAttribute('data-target')
            //Get current counter value
            const c = +counter.innerText
            //create an increment  
            const increment = target/100
            //If counter is less than target, add increment
            if(c < target){
                //Round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter,15)
            } else{
                counter.innerText = target;
            } 
        }

        updateCounter();
    })
}

function reset() {
    counters.forEach((counter)=> (counter.innerHTML = '0'))
}
