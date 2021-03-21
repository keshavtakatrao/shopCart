import './App.css';
import Card from './card';
import { useState } from "react";



function App() {
  const [items,setItems] = useState([{ itemName: 'item 1', price: 24.99,isDisabled : false }, { itemName: 'item 2', price: 24.99,isDisabled : false }, { itemName: 'item 3', price: 24.99,isDisabled : false }, { itemName: 'item 4', price: 24.99,isDisabled : false },{itemName: 'item 5',price: 24.99,isDisabled : false},{itemName: 'item 6',price: 24.99,isDisabled : false}])

  const[cart,addCart] = useState([]);
  const[total,totalPrice] = useState(0);
  let handelAddCart = (data)=>{
      addCart([...cart, {
        item : data.itemName,
        price : data.price
      }])

      let newTotal = parseFloat(total) + parseFloat(data.price);
      totalPrice(newTotal.toFixed(2));

      let prodIndex = items.findIndex((obj) => {
        return obj.itemName == data.itemName
      });

      items[prodIndex].isDisabled = true;
      setItems([...items]);
  }

  let deleteCart = (index,product)=>{
    let newTotal = parseFloat(total) - parseFloat(cart[index].price);
    totalPrice(newTotal.toFixed(2));

    let arr = [...cart];
    arr.splice(index,1);
    addCart(arr);

    let prodIndex = items.findIndex((obj) => {
      return obj.itemName == product.item
    });

    items[prodIndex].isDisabled = false;
    setItems([...items]);

  }

  return (
    <>
      {/* nav */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home
            <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            {/* cart */}
            <h1 class="my-4">Cart</h1>
            <div class="list-group">
              {
                cart.map((info,index)=>{
                  return (<div class='row'>
                      <div class='col'>
                        <div href="#" class="list-group-item">{info.item} Price : {info.price}
                        <button class='btn btn-primary' onClick={()=>deleteCart(index,info)}>Delete</button>
                        </div>
                      </div>
                  </div> )
                })
              }
              <div class='list-group-item'>Total : {total}</div>
            </div>
          </div>
            {/* items */}
            <div class="col-lg-9">
              <div class='row'>
              {
                items.map((list)=>{
                  return <Card data={list} btnClick={handelAddCart}></Card>
                })
              }
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
