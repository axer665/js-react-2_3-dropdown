import { useState } from "react";
import DropdownList from "./DropdownList";

const Dropdown = () => {
    const [dropdownActive, setDropdownActive] = useState(false);

    return (
        <div className="dropdown-wrapper">
            <button
                data-id="toggle"
                className="btn"
                onClick={() => setDropdownActive(!dropdownActive)}
            >
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropdownList dropdownActive={dropdownActive} />
        </div>
    );
};

export default Dropdown;
