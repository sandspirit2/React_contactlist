import React from 'react';
import Card from "./card"

const CardList= (props)=>{
 


 return <div className = "row">
        {props.users.map((user)=> <Card name={user.name} username={user.username} email={user.email}/>
         )}
              
</div>



}

export default CardList;