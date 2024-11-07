const ContactFormSide = () => {
  return (
    <div
      className="sticky top-0 h-screen flex items-center justify-center"
      // style={{ backgroundImage: "url('/assets/consultation.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Form */}
      <form className="relative z-10 card w-96 p-6 bg-white/30 rounded-none my-10 gap-3">
        <input
          className="input w-full rounded-none"
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Full Name"
          required
        />
        <input
          className="input w-full rounded-none"
          type="tel"
          placeholder="Phone Number"
          id="phone"
          name="phone"
          required
        />
        <input
          className="input w-full rounded-none"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <textarea
          className="textarea w-full rounded-none"
          placeholder="Message"
          id="message"
          name="message"
          required
        />
        <button className="btn btn-secondary w-full" type="submit">
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default ContactFormSide;
