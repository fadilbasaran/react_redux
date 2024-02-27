import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";
function ProductCard({dt}) {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch =useDispatch();
  const navigate =useNavigate();

  const updateFunc=()=>{
    dispatch(modalFunc());
    setOpenEdit(!openEdit);
    navigate(`/?udate=${dt?.id}`)
  }
  console.log(dt," Card Data")
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full  absolute rounded-md" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-right text-white w-full px-2">
      <div className="text-lg font-semibold">{dt?.name}</div>
      <div>{dt?.price} €</div>
      </div>

      <div className="cursor-pointer absolute right-1 top-1 p-2 top-0 bg-indigo-600 rounded-full">
      <BsThreeDots onClick={()=>setOpenEdit(!openEdit)} color="white" size={17}/>
      </div>
      <div>
        {
          openEdit&&
          (
            <div className=" bg-white rounded-md border   border-white shadow-lg p-2 text-white absolute top-9 text-sm right-2">
              <div onClick={()=>dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer bg-indigo-500 text-right p-1">Sil</div>
              <div onClick={updateFunc}  className="cursor-pointer bg-indigo-300 text-right p-1">Güncelle</div>
            </div>
          )

        }
      </div>
      
    </div>
    
  )
}

export default ProductCard