import { Link, useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";


// TODO 
interface ItemType{
  id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rating
}
interface Rating{
  rate:number,
  count:number
}
export default function Items():JSX.Element{

  

//  const items =  [{
//     id:1,
//     title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price:109.95,
//     description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category:"men's clothing",
//     image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating:{"rate":3.9,"count":120}}];

    const [itemsArray, setItemsArray] = useState<ItemType[]>([]);

    async function loadItems():Promise<void> {
      const response = await fetch('https://fakestoreapi.com/products');
      console.log(response);
      const array = await response.json();
      setItemsArray(array);
      
    }
  
    useEffect(() => {
      loadItems();
    }, []);
    console.dir(itemsArray);
 const{itemsId}=useParams();
return(
<div>
  <ul>
 
    <ItemCard items={itemsArray} index = {Number(itemsId)} />

 </ul>

 </div>

);

}
