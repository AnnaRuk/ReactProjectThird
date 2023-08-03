import { Link } from "react-router-dom";


interface Rating{
    rate:number,
    count:number
}

interface ItemType{
    id:number,
      title:string,
      price:number,
      description:string,
      category:string,
      image:string,
      rating:Rating
}

  interface Props{
    items:ItemType[];
    index:number
  }
  
  
  export default function Items(props:Props):JSX.Element{

    const {items, index} = props

    console.log(items[index]);
    console.log(index);

  
  return(
  <div>
 <h2>Item {items[index].id}</h2>
 <img style={{width:'60px'}} src={items[index].image} alt="" />

 <ul>
 <li>Title:  {items[index].title}</li>
 <li>Price: {items[index].price} euro</li>
 <li>Description: {items[index].description}</li>
 <li>Category: {items[index].category}</li>
 <li>Rating/rete: {items[index].rating.rate}</li>
 <li>Rating/count: {items[index].rating.count}</li>
 
</ul>
  </div>
  );
  
  }
  