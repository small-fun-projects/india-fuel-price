import React from "react";
import PropTypes from "prop-types";
import * as styles from "./select.module.css";

const Select = ({ options, onChange, selectedItem }) => {
  const onChangeLocal = (event) => {
    event.persist();
    const selected = {
      value: event.target.selectedOptions[0].text,
      key: event.target.selectedOptions[0].value,
    };
    event.preventDefault();
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <select
      className={styles.select}
      onChange={onChangeLocal}
      value={selectedItem?.key}
    >
      {options?.map((opt) => (
        <option key={opt?.key} value={opt?.key}>
          {opt?.value}
        </option>
      ))}
    </select>
  );
};
Select.defaultProps = {
  options: [],
  onChange: () => {},
  selectedItem: { key: "", value: "" },
};
Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      key: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    value: PropTypes.string,
    key: PropTypes.string,
  }),
};
export default Select;
