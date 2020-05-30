const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const middlerware = [logger];

const BUYCAKE = "BUY_CAKE";
const BUYCREAM = "BUY_CREAM";

const buyCake = () => ({
  type: BUYCAKE,
  info: "First",
});

const buyCream = () => ({
  type: BUYCREAM,
  info: "second",
});

const initialCake = {
  numOfCake: 10,
};

const initialCream = {
  numOfCream: 20,
};

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUYCAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

const creamReducer = (state = initialCream, action) => {
  switch (action.type) {
    case BUYCREAM:
      return {
        ...state,
        numOfCream: state.numOfCream - 2,
      };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: cakeReducer,
  cream: creamReducer,
});
const store = createStore(rootReducers, applyMiddleware(...middlerware));

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCream());
store.dispatch(buyCream());
store.dispatch(buyCream());
store.dispatch(buyCream());
store.dispatch(buyCream());
unsubscribe();

//cake action, reducer, const
//cream action, reducer, const
//rootRecer
//store
//get console
//subcribe
//dispatch
// logger applyMiddleware
