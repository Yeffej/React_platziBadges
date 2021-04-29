import React  from "react";
import { Link } from "react-router-dom"

import "./styles/home.css"
import LogoConfImg from  "../images/platziconf-logo.svg";
import AstroImg from "../images/astronauts.svg";
// import from "../images/stars.svg";


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className="home">
                    <div className="Wrapper row">
                        <section className="home_info col-5">
                            <figure>
                                <img  src={LogoConfImg} alt="Hola"/>                        
                            </figure>
                            <div>
                                <h2>print your badges</h2>
                                <p>the easiest way to manage your conference</p>
                            </div>
                            <Link to="/badges" className="btn btn-primary">Start Now</Link>
                        </section>
                        <section className="home_Logo col-7">
                            <figure>
                                <img src={AstroImg} alt="Hola"/>                        
                            </figure>
                        </section>

                    </div>
                </main>
            </React.Fragment>
        )
    }
}


export default Home;