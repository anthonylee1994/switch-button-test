import React, { useState } from "react";
import "./index.css";

interface SwitchProps {
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

const Switch: React.FunctionComponent<SwitchProps> = ({ defaultChecked, checked, disabled, onChange }) => {
    const onCheckboxChange = ({ target: { checked } }: any) => {
        if (typeof onChange === "function") {
            onChange(defaultChecked ? checked : !checked);
        }
    };

    return (
        <label className="comp-switch">
            <input type="checkbox" defaultChecked={defaultChecked} onChange={onCheckboxChange} checked={!defaultChecked ? undefined : checked} disabled={disabled} />
            <i />
        </label>
    );
};

export default Switch;
