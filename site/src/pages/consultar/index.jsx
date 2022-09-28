import './index.scss'
import Menu from '../../components/menu'

export default function Consulta(){

    return(
        <main className='pagina-consulta'>
        <Menu/>
        <section className='faixa-preta'>

            <div className='Consulta'>
                <input type="text" placeholder="Consulta"></input>
                <div>
                <table>
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>MÚSICA</th>
                                <th>AUTOR</th>
                                <th>TEMPO</th>
                                <th>GÊNERO</th>
                            </tr>
                        </thead>
                        <tbody>

                           
                          


                            
                        </tbody>
                    </table>
                </div>

            </div>


        </section>
        </main>
    )
}