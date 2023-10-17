import { CDN_URL } from "../utils/constants";


const RestaurantCard =(props)=>{
    const{resData} = props;

    console.log(resData);
  
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,
      } = resData?.info;
    return(
      <div className="p-3 m-2 w-[200px] h-[290px] rounded-lg hover:bg-gray-100" >
        
        <img  className="w-40 h-28 rounded-lg"  alt="res-logo" 
        src={CDN_URL + cloudinaryImageId } />
        
        
        <h4 className="font-bold py-2 text-sm">{name}</h4>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
        
        <h4 className="text-sm">{costForTwo}</h4>
        <h4 className="text-sm">{resData.info.sla.deliveryTime}minutes</h4>
        <h4 className="text-sm">{avgRating}⭐</h4>
      </div>
  
    );
  };
  //Heigher order function//
  export const withPromotedLabel =(RestaurantCard)=>{
    return(props)=>{
             return(
              <div>
        <label>Promoted</label>
        <RestaurantCard{...props}/>
        </div>
      )
    };
  };
  export default RestaurantCard;