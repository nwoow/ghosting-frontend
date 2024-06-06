import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../Components/Constant";
import axios from 'axios';
import Slider from '../Components/Slider'

function Subcategory() {
  const [subCategory, setSubCategory] = useState([])
  const [category, setCategory] = useState('')

  const { slug } = useParams();
 
  const getProduct = async () => {
    await axios.get(`${baseUrl}/products/categoryview/${slug}`)
      .then((res) => {
        console.log(res.data)
        setSubCategory(res.data.subcategory)
        setCategory(res.data.category)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getProduct()
  },[slug])

  return (
    <div>
      <h2 className="fw-bold text-warning text-center mt-5">{category.category_name}</h2>
      <div className="mb-5 mt-5">
        {
          subCategory.map((item, index) => (
            <>
              <div key={index} className="container my-4 mt-5">
                <h2 className="text-white fw-bold">
                  {item.category_name}&nbsp;{" "}
                </h2>
              </div>
              <Slider key={index} product={item} />
            </>
          ))
        }
      </div>
    </div>
  );
}

export default Subcategory;
