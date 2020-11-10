import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
function App() {
    const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState("")
    function handleEditAvatarClick(){
        setAvatarPopupOpen(!isEditAvatarPopupOpen)
    }
    function handleEditProfileClick(){
        setProfilePopupOpen(!isEditProfilePopupOpen)
    }
    function handleAddPlaceClick(){
        setAddPlacePopupOpen(!isAddPlacePopupOpen)
    }
    function handleCardClick(link){
        setSelectedCard(link)
    }
    function closeAllPopups(){
        setProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setAvatarPopupOpen(false)
        setSelectedCard("")
    }
  return (
    <>
    <Header/>
    <Main onEditProfile={handleEditProfileClick}  onAddPlace ={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onClose={closeAllPopups} 
        profilePopupState={isEditProfilePopupOpen} addCardPopupState ={isAddPlacePopupOpen} avatarPopupState={isEditAvatarPopupOpen} cardImageState={selectedCard}/>
    <Footer />
    </>
  );
}

export default App;
