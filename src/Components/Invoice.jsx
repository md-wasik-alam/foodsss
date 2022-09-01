import React from 'react'
// import data from '../data/dummylist.json'



const Invoice = (props) => {

  let total = 0;
  const handleDelete = (data) => {
    props.handleDelete(data);
  }
  const handlePrint=()=>{
    window.print();
  }
  const emptInvoice=()=>{
    props.emptInvoice();
  }
  


  return (
    <>

      <div className='wi-100 justify-center w-full overflow-auto'>
        <div className="w-full">
          <div className="text-center font-semibold text-gray-100 text-2xl w-full mt-2 mb-5 ">
            <span className='hover:text-red-600'>I</span>
            <span className='hover:text-red-600'>N</span>
            <span className='hover:text-red-600'>V</span>
            <span className='hover:text-red-600'>O</span>
            <span className='hover:text-red-600'>I</span>
            <span className='hover:text-red-600'>C</span>
            <span className='hover:text-red-600'>E</span>
        
          </div>
          <table className="table table-dark table-hover table-bordered table-striped  ">
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
                <th className='text-center d-print-none'>
                  <span className='hover:text-green-300  cursor-pointer'>R</span>
                  <span className='hover:text-green-300  cursor-pointer'>e</span>
                  <span className='hover:text-green-300  cursor-pointer'>m</span>
                  <span className='hover:text-green-300  cursor-pointer'>o</span>
                  <span className='hover:text-green-300  cursor-pointer'>v</span>
                  <span className='hover:text-green-300  cursor-pointer'>e</span>
                </th>
              </tr>
            </thead>
            <tbody className=''>

              {
                props.orderd.map((data, key) => {
                  total = total + data.price * data.qty
                  return (
                    (data.qty > 0) ?
                      <>
                        <tr key={key}>
                          <td className='hover:first-letter:text-red-600 first-letter:text-xl first-letter:text-green-400 hover:font-semibold w-48 hover:text-center first-letter:capitalize  cursor-pointer'>{data.name}</td>
                          <td className='hover:first-letter:text-red-600 first-letter:text-green-400 text-xl text-center cursor-pointer'>{data.qty}</td>
                          <td className='hover:first-letter:text-red-600 first-letter:text-xl first-letter:text-green-400 text-center cursor-pointer'>Rs. {data.price * data.qty}</td>
                          <td className='text-center cursor-pointer d-print-none '><span className='hover:text-red-600 hover:bg-black active:bg-green-400 cursor-pointer px-2 py-1 rounded-md text-center bg-red-400 font-bold' onClick={() => handleDelete(data)}  >X</span></td>
                        </tr>
                      </>
                      : null

                  )
                }
                )}
            </tbody>

          </table>

        </div>
      </div>
      <div className=" w-full flex flex-row justify-between">
        <span className="bg-yellow-500 border rounded-bl-lg rounded-tr-lg px-3 py-2 font-semibold cursor-pointer hover:bg-yellow-600 text-lg text-white pay " >Total amount : Rs. {total} </span>
        <span className='bg-green-600 border rounded-br-lg rounded-tl-lg px-3 py-2 font-semibold text-gray-200 cursor-pointer hover:bg-green-700 d-print-none' onClick={handlePrint}>Print Bill </span>
      </div>
      <div className="w-full mt-10 flex justify-center">

        <span className='bg-yellow-600 border rounded-lg  px-3 py-2 font-semibold text-gray-200 cursor-pointer hover:bg-yellow-700 d-print-none' onClick={emptInvoice}>Clear All Bill </span>
      </div>

    </>

  )
}

export default Invoice