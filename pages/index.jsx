import Announcement from "../Conponents/Announcement";
import Categories from "../Conponents/Categories";
import Footer from "../Conponents/Footer";
import Navbar from "../Conponents/Navbar";
import Newsletter from "../Conponents/Newsletter";
import Products from "../Conponents/Products";
import Slider from "../Conponents/Slider";


export default function Home() {

  return (
    < >
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories></Categories>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer/>
 
    </>
  )
}
