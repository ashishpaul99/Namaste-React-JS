import { ITEM_IMAGE } from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";


const ItemList=({itemData,dummy,resName,resImageId,resCity})=>{
    console.log(itemData);
    // console.log(dummy);
    // console.log(resName);
    // console.log(resImageId);
    // console.log(resCity);
    
    

    const dispatch=useDispatch()

    const handleAddItem=(itemData)=>{
        const addedItemInfo={
            data:itemData,
            resName:resName,
            resCity:resCity,
            resImageId:resImageId
        }
        
        dispatch(addItem(addedItemInfo)) 

    }
   
    return(
        <div data-testid="foodItems" className="border-b-4">
        <div className="flex justify-between items-start my-6 ">
            <div  className="flex flex-col w-3/4  ">
                <span className="font-bold text-gray-800 text-lg">{itemData.name}</span>
                <span className="text-sm font-bold">{"₹"}{itemData.price/100}</span>
                <span className="text-gray-700">{itemData.description}</span>
            </div>
            <div>
                <img className="w-[156px] h-[144px] rounded-lg" src={ITEM_IMAGE+itemData.imageId}/>
                <div className="relative mt-2">
                     <button className=" absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white text-green-500 font-bold text-lg border shadow-lg rounded-md px-8 py-2 hover:bg-slate-200" 
                     onClick={()=>handleAddItem(itemData)}
                     >ADD</button>
                     
                </div>
            </div>
        </div>
    </div>
    )
};

export default ItemList;
