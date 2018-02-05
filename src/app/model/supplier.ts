export class Supplier {
    constructor(public name: string,
        public address: string,
        public contact: string,
        public gstregistered: boolean,
        public hasterm: boolean,
        public id?: number) {}
}
