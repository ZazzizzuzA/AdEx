import "./styles/styles";
import "./controller/ctrl.js";

let commer1 = document.getElementById('ad1'),
    commer2 = document.getElementById('ad2'),
    body = document.getElementsByTagName('body')[0],
    position,
    allCommer = Array.from(document.getElementsByClassName('ad'));

commer1.setAttribute( "style", "position: absolute; top: calc(50vh - 200px + 20vh); left: 0; display: block");
commer2.setAttribute( "style", "position: absolute; top: calc(50vh - 200px + 20vh); right: 0; display: block");

window.onscroll = (event) => {

    position = window.pageYOffset;

    if (window.outerWidth > 768 && window.innerWidth > 768) {
        if (position >= 140) {
            commer1.setAttribute( "style", "position: fixed; top: calc(50vh - 200px); left: 0; display: block");
            commer2.setAttribute( "style", "position: fixed; top: calc(50vh - 200px); right: 0; display: block");
        }
        if (position < 140) {
            commer1.setAttribute( "style", "position: absolute; top: calc(50vh - 200px + 20vh); left: 0; display: block");
            commer2.setAttribute( "style", "position: absolute; top: calc(50vh - 200px + 20vh); right: 0; display: block");
        }
    }
};
if (window.outerWidth <= 768 || window.innerWidth <= 768) {
    allCommer.forEach( (item) => {
        item.style.display = "none"
    })
    console.log(window.outerWidth);
    
};
window.onresize = () => {
    if (window.innerWidth <= 768 || window.outerWidth <= 768) {
        allCommer.forEach( (item) => {
            item.style.display = "none"
        })
    } else if (window.innerWidth > 768 || window.outerWidth > 768) {
        commer1.setAttribute( "style", "position: absolute; top: calc(50vh - 200px + 20vh); left: 0; display: block");
        commer2.setAttribute( "style", "position: absolute; top: calc(50vh - 200px + 20vh); right: 0; display: block");
    }
}
console.log(window.outerWidth);


