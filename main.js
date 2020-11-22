
function $getElById(id){
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $logs = $getElById('logs');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
    changeHP: changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,  
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
    changeHP: changeHP,
}

$btn.addEventListener('click', function(){
    console.log('kicked!')
    character.changeHP(random(20));
    enemy.changeHP(random(20));
})

function init(){
    console.log('start the game');

    character.renderHP();
    enemy.renderHP();
}

function renderHP(person){
    this.renderHPLife();
    this.renderProgressBarHP();
}

function renderHPLife(person){
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBarHP(person){
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person){
    this.damageHP -= count;

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count) ;
    
    console.log(log);
    renderLog(log);

    if(this.damageHP < count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл!');
        $btn.disabled = true;
    } 

    this.renderHP();
    

}

function random(num){
    return Math.ceil(Math.random()*num);
}

function generateLog(firstPerson, secondPerson, count){
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.  Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.  Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.  Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.  Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника  Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.  Урон ${count}, HP ${firstPerson.damageHP}`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.  Урон ${count}, HP ${firstPerson.damageHP}`
    ];
    return logs[random(logs.length) - 1];
}

function renderLog(log){
    const $logEntry = document.createElement('p');
    $logEntry.innerText = log;
    $logs.insertBefore($logEntry, $logs.children[0]);
}
init();


