import { Header } from "../../componentes/Header/Header"
import { Layout } from "../../componentes/Layout/Layout"
import { Main } from "../../componentes/Main/Main"


export function Home() {
    return (
        <Layout>
            <Header/>
            <Main/>
        </Layout>
    )
}