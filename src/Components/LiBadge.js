import React from "react";
import {Link} from "react-router-dom"
import "./styles/LiBadge.css"

class LiBadge extends React.Component {
    render() {
        const {source} = this.props
        return (
           <li className="LiBadgeContainer">
               <figure className="imgWrapper">
                    <img src={source.avatarUrl} alt="Avatar" />
               </figure>
               <div className="infoWrapper">
                    <Link className="text-reset " 
                    to={`/badges/${source.id}/`}>
                        <h3>{source.firstName + " " + source.lastName}</h3>
                        <p>{source.jobTitle}</p>
                    </Link>

                    <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">@{source.twitter}</a>
               </div>
           </li>
        )
    }
}

export default LiBadge;