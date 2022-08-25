import './App.css';
import Invoice from './Components/Invoice';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import List from './Components/List';

function App() {
  return (<>
    <Navbar />
    <div className="flex bg-black w-full h-screen space-x-6 justify-between">
      <div className=" flex flex-row w-1/6">
        <List/>
      </div>
      <div className="flex w-4/6 rounded-md ">
        <Main handleClick />
      </div>
      <div className="bg-gray-700 flex flex-col w-2/6 h-5/6 ml-6 mt-3 rounded-xl">
         <Invoice/>
      </div>
    </div>
  </>
  );
}

export default App;