import './style.css'
import { Link } from 'react-router-dom'

export default function Card(props) {

    return (
        <>
            <Link to={props.link} key={props.nome}>
                <div className="card">
                    <div className="img pa">
                        <img src={`../../../imgs/icons/${props.segmento}.png`} alt="" />
                    </div>
                    <h2>{props.titulo}</h2>
                    <div className="btns_card">
                        <Link to={`/ongs/${props.segmento}`} className="button">{props.segmento}</Link>
                        <Link to={`/ongs/${props.regiao}`} className="button">{props.regiao}</Link>
                    </div>
                </div>
            </Link>
        </>
    )
}