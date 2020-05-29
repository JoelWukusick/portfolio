import React, { useState } from 'react';

const Context = React.createContext();

export const ContextProvider = function (props) {
  const [page, setPage] = useState('/');

  return (
    <Context.Provider
      value={{
        page, setPage
      }}>
      {props.children}
    </Context.Provider>
  )
}


export const DataConsumer = Context.Consumer

export default Context;