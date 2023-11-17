import { createSlice } from "@reduxjs/toolkit"

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { setUsers } = githubSlice.actions
export default githubSlice.reducer