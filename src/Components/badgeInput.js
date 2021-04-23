import React from "react";

class BadgeInput extends React.Component {    
    render() {
        const {title, placeholder, name, value, onChange} = this.props
        return(
            <div className="form-group">
                <label>{title}</label>
                <input onChange={onChange} className="form-control" name={name} 
                value={value} type="text" placeholder={placeholder} />
            </div>
        )
    }
}

export default BadgeInput;