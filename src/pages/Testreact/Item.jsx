import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export function Item(props){
    const{title,amount} = props
    return (
        <li>{title}<span>{amount}</span></li>
    )
}
Item.Proptype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number,
}