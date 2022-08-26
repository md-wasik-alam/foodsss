import './App.css';
import Invoice from './Components/Invoice';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import List from './Components/List';
import React, { useState } from 'react'

function App() {
  const [orderd, setOrderd] = useState([]);

  const handleChange = (data,count) => {
    

    let CheckArray = orderd.find((item) => item.id === data.id);
    if (CheckArray === undefined) {
      setOrderd([...orderd, { id: data.id, name: data.name, qty: count, price: data.price }]);

    }
    else {
      setOrderd(orderd.map((item) => item.id === data.id ? { ...item, qty: item.qty + count } : item));
    }

  }

  const handleDelete = (data) => {

    setOrderd(orderd.map((item) => item.id === data.id ? { ...item, qty: item.qty - item.qty } : item));


  }

  return (<>
    <Navbar />
    <div className="flex bg-black w-full h-screen space-x-6 justify-between">
      <div className=" flex flex-row w-1/6">
        <List />
      </div>
      <div className="flex w-4/6 rounded-md ">
        <Main handleChange={(data,count) => handleChange(data,count)} />
      </div>
      <div className="bg-gray-700 flex flex-col w-2/6 h-5/6 ml-6 mt-3 rounded-xl">
        <Invoice orderd={orderd} handleDelete={(data)=>handleDelete(data)} />
      </div>
    </div>
  </>
  );
}

export default App;