import fs from 'fs'
import path from 'path'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AudioPlayer from '@/components/AudioPlayer'

export default function Profile({talent}){
  if(!talent) return (<div>Not found</div>)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="md:flex md:items-center gap-6">
            <img src={talent.image} className="w-48 h-48 object-cover rounded-lg" alt={talent.name} />
            <div>
              <h1 className="text-2xl font-bold">{talent.name} · {talent.role}</h1>
              <p className="text-gray-700 mt-2">{talent.description}</p>
              <div className="mt-4">
                <AudioPlayer src={talent.demo} />
              </div>
              <div className="mt-6">
                <a href="/hire" className="inline-block bg-emerald-500 text-black px-4 py-2 rounded-lg font-semibold">Request this talent</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths(){
  const dataPath = path.join(process.cwd(),'data','talents.json')
  const talents = JSON.parse(fs.readFileSync(dataPath,'utf8'))
  const paths = talents.map(t => ({ params: { id: t.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps({params}){
  const dataPath = path.join(process.cwd(),'data','talents.json')
  const talents = JSON.parse(fs.readFileSync(dataPath,'utf8'))
  const talent = talents.find(t => t.id === params.id) || null
  return { props: { talent } }
}
