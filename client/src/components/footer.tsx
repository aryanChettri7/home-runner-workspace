import sdtecLogo from "@assets/V1 Blue transparent_1752517612809.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={sdtecLogo} alt="SDtec Logo" className="h-12 w-auto filter invert" />
          </div>
          <p className="text-gray-400 mb-4">Crafting Value, Shaping Impact</p>
          <p className="text-gray-400">© 2024 SDtec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
