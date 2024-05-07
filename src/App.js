
import { useCallback, useEffect, useState } from 'react';
import './App.css';


function App() {
  const [length, setLength]= useState(6);
  const [ number, setNumber]= useState(false);
  const [ character, setCharacter]= useState(false);
  const [password , setPassword]= useState("");
   const passwordgenerator= useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789";
    if(character) str+="~!@#$%^&*(){}?";

    
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)
      
    }
    
    setPassword(pass);

   },[length,number,character,setPassword])

   useEffect(()=>{passwordgenerator()},[length,character,number,passwordgenerator])
    const handleClick =()=>{
      navigator.clipboard.writeText(password);
    }
  return (
    <div >
    <div>
    <h1 className='text-white bg-black p-5'> Password Generator</h1>
    </div>
    <div className='flex justify-center bg-gray-700'>
    <input type='text' value={password} placeholder='paswword' className='rounded-md p-2 mx-1 my-3 text-sm' onLoad={passwordgenerator} readOnly/>
    <button className='p-2 mx-1 my-3 bg-black text-white rounded-md' onClick={handleClick} >COPY</button>
    </div>
    <div className='flex justify-center py-2 text-white bg-gray-700'>

      <input type='range' min={6} max={20} value={length} className='mx-3 cursor-pointer' onChange={(e)=>
        setLength(e.target.value)
      }/>
      <label>length : {length}</label>

      <label className='mx-2'>
        Number : <input type="checkbox" id='number' name="Number" defaultChecked={number} onChange={(pre)=>{setNumber((pre)=>!pre)}} />
      </label>
      <label>
        Character : <input type="checkbox" id='character' name="Character" defaultChecked={false} onChange={(pre)=>setCharacter((pre)=>!pre)} />
      </label>
    </div>
    
    </div>
  );
}

export default App;
