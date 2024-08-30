document.addEventListener('DOMContentLoaded', () => {

    var typed = new Typed('#animated-text',{
        strings: ["Aspiring Full Stack Developer.", "I create interactive websites."],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        showCursor: false
    });
});

var tablinks = document.getElementsByClassName("tab_link");
var tabcontents = document.getElementsByClassName("tab_content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active_content");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active_content");
}

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-50%';
}