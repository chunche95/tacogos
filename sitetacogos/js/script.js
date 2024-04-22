"use strict";!function(){var t=navigator.userAgent.toLowerCase(),a=new Date,e=$(document),r=$(window),i=$("html"),o=($("body"),i.hasClass("desktop")),l=-1!==t.indexOf("msie")?parseInt(t.split("msie")[1],10):-1!==t.indexOf("trident")?11:-1!==t.indexOf("edge")&&12,s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n=!1,d=!1,c={bootstrapTooltip:$("[data-toggle='tooltip']"),bootstrapTabs:$(".tabs-custom"),copyrightYear:$(".copyright-year"),isotope:$(".isotope-wrap"),lightGallery:$("[data-lightgallery='group']"),lightGalleryItem:$("[data-lightgallery='item']"),lightDynamicGalleryItem:$("[data-lightgallery='dynamic']"),materialParallax:$(".parallax-container"),owl:$(".owl-carousel"),preloader:$(".preloader"),rdNavbar:$(".rd-navbar"),rdMailForm:$(".rd-mailform"),rdInputLabel:$(".form-label"),regula:$("[data-constraints]"),swiper:$(".swiper-container"),viewAnimate:$(".view-animate"),wow:$(".wow"),maps:$(".google-map-container"),slick:$(".slick-slider"),selectFilter:$("select"),bootstrapDateTimePicker:$("[data-time-picker]")};function u(t){return!!d||t.offset().top+t.outerHeight()>=r.scrollTop()&&t.offset().top<=r.scrollTop()+r.height()}r.on("load",function(){if(c.preloader.length&&!d&&pageTransition({target:document.querySelector(".page"),delay:0,duration:500,classIn:"fadeIn",classOut:"fadeOut",classActive:"animated",conditions:function(t,a){return a&&!/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(a)&&!t.currentTarget.hasAttribute("data-lightgallery")},onTransitionStart:function(t){setTimeout(function(){c.preloader.removeClass("loaded")},.75*t.duration)},onReady:function(){c.preloader.addClass("loaded"),n=!0}}),c.isotope.length)for(var t=0;t<c.isotope.length;t++){var a=c.isotope[t],e=function(t){t.preventDefault();for(var a=0;a<this.isoGroup.filters.length;a++)this.isoGroup.filters[a].classList.remove("active");this.classList.add("active"),this.isoGroup.isotope.arrange({filter:"*"!==this.getAttribute("data-isotope-filter")?'[data-filter*="'+this.getAttribute("data-isotope-filter")+'"]':"*"})},r=function(){this.isoGroup.isotope.layout()};a.isoGroup={},a.isoGroup.filters=a.querySelectorAll("[data-isotope-filter]"),a.isoGroup.node=a.querySelector(".isotope"),a.isoGroup.layout=a.isoGroup.node.getAttribute("data-isotope-layout")?a.isoGroup.node.getAttribute("data-isotope-layout"):"masonry",a.isoGroup.columnWidth=a.isoGroup.node.getAttribute("data-column-class"),a.isoGroup.opts={itemSelector:".isotope-item",layoutMode:a.isoGroup.layout,filter:"*"},a.isoGroup.columnWidth&&(a.isoGroup.opts.masonry={columnWidth:a.isoGroup.columnWidth}),a.isoGroup.isotope=new Isotope(a.isoGroup.node,a.isoGroup.opts);for(var i=0;i<a.isoGroup.filters.length;i++){var o=a.isoGroup.filters[i];o.isoGroup=a.isoGroup,o.addEventListener("click",e)}window.addEventListener("resize",r.bind(a))}if(c.materialParallax.length){if(d||l||s)for(var t=0;t<c.materialParallax.length;t++){var u=$(c.materialParallax[t]);u.addClass("parallax-disabled"),u.css({"background-image":"url("+u.data("parallax-img")+")"})}else c.materialParallax.parallax()}}),$(function(){function t(t){for(var a,e=$(t.slides[t.previousIndex]),r=$(t.slides[t.activeIndex]),i=e.find("video"),o=0;o<i.length;o++)i[o].pause();(a=r.find("video")).length&&a.get(0).play()}function n(t){for(var a=0;a<c.swiper.length;a++){var e=$(c.swiper[a]),r=e.find("."+t.params.slideClass),i=e.find(".swiper-counter");e.find(".swiper-slide").length;for(var o=0;o<r.length;o++)$(r[o]).hasClass(t.params.slideActiveClass)&&i.html('<span class="count">0'+(o+1)+"</span>")}}function p(t){for(var a,e,r,i,o=$(t.container).find("[data-caption-animate]"),l=$(t.slides[t.activeIndex]).find("[data-caption-animate]"),s=0;s<o.length;s++)(i=$(o[s])).removeClass("animated").removeClass(i.attr("data-caption-animate")).addClass("not-animated");for(var n=function(t,a){return function(){t.removeClass("not-animated").addClass(t.attr("data-caption-animate")).addClass("animated"),a&&t.css("animation-duration",a+"ms")}},s=0;s<l.length;s++)a=(r=$(l[s])).attr("data-caption-delay"),e=r.attr("data-caption-duration"),d?r.removeClass("not-animated"):a?setTimeout(n(r,e),parseInt(a,10)):n(r,e)}function g(t){for(var a=["-","-sm-","-md-","-lg-","-xl-","-xxl-"],e=[0,576,768,992,1200,1600],r={},i=0;i<e.length;i++){r[e[i]]={};for(var o=i;o>=-1;o--)!r[e[i]].items&&t.attr("data"+a[o]+"items")&&(r[e[i]].items=o<0?1:parseInt(t.attr("data"+a[o]+"items"),10)),!r[e[i]].stagePadding&&0!==r[e[i]].stagePadding&&t.attr("data"+a[o]+"stage-padding")&&(r[e[i]].stagePadding=o<0?0:parseInt(t.attr("data"+a[o]+"stage-padding"),10)),!r[e[i]].margin&&0!==r[e[i]].margin&&t.attr("data"+a[o]+"margin")&&(r[e[i]].margin=o<0?30:parseInt(t.attr("data"+a[o]+"margin"),10))}t.attr("data-dots-custom")&&t.on("initialized.owl.carousel",function(t){var a=$(t.currentTarget),e=$(a.attr("data-dots-custom")),r=0;a.attr("data-active")&&(r=parseInt(a.attr("data-active"),10)),a.trigger("to.owl.carousel",[r,300,!0]),e.find("[data-owl-item='"+r+"']").addClass("active"),e.find("[data-owl-item]").on("click",function(t){t.preventDefault(),a.trigger("to.owl.carousel",[parseInt(this.getAttribute("data-owl-item"),10),300,!0])}),a.on("translate.owl.carousel",function(t){e.find(".active").removeClass("active"),e.find("[data-owl-item='"+t.item.index+"']").addClass("active")})}),t.on("initialized.owl.carousel",function(){b(t.find('[data-lightgallery="item"]'),"lightGallery-in-carousel")}),t.owlCarousel({autoplay:!d&&"true"===t.attr("data-autoplay"),loop:!d&&"false"!==t.attr("data-loop"),items:1,center:"true"===t.attr("data-center"),dotsContainer:t.attr("data-pagination-class")||!1,navContainer:t.attr("data-navigation-class")||!1,mouseDrag:!d&&"false"!==t.attr("data-mouse-drag"),nav:"true"===t.attr("data-nav"),dots:"true"===t.attr("data-dots"),dotsEach:!!t.attr("data-dots-each")&&parseInt(t.attr("data-dots-each"),10),animateIn:!!t.attr("data-animation-in")&&t.attr("data-animation-in"),animateOut:!!t.attr("data-animation-out")&&t.attr("data-animation-out"),responsive:r,navText:t.attr("data-nav-text")?$.parseJSON(t.attr("data-nav-text")):[],navClass:t.attr("data-nav-class")?$.parseJSON(t.attr("data-nav-class")):["owl-prev","owl-next"]})}function m(t,a){var e,r=0;if(t.length){for(var i=0;i<t.length;i++){var o=$(t[i]);if((e=o.regula("validate")).length)for(H=0;H<e.length;H++)r++,o.siblings(".form-validation").text(e[H].message).parent().addClass("has-error");else o.siblings(".form-validation").text("").parent().removeClass("has-error")}return 0===r}return!0}function f(t){c.bootstrapTooltip.tooltip("dispose"),window.innerWidth<576?c.bootstrapTooltip.tooltip({placement:"bottom"}):c.bootstrapTooltip.tooltip({placement:t})}function h(t,a){d||$(t).lightGallery({thumbnail:"false"!==$(t).attr("data-lg-thumbnail"),selector:"[data-lightgallery='item']",autoplay:"true"===$(t).attr("data-lg-autoplay"),pause:parseInt($(t).attr("data-lg-autoplay-delay"))||5e3,addClass:a,mode:$(t).attr("data-lg-animation")||"lg-slide",loop:"false"!==$(t).attr("data-lg-loop")})}function v(t,a){d||$(t).on("click",function(){$(t).lightGallery({thumbnail:"false"!==$(t).attr("data-lg-thumbnail"),selector:"[data-lightgallery='item']",autoplay:"true"===$(t).attr("data-lg-autoplay"),pause:parseInt($(t).attr("data-lg-autoplay-delay"))||5e3,addClass:a,mode:$(t).attr("data-lg-animation")||"lg-slide",loop:"false"!==$(t).attr("data-lg-loop"),dynamic:!0,dynamicEl:JSON.parse($(t).attr("data-lg-dynamic-elements"))||[]})})}function b(t,a){d||$(t).lightGallery({selector:"this",addClass:a,counter:!1,youtubePlayerParams:{modestbranding:1,showinfo:0,rel:0,controls:0},vimeoPlayerParams:{byline:0,portrait:0}})}function y(t,a,e,r){var i={};try{i=JSON.parse(t),r(new google.maps.LatLng(i.lat,i.lng),a,e)}catch(o){e.geocoder.geocode({address:t},function(t,i){if(i===google.maps.GeocoderStatus.OK){var o=t[0].geometry.location.lat(),l=t[0].geometry.location.lng();r(new google.maps.LatLng(parseFloat(o),parseFloat(l)),a,e)}})}}if(d=window.xMode,navigator.platform.match(/(Mac)/i)&&i.addClass("mac-os"),l&&(12===l&&i.addClass("ie-edge"),11===l&&i.addClass("ie-11"),l<10&&i.addClass("lt-ie-10"),l<11&&i.addClass("ie-10")),c.bootstrapTooltip.length){var w=c.bootstrapTooltip.attr("data-placement");f(w),r.on("resize orientationchange",function(){f(w)})}if(c.bootstrapTabs.length)for(var k=0;k<c.bootstrapTabs.length;k++){var C=$(c.bootstrapTabs[k]);C.find(".slick-slider").length&&C.find(".tabs-custom-list > li > a").on("click",$.proxy(function(){var t=$(this);setTimeout(function(){t.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition")},d?1500:300)},C))}if(c.copyrightYear.length&&c.copyrightYear.text(a.getFullYear()),c.maps.length&&(S=c.maps,N=function t(){for(var a,e=0;e<c.maps.length;e++)if(c.maps[e].hasAttribute("data-key")){a=c.maps[e].getAttribute("data-key");break}$.getScript("//maps.google.com/maps/api/js?"+(a?"key="+a+"&":"")+"sensor=false&libraries=geometry,places&v=quarterly",function(){var t=document.getElementsByTagName("head")[0],a=t.insertBefore;t.insertBefore=function(e,r){(!e.href||-1===e.href.indexOf("//fonts.googleapis.com/css?family=Roboto"))&&-1===e.innerHTML.indexOf("gm-style")&&a.call(t,e,r)};for(var e=new google.maps.Geocoder,r=0;r<c.maps.length;r++){var i=parseInt(c.maps[r].getAttribute("data-zoom"),10)||11,o=c.maps[r].hasAttribute("data-styles")?JSON.parse(c.maps[r].getAttribute("data-styles")):[],l=c.maps[r].getAttribute("data-center")||"New York",s=new google.maps.Map(c.maps[r].querySelectorAll(".google-map")[0],{zoom:i,styles:o,scrollwheel:!1,center:{lat:0,lng:0}});c.maps[r].map=s,c.maps[r].geocoder=e,c.maps[r].google=google,y(l,null,c.maps[r],function(t,a,e){e.map.setCenter(t)});var n=c.maps[r].querySelectorAll(".google-map-markers li");if(n.length)for(var d=[],u=0;u<n.length;u++){var p=n[u];y(p.getAttribute("data-location"),p,c.maps[r],function(t,a,e){var r=a.getAttribute("data-icon")||e.getAttribute("data-icon");a.getAttribute("data-icon-active")||e.getAttribute("data-icon-active");var i=a.getAttribute("data-description")||"",o=new google.maps.InfoWindow({content:i});a.infoWindow=o;var l={position:t,map:e.map};r&&(l.icon=r);var n=new google.maps.Marker(l);a.gmarker=n,d.push({markerElement:a,infoWindow:o}),n.isActive=!1,google.maps.event.addListener(o,"closeclick",(function(t,a){var e=null;t.gmarker.isActive=!1,e=t.getAttribute("data-icon")||a.getAttribute("data-icon"),t.gmarker.setIcon(e)}).bind(this,a,e)),google.maps.event.addListener(n,"click",(function(t,a){if(0!==t.infoWindow.getContent().length){for(var e,r,i,o=t.gmarker,l=0;l<d.length;l++)d[l].markerElement===t&&(i=d[l].infoWindow),(r=d[l].markerElement.gmarker).isActive&&d[l].markerElement!==t&&(r.isActive=!1,e=d[l].markerElement.getAttribute("data-icon")||a.getAttribute("data-icon"),r.setIcon(e),d[l].infoWindow.close());o.isActive=!o.isActive,o.isActive?((e=t.getAttribute("data-icon-active")||a.getAttribute("data-icon-active"))&&o.setIcon(e),i.open(s,n)):((e=t.getAttribute("data-icon")||a.getAttribute("data-icon"))&&o.setIcon(e),i.close())}}).bind(this,a,e))})}}})},(F=function(){!S.hasClass("lazy-loaded")&&u(S)&&(N.call(),S.addClass("lazy-loaded"))})(),r.on("scroll",F)),o&&!d&&$().UItoTop({easingType:"easeOutQuad",containerClass:"ui-to-top fa fa-angle-up"}),c.rdNavbar.length){for(D=["-","-sm-","-md-","-lg-","-xl-","-xxl-"],E=[0,576,768,992,1200,1600],W={},k=I=0,O=E.length;I<O;k=++I)L=E[k],W[E[k]]||(W[E[k]]={}),c.rdNavbar.attr("data"+D[k]+"layout")&&(W[E[k]].layout=c.rdNavbar.attr("data"+D[k]+"layout")),c.rdNavbar.attr("data"+D[k]+"device-layout")&&(W[E[k]].deviceLayout=c.rdNavbar.attr("data"+D[k]+"device-layout")),c.rdNavbar.attr("data"+D[k]+"hover-on")&&(W[E[k]].focusOnHover="true"===c.rdNavbar.attr("data"+D[k]+"hover-on")),c.rdNavbar.attr("data"+D[k]+"auto-height")&&(W[E[k]].autoHeight="true"===c.rdNavbar.attr("data"+D[k]+"auto-height")),d?W[E[k]].stickUp=!1:c.rdNavbar.attr("data"+D[k]+"stick-up")&&(W[E[k]].stickUp="true"===c.rdNavbar.attr("data"+D[k]+"stick-up")),c.rdNavbar.attr("data"+D[k]+"stick-up-offset")&&(W[E[k]].stickUpOffset=c.rdNavbar.attr("data"+D[k]+"stick-up-offset"));c.rdNavbar.RDNavbar({anchorNav:!d,stickUpClone:!!c.rdNavbar.attr("data-stick-up-clone")&&!d&&"true"===c.rdNavbar.attr("data-stick-up-clone"),responsive:W,callbacks:{onStuck:function(){var t=this.$element.find(".rd-search input");t&&t.val("").trigger("propertychange")},onDropdownOver:function(){return!d},onUnstuck:function(){if(null!==this.$clone){var t=this.$clone.find(".rd-search input");t&&(t.val("").trigger("propertychange"),t.trigger("blur"))}}}}),c.rdNavbar.attr("data-body-class")&&(document.body.className+=" "+c.rdNavbar.attr("data-body-class"))}if(c.viewAnimate.length)for(var k=0;k<c.viewAnimate.length;k++){var _=$(c.viewAnimate[k]).not(".active");e.on("scroll",$.proxy(function(){u(this)&&this.addClass("active")},_)).trigger("scroll")}if(c.swiper.length)for(var k=0;k<c.swiper.length;k++){for(var x=$(c.swiper[k]),G=x.find(".swiper-pagination"),A=x.find(".swiper-button-next"),M=x.find(".swiper-button-prev"),T=x.find(".swiper-scrollbar"),P=x.find(".swiper-slide"),I=0;I<P.length;I++){var S,N,F,D,k,I,O,L,E,W,Y,q=$(P[I]);(Y=q.attr("data-slide-bg"))&&q.css({"background-image":"url("+Y+")","background-size":"cover"})}P.end().find("[data-caption-animate]").addClass("not-animated").end(),x.swiper({autoplay:!!(!d&&$.isNumeric(x.attr("data-autoplay")))&&x.attr("data-autoplay"),direction:x.attr("data-direction")?x.attr("data-direction"):"horizontal",effect:x.attr("data-slide-effect")?x.attr("data-slide-effect"):"slide",speed:x.attr("data-slide-speed")?x.attr("data-slide-speed"):600,keyboardControl:"true"===x.attr("data-keyboard"),mousewheelControl:"true"===x.attr("data-mousewheel"),mousewheelReleaseOnEdges:"true"===x.attr("data-mousewheel-release"),nextButton:A.length?A.get(0):null,prevButton:M.length?M.get(0):null,pagination:G.length?G.get(0):null,paginationClickable:!!G.length&&"false"!==G.attr("data-clickable"),paginationBulletRender:G.length&&"true"===G.attr("data-index-bullet")?function(t,a,e){return'<span class="'+e+'">'+(a+1)+"</span>"}:null,scrollbar:T.length?T.get(0):null,scrollbarDraggable:!T.length||"false"!==T.attr("data-draggable"),scrollbarHide:!!T.length&&"false"===T.attr("data-draggable"),loop:!d&&"false"!==x.attr("data-loop"),simulateTouch:!!x.attr("data-simulate-touch")&&!d&&"true"===x.attr("data-simulate-touch"),onTransitionStart:function(a){t(a)},onTransitionEnd:function(t){p(t)},onInit:function(a){t(a),p(a),b(x.find('[data-lightgallery="item"]'),"lightGallery-in-carousel"),n(a)},onSlideChangeStart:function(t){n(t)}})}if(c.owl.length)for(var k=0;k<c.owl.length;k++){var z=$(c.owl[k]);c.owl[k].owl=z,g(z)}if(i.hasClass("wow-animation")&&c.wow.length&&!d&&o&&new WOW().init(),c.rdInputLabel.length&&c.rdInputLabel.RDInputLabel(),c.regula.length&&function t(a){regula.custom({name:"PhoneNumber",defaultMessage:"Invalid phone number format",validator:function(){return""===this.value||/^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value)}});for(var e=0;e<a.length;e++){var r,i=$(a[e]);i.addClass("form-control-has-validation").after("<span class='form-validation'></span>"),(r=i.parent().find(".form-validation")).is(":last-child")&&i.addClass("form-control-last-child")}a.on("input change propertychange blur",function(t){var a,r=$(this);if(("blur"===t.type||r.parent().hasClass("has-error"))&&!r.parents(".rd-mailform").hasClass("success")){if((a=r.regula("validate")).length)for(e=0;e<a.length;e++)r.siblings(".form-validation").text(a[e].message).parent().addClass("has-error");else r.siblings(".form-validation").text("").parent().removeClass("has-error")}}).regula("bind");for(var o=[{type:regula.Constraint.Required,newMessage:"The text field is required."},{type:regula.Constraint.Email,newMessage:"The email is not a valid email."},{type:regula.Constraint.Numeric,newMessage:"Only numbers are required"},{type:regula.Constraint.Selected,newMessage:"Please choose an option."}],e=0;e<o.length;e++){var l=o[e];regula.override({constraintType:l.type,defaultMessage:l.newMessage})}}(c.regula),c.rdMailForm.length){var k,I,H,R={MF000:"Successfully sent!",MF001:"Recipients are not set!",MF002:"Form will not work locally!",MF003:"Please, define email field in your form!",MF004:"Please, define type of your form!",MF254:"Something went wrong with PHPMailer!",MF255:"Aw, snap! Something went wrong."};for(k=0;k<c.rdMailForm.length;k++){var B=$(c.rdMailForm[k]),U=!1;B.attr("novalidate","novalidate").ajaxForm({data:{"form-type":B.attr("data-form-type")||"contact",counter:k},beforeSubmit:function(t,a,e){if(!d){var r=$(c.rdMailForm[this.extraData.counter]),i=r.find("[data-constraints]"),o=$("#"+r.attr("data-form-output")),l=r.find(".recaptcha"),s=!0;if(o.removeClass("active error success"),!m(i,l))return!1;if(l.length){var n=l.find(".g-recaptcha-response").val(),u={CPT001:'Please, setup you "site key" and "secret key" of reCaptcha',CPT002:"Something wrong with google reCaptcha"};U=!0,$.ajax({method:"POST",url:"bat/reCaptcha.php",data:{"g-recaptcha-response":n},async:!1}).done(function(t){"CPT000"!==t&&(o.hasClass("snackbars")?(o.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>'+u[t]+"</span></p>"),setTimeout(function(){o.removeClass("active")},3500),s=!1):o.html(u[t]),o.addClass("active"))})}if(!s)return!1;r.addClass("form-in-process"),o.hasClass("snackbars")&&(o.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'),o.addClass("active"))}},error:function(t){if(!d){var a=$("#"+$(c.rdMailForm[this.extraData.counter]).attr("data-form-output")),e=$(c.rdMailForm[this.extraData.counter]);a.text(R[t]),e.removeClass("form-in-process"),U&&grecaptcha.reset()}},success:function(t){if(!d){var a=$(c.rdMailForm[this.extraData.counter]),e=$("#"+a.attr("data-form-output")),r=a.find("select");a.addClass("success").removeClass("form-in-process"),U&&grecaptcha.reset(),t=5===t.length?t:"MF255",e.text(R[t]),"MF000"===t?e.hasClass("snackbars")?e.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>'+R[t]+"</span></p>"):e.addClass("active success"):e.hasClass("snackbars")?e.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>'+R[t]+"</span></p>"):e.addClass("active error"),a.clearForm(),r.length&&r.select2("val",""),a.find("input, textarea").trigger("blur"),setTimeout(function(){e.removeClass("active error success"),a.removeClass("success")},3500)}}})}}if(c.lightGallery.length)for(var k=0;k<c.lightGallery.length;k++)h(c.lightGallery[k]);if(c.lightGalleryItem.length){for(var j=[],J=0;J<c.lightGalleryItem.length;J++)$(c.lightGalleryItem[J]).parents(".owl-carousel").length||$(c.lightGalleryItem[J]).parents(".swiper-slider").length||$(c.lightGalleryItem[J]).parents(".slick-slider").length||j.push(c.lightGalleryItem[J]);c.lightGalleryItem=j;for(var k=0;k<c.lightGalleryItem.length;k++)b(c.lightGalleryItem[k])}if(c.lightDynamicGalleryItem.length)for(var k=0;k<c.lightDynamicGalleryItem.length;k++)v(c.lightDynamicGalleryItem[k]);if(c.slick.length)for(var k=0;k<c.slick.length;k++){var K=$(c.slick[k]);K.on("init",function(t){h($('[data-lightgallery="group-slick"]'),"lightGallery-in-carousel"),h($('[data-lightgallery="item-slick"]'),"lightGallery-in-carousel")}),K.slick({slidesToScroll:parseInt(K.attr("data-slide-to-scroll"),10)||1,asNavFor:K.attr("data-for")||!1,dots:"true"===K.attr("data-dots"),infinite:!d&&"true"===K.attr("data-loop"),focusOnSelect:!0,arrows:"true"===K.attr("data-arrows"),swipe:"true"===K.attr("data-swipe"),autoplay:"true"===K.attr("data-autoplay"),vertical:"true"===K.attr("data-vertical"),centerMode:"true"===K.attr("data-center-mode"),centerPadding:K.attr("data-center-padding")?K.attr("data-center-padding"):"0.50",mobileFirst:!0,responsive:[{breakpoint:0,settings:{slidesToShow:parseInt(K.attr("data-items"),10)||1}},{breakpoint:575,settings:{slidesToShow:parseInt(K.attr("data-sm-items"),10)||1}},{breakpoint:767,settings:{slidesToShow:parseInt(K.attr("data-md-items"),10)||1}},{breakpoint:991,settings:{slidesToShow:parseInt(K.attr("data-lg-items"),10)||1}},{breakpoint:1199,settings:{slidesToShow:parseInt(K.attr("data-xl-items"),10)||1}}]}).on("afterChange",function(t,a,e,r){var i=$(this).attr("data-child");i&&($(i+" .slick-slide").removeClass("slick-current"),$(i+" .slick-slide").eq(e).addClass("slick-current"))})}if(!$("[data-parallax-scroll]").length||d||s||ParallaxScroll.init(),c.selectFilter.length)for(var k=0;k<c.selectFilter.length;k++){var Q=$(c.selectFilter[k]);Q.select2({placeholder:Q.attr("data-placeholder")||null,minimumResultsForSearch:Q.attr("data-minimum-results-search")||1/0,containerCssClass:Q.attr("data-container-class")||null,dropdownCssClass:Q.attr("data-dropdown-class")||null})}if(c.bootstrapDateTimePicker.length)for(var k=0;k<c.bootstrapDateTimePicker.length;k++){var V=$(c.bootstrapDateTimePicker[k]),X={date:"date"===V.attr("data-time-picker"),time:"time"===V.attr("data-time-picker"),shortTime:!0};X.date?(X.format="DD/MM/YY",X.minDate=new Date):X.time?X.format="HH:mm":X.format="dddd DD MMMM YYYY - HH:mm",V.bootstrapMaterialDatePicker(X),V.bootstrapMaterialDatePicker("setDate",moment())}})}();