let images = [
    "images/choromatsuHD.jpg",
    "images/choromatsuLake.jpeg",
    "images/choromatsuLimit.jpg",
    "images/choromatsuField.png"
];

function spawnBouncingImage() {
    let img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.width = "100px";
    img.style.position = "absolute";
    img.style.top = Math.random() * (window.innerHeight - 100) + "px";
    img.style.left = Math.random() * (window.innerWidth - 100) + "px";
    img.style.zIndex = "2000";
    document.body.appendChild(img);

    let velocityX = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1);
    let velocityY = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1);
    let posX = parseFloat(img.style.left);
    let posY = parseFloat(img.style.top);

    function bounce() {
        let windowWidth = window.innerWidth - img.clientWidth;
        let windowHeight = window.innerHeight - img.clientHeight;

        if (posX >= windowWidth || posX <= 0) velocityX *= -1;
        if (posY >= windowHeight || posY <= 0) velocityY *= -1;

        posX += velocityX;
        posY += velocityY;

        img.style.left = posX + "px";
        img.style.top = posY + "px";

        requestAnimationFrame(bounce);
    }

    bounce();
}

// Sticky Navbar on Scroll
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let headerBottom = header.offsetHeight;

    if (window.scrollY > headerBottom) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
