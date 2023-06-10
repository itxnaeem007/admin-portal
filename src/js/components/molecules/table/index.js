import React from "react";
import { CircularProgress } from "@material-ui/core";
import ReactTable from "react-table-v6";
import Proptype from "prop-types";
import "react-table-v6/react-table.css";
function Table(props) {
  const { style, classes, columns } = props;
  return (
    <>
      <ReactTable
        className={`-striped padding-clear -highlight h-auto sm:rounded-16 overflow-hidden`}
        getTrProps={(state, rowInfo, column) => {
          return {
            className: `cursor-pointer-row ${classes}`,
            onClick: (e, handleOriginal) => {
              if (handleOriginal) {
                handleOriginal();
              }
            },
          };
        }}
        getTheadProps={() => {
          return {
            className: `cursor-pointer ${classes}`,
          };
        }}
        style={style}
        loadingText={<CircularProgress />}
        defaultPageSize={100}
        showPaginationTop={false}
        showPageSizeOptions={false}
        manual // this would indicate that server side pagination has been enabled
        {...props}
        columns={columns}
      />
    </>
  );
}
Table.prototype = {
  data: Proptype.array.isRequired,
  columns: Proptype.array.isRequired,
  pages: Proptype.number,
  loading: Proptype.number,
  onFetchData: Proptype.func,
  SubComponent: Proptype.func,
  showPagination: Proptype.bool,
  classes: Proptype.string,
  handleData: Proptype.func,
  active: Proptype.string || Proptype.number,
};
Table.defaultProps = {
  data: [],
  columns: [],
  pages: 0,
  loading: false,
  onFetchData: () => { },
  showPagination: true,
};
export default Table;
