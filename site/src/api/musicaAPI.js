import { selectArtistaeGeneros } from '../../../api/src/repository/selectArtistasPorGenerosRepository';
import { API_URL } from './config';

export async function cadastraMusica(genero,artista,nome) {
    const r = await api.post('/cadastroArtista',{
        genero: genero,
        artistas: artista,
        nome: nome,
    })
    return r.data;
}