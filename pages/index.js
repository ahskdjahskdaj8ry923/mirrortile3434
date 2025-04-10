import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
return (
<div>
<Head>
<title>Your Guide to Mirror Tiles – Modern Insights & Tips</title>
<meta 
       name="description" 
       content="Discover the ultimate guide on mirror tiles – from design inspiration and installation how-tos to cleaning and maintenance tips. Whether you’re a DIY enthusiast or prefer professional installation, we’ve got you covered." 
     />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>

  <main className="container mx-auto px-4 py-12">
    {/* Hero Section */}
    <section className="hero text-center mb-16">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Your Guide to Mirror Tiles
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover everything you need to know about mirror tiles for your home. From design inspiration and DIY tips to professional installation and care, our in-depth guide has it all.
      </p>
      <div className="mt-8">
        <Link href="/designing-mirror-tiles">
          <a className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transition-colors hover:bg-blue-700">
            Get Started
          </a>
        </Link>
      </div>
    </section>

    {/* Section Cards */}
    <section className="sections mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Sections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link href="/designing-mirror-tiles">
          <a className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">Designing with Tiles</h3>
            <p className="text-gray-600">
              Get inspired with design ideas, color schemes, and layout tips for stunning mirror tile installations.
            </p>
          </a>
        </Link>
        <Link href="/diy-or-professional">
          <a className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">DIY vs. Professional</h3>
            <p className="text-gray-600">
              Weigh your options with our detailed guide comparing DIY installation with professional services.
            </p>
          </a>
        </Link>
        <Link href="/setting-tiles">
          <a className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">Installing Tiles</h3>
            <p className="text-gray-600">
              Follow our step-by-step instructions for a smooth and successful mirror tile installation.
            </p>
          </a>
        </Link>
        <Link href="/cleaning-and-maintenance">
          <a className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">Cleaning &amp; Maintenance</h3>
            <p className="text-gray-600">
              Keep your mirror tiles shining with practical cleaning tips and maintenance advice.
            </p>
          </a>
        </Link>
      </div>
    </section>

    {/* Testimonial Section */}
    <section className="testimonials bg-blue-50 py-12 rounded-lg mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Readers Say</h2>
        <p className="text-lg text-gray-600">
          "This guide transformed my approach to mirror tiles! Clear, practical, and beautifully presented."
        </p>
        <p className="text-lg text-gray-600 mt-4">– Alex, Home Renovator</p>
      </div>
    </section>

    {/* Newsletter Signup */}
    <section className="newsletter text-center">
      <h2 className="text-3xl font-semibold mb-4">Stay Updated!</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter to receive the latest tips, trends, and updates on mirror tile design and installation.
      </p>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="flex-1 py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
          required 
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white py-3 px-6 rounded-md transition-colors hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  </main>
</div>
); }
