import ReactImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { datas } from "./data";

export default function ModoSlider() {
 

  return (
    <div className="container">
      <ReactImageGallery items={datas}
       slideInterval={4000}
       slideDuration={1000}
       />
      
    </div>
  )
}
