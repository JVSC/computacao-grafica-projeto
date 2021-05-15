(this.webpackJsonpgraphix=this.webpackJsonpgraphix||[]).push([[0],{23:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),s=a(16),o=a.n(s),r=(a(23),a(15)),c=a(0),d=a(1),u=a(2),m=a(3),l=a(11),p=a(6),b=(a(26),a(7));function g(e){switch(e){case p.e.Blend:return{duration:1.5,easing:p.b.Quartic.InOut};case p.e.Wipe:return{duration:1.5,easing:p.b.Quartic.InOut,gradient:.5,angle:15,direction:p.f[Object.keys(p.f)[Math.floor(Math.random()*Object.keys(p.f).length)]]};case p.e.Blur:return{duration:1,easing:p.b.Quintic.InOut,intensity:1.5};case p.e.Slide:return{duration:1.5,easing:p.b.Quintic.InOut,slides:2,intensity:5,direction:p.d[Object.keys(p.d)[Math.floor(Math.random()*Object.keys(p.d).length)]]};case p.e.Glitch:return{seed:Math.random(),duration:1.5,easing:p.b.Cubic.InOut};default:return{}}}var h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).canvas=i.a.createRef(),n.state={step:0,title:"HELLO WORLD",index:0,textOneIndex:0,transition:p.e.Glitch,effects:[p.c.Bloom,p.c.MotionBlur,p.c.Vignette,p.c.VignetteBlur]},n.textOne=["Um script \xe9 uma seq\xfc\xeancia de instru\xe7\xf5es, em uma linguagem interpret\xe1vel pelo sistema,para controle dos objetos e suas respectivas propriedades de anima\xe7\xe3o, textura e comportamento","A anima\xe7\xe3o procedural utiliza o modelo de linguagem de programa\xe7\xe3o por procedimentos, incluindo a orienta\xe7\xe3o por objetos e n\xe3o possui uma rela\xe7\xe3o direta com um determinado sistema. As linguagens procedurais s\xe3o aquelas em que os operadores s\xe3o executados em uma certa ordem, para atender a uma solicita\xe7\xe3o ou atualiza\xe7\xe3o de dados. A anima\xe7\xe3o procedural consiste basicamente em modelos matem\xe1ticos implementados em linguagens de programa\xe7\xe3o para simula\xe7\xe3o de for\xe7as f\xedsicas. ","A anima\xe7\xe3o comportamental ou por comportamento \xe9 aquela em que o animador descreve um conjunto de regras para a maneira como um ou mais objetos da cena reagir\xe3o com o ambiente. Um exemplo desse tipo \xe9 o sistema de part\xedculas quando usado para multid\xf5es, bandos ou grupos de animais."],n}return Object(d.a)(a,[{key:"setBackground",value:function(e,t){this.renderer.setBackground(e,{type:t,config:Object(r.a)(Object(r.a)({},g(t)),{},{delay:0,onInit:function(e,t){e.camera.move({x:Math.random(),y:Math.random(),z:.3+.7*Math.random()},{duration:2.5,easing:p.b.Quartic.In}),e.camera.rotate(10*Math.random()-5,{duration:2.5,easing:p.b.Quartic.In}),t.camera.move({x:Math.random(),y:Math.random(),z:.7+.3*Math.random()},{duration:2,delay:0,easing:p.b.Quartic.Out}),t.camera.sway({x:.1,y:.05,z:.02,zr:1},{duration:3,easing:p.b.Quadratic.InOut,loop:!0}),t.camera.rotate(10*Math.random()-5,{duration:2,delay:0,easing:p.b.Quartic.Out})}})});var a=this.renderer.background;!function(e,t){var a=e.effects;a.removeAll();var n,i=Object(l.a)(t);try{for(i.s();!(n=i.n()).done;)switch(n.value){case p.c.Blur:a.set(p.c.Blur,{radius:1.5,passes:1});break;case p.c.MotionBlur:a.set(p.c.MotionBlur,{intensity:1,samples:10});break;case p.c.Bloom:a.set(p.c.Bloom,{radius:1,passes:1});break;case p.c.RgbShift:a.set(p.c.RgbShift,{amount:.005,angle:135});break;case p.c.Vignette:a.set(p.c.Vignette,{darkness:1,offset:1});break;case p.c.VignetteBlur:a.set(p.c.VignetteBlur,{size:3,radius:1.5,passes:1})}}catch(s){i.e(s)}finally{i.f()}}(a,this.state.effects),function(e){var t=e.particles;t.generate([{name:"small",amount:50,maxSize:5,maxOpacity:.8,minGradient:.75,maxGradient:1},{name:"medium",amount:20,maxSize:12,maxOpacity:.8,minGradient:.75,maxGradient:1,smoothing:.8},{name:"large",amount:10,minSize:100,maxSize:125,maxOpacity:.04,minGradient:1,maxGradient:1,smoothing:.65}]),t.move("small",{distance:.5,angle:25},{duration:5,loop:!0}),t.move("medium",{distance:.3,angle:45},{duration:5,loop:!0}),t.move("large",{distance:.4,angle:35},{duration:5,loop:!0}),t.sway("small",{x:.025,y:.025},{duration:1.5,easing:p.b.Sinusoidal.InOut,loop:!0}),t.sway("medium",{x:.025,y:.025},{duration:1.5,easing:p.b.Sinusoidal.InOut,loop:!0}),t.sway("large",{x:.025,y:.025},{duration:1.5,easing:p.b.Sinusoidal.InOut,loop:!0})}(a)}},{key:"componentDidMount",value:function(){var e=this.props.images,t=this.state,a=t.index,n=t.transition;this.renderer=new p.a(this.canvas.current),this.setBackground(e[a].image,n)}},{key:"render",value:function(){var e,t=this,a=this.state.step;return 0===a?e=Object(b.jsxs)("div",{className:"body center bordered fade-in-top",children:[Object(b.jsx)("h1",{className:"content-header",children:"Anima\xe7\xf5es com Blender"}),Object(b.jsx)("p",{className:"content-text",children:"Este trabalho aborda os principais conceitos de anima\xe7\xe3o em Computa\xe7\xe3o Gr\xe1fica, tanto as formas de anima\xe7\xe3o quanto anima\xe7\xf5es de personagens em 3D e a parte pr\xe1tica com um passo a passo envolvendo anima\xe7\xe3o com esqueletos em 3D."}),Object(b.jsxs)("div",{className:"center center-row",children:[Object(b.jsx)("button",{onClick:function(){t.setState({textOneIndex:0})},className:"btn bordered "+(0===this.state.textOneIndex?"active":""),children:"Anima\xe7\xe3o por Script"}),Object(b.jsx)("button",{onClick:function(){t.setState({textOneIndex:1})},className:"btn bordered "+(1===this.state.textOneIndex?"active":""),children:"Anima\xe7\xe3o Procedural"}),Object(b.jsx)("button",{onClick:function(){t.setState({textOneIndex:2})},className:"btn bordered "+(2===this.state.textOneIndex?"active":""),children:"Anima\xe7\xe3o Comportamental"})]}),this.textOneIndex,Object(b.jsx)("p",{className:"content-text",children:this.textOne[this.state.textOneIndex]})]}):1===a&&(e=Object(b.jsx)("div",{className:"body center bordered fade-in-top"})),Object(b.jsxs)("div",{className:"view",children:[Object(b.jsx)("canvas",{ref:this.canvas,className:"canvas"}),Object(b.jsxs)("div",{className:"view center",children:[e,Object(b.jsxs)("div",{className:"center center-row fade-in-top",children:[Object(b.jsx)("button",{className:"btn btn-round btn-reverse",onClick:function(){var e=t.props.images;t.setState({index:0,step:0});var a=t.state,n=a.index,i=a.transition;t.setBackground(e[n].image,i)},children:"Sobre o projeto"}),Object(b.jsx)("button",{className:"btn btn-round btn-reverse",onClick:function(){var e=t.props.images;t.setState({index:1,step:1});var a=t.state,n=a.index,i=a.transition;t.setBackground(e[n].image,i)},children:"Pratica"}),Object(b.jsx)("button",{className:"btn btn-round btn-reverse",onClick:function(){var e=t.props.images;t.setState({index:2});var a=t.state,n=a.index,i=a.transition;t.setBackground(e[n].image,i)},children:"Integrantes e Detalhes"})]})]})]})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))},O=a.p+"static/media/0.60748a42.jpg",j=a.p+"static/media/1.827e1e7b.jpg",f=a.p+"static/media/2.ba88925d.jpg";Promise.all([Object(p.g)(O).then((function(e){return{image:e,title:"\u591c\u3092\u6b69\u3044\u3066",artist:"\u307f\u3075\u308b",source:"https://www.pixiv.net/en/artworks/71306825"}})),Object(p.g)(j).then((function(e){return{image:e,title:"\u300c\u4f55\u8003\u3048\u3066\u308b\u3093\u3067\u3059\uff1f\u300d",artist:"\u3061\u305f",source:"https://www.pixiv.net/en/artworks/78237071"}})),Object(p.g)(f).then((function(e){return{image:e,title:"Midnight Stroll",artist:"Wenqing Yan",source:"https://www.yuumeiart.com/#/midnight-stroll/"}}))]).then((function(e){return o.a.render(Object(b.jsx)(h,{images:e}),document.getElementById("root"))})).catch((function(e){return console.error("Failed to load assets: ".concat(e))})),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.5feb82bd.chunk.js.map