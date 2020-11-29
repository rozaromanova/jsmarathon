import Pokemon from "./Pokemon.js";
import {random, generateLog, $getElById, clicksCount} from "./utils.js";
import { pokemons } from "./pokemons.js"

const $control = document.querySelector('.control');

const pokeOne = pokemons[Math.floor(Math.random() * pokemons.length)];
const pokeTwo = pokemons[Math.floor(Math.random() * pokemons.length)];

const playerOne = new Pokemon({
    ...pokeOne,
    selectors: 'player1',
});

const playerTwo = new Pokemon({
    ...pokeTwo,
    selectors: 'player2',
});

function gameStart(){

    const $btnStart = document.createElement('button');
    $btnStart.classList.add('button');
    $btnStart.innerText = 'Let the game begin!';
    $control.appendChild($btnStart);
    $btnStart.addEventListener('click', ()=>{gameRun()});

}

function clearButtons(){

    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach($item => $item.remove());
}

function gameRun(){

    clearButtons();

    playerOne.attacks.forEach(item =>{
        console.log(item);
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = item.name;
        const btnCount = clicksCount(item.maxCount, $btn);
        $btn.addEventListener('click', ()=>{
            console.log('Click button ' + $btn.innerText);
            btnCount();
            playerTwo.changeHP(random(item.maxDamage, item.minDamage),
            function(count){
                console.log(generateLog(playerOne, playerTwo, count));
            });
            if (playerTwo.hp.current === 0){
                alert(playerOne.name + ' has won!');
                clearButtons();
                gameStart();
            }
        })
        $control.appendChild($btn);
    
    })

/*     playerTwo.attacks.forEach(item =>{
        console.log(item);
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = item.name;
        const btnCount = clicksCount(item.maxCount, $btn);
        $btn.addEventListener('click', ()=>{
            console.log('Click button ' + $btn.innerText);
            btnCount();
            playerOne.changeHP(random(item.maxDamage, item.minDamage),
            function(count){
                console.log(generateLog(playerTwo, playerOne, count));
            });
            if (playerOne.hp.current === 0){
                alert(playerTwo.name + 'has won!');
            }
        })
        $control.appendChild($btn);
    })  */

    const $btnPlayer2 = document.createElement('button');
    $btnPlayer2.classList.add('button');
    $btnPlayer2.innerText = playerTwo.attacks[0].name;
    const btnPlayerTwoCount = clicksCount(playerTwo.attacks[0].maxCount, $btnPlayer2);
    $btnPlayer2.addEventListener('click', ()=>{
    console.log('Click button ' + $btnPlayer2.innerText);
    btnPlayerTwoCount();
    playerOne.changeHP(random(playerTwo.attacks[0].maxDamage, playerTwo.attacks[0].minDamage),
        function(count){
            console.log(generateLog(playerTwo, playerOne, count));
        });
            if (playerOne.hp.current === 0){
                alert(playerTwo.name + 'has won!');
            }
        })
        $control.appendChild($btnPlayer2);
    
}

gameStart();



 
// const $logs = $getElById('logs');

   












