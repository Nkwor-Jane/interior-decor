import {useState} from 'react';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import './App.css';
function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
    <div className="bg-black w-full min-h-screen text-white p-9">
      
     <div className="flex justify-between">
       <div >
         <p className="border-2 ml-1 border-gray-200 md:p-2 p-1 font-extralight text-sm">THIS INTERIOR</p>
       </div>
       <div className="md:flex">
         <div className="menu-icon" onClick={handleClick}>
           {click ? <FaTimes /> : <FaBars/>}
         </div>
         <ul className="flex pr-14">
           <li className="pr-12 font-bold">Home</li>
           <li className="pr-12 font-light">Collection</li>
           <li className="pr-12 font-light">About</li> 
           <li className="font-light">Contact</li>
         </ul>
       </div>
     </div>
      <div className="flex w-100 pt-10 md:justify-between flex-col md:flex-row relative md:mt-4">
        <div className="w-100 md:w-1/2 pr-6">
          <h1 className="font-bold text-3xl leading-9 pb-2 md:font-extrabold md:text-5xl md:pb-9 md:leading-7">Modern interior</h1>
          <p className="font-base leading-9 text-1xl pb-6 md:font-light md:text-2xl md:pr-10 md:leading-8 md:pb-12">A full-Service residential &amp; 
            commercial interior design and 
            staging company offering 
            professional organizing &amp;
            eco-services.
          </p>
          <p className="font-extrabold pt-4 md:pt-2 pb-4">Read more --</p>
        </div>
        <div className="md:w-3/5 md:pr-8 ">
          <img src={photo1} alt="left" className="w-full relative"/>
        </div>
        <div className=" border-white shadow-2xl w-52 md:w-64 md:mr-20  absolute bottom-0 right-0 bg-black text-white ">
          <div className="flex p-2"> 
          <div className="p-2">
          <img src={photo2} alt="girl" className="rounded-full w-8"/>   
          </div>
         <div className=" p-1 md:p-2">
         <p className="font-bold text-gray-300">Aliza Webber</p>
          <span className="text-gray-500 text-sm">Interior Designer</span>
         </div>
          </div>
          <p className="leading-6 font-extrabold text-1xl pt-2 pl-4">Designed in 2020 by <br/>Aliza Webber</p>
        </div>
      </div>
      <div className="footer">
       <p className="font-extralight text-center pt-8">Jane&copy;DevChallenges.io</p>
      </div>
    </div>
  );
}

export default App;
