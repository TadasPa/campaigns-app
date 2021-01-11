import axios from "axios";
import { Dispatch } from "react";
import { AnyAction, FetchState } from "..";
import { GET_USERS_URL } from "../../api/users/contants";
import { User } from "../../types/User";
import { UserActionType } from "./reducer";

type IPartialUsersFetchState = Partial<FetchState<User[]>>;

export const fetchUsers = () => async (
  dispatch: Dispatch<AnyAction<UserActionType, IPartialUsersFetchState>>
) => {
  dispatch({ type: UserActionType.Fetch, payload: { fetching: true } });

  const { status, data } = await axios.get(GET_USERS_URL);

  if (status === 200) {
    dispatch({
      type: UserActionType.Fetch,
      payload: { fetching: false, fetched: true, result: data },
    });
  } else {
    dispatch({
      type: UserActionType.Fetch,
      payload: { fetching: false, fetched: false },
    });
  }
};
