const febHolidays = [
    "Dear Baby, please feel it",
    "Dherai dukha garera banako hoo sanu maile ",
    "sathi pani timi mutu pani timi 😊",
    "mero 1 pani timi hau 10000 pani timi hau baby 🤩",
    "Resauni bani alli kam gar hai 🤨",
    "tha bhaye enough hunxa malai❤",
    "family paxi ko timi onlyy youu I love you❤️",
    "You're my everything ✔",
    "You are my soulmate ✨💕",
    "And of course... wait baby.....",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never multi-thread on you",
    "You're the pretties kti tara alli resauxas ra poo,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "i am always with youu 🤞✔",
    "jhyau lagxa message garna bhanxas aajai pani?💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best baby!! 💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "LOVE YOU MERO SANU",
    "LOVE YOUU MERO KANXUU💓",
    "LOVE YOUU MAYALUUUUUU, 😢",
    "MA BHANDA RAMRO RA DHANI KHOJNI HOSS KIII? TEI DAR LAGXA 🥰",
    "Timi malai enough xau talai ma perfect lagdainaaaa bhane perfect banauni hoo xodhni haina ",
    "LOVE YOUU MERO NANI ❤️",
    "This complete love cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "I'm binary in love; you're the one and only '1 in my life(coding language ho hai yo)'💓",
    "Namaste garr taile aaru khojinas bhane aafno future budaa lai  🙏",
    "You're the love of my life,",
    "I Love You So much meroo sanuu❤️"
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();

function init() {
    febHolidays.forEach((holiday, idx) => {
        const liEl = document.createElement("li");
        liEl.style.setProperty("--day_idx", idx);
        liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1}</time><span>${holiday}</span>`;
        ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
}

function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
    document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;
    newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            adjustDay(-1);
            break;
        case "ArrowDown":
            adjustDay(1);
            break;
        default:
            return;
    }
});