﻿define("ace/mode/less","require exports module ace/lib/oop ace/mode/text ace/tokenizer ace/mode/less_highlight_rules ace/mode/matching_brace_outdent ace/mode/folding/cstyle".split(" "),function(e,i){var h=e("../lib/oop"),b=e("./text").Mode,a=e("../tokenizer").Tokenizer,d=e("./less_highlight_rules").LessHighlightRules,f=e("./matching_brace_outdent").MatchingBraceOutdent,c=e("./folding/cstyle").FoldMode,j=function(){this.$tokenizer=new a((new d).getRules(),"i");this.$outdent=new f;this.foldingRules=
new c};h.inherits(j,b);(function(){this.getNextLineIndent=function(a,f,b){var c=this.$getIndent(f),a=this.$tokenizer.getLineTokens(f,a).tokens;return a.length&&a[a.length-1].type=="comment"?c:(f.match(/^.*\{\s*$/)&&(c=c+b),c)};this.checkOutdent=function(a,f,c){return this.$outdent.checkOutdent(f,c)};this.autoOutdent=function(a,f,c){this.$outdent.autoOutdent(f,c)}}).call(j.prototype);i.Mode=j});
define("ace/mode/less_highlight_rules","require exports module ace/lib/oop ace/lib/lang ace/mode/text_highlight_rules".split(" "),function(e,i){var h=e("../lib/oop"),b=e("../lib/lang"),a=e("./text_highlight_rules").TextHighlightRules,d=function(){var a=b.arrayToMap(function(){for(var a=["-webkit-","-moz-","-o-","-ms-","-svg-","-pie-","-khtml-"],c=["appearance","background-clip","background-inline-policy","background-origin","background-size","binding","border-bottom-colors","border-left-colors","border-right-colors",
"border-top-colors","border-end","border-end-color","border-end-style","border-end-width","border-image","border-start","border-start-color","border-start-style","border-start-width","box-align","box-direction","box-flex","box-flexgroup","box-ordinal-group","box-orient","box-pack","box-sizing","column-count","column-gap","column-width","column-rule","column-rule-width","column-rule-style","column-rule-color","float-edge","font-feature-settings","font-language-override","force-broken-image-icon","image-region",
"margin-end","margin-start","opacity","outline","outline-color","outline-offset","outline-radius","outline-radius-bottomleft","outline-radius-bottomright","outline-radius-topleft","outline-radius-topright","outline-style","outline-width","padding-end","padding-start","stack-sizing","tab-size","text-blink","text-decoration-color","text-decoration-line","text-decoration-style","transform","transform-origin","transition","transition-delay","transition-duration","transition-property","transition-timing-function",
"user-focus","user-input","user-modify","user-select","window-shadow","border-radius"],f=[],b=0,d=a.length;b<d;b++)Array.prototype.push.apply(f,(a[b]+c.join("|"+a[b])).split("|"));return Array.prototype.push.apply(f,c),Array.prototype.push.apply(f,["azimuth","background-attachment","background-color","background-image","background-position","background-repeat","background","border-bottom-color","border-bottom-style","border-bottom-width","border-bottom","border-collapse","border-color","border-left-color",
"border-left-style","border-left-width","border-left","border-right-color","border-right-style","border-right-width","border-right","border-spacing","border-style","border-top-color","border-top-style","border-top-width","border-top","border-width","border","bottom","box-sizing","caption-side","clear","clip","color","content","counter-increment","counter-reset","cue-after","cue-before","cue","cursor","direction","display","elevation","empty-cells","float","font-family","font-size-adjust","font-size",
"font-stretch","font-style","font-variant","font-weight","font","height","left","letter-spacing","line-height","list-style-image","list-style-position","list-style-type","list-style","margin-bottom","margin-left","margin-right","margin-top","marker-offset","margin","marks","max-height","max-width","min-height","min-width","opacity","orphans","outline-color","outline-style","outline-width","outline","overflow","overflow-x","overflow-y","padding-bottom","padding-left","padding-right","padding-top",
"padding","page-break-after","page-break-before","page-break-inside","page","pause-after","pause-before","pause","pitch-range","pitch","play-during","position","quotes","richness","right","size","speak-header","speak-numeral","speak-punctuation","speech-rate","speak","stress","table-layout","text-align","text-decoration","text-indent","text-shadow","text-transform","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-spacing","z-index"]),
f}()),c=b.arrayToMap(["hsl","hsla","rgb","rgba","url","attr","counter","counters","lighten","darken","saturate","desaturate","fadein","fadeout","fade","spin","mix","hue","saturation","lightness","alpha","round","ceil","floor","percentage","color","iscolor","isnumber","isstring","iskeyword","isurl","ispixel","ispercentage","isem"]),d=b.arrayToMap(["absolute","all-scroll","always","armenian","auto","baseline","below","bidi-override","block","bold","bolder","border-box","both","bottom","break-all","break-word",
"capitalize","center","char","circle","cjk-ideographic","col-resize","collapse","content-box","crosshair","dashed","decimal-leading-zero","decimal","default","disabled","disc","distribute-all-lines","distribute-letter","distribute-space","distribute","dotted","double","e-resize","ellipsis","fixed","georgian","groove","hand","hebrew","help","hidden","hiragana-iroha","hiragana","horizontal","ideograph-alpha","ideograph-numeric","ideograph-parenthesis","ideograph-space","inactive","inherit","inline-block",
"inline","inset","inside","inter-ideograph","inter-word","italic","justify","katakana-iroha","katakana","keep-all","left","lighter","line-edge","line-through","line","list-item","loose","lower-alpha","lower-greek","lower-latin","lower-roman","lowercase","lr-tb","ltr","medium","middle","move","n-resize","ne-resize","newspaper","no-drop","no-repeat","nw-resize","none","normal","not-allowed","nowrap","oblique","outset","outside","overline","pointer","progress","relative","repeat-x","repeat-y","repeat",
"right","ridge","row-resize","rtl","s-resize","scroll","se-resize","separate","small-caps","solid","square","static","strict","super","sw-resize","table-footer-group","table-header-group","tb-rl","text-bottom","text-top","text","thick","thin","top","transparent","underline","upper-alpha","upper-latin","upper-roman","uppercase","vertical-ideographic","vertical-text","visible","w-resize","wait","whitespace","zero"]),e=b.arrayToMap(["aqua","black","blue","fuchsia","gray","green","lime","maroon","navy",
"olive","orange","purple","red","silver","teal","white","yellow"]),g=b.arrayToMap(["@mixin","@extend","@include","@import","@media","@debug","@warn","@if","@for","@each","@while","@else","@font-face","@-webkit-keyframes","if","and","!default","module","def","end","declare","when","not","and"]),h=b.arrayToMap(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup",
"command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","keygen","kbd","label","legend","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small",
"source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","tt","u","ul","var","video","wbr","xmp"]);this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",merge:true,regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)"},
{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:"constant.numeric",regex:"\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))"},{token:function(a){return g.hasOwnProperty(a)?"keyword":"variable"},regex:"@[a-z0-9_\\-@]*\\b"},{token:function(b){return a.hasOwnProperty(b.toLowerCase())?"support.type":g.hasOwnProperty(b)?"keyword":d.hasOwnProperty(b)?"constant.language":c.hasOwnProperty(b)?"support.function":e.hasOwnProperty(b.toLowerCase())?"support.constant.color":
h.hasOwnProperty(b.toLowerCase())?"variable.language":"text"},regex:"\\-?[@a-z_][@a-z0-9_\\-]*"},{token:"variable.language",regex:"#[a-z0-9-_]+"},{token:"variable.language",regex:"\\.[a-z0-9-_]+"},{token:"variable.language",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{token:"keyword.operator",regex:"<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",
next:"start"},{token:"comment",merge:true,regex:".+"}]}};h.inherits(d,a);i.LessHighlightRules=d});
define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,i){var h=e("../range").Range,b=function(){};(function(){this.checkOutdent=function(a,b){return/^\s+$/.test(a)?/^\s*\}/.test(b):!1};this.autoOutdent=function(a,b){var f=a.getLine(b).match(/^(\s*\})/);if(!f)return 0;var f=f[1].length,c=a.findMatchingBracket({row:b,column:f});if(!c||c.row==b)return 0;c=this.$getIndent(a.getLine(c.row));a.replace(new h(b,0,b,f-1),c)};this.$getIndent=function(b){return(b=b.match(/^(\s+)/))?
b[1]:""}}).call(b.prototype);i.MatchingBraceOutdent=b});
define("ace/mode/folding/cstyle","require exports module ace/lib/oop ace/range ace/mode/folding/fold_mode".split(" "),function(e,i){var h=e("../../lib/oop"),b=e("../../range").Range,a=e("./fold_mode").FoldMode,d=i.FoldMode=function(){};h.inherits(d,a);(function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;this.getFoldWidgetRange=function(a,c,d){var e=a.getLine(d),g=e.match(this.foldingStartMarker);if(g){c=g.index;if(g[1])return this.openingBracketBlock(a,
g[1],d,c);a=a.getCommentFoldRange(d,c+g[0].length);return a.end.column=a.end.column-2,a}if(c==="markbeginend")if(g=e.match(this.foldingStopMarker)){c=g.index+g[0].length;if(g[2]){a=a.getCommentFoldRange(d,c);return a.end.column=a.end.column-2,a}d={row:d,column:c};if(a=a.$findOpeningBracket(g[1],d))return a.column++,d.column--,b.fromPoints(a,d)}}}).call(d.prototype)});
define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(e,i){var h=e("../../range").Range;(function(){this.foldingStopMarker=this.foldingStartMarker=null;this.getFoldWidget=function(b,a,d){b=b.getLine(d);return this.foldingStartMarker.test(b)?"start":"markbeginend"==a&&this.foldingStopMarker&&this.foldingStopMarker.test(b)?"end":""};this.getFoldWidgetRange=function(){return null};this.indentationBlock=function(b,a,d){var f=/\S/,c=b.getLine(a),e=c.search(f);if(-1!=e){for(var d=
d||c.length,i=b.getLength(),g=c=a;++a<i;){var k=b.getLine(a).search(f);if(-1!=k){if(k<=e)break;g=a}}if(g>c)return b=b.getLine(g).length,new h(c,d,g,b)}};this.openingBracketBlock=function(b,a,d,e,c){d={row:d,column:e+1};if(a=b.$findClosingBracket(a,d,c))return c=b.foldWidgets[a.row],null==c&&(c=this.getFoldWidget(b,a.row)),"start"==c&&a.row>d.row&&(a.row--,a.column=b.getLine(a.row).length),h.fromPoints(d,a)}}).call((i.FoldMode=function(){}).prototype)});