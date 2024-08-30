import { BsSend } from "react-icons/bs";

const ContactForm: React.FC = () => {
  return (
    <section className="text-gray-600 body-font relative max-w-7xl">
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative outline-none">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 outline-none border-none rounded-lg"
            title="map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=berlin+(SDS%20MEA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Germany, Berlin, 12345 <br />
                1234 Street Name <br />
                1234 Building Name
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-red-500 leading-relaxed"
                href="mailto:sds@email.com"
              >
                sds@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a
                href="tel:123-456-7890"
                className="text-red-500 leading-relaxed"
              >
                123-456-7890
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Get in touch with us for any inquiries, support, or feedback — we're
            here to help!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-cblue focus:ring-2 focus:ring-cblue h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className=" inline-flex items-center justify-center text-white bg-cpink border-0 py-2 px-6 focus:outline-none hover:bg-cpink/80 rounded text-lg transition-colors">
            Send
            <BsSend className="inline-block ml-3" />
          </button>
          <p className="text-xs text-gray-500 mt-3">
            By submitting this form I confirm that I agree with the privacy
            policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
