import React, { Component } from 'react';

class AddStudent extends Component {
    state={
        invalidForm: true,
        formData: {
            name: '',
            
            classId: this.props.classId
        },
        
    };
    formRef = React.createRef()
    handleAddStudent = e => {
        e.preventDefault();
        this.props.handleAddStudent(this.state.formData, this.state.classId)        
    };
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    render() {
        return(
            <>
            <h3 className="addStudentLabel">Add a Student here:</h3>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleAddStudent}>
                <div className='Student-add-form'>
                <ul>
                   <li> <label> Student Name </label>
                    <input 
                        className="form-control"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                        /> </li>
                   <li> <label> Date of Birth</label>
                    <input type="date" 
                        className="form-control"
                        name="dob"
                        value={this.state.formData.dob}
                        onChange={this.handleChange}
                        required
                        /> </li>
                   <li> <label> IEP Date</label>
                    <input type="date" 
                        className="form-control"
                        name="iepDt"
                        value={this.state.formData.iepDt}
                        onChange={this.handleChange}
                        required
                        /> </li>
                   <li> <label> Behavior Intervention Plan Date</label>
                    <input type="date" 
                        className="form-control"
                        name="bIPDt"
                        value={this.state.formData.bIPDt}
                        onChange={this.handleChange}
                        required
                        /> </li>
                        <li> <label>Disability Code</label>
                    <input 
                        className="form-control"
                        name="disCode"
                        value={this.state.formData.disCode}
                        onChange={this.handleChange}
                        required
                        /> </li>
                        </ul>
                        </div>
                        <button
                            type="submit"
                            className="btn"
                            disabled={this.state.invalidForm}
                            >
                            Add Student
                            </button>
                
            </form>
            </> 
        )
    }
}


export default AddStudent