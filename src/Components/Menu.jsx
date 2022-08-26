import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import React, { useState } from 'react'

const Menu = (props) => {
  const [open, setOpen] = useState(false)

  const handleChange = (data,count) => {
    
    props.handleChange(data,count)
    setOpen(false)

  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  let [count, setCount] = useState(1);

  const handleDelete = () => {
    setCount(0);
  }

  return (
    <div className='text-white rounded-lg  bg-gray-200 hover:bg-gray-300'>
      <img src={props.img} width="230px" className="object-cover h-40 rounded-t-lg" alt={props.name} />
      <div className="flex flex-col text-center">
        <h4 className=' font-semibold text-xl text-gray-800 hover:text-gray-900 text-left px-3 py-1' >{props.name}</h4>
        <h5 className='font-semibold text-lg text-red-600 hover:text-xl hover:text-red-500'>Price/- <span className='text-green-700 hover:text-green-600'>{props.price}</span></h5>
      </div>
      <div className="flex flex-row justify-center px-2 items-center w-full">
        <span className='px-3 py-1  text-center font-bold text-lg bg-gray-900 border-2 border-white active:bg-gray-500 ' onClick={() => setCount((count >= 0) ? (count = count + 1) : (count = count - 1))}>+</span>
        <span className='px-2 avtive:bg-green-600 bg-red-800'>{count}</span>
        <span className='px-3 py-1  text-center font-bold text-lg bg-gray-900 border-2 border-white active:bg-gray-500 ' onClick={() => setCount((count >= 1) ? (count = count - 1) : (count = 0))}>-</span>
      </div>
      <div className="btn m-2 p-2 bg-orange-400 hover:bg-orange-600 active:bg-orange-800 text-white" onClick={handleOpen}>Order now</div>
      {/* dialog box  */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='justify-center text-center'> <span className=' before:-inset-1 before:absolute before:block relative inline-block before:bg-orange-500 before:-skew-y-3'><span className='text-gray-100 font-semibold relative'>FAVOURITE</span></span> ALL THE TIME</DialogTitle>
        <DialogContent>
          <div className=" ">
            <div className="  m-auto" style={{ width: "230px", height: "180px" }} >
              <img src={props.img} width="100%" className="object-cover h-52 mt-3 rounded-lg" alt={props.name} />
            </div>
            <div className="flex flex-col text-center mt-12">
              <h4 className=' font-semibold text-xl text-gray-800 hover:text-gray-900 text-center px-3 py-1' >{props.name}</h4>
              <h5 className='font-semibold text-lg text-red-600 hover:text-xl hover:text-red-500'>Price/- <span className='text-green-700 hover:text-green-600'>{props.price}</span></h5>
              <div className="border-2 border-gray-100  rounded-lg p-2 mb-2">
                <span className='first-letter:text-red-600 first-letter:text-xl text-md text-red-700 font-semibold text-xl' >Ingredients :: </span>
                Vegetables (carrot, tomatoes, mushrooms, onions, olives, beans, peppers, spinach, and more) Nuts (almonds, peanuts, pistachios, pine nuts, walnuts, and more) Herbs and Spices (basil, coriander, garlic, oregano, pepper, rosemary, and more) Sea Food (anchovies, lobster, shrimps, salmon, squid, tuna, oysters, and more)
              </div>
            </div>


            {/* dialog table  */}
            <table className="table table-dark table-hover table-bordered table-striped ">
              <thead className='table-head'>
                <tr className='text-lg'>
                  <th>
                    <span className='hover:text-green-300 cursor-pointer'>N</span>
                    <span className='hover:text-green-300 cursor-pointer'>a</span>
                    <span className='hover:text-green-300 cursor-pointer'>m</span>
                    <span className='hover:text-green-300 cursor-pointer'>e</span>
                  </th>
                  <th className='text-center'>
                    <span className='hover:text-green-300 cursor-pointer'>Q</span>
                    <span className='hover:text-green-300 cursor-pointer'>t</span>
                    <span className='hover:text-green-300 cursor-pointer'>y</span>
                    <span className='hover:text-red-500 cursor-pointer'>.</span>
                  </th>
                  <th className='text-center'>
                    <span className='hover:text-green-300  cursor-pointer'>P</span>
                    <span className='hover:text-green-300  cursor-pointer'>r</span>
                    <span className='hover:text-green-300  cursor-pointer'>i</span>
                    <span className='hover:text-green-300  cursor-pointer'>c</span>
                    <span className='hover:text-green-300  cursor-pointer'>e</span>
                  </th>
                  <th className='text-center'>
                    <span className='hover:text-green-300  cursor-pointer'>R</span>
                    <span className='hover:text-green-300  cursor-pointer'>e</span>
                    <span className='hover:text-green-300  cursor-pointer'>m</span>
                    <span className='hover:text-green-300  cursor-pointer'>o</span>
                    <span className='hover:text-green-300  cursor-pointer'>v</span>
                    <span className='hover:text-green-300  cursor-pointer'>e</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  (count > 0) ?
                    <tr>
                      <td className='hover:first-letter:text-red-600 first-letter:text-xl first-letter:text-green-400 hover:font-semibold w-48 hover:text-center first-letter:capitalize  cursor-pointer'>{props.name}</td>
                      <td className='hover:first-letter:text-red-600 first-letter:text-green-400 text-xl text-center cursor-pointer'>{count}</td>
                      <td className='hover:first-letter:text-red-600 first-letter:text-xl first-letter:text-green-400 text-center cursor-pointer'>Rs. {count * props.price}</td>
                      <td className='text-center cursor-pointer '><span className='hover:text-red-600 hover:bg-black active:bg-green-400 cursor-pointer px-2 py-1 rounded-md text-center bg-red-400 font-bold' onClick={handleDelete}>X</span></td>
                    </tr> : null
                }


              </tbody>
            </table>
            {/*  */}

            <div className="w-full text-center">
              {
                (count>0)?<div className="btn m-2 p-2 bg-orange-400 hover:bg-orange-600 active:bg-orange-800 text-center px-5 text-white hover:text-white hover:text-lg" onClick={() => handleChange(props.data,count)} >Confirm Order</div> :<div className="btn m-2 p-2 bg-gray-400 hover:bg-gray-600 active:bg-gray-800 text-center px-5 text-white hover:text-white hover:text-lg"  >Confirm Order</div>
              }
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Menu
