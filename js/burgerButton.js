// ********************************************************
// ***   These vaiables track the status of the menu    ***
// ********************************************************

let bmOpen = false;
let bmClosed = true;

// ********************************************************
// ***   Event listener on Menu Button toggles menu     ***
// ***   open/closed.                                   ***
// ********************************************************

$("#contact-burger-btn").on("click", function() {
    if (bmClosed) {
        bmClosed = false;
        bmOpen = true;
        bmOpenMenu();
    } else {
        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
    }
})

function bmOpenMenu() {

    let currentWidth = window.innerWidth;

    $("main").css({"position":"relative"});
    $("main").width(currentWidth + 335);
    $("main").animate({"right":"335px"}, 300 );
    while (getComputedStyle('#side-menu-target').animationName !== 'none') {
    }

}

function bmCloseMenu() {

    let currentWidth = window.innerWidth;

    $("main").animate({"right":"0"}, 300 );

    while (getComputedStyle('#side-menu-target').animationName !== 'none') {
    }

    $("main").width(currentWidth - 335);
    $("main").css({"position":"static"});
    
}

function updatePadding() {
    let currentWidth = window.innerWidth;
    let newPadding = 0;

    if (bmOpen) {
        currentWidth -= 335;
    }

    if (currentWidth >= 1260) {
        newPadding = (currentWidth - 1200) / 2;
    } else if (currentWidth >= 992) {
        newPadding = (currentWidth - 970) / 2;
    } else if (currentWidth >= 768) {        
        newPadding = (currentWidth - 750) / 2;
    } else if (currentWidth)




    $("#welcome-container").css({"padding-left": newPadding, "padding-right": newPadding})

}
// const bbIntervalID = setInterval(updatePadding(), 10);