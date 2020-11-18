
import React from "react"
import PopupWithForm from "./PopupWithForm.js"
function EditAvatarPopup(props){
    const inputRef = React.useRef()
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser(inputRef.current.value);
    }
    return (
        <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" onSubmit={handleSubmit} isOpen = {props.isOpen} onClose = {props.onClose} children = {
            <>
                <input className="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="linkAvatar"
                    required ref={inputRef}  />
                <span className="popup__error" id="link-error"></span>
            </>
        }/>
    )
}
export default EditAvatarPopup