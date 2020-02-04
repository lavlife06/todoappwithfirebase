 /* eslint-disable react-hooks/exhaustive-deps */
import React,{ Fragment, useState, useEffect}  from 'react';
import Todos from '../userdata/Todos';
import Addtodo from '../userdata/Addtodo';
import { Redirect } from 'react-router-dom';
import { db } from '../config/fbConfig';
// import { db } from '../config/fbConfig';

const Home = ({ isUserLogedIn }) => {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    db.collection('users').doc(isUserLogedIn).get().then((res) => {
      console.log(res.data());
      setTodos(res.data().todolist);
      console.log(res.data().todolist)
    });
  }, [])

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
     setTodos(newtodos);
     db.collection('users').doc(isUserLogedIn).set({
      todolist : newtodos
    }, { merge: true });
  }

  if(!isUserLogedIn){ return <Redirect to='/signin' /> }
  else{
    console.log(todos);
    db.collection('users').doc(isUserLogedIn).get().then((res) => {
      console.log(res.data().todolist);
    });
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
