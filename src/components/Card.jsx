import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Card(props){
    return (
        <>
        <section className="card">
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--info">
                <div className="card--location">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" size="2xs" style={{color: "#f55a5a",}} />
                    <span className="card--country"> {props.country}</span>
                    <a href={props.mapsUrl} className="card--link" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--name">{props.name}</h1>
                <p className="card--dates">{props.dates}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
        <div className="card--divider"></div>
        </>

    )
}