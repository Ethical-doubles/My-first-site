import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Apply(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h1 className="text-2xl font-bold mb-4">Apply as Talent</h1>
          <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
            <input name="name" placeholder="Full name" className="w-full border px-3 py-2 rounded" required />
            <input name="email" type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" required />
            <select name="role" className="w-full border px-3 py-2 rounded">
              <option>Voice Actor</option>
              <option>Avatar</option>
              <option>Both</option>
            </select>
            <input name="portfolio" placeholder="Portfolio or demo link" className="w-full border px-3 py-2 rounded" />
            <textarea name="message" rows="4" placeholder="Tell us about your voice/experience" className="w-full border px-3 py-2 rounded"></textarea>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded font-semibold">Apply</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
