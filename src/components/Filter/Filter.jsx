import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function Filter(props) {
  const setFilterValue = (event) => {
    let value = event.currentTarget.value.toUpperCase();
    props.setFilterToState(value);
  };

  return (
    <div>
      <TextField
        label="Filter"
        onChange={setFilterValue}
        style={{ marginBottom: 25, width: 475 }}
      />
    </div>
  );
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};

export default Filter;