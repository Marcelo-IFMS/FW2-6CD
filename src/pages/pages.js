import { Container } from "react-bootstrap"
import Menu from "./components/navbar"
import Footer from "./components/footer"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://dummyjson.com/products/1')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}

export default function Page({ repo }) {
    return (
        <main>
            <Menu />
            <Container>
                <p>{repo.id}</p>
                <p>{repo.title}</p>
                <p>{repo.description}</p>
            </Container>
            <Footer />
        </main>
    )
}