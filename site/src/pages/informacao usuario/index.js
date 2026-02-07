import './index.scss'


import { ToastContainer, toast } from 'react-toastify';
import Cabecario from '../../components/cabeçalho'
import { API_URL } from '../../api/config'
import { useEffect, useState } from 'react'
import { buscarUsuarioPorId, listarUsuario, enviarImagemUsuario } from '../../api/usuarioAPI'
import { useNavigate, useParams } from 'react-router-dom'
import Storage from 'local-storage'

export default function Index() {

    const [usuario, setUsuario] = useState([])
    const [imagem, setImagem] = useState('')


    const { idParam } = useParams()
    const navigate = useNavigate()

    function sairClick() {
        toast.success('Você deslogou!')
        setTimeout(() => {
            Storage.remove('usuario-logado')
            navigate('/')    
        }, 1500);
    }

    async function carregarUsuario() {
        const id = Storage('usuario-logado').id
        const resp = await buscarUsuarioPorId(id);
        setUsuario(resp);
    }

    useEffect(() => {
         if(!Storage('usuario-logado')){
                navigate('/LoginUsuario');
            }

        carregarUsuario();
    }, [])

    function mostrarImagem(imagem) {

        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return `${API_URL}/${imagem}`
        }
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    async function salvarImagem() {
        try {

            if (typeof (imagem) == 'object') {
                await enviarImagemUsuario(idParam, imagem)

            }

            toast.dark('trocastes a foto, querido usuario do fitas br')

        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message);
        }

    }
    return (
        <section>
            <Cabecario />
            <ToastContainer/>
            <main className="profile-page">
  <div className="profile-card">

    {/* COLUNA ESQUERDA */}
    <div className="profile-avatar-section">
      <div className="profile-avatar" onClick={escolherImagem}>
        {!usuario.imagem && (
          <img src={mostrarImagem(imagem)} alt="Avatar usuário" />
        )}

        {usuario.imagem && (
          <img src={`${API_URL}/${usuario.imagem}`} alt="Avatar usuário" />
        )}

        <input
          type="file"
          id="imagemCapa"
          onChange={e => setImagem(e.target.files[0])}
        />
      </div>

      <div className="profile-actions">
        <button className="btn-primary" onClick={salvarImagem}>
          Salvar imagem
        </button>
        <button className="btn-secondary" onClick={sairClick}>
          Sair
        </button>
      </div>
    </div>

    {/* COLUNA DIREITA */}
    <div className="profile-info">
      <div className="info-group">
        <div className="info-item">
          <h1>Nome</h1>
          <h3>{usuario.nome}</h3>
        </div>

        <div className="info-item">
          <h1>Nascimento</h1>
          <h3>{usuario.nascimento}</h3>
        </div>
      </div>

      <div className="info-group">
        <div className="info-item">
          <h1>Email</h1>
          <h3>{usuario.email}</h3>
        </div>

        <div className="info-item">
          <h1>Senha</h1>
          <h3>••••••••</h3>
        </div>
      </div>
    </div>

  </div>
</main>

        </section>
    )
}