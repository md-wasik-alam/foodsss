import React from 'react'
import data from '../data/products.json'
import Menu from './Menu'

const Main = (props) => {


  const handleChange = (data,count) => {
    props.handleChange(data,count)
  }


  return (
    <div className='grid grid-cols-4 gap-3 mt-0 pb-3 pr-2'>
      {
        data.map((data, key) => {
          return (
           <button>            <Menu key={key} name={data.name}
              data={data}
              img={data.img}
              handleChange={(data,count)=>handleChange(data,count)}
              price={data.price}
            />
            </button>


          )
        })
      }

    </div>
  )
}

export default Main