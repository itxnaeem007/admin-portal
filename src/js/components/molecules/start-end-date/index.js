import React, { useState } from "react";
import { Input, Button } from "../../atoms";
import { Grid } from "@material-ui/core";
import Proptype from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    marginLeft: "15px",
    borderRadius: '25px',
    fontSize: '11px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function StartEndDate(props) {
  const classes = useStyle();

  const {
    loading,
    onDateRange,
  } = props;

  const [sdate, setSdate] = useState(moment().subtract(6, 'days').format("YYYY-MM-DD"));
  const [edate, setEdate] = useState(moment().format("YYYY-MM-DD"));

  const getData = () => {
    let obj = {};
    if (!!sdate) {
      obj.start_date = sdate;
    }
    if (!!edate) {
      obj.end_date = edate;
    }
    onDateRange && onDateRange(obj);
  }

  return (
    <Grid item xs={8} className={classes.container}>
      <Grid item xs={4}>
        <TextField
          id="date"
          label="Start Date"
          type="date"
          value={sdate}
          className={classes.textField}
          onChange={(e) => setSdate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="date"
          label="End Date"
          type="date"
          value={edate}
          className={classes.textField}
          onChange={(e) => setEdate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          value="Get Report"
          size="small"
          click={getData}
          loading={loading}
          //disable={!status && !user}
          className={{ root: classes.root }}
        />
      </Grid>
    </Grid>
  );
}
StartEndDate.prototype = {
  loading: Proptype.bool,
  onDateRange: Proptype.func
};
export default StartEndDate;