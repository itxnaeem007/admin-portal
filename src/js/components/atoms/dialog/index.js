import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth="md"
    >
      <AppBar color="primary" position="static">
        <DialogTitle color="secondary" id="simple-dialog-title">
          Filter
        </DialogTitle>
      </AppBar>

      <List>
        <ListItem button onClick={() => handleListItemClick("New")}>
          <ListItemText primary="New" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("Completed")}>
          <ListItemText primary="Completed" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("in-progress")}>
          <ListItemText primary="In Progress" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("on-hold")}>
          <ListItemText primary="On Hold" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("Archived")}>
          <ListItemText primary="Archived" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
export default SimpleDialog;
