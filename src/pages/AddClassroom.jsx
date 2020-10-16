import React, { Component } from 'react';

class AddClassroom extends Component {
    state={
        invalidForm: true,
        formData: {
            name: ''
        }
    };
    formRef = React.createRef()
    handleAddClassroom = e => {
        e.preventDefault();
        this.props.handleAddClassroom(this.state.formData)
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
            <h3 className="addClassLabel">Add a Classroom here:</h3>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleAddClassroom}>
                <div className='classroom-add-form'>
                    <label> Class Name/Desigation</label>
                    <input 
                        className="form-control"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                        />
                        </div>
                        <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
           Add Class
         </button>
                
            </form>
            </>
        )
    }
}


export default AddClassroom