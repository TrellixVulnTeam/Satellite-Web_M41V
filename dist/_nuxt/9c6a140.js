(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{196:function(t,e,r){var content=r(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("f4dd6304",content,!0,{sourceMap:!1})},197:function(t,e,r){t.exports=r.p+"img/g4533.bc59a7c.png"},198:function(t,e,r){t.exports=r.p+"img/g4532.1f3cea8.png"},199:function(t,e,r){"use strict";r(196)},200:function(t,e,r){var o=r(54)(!1);o.push([t.i,'.slider-wrapper .next[data-v-79dc94e6],.slider-wrapper .prev[data-v-79dc94e6]{width:30px;height:30px;display:inline-block;position:absolute;top:50%;transform:translateY(-50%);transform-origin:center center;z-index:1}.slider-wrapper .next img[data-v-79dc94e6],.slider-wrapper .prev img[data-v-79dc94e6]{-o-object-fit:contain;object-fit:contain;width:100%;height:100%}.slider-wrapper .prev[data-v-79dc94e6]{left:0}.slider-wrapper .next[data-v-79dc94e6]{right:0}.slider-wrapper .slider[data-v-79dc94e6]{padding-right:0;padding-left:0}.slider[data-v-79dc94e6]{display:flex;padding:0 35px}.slick-slide[data-v-79dc94e6]{width:200px;height:300px;border-radius:10px;background-color:#e8e8fa;padding:25px;flex-direction:column;margin-right:15px;transition:all .3s}.slick-slide[data-v-79dc94e6],.slick-slide .avatar[data-v-79dc94e6]{display:flex;justify-content:center;align-items:center}.slick-slide .avatar[data-v-79dc94e6]{width:100px;height:100px;background-color:#fff;border-radius:50%;margin-bottom:20px;color:#16161e}.avatar i[data-v-79dc94e6]{font-size:3rem}.avatar img[data-v-79dc94e6]{border-radius:5px}.slick-slide .name[data-v-79dc94e6]{font-family:"Space Mono",monospace;color:#16161e}.slick-slide .job[data-v-79dc94e6]{text-align:center;font-size:14px;position:relative}.job[data-v-79dc94e6]:after{content:"";position:absolute;left:50%;transform:translate(-50%);background-color:#3a3870;height:2px;width:70px;border-radius:5px;bottom:-5px}.socials[data-v-79dc94e6]{margin-top:15px;display:flex;justify-content:center}.socials .social[data-v-79dc94e6]{color:#16161e}.slider-wrapper[data-v-79dc94e6]{position:relative;display:flex;justify-content:flex-start;overflow:hidden;width:100%;margin:3rem auto}@media (max-width:768px){.slider-wrapper .slider .slick-slide[data-v-79dc94e6]{margin-right:30px;width:calc(100vw - 110px)}.slider-wrapper .prev[data-v-79dc94e6]{left:-8px}.slider-wrapper .next[data-v-79dc94e6]{right:-8px}}',""]),t.exports=o},201:function(t,e,r){"use strict";r.r(e);r(33);var o={name:"slider",data:function(){return{slides:[{name:"Matt Wisniewski",job:"Lead Developer",github:"https://github.com/RetroPronghorn",image:"https://gateway.pinata.cloud/ipfs/QmWaXhrzJkYrhR4vF4cHqhQs3M7LW9zMdChV8S7wJ2RaVP"},{name:"Manuel Tumiati",job:"Blockchain Developer",github:"https://github.com/iltumio",image:"https://gateway.pinata.cloud/ipfs/Qma6gqqtLCs1CrtgAcJjEoFLDQKjM7Gaa6jS3hDtDHksm8"},{name:"Jason Panay",job:"Developer",github:"https://github.com/jpanay",image:"https://gateway.pinata.cloud/ipfs/QmZqg7JJmeXcfYow5d4BQ9RzTqYMsULRurMVBaXJ3527Vr"},{name:"Kathy Chan",job:"Front-End Developer",github:"https://github.com/KemoPaw",image:"https://gateway.pinata.cloud/ipfs/QmSvdifA7TFb4MmatqgbpkTQSpzRkZkj33RcroQX5TudGF"},{name:"Dina Brodsky",job:"Art Director",github:"https://en.wikipedia.org/wiki/Dina_Brodsky",image:"https://gateway.pinata.cloud/ipfs/Qma1YnNDffkpHQoKAmwrVfLH77QzLimSwu9yZUKeCHwYZf"},{name:"Lauren Harrington",job:"Digital Design",github:"",image:"https://gateway.pinata.cloud/ipfs/QmPm3wLNuc5S6rZBfNP8HxWkoaLQDvhfEry9MXDBMGYbwB"}],current:0}},computed:{translate:function(){var t=this;return this.slides.map((function(e,r){return r+100*t.current}))}},methods:{onClickPrev:function(){this.current!=this.slides.length-1&&(this.current=this.current+1)},onClickNext:function(){0!=this.current&&(this.current=this.current-1)}}},n=(r(199),r(40)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("a",{staticClass:"prev",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onClickPrev(e)}}},[o("img",{attrs:{src:r(197),alt:""}})]),t._v(" "),o("div",{staticClass:"slider"},t._l(t.slides,(function(e,r){return o("div",{key:r+"-slide",staticClass:"slick-slide",style:{transform:"translateX("+t.translate[r]+"px)"}},[o("div",{staticClass:"avatar"},[o("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),o("div",{staticClass:"blank"},[o("h5",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),o("h6",{staticClass:"job"},[t._v(t._s(e.job))]),t._v(" "),o("div",{staticClass:"socials"},[o("a",{staticClass:"social",attrs:{href:e.github}},[o("i",{staticClass:"fab fa-github"})])])])])})),0),t._v(" "),o("a",{staticClass:"next",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onClickNext(e)}}},[o("img",{attrs:{src:r(198),alt:""}})])])}),[],!1,null,"79dc94e6",null);e.default=component.exports},202:function(t,e,r){var content=r(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("1b7833da",content,!0,{sourceMap:!1})},203:function(t,e,r){var content=r(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("9c47253a",content,!0,{sourceMap:!1})},204:function(t,e,r){t.exports=r.p+"img/g232333.2574902.png"},205:function(t,e,r){t.exports=r.p+"img/phone.b6dcef7.png"},206:function(t,e,r){t.exports=r.p+"img/logo-textile.dfd021d.png"},207:function(t,e,r){t.exports=r.p+"img/logo-polygon.362c7d5.png"},208:function(t,e,r){t.exports=r.p+"img/logo-jacketriver.24cce4e.webp"},209:function(t,e,r){t.exports=r.p+"img/logo-knobs.13e0e97.png"},210:function(t,e,r){t.exports=r.p+"img/phonestack.fdf036e.png"},211:function(t,e,r){t.exports=r.p+"img/g1030.fd6d364.png"},212:function(t,e,r){t.exports=r.p+"img/drone.2243ebb.png"},213:function(t,e,r){t.exports=r.p+"img/computers.b84561f.png"},214:function(t,e,r){t.exports=r.p+"img/chat.d04cfe6.png"},215:function(t,e,r){"use strict";r(202)},216:function(t,e,r){var o=r(54)(!1);o.push([t.i,"::-webkit-scrollbar{display:block!important}#app{position:relative!important}html{overflow:auto!important;overflow-y:auto!important;overflow-x:auto!important}body{background:#fff}",""]),t.exports=o},217:function(t,e,r){"use strict";r(203)},218:function(t,e,r){var o=r(54),n=r(219),l=r(220),c=r(221),d=r(222),v=r(223),m=r(224),f=r(225),h=r(226),x=r(227),_=r(228),w=o(!1),y=n(l),k=n(c),C=n(d),j=n(v),z=n(m),S=n(f),M=n(h),E=n(x),D=n(_);w.push([t.i,'.label[data-v-5822034e]{font-size:3rem;color:#3a3870;font-weight:700;font-family:"Space Mono",monospace}.label.dark[data-v-5822034e]{color:#16161e}.label.light[data-v-5822034e]{color:#d0cce1}.label.white[data-v-5822034e]{color:#fff}.button.is-custom[data-v-5822034e]{background-color:#3a3870;color:#fff;border:none;min-height:40px;font-size:12px;padding-left:35px;padding-right:35px}.button.button-download[data-v-5822034e],.button.is-custom-outline[data-v-5822034e]{color:#3a3870;min-height:40px;font-size:12px}.button.is-custom-outline[data-v-5822034e]{border:1px solid #3a3870;background-color:transparent}.button.is-custom-white-outline[data-v-5822034e]{color:#fff;border:1px solid #fff;background-color:transparent;min-height:40px;font-size:12px}.button.is-custom[data-v-5822034e],.button.is-custom-outline[data-v-5822034e]{font-family:"Space Mono",monospace}.footer[data-v-5822034e]{background-color:#323261;padding:50px 0}.footer[data-v-5822034e],.footer a[data-v-5822034e]{color:#fff}.footer h3[data-v-5822034e]{font-family:"Space Mono",monospace}.footer .socials a[data-v-5822034e]{color:#e1e1f4}.footer ul li[data-v-5822034e]{font-size:14px}.footer .location[data-v-5822034e]{background-color:#fff;font-family:"Space Mono",monospace;display:inline-block;color:#323261;padding:5px 15px;min-width:250px;z-index:2;position:relative;border-right:5px solid #323261}.footer .gray-line[data-v-5822034e]{position:relative;transform:translateY(-30px)}.footer .gray-line[data-v-5822034e]:after{content:"";border-bottom:1px solid #999;position:absolute;left:0;right:15px;bottom:0}.partners[data-v-5822034e]{background-color:#e8e8fa;padding:50px 300px 100px;position:relative}.partners .container[data-v-5822034e]{display:grid;grid-template-columns:3fr 3fr 3fr;grid-gap:40px}.partners .partner[data-v-5822034e]{display:flex;align-items:center;justify-content:center}.partners[data-v-5822034e]:after{top:-150px;left:0;right:0;position:absolute;content:"";display:block;width:100%;height:150px;background-image:url('+y+');background-size:cover;background-repeat:no-repeat;background-position:50%}.partners .label[data-v-5822034e]{margin-bottom:50px}.partners .partner img[data-v-5822034e]{width:270px}.join-alpha-out-team[data-v-5822034e]{padding-bottom:150px}.join-alpha-out-team p[data-v-5822034e]{color:#16161e}.join-alpha[data-v-5822034e]{margin-bottom:100px;display:flex}.join-alpha .chat-ilustration[data-v-5822034e],.join-alpha .description[data-v-5822034e]{width:50%}.join-alpha .description[data-v-5822034e]{padding-left:50px;padding-right:50px}.join-alpha .label[data-v-5822034e]{white-space:nowrap}.our-team[data-v-5822034e]{display:flex}.our-team .descrption[data-v-5822034e],.our-team .slider-wrapper[data-v-5822034e]{width:50%}.our-team .descrption[data-v-5822034e]{margin-left:0}.chat-ilustration[data-v-5822034e]{margin-left:100px}.chat-ilustration img[data-v-5822034e]{width:100%;height:100%;max-width:400px;-o-object-fit:cover;object-fit:cover}.our-team .slider[data-v-5822034e]{display:flex;padding:0 35px}.our-team .slick-slide[data-v-5822034e]{width:200px;height:300px;border-radius:10px;background-color:#e8e8fa;padding:25px;flex-direction:column;margin-right:15px}.our-team .slick-slide[data-v-5822034e],.our-team .slick-slide .avatar[data-v-5822034e]{display:flex;justify-content:center;align-items:center}.our-team .slick-slide .avatar[data-v-5822034e]{width:100px;height:100px;background-color:#fff;border-radius:50%;margin-bottom:20px;color:#16161e}.our-team .avatar i[data-v-5822034e]{font-size:3rem}.our-team .slick-slide .name[data-v-5822034e]{font-family:"Space Mono",monospace;color:#16161e}.our-team .slick-slide .job[data-v-5822034e]{text-align:center;font-size:14px;position:relative}.our-team .slick-slide .job[data-v-5822034e]:after{content:"";position:absolute;left:50%;transform:translate(-50%);background-color:#3a3870;height:2px;width:70px;border-radius:5px;bottom:-5px}.our-team .socials[data-v-5822034e]{margin-top:15px;display:flex;justify-content:center}.our-team .socials .social[data-v-5822034e]{color:#16161e}.our-team .slider-wrapper[data-v-5822034e]{position:relative;display:flex;justify-content:flex-end;overflow:hidden}.our-team .slider-wrapper .next[data-v-5822034e],.our-team .slider-wrapper .prev[data-v-5822034e]{width:30px;height:30px;display:inline-block;position:absolute;top:50%;transform:translateY(-50%);transform-origin:center center;z-index:1}.our-team .slider-wrapper .next img[data-v-5822034e],.our-team .slider-wrapper .prev img[data-v-5822034e]{-o-object-fit:contain;object-fit:contain;width:100%;height:100%}.our-team .slider-wrapper .prev[data-v-5822034e]{left:0}.our-team .slider-wrapper .next[data-v-5822034e]{right:0}.feature[data-v-5822034e]{display:flex;justify-content:center;background-image:url('+k+");background-size:50%;margin-bottom:150px;position:relative;flex-direction:column;align-items:center;background-color:#323360}.feature[data-v-5822034e],.feature .image-feature[data-v-5822034e]{background-position:50%;background-repeat:no-repeat}.feature .image-feature[data-v-5822034e]{background-image:url("+C+");background-size:contain;min-height:550px}.feature .label[data-v-5822034e]{margin:0}.feature[data-v-5822034e]:after{top:-179px;height:180px;background-image:url("+j+')}.feature[data-v-5822034e]:after,.feature[data-v-5822034e]:before{left:0;right:0;position:absolute;content:"";display:block;width:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.feature[data-v-5822034e]:before{bottom:-149px;height:150px;background-image:url('+z+')}.feature .phone[data-v-5822034e]{width:400px;margin:150px auto 50px;transform:translateY(-80px);position:relative}.feature .phone img[data-v-5822034e]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.feature .phone .left[data-v-5822034e],.feature .phone .right[data-v-5822034e]{position:absolute;top:-30px;bottom:0;display:flex;flex-direction:column;justify-content:space-around;max-width:250px}.feature .phone .left[data-v-5822034e]{left:-250px;text-align:right;padding-right:15px}.feature .phone .right[data-v-5822034e]{right:-250px;padding-left:15px}.feature .feature-description[data-v-5822034e],.features .feature-description[data-v-5822034e]{color:#fff;font-size:14px}.feature .feature-description h3[data-v-5822034e],.features .feature-description h3[data-v-5822034e]{font-family:"Space Mono",monospace;font-weight:700}.features[data-v-5822034e]{display:none}.features .feature-description[data-v-5822034e]{font-size:18px;margin-bottom:20px;padding-left:25px}.features .feature-description h3[data-v-5822034e]{margin-bottom:10px;position:relative}.features .feature-description p[data-v-5822034e]{line-height:20px}.features .feature-description h3[data-v-5822034e]:before{left:-530px;width:500px;border:2px solid #d0cde1}.features .feature-description h3[data-v-5822034e]:after,.features .feature-description h3[data-v-5822034e]:before{position:absolute;content:"";display:inline-block;top:50%;transform:translateY(-50%)}.features .feature-description h3[data-v-5822034e]:after{left:-35px;width:15px;height:15px;border-radius:50%;background-color:#d0cde1}.satellite[data-v-5822034e]{margin-bottom:250px}.satellite .we-just-work-better[data-v-5822034e]{margin-bottom:150px}.satellite-perks[data-v-5822034e],.we-just-work-better[data-v-5822034e]{display:grid;grid-template-columns:1fr 1fr;grid-gap:100px;align-items:center}.contect-anytime-anywhere[data-v-5822034e]{margin-bottom:100px;background-color:#16161e;padding-top:50px;overflow:hidden;background-image:url('+S+');background-repeat:no-repeat;background-size:cover;background-position:50%}.contect-anytime-anywhere .label[data-v-5822034e]{text-align:center;margin-bottom:100px}.contect-anytime-anywhere .phonestack[data-v-5822034e]{z-index:0;position:relative}.contect-anytime-anywhere .phonestack-mobile[data-v-5822034e]{display:none}.contect-anytime-anywhere .container[data-v-5822034e]:after,.contect-anytime-anywhere .container[data-v-5822034e]:before{content:"";position:absolute;z-index:2;bottom:-100px;left:0;width:100%;height:100px;right:0;box-shadow:0 0 130px #000}.contect-anytime-anywhere .container[data-v-5822034e]:before{top:-150px;bottom:unset}.meet-satellite[data-v-5822034e]{margin-bottom:80px}.meet-satellite .label[data-v-5822034e]{margin-bottom:50px}.meets[data-v-5822034e]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:30px}.meets .meet[data-v-5822034e]{border-radius:10px;background-color:#e8e8fa;display:flex;justify-content:center;align-items:center;padding:40px 20px;flex-direction:column;color:#16161e}.meets .meet[data-v-5822034e]:last-child{margin-right:0}.meets .meet .icon[data-v-5822034e]{font-size:3rem}.meets .meet h3[data-v-5822034e]{margin-top:25px;font-family:"Space Mono",monospace;color:#16161e}.main[data-v-5822034e]{background-color:#323261;background-image:url('+M+');background-repeat:no-repeat;background-size:cover;background-position:0 0;position:relative;margin-bottom:150px}.main p[data-v-5822034e]{color:#fff}.main .main-illustration[data-v-5822034e]{max-width:320px}.main .main-illustration img[data-v-5822034e]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.contect-anytime-anywhere .container[data-v-5822034e]:after{content:"";position:absolute;z-index:2;bottom:-100px;left:0;width:100%;height:100px;right:0;box-shadow:0 0 130px #000}.main[data-v-5822034e]:after{bottom:-149px;left:0;right:0;position:absolute;content:"";display:block;width:100%;height:150px;background-image:url('+E+');background-size:cover;background-repeat:no-repeat;background-position:50%}.header[data-v-5822034e]{padding:15px 0 50px;align-items:center}.header[data-v-5822034e],.main .menus[data-v-5822034e]{display:flex;justify-content:space-between}.main .menus[data-v-5822034e]{margin:0 auto}.main .menus .menu-item[data-v-5822034e]{text-transform:uppercase;color:#fff;font-family:"Space Mono",monospace;font-weight:600;font-size:14px;padding-bottom:3px;margin-right:50px}.main .menus .menu-item.active[data-v-5822034e]{border-bottom:4px solid #b0bae2}.main .welcome[data-v-5822034e]{display:flex;justify-content:space-around;align-items:center}.main .welcome .description[data-v-5822034e]{margin-bottom:50px}.main .bars[data-v-5822034e]{display:none}.main .logo[data-v-5822034e]{width:75px;height:75px;display:inline-block}.main .logo img[data-v-5822034e]{-o-object-fit:cover;object-fit:cover}.main .bars[data-v-5822034e]{color:#fff;font-size:33px}.burger-bar[data-v-5822034e]{position:fixed;top:0;right:0;bottom:0;width:50vw;background-color:#3a3870;z-index:100;box-shadow:0 5px 15px rgba(0,0,0,.35);padding:40px 20px 20px;transition:all .3s;transform:translateX(100vw);opacity:0}.burger-bar.open[data-v-5822034e]{transform:translateX(0);opacity:1}.burger-bar .bar[data-v-5822034e]{display:flex;flex-direction:column}.burger-bar .bar a[data-v-5822034e]{text-transform:uppercase;color:#fff;font-family:"Space Mono",monospace;font-weight:600;font-size:14px;margin-bottom:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.burger-bar .bar a.active[data-v-5822034e]{border-bottom:4px solid #d0cce1}.burger-bar .close[data-v-5822034e]{color:#fff;position:fixed;right:20px;top:15px}@media (max-width:768px){.container[data-v-5822034e]{padding-left:30px;padding-right:30px}.button[data-v-5822034e]{padding-top:25px;border-radius:10px}.button[data-v-5822034e],.main .header[data-v-5822034e]{padding-bottom:25px}.main .header .bars[data-v-5822034e]{display:inline-block}.main[data-v-5822034e]{background-size:200%}.main .welcome[data-v-5822034e]{flex-direction:column}.main .header .menus[data-v-5822034e]{display:none}.main .main-illustration[data-v-5822034e]{max-width:unset}.meet-satellite .meets[data-v-5822034e]{grid-template-columns:1fr;grid-gap:10px}.meet-satellite .meets .meet[data-v-5822034e]{margin:0 0 20px}.meet-satellite .meets .meat[data-v-5822034e]:last-child{margin-bottom:0}.contect-anytime-anywhere[data-v-5822034e]{background-size:200%}.contect-anytime-anywhere .phonestack[data-v-5822034e]{display:none;margin:0 auto}.contect-anytime-anywhere .phonestack-mobile[data-v-5822034e]{display:block;margin:0 auto}.contect-anytime-anywhere .label[data-v-5822034e]{margin-bottom:30px}.contect-anytime-anywhere .container[data-v-5822034e]{padding:0}.satellite[data-v-5822034e]{margin-bottom:130px}.satellite .satellite-perks[data-v-5822034e],.satellite .we-just-work-better[data-v-5822034e]{grid-template-columns:1fr;grid-gap:50px}.satellite .satellite-perks .label[data-v-5822034e],.satellite .we-just-work-better .label[data-v-5822034e]{font-size:30pt}.satellite .satellite-perks[data-v-5822034e]{display:flex;flex-direction:column-reverse}.satellite .illustration[data-v-5822034e]{margin-bottom:30px}.satellite .we-just-work-better[data-v-5822034e]{margin-bottom:100px}.partners[data-v-5822034e]{padding:0}.feature .phone .left[data-v-5822034e]{max-width:unset;display:none}.feature .label[data-v-5822034e]{font-size:35px}.feature .image-feature[data-v-5822034e]{background-image:url('+D+");background-size:contain;background-position:50%;background-repeat:no-repeat;width:230px}.feature .phone .left[data-v-5822034e],.feature .phone .right[data-v-5822034e]{display:none}.join-alpha .label[data-v-5822034e]{white-space:normal}.feature .phone[data-v-5822034e]{width:unset}.feature[data-v-5822034e]{background-size:150%;background-position:center 25%;margin-bottom:70px}.features[data-v-5822034e]{display:flex;flex-direction:column}.join-alpha[data-v-5822034e]{flex-direction:column-reverse}.join-alpha .chat-ilustration[data-v-5822034e],.join-alpha .description[data-v-5822034e]{width:100%;margin:0}.join-alpha .description[data-v-5822034e]{margin-top:15px;padding:0}.our-team[data-v-5822034e]{flex-direction:column}.our-team .descrption[data-v-5822034e],.our-team .slider-wrapper[data-v-5822034e]{width:100%;margin:30px 0 0}.our-team .button.is-custom[data-v-5822034e]{width:100%}.our-team .slider-wrapper .slider[data-v-5822034e]{padding-right:0;padding-left:0}.our-team .slider-wrapper .slider .slick-slide[data-v-5822034e]{margin-right:25px;width:calc(100vw - 110px)}.our-team .slider-wrapper .prev[data-v-5822034e]{left:-8px}.our-team .slider-wrapper .next[data-v-5822034e]{right:-8px}.partners[data-v-5822034e]{padding-bottom:50px}.partners .label[data-v-5822034e]{font-size:2.5rem}.partners .container[data-v-5822034e]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}.footer h3[data-v-5822034e],.footer ul li[data-v-5822034e]{text-align:center}.footer h3[data-v-5822034e]{font-size:1.3rem;margin-bottom:0!important}.footer ul li[data-v-5822034e]{font-size:1.1rem}.footer .socials[data-v-5822034e]{width:100%;display:flex;justify-content:center;margin-bottom:0!important}.footer .socials .social[data-v-5822034e]{font-size:1.5rem}.footer .location[data-v-5822034e]{width:100%;text-align:center}.footer .location-socials[data-v-5822034e]{flex-direction:column-reverse;display:flex}.footer .gray-line[data-v-5822034e]:after{left:-110px;right:-110px}.footer .wrapper-location[data-v-5822034e]{padding:0}.footer .button.is-custom[data-v-5822034e]{width:100%}.button[data-v-5822034e]{font-size:16px!important}.footer[data-v-5822034e]{display:flex}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (-webkit-min-device-pixel-ratio:1){.feature[data-v-5822034e]{background-size:100%;background-position:center 5%}.join-alpha .chat-ilustration[data-v-5822034e]{display:flex;justify-content:center}}",""]),t.exports=w},219:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},220:function(t,e,r){t.exports=r.p+"img/g1072.400348c.png"},221:function(t,e,r){t.exports=r.p+"img/g66.928aaee.png"},222:function(t,e,r){t.exports=r.p+"img/g3032.91de064.png"},223:function(t,e,r){t.exports=r.p+"img/g976.5b4cb4b.png"},224:function(t,e,r){t.exports=r.p+"img/g986.9ddc007.png"},225:function(t,e,r){t.exports=r.p+"img/g85.1a74e42.png"},226:function(t,e,r){t.exports=r.p+"img/background.df5511c.png"},227:function(t,e,r){t.exports=r.p+"img/g952.b146aaa.png"},228:function(t,e,r){t.exports=r.p+"img/g3034.f6eb8d6.png"},229:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo",attrs:{href:"#"}},[e("img",{attrs:{src:r(204),alt:"logo"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menus"},[r("a",{staticClass:"menu-item active",attrs:{href:"#keyfeatures"}},[t._v(" Key Features ")]),t._v(" "),r("a",{staticClass:"menu-item",attrs:{href:"#about"}},[t._v(" About ")]),t._v(" "),r("a",{staticClass:"menu-item",attrs:{href:"#earlyaccess"}},[t._v(" Early Access ")]),t._v(" "),r("a",{staticClass:"menu-item",attrs:{href:"#team"}},[t._v(" Team ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar"},[r("a",{staticClass:"item active",attrs:{href:"#"}},[t._v(" key features ")]),t._v(" "),r("a",{staticClass:"item",attrs:{href:"#"}},[t._v(" customizable ")]),t._v(" "),r("a",{staticClass:"item",attrs:{href:"#"}},[t._v(" token ")]),t._v(" "),r("a",{staticClass:"item",attrs:{href:"#"}},[t._v(" road map ")]),t._v(" "),r("a",{staticClass:"item",attrs:{href:"#"}},[t._v(" team ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"welcome"},[o("div",{staticClass:"description"},[o("h3",{staticClass:"label white"},[t._v("\n            Freedom,"),o("br"),t._v("\n            Now In 4K\n          ")]),t._v(" "),o("p",[t._v("\n            Satellite gives you peace of mind with end-to-end "),o("br"),t._v("\n             encryption without sacrificing quality. "),o("br"),t._v("\n             Stream in 4k, chat in 500kbs+, share 10GB files.\n          ")]),t._v(" "),o("div",{staticClass:"columns mt-5"},[o("div",{staticClass:"column"},[o("a",{staticClass:"button is-fullwidth button-download",attrs:{href:"http://eepurl.com/htF8cf",target:"_blank"}},[t._v("Sign Up")])]),t._v(" "),o("div",{staticClass:"column"},[o("a",{staticClass:"button is-fullwidth is-custom-white-outline",attrs:{href:"https://satellite.im"}},[t._v("Open in Browser")])])])]),t._v(" "),o("div",{staticClass:"illustration"},[o("div",{staticClass:"main-illustration"},[o("img",{attrs:{src:r(205),alt:""}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"meet-satellite"},[r("div",{staticClass:"container"},[r("h3",{staticClass:"label dark has-text-centered"},[t._v("Meet Satellite")]),t._v(" "),r("div",{staticClass:"meets"},[r("div",{staticClass:"meet"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"far fa-comment-alt"})]),t._v(" "),r("h3",[t._v("Feature Rich Chat")])]),t._v(" "),r("div",{staticClass:"meet"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-lock"})]),t._v(" "),r("h3",[t._v("E2E Encryption")])]),t._v(" "),r("div",{staticClass:"meet"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-mobile-alt"})]),t._v(" "),r("h3",[t._v("Cross-Platform")])]),t._v(" "),r("div",{staticClass:"meet"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-coins"})]),t._v(" "),r("h3",[t._v("Painless Payments")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"partners"},[o("h3",{staticClass:"label has-text-centered"},[t._v("Powered By")]),t._v(" "),o("div",{staticClass:"container"},[o("a",{staticClass:"partner",attrs:{href:"http://textile.io/",target:"_blank"}},[o("img",{attrs:{src:r(206),alt:"vim"}})]),t._v(" "),o("a",{staticClass:"partner",attrs:{href:"https://polygon.technology/",target:"_blank"}},[o("img",{attrs:{src:r(207),alt:"rect"}})]),t._v(" "),o("a",{staticClass:"partner",attrs:{href:"https://www.jacketriver.com/",target:"_blank"}},[o("img",{attrs:{src:r(208),alt:"rect"}})]),t._v(" "),o("a",{staticClass:"partner",attrs:{href:"https://knobs.it/en/knobs-en/",target:"_blank"}},[o("img",{attrs:{src:r(209),alt:"rect"}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contect-anytime-anywhere"},[o("div",{staticClass:"container"},[o("h3",{staticClass:"label white"},[t._v("Connect, anytime, anywhere.")]),t._v(" "),o("img",{staticClass:"phonestack",attrs:{src:r(210),alt:"phonestack"}}),t._v(" "),o("img",{staticClass:"phonestack-mobile",attrs:{src:r(211),alt:"phonestack"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"satellite",attrs:{id:"about"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"we-just-work-better"},[o("div",{staticClass:"illustration"},[o("img",{attrs:{src:r(212),alt:""}})]),t._v(" "),o("div",{staticClass:"description"},[o("h3",{staticClass:"label dark"},[t._v("No Compromises")]),t._v(" "),o("p",[t._v("\n            Satellite is built using serverless technology with peer 2 peer workflows. Everything is encrypted \n            so your data only gets read by who you inted it to. We store files on a distributed network so redundacy\n            comes built in along with large file storage.\n          ")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("\n            All these things come without compromises to your experience.\n          ")])])])]),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"satellite-perks"},[o("div",{staticClass:"description"},[o("h3",{staticClass:"label dark"},[t._v("Multi-Platform")]),t._v(" "),o("p",[t._v("\n            Chat from anywhere, from desktop and beyond Satellite has you covered. Satellite is also built to be offline-first \n            so wether you have a good connection or not you can be sure you get your message out there! Our mobile app installs\n            as a PWA during Early Access so setup is quick, and you get updates immediatly.\n          ")]),t._v(" "),o("br"),t._v(" "),o("a",{staticClass:"button is-custom mt-5",attrs:{href:"#"}},[t._v("Try the Alpha")])]),t._v(" "),o("div",{staticClass:"illustration"},[o("img",{attrs:{src:r(213),alt:"computers"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature",attrs:{id:"keyfeatures"}},[r("h1",{staticClass:"label light"},[t._v("Key Features")]),t._v(" "),r("div",{staticClass:"phone"},[r("div",{staticClass:"left"},[r("div",{staticClass:"feature-description"},[r("h3",[t._v("Easy Installation")]),t._v(" "),r("p",[t._v("Satellite installs with one click.")])]),t._v(" "),r("div",{staticClass:"feature-description"},[r("h3",[t._v("Multi Platform chat")]),t._v(" "),r("p",[t._v("Chat anywhere with our cross platform app.")])]),t._v(" "),r("div",{staticClass:"feature-description"},[r("h3",[t._v("Easy File sharing")]),t._v(" "),r("p",[t._v("Share up to 10GB files instantly with friends.")])])]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"feature-description"},[r("h3",[t._v("Built-in Payments")]),t._v(" "),r("p",[t._v("Send money between friends instantly.")])]),t._v(" "),r("div",{staticClass:"feature-description"},[r("h3",[t._v("High Quality Streaming")]),t._v(" "),r("p",[t._v("Stream at up to 4k")])]),t._v(" "),r("div",{staticClass:"feature-description"},[r("h3",[t._v("Serverless")]),t._v(" "),r("p",[t._v("Your data goes straight to your friends, nobody tracking in the middle.")])])]),t._v(" "),r("div",{staticClass:"image-feature"})]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"features"},[r("div",{staticClass:"feature-description"},[r("h3",[t._v("Easy Installation")]),t._v(" "),r("p",[t._v("Satellite installs with one click.")])]),t._v(" "),r("div",{staticClass:"feature-description"},[r("h3",[t._v("Multi Platform chat")]),t._v(" "),r("p",[t._v("Chat anywhere with our cross platform app.")])]),t._v(" "),r("div",{staticClass:"feature-description"},[r("h3",[t._v("Easy File sharing")]),t._v(" "),r("p",[t._v("Share up to 10GB files instantly with friends.")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"join-alpha"},[o("div",{staticClass:"description"},[o("h3",{staticClass:"label dark"},[t._v("Early Access")]),t._v(" "),o("p",[t._v("\n            Satellite is nearing our early access beta! If you'd like to get started ahead of the curve\n            you can join our mailing list and get notified of releases. You can give Satellite a try\n            right now but expect some bugs and please understand it is not representitive of our final product.\n          ")]),t._v(" "),o("br"),t._v(" "),o("p",[t._v("\n            Satellite installs as a PWA which makes it very easy to get started, just navigate to https://satellite.im on your \n            phone to get started.\n          ")]),t._v(" "),o("div",{staticClass:"columns mt-5"},[o("div",{staticClass:"column"},[o("a",{staticClass:"button is-custom is-fullwidth",attrs:{href:"http://eepurl.com/htF8cf"}},[t._v("Sign Up")])]),t._v(" "),o("div",{staticClass:"column"},[o("a",{staticClass:"button is-custom-outline is-fullwidth",attrs:{href:"https://satellite.im"}},[t._v("Try Pre-Relase")])])])]),t._v(" "),o("div",{staticClass:"chat-ilustration"},[o("img",{attrs:{src:r(214),alt:"chat"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"our-team"},[r("div",{staticClass:"descrption"},[r("h3",{staticClass:"label dark"},[t._v("Our Team")]),t._v(" "),r("p",{staticClass:"mb-5"},[t._v("\n            Satellite is full of passionate open-source developers as well as our in house team which both work hard to build\n            a different kind of chat platform.\n          ")]),t._v(" "),r("a",{staticClass:"button is-custom",attrs:{href:"https://github.com/satellite-im"}},[t._v("GitHub")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns mb-6"},[r("div",{staticClass:"column is-one-quarter"},[r("h3",{staticClass:"mb-3 has-text-weight-bold"},[t._v("Socials")]),t._v(" "),r("ul",[r("li",{staticClass:"mb-2"},[r("a",{attrs:{href:"https://twitter.com/Satellite_im"}},[t._v(" Twitter ")])]),t._v(" "),r("li",{staticClass:"mb-2"},[r("a",{attrs:{href:"https://github.com/Satellite-im"}},[t._v(" GitHub ")])]),t._v(" "),r("li",{staticClass:"mb-2"},[r("a",{attrs:{href:"https://gitcoin.co/grants/1695/vault74-a-fast-painless-decentralized-chat"}},[t._v(" Gitcoin ")])])])]),t._v(" "),r("div",{staticClass:"column is-one-quarter"},[r("h3",{staticClass:"mb-3 has-text-weight-bold"},[t._v("Other sites")]),t._v(" "),r("ul",[r("li",{staticClass:"mb-2"},[r("a",{attrs:{href:"https://app.satellite.im"}},[t._v("The App ")])])])]),t._v(" "),r("div",{staticClass:"column is-one-quarter"},[r("h3",{staticClass:"mb-3 has-text-weight-bold"},[t._v("Careers")]),t._v(" "),r("ul",[r("li",{staticClass:"mb-2"},[r("a",{attrs:{href:"mailto:matt.wisniewski@jacketriver.com"}},[t._v("Contact Us")])])])]),t._v(" "),r("div",{staticClass:"column"})]),t._v(" "),r("div",{staticClass:"columns is-vcentered location-socials"},[r("div",{staticClass:"column is-one-quarter wrapper-location"},[r("span",{staticClass:"location has-text-weight-bold"},[t._v("United states")])]),t._v(" "),r("div",{staticClass:"column is-justify-content-flex-end is-flex gray-line"},[r("div",{staticClass:"socials mb-3"},[r("a",{staticClass:"social mr-3",attrs:{href:"https://twitter.com/Satelite_im"}},[r("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),r("a",{staticClass:"social mr-3",attrs:{href:"https://www.linkedin.com/company/75854802"}},[r("i",{staticClass:"fab fa-linkedin"})]),t._v(" "),r("a",{staticClass:"social",attrs:{href:"https://github.com/Satellite-im"}},[r("i",{staticClass:"fab fa-github"})])])])])])])}],n={name:"Landing",components:{Slider:r(201).default},data:function(){return{toggleSideBar:!1}}},l=(r(215),r(217),r(40)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"landing"},[r("div",{staticClass:"main"},[r("div",{staticClass:"container header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("a",{staticClass:"bars",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSideBar=!0}}},[r("i",{staticClass:"fas fa-bars"})]),t._v(" "),r("div",{staticClass:"burger-bar",class:{open:t.toggleSideBar}},[r("a",{staticClass:"close",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSideBar=!1}}},[r("i",{staticClass:"fas fa-times"})]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"join-alpha-out-team",attrs:{id:"earlyaccess"}},[t._m(9),t._v(" "),r("div",{staticClass:"container",attrs:{id:"team"}},[t._m(10),t._v(" "),r("slider",{staticClass:"slider-wrapper"})],1)]),t._v(" "),t._m(11)])}),o,!1,null,"5822034e",null);e.default=component.exports;installComponents(component,{Slider:r(201).default})}}]);