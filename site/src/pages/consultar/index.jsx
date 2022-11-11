import './index.scss'
import Menu from '../../components/menu'
import { useState } from 'react'
import { listarUsuario } from '../../api/usuarioAPI'
import { useEffect } from 'react'

export default function Consulta() {

    const [usuario, setUsuario] = useState([])

    async function carregarUsuario() {
        const resp = await listarUsuario()
        setUsuario(resp)
    }

    useEffect(() => {
        carregarUsuario()

    }, [])

    return (
        <main className='pagina-consulta'>
            <Menu className='menu-lado'/>

            <section className='a'>
                {usuario.map(item => {
                    return (
                        <div className='card'>
                            <div>
                                <div>Nome: {item.nome} </div>
                                <div>Nascimento: {item.nascimento.substr(0, 10)} </div>
                                <div>Email: {item.email} </div>
                                <div>Senha: {item.senha}</div>
                                <div>id: {item.id} </div>
                            </div>
                        </div>
                    );
                })}
            </section>

        </main>
    )
}