import '../App.css';
import React from 'react';
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import ImagePopup from "./ImagePopup.js"
import PopupWithForm from "./PopupWithForm.js"
import EditProfilePopup from "./EditProfilePopup.js"
import EditAvatarPopup from "./EditAvatarPopup.js"
import AddPlacePopup from "./AddPlacePopup.js"
import {CurrentUserContext} from "../context/CurrentUserContext.js"
import api from "../utils/Api.js"
function App() {
    const [currentUser, setCurrentUser] = React.useState({})
    const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})
    const [cards, setCards] = React.useState([])
    React.useEffect(()=>{
        api.getInitialCards()
           .then((res) =>{
                setCards(res)
            })
    },[])
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser.id);
        if(!isLiked){
            api.likeCard(card._id).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
        } else {
            api.dislikeCard(card._id).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
        }
    } 
    function handleCardDelete(card) {
        api.deleteCard(card._id).then((res) => {
            const newCards = cards.filter((c) => {
                return card._id != c._id
            })
            setCards(newCards);
            
        })
    }
    React.useEffect(()=>{
        api.getName()
            .then((res)=>{
                setCurrentUser({
                    name: res.name,
                    about: res.about,
                    avatar: res.avatar,
                    id: res._id
                })
            })
    },[])
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
    function handleUpdateUser(data){
        api.patchName(data)
            .then((res) =>{
                setCurrentUser({
                    name: res.name,
                    about: res.about,
                    avatar: res.avatar,
                    id: res._id
                })
                closeAllPopups()
            })
    }
    function handleUpdateAvatar(data){
        api.patchAvatar(data)
        .then((res) =>{
            setCurrentUser({
                name: res.name,
                about: res.about,
                avatar: res.avatar,
                id: res._id
            })
            closeAllPopups()
        })
    }
    function handleAddPlaceSubmit(data){
        api.postCard(data)
        .then((res) =>{
            console.log(res)
            setCards([res, ...cards])
            closeAllPopups()
        })
    }
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <Header/>
    <Main onEditProfile={handleEditProfileClick}  onAddPlace ={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onClose={closeAllPopups} 
        cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}></Main>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <ImagePopup onClose={closeAllPopups} cardImageState={selectedCard}/>
        <PopupWithForm name="confirm" title="Вы уверены?" btnText="да" isOpen = {false}  onClose = {closeAllPopups} children = {null}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar}/> 
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
    <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
