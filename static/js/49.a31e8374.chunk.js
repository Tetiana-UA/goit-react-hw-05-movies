"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[49],{713:function(e,t,r){r.d(t,{$w:function(){return l},Pg:function(){return u},Wf:function(){return p},Xj:function(){return d},z5:function(){return o}});var n=r(861),a=r(757),s=r.n(a),i=r(294),c="9d0df20d0e68b9609d989d5d76848891",o=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:c,query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return r=e.sent,console.log(r.data.results),e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},49:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u=r(87),p=r(713),l={wrapper:"movie-details_wrapper__0SDlk",movieDetails:"movie-details_movieDetails__LFx8D",button:"movie-details_button__vry-T",title:"movie-details_title__0HjVA",additionalLink:"movie-details_additionalLink__j0-ZW"},d=r(184),v=function(){var e,t=(0,c.useState)(),r=(0,a.Z)(t,2),s=r[0],v=r[1],h=(0,c.useState)(!1),m=(0,a.Z)(h,2),f=m[0],x=m[1],_=(0,c.useState)(null),j=(0,a.Z)(_,2),w=j[0],g=j[1],k=(0,o.UO)().id,b=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",Z=(0,o.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,p.Pg)(k);case 4:t=e.sent,v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);return(0,d.jsxs)("div",{children:[f&&(0,d.jsx)("p",{children:"...Loading"}),w&&(0,d.jsxs)("p",{className:l.error,children:["Error: ",w]}),(0,d.jsx)("button",{onClick:function(){return Z(b)},type:"button",className:l.button,children:"Go back"}),s&&(0,d.jsxs)("div",{className:l.wrapper,children:[(0,d.jsxs)("div",{className:l.movieDetails,children:[(0,d.jsx)("div",{className:l.picture,children:(0,d.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500/".concat(s.poster_path):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",width:250,alt:"poster"})}),(0,d.jsxs)("div",{className:l.information,children:[s&&(0,d.jsx)("h2",{className:l.title,children:s.title}),s.vote_average>0&&(0,d.jsxs)("p",{children:["User Score: ",s.vote_average,"%"]}),s.overview&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:s.overview})]}),s.genres&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("ul",{children:s.genres.map((function(e){var t=e.id,r=e.name;return(0,d.jsx)("li",{children:r},t)}))})]})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{className:l.additionalLink,children:[(0,d.jsx)(u.rU,{to:"cast",state:{from:b},children:"Cast"}),(0,d.jsx)(u.rU,{to:"reviews",state:{from:b},children:"Reviews"})]}),(0,d.jsx)(o.j3,{})]})]})]})},h="movie-details-page_wrapper__F9OaZ",m=function(){return(0,d.jsx)("div",{className:h,children:(0,d.jsx)(v,{})})}}}]);
//# sourceMappingURL=49.a31e8374.chunk.js.map