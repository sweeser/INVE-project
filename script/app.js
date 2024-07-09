let lightThemeButton = document.querySelector(".theme-button-light");
let darkThemeButton = document.querySelector(".theme-button-dark");
let memberCards = document.querySelectorAll(".member-card");
let mainHeader = document.querySelector(".main-header");
let mainNavigationItems = document.querySelectorAll(".main-navigation-item");
let secondHeadings = document.querySelectorAll("h2");
let discordJoin = document.querySelector(".discord-join");
let formButtons = document.querySelectorAll(".form-button");
let discordRules = document.querySelector(".discord-rules");
let mainFooter = document.querySelector(".main-footer");
let footerNavigationItems = document.querySelectorAll(".footer-navigation-item");

lightThemeButton.onclick = function () {
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active");
    document.body.classList.remove("dark");
    mainHeader.classList.remove("dark");
    for (let secondHeading of secondHeadings) {
        secondHeading.classList.remove("dark");
    }
    for (let mainNavigationItem of mainNavigationItems) {
        mainNavigationItem.classList.remove("dark");
    }
    for (let memberCard of memberCards) {
        memberCard.classList.remove("dark");
    }
    discordRules.classList.remove("dark");
    discordJoin.classList.remove("dark");
    for (let formButton of formButtons) {
        formButton.classList.remove("dark");
    }
    mainFooter.classList.remove("dark");
    for (let footerNavigationItem of footerNavigationItems) {
        footerNavigationItem.classList.remove("dark");
    }
}

darkThemeButton.onclick = function() {
    lightThemeButton.classList.remove("active");
    darkThemeButton.classList.add("active");
    document.body.classList.add("dark");
    mainHeader.classList.add("dark");
    for (let mainNavigationItem of mainNavigationItems) {
        mainNavigationItem.classList.add("dark");
    }
    for (let secondHeading of secondHeadings) {
        secondHeading.classList.add("dark");
    }
    for (let memberCard of memberCards) {
        memberCard.classList.add("dark");
    }
    discordRules.classList.add("dark");
    discordJoin.classList.add("dark");
    for (let formButton of formButtons) {
        formButton.classList.add("dark");
    }
    mainFooter.classList.add("dark");
    for (let footerNavigationItem of footerNavigationItems) {
        footerNavigationItem.classList.add("dark");
    }
}