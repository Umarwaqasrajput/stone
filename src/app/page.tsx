import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* 🪨 Hero Section */}
      <Hero />

      {/* 🏗️ About / Intro Section */}
      <section className="py-16 px-8 text-center bg-black">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">
          Welcome to Stone Crushing Plant
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We are a trusted name in stone crushing, providing high-quality crushed stone,
          aggregates, and machinery solutions for construction and infrastructure projects.
          Our modern crushing units ensure durable material, timely delivery, and unmatched quality.
        </p>
      </section>

      {/* ⚙️ Why Choose Us Section */}
      <section className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
          Why Choose Our Plant
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 container mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-orange-400 mb-2">🪨 High Quality Stones</h3>
            <p className="text-gray-300 text-sm">
              Our stones are durable, weather-resistant, and ideal for construction works.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-orange-400 mb-2">⚙️ Modern Machinery</h3>
            <p className="text-gray-300 text-sm">
              Equipped with advanced crushers, loaders, and conveyors for maximum output.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-orange-400 mb-2">🚚 Timely Delivery</h3>
            <p className="text-gray-300 text-sm">
              Our team ensures that your stone products reach you on time, every time.
            </p>
          </div>
        </div>
      </section>

      {/* 📞 Contact CTA */}
      <section className="py-20 px-8 text-center bg-black">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Need Stone or Machinery?</h2>
        <p className="text-gray-300 mb-8">Contact us today for bulk orders and custom services.</p>
        <a
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded text-white font-semibold transition"
        >
          Contact Now
        </a>
      </section>
    </div>
  );
}
