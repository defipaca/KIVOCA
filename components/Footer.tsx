export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} KIVOCA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

