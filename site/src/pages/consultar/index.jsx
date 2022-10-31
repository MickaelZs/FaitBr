import './index.scss'
import Menu from '../../components/menu'
import { useState } from 'react'
import { listarUsuario } from '../../api/usuarioAPI'
import { useEffect } from 'react'

export default function Consulta(){

    const [usuario,setUsuario] = useState([])

    async function carregarUsuario(){
        const resp = await listarUsuario()
        setUsuario(resp)
    }

    useEffect(() => {
        carregarUsuario()

    },[])

    return(
        <main className='pagina-consulta'>
        <Menu/>

        <table>
                        <thead>
                            <tr>
                                
                                <th>ID</th>
                                <th>USUARIO</th>
                                <th>NASCIMENTO</th>
                               
                            </tr>
                        </thead>
                        <tbody>

                            {usuario.map(item =>
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.nascimento.substr(0, 10)}</td>
                            
                        </tr>

                                )}                  
                        </tbody>
                    </table>
           
        </main>
    )
}