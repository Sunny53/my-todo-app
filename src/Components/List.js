import React from 'react';
import { FaWindowClose } from "react-icons/fa";

const List = ({todoList,setTodo }) =>{

    const displayList = () => {
        return(
            <div>
                {
                    todoList.map(item => {
                        return(
                            <div className="task_item">
                                <li>{item.todo} <FaWindowClose class="close_btn" onClick={() => {setTodo(todoList.filter(i=> i.id !== item.id))}}/></li>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return(
        <div className="list_container">
            <ul>
                {displayList()}
            </ul>
        </div>
    )
}

export default List