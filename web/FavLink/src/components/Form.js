import React, {Component} from 'react';
import LinkContainer from './LinkContainer';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = { 
           name: "",
           URL:""
       }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       
    }

    updateNameLable = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    updateUrllink = (event)=>{
        this.setState({
            URL: event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log (this.state.name)
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.props.handleSubmit(this.state)

    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for ="Name"> Name</label>
                <input
                type = "text"
                value= {this.state.name}
                onChange={this.updateNameLable}
                />
                
                <label for ="URL"> URL</label>
                <input
                type = "url"
                value= {this.state.URL}
                onChange={this.updateUrllink}
                />

                <button type = "submit">Submit</button>

            </form>
        )
    
    }
}

export default Form;
