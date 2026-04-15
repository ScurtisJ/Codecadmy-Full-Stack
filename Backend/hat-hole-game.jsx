const prompt = require('prompt-sync')({sigint: true});

class Field {
  constructor(){
    this.playerRow = 0;
    this.playerCol = 0;
    this.play = true;
    this.field = null;
    this.percent = null;
    this.fieldHeight = null;
    this.fieldWidth = null;
  }

  gameSettings(){
    let height = 0;
    let length = 0;
    let percent = 0;
    while(height < 2  || height > 50){
       height = parseInt(prompt('What is the height of your game (2-50)'));
    }
    while(length < 2 || length > 50){
       length = parseInt(prompt('What is the width of your game (2-50)'));
    }
    while(percent < 1 || percent > 70){
      percent = parseInt(prompt('What percent of the game should be holes (1-70)'));
    }
    this.percent = percent;
    this.fieldHeight = height;
    this.fieldWidth = length;
  }
  fieldGenerator(){
    let field = [];
    for(let i = 0; i < this.fieldHeight; i++){
      let row = new Array(this.fieldWidth).fill('░');
      field.push(row);
    }
    this.field = field;
    this.field[0][0] = '*';

    let numHoles = ((this.fieldHeight * this.fieldWidth * this.percent)/100);
    let count = 0;

    let randomRow = 0;
    let randomCol = 0;
    while(randomRow == 0 && randomCol == 0){
       randomRow = Math.floor(Math.random() * this.fieldHeight);
       randomCol = Math.floor(Math.random() * this.fieldWidth);
        }
      const hatRow = randomRow;
      const hatCol = randomCol;
      this.field[randomRow][randomCol] = '^';

      randomRow = 0;
      randomCol = 0;

    while(count < numHoles){
      while(randomRow == 0 && randomCol == 0){
         randomRow = Math.floor(Math.random() * this.fieldHeight);
         randomCol = Math.floor(Math.random() * this.fieldWidth);
        }

      if(randomRow != hatRow || randomCol != hatCol){
        this.field[randomRow][randomCol] = 'O';
        count++;
        }

      randomRow = 0;
      randomCol = 0;
      }

      
    }

  locationCheck(){
    if(this.playerRow >= this.field.length || this.playerCol >= this.field[0].length || this.playerRow < 0 ||  this.playerCol < 0){
      console.log('Failed, Out of Bounds')
      this.play = false;
      } else if(this.field[this.playerRow][this.playerCol] == '^'){
      console.log('Winner, on Hat')
      this.play = false;
      } else if(this.field[this.playerRow][this.playerCol] == 'O'){
      console.log('Loser, on hole')
      this.play = false;
      } else{
      console.log("Legal Move")
      this.field[this.playerRow][this.playerCol] = '*';
      }
  }

  locationUpdate() {
    let input = '';
    while(input != 'u' && input != 'd' && input != 'l' && input != 'r'){
      input = prompt('Which way? (u/d/l/r): ');
    }
    if(input == 'u'){
      this.playerRow -= 1;
      } else if(input == 'd'){
      this.playerRow += 1;
      } else if(input == 'l'){
      this.playerCol -= 1;
      } else if(input == 'r'){
      this.playerCol += 1;
      }
  }

  print() {
    for(const row of this.field ){
      console.log(row.join(''))
    }
  }

}

const myField = new Field();
myField.gameSettings();
myField.fieldGenerator();

while(myField.play){
  myField.print();
  myField.locationUpdate();
  myField.locationCheck();
}
