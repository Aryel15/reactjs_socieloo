import './style.css'

export default function Card(props) {

    return (
        <>
            <a href={props.link}>
                <div className="card">
                    <div className="img pa">
                        <img src={props.icon} alt="" />
                    </div>
                    <h2>{props.titulo}</h2>
                    <div className="btns_card">
                        <a href={props.categorias} className="button">{props.categoria}</a>
                        <a href={props.regioes} className="button">{props.regiao}</a>
                    </div>
                </div>
            </a>
        </>
    )
}