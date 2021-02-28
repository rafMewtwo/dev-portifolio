import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState(false);
  const [repos, setRepos] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const testActiveFilter = async (name) => {
    setActiveFilter(name);
  };

  const contextValue = {
    user,
    setUser,
    repos,
    setRepos,
    activeFilter,
    setActiveFilter,
    testActiveFilter,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
