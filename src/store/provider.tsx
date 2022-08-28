import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from ".";

export const ReduxProvider = (props: { children: React.ReactElement }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {props.children}
        </PersistGate>
    </Provider>
  );
};
