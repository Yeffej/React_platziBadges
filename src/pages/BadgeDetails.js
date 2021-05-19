import React from "react";
import { Link } from "react-router-dom";

import Badge from "../Components/badge";
import Modal from "../Components/Modal";

import "./Styles/badgeDetails.css"
import heroImage from "../images/platziconf-logo.svg"

function BadgeDetails(props) {
    const badge = props.badge
    return (
        <React.Fragment>
            <section className="Hero">
                <figure>
                    <img src={heroImage} alt="Hero details"/>
                </figure>
                <h1>{`${badge.firstName} ${badge.lastName}`}</h1>
            </section>
            <section className="Details ">
                <div className="mainBadge  my-4">
                    <Badge 
                        firstName={badge.firstName}
                        lastName={badge.lastName} 
                        email={badge.email}
                        twitter={badge.twitter}
                        job={badge.jobTitle} 
                        twitterHref=""
                    />
                </div>
                <div className="Actions">
                    <h3 className="mb-4">Actions:</h3>
                    <div>
                        <Link className="btn btn-primary d-block mb-3" 
                        to={`/badges/${badge.id}/edit`}>Edit</Link>
                        <button onClick={props.handleModal} 
                        className="btn btn-danger d-block">Delete</button>
                        <Modal Visible={props.modalVisibility} handleModal={props.handleModal}>
                            <h2 className="modalTitle">ARE YOU SURE?</h2>
                            <p className="modalDescrip">You are about to delete&nbsp; 
                            <strong>{badge.firstName} {badge.lastName}</strong> from the conf</p>
                            <div className="modalActions">
                                <button onClick={props.onDelete} 
                                className="btn btn-danger">Delete</button>
                                <button onClick={props.handleModal} 
                                className="btn btn-primary">Cancel</button>
                            </div>
                        </Modal>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BadgeDetails;