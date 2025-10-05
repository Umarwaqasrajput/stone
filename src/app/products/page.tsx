import ProductCard from "../components/ProductCard";

const products = [
  {
    title: "Crushed Stone (1 inch)",
    image: "33.jpg",
    description: "High quality crushed stones for road and construction.",
  },
  {
    title: "Dust Aggregate",
    image: "22.jpg",
    description: "Used for filling and road leveling.",
  },
  {
    title: "Limestone Chips",
    image: "11.jpg",
    description: "Durable limestone for mixing and paving.",
  },
];

export default function ProductsPage() {
  return (
    <section className="py-16 px-8 bg-black">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Our Stone Products
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 container mx-auto">
        {products.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
