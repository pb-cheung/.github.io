(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{419:function(t,a,v){t.exports=v.p+"assets/img/browser-draw-process.fdff4fd1.jpeg"},527:function(t,a,v){"use strict";v.r(a);var _=v(56),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器的回流和重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的回流和重绘"}},[t._v("#")]),t._v(" 浏览器的回流和重绘")]),t._v(" "),_("h2",{attrs:{id:"reflow-回流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reflow-回流"}},[t._v("#")]),t._v(" Reflow-回流")]),t._v(" "),_("h3",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),_("p",[t._v("渲染树（"),_("code",[t._v("Render Tree")]),t._v("）的一部分发生改变（树上的节点发生的位置和尺寸发生改变）\n，引起浏览器的重新渲染叫做"),_("code",[t._v("reflow")]),t._v("，或者叫做"),_("code",[t._v("layout")]),t._v("、"),_("code",[t._v("layouting")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("回流又名重排，指几何属性需改变的渲染。\n可理解成将整个页面填白，对内容重新渲染一次。人眼并不能感受到这一过程。")])]),t._v(" "),_("h3",{attrs:{id:"引发回流的操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引发回流的操作"}},[t._v("#")]),t._v(" 引发回流的操作")]),t._v(" "),_("ul",[_("li",[t._v("元素尺寸、位置变化")]),t._v(" "),_("li",[t._v("窗口尺寸变化")]),t._v(" "),_("li",[t._v("元素字体变化")]),t._v(" "),_("li",[t._v("添加or删除可见的DOM")]),t._v(" "),_("li",[t._v("激活伪类（例如：:hover）")]),t._v(" "),_("li",[t._v("盒子相关的API调用（elem.clientWidth）")]),t._v(" "),_("li",[t._v("滚动相关的API调用（ elem.scrollTo）")])]),t._v(" "),_("h2",{attrs:{id:"repaint-重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#repaint-重绘"}},[t._v("#")]),t._v(" Repaint-重绘")]),t._v(" "),_("p",[t._v("屏幕中的一部分（对应DOM树种的某个节点）的样式发生变化，\n只引发该部分单独的显示效果变化叫做"),_("code",[t._v("repaint")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("重绘指更改外观属性而不影响几何属性的渲染。")])]),t._v(" "),_("h3",{attrs:{id:"引发重绘的操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引发重绘的操作"}},[t._v("#")]),t._v(" 引发重绘的操作")]),t._v(" "),_("ul",[_("li",[t._v("修改background")]),t._v(" "),_("li",[t._v("修改visiblility")]),t._v(" "),_("li",[t._v("修改border")])]),t._v(" "),_("h2",{attrs:{id:"优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),_("p",[t._v("回流和重绘对于浏览器来说是代价昂贵的，应当尽可能避免。")]),t._v(" "),_("h3",{attrs:{id:"避免措施"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#避免措施"}},[t._v("#")]),t._v(" 避免措施")]),t._v(" "),_("ul",[_("li",[t._v("避免使用"),_("code",[t._v("table")]),t._v("布局")]),t._v(" "),_("li",[t._v("避免设置多层内联样式")]),t._v(" "),_("li",[t._v("避免频繁修改样式，最好一次性重写style属性，将样式列表定义为class，一次性修改class属性")]),t._v(" "),_("li",[t._v("尽可能在DOM树的最末端（树的叶子）修改改变class")]),t._v(" "),_("li",[t._v("避免使用CSS表达式（calc）")]),t._v(" "),_("li",[t._v("有动画的元素将其脱离文档流（"),_("code",[t._v("positioin: absolute|fixed")]),t._v("），这样修改样式只引起重绘，不会造成回流")]),t._v(" "),_("li",[t._v("transform代替top")]),t._v(" "),_("li",[t._v("CSS3硬件加速（GPU加速）")])]),t._v(" "),_("h2",{attrs:{id:"补充-浏览器渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补充-浏览器渲染过程"}},[t._v("#")]),t._v(" 补充：浏览器渲染过程")]),t._v(" "),_("p",[_("img",{attrs:{src:v(419),alt:"浏览器渲染过程"}})]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("p",[t._v("https://medium.com/swlh/what-the-heck-is-repaint-and-reflow-in-the-browser-b2d0fb980c08\nhttps://juejin.cn/post/6844903569087266823")])])}),[],!1,null,null,null);a.default=e.exports}}]);