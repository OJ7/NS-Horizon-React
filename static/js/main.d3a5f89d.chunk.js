(this["webpackJsonpns-horizon-react"]=this["webpackJsonpns-horizon-react"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Ori and the Will of the Wisps","coverImgUrl":"https://cdn.dekudeals.com/images/53e03206d705bb518ef0304c7920c71ed74cb5d5/w500.jpg"},{"title":"Rocket League","coverImgUrl":"https://cdn.dekudeals.com/images/093e6a1560032400d6fda792b21aeb1cad9f2f06/w500.jpg"},{"title":"Ori and the Blind Forest","coverImgUrl":"https://cdn.dekudeals.com/images/c4525d01f28b43f119f5559d9a82ef7dcd2adf05/w500.jpg"},{"title":"Super Nintendo Entertainment System - Nintendo Switch Online","coverImgUrl":"https://cdn.dekudeals.com/images/a4e98108beec3c8e12a112b1a4a7779dff90b9a6/w500.jpg"},{"title":"Cuphead","coverImgUrl":"https://cdn.dekudeals.com/images/8830358615efa91dca003d4ab04a23d9841aa573/w500.jpg"},{"title":"The Legend of Zelda: Breath of the Wild","coverImgUrl":"https://cdn.dekudeals.com/images/4851cf16e603d49d660fdfc099ae5f9d8cb172cd/w500.jpg"},{"title":"Hollow Knight","coverImgUrl":"https://cdn.dekudeals.com/images/ca9155937b96b519944c98858465aa3fd48f3c9b/w500.jpg"},{"title":"Celeste","coverImgUrl":"https://cdn.dekudeals.com/images/b854ee7f7be4073e06bac3f1fa194ca4b1dabdac/w500.jpg"},{"title":"Dead Cells","coverImgUrl":"https://cdn.dekudeals.com/images/2e9e08780227ea72b6a8cf222720814f8865b34d/w500.jpg"},{"title":"Nintendo Entertainment System - Nintendo Switch Online","coverImgUrl":"https://cdn.dekudeals.com/images/a6858feabf0d168bb7ec9b43f8038cea59813c58/w500.jpg"},{"title":"Hades","coverImgUrl":"https://cdn.dekudeals.com/images/f36b773eddb483a30c39549ee7aa6a964a2a5546/w500.png"},{"title":"Super Mario Maker 2","coverImgUrl":"https://cdn.dekudeals.com/images/ac91ed1fbc4c462d07b6fd4d95411ef04cc76494/w500.jpg"},{"title":"Untitled Goose Game","coverImgUrl":"https://cdn.dekudeals.com/images/9221617025790fab3da76acb6fd8d9819c03ac2f/w500.jpg"},{"title":"Super Mario Party","coverImgUrl":"https://cdn.dekudeals.com/images/4b3b5cc018bf35d7edbf079576565bcf705fac23/w500.jpg"},{"title":"Snipperclips \u2013 Cut it out, together!","coverImgUrl":"https://cdn.dekudeals.com/images/fb2aee35f3148d5d2ea964a7364a7f894526f62e/w500.jpg"},{"title":"Golf Story","coverImgUrl":"https://cdn.dekudeals.com/images/a7e8ab3ff9b9052ac3e26f511e9907f953ea2963/w500.jpg"}]')},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(8),i=n.n(s),r=(n(16),n(17),n(18),n(3)),o=n(4),l=n(6),d=n(5),u=n(9),m=n(10),j=(n(19),n(1)),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={isHovering:!1},c}return Object(o.a)(n,[{key:"setHoverState",value:function(e){this.setState({isHovering:e})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"Profile-button-item",children:[Object(j.jsx)("span",{className:"Button-container",onMouseEnter:function(){return e.setHoverState(!0)},onMouseLeave:function(){return e.setHoverState(!1)},children:Object(j.jsx)("img",{src:this.props.profile.imgUrl,className:"Profile-img",alt:"profile"})}),Object(j.jsxs)("p",{className:"Button-title"+(this.state.isHovering?"":" hidden"),children:[this.props.profile.name,"'s Page"]})]})}}]),n}(a.a.Component),f=(n(21),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={profiles:[{name:"OJ",imgUrl:"https://avatars.githubusercontent.com/u/5333243?v=4"},{name:"React",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png"}],time:"",wifiConnected:!0,batteryPercent:99},c}return Object(o.a)(n,[{key:"updateTime",value:function(){this.setState({time:(new Date).toLocaleTimeString("en",{hour:"numeric",hour12:!0,minute:"numeric"})})}},{key:"componentDidMount",value:function(){this.updateTime()}},{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.updateTime()}),2e4)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsx)("div",{className:"Profile-buttons",children:this.state.profiles.map((function(e){return Object(j.jsx)(b,{profile:e})}))}),Object(j.jsxs)("div",{className:"System-status",children:[Object(j.jsx)("p",{className:"Status-icon",children:this.state.time}),this.state.wifiConnected&&Object(j.jsx)("p",{className:"Status-icon icon",children:Object(j.jsx)(u.a,{})}),Object(j.jsxs)("p",{className:"Status-icon icon",children:[this.state.batteryPercent," % ",Object(j.jsx)(m.a,{})]})]})]})}}]),n}(a.a.Component)),h=(n(22),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={isHovering:!1},c}return Object(o.a)(n,[{key:"setHoverState",value:function(e){this.setState({isHovering:e})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"GameItem",children:[Object(j.jsx)("p",{className:"Game-title"+(this.state.isHovering?"":" hidden"),children:this.props.game.title}),Object(j.jsx)("div",{className:"Game-logo",onMouseEnter:function(){return e.setHoverState(!0)},onMouseLeave:function(){return e.setHoverState(!1)},children:Object(j.jsx)("img",{src:this.props.game.coverImgUrl,className:"Logo",alt:"logo"})})]})}}]),n}(a.a.Component)),p=(n(23),n(11)),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={games:p},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Game-scroll",children:Object(j.jsxs)("div",{className:"Scroll-box",children:[Object(j.jsx)("div",{className:"Pre-game-scroll"}),this.state.games.map((function(e){return Object(j.jsx)(h,{game:e})})),Object(j.jsx)("div",{className:"Post-game-scroll"})]})})}}]),n}(a.a.Component);n(24);var g=function(){return Object(j.jsxs)("div",{className:"Footer",children:[Object(j.jsx)("div",{className:"Controller-container",children:Object(j.jsx)("p",{children:" Controller "})}),Object(j.jsxs)("div",{className:"Actions-container",children:[Object(j.jsx)("p",{children:" Options "}),Object(j.jsx)("p",{children:" Start "})]})]})},O=(n(25),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={isHovering:!1},c}return Object(o.a)(n,[{key:"setHoverState",value:function(e){this.setState({isHovering:e})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"Menu-button-item",children:[Object(j.jsx)("span",{className:"Button-container",onMouseEnter:function(){return e.setHoverState(!0)},onMouseLeave:function(){return e.setHoverState(!1)}}),Object(j.jsx)("p",{className:"Button-title"+(this.state.isHovering?"":" hidden"),children:this.props.button.title})]})}}]),n}(a.a.Component)),x=(n(26),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={buttons:[{title:"Nintendo Switch Online",color:""},{title:"News",color:""},{title:"Nintendo eShop",color:""},{title:"Album",color:""},{title:"Controllers",color:""},{title:"System Settings",color:""},{title:"Sleep Mode",color:""}]},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Buttons-toolbar",children:this.state.buttons.map((function(e){return Object(j.jsx)(O,{button:e})}))})}}]),n}(a.a.Component));var S=function(){return Object(j.jsxs)("div",{className:"Home",children:[Object(j.jsx)(f,{}),Object(j.jsx)(v,{}),Object(j.jsx)(x,{}),Object(j.jsx)(g,{})]})};var N=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"Ns-container dark",children:Object(j.jsx)(S,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),k()}],[[27,1,2]]]);
//# sourceMappingURL=main.d3a5f89d.chunk.js.map