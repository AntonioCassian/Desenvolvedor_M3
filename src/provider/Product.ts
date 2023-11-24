export interface Product {
    includes(sizFiltrated: Product): import("react").SetStateAction<Product[]>;
    some: any;
    id: string;
    name: string;
    price: number;
    parcelamento: Array<number>;
    color: string;
    image: string;
    size: Array<string>;
    date: string;
  }
  