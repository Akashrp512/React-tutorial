//get the current State from redux store
const store = Redux.createStore(
  (state = 5) => state
);
const currentState=store.getState();
console.log(currentState)
