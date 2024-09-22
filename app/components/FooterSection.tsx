import React from "react";

const FooterSection = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-wide">
            Get linked Local ➤
          </h2>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Area 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOOTER AREA 1</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt mollis ante non volutpat. Nam consequat diam nec leo
              rutrum tempus.
            </p>
          </div>

          {/* Footer Area 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOOTER AREA 2</h3>
            <p className="text-gray-400">
              Nulla accumsan eros nec sem tempus scelerisque. Morbi tincidunt
              risus magna, posuere lobortis felis.
            </p>
          </div>

          {/* Footer Area 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOOTER AREA 3</h3>
            <p className="text-gray-400">
              Nam consequat diam nec leo rutrum tempus. Nulla accumsan eros nec
              sem tempus scelerisque.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            COPYRIGHT - LinkLocalAfrica
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
