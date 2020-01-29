import React,{ Fragment, useState }  from 'react';
import Todos from '../userdata/Todos';
import Addtodo from '../userdata/Addtodo';
import { Redirect } from 'react-router-dom';

const Home = ({ isUserLogedIn }) => {

  const [todos,setTodos] = useState([]);

  const statedelFunc = (id) => {
    const newtodolist = todos.filter(t => {
      return t.id !== id 
      }
    )
    setTodos(newtodolist)
  }

  const Addertodo = (todo) => {
     todo.id = Math.random();
     const newtodos =[...todos,todo];
     setTodos(newtodos)
  }

  if(!isUserLogedIn){ return <Redirect to='/signin' /> }
  else{
  return (
    <Fragment>
      <div className="App container">
        <h1 className= 'center blue-text' >Todo's List!!</h1>
        <Todos statedel={statedelFunc} todostate={todos} />
        <Addtodo propHandler={Addertodo}/>
      </div>
    </Fragment>
    )}
}

export default Home
