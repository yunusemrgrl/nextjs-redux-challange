import type {NextPage} from 'next'
import type {RootState} from '../store'
import {useSelector, useDispatch} from 'react-redux'
import {getToken} from "../slices/registerSlice";
import {AppDispatch} from "../store";
import Register from "./Register";
import Login from "./Login";

const Home: NextPage = () => {


    const dispatch = useDispatch<AppDispatch>()
    const pokemon = useSelector((state: RootState) => state.accessToken)


    return (
        <>
            <Register/>
            <Login/>
        </>
    )
}
export default Home
