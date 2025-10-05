interface ProductCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ProductCard({ title, image, description }: ProductCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-orange-500">{title}</h2>
        <p className="text-gray-300 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
