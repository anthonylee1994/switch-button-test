import React, {useState} from "react";
import "./index.css";

interface SwitchProps {
    uncontrolled?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

const Switch: React.FunctionComponent<SwitchProps> = ({uncontrolled, checked, disabled, onChange}) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(false);

    const onCheckboxChange = () => {
        if (uncontrolled) {
            setUncontrolledChecked(!uncontrolledChecked);
            return;
        }
        if (typeof onChange === "function") {
            onChange(!checked);
        }
    };

    return (
        <label className="comp-switch">
            <input type="checkbox" onChange={onCheckboxChange} checked={uncontrolled ? uncontrolledChecked : checked} disabled={uncontrolled ? false : disabled} />
            <i />
        </label>
    );
};

export default Switch;
