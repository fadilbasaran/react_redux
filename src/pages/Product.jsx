import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import Modal from "../components/Modal"
function Product() {
  const {modal} = useSelector(state => state.modal)
  console.log(modal,"Modal")
  const btnFunc= ()=>{
    
  }
  return (
    <div className="">
      <ProductCard/>
      {modal&& <Modal title={"Ürün Oluştur"} btnFunc={btnFunc()} btnText={"Ürün Ekle"}/>}
    </div>
  )
}

export default Product