import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem, Select } from "@material-ui/core";

export const Dropdown = (props) => {
    const { id, data, title, selectedValue, onChange } = props;
    return (
        <div className="dropdown">
            <FormControl>
                <InputLabel htmlFor="age-native-simple">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id={id}
                    value={selectedValue}
                    onChange={(e) => {
                        onChange(e?.target?.value)
                    }}
                >
                    {
                        data && data.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item}>
                                    {item}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
}
