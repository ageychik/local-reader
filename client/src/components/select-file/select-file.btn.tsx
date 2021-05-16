import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faFolder, faLink} from "@fortawesome/free-solid-svg-icons";
import React from "react";

type Props = {

}

export default class SelectFileBtn extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <section className="select-file">
                <label htmlFor="select-files" className="select-file-btn">

                        <span className="select-file-input">
                            <span>Select Files</span>
                            <input id="select-files" type="file" hidden/>
                        </span>

                    <ul className="select-file-type">
                        <li><FontAwesomeIcon icon={faFolder}/></li>
                        <li><FontAwesomeIcon icon={faFile}/></li>
                        <li><FontAwesomeIcon icon={faLink}/></li>
                    </ul>
                </label>
            </section>
        )
    }
}
