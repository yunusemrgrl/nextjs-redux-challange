import type { NextPage } from 'next'
import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import {getToken} from "../slices/registerSlice";
import {AppDispatch} from "../store";

const Home: NextPage = () => {


    const dispatch = useDispatch<AppDispatch>()
    const pokemon = useSelector((state:RootState) =>state.accessToken)


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <input/>
        <button onClick={()=>  dispatch(getToken())}>Register</button>
      </main>
    </div>
  )
}
export default Home
