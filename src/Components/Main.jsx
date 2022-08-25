import React from 'react'
import data from '../data/products.json'
import Menu from './Menu'

const Main = () => {
  handleSetData=(data)=>{
     console.log(data.name)
  }
  const handleClick= (recipe) => {
    props.handleClick();
  }
  return (
    <div className='grid grid-cols-4 gap-3 mt-0 pb-3 pr-2'>
      {
        data.map((data, key) => {
          return (
            <button onClick={handleClick()}> 
              <Menu key={key} name={data.name} 
              data={data}
               img={data.img} 
               price={data.price}
               handleSetData={(data)=>handleSetData(data)} />
            </button>
          )
        })
      }

    </div>
  )
}

export default Main