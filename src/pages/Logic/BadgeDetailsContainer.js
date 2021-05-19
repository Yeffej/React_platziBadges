import React from "react";
import API from "../../api";

import BadgeDetails from "../BadgeDetails";
import PageLoader from "../../Components/PageLoader";

class BadgeDetailsContainer extends React.Component {
    state = {
        Form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
            avatarUrl: "",
        },
        loading: true,
        error: null,
        modalVisibility: false,
    }
    async fetchData() {
        this.setState({loading: true, error: null})
        const id = this.props.match.params.badgesId
        try {   
            const data = await API.badges.read(id)
            this.setState({ Form: data,  loading: false})
        }catch(err) {
            this.setState({loading: false, error: err})
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        if(this.state.loading) {
            return(
                <PageLoader/>
            )
        }
        if(this.state.error) {
            return(
                <h1>ERROR 500: the server couldn´t load the data</h1>
            )
        }

        return (
            <BadgeDetails badge={this.state.Form} modalVisibility={this.state.modalVisibility}
            handleModal={this.toggleModal} onDelete={this.handleDelete}/>
        )
    }
    toggleModal = () => {
        this.setState({
            modalVisibility: !this.state.modalVisibility
        })
    }
     handleDelete = async () => {
        const id = this.props.match.params.badgesId
        this.setState({loading: true, error: null})
        try {
            await API.badges.remove(id)
            
            this.setState({loading: false})
            this.props.history.push("/badges")
        }catch(err) {
            this.setState({loading: false, error: false})
        }
    }
}

export default BadgeDetailsContainer;