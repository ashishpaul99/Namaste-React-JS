
import ItemList from "./ItemList"

const RestaurantCategory=({data,dummy,showItems,setShowIndex})=>{


     
    // console.log(data);
    const itemsList=data?.itemCards;
    // console.log(itemsList)

    const handleClick=()=>{
      setShowIndex();
    };
    return(
        <div>
            {/* Header */}
            <div className="w-full my-5 bg-gray-50 shadow-lg p-4 flex justify-between items-center cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                     <span className="text-xl">🔽</span>       
            </div> 
            {/* Accordian Body - item list component */}
            {   
              showItems && itemsList.map((item) => (
               <ItemList key={item.card?.info?.id} itemData={item.card?.info} dummy={dummy} />
                ))
            }    
        </div>
    )
}
export default RestaurantCategory;


