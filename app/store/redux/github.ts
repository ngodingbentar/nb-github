import { createSlice } from "@reduxjs/toolkit"

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    users: [],
    loading: false,
    error: '',
  },
  reducers: {
    setUsers: (state, action) => {
      console.log(action.payload)
      if(action.payload.length === 0) {
        state.error = 'User not found'
      } else {
        state.error = ''
      }
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setUsers, setLoading } = githubSlice.actions
export default githubSlice.reducer