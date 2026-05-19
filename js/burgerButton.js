// **************************************************************
// ***  Make sure the main element has relative positioning.  ***
// **************************************************************

$("main").css({"position":"relative"});

// ********************************************************
// ***   Variables to track the status of the menu.     ***
// ********************************************************

let bmOpen = false;
let bmClosed = true;

let menuDesktop = false;
let menuMobile = true;

// ********************************************************
// ***   Set menu flags according to width at start.     ***
// ********************************************************

const startingWidth = window.innerWidth;

if (startingWidth >= 992) {
    menuDesktop = true;
    menuMobile = false;
}


$("#sidemenu-desktop").css({"width":"335px"});
$("#sidemenu-mobile").css({"width":"260px"});




function updateMenus() {

    let currentWidth = window.innerWidth;

    
    if (currentWidth >= 992) {
        $("#sidemenu-mobile").css({"display":"none"});
        $("#sidemenu-desktop").css({"display":"block"});
    } else {
        $("#sidemenu-mobile").css({"display":"block"});
        $("#sidemenu-desktop").css({"display":"none"});
    }

    if (currentWidth >= 992 && menuMobile && bmOpen) {

        menuMobile = false;
        menuDesktop = true;

        $("main").animate({"right":"335px"}, 100, "swing");
    }

    if (currentWidth < 992 && menuDesktop && bmOpen) {

        menuMobile = true;
        menuDesktop = false;

        $("main").animate({"right":"260px"}, 100, "swing");
    }

}

const mainLoopID = setInterval(updateMenus, 10);

// ********************************************************
// ***   Event listener on Menu Button toggles menu     ***
// ***   open/closed. Also scrollbars are toggled here. ***
// ********************************************************

$("#contact-burger-btn").on("click", function() {
    if (bmClosed) {
        bmClosed = false;
        bmOpen = true;
        $(".sidemenu-both").css({"overflow-y":"scroll"});
        bmOpenMenu();
    } else {
        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
    }
})

// ********************************************************
// ***   Animate the opening and closing of the menu    ***
// ********************************************************

function bmOpenMenu() {
    let currentWidth = window.innerWidth;

    if (currentWidth >= 992) {
        $("main").animate({"right":"335px"}, 300, "swing");
    } else {        
        $("main").animate({"right":"260px"}, 300, "swing");
    }
}

function bmCloseMenu() {

    $("main").animate({"right":"0"}, 300, "swing");

}

// const clientHoverIntervalID = setInterval(getZones, 10);