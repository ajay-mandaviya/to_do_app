import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { db } from "./firebase_config";
import firebase from 'firebase'
import {useState , useEffect} from 'react'
import TodoItem from './Todo'



function App() {
  const [todos ,setTodos] = useState([])
  const [todoInput ,setTodoInput] = useState("")
  const addTodo = (e) =>{
      e.preventDefault();
      db.collection('todos').add({
        inprogress: true,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        todo : todoInput
      })
     setTodoInput("") 
  }
  const getTodo = () =>{
    db.collection('todos').onSnapshot((snap)=>{
       setTodos( snap.docs.map((doc)=>({
          id   : doc.id,
          todo : doc.data().todo,
          inprogress : doc.data().inprogress,  
        }))
       );
    })
  }
  useEffect(() => {
    getTodo();
  }, []) 
  return (
    <div 
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
    <div >
    
      <h1 style={{textAlign:"center"}}>To Do App ✍</h1>

      <form>
      <TextField 
      id="standard-basic"
      label="Add To do" 
      style = {{maxWidth : "500px" , width : "90vw" , marginTop : "25px"}}  
      onChange = {(e)=> setTodoInput(e.target.value)}
      />
      <Button 
      type = "submit"
      onClick = {addTodo}
      style = {{display : "none"}}
      variant = "contained">Default</Button>
      </form>
      {
        todos.map((todo)=>{
          return (
            <TodoItem 
            todo = {todo.todo}
            inprogress = {todo.inprogress}
            id = {todo.id}
            key = {todo.id}
            />
          )
        })
      } 
      </div>
    </div>
    ); 
}

export default App;
