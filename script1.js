let blocks = document.querySelectorAll('.block')
let counter = 0;
let player;
let remainingMoves = true;
let xPlayerMoves = [];
let oPlayerMoves = [];
let resetBtn = document.getElementById("reset-btn");
blocks.forEach(block => {
    block.addEventListener('click', function (e) {
        turnRotation(e, this.id)
        if (remainingMoves === false) {
            alert("Tie: Reset the Board!")
        };
    })
})
resetBtn.addEventListener("click", () => {
    location.reload();
    alert("Game Reset!")
});
function turnRotation(event, blockId) {
    if (event.target.textContent === "") {
        if (counter % 2) {
            console.log("O's Turn", oPlayerMoves);
            event.target.textContent = "O"
            counter++;
            player = "O";
            oPlayerMoves.push(blockId);
            winningCombos.forEach(combo => {
                winCheck(oPlayerMoves, combo, player)
            });
            return true;
        } else {
            console.log("X's Turn", xPlayerMoves);
            event.target.textContent = "X"
            counter++;
            player = "X";
            xPlayerMoves.push(blockId);
            winningCombos.forEach(combo => {
                winCheck(xPlayerMoves, combo, player)
            });
            return false;
        }
    }
};
function winCheck(playerMovesArray, winningCombosArray, playerIndicator) {
    if (winningCombosArray.every(combo => playerMovesArray.includes(combo)) === true) {
        alert(`${playerIndicator} player wins!`);
        location.reload();
        return true;
    }
    else {
        if (counter === 9) {
            remainingMoves = false;
        }
        return false;
    }
};
var winningCombos = [
    ["block_0", "block_1", "block_2"],
    ["block_3", "block_4", "block_5"],
    ["block_6", "block_7", "block_8"],
    ["block_0", "block_3", "block_6"],
    ["block_1", "block_4", "block_7"],
    ["block_2", "block_5", "block_8"],
    ["block_0", "block_4", "block_8"],
    ["block_2", "block_4", "block_6"]
];