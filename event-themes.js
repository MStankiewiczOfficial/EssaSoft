var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(month, day);

function addPride() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'events/pride.css';
    link.classList.add('specialTheme');
    document.head.appendChild(link);
}

function addHalloween() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'events/halloween.css';
    link.classList.add('specialTheme');
    document.head.appendChild(link);
}

function addChristmas() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'events/christmas.css';
    link.classList.add('specialTheme');
    document.head.appendChild(link);
}

function checkDate() {
    if (month == 6 && day >= 1 && day <= 30) {
        addPride();
    }
    if (month == 10 && day >= 1 && day <= 31) {
        addHalloween();
    }
    if (month == 12 && day >= 1 && day <= 26) {
        addChristmas();
    }
}

function disableTheme() {
    var link = document.querySelector('.specialTheme');
    if (link) {
        link.remove();
    }
}

checkDate();