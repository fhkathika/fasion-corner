import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NewProduct() {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const history = useHistory()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleCategories = (e) => {
    setCat(e.target.value.split(","))
  }
  const handleColor = (e) => {
    setColor(e.target.value.split(","))
  }
  const handleSize = (e) => {
    setSize(e.target.value.split(","))
    console.log(e.target.parentNode.lastChild.childNodes);
  }
  console.log(color);
  console.log("size", size);
  const handleClick = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat, colors: color, size: size };
          addProduct(product, dispatch)
        });
      }
    );

  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input name="img" type="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>

          <input name="title" type="text" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Ctaegories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCategories} />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleColor} />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input  type="text"  placeholder="XL S M L XL" onChange={handleSize}  />
          {/* <select className="size" onChange={handleSize} name="size">
            <option className="sz" defaultValue="size" disabled>select size</option>
            <option className="sz" value="xs">XS</option>
            <option className="sz" value="s">s</option>
            <option className="sz" value="m">M</option>
            <option className="sz" value="l">L</option>
            <option className="sz" value="xl">XL</option>
          </select> */}
        </div>



        <div className="addProductItem">
          <label>Stock</label>
          <select onChange={handleChange} name="inStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
