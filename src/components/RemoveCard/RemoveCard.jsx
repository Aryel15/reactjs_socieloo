import './style.css'
import Axios from 'axios';

export default function RemoveCard(props) {
    const id = localStorage.getItem("id")
    function desFavoritar(idOng){
        Axios.get(`https://socieloo-back.onrender.com/api/v1/user/${id}`)
        .then((response) =>{
            var favoritos = response.data.favoritos
            favoritos.splice(favoritos.indexOf(parseInt(idOng)), 1);
            console.log(favoritos);
           
            Axios.put(`https://socieloo-back.onrender.com/api/v1/user/${id}`, {
                favoritos: favoritos
            })
            .then((response) =>{
                console.log(favoritos);
                console.log(response.data);
            })
    
        })
    }
    return (
        <>
            
                <div className="cardR">
                    <div class="card__remove" >
                        <img src="../assets/remove-icon.svg" alt="ícone de remoção do projeto" onClick={_ => desFavoritar(props.id)}/>
                    </div>
                    <a href={props.link}>
                    <div className="img pa">
                        <img  src={`../../../imgs/icons/${props.segmento}.png`} alt="" />
                    </div>
                    <h2>{props.titulo}</h2>
                    <div>
                        <a href={props.segmento} className="buttonR">{props.segmento}</a>
                        <a href={props.regioes} className="buttonR">{props.regiao}</a>
                    </div>
                    </a>
                </div>
            
        </>
    )
}