import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import Modal from "../components/Modal"
import Input from "../components/Input"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import { createDataFunc, updateDataFunc } from "../redux/dataSlice"
import { modalFunc } from "../redux/modalSlice"
import { useLocation, useNavigate } from "react-router-dom"
function Product() {
  const { modal } = useSelector(state => state.modal)
  const { data,keyword } = useSelector(state => state.data)
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })
  const dispatch = useDispatch();
  const location= useLocation();
  const navigate=useNavigate();
  const onChangeFunc = (e, type) => {
    if (type === "url") {

      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    }
    else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }
  
  console.log(modal,"Modal")
  console.log(productInfo," Product ")
  console.log(data," :Data")
  let loc= location?.search.split("=")[1];

  useEffect(()=>{
    if (loc) {
      setProductInfo(data.find((dt => dt.id ==loc )))
    }
  },[loc])

  console.log()

  const btnCreateFunc = (e) => {
    //e.preventDefault()//Buna bakılacak
    setProductInfo({name: "", price: "", url: "" })
    dispatch(createDataFunc({...productInfo, id:data.length+1}))
    dispatch(modalFunc())
   
  }
  const btnUpdateFunc = () => {
    dispatch(updateDataFunc({...productInfo,id:loc}));
    dispatch(modalFunc())
    navigate("/")

  }
  const contentModal = 
  loc?
  (
    <>
      <Input value={productInfo.name} type={"text"} placeholder={"Ürün Adı Giriniz"} name={"name"} id={"name"} onChange={(e) => onChangeFunc(e, "name")} />
      <Input value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={(e) => onChangeFunc(e, "price")} />
      <Input  type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={(e) => onChangeFunc(e, "url")} />
      <Button btnText={"Ürün Güncelle"} onClick={btnUpdateFunc} />
    </>
  ):(
    <>
      <Input  type={"text"} placeholder={"Ürün Adı Giriniz"} name={"name"} id={"name"} onChange={(e) => onChangeFunc(e, "name")} />
      <Input  type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={(e) => onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={(e) => onChangeFunc(e, "url")} />
      <Button btnText={"Ürün Oluştur"} onClick={btnCreateFunc} />
    </>
  )

  const filteredItems= data.filter(dt =>dt.name.toLowerCase().includes(keyword.toLowerCase()))
  return (
    <div className="">
      <div className="flex items-center flex-wrap">
        {
          filteredItems?.map((dt,i)=>(
            <ProductCard key={i} dt={dt} />
          ))
        }
      </div>
      {modal && <Modal title={loc? "Ürün Güncelle" :"Ürün Oluştur"} content={contentModal} />}
    </div>
  )
}

export default Product