export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Smartphones",
    price: 999, // Use a number
    image: "/images/smartphone6.jpg",
  },
  {
    id: 2,
    name: "iPhone 13",
    category: "Smartphones",
    price: 799, // Use a number
    image: "/images/smartphone8.jpg",
  },
  {
    id: 3,
    name: "iPhone 14",
    category: "Smartphones",
    price: 699, // Use a number
    image: "/images/smartphone9.jpg",
  },
  {
    id: 4,
    name: "Iphone earpiece",
    category: "Accessories",
    price: 899,
    image: "/images/earpiece.jpg",
  },
  {
    id: 5,
    name: "MacBook Pro",
    category: "Laptops",
    price: 1299,
    image: "/images/laptop3.jpg",
  },
  {
    id: 6,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1199,
    image: "/images/laptop.jpg",
  },
  {
    id: 7,
    name: "Apple Watch Series 8",
    category: "Smartphones",
    price: 399,
    image: "/images/smartphone7.jpg",
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch",
    category: "Smartwatches",
    price: 349,
    image: "/images/smartwatch.jpg",
  },
  {
    id: 9,
    name: "Smart Watch",
    category: "Smartwatches",
    price: 199,
    image: "/images/smartwatch6.jpg",
  },
  {
    id: 10,
    name: "Portable Laptop",
    category: "Laptops",
    price: 79,
    image: "/images/laptop2.jpg",
  },
  {
    id: 11,
    name: "Portable Laptop",
    category: "Smartwatches",
    price: 79,
    image: "/images/smartwatch3.jpg",
  },
  {
    id: 12,
    name: "Portable Laptop",
    category: "Accessories",
    price: 79,
    image: "/images/earphone.jpg",
  },
];
