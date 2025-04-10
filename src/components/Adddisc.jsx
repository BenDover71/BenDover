import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Addproduct = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState("")
  const [photo, setPhoto] = useState([])


  // hooks to notify the user 
  const [loading, setLoading] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")


  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please Wait")

    try {

      const data = new FormData()
      data.append("product_name", name)
      data.append("product_description", description)
      data.append("product_cost", cost)
      data.append("product_photo",photo)

      const response = await axios.post(
        "https://nickson25.pythonanywhere.com/api/add_product",
        data
      )
      setLoading("")
      setMessage(response.data.Success)

    } catch (error) {
      setLoading("")
      setError(error.message)

    }


  }


  return (
    <div className="nye">
      <nav className="text-start mx-2 ">
      <Link to='/' className="btn btn-danger " >Back</Link>
      </nav>     
    <div className="row  justify-content-center ">             
      <div className="col-md-6  p-4">
        <h3>Upload Catalogue</h3>
        {loading}
        {message}
        {error}
        <form onSubmit={submit} >
          <input type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required />
          <br />
          <textarea name="" id=""
            className="form-control"
            placeholder="Describe Your Product"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required></textarea>
          <br />
          <input type="number"
            placeholder="Enter Product Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="form-control"
            required />
          <br />
          <input type="file"
            className="form-control"
            onChange={(e) => setPhoto(e.target.files[0])}
            accept="image/*"
            required />
          <br />
          <button className="btn btn-danger" type="submit">Upload Product</button>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Addproduct