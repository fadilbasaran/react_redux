
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
function Header() {
const dispatch=useDispatch();

  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
      <div className="text-3xl">RAECT UYGULAMA</div>
      <div className="flex items-center gap-5 ">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="" >
            <option  value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input className="h-10 rounded-lg p-3" type="text" name="" id="" placeholder="Arama Yapınız" />
        </div>
        <div onClick={()=>dispatch(modalFunc())} className="bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
        <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  )
}

export default Header