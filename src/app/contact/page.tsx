export default function ContactPage() {
  return (
    <section className="py-16 px-8 bg-black text-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Contact Us</h1>
      <p className="text-gray-300 mb-8">We’d love to hear from you. Get in touch for orders and services.</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
        <textarea placeholder="Message" rows={4} className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white font-semibold transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
