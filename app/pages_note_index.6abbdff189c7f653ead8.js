webpackJsonp([1],{"4O5k":function(e,t,n){var r=n("negZ");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("1b959204",r,!1,{sourceMap:!1})},"5K04":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("vSbK"),s=n("7r4g"),i=!1;var o=function(e){i||n("4O5k")},l=n("VU/8")(r.a,s.a,!1,o,null,null);l.options.__file="pages\\note\\index.vue",t.default=l.exports},"7r4g":function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",{attrs:{gutter:20}},[t("edit-note",{attrs:{noteItem:{}},on:{submit:this.onSubmitted}})],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};t.a=s},Ca5m:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.note},nativeOn:{submit:function(t){return t.preventDefault(),e.saveNote(t)}}},[n("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-form-item",{attrs:{label:"Title"}},[n("el-input",{attrs:{placeholder:"ToDo items"},model:{value:e.note.title,callback:function(t){e.$set(e.note,"title",t)},expression:"note.title"}})],1)],1),n("el-form-item",{attrs:{label:"Note - Supports markdown"}},[n("el-input",{attrs:{type:"textarea",rows:10,required:""},model:{value:e.note.content,callback:function(t){e.$set(e.note,"content",t)},expression:"note.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v(e._s(e._f("capitalize")(e.action)))]),n("el-button",{on:{click:e.cancelNote}},[e._v("Cancel")])],1)],1)],1),n("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[n("el-card",{staticClass:"box-card preview"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e._f("formatDate")(e.note.title)))])]),n("span",{staticClass:"note-content",domProps:{innerHTML:e._s(e.noteContent)}})])],1)],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};t.a=s},EFqf:function(e,t,n){(function(t){!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:f,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:f,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:f,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links={},this.options=e||x.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=c(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=c(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=c(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=c(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=c(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=c(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=m({},n),n.gfm=m({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=c(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=m({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=m({},n.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=n,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,s,i,o,l,a,h,p,c,u,g,d,f;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))&&(a={type:"table",header:b(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(i[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=b(a.cells[p],a.header.length);this.tokens.push(a)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),g=(o=i[2]).length>1,this.tokens.push({type:"list_start",ordered:g,start:g?+o:""}),r=!1,u=(i=i[0].match(this.rules.item)).length,p=0;p<u;p++)h=(a=i[p]).length,~(a=a.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(h-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&p!==u-1&&(o===(l=n.bullet.exec(i[p+1])[0])||o.length>1&&l.length>1||(e=i.slice(p+1).join("\n")+e,p=u-1)),s=r||/\n\n(?!\s*$)/.test(a),p!==u-1&&(r="\n"===a.charAt(a.length-1),s||(s=r)),f=void 0,(d=/^\[[ xX]\] /.test(a))&&(f=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),this.tokens.push({type:s?"loose_item_start":"list_item_start",task:d,checked:f}),this.token(a,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),c=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[c]||(this.tokens.links[c]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))&&(a={type:"table",header:b(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(i[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=b(a.cells[p].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var s={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:f,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,em:/^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:f,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function i(e,t){if(this.options=t||x.defaults,this.links=e,this.rules=s.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.options.breaks?this.rules=s.breaks:this.rules=s.gfm)}function o(e){this.options=e||x.defaults}function l(){}function a(e){this.tokens=[],this.token=null,this.options=e||x.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function h(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function u(e,t){return g[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=e.replace(/[^/]*$/,"")),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}s._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,s._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,s._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,s.autolink=c(s.autolink).replace("scheme",s._scheme).replace("email",s._email).getRegex(),s._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,s.tag=c(s.tag).replace("comment",n._comment).replace("attribute",s._attribute).getRegex(),s._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,s._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/,s._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,s.link=c(s.link).replace("label",s._label).replace("href",s._href).replace("title",s._title).getRegex(),s.reflink=c(s.reflink).replace("label",s._label).getRegex(),s.normal=m({},s),s.pedantic=m({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",s._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",s._label).getRegex()}),s.gfm=m({},s.normal,{escape:c(s.escape).replace("])","~|])").getRegex(),url:c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",s._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(s.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),s.breaks=m({},s.gfm,{br:c(s.br).replace("{2,}","*").getRegex(),text:c(s.gfm.text).replace("{2,}","*").getRegex()}),i.rules=s,i.output=function(e,t,n){return new i(t,n).output(e)},i.prototype.output=function(e){for(var t,n,r,s,o,l="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),l+=o[1];else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),r="@"===o[2]?"mailto:"+(n=h(this.mangle(o[1]))):n=h(o[1]),l+=this.renderer.link(r,null,n);else if(this.inLink||!(o=this.rules.url.exec(e))){if(o=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),e=e.substring(o[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):h(o[0]):o[0];else if(o=this.rules.link.exec(e))e=e.substring(o[0].length),this.inLink=!0,r=o[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],s=t[3]):s="":s=o[3]?o[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(o,{href:i.escapes(r),title:i.escapes(s)}),this.inLink=!1;else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){l+=o[0].charAt(0),e=o[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(o,t),this.inLink=!1}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),l+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),l+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),l+=this.renderer.codespan(h(o[2].trim(),!0));else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),l+=this.renderer.br();else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),l+=this.renderer.del(this.output(o[1]));else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),l+=this.renderer.text(h(this.smartypants(o[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else o[0]=this.rules._backpedal.exec(o[0])[0],e=e.substring(o[0].length),"@"===o[2]?r="mailto:"+(n=h(o[0])):(n=h(o[0]),r="www."===o[1]?"http://"+n:n),l+=this.renderer.link(r,null,n);return l},i.escapes=function(e){return e?e.replace(i.rules._escapes,"$1"):e},i.prototype.outputLink=function(e,t){var n=t.href,r=t.title?h(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,h(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+h(t,!0)+'">'+(n?e:h(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:h(e,!0))+"</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(p(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!d.test(e)&&(e=u(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return n}var s='<a href="'+h(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},o.prototype.image=function(e,t,n){this.options.baseUrl&&!d.test(e)&&(e=u(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},l.prototype.strong=l.prototype.em=l.prototype.codespan=l.prototype.del=l.prototype.text=function(e){return e},l.prototype.link=l.prototype.image=function(e,t,n){return""+n},l.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,m({},this.options,{renderer:new l})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,p(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var o=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o,l);case"list_item_start":for(i="",this.token.task&&(i+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var g={},d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function f(){}function m(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function b(e,t){var n=e.replace(/([^\\])\|/g,"$1 |").split(/ +\| */),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].replace(/\\\|/g,"|");return n}function x(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null);var s,i,o=(t=m({},x.defaults,t||{})).highlight,l=0;try{s=r.lex(e,t)}catch(e){return n(e)}i=s.length;var p=function(e){if(e)return t.highlight=o,n(e);var r;try{r=a.parse(s,t)}catch(t){e=t}return t.highlight=o,e?n(e):n(null,r)};if(!o||o.length<3)return p();if(delete t.highlight,!i)return p();for(;l<s.length;l++)!function(e){"code"!==e.type?--i||p():o(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--i||p():(e.text=n,e.escaped=!0,void(--i||p()))})}(s[l])}else try{return t&&(t=m({},x.defaults,t)),a.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||x.defaults).silent)return"<p>An error occurred:</p><pre>"+h(e.message+"",!0)+"</pre>";throw e}}f.exec=f,x.options=x.setOptions=function(e){return m(x.defaults,e),x},x.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new o,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},x.defaults=x.getDefaults(),x.Parser=a,x.parser=a.parse,x.Renderer=o,x.TextRenderer=l,x.Lexer=r,x.lexer=r.lex,x.InlineLexer=i,x.inlineLexer=i.output,x.parse=x,e.exports=x}(this||"undefined"!=typeof window&&window)}).call(t,n("DuR2"))},hBLY:function(e,t,n){"use strict";var r=n("EFqf"),s=n.n(r);t.a={data:function(){return{note:{content:"",title:""}}},props:["noteItem","edit"],mounted:function(){console.log("props:",this._props.noteItem),this.note=this._props.noteItem},computed:{action:function(){return this.$store.state.editNote&&this._props.noteItem.title?"update":"create"},noteContent:function(){return this.note.content||this._props.noteItem.content?s()(this.note.content||this._props.noteItem.content):""}},methods:{saveNote:function(){console.log("componet submit event"),this.$emit("submit",this.$store.state.editNote?this.note:{title:this.note.title,content:this.note.content})},toggleAction:function(){var e=this.action;this.action=this.otherAction,this.otherAction=e},cancelNote:function(){return this.$store.dispatch("toggleEdit","false"),this.$router.push("/")}}}},negZ:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},vSbK:function(e,t,n){"use strict";var r=n("xKEW");t.a={components:{EditNote:r.a},mounted:function(){console.log("[note/index]")},layout:"default",methods:{onSubmitted:function(e){var t=this;console.log("note data",e),this.$store.dispatch("createNote",Object.assign({},e)).then(function(e){console.log("note:",e),t.$router.push("/")}).catch(function(e){return console.log(e),t.$message({type:"error",center:!0,message:e.response.data.msg})})}}}},xKEW:function(e,t,n){"use strict";var r=n("hBLY"),s=n("Ca5m"),i=n("VU/8")(r.a,s.a,!1,null,null,null);i.options.__file="components\\EditNote.vue",t.a=i.exports}});