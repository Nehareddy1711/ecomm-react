import React from 'react'

export default function ShoppingCart() {
    let products=[
        {name:"Coffee", price:120,  image:"/ECOMM-REACT/Images/Coffee.png"},
        {name:"Tea", price:100,  image:"/ECOMM-REACT/Images/Tea.webp"},
        {name:"BlackCoffee", price:200, image:"/ECOMM-REACT/Images/BlackCoffee.webp"},
        {name:"Mocha", price:250, image:"/ECOMM-REACT/Images/Mocha.jpg"}, 
        {name:"GreenTea", price:150, image:"/ECOMM-REACT/Images/Green Tea.webp"},
        {name:"Lattee", price:200, image:"/ECOMM-REACT/Images/Lattee.jpg"},
    ];

     return (
    <div id='cart'>
        <center><h1>Cafe Niloufer</h1></center>
        <marquee><h1>Welcome to Cafe Niloufer</h1></marquee>
        <div className='main'>
            {products.map((value,index)=>(
                <div class="container">
                    <div><img src={value.image} width={300} height={250}></img></div>
                    <div id="fname">{value.name}</div>
                    <div>{value.price}</div>
                    <div><button>ADD</button></div>
                </div> 

                ))
            }
        </div>
    </div>
  )
}