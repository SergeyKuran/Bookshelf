var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("cK9oC",(function(t,s){var n=e("eyjy7"),i=e("2ix2C");const d=document.querySelector(".form"),o=document.querySelector(".js-signIn"),l=document.querySelector(".btn_form"),c=document.querySelector(".js-signUp"),r=document.querySelector(".backdrop_form"),a=document.querySelector(".js-modal-closeBtn"),u=document.querySelector(".Js-profileBtn"),m=document.querySelector(".Js-signUpBtn-heder"),f=document.querySelector(".js-profile-name"),g=document.querySelector(".js-logOutBtn-header");d.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.name.value,s=e.currentTarget.elements.email.value,o=e.currentTarget.elements.password.value,c=(0,n.getAuth)();if(h=t,""===o.value||""===s.value)alert("Всі поля повинні бути заповненні!");else if(l.classList.contains("Js-signIn-btn"))return(0,n.signInWithEmailAndPassword)(c,s,o).then((e=>console.log(e))).catch((e=>console.log(e))).finally((()=>{d.reset()})),u.classList.remove("is-hidden"),f.textContent=t,m.classList.add("is-hidden"),g.classList.add("is-hidden"),void r.classList.add("is-hidden");(0,n.createUserWithEmailAndPassword)(c,s,o).then((e=>{const n=e.user.uid;(0,i.writeUserData)(n,t,s),u.classList.remove("is-hidden"),f.textContent=t,m.classList.add("is-hidden"),g.classList.add("is-hidden")})).catch((e=>{console.log(e.code),console.log(e.messag)})).finally((()=>{d.reset()})),r.classList.add("is-hidden")})),o.addEventListener("click",(function(e){e.preventDefault(),l.classList.add("Js-signIn-btn"),l.textContent="SIGN IN",c.classList.remove("curent"),o.classList.add("curent")})),c.addEventListener("click",(function(e){e.preventDefault(),l.classList.remove("Js-signIn-btn"),l.textContent="SIGN UP",c.classList.add("curent"),o.classList.remove("curent")})),a.addEventListener("click",(function(){r.classList.add("is-hidden")}));let h=""}));
//# sourceMappingURL=autorithation.c8d16b6d.js.map
