(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[12],{211:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return bt}));var n=a(2),s=a(81),r=a(95),i=a(88),c=a(86),l=a(82),o=a(89),u=a(98),d=a(97),j=a(83),b=a(23),f=a(0),h=a.n(f),x=a(195),O=a(31),m=a(201),v=a(204),g=a(194),S=a(30),p=a(55),y=a(40),N=a(17),w=a(90),K=a(108),k=a(99),A=a(103),I=a(104),C=a(85),E=a(87),L=a(91),M=a(133),T=a(96),R=a(202),D=a(160),U=a(101),F=a(159),P=a(213),W=a(215),V=a(203),H=a(134),z=a(102),B=a.n(z),G=a(162),J=a(209),_=a(200),Y=a(210),q=a(163),$=a.p+"static/media/scan_art_main.c5b573ce.png",Q=a.p+"static/media/snippet.d223e797.png",X={r:255,g:204,b:50};var Z=function(t){var e=Object(f.useState)("Click here to Upload Artifact Screenshot File"),a=Object(s.a)(e,2),i=a[0],c=a[1],l=Object(f.useState)(""),o=Object(s.a)(l,2),u=o[0],d=o[1],h=Object(f.useState)(!1),x=Object(s.a)(h,2),m=x[0],v=x[1],g=Object(f.useState)(0),w=Object(s.a)(g,2),K=w[0],k=w[1],I=Object(f.useState)(""),M=Object(s.a)(I,2),T=M[0],R=M[1],D=Object(f.useState)(0),F=Object(s.a)(D,2),P=F[0],W=F[1],V=Object(f.useState)(""),H=Object(s.a)(V,2),z=H[0],X=H[1],Z=Object(f.useState)(0),tt=Object(s.a)(Z,2),it=tt[0],jt=tt[1],bt=Object(f.useState)(""),ft=Object(s.a)(bt,2),ht=ft[0],xt=ft[1],Ot=Object(f.useState)(0),mt=Object(s.a)(Ot,2),vt=mt[0],gt=mt[1],St=Object(f.useState)(""),pt=Object(s.a)(St,2),yt=pt[0],Nt=pt[1],wt=Object(f.useState)(!1),Kt=Object(s.a)(wt,2),kt=Kt[0],At=Kt[1],It=function(){c("Click here to Upload Artifact Screenshot File"),d(""),At(!1),v(!1),k(0),R(""),W(0),X(""),jt(0),xt(""),gt(0),Nt("")},Ct=function(){var t=Object(G.a)(B.a.mark((function t(e,a,n){var s,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Object(q.createWorker)({logger:function(t){"loading tesseract core"===t.status&&n("danger"),t.status.includes("loading language traineddata")&&n("warning"),t.status.includes("initializing api")&&n("info"),"recognizing text"===t.status&&n("success"),a(t.progress)},errorHandler:function(t){return console.error(t)}}),t.next=3,s.load();case 3:return t.next=5,s.loadLanguage("eng");case 5:return t.next=7,s.initialize("eng");case 7:return t.next=9,s.recognize(e);case 9:return r=t.sent,t.next=12,s.terminate();case 12:return t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),Et=function(){var e=Object(G.a)(B.a.mark((function e(a){var n,i,l,o,u,j,b,f,h,x,O,m,g,S,p,y,N,w,K,I,M,T,D,U,F,P,V;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return v(!0),c(a.name),e.next=6,et(a);case 6:return i=e.sent,d(i),e.next=10,at(i);case 10:return l=e.sent,o=Object(E.a)(st(l.data,l.width,l.height,5),3,5),u=[Ct(nt(rt(l,{r:140,g:140,b:140},{r:255,g:255,b:255},{region:"top",mode:"bw"})),k,R),Ct(nt(rt(l,{r:65,g:75,b:90},{r:160,g:160,b:160},{region:"bot"})),W,X),Ct(nt(rt(l,{r:90,g:160,b:80},{r:200,g:255,b:200},{region:"bot",mode:"bw"})),jt,xt),Ct(nt(rt(l,{r:120,g:120,b:120},{r:215,g:200,b:220},{region:"top",mode:"bw"})),gt,Nt)],e.next=15,Promise.all(u);case 15:if(j=e.sent,b=Object(s.a)(j,4),f=b[0],h=b[1],x=b[2],O=b[3],m=ot(x),g=ut(f),S=ct(h),p=NaN,y=lt(O),N=dt(f),w=N.mainStatValue,K=N.unit,"%"!==(I=void 0===K?"":K)||"hp"!==y&&"def"!==y&&"atk"!==y||(y+="_"),m&&o&&(L.a.getRarityArr(m).includes(o)||(o=0)),g&&!y&&(1===(M=A.d[g].stats).length||(M=M.filter((function(t){return(!w||I===C.e.getStatUnit(t))&&((!S||!S.some((function(e){return e.key===t})))&&!(w&&o&&p&&L.a.getMainStatValue(t,o,p)!==w))}))).length>0)&&(y=M[0]),T=function(t,e,a){var n,s=null===A.b||void 0===A.b||null===(n=A.b[t])||void 0===n?void 0:n[e.includes("ele_dmg")?"ele_dmg":e];if(s){var r="%"===C.e.getStatUnit(e),i=s.findIndex((function(t){return r?Math.abs(a-t)<.1:a===t}));if(-1!==i)return p=i,!0}return!1},isNaN(p)&&o&&y&&w&&T(o,y,w),!(isNaN(p)&&y&&w)){e.next=53;break}D=m?L.a.getRarityArr(m):Object.keys(A.b).reverse(),U=Object(r.a)(D),e.prev=35,U.s();case 37:if((F=U.n()).done){e.next=45;break}if(P=F.value,!T(P,y,w)){e.next=43;break}if(m&&!L.a.getRarityArr(m).includes(P)){e.next=43;break}return o=P,e.abrupt("break",45);case 43:e.next=37;break;case 45:e.next=50;break;case 47:e.prev=47,e.t0=e.catch(35),U.e(e.t0);case 50:return e.prev=50,U.f(),e.finish(50);case 53:o&&!isNaN(p)&&p>4*o&&(p=NaN),o=Object(E.a)(o,3,5),isNaN(p)&&(p=4*o),V={},isNaN(p)||(V.level=p),m&&(V.setKey=m),g&&(V.slotKey=g),S&&(V.substats=S),o&&(V.numStars=o),y&&(V.mainStatKey=y),null===(n=t.setState)||void 0===n||n.call(t,V);case 64:case"end":return e.stop()}}),e,null,[[35,47,50,53]])})));return function(t){return e.apply(this,arguments)}}(),Lt=Object(n.jsx)(J.a,{show:kt,onHide:function(){return At(!1)},size:"xl",variant:"success",dialogAs:p.a,className:"pt-3 pb-3",children:Object(n.jsxs)(O.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(O.a.Header,{children:Object(n.jsx)(O.a.Title,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(S.a,{children:Object(n.jsx)("span",{children:"How do Upload Screenshots for parsing"})}),Object(n.jsx)(S.a,{xs:"auto",children:Object(n.jsx)(U.a,{variant:"danger",onClick:function(){return At(!1)},children:Object(n.jsx)(b.a,{icon:j.z})})})]})})}),Object(n.jsxs)(O.a.Body,{children:[Object(n.jsxs)(y.a,{children:[Object(n.jsx)(S.a,{xs:8,md:4,children:Object(n.jsx)("img",{alt:"snippet of the screen to take",src:Q,className:"w-100 h-auto"})}),Object(n.jsxs)(S.a,{xs:12,md:8,children:[Object(n.jsx)("p",{children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),Object(n.jsx)("h5",{children:"What to include in the screenshot."}),Object(n.jsxs)("p",{children:["In Genshin Impact, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer. To Take a screenshot, in Windows, the shortcut is ",Object(n.jsx)("strong",{children:"Shift + WindowsKey + S"}),". Once you selected the region, the image is automatically included in your clipboard."]})]})]}),Object(n.jsxs)(y.a,{children:[Object(n.jsxs)(S.a,{children:[Object(n.jsx)("h5",{children:"Adding Screenshot to Genshin Optimizer"}),Object(n.jsxs)("p",{children:['At this point, you should have the artifact snippet either saved to your harddrive, or in your clipboard. You can click on the box next to "Browse" to browse the file in your harddrive, or even easier, just press ',Object(n.jsx)("strong",{children:"Ctrl + V"})," to paste from your clipboard. You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",Object(n.jsx)("b",{children:"Artifact Editor"}),"."]})]}),Object(n.jsxs)(S.a,{xs:12,children:[Object(n.jsx)("h5",{children:"Finishing the Artifact"}),Object(n.jsxs)("p",{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",Object(n.jsx)("strong",{children:"Add Artifact"})," to finish editing the artifact."]}),Object(n.jsx)("img",{alt:"main screen after importing stats",src:$,className:"w-75 h-auto"})]})]})]}),Object(n.jsx)(O.a.Footer,{children:Object(n.jsx)(U.a,{variant:"danger",onClick:function(){return At(!1)},children:Object(n.jsx)("span",{children:"Close"})})})]})});Object(f.useEffect)((function(){var e=function(t){return Et(t.clipboardData.files[0])};return window.addEventListener("paste",e),t.reset(It),function(){return window.removeEventListener("paste",e)}}));var Mt=u?Object(n.jsx)("img",{src:u,className:"w-100 h-auto",alt:"Screenshot to parse for artifact values"}):Object(n.jsx)("span",{children:"Please Select an Image"}),Tt=(100*it).toFixed(1),Rt=(100*vt).toFixed(1),Dt=(100*P).toFixed(1),Ut=(100*K).toFixed(1);return Object(n.jsxs)(y.a,{children:[Lt,Object(n.jsxs)(S.a,{children:[Object(n.jsx)(y.a,{className:"mb-1",children:Object(n.jsx)(S.a,{children:Object(n.jsxs)(y.a,{className:"mb-1",children:[Object(n.jsx)(S.a,{children:Object(n.jsx)("h5",{children:"Parse Substats by Uploading Image"})}),Object(n.jsx)(S.a,{xs:"auto",children:Object(n.jsx)(U.a,{variant:"info",onClick:function(){At(!0),N.a.modalview("/artifact/how-to-upload")},children:"Show me How!"})})]})})}),Object(n.jsxs)(y.a,{className:"mb-1",children:[Object(n.jsx)(S.a,{xs:8,lg:4,children:Mt}),m?Object(n.jsxs)(S.a,{xs:12,lg:8,children:[Object(n.jsx)("h6",{children:"Scan".concat(Tt<100?"ning":"ned"," Artifact Set")}),Object(n.jsx)(_.a,{variant:ht,now:Tt,label:"".concat(Tt,"%"),className:"mb-3"}),Object(n.jsx)("h6",{children:"Scan".concat(Rt<100?"ning":"ned"," Artifact Main Stat")}),Object(n.jsx)(_.a,{variant:yt,now:Rt,label:"".concat(Rt,"%"),className:"mb-3"}),Object(n.jsx)("h6",{children:"Scan".concat(Dt<100?"ning":"ned"," Artifact Substat")}),Object(n.jsx)(_.a,{variant:z,now:Dt,label:"".concat(Dt,"%"),className:"mb-3"}),Object(n.jsx)("h6",{children:"Scan".concat(Ut<100?"ning":"ned"," Other")}),Object(n.jsx)(_.a,{variant:T,now:Ut,label:"".concat(Ut,"%"),className:"mb-3"})]}):null]}),Object(n.jsx)(y.a,{className:"mb-4",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(Y.a.Group,{as:S.a,children:Object(n.jsx)(Y.a.File,{type:"file",className:"custom-file-label",id:"inputGroupFile01",label:i,onChange:function(t){var e=t.target.files[0];Et(e)},custom:!0})})})})]})]})},tt=new FileReader;function et(t){return new Promise((function(e){tt.onloadend=function(){e(tt.result)},tt.readAsDataURL(t)}))}function at(t){return new Promise((function(e){var a=new Image;a.onload=function(){return e(function(t){var e=document.createElement("canvas"),a=e.getContext("2d");return e.width=t.width,e.height=t.height,a.drawImage(t,0,0,t.width,t.height),a.getImageData(0,0,t.width,t.height)}(a))},a.src=t}))}function nt(t){var e=document.createElement("canvas"),a=e.getContext("2d");e.width=t.width,e.height=t.height;var n=a.createImageData(t.width,t.height);return n.data.set(t.data),a.putImageData(n,0,0),e.toDataURL()}function st(t,e,a){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=t,r=0,i=0,c=0;c<a;c++){for(var l=0,o=!1,u=0;u<e;u++){var d=4*(c*e+u),j=s[d],b=s[d+1],f=s[d+2];it({r:j,g:b,b:f},X)?o||(o=!0,l++):o=!1}if(r!==l)r=l,i=1;else if(r&&++i>=10)return r}return n}function rt(t,e,a,n){var s=n.region,r=n.mode;s||(s="all");for(var i=Uint8ClampedArray.from(t.data),c=Math.floor(t.width*(t.height/2)*4),l="top"===s,o="bot"===s,u="all"===s,d="bw"===r,j="invert"===r,b=0;b<i.length;b+=4){var f=i[b],h=i[b+1],x=i[b+2];(u||l&&b<c||o&&b>c)&&f>=e.r&&f<=a.r&&h>=e.g&&h<=a.g&&x>=e.b&&x<=a.b?d?i[b]=i[b+1]=i[b+2]=0:j&&(i[b]=255-f,i[b+1]=255-h,i[b+2]=255-x):i[b]=i[b+1]=i[b+2]=255}return new ImageData(i,t.width,t.height)}function it(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=function(t,e){return Math.abs(t-e)<=a};return!!(n(t.r,e.r)&&n(t.g,e.g)&&n(t.b,e.b))}function ct(t){var e,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.lines)||void 0===a?void 0:a.map((function(t){return t.text}));if(!s)return n;var i,c=[],l=Object(r.a)(s);try{var o=function(){var t=i.value;L.a.getSubStatKeys().forEach((function(e){var a=C.e.getStatUnit(e),n=C.e.getStatName(e),s=("%"===a?new RegExp(n+"\\s*\\+\\s*(\\d+\\.\\d)%","im"):new RegExp(n+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(t);s&&c.push({value:s[1],unit:a,key:e})}))};for(l.s();!(i=l.n()).done;)o()}catch(j){l.e(j)}finally{l.f()}c.forEach((function(t,e){e>=4||(t.value="%"===t.unit?parseFloat(t.value):parseInt(t.value))}));for(var u=[],d=0;d<4;d++)c[d]?u.push({key:c[d].key,value:c[d].value}):u.push({key:"",value:0});return u}function lt(t){var e,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.lines)||void 0===a?void 0:a.map((function(t){return t.text}));if(!s)return n;var i,c=Object(r.a)(s);try{for(c.s();!(i=c.n()).done;){var l,o=i.value,u=Object(r.a)(L.a.getMainStatKeys());try{for(u.s();!(l=u.n()).done;){var d=l.value;if(o.toLowerCase().includes(C.e.getStatName(d).toLowerCase()))return d}}catch(j){u.e(j)}finally{u.f()}}}catch(j){c.e(j)}finally{c.f()}return n}function ot(t){var e,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.lines)||void 0===a?void 0:a.map((function(t){return t.text}));if(!i)return n;var c,l=Object(r.a)(i);try{for(l.s();!(c=l.n()).done;)for(var o=c.value,u=0,d=Object.entries(A.c);u<d.length;u++){var j=Object(s.a)(d[u],2),b=j[0],f=j[1];if(o.toLowerCase().replace(/\W/g,"").includes(f.name.toLowerCase().replace(/\W/g,"")))return b}}catch(h){l.e(h)}finally{l.f()}}function ut(t){var e,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.lines)||void 0===a?void 0:a.map((function(t){return t.text}));if(!i)return n;var c,l=Object(r.a)(i);try{for(l.s();!(c=l.n()).done;)for(var o=c.value,u=0,d=Object.entries(A.d);u<d.length;u++){var j=Object(s.a)(d[u],2),b=j[0],f=j[1];if(o.toLowerCase().replace(/\W/g,"").includes(f.name.toLowerCase().replace(/\W/g,"")))return b}}catch(h){l.e(h)}finally{l.f()}}function dt(t){var e,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{mainStatValue:NaN},s=null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.lines)||void 0===a?void 0:a.map((function(t){return t.text}));if(!s)return n;var i,c=Object(r.a)(s);try{for(c.s();!(i=c.n()).done;){var l=i.value,o=/(\d+\.\d)%/,u=o.exec(l);if(u)return{mainStatValue:parseFloat(u[1]),unit:"%"};if(u=(o=/(\d+,\d{3}|\d{2,3})/).exec(l))return{mainStatValue:parseInt(u[1].replace(/,/g,""))}}}catch(d){c.e(d)}finally{c.f()}return n}var jt=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var c;return Object(l.a)(this,a),(c=e.call(this,t)).setLevel=function(t){return c.setState((function(e){return t=parseInt(t),isNaN(t)&&(t=0),t<0&&(t=0),t>4*e.numStars&&(t=4*e.numStars),{level:t}}))},c.getRemainingSubstats=function(){return Object.keys(A.f).filter((function(t){return c.state.mainStatKey!==t&&!c.state.substats.some((function(e){return(null===e||void 0===e?void 0:e.key)===t}))}))},c.saveArtifact=function(){var t,e;c.uploadDisplayReset();var n=Object(E.e)(c.state);n.artifactToEdit&&delete n.artifactToEdit,null===(t=(e=c.props).addArtifact)||void 0===t||t.call(e,n),c.setState(a.getInitialState())},c.setSetKey=function(t){return c.setState((function(e){var a=Object(E.f)(L.a.getRarityArr(t)),n=!e.level||e.level>4*a?4*a:e.level;return{setKey:t,numStars:a,level:n}}))},c.setSubStat=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return c.setState((function(n){if(!(t>=4)){var s=n.substats;return s[t].key=e,s[t].value=a,{substats:s}}}))},c.setMainStatKey=function(t){return c.setState((function(e){return e.substats.forEach((function(e,a){return e.key&&e.key===t&&c.setSubStat(a)})),{mainStatKey:t}}))},c.setSlotKey=function(t){return c.setState((function(e){var a,n=A.d[t].stats,s=Object(r.a)(n);try{var i=function(){var n=a.value;if(!e.substats.some((function(t){return!(!t||!t.key)&&t.key===n})))return{v:{slotKey:t,mainStatKey:n}}};for(s.s();!(a=s.n()).done;){var l=i();if("object"===typeof l)return l.v}}catch(u){s.e(u)}finally{s.f()}var o=n[0];return c.setMainStatKey(o),{slotKey:t}}))},c.ArtifactDropDown=function(t){var e=function(t){return L.a.getArtifactSetsByMaxStarEntries(t).map((function(t){var e=Object(s.a)(t,2),a=e[0],r=e[1];return Object(n.jsx)(x.a.Item,{onClick:function(){return c.setSetKey(a)},children:r.name},a)}))};return Object(n.jsxs)(x.a,{as:m.a.Prepend,className:"flex-grow-1",children:[Object(n.jsx)(x.a.Toggle,{className:"w-100",children:L.a.getArtifactSetName(c.state.setKey,"Artifact Set")}),Object(n.jsxs)(x.a.Menu,{children:[Object(n.jsxs)(x.a.ItemText,{children:["Max Rarity ",Object(n.jsx)(k.a,{stars:5})]}),e(5),Object(n.jsx)(x.a.Divider,{}),Object(n.jsxs)(x.a.ItemText,{children:["Max Rarity ",Object(n.jsx)(k.a,{stars:4})]}),e(4),Object(n.jsx)(x.a.Divider,{}),Object(n.jsxs)(x.a.ItemText,{children:["Max Rarity ",Object(n.jsx)(k.a,{stars:3})]}),e(3)]})]})},c.MainSelection=function(t){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(m.a,{className:"w-100 d-flex",children:[c.ArtifactDropDown(),Object(n.jsx)(R.a,{as:m.a.Append,title:c.state.numStars>0?"\ud83d\udfca".repeat(c.state.numStars):"Rarity",disabled:!c.state.setKey,children:Object.keys(A.e).map((function(t,e){return t=parseInt(t),Object(n.jsx)(x.a.Item,{disabled:!c.state.setKey||!A.c[c.state.setKey].rarity.includes(t),onClick:function(){c.setState({numStars:t,level:0})},children:Object(n.jsx)(k.a,{stars:t})},e)}))})]})}),Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(m.a.Prepend,{children:Object(n.jsx)(m.a.Text,{children:"Level"})}),Object(n.jsx)(D.a,{value:c.state.level,disabled:!c.state.setKey,placeholder:"0~".concat(4*c.state.numStars),onChange:function(t){return c.setLevel(t.target.value)}}),Object(n.jsxs)(m.a.Append,{children:[Object(n.jsx)(U.a,{onClick:function(){return c.setLevel(0)},disabled:!c.state.setKey||0===c.state.level,children:"0"}),Object(n.jsx)(U.a,{onClick:function(){return c.setLevel(c.state.level-1)},disabled:!c.state.setKey||0===c.state.level,children:"-"}),Object(n.jsx)(U.a,{onClick:function(){return c.setLevel(c.state.level+1)},disabled:!c.state.setKey||c.state.level===4*c.state.numStars,children:"+"}),Object(n.jsx)(U.a,{onClick:function(){return c.setLevel(4*c.state.numStars)},disabled:!c.state.setKey||c.state.level===4*c.state.numStars,children:4*c.state.numStars})]})]})})]})},c.MainStatInputRow=function(){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(R.a,{title:L.a.getArtifactSlotNameWithIcon(c.state.slotKey,"Slot"),disabled:!c.state.setKey,as:m.a.Prepend,children:c.state.setKey&&Object.keys(A.c[c.state.setKey].pieces).map((function(t){return Object(n.jsx)(x.a.Item,{onClick:function(){return c.setSlotKey(t)},children:L.a.getArtifactSlotNameWithIcon(t,"Slot")},t)}))}),Object(n.jsx)(D.a,{value:L.a.getArtifactPieceName(c.state.setKey,c.state.slotKey,"Unknown Piece Name"),disabled:!0,readOnly:!0})]})}),Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(R.a,{title:C.e.getStatNameWithPercent(c.state.mainStatKey,"Main Stat"),disabled:!c.state.setKey||!c.state.slotKey,as:m.a.Prepend,children:[Object(n.jsx)(x.a.ItemText,{children:"Select a Main Artifact Stat "}),c.state.slotKey?A.d[c.state.slotKey].stats.map((function(t){return Object(n.jsx)(x.a.Item,{onClick:function(){return c.setMainStatKey(t)},children:C.e.getStatNameWithPercent(t)},t)})):Object(n.jsx)(x.a.Item,{})]}),Object(n.jsx)(D.a,{value:c.state.mainStatKey?"".concat(L.a.getMainStatValue(c.state.mainStatKey,c.state.numStars,c.state.level)).concat(C.e.getStatUnit(c.state.mainStatKey)):"Main Stat",disabled:!0,readOnly:!0})]})})]})},c.SubStatInput=function(t){var e=t.subStatValidation,a=t.numStars,s=t.subStatKey,r=t.subStatKey&&"%"===C.e.getStatUnit(t.subStatKey),l={placeholder:"Select a Substat.",value:t.substatevalue?t.substatevalue:"",onValueChange:function(e){return c.onSubstatValueChange(e,t.index)},disabled:!t.subStatKey},o=r?Object(n.jsx)(K.a,Object(i.a)({},l)):Object(n.jsx)(K.b,Object(i.a)({},l)),u=L.a.getSubstatRollData(s,a),d=(null===e||void 0===e?void 0:e.rolls)||[],j=(null===d||void 0===d?void 0:d.length)||0,b=Object(n.jsxs)(F.a,{variant:0===j?"secondary":"".concat(j,"roll"),className:"text-darkcontent",children:[j||"No"," Roll",(j>1||0===j)&&"s"]}),f=d.map((function(t,e){var a=u.indexOf(t),s=6-(u.length-a-1);return Object(n.jsx)("span",{className:"mr-2 text-".concat(s,"roll"),children:t},e)})),h=u.length?Object(n.jsxs)("span",{className:"float-right",children:[Object(n.jsx)("small",{children:"Possible Rolls:"})," ",u.map((function(t,e,a){var s=6-(a.length-e-1);return Object(n.jsx)("span",{className:"text-".concat(s,"roll mr-1"),children:t},e)}))]}):null;return Object(n.jsxs)(O.a,{bg:"lightcontent",text:"lightfont",children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(R.a,{title:C.e.getStatName(t.subStatKey,"Substat ".concat(t.index+1)),disabled:!t.remainingSubstats||0===t.remainingSubstats.length,as:m.a.Prepend,children:t.remainingSubstats?t.remainingSubstats.map((function(e){return Object(n.jsx)(x.a.Item,{onClick:function(){return c.onSubStatSelected(e,t.index)},children:C.e.getStatNameWithPercent(e)},e)})):Object(n.jsx)(x.a.Item,{})}),o,Object(n.jsxs)(m.a.Append,{children:[r&&Object(n.jsx)(m.a.Text,{children:"%"}),Object(n.jsx)(m.a.Text,{children:Object(n.jsx)(H.a,{valid:e.valid||!t.subStatKey,percent:e.efficiency,children:t.subStatKey?e.valid?"".concat((e.efficiency?e.efficiency:0).toFixed(2),"%"):"ERR":"No Stat"})})]})]}),e.valid?Object(n.jsxs)("label",{className:"w-100 mb-0 p-1",children:[b," ",f,h]}):Object(n.jsxs)("label",{className:"w-100 mb-0 p-1",children:[Object(n.jsx)(F.a,{variant:"danger",children:"ERR"})," ",e.msg]})]})},c.onSubStatSelected=function(t,e){c.setState((function(a){var n=JSON.parse(JSON.stringify(a.substats));return n[e]={key:t,value:null},{substats:n}}))},c.onSubstatValueChange=function(t,e){c.setState((function(a){var n=JSON.parse(JSON.stringify(a.substats));return n[e].value=t,{substats:n}}))},c.randomizeArtifact=function(){var t=a.getInitialState();t.setKey=Object(E.g)(Object.keys(A.c)),t.numStars=Object(E.g)(A.c[t.setKey].rarity),t.slotKey=Object(E.g)(Object.keys(A.c[t.setKey].pieces)),t.mainStatKey=Object(E.g)(A.d[t.slotKey].stats);var e=Object(E.h)(A.e[t.numStars].subsBaselow,A.e[t.numStars].subBaseHigh);t.level=Object(E.h)(0,4*t.numStars);var n=Math.floor(t.level/4),s=e+n;s>=4?(e=4,n=s-4):(e=s,n=0);for(var r=function(e){return Object(E.g)(L.a.getSubstatRollData(e,t.numStars))},i=c.getRemainingSubstats(),l=function(e){var a=t.substats[e];a.key=Object(E.g)(i),i=i.filter((function(t){return t!==a.key})),a.value=r(a.key)},o=0;o<e;o++)l(o);for(var u=0;u<n;u++){var d=Object(E.g)(t.substats);d.value+=r(d.key),Number.isInteger(d.value)||(d.value=parseFloat(d.value.toFixed(1)))}c.setState(t)},c.componentDidUpdate=function(){c.props.artifactToEdit&&c.state.id!==c.props.artifactToEdit.id&&c.setState(c.props.artifactToEdit)},c.state=a.getInitialState(),c}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.getRemainingSubstats(),s=L.a.artifactValidation(this.state),r=s.subStatValidations;return Object(n.jsxs)(O.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(O.a.Header,{children:"Artifact Editor"}),Object(n.jsxs)(O.a.Body,{children:[Object(n.jsxs)(y.a,{className:"mb-2",children:[Object(n.jsx)(S.a,{xs:12,children:Object(n.jsx)(this.MainSelection,{})}),Object(n.jsx)(S.a,{xs:12,children:Object(n.jsx)(this.MainStatInputRow,{})})]}),Object(n.jsx)(y.a,{children:Object(n.jsxs)(S.a,{children:[Object(n.jsx)("h5",{className:"mr-auto",children:"Substats"}),Object(n.jsxs)("span",{className:"mb-2",children:[Object(n.jsxs)("span",{className:"mr-3",children:[Object(n.jsx)("span",{children:"Current Substat Efficiency "}),Object(n.jsx)(H.a,{tooltip:s.msg,valid:s.valid,percent:s.currentEfficiency,children:(s.currentEfficiency?s.currentEfficiency:0).toFixed(2)+"%"})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{children:"Maximum Substat Efficiency "}),Object(n.jsx)(H.a,{tooltip:s.msg,valid:s.valid,percent:s.maximumEfficiency,children:(s.maximumEfficiency?s.maximumEfficiency:0).toFixed(2)+"%"})]}),Object(n.jsx)(P.a,{placement:"bottom",overlay:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(W.a.Title,{as:"h5",children:"Substat Efficiency"}),Object(n.jsx)(W.a.Content,{children:Object(n.jsxs)("span",{children:["Every 4 artifact upgrades, you get a substat roll. The ",Object(n.jsx)("strong",{children:"substat efficiency"})," calculates as a percentage how high the substat rolled. The ",Object(n.jsx)("strong",{children:"Maximum Substat Efficiency"})," of an artifact calculates the efficiency if the remaining upgrades rolled maximum."]})})]}),children:Object(n.jsx)(b.a,{icon:j.p,className:"ml-2",style:{cursor:"help"}})})]})]})}),Object(n.jsx)(y.a,{className:"mb-2",children:this.state.substats.map((function(a,s){return Object(n.jsx)(S.a,{className:"mt-1 mb-1",xs:12,lg:6,children:Object(n.jsx)(t.SubStatInput,{numStars:t.state.numStars,remainingSubstats:e,subStatKey:a?a.key:null,substatevalue:a?a.value:null,index:s,subStatValidation:r[s]})},"substat"+s)}))}),Object(n.jsx)(y.a,{className:"mb-2",children:Object(n.jsx)(S.a,{children:s.msg?Object(n.jsx)(V.a,{variant:"danger",children:s.msg}):null})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(S.a,{xs:12,className:"mb-2",children:Object(n.jsx)(Z,{setState:function(e){return t.setState(e)},reset:function(e){return t.uploadDisplayReset=e}})})})]}),Object(n.jsxs)(O.a.Footer,{children:[Object(n.jsx)(U.a,{className:"mr-3",onClick:this.saveArtifact,disabled:T.a.isInvalid(this.state),children:this.props.artifactToEdit?"Save Artifact":"Add Artifact"}),Object(n.jsx)(U.a,{className:"mr-3",variant:"success",onClick:function(){t.props.cancelEdit&&t.props.cancelEdit(),t.setState(a.getInitialState())},children:"Clear"}),Object(n.jsx)(U.a,{variant:"warning",onClick:this.randomizeArtifact,children:"Randomize"})]})]})}}]),a}(h.a.Component);jt.initialState={setKey:"",numStars:0,level:0,slotKey:"",mainStatKey:"",substats:[{key:"",value:0},{key:"",value:0},{key:"",value:0},{key:"",value:0}]},jt.getInitialState=function(){return Object(E.e)(jt.initialState)};var bt=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).forceUpdateArtifactDisplay=function(){return n.forceUpdate()},n.addArtifact=function(t){if(n.state.artToEdit&&n.state.artToEdit.id===t.id)T.a.updateArtifact(t),n.setState({artToEdit:null});else{var e=T.a.addArtifact(t);if(null===e)return;n.setState((function(t){return{artIdList:[e].concat(Object(c.a)(t.artIdList))}}))}},n.deleteArtifact=function(t){return n.setState((function(e){var a=T.a.getArtifact(t);a&&a.location&&w.a.unequipArtifactOnSlot(a.location,a.slotKey),T.a.removeArtifactById(t);var n=Object(c.a)(e.artIdList);return n.splice(n.indexOf(t),1),{artIdList:n}}))},n.editArtifact=function(t){return n.setState({artToEdit:T.a.getArtifact(t)},(function(){n.scrollRef.current.scrollIntoView({behavior:"smooth"}),n.forceUpdate()}))},n.cancelEditArtifact=function(){return n.setState({artToEdit:null},n.forceUpdate)},n.state=Object(i.a)(Object(i.a)({artIdList:[],artToEdit:null},Object(E.e)(a.initialFilter)),{},{maxNumArtifactsToDisplay:50}),N.a.pageview("/artifact"),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.scrollRef=h.a.createRef(),Object(I.a)(),this.setState({artIdList:T.a.getArtifactIdList()})}},{key:"render",value:function(){var t,e=this,a=(null===(t=this.state.artIdList)||void 0===t?void 0:t.length)||0,i=this.state.artIdList.map((function(t){return T.a.getArtifact(t)})).filter((function(t){if(e.state.filterArtSetKey&&e.state.filterArtSetKey!==t.setKey)return!1;if(!e.state.filterStars.includes(t.numStars))return!1;if(t.level<e.state.filterLevelLow||t.level>e.state.filterLevelHigh)return!1;if(e.state.filterSlotKey&&e.state.filterSlotKey!==t.slotKey)return!1;if(e.state.filterMainStatKey&&e.state.filterMainStatKey!==t.mainStatKey)return!1;var a,n=Object(r.a)(e.state.filterSubstates);try{var s=function(){var e=a.value;if(e&&!t.substats.some((function(t){return t.key===e})))return{v:!1}};for(n.s();!(a=n.n()).done;){var i=s();if("object"===typeof i)return i.v}}catch(c){n.e(c)}finally{n.f()}return!0})),c=function(t){return Object(n.jsx)(x.a.Item,{onClick:function(){return e.setState({filterMainStatKey:t.statKey})},children:C.e.getStatNameWithPercent(t.statKey)},t.statKey)},l=function(t){return L.a.getArtifactSetsByMaxStarEntries(t).map((function(t){var a=Object(s.a)(t,2),r=a[0],i=a[1];return Object(n.jsx)(x.a.Item,{onClick:function(){return e.setState({filterArtSetKey:r})},children:i.name},r)}))},o="Showing ".concat(i.length>this.state.maxNumArtifactsToDisplay?this.state.maxNumArtifactsToDisplay:i.length," out of ").concat(a," Artifacts");return Object(n.jsxs)(p.a,{className:"mt-2",ref:this.scrollRef,children:[Object(n.jsx)(y.a,{className:"mb-2 no-gutters",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(jt,{artifactToEdit:this.state.artToEdit,addArtifact:this.addArtifact,cancelEdit:this.cancelEditArtifact})})}),Object(n.jsx)(y.a,{className:"mb-2",children:Object(n.jsx)(S.a,{children:Object(n.jsxs)(O.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsxs)(O.a.Header,{children:[Object(n.jsx)("span",{children:"Artifact Filter"})," ",Object(n.jsx)("span",{className:"float-right",children:o})]}),Object(n.jsx)(O.a.Body,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(x.a,{as:m.a.Prepend,className:"flex-grow-1",children:[Object(n.jsx)(x.a.Toggle,{className:"w-100",children:L.a.getArtifactSetName(this.state.filterArtSetKey,"Artifact Set")}),Object(n.jsxs)(x.a.Menu,{children:[Object(n.jsx)(x.a.Item,{onClick:function(){return e.setState({filterArtSetKey:""})},children:"Unselect"}),Object(n.jsx)(x.a.Divider,{}),Object(n.jsx)(x.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca"}),l(5),Object(n.jsx)(x.a.Divider,{}),Object(n.jsx)(x.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca"}),l(4),Object(n.jsx)(x.a.Divider,{}),Object(n.jsx)(x.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca"}),l(3)]})]})}),Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsx)(v.a,{className:"w-100 d-flex",type:"checkbox",as:m.a.Append,onChange:function(t){return e.setState({filterStars:t})},defaultValue:this.state.filterStars,children:Object.keys(A.e).map((function(t){t=parseInt(t);var a=e.state.filterStars.includes(t);return Object(n.jsxs)(g.a,{value:t,children:[Object(n.jsx)(b.a,{icon:a?j.b:j.w})," ",Object(n.jsx)(k.a,{stars:t})]},t)}))})}),Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(m.a.Prepend,{children:Object(n.jsx)(m.a.Text,{children:"Level Low/High (Inclusive)"})}),Object(n.jsx)(K.b,{value:this.state.filterLevelLow,placeholder:"Lowest Level to Filter",onValueChange:function(t){return t>=0&&t<=e.state.filterLevelHigh&&e.setState({filterLevelLow:t})}}),Object(n.jsx)(K.b,{value:this.state.filterLevelHigh,placeholder:"Highest Level to Filter",onValueChange:function(t){return t>=0&&t>=e.state.filterLevelLow&&e.setState({filterLevelHigh:t})}})]})}),Object(n.jsx)(S.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(S.a,{children:Object(n.jsxs)(x.a,{className:"flex-grow-1",children:[Object(n.jsx)(x.a.Toggle,{className:"w-100",children:L.a.getArtifactSlotNameWithIcon(this.state.filterSlotKey,"Slot")}),Object(n.jsxs)(x.a.Menu,{children:[Object(n.jsx)(x.a.Item,{onClick:function(){return e.setState({filterSlotKey:""})},children:"Unselect"}),L.a.getArtifactSlotKeys().map((function(t){return Object(n.jsx)(x.a.Item,{onClick:function(){return e.setState({filterSlotKey:t})},children:L.a.getArtifactSlotNameWithIcon(t)},t)}))]})]})}),Object(n.jsx)(S.a,{children:Object(n.jsxs)(x.a,{className:"flex-grow-1",children:[Object(n.jsx)(x.a.Toggle,{className:"w-100",children:C.e.getStatNameWithPercent(this.state.filterMainStatKey,"Main Stat")}),Object(n.jsxs)(x.a.Menu,{children:[Object(n.jsx)(x.a.Item,{onClick:function(){return e.setState({filterMainStatKey:""})},children:"Unselect"}),L.a.getMainStatKeys().map((function(t){return Object(n.jsx)(c,{statKey:t},t)}))]})]})})]})}),this.state.filterSubstates.map((function(t,a){return Object(n.jsx)(S.a,{xs:6,lg:3,className:"mb-2",children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(x.a.Toggle,{id:"dropdown-basic",className:"w-100",children:C.e.getStatNameWithPercent(t,"Substat ".concat(a+1))}),Object(n.jsxs)(x.a.Menu,{children:[Object(n.jsx)(x.a.Item,{onClick:function(){var t=Object(E.e)(e.state.filterSubstates);t[a]="",e.setState({filterSubstates:t})},children:"No Substat"}),Object.keys(A.f).filter((function(t){return!e.state.filterSubstates.includes(t)})).map((function(t){return Object(n.jsx)(x.a.Item,{onClick:function(){var n=Object(E.e)(e.state.filterSubstates);n[a]=t,e.setState({filterSubstates:n})},children:C.e.getStatNameWithPercent(t)},t)}))]})]})},a)}))]})})]})})}),Object(n.jsx)(y.a,{className:"mb-2",children:i.map((function(t,a){return a<e.state.maxNumArtifactsToDisplay?Object(n.jsx)(S.a,{lg:4,md:6,className:"mb-2",children:Object(n.jsx)(M.a,{artifactId:t.id,onDelete:function(){return e.deleteArtifact(t.id)},onEdit:function(){return e.editArtifact(t.id)},forceUpdate:e.forceUpdateArtifactDisplay})},t.id):null}))})]})}}]),a}(h.a.Component);bt.initialFilter={filterArtSetKey:"",filterStars:[3,4,5],filterLevelLow:0,filterLevelHigh:20,filterSlotKey:"",filterMainStatKey:"",filterSubstates:["","","",""]}}}]);
//# sourceMappingURL=12.5c94426c.chunk.js.map