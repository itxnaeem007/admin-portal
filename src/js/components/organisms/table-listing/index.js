import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Proptype from 'prop-types';
import Table from '../../molecules/table';
const useStyle = makeStyles(theme => ({
  tablePaper: {
    paddingBottom: theme.spacing(1),
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: theme.typography.pxToRem(25),
  },
}));

function TableListing(props) {
  const { data, columns, pages, loading, onFetchData, onPageChange, onSortedChange } = props;
  const classes = useStyle();
  return (
    <Paper classes={{ root: classes.tablePaper }} elevation={1}>
      <Table
        data={data}
        columns={columns}
        pages={pages}
        loading={loading}
        onFetchData={onFetchData}
        onPageChange={onPageChange}
        onSortedChange={onSortedChange}
        style={{ height: '75vh' }}
        {...props}
      />
    </Paper>
  );
}
TableListing.prototype = {
  data: Proptype.array.isRequired,
  columns: Proptype.array.isRequired,
  pages: Proptype.number,
  loading: Proptype.number,
  onFetchData: Proptype.func,
};
TableListing.defaultProps = {
  data: [],
  columns: [],
  pages: 0,
  loading: false,
  onFetchData: () => { },
};
export default TableListing;
