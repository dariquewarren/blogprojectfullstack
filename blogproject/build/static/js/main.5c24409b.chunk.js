(this.webpackJsonpblogproject=this.webpackJsonpblogproject||[]).push([[5],{18:function(e,t,r){"use strict";r(0);var a=r(14),n=r(2);t.a=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(a.a,{style:{height:"30rem",textAlign:"center",fontSize:"5rem"},children:"Getting your data ..."})})}},26:function(e,t,r){},28:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(17),s=r.n(c),l=(r(26),r(9)),o=r.n(l),i=r(20),u=r(15),j=r(3),b=(r(28),r(19)),h=r(1),O=r(18),d=r(2),g=Object(a.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(4),r.e(7),r.e(12)]).then(r.bind(null,329))})),f=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(3),r.e(11),r.e(13)]).then(r.bind(null,330))})),y=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(16),r.e(15)]).then(r.bind(null,331))})),x=Object(a.lazy)((function(){return r.e(17).then(r.bind(null,332))})),S=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(9)]).then(r.bind(null,333))})),p=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(10)]).then(r.bind(null,334))})),A=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(4),r.e(14)]).then(r.bind(null,336))}));var m=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)("Darique Tester"),s=Object(j.a)(c,2),l=s[0],m=(s[1],Object(a.useState)(!1)),v=Object(j.a)(m,2),w=v[0],M=v[1],P=Object(a.useState)(!1),k=Object(j.a)(P,2),L=k[0],z=k[1],C=Object(a.useState)(void 0),D=Object(j.a)(C,2),F=D[0],T=D[1],B=Object(a.useState)(""),E=Object(j.a)(B,2),I=E[0],J=E[1],q=Object(a.useState)([]),G=Object(j.a)(q,2),H=G[0],K=G[1],N=Object(a.useState)([]),Q=Object(j.a)(N,2),R=Q[0],U=Q[1],V=Object(a.useState)([]),W=Object(j.a)(V,2),X=W[0],Y=W[1],Z=Object(a.useState)([]),$=Object(j.a)(Z,2),_=$[0],ee=$[1],te=function(){var e=Object(u.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.map((function(e){return e.category})),e.next=3,r.flat();case 3:a=e.sent,n=Object(i.a)(new Set(a)),console.log("flatArray",a),console.log("setArray",n),console.log("changedArray",r),ee(n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re={backgroundColor:"#212121",color:"whitesmoke"},ae={backgroundColor:"whitesmoke",color:"#212121"};return Object(a.useEffect)((function(){H.length<1?fetch("/published/all").then((function(e){return e.json()})).then((function(e){return K(e.realData),U(e.realData),e.realData})).then((function(e){fetch("/drafts/all").then((function(e){return e.json()})).then((function(e){return Y(e.realData),e.realData})).then((function(e){console.log("draftsArray",X)})),te(e)})):console.log("true array already exists")}),[H.length,X,R]),Object(d.jsx)("div",{style:r?re:ae,children:Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(O.a,{}),children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(f,{showSearch:L,toggleSearch:z,toggleLightMode:n,lightMode:r,lightModeStyle:re,darkModeStyle:ae,searchLocation:F,setSearchLocation:T,filterMessage:I,setFilterMessage:J,setCategorySelected:M,trueArray:H,setPublishedArray:U,categoryArray:_}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{exact:!0,path:"/",element:Object(d.jsx)(y,{searchLocation:F,setSearchLocation:T,filterMessage:I,setFilterMessage:J,categorySelected:w,setCategorySelected:M,publishedArray:R,showSearch:L,toggleSearch:z,categoryArray:_,setCategoryArray:ee,trueArray:H,author:l})}),Object(d.jsx)(h.a,{exact:!0,path:"/write",element:Object(d.jsx)(g,{articleAuthor:l})}),Object(d.jsx)(h.a,{exact:!0,path:"/all/drafts",element:Object(d.jsx)(S,{articleAuthor:l,trueArray:H,setTrueArray:K,draftsArray:X,setDraftsArray:Y})}),Object(d.jsx)(h.a,{exact:!0,path:"/homepage",element:Object(d.jsx)(y,{searchLocation:F,setSearchLocation:T,filterMessage:I,setFilterMessage:J,trueArray:H,author:l,showSearch:L,toggleSearch:z})}),Object(d.jsx)(h.a,{exact:!0,path:"/all/published",element:Object(d.jsx)(p,{articleAuthor:l,trueArray:H,setTrueArray:K,publishedArray:R,setPublishedArray:U})}),Object(d.jsx)(h.a,{exact:!0,path:"/read/published/:id",element:Object(d.jsx)(A,{publishedArray:R,articleAuthor:l})})]}),Object(d.jsx)(x,{})]})})})},v=function(e){e&&e instanceof Function&&r.e(18).then(r.bind(null,335)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),v()}},[[30,6,8]]]);
//# sourceMappingURL=main.5c24409b.chunk.js.map