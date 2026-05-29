const consentKey = 'cookieConsentAccepted';

let consentGiven = localStorage.getItem(consentKey) === 'true';


if (!consentGiven) {

    $("main").addClass("dimmed");

    const cookieDialogue = document.getElementById("cookie-dialogue");

    cookieDialogue.showModal();

    $("#cookie-dialogue-accept-button").on( "click", function () {

        localStorage.setItem(consentKey, 'true');

        cookieDialogue.close();

        console.log("cookie dialogue:- cookies accepted");

        $("main").removeClass("dimmed");
    });

    $("#cookie-dialogue-change-button").on( "click", function () {

        cookieDialogue.close();

        console.log("cookie dialogue:- change settings selected");

        $("main").removeClass("dimmed");
    });
}



