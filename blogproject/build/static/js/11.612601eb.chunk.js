(this.webpackJsonpblogproject=this.webpackJsonpblogproject||[]).push([[11],{101:function(e,t){},128:function(e,t,r){"use strict";var n=r(23),c=(r(9),r(38)),s=r(60),a=r(76),i=r.n(a),o=r(88),l=r(11);t.a=function(e){var t=e.article&&e.article.length>100?e.article.substring(0,101):e.article;return Object(l.jsxs)(c.a,{style:{textAlign:"center"},children:[e.editMode?Object(l.jsx)(o.a,Object(n.a)({},e)):Object(l.jsxs)(c.a,{children:[Object(l.jsx)("img",{src:e.image,alt:e.title,style:{height:"10rem",width:"10rem"}}),Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("h3",{children:e.subtitle}),Object(l.jsx)(c.a,{children:Object(l.jsxs)("h6",{children:[i()(t)," ..."]})})]}),Object(l.jsx)(s.a,{variant:"primary",style:{disabled:!1===e.editMode?"":"none"},onClick:function(){console.log(e.editMode),e.toggleEditMode(!e.editMode)},children:"Edit View"})]})}},129:function(e,t,r){"use strict";var n=r(10),c=r(9),s=r(71),a=r.n(s),i=r(62),o=r(60),l=r(64),u=r(11);t.a=function(e){var t=Object(c.useState)(null),r=Object(n.a)(t,2),s=r[0],d=r[1],h=Object(c.useState)(null),j=Object(n.a)(h,2),b=j[0],f=j[1];return Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(i.a.Group,{style:{width:"50%"},children:[Object(u.jsx)(i.a.Label,{style:{width:"100%"},children:"Start Date"}),Object(u.jsx)(i.a.Control,{style:{width:"100%"},type:"date",onChange:function(e){d(e.target.value),console.log(e.target.value)}})]}),Object(u.jsxs)(i.a.Group,{style:{width:"50%"},children:[Object(u.jsx)(i.a.Label,{style:{width:"100%"},children:"End Date"}),Object(u.jsx)(i.a.Control,{style:{width:"100%"},type:"date",onChange:function(e){f(e.target.value),console.log(e.target.value)}})]}),Object(u.jsx)(o.a,{onClick:function(){!function(){if(s&&b){if(a()(s).valueOf()>a()(b).valueOf())return e.setAlertMessage(" start date must be before end date"),void e.setShowAlert(!0);var t=a()(s).valueOf(),r=a()(b).valueOf(),n=e.mappedArray.filter((function(e){var n=a()(e.datePublished).valueOf();return n>=t&&n<=r}));return console.log("filteredDateArray",n),n.length<1?(e.setAlertMessage("no data in range"),void e.setShowAlert(!0)):(e.setShowAlert(!1),e.closeAllOptions(),e.setFilterMessage("ARTICLES FILTERED BETWEEN ".concat(a()(s).format("M/D")," AND ").concat(a()(b).format("M/D"))),e.setMappedArray(n))}e.setAlertMessage(" both dates required to form a range"),e.setShowAlert(!0),console.log("beginDate",s,"endDate",b)}()},children:"Filter By Date"})]})}},130:function(e,t,r){"use strict";var n=r(10),c=r(9),s=r(62),a=r(60),i=r(64),o=r(11);t.a=function(e){var t,r,l=Object(c.useState)(),u=Object(n.a)(l,2),d=u[0],h=u[1],j=Object(c.useState)(),b=Object(n.a)(j,2),f=b[0],g=b[1],O=function(e){var t=Number(e.replace(":",""));if("0"===e[0]&&"0"===e[1]){var r="12:".concat(t," AM");return console.log("midnight",r),r}if(t<=1159&&t>=1){var n="".concat(e[0]).concat(e[1]).concat(e[2]).concat(e[3]).concat(e[4]," AM");return console.log("morning",n),n}if(t<1300&&t>1159){var c="".concat(e[0]).concat(e[1]).concat(e[2]).concat(e[3]).concat(e[4]," PM");return console.log("noon",t,c),c}if(t>=1300){var s=String(t-1200),a=3===s.length?"".concat(s[0],":").concat(s[1]).concat(s[2]," PM"):"".concat(s[0]).concat(s[1],":").concat(s[2]).concat(s[3]," PM");return console.log("afternoon",a),a}return"?????"};return Object(o.jsxs)(i.a,{children:[Object(o.jsxs)(s.a.Group,{style:{width:"50%"},children:[Object(o.jsxs)(s.a.Label,{style:{width:"100%"},children:["start Time ",t]}),Object(o.jsx)(s.a.Control,{style:{width:"100%"},type:"time",onChange:function(e){h(e.target.value)}})]}),Object(o.jsxs)(s.a.Group,{style:{width:"50%"},children:[Object(o.jsxs)(s.a.Label,{style:{width:"100%"},children:["end Time ",r]}),Object(o.jsx)(s.a.Control,{style:{width:"100%"},type:"time",onChange:function(e){g(e.target.value)}})]}),Object(o.jsx)(a.a,{onClick:function(){!function(){if(d&&f){if(!(100*Number(d.replace(":",""))>100*Number(f.replace(":","")))){var n=100*Number(d.replace(":","")),c=100*Number(f.replace(":","")),s=e.mappedArray.filter((function(e){return e.sortableTime>=n&&e.sortableTime<=c}));return console.log("filteredTimeArray",s),console.log("beginningTime",d),console.log("beginningTimeNumber",n),console.log("endingTime",f),console.log("endingTimeNumber",c),s.length<1?alert("no data in range"):(t=O(d),r=O(f),e.setFilterMessage("Showing messages from ".concat(t," to ").concat(r)),e.closeAllOptions(),e.setMappedArray(s))}e.setAlertMessage(" beginning date must be later than ending date. ex: 12:00AM to 11:59PM"),e.setShowAlert(!0)}else e.setAlertMessage(" both dates required to form a range"),e.setShowAlert(!0)}()},children:"Filter by time"})]})}},133:function(e,t,r){"use strict";var n=r(9),c=r(23),s=r(35),a=r(36),i=r.n(a),o=r(37),l=r(11),u=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.striped,u=e.bordered,d=e.borderless,h=e.hover,j=e.size,b=e.variant,f=e.responsive,g=Object(s.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(o.a)(r,"table"),p=i()(n,O,b&&"".concat(O,"-").concat(b),j&&"".concat(O,"-").concat(j),a&&"".concat(O,"-striped"),u&&"".concat(O,"-bordered"),d&&"".concat(O,"-borderless"),h&&"".concat(O,"-hover")),m=Object(l.jsx)("table",Object(c.a)(Object(c.a)({},g),{},{className:p,ref:t}));if(f){var x="".concat(O,"-responsive");return"string"===typeof f&&(x="".concat(x,"-").concat(f)),Object(l.jsx)("div",{className:x,children:m})}return m})),d=r(38),h=r(63),j=function(e){var t,r=function(r,n){return"ascending"===n?(e.closeAllOptions(),s=n,(c=r).sort((function(e,t){return e.sortableDate-t.sortableDate})),e.setSortMessage("Sorted by ASCENDING DATE"),e.setNewArray(c),void console.log("ascending clicked",s,c)):"descending"===n?(e.closeAllOptions(),function(r,n){t=r.sort((function(e,t){return t.sortableDate-e.sortableDate})),e.setSortMessage("Sorted by DESCENDING DATE"),e.setNewArray(t),console.log("descending clicked",n,t)}(r,n)):(e.setAlertMessage("nothing chosen: consult developer team"),void e.setShowAlert(!0));var c,s};return Object(l.jsxs)(d.a,{style:{width:"auto"},children:[Object(l.jsx)(h.c,{style:{border:"2px solid black"},onClick:function(){r(e.array,"ascending")}}),Object(l.jsx)(h.b,{style:{border:"2px solid black"},onClick:function(){r(e.array,"descending")}})]})},b=function(e){var t,r=function(r,n){switch(n){case"ascending":s=n,(c=r).sort((function(e,t){return e.sortableTime-t.sortableTime})),e.setSortMessage("Sorted by ASCENDING TIME"),e.setNewArray(c),console.log("ascending clicked",s,c);break;case"descending":!function(r,n){t=r.sort((function(e,t){return t.sortableTime-e.sortableTime})),e.setSortMessage("Sorted by DESCENDING TIME"),e.setNewArray(t),console.log("descending clicked",n,t)}(r,n);break;default:console.log("sortclicked type has no value",n)}var c,s;e.closeAllOptions()};return Object(l.jsxs)(d.a,{style:{width:"auto"},children:[Object(l.jsx)(h.c,{style:{border:"2px solid black"},onClick:function(){r(e.array,"ascending")}}),Object(l.jsx)(h.b,{style:{border:"2px solid black"},onClick:function(){r(e.array,"descending")}})]})},f=function(e){var t=function(t,r){switch(r){case"AZ":!function(t,r){var n=t.sort((function(e,t){return e.title<t.title?-1:e>t?1:0}));e.setSortMessage("Alphabetical TITLE ASCENDING"),e.setNewArray(n),console.log("ascending clicked",r,n)}(t,r);break;case"ZA":!function(t,r){var n=t.sort((function(e,t){return e.title>t.title?-1:e<t?1:0}));e.setSortMessage("Alphabetical TITLE DESCENDING"),e.setNewArray(n),console.log("descending clicked",r,n)}(t,r);break;default:console.log("no direction")}e.closeAllOptions()};return Object(l.jsxs)(d.a,{style:{width:"auto"},children:[Object(l.jsx)(h.c,{style:{border:"2px solid black"},onClick:function(){t(e.array,"AZ")}}),Object(l.jsx)(h.b,{style:{border:"2px solid black"},onClick:function(){t(e.array,"ZA")}})]})};t.a=function(e){return Object(n.useEffect)((function(){console.log("array",e.mappedArray)}),[e.mappedArray]),Object(l.jsx)("div",{children:Object(l.jsxs)(u,{bordered:!0,striped:!0,responsive:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsxs)("th",{children:["Date added",Object(l.jsx)(j,{closeAllOptions:e.closeAllOptions,array:e.mappedArray,setNewArray:e.setMappedArray,setSortMessage:e.setSortMessage,setAlertMessage:e.setAlertMessage,setShowAlert:e.setShowAlert})]}),Object(l.jsxs)("th",{children:["Time Added",Object(l.jsx)(b,{closeAllOptions:e.closeAllOptions,array:e.mappedArray,setNewArray:e.setMappedArray,setSortMessage:e.setSortMessage,setAlertMessage:e.setAlertMessage,setShowAlert:e.setShowAlert})]}),Object(l.jsxs)("th",{children:["Title",Object(l.jsx)(f,{closeAllOptions:e.closeAllOptions,array:e.mappedArray,setNewArray:e.setMappedArray,setSortMessage:e.setSortMessage,setAlertMessage:e.setAlertMessage,setShowAlert:e.setShowAlert})]})]})}),Object(l.jsx)("tbody",{children:e.mappedArray.map((function(t){return Object(l.jsxs)("tr",{as:"button",onClick:function(){e.setDisplayId(t.id),e.handleDisplayedCard(t.id),console.log(t)},children:[Object(l.jsx)("th",{children:e.mappedArray.indexOf(t)+1}),Object(l.jsx)("th",{children:t.datePublished}),Object(l.jsx)("th",{children:t.timePublished}),Object(l.jsx)("th",{children:t.title}),Object(l.jsx)("th",{children:t.id})]},t.id)}))})]})})}},357:function(e,t,r){"use strict";r.r(t);var n=r(23),c=r(10),s=r(9),a=r(128),i=r(86),o=r(73),l=r(133),u=r(88),d=r(129),h=r(130),j=r(63),b=r(38),f=r(62),g=r(60),O=r(11);t.default=function(e){var t=Object(s.useState)([]),r=Object(c.a)(t,2),p=r[0],m=r[1],x=Object(s.useState)([]),y=Object(c.a)(x,2),A=y[0],v=y[1],S=Object(s.useState)(null),k=Object(c.a)(S,2),w=k[0],M=k[1],C=Object(s.useState)(0),D=Object(c.a)(C,2),$=D[0],T=D[1],N=Object(s.useState)(!1),E=Object(c.a)(N,2),L=E[0],R=E[1],I=Object(s.useState)(!1),P=Object(c.a)(I,2),B=P[0],F=P[1],U=Object(s.useState)(!1),G=Object(c.a)(U,2),Y=G[0],_=G[1],H=Object(s.useState)(!1),W=Object(c.a)(H,2),Z=W[0],z=W[1],J=Object(s.useState)(!1),V=Object(c.a)(J,2),q=V[0],K=V[1],Q=Object(s.useState)(!1),X=Object(c.a)(Q,2),ee=X[0],te=X[1],re=Object(s.useState)(!1),ne=Object(c.a)(re,2),ce=ne[0],se=ne[1],ae=Object(s.useState)(),ie=Object(c.a)(ae,2),oe=ie[0],le=ie[1],ue=Object(s.useState)(),de=Object(c.a)(ue,2),he=de[0],je=de[1],be=Object(s.useState)(!1),fe=Object(c.a)(be,2),ge=fe[0],Oe=fe[1],pe=Object(s.useState)(!0),me=Object(c.a)(pe,2),xe=me[0],ye=me[1],Ae=Object(s.useState)(!1),ve=Object(c.a)(Ae,2),Se=ve[0],ke=ve[1],we=function(){R(!1),se(!1),F(!1),_(!1),z(!1),K(!1),te(!1)};return Object(s.useEffect)((function(){p.length<1&&(M(e.trueArray),m(e.publishedArray))}),[e.trueArray,p.length,e.publishedArray,$]),Object(O.jsxs)(b.a,{fluid:!0,style:{marginBottom:"2rem"},children:[e.trueArray.map((function(e){return e.id===$?Object(O.jsx)(a.a,Object(n.a)({editMode:Se,toggleEditMode:ke},e),e.id):void 0})),Object(O.jsx)(i.a,{showAlert:ge,setShowAlert:Oe,alertMessage:xe}),L?Object(O.jsx)(d.a,{closeAllOptions:we,mappedArray:p,setMappedArray:m,setAlertMessage:ye,setShowAlert:Oe,setFilterMessage:le,filterMessage:oe}):Object(O.jsx)("p",{}),ce?Object(O.jsx)(h.a,{closeAllOptions:we,mappedArray:p,setMappedArray:m,setAlertMessage:ye,setShowAlert:Oe,setFilterMessage:le,filterMessage:oe}):Object(O.jsx)("p",{}),Y?Object(O.jsx)(f.a.Group,{children:Object(O.jsx)(o.default,{closeAllOptions:we,array:p,setNewArray:m,setAlertMessage:ye,setShowAlert:Oe,searchLocation:"title",setFilterMessage:le})}):Object(O.jsx)("p",{}),Z?Object(O.jsx)(f.a.Group,{children:Object(O.jsx)(o.default,{closeAllOptions:we,array:p,setNewArray:m,setAlertMessage:ye,setShowAlert:Oe,searchLocation:"article",setFilterMessage:le})}):Object(O.jsx)("p",{}),q?Object(O.jsx)(f.a.Group,{children:Object(O.jsx)(o.default,{closeAllOptions:we,array:p,setNewArray:m,setAlertMessage:ye,setShowAlert:Oe,searchLocation:"category",setFilterMessage:le})}):Object(O.jsx)("p",{}),ee?Object(O.jsx)(f.a.Group,{children:Object(O.jsx)(o.default,{closeAllOptions:we,array:p,setNewArray:m,setAlertMessage:ye,setShowAlert:Oe,searchLocation:"tags",setFilterMessage:le})}):Object(O.jsx)("p",{}),B?Object(O.jsxs)(f.a.Group,{children:[Object(O.jsx)(g.a,{onClick:function(){_(!Y),z(!1),K(!1),te(!1)},children:"Title"}),Object(O.jsx)(g.a,{onClick:function(){z(!Z),_(!1),K(!1),te(!1)},children:"Article"}),Object(O.jsx)(g.a,{onClick:function(){K(!q),_(!1),z(!1),te(!1)},children:"Category"}),Object(O.jsx)(g.a,{onClick:function(){te(!ee),K(!1),z(!1),_(!1)},children:"Tags"})]}):Object(O.jsx)("p",{}),Se?A.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(u.a,Object(n.a)({editMode:Se,toggleEditMode:ke},e),e.id)})})):Object(O.jsxs)(b.a,{style:{width:"100%"},children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(g.a,{onClick:function(){we(),R(!L)},children:"Date Filter"}),Object(O.jsx)(g.a,{onClick:function(){we(),se(!ce)},children:"Time Filter"}),Object(O.jsx)(g.a,{onClick:function(){we(),F(!B)},children:"Search Options"}),Object(O.jsx)("h4",{children:he}),Object(O.jsx)("h4",{children:oe})]}),Object(O.jsxs)("div",{style:{border:"2px dashed black",width:"100%"},children:[Object(O.jsx)("h6",{style:{textAlign:"right"},children:Object(O.jsx)(j.a,{style:{height:"2rem",width:"2rem"},onClick:function(){le(""),je(""),Oe(!1),we(),m(w),v([])}})}),Object(O.jsx)(l.a,{closeAllOptions:we,handleDisplayedCard:function(e){var t=w.filter((function(t){return t.id===e}));v(t),console.log("foundCard",t)},mappedArray:p,setMappedArray:m,setSortMessage:je,setDisplayId:T,setAlertMessage:ye,setShowAlert:Oe})]})]})]})}},65:function(e,t,r){"use strict";r(9);var n=r(79),c=r(39),s=r(11);t.a=function(e){return Object(s.jsx)("div",{children:e.title?Object(s.jsxs)(n.a,{style:{marginBottom:"1.5rem",paddingTop:".5rem",paddingBottom:".5rem",backgroundColor:"grey"},onClick:function(){var t,r;t=e.type,r=e.id,"drafts"===t?window.open("/read/draft/".concat(r)):"published"===t&&window.open("/read/published/".concat(r))},children:[Object(s.jsx)(n.a.Img,{style:{height:"10rem",width:"10rem",marginRight:"auto",marginLeft:"auto",marginBottom:"1rem"},src:e.image,alt:"".concat(e.title)}),Object(s.jsxs)("h2",{style:{textAlign:"center"},children:[e.title.length<35?e.title.toUpperCase():"".concat(e.title.substring(0,35).toUpperCase()," ...")," "]}),Object(s.jsx)("h5",{style:{textAlign:"center"},children:e.subtitle.length<30?e.subtitle.toUpperCase():"".concat(e.subtitle.substring(0,30).toUpperCase()," ...")}),Object(s.jsxs)(n.a.Text,{style:{textAlign:"right",paddingRight:"3px"},children:["By ",e.author," on ",e.datePublished]})]}):Object(s.jsx)(c.a,{})})}},71:function(e,t,r){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",c="second",s="minute",a="hour",i="day",o="week",l="month",u="quarter",d="year",h="date",j="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},O=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},p={s:O,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),c=r%60;return(t<=0?"+":"-")+O(n,2,"0")+":"+O(c,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),c=t.clone().add(n,l),s=r-c<0,a=t.clone().add(n+(s?-1:1),l);return+(-(n+(r-c)/(s?c-a:a-c))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:i,D:h,h:a,m:s,s:c,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",x={};x[m]=g;var y=function(e){return e instanceof k},A=function(e,t,r){var n;if(!e)return m;if("string"==typeof e)x[e]&&(n=e),t&&(x[e]=t,n=e);else{var c=e.name;x[c]=e,n=c}return!r&&n&&(m=n),n||!r&&m},v=function(e,t){if(y(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},S=p;S.l=A,S.i=y,S.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=A(e.locale,null,!0),this.parse(e)}var O=g.prototype;return O.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(b);if(n){var c=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],c,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],c,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},O.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},O.$utils=function(){return S},O.isValid=function(){return!(this.$d.toString()===j)},O.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},O.isAfter=function(e,t){return v(e)<this.startOf(t)},O.isBefore=function(e,t){return this.endOf(t)<v(e)},O.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(e,t){var r=this,n=!!S.u(t)||t,u=S.p(e),j=function(e,t){var c=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?c:c.endOf(i)},b=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,g=this.$M,O=this.$D,p="set"+(this.$u?"UTC":"");switch(u){case d:return n?j(1,0):j(31,11);case l:return n?j(1,g):j(0,g+1);case o:var m=this.$locale().weekStart||0,x=(f<m?f+7:f)-m;return j(n?O-x:O+(6-x),g);case i:case h:return b(p+"Hours",0);case a:return b(p+"Minutes",1);case s:return b(p+"Seconds",2);case c:return b(p+"Milliseconds",3);default:return this.clone()}},O.endOf=function(e){return this.startOf(e,!1)},O.$set=function(e,t){var r,o=S.p(e),u="set"+(this.$u?"UTC":""),j=(r={},r[i]=u+"Date",r[h]=u+"Date",r[l]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[s]=u+"Minutes",r[c]=u+"Seconds",r[n]=u+"Milliseconds",r)[o],b=o===i?this.$D+(t-this.$W):t;if(o===l||o===d){var f=this.clone().set(h,1);f.$d[j](b),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else j&&this.$d[j](b);return this.init(),this},O.set=function(e,t){return this.clone().$set(e,t)},O.get=function(e){return this[S.p(e)]()},O.add=function(n,u){var h,j=this;n=Number(n);var b=S.p(u),f=function(e){var t=v(j);return S.w(t.date(t.date()+Math.round(e*n)),j)};if(b===l)return this.set(l,this.$M+n);if(b===d)return this.set(d,this.$y+n);if(b===i)return f(1);if(b===o)return f(7);var g=(h={},h[s]=t,h[a]=r,h[c]=e,h)[b]||1,O=this.$d.getTime()+n*g;return S.w(O,this)},O.subtract=function(e,t){return this.add(-1*e,t)},O.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||j;var n=e||"YYYY-MM-DDTHH:mm:ssZ",c=S.z(this),s=this.$H,a=this.$m,i=this.$M,o=r.weekdays,l=r.months,u=function(e,r,c,s){return e&&(e[r]||e(t,n))||c[r].substr(0,s)},d=function(e){return S.s(s%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:S.s(i+1,2,"0"),MMM:u(r.monthsShort,i,l,3),MMMM:u(l,i),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,o,2),ddd:u(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:c};return n.replace(f,(function(e,t){return t||b[e]||c.replace(":","")}))},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(n,h,j){var b,f=S.p(h),g=v(n),O=(g.utcOffset()-this.utcOffset())*t,p=this-g,m=S.m(this,g);return m=(b={},b[d]=m/12,b[l]=m,b[u]=m/3,b[o]=(p-O)/6048e5,b[i]=(p-O)/864e5,b[a]=p/r,b[s]=p/t,b[c]=p/e,b)[f]||p,j?m:S.a(m)},O.daysInMonth=function(){return this.endOf(l).$D},O.$locale=function(){return x[this.$L]},O.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=A(e,t,!0);return n&&(r.$L=n),r},O.clone=function(){return S.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},g}(),w=k.prototype;return v.prototype=w,[["$ms",n],["$s",c],["$m",s],["$H",a],["$W",i],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),v.extend=function(e,t){return e.$i||(e(t,k,v),e.$i=!0),v},v.locale=A,v.isDayjs=y,v.unix=function(e){return v(1e3*e)},v.en=x[m],v.Ls=x,v.p={},v}()},73:function(e,t,r){"use strict";r.r(t);var n=r(23),c=r(0),s=r.n(c),a=r(4),i=r(10),o=r(9),l=r(60),u=r(78),d=r(62),h=r(38),j=r(64),b=r(65),f=r(11),g=function(e){var t=Object(o.useRef)(),r=Object(o.useRef)(),n=Object(o.useRef)(),c=Object(o.useRef)(),s=Object(o.useRef)(),a=e.setSearchLocation,i=function(e){switch(e){case"title":a("title"),t.current.checked=!0,n.current.checked=!1,r.current.checked=!1,c.current.checked=!1,s.current.checked=!1,console.log(e,t.current.checked);break;case"subtitle":a("subtitle"),r.current.checked=!0,t.current.checked=!1,n.current.checked=!1,c.current.checked=!1,s.current.checked=!1,console.log(e,r.current.checked);break;case"article":a("article"),n.current.checked=!0,t.current.checked=!1,r.current.checked=!1,c.current.checked=!1,s.current.checked=!1,console.log(e,n.current.checked);break;case"tags":a("tags"),s.current.checked=!0,t.current.checked=!1,n.current.checked=!1,r.current.checked=!1,c.current.checked=!1,console.log(e,s.current.checked);break;case"category":a("category"),c.current.checked=!0,t.current.checked=!1,n.current.checked=!1,r.current.checked=!1,s.current.checked=!1,console.log(e,c.current.checked);break;default:console.log("default")}};return Object(f.jsxs)(u.a,{variant:"tabs",style:{width:"90%",marginLeft:"auto",marginRight:"auto"},children:[Object(f.jsxs)(u.a.Item,{style:{cursor:"pointer",width:"auto",marginLeft:"1%",marginRight:"1%"},onClick:function(e){i(e.target.value)},children:[Object(f.jsx)(d.a.Check,{ref:t,type:"radio",id:"title",value:"title"}),Object(f.jsx)("h5",{htmlFor:"title",children:"Title"})]}),Object(f.jsxs)(u.a.Item,{style:{cursor:"pointer",width:"auto",marginLeft:"1%",marginRight:"1%"},onClick:function(e){i(e.target.value)},children:[Object(f.jsx)(d.a.Check,{ref:r,type:"radio",id:"subtitle",value:"subtitle"}),Object(f.jsx)("h5",{htmlFor:"subtitle",children:"SubTitle"})]}),Object(f.jsxs)(u.a.Item,{style:{cursor:"pointer",width:"auto",marginLeft:"1%",marginRight:"1%"},onClick:function(e){i(e.target.value)},children:[Object(f.jsx)(d.a.Check,{ref:n,type:"radio",id:"article",value:"article"}),Object(f.jsx)("h5",{htmlFor:"article",children:"Article"})]}),Object(f.jsxs)(u.a.Item,{style:{cursor:"pointer",width:"auto",marginLeft:"1%",marginRight:"1%"},onClick:function(e){i(e.target.value)},children:[Object(f.jsx)(d.a.Check,{ref:c,type:"radio",id:"category",value:"category"}),Object(f.jsx)("h5",{htmlFor:"category",children:"Category"})]}),Object(f.jsxs)(u.a.Item,{style:{cursor:"pointer",width:"auto",marginLeft:"1%",marginRight:"1%"},onClick:function(e){i(e.target.value)},children:[Object(f.jsx)(d.a.Check,{ref:s,type:"radio",id:"tags",value:"tags"}),Object(f.jsx)("h5",{htmlFor:"tags",children:"Tags"})]})]})},O=function(e){return Object(o.useEffect)((function(){console.log("search results props",e)}),[e]),e.resultsArray&&Object(f.jsx)("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"2rem"},children:e.resultsArray.map((function(t){return Object(f.jsx)(b.a,Object(n.a)({articleFrom:"homepage",type:"published"},t),e.resultsArray.indexOf(t))}))})};t.default=function(e){var t=Object(o.useState)(void 0),r=Object(i.a)(t,2),n=r[0],c=r[1],b=Object(o.useState)(!1),p=Object(i.a)(b,2),m=p[0],x=p[1],y=Object(o.useState)(void 0),A=Object(i.a)(y,2),v=A[0],S=A[1],k=Object(o.useState)(void 0),w=Object(i.a)(k,2),M=w[0],C=w[1],D=Object(o.useState)(!1),$=Object(i.a)(D,2),T=($[0],$[1]),N=Object(o.useState)(void 0),E=Object(i.a)(N,2),L=E[0],R=E[1],I=function(t,r){var n;switch(t){case"title":n=e.array.filter((function(e){return r&&e.title.includes(r)?e:void 0}));break;case"subtitle":n=e.array.filter((function(e){return r&&e.subtitle.includes(r)?e:void 0}));break;case"article":n=e.array.filter((function(e){if(r&&e.article.includes(r))return e}));break;case"category":n=e.array.filter((function(e){if(r&&e.category&&e.category.includes(r.toUpperCase()))return e}));break;case"tags":n=e.array.filter((function(e){if(r&&e.tags&&e.tags.includes(r.toUpperCase()))return e}));break;default:console.log("searchlocation has no value case",t)}return console.log("specialArray",n),n},P=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(v,n);case 2:if(t=e.sent,v){e.next=9;break}C("Select a search location"),R(""),T(!0),e.next=43;break;case 9:if(n&&"undefined"!==!n){e.next=16;break}return C("Type a search term"),R(""),T(!0),e.abrupt("return");case 16:if(t){e.next=24;break}return C("NO RESULTS FOUND. PLEASE TRY ANOTHER TERM. ALSO CHECK FOR SPELLING AND EXTRA SPACES"),R(""),x([]),T(!0),e.abrupt("return");case 24:if(t){e.next=31;break}return C("array doesnt exist. try again or contact Admin"),R(""),T(!0),e.abrupt("return");case 31:if(!t){e.next=39;break}return T(!1),C(""),x(t),R("Results for ".concat(n.toUpperCase()," in ").concat(v.toUpperCase())),e.abrupt("return");case 39:return C("SPECIAL CASE. unknown issue. SPECIAL CASE"),R(""),T(!0),e.abrupt("return");case 43:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(h.a,{style:{marginBottom:"2rem",marginTop:"1rem"},children:[Object(f.jsx)("h2",{children:M}),Object(f.jsx)(d.a.Label,{style:{width:"50% ",textAlign:"center",fontSize:"2rem",marginTop:"0px"},children:void 0===v?"Select Search location":""}),Object(f.jsx)(g,{setSearchLocation:S}),Object(f.jsxs)(d.a.Group,{style:{width:"100%"},children:[Object(f.jsx)(u.a,{}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(d.a.Control,{style:{width:"60%",marginLeft:"5%",marginRight:"0px"},type:"text",placeholder:"Search VIA ".concat(v," text"),onChange:function(e){c(e.target.value)}}),Object(f.jsx)(l.a,{style:{width:"25%",marginLeft:"0px",marginRight:"auto"},onClick:function(){P()},children:"Search"})]})]}),Object(f.jsx)("h6",{style:{textAlign:"center"},children:L}),Object(f.jsx)(O,{resultsArray:m})]})}},86:function(e,t,r){"use strict";r(9);var n=r(131),c=r(11);t.a=function(e){return e.showAlert?Object(c.jsxs)(n.a,{variant:"danger",onClose:function(){return e.setShowAlert(!1)},dismissible:!0,children:[Object(c.jsx)(n.a.Heading,{children:"Oh snap!"}),Object(c.jsx)("p",{children:e.alertMessage})]}):Object(c.jsx)("p",{})}},88:function(e,t,r){"use strict";var n=r(10),c=r(9),s=r(38),a=r(60),i=r(62),o=r(64),l=r(71),u=r.n(l),d=r(33),h=r(76),j=r.n(h),b=r(11);t.a=function(e){var t=Object(c.useRef)(),r=Object(c.useState)(!1),l=Object(n.a)(r,2),h=l[0],f=l[1],g=Object(c.useState)(!1),O=Object(n.a)(g,2),p=O[0],m=O[1],x=Object(c.useState)(!1),y=Object(n.a)(x,2),A=y[0],v=y[1],S=Object(c.useState)(""),k=Object(n.a)(S,2),w=k[0],M=k[1],C=Object(c.useState)(!1),D=Object(n.a)(C,2),$=D[0],T=D[1],N=Object(c.useState)(""),E=Object(n.a)(N,2),L=E[0],R=E[1],I=Object(c.useState)(!1),P=Object(n.a)(I,2),B=P[0],F=P[1],U=Object(c.useState)(""),G=Object(n.a)(U,2),Y=G[0],_=G[1],H=Object(c.useState)(!1),W=Object(n.a)(H,2),Z=W[0],z=W[1],J=Object(c.useState)(""),V=Object(n.a)(J,2),q=V[0],K=V[1],Q=Object(c.useState)(""),X=Object(n.a)(Q,2),ee=X[0],te=X[1],re=u()().format("hh:mm:ss A"),ne=u()().format("hhmmss"),ce={id:e.id,title:e.title,subtitle:e.subtitle,image:e.image,article:e.article,timePublished:e.timePublished,datePublished:e.datePublished,author:e.author,sortableDate:e.sortableDate,sortableTime:e.sortableTime,category:e.category,tags:e.tags,type:e.type},se={id:e.id,title:w||e.title,subtitle:L||e.subtitle,image:Y||e.image,article:q||e.article,timePublished:e.timePublished,datePublished:e.datePublished,author:e.author,sortableDate:e.sortableDate,sortableTime:e.sortableTime,dateUpdated:u()().format("M/DD/YYYY"),timeUpdated:u()().format("hh:mm A"),sortableUpdateTime:function(){if(re.includes("A")&&"1"===re[0]&&"2"===re[1]){var e=ne.replace("12","00");return Number(e)}return re.includes("P")&&"1"!==re[0]?Number(ne)+12e4:(re.includes("A")&&re[0],Number(ne))}(),sortableUpdateDate:u()().valueOf(),category:e.category,tags:e.tags,type:e.type};return Object(c.useEffect)((function(){te("Click Any Section To Open Edit View"),console.log("baseArticle",ce)}),[]),Object(b.jsxs)(s.a,{style:{textAlign:"center"},children:[Object(b.jsx)("h1",{children:ee}),Object(b.jsxs)(s.a,{style:{marginBottom:"1.5rem",borderBottom:"4px solid black"},children:[Object(b.jsx)(a.a,{variant:"primary",onClick:function(){f(!0),m("submit")},children:"Submit All Changes"}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){f(!0),m("delete")},children:"Delete Article"}),Object(b.jsx)(a.a,{variant:"success",onClick:function(){e.toggleEditMode(!1)},children:"Go Back"}),h&&p?Object(b.jsxs)("div",{style:{outline:"2px solid black",marginTop:"1.5rem",paddingBottom:"1rem"},children:[Object(b.jsxs)("h1",{children:["Are you Sure you want to ",p,"?"]}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){f(!1)},children:"Close Options"}),Object(b.jsx)(a.a,{variant:"success",onClick:function(){!function(e,t,r){switch(e){case"submit":Object(d.g)(t.type,t.author,t.id,t);break;case"delete":Object(d.b)(t.type,t.author,t.id);break;default:alert("no decision type")}}(p,se,e.id),te("SUBMITTING....YOUR...CHANGES"),setTimeout((function(){window.location.reload(!0)}),[2e3])},children:"delete"!==p?"Submit Article Update":"Delete Article"})]}):Object(b.jsx)("p",{})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:se.image,alt:"beauty",style:{cursor:"pointer",height:"10rem",width:"10rem"},onClick:function(){F(!B)}})}),B?Object(b.jsxs)(o.a,{style:{outline:"2px solid black",paddingTop:"1rem",paddingBottom:"1rem",marginTop:"1rem",marginBottom:"1rem"},children:[Object(b.jsx)("div",{style:{width:"50%"},children:Object(b.jsxs)(i.a,{style:{width:"100%",marginBottom:".5rem"},onSubmit:function(e){e.preventDefault(),F(!1)},children:[Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Upload Image"}),Object(b.jsx)(i.a.Control,{type:"file",ref:t,onChange:function(e){if(e.preventDefault(),t.current){var r=t.current.files[0];console.log("current exists",r);var n=new FileReader;n.readAsDataURL(r),n.onload=function(){console.log("filereader result",n.result),_(n.result)},n.onerror=function(){console.log("fileReader error",n.error)},console.log("current exists")}else console.log("no current"),console.log("no current",t.current)}})]}),Object(b.jsx)(a.a,{variant:"warning",onClick:function(e){e.preventDefault(),_(ce.image)},children:"Reset"}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){return F(!1)},children:"Close"})]})}),Object(b.jsx)("div",{style:{width:"50%"},children:Object(b.jsxs)(i.a,{style:{width:"100%",marginBottom:".5rem"},onSubmit:function(e){e.preventDefault(),F(!1)},children:[Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Paste Image URL"}),Object(b.jsx)(i.a.Control,{type:"text",placeholder:"PASTE URL",onChange:function(e){_(e.target.value)}})]}),Object(b.jsx)(a.a,{variant:"warning",onClick:function(e){e.preventDefault(),_(ce.image)},children:"Reset"}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){return F(!1)},children:"Close"})]})})]}):Object(b.jsx)("p",{}),Object(b.jsxs)("h1",{style:{cursor:"pointer"},onClick:function(){v(!A)},children:[se.title,"  "]}),A?Object(b.jsxs)(i.a.Group,{style:{outline:"2px solid black",paddingTop:"1rem",paddingBottom:"1rem",marginTop:"1rem",marginBottom:"1rem"},children:[Object(b.jsx)(i.a.Label,{children:Object(b.jsx)("h5",{children:"Edit Title"})}),Object(b.jsxs)(i.a,{onSubmit:function(e){e.preventDefault(),v(!1),console.log("new title",w,"updatedArticle",se)},children:[Object(b.jsx)(i.a.Control,{type:"text",value:se.title,onChange:function(e){e.preventDefault(),M(e.target.value)}}),Object(b.jsx)(a.a,{variant:"warning",onClick:function(e){e.preventDefault(),M(ce.title)},children:"Reset"}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){return v(!1)},children:"Close"})]})]}):Object(b.jsx)("p",{}),Object(b.jsx)("h3",{style:{cursor:"pointer",textAlign:"left"},onClick:function(){T(!$)},children:se.subtitle}),$?Object(b.jsxs)(i.a.Group,{style:{outline:"2px solid black",paddingTop:"1rem",paddingBottom:"1rem",marginTop:"1rem",marginBottom:"1rem"},children:[Object(b.jsx)(i.a.Label,{children:Object(b.jsx)("h5",{children:"Edit Subtitle"})}),Object(b.jsxs)(i.a,{onSubmit:function(e){e.preventDefault(),T(!1),console.log("new subtitle",L,"updatedArticle",se)},children:[Object(b.jsx)(i.a.Control,{type:"text",value:se.subtitle,onChange:function(e){e.preventDefault(),R(e.target.value)}}),Object(b.jsx)(a.a,{variant:"warning",onClick:function(e){e.preventDefault(),R(ce.subtitle)},children:"Reset"}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){return T(!1)},children:"Close"})]})]}):Object(b.jsx)("p",{}),Object(b.jsxs)("div",{style:{borderBottom:"3px dashed black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:"2rem",marginTop:"2rem"},children:[Object(b.jsx)("p",{style:{width:"50%",textAlign:"left"},children:e.datePublished}),Object(b.jsx)("p",{style:{width:"50%",textAlign:"right"},children:e.timePublished})]}),Object(b.jsxs)(s.a,{children:[Z?Object(b.jsxs)(i.a.Group,{style:{outline:"2px solid black",paddingTop:"1rem",paddingBottom:"1rem",marginTop:"1rem",marginBottom:"1rem"},children:[Object(b.jsx)(i.a.Label,{children:Object(b.jsx)("h5",{children:"Edit Article"})}),Object(b.jsxs)(i.a,{onSubmit:function(e){e.preventDefault(),z(!1),console.log("updatedArticle",se)},children:[Object(b.jsx)(i.a.Control,{type:"text",value:se.article,onChange:function(e){K(e.target.value)}}),Object(b.jsx)(a.a,{variant:"warning",onClick:function(){K(ce.article)},children:"Reset"}),Object(b.jsx)(a.a,{variant:"danger",onClick:function(){return z(!1)},children:"Close"})]})]}):Object(b.jsx)("p",{}),Object(b.jsx)("h5",{style:{cursor:"pointer"},onClick:function(){z(!Z)},children:j()(se.article)})]})]})}}}]);
//# sourceMappingURL=11.612601eb.chunk.js.map