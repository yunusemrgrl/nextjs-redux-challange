import type {NextPage} from 'next'

const LoginHeader: NextPage = () => {

    return (
        <header className="py-8 flex-col sm:flex-row  px-12 bg-gray-200 shadow-xl flex justify-between items-center">
            <button className="bg-sky-600 py-4 font-semibold rounded-full px-12 flex items-center justify-center">
                <span className="text-4xl text-white">Piton</span>
                <span className="text-4xl text-gray-300 font-semibold">Shop</span>
            </button>
            <button
                className="bg-white mt-4 sm:mt-0 h-12 font-semibold rounded-full px-8 flex items-center justify-center">
                <span className="text-2xl">Logout</span>
            </button>
        </header>
    )
}
export default LoginHeader