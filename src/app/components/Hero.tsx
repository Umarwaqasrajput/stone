export default function Hero() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092785903-1e7c3a5b5e1b')" }}
    >
      <div className="bg-black/70 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-500">Stone Crushing Plant</h1>
        <p className="text-lg mt-4 text-gray-200">
          Heavy Machinery, Durable Equipment, and Premium Stone Products.
        </p>
      </div>
    </section>
  );
}
