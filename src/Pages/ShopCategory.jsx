import { useContext } from "react"
import "../CSS/LoginSignup.css"
import { ShopContext } from "../Context/ShopContext"
import Item from "../Components/Item/Item"

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)
  return (
    <div className="shop-category">
      <div className="sale">
        <img src={props.banner} alt="" height="200px" />
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
