!function(){var e=$j("body").data("locale")||"en-us",o=e.split("-")[0]||"en",t=["fr","it","de","es","ja","ko"].indexOf(o)>=0&&o;"pt-br"!==e&&"pt-pt"!==e&&"zh-cn"!==e&&"zh-hk"!==e||(t=o),t&&jQuery.ajax({url:"/content/dam/oaks-resources/search/translation/"+t+".js",dataType:"script",async:!1})}(),document.addEventListener("DOMContentLoaded",(function(){UW.util.namespace("UW.search");var e=document.querySelector("#search"),o="preview"===window.location.hostname.split("-")[0]||"www"===window.location.hostname.split(".")[0]?"dellprod":"dellsandbox",t="DES - Customer Stories",a=UW.locale.locale?UW.locale.locale:"en-us",c=UW.locale.language?UW.locale.language:"en";UW.search.FacetValueCaption=!1;var s=!1,n=0;$.ajax({url:"/coveo/search/token",data:{orgId:o,site:"custstories",searchHub:t},type:"POST",success:function(r){if(r.token){var l=r.token.toString();Coveo.SearchEndpoint.endpoints.default=new Coveo.SearchEndpoint({restUri:"https://platform.cloud.coveo.com/rest/search",accessToken:l,queryStringArguments:{organizationID:o,site:"custstories",searchHub:t},renewAccessToken:function(){window.location.reload()}});var u=e;Coveo.$$(u).on("buildingQuery",(function(e,o){var t=window.location.pathname.split("/");t.length>1&&t[1].indexOf("-")>-1?o.queryBuilder.addContext({commongeo:t[1],localeCustom:t[1],searchpage:"custstories"}):o.queryBuilder.addContext({commongeo:a,localeCustom:a,searchpage:"custstories"}),o.queryBuilder.addFieldsToInclude("utindustrytagsid"),o.queryBuilder.addFieldsToInclude("utcompanytagsid")})),Coveo.$$(u).on("deferredQuerySuccess",(function(e,o){if(0===o.results.totalCount&&void 0===o.query.aq)showErrorMessage();else if(0===o.results.totalCount)$(".coveo-results-header").addClass("no-results");else{UW.util.image.srcSet(".coveo-results-column",".rendition"),setTimeout((function(){UW.util.blazy.reinitialize()}),200);UW.breakpoint.getScreenSize();$(".coveo-dropdown-header-wrapper").is(":visible")&&(s=!0),s&&(Promise.resolve().then((function(){$(".coveo-dropdown-header").on("click",(function(){$("body").addClass("noscroll"),$(".coveo-dropdown-content").on("scroll",(function(){d()})),setTimeout((function(){d()}),150)}))})),setTimeout((function(){d()}),150)),$(".coveo-dropdown-header").prop("href","javascript: void(0);"),$(".coveo-results-header").removeClass("no-results")}}));var d=function(){let e=UW.util.getViewport().height;$(".coveo-dropdown-content").css({"max-height":"625px","min-height":"300px",height:.85*e});var o=$(".CoveoFacet"),t=$(".CoveoCategoryFacet"),a=0;a+=v(o),a+=v(t);var c,s=$(".coveo-dropdown-content").height();n=0,clearInterval(c),a<s?c=setInterval((function(){n++,a=0,a+=v(o),a+=v(t),p(s,a,t,!0),n>50&&clearInterval(c)}),100):p(null,null,null,!1),$(".js-overlaySpacing").on("click",(function e(o){$(".js-overlaySpacing").off("click",e),o.stopPropagation,setTimeout((function(){d()}),100)}))},v=function(e){var o=0;return e.each((function(){$(this).addClass("js-overlaySpacing");let e=$(this).css("height");e!=isNaN&&(o+=1*e.substring(0,e.length-2))})),o},p=function(e,o,t,a){if(n>0&&n<50){if(a){var c=e-o+4*t.length;c<0&&(c=0),c+="px"}let s=$(".js-overlaySpacing");for(i=0;i<s.length;i++)$(s[i]).css("margin-bottom","0px"),a&&i==s.length-1&&$(".js-overlaySpacing").not(".coveo-hidden").last().css("margin-bottom",c)}};Coveo.Analytics.options.endpoint.defaultValue="https://usageanalytics.coveo.com",Coveo.Analytics.options.organization.defaultValue=o,Coveo.Analytics.options.searchHub.defaultValue=t,document.addEventListener("afterComponentsInitialization",(function(){var e=document.querySelector(".CoveoAnalytics");null!=e&&Coveo.get(e).setOriginContext("Hosted")})),Coveo.$$(u).on("changeAnalyticsCustomData",(function(e,o){omnitureAnalytics(e,o),Promise.resolve().then((function(){"interface"!==o.actionType&&(g(),f())}))})),Coveo.$$(u).on("populateBreadcrumb",(function(e,o){let t='<span class="coveo-facet-breadcrumb-clear"><svg focusable="false" enable-background="new 0 0 13 13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m7.881 6.501 4.834-4.834c.38-.38.38-1.001 0-1.381s-1.001-.38-1.381 0l-4.834 4.834-4.834-4.835c-.38-.38-1.001-.38-1.381 0s-.38 1.001 0 1.381l4.834 4.834-4.834 4.834c-.38.38-.38 1.001 0 1.381s1.001.38 1.381 0l4.834-4.834 4.834 4.834c.38.38 1.001.38 1.381 0s .38-1.001 0-1.381z"></path></g></svg></span>';Promise.resolve().then((function(){if(0!==o.breadcrumbs.length){let e=$(".show-mobile .coveo-category-facet-breadcrumb-title"),o=$(".show-desktop .coveo-category-facet-breadcrumb-title"),a=$(".coveo-active-category-facet-parent .coveo-category-facet-value-caption");for(i=0;i<o.length;i++)o[i].nextElementSibling.innerHTML=a[i].innerText+t,e[i].nextElementSibling.innerHTML=a[i].innerText+t}$(".coveo-facet-breadcrumb-multi-count")&&$(".coveo-facet-breadcrumb-multi-count").parent().click()}))}));let C='<div class="coveo-category-facet-less coveo-accessible-button" role="button" aria-label="Collapse Solutions facet" tabindex="0"><span class="coveo-facet-less-icon"><svg focusable="false" enable-background="new 0 0 10 6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" class="coveo-facet-less-icon-svg"><g fill="currentColor"><path d="m5 .068c.222 0 .443.084.612.253l4.134 4.134c.338.338.338.886 0 1.224s-.886.338-1.224 0l-3.522-3.521-3.523 3.521c-.336.338-.886.338-1.224 0s-.337-.886.001-1.224l4.134-4.134c.168-.169.39-.253.612-.253z"></path></g></svg></span></div>',w='<div class="coveo-category-facet-more coveo-accessible-button" role="button" aria-label="Expand Services facet" tabindex="0"><span class="coveo-facet-more-icon"><svg focusable="false" enable-background="new 0 0 10 6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" class="coveo-facet-more-icon-svg"><g fill="currentColor"><path d="m5 5.932c-.222 0-.443-.084-.612-.253l-4.134-4.134c-.338-.338-.338-.886 0-1.224s.886-.338 1.224 0l3.522 3.521 3.523-3.521c.336-.338.886-.338 1.224 0s .337.886-.001 1.224l-4.135 4.134c-.168.169-.39.253-.611.253z"></path></g></svg></span></div>',F=!0;Coveo.$$(u).on("newResultsDisplayed",(function(e,o){F&&($(".coveo-category-facet-non-empty-path .coveo-category-facet-values").addClass("showFacet"),$(".coveo-active .coveo-facet-values").addClass("showFacet"),$("#industryFacet .coveo-facet-less").css("display","block"),$("#industryFacet .coveo-facet-more").css("display","none"),$("#industryFacet .coveo-facet-values").addClass("showFacet"),F=!1),Promise.resolve().then((function(){g(),f()}))}));var g=function(){["#productFacet","#solutionFacet","#serviceFacet"].forEach((function(e,o){$(e+" .coveo-category-facet-values").hasClass("showFacet")?$(e+" .coveo-category-facet-more-less-container").html(C):$(e+" .coveo-category-facet-more-less-container").html(w),m(e),h(e),$(e+" .coveo-category-facet-header").off(),$(e+" .coveo-category-facet-header").on("click",(function(o){let t=0!==$(e+" .coveo-category-facet-less").length?" .coveo-category-facet-less":" .coveo-category-facet-more";$(e+t).off(),m(e),h(e),$(e+t).click()})),$(e+" .coveo-category-facet-parent-value").on("click",(function(o){$(e).coveo("deselectCurrentValue")}))}))},f=function(){["#industryFacet","#topicFacet"].forEach((function(e,o){($(e).hasClass("coveo-active")||$(e+" .coveo-facet-values").hasClass("showFacet"))&&"none"===$(e+" .coveo-facet-more").css("display")?($(e+" .coveo-facet-less").css("display","block"),$(e+" .coveo-facet-more").css("display","none")):($(e+" .coveo-facet-less").css("display","none"),$(e+" .coveo-facet-more").css("display","block")),y(e),b(e),$(e+" .coveo-facet-header-title-section").on("click",(function(o){$(e+" .coveo-facet-more").off(),y(e),b(e),$(e+" .coveo-facet-more").click()}))}))},m=function(e){$(e+" .coveo-category-facet-less").on("click",(function(o){o.preventDefault(),$(e+" .coveo-category-facet-values").removeClass("showFacet"),$(e+" .coveo-category-facet-more-less-container").html(w),h(e)}))},h=function(e){$(e+" .coveo-category-facet-more").on("click",(function(o){o.preventDefault(),$(e+" .coveo-category-facet-values").addClass("showFacet"),$(e+" .coveo-category-facet-more-less-container").html(C),m(e)}))},y=function(e){$(e+" .coveo-facet-more").on("click",(function(o){o.preventDefault(),$(e+" .coveo-facet-values").addClass("showFacet"),$(e+" .coveo-facet-less").css("display","block"),$(e+" .coveo-facet-more").css("display","none"),b(e)}))},b=function(e){$(e+" .coveo-facet-less").on("click",(function(o){o.preventDefault(),$(e+" .coveo-facet-values").removeClass("showFacet"),$(e+" .coveo-facet-less").css("display","none"),$(e+" .coveo-facet-more").css("display","block"),y(e)}))};$(".submit-absolute .mobile-close, .submit-absolute .mobile-apply, .coveo-dropdown-background-active").on("click",(function(){$(".coveo-dropdown-background-active").click(),$("body").removeClass("noscroll"),$(".coveo-dropdown-content").off("scroll")})),$.ajax({type:"GET",dataType:"json",url:"/des/search/facets/dictionarySvcs",data:{locale:a,taxonomy:"dellemc",pagetype:"dtsearch"},success:function(o){UW.search.FacetValueCaption=o.facets,UW.search.i18n=$j.extend({},o["coveo-search"],o["customerstory-landingpage"]);UW.locale.language;var t={};t[c]={Products:UW.search.i18n["coveo.search.searchFacetTitle1"],Solutions:UW.search.i18n["coveo.search.searchFacetTitle4"],Services:UW.search.i18n["coveo.search.searchFacetTitle3"],Topics:UW.search.i18n["coveo.search.searchFacetTitle9"],Industry:UW.search.i18n["coveo.search.searchFacetTitle5"],Filters:UW.search.i18n["customerstory.landingpage.filter"],"Sort by: Newest":UW.search.i18n["customerstory.landingpage.sortby.newest"],Newest:UW.search.i18n["customerstory.landingpage.newest"],"Sort by: Relevancy":UW.search.i18n["customerstory.landingpage.sortby.mostrelevant"],Relevancy:UW.search.i18n["customerstory.landingpage.mostrelevant"],"Sort by: A-Z":UW.search.i18n["customerstory.landingpage.sortby.a_z"],"A-Z":UW.search.i18n["customerstory.landingpage.a_z"],"Sort by: Z-A":UW.search.i18n["customerstory.landingpage.sortby.z_a"],"Z-A":UW.search.i18n["customerstory.landingpage.z_a"]},String.toLocaleString(t),$(".coveo-topSpace").text(UW.search.i18n["customerstory.landingpage.filter"]),$(".mobile-apply").text(UW.search.i18n["customerstory.landingpage.apply"]),Coveo.$$(u).on("newResultsDisplayed",(function(){$(".coveo-query-summary-no-results-string").text(UW.search.i18n["customerstory.landingpage.errormessageForFiltersWithNoResult"]),$(".coveo-query-summary-cancel-last").text(UW.search.i18n["customerstory.landingpage.cancelLastAction"])})),Coveo.$$(u).on("preprocessResults",(function(e,o){try{o.results.results.forEach((function(e){let o=e.raw.utcompanytagsid?e.raw.utcompanytagsid:[],t="",c=!0;o.forEach((function(e,a){let s=UW.search.FacetValueCaption.company[e];0!==o.length?(t=c?s:t+", "+s,c=!1):t=s})),e.raw.utcompanytagsname=t;let s=e.raw.utindustrytagsid?e.raw.utindustrytagsid:[],n="",r=!0;s.forEach((function(e,o){let t=UW.search.FacetValueCaption.industry[e];0!==s.length?(n=r?t:n+", "+t,r=!1):n=t})),e.raw.utindustrytagsname=n,e.raw.utindustrytagsname=""!==e.raw.utcompanytagsname&&e.raw.utcompanytagsname&&""!==e.raw.utindustrytagsname?" | "+e.raw.utindustrytagsname:e.raw.utindustrytagsname;let i="";"/"==e.raw.displayurl[0]?("pdf"===e.raw.sysfiletype&&(i="//www.delltechnologies.com"),i+="/"+a+e.raw.displayurl):i=e.raw.displayurl,e.raw.displayurl=i,e.raw.desaccessibilitytext=e.raw.desaccessibilitytext?e.raw.desaccessibilitytext:"mp4"==e.raw.filetype||"mov"==e.raw.filetype?UW.search.i18n["customerstory.landingpage.watchvideo"]:"html"==e.raw.filetype?UW.search.i18n["customerstory.landingpage.explorefullstory"]:"pdf"==e.raw.filetype?UW.search.i18n["customerstory.landingpage.readpdf"]:""}))}catch(e){showErrorMessage()}})),UW.search.FacetValueCaption?Coveo.init(e,{productFacet:{valueCaption:UW.search.FacetValueCaption.products},solutionFacet:{valueCaption:UW.search.FacetValueCaption.solutions},serviceFacet:{valueCaption:UW.search.FacetValueCaption.services},industryFacet:{valueCaption:UW.search.FacetValueCaption.industry},topicFacet:{valueCaption:UW.search.FacetValueCaption.topic}}):Coveo.init(e)},error:function(e,o,t){console.error("Error: Search Mapping Not Found."),showErrorMessage()},done:function(e){}})}else showErrorMessage()},error:function(e,o,t){console.error("Coveo Search "+o+": "+t),showErrorMessage()},done:function(e){}})}));var showErrorMessage=function(){$("#error-message").removeClass("hide"),$(".raw-html").css("display","none")},omnitureAnalytics=function(e,o){switch(buildMetrics(),"categoryFacetClear"!=o.actionCause&&setCommonAttr(),o.actionType){case"interface":"interfaceLoad"!=o.actionCause&&"searchFromLink"!==o.actionCause||sendEvent();break;case"facet":if("facetSelect"==o.actionCause){var t=void 0,a=void 0,c=void 0,s=void 0;t=o.metaObject.facetId,a=o.metaObject.facetValue,c=o.metaObject.facetTitle,document.querySelector("[data-id="+t+"]")&&(s=Coveo.$$(document.querySelector("[data-id="+t+"]"))),s&&("CoveoTimespanFacet"==s.el.className&&(Dell.Metrics.sc.coveosearchrefinement="facet:"+c+":"+s.find(".coveo-selected div span.coveo-facet-value-caption").innerText),s.el.className.indexOf("CoveoFacet")>=0&&(Dell.Metrics.sc.coveosearchrefinement="facet:"+c+":"+(s.el.CoveoFacet.options.valueCaption[a]||a))),sendEvent()}break;case"categoryFacet":if("categoryFacetClear"!=o.actionCause){t=void 0,a=void 0,c=void 0,s=void 0;t=o.metaObject.categoryFacetId,a=o.metaObject.categoryFacetPath,c=o.metaObject.categoryFacetTitle,document.querySelector("[data-id="+t+"]")&&(s=Coveo.$$(document.querySelector("[data-id="+t+"]"))),a&&s&&0!==a.length&&s.el.CoveoCategoryFacet.options.valueCaption&&(Dell.Metrics.sc.coveosearchrefinement="facet:"+c+":"+(s.el.CoveoCategoryFacet.options.valueCaption[a[a.length-1]]||a[a.length-1]),sendEvent())}break;case"breadcrumb":"breadcrumbResetAll"==o.actionCause?Dell.Metrics.sc.coveosearchrefinement="clearallfilter":Dell.Metrics.sc.coveosearchrefinement="clearfilter",sendEvent();break;case"getMoreResults":"pagerNumber"==o.actionCause&&(Dell.Metrics.sc.pageNumber=o.metaObject.pagerNumber,sendEvent()),"pagerResize"==o.actionCause&&(Dell.Metrics.sc.pageNumber=1,Dell.Metrics.sc.detailpagename="numresultsperpage- "+o.metaObject.currentResultsPerPage,sendEvent());break;case"misc":"datedescending"===o.metaObject.resultsSortBy?Dell.Metrics.sc.coveosearchrefinement="sort:datedescending":"relevancy"===o.metaObject.resultsSortBy?Dell.Metrics.sc.coveosearchrefinement="sort:relevancy":"@utcompanytagsnameascending"===o.metaObject.resultsSortBy?Dell.Metrics.sc.coveosearchrefinement="sort:alphabeticallyascending":"@utcompanytagsnamedescending"===o.metaObject.resultsSortBy&&(Dell.Metrics.sc.coveosearchrefinement="sort:alphabeticallydescending"),sendEvent()}},sendEvent=function(){"undefined"!=typeof pageView&&pageView()},buildMetrics=function(){Dell=Dell||{},Dell.Metrics=Dell.Metrics||{},Dell.Metrics.sc=Dell.Metrics.sc||{};var e=document.querySelector(".CoveoPager"),o=Coveo.Component.get(e,Coveo.Pager);Dell.Metrics.sc.pageNumber=o.currentPage,Dell.Metrics.sc.coveovisitor=Coveo.Cookie.get("visitorId"),Dell.Metrics.sc.applicationname="Search:Coveo",Dell.Metrics.sc.searchterm="cs"},setCommonAttr=function(){Dell&&Dell.Metrics.sc.detailpagename&&delete Dell.Metrics.sc.detailpagename,Dell&&Dell.Metrics.sc.coveosearchrefinement&&delete Dell.Metrics.sc.coveosearchrefinement,Dell&&Dell.Metrics.sc.btnname&&delete Dell.Metrics.sc.btnname;var e=document.querySelector(".CoveoPager"),o=Coveo.Component.get(e,Coveo.Pager);Dell.Metrics.sc.pageNumber=o.currentPage,Dell.Metrics.sc.coveovisitor=Coveo.Cookie.get("visitorId")};