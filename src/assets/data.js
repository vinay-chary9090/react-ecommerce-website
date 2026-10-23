import men_img1 from '../assets/men1.webp'
import men_img5 from '../assets/men5.webp'
import men_img6 from '../assets/men6.webp'
import men_img8 from '../assets/men8.jpg'

let data_product= [
     {
            id: 1,
            name: "Formal",
            category: "men",
            image: men_img1,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Jacket", category: "men", image:men_img5, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "puffer coat", category: "women", image:men_img6, new_price: 75.0, old_price: 120.0 },
        { id: 4, name: "T-shirt", category: "men", image: men_img8, new_price: 90.0, old_price: 140.0 }
]

export default data_product;