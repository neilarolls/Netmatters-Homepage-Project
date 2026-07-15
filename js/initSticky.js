$(document).ready(function() {

// *************************************************
// ***    Declare flag and tracking variables    ***
// *************************************************

    let previousScrollIndex = 0;
    let stickyTimer = 0;
    const headerContact = document.getElementById("contact-sticky-target");
    const headerOriginalTop = headerContact.offsetTop;

// ****************************************************
// ***   updateSticky() toggles the sticky header   ***
// ***   at the right times by reading the page Y   ***
// ***   index and comparing to the previous index. ***
// ***   If you're going up and still finish past   ***
// ***   the bottom of the header, it's popped      ***
// ***   open. If you then scroll down when it is   ***
// ***   open it hides it. Moving to the top        ***
// ***   reattaches the header.                     ***
// ****************************************************

    function makeSticky(animate) {

        let currentScrollY = window.scrollY;
        let headerYMax = document.getElementById("container-contact").offsetHeight;

        if (window.innerWidth >= 992) {

            headerYMax += document.getElementById("container-dropdown").offsetHeight;
        }

        if (!($("#filler-block").length)) {
        
            $("main").prepend(`<div id="filler-block" style="display:block;width:100%;height:${headerYMax}px"></div>`);
        }

        if (animate) {

            $("#contact-sticky-target").css({"z-index":"5","position":"absolute", "top":`${(currentScrollY - headerOriginalTop) - headerYMax}px`, "left":"0", "width":"100vw"});


            $("#contact-sticky-target").delay(150).animate({"top":`${currentScrollY - headerOriginalTop}px`}, 300);

        } else {
            

            $("#contact-sticky-target").css({"z-index":"5","position":"absolute", "top":`${(currentScrollY - headerOriginalTop) - headerYMax}px`, "left":"0", "width":"100vw"});

            $("#contact-sticky-target").delay(300).animate({"top":`${currentScrollY - headerOriginalTop}px`}, 1);

        }

        console.log(`currentScrollY:    ${currentScrollY}`);
        console.log(`window.scrollY:    ${window.scrollY}`);
        console.log(`headerYMax:        ${headerYMax}`);
        console.log(`headerOriginalTop: ${headerOriginalTop}`);
    }

    function makeUnsticky(animate = true) {

        let headerYMax = document.getElementById("container-contact").offsetHeight;

        if (window.innerWidth >= 992) {

            headerYMax +=  document.getElementById("container-dropdown").offsetHeight;
        }

        if (animate) {

            $("#contact-sticky-target").delay(150).animate({"top":`-${headerYMax}px`}, 300, function() {

                $("#contact-sticky-target").css({"z-index":"","position":"", "top":"", "left":"", "width":""});

                if (($("#filler-block").length)) {
                
                    $("#filler-block").remove();
                }
                
            });

        } else {
            
            $("#contact-sticky-target").css({"z-index":"","position":"", "top":"", "left":"", "width":""});

            if (($("#filler-block").length)) {
            
                $("#filler-block").remove();

            }

        }

    }

    function stickyHandler() {

        const currentScrollIndex = window.scrollY;
        const stickyYBoth = (window.innerWidth >= 992);

        let goingUp = false;
        let goingDown = false;

    // ****************************************************
    // ***   Get current total height of header area.   ***
    // ****************************************************

        let stickyYMax = document.getElementById("container-contact").offsetHeight;

        if (stickyYBoth) {

            stickyYMax += document.getElementById("container-dropdown").offsetHeight;

        }

    // ************************************
    // ***   Set goingUp or goingDown.  ***
    // ************************************

        if (currentScrollIndex < previousScrollIndex) {

            goingUp = true;

            stickyTimer = 0;            // Scrolling up resets the sticky timer so it will only close
                                        // if the page isn't scrolled for 10 seconds.

        }

        if (currentScrollIndex > previousScrollIndex) {

            goingDown = true;

        }

        // let consoleString = "";


        // console.log(currentScrollIndex);
        // consoleString += `${stickyYBoth} `;
        // console.log(goingUp);
        // console.log(goingDown);
        // consoleString += `${stickyYMax} `;

        // console.log(consoleString);



    // ************************************
    // ***  Stick or unstick the menu.  ***
    // ************************************

        if (currentScrollIndex > (stickyYMax + 50) && goingUp && !stickyOn) {

            makeSticky(true);

            stickyOn = true;
        }

        if (currentScrollIndex > stickyYMax && goingDown && stickyOn) {

            makeUnsticky(true);

            stickyOn = false;
        }

        if (currentScrollIndex === 0 && stickyOn) {

            makeUnsticky(false);

            stickyOn = false;
        }


    // ***********************************************
    // ***  If sticky is on, increment the timer.  ***
    // ***********************************************

        if (stickyOn) {

            stickyTimer++;

        } else {

            stickyTimer = 0;

        }

    // ********************************************************
    // ***  Unstick header and zero timer after 10 seconds.  **
    // ********************************************************

        // if (stickyTimer >= 1000 && stickyOn) {

        //     makeUnsticky(true);

        //     stickyOn = false;

        //     stickyTimer = 0;
        // }

    // **********************************************************************
    // ***  Store current scroll position to detect direction of scroll.  ***
    // **********************************************************************

        previousScrollIndex = currentScrollIndex;

    }

// ********************************************************
// ***  Set the loop to run every 10ms.                 ***
// ********************************************************

const stickyLoopID = setInterval(stickyHandler, 10);

});