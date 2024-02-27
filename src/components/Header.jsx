
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { useState } from "react";
import { sortingDataFunc } from "../redux/dataSlice";
import { searchDataFunc } from "../redux/dataSlice";
function Header() {
const dispatch=useDispatch();


  return (
    <div className='w-full flex items-center flex-wrap justify-between bg-indigo-600 text-white px-4 py-3'>

      <div className="text-3xl">AMELE GETİR</div>

      <div className="mt-3">

      <div className="flex items-center gap-5 ">
        <div className="text-black">
          <select onChange={e=>dispatch(sortingDataFunc(e.target.value))} className="h-10 rounded-lg" name="" id="" >
            <option  value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input onChange={e=>dispatch(searchDataFunc(e.target.value))} className="h-10 rounded-lg p-3 text-black" type="text" name="" id="" placeholder="Arama Yapınız" />
        </div>
        
        <div onClick={()=>dispatch(modalFunc())} className="bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
        <MdPostAdd size={24} />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Header