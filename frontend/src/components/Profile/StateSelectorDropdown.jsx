import PropTypes from 'prop-types';

function StateSelectorDropdown(props){
    const { states, defaultValue, onChange } = props;

    return (
        <select defaultValue={defaultValue} name="state" onChange={onChange}>
            <option value="" >Select state...</option>
            {Object.keys(states).map(stateKey => (
                <option key={stateKey} value={stateKey} selected={states[stateKey].selected}>
                    {states[stateKey].name}
                </option>
            ))}
        </select>
    );
}

StateSelectorDropdown.propTypes = {
  className: PropTypes.string
}

export default StateSelectorDropdown;
