(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{257:function(t,e,a){},263:function(t,e,a){"use strict";a(257)},270:function(t,e,a){"use strict";a.r(e);var n={data:()=>({active:0}),computed:{bannerData(){return this.$frontmatter.banner}},methods:{change(t){this.active=t}}},s=(a(263),a(13)),r=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("el-carousel",{staticClass:"banner",attrs:{trigger:"click",height:"500px",arrow:"never"},on:{change:t.change}},t._l(t.bannerData,(function(a,n){return e("el-carousel-item",{key:n},[e("div",{staticClass:"banner-item",style:{backgroundImage:"url("+t.$withBase(a.img)+")"}},[t.active===n?e("a",{staticClass:"banner-info",attrs:{href:a.url,target:"_blank"}},[e("p",{staticClass:"wow title",class:"lr"===a.type?"fadeInRight":"fadeInDown"},[t._v(t._s(a.title))]),t._v(" "),e("p",{staticClass:"wow sub-title",class:"lr"===a.type?"fadeInLeft":"fadeInUp"},[t._v(t._s(a.subTitle))])]):t._e()])])})),1)}),[],!1,null,null,null);e.default=r.exports}}]);