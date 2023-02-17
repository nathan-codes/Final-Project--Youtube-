const menuIcon = $("#toggle-button");
const sideNav = $("#sideNav");




menuIcon.click(
    function () {
        sideNav.toggleClass("small-nav");
        sideNavTab.toggleClass("no-display");
    }
)