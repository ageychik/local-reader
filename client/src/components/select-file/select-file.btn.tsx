import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faFolder, faLink} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const initialState = Object.freeze({
    selectType: [
        {icon: faFolder},
        {icon: faFile},
        {icon: faLink},
    ]
})

export default class SelectFileBtn extends React.Component {
    state = initialState;

    render() {
        let { selectType } = this.state;
        return (
            <section className="select-file">
                <label htmlFor="select-files" className="select-file-btn">

                        <span className="select-file-input">
                            <span>Select Files</span>
                            <input id="select-files" type="file" hidden/>
                        </span>

                    <ul className="select-file-type">
                        {selectType.map((el, i) => {
                            return (<li key={i}><FontAwesomeIcon icon={ el.icon }/></li>)
                        })}
                    </ul>
                </label>
            </section>
        )
    }
}
