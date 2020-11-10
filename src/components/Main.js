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
        <PopupWithForm name="redaction" title="Редактировать профиль" btnText="Сохранить" isOpen = {props.profilePopupState} onClose = {props.onClose} children = {
            <>
                <input className="popup__input" id="user-name" type="text" placeholder="Имя" name="name" required
                    minLength="2" maxLength="40" />
                <span className="popup__error" id="user-name-error"></span>
                <input className="popup__input" id="user-caption" type="text" placeholder="О себе" name="caption"
                    required minLength="2" maxLength="200"/> 
                <span className="popup__error" id="user-caption-error"></span>
            </>
        }/>
        <PopupWithForm name="add-card" title="Новое место" btnText="Создать" isOpen = {props.addCardPopupState} onClose = {props.onClose} children = {
            <>
                    <input className="popup__input" id="place" type="text" placeholder="Название" name="place" required
                        minLength="1" maxLength="30"/>
                    <span className="popup__error" id="place-error"></span>
                    <input className="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="link"
                        required/>
                    <span className="popup__error" id="link-error"></span>
            </>
        }/>
        <ImagePopup onClose={props.onClose} cardImageState={props.cardImageState}/>
        <PopupWithForm name="confirm" title="Вы уверены?" btnText="да" isOpen = {false}  onClose = {props.onClose} children = {null}/>
        <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" isOpen = {props.avatarPopupState} onClose = {props.onClose} children = {
            <>
                <input className="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="linkAvatar"
                    required/>
                <span className="popup__error" id="link-error"></span>
            </>
        }/>
    </main>
    )
}
export default Main