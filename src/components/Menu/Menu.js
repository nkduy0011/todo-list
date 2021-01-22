import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';
class Menu extends Component {
    constructor(){
        super()
        this.state = {
            MenuList : [
            {
                icon: "home",
                title:"HOME",
                active: true
            },
            {
                icon: "gift",
                title:"DEALS",
                active: false
            },
            {
                icon: "cloud-upload-alt",
                title:"UPLOAD", 
                active: false
            },
            {
                icon: "coffee",
                title:"WORK", 
                active: false
            },
            {
                icon: "cog",
                title:"SETTINGS",
                active: false
            }
            ]
        }
    }
    onItemClick(item, index) {
        return (event)=>{
            const { MenuList } = this.state;
            MenuList.map(i => i.active=false)//clear active
            this.setState({ 
                MenuList: [
                    ...MenuList.slice(0,index),
                    {
                        ...item,
                        active: true
                    },
                    ...MenuList.slice(index + 1)
                ]
            })
        };
    }
    render(){
        const { MenuList } = this.state;
        return(
            <div className="Menu" id="Menu">
                { 
                    MenuList.map((item, index) => 
                        <MenuItem key={index} item={item} onClick={this.onItemClick(item,index)}/>
                )
                }
            </div>
        );
    }
}
export default Menu;