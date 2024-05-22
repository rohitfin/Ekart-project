export class Product {
    id: number = 0;
    name: string = '';
    description: string = '';
    brand: string = '';
    gender: string = '';
    category: string = '';
    size: number[] = [];
    color: string[] = [];
    price: number = 0;
    discountPrice: number = 0;
    is_in_inventory: boolean = false;
    items_left: number = 0;
    imageURL: string = '';
    slug: string = '';
}