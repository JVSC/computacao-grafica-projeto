(this.webpackJsonpgraphix=this.webpackJsonpgraphix||[]).push([[0],{120:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(25),o=a.n(s),r=(a(68),a(69),a(46)),c=a(2),d=a(3),u=a(6),m=a(7),l=a(39),b=a(11),p=a(147),h=a(126),g=a(150),j=a(38),x=a(56),f=a.n(x),O=a(127),v=a(149),k=(a(120),a(14));function y(e){switch(e){case b.e.Blend:return{duration:1.5,easing:b.b.Quartic.InOut};case b.e.Wipe:return{duration:1.5,easing:b.b.Quartic.InOut,gradient:.5,angle:15,direction:b.f[Object.keys(b.f)[Math.floor(Math.random()*Object.keys(b.f).length)]]};case b.e.Blur:return{duration:1,easing:b.b.Quintic.InOut,intensity:1.5};case b.e.Slide:return{duration:1.5,easing:b.b.Quintic.InOut,slides:2,intensity:5,direction:b.d[Object.keys(b.d)[Math.floor(Math.random()*Object.keys(b.d).length)]]};case b.e.Glitch:return{seed:Math.random(),duration:1.5,easing:b.b.Cubic.InOut};default:return{}}}var w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).canvas=i.a.createRef(),n.state={step:0,title:"HELLO WORLD",index:0,textOneIndex:0,transition:b.e.Glitch,numPages:0,pageNumber:1,effects:[b.c.Bloom,b.c.MotionBlur,b.c.Vignette,b.c.VignetteBlur]},n.textOne=["Um script \xe9 uma seq\xfc\xeancia de instru\xe7\xf5es, em uma linguagem interpret\xe1vel pelo sistema,para controle dos objetos e suas respectivas propriedades de anima\xe7\xe3o, textura e comportamento","A anima\xe7\xe3o procedural utiliza o modelo de linguagem de programa\xe7\xe3o por procedimentos, incluindo a orienta\xe7\xe3o por objetos e n\xe3o possui uma rela\xe7\xe3o direta com um determinado sistema. As linguagens procedurais s\xe3o aquelas em que os operadores s\xe3o executados em uma certa ordem, para atender a uma solicita\xe7\xe3o ou atualiza\xe7\xe3o de dados. A anima\xe7\xe3o procedural consiste basicamente em modelos matem\xe1ticos implementados em linguagens de programa\xe7\xe3o para simula\xe7\xe3o de for\xe7as f\xedsicas. ","A anima\xe7\xe3o comportamental ou por comportamento \xe9 aquela em que o animador descreve um conjunto de regras para a maneira como um ou mais objetos da cena reagir\xe3o com o ambiente. Um exemplo desse tipo \xe9 o sistema de part\xedculas quando usado para multid\xf5es, bandos ou grupos de animais."],n.onDocumentLoadSuccess=function(e){var t=e.numPages;n.setState({numPages:t})},j.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(j.c.version,"/pdf.worker.js"),n}return Object(d.a)(a,[{key:"setBackground",value:function(e,t){this.renderer.setBackground(e,{type:t,config:Object(r.a)(Object(r.a)({},y(t)),{},{delay:0,onInit:function(e,t){e.camera.move({x:Math.random(),y:Math.random(),z:.3+.7*Math.random()},{duration:2.5,easing:b.b.Quartic.In}),e.camera.rotate(10*Math.random()-5,{duration:2.5,easing:b.b.Quartic.In}),t.camera.move({x:Math.random(),y:Math.random(),z:.7+.3*Math.random()},{duration:2,delay:0,easing:b.b.Quartic.Out}),t.camera.sway({x:.1,y:.05,z:.02,zr:1},{duration:3,easing:b.b.Quadratic.InOut,loop:!0}),t.camera.rotate(10*Math.random()-5,{duration:2,delay:0,easing:b.b.Quartic.Out})}})});var a=this.renderer.background;!function(e,t){var a=e.effects;a.removeAll();var n,i=Object(l.a)(t);try{for(i.s();!(n=i.n()).done;)switch(n.value){case b.c.Blur:a.set(b.c.Blur,{radius:1.5,passes:1});break;case b.c.MotionBlur:a.set(b.c.MotionBlur,{intensity:1,samples:10});break;case b.c.Bloom:a.set(b.c.Bloom,{radius:1,passes:1});break;case b.c.RgbShift:a.set(b.c.RgbShift,{amount:.005,angle:135});break;case b.c.Vignette:a.set(b.c.Vignette,{darkness:1,offset:1});break;case b.c.VignetteBlur:a.set(b.c.VignetteBlur,{size:3,radius:1.5,passes:1})}}catch(s){i.e(s)}finally{i.f()}}(a,this.state.effects),function(e){var t=e.particles;t.generate([{name:"small",amount:50,maxSize:5,maxOpacity:.8,minGradient:.75,maxGradient:1},{name:"medium",amount:20,maxSize:12,maxOpacity:.8,minGradient:.75,maxGradient:1,smoothing:.8},{name:"large",amount:10,minSize:100,maxSize:125,maxOpacity:.04,minGradient:1,maxGradient:1,smoothing:.65}]),t.move("small",{distance:.5,angle:25},{duration:5,loop:!0}),t.move("medium",{distance:.3,angle:45},{duration:5,loop:!0}),t.move("large",{distance:.4,angle:35},{duration:5,loop:!0}),t.sway("small",{x:.025,y:.025},{duration:1.5,easing:b.b.Sinusoidal.InOut,loop:!0}),t.sway("medium",{x:.025,y:.025},{duration:1.5,easing:b.b.Sinusoidal.InOut,loop:!0}),t.sway("large",{x:.025,y:.025},{duration:1.5,easing:b.b.Sinusoidal.InOut,loop:!0})}(a)}},{key:"componentDidMount",value:function(){var e=this.props.images,t=this.state,a=t.index,n=t.transition;this.renderer=new b.a(this.canvas.current),this.setBackground(e[a].image,n)}},{key:"render",value:function(){var e,t=this,a=this.state.step;return 0===a?e=Object(k.jsxs)("div",{className:"body center bordered fade-in-top",children:[Object(k.jsx)("h1",{className:"content-header",children:"Anima\xe7\xf5es com Blender"}),Object(k.jsx)("p",{className:"content-text",children:"Este trabalho aborda os principais conceitos de anima\xe7\xe3o em Computa\xe7\xe3o Gr\xe1fica, tanto as formas de anima\xe7\xe3o quanto anima\xe7\xf5es de personagens em 3D e a parte pr\xe1tica com um passo a passo envolvendo anima\xe7\xe3o com esqueletos em 3D."}),Object(k.jsxs)("div",{className:"center center-row",children:[Object(k.jsx)("button",{onClick:function(){t.setState({textOneIndex:0})},className:"btn bordered "+(0===this.state.textOneIndex?"active":""),children:"Anima\xe7\xe3o por Script"}),Object(k.jsx)("button",{onClick:function(){t.setState({textOneIndex:1})},className:"btn bordered "+(1===this.state.textOneIndex?"active":""),children:"Anima\xe7\xe3o Procedural"}),Object(k.jsx)("button",{onClick:function(){t.setState({textOneIndex:2})},className:"btn bordered "+(2===this.state.textOneIndex?"active":""),children:"Anima\xe7\xe3o Comportamental"})]}),this.textOneIndex,Object(k.jsx)("p",{className:"content-text",children:this.textOne[this.state.textOneIndex]})]}):1===a?e=Object(k.jsxs)("div",{className:"center",children:[Object(k.jsx)(j.a,{file:"//cg-projeto.herokuapp.com/slides.pdf",onLoadSuccess:this.onDocumentLoadSuccess,className:"maxPdf fade-in-top",children:Object(k.jsx)(j.b,{pageNumber:this.state.pageNumber,width:700})}),Object(k.jsxs)(p.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(k.jsx)(h.a,{onClick:function(){t.setState({pageNumber:Math.max(1,t.state.pageNumber-1)})},children:"Anterior"}),Object(k.jsx)(h.a,{children:"Download"}),Object(k.jsx)(h.a,{onClick:function(){t.setState({pageNumber:Math.min(t.state.numPages,t.state.pageNumber+1)})},children:"Proximo"})]})]}):2===a&&(e=Object(k.jsx)("div",{className:"videoPlayer",children:Object(k.jsx)(f.a,{url:"https://www.youtube.com/watch?v=dHaVKtLGNiE",width:"775px",height:"550px",controls:!0})})),Object(k.jsxs)("div",{className:"view",children:[Object(k.jsx)("canvas",{ref:this.canvas,className:"canvas"}),Object(k.jsxs)("div",{className:"view center",children:[e,Object(k.jsxs)("div",{className:"center center-row fade-in-top",children:[Object(k.jsx)("button",{className:"btn btn-round btn-reverse",onClick:function(){var e=t.props.images;t.setState({index:0,step:0});var a=t.state,n=a.index,i=a.transition;t.setBackground(e[n].image,i)},children:"Sobre o projeto"}),Object(k.jsx)("button",{className:"btn btn-round btn-reverse",onClick:function(){var e=t.props.images;t.setState({index:1,step:1});var a=t.state,n=a.index,i=a.transition;t.setBackground(e[n].image,i)},children:"Apresenta\xe7\xe3o"}),Object(k.jsx)("button",{className:"btn btn-round btn-reverse",onClick:function(){var e=t.props.images;t.setState({index:2,step:2});var a=t.state,n=a.index,i=a.transition;t.setBackground(e[n].image,i)},children:"Tutorial"})]}),Object(k.jsxs)(v.a,{max:4,children:[Object(k.jsx)(g.a,{title:"Joao Victor dos Santos Clementino",arrow:!0,children:Object(k.jsx)(O.a,{alt:"Joao Victor dos Santos Clementino",src:"https://media-exp1.licdn.com/dms/image/C4D03AQH0iBZX2V-8kQ/profile-displayphoto-shrink_200_200/0/1605877659388?e=1626912000&v=beta&t=6kz7okbp-Pfsr6kEXOgiH8PP2SPE6fZBYbesVnKr6D4"})}),Object(k.jsx)(g.a,{title:"Tainara Patr\xedcia de Oliveira",arrow:!0,children:Object(k.jsx)(O.a,{alt:"Tainara Patr\xedcia de Oliveira",src:"https://media-exp1.licdn.com/dms/image/C4D03AQE49eDRR-KkzA/profile-displayphoto-shrink_800_800/0/1565230681285?e=1626912000&v=beta&t=sMvgLziEXL9CtyKnCprBVZUtRCT6VmkBSN1ihBFdq8I"})}),Object(k.jsx)(g.a,{title:"Th\xfalio Xavier Milhomens",arrow:!0,children:Object(k.jsx)(O.a,{alt:"Th\xfalio Xavier Milhomens",src:"https://scontent.frvd5-1.fna.fbcdn.net/v/t1.6435-9/117299930_348398036321540_5395459781018031327_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHbT6TwmW39dJ5LLDe9otmU5HaPhSUvbh_kdo-FJS9uH4RBmJbW9HZX5vqdeTwW7X62grELHU4JIoLJC9P1o_7b&_nc_ohc=ObnqbUEsaMsAX-u1NuM&_nc_ht=scontent.frvd5-1.fna&oh=f06f99e70cc98b509d6ef1e8dbce34bf&oe=60C928A5"})}),Object(k.jsx)(g.a,{title:"Laffaiety Melo de Deus",arrow:!0,children:Object(k.jsx)(O.a,{alt:"Laffaiety Melo de Deus",src:"https://yt3.ggpht.com/ytc/AAUvwnjY31gaWdDpSyskb97i_Iqpah8olOa-Wl0-UZr8=s88-c-k-c0x00ffffff-no-rj"})})]})]})]})}}]),a}(n.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))},B=a.p+"static/media/0.60748a42.jpg",N=a.p+"static/media/1.827e1e7b.jpg",M=a.p+"static/media/2.ba88925d.jpg";Promise.all([Object(b.g)(B).then((function(e){return{image:e,title:"\u591c\u3092\u6b69\u3044\u3066",artist:"\u307f\u3075\u308b",source:"https://www.pixiv.net/en/artworks/71306825"}})),Object(b.g)(N).then((function(e){return{image:e,title:"\u300c\u4f55\u8003\u3048\u3066\u308b\u3093\u3067\u3059\uff1f\u300d",artist:"\u3061\u305f",source:"https://www.pixiv.net/en/artworks/78237071"}})),Object(b.g)(M).then((function(e){return{image:e,title:"Midnight Stroll",artist:"Wenqing Yan",source:"https://www.yuumeiart.com/#/midnight-stroll/"}}))]).then((function(e){return o.a.render(Object(k.jsx)(w,{images:e}),document.getElementById("root"))})).catch((function(e){return console.error("Failed to load assets: ".concat(e))})),S()},51:function(e,t){},68:function(e,t,a){},95:function(e,t){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.000c8acb.chunk.js.map