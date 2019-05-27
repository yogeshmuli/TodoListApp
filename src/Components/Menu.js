import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Listgroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types"

class Menu extends Component {
    
    state={
        show:false
    }
    fullheight={
        height:"100vh",
        width:"30vw",
        backgroundColor:"rgb(52, 58, 64)"
    }
    linkstyle={
        backgroundColor:"rgb(52, 58, 64)",
        color:"blanchedalmond",
        fontFamily: "'Roboto', sans-serif",
    }

    render(){
        var menu=null
        if (this.props.show){
            menu=
            <div style={this.fullheight}>
                <Listgroup variant="flush">
                    <Listgroup.Item style={this.linkstyle}><NavLink style={this.linkstyle} to="/">Home</NavLink></Listgroup.Item>
                    <Listgroup.Item style={this.linkstyle}><NavLink style={this.linkstyle} to="/Mytask">My task</NavLink></Listgroup.Item>
                    <Listgroup.Item style={this.linkstyle}><NavLink style={this.linkstyle} to="/CompletedTask">Completed Tasks</NavLink></Listgroup.Item>
                    <Listgroup.Item style={this.linkstyle}><NavLink style={this.linkstyle} to="/FormValidation">Form Validation</NavLink></Listgroup.Item>
                </Listgroup>
            </div>
        }
       return(
           <div>
             {menu}
           </div>
         
       )
    }flushflush
}
Menu.propTypes={
    show:PropTypes.bool
}
export default Menu