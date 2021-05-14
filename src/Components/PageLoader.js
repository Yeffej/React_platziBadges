import React from "react";

import "./styles/PageLoader.css";

function PageLoader() {
    return (
        <div className="PageLoading">
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}

export default PageLoader;


// class PageLoader extends Component {
//     initializer() {

//     }
//     load() {

//     }
//     componentDidMount() {
//         this.initializer()
//         this.load()
//     }
    
//     render() {
//         <div>
//             <canvas id="loader"></canvas>
//         </div>
//     }
//     componentWillUnmount() {
//         this.unMount()
//     }

//     unMount() {

//     }
// }

