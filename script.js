var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
    setTimeout(() => popupbox.classList.add("active"), 10);
});

var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.classList.remove("active");
    setTimeout(() => (popupbox.style.display = "none"), 400);
});


var container = document.querySelector(".container");
var addgame = document.getElementById("add-game");
var gametitleinput = document.getElementById("game-title-input");
var gamefounderinput = document.getElementById("game-founder-input");
var gamereviewinput = document.getElementById("game-review-input");

addgame.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "game-container");
    div.innerHTML = `
        <h2>${gametitleinput.value}</h2>
        <h5>${gamefounderinput.value}</h5>
        <p>${gamereviewinput.value}</p>
        <button onclick="deletebox(event)">Delete</button>`;
    container.appendChild(div);
    popupoverlay.style.display = "none";
    popupbox.classList.remove("active");
    setTimeout(() => (popupbox.style.display = "none"), 400);
});


function deletebox(event) {
    var element = event.target.parentElement;
    element.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => element.remove(), 500);
}

document.getElementById('search-input').addEventListener('input', function() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let gameContainers = document.querySelectorAll('.game-container');

    gameContainers.forEach(function(game) {
        let gameTitle = game.querySelector('h2').textContent.toLowerCase();
        if (gameTitle.includes(searchInput)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});

function deletebox(event) {
    event.target.parentElement.style.display = 'none';
}
document.getElementById('search-input').addEventListener('input', function() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let gameContainers = document.querySelectorAll('.game-container');

    gameContainers.forEach(function(game) {
        let gameTitle = game.querySelector('h2').textContent.toLowerCase();
        if (gameTitle.includes(searchInput)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});

document.getElementById('add-popup-button').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'block';
    document.querySelector('.popup-box').style.display = 'block';
});

document.getElementById('cancel-popup').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup-box').style.display = 'none';
});

document.getElementById('add-game-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('game-title-input').value;
    let founder = document.getElementById('game-founder-input').value;
    let review = document.getElementById('game-review-input').value;
    let imageFile = document.getElementById('game-image-input').files[0];

    if (title && founder && review) {
        let newGameContainer = document.createElement('div');
        newGameContainer.classList.add('game-container');

        let gameImage = imageFile ? URL.createObjectURL(imageFile) : 'default-image.jpg';

        newGameContainer.innerHTML = `
            <img src="${gameImage}" alt="${title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
            <h2>${title}</h2>
            <h5>${founder}</h5>
            <p>${review}</p>
            <button onclick="deletebox(event)">Delete</button>
        `;

        document.getElementById('game-container').appendChild(newGameContainer);
        document.querySelector('.popup-overlay').style.display = 'none';
        document.querySelector('.popup-box').style.display = 'none';
    }
});

function deletebox(event) {
    event.target.closest('.game-container').remove();
}

