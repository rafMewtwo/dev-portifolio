import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../services/context/Context';

function Button({ btnName, btnType }) {
  const { setActiveFilter, testActiveFilter } = useContext(Context);
  const btnHeader = 'header-btn';

  if (btnType === btnHeader) {
    return (
      <button
        className="page-btn"
        type="button"
      >
        { btnName }
      </button>
    );
  }
  return (
    <button
      className="btn btn-outline-secondary"
      onClick={ () => testActiveFilter(btnName) }
      type="button"
    >
      { btnName }
    </button>
  );
}

export default Button;

Button.propTypes = {
  btnName: PropTypes.string,
  btnType: PropTypes.string,
}.isRequired;
