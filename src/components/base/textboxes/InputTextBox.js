import React, { useRef } from 'react';
import { Field } from 'formik';

const InputTextBox = ({ name, title, icon, className, placeholder, isPassword }) => {
  var refparent = useRef();

  return (
    <div ref={refparent} className={`text-box-input flex-column  ${className}`}>
      <p className="title">{title}</p>
      <div className="main flex-row">
        <div className="icon flex-row">{icon}</div>
        <Field
          onBlur={() => refparent.current.classList.remove('text-box-input-focus-border')}
          onFocus={() => refparent.current.classList.add('text-box-input-focus-border')}
          placeholder={placeholder}
          className="field"
          type={isPassword == true ? 'password' : 'text'}
          name={name}
        />
      </div>
    </div>
  );
};

export default InputTextBox;
