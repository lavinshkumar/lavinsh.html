let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px"; // start closed

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px"; // open
    } else {
        menuList.style.maxHeight = "0px"; // close
    }
}

// circle skill

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"));
    const percent = parseInt(elem.getAttribute("data-percent"));
    const marked = Math.floor(dots * percent / 100);
    const rotate = 360 / dots;

    let points = "";

    for (let i = 0; i < dots; i++) {
        let isMarked = i < marked ? 'marked' : '';
        points += `<div class="points ${isMarked}" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointElems = elem.querySelectorAll('.points');
    for (let i = 0; i < marked; i++) {
        pointElems[i].classList.add('marked');
    }
});

// active menu

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbars

const navbar = document.querySelector("navbar");
window.addEventListener("scroll", function() {
    navbar.classList.toggleMenu("sticky", this.window.scrollY);
})