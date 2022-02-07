import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

export default function SelectInput({ label, options }) {
  useEffect(() => {
    console.log('Component SelectInput was created with label');
    return () => {
      console.log('Component SelectInput was destroyed ');
    };
  }, []);

  const optionsList = options.split(',');
  return (
    <div className={style.item}>
      <p className={style.text}>{label}</p>
      <select className={style.text__select}>
        {optionsList && optionsList.map(op => <option key={op}>{op}</option>)}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.string,
};
