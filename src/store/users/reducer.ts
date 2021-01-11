import { AnyAction, FetchState } from "..";
import { User } from "../../types/User";

export enum UserActionType {
  Fetch = "FETCH_USERS",
}

const initialState: FetchState<User[]> = {
  fetched: false,
  fetching: false,
  result: [],
};

const reducer = (
  state = initialState,
  action: AnyAction<UserActionType, FetchState<User[]>>
) => {
  switch (action.type) {
    case UserActionType.Fetch:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
