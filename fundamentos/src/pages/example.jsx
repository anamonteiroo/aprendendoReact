import Layout from "../components/Layout";
import Cabecalho from "../components/Cabecalho";

export default function Example() {
    return(
        <Layout titulo="Usando componentes">
            <Cabecalho title="Next.js & React"/>
            <Cabecalho title="Aprenda Next.js na prática"/>
        </Layout>
        
    );
};