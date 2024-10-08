import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from './Icons';

function TextInput(props) {
  console.log(props)
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-bold" htmlFor="password">{props.label}</label>
      <div className="flex items-center p-3 rounded-lg border border-gray-300">
        {getIcon(props.icon)}
        <input type={props.type} className="ml-3 border-none focus:outline-none h-full w-full" placeholder={props.placeholder} />
      </div>
    </div>
  );
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
