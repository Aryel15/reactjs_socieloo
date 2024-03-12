import './style.css'
import { Link } from 'react-router-dom'

export default function Button(props) {
    return (
        <>
            <div className="links botão">
                <Link to={props.link} accesskey="6">{props.name}</Link>
            </div>
        </>
    )
}