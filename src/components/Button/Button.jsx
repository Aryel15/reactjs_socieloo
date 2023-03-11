import './style.css'

export default function Button(props) {
    return (
        <>
            <div className="links botão">
                <a href={props.link} accesskey="6">{props.name}</a>
            </div>
        </>
    )
}