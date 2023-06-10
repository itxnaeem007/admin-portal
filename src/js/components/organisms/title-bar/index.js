import React, { useState } from "react";
import { ActionButton, SearchInput, BulkDropdown, StartEndDate } from "../../molecules";
import { useStylePanel } from "../style";
import { Divider } from "@material-ui/core";
import Proptype from "prop-types";
import { RadioButtonGroup } from '../../atoms/radio-button-group';
import { Dropdown } from '../../atoms/dropdown';
import { Grid } from "@material-ui/core";

function TitleBar(props) {
  const { loading, buttonText, name, setFilter, action, showBulk, onBulk, checkedRows, fiterDataList,
    showDateRange, hideActionButtons, value, filter, action2, name2, showSearch, searchValue,
    filterContolType, onSearch, onDateRange, filterTitle } = props;

  const classes = useStylePanel();
  const [searchText, setSearchText] = useState(searchValue || "");
  const onChangeFilterValue = (selected) => {
    setFilter(selected)
  }
  const onSearchChange = (name, value) => {
    setSearchText(value);
    if (!value) {
      onSearch("");
    }
  }
  return (
    <>
      <div className={classes.flex}>
        {/* Search */}
        {
          !!showSearch &&
          <SearchInput
            loading={loading}
            changeInputValue={onSearchChange}
            onSearch={() => onSearch(searchText)}
          />
        }

        {/* Filter */}
        {
          !!fiterDataList && (
            !!filterContolType && filterContolType === "dropdown" ?
              <Dropdown
                id={'filter-dropdown'}
                title={filterTitle}
                data={fiterDataList}
                selectedValue={filter}
                onChange={onChangeFilterValue}
              /> :
              <RadioButtonGroup
                id={'filter-data-id'}
                data={fiterDataList}
                selectedValue={filter}
                onChange={onChangeFilterValue}
              />
          )

        }
        {
          !hideActionButtons &&
          <ActionButton
            name={buttonText}
            filter={filter}
            name2={name2}
            action2={action2}
            action={action}
            setFilter={setFilter}
            onSearch={onSearch}
          />
        }
      </div>
      <Divider />
      {
        (showDateRange || showBulk) &&
        <Grid container spacing={3}>

          {/* Date Range */}
          {
            showDateRange &&
            <StartEndDate
              loading={loading}
              onDateRange={onDateRange}
            />
          }

          {/* On Bulk Operations */}
          {
            !!showBulk && !!checkedRows.length &&
            <BulkDropdown
              options={fiterDataList}
              onBulk={onBulk}
              loading={loading}
            />
          }
        </Grid>
      }
    </>
  );
}
TitleBar.prototype = {
  buttonText: Proptype.string,
  action: Proptype.func,
  name: Proptype.string,
  value: Proptype.number || Proptype.string,
  filter: Proptype.func,
  action2: Proptype.func,
  name2: Proptype.string,
};
export default TitleBar;
