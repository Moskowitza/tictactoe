function Square(pick) {
    this.XO = "",
        this.played = false,
        this.state = function () {
            if (this.played) {
                return this.XO;
            }
        },
        this.isPicked = fuction(pick){
        if (pick === this.XO) {
            this.played = true;
        };
    }
}
function Board() {
    // the board is made up of 9 squares
    this.boardArr = fuction(){
        for (i = 0; i < 9; i++){
            var square = new Square(pick)
        }
    },
}
var positionsArr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
for (i = 0; i < positionsArr.length; i++) {
    pick = positionsArr[i];
}
console.log(square);
new board = new Board();
console.log(board);