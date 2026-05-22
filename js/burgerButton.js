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
        $("main").removeClass('menu-closed');
        bmOpenMenu();
        
    } else {                                                // With the page non-responsive this shouldn't occur. Still, who knows....
        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
        $("main").removeClass('menu-open');
        $("main").addClass('menu-closed');
    }
})

$(document).on("click", function(e) {

    e.preventDefault();

    const currentLeft = $("body").position().left;
    let currentWidth = window.innerWidth;
    const mouseX = currentWidth - e.clientX - 16; // Can I get the scrollbar width precisely, assuming that is what I am accounting for?


    // console.log(mouseX);

    if ((currentWidth >= 992 && currentLeft === -350 && mouseX > 350)) {

        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
        $("main").removeClass('menu-open');
        $("main").addClass('menu-closed');

    }

    if (currentWidth < 992 && currentLeft === -275 && mouseX > 275) {

        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $(".sidemenu-both").css({"overflow-y":"hidden"});
        $("main").removeClass('menu-open');
        $("main").addClass('menu-closed');

    }
})

// ********************************************************
// ***   Animate the opening and closing of the menu    ***
// ********************************************************



function bmLineToCross() {
    $("#contact-burger-top").css({"transition":"transform 0.15s linear","transform":"rotate(45deg)"});
    $("#contact-burger-middle").css({"transition":"transform 0.15s linear","transform":"rotate(45deg)"});    
    $("#contact-burger-bottom").css({"transition":"transform 0.15s linear","transform":"rotate(-45deg)"});
}

function bmlineToLines() {

    $("#contact-burger-top").delay(150).animate({"top":"-3px"}, 150);
    $("#contact-burger-bottom").delay(150).animate({"top":"-3px"}, 150);
}

function animBurgerOpen() {

    $("#contact-burger-top").animate({"top":"7px"}, 150);
    $("#contact-burger-bottom").animate({"top":"-12px"}, 150, bmLineToCross);
}

function animBurgerClose() {
    $("#contact-burger-top").css({"transition":"transform 0.15s linear","transform":"rotate(0deg)"});
    $("#contact-burger-middle").css({"transition":"transform 0.15s linear","transform":"rotate(0deg)"});
    $("#contact-burger-bottom").css({"transition":"transform 0.15s linear","transform":"rotate(0deg)"});
    bmlineToLines();
}




function bmOpenMenu() {

    let currentWidth = window.innerWidth;

    if (currentWidth >= 992) {
        $("body").animate({"right":"350px"}, 300, "swing");
    } else {
        $("body").animate({"right":"275px"}, 300, "swing");
    }

    animBurgerOpen();
}

function bmCloseMenu() {

    $("body").animate({"right":"0"}, 300, "swing");

    animBurgerClose();
}

// const clientHoverIntervalID = setInterval(getZones, 10);