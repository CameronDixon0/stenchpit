let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.onload = () => {
    let cc = document.querySelector(".cursor-circle");
    let cc2 = document.querySelector(".cursor-circle-2");

    cc.style.top = window.innerHeight + "px";
    cc.style.left = window.innerWidth + "px";

    cc2.style.top = window.innerHeight + "px";
    cc2.style.left = window.innerWidth + "px";

    document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    document.onmouseleave = () => {
        cc.style.opacity = 0;
        cc2.style.opacity = 0;
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;
    }

    document.onmouseenter = () => {
        cc.style.opacity = 1;
        cc2.style.opacity = 1;
    }

    setTimeout(() => {loop()}, 4300);
}

function loop() {
    let cc = document.querySelector(".cursor-circle");
    let cc2 = document.querySelector(".cursor-circle-2");

    cc.style.top = mouseY - 7.5 + "px";
    cc.style.left = mouseX - 7.5 + "px";
    if (cc2.style.top.split("px")[0] < 0 && mouseY > 0) {
        cc2.style.top = mouseY - 15 + "px";
        cc2.style.left = mouseX - 15 + "px";
    }
    let speed = 0.2;
    cc2.style.top = (1 - speed) * cc2.style.top.split("px")[0] + speed * (mouseY - 15) + "px";
    cc2.style.left = (1 - speed) * cc2.style.left.split("px")[0] + speed * (mouseX - 15) + "px";

    let svg = document.querySelector(".stench-pit-svg");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dist = 30;
    svg.style.top = `calc(${(1 - cc2.style.top.split("px")[0] / height - 0.5) * dist}px + 50%)`;
    svg.style.left = `calc(${(1 - cc2.style.left.split("px")[0] / width - 0.5) * dist}px + 50%)`;

    requestAnimationFrame(loop);
}