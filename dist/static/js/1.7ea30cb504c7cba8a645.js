webpackJsonp([1],[,,,,,,,,,,,,,,function(t,n,e){function o(t){e(27)}var s=e(4)(e(18),e(33),o,null,null);t.exports=s.exports},,function(t,n,e){"use strict";function o(t,n){return t+(1===t?" "+n:" "+n+"s")}function s(t){return/^item\?id=\d+/i.test(t)}n.a=o,n.b=s},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"comment",props:{comment:{type:Object,default:function(){}}},data:function(){return{open:!0}},computed:{children:function(){return this.comment.comments.length?this.comment.comments.length:""}},methods:{toggle:function(){this.open=!this.open}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(16),s=e(29),i=e.n(s);n.default={name:"comments-list",components:{Comment:i.a},data:function(){return{id:this.$route.params.id,post:null}},created:function(){this.fetchPost()},methods:{pluralize:o.a,isShortUrl:o.b,fetchPost:function(){var t=this;fetch("https://node-hnapi.herokuapp.com/item/"+this.id).then(function(t){if(t.ok)return t.json();throw new Error("API response error")}).then(function(n){t.post=n}).catch(function(t){return console.error(t.message)})}}}},,,,function(t,n,e){n=t.exports=e(12)(!0),n.push([t.i,".content{border-bottom:1px solid #eee;overflow-wrap:break-word}.content pre{white-space:pre-wrap}.child-padding{padding-left:15px}.toggle{color:inherit;padding-left:5px}","",{version:3,sources:["/home/anubhav/mygithub/hnpwa-vue/src/components/Comment.vue"],names:[],mappings:"AACA,SACE,6BAA8B,AAC9B,wBAA0B,CAC3B,AACD,aACE,oBAAsB,CACvB,AACD,eACE,iBAAmB,CACpB,AACD,QACE,cAAe,AACf,gBAAkB,CACnB",file:"Comment.vue",sourcesContent:["\n.content {\n  border-bottom: 1px solid #eee;\n  overflow-wrap: break-word;\n}\n.content pre {\n  white-space: pre-wrap;\n}\n.child-padding {\n  padding-left: 15px;\n}\n.toggle {\n  color: inherit;\n  padding-left: 5px;\n}\n"],sourceRoot:""}])},function(t,n,e){n=t.exports=e(12)(!0),n.push([t.i,".comments{margin-top:60px;background:#fff;padding:6px 12px;overflow:hidden}.title{font-size:1.5em;color:#333}.loader-margin{margin:calc(50vh - 60px) auto}.list-unstyled{list-style:none;padding-left:0}.comment-info{padding-bottom:12px;border-bottom:1px solid #ccc}","",{version:3,sources:["/home/anubhav/mygithub/hnpwa-vue/src/components/CommentsList.vue"],names:[],mappings:"AACA,UACE,gBAAiB,AACjB,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB,AACD,OACE,gBAAiB,AACjB,UAAY,CACb,AACD,eACE,6BAA+B,CAChC,AACD,eACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,cACE,oBAAqB,AACrB,4BAA8B,CAC/B",file:"CommentsList.vue",sourcesContent:["\n.comments {\n  margin-top: 60px;\n  background: #fff;\n  padding: 6px 12px;\n  overflow: hidden;\n}\n.title {\n  font-size: 1.5em;\n  color: #333;\n}\n.loader-margin {\n  margin: calc(50vh - 60px) auto;\n}\n.list-unstyled {\n  list-style: none;\n  padding-left: 0;\n}\n.comment-info {\n  padding-bottom: 12px;\n  border-bottom: 1px solid #ccc;\n}\n"],sourceRoot:""}])},,,function(t,n,e){var o=e(22);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(13)("42cf82fe",o,!0)},function(t,n,e){var o=e(23);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(13)("75ffca5f",o,!0)},,function(t,n,e){function o(t){e(26)}var s=e(4)(e(17),e(32),o,null,null);t.exports=s.exports},,,function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comment?e("li",[e("p",{staticClass:"txt-grey"},[e("b",[t._v(t._s(t.comment.user))]),t._v(" "+t._s(t.comment.time_ago)+"\n    "),e("a",{staticClass:"toggle",on:{click:t.toggle}},[t._v("\n      "+t._s(t.open?"[-]":"[+"+t.children+"]")+"\n    ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}]},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.comment.content)}}),t._v(" "),e("ul",{staticClass:"list-unstyled child-padding"},t._l(t.comment.comments,function(t){return e("comment",{key:t.id,attrs:{comment:t}})}))])]):t._e()},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comments"},[t.post?e("div",[e("p",[t.isShortUrl(t.post.url)?e("router-link",{staticClass:"post-title",attrs:{to:{name:"commentsList",params:{id:t.post.id}}}},[t._v("\n        "+t._s(t.post.title)+"\n      ")]):e("a",{staticClass:"title",attrs:{href:t.post.url,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),t.post.domain?e("small",[t._v("("+t._s(t.post.domain)+")")]):t._e()],1),t._v(" "),e("div",{staticClass:"comment-info"},[null!==t.post.points?e("span",[t._v(t._s(t.pluralize(t.post.points,"point")))]):t._e(),t._v(" "),t.post.user?e("span",[t._v("by "),e("b",[t._v(t._s(t.post.user))])]):t._e(),t._v(" "),e("span",[t._v(t._s(t.post.time_ago)+" |")]),t._v(" "),e("span",[t._v(t._s(t.pluralize(t.post.comments_count,"comment")))])]),t._v(" "),e("ul",{staticClass:"list-unstyled"},t._l(t.post.comments,function(t){return e("comment",{key:t.id,attrs:{comment:t}})}))]):e("div",{staticClass:"loader loader-margin"})])},staticRenderFns:[]}}]);
//# sourceMappingURL=1.7ea30cb504c7cba8a645.js.map