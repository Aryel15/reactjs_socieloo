import './style.css'
import Axios from 'axios';
import { Link } from 'react-router-dom'

export default function RemoveCard(props) {
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    function desFavoritar(idOng){
        Axios.get(`http://localhost:8080/api/v1/user/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) =>{
            var favoritos = response.data.favoritos
            favoritos.splice(favoritos.indexOf(parseInt(idOng)), 1);
            console.log(favoritos);
           
            Axios.put(`http://localhost:8080/api/v1/user/${id}`, {
                favoritos: favoritos
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
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
                    <Link to={props.link}>
                    <div className="img pa">
                        <img  src={`../../../imgs/icons/${props.segmento}.png`} alt="" />
                    </div>
                    <h2>{props.titulo}</h2>
                    <div>
                        <Link to={props.segmento} className="buttonR">{props.segmento}</Link>
                        <Link to={props.regioes} className="buttonR">{props.regiao}</Link>
                    </div>
                    </Link>
                </div>
            
        </>
    )
}