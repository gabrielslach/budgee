import React, {useState} from 'react';

import FormData_reducer from './reducer.js';

const FormData = React.createContext({});

const Provider = props => {
  const [state, setState] = useState({});
  const reducer = (action, obj) =>
    FormData_reducer(action, obj, state, setState);
  return (
    <FormData.Provider value={{state, reducer}}>
      {props.children}
    </FormData.Provider>
  );
};

export default FormData;

export {Provider};
