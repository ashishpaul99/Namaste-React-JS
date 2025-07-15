import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const store = useSelector((store) => store);
    const cardItems=store.cart.items;
   
    console.log(cardItems);
    
    const dispatch=useDispatch();

    // clear cart function
    const handleClearCart=()=>{
        dispatch(clearItem(cardItems));
    }
     if (cardItems.length === 0) {
        return <h1 className="text-center mt-20 text-2xl font-bold">🛒 Your Cart is Empty</h1>;
    }

    return (
        <div className="grid grid-cols-[1fr_2fr_1fr] h-screen bg-gray-200">
            <div></div>

            {/* Center Cart Container */}
            <div className="bg-white my-[40px] p-5 rounded-md shadow-lg overflow-y-auto max-h-screen">
                {/* Restaurant Info */}
            <div className="flex justify-between">
                <div className="flex gap-6 ml-6 mb-8">
                    <img
                        className="w-24 h-24 object-cover rounded"
                        src={CDN_URL + cardItems[0].resImageId}
                        alt="Restaurant"
                    />
                     <div>
                            <h3 className="font-bold text-2xl">{cardItems[0].resName}</h3>
                            <h4 className="text-lg text-gray-600">{cardItems[0].resCity}</h4>
                     </div>

                    </div>
                
                     <div className="">
                          <button className="border border-gray-400 p-2 font-bold bg-yellow-300 rounded-md" onClick={handleClearCart}>Clear cart</button>
                     </div>
                </div>

                {/* Render All Items */}
                {cardItems.map((item,index)=>(
                    <ItemList 
                    itemData={item.data}
                    key={item.data.id+"-"+index}
                    resName={item.resName}
                    resCity={item.resCity}
                    resImageId={item.resImageId}
                    />
                ))}
            </div>

            <div></div>
        </div>
    );
};

export default Cart;


