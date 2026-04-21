let score = 0;
let power = 1;
let prestigeLevel = 0;

// charger sauvegarde
if (localStorage.getItem("score")) {
    score = parseInt(localStorage.getItem("score"));
    power = parseInt(localStorage.getItem("power"));
}

function clickBtn() {
    score += power;
    save();
    update();
}

function buyPower() {
    if (score >= 10) {
        score -= 10;
        power++;
        save();
        update();
    }
}

function prestige() {
    if (score >= 100) {
        prestigeLevel++;
        score = 0;
        power = 1 + prestigeLevel;
        save();
        update();
    }
}

function update() {
    document.getElementById("score").innerText = score;
    document.getElementById("power").innerText = power;
}

function save() {
    localStorage.setItem("score", score);
    localStorage.setItem("power", power);
}

// gain passif
setInterval(() => {
    score += Math.floor(power / 2);
    save();
    update();
}, 1000);

update();
