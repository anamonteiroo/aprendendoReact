export default function Cabecalho(props) {

    //props is only reading

    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
};