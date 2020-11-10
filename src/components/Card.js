function Card(props) {
    return (
        <li className="elements__card">
            <img className="elements__image" src={props.curCard.link} alt={props.curCard.name} onClick={()=>{props.onCardClick(props.curCard)}} />
            <h2 className="elements__title">{props.curCard.name}</h2>
            <div className="elements__like-container">
                <button className="elements__like-button" type="button"></button>
                <span className="elements__like-number">{props.curCard.likes.length}</span>
            </div>
            <button className="elements__trash-button" type="button" style={{ display: "none" }}></button>
        </li>
    )
}
export default Card