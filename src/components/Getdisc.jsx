import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Carousel from "./Carousel"
import Footer from "./Footer"

const Getproducts=()=>{


const[products,setProducts]=useState([])
const[loading,setLoading]=useState("")
const[error,setError]=useState("")

const[filteredProducts,setFilteredProducts]=useState([])
const[searchQuery,setSearchQuery]=useState("")
const navigate =useNavigate()


const img_url = "https://nickson25.pythonanywhere.com/static/images/"


const getProducts=async()=>{
  setLoading("Please Wait")

  try {
    const response = await axios.get(
      "https://nickson25.pythonanywhere.com/api/get_product_details"
    )

    setProducts(response.data)
    setLoading("")
    
  } catch (error) {
    setLoading("")
    setError("Cheki huu msee")
    
  }

}
// useEffect prevents "side effects" 
useEffect(()=>{
  getProducts();    
},[])

//filter logic
//search filter logic

useEffect(()=>{
  if (!products)return; //prevents errors if product is undefined

  const filtered=products.filter((product)=>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())||  //converts the name to lower case checks(in the array) if the product_name or product_description contain what the user is typing 
    product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredProducts(filtered); //holds all the products that match what the user has typed
},[searchQuery,products]); //these are the dependencies.Is the user typing?Do we have the products?






  return(   
    <div>
       <div>
     <Navbar/>            
     <Carousel/>   
      </div>   

    <div className="row hui">
     
      <h3 className="mt-4 text-light">Available Products</h3>
      <input type="text"
      className="form-control shadow-sm  mb-2"
      placeholder="Search Catalogue..."
      value={searchQuery}
      onChange={(e)=> setSearchQuery(e.target.value)} /> 
      {loading}
      {error}
      
      {
        filteredProducts?.map((product)=>(

          <div className="col-md-3 justify-content-center mb-4"  >
        <div className="card shadow">
          <img 
          src={img_url+ product.product_photo} 
          className="mt-4 product_img" 
          alt="" />
        </div>
        <div className="card-body shadow">
          <h5 className="po">{product.product_name}</h5>
          <p className="po">
            {product.product_description.slice(0,20)}
          </p>
          <b className="text-primary">Ksh{product.product_cost}</b> <br />
          <button className="btn btn-danger mt-2 w-100" onClick={()=>navigate('/makepayment',{state:{product}})}>Purchase Now</button>
        </div>
      </div>         

        ))
      }

        
    </div>
    <Footer/>

    </div>
    
  )
}
export default Getproducts