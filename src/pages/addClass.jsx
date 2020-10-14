import React, { Component } from 'react';

class AddClass extends Component {
    state={
        invalidForm: true,
        formData: {
            name: ''
        }
    };
    formRef = React.createRef()
    handleAddClassRoom = e => {
        e.preventDefault();
        this.props.handleAddClassRoom(this.state.formData)
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
            <h3 class="addClassLabel">Add a Classroom here:</h3>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleAddClassRoom}>
                <div className='class-add-form'>
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


export default AddClass