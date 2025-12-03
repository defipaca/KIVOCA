export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} KIVOCA. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="mailto:ey@kivoca.com"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              ey@kivoca.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

