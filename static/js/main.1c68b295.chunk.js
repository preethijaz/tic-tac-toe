(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(10),l=n.n(s),r=(n(18),n(11)),d=n(12),u=n(4),j=n(5),o=n(7),h=n(6),v=(n(9),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.value!==this.value}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.onClick,c=e.index;return Object(a.jsx)("span",{className:"cell",onClick:function(){return n(c)},children:t})}}]),n}(i.a.Component)),b=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handle=function(e){var t=a.state,n=t.player,c=t.result,i=t.data;if(!c&&!i[e]){var s=Object(d.a)(i);s[e]=n;var l="X"===n?"O":"X",r=a.findResult(s);r?r="Winner:"+r:s.includes(void 0)||(r="Match Drawn"),a.setState({data:s,player:l,result:r})}},a.findResult=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(r.a)(t[n],3),c=a[0],i=a[1],s=a[2];if(e[c]&&e[c]===e[i]&&e[c]===e[s])return e[c]}},a.state={player:"X",data:new Array(9).fill(),result:null},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.result,c=e.player;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("span",{className:"content",children:n||"Player:"+c}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(v,{value:t[0],onClick:this.handle,index:0}),Object(a.jsx)(v,{value:t[1],onClick:this.handle,index:1}),Object(a.jsx)(v,{value:t[2],onClick:this.handle,index:2})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(v,{value:t[3],onClick:this.handle,index:3}),Object(a.jsx)(v,{value:t[4],onClick:this.handle,index:4}),Object(a.jsx)(v,{value:t[5],onClick:this.handle,index:5})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(v,{value:t[6],onClick:this.handle,index:6}),Object(a.jsx)(v,{value:t[7],onClick:this.handle,index:7}),Object(a.jsx)(v,{value:t[8],onClick:this.handle,index:8})]})]})}}]),n}(i.a.Component);var O=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h2",{children:"Tic-Tac-Toe "})})};l.a.render(Object(a.jsxs)(i.a.StrictMode,{children:[Object(a.jsx)(O,{}),Object(a.jsx)(b,{})]}),document.getElementById("root"))},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.1c68b295.chunk.js.map