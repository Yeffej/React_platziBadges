import React from "react"

import md5 from "md5";
import API from "../api";

import Badge from "../Components/badge";
import BadgeForm from "../Components/badgeForm";
import PageLoader from "../Components/PageLoader";
import heroImage from "../images/badge-header.svg";

import "./Styles/badgeEdit.css";

class BadgePageNew extends React.Component {
    state = {
        Form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
            avatarUrl: "",
        },
        loading: false,
        error: null,
    }
    handleChange = e => {
        const hash = md5(this.state.Form.email)
        this.setState({
            Form: {
             ...this.state.Form,
             [e.target.name]: e.target.value,
             avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
            }
        });
    }
    handleSubmmit = async e => {
        const Badge = this.state.Form
        const values = Object.values(Badge)
        // Checking out if there some value == false 
        if(values.some(el => !el)) {
            this.setState({
                error: new Error("There are fields in blank, please complete the form until submmit")
            })
            return;
        }
        this.setState({loading: true, error: null})
        try {
            await API.badges.update(this.props.match.params.badgesId,this.state.Form)
            this.setState({loading: false})

            this.props.history.push("/badges")
        }catch(err) {
            this.setState({loading: false, error: err})
        }
    }
    render() {
        if(this.state.loading) {
            return (
                <PageLoader />
            )
        }

        return(
        <React.Fragment>
            <section className="BadgeEdit__hero">
                <img className="ml-4" src={heroImage} alt="Logo de la platziConf"/>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-6"> 
                        <Badge 
                        firstName={this.state.Form.firstName} 
                        lastName={this.state.Form.lastName}
                        job={this.state.Form.jobTitle}
                        email={this.state.Form.email}
                        twitter={this.state.Form.twitter}
                        twitterHref={"https://twitter.com/" + this.state.twitter}
                        />
                    </div>
                    <div className="col-6">
                        {this.state.error && <h4>{this.state.error.message}</h4>}
                        <BadgeForm title="Edit attendant"
                         onChange={this.handleChange} onSubmmit={this.handleSubmmit}
                         formValues={this.state.Form}/>
                    </div>
                </div>
            </div>
        </React.Fragment>            
        );
    }
    async fetchData() {
        try {
            const data =  await API.badges.read(
                this.props.match.params.badgesId
            )
            this.setState({loading: false, Form: data})
        }catch(err) {
            this.setState({loading: false, error: err})
        }

    }
    componentDidMount() {
        this.fetchData()
        
    }
}

export default BadgePageNew;