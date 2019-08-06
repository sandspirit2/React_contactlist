import React from "react"
import Form from "./form"
import Card  from "./card"

class FormContainer extends React.Component {

        constructor() {
            super();
            this.state = { users:[],update:false }
        }

        addUser = () => {
            var name = document.getElementById("name");
            var username = document.getElementById("username");
            var email = document.getElementById("email");
            var user = { name: name.value, username: username.value, email: email.value };
            this.setState(state =>{state.users.push(user)});
            name.value = "";
            username.value="";
            email.value = "";
            this.setState(state => state.update=true);
        }
        shouldComponentUpdate( nextProps, nextState){
           
            if(nextState.update){
                nextState.update = false;
                return true;
            }
            else{
                return false;
            }
        }

        render() {
            
            return <React.Fragment>
                <div className="container">

                <Form add = { this.addUser }/>
                <div className = "row">
                {this.state.users.map((user)=><Card name={user.name} username={user.username} email={user.email}/>)}
               </div>
               </div>
               </React.Fragment>
            };

        }

        export default FormContainer;