import {AUTH_ROUTE_SIGN_IN, AUTH_ROUTE_SIGN_UP, POSTS_ROUTE} from "./utils/constants";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Post from "./pages/post/Post";
import Posts from "./pages/post/Posts";

const authRoutes = [
    {
        path: AUTH_ROUTE_SIGN_IN,
        Component: SignIn
    },

    {
        path: AUTH_ROUTE_SIGN_UP,
        Component: SignUp
    },
];

const postRoutes = [
    {
        path: POSTS_ROUTE,
        Component: Posts,
    },
    {
        path: POSTS_ROUTE + '/:postId',
        Component: Post,
    },
];


export {authRoutes, postRoutes}