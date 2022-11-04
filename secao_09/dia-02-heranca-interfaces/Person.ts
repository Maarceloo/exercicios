export default class Person {
    _name: string;
    _birthDate: string;

    constructor(name: string, birthDate: string) {
        if (name.length >= 3) {
            this._name = name
        };
        this._birthDate = birthDate;
    }

    get name() {
        return this._name
    }

    get birthDate() {
        return this._birthDate
    }

    set name(newName: string) {
        this._name = newName
    }

    set birthDate(newBirthDate: string) {
        this._birthDate = newBirthDate
    }
}

const p1 = new Person('Marcelo', '1997');
console.log(p1.name);
