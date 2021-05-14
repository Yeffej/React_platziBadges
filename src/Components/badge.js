import React from "react";

import badgeHeader from "../images/badge-header.svg";
import Gravatar from "./gravatar";
import "./styles/Badge.css";


class Badge extends React.Component {
    render() {
        const {firstName, lastName, email, 
            twitter, job, twitterHref} = this.props

        return (
            <section className="Badge">
                <div className="Badge__header">
                    <img src={badgeHeader} alt="Logo del header"/>
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                    className="Badge__avatar" 
                    email={email} 
                    alt="Avatar del Badge."/>
                    <h1 className="Badge__section-name_Name">{firstName} {lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{job}</h3>
                    <a href={twitterHref}>@{twitter}</a>
                </div>
                <div className="Badge__footer">
                    <p>#PlatziConf</p>
                </div>
            </section>
        );
    }
}

export default Badge;