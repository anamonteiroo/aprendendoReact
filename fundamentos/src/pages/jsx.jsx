import Layout from "../components/Layout";

export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitle() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    };

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
            {titulo}
            {subtitle()}
            <p>
                {JSON.stringify({nome: 'Ana', idade: 24})}
            </p> 
        </div>
        </Layout>
    );
};