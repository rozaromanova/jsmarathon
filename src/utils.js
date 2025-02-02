function random(max, min = 0){
    const num = max - min;
    return Math.ceil(Math.random()*num) + min;
}

function generateLog(firstPerson, secondPerson, count){
    const {name, hp : {current, total}} = firstPerson;
    const {name : enemyName} = secondPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. Урон ${count}, HP ${current} `,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага.  Урон ${count}, HP ${current}`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил.  Урон ${count}, HP ${current}`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар.  Урон ${count}, HP ${current}`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон ${count}, HP ${current}`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. Урон ${count}, HP ${current}`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар.  Урон ${count}, HP ${current}`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника  Урон ${count}, HP ${current}`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника.  Урон ${count}, HP ${current}`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику.  Урон ${count}, HP ${current}`
    ];
    return logs[random(logs.length) - 1];
}

function $getElById(id){
    return document.getElementById(id);
}

function clicksCount(count = 6, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;
    return function(max) {
        count--;
        el.innerText = `${innerText} (${count})`;
        if (count === 0){
            el.disabled = true;
        }
        return count;
    };
}

function renderLog(log){
    const $logEntry = document.createElement('p');
    $logEntry.innerText = log;
    $logs.insertBefore($logEntry, $logs.children[0]);
}

export {random, generateLog, $getElById, clicksCount}