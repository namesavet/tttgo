import React from "react";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export function Hotel(props) {

    const [title,setTite] = useState('')
    const [amount,setAmount] = useState(0)

    const inputTitel = (event)=>{
        setTite(event.target.value)

    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
       
    }
    const saveItem =(event)=>{
        event.preventDefault()
        const itemData = {
           id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTite('')
        setAmount(0)
    }

  return (
    <div>
      <form onSubmit={saveItem}>
      <div>
          <label>ชื่อรายการ</label>
          <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitel} value={title}/>
        </div>
        <div >
          <label>จำนวนเงิน</label>
          <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
        </div>
        <div>
            <button type="submit">yes</button>
        </div>
      </form>
    </div>
  )
}