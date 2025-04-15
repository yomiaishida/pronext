"use client";
import Image from "next/image";
import { useCategory } from "@/context/categoryContext";
import { products, Product } from "@/data/product";

export default function Home() {
  const { selectedCategory } = useCategory();

  // Filter products based on selected category
  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

        <h1 className="text-3xl font-bold text-center w-full text-primary">
          Our Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-md flex flex-col items-center"
              >
                {/* Fixed-size image container */}
                <div className="w-[200px] h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-primary font-bold">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </div>
      </main>
    </div>
  );
}
