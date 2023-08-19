import React from 'react'
import { products } from './products'

export default function Massiv_Methods() {
    // console.log(products);
 // 1. Сформировать массив из названий товаров и вывести его в консоль:  
    //  const result = products.map(el => el.title)     
    //  console.log(result);
//-----------------------------------   

// 2. Сформировать массив из цен товаров и вывести в консоль:
    // const res1 = products.map(el => el.price)
    // console.log(res1);
//--------------------------------------

// 3. Сформировать массив из объектов, котроые содержат св-ва title и price:
// 1 способ:
    // const res2 = products.map(({title, price}) => {
    //     return {
    //         title: title,
    //         price: price
    //     }
    // })
    // console.log(res2);

 // 2 способ:
    //  const res2 = products.map(({title, price}) => {
    //     return {title, price}
    // })
    // console.log(res2);

 // 3 способ - самый лучший:
    // const res2 = products.map(({title, price}) => ({title, price}))
    // console.log(res2);

 //-------------------------------------------
 
 // 4. Сформировать массив из объектов, в которых есть все св-ва кроме marks:
// 1 способ: 
    // const res3 = products.map(({id, title, price,discount }) => ({id, title, price, discount}))
    // console.log(res3);

// 2 способ - лучший!!!:
// const res3 = products.map(({marks, ...prod}) => prod)
// console.log(res3);
    
//---------------------------------------------

// 5. Создать массив, котрый состоит только из тех товаров, у которых цена больше 100 и массив должен содержать название товаров:
    const res4 = products
       .filter(({price}) => price > 100 )
       .map(({title}) => title)
    console.log(res4);
// можно делать такие цепочки из разных методов!    
//--------------------------------------------   

  return (
    <div></div>
  )
}