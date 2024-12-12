import Image from 'next/image'

export default function PortfolioPage() {
    return (
      <main className="pt-20">
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Our Work</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portfolio Items */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/portfolio1.jpg"
                    alt="Project 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Name</h3>
                  <p className="text-gray-600">Project description goes here.</p>
                </div>
              </div>
              {/* More portfolio items */}
            </div>
          </div>
        </section>
      </main>
    )
  }
  