import { Castle } from './game/castle';

export class Player {
    money: number;
    income: number;
    incomePrice: number;
    healthPrice: number;

    castle: Castle;
    side: number;

    constructor(money: number, income: number, incomePrice: number, healthPrice: number, side: number, castle: Castle) {
        this.money = money;
        this.income = income;
        this.incomePrice = incomePrice;
        this.healthPrice = healthPrice;
        this.side = side;
        this.castle = castle;
    }

    public updatePlayer(data, id: number) {
        if (typeof data[id] == 'undefined')
            return;
        
        this.money = data[id].money;
        this.income = data[id].income;
        this.incomePrice = data[id].incomePrice;
        this.healthPrice = data[id].healthPrice;
        this.side = data[id].side;
        this.castle = Castle.parseCastle(data[id].castle);
    }
    public static parsePlayer(data, id: number): Player {
        return new Player(data[id].money, data[id].income, data[id].incomePrice, data[id].healthPrice, data[id].side, Castle.parseCastle(data[id].castle));
    }
}