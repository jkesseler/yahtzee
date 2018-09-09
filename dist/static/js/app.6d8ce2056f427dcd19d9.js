webpackJsonp([1],{21:function(t,s,e){"use strict";var n=e(42);s.a={name:"app",components:{Game:n.a}}},22:function(t,s,e){"use strict";var n=e(43),i=e.n(n),r=e(54),o=e(79),c=e(80);s.a={name:"game",components:{Dice:c.a},data:function(){return{willRoll:!1,bonusRequire:63,bonusSize:35,playerTurn:0,rollsLeft:3,rolled:!1,rollButtonMessage:"Player 1 turn",dice:Object(r.b)(),combinations:r.a,scores:[{},{}],adjustments:!1,showSettings:!1}},persist:["scores","playerTurn","rollsLeft","rolled","dice","rollButtonMessage","adjustments"],methods:{calcCell:function(t,s){return this.rolled&&this.playerTurn===t&&void 0===this.scores[t][s.id]?s.calc(this.dice):void 0},adsRoll:function(t){var s=t.clientX-t.target.getClientRects()[0].x,e=t.clientY-t.target.getClientRects()[0].y;console.log(s,e),s<80&&e<8&&this.adjustments?this.roll(!0):this.roll(!1)},roll:function(t){var s=this;if(0!==this.rollsLeft){if(this.rolled=!0,this.willRoll=!0,setTimeout(function(){s.willRoll=!1},500),t){for(var e=this.combinations.filter(function(t){return void 0===s.scores[s.playerTurn][t.id]&&13!==t.id}),n=Array(this.dice.length),r=[],c=0;c<this.dice.length;c++)n[c]=i()({},this.dice[c]);for(var l=0;l<100;l++){var a=n.map(function(t){return i()({},t)}).slice();for(c=0;c<a.length;c++)a[c].used||(a[c].type=Object(o.a)(1,6));r.push(a)}var u={dice:null,val:-1,comb:null};for(l=0;l<e.length;l++){var d=e[l];for(c=0;c<r.length;c++)d.calc(r[c])>u.val&&(u.dice=r[c],u.val=d.calc(r[c]),u.comb=d)}for(c=0;c<this.dice.length;c++){var h=this.dice[c];h.used||(h.type=u.dice[c].type)}}else for(c=0;c<this.dice.length;c++)h=this.dice[c],h.used||(h.type=Object(o.a)(1,6));var v=--this.rollsLeft;this.rollButtonMessage=1===v?"1 throw left":v+" throws left",0===this.rollsLeft&&(this.rollButtonMessage="No throws left")}},setScore:function(t,s){if(this.rolled&&t===this.playerTurn&&!this.scores[t].hasOwnProperty(s)){var e=this.combinations.find(function(t){return t.id===s}),n=e.calc(this.dice);this.$set(this.scores[t],s,n),this.rolled=!1,this.playerTurn=(this.playerTurn+1)%2,this.rollButtonMessage="Player "+(this.playerTurn+1)+" turn",this.dice=Object(r.b)(),this.rollsLeft=3,this.winner()}},partSum:function(t){for(var s=0,e=0;e<this.combinations.length;e++)0===this.combinations[e].group&&(s+=t[this.combinations[e].id]||0);return s},finalSum:function(t){var s=0;this.partSum(t)>=this.bonusRequire&&(s+=this.bonusSize);for(var e=0;e<this.combinations.length;e++)s+=t[this.combinations[e].id]||0;return s},reset:function(){this.willRoll=!1,this.playerTurn=0,this.rollsLeft=3,this.rolled=!1,this.rollButtonMessage="Player 1 turn",this.dice=Object(r.b)(),this.scores=[{},{}]},confirmReset:function(){confirm("Are you sure you want to reset the game?")&&this.reset()},settings:function(){this.showSettings=!this.showSettings},winner:function(){for(var t=!0,s=0;s<this.combinations.length;s++)void 0===this.scores[0][this.combinations[s].id]&&(t=!1),void 0===this.scores[1][this.combinations[s].id]&&(t=!1);t&&(this.finalSum(this.scores[0])===this.finalSum(this.scores[1])?alert("Draw!"):this.finalSum(this.scores[0])>this.finalSum(this.scores[1])?alert("Player 1 won with a score of "+this.finalSum(this.scores[0])+"!"):alert("Player 2 won with a score of "+this.finalSum(this.scores[1])+"!"),this.reset())}}}},33:function(t,s,e){"use strict";s.a={name:"dice",props:["dice","willRoll"]}},34:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(35),i=(e.n(n),e(37)),r=e(41),o=e(84),c=e.n(o),l=e(85);i.a.use(l,{duration:1e3}),i.a.use(c.a),i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:r.a}})},35:function(t,s){},41:function(t,s,e){"use strict";var n=e(21),i=e(83),r=e(10),o=r(n.a,i.a,!1,null,null,null);s.a=o.exports},42:function(t,s,e){"use strict";var n=e(22),i=e(82),r=e(10),o=r(n.a,i.a,!1,null,null,null);s.a=o.exports},54:function(t,s,e){"use strict";function n(){return[{used:!1,type:0,id:0},{used:!1,type:0,id:1},{used:!1,type:0,id:2},{used:!1,type:0,id:3},{used:!1,type:0,id:4}]}function i(t,s){for(var e=0,n=0;n<t.length;n++)t[n].type===s&&(e+=t[n].type);return e}function r(t){for(var s=0,e=0;e<t.length;e++)s+=t[e].type;return s}function o(t){for(var s={1:0,2:0,3:0,4:0,5:0,6:0},e=0;e<t.length;e++)s[t[e].type]+=1;return s}function c(t,s){if(t instanceof Array&&s instanceof Array){if(t.length!==s.length)return!1;for(var e=0;e<t.length;e++)if(!c(t[e],s[e]))return!1;return!0}return t===s}s.b=n,e.d(s,"a",function(){return h});var l=e(55),a=e.n(l),u=e(75),d=e.n(u),h=[{group:0,id:1,name:"Ones",calc:function(t){return i(t,1)}},{group:0,id:2,name:"Twos",calc:function(t){return i(t,2)}},{group:0,id:3,name:"Threes",calc:function(t){return i(t,3)}},{group:0,id:4,name:"Fours",calc:function(t){return i(t,4)}},{group:0,id:5,name:"Fives",calc:function(t){return i(t,5)}},{group:0,id:6,name:"Sixes",calc:function(t){return i(t,6)}},{group:1,id:7,name:"x3",calc:function(t){var s=d()(o(t));return Math.max.apply(Math,a()(s))>=3?r(t):0}},{group:1,id:8,name:"x4",calc:function(t){var s=d()(o(t));return Math.max.apply(Math,a()(s))>=4?r(t):0}},{group:1,id:9,name:"Full House",calc:function(t){var s=d()(o(t)).filter(Number);return c(s,[2,3])||c(s,[3,2])?25:0}},{group:1,id:10,name:"Small straight",calc:function(t){for(var s=[{1:1,2:1,3:1,4:1},{5:1,2:1,3:1,4:1},{6:1,5:1,3:1,4:1}],e=o(t),n=!0,i=0;i<s.length;i++){for(var r in s[i])e[r]<s[i][r]&&(n=!1);if(n)return 30;n=!0}return 0}},{group:1,id:11,name:"Large straight",calc:function(t){for(var s=[{1:1,2:1,3:1,4:1,5:1},{5:1,2:1,3:1,4:1,6:1}],e=o(t),n=!0,i=0;i<s.length;i++){for(var r in s[i])e[r]<s[i][r]&&(n=!1);if(n)return 40;n=!0}return 0}},{group:1,id:12,name:"Yahtzee",calc:function(t){var s=d()(o(t));return Math.max.apply(Math,a()(s))>=5?50:0}},{group:1,id:13,name:"Chance",calc:r}]},79:function(t,s,e){"use strict";function n(t,s){var e=new Uint8Array(1);window.crypto.getRandomValues(e);var i=s-t+1;return e[0]>=Math.floor(256/i)*i?n(t,s):t+e[0]%i}s.a=n},80:function(t,s,e){"use strict";var n=e(33),i=e(81),r=e(10),o=r(n.a,i.a,!1,null,null,null);s.a=o.exports},81:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dice-panel"},t._l(t.dice,function(s){return e("div",{key:s.id,staticClass:"dice-element",class:[{used:s.used,"spin-animation":!s.used&&t.willRoll},"diceN"+s.type,"diceN"],on:{click:function(t){0!=s.type&&(s.used=!s.used)}}})}))},i=[],r={render:n,staticRenderFns:i};s.a=r},82:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("h1",{staticClass:"header"},[t._v("Yahtzee")]),t._v(" "),e("div",{staticClass:"wrapper card"},[e("div",{staticClass:"scores block"},[e("table",{staticClass:"scores-table"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("tbody",[t._l(t.combinations.slice(0,12).map(function(t,s,e){return s<e.length/2?[t,e[s+e.length/2]]:""}).slice(0,t.combinations.length/2),function(s){return e("tr",{key:s[0].id},[e("td",[t._v(t._s(s[0].name))]),t._v(" "),e("td",{class:{setscore:void 0!==t.scores[0][s[0].id],scorecell:!(!t.rolled||0!==t.playerTurn||void 0!==t.scores[0][s[0].id])},on:{click:function(e){t.setScore(0,s[0].id)}}},[t._v("\n              "+t._s(t.calcCell(0,s[0]))+"\n              "+t._s(t.scores[0][s[0].id])+"\n            ")]),t._v(" "),e("td",{class:{setscore:void 0!==t.scores[1][s[0].id],scorecell:!(!t.rolled||1!==t.playerTurn||void 0!==t.scores[1][s[0].id])},on:{click:function(e){t.setScore(1,s[0].id)}}},[t._v("\n              "+t._s(t.calcCell(1,s[0]))+"\n              "+t._s(t.scores[1][s[0].id])+"\n            ")]),t._v(" "),e("td",[t._v(t._s(s[1].name))]),t._v(" "),e("td",{class:{setscore:void 0!==t.scores[0][s[1].id],scorecell:!(!t.rolled||0!==t.playerTurn||void 0!==t.scores[0][s[1].id])},on:{click:function(e){t.setScore(0,s[1].id)}}},[t._v("\n              "+t._s(t.calcCell(0,s[1]))+"\n              "+t._s(t.scores[0][s[1].id])+" \n            ")]),t._v(" "),e("td",{class:{setscore:void 0!==t.scores[1][s[1].id],scorecell:!(!t.rolled||1!==t.playerTurn||void 0!==t.scores[1][s[1].id])},on:{click:function(e){t.setScore(1,s[1].id)}}},[t._v("\n              "+t._s(t.calcCell(1,s[1]))+"\n              "+t._s(t.scores[1][s[1].id])+" \n            ")])])}),t._v(" "),e("tr",[e("td",[t._v("Bonus")]),t._v(" "),e("td",{staticClass:"bonuscell",class:{setscore:t.partSum(t.scores[0])>=t.bonusRequire}},[t._v(t._s(t.partSum(t.scores[0]))+"/"+t._s(t.bonusRequire))]),t._v(" "),e("td",{staticClass:"bonuscell",class:{setscore:t.partSum(t.scores[1])>=t.bonusRequire}},[t._v(t._s(t.partSum(t.scores[1]))+"/"+t._s(t.bonusRequire))]),t._v(" "),e("td",[t._v(t._s(t.combinations[12].name))]),t._v(" "),e("td",{class:{setscore:void 0!==t.scores[0][t.combinations[12].id],scorecell:!(!t.rolled||0!==t.playerTurn||void 0!==t.scores[0][t.combinations[12].id])},on:{click:function(s){t.setScore(0,t.combinations[12].id)}}},[t._v("\n              "+t._s(t.calcCell(0,t.combinations[12]))+"\n              "+t._s(t.scores[0][t.combinations[12].id])+" \n            ")]),t._v(" "),e("td",{class:{setscore:void 0!==t.scores[1][t.combinations[12].id],scorecell:!(!t.rolled||1!==t.playerTurn||void 0!==t.scores[1][t.combinations[12].id])},on:{click:function(s){t.setScore(1,t.combinations[12].id)}}},[t._v("\n              "+t._s(t.calcCell(1,t.combinations[12]))+"\n              "+t._s(t.scores[1][t.combinations[12].id])+" \n            ")])]),t._v(" "),e("tr",[e("td"),e("td"),e("td"),t._v(" "),e("td",[t._v("Total")]),t._v(" "),e("td",[t._v(t._s(t.finalSum(t.scores[0])))]),t._v(" "),e("td",[t._v(t._s(t.finalSum(t.scores[1])))])])],2)])]),t._v(" "),e("div",{staticClass:"dice block"},[t._v("\n      Dice\n      "),e("Dice",{attrs:{dice:t.dice,willRoll:t.willRoll}})],1),t._v(" "),e("div",{staticClass:"settings block",class:{hidden:!t.showSettings}},[e("div",[t._v("\n        Reset game "),e("button",{staticClass:"danger",on:{click:t.confirmReset}},[t._v("RESET")])]),t._v(" "),e("div",[t._v("\n        Adjustments "),e("button",{class:{success:t.adjustments,info:!t.adjustments},on:{click:function(s){t.adjustments=!t.adjustments}}},[t._v(t._s(t.adjustments?"ON":"OFF"))])])]),t._v(" "),e("div",{staticClass:"buttons block"},[e("img",{staticClass:"settings-icon",attrs:{src:"https://png.icons8.com/metro/1600/settings.png"},on:{click:t.settings}}),t._v(" "),e("button",{staticClass:"button",class:{unclickable:0===t.rollsLeft,red:0===t.rollsLeft,blue:t.rollsLeft>0},attrs:{type:"button",id:"roll-dice"},on:{click:t.adsRoll,"":function(t){}}},[t._v("\n        "+t._s(t.rollButtonMessage)+"\n      ")])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("colgroup",[e("col",{staticStyle:{width:"25%"}}),t._v(" "),e("col",{staticStyle:{width:"13%"}}),t._v(" "),e("col",{staticStyle:{width:"12%"}}),t._v(" "),e("col",{staticStyle:{width:"25%"}}),t._v(" "),e("col",{staticStyle:{width:"13%"}}),t._v(" "),e("col",{staticStyle:{width:"12%"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[t._v("Co")]),t._v(" "),e("th",[t._v("1")]),t._v(" "),e("th",[t._v("2")]),t._v(" "),e("th",[t._v("Co")]),t._v(" "),e("th",[t._v("1")]),t._v(" "),e("th",[t._v("2")])])])}],r={render:n,staticRenderFns:i};s.a=r},83:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("main",[e("Game")],1)])},i=[],r={render:n,staticRenderFns:i};s.a=r}},[34]);
//# sourceMappingURL=app.6d8ce2056f427dcd19d9.js.map