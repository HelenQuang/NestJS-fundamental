export class Product {
  constructor(
    //Add accessor public to access these arguments outside of this class
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
