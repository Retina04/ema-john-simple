import { getShoppingCart } from "../utilities/fakedb";

const cartLoaderProducts  =async()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    //if cart data is  in database ,you have to use async await
    const storedCart = getShoppingCart()
    const savedCard =[];
    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd=>pd.id ===id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCard.push(addedProduct)
        }
    }
//if you have to sent two things
// return [products ,savedCard]



    
    // console.log(products);
    return savedCard;


}
export  default cartLoaderProducts;