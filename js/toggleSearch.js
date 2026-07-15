$(document).ready(function () {

    let searchbarShown = false;
    const contactSubmitButton = document.getElementById("contact-submit-btn");
    const headerContactButton = document.getElementById("header-contact-button");
    const headerSupportButton = document.getElementById("header-support-button");
    const headerSearchBar = document.getElementById("search-input");

    contactSubmitButton.addEventListener("click", function (e) {

        e.preventDefault();

        const currentWidth = window.innerWidth;

        if (!searchbarShown && currentWidth >= 992 && currentWidth < 1260) {

            $(headerContactButton).fadeOut(150);
            $(headerSupportButton).fadeOut(150, function () {

                $(headerSearchBar).fadeIn(150);
                $(headerSearchBar).focus();

            });

            searchbarShown = true;

        } else if (searchbarShown && currentWidth >= 992 && currentWidth < 1260) {

            $(headerSearchBar).fadeOut(150, function () {

                $(headerContactButton).fadeIn(150);
                $(headerSupportButton).fadeIn(150);

            });

            searchbarShown = false;

        }

    });

});