(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(7),c=n.n(o),i=n(11),s=n(3),l=n(4),u=n(6),h=n(5),d=(n(28),n(0)),g=function(e){var t=e.children;return Object(d.jsx)("div",{className:"Container",children:t})},m=(n(30),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component)),b=n(21),j=n.n(b),f=n(10),p=n.n(f),O=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a;return j.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=").concat("20214854-335f127fa955b7b4fdba968be","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};O.propTypes={searchQuery:p.a.string.isRequired,currentPage:p.a.number.isRequired};var y,v=O,w=(n(51),function(e){var t=e.webformatURL,n=e.largeImageURL,a=e.showModal;return Object(d.jsx)("li",{onClick:function(){return a(n)},className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:t,alt:t,className:"ImageGalleryItem-image"})})}),x=(n(52),function(e){var t=e.images,n=e.showModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(d.jsx)(w,{webformatURL:a,largeImageURL:r,showModal:n},t)}))})}),k=(n(53),function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}),C=n(22),S=n(9),I=n(23),L=n.n(I),M=Object(S.css)(y||(y=Object(C.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"sweet-loading",children:Object(d.jsx)(L.a,{css:M,size:20,color:"#303f9f",margin:5,loading:this.state.loading})})}}]),n}(r.a.Component),R=(n(59),document.querySelector("#modal")),U=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e.handleClickOnImage=function(t){console.dir(t.currentTarget),"IMG"===t.currentTarget.nodeName&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(d.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal__content",children:Object(d.jsx)("img",{src:e,alt:e,onClick:this.handleClickOnImage})})}),R)}}]),n}(a.Component),q=(n(60),n(61),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,error:null,isLoading:!1,showModal:!1,largeImageURL:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,n=t.currentPage,a={searchQuery:t.searchQuery,currentPage:n};e.setState({isLoading:!0}),v(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t){console.log(t),e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.showModal,n=e.images,a=e.isLoading,r=e.error,o=e.largeImageURL;return Object(d.jsxs)(g,{children:[Object(d.jsx)(m,{onSubmit:this.onChangeQuery}),r&&Object(d.jsx)("h2",{children:"Opps! Something went wrong!"}),n.length>0&&Object(d.jsx)(x,{showModal:this.toggleModal,images:n}),t&&Object(d.jsx)(U,{onClose:this.toggleModal,largeImageURL:o}),a&&Object(d.jsx)(N,{}),n.length>0&&!a&&Object(d.jsx)(k,{onClick:this.fetchImages})]})}}]),n}(a.Component));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3d73aab6.chunk.js.map