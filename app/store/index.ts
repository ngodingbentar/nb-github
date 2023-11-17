import {configureStore} from "@reduxjs/toolkit"
import githubReducer from './redux/github'

const store = configureStore({
  reducer: {
    github: githubReducer
  }
})

export default store