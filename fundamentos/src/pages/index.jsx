import Browser from '../components/Browser';

export default function Home() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'wrap',
            height: "100vh"
        }}>
            <Browser text="Estiloso" destin="/estiloso" color="crimson"/>
            <Browser text="Example" destin="/example" color="#9400d3"/>
            <Browser text="JSX" destin="/jsx" color='dodgerblue'/>
            <Browser text="Navegação #01" destin="/browser" color="green"/>
            <Browser text="Navegação #02" destin="/client/mg/123" color="blue"/>
            <Browser text="Componete com Estado" destin="/status" color="pink"/>
        </div>
    );
};