import "./styles/styles";
import "./controller/ctrl.js";

let allCommer = Array.from(document.getElementsByClassName('ad')),
    commer1 = allCommer[0],
    commer2 = allCommer[1],
    body = document.getElementsByTagName('body')[0],
    position,
    existCommers = true,
    content = document.getElementsByClassName("block")[0];
    // slot1 = googletag.defineSlot('/112081842/Front-End-TA_240x400', [240, 400], "ad1"),
    // slot2 = googletag.defineSlot('/112081842/Front-End-TA2_240x400', [240, 400], 'ad2');
    // console.log(slot1);
    // console.log(slot2);

commer1.setAttribute( "style", "position: absolute; top: calc(50vh - 250px + 20vh); left: 0;");
commer2.setAttribute( "style", "position: absolute; top: calc(50vh - 250px + 20vh); right: 0;");

/*      Функция задержки      */

function throttle(func, ms) {

    var isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); 
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
    return wrapper;
  };

  /*     При изменении размера window реклама исчезает/появляется соответственно      */

// console.log(googletag.openConsole());

  window.addEventListener( "resize", throttle( function() {
 
    if (body.offsetWidth <= 768 && existCommers == true) {

      /*     googletag.destroySlots() не удаляет, хотя в консоли (googletag.openConsole()) написано, что рекламное место удалено  */

        allCommer.forEach( (item) => {
          item.style.display = "none";
        });
        googletag.destroySlots();

        content.style.width = "100%";
        existCommers = false;

    } else if (body.offsetWidth > 768 && existCommers == false) {
        existCommers = true;

        allCommer.forEach( (item) => {
          item.style.display = "block";
        });

        content.style.width = "calc(100vw - 500px)";
    }
  }, 100) );

  /*       Блоки принимают позицию fixed при скроллинге        */

  window.addEventListener( 'scroll', throttle( function() {
    position = window.pageYOffset;

    if (existCommers == true) {
        if (position >= 140) {
            commer1.setAttribute( "style", "position: fixed; top: calc(50vh - 250px); left: 0;");
            commer2.setAttribute( "style", "position: fixed; top: calc(50vh - 250px); right: 0;");
        }
        if (position < 140) {
            commer1.setAttribute( "style", "position: absolute; top: calc(50vh - 250px + 20vh); left: 0;");
            commer2.setAttribute( "style", "position: absolute; top: calc(50vh - 250px + 20vh); right: 0;");
        }
  console.log(position)
    }
}, 100), {
  passive: true
} );

/*      При запуске на маленьких экранах контент на всю ширину. Условие для скрипта рекламы записано в ДОМе.      */

if (window.outerWidth <= 768 || window.innerWidth <= 768) {

    content.style.width = "100%";
    existCommers = false;
    
};





