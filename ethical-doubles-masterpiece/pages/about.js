import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function About(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Ethical Doubles</h1>
        <p className="text-gray-700">We are a consent-first agency that licenses real people's voices and likenesses for ethical AI. Talent receive 50% royalties. No politics, adult, or scam usage.</p>
      </main>
      <Footer />
    </div>
  )
}
