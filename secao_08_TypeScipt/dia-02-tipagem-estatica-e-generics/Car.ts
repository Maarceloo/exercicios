class Car {
    brand: string;
    color: string;
    doors: number;

    constructor(brand: string, color: string, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk(): void {
        console.log('buzina');
    }

    turnOn(): void {
        console.log('Ligar');
    }
    
    turnOff(): void {
        console.log('Desligar');
    }
    speedUp(): void {
        console.log('Acelerar');
    }

    speedDown(): void {
        console.log('reduz a velocidade');
    }

    stop(): void {
        console.log('parar');
    }
    
    turn(direction: string): void {
        console.log(`virando para a ${direction}`);
    }
};

export default Car;