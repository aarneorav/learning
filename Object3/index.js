class LivingThing {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Dog extends LivingThing {}

let pontu = new Dog('Nots');
console.log(`pontu name is ${pontu.getName()}`);

class Ponts extends Dog {
    constructor(name, colorMethod) {
        super(name);
        this.colorMethod = colorMethod;
    }
    getName() {
        return `${this.name} and he's ${this.colorMethod()}`;
    }
}

let jury = new Ponts('Jury', () => {
    return 'pink';
});
console.log(`pontu smells like ${jury.getName()}`);




class Cat extends LivingThing {}

let miisu = new Cat('Vurrus');
console.log(`miisu name is ${miisu.getName()}`);

class Siamese extends Cat {
    constructor(name, color, height) {
        super(name);
        this.color = color;
        this.height = height;

        this.mjau();
        this.purr();
    }

    getHeight() {
        return `${this.name} height is ${this.height}`;
    }

    getName() {
        return `Cat's name is ${this.name} and he's ${this.color}`;
    }

    mjau() {
        console.log(`${this.name} says mjau`)
    }

    purr() {
        let rand = Math.floor((Math.random() * 10) + 1) % 2;

        if (rand === 0) {
            console.log('purr purr purr');
        }
        
    }
} 

let nurr = new Siamese('Nurr', 'brown', '20cm');
console.log(nurr.getName());
console.log(nurr.getHeight());
