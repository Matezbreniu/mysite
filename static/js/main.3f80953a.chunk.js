(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{18:function(e,t,a){e.exports=a(57)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(15),r=a.n(i);a(23),a(24),a(25);var c=function(){return o.a.createElement("header",{className:"header",id:"header"},o.a.createElement("div",{className:"headerText"},o.a.createElement("h1",null,"Mateusz Br\u0119k"),o.a.createElement("h3",null,"Front-end Developer")))},l=a(6),s=a(7),m=a(9),u=a(8);a(26);var p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"title".concat(e.id),className:"title swipeFromRight"},e.title),o.a.createElement("div",{className:"bar swipeFromRight"}))},d=a(4),k=a(5);a(32);var y=function(e){return o.a.createElement("div",{className:"propertyContainer swipeFromLeft"},o.a.createElement("div",{className:"propertySquare"},o.a.createElement("div",{className:"propertyIcon fadeIn"},"faLaptopHouse"===e.property.icon&&o.a.createElement(d.a,{style:{width:50,height:50},icon:k.d}),"faEye"===e.property.icon&&o.a.createElement(d.a,{style:{width:50,height:50},icon:k.b}),"faUniversalAccess"===e.property.icon&&o.a.createElement(d.a,{style:{width:50,height:50},icon:k.f}),"faHandPaper"===e.property.icon&&o.a.createElement(d.a,{style:{width:50,height:50},icon:k.c}))),o.a.createElement("div",null,o.a.createElement("div",{className:"propertyText"},e.property.name),o.a.createElement("p",{className:"propertyDescription"},e.property.description)))},f=a(3);a(33);var v=function(){var e=[{name:"Mateusz Br\u0119k",platform:"facebook",link:"facebook",icon:f.b},{name:"Matezbreniu",platform:"github",link:"facebook",icon:f.c},{name:"Mateusz Br\u0119k",platform:"linkedin",link:"facebook",icon:f.f},{name:"matezbreniu@gmail.com",platform:"e-mail",link:"facebook",icon:k.a},{name:"+48 783 469 216",platform:"telephone",link:"facebook",icon:k.e}];return o.a.createElement("div",{className:"contactContainer"},e.map((function(e){return o.a.createElement("div",{key:e.platform,className:"contact swipeFromLeft"},o.a.createElement(d.a,{style:{width:30,height:30},className:"contactIcon",icon:e.icon}),o.a.createElement("div",{className:"contactDescription"},e.name))})))};a(34);var h=function(){return o.a.createElement("section",{className:"aboutMe",id:"aboutMe"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(p,{title:"O mnie",id:"AboutMe"}),o.a.createElement("div",{className:"aboutMeContainer"},o.a.createElement("div",{className:"aboutMePropertiesContainer"},[{name:"Responsywne",description:"Tworz\u0119 strony dzia\u0142aj\u0105ce na ka\u017cdym urz\u0105dzeniu.",icon:"faLaptopHouse"},{name:"Przyjazne",description:"Stawiam na przyjazny interfejs u\u017cytkownika.",icon:"faUniversalAccess"},{name:"Interaktywne",description:"Strona musi reagowa\u0107 na dzia\u0142ania u\u017cytkownika.",icon:"faHandPaper"},{name:"Atrakcyjne",description:"Opr\xf3cz funkcjonalno\u015bci strona powinna te\u017c cieszy\u0107 oko.",icon:"faEye"}].map((function(e){return o.a.createElement(y,{key:e.name,property:e})}))),o.a.createElement("div",{className:"aboutMeContactAndInfoContainer"},o.a.createElement(v,null),o.a.createElement("div",{className:"aboutMeImageAndInfoContainer swipeFromRight"},o.a.createElement("img",{className:"aboutMeImage",src:"/images/meBg.png",alt:"Mateusz Br\u0119k"}),o.a.createElement("div",{className:"aboutMeInfoContainer"},o.a.createElement("div",{className:"aboutMeInfo"}," To ja"),o.a.createElement("div",{className:"aboutMeDescrpiton"},"Spe\u0142niam si\u0119 graj\u0105c od dziesi\u0119ciu lat zawodowo w koszyk\xf3wk\u0119. Od dawna komputery by\u0142y moj\u0105 pasj\u0105, lecz dopiero w 2018 roku zapragn\u0105\u0142em bli\u017cej pozna\u0107 dzia\u0142anie internetu od strony technicznej. Zacz\u0105\u0142em si\u0119 uczy\u0107 i poznawa\u0107 j\u0119zyki front-endu, zafascynowa\u0142o mnie to, \u017ce wszystko mo\u017cna zaprojektowa\u0107 i zmienia\u0107 wed\u0142ug w\u0142asnych upodoba\u0144.")))))))};a(35);var g=function(e){return o.a.createElement("a",{className:"link",href:e.link},e.name)};a(36);var E=function(e){return o.a.createElement("div",{className:"".concat(e.project.class," projectContainer fadeIn")},o.a.createElement("h3",{className:"projectName"},e.project.name),o.a.createElement("div",{className:"projectDescription"},e.project.description),o.a.createElement("div",{className:"projectTechnology"},e.project.technology),o.a.createElement("div",{className:"projectLinks"},o.a.createElement(g,{name:"Strona",link:e.project.siteLink}),e.project.repositoryLink&&o.a.createElement(g,{name:"Kod",link:e.project.repositoryLink})))};a(37);var w=function(){return o.a.createElement("section",{className:"projects",id:"projects"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(p,{title:"Projekty",id:"Projects"}),o.a.createElement("div",{className:"projectsContainer"},[{name:"Weather App",class:"weatherApp",description:"Aplikacja pogodowa z wykorzystaniem API",technology:"React.js",siteLink:"dsaasd",repositoryLink:"https://github.com/Matezbreniu/WeatherApp"},{name:"Sportregeneracja.com",class:"sportregeneracja",description:"Strona projektu sportowej regeneracji",technology:"HTML/CSS/JS",siteLink:"https://www.sportregeneracja.com"},{name:"Swiezaskibka.pl",class:"swiezaskibka",description:"Formularz zam\xf3wie\u0144 dla dostawcy pieczywa",technology:"React.js",siteLink:"https://www.swiezaskibka.pl",repositoryLink:"https://github.com/Matezbreniu/swiezaskibka.pl"}].map((function(e){return o.a.createElement(E,{key:e.name,project:e})})))))},j=(a(38),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={text:"Kliknij na ikon\u0119 by dowiedzie\u0107 si\u0119 wi\u0119cej."},e.skillsList=[{name:"HTML",icon:f.d,text:"Napisa\u0142em sporo linijek kodu w HTML i znam go dobrze."},{name:"CSS",icon:f.a,text:"Z CSSa korzystam codziennie, wi\u0119c znam kilka trick\xf3w."},{name:"Sass",icon:f.h,text:"Wykorzysta\u0142em preprocesor sass w kilku moich projektach."},{name:"JavaScript",icon:f.e,text:"Programuj\u0105c Front-end korzystam z JavaScriptu ca\u0142y czas."},{name:"React.js",icon:f.g,text:"React.js pozna\u0142em niedawno, jednak daje on du\u017ce mo\u017cliwo\u015bci."}],e.handleClick=function(t){var a=t.target.getAttribute("skillname"),n=e.skillsList.filter((function(e){return e.name===a}))[0].text;e.setState({text:n})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{id:"skills"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(p,{title:"Umiej\u0119tno\u015bci",id:"Skills"}),o.a.createElement("div",{className:"skillsText"},this.state.text),o.a.createElement("div",{className:"skillsContainer"},this.skillsList.map((function(t){return o.a.createElement("div",{onClick:e.handleClick,skillname:t.name,key:t.name,className:"skill swipeFromBottom"},o.a.createElement(d.a,{style:{height:"80%",width:"80%"},className:"skillSvg",icon:t.icon}),o.a.createElement("div",{className:"skillName"},t.name))})))))}}]),a}(n.Component)),b=a(2),z=a(16),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).setAnimationPosition=function(){b.a.set(".swipeFromLeft",{x:"-200%",opacity:0}),b.a.set(".swipeFromRight",{x:"200%",opacity:0}),b.a.set(".swipeFromBottom",{y:"200px",opacity:0}),b.a.set(".fadeIn",{opacity:0})},e.titleAnimation=function(){document.querySelectorAll(".title").forEach((function(e){var t=b.a.timeline({scrollTrigger:{trigger:"#".concat(e.id),start:"bottom 80%"}});return t.to("#".concat(e.id),{x:0,duration:.5,opacity:1}),t.to("#".concat(e.id,"~.bar"),{x:0,duration:.5,opacity:1},.2),null}))},e.propertyAnimation=function(){document.querySelectorAll(".propertyContainer").forEach((function(e,t){var a=e.childNodes[0].childNodes[0],n=.5*t,o=b.a.timeline({scrollTrigger:{trigger:".propertyContainer",start:"bottom 80%"}});return o.to(e,{x:0,opacity:1},n),o.to(a,{opacity:1}),null}))},e.contactAnimation=function(){document.querySelectorAll(".contact").forEach((function(e,t){var a=.125*t,n=b.a.timeline({scrollTrigger:{trigger:".contact",start:"bottom 80%"}});return n.to(e,{x:25,opacity:1},a),n.to(e,{x:0}),n.to(e,{x:10}),n.to(e,{x:8}),null}))},e.aboutMeAnimation=function(){b.a.to(".aboutMeImageAndInfoContainer",{scrollTrigger:{trigger:".aboutMeImageAndInfoContainer",start:"bottom 80%"},x:0,opacity:1})},e.projectAnimation=function(){document.querySelectorAll(".projectContainer").forEach((function(e){b.a.to(e,{scrollTrigger:{trigger:e,start:"bottom 80%"},duration:1,opacity:1})}))},e.skillAnimation=function(){document.querySelectorAll(".skill").forEach((function(e,t){var a=.125*t,n=b.a.timeline({scrollTrigger:{trigger:".skillsContainer",start:"bottom 100%"}});return n.to(e,{y:-25,opacity:1},a),n.to(e,{y:0}),n.to(e,{y:-10}),n.to(e,{y:-8}),null}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){b.a.registerPlugin(z.a),document.body.scrollTop=0,document.documentElement.scrollTop=0,this.setAnimationPosition(),this.titleAnimation(),this.propertyAnimation(),this.contactAnimation(),this.aboutMeAnimation(),this.projectAnimation(),this.skillAnimation()}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(h,null),o.a.createElement(w,null),o.a.createElement(j,null))}}]),a}(n.Component),A=a(17),S=a.n(A);a(56);var C=function(){var e=function(e){var t=e.target.className,a=document.querySelector(".navList"),n=document.querySelector(".navBurger");"navBurger"!==t&&"navBurger active"!==t||(a.classList.toggle("active"),n.classList.toggle("active")),"navItem"!==t&&"navLink"!==t||(a.classList.remove("active"),n.classList.remove("active"))};return o.a.createElement("nav",{className:"navContainer"},o.a.createElement("div",{className:"navBurger",onClick:e},o.a.createElement("div",{className:"navBurgerLine"})),o.a.createElement(S.a,{className:"navList",items:["header","aboutMe","projects","skills"],currentClassName:"activeSection"},[{name:"Start",id:"header"},{name:"O mnie",id:"aboutMe"},{name:"Projekty",id:"projects"},{name:"Umiej\u0119tno\u015bci",id:"skills"}].map((function(t){return o.a.createElement("li",{onClick:e,key:t.name,className:"navItem"},o.a.createElement("a",{className:"navLink",href:"#"+t.id},t.name))}))))};var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c,null),o.a.createElement(C,null),o.a.createElement(N,null),o.a.createElement("footer",{className:"footer"},"Created by Mateusz Br\u0119k"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3f80953a.chunk.js.map