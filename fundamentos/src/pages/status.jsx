import { useState } from "react";
import Layout from "../components/Layout";

export default function Status() {
    const [number, setNumber] = useState(0);

    function incremet() {
        setNumber(number + 1)
    };

    return (
        <Layout title="Componete com Estado">
            <div>{number}</div>
            <button onClick={incremet}>Incrementar</button>
        </Layout>
    );
};