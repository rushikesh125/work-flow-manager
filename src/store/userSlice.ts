import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  userId: number | null;
  email: string | null;
  username: string | null;
}

const initialState: UserState = {
  userId: null,
  email: null,
  username: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUser:()=>{
        return initialState;
    }
  },
});


export const {setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;