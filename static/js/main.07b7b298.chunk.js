(this["webpackJsonpchinese-poker"]=this["webpackJsonpchinese-poker"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(17),a=n.n(c),o=(n(33),n(6)),s=(n(34),n(1)),l={gameInfo:{flex:.8,justifyContent:"center"},heading:{fontSize:"1.2em",fontWeight:700,color:"tan",margin:".5em",alignSelf:"start",background:"rgba(38, 63, 38, 0.7)",borderBottomRightRadius:10,padding:10}},u=function(){return Object(s.jsx)("div",{style:l.gameInfo,children:Object(s.jsx)("h1",{style:l.heading,children:"Elemental Poker"})})},d=n(3),f=n(51),h={cardContent:{flex:1,flexDirection:"column",border:"1px black solid",margin:3,padding:3,backgroundColor:"white"},name:{flex:1,alignItems:"center"},nameTop:{justifyContent:"flex-start"},nameBottom:{justifyContent:"flex-end"},element:{flex:5,justifyContent:"center",alignItems:"center"}},b=function(e){var t=e.cardSize,n=e.card;return Object(s.jsx)(f.a,{style:Object(d.a)(Object(d.a)({},t),{},{backgroundColor:n.isSelected?"orange":"white"}),raised:!0,children:Object(s.jsxs)("div",{style:h.cardContent,children:[Object(s.jsx)("div",{style:h.name&&h.nameTop,children:n.name}),Object(s.jsx)("div",{style:h.element,children:n.type}),Object(s.jsx)("div",{style:(h.name,h.nameBottom),children:n.name})]})})},j=n(4),y=function(){var e=Object(j.c)((function(e){return e.table.cards}));return Object(s.jsx)("div",{style:O.cards,children:e.map((function(e){return Object(s.jsx)(b,{cardSize:O.card,cardInner:O.cardInner,card:e},e.id)}))})},O={table:{flex:1},cards:{flex:1,justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},card:{height:"20vw",width:"12vw",minWidth:90,minHeight:140,margin:1},cardInner:{flex:1,margin:5}},g=function(){return Object(s.jsx)("div",{style:O.table,children:Object(s.jsx)(y,{})})},p="SET_FIRST_GAME_TO_FALSE",m="TOGGLE_IN_GAME",v="ASSIGN_AS_PLAYERS_TURN",x="ASSIGN_AS_COMPUTERS_TURN",S=function(){return{type:m}},C=function(){return{type:v}},T=function(){return{type:x}},E={isFirstGame:!0,isInPlay:!1,isPlayersTurn:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},e),{},{isFirstGame:!1});case m:return Object(d.a)(Object(d.a)({},e),{},{isInPlay:!e.isInPlay});case v:return Object(d.a)(Object(d.a)({},e),{},{isPlayersTurn:!0});case x:return Object(d.a)(Object(d.a)({},e),{},{isPlayersTurn:!1});default:return e}},R=n(9),P="ADD_SELECTED_CARD",A="REMOVE_SELECTED_CARD",w="GET_INITIAL_HAND",_="REMOVE_SELECTED_CARDS_AFTER_PLACING_THEM",k="UPDATE_MESSAGE",L=function(e){return{type:_,cards:e}},D=function(e){return{type:k,text:e}},N={hand:[],cardsLeft:0,cardsSelected:[],message:"Press Start Game"},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{hand:Object(R.a)(t.stack),cardsLeft:t.stack.length});case P:return Object(d.a)(Object(d.a)({},e),{},{cardsSelected:[].concat(Object(R.a)(e.cardsSelected),[t.card])});case A:e.cardsSelected.indexOf(t.card);var n=e.cardsSelected.filter((function(e){return e.id!==t.card.id}));return Object(d.a)(Object(d.a)({},e),{},{cardsSelected:Object(R.a)(n)});case _:var r=e.hand.filter((function(e){return!t.cards.includes(e)}));return Object(d.a)(Object(d.a)({},e),{},{hand:Object(R.a)(r),cardsLeft:r.length,cardsSelected:[]});case k:return Object(d.a)(Object(d.a)({},e),{},{message:t.text});default:return e}},G="GET_INITIAL_HAND_FOR_COMPUTER",W="REMOVE_SELECTED_CARDS_AFTER_PLACING_THEM_FOR_COMPUTER",M={hand:[],cardsLeft:0,cardsSelected:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(d.a)(Object(d.a)({},e),{},{hand:Object(R.a)(t.stack),cardsLeft:t.stack.length});case W:var n=e.hand.filter((function(e){return!t.cards.includes(e)}));return Object(d.a)(Object(d.a)({},e),{},{hand:Object(R.a)(n),cardsLeft:n.length,cardsSelected:[]});default:return e}},U=n(19),B="GET_PLACED_DOWN_CARDS",z="REMOVE_ALL_CARDS",Y=function(){return{type:z}},V={cards:[],groupType:"",sumPriority:0,highestCardId:0,totalCards:0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(d.a)({},t.cardsStat);case z:return Object(d.a)({},V);default:return e}},K="RESET",Q=Object(U.a)({game:I,table:J,player:F,computer:H}),q=function(e,t){return t.type===K?Q(void 0,t):Q(e,t)},X={air:"air",water:"water",earth:"earth",fire:"fire"},Z={3:{image:"3",priority:1},4:{image:"4",priority:2},5:{image:"5",priority:3},6:{image:"6",priority:4},7:{image:"7",priority:5},8:{image:"8",priority:6},9:{image:"9",priority:7},10:{image:"10",priority:8},J:{image:"J",priority:9},Q:{image:"Q",priority:10},K:{image:"K",priority:11},A:{image:"A",priority:12},2:{image:"2",priority:13}};function $(){this.id=0,this.name="",this.priority=0,this.nameImage="",this.type="",this.typePriority=0,this.typeImage="",this.isSelected=!1}var ee=function(){for(var e=[],t=0,n=Object.entries(X);t<n.length;t++)for(var r=Object(o.a)(n[t],2),i=r[0],c=r[1],a=void 0,s=0,l=Object.entries(Z);s<l.length;s++){var u=Object(o.a)(l[s],2),d=u[0],f=u[1];switch((a=new $).name=d,a.priority=f.priority,a.nameImage=f.image,a.type=i,a.typeImage=c,i){case"air":a.typePriority=.4;break;case"water":a.typePriority=.3;break;case"earth":a.typePriority=.2;break;default:a.typePriority=.1}a.id=a.priority+a.typePriority,e.push(a)}return e},te=function(){var e=Object(j.c)((function(e){return e.player.cardsLeft})),t=Object(j.c)((function(e){return e.computer.cardsLeft}));return Object(s.jsxs)("div",{style:ne.playersInfo,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(f.a,{style:ne.card,raised:!0,children:Object(s.jsx)("p",{children:t})}),Object(s.jsx)("p",{style:ne.playerName,children:"Amber the Computer"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(f.a,{style:ne.card,raised:!0,children:Object(s.jsx)("p",{children:e})}),Object(s.jsx)("p",{style:ne.playerName,children:"You"})]})]})},ne={roundInfo:{flex:.9,flexDirection:"column"},playersInfo:{flex:1,flexDirection:"column",paddingTop:".5em",paddingRight:".5em"},card:{margin:5,marginLeft:8,minWidth:30,maxHeight:50,justifyContent:"center"},playerName:{fontSize:".8em",fontWeight:600,color:"tan",margin:"auto",padding:5,minWidth:"6.5em",background:"rgba(38, 63, 38, 0.7)",borderBottomLeftRadius:5,borderBottomRightRadius:5},controls:{flex:1.3,marginTop:"1em",flexDirection:"column",alignItems:"center"},buttons:{width:100,height:50,borderRadius:8,margin:5},reshuffle:{width:100,height:50,borderRadius:8,margin:5}},re=function(){var e=Object(j.c)((function(e){return e.game})),t=e.isFirstGame,n=e.isInPlay,r=Object(j.b)(),i=function(){t||r({type:K}),r({type:p}),r(S());var e=function(e){for(var t=[],n=0;n<e.length/2;n++){var r=-1;do{r=Math.floor(Math.random()*e.length)}while(t.includes(r));t.push(r)}t.sort((function(e,t){return e-t}));for(var i=[],c=[],a=0,o=0;o<e.length;o++)t[a]===o?(i.push(e[o]),a+=1):c.push(e[o]);return[i,c]}(ee()),n=Object(o.a)(e,2),i=n[0],c=n[1].sort((function(e,t){return e.id-t.id})),a=i.sort((function(e,t){return e.id-t.id}));r({type:w,stack:c}),r(function(e){return{type:G,stack:e}}(a)),1.1===c[0].id?(r(C()),r(D("You have the lowest ranked 3, so you can select and place your card(s) first."))):r(D("The computer started first. Select and place your card(s)."))};return Object(s.jsxs)("div",{style:ne.roundInfo,children:[Object(s.jsx)(te,{}),Object(s.jsxs)("div",{style:ne.controls,children:[Object(s.jsx)("button",{style:Object(d.a)(Object(d.a)({},ne.buttons),{},{visibility:"".concat(n?"hidden":"visible")}),onClick:i,children:t?"Start Game":"Play Again"}),Object(s.jsx)("button",{style:Object(d.a)(Object(d.a)({},ne.buttons),{},{visibility:"".concat(n?"visible":"hidden")}),onClick:function(){i()},children:"Reshuffle"})]})]})},ie={board:{flex:16,flexDirection:"row"},gameInfo:{flex:.8},table:{flex:4.4,alignContent:"center",justifyContent:"center"},roundInfo:{flex:.8,justifyContent:"flex-end"}},ce=function(){return Object(s.jsxs)("div",{style:ie.board,children:[Object(s.jsx)("div",{style:ie.gameInfo,children:Object(s.jsx)(u,{})}),Object(s.jsx)("div",{style:ie.table,children:Object(s.jsx)(g,{})}),Object(s.jsx)("div",{style:ie.roundInfo,children:Object(s.jsx)(re,{})})]})},ae=n(8),oe=function(e,t){if(!t)return[e[0]];for(var n=0;n<e.length;n++)if(e[n].id>t)return[e[n]];return[]};var se=new function(){this.playWithNoConditions=function(e){return oe(e)},this.playWithConditions=function(e,t){switch(e.groupType){case"single":return oe(t,e.highestCardId);case"double":return function(e,t){var n,r={},i=Object(ae.a)(e);try{for(i.s();!(n=i.n()).done;){var c=n.value;r[c.name]?(r[c.name].count+=1,r[c.name].cards.push(c)):r[c.name]={count:1,cards:[c]}}}catch(d){i.e(d)}finally{i.f()}var a,o=Object.entries(r).filter((function(e){return e[1].count>1})),s=[],l=Object(ae.a)(o);try{for(l.s();!(a=l.n()).done;){var u=a.value[1].cards;u[u.length-1].id>t&&(s=[u[u.length-2],u[u.length-1]])}}catch(d){l.e(d)}finally{l.f()}return s}(t,e.highestCardId);default:return[]}},this.computerPlays=function(e,t,n){var r=[];0===(r=0===e.cards.length?this.playWithNoConditions(t):this.playWithConditions(e,t)).length?setTimeout((function(){n(Y())}),2e3):setTimeout((function(){console.log("PREVIOUSLY GOT AN ERROR HERE BECAUSE OF NO PRIORITY FOR THESE CARDS:",r);var e=fe(r),t=r[r.length-1];he(n,r,e,t),n(function(e){return{type:W,cards:e}}(r))}),1e3),t.length-r.length===0&&(n(S()),n(D("The computer won! Play Again?"))),0===r.length&&n(D("The computer passed it's turn. Place any valid card(s).")),n(C())}},le=function(e){var t,n=0,r=Object(ae.a)(e);try{for(r.s();!(t=r.n()).done;){n+=t.value.priority}}catch(i){r.e(i)}finally{r.f()}return n},ue=function(e){for(var t=0;t<e.length-1;t++)if(e[t].priority+1!==e[t+1].priority)return!1;return!0},de=function(e){var t,n=e[0].type,r=Object(ae.a)(e);try{for(r.s();!(t=r.n()).done;){if(t.value.type!==n)return!1}}catch(i){r.e(i)}finally{r.f()}return!0},fe=function(e){if(1===e.length)return"single";if(2===e.length&&e[0].priority===e[1].priority)return"double";if(5===e.length){if(de(e)&&ue(e))return"straight flush";var t=function(e){var t,n={},r=0,i=Object(ae.a)(e);try{for(i.s();!(t=i.n()).done;){var c=t.value;if(n[c.name]?n[c.name]+=1:(n[c.name]=1,r+=1),r>2)return!1}}catch(o){i.e(o)}finally{i.f()}var a=Object.values(n);return 1===a[0]||4===a[0]?"four of a kind":2===a[0]||3===a[0]?"full house":void 0}(e);if(!1!==t)return t;if(de(e))return"flush";if(ue(e))return"straight"}return!1},he=function(e,t,n,r){var i={cards:t,groupType:n,sumPriority:le(t),highestCardId:r.id,totalCards:t.length};e({type:B,cardsStat:i})},be={buttons:{width:100,height:35,borderRadius:8,margin:3}},je=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.player.cardsLeft})),n=Object(j.c)((function(e){return e.player.cardsSelected}));n.sort((function(e,t){return e.priority-t.priority}));var r=n.length,i=Object(j.c)((function(e){return e.computer.hand})),c=Object(j.c)((function(e){return e.table})),a=c.totalCards,o=c.highestCardId,l=c.groupType,u=Object(j.c)((function(e){return e.game.isPlayersTurn})),f=Object(j.c)((function(e){return e.game.isInPlay}));!u&&f&&(console.log("THIS IS NOW THE COMPUTERS TURN"),se.computerPlays(c,i,e)),console.log("CARDS ON TABLE:",a);var h=function(){if(t-r===0)return e(S()),void e(D("You Won! Play Again?"));e(T()),e(D(""))};return Object(s.jsx)("button",{style:Object(d.a)(Object(d.a)({},be.buttons),{},{display:"".concat(f?"block":"none")}),onClick:function(){if(0!==r)if(r>5||4===r||3===r)e(D("An invalid number of cards were selected"));else{var t=fe(n);if(!1!==t){var i=0;if("full house"===t||"four of a kind"===t?function(e){var t,n={},r=Object(ae.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;n[i.name]?n[i.name]+=1:n[i.name]=1}}catch(o){r.e(o)}finally{r.f()}var c=Object.entries(n),a=(c[0][1]>c[1][1]?c[0][0]:c[1][0],e.filter((function(e){return e.name===n})));a[a.length-1]}(i=n):i=n[n.length-1],0===a&&(he(e,n,t,i),e(L(n)),h()),t!==l){if("single"===t||"double"===t)return;if("single"===l||"double"===l)return}if(t!==l){var c={"straight flushing":5,"for of a kind":4,"full house":3,flush:2,straight:1};if(c[t]<c[l])return;he(e,n,t,i),e(L(n))}else{if(!(i.id>o))return void e(D("The card combination you selected is of a lower rank than the one on the table."));he(e,n,t,i),e(L(n))}h()}else e(D("This is not a possible combination. Possible combinations are: Single, Double, Straight, Flush, Full House, Four Of A Kind, or Straight Flush."))}else e(D("No cards are selected. Select card(s) or pass your turn."))},children:"Place"})},ye=function(){var e=Object(j.c)((function(e){return e.player.message}));return Object(s.jsx)("div",{style:ge.message,children:Object(s.jsx)("p",{style:ge.text,children:e})})},Oe=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.computer.hand})),n=Object(j.c)((function(e){return e.table})),r=Object(j.c)((function(e){return e.game.isPlayersTurn})),i=Object(j.c)((function(e){return e.game.isInPlay}));!r&&i&&(console.log("THIS IS NOW THE COMPUTERS TURN"),se.computerPlays(n,t,e));return Object(s.jsxs)("div",{style:ge.choice,children:[Object(s.jsx)(je,{}),Object(s.jsx)("button",{style:Object(d.a)(Object(d.a)({},ge.buttons),{},{display:"".concat(i?"block":"none")}),onClick:function(){e(Y()),e(T())},children:"Pass"})]})},ge={turn:{flex:1,flexWrap:"wrap"},message:{flex:6,paddingLeft:"20vw",justifyContent:"center",alignItems:"center"},choice:{flex:2,justifyContent:"space-evenly"},text:{fontSize:"2vh",fontWeight:600,color:"brown"},buttons:{width:100,height:35,borderRadius:8,margin:3}},pe=function(){return Object(s.jsxs)("div",{style:ge.turn,children:[Object(s.jsx)(ye,{}),Object(s.jsx)(Oe,{})]})},me=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.player.hand})),n=Object(j.c)((function(e){return e.player.cardsSelected})),r=function(t){n.includes(t)?(t.isSelected=!1,e(function(e){return{type:A,card:e}}(t))):(t.isSelected=!0,e(function(e){return{type:P,card:e}}(t)))};return Object(s.jsx)("div",{style:ve.cards,children:Object(s.jsx)("ul",{style:{flex:1},children:t.map((function(e){return Object(s.jsx)("li",{style:Object(d.a)(Object(d.a)({},ve.item),{},{marginTop:e.isSelected?-10:0,marginBottom:e.isSelected?10:0}),onClick:function(){return r(e)},children:Object(s.jsx)(b,{cardSize:ve.card,cardInner:ve.cardInner,card:e})},e.id)}))})})},ve={hand:{flex:5,flexDirection:"row",background:"rgba(38, 63, 38, 0.7)",overflow:"hidden"},cards:{flex:1,justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginLeft:"1.5em",marginRight:"1em",paddingTop:"1em"},item:{background:"rgba(0, 0, 0, 0)",flex:1},card:{height:"10vw",width:"7.5vw",minWidth:68,minHeight:90}},xe=function(){return Object(s.jsx)("div",{style:ve.hand,children:Object(s.jsx)(me,{})})},Se={player:{flex:10,flexDirection:"column"}},Ce=function(){return Object(s.jsxs)("div",{style:Se.player,children:[Object(s.jsx)(pe,{}),Object(s.jsx)(xe,{})]})};var Te={app:{flex:1,flexDirection:"column",height:"100vh",width:"100vw"}},Ee=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=(t[0],t[1],Object(r.useState)(!1)),i=Object(o.a)(n,2),c=(i[0],i[1],Object(r.useState)({cards:[],totalCards:0})),a=Object(o.a)(c,2),l=(a[0],a[1],Object(r.useState)({cards:[],totalCards:0})),u=Object(o.a)(l,2),d=(u[0],u[1],Object(r.useState)([])),f=Object(o.a)(d,2);return f[0],f[1],Object(s.jsxs)("div",{className:"App",style:Te.app,children:[Object(s.jsx)(ce,{}),Object(s.jsx)(Ce,{})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},Re=Object(U.b)(q);a.a.render(Object(s.jsx)(j.a,{store:Re,children:Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(Ee,{})})}),document.getElementById("root")),Ie()}},[[39,1,2]]]);
//# sourceMappingURL=main.07b7b298.chunk.js.map