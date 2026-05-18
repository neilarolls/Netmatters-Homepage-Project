// **************************************************************
// ***  Make sure the main element has relative positioning.  ***
// **************************************************************

$("main").css({"position":"relative"});

// ********************************************************
// ***   Variables to track the status of the menu.     ***
// ********************************************************

let bmOpen = false;
let bmClosed = true;

// ********************************************************
// ***   Event listener on Menu Button toggles menu     ***
// ***   open/closed. Also scrollbars are toggled here. ***
// ********************************************************

$("#contact-burger-btn").on("click", function() {
    if (bmClosed) {
        bmClosed = false;
        bmOpen = true;
        $("#sidemenu-desktop").css({"overflow-y":"scroll"});
        bmOpenMenu();
    } else {
        bmOpen = false;
        bmClosed = true;
        bmCloseMenu();
        $("#sidemenu-desktop").css({"overflow-y":"hidden"});
    }
})

// ********************************************************
// ***   Animate the opening and closing of the menu    ***
// ********************************************************

function bmOpenMenu() {

    $("main").animate({"right":"335px"}, 300, "swing");

}

function bmCloseMenu() {

    $("main").animate({"right":"0"}, 300, "swing");

}

// const clientHoverIntervalID = setInterval(getZones, 10);