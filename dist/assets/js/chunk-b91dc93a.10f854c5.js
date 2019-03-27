(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b91dc93a"],{"0319":function(t,e,n){var i;(function(o){"object"===typeof t&&t.exports?(o["default"]=o,t.exports=o):(i=function(){return o}.call(e,n,e,t),void 0===i||(t.exports=i))})(function(t){var e=function(){return{initUpdate:function(t){t.navigation||(t.navigation={updates:[],update:function(t,e){this.updates.forEach(function(n){n.update.call(n.context,t,e)})}})},addUpdate:function(t,e){e.navigation||this.initUpdate(e),e.navigation.updates.push({update:t,context:e})}}}();(function(t,e){var n=t.defaultOptions,i=t.doc,o=t.Chart,r=t.addEvent,a=t.removeEvent,s=t.fireEvent,l=t.createElement,p=t.discardElement,d=t.css,c=t.merge,u=t.pick,h=t.objectEach,g=t.extend,f=t.isTouchDevice,m=t.win,x=m.navigator.userAgent,y=t.SVGRenderer,v=t.Renderer.prototype.symbols,b=/Edge\/|Trident\/|MSIE /.test(x),w=/firefox/i.test(x);g(n.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"}),n.navigation||(n.navigation={}),c(!0,n.navigation,{buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}}),c(!0,n.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:f?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}}}),n.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},t.post=function(t,e,n){var o=l("form",c({method:"post",action:t,enctype:"multipart/form-data"},n),{display:"none"},i.body);h(e,function(t,e){l("input",{type:"hidden",name:e,value:t},null,o)}),o.submit(),p(o)},g(o.prototype,{sanitizeSVG:function(t,e){if(e&&e.exporting&&e.exporting.allowHTML){var n=t.match(/<\/svg>(.*?$)/);n&&n[1]&&(n='<foreignObject x="0" y="0" width="'+e.chart.width+'" height="'+e.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+n[1]+"</body></foreignObject>",t=t.replace("</svg>",n+"</svg>"))}return t=t.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(t=this.ieSanitizeSVG(t)),t},getChartHTML:function(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML},getSVG:function(e){var n,o,r,a,d,u=c(this.options,e);return o=l("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},i.body),r=this.renderTo.style.width,d=this.renderTo.style.height,r=u.exporting.sourceWidth||u.chart.width||/px$/.test(r)&&parseInt(r,10)||(u.isGantt?800:600),d=u.exporting.sourceHeight||u.chart.height||/px$/.test(d)&&parseInt(d,10)||400,g(u.chart,{animation:!1,renderTo:o,forExport:!0,renderer:"SVGRenderer",width:r,height:d}),u.exporting.enabled=!1,delete u.data,u.series=[],this.series.forEach(function(t){a=c(t.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:t.visible}),a.isInternal||u.series.push(a)}),this.axes.forEach(function(e){e.userOptions.internalKey||(e.userOptions.internalKey=t.uniqueKey())}),n=new t.Chart(u,this.callback),e&&["xAxis","yAxis","series"].forEach(function(t){var i={};e[t]&&(i[t]=e[t],n.update(i))}),this.axes.forEach(function(e){var i=t.find(n.axes,function(t){return t.options.internalKey===e.userOptions.internalKey}),o=e.getExtremes(),r=o.userMin;o=o.userMax;i&&(void 0!==r&&r!==i.min||void 0!==o&&o!==i.max)&&i.setExtremes(r,o,!0,!1)}),r=n.getChartHTML(),s(this,"getSVG",{chartCopy:n}),r=this.sanitizeSVG(r,u),u=null,n.destroy(),p(o),r},getSVGForExport:function(t,e){var n=this.options.exporting;return this.getSVG(c({chart:{borderRadius:0}},n.chartOptions,e,{exporting:{sourceWidth:t&&t.sourceWidth||n.sourceWidth,sourceHeight:t&&t.sourceHeight||n.sourceHeight}}))},getFilename:function(){var t=this.userOptions.title&&this.userOptions.title.text,e=this.options.exporting.filename;return e||("string"===typeof t&&(e=t.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!e||5>e.length)&&(e="chart"),e)},exportChart:function(e,n){n=this.getSVGForExport(e,n),e=c(this.options.exporting,e),t.post(e.url,{filename:e.filename||this.getFilename(),type:e.type,width:e.width||0,scale:e.scale,svg:n},e.formAttributes)},print:function(){function t(t){(o.fixedDiv?[o.fixedDiv,o.scrollingContainer]:[o.container]).forEach(function(e){t.appendChild(e)})}var e,n,o=this,r=[],a=i.body,l=a.childNodes,p=o.options.exporting.printMaxWidth;o.isPrinting||(o.isPrinting=!0,o.pointer.reset(null,0),s(o,"beforePrint"),(n=p&&o.chartWidth>p)&&(e=[o.options.chart.width,void 0,!1],o.setSize(p,void 0,!1)),l.forEach(function(t,e){1===t.nodeType&&(r[e]=t.style.display,t.style.display="none")}),t(a),setTimeout(function(){m.focus(),m.print(),setTimeout(function(){t(o.renderTo),l.forEach(function(t,e){1===t.nodeType&&(t.style.display=r[e])}),o.isPrinting=!1,n&&o.setSize.apply(o,e),s(o,"afterPrint")},1e3)},1))},contextMenu:function(e,n,o,a,s,p,c){var u,h=this,f=h.options.navigation,m=h.chartWidth,x=h.chartHeight,y="cache-"+e,v=h[y],b=Math.max(s,p);v||(h.exportContextMenu=h[y]=v=l("div",{className:e},{position:"absolute",zIndex:1e3,padding:b+"px",pointerEvents:"auto"},h.fixedDiv||h.container),u=l("div",{className:"highcharts-menu"},null,v),h.styledMode||d(u,g({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},f.menuStyle)),v.hideMenu=function(){d(v,{display:"none"}),c&&c.setState(0),h.openMenu=!1,t.clearTimeout(v.hideTimer)},h.exportEvents.push(r(v,"mouseleave",function(){v.hideTimer=setTimeout(v.hideMenu,500)}),r(v,"mouseenter",function(){t.clearTimeout(v.hideTimer)}),r(i,"mouseup",function(t){h.pointer.inClass(t.target,e)||v.hideMenu()}),r(v,"click",function(){h.openMenu&&v.hideMenu()})),n.forEach(function(e){var n;("string"===typeof e&&(e=h.options.exporting.menuItemDefinitions[e]),t.isObject(e,!0))&&(e.separator?n=l("hr",null,null,u):(n=l("div",{className:"highcharts-menu-item",onclick:function(t){t&&t.stopPropagation(),v.hideMenu(),e.onclick&&e.onclick.apply(h,arguments)},innerHTML:e.text||h.options.lang[e.textKey]},null,u),h.styledMode||(n.onmouseover=function(){d(this,f.menuItemHoverStyle)},n.onmouseout=function(){d(this,f.menuItemStyle)},d(n,g({cursor:"pointer"},f.menuItemStyle)))),h.exportDivElements.push(n))}),h.exportDivElements.push(u,v),h.exportMenuWidth=v.offsetWidth,h.exportMenuHeight=v.offsetHeight),n={display:"block"},o+h.exportMenuWidth>m?n.right=m-o-s-b+"px":n.left=o-b+"px",a+p+h.exportMenuHeight>x&&"top"!==c.alignOptions.verticalAlign?n.bottom=x-a-b+"px":n.top=a+p-b+"px",d(v,n),h.openMenu=!0},addButton:function(t){var e,n,i=this,o=i.renderer,r=c(i.options.navigation.buttonOptions,t),a=r.onclick,s=r.menuItems,l=r.symbolSize||12;if(i.btnCount||(i.btnCount=0),i.exportDivElements||(i.exportDivElements=[],i.exportSVGElements=[]),!1!==r.enabled){var p,d=r.theme,h=d.states,f=h&&h.hover;h=h&&h.select;i.styledMode||(d.fill=u(d.fill,"#ffffff"),d.stroke=u(d.stroke,"none")),delete d.states,a?p=function(t){t&&t.stopPropagation(),a.call(i,t)}:s&&(p=function(t){t&&t.stopPropagation(),i.contextMenu(n.menuClassName,s,n.translateX,n.translateY,n.width,n.height,n),n.setState(2)}),r.text&&r.symbol?d.paddingLeft=u(d.paddingLeft,25):r.text||g(d,{width:r.width,height:r.height,padding:0}),i.styledMode||(d["stroke-linecap"]="round",d.fill=u(d.fill,"#ffffff"),d.stroke=u(d.stroke,"none")),n=o.button(r.text,0,0,p,d,f,h).addClass(t.className).attr({title:u(i.options.lang[r._titleKey||r.titleKey],"")}),n.menuClassName=t.menuClassName||"highcharts-menu-"+i.btnCount++,r.symbol&&(e=o.symbol(r.symbol,r.symbolX-l/2,r.symbolY-l/2,l,l,{width:l,height:l}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(n),i.styledMode||e.attr({stroke:r.symbolStroke,fill:r.symbolFill,"stroke-width":r.symbolStrokeWidth||1})),n.add(i.exportingGroup).align(g(r,{width:n.width,x:u(r.x,i.buttonOffset)}),!0,"spacingBox"),i.buttonOffset+=(n.width+r.buttonSpacing)*("right"===r.align?-1:1),i.exportSVGElements.push(n,e)}},destroyExport:function(e){var n=e?e.target:this;e=n.exportSVGElements;var i,o=n.exportDivElements,r=n.exportEvents;e&&(e.forEach(function(t,e){t&&(t.onclick=t.ontouchstart=null,i="cache-"+t.menuClassName,n[i]&&delete n[i],n.exportSVGElements[e]=t.destroy())}),e.length=0),n.exportingGroup&&(n.exportingGroup.destroy(),delete n.exportingGroup),o&&(o.forEach(function(e,i){t.clearTimeout(e.hideTimer),a(e,"mouseleave"),n.exportDivElements[i]=e.onmouseout=e.onmouseover=e.ontouchstart=e.onclick=null,p(e)}),o.length=0),r&&(r.forEach(function(t){t()}),r.length=0)}}),y.prototype.inlineToAttributes="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" "),y.prototype.inlineBlacklist=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],y.prototype.unstyledElements=["clipPath","defs","desc"],o.prototype.inlineStyles=function(){function t(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})}function e(i){function r(e,n){if(x=y=!1,l){for(v=l.length;v--&&!y;)y=l[v].test(n);x=!y}for("transform"===n&&"none"===e&&(x=!0),v=s.length;v--&&!x;)x=s[v].test(n)||"function"===typeof e;x||g[n]===e&&"svg"!==i.nodeName||u[i.nodeName][n]===e||(-1!==a.indexOf(n)?i.setAttribute(t(n),e):E+=t(n)+":"+e+";")}var d,g,f,x,y,v,E="";if(1===i.nodeType&&-1===p.indexOf(i.nodeName)){if(d=m.getComputedStyle(i,null),g="svg"===i.nodeName?{}:m.getComputedStyle(i.parentNode,null),u[i.nodeName]||(n=o.getElementsByTagName("svg")[0],f=o.createElementNS(i.namespaceURI,i.nodeName),n.appendChild(f),u[i.nodeName]=c(m.getComputedStyle(f,null)),"text"===i.nodeName&&delete u.text.fill,n.removeChild(f)),w||b)for(var S in d)r(d[S],S);else h(d,r);E&&(d=i.getAttribute("style"),i.setAttribute("style",(d?d+";":"")+E)),"svg"===i.nodeName&&i.setAttribute("stroke-width","1px"),"text"!==i.nodeName&&[].forEach.call(i.children||i.childNodes,e)}}var n,o,r=this.renderer,a=r.inlineToAttributes,s=r.inlineBlacklist,l=r.inlineWhitelist,p=r.unstyledElements,u={};r=i.createElement("iframe");d(r,{width:"1px",height:"1px",visibility:"hidden"}),i.body.appendChild(r),o=r.contentWindow.document,o.open(),o.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),o.close(),e(this.container.querySelector("svg")),n.parentNode.removeChild(n)},v.menu=function(t,e,n,i){return["M",t,e+2.5,"L",t+n,e+2.5,"M",t,e+i/2+.5,"L",t+n,e+i/2+.5,"M",t,e+i-1.5,"L",t+n,e+i-1.5]},v.menuball=function(t,e,n,i){return t=[],i=i/3-2,t.concat(this.circle(n-i,e,i,i),this.circle(n-i,e+i+4,i,i),this.circle(n-i,e+2*(i+4),i,i))},o.prototype.renderExporting=function(){var t=this,e=t.options.exporting,n=e.buttons,i=t.isDirtyExporting||!t.exportSVGElements;t.buttonOffset=0,t.isDirtyExporting&&t.destroyExport(),i&&!1!==e.enabled&&(t.exportEvents=[],t.exportingGroup=t.exportingGroup||t.renderer.g("exporting-group").attr({zIndex:3}).add(),h(n,function(e){t.addButton(e)}),t.isDirtyExporting=!1),r(t,"destroy",t.destroyExport)},r(o,"init",function(){var t=this;t.exporting={update:function(e,n){t.isDirtyExporting=!0,c(!0,t.options.exporting,e),u(n,!0)&&t.redraw()}},e.addUpdate(function(e,n){t.isDirtyExporting=!0,c(!0,t.options.navigation,e),u(n,!0)&&t.redraw()},t)}),o.prototype.callbacks.push(function(t){t.renderExporting(),r(t,"redraw",t.renderExporting)})})(t,e)})},"23bf":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"min-width":"400px",height:"400px"},attrs:{id:"container"}})])}],r=n("ea7f");n("0319")(r);var a={mounted:function(){r.chart("container",{chart:{type:"column"},title:{text:"分公司效率优化嵌套图"},xAxis:{categories:["杭州总部","上海分部","北京分部"]},yAxis:[{min:0,title:{text:"雇员"}},{title:{text:"利润 (millions)"},opposite:!0}],legend:{shadow:!1},tooltip:{shared:!0},plotOptions:{column:{grouping:!1,shadow:!1,borderWidth:0}},series:[{name:"雇员",color:"rgba(165,170,217,1)",data:[150,73,20],pointPadding:.3,pointPlacement:-.2},{name:"优化的员工",color:"rgba(126,86,134,.9)",data:[140,90,40],pointPadding:.4,pointPlacement:-.2},{name:"利润",color:"rgba(248,161,63,1)",data:[183.6,178.8,198.5],tooltip:{valuePrefix:"$",valueSuffix:" M"},pointPadding:.3,pointPlacement:.2,yAxis:1},{name:"优化的利润",color:"rgba(186,60,61,.9)",data:[203.6,198.8,208.5],tooltip:{valuePrefix:"$",valueSuffix:" M"},pointPadding:.4,pointPlacement:.2,yAxis:1}]})}},s=a,l=n("2877"),p=Object(l["a"])(s,i,o,!1,null,null,null);p.options.__file="day.vue";e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-b91dc93a.10f854c5.js.map