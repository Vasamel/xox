const content = document.querySelector('.content');
const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

const stepX = [];
const stepO = [];

let markup = '';
let player = 'X';

for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
}

content.insertAdjacentHTML('beforeend', markup)
content.addEventListener('click', onClick);

function onClick(evt) {
    // console.log(evt.target);
    if (!evt.target.classList.contains('item')) {
        return;
    }
    console.log('this', evt.target.textContent);
    if (evt.target.textContent) {
        return;
    }

    const currentID = Number(evt.target.dataset.id);
    // console.log(currentID);

    let result = false;

    if (player === "X") {
        stepX.push(currentID)
        result = isWinner(stepX);
        // console.log(result);
        // console.log("stepX", stepX);
    } else {
        stepO.push(currentID)
        result = isWinner(stepO);
        // console.log(result);
        // console.log("stepO", stepO);
    }

    evt.target.textContent = player;

    if (result) {
        chemp(player)
        return;
    }


    player = player === "X" ? "O" : "X";
}

function chemp(player) {
    setTimeout(() => { alert(player)  }, 300)
}

function isWinner(arr) {
    return wins.some(item => item.every(id => arr.includes(id)))
}


