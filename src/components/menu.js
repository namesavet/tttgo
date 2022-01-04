import React, { Component } from "react";
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css'


class Menu extends Component {
    render() {
        return (
            <Stack direction="horizontal" gap={3} style={{backgroundColor:'GhostWhite',height:'100px'}}>
                <div style={{margin:'auto'}}>
                     <div className="bg-light border">First item</div>
                <div className="bg-light border">Second item</div>
                <div className="bg-light border">Third item</div>
                </div>
               
            </Stack>
        )
    }
}
export default Menu;