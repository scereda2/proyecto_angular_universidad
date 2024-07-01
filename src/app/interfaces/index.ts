export interface ProductosInterface {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface CarritoInterface {
    id:       number;
    userId:   number;
    date:     Date;
    products: Product[];
    __v:      number;
}

export interface Product {
    productId: number;
    quantity:  number;
}

export interface UsuarioInterface {
    address:  Address;
    id:       number;
    email:    string;
    username: string;
    password: string;
    name:     Name;
    phone:    string;
    __v:      number;
}

export interface Address {
    city:        string;
    street:      string;
    number:      number;
    zipcode:     string;
    geolocation: GeoLocation;
}

export interface GeoLocation {
    lat:  string;
    long: string;
}

export interface Name {
    firstname: string;
    lastname:  string;
}
