$(document).ready(function () {

    $(".service").click(function () {
        $(this).toggleClass("expand underline");
        $(this).next(".hiddensection").toggleClass("shown");
        $(this).closest(".services-list-element").toggleClass("opened");


        // If the section is now visible, scroll to it
        if ($(this).next(".hiddensection").hasClass("shown")) {
            setTimeout(() => {
                $(this).next(".hiddensection")[0].scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
    });

    $("#menu").click(function () {
        $(this).toggleClass("expanded");
    });


});

function switchTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    themeLink.href = `styles.defaults.${theme}.css`; // e.g., styles.dark.css
}