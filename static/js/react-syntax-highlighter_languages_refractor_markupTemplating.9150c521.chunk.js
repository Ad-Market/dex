(this["webpackJsonplz-interface"]=this["webpackJsonplz-interface"]||[]).push([[90],{858:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,c=i.length;-1!==t.code.indexOf(r=n(a,c));)++c;return i[c]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(c){for(var s=0;s<c.length&&!(r>=o.length);s++){var u=c[s];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=o[r],l=t.tokenStack[p],g="string"===typeof u?u:u.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++r;var h=g.substring(0,k),m=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),d=g.substring(k+f.length),y=[];h&&y.push.apply(y,i([h])),y.push(m),d&&y.push.apply(y,i([d])),"string"===typeof u?c.splice.apply(c,[s,1].concat(y)):u.content=y}}else u.content&&i(u.content)}return c}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.9150c521.chunk.js.map