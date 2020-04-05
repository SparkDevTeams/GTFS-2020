(this["webpackJsonpgtfs-2020"]=this["webpackJsonpgtfs-2020"]||[]).push([[0],{55:function(e,n,t){e.exports=t(86)},60:function(e,n,t){},61:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var r=t(7),a=t(1),i=t.n(a),o=t(27),c=t.n(o),u=t(20),l=t(21),s=(t(60),t(61),t(3)),p=t.n(s),f=t(46),m=t(9),d=t(5),b=t(4);function h(){var e=Object(d.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 44px;\n"]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n  width: 25%;\n"]);return v=function(){return e},e}function g(){var e=Object(d.a)(["\n  width: 75%;\n"]);return g=function(){return e},e}function x(){var e=Object(d.a)(["\n  height: 100%;\n  display: flex;\n"]);return x=function(){return e},e}var E=b.b.div(x()),w=b.b.div(g()),j=b.b.div(v()),O=b.b.p(h());function y(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return e},e}function k(){var e=Object(d.a)(["\n  text-align: center;\n"]);return k=function(){return e},e}var S=b.b.h1(k()),T=b.b.div(y()),C=b.b.div((function(e){var n=e.width,t=void 0===n?"100%":n,r=e.height,a=void 0===r?"auto":r,i=e.minHeight,o=void 0===i?a:i,c=e.margin,u=void 0===c?"0px":c,l=e.padding,s=void 0===l?"0px":l,p=e.lg,f=void 0===p?t:p,m=e.md,d=void 0===m?f:m,b=e.sm,h=void 0===b?d:b,v=e.xs,g=void 0===v?h:v,x=e.cursor,E=e.hover,w=e.selfCenter,j=e.direction;return"\n  display: flex;\n  flex-direction: ".concat(void 0===j?"row":j,";\n  flex-wrap: wrap;\n  width: ").concat(t,";\n  height: ").concat(a,";\n  min-height: ").concat(o,";\n  margin: ").concat(u,";\n  padding: ").concat(s,";\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  ").concat(w&&"margin: 10px auto;","\n  @media only screen and (max-width: 1200px){\n    width: ").concat(f,"\n  }\n\n  @media only screen and (max-width: 992px){\n    width: ").concat(d,"\n  }\n\n  @media only screen and (max-width: 768px){\n    width: ").concat(h,"\n  }\n\n  @media only screen and (max-width: 576px){\n    width: ").concat(g,"\n  }\n\n  &:hover {\n    cursor: ").concat(x,";\n    ").concat(E&&"box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);","\n  }\n")}));function z(){var e=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n"]);return z=function(){return e},e}var N=b.b.div(z()),F=function(e){var n=Object(a.useState)([]),t=Object(r.a)(n,2),o=t[0],c=t[1];Object(a.useEffect)((function(){e.Routes.routes&&(0!==Object.entries(e.Routes.routes).length?c(e.Routes.routes):c([]))}),[e.Routes]);var u=function(){var n=Object(m.a)(p.a.mark((function n(t){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.callBack(t.RouteId);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(N,null,o.map((function(e,n){return i.a.createElement(C,{width:"90%",height:"20%",margin:"10px",cursor:"pointer",hover:!0,selfCenter:!0,key:e.RouteId,onClick:function(){return u(e)}},e.Name1)})))},A=function(e){return i.a.createElement(T,null,i.a.createElement(S,null,e.title),i.a.createElement("select",{value:e.currentToken,onChange:function(n){return e.setCurrentToken(n.currentTarget.value)}},Object.entries(e.tokens).map((function(e,n){return i.a.createElement("option",{key:n,value:e[1]},e[0])}))),i.a.createElement(F,{Routes:e.routes,callBack:function(n){e.passRouteId(n)}}))},R=t(64),M="https://gtfs-mdc.herokuapp.com",D={getRoutes:function(){var e=Object(m.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("".concat(M,"/routes/find/all?token=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getTokens:function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("".concat(M,"/tokens"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getShapeByRoute:function(){var e=Object(m.a)(p.a.mark((function e(n,t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("".concat(M,"/shapes/find?token=").concat(n,"&id=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),getStopsByRoute:function(){var e=Object(m.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("".concat(M,"/stops/find?id=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),registerUser:function(){var e=Object(m.a)(p.a.mark((function e(n,t,r){var a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.post("".concat(M,"/register"),{user:n,pwd:t,email:r});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),406!==(i=e.t0.response.status)){e.next=12;break}return e.abrupt("return",{message:"Account already in use"});case 12:if(500!==i){e.next=14;break}return e.abrupt("return",{message:"There was an Error creating your account"});case 14:return e.abrupt("return",{message:"There was an Error creating your account"});case 15:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r){return e.apply(this,arguments)}}(),getStations:function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("".concat(M,"/stations"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{message:"There was an error getting the stations"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),getTrainSchedule:function(){var e=Object(m.a)(p.a.mark((function e(n,t,r){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("".concat(M,"/trains/find?arrival=").concat(n,"&departure=").concat(t,"&departure%20date=").concat(r));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{message:"There was an error getting your schedule"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r){return e.apply(this,arguments)}}(),getAllTrirail:function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("".concat(M,"/trirail/find/all"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{message:"There was an error getting the trirails"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),getTrirailShape:function(){var e=Object(m.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("".concat(M,"/trishape/find?id=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{message:"There was an error getting the trirails shape"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},q=t(92),Y=t(93),B=t(88),U=t(89),L=t(90),P=t(94),I=t(91),_=t(50);function J(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n"]);return J=function(){return e},e}function W(){var e=Object(d.a)(["\n  background: #FFFFFF;\n  border-radius: 4px;\n  width: 25px;\n  height: 25px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.35);\n  z-index: 2;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 10px;\n  margin-right: 10px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return W=function(){return e},e}var Z=b.b.div(W()),$=b.b.svg(J()),H=function(e){var n=function(n){var t=n.coords,r=t.latitude,a=t.longitude,i=t.accuracy;e.setCurrentLocation({position:[r,a],accuracy:i})},t=function(e){console.log(e)};return i.a.createElement(Z,{onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n,t):console.log("No Geolocation")}},i.a.createElement($,{as:_.a}))},G=function(e){var n,t=Object(a.useState)({}),o=Object(r.a)(t,2),c=o[0],u=o[1],l=Object(a.useState)([]),s=Object(r.a)(l,2),p=s[0],f=s[1],m=Object(a.useState)(void 0),d=Object(r.a)(m,2),b=d[0],h=d[1],v=Object(a.useRef)();return Object(a.useEffect)((function(){var n,t;if(null===(n=e.shape)||void 0===n?void 0:null===(t=n.RoutePath)||void 0===t?void 0:t.length){var r,a,i,o;u(e.shape);var c=Math.floor(((null===(r=e.shape)||void 0===r?void 0:null===(a=r.RoutePath)||void 0===a?void 0:a.length)-1)/2);v.current.leafletElement.panTo(null===(i=e.shape)||void 0===i?void 0:null===(o=i.RoutePath)||void 0===o?void 0:o[c])}if(Array.isArray(e.shape)){f(e.shape);var l=Math.floor((e.shape.length-1)/2);v.current.leafletElement.panTo(e.shape[l])}}),[e.shape]),Object(a.useEffect)((function(){(null===b||void 0===b?void 0:b.position)&&v.current.leafletElement.panTo(b.position)}),[b]),i.a.createElement(q.a,{center:[25.7617,-80.1918],zoom:13,ref:v},i.a.createElement(Y.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),i.a.createElement(H,{setCurrentLocation:h}),(null===b||void 0===b?void 0:b.position)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(B.a,{position:b.position}),i.a.createElement(U.a,{center:b.position,radius:b.accuracy})),i.a.createElement(L.a,{positions:(null===c||void 0===c?void 0:c.RoutePath)||[],color:null===c||void 0===c?void 0:c.LineColor},i.a.createElement(P.a,null,c.RoutePath&&i.a.createElement("div",null,c.Names))),null===c||void 0===c?void 0:null===(n=c.stops)||void 0===n?void 0:n.map((function(e){return i.a.createElement(I.a,{radius:3,center:e})})),p&&i.a.createElement(L.a,{positions:p}))},K=["Trains","Trirail","Bus"];function Q(){var e=Object(d.a)(["\n font-family: Montserrat;\n font-style: normal;\n font-weight: normal;\n font-size: 18px;\n line-height: 22px;\n text-align: center;\n white-space: pre-line;\n width: 300px;\n\n "]);return Q=function(){return e},e}function V(){var e=Object(d.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 44px;\n  align-self: start;\n  margin-bottom: 25px;\n"]);return V=function(){return e},e}function X(){var e=Object(d.a)(["\n  background: #E892A2;\n  border-radius: 5px;\n  width: 125px;\n  color: #FFFFFF;\n  height: 35px;\n  border-width: 0;\n  align-self: center;\n\n"]);return X=function(){return e},e}function ee(){var e=Object(d.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #797979;\n  margin-bottom: 5px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(d.a)(["\n  display: flex;\n  ",";\n  width: 100%;\n  justify-content: center;\n  margin-top: 20px;\n  max-height: 400px;\n  overflow: scroll;\n"]);return ne=function(){return e},e}function te(){var e=Object(d.a)([" \n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 5%;\n"]);return te=function(){return e},e}function re(){var e=Object(d.a)(["\n  width:  100%;\n  height: 35px;\n  border: 1px solid rgba(48, 48, 48, 0.25);\n  border-radius: 5px;\n  margin-bottom: 20px;\n"]);return re=function(){return e},e}var ae=b.b.input(re()),ie=b.b.form(te()),oe=b.b.div(ne(),(function(e){return e.wrap?"flex-wrap: wrap":null})),ce=b.b.label(ee()),ue=b.b.input(X()),le=(b.b.p(V()),b.b.p(Q())),se=t(52),pe=t(32),fe=t.n(pe),me=function(){var e=Object(a.useState)({}),n=Object(r.a)(e,2),t=n[0],o=n[1],c=fe()().format("YYYY-MM-DDTkk:mm"),u=Object(a.useState)(c),l=Object(r.a)(u,2),s=l[0],f=l[1],d=Object(a.useState)(void 0),b=Object(r.a)(d,2),h=b[0],v=b[1],g=Object(a.useState)(void 0),x=Object(r.a)(g,2),E=x[0],w=x[1],j=Object(a.useState)([]),O=Object(r.a)(j,2),y=O[0],k=O[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getStations();case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(){var e=Object(m.a)(p.a.mark((function e(n){var t,r,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=h||"",r=E||"",a=fe()(s).subtract(1,"years").format("YYYY-MM-DD"),e.next=6,D.getTrainSchedule(t,r,a);case 6:i=e.sent,Array.isArray(i)&&k(i);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,null,i.a.createElement(C,null,i.a.createElement(ie,{onSubmit:S},i.a.createElement(ce,null,"Departure Date"),i.a.createElement(ae,{type:"datetime-local",value:s,onChange:function(e){return f(e.currentTarget.value)}}),i.a.createElement(ce,null,"Departure"),i.a.createElement(ae,{as:"select",value:E,onChange:function(e){return w(e.currentTarget.value)}},i.a.createElement("option",{value:void 0}),Object.entries(t).map((function(e,n){return i.a.createElement("option",{key:n,value:e[1]},e[0])}))),i.a.createElement(ce,null,"Arrival"),i.a.createElement(ae,{as:"select",value:h,onChange:function(e){return v(e.currentTarget.value)}},i.a.createElement("option",{value:void 0}),Object.entries(t).map((function(e,n){return i.a.createElement("option",{key:n,value:e[1]},e[0])}))),i.a.createElement(ue,{type:"submit",value:"Search"})))),i.a.createElement(oe,{wrap:!0},y.map((function(e,n){return i.a.createElement(C,{key:n,width:"90%",height:"20%",margin:"10px",cursor:"pointer",hover:!0,selfCenter:!0},i.a.createElement(le,null,e.origin," ",i.a.createElement(se.a,null)," ",e.destination),i.a.createElement(le,null,"Train: ",e.train),i.a.createElement(le,null,"Departure: ",fe()(e.scheduledDeparture).format("MM/DD/YY kk:mma")))}))))};function de(){var e=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n"]);return de=function(){return e},e}function be(){var e=Object(d.a)(["\n  width: 100%;\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n"]);return be=function(){return e},e}function he(){var e=Object(d.a)(["\n  text-align: center;\n"]);return he=function(){return e},e}var ve=b.b.h1(he()),ge=b.b.div(be()),xe=b.b.div(de()),Ee=function(e){var n=Object(a.useState)([]),t=Object(r.a)(n,2),o=t[0],c=t[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getAllTrirail();case 2:n=e.sent,console.log(n),c(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var u=function(){var n=Object(m.a)(p.a.mark((function n(t){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.getTrirailShape(t);case 2:r=n.sent,e.setShape(r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(ge,null,i.a.createElement(ve,null,"Trirails"),i.a.createElement(xe,null,o.map((function(e,n){return i.a.createElement(C,{width:"90%",height:"20%",margin:"10px",cursor:"pointer",hover:!0,selfCenter:!0,key:e.id,onClick:function(){return u(e.id)}},e.name)}))))},we=function(){var e=Object(a.useState)(""),n=Object(r.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)([]),u=Object(r.a)(c,2),l=u[0],s=u[1],d=Object(a.useState)({}),b=Object(r.a)(d,2),h=b[0],v=b[1],g=Object(a.useState)({}),x=Object(r.a)(g,2),y=x[0],k=x[1],S=Object(a.useState)(""),T=Object(r.a)(S,2),C=T[0],z=T[1],N=Object(a.useState)([]),F=Object(r.a)(N,2),R=F[0],M=F[1],q=Object(a.useState)(void 0),Y=Object(r.a)(q,2),B=Y[0],U=Y[1],L=Object(a.useCallback)(function(){var e=Object(m.a)(p.a.mark((function e(n){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}return e.next=3,D.getShapeByRoute(C,n);case 3:return t=e.sent,e.next=6,D.getStopsByRoute(n);case 6:r=e.sent,v(Object(f.a)({},t,{stops:r}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[C]),P=Object(a.useCallback)(Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getTokens();case 2:n=e.sent,k(n),z(Object.values(n)[0]);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){B===K[2]&&P()}),[B,P]),Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getRoutes(C);case 2:n=e.sent,s(n),M(n.points);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[C]),Object(a.useEffect)((function(){L(t)}),[t,L]),i.a.createElement(E,null,i.a.createElement(w,null,i.a.createElement(G,{shape:h,points:R})),i.a.createElement(j,null,i.a.createElement(O,null,"Select Method of Transportation:"),i.a.createElement("select",{value:B,onChange:function(e){return U(e.currentTarget.value)}},i.a.createElement("option",null),K.map((function(e,n){return i.a.createElement("option",{value:e,key:n},e)}))),B===K[0]&&i.a.createElement(me,null),B===K[1]&&i.a.createElement(Ee,{setShape:v}),B===K[2]&&i.a.createElement(A,{title:"Routes",routes:l,passRouteId:o,setCurrentToken:z,tokens:y})))},je=function(){return i.a.createElement(we,null)},Oe=t(31);function ye(){var e=Object(d.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 44px;\n  align-self: start;\n  margin-bottom: 25px;\n"]);return ye=function(){return e},e}function ke(){var e=Object(d.a)(["\n  background: #E892A2;\n  border-radius: 5px;\n  width: 125px;\n  color: #FFFFFF;\n  height: 35px;\n  border-width: 0;\n  align-self: center;\n\n"]);return ke=function(){return e},e}function Se(){var e=Object(d.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #797979;\n  margin-bottom: 5px;\n"]);return Se=function(){return e},e}function Te(){var e=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin-top: 20px;\n"]);return Te=function(){return e},e}function Ce(){var e=Object(d.a)([" \n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 5%;\n"]);return Ce=function(){return e},e}function ze(){var e=Object(d.a)(["\n  width:  100%;\n  height: 35px;\n  border: 1px solid rgba(48, 48, 48, 0.25);\n  border-radius: 5px;\n  margin-bottom: 20px;\n"]);return ze=function(){return e},e}var Ne=b.b.input(ze()),Fe=b.b.form(Ce()),Ae=b.b.div(Te()),Re=b.b.label(Se()),Me=b.b.input(ke()),De=b.b.p(ye());function qe(){var e=Object(d.a)(["\n font-family: Montserrat;\n font-style: normal;\n font-weight: normal;\n font-size: 18px;\n line-height: 22px;\n text-align: center;\n white-space: pre-line;\n width: 300px;\n\n "]);return qe=function(){return e},e}function Ye(){var e=Object(d.a)(["\n    font-size: medium;\n    white-space: pre-line;\n    text-align: center;\n    font-weight: bold;\n"]);return Ye=function(){return e},e}function Be(){var e=Object(d.a)(["\n    position: absolute;\n    top: 8px;\n    left: 16px;\n    text-align: left;\n"]);return Be=function(){return e},e}function Ue(){var e=Object(d.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 2;\n  top: 0;\n  left: 0;\n  position: fixed;\n  display: ",";\n  justify-content: center;\n  align-items: center;\n"]);return Ue=function(){return e},e}var Le=b.b.div(Ue(),(function(e){return e.show?"flex":"none"})),Pe=b.b.h1(Be()),Ie=(b.b.pre(Ye()),b.b.p(qe())),_e=function(e){return i.a.createElement(Le,{show:e.show},i.a.createElement(C,{position:"relative",width:"558px",height:"325px",direction:"column"},i.a.createElement(Pe,null,e.title),i.a.createElement(Ie,{className:"content"},e.message),i.a.createElement("div",{className:"actions"},i.a.createElement(Me,{className:"signup-button",type:"submit",value:"Close",onClick:function(n){var t;return null===(t=e.onClose)||void 0===t?void 0:t.call(e,n)}}))))};function Je(){var e=Object(l.f)(),n=Object(a.useState)(!1),t=Object(r.a)(n,2),o=t[0],c=t[1],u=Object(a.useState)(""),s=Object(r.a)(u,2),f=s[0],d=s[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),v=h[0],g=h[1],x=Object(Oe.a)(),E=x.register,w=x.handleSubmit,j=(x.watch,x.errors),O=x.setError,y=x.clearError,k=x.formState.isSubmitting;function S(){c((function(e){return!e}))}function T(e){var n=e.error;if(n)switch(n.type){case"required":return i.a.createElement("p",null,"This is required");case"minLength":return i.a.createElement("p",null,"The minimum length is 6 characters");case"pattern":return i.a.createElement("p",null,"Enter a valid email address");case"maxlength":return i.a.createElement("p",null,"The minimum length is 100 characters");case"validate":return i.a.createElement("p",null,"Username is already used");default:return null}return null}var z=function(){var n=Object(m.a)(p.a.mark((function n(t){var r,a,i,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.user,a=t.pwd,i=t.email,n.next=3,D.registerUser(r,a,i);case 3:(o=n.sent).message?(O("usernameTaken","validate"),d("There was an error signing up with the given information \n \n ".concat(o.message," \n \n")),g("Sign up Error"),S()):(y("user"),d("Succesfuly created an account! Will Redirect in 5 seconds."),S(),setTimeout((function(){e.push("/")}),5e3));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(Ae,null,i.a.createElement(_e,{onClose:S,title:v,show:o,message:f}),i.a.createElement(C,{width:"50%",xs:"95%"},i.a.createElement(Fe,{className:"signup-form",onSubmit:w((function(e){z(e)}))},i.a.createElement(De,null,"Sign up"),i.a.createElement(Re,{className:"signup-label"},"Email"),i.a.createElement(Ne,{className:"signup-input",name:"email",ref:E({required:!0,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}),i.a.createElement(T,{error:j.email}),i.a.createElement(Re,{className:"signup-label"},"User Name"),i.a.createElement(Ne,{className:"signup-input",name:"user",ref:E({required:!0,minLength:6,maxlength:100})}),i.a.createElement(T,{error:j.user}),i.a.createElement(Re,{className:"signup-label"},"Password"),i.a.createElement(Ne,{type:"password",className:"signup-input",name:"pwd",ref:E({required:!0,minLength:8,maxlength:100})}),i.a.createElement(T,{error:j.pwd}),i.a.createElement(Me,{disabled:k,className:"signup-button",type:"submit",value:"Create Account"}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=t(19);function Ze(){var e=Object(d.a)(["\n  position: relative;\n  padding-top: .7rem;\n  cursor: pointer;\n  display: flex;\n\n  & span {\n    background: #fdcb6e;\n    display: flex;\n    position: relative;\n    width: 3.5rem;\n    height: .4rem;\n    margin-bottom: .7rem;\n    transition: all ease-in-out 0.2s;\n  }\n\n  .open span:nth-child(2) {\n      opacity: 0;\n    }\n\n  .open span:nth-child(3) {\n    transform: rotate(45deg);\n    top: -11px;\n  }\n\n  .open span:nth-child(1) {\n    transform: rotate(-45deg);\n    top: 11px;\n  }\n\n"]);return Ze=function(){return e},e}var $e=function(e){return i.a.createElement(He,{onClick:e.handleNavbar},i.a.createElement("div",{className:e.navbarState?"open":""},i.a.createElement("span",null,"\xa0"),i.a.createElement("span",null,"\xa0"),i.a.createElement("span",null,"\xa0")))},He=b.b.div(Ze());function Ge(){var e=Object(d.a)(["\n  list-style-type: none;\n  padding: 2rem 1rem 2rem 2rem;\n\n  & li {\n    transition: all 300ms linear 0s;\n  }\n\n  & a {\n    font-size: 1.4rem;\n    line-height: 2;\n    color: #dfe6e9;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      color: #fdcb6e;\n      border-bottom: 1px solid #fdcb6e;\n    }\n  }\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(d.a)(["\n  z-index: 1;\n  background: #2d3436;\n  position: fixed;\n  top: 4.5rem;\n  left: 0;\n  right: 0;\n"]);return Ke=function(){return e},e}var Qe=function(e){var n=Object(We.c)({open:e.navbarState?0:1}).open;return!0===e.navbarState?i.a.createElement(Ve,{style:{transform:n.interpolate({range:[0,.2,.3,1],output:[0,-20,0,-200]}).interpolate((function(e){return"translate3d(0, ".concat(e,"px, 0")}))}},i.a.createElement(Xe,null,i.a.createElement("li",null,i.a.createElement("a",{href:"/",onClick:e.handleNavbar},"link n1")),i.a.createElement("li",null,i.a.createElement("a",{href:"/",onClick:e.handleNavbar},"link n2")),i.a.createElement("li",null,i.a.createElement("a",{href:"/",onClick:e.handleNavbar},"link n3")),i.a.createElement("li",null,i.a.createElement("a",{href:"/",onClick:e.handleNavbar},"link n4")))):null},Ve=Object(b.b)(We.a.div)(Ke()),Xe=b.b.ul(Ge());function en(){var e=Object(d.a)(["\n  margin-right: auto 0;\n  align-content: right;\n\n  @media (min-width: 769px) {\n    display: flex;\n  }\n"]);return en=function(){return e},e}function nn(){var e=Object(d.a)(["\n  justify-self: end;\n  list-style-type: none;\n  margin: auto 0; \n  z-index: 0;\n\n  & a {\n    color: #dfe6e9;\n    text-transform: uppercase;\n    font-weight: 600;\n    border-bottom: 1px solid transparent;\n    margin: 0 1.5rem;\n    transition: all 300ms linear 0s;\n    text-decoration: none;\n    cursor: pointer;\n\n\n    &:hover {\n      color: #fdcb6e;\n      border-bottom: 1px solid #fdcb6e;\n    }\n\n    @media (max-width: 768px) {\n      display: none;\n  \n    }\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(d.a)(["\n \n  display: flex;\n  margin-right: auto;\n  padding: 0 2rem;;\n  justify-content: space-between;\n  height: 5rem;\n"]);return tn=function(){return e},e}function rn(){var e=Object(d.a)(["\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: #2d3436;\n  z-index: 1;\n  font-size: 1.4rem;\n"]);return rn=function(){return e},e}var an=function(e){var n=Object(We.c)({from:{transform:"translate3d(0, -10rem, 0)"},transform:"translate3d(0, 0, 0)"}),t=Object(We.c)({from:{transform:"translate3d(0, 30px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1},delay:800,config:We.b.wobbly});return i.a.createElement(i.a.Fragment,null,i.a.createElement(on,{style:n},i.a.createElement(cn,null,i.a.createElement(un,{style:t},i.a.createElement(u.b,{to:"/"},"Map"),i.a.createElement(u.b,{to:"/profile"},"Account"),i.a.createElement(u.b,{to:"/signup"},"Sign Up"),i.a.createElement(u.b,{to:"/"},"link ")),i.a.createElement(ln,null,i.a.createElement($e,{navbarState:e.navbarState,handleNavbar:e.handleNavbar})))),i.a.createElement(Qe,{navbarState:e.navbarState,handleNavbar:e.handleNavbar}))},on=Object(b.b)(We.a.nav)(rn()),cn=b.b.div(tn()),un=Object(b.b)(We.a.ul)(nn()),ln=b.b.div(en());function sn(){var e=Object(d.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;\n\n  *,\n  *::after,\n  *::before {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: 62.5%;\n    background-color: #F2F2F2;\n  }\n\n  body {\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  ::-webkit-scrollbar {\n    width: 12px;\n}\n \n/* Track */\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: none; \n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background: rgba(0,0,0,0.4); \n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.25); \n}\n::-webkit-scrollbar-thumb:window-inactive {\n\tbackground: rgba(0,0,0,0.2); \n}\n"]);return sn=function(){return e},e}var pn=Object(b.a)(sn());function fn(){var e=Object(d.a)(["\npadding-top: 20px;\nfont-size: 14px;\n\n"]);return fn=function(){return e},e}function mn(){var e=Object(d.a)(["\nheight: 200px;\nwidth:  100%;\nborder: 1px solid rgba(48, 48, 48, 0.25);\nborder-radius: 5px;\nmargin-bottom: 20px;\nresize: none;\n"]);return mn=function(){return e},e}function dn(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ",";\n"]);return dn=function(){return e},e}function bn(){var e=Object(d.a)(["\ndisplay: flex;\nflex-direction: row;\nwidth: 100%;\njustify-content: space-between;\n"]);return bn=function(){return e},e}function hn(){var e=Object(d.a)(["\nwidth: 500px;\n"]);return hn=function(){return e},e}function vn(){var e=Object(d.a)(["\n\n border-radius: 60%;\njustify-content: center;\ndisplay: flex;\nalign-items: center;\nheight: 128px;\nwidth: 128px;\nborder: 4px solid #EAEAEA;\nbox-sizing: border-box;\n"]);return vn=function(){return e},e}function gn(){var e=Object(d.a)(["\ndisplay: flex;\nalign-items: center;\nfont-size: 16px;\njustify-content: center;\nwidth: 30%;\nmargin-top: 5%;\n"]);return gn=function(){return e},e}function xn(){var e=Object(d.a)(["\n\n justify-content: center;\n align-items: center;\n font-size: 16px;\ndisplay: flex;\nwidth: 60%;\nmargin-top: 5%;\n"]);return xn=function(){return e},e}function En(){var e=Object(d.a)(["\nwidth: 100%;\ndisplay: flex;\n"]);return En=function(){return e},e}var wn=b.b.div(En()),jn=b.b.div(xn()),On=b.b.div(gn()),yn=b.b.img(vn()),kn=(b.b.hr(hn()),b.b.div(bn())),Sn=b.b.div(dn(),(function(e){var n=e.width;return n||"100%"})),Tn=b.b.textarea(mn()),Cn=b.b.p(fn()),zn=function(){var e=Object(a.useState)({name:"John Doe",email:"johndoe@gmail.com",avatar:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg"}),n=Object(r.a)(e,2),t=n[0],o=(n[1],Object(Oe.a)()),c=(o.handleSubmit,o.formState.isSubmitting);return i.a.createElement("div",{class:"row"},i.a.createElement(wn,null,i.a.createElement(jn,null,i.a.createElement(C,{height:"110%",direction:"column",padding:"10%",width:"80%"},i.a.createElement("form",null,i.a.createElement(kn,null,i.a.createElement(Sn,{width:"45%"},i.a.createElement(Re,null,"Username"),i.a.createElement(Ne,{placeholder:" Username",name:"Username"})),i.a.createElement(Sn,{width:"45%"},i.a.createElement(Re,null,"Email"),i.a.createElement(Ne,{type:"text",placeholder:" Email",name:"Email"}))),i.a.createElement(Re,null,"Address"),i.a.createElement(Ne,{type:"text",placeholder:" Address",name:"Address"}),i.a.createElement(Re,null,"About"),i.a.createElement(Tn,{type:"text",name:" About",maxlength:"500"})),i.a.createElement(Me,{disabled:c,className:"update-button",type:"submit",value:"Submit"}))),i.a.createElement(On,null,i.a.createElement(C,{direction:"column",padding:"10%",width:"80%"},i.a.createElement(yn,{src:t.avatar}),i.a.createElement("p",null,t.name),i.a.createElement("p",null,t.email),i.a.createElement(Cn,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};c.a.render(i.a.createElement((function(){var e=Object(a.useState)(!1),n=Object(r.a)(e,2),t=n[0],o=n[1];return i.a.createElement(u.a,{basename:"/"},i.a.createElement(an,{navbarState:t,handleNavbar:function(){return o((function(e){return!e}))}}),i.a.createElement(pn,null),i.a.createElement("div",{style:{height:"100vh",paddingTop:"50px"}},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/signup",component:Je}),i.a.createElement(l.a,{path:"/profile",component:zn}),i.a.createElement(l.a,{path:"/",component:je}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.4cf84ae9.chunk.js.map