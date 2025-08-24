export default function AudioPlayer({src}){
  return (
    <audio controls className="w-40">
      <source src={src} />
      Your browser does not support the audio element.
    </audio>
  )
}
