import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
    root: {
        marginRight: '20px',
        color: '#172B4D',
        fontSize: '16px'

    },
    input: {
        marginRight: '5px'
    }
}));
// presentational for signal radio button radio component 
export const RadioButton = (props) => {
    const classes = useStyle();


    const { id, name, isSelected, value, onChange } = props;
    return (
        <>
            <div className={classes.root}>
                <input
                    id={id}
                    className={classes.input}
                    type='radio'
                    name={name}
                    value={value}
                    checked={isSelected}
                    onChange={e => onChange(e.target.value)}
                />
                {value}
            </div>
        </>
    )
}
