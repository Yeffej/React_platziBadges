import React from "react";

import BadgeInput from "./badgeInput";

class BadgeForm extends React.Component {
    
    render() {
       return(
        <div>
            <h1>{this.props.title}</h1>
            <form>
                <BadgeInput onChange={this.props.onChange} 
                value={this.props.formValues.firstName} title="First Name" name="firstName" placeholder="Type here"/>
                <BadgeInput onChange={this.props.onChange} 
                value={this.props.formValues.lastName} title="Last Name" name="lastName" placeholder="Type here"/>
                <BadgeInput onChange={this.props.onChange} 
                value={this.props.formValues.email} title="Email" name="email" placeholder="Type here"/>
                <BadgeInput onChange={this.props.onChange} 
                value={this.props.formValues.jobTitle} title="Job Title" name="jobTitle" placeholder="Type here"/>
                <BadgeInput onChange={this.props.onChange} 
                value={this.props.formValues.twitter} title="Twitter" name="twitter" placeholder="Type here"/>

                <div>
                    <button onClick={this.props.onSubmmit} type="button" className="btn btn-primary mb-2">Save</button>
                </div> 
            </form>     
        </div>
       )
    }
}

export default BadgeForm;