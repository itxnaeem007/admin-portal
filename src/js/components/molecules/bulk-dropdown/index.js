import React, { useState } from "react";
import { Input, Button } from "../../atoms";
import { Grid } from "@material-ui/core";
import Proptype from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    fontSize: "11px",
    borderRadius: '25px'
  },
  formControl: {
    width: "100%"
  }
}));

function BulkDropdown(props) {
  const classes = useStyle();

  const {
    loading,
    onBulk,
    options
  } = props;

  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");

  const onBulkClick = () => {
    let obj = {};
    if (!!status) {
      obj.job_status = status;
    }
    if (!!user) {
      obj.assigned_to = user;
    }
    onBulk(obj);
  }
  return (
    <>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="bulk-select-task-status">Job Status</InputLabel>
          <Select
            labelId="bulk-select-task-status"
            id="bulk-select-task-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ width: '100%', marginTop: '15px' }}
            className={{ root: classes.root }}
          >
            <MenuItem value={''}>None</MenuItem>
            {
              options && options.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="bulk-select-assigned-to">User</InputLabel>
          <Select
            labelId="bulk-select-assigned-to"
            id="bulk-select-assigned-to"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            style={{ width: '100%', marginTop: '15px' }}
            className={{ root: classes.root }}
          >
            <MenuItem value={''}>None</MenuItem>
            <MenuItem value={'GLS'}>GLS</MenuItem>
            <MenuItem value={'MK1'}>MK1</MenuItem>
            <MenuItem value={'BKG'}>BKG</MenuItem>
            <MenuItem value={'Gasco'}>Gasco</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button
          value="Bulk Update"
          size="small"
          click={onBulkClick}
          loading={loading}
          disable={!status && !user}
          className={{ root: classes.root }}
        />
      </Grid>
    </>
  );
}
BulkDropdown.prototype = {
  loading: Proptype.bool,
  onBluck: Proptype.func
};
export default BulkDropdown;