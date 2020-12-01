
class Selectors {
    constructor(name){
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elName = document.getElementById(`name-${name}`);
        this.elAvatar = document.getElementById(`img-${name}`);
    }
}

class Pokemon extends Selectors{
    constructor({id, name, hp, selectors, img, attacks = []}){
        super(selectors);
        this.name = name;
        this.hp = {
            current : hp,
            total: hp,
        };
        this.attacks = attacks,
        this.img = img,
        this.id = id,
        this.renderHP();
        this.renderName();
        this.renderAvatar();
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
        const percentage  = current / (total / 100);
        elProgressbar.style.width = percentage + '%';
    }

    renderName = () => {
        const { name, elName } = this;
        elName.innerText = name;
    }
    
     renderAvatar = () => {
        const { img, elAvatar } = this;
        elAvatar.src = img;
    } 
}

export default Pokemon;
