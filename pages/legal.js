import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function Legal(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Privacy & Terms</h1>
        <p className="text-gray-700">This site is a starter template. Replace with legal text before launch. Talent agreements, client licenses, and privacy policy must be finalized.</p>
      </main>
      <Footer />
    </div>
  )
}
