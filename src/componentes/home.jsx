import Galeria from "./galeria";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <h3>galeria de imagenes</h3>
      <Link to={"/modoSlider"}><p>modo slider</p></Link> 
      <Galeria />
    </div>
  )
}
