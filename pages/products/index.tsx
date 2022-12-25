import type {NextPage} from 'next'
import {useRouter} from "next/router";
import LoginHeader from "../../components/Header/LoginHeader";
import ProductList from "../../components/Product/ProductList";

const Products: NextPage = () => {

    const router = useRouter();

    const onclick = () => {
        router.push("/products")
    }

    return (<div className="h-screen flex flex-col">
            <LoginHeader/>
            <main className="flex px-4 pb-20  pt-16 justify-center">
                <section
                    className="grid gap-8  flex-shrink  lg:gap-16 md:gap-8  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ProductList/>
                </section>

            </main>

        </div>
    )
}
export default Products