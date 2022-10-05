import './index.scss'

export default function Cabeçario(props){
    return(
       <main className='cabecalho'>
        <div className='logo'>
            <img src='/images/logooo.png' width="120px"></img>
        </div>
        <div className='div1'>
            <div className='lupa'>
            <img src='/images/lupa.png'></img>
            </div>
            <div className='playlist'>
            <img src='/images/playlist.png'></img>
            </div>
            <div className='logoconta'>
            <img src='/images/logoconta.png'></img>
            </div>
        </div>

       </main>
    )
}