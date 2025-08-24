import fs from 'fs'
import path from 'path'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TalentCard from '@/components/TalentCard'

export default function TalentPage({talents}){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Talent Catalog</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {talents.map(t => <TalentCard key={t.id} t={t} />)}
        </div>
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
