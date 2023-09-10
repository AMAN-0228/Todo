import { MdRestoreFromTrash } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoDone, updateTodo } from "../redux/actions";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [editing, setediting] = useState(false);
  const [text, settext] = useState(todo.data);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(todo._id, text));
    setediting((prestate) => !prestate);
  };

  return (
    <Task
      style={{
        
        color: todo.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span
        onClick={() => dispatch(toggleTodoDone(todo._id))}
        className="task-text"
        style={{textDecoration: todo.done ? "line-through" : "", display: editing ? "none" : "inline-block"}}
      >
        {todo.data}
      </span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </form>
      <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
        <MdRestoreFromTrash />
      </span>
      <span
        className="icon"
        onClick={() => setediting((prestate) => !prestate)}
      >
        <BiSolidPencil />
      </span>
    </Task>
  );
};

const Task = styled.li`
  background-color: #34495e;
  padding: 15px;
  margin: 5px;
  list-style-type: none;
  border-radius: 5px;
  cursor: pointer;
  .task-text{
    width: 80% ; 
  }
  span {
    color: #ffffff;
  }
    .icon {
    float: right;
    margin-right: 20px;
    font-size: 25px;
    }
  form {
    input {
      width: 80%;
      padding: 5px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #ffffff;
      color: #ffffff;
      outline: none;
    }
  }
  @media(max-width:676px){
    .task-text{
        width: 60%;
    }
    form{
        input{
            width: 40%;
        }        
    }
    
  }
`;

export default Todo;
