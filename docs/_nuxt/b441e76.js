(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,e,n){"use strict";var o=n(286);e.a=o.a},296:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("1cdf85c7",content,!0,{sourceMap:!1})},297:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-application ol,.v-application ul{padding-left:0;list-style-position:inside}@media only screen and (min-width:960px){.detail-val ul{list-style-position:outside}}.mw720{max-width:720px}.mw508{max-width:508px}.container{max-width:1080px}.transparent-body{background:transparent}.grey-color{color:rgba(48,54,51,.5)}.green-color{color:#3bba6c}.quote{border-left:2px solid #303633;padding:8px 0 8px 24px;font-style:italic}.arrow-container{width:40px}@-webkit-keyframes downarrow{0%{-webkit-transform:translateY(0);opacity:.6}to{-webkit-transform:translateY(.4em);opacity:1}}.arrow-down{-webkit-animation:downarrow 1s ease-in-out infinite alternate}.above-the-fold{height:calc(100vh - 56px);max-height:1000px}.theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=e},298:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2fba213c",content,!0,{sourceMap:!1})},299:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-application ol,.v-application ul{padding-left:0;list-style-position:inside}@media only screen and (min-width:960px){.detail-val ul{list-style-position:outside}}.mw720{max-width:720px}.mw508{max-width:508px}.container{max-width:1080px}.transparent-body{background:transparent}.grey-color{color:rgba(48,54,51,.5)}.green-color{color:#3bba6c}.quote{border-left:2px solid #303633;padding:8px 0 8px 24px;font-style:italic}.arrow-container{width:40px}@-webkit-keyframes downarrow{0%{-webkit-transform:translateY(0);opacity:.6}to{-webkit-transform:translateY(.4em);opacity:1}}.arrow-down{-webkit-animation:downarrow 1s ease-in-out infinite alternate}.above-the-fold{height:calc(100vh - 56px);max-height:1000px}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=e},343:function(t,e,n){t.exports=n.p+"img/hiking_app.20f9a75.png"},344:function(t,e,n){t.exports=n.p+"img/automotive_app.461ec61.png"},345:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("8845ce86",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n(69),n(28),n(37);var o=n(25);n(296),n(146);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){var n=e.modifiers||{},c=e.value,l="object"===Object(o.a)(c)?c:{handler:c,options:{}},h=l.handler,d=l.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(t._observe){if(h&&(!n.quiet||t._observe.init)){var c=Boolean(e.find((function(t){return t.isIntersecting})));h(e,o,c)}t._observe.init&&n.once?r(t):t._observe.init=!0}}),d);t._observe={init:!1,observer:v},v.observe(t)},unbind:r},l=(n(298),n(147)),h=n(11),d=Object(h.a)(l.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),v=n(38),m=n(82),f=n(7),x="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(h.a)(d,v.a).extend({name:"v-img",directives:{intersect:c},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(o.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!x||n||this.eager){if(this.normalisedSrc.lazySrc){var o=new Image;o.src=this.normalisedSrc.lazySrc,this.pollForSize(o,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(f.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var o=img.naturalHeight,r=img.naturalWidth;o||r?(t.naturalWidth=r,t.calculatedAspectRatio=r/o):null!=e&&!t.hasError&&setTimeout(n,e)};n()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(m.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:x?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},366:function(t,e,n){"use strict";n(345)},367:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-application ol[data-v-2fabcaca],.v-application ul[data-v-2fabcaca]{padding-left:0;list-style-position:inside}@media only screen and (min-width:960px){.detail-val ul[data-v-2fabcaca]{list-style-position:outside}}.mw720[data-v-2fabcaca]{max-width:720px}.mw508[data-v-2fabcaca]{max-width:508px}.container[data-v-2fabcaca]{max-width:1080px}.transparent-body[data-v-2fabcaca]{background:transparent}.grey-color[data-v-2fabcaca]{color:rgba(48,54,51,.5)}.green-color[data-v-2fabcaca]{color:#3bba6c}.quote[data-v-2fabcaca]{border-left:2px solid #303633;padding:8px 0 8px 24px;font-style:italic}.arrow-container[data-v-2fabcaca]{width:40px}@-webkit-keyframes downarrow-data-v-2fabcaca{0%{-webkit-transform:translateY(0);opacity:.6}to{-webkit-transform:translateY(.4em);opacity:1}}.arrow-down[data-v-2fabcaca]{-webkit-animation:downarrow-data-v-2fabcaca 1s ease-in-out infinite alternate}.above-the-fold[data-v-2fabcaca]{height:calc(100vh - 56px);max-height:1000px}.hero-text[data-v-2fabcaca]{margin:200px 0}@media only screen and (max-width:959px){.hero-text[data-v-2fabcaca]{margin:100px 0}}.cs-text[data-v-2fabcaca]{max-width:488px}.v-card[data-v-2fabcaca]:hover{transform:translateY(-8px);transition:.3s}.v-card[data-v-2fabcaca]{transform:translate(0);transition:.3s}",""]),t.exports=e},368:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("197fcea4",content,!0,{sourceMap:!1})},369:function(t,e,n){(e=n(13)(!1)).push([t.i,'.v-application ol,.v-application ul{padding-left:0;list-style-position:inside}@media only screen and (min-width:960px){.detail-val ul{list-style-position:outside}}.mw720{max-width:720px}.mw508{max-width:508px}.container{max-width:1080px}.transparent-body{background:transparent}.grey-color{color:rgba(48,54,51,.5)}.green-color{color:#3bba6c}.quote{border-left:2px solid #303633;padding:8px 0 8px 24px;font-style:italic}.arrow-container{width:40px}@-webkit-keyframes downarrow{0%{-webkit-transform:translateY(0);opacity:.6}to{-webkit-transform:translateY(.4em);opacity:1}}.arrow-down{-webkit-animation:downarrow 1s ease-in-out infinite alternate}.above-the-fold{height:calc(100vh - 56px);max-height:1000px}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},373:function(t,e,n){"use strict";n.r(e);var o={layout:function(t){return t.isTablet?"tablet":t.isDesktop?"desktop":"default"}},r=(n(366),n(19)),c=n(16),l=n.n(c),h=n(141),d=n(88),v=(n(60),n(68),n(10)),m=n(1),f=(n(368),n(11)),x=n(83),y=n(202),w=n(43),_=n(148),k=n(38),C=n(106),S=n(64),z=n(105),O=n(7);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E=Object(f.a)(w.a,z.a,S.a,k.a,Object(_.a)("chipGroup"),Object(C.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return $($($($({"v-chip":!0},S.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(S.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(v.a)(e,2),o=n[0],r=n[1];t.$attrs.hasOwnProperty(o)&&Object(O.a)(o,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(y.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(x.a,t)},genClose:function(){var t=this;return this.$createElement(y.a,{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=$($({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}}),I=n(293),B=n(294),P=n(346),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("div",{staticClass:"d-flex flex-column justify-space-around align-center"},[o("div",{staticClass:"d-flex justify-space-between align-center",staticStyle:{width:"100%"}},[o("div",{staticClass:"mw720 hero-text"},[o("div",{staticClass:"text-h1 mb-4 font-weight-bold"},[t.$vuetify.breakpoint.smAndUp?o("div",[t._v("\n            Hi, I'm Damian Malek\n          ")]):o("div",[o("div",[t._v("\n              Hi, I'm\n            ")]),t._v(" "),o("div",[t._v("\n              Damian Malek\n            ")])])]),t._v(" "),o("div",{staticClass:"text-h4"},[t._v("\n          Product Designer with coding background. Passionate about user-centric approach in everyday work.\n        ")]),t._v(" "),o("div",{staticClass:"text-body-1 d-flex align-center mt-6"},[o("div",[t._v("\n            📌 Based in "),o("a",{attrs:{href:"https://goo.gl/maps/jjWivrC4usAJopNC7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rzeszow")]),t._v(", Poland\n          ")])]),t._v(" "),o("div",{staticClass:"text-body-1 d-flex align-center mt-2"},[o("div",[t._v("\n            💻 Currently working at "),o("a",{attrs:{href:"https://www.ideoagency.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ideo")])])])])])]),t._v(" "),o("NuxtLink",{staticClass:"text-decoration-none menu-item text-body-1",attrs:{to:"/hiking-app-case-study"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"d-flex align-center flex-column flex-md-row mx-sm-auto mx-md-0",attrs:{tile:"",elevation:r?16:8,"max-width":t.$vuetify.breakpoint.smOnly?"528px":"100%"}},[o("v-img",{attrs:{src:n(343),"lazy-src":n(343),contain:"","max-width":t.$vuetify.breakpoint.smOnly?"528px":t.$vuetify.breakpoint.mdAndUp?"50%":"100%"}}),t._v(" "),o("div",[o("v-card-text",{staticClass:"text-body-1"},[o("div",{staticClass:"text-overline grey-color"},[t._v("\n              Case Study / Concept project\n            ")]),t._v(" "),o("div",{staticClass:"text-h2 font-weight-bold mt-3 mb-3"},[t._v("\n              Hiking mApp\n            ")]),t._v("\n            Map based application that allows you to create hiking routes and collect information about your badges.\n            "),o("div",{staticClass:"mt-6"},[o("v-chip",{attrs:{label:""}},[t._v("\n                Product Designer\n              ")]),t._v(" "),o("v-chip",{attrs:{label:""}},[t._v("\n                UX Researcher\n              ")])],1)])],1)],1)]}}])})],1),t._v(" "),o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"d-flex align-center flex-column flex-md-row-reverse mx-sm-auto mx-md-0 mt-16",attrs:{tile:"",elevation:r?16:8,"max-width":t.$vuetify.breakpoint.smOnly?"528px":"100%"}},[o("v-img",{attrs:{src:n(344),"lazy-src":n(344),contain:"","max-width":t.$vuetify.breakpoint.smOnly?"528px":t.$vuetify.breakpoint.mdAndUp?"50%":"100%"}}),t._v(" "),o("div",[o("v-card-text",{staticClass:"text-body-1"},[o("div",{staticClass:"text-overline grey-color"},[t._v("\n            Case Study / Commercial project with NDA restrictions\n          ")]),t._v(" "),o("div",{staticClass:"text-h2 font-weight-bold mt-3 mb-3"},[t._v("\n            Redesign of e-commerce website\n          ")]),t._v("\n          E-commerce website that is connected with automotive industry.\n          "),o("div",{staticClass:"mt-6"},[o("v-chip",{attrs:{label:""}},[t._v("\n              UX Designer\n            ")]),t._v(" "),o("v-chip",{attrs:{label:""}},[t._v("\n              UX Researcher\n            ")])],1)])],1)],1)]}}])})],1)}),[],!1,null,"2fabcaca",null);e.default=component.exports;l()(component,{VCard:h.a,VCardText:d.a,VChip:E,VContainer:I.a,VHover:B.a,VImg:P.a})}}]);