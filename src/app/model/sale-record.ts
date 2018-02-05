export class SaleRecord {

    constructor(
        public outletid: number,
        public totalincome: number,
        public bankincash: number,
        public foodpandaincome: number,
        public date: Date,
        public honestbeeincome: number = 0,
        public id?: number) {}
}
