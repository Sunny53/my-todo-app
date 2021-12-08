import {React} from "react";

const Form = ({setTodo, len}) => {
    
    var newTodo = ""
    
    const formHandler = (e)=>{
        e.preventDefault()
        newTodo = e.target.firstChild.value;
        
        if(newTodo !== ""){
            setTodo(state => [...state, {id:len, todo:newTodo}]);
        }
        e.target.firstChild.value = "";
    }

    const clearTodo = ()=>{
        setTodo(state=>[])
    }

    return(
        <div className="Form_container">
            <form onSubmit={formHandler}>
                <input type="text" placeholder="Write a Task..."/>
                <button class='add_btn' type="submit">Add</button>
                <button class='clear_btn' onClick={clearTodo}>Clear all</button>
            </form>
        </div>
    )
}

export default Form