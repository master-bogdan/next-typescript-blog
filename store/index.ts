
import {
  createStore,
  combineReducers,
  applyMiddleware,
  Action,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk, { ThunkAction } from 'redux-thunk';
import {
  createWrapper,
  MakeStore,
  Context,
  HYDRATE,
} from 'next-redux-wrapper';

// imports reducers
import postsReducer from './posts/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const reducerCheckServerData = (state , action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // compare server state and current state ...
    return nextState;
  }
  return rootReducer(state, action);
};

// middleware
const middleware = [
  reduxThunk,
];

const makeStore: MakeStore<RootState> = (context: Context) => createStore(
  reducerCheckServerData,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const wrapper = createWrapper(makeStore, { debug: false });

// global types
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >
