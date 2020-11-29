import Pokemon from "./Pokemon.js";
import {random, generateLog, $getElById, clicksCount} from "./utils.js";

const $btn = $getElById('btn-kick');
const $logs = $getElById('logs');
const $btnBreak = $getElById('btn-break');
const countKick = clicksCount();
const countBreak = clicksCount();

const playerOne = new Pokemon({
    name: 'Pikachu',
    hp: 100, 
    selectors: 'character',
});

console.log(playerOne);

const playerTwo = new Pokemon({
    name: 'Charmander',
    hp: 100, 
    selectors: 'enemy',
});

console.log(playerTwo);

$btn.addEventListener('click', function(){
    console.log('kicked!');
    const kicksLeft = countKick(4);
    if (kicksLeft <= 0){
        this.disabled = true;
    }
    this.innerHTML = `Kicks left (${kicksLeft})`
    playerOne.changeHP(random(20), function(count){
        console.log(generateLog(playerOne, playerTwo, count));
    });
    playerTwo.changeHP(random(20));
    
})

$btnBreak.addEventListener('click', function(){
    console.log('break!');
    const breaksLeft = countBreak(3);
    if (breaksLeft <= 0){
        this.disabled = true;
    };
    this.innerHTML = `Breaks left (${breaksLeft})`;
});





