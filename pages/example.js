export default function Example() {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
      <script type="text/javascript" src ="/static/exampleS.js" defer></script>
    <video id="boxtex" autoPlay controls loop={true} muted>
      <source src="boxtex.mp4" type="video/mp4" />
    </video>
    </div>
  )
}