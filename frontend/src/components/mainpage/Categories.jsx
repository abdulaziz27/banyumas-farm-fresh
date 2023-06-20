import React from "react"


const Categories = () => {


  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Buah Segar",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Sayur",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Buah Kering",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Susu",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Daging",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Bahan Dapur",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default Categories
