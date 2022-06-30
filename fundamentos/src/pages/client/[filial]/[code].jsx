import Layout from '../../../components/Layout.jsx';
import { useRouter } from 'next/router'

export default function ClientByCode() {
    const router = useRouter();

    return (
        <Layout title="Navegação Dinâmica">
            <div>Código {router.query.code}</div>
            <div>Filial {router.query.filial}</div>
        </Layout>
    )
}