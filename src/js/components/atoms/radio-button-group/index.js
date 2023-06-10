import React from 'react';
import { RadioButton } from "../radio-button"
// presentational radio button group component 
export const RadioButtonGroup = (props) => {
    const { id, data, name, selectedValue, onChange } = props;
    return (
        <>
            {
                data.map((item, index) => {
                    let key = item.key || item;
                    let value = item.key || item;
                    return (
                        <RadioButton
                            key={index}
                            id={`${key}-${id}`}
                            isSelected={selectedValue === key}
                            name={name}
                            value={value}
                            onChange={onChange}
                        />
                    )
                })
            }
        </>
    )
}
