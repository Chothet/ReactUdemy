import {useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom';

import './Todo.css';


export default function TodoApp(){
    return (
        <div className="TodoApp">
            <h1>TODO MANAGEMENT APPLICATION</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <LoginComponent /> }></Route>
                    <Route path='/login' element={ <LoginComponent /> }></Route>
                    <Route path='/welcome/:username' element={ <WelcomeComponent /> }></Route>
                    <Route path='*' element={ <ErrorComponent /> }></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

function LoginComponent(){

    const[username, setUsername] = useState('in28minutes');
    const[password, setPassword] = useState('pass');
    const[showSuccessMessage, setShowSuccessMessage] = useState(false);
    const[showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event){   
        setUsername(event.target.value);        //console.log(event.target.value);
    }

    function handlePasswordChange(event){   
        setPassword(event.target.value);        //console.log(event.target.value);
    }

    function handleSubmit(){
       
        if(username==='ChoThet' && password==='123'){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);  //important
        }else{
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }                           

    }                        // console.log(username);console.log(password);

    return (
        <div className="Login">
            <div className="container">
                {showSuccessMessage && <div className="successMessage">Authenticated Successfully!</div>}
                {showErrorMessage && <div className="errorMessage">Authentication Failed! Please check your credentials.</div>}
                <div className="LoginForm">
                    <h2>User Login</h2>
                    <div >
                        <label>User Name:</label>
                        <input type="text" name="username" className="form-control" value={username} onChange={handleUsernameChange}></input>
                    </div>
                    <div >
                        <label>Password:</label>
                        <input type="password" name="password"className="form-control" value={password} onChange={handlePasswordChange} ></input>
                    </div>
                    <div>
                        <button type="submit" name="login" className="loginButton" onClick={handleSubmit}>login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}



function WelcomeComponent(){

    const {username} = useParams();             // const params = useParams(); console.log(params.username);console.log(username);
    
    return (
        <div className="Welcome">
            <h3>Welcome <span><i style={{ color: 'green' }}>{username}</i></span></h3>

        </div>
    )
}

function ErrorComponent(){
    return (
        <div className="Error">
            <h2>We are working really hard.</h2>
            <div>Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ. </div>

        </div>
    )
}