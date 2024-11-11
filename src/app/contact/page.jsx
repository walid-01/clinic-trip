import Link from "next/link";
const Contact = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[90vh] w-full bg-gray-50">
        <div className="w-2/5 px-20">
          <h1 className="text-sm tracking-widest mb-2">CONTACT US</h1>
          <h1 className="text-6xl font-bold">Have a question?</h1>
          <h1 className="text-6xl font-bold mb-4">Get in touch!</h1>
          <p className="text-xl mb-4">
            Don't hesitate to reach us and our medical consultants will contact
            you as soon as possible
          </p>
          <div className="flex flex-col items-center">
            <div className="flex h-6 w-full items-center gap-2">
              <svg width="24px" height="100%" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
                    fill="#000"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
              <p>Istanbul / Turkey</p>
            </div>
            <div className="h-6 w-full">
              <Link
                href="/"
                className="link link-hover h-full w-full flex items-center gap-2"
              >
                <svg
                  width="24px"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z"
                      fill="#000"
                    ></path>
                    <path
                      d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z"
                      fill="#000"
                      fillRule="nonzero"
                      opacity="0.3"
                    ></path>
                  </g>
                </svg>
                <p>+90 555 555 555</p>
              </Link>
            </div>
            <div className="h-6 w-full">
              <Link
                href="/"
                className="link link-hover h-full w-full flex items-center gap-2"
              >
                <svg
                  width="24px"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M7.13888889,4 L7.13888889,19 L16.8611111,19 L16.8611111,4 L7.13888889,4 Z M7.83333333,1 L16.1666667,1 C17.5729473,1 18.25,1.98121694 18.25,3.5 L18.25,20.5 C18.25,22.0187831 17.5729473,23 16.1666667,23 L7.83333333,23 C6.42705272,23 5.75,22.0187831 5.75,20.5 L5.75,3.5 C5.75,1.98121694 6.42705272,1 7.83333333,1 Z"
                      fill="#000"
                      fillRule="nonzero"
                    ></path>
                    <polygon
                      fill="#000"
                      opacity="0.3"
                      points="7 4 7 19 17 19 17 4"
                    ></polygon>
                    <circle fill="#000" cx="12" cy="21" r="1"></circle>
                  </g>
                </svg>
                <p>+90 555 555 555</p>
              </Link>
            </div>
            <div className="h-6 w-full">
              <Link
                href="/"
                className="link link-hover h-full w-full flex items-center gap-2"
              >
                <svg
                  width="24px"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M11.575,21.2 C6.175,21.2 2.85,17.4 2.85,12.575 C2.85,6.875 7.375,3.05 12.525,3.05 C17.45,3.05 21.125,6.075 21.125,10.85 C21.125,15.2 18.825,16.925 16.525,16.925 C15.4,16.925 14.475,16.4 14.075,15.65 C13.3,16.4 12.125,16.875 11,16.875 C8.25,16.875 6.85,14.925 6.85,12.575 C6.85,9.55 9.05,7.1 12.275,7.1 C13.2,7.1 13.95,7.35 14.525,7.775 L14.625,7.35 L17,7.35 L15.825,12.85 C15.6,13.95 15.85,14.825 16.925,14.825 C18.25,14.825 19.025,13.725 19.025,10.8 C19.025,6.9 15.95,5.075 12.5,5.075 C8.625,5.075 5.05,7.75 5.05,12.575 C5.05,16.525 7.575,19.1 11.575,19.1 C13.075,19.1 14.625,18.775 15.975,18.075 L16.8,20.1 C15.25,20.8 13.2,21.2 11.575,21.2 Z M11.4,14.525 C12.05,14.525 12.7,14.35 13.225,13.825 L14.025,10.125 C13.575,9.65 12.925,9.425 12.3,9.425 C10.65,9.425 9.45,10.7 9.45,12.375 C9.45,13.675 10.075,14.525 11.4,14.525 Z"
                      fill="#000"
                    ></path>
                  </g>
                </svg>
                <p>info@clinic-trip.com</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-full flex flex-col items-center justify-center w-1/3 px-10">
          <h1 className="text-2xl mb-4 w-full">Get In Touch</h1>
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
            <button
              className="btn btn-secondary w-full rounded-none"
              type="submit"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68148.7495404309!2d28.933847300543157!3d40.986348710202726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Tower!5e0!3m2!1sen!2sdz!4v1731258257850!5m2!1sen!2sdz"
        height="500"
        // style="border:0;"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Contact;
