import React, { useState } from "react";
import { getItem,setItem } from "../services/LocalStorageFuncs";
import {BsFillCartDashFill} from 'react-icons/bs';
import "./Cart.css";
import { Header } from "../components/Header";




export const Cart = () =>{
    const[data,setData] = useState( getItem('carrinhoYT') || [])

    const removeItem= (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoYT',arrFilter)
    }

    const subTotal= data.reduce((acc,cur)=> acc + cur.price ,0)
    
    return(
        <div >
            <Header/>
            <h3 className="Subtotal">SubTotal: R$ {subTotal}</h3>
            <div className="productsArea">
                
                {
                    data.map((e) => (
                        <div className="Products" key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title}/>
                            <h4>{e.price}</h4>
                            <button className="button"
                             onClick={()=> removeItem(e)}
                             >
                                <BsFillCartDashFill/>
                            </button>
                        </div>
                    ))
                }
 
                </div>
           
              

            </div>
           
        
    )
}