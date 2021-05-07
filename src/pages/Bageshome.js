import React from "react";
import { Link } from "react-router-dom";
import API from "../api";

import LiBadge from "../Components/LiBadge";
import "./Styles/badgesHome.css";
import heroImage from "../images/badge-header.svg";
import SkeletonBadges from  "../Components/skeletonBadges";

class BadgesHome extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }
    render() {
        if(this.state.loading) {
            return  <SkeletonBadges />    
        }
        if(this.state.error != null) {
            console.error(`Error: ${this.state.error.message}`)
            return <h2>Sorry, Error 500: the sever couldn´t load the badges</h2>
        }

        return (
            <React.Fragment>
                <section className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo " src={heroImage} 
                        alt="Conf Logo"/>
                    </div>
                </section>

                <section>
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <div>
                        <ul>
                            {this.checkTheData()}
                            {this.state.data.map((el) => (
                                <LiBadge source={el} key={el.id}/>
                            ))}
                        </ul>
                    </div>
                </section>
            </React.Fragment>
        )
    }
    checkTheData() {
        if(this.state.data.length === 0) {
            return(
                <React.Fragment>
                    <h2>There aren´t badges created</h2>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </React.Fragment>
            )
        }
    }
    async fetchData() {
        this.setState({loading: true, data: undefined, error: null})
        try {
            const data = await API.badges.list()
            this.setState({loading: false, data: data})
        }catch(err) {
            this.setState({loading: false, error: err})
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    componentWillUnmount() {

    }

}

export default BadgesHome;



/*
    DATOS DE PRUEBA:

    data: [{
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            },
            {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            },
            {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            }]

*/