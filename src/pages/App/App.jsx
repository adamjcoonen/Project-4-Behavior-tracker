import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import * as classRoomAPI from '../../utils/classRoom-api';
import StudentDetails from '../StudentDetails';
import UserDisplay from '../UserDisplay';
import ClassDetails from '../ClassDetails';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      classes: [],

    };
  };
  async componentDidMount() {
    const classes = await classRoomAPI.getAll();
    console.log(classes)
    this.setState({ classes });
    console.log(classes, "classes here")
  };

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  userDisplay = () => {
    this.setState({user: userService.getUser})
  }
  handleAddClassRoom = async newClassData => {
    console.log(this.state.user)
    console.log(newClassData, 'this is newClassData' )
    const newClass = await classRoomAPI.create(newClassData, this.state.user._id);
    this.setState(
      state => ({
      classes: [...state.classes, newClass],
      }),
      () => console.log(this.state)
      // this.props.history.push('/')
    ) 
    
  }

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
      
        <Switch>
        <Route exact path='/' render={() =>
              <UserDisplay user={this.state.user} handleAddClassRoom={this.handleAddClassRoom} classRooms={this.state.classes}
              

              />
              
            }/>
          
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/ClassDetails' render={() => 
            <ClassDetails
            />
          }/>
          <Route exact path='/StudentDetails' render={() => 
            <StudentDetails StudentDets={this.state}
            />
          }/>
          
        </Switch>
      </div>
    );
  }
}

export default App;
