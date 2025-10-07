export default function ContactPage() {
  return (
    <section className="py-16 px-8 bg-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
            alt="Contact Illustration"
            className="rounded-2xl shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Right Side Contact Form */}
        <div>
          <h1 className="text-4xl font-bold text-orange-500 mb-6">Contact Us</h1>
          <p className="text-gray-300 mb-4">
            We’d love to hear from you! Reach out for orders, questions, or collaborations.
          </p>

          {/* Contact Details */}
          <div className="mb-6 space-y-2">
            <p>
              📧 Email us at:{" "}
              <a
                href="waqasrajput1919@gmail.com"
                className="text-orange-400 hover:underline"
              >
                waqasrajput1919@gmail.com
              </a>
            </p>
            <p>
              📞 Call us:{" "}
              <a
                href="tel:+92 300 6030 119 "
                className="text-orange-400 hover:underline"
              >
                +92 300 6030 119
              </a>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded bg-gray-800 text-white"
            ></textarea>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
