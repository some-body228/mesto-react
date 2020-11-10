function ImagePopup(props){
    return(
        <section className={`popup popup_type_image ${props.cardImageState? "popup_opened":""}`} id="image">
            <div className="popup__image-container">
                <img className="popup__image" src={props.cardImageState} alt="картина пользователя"/>
                <h2 className="popup__caption"></h2>
                <button type="button" className="popup__exit-button popup__exit-button_type_image" onClick={props.onClose}></button>
            </div>
        </section>
    )
}
export default ImagePopup