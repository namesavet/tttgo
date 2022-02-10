import {Item} from "./Item"


export function Hoteldetail(props){
    const {items} = props

    return(
        <ul>
            {items.map((e)=>{
                return <Item {...e} key={e.id}/>
            })}
        </ul>
    )



}