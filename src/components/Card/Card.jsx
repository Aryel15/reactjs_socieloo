import './style.css'

export default function Card(props) {
    function LocalOng(id){
        localStorage.setItem("idPage", id)
    }

    return (
        <>
            <a href={props.link} onClick={LocalOng(props.id)}>
                <div className="card">
                    <div className="img pa">
                        <img src={`../../../imgs/icons/${props.segmento}.png`} alt="" />
                    </div>
                    <h2>{props.titulo}</h2>
                    <div className="btns_card">
                        <a href={props.segmento} className="button">{props.segmento}</a>
                        <a href={props.regiao} className="button">{props.regiao}</a>
                    </div>
                </div>
            </a>
        </>
    )
}