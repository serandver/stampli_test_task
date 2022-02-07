import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import style from './Form.module.css';

export default function Form({ inputStrings }) {
  useEffect(() => {
    console.log('Component Form was created ');
    return () => {
      console.log('Component Form was destroyed ');
    };
  }, []);

  const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <form className={style.form}>
      {inputStrings &&
        inputStrings.map(inputString => {
          let parsedString = inputString.split(';');
          const type = parsedString[3];
          const label = capitalizeFirstLetter(parsedString[2]);
          if (type === 'TEXT_INPUT') {
            const message = parsedString[4];
            return <TextInput key={label} label={label} message={message} />;
          } else if (type === 'SELECT') {
            const options = inputString.split(type + ';')[1];
            return <SelectInput key={label} label={label} options={options} />;
          }
        })}
    </form>
  );
}

Form.propTypes = {
  inputStrings: PropTypes.arrayOf(PropTypes.string),
};
