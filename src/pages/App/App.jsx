import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import * as classroomAPI from '../../utils/classroom-api';
import * as studentsAPI from '../../utils/students-api';
import StudentDetails from '../StudentDetails';
import UserDisplay from '../UserDisplay';
import ClassroomDetails from '../ClassroomDetails';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';




class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      classrooms: [],
      students: [],

    };
  };
  async componentDidMount() {
    const classrooms = await classroomAPI.getAll();
    // const students = await studentsAPI.getAll();
    this.setState({ classrooms });
  };

  async componentDidUpdate(prevProps, prevState) {
    
    if (prevState.user !== this.state.user) {
      const classrooms = await classroomAPI.getAll();
      this.setState({
        classrooms: classrooms,
      });
    }
    
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  UserDisplay = () => {
    this.setState({user: userService.getUser})
  }
  handleAddClassroom = async newClassroomData => {
    const newClassroom = await classroomAPI.create(newClassroomData, this.state.user._id);
    this.setState(
      state => ({
      classrooms: [...state.classrooms, newClassroom],
      }),
      this.props.history.push('/')
    ) 
    
  }
  handleAddStudent = async newStudentData => {
    const newStudent = await studentsAPI.create(newStudentData, this.state.user._id  );
    this.setState(
      state => ({
        
        students: [...state.students, newStudent ]
      }),
      
      this.props.history.push('/')
      
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
              <UserDisplay user={this.state.user} handleAddClassroom={this.handleAddClassroom} classrooms={this.state.classrooms}
              

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
          <Route exact path='/ClassDetails' render={({location}) => 
    
            <ClassroomDetails 
              location={location}
              classrooms={this.state.classrooms}
              handleAddStudent={this.handleAddStudent}
              student={this.state.students}
              
              
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
