const firstRow = prompt('Напиши сюда первую строчку');
const secondRow = prompt('Напиши сюда вторую строчку');
const letter = prompt('Какую букву считаем?')

function getRow(firstRow, secondRow) {

    let firstRowACount = 0;
    let secondRowACount = 0;

    for(let i = 0; i < firstRow.length; i++){
        if( firstRow.charAt(i) === letter){
            firstRowACount = firstRowACount + 1;
        }
    }

    for(let j = 0; j < secondRow.length; j++){
        if(secondRow.charAt(j) === letter){
            secondRowACount = secondRowACount + 1;
        }
    }

    if(firstRowACount > secondRowACount){
        return firstRow;
    } else if (firstRowACount < secondRowACount){
        return secondRow;
    } else if (firstRowACount === secondRowACount && firstRowACount == 0){
        return 'Нет совпадений!'
    } else {
        return 'Количество ' + letter + ' в строчках равно'
    }
}

alert(getRow(firstRow, secondRow));