import Menu from '../../components/menu'
import './index.scss'

export default function Index () {
    return(
        <div className="pag-consulta">
            
            <Menu />
            <div className="consulta">
                <div className="barra-pesquisa">
                    <input  type="text" placeholder="Buscar" />
                    <img src="images/icon-pesquisa.png" />
                </div>
                <div>
                    th
                </div>
            </div>
        </div>
    )
}