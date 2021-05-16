import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faFolder, faLink} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const initialState = Object.freeze({
    selectType: [
        {icon: faFile, value: 'Select Files', active: true},
        {icon: faFolder, value: 'Select Folder', active: false},
        {icon: faLink, value: 'Select Url', active: false},
    ]
})

const SelectFileBtn: React.FC = () => {
    // const [ a, b ] = useState<string>('');

    const selectType = [
        {icon: faFile, value: 'Select Files', active: true},
        // {icon: faFolder, value: 'Select Folder', active: false},
        // {icon: faLink, value: 'Select Url', active: false},
    ]

    return (
        <section className="select-file">
            <label htmlFor="select-files" className="select-file-btn">

                        <span className="select-file-input">
                            <span>Select Files</span>
                            <input id="select-files" type="file" hidden/>
                        </span>

                <ul className="select-file-type">
                    {selectType.map((el, i) => {
                        return (
                            <li className={ el.active ? 'active' : '' } key={i}><FontAwesomeIcon icon={ el.icon }/></li>)
                    })}
                </ul>
            </label>
        </section>
    )
}

export default SelectFileBtn;