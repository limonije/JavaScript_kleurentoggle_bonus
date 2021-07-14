const hamburger = document.querySelector(".btn-toggle-nav");

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar span");
    const bodyElement = document.body;
    const tekst = document.getElementById("text");
    const home = document.getElementById("home");
    const rood = document.getElementById("red");
    const oranje = document.getElementById("orange");
    const geel = document.getElementById("yellow");
    const groen = document.getElementById("green");
    const blauw = document.getElementById("blue");
    const indigo = document.getElementById("indigo");
    const violet = document.getElementById("violet");
    
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "200px";
    getSidebarLinks.forEach(element => element.style.opacity = "1");
            
    home.addEventListener("click", function() {bodyElement.style.background = "#f1f1f1", tekst.textContent = "GRIJS",  getSidebar.style.width = "0px"});
    rood.addEventListener("click", function() {bodyElement.style.background = "red", tekst.textContent = "ROOD",  getSidebar.style.width = "0px"});
    oranje.addEventListener("click", function() {bodyElement.style.background = "orange", tekst.textContent = "ORANJE",  getSidebar.style.width = "0px"});
    geel.addEventListener("click", function() {bodyElement.style.background = "yellow", tekst.textContent = "GEEL", getSidebar.style.width = "0px"});
    groen.addEventListener("click", function() {bodyElement.style.background = "green", tekst.textContent = "GROEN", getSidebar.style.width = "0px"});
    blauw.addEventListener("click", function() {bodyElement.style.background = "blue", tekst.textContent = "BLAUW", getSidebar.style.width = "0px"});
    indigo.addEventListener("click", function() {bodyElement.style.background = "indigo", tekst.textContent = "INDIGO", getSidebar.style.width = "0px"});
    violet.addEventListener("click", function() {bodyElement.style.background = "violet", tekst.textContent = "VIOLET", getSidebar.style.width = "0px"});
    hamburger.addEventListener("mouseleave", function() {getSidebar.style.width = "0px", tekst.textContent = ""});
}   
    
hamburger.addEventListener("mouseover", toggleNav)

// Add event listener on keypress
document.addEventListener('keypress', (event) => {
    let name = event.key;
    let code = event.code;
    const bodyElement = document.body;
    const tekst = document.getElementById("text");
    // Alert the key name and key code on keydown
    if (name == 1) {
        bodyElement.style.background = "#f1f1f1";
        tekst.textContent = "GRIJS";}
    }, false);

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement2 = document.body;
        const tekst2 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 2) {
            bodyElement2.style.background = "red";
            tekst2.textContent = "ROOD";}
        }, false);

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement3 = document.body;
        const tekst3 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 3) {
            bodyElement3.style.background = "orange";
            tekst3.textContent = "ORANJE";}
        }, false);

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement4 = document.body;
        const tekst4 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 4) {
            bodyElement4.style.background = "yellow";
            tekst4.textContent = "GEEL";}
        }, false);

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement5 = document.body;
        const tekst5 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 5) {
            bodyElement5.style.background = "green";
            tekst5.textContent = "GROEN";}
        }, false);

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement6 = document.body;
        const tekst6 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 6) {
            bodyElement6.style.background = "blue";
            tekst6.textContent = "BLAUW";}
        }, false);

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement7 = document.body;
        const tekst7 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 7) {
            bodyElement7.style.background = "indigo";
            tekst7.textContent = "INDIGO";}
        }, false);    

    document.addEventListener('keypress', (event) => {
        let name = event.key;
        let code = event.code;
        const bodyElement8 = document.body;
        const tekst8 = document.getElementById("text");
        // Alert the key name and key code on keydown
        if (name == 8) {
            bodyElement8.style.background = "violet";
            tekst8.textContent = "VIOLET";}
        }, false); 

