// **************************************************************
// ***  Make sure the body element has relative positioning.  ***
// **************************************************************

$("body").css({"position":"relative"});

// ********************************************************
// ***   Variables to track the status of the menu.     ***
// ********************************************************

let bmOpen = false;
let bmClosed = true;

let menuDesktop = false;
let menuMobile = true;

// ********************************************************
// ***   Set menu flags according to width at start.    ***
// ********************************************************

const startingWidth = window.innerWidth;

$("#sidemenu-wrapper").css({"width":"275px"});

if (startingWidth >= 992) {
    menuDesktop = true;
    menuMobile = false;
    $("#sidemenu-wrapper").css({"width":"350px"});
}

// *********************************
// ***   Set widths of menus.    ***
// *********************************

$("#sidemenu-desktop").css({"width":"350px"});
$("#sidemenu-mobile").css({"width":"275px"});




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

        $("body").animate({"right":"350px"}, 100, "swing");
    }

    if (currentWidth < 992 && menuDesktop && bmOpen) {

        menuMobile = true;
        menuDesktop = false;

        $("body").animate({"right":"275px"}, 100, "swing");
    }

}

const sidemenuLoopID = setInterval(updateMenus, 5);



// ********************************************************
// ***   Event listener on Menu Button toggles menu     ***
// ***   open/closed. Also scrollbars are toggled here. ***
// ********************************************************

$("#contact-burger-btn").on("click", function(e) {

    e.preventDefault();

    if (bmClosed) {
        bmClosed = false;
        bmOpen = true;
        $(".sidemenu-both").css({"overflow-y":"scroll"});
        $("main").addClass('menu-open');
        bmOpenMenu();
        
    } else {
        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
        $("main").removeClass('menu-open');
    }
})

$(document).on("click", function(e) {

    e.preventDefault();

    const currentLeft = $("body").position().left;
    let currentWidth = window.innerWidth;
    const mouseX = currentWidth - e.clientX - 16;


    // console.log(mouseX);

    if ((currentWidth >= 992 && currentLeft === -350 && mouseX > 350)) {

        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
        $("main").removeClass('menu-open');

    }

    if (currentWidth < 992 && currentLeft === -275 && mouseX > 275) {

        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
        $("main").removeClass('menu-open');

    }
})

// ********************************************************
// ***   Animate the opening and closing of the menu    ***
// ********************************************************

function bmOpenMenu() {

    let currentWidth = window.innerWidth;

    if (currentWidth >= 992) {
        $("body").animate({"right":"350px"}, 300, "swing");
    } else {
        $("body").animate({"right":"275px"}, 300, "swing");
    }
}

function bmCloseMenu() {

    $("body").animate({"right":"0"}, 300, "swing");

}

// const clientHoverIntervalID = setInterval(getZones, 10);