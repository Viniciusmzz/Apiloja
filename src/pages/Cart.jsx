import React, { useState } from "react";
import {BsFillCartDashFill} from 'react-icons/bs';
import {getItem,setItem} from '../services/LocalStorageFuncs';


export const Cart = () =>{
    const[data,setData] = useState( getItem('carrinhoYT') || [])

    const removeItem= (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoYT',arrFilter)
    }
    return(
        <div>
            <h1>Cart</h1>
            <div className="carrinhos">
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title}/>
                            <h4>{e.price}</h4>
                            <button
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