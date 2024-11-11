const ContactFormSide = () => {
  return (
    <div
      className="sticky top-0 h-screen flex flex-col items-center justify-center px-10 bg-gray-100 pt-20"
      // style={{ backgroundImage: "url('/assets/consultation.webp')" }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}

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
      <div className="mt-10">
        <h1 className="text-2xl mb-4 w-full">Contact Information</h1>
        <div className="flex gap-2">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 9.42999V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42142 18.0609 3 17 3H7C5.93913 3 4.92178 3.42142 4.17163 4.17157C3.42149 4.92172 3 5.93913 3 7V17C3 18.0609 3.42149 19.0783 4.17163 19.8284C4.92178 20.5786 5.93913 21 7 21H12.46"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4003 10.2201L3.82031 4.57007"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.58008 20.18L10.9001 8.34998"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 12C17.9087 11.9987 17.3229 12.1142 16.7764 12.3399C16.2298 12.5655 15.7333 12.8969 15.3151 13.3151C14.897 13.7332 14.5656 14.2298 14.3399 14.7764C14.1142 15.3229 13.9987 15.9087 14 16.5C14 19.5 17.38 22 18.5 22C19.62 22 23 19.55 23 16.5C23 15.3065 22.5259 14.1619 21.682 13.318C20.8381 12.4741 19.6935 12 18.5 12V12Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 16.9999C18.3677 16.9994 18.2369 16.9726 18.115 16.9211C17.9931 16.8696 17.8827 16.7944 17.7901 16.7C17.6053 16.5137 17.5011 16.2623 17.5 15.9999C17.4993 15.8683 17.5245 15.7379 17.5743 15.616C17.6241 15.4942 17.6974 15.3834 17.7901 15.2899C17.883 15.1962 17.9936 15.1218 18.1155 15.071C18.2374 15.0203 18.368 14.9941 18.5 14.9941C18.632 14.9941 18.7627 15.0203 18.8846 15.071C19.0065 15.1218 19.1171 15.1962 19.21 15.2899C19.3027 15.3834 19.376 15.4942 19.4258 15.616C19.4756 15.7379 19.5008 15.8683 19.5 15.9999C19.4989 16.2623 19.3948 16.5137 19.21 16.7C19.1174 16.7944 19.007 16.8696 18.8851 16.9211C18.7632 16.9726 18.6323 16.9994 18.5 16.9999Z"
              fill="#000000"
            />
          </svg>
          <p className="font-thin text-lg">
            456 Taksim Square, Beyoğlu, Istanbul, Turkey
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSide;
