import React, { Component } from 'react';
import AddItem from './AddItem';
import ListItem from './ListItem';
import CurrentItem from './CurrentItem';
import './Todolist.css';
class Todolist extends Component {
    constructor(){
        super()
        this.state = {
            currentFilter: "All",
            toDoItem : [
                {
                    item: "an",
                    active: false
                },
                {
                    item: "choi",
                    active: false
                },
                {
                    item: "ngu",
                    active: false
                }
            ],
            checkall: false,
            itemLeft: 3
        }
        this.onAllClick = this.onAllClick.bind(this)
        this.onChangeCheck = this.onChangeCheck.bind(this)
        this.onDelComplated = this.onDelComplated.bind(this)
    }
    onItemClick(item, index){
        return (event) =>{
            const { toDoItem } = this.state;
            const active = item.active;
            this.setState({
                toDoItem: [
                    ...toDoItem.slice(0,index),
                    {
                        ...item,
                        active: !active
                    },
                    ...toDoItem.slice(index+1)
                ],
            }, () =>this.onChangeCheck())
        }
    }
    onChangeCheck(){
        const activearr = this.state.toDoItem.map(i => i.active);
        const itemLeft = this.state.toDoItem.filter(active => !active.active);
        this.setState({itemLeft: itemLeft.length})
                if(!activearr.includes(false))
                {
                    this.setState({
                        checkall : true
                    })
                }
                else
                this.setState({
                    checkall : false
                })
    }
    onDelClick(item, index){
        return(event) =>{
            const { toDoItem } = this.state;
            this.setState({
                toDoItem: [
                    ...toDoItem.slice(0,index),
                    ...toDoItem.slice(index+1)
                ]
            },() =>this.onChangeCheck())
        }
    }
    onAllClick() { 
        const { toDoItem } = this.state;
        toDoItem.map(i => i.active = true);
        this.onChangeCheck()
    }
    onAdd = (todo = {}) => {
        const { toDoItem } = this.state;
        this.setState({
            toDoItem :[
                ...toDoItem,
                {...todo}
                
            ]
        },() =>this.onChangeCheck())
    }
    onCurrentFilter = (current) => {
        if(current==="All")
        {   
            this.setState({
            currentFilter: current
            }); 
        }
        else if(current==="Active")
        {
        this.setState({
            currentFilter: current
        });
        }
        else if(current==="Complated"){
        this.setState({
            currentFilter: current
        });
        }
    }
    filterCheck = (currentFilter) => {
        const { toDoItem } = this.state;
        if(currentFilter==="All")
            return toDoItem;
        else if(currentFilter==="Active")
            return toDoItem.filter( active => !active.active);
        else if(currentFilter==="Complated")
            return toDoItem.filter( active => active.active);
    }
    onDelComplated(){
        const {toDoItem} = this.state;
        const newToDo = toDoItem.filter( active => !active.active);
        this.setState({
            toDoItem:[...newToDo]
        })
    }
    render(){
        const { checkall, itemLeft, currentFilter } = this.state;
        const  toDoItem  = this.filterCheck(currentFilter);
        const allItem = this.state.toDoItem.length;
        return(
            <div className='Todolist'>
                <div className="title">Todos</div>
                <div className = 'TodoTable'>
                    <AddItem onAdd={this.onAdd} onClick={this.onAllClick} checkAll={checkall}/>
                    {   
                        toDoItem.map( (item, index) => 
                        <ListItem item={ item }
                         key={ index } 
                         onClick={this.onItemClick(item,index)}
                         onChange={this.onChangeCheck} 
                         onDel={this.onDelClick(item,index)}
                         />)                       
                    }
                    <CurrentItem 
                    itemLeft={itemLeft} 
                    allItem={allItem} 
                    currentFilter={currentFilter} 
                    onClick={this.onCurrentFilter}
                    onDelComplated={this.onDelComplated}/>
                </div>
            </div>
        );
    }
}

export default Todolist
