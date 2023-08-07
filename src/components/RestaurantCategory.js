import React,{useState} from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setcategoryIndex, categoryIndex }) => {
  const[clicked,setClicked] = useState(false)
  const[showlist,setShowList] = useState({showList})
  const onTitleClick = () => {
    if(clicked){
      setShowList(false)
      setcategoryIndex(null)
    }else{
      setClicked(true)
      setShowList(false)
      setcategoryIndex()
    }
    // setcategoryIndex()
  }
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={onTitleClick}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showlist && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
