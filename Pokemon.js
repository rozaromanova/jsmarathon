
class Selectors {
    constructor(name){
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors{
    constructor({name, hp, selectors}){
        super(selectors);
        this.name = name;
        this.hp = {
            current : hp,
            total: hp,
        };

        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.hp.current -= count;
    
        if(this.hp.current < count){
            this.hp.current = 0;
        } 
    
        this.renderHP();    
        cb && cb(count);
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressBarHP();
    }
    
    renderHPLife = () => {
        const { elHP, hp : {current, total}} = this;
        elHP.innerText = current + ' / ' + total;
    }
    
    renderProgressBarHP = () => {
        const { elProgressbar, hp : {current, total}} = this;
        elProgressbar.style.width = current + '%';
    }
}

export default Pokemon;
