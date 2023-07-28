import React from "react";
import './Footer.css'
function Footer(props) {

    return (
        <div className="container">
            <div className="app_footer">
                <p className="marg_curent">Active tasks: {props.active}</p>
                <p className="marg_curent">Finished tasks: {props.finished}</p>
                <p className="marg_by">Kanban Board by Denis, 2022</p>
            </div>
        </div>
    );
}

export default Footer;
