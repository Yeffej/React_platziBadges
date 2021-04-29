import React from "react"

import Badge from "../Components/badge";
import BadgeForm from "../Components/badgeForm";
import heroImage from "../images/badge-header.svg";

import "./Styles/badgeNew.css";

class BadgePageNew extends React.Component {
    state = {
        Form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
        },         
    }
    handleChange = e => {
        this.setState({
            Form: {
             ...this.state.Form,
             [e.target.name]: e.target.value,
            }
        });
    }
    render() {
        return(
        <React.Fragment>
            <section className="BadgeNew__hero">
                <img className="ml-4" src={heroImage} alt="Logo de la platziConf"/>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-6"> 
                        <Badge 
                        firstName={this.state.Form.firstName} 
                        lastName={this.state.Form.lastName}
                        job={this.state.Form.jobTitle}
                        avatarURL="https://www.gravatar.com/avatar?d=identicon"
                        twitter={this.state.Form.twitter}
                        twitterHref={"https://twitter.com/" + this.state.twitter}
                        email={this.state.Form.email}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.Form}/>
                    </div>
                </div>
            </div>
        </React.Fragment>            
        );
    }
}

export default BadgePageNew;