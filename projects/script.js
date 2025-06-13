let current = 0;
const cards = document.querySelectorAll('.project-card');

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

document.getElementById('left-arrow').addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

document.getElementById('right-arrow').addEventListener('click', () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

showCard(current);


const BBvid = document.getElementById("bb-vid");
BBvid.currentTime = 8; 

BBvid.addEventListener("timeupdate", () => {
    if (BBvid.currentTime > 122) {
    BBvid.currentTime = 8;
    }
});

const websiteVid = document.getElementById("study-vid");
websiteVid.currentTime = 3; 

websiteVid.addEventListener("timeupdate", () => {
    if (websiteVid.currentTime > 77) {
    websiteVid.currentTime = 3;
    }
});