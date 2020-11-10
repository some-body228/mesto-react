import '../App.css';
import React from 'react';
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import ImagePopup from "./ImagePopup.js"
import PopupWithForm from "./PopupWithForm.js"
function App() {
    const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})
    function handleEditAvatarClick(){
        setAvatarPopupOpen(!isEditAvatarPopupOpen)
    }
    function handleEditProfileClick(){
        setProfilePopupOpen(!isEditProfilePopupOpen)
    }
    function handleAddPlaceClick(){
        setAddPlacePopupOpen(!isAddPlacePopupOpen)
    }
    function handleCardClick(card){
        setSelectedCard({
            link:card.link, 
            name:card.name
        })
    }
    function closeAllPopups(){
        setProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setAvatarPopupOpen(false)
        setSelectedCard({})
    }
  return (
    <>
    <Header/>
    <Main onEditProfile={handleEditProfileClick}  onAddPlace ={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onClose={closeAllPopups} ></Main>
            <PopupWithForm name="redaction" title="Редактировать профиль" btnText="Сохранить" isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups} children = {
            <>
                <input className="popup__input" id="user-name" type="text" placeholder="Имя" name="name" required
                    minLength="2" maxLength="40" />
                <span className="popup__error" id="user-name-error"></span>
                <input className="popup__input" id="user-caption" type="text" placeholder="О себе" name="caption"
                    required minLength="2" maxLength="200"/> 
                <span className="popup__error" id="user-caption-error"></span>
            </>
        }/>
        <PopupWithForm name="add-card" title="Новое место" btnText="Создать" isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} children = {
            <>
                    <input className="popup__input" id="place" type="text" placeholder="Название" name="place" required
                        minLength="1" maxLength="30"/>
                    <span className="popup__error" id="place-error"></span>
                    <input className="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="link"
                        required/>
                    <span className="popup__error" id="link-error"></span>
            </>
        }/>
        <ImagePopup onClose={closeAllPopups} cardImageState={selectedCard}/>
        <PopupWithForm name="confirm" title="Вы уверены?" btnText="да" isOpen = {false}  onClose = {closeAllPopups} children = {null}/>
        <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups} children = {
            <>
                <input className="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="linkAvatar"
                    required/>
                <span className="popup__error" id="link-error"></span>
            </>
        }/>
    <Footer />
    </>
  );
}

export default App;
