import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
const UserList =()=>{


    const [user,SetUser] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
      SetUser(
        axios.get('https://jsonplaceholder.typicode.com/users')
       .then((res)=>{
         SetUser(res.data)
        setLoading(false)
        })
       .catch(err=>console.log(err)))
    }, []);

    return(
      <div>
        {loading ? <h1>loading</h1> :  <div>
            {user.map((user)=> {
   (
  <Card
    key={user.id}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{user.name} </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>

    )
})}
        </div> }
      </div>
       
    ) 
}

export default UserList