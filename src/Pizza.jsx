import { useEffect, useState } from "react";
export default function Pizza() {
  const [pizza,setpizza] = useState([]);
  async function getPizza(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
    const data = await response.json();
    setpizza(data.recipes);
  }
  useEffect( ()=>{
    getPizza();
  },[]);

  return(
    <div className="container">
      {pizza.length == 0?<h2>loading...</h2>:
      <div className="row">{
        pizza.map(pizza=>
          <div className="col-lg-3 col-md-4 col-m">
            <div className="pizza">
              <div className="title">
              <h2>{pizza.title.split(' ').slice(0, 3).join(' ')}</h2>
              </div>
              <img src={pizza.image_url} className="img-fluid w-100 fixed-image" />
            </div>
          </div>
        )
      }
      </div>
      }
    </div>
  )
}