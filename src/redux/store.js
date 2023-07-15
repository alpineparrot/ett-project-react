import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "../components/Carts/cartSlice";
import PostsReducer from "../components/Posts/PostsSlice";
import UsersReducer from "../components/Posts/UsersSlice";
import CocktailReducer from "../components/SingleCocktail/CocktailSlice"
import createSagaMiddleware from "redux-saga";
import MovieReducer from "../components/Movies/movieSlice";
import rootSaga from "../components/Movies/rootSaga";

import { blogsApi } from "../components/AddEditBlog/blogsApi";
import { setupListeners } from "@reduxjs/toolkit/query";



const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: CartReducer,
    blogs: PostsReducer,
    users: UsersReducer,
    movie: MovieReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    // cocktails: CocktailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, blogsApi.middleware),


});

sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);

export default store;