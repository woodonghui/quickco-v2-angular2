export class Product {
    constructor(
        public supplierid: number,
        public name: string,
        public unit: string,
        public unitprice: number,
        public sku: string,
        // public excludeincosting: boolean,
        public id?: number) { }
}
