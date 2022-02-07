import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

export default function TextInput({ label, message }) {
  useEffect(() => {
    console.log('Component TextInput was created ');
    return () => {
      console.log('Component TextInput was destroyed ');
    };
  }, []);

  return (
    <div className={style.item}>
      <p className={style.text}>{label}</p>
      <input className={style.text__input} type="text" value={message} />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  message: PropTypes.string,
};
