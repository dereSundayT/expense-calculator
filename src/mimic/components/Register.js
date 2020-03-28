import React, {Fragment,useState} from 'react';
//import { on } from 'nodemon';


const Register = () => {
    const [formData, setFormData] = useState({
        name:'', email:'',password:''
    })
    const {email, name, password,password2}  = formData
   const onChange =  (e)  =>{
       e.preventDefault();
       setFormData({...formData,[e.target.name]:e.target.value});
       if(password !== password2 ){
           console.log('Password is not matching');
       }else{
           //call onto the action: register({name,email,password})
       }
    }
    return(
        <Fragment>
            {name }
            <div>
                <input type='text'  name='name' placeholder='my name'  value={name}  onChange={e =>onChange(e)} />
                <br/>
                <input type='email' name='email' value={email} onChange={e =>onChange(e)} />
                <input type ='password'  name='password' value={password} onChange={e=>onChange(e)}/>
                <input type ='password'  name='password2' value={password2} onChange={e=>onChange(e)}/>
            </div>
        </Fragment>

    )

}

export default Register
