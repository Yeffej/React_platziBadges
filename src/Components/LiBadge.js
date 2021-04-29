import React from "react";

import "./styles/LiBadge.css"

class LiBadge extends React.Component {
    render() {
        const {source} = this.props
        return (
           <li className="Container">
               <figure className="imgWrapper">
                    <img src={source.avatarUrl} alt="Avatar" />
               </figure>
               <div className="infoWrapper">
                    <h3>{source.firstName + " " + source.lastName}</h3>
                    <p>{source.jobTitle}</p>
                    <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">@{source.twitter}</a>
               </div>
           </li>
        )
    }
}

export default LiBadge;