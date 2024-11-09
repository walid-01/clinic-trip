const ContactFormSide = () => {
  return (
    <div
      className="sticky top-0 h-screen flex flex-col items-center justify-center px-10"
      // style={{ backgroundImage: "url('/assets/consultation.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <h1 className="text-2xl mb-4 w-full">Get In Touch</h1>

      {/* Form */}
      <form className="relative z-10 card w-full px-6 pb-8 pt-6 bg-white rounded-none gap-3">
        <input
          className="input w-full rounded-none focus:outline-none focus:ring-0 focus:border-transparent border-transparent border-b-gray-300 focus:border-b-black focus:shadow-sm"
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Full Name"
          required
        />
        <input
          className="input w-full rounded-none focus:outline-none focus:ring-0 focus:border-transparent border-transparent border-b-gray-300 focus:border-b-black focus:shadow-sm"
          type="tel"
          placeholder="Phone Number"
          id="phone"
          name="phone"
          required
        />
        <input
          className="input w-full rounded-none focus:outline-none focus:ring-0 focus:border-transparent border-transparent border-b-gray-300 focus:border-b-black focus:shadow-sm"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <textarea
          className="textarea w-full rounded-none focus:outline-none focus:ring-0 focus:border-transparent border-transparent border-b-gray-300 focus:border-b-black focus:shadow-sm"
          placeholder="Message"
          id="message"
          name="message"
          required
        />
        <button className="btn btn-secondary w-full rounded-none" type="submit">
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default ContactFormSide;
