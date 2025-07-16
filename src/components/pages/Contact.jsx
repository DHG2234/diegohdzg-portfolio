const Contact = () => {
  return (
    <footer id="contact" className="w-full bg-[#001b5e] text-gray-100 py-8 mt-16">
      <div className="max-w-[1040px] mx-auto text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Contact</h2>
        <a
          href="mailto:asrat.ipv.diegohdz.g@gmail.com"
          className="text-base sm:text-lg hover:underline break-words"
        >
          asrat.ipv.diegohdz.g@gmail.com
        </a>
        <p className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Diego Hernández García. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;

