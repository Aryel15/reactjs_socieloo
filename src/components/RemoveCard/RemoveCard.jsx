import './style.css'

export default function RemoveCard(props) {

    return (
        <>
            <a href={props.link}>
                <div className="cardR">
                    <div class="card__remove">
                        <img src="../assets/remove-icon.svg" alt="ícone de remoção do projeto"/>
                    </div>
                    <div className="img pa">
                        <img src={props.icon} alt="" />
                    </div>
                    <h2>{props.titulo}</h2>
                    <div>
                        <a href={props.categorias} className="buttonR">{props.categoria}</a>
                        <a href={props.regioes} className="buttonR">{props.regiao}</a>
                    </div>
                </div>
            </a>
        </>
    )
}