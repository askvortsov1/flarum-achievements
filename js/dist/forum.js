module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e){t.exports=flarum.core.compat.Model},,function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(3),a=n(2),r=n(0),i=n.n(r),c=(n(12),function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e}(i.a));Object(o.a)(c.prototype,{id:i.a.attribute("id"),name:i.a.attribute("name"),description:i.a.attribute("description"),computation:i.a.attribute("computation"),points:i.a.attribute("points"),rectangle:i.a.attribute("rectangle"),image:i.a.attribute("image"),new:i.a.attribute("new"),active:i.a.attribute("active")})},,function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var o=n(0),a=n.n(o),r=n(5),i=n.n(r),c=n(8),s=n(3),u=n(2),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(u.a)(e,t),e}(a.a);function m(){i.a.prototype.achievements=a.a.hasMany("achievements","achievement_user"),i.a.prototype.achievement_user=a.a.hasMany("achievement_user"),app.store.models.achievements=c.a,app.store.models.achievement_user=p}Object(s.a)(p.prototype,{achievement_id:a.a.attribute("achievement_id"),user_id:a.a.attribute("user_id"),new:a.a.attribute("new")})},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["common/Application"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},,,,,,function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["components/PostUser"]},function(t,e){t.exports=flarum.core.compat["components/ModalManager"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/PostEdited"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,e,n){"use strict";n.r(e);var o=n(11),a=n(14),r=n.n(a),i=(n(22),n(23),n(24),n(0),n(5),n(25),n(26),n(8),n(15)),c=n.n(i),s=n(2),u=n(13),p=n.n(u),l=n(6),f=n.n(l),d=n(7),h=n.n(d),v=n(4),b=n.n(v),g=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var n=e.prototype;return n.title=function(){return p.a.translator.trans("malago-achievements.forum.new_achievement_title")},n.oninit=function(e){t.prototype.oninit.call(this,e)},n.fields=function(){for(var t=new h.a,e=0;e<this.attrs.achievements.length;e++){var n=this.attrs.achievements[e].rectangle.split(","),o="background:url("+this.attrs.achievements[e].image+");                background-position:-"+n[0]+"px -"+n[1]+"px;                height:"+n[2]+"px;                width:"+n[3]+"px;";t.add("image"+e,m("div",{className:"Form-group"},m("span",{class:"Badge Achievement",style:o})),-10),t.add("name"+e,m("div",{className:"Form-group"},m("h1",null,this.attrs.achievements[e].name)),-10),t.add("description"+e,m("div",{className:"Form-group"},m("h3",null,this.attrs.achievements[e].description)),-10)}return t.add("close",m("div",{className:"NewAchievementModal--Button"},b.a.component({type:"button",className:"Button Button--primary",onclick:this.hide.bind(this)},p.a.translator.trans("malago-achievements.forum.new_achievement_close"))),-10),t},n.footer=function(){return null},n.content=function(){return this.loading?m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"container"},m(LoadingIndicator,null)))):m("div",{className:"Modal-body"},m("div",{className:"Modal--New-Achievement"},this.fields().toArray()))},e}(f.a),x=(n(27),n(16)),y=n.n(x),_=n(10).default;app.initializers.add("malago-achievements",(function(t){_(),Object(o.extend)(r.a.prototype,"oncreate",(function(e){var n="",o=0;this.attrs.post.data.attributes.isHidden||(this.attrs.post.data.attributes.achievements.forEach((function(t,e){var a=t.rectangle.split(","),r="background:url("+t.image+");        background-position:-"+a[0]+"px -"+a[1]+"px;        height:"+a[2]+"px;        width:"+a[3]+"px;        margin: -"+(a[3]/4-4)+"px;";n+="<span class='Badge Achievement' style='"+r+"' data-toggle='tooltip' title='"+t.name+"'></span>",o+=t.points})),n+="<span class='Achievement--Points' data-toggle='tooltip' title='"+t.translator.trans("malago-achievements.forum.achievement_points")+"'>"+o+"</span>",$(this.element).append(n),$(".Achievement").tooltip(),$(".Achievement--Points").tooltip())})),Object(o.extend)(c.a.prototype,"request",(function(e){e&&e.then((function(e){void 0!==e.new_achievements&&null!==e.new_achievements&&e.new_achievements.length>0&&t.modal.show(g,{achievements:e.new_achievements})}))})),Object(o.extend)(y.a.prototype,"oncreate",(function(e){void 0!==t.session.user&&setTimeout((function(){var e=t.session.user.achievements();if(null!=e&&e.length>0){for(var n=[],o=0;o<e.length;o++)1==e[o].data.attributes.new&&(n.push(e[o].data.attributes),e[o].save({new:0,user_id:t.session.user.data.id}));n.length>0&&t.modal.show(g,{achievements:n})}}),1e3)}))}))}]);
//# sourceMappingURL=forum.js.map