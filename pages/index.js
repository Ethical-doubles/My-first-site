import fs from 'fs'
import path from 'path'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TalentCard from '@/components/TalentCard'

export default function Home({talents}){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="bg-gradient-to-r from-indigo-600 to-emerald-500 text-white rounded-2xl p-12 mb-10">
          <h1 className="text-4xl font-bold mb-4">Ethical Doubles — Consent-first AI Talent Agency</h1>
          <p className="text-lg">Licensed AI voices & avatars from real people. Talent earn royalties. Brands get on-brand, legal voices.</p>
          <div className="mt-6 space-x-3">
            <a href="/hire" className="inline-block bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold">Hire Talent</a>
            <a href="/apply" className="inline-block bg-neutral-900 text-white px-4 py-2 rounded-lg font-semibold">Apply as Talent</a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Talent</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {talents.map(t => <TalentCard key={t.id} t={t} />)}
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-2xl">
          <h3 className="text-xl font-semibold">Why Ethical Doubles?</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-700">
            <li>Consent-first licensing and clear royalties</li>
            <li>Watermarked outputs and audit trail</li>
            <li>No politics, adult, medical or scam use</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const dataPath = path.join(process.cwd(),'data','talents.json')
  const talents = JSON.parse(fs.readFileSync(dataPath,'utf8'))
  return { props: { talents } }
}
