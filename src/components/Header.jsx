import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Header(){
    return (
        <div className="header">
            <FontAwesomeIcon icon="fa-solid fa-earth-americas" style={{color: "#ffffff",}} size='lg' />
            <span className="header--title" >my travel journal.</span>
        </div>
    )
}