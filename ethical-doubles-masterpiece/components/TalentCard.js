import Link from 'next/link'
import AudioPlayer from './AudioPlayer'
export default function TalentCard({t}){
  return (
    <div className="border rounded-2xl overflow-hidden bg-white">
      <img src={t.image} alt={t.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="font-semibold text-lg">{t.name} <span className="text-sm text-gray-500">· {t.role}</span></div>
        <div className="text-sm text-gray-600 mt-2">{t.description}</div>
        <div className="mt-3 flex items-center justify-between">
          <AudioPlayer src={t.demo} />
          <Link href={`/talent/${t.id}`}><a className="ml-4 text-sm text-emerald-600">View profile →</a></Link>
        </div>
      </div>
    </div>
  )
}
