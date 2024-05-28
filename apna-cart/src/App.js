import logo from './logo.svg';
import './App.css';
import NAVbar from './components/NAVbar';
import ProductList from './components/ProductList'
import React,{ useState } from 'react';
import Footer from './components/Footer'
import AddItem from './components/AddItem';

function App() {
  const initialproductList=[{price:18000,phone:"Poco-X4",quantity:0},{price:24000,phone:"Poco-X6",quantity:0},{price:10000,phone:"Samsung",quantity:0}];
  
  let [productList,setproductList]=useState(initialproductList);
  let [totalAmount,settotalAmount]=useState(0);
 // let [resetdata,setresetdata]=useState();
  


   const incrementquantity=(index)=>{
    let newproductList=[...productList];
    let newTotalAmount=totalAmount;
    newproductList[index].quantity++;
    newTotalAmount+=newproductList[index].price

    settotalAmount(newTotalAmount);
    setproductList(newproductList);

  }

  const decrementquantity=(index)=>{
    let newproductList=[...productList];
    let newTotalAmount=totalAmount;
    if(newproductList[index].quantity>0)
      {
        newproductList[index].quantity--;
        newTotalAmount-=newproductList[index].price;
      }
    
    settotalAmount(newTotalAmount);
    setproductList(newproductList);
  }


  const resetQuantity=()=>{
    let newproductList=[...productList];
    newproductList.map((product)=>{
      product.quantity=0
    })
    setproductList(newproductList)
    settotalAmount(0);
    
  }

  const removeItem=(index)=>{
    let newproductList=[...productList];
    let newTotalAmount=totalAmount;
    
    newTotalAmount-=newproductList[index].quantity*newproductList[index].price
    newproductList.splice(index,1);
    setproductList(newproductList);
    settotalAmount(newTotalAmount);
  }

  const addItem=(phone,price)=>{
    let newproductList=[...productList]
    newproductList.push({
      price:price,
      phone:phone,
      quantity:0
    })
    setproductList(newproductList);

  }

  return (
    <>
    <NAVbar/>
    <main className='container mt-5' >
      <AddItem addItem={addItem}/><br />
      <ProductList
       productList={productList} 
       incrementquantity={incrementquantity} 
       decrementquantity={decrementquantity}
       removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    
    </>
  );
}

export default App;
