import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import Bredcrums from "../Components/BreadCrums/BreadCrums";
import ProductsDisplay from "../Components/ProductsDisplay/ProductsDisplay";
import Description from "../Components/Description/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => {
    return e.id == productId;
  });
  return (
    <div>
      <Bredcrums product={product} />
      <ProductsDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
