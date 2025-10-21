import { Header } from "../../componentes/Header/Header"
import { Layout } from "../../componentes/Layout/Layout"
import { Main } from "../../componentes/Main/Main"
import { Profile } from "../../componentes/Profile/Profile"
import { ContainerList } from "../../componentes/ContainerList/ContainerList"



export function Home() {
    return (
        <Layout>
            <Header/>
            <Main>
                <Profile/>
                <ContainerList/>
                
            </Main>
        </Layout>
    )
}