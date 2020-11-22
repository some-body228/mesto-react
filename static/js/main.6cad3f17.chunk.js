(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(6),i=a.n(r),o=(a(15),a(9)),u=a(2),l=(a(16),a.p+"static/media/logo.c2821b38.svg");var d=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{className:"header__logo",src:l,alt:"\u043b\u043e\u0433\u043e"})})})},p=c.a.createContext();var m=function(e){var t=c.a.useContext(p),a=t.id===e.curCard.owner._id,s=e.curCard.likes.some((function(e){return e._id===t.id}));return console.log("\u0440\u0435\u043d\u0434\u0435\u0440 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"),Object(n.jsxs)("li",{className:"elements__card",children:[Object(n.jsx)("img",{className:"elements__image",src:e.curCard.link,alt:e.curCard.name,onClick:function(){e.onCardClick(e.curCard)}}),Object(n.jsx)("h2",{className:"elements__title",children:e.curCard.name}),Object(n.jsxs)("div",{className:"elements__like-container",children:[Object(n.jsx)("button",{className:"elements__like-button ".concat(s&&"elements__like-button_liked"),type:"button",onClick:function(){e.onCardLike(e.curCard)}}),Object(n.jsx)("span",{className:"elements__like-number",children:e.curCard.likes.length})]}),Object(n.jsx)("button",{className:"elements__trash-button",type:"button",style:{display:a?"block":"none"},onClick:function(){e.onCardDelete(e.curCard)}})]})};var h=function(e){var t=c.a.useContext(p);return Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__avatar-container",children:[Object(n.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),Object(n.jsx)("div",{className:"profile__avatar-redaction",onClick:e.onEditAvatar})]}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__user-name",children:t.name}),Object(n.jsx)("button",{className:"profile__redaction-button",type:"button",onClick:e.onEditProfile}),Object(n.jsx)("p",{className:"profile__user-caption",children:t.about})]}),Object(n.jsx)("button",{className:"profile__button",type:"button",onClick:e.onAddPlace})]}),Object(n.jsx)("section",{className:"elements",children:Object(n.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(n.jsx)(m,{curCard:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var j=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){return Object(n.jsx)("section",{className:"popup popup_type_image ".concat(e.cardImageState.link?"popup_opened":""),id:"image",children:Object(n.jsxs)("div",{className:"popup__image-container",children:[Object(n.jsx)("img",{className:"popup__image",src:e.cardImageState.link,alt:e.cardImageState.name}),Object(n.jsx)("h2",{className:"popup__caption",children:e.cardImageState.name}),Object(n.jsx)("button",{type:"button",className:"popup__exit-button popup__exit-button_type_image",onClick:e.onClose})]})})};var _=function(e){return Object(n.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),id:e.name,children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("h2",{className:"popup__title",children:e.title}),Object(n.jsxs)("form",{className:"popup__form",name:"popup-form-".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(n.jsx)("button",{type:"submit",className:"popup__save-button",children:e.btnText}),Object(n.jsx)("button",{type:"button",className:"popup__exit-button",onClick:e.onClose})]})]})})};var f=function(e){var t=e.isOpen,a=e.onClose,s=e.onUpdateUser,r=c.a.useContext(p);c.a.useEffect((function(){d(r.name),b(r.about)}),[r]);var i=c.a.useState(""),o=Object(u.a)(i,2),l=o[0],d=o[1],m=c.a.useState(""),h=Object(u.a)(m,2),j=h[0],b=h[1];return Object(n.jsx)(_,{name:"redaction",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({name:l,about:j})},isOpen:t,onClose:a,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"popup__input",id:"user-name",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",onChange:function(e){d(e.target.value)},value:l||""}),Object(n.jsx)("span",{className:"popup__error",id:"user-name-error"}),Object(n.jsx)("input",{className:"popup__input",id:"user-caption",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"caption",required:!0,minLength:"2",maxLength:"200",onChange:function(e){b(e.target.value)},value:j||""}),Object(n.jsx)("span",{className:"popup__error",id:"user-caption-error"})]})})};var O=function(e){var t=e.isOpen,a=e.onClose,s=e.onUpdateUser,r=c.a.useRef();return Object(n.jsx)(_,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),s(r.current.value)},isOpen:t,onClose:a,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"popup__input",id:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"linkAvatar",required:!0,ref:r}),Object(n.jsx)("span",{className:"popup__error",id:"link-error"})]})})};var x=function(e){var t=e.isOpen,a=e.onClose,s=e.onAddPlace,r=c.a.useState(""),i=Object(u.a)(r,2),o=i[0],l=i[1],d=c.a.useState(""),p=Object(u.a)(d,2),m=p[0],h=p[1];return Object(n.jsx)(_,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({name:o,link:m})},isOpen:t,onClose:a,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{className:"popup__input",id:"place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"place",required:!0,minLength:"1",maxLength:"30",onChange:function(e){l(e.target.value)}}),Object(n.jsx)("span",{className:"popup__error",id:"place-error"}),Object(n.jsx)("input",{className:"popup__input",id:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,onChange:function(e){h(e.target.value)}}),Object(n.jsx)("span",{className:"popup__error",id:"link-error"})]})})},C=a(7),v=a(8),g=new(function(){function e(t){Object(C.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(v.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"getName",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}},{key:"patchName",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"8e87a5dc-6c3c-4389-85a0-676a9403f4b5","Content-Type":"application/json"}});var k=function(){var e=c.a.useState({}),t=Object(u.a)(e,2),a=t[0],s=t[1],r=c.a.useState(!1),i=Object(u.a)(r,2),l=i[0],m=i[1],C=c.a.useState(!1),v=Object(u.a)(C,2),k=v[0],N=v[1],y=c.a.useState(!1),S=Object(u.a)(y,2),D=S[0],P=S[1],E=c.a.useState({}),L=Object(u.a)(E,2),T=L[0],A=L[1],R=c.a.useState([]),U=Object(u.a)(R,2),I=U[0],F=U[1];function q(){m(!1),N(!1),P(!1),A({})}return c.a.useEffect((function(){Promise.all([g.getInitialCards(),g.getName()]).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];F(a),s({name:n.name,about:n.about,avatar:n.avatar,id:n._id})}))}),[]),Object(n.jsxs)(p.Provider,{value:a,children:[Object(n.jsx)(d,{}),Object(n.jsx)(h,{onEditProfile:function(){m(!l)},onAddPlace:function(){N(!k)},onEditAvatar:function(){P(!D)},onCardClick:function(e){A({link:e.link,name:e.name})},onClose:q,cards:I,onCardLike:function(e){e.likes.some((function(e){return e._id===a.id}))?g.dislikeCard(e._id).then((function(e){return t(e)})):g.likeCard(e._id).then((function(e){return t(e)}));var t=function(t){var a=I.map((function(a){return a._id===e._id?t:a}));F(a)}},onCardDelete:function(e){g.deleteCard(e._id).then((function(t){var a=I.filter((function(t){return e._id!==t._id}));F(a)}))}}),Object(n.jsx)(f,{isOpen:l,onClose:q,onUpdateUser:function(e){g.patchName(e).then((function(e){s({name:e.name,about:e.about,avatar:e.avatar,id:e._id}),q()}))}}),Object(n.jsx)(b,{onClose:q,cardImageState:T}),Object(n.jsx)(_,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",btnText:"\u0434\u0430",isOpen:!1,onClose:q,children:null}),Object(n.jsx)(O,{isOpen:D,onClose:q,onUpdateUser:function(e){g.patchAvatar(e).then((function(e){s({name:e.name,about:e.about,avatar:e.avatar,id:e._id}),q()}))}}),Object(n.jsx)(x,{isOpen:k,onClose:q,onAddPlace:function(e){g.postCard(e).then((function(e){F([e].concat(Object(o.a)(I))),q()}))}}),Object(n.jsx)(j,{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.6cad3f17.chunk.js.map