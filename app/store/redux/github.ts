import { createSlice } from "@reduxjs/toolkit"

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setUsers, setLoading } = githubSlice.actions
export default githubSlice.reducer