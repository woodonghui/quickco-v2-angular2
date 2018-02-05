export class CostItem {
    constructor(
        public productid: number,
        public quantity: number,
        public date: Date,
        salerecordid: number) {}
}

export interface CostItemLine {
    productname: string;
    quantity: number;
}
