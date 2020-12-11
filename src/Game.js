import Pokemon from "./Pokemon.js";
import {random, generateLog, $getElById, clicksCount} from "./utils.js";

const $control = document.querySelector('.control');


class Game {

    getPokemon = async () => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const body = await response.json();
        return body;
    }

    getAttack = async(player, attack, enemy) => {
        const response = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player}&attackId=${attack}&player2id=${enemy}`);
        const body = await response.json();
        return body;
    }

    getDamage = async(player, attack, enemy) => {
        const damage = await this.getAttack(player, attack, enemy);
        return damage;

    }

    startGame = async() => {
        const pokeOne = await this.getPokemon();
        console.log(pokeOne);
        const pokeTwo = await this.getPokemon();
        console.log(pokeTwo);

        const playerOne = new Pokemon({
            ...pokeOne,
            selectors: 'player1',
        });

        const playerTwo = new Pokemon({
            ...pokeTwo,
            selectors: 'player2',
        });

        this.clearButtons();

        playerOne.attacks.forEach(item =>{
            console.log(item);
            const $btn = document.createElement('button');
            $btn.classList.add('button');
            $btn.innerText = item.name;
            const btnCount = clicksCount(item.maxCount, $btn);
            $btn.addEventListener('click', async() => {
                console.log('Click button ' + $btn.innerText);
                btnCount();
                const damage =  await this.getDamage(playerOne.id, item.id, playerTwo.id);
                playerTwo.changeHP(damage.kick['player2'],
                function(count){
                    console.log(generateLog(playerOne, playerTwo, count));
                });
                playerOne.changeHP(damage.kick['player1'],
                function(count){
                    console.log(generateLog(playerTwo, playerOne, count));
                });

                if (playerTwo.hp.current === 0){
                    alert(playerOne.name + ' has won!');
                    this.clearButtons();
                    this.initGame();
                }

                if (playerOne.hp.current === 0){
                    alert(playerTwo.name + ' has won!');
                    this.clearButtons();
                    this.initGame();
                }

                
            })
            $control.appendChild($btn);
        
        })
    }

    clearButtons = () => {
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach($item => $item.remove());
    }

    initGame = () => {
        const $btnStart = document.createElement('button');
        $btnStart.classList.add('button');
        $btnStart.innerText = 'Let the game begin!';
        $control.appendChild($btnStart);
        $btnStart.addEventListener('click', ()=>{this.startGame()}); 
    }

}

export default Game;