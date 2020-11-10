import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import api from "../utils/Api.js"
import react from "react"
import Card from "./Card.js"
function Main(props){
    const [userName, setUserName] = react.useState(null)
    const [userDescription , setUserDescription ] = react.useState(null)
    const [userAvatar, setUserAvatar] = react.useState(null)
    const [cards, setCards] = react.useState([])
    react.useEffect(()=>{
        api.getName()
            .then((res)=>{
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
        api.getInitialCards()
           .then((res) =>{
                setCards(res)
            })
    },[])
    function renderCards(){
         return cards.reduce((prev,current) =>{
            return(
                <>
                  <Card curCard={current} onCardClick={props.onCardClick}/>
                    {prev}
                </>
            )
        }, null)
    }
    return(
    <main>
        <section className="profile">
            <div className="profile__avatar-container" > 
                <img className="profile__avatar" src={userAvatar} alt="аватар"/>
                <div className= "profile__avatar-redaction" onClick={props.onEditAvatar}></div>
            </div>
            <div className="profile__info">
                <h1 className="profile__user-name">{userName}</h1>
                <button className="profile__redaction-button" type="button" onClick={props.onEditProfile}></button>
                <p className="profile__user-caption">{userDescription}</p>
            </div>
            <button className="profile__button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
            <ul className="elements__list">
            {renderCards()}
            </ul>
        </section>
    </main>
    )
}
export default Main