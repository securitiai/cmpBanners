/*
 * Version:  6.3.100B144
 * Copyright (c) 10-06-2020 GlassBox http://www.glassboxdigital.com
 */

/* BEGIN Configuration */

if (typeof _cls_config === "undefined") {
  _cls_config = {};
} /* DO NOT CHANGE */

/* BEGIN ajax */
_cls_config.ajaxRecordMetadata = "always";
_cls_config.ajaxRecordRequestHeaders = "tld";

_cls_config.ajaxRecordRequestBody =
  "or(statusgte(400),uriMatches(t=auth&p=195&2=5523998515329948&v=1.5.5),  uriMatches(t=chunk&p=195&2=5523998515329948&v=1.5.5),uriMatches(t=init&p=195&2=5523998515329948&v=1.5.5),uriMatches(/t/e/c477737c4f000108abc87976))";

_cls_config.ajaxRecordResponseBody =
  "or(statusgte(400),uriMatches(t=auth&p=195&2=5523998515329948&v=1.5.5),uriMatches(t=chunk&p=195&2=5523998515329948&v=1.5.5),uriMatches(t=init&p=195&2=5523998515329948&v=1.5.5),uriMatches(/t/e/c477737c4f000108abc87976))";

_cls_config.ajaxRecordResponseHeaders = "tld";
_cls_config.interceptAjax = true;
_cls_config.ajaxCaptureRequestCookie = true;
/* END ajax */
/* BEGIN behavior */
_cls_config.clientAttributesEnabled = true;
_cls_config.idleEventTimeInterval = -1;
_cls_config.iframesAutoInject = true;
_cls_config.recordMouseMoves = true;
_cls_config.recordScrolls = true;
_cls_config.recordHovers = true;
_cls_config.recordErrors = true;
_cls_config.recordConsoleErrors = true;
_cls_config.resourcesRecordAllowCors = true;
_cls_config.reportMaxConcurrency = 2;
_cls_config.reportViaTopWindow = false;
_cls_config.collectStruggles = true;
_cls_config.reportToStorageAfterUnload = true;
_cls_config.ccAutoMaskFields = ["creditCard"];
_cls_config.clientAttributesEnabled = true;
_cls_config.clientAttributeMaxLength = 500;
/* END behavior */
/* BEGIN masking */
_cls_config.blackoutWhenLocationContains = [];
_cls_config.domMaskAttributesByTag = [];
_cls_config.domBlacklistMaskContentByClass = ["_mask"];
_cls_config.domMaskContentById = [];
_cls_config.domMaskOmitByClass = [];
_cls_config.domMaskSimpleSelector = [];
_cls_config.domMaskedAttributes = [];
_cls_config.domMaskOmitById = [];
_cls_config.domOmitById = [];
_cls_config.maskClassList = [];
_cls_config.maskCookies = [];
_cls_config.maskList = [];
_cls_config.domMaskingMode = "blacklist";
_cls_config.valueMaskingMode = "whitelist";
_cls_config.maskWhitelistValueByClass = ["_unmask"];
/* END masking */
/* GA integration */
_cls_config.SCIntegration = false;
_cls_config.SCIntegrationURLsContainList = [];
/* END GA integration */
/* BEGIN required */
_cls_config.reportURI =
  "https://report.omni.glassboxdigital.io/glassbox/reporting/31E8B69C-B6E3-1E0D-C7C7-49E3E5651702/cls_report";
/* END required */
/* BEGIN resource */
_cls_config.resourcesRecordEnabled = false;
/* END resource */
/* BEGIN iFrames Injection */
_cls_config.iframesAutoInject = true;
_cls_config.iframesAutoInjectMode = "whitelist";
/* END iFrames Injection */
/* BEGIN Fraud Detection */
_cls_config.domRecordEnabled = true;
_cls_config.domTamperingDetectionEnabled = true;
_cls_config.reportByPost = false;
_cls_config.resourcesRecordCount = 5;
_cls_config.resourcesRecordChance = 1;
/* END Fraud Detection */

/* END Configuration */

!(function(i, n, e, O, t, L) {
  var _,
    r,
    o,
    a,
    F,
    E,
    u,
    c,
    logger,
    s,
    f,
    d,
    l,
    P,
    B,
    w,
    h,
    v,
    m,
    b,
    g,
    p,
    y,
    C,
    S,
    T,
    k,
    x,
    I,
    M,
    R,
    A,
    N,
    D,
    j,
    U,
    H,
    V,
    q,
    z,
    W,
    X,
    G,
    J,
    K,
    Q,
    Y,
    $,
    Z,
    nn,
    en,
    tn,
    rn,
    on,
    an,
    un,
    cn,
    sn,
    fn,
    dn,
    ln,
    hn,
    vn,
    mn,
    gn,
    pn,
    yn,
    wn,
    bn,
    En,
    Cn,
    Sn,
    Tn,
    kn,
    xn,
    In,
    Mn,
    Rn,
    An,
    Nn,
    Dn,
    _n,
    On,
    Ln,
    Fn,
    Pn,
    Bn,
    jn,
    Un,
    Hn,
    Vn,
    qn,
    zn,
    Wn,
    Xn,
    Gn,
    Jn,
    Kn,
    Qn,
    Yn,
    $n,
    Zn,
    ne,
    ee,
    te,
    iframeHelper,
    re,
    ie,
    oe,
    ae,
    ue,
    ce,
    se,
    fe,
    de,
    le,
    he,
    ve,
    me,
    ge,
    pe,
    ye,
    we,
    be,
    Ee,
    Ce,
    Se,
    Te,
    ke,
    xe,
    Ie,
    Me,
    Re,
    Ae,
    Ne,
    De,
    _e,
    Oe,
    Le,
    Fe,
    Pe,
    Be,
    je,
    Ue,
    He,
    Ve,
    qe,
    ze;
  function We(n) {
    (n.debugMode = !1),
      (n.traceMode = !1),
      (n.suppressMouseMovesDebug = !0),
      (n.reportByPost = !1),
      (n.reportPreferSendBeaconAPI = !1),
      (n.reportDisableCors = !1),
      (n.timingMode = !1),
      (n.useIdSelectors = !0),
      (n.noIdSelectorsForClassNames = ["skull_list"]),
      (n.noIdSelectorsForIDs = []),
      (n.noIdSelectorsForAttrs = []),
      (n.useNameInFormSelectors = !1),
      (n.preferNamesInFormSelectors = !1),
      (n.reportValidationErrors = !0),
      (n.supportNativeAutoComplete = !1),
      (n.recordEnterForInputs = !0),
      (n.recordTypingAll = !1),
      (n.recordTypingForAttrs = ["bs-typeahead"]),
      (n.recordTypingForClasses = ["tt-input"]),
      (n.recordTypingForIDs = []),
      (n.ignorableElementIds = ["cls_logger", "cls_logger_tab"]),
      (n.idleEventTimeInterval = -1),
      (n.maxTimeForIdleEvent = 42e4),
      (n.validationValueForRenderTime = 2e4),
      (n.titleCharsLimit = 150),
      (n.recordAjaxCallsAnyway = !1),
      (n.ajaxDebug = !1),
      (n.recordSpaLoadTime = !0),
      (n.ajaxHashRecurrentUrls = !0),
      (n.reportVisualNames = !0),
      (n.visualNameDebug = !1),
      (n.visualName = {
        maxLimit: 160,
        maxParentLevel: 3,
        CLS_NAME_ATTR: "cls_vname",
        filterNamingByTagName: ["script", "style"],
        by: {
          title: !0,
          alt: !0,
          ariaLabel: !0,
          labelTag: !0,
          inlineText: !0,
          placeholder: !0,
          inputConsts: !0,
          inputButtonsValue: !0,
          name: !0,
          id: !0,
          parent: !0,
          child: !0,
        },
        elementListToCheckParent: ["img", "span", "div"],
        elementListToCheckChild: ["button"],
        filterInlineTextByClassName: [],
        wrapperElementList: ["BUTTON", "A"],
      }),
      (n.visualNameLimit = 60),
      (n.valueEncryptionMode = _.censorMode.BlackList),
      (n.valueEncryptById = []),
      (n.valueEncryptByClass = []),
      (n.valueMaskingMode = L),
      (n.maskWhitelistValueById = []),
      (n.maskBlacklistValueById = []),
      (n.maskWhitelistValueByClass = []),
      (n.maskBlacklistValueByClass = []),
      (n.valueWhitelistMaskSimpleSelector = []),
      (n.valueBlacklistMaskSimpleSelector = []),
      (n.valueMaskIgnoreAttribute = ""),
      (n.ajaxMaskRequestBody = []),
      (n.ajaxMaskResponseBody = []),
      (n.ajaxStatsQueryParams = []),
      (n.ajaxCaptureRequestCookie = !1),
      (n.maskCookies = []),
      (n.maskQueryParameters = []),
      (n.ccAutoMask = !0),
      (n.ccAutoMaskByContent = !0),
      (n.ccAutoMaskKeepLastDigits = -1),
      (n.ccForceMaskContainer = !0),
      (n.valueMaskByCategories = []),
      (n.valueMaskingCharNumeric = "#"),
      (n.valueMaskingCharNumericLike = "#"),
      (n.maskTitle = !1),
      (n.cookieAssignFQDN = !1),
      (n.cookieTLDSegmentCount = -1),
      (n.recordErrors = !0),
      (n.recordConsoleErrors = !0),
      (n.maxRecordedCountPerError = 2),
      (n.minDragPixels = 10),
      (n.botDetection = !1),
      (n.devToolsDetectionEnabled = !0),
      (n.devToolsDetectionMessage = ""),
      (n.struggleCaptureHorizontalScrollbar = !0),
      (n.struggleCaptureBlankPage = !0),
      (n.struggleCaptureDeadClick = !0),
      (n.struggleDeadClickInterval = 1e3),
      (n.struggleCaptureErrorClick = !0),
      (n.struggleErrorClickInterval = 1e3),
      (n.reportDebugInfo = !0),
      (n.DOMBeaconImg = !1),
      (n.truncateEventsWithUnload = !0),
      (n.recordScrolls = !1),
      (n.minStallingScrollTime = 3e3),
      (n.scrollDebug = !1),
      (n.recordMouseMoves = !1),
      (n.mmRecordTimes = !1),
      (n.mmDiluteMinPixels = 20),
      (n.mmMaxMovesWithUnload = 100),
      (n.mmMaxMovesInEventNoTimes = 180),
      (n.mmMaxMovesInEventWithTimes = 130),
      (n.mmMinStallingMoveTime = 1e4),
      (n.mmMaxInMemoryMoves = 600),
      (n.mmDebug = !1),
      (n.SCIntegration = !1),
      (n.SCIntegrationURLsContainList = []),
      (n.SCIntegrationKeyList = ["pageName", "v25", "v11", "v39"]),
      (n.interceptThirdPartyAttributes = !0),
      (n.interceptABTesting = !0),
      (n.externalIdAttr = "id"),
      (n.recordHovers = !1),
      (n.mhDeepLevel = 2),
      (n.mhMaxListSize = 10),
      (n.mhMaxInMemeoryHovers = 100),
      (n.mhDebug = !1),
      (n.reportHybrid = !1),
      (n.domRecordEnabled = !1),
      (n.reportAllResourcesLoad = !1),
      (n.ignoreReportResourcesByTagNames = []),
      (n.reportExternalResources = !1),
      (n.reportMaxConcurrency = -1),
      (n.externalReporterObject = ""),
      (n.clsDebug = !0),
      (n.clsDebugCharsLimit = 1e3),
      (n.clsDebugMaxReports = 5),
      (n.reportEncoding = "formUrl"),
      (n.reportCompress = !1),
      (n.cordovaSdkReporting = !1),
      (n.reportAddUriParams = ["clsjsv", "_cls_s", "_cls_v", "sn"]),
      (n.reportAddUriParamAPI = !1),
      (n.reportStorageBackedForUA = [".*"]),
      (n.reportViaTopWindow = !1),
      (n.duplicateIdCheck = !1),
      (n.blackoutWhenLocationContains = []),
      (n.reportCorsForceSafelistedHeaders = !0),
      (n.reportCorsTakeNativeCookies = []),
      (n.reportIncludeReferrer = !0),
      (n.reportCreateSubSessionCookie = !1),
      (n.sessionIdByQueryParam = "_cls_s"),
      (n.visitorIdByQueryParam = "_cls_v"),
      (n.sendStateInfo = !0),
      (n.debounceScrolls = 500),
      (n.encryptionKeyId = "key1"),
      (n.encryptionTimeout = 600),
      (n.captureGlobalObjectsEmptyStrings = !1),
      (n.captureGlobalObjectsOnSegmentChange = !1),
      (n.segmentationTriggerBySimpleSelector = []),
      (n.segmentationLabelBySimpleSelector = []),
      (n.segmentationLabelByAttribute = ""),
      (n.segmentationTitleByAttribute = ""),
      (n.segmentationPrefix = "_logical_"),
      (n.useExtension = !0),
      (n.ajaxRecordSessionLimit = -1),
      (n.pageNameResolvingEnabled = !0),
      (n.pageNameResolvingByElements = []);
  }
  function Xe(n) {
    (n.maxReportSize = 1900),
      (n.reportInterval = 3e3),
      (n.reportByPost = !0),
      (n.maxPostReportSize = 15e4),
      (n.reportPostInterval = 1e4),
      (n.reportPostRetry = !0),
      (n.reportMaxRetries = 2),
      (n.reportAbortAfter = -1),
      (n.reportAddUriParams = ["clsjsv", "_cls_s", "_cls_v", "pid", "sn"]),
      (n.reportUseWorker = !1),
      (n.interceptAjax = !0),
      (n.ajaxHashRecurrentUrls = !1),
      (n.ajaxRecordMetadata = "always"),
      (n.domNewPageTriggers = []),
      (n.domNewPageAjaxTriggers = []),
      (n.domStartAfter = 1e4),
      (n.domExpireSnapshotAfter = 114e4),
      (n.domUpdateEveryWsMsgIn = -1),
      (n.domCompress = !0),
      (n.domRecordCssRules = !0),
      (n.domRecordEnabled = !0),
      (n.recordShadowDom = !1),
      (n.resourcesRecordEnabled = !1),
      (n.resourceRecordCssOnly = !0),
      (n.resourcesRecordCount = 1),
      (n.resourcesRecordChance = 0.5),
      (n.resourcesRecordAllowCors = !1),
      (n.resourceIgnoreWhenUrlContains = []),
      (n.resourceTimingRecordEnabled = !1),
      (n.resourceTimingRecordEnabledByChance = 0.01),
      (n.clientAttributesEnabled = !1),
      (n.clientAttributeMaxLength = 30),
      (n.semiDomEnabled = !0),
      (n.domIgnoredFormElements = ["__VIEWSTATE"]),
      (n.domIncludeSelectorOnUpdate = !0),
      (n.domWhitelistMaskContentById = []),
      (n.domBlacklistMaskContentById = []),
      (n.domOmitByClass = []),
      (n.domOmitById = ["gb-main-overlay", "gbOverlay"]),
      (n.domOmitObjectElementsByType = []),
      (n.domWhitelistMaskContentByClass = []),
      (n.domBlacklistMaskContentByClass = []),
      (n.domMaskedAttributes = []),
      (n.domMaskAttributesByTag = []),
      (n.domMaskIgnoreAttribute = ""),
      (n.domWhitelistMaskSimpleSelector = []),
      (n.domBlacklistMaskSimpleSelector = []),
      (n.domMaskingMode = _.censorMode.BlackList),
      (n.domEncryptById = []),
      (n.domEncryptByClass = []),
      (n.domPartialWhenLocationContains = []),
      (n.cordovaSdkReporting = !1),
      (n.domKeepComments = !1),
      (n.domOmitAfterUnload = !1),
      (n.domIE11ForceMutationObserver = !1),
      (n.iframesRecordEnabled = !0),
      (n.iframesDebugEnabled = !1),
      (n.iframesAutoInject = !1),
      (n.iframesAutoInjectMode = _.iframesAutoInjectMode.BlackList),
      (n.blackoutIdleReporting = !1),
      (n.domTamperingDetectionEnabled = !1),
      (n.iframesHandshakeTimeout = 2e3),
      (n.iframesSkipHidden = !0),
      (n.domFormValidationTracking = !0),
      (n.domThrottleChanges = !1),
      (n.domThrottleChangesIE11Only = !0),
      (n.domPreciseStyleSheetCloning = !1),
      (n.collectStruggles = !0),
      (n.collectFormStruggles = !0),
      (n.struggleMaxLongFocusTime = 3e4),
      (n.struggleRageClickInterval = 3e3),
      (n.struggleRageClickMinCount = 5),
      (n.struggleCaptureAjaxErrors = !0),
      (n.forceRenderingFixForUA = L),
      (n.domFuseDuration = -1),
      (n.domFuseElementCount = -1),
      (n.domFuseDurationIE = 800),
      (n.domFuseElementCountIE = -1),
      (n.domFormValidationAdditionalTagNames = []);
  }
  function Ge(n) {
    return function() {
      return Array.prototype[n].apply(
        arguments[0],
        Array.prototype.slice.call(arguments, 1)
      );
    };
  }
  function Je(u) {
    var r;
    function t(n) {
      return null !== n && E.isNumber(n.width) && E.isNumber(n.height)
        ? n.width + "x" + n.height
        : "x";
    }
    function i(n) {
      return n ? "1" : "0";
    }
    function c(n) {
      if (E.isNumber(n)) return B.encodeAsBase(n, _.encoding.numberBase);
    }
    function o(n) {
      if (E.isString(n)) return c(B.hashcode(n));
    }
    function e(n) {
      if (!E.isNumber(n.x) || !E.isNumber(n.y)) return n.x, void n.y;
      var e = Math.round(n.x),
        t = Math.round(n.y);
      return c(e) + "_" + c(t);
    }
    function a(n, e, t, r) {
      E.isString(t) &&
        (r
          ? n.push(B.Base64.encode(e) + "_" + B.Base64.encode(t))
          : n.push(e + "_" + t));
    }
    function f(n, e, t) {
      E.isNumber(t) && n.push(e + "_" + c(t));
    }
    function s(n, e) {
      var t,
        r = [];
      for (t in e)
        void 0 !== _.dictionary.performanceTimingEvents[t] &&
          f(r, _.dictionary.encodePerformanceTimingMeasurement(t), e[t]);
      return r.join(n);
    }
    return {
      setBeaconEncoder: function(n) {
        r = n;
      },
      encodePageDetails: function(n) {
        var e = [];
        return (
          n.frame && a(e, "t", n.frame ? "f" : "p"),
          a(e, "u", o(n.urlWithoutHash)),
          n.hash && a(e, "h", B.Base64.encode(n.hash)),
          n.windowSize && a(e, "s", t(n.windowSize)),
          n.screenSize && a(e, "sc", t(n.screenSize)),
          n.referrerWithoutHash && a(e, "r", o(n.referrerWithoutHash)),
          _.reportBase64URLs && a(e, "ub", B.Base64.encode(n.url)),
          e.join("*")
        );
      },
      encodePageSnapshotData: function(n) {
        var e = "h",
          t = r.encodeSnapshotHtml(n.html);
        return (
          t.compressed ? (e = "hh") : t.plain && (e = "p"),
          [
            "sn_" + n.seq,
            "r_" + B.Base64.encode(n.referrer),
            "c_" + B.Base64.encode(n.cookie),
            "ch_" + n.charset,
            e + "_" + t.encoded,
          ].join("*")
        );
      },
      encodeResize: function(n) {
        var e = [];
        return a(e, "ws", t(n.window)), a(e, "sc", t(n.screen)), e.join("*");
      },
      encodeTimings: function(n) {
        return E.reduce(
          n,
          function(n, e, t) {
            var r = "u_" + t + "*t_" + e.total;
            return (
              E.isNumber(e.rendering) && (r += "*r_" + e.rendering),
              E.isNumber(e.dns) && (r += "*d_" + e.dns),
              E.isNumber(e.timeToFirstBuffer) &&
                (r += "*f_" + e.timeToFirstBuffer),
              E.isNumber(e.downloadTime) && (r += "*w_" + e.downloadTime),
              E.isNumber(e.originalRenderTime) &&
                (r += "*o_" + e.originalRenderTime),
              E.isString(n) && 0 < n.length ? n + "**" + r : r
            );
          },
          ""
        );
      },
      encodeWaterfallTiming: function(n) {
        var e = [];
        for (var t in n) {
          for (var r = [], i = {}, o = [], a = 0; a < n[t].length; a++) {
            var u = [],
              c = null;
            for (var s in n[t][a]) {
              "name" === s
                ? (c = B.Base64.encode(n[t][a][s]))
                : (i[s] === L && ((i[s] = o.length), o.push(s)),
                  f(u, i[s], Math.round(n[t][a][s])));
            }
            null !== c && r.push(c + "_" + u.join("_")), (c = null);
          }
          0 !== r.length && e.push(t + "*" + o.join("_") + "*" + r.join("*"));
        }
        return e.join("**");
      },
      encodeThirdPartyAttributes: function(n) {
        for (var e, t = "", r = [], i = 0; i < n.length; i++) {
          for (e in ((t += B.Base64.encode(n[i].urlMatcher)), n[i].valueMap))
            n[i].valueMap.hasOwnProperty(e) &&
              (t +=
                "_" +
                B.Base64.encode(e) +
                "_" +
                B.Base64.encode(n[i].valueMap[e]));
          r.push(t), (t = "");
        }
        return r.join("*");
      },
      encodeABTesting: function(n) {
        for (var e = [], t = 0; t < n.length; t++)
          e.push(
            "vi_" +
              B.Base64.encode(n[t].variantId) +
              "_vn_" +
              B.Base64.encode(n[t].variantName) +
              "_ei_" +
              B.Base64.encode(n[t].experimentId) +
              "_en_" +
              B.Base64.encode(n[t].experimentName)
          );
        return e.join("*");
      },
      encodeAjaxStats: function(n) {
        var e = JSON.stringify(n),
          t = B.pako.gzip(e);
        return B.Base64.bytesToBase64(t);
      },
      encodeStruggles: function(n) {
        var e = JSON.stringify(n);
        return B.Base64.encode(e);
      },
      encodePerformanceTimings: function(n) {
        var e = n.perf.timing,
          t = n.perf.navigation,
          r = n.browserTime,
          i = [s("*", e)];
        return (
          t && E.isNumber(t.type) && f(i, "nt", t.type),
          t && E.isNumber(t.redirectCount) && f(i, "rc", t.redirectCount),
          r && f(i, "bt", r),
          i.join("*")
        );
      },
      encodeAjaxRequest: function(n) {
        var e,
          t,
          r = [];
        return (
          a(r, "sn", c(n.sn || 0)),
          n.method && a(r, "m", n.method),
          u.ajaxHashRecurrentUrls && "function" == typeof n.ajaxUrls.get
            ? ((e = o(n.url)),
              (t = n.ajaxUrls.get(e)),
              E.isUndefined(t) &&
                (n.ajaxUrls.set(e, n.url), a(r, "u", B.Base64.encode(n.url))),
              a(r, "uh", e))
            : a(r, "u", B.Base64.encode(n.url)),
          n.startedAt && n.endedAt && a(r, "d", c(n.endedAt - n.startedAt)),
          a(r, "s", c(n.status)),
          n.statusText && a(r, "st", B.Base64.encode(n.statusText)),
          n.requestHeaders && a(r, "rqh", B.Base64.encode(n.requestHeaders)),
          n.requestContent && a(r, "rqc", B.Base64.encode(n.requestContent)),
          n.responseHeaders && a(r, "rh", B.Base64.encode(n.responseHeaders)),
          n.responseContent &&
            a(
              r,
              "rc",
              (n.responseCompressed ? B.Base64.bytesToBase64 : B.Base64.encode)(
                n.responseContent
              )
            ),
          a(r, "a", i(n.aborted)),
          a(r, "api", n.api),
          r.join("*")
        );
      },
      encodeResourceContent: function(n) {
        var e = [];
        if (!E.isUndefined(n.url))
          return (
            a(e, "u", B.Base64.encode(n.url)),
            n.type && 0 < n.type.length && a(e, "t", B.Base64.encode(n.type)),
            n.content &&
              0 < n.content.length &&
              a(e, "dd", B.Base64.bytesToBase64(n.content)),
            n.error &&
              0 < n.error.length &&
              a(e, "er", B.Base64.encode(n.error)),
            e.join("*")
          );
      },
      encodeKeyValue: function(n) {
        var e = [];
        return (
          a(e, "n", B.Base64.encode(n.name)),
          a(e, "v", B.Base64.encode("" + n.val)),
          e.join("*")
        );
      },
      encodeSegmentChanged: function(n) {
        var e = [];
        return (
          n.type && e.push("t_" + n.type),
          n.current && e.push("c_" + B.Base64.encode(n.current)),
          n.hint && e.push("h_" + n.hint),
          n.last && e.push("l_" + B.Base64.encode(n.last)),
          n.lastDwell && e.push("ld_" + c(n.lastDwell)),
          (!n.lastLoadTime && 0 !== n.lastLoadTime) ||
            e.push("ll_" + c(n.lastLoadTime)),
          e.join("*")
        );
      },
      encodeKeyEvent: function(n) {
        var e = "";
        return (
          n.unicode && (e += n.unicode),
          E.isUndefined(n.content) || (e += "_" + B.Base64.encode(n.content)),
          e
        );
      },
      encodeClickDetails: function(n) {
        return e(n.start) + "*" + e(n.end) + "*" + c(n.duration);
      },
      encodeMouseMove: function(n) {
        u.mmDebug && (n.length, JSON.stringify(n));
        for (var e, t = [], r = 0; r < n.length; r++)
          !(function(n, e, t, r) {
            r = r || 0;
            var i = u.mmRecordTimes ? "_" + c(r) : "",
              o = Math.round(e),
              a = Math.round(t);
            n.push(c(o) + "_" + c(a) + i);
          })(t, (e = n[r]).x, e.y, e.t);
        return t.join("*");
      },
      encodeHoverEvent: function(n) {
        var e = n.join(" ");
        return u.mhDebug && n.length, e;
      },
      encodeKVMap: function(n) {
        var e = [];
        for (var t in n) {
          n.hasOwnProperty(t) && a(e, t, n[t], !0);
        }
        return e.join("*");
      },
      encodeNumber: c,
      encodeBoolean: i,
      encodeString: function(n) {
        return B.Base64.encode(n);
      },
      encodeCoordinate: function(n) {
        if (!E.isNumber(n.x) || !E.isNumber(n.y)) return n.x, void n.y;
        var e = Math.round(n.x),
          t = Math.round(n.y);
        return c(e) + "_" + c(t);
      },
      encodeCoordinate64: function(n) {
        return B.Base64.encode(e(n));
      },
      encodeHashCode: o,
      encodeNavigationTiming: s,
    };
  }
  function Ke() {}
  function Qe(n, e) {
    if (!n) return n;
    if ("object" != typeof n) return n;
    var t,
      r,
      i = {};
    for (t in n)
      if (n.hasOwnProperty(t)) {
        if ("function" == (r = typeof n[t])) continue;
        if ("object" == r) {
          if (null === n[t]) continue;
          if (n[t].addEventListener || n[t].attachEvent) continue;
          if (!n[t].hasOwnProperty) continue;
          if (Array.isArray(n[t])) {
            i[t] = n[t].map(Qe);
            continue;
          }
          i[t] = Qe(n[t], e);
          continue;
        }
        i[t] = n[t];
      }
    return i;
  }
  function Ye(n, e, t, r) {
    Ke.call(this),
      (this.pageId = r),
      (this.timestamp = e),
      (this.type = n),
      (this.element = t),
      (this.report = !0),
      (this.shouldEncodeValue = !0),
      (this.subPage = window.location.hash),
      (this.referrer = B.stripHash(window.location.href)),
      (this.id = Ye.prototype.nextId++);
  }
  function $e(n, e) {
    Ke.call(this), (this.id = n), (this.metadata = e), (this.events = []);
  }
  function Ze(i, t) {
    function r(n, e) {
      return (n ? "1" : "0") + (e ? "1" : "0");
    }
    var o = Ze.INITIAL_COMPRESSION_FACTOR,
      e =
        (t = t || { compress: !0, forceBase64: !0 }).compress || t.forceBase64
          ? 1.33
          : 1,
      a = 1;
    (this.newPayload = function() {
      return new nt();
    }),
      (this.encode = t.compress
        ? function(n) {
            if (0 === n._updates.length) return "";
            var e,
              t = B.arrayToJsonSafe(n._updates),
              r = B.Base64.bytesToBase64(i.compress(t));
            return (
              (e = r.length / t.length),
              (o = Math.max(e, Ze.MINIMAL_COMPRESSION_FACTOR)),
              "11" + r
            );
          }
        : function(n) {
            if (0 === n._updates.length) return "";
            var e = B.arrayToJsonSafe(n._updates);
            return (
              r(!1, t.forceBase64) + (t.forceBase64 ? B.Base64.toBase64(e) : e)
            );
          }),
      (this.refForEvent = function(n) {
        return "" + a++ + B.hashcode(n.type + n.timestamp);
      }),
      (this.estimatedDomUpdateSize = function(n) {
        return (n ? JSON.stringify(n).length : 0) * e * (t.compress ? o : 1);
      });
  }
  function nt() {
    this._updates = [];
  }
  function et(i) {
    return {
      compress: function(n) {
        return B.pako.gzip(n);
      },
      encodeTimestamp: function(n) {
        var e = n.timestamp;
        return E.isNumber(e) || (e = B.currentTimestamp()), i.encodeNumber(e);
      },
      encodeEventType: function(n) {
        return _.encodeEventTypes ? _.dictionary.encodeEventType(n) : n;
      },
      encodeExtraInfo: function(n) {
        var e = n.extraInfo;
        if (E.isUndefined(e)) return "";
        for (
          var t, r, i, o, a = [], u = Ye.prototype.extraInfoAttrs, c = 0;
          c < u.length;
          c++
        ) {
          var s = u[c],
            f = e[s.name];
          E.isUndefined(f) ||
            ((t = a),
            (r = s.encodeName),
            (i = s.encodeFunc(f)),
            (o = s.encodeCode),
            E.isString(i) && t.push(r + "." + o + "_" + i));
        }
        return a.join("*");
      },
      encodeDebugInfo: function(n) {
        var e = n.debugInfo;
        if (E.isUndefined(e)) return "-";
        function t(n, e, t) {
          E.isUndefined(t) || n.push(e + "_" + t);
        }
        var r = [];
        return (
          t(r, "s", e.severity),
          t(r, "c", e.code),
          t(r, "i", e.count),
          e.msg && e.count <= 3 && t(r, "m", i.encodeString(e.msg)),
          r.join("*")
        );
      },
    };
  }
  function tt(l, h, v, m, g, p) {
    var s = (p = p || {}).base64UriEncoder || encodeURIComponent,
      y = new Ze(m, { forceBase64: !0, compress: p.domCompress });
    (this.name = "FORM-URL"),
      (this.supportsCompression = !1),
      (this.isCompressing = function() {
        return !1;
      }),
      (this.visitXhr = function(n) {
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      }),
      (this.getContentType = function() {
        return "application/x-www-form-urlencoded";
      }),
      (this.encodeSnapshotHtml = function(n) {
        return p.domCompress
          ? {
              encoded: v.Base64.bytesToBase64(m.compress(n)),
              plain: !1,
              compressed: !0,
            }
          : { encoded: v.Base64.encode(n), plain: !1, compressed: !1 };
      }),
      (this.estimateBeaconSize = function(n) {
        return n;
      }),
      (this.encodeEvent = function(n, e) {
        var t,
          r = h.encoding.delimiters.eventParts,
          i = m.encodeTimestamp(n),
          o = m.encodeEventType(n.type),
          a = w[b[n.type]],
          u = a ? a(n.value) : n.value;
        void 0 === e &&
          (e =
            l.isUndefined(n.selectorExpression) || null == n.selectorExpression
              ? h.encoding.rootSelector
              : n.selectorExpression);
        var c,
          s = i + r + o + r + e;
        l.isString(u)
          ? (g.stringIsEncrypted(u)
              ? (n.shouldEncodeValue = !1)
              : (t = n.shouldEncodeValue
                  ? h.encoding.valueEncodedPrefix
                  : h.encoding.valueNotEncodedPrefix),
            (c = n.shouldEncodeValue ? v.Base64.encode(u) : u),
            (s += t ? r + t + c : r + c))
          : (s += r + "-"),
          l.isUndefined(n.extraInfo)
            ? (s += r + "-")
            : (s += r + m.encodeExtraInfo(n)),
          p.reportDebugInfo && !l.isUndefined(n.debugInfo)
            ? (s += r + m.encodeDebugInfo(n))
            : (s += r + "-");
        var f = "";
        n.domSnapshot &&
          ((f = y.refForEvent(n)),
          (s += r + h.encoding.domSnapshotRefPrefix + f)),
          n.type,
          l.contains(
            ["webSocketFrame", "resourceContent", "pageSnapshot"],
            n.type
          ),
          0 < n.subPage.length && n.subPage;
        var d = {
          event: encodeURIComponent(s),
          domUpdate: n.domSnapshot,
          domUpdateRef: f,
        };
        return (
          (d.length = d.event.length + y.estimatedDomUpdateSize(n.domSnapshot)),
          d
        );
      }),
      (this.encodeBeacon = function(n, e, t, r) {
        for (var i = [], o = y.newPayload(), a = 0; a < t.length; a++)
          i.push(t[a].event),
            t[a].domUpdate && o.add(t[a].domUpdate, t[a].domUpdateRef);
        var u =
            "v=" +
            n +
            (void 0 !== e.referrer
              ? "&r=" + encodeURIComponent(e.referrer)
              : "") +
            "&sn=" +
            r +
            "&p=" +
            e.pageId +
            "&seg=" +
            e.segment +
            (void 0 !== e.subPage
              ? "&sp=" + encodeURIComponent(e.subPage)
              : "") +
            (void 0 !== e.pssn ? "&pssn=" + e.pssn : "") +
            "&e=" +
            i.join(h.encoding.delimiters.events) +
            "&dom=" +
            s(y.encode(o)),
          c = g.getKeyInfo();
        return c && (u += "&key=" + encodeURIComponent(c)), u;
      });
  }
  function rt(u, c, s, d, l, h) {
    var v = 0.25,
      m = new Ze(d, {
        forceBase64: !1,
        compress: !(h = h || {}).compress && h.domCompress,
      });
    (this.name = "JSON"),
      (this.supportsCompression = !0),
      (this.isCompressing = function() {
        return !0;
      }),
      (this.visitXhr = function(n) {
        h.corsSafelisted
          ? n.setRequestHeader(
              "Content-Type",
              "text/plain" +
                (h.compress
                  ? "; charset=" + rt.COMPRESSED_INDICATION_CHARSET
                  : "")
            )
          : (n.setRequestHeader("Content-Type", "application/json"),
            h.compress && n.setRequestHeader("Content-Encoding", "gzip"));
      }),
      (this.getContentType = function() {
        return "application/json";
      }),
      (this.encodeSnapshotHtml = function(n) {
        return !h.compress && h.domCompress
          ? {
              encoded: s.Base64.bytesToBase64(d.compress(n)),
              plain: !1,
              compressed: !0,
            }
          : { encoded: n, plain: !0, compressed: !1 };
      }),
      (this.estimateBeaconSize = function(n) {
        return h.compress ? n * v : n;
      }),
      (this.encodeEvent = function(n, e) {
        var t,
          r = {
            timestamp: d.encodeTimestamp(n),
            type: "" + d.encodeEventType(n.type),
          };
        void 0 === e &&
          (e =
            u.isUndefined(n.selectorExpression) || null == n.selectorExpression
              ? c.encoding.rootSelector
              : n.selectorExpression),
          (r.selector = e);
        var i = w[b[n.type]],
          o = i ? i(n.value) : n.value;
        u.isString(o)
          ? (l.stringIsEncrypted(o)
              ? (n.shouldEncodeValue = !1)
              : (t = n.shouldEncodeValue
                  ? c.encoding.valueEncodedPrefix
                  : c.encoding.valueNotEncodedPrefix),
            (o = n.shouldEncodeValue ? s.Base64.encode(o) : o),
            (r.value = t ? t + o : o))
          : (r.value = "-"),
          u.isUndefined(n.extraInfo)
            ? (r.extraInfo = "-")
            : (r.extraInfo = d.encodeExtraInfo(n)),
          h.reportDebugInfo && !u.isUndefined(n.debugInfo)
            ? (r.debugInfo = d.encodeDebugInfo(n))
            : (r.debugInfo = "-");
        var a = "";
        return (
          n.domSnapshot
            ? ((a = m.refForEvent(n)),
              (r.domSnapshot = c.encoding.domSnapshotRefPrefix + a))
            : (r.domSnapshot = "-"),
          n.type,
          r.timestamp,
          r.type,
          0 < n.subPage.length && n.subPage,
          (function(n) {
            var e,
              t = 0;
            for (e in n.event)
              "string" == typeof n.event[e] &&
                (t += e.length + n.event[e].length + 6);
            return (
              (n.length = t + 2 + m.estimatedDomUpdateSize(n.domUpdate)), n
            );
          })({ event: r, domUpdate: n.domSnapshot, domUpdateRef: a })
        );
      }),
      (this.encodeBeacon = function(n, e, t, r) {
        for (var i = [], o = m.newPayload(), a = 0; a < t.length; a++)
          i.push(t[a].event),
            t[a].domUpdate && o.add(t[a].domUpdate, t[a].domUpdateRef);
        var u = {
            ver: n,
            sn: r,
            pageId: e.pageId,
            segment: e.segment,
            events: i,
            dom: m.encode(o),
          },
          c = l.getKeyInfo();
        c && (u.key = c),
          e.referrer && (u.referrer = e.referrer),
          void 0 !== e.subPage &&
            0 < e.subPage.length &&
            (u.subPage = e.subPage),
          void 0 !== e.pssn && (u.pssn = e.pssn);
        var s = JSON.stringify(u);
        if (h.compress) {
          var f = d.compress(s);
          return (
            (v = Math.max(f.length / s.length, rt.MINIMAL_COMPRESSION_FACTOR)),
            s.length,
            f.length,
            f
          );
        }
        return s;
      });
  }
  function it(n, e, t, r, i) {
    var o,
      a,
      u = et(n);
    function c(n) {
      return (
        "%" +
        n
          .charCodeAt(0)
          .toString(16)
          .toUpperCase()
      );
    }
    return (
      (o =
        "json" === i.reportEncoding
          ? new rt(E, _, B, u, t, {
              reportDebugInfo: i.reportDebugInfo,
              compress: i.reportCompress,
              domCompress: i.domCompress,
              corsSafelisted: r && i.reportCorsForceSafelistedHeaders,
            })
          : ((a = /SamsungBrowser\/7/gi.test(e.userAgent)),
            new tt(E, _, B, u, t, {
              reportDebugInfo: i.reportDebugInfo,
              domCompress: i.domCompress,
              base64UriEncoder: a
                ? function(n) {
                    return n.replace(/\+|=|\//gi, c);
                  }
                : encodeURIComponent,
            }))),
      n.setBeaconEncoder(o),
      o
    );
  }
  function ot() {
    var a = [];
    (this.add = function(n, e, t, r, i, o) {
      (this[i.toLowerCase()] = {
        type: n,
        nullable: e,
        parser: t,
        name: i,
        required: o,
        validator: r,
      }),
        o && a.push(i);
    }),
      (this.requiredFieldsMask = function() {
        for (var n = {}, e = 0; e < a.length; e++) n[a[e]] = !0;
        return n;
      });
  }
  function at() {
    (this.errors = []), (this.warnings = []);
  }
  function ut(n, e, t) {
    if (void 0 !== n) {
      var r,
        i = e.get(t + ".bychance.enabled");
      return (
        e.get(t + ".bychance.prev_th") !== "" + n && (i = null),
        null === i
          ? ((r = Math.random() < n),
            e.set(t + ".bychance.enabled", r),
            e.set(t + ".bychance.prev_th", n))
          : (r = "true" === i),
        r
      );
    }
  }
  function ct(n, e, t) {
    var r, i;
    for (r in ((t =
      t ||
      function(n, e, t) {
        return { key: n, value: e };
      }),
    e)) {
      e.hasOwnProperty(r) && (n[(i = t(r, e[r], n)).key] = i.value);
    }
  }
  function st() {
    for (var n = 0; n < arguments.length; n++)
      if (arguments[n] && arguments[n].length) return 1;
  }
  function ft() {
    return {
      validateSelector: function(e) {
        try {
          return O.querySelector(e), !0;
        } catch (n) {
          return (
            this.printErrorMsg("selector not valid"),
            void 0 !== Nn &&
              setTimeout(function() {
                Nn.saveClsDebugErrorEvent("maskingConfiguration", L, e);
              }, 0),
            !1
          );
        }
      },
      printErrorMsg: function(n) {
        console.error(
          "[EyeView-403]: Error while processing configuration. Error cause: " +
            n
        );
      },
    };
  }
  function dt(n) {
    var e = n.msCrypto,
      a = n.msCrypto.subtle;
    (this.executeEncryptionFlow = function(n, e, t, r) {
      var i,
        o = a.importKey(
          "spki",
          n,
          { name: "RSA-OAEP", hash: { name: "SHA-1" } },
          !1,
          ["encrypt"]
        );
      (o.onerror = function(n) {
        r(n.message);
      }),
        (o.oncomplete = function(n) {
          ((i = a.encrypt(
            { name: "RSA-OAEP", hash: { name: "SHA-1" } },
            n.target.result,
            e
          )).onerror = function(n) {
            r(n.message);
          }),
            (i.oncomplete = function(n) {
              var e = n.target.result;
              t(e);
            });
        });
    }),
      (this.getRandomValues = function(n) {
        return e.getRandomValues(n);
      });
  }
  function lt(n) {
    var e = n.crypto,
      i = e.subtle || e.webkitSubtle;
    (this.executeEncryptionFlow = function(n, e, t, r) {
      i.importKey("spki", n, { name: "RSA-OAEP", hash: "SHA-1" }, !1, [
        "encrypt",
      ])
        .then(function(n) {
          i.encrypt({ name: "RSA-OAEP", hash: "SHA-1" }, n, e)
            .then(function(n) {
              t(n);
            })
            .catch(function(n) {
              r(n.message);
            });
        })
        .catch(function(n) {
          r(n.message);
        });
    }),
      (this.getRandomValues = function(n) {
        return e.getRandomValues(n);
      });
  }
  function ht(r) {
    var o,
      i =
        0 <
        (r = B.optionsWithDefaults(r, {
          enabled: !0,
          byContent: !0,
          byAttributes: ["cc-number", "cc-csc"],
          byCommonProps: ["class", "id", "name"],
        })).keepLastDigits
          ? r.keepLastDigits
          : L,
      a = B.immutableSet.apply(null, r.byAttributes),
      u = { doMask: !1 },
      c = /[\s\d]+/gi,
      s = /\d{12,19}/g,
      f = /(credit.*card)|((credit|card|cc).*num)/gi,
      d =
        ((o = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]),
        function(n) {
          for (var e, t = n.length, r = 1, i = 0; t; )
            (e = parseInt(n.charAt(--t), 10)), (i += (r ^= 1) ? o[e] : e);
          return i && i % 10 == 0;
        });
    return function(e) {
      if (!r.enabled) return u;
      var n =
        e.getAttribute("autocomplete") ||
        e.getAttribute("x-autocompletetype") ||
        "";
      if (a[n])
        return {
          doMask: !0,
          keepLastDigits: "cc-number" === n ? i : L,
          cause: "cc",
        };
      if (r.byContent) {
        var t = e.value || "";
        if (
          t.match(c) &&
          (t = t
            .trim()
            .split(/\s+/)
            .join("")) &&
          t.match(s) &&
          d(t)
        )
          return { doMask: !0, keepLastDigits: i, cause: "cc" };
      }
      return r.byCommonProps &&
        r.byCommonProps.some(function(n) {
          return (e.getAttribute(n) || "").match(f);
        })
        ? { doMask: !0, keepLastDigits: i, cause: "cc" }
        : u;
    };
  }
  function vt(r) {
    function n(n, e) {
      var t = (n ? "\\" + n.split("").join("\\") : "") + (e ? "\\s" : ""),
        r = new RegExp("^[" + t + "]*\\d[\\d*" + t + "]*$", "mi");
      return function(n) {
        return r.test(n);
      };
    }
    r = B.optionsWithDefaults(r, {
      valueMaskByCategories: [],
      valueMaskingCharNumeric: "#",
      valueMaskingCharNumericLike: "#",
    });
    var i = {
      numeric: {
        type: "numeric",
        test: n(!1, !1),
        maskingChar: r.valueMaskingCharNumeric || "#",
        byAttTest: {
          autocomplete: B.immutableSet(
            "tel-extension",
            "tel-local",
            "tel-area-code",
            "tel-national",
            "tel-country-code",
            "bday-year",
            "bday-month",
            "bday-day",
            "transaction-amount",
            "postal-code",
            "country",
            "cc-exp-month",
            "cc-exp-year"
          ),
          type: B.immutableSet("number", "range"),
        },
      },
      numericlike: {
        type: "numericLike",
        test: n("=-\\()/%$_#.", !0),
        maskingChar: r.valueMaskingCharNumericLike || "#",
        byAttTest: {
          autocomplete: B.immutableSet("tel", "bday", "cc-exp"),
          type: B.immutableSet("time", "tel", "month"),
        },
      },
      badConfiguration: {
        type: "bad_Configuration",
        test: function() {
          return !0;
        },
        maskingChar: "#",
        byAttTest: { autocomplete: null, type: null },
      },
    };
    return (function() {
      for (var n = [], e = 0; e < r.valueMaskByCategories.length; ++e) {
        var t = r.valueMaskByCategories[e].toLowerCase();
        i[t] ? n.push(i[t]) : n.push(i.badConfiguration);
      }
      return n;
    })();
  }
  function mt(r) {
    var i = { doMask: !1 };
    return function(n) {
      for (var e = 0; e < r.length; ++e) {
        var t = r[e];
        if (
          (function(n, e) {
            var t;
            if (e.byAttTest)
              for (t in e.byAttTest)
                if (
                  e.byAttTest.hasOwnProperty(t) &&
                  e.byAttTest[t][n.getAttribute(t)]
                )
                  return 1;
          })(n, t) ||
          t.test(n.value)
        )
          return {
            doMask: !0,
            cause: t.type,
            maskingChar: t.maskingChar || "*",
          };
      }
      return i;
    };
  }
  function gt(n) {
    var t = !1,
      r = { INPUT: !0, SELECT: !0, TEXTAREA: !0 };
    function i(n) {
      for (; n.parentNode; )
        if ("FORM" === (n = n.parentNode).tagName) return n;
      return n;
    }
    return (
      n.on("domMutation", function(n) {
        var e = !1;
        "childList" === n.type &&
          t &&
          n.addedNodes.forEach(function(n) {
            r[n.tagName] &&
              (e || i(n)._gbForceMasking) &&
              ((e = !0), (n._gbForceMasking = !0));
          });
      }),
      {
        markOwnerAndInputs: function(n) {
          t = !0;
          var e = i(n);
          (e._gbForceMasking = !0),
            (function(n) {
              for (
                var e = n.querySelectorAll("input, select, textarea"), t = 0;
                t < e.length;
                ++t
              )
                e[t]._gbForceMasking = !0;
            })(e);
        },
      }
    );
  }
  function pt(n, e, t) {
    (this.maskingUtils = n), (this.bundles = e), (this.cb = t);
  }
  function yt(n) {
    for (var e, t = 0; t < this.bundles.length; t++)
      if ((e = this.bundles[t](n)).doMask) return e;
    return {};
  }
  function wt(n, e, t, r, a) {
    function i(n, e, t) {
      for (var r, i = [], o = 0; o < n.length; o++)
        if (1 === (i = n[o].split("*")).length) e.push(n[o]);
        else if (2 === i.length)
          try {
            (r = new RegExp("(^|\\s)" + i.join(".*") + "($|\\s)")), t.push(r);
          } catch (n) {
            a.printErrorMsg("exception when creating a regular expression");
          }
        else a.printErrorMsg("more than one wildcard in string");
    }
    (this._censorValueOf = n.censorValueOf),
      (this._isAvailable = n.isAvailable),
      (this._envCensorMode = e),
      (this._censorAttribute = t),
      (this._valueCensorIdsWithoutwildcards = []),
      (this._valueCensorClassesWithoutwildcards = []),
      (this._regexpValueCensorIds = []),
      (this._regexpValueCensorClasses = []),
      (this._valueCensorSelectorsWithoutwildcards = []),
      (this._options = r || {}),
      this._options.valueCensorIds &&
        i(
          this._options.valueCensorIds,
          this._valueCensorIdsWithoutwildcards,
          this._regexpValueCensorIds
        ),
      this._options.valueCensorClasses &&
        i(
          this._options.valueCensorClasses,
          this._valueCensorClassesWithoutwildcards,
          this._regexpValueCensorClasses
        ),
      this._options.valueCensorSimpleSelectors &&
        (function(n, e) {
          var t;
          for (t = 0; t < n.length; ++t)
            a.validateSelector(n[t]) && e.push(n[t]);
        })(
          this._options.valueCensorSimpleSelectors,
          this._valueCensorSelectorsWithoutwildcards
        ),
      (this._options.autoCensorPredicate =
        this._options.autoCensorPredicate ||
        function() {
          return !1;
        });
  }
  function bt(n) {
    var e = n[en];
    return e || ((e = tn()), (n[en] = e)), e;
  }
  function Et(n, e, t) {
    for (var r, i = [], o = 0; o < n.length; o++)
      if (1 === (i = n[o].split("*")).length) e.push(n[o]);
      else if (2 === i.length)
        try {
          (r = new RegExp("(^|\\s)" + i.join(".*") + "($|\\s)")), t.push(r);
        } catch (n) {
          ft.printErrorMsg("exception when creating a regular expression");
        }
      else ft.printErrorMsg("more than one wildcard in string");
  }
  function Ct() {
    (this.readyState = XMLHttpRequest.UNSENT),
      (this.status = L),
      (this._url = L),
      (this._contentType = L),
      (this.cls_own = !0),
      (this.report_api = "send_beacon");
  }
  function St() {
    (this.readyState = XMLHttpRequest.UNSENT),
      (this.status = L),
      (this.xdr = new XDomainRequest()),
      (this.xdr.onprogress = function() {}),
      (this.xdr.ontimeout = function() {});
    var n = this;
    (this.xdr.onload = function() {
      (n.status = 200),
        (n.readyState = XMLHttpRequest.DONE),
        n.onreadystatechange && n.onreadystatechange();
    }),
      (this.xdr.onerror = function() {
        (n.status = 400),
          (n.readyState = XMLHttpRequest.DONE),
          n.onreadystatechange && n.onreadystatechange();
      });
  }
  function Tt(n, i, o, e) {
    var t,
      r,
      a = !0,
      u = [
        function() {
          return new XMLHttpRequest();
        },
        function() {
          return new ActiveXObject("Msxml2.XMLHTTP");
        },
        function() {
          return new ActiveXObject("Msxml3.XMLHTTP");
        },
        function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        },
      ];
    void 0 !== n.XDomainRequest &&
      /(msie 8\.0|msie 9\.0)/i.test(n.navigator.userAgent) &&
      u.unshift(function() {
        return new St();
      }),
      "undefined" != typeof CordovaRequestAdapter &&
        e &&
        ((t = new CordovaCookieAdapter(z)),
        (r = new CordovaContext(O, t)),
        u.unshift(function() {
          return new CordovaRequestAdapter(r, t);
        }));
    function c(n) {
      var e = n();
      return (e.cls_own = !0), e;
    }
    var s = null;
    return {
      createXMLHTTPObject: function(n, e) {
        if (!n && i && e && Ct.isSupported() && Ct.canSend(e))
          return a && o ? ((a = !1), new XMLHttpRequest()) : new Ct();
        if (s) return c(s);
        for (var t, r = 0; r < u.length; r++)
          try {
            return (t = c(u[r])), (s = u[r]), t;
          } catch (n) {}
        return t;
      },
    };
  }
  function kt(n) {
    (this.size = 0), (this.limit = n), (this._keymap = {});
  }
  function xt(e, h, t) {
    var v = [],
      m = [];
    var n,
      g =
        ((n = e.location || e.document.location),
        function() {
          return n.href;
        });
    function r() {
      var n = g() || "",
        e = v.length;
      if (0 !== e) {
        if (v[e - 1] !== n) {
          var t = v[v.length - 1],
            r = p(t),
            i = p(n),
            o = xt.UrlType.FUlL_URL;
          2 === r.length &&
            2 === i.length &&
            r[0] === i[0] &&
            (o = xt.UrlType.HASH_ONLY);
          var a = null;
          2 <= e && v[e - 2] === n
            ? (v.pop(), m.push(t), (a = xt.DirectionType.BACK))
            : 0 < m.length && m[m.length - 1] === n
            ? (m.pop(), v.push(n), (a = xt.DirectionType.FORWARD))
            : (v.push(n), (m = []));
          var u,
            c,
            s,
            f,
            d = o === xt.UrlType.FUlL_URL ? n : i[1],
            l = o === xt.UrlType.FUlL_URL ? t : r[1];
          return (
            (u = a),
            (c = o),
            (s = l),
            (f = d),
            h.emit("navigation", {
              direction: u,
              urlType: c,
              fromUrl: s,
              toUrl: f,
            }),
            1
          );
        }
      } else v.push(n);
    }
    function p(n) {
      var e = (n || "").split("#");
      return [e[0], e[1] || ""];
    }
    function i(e) {
      var n;
      "function" == typeof t[e] &&
        ((n = t[e]),
        (t[e] = function() {
          try {
            3 <= arguments.length &&
              setTimeout(function() {
                r();
              }, 0);
          } catch (n) {
            logger.error(
              "error while intercepting history." + e + " method. error:" + n
            );
          }
          return n.apply(t, [].slice.call(arguments));
        }));
    }
    try {
      i("pushState"), i("replaceState");
    } catch (n) {
      logger.error("failed hooking native history manipulation methods.", n);
    }
    h.on("init:loaded", function() {
      var n = void 0 !== e.onpopstate ? "popstate" : "hashchange";
      B.addEventHandler(e, n, function() {
        r();
      }),
        r();
    }),
      (this.printHistory = function() {
        for (var n = 0; n < v.length; n++)
          console.log("  - " + n + " : " + v[n]);
      });
  }
  function It(n, t, r) {
    var i = r
        ? function(n) {
            for (var e = 0; e < r.length; e++)
              if (-1 !== n.indexOf(r[e])) return !0;
            return !1;
          }
        : It.ALWAYS_FALSE,
      o = !1;
    function a(n, e) {
      t.emit(n ? It.EVENTS.BlackoutEnter : It.EVENTS.BlackoutLeave, e);
    }
    function e(n) {
      var e;
      i(n) !== o && (a((e = !o), n), (o = e));
    }
    function u() {
      a(!0, n.top.location.href), (o = !0);
    }
    function c() {
      a((o = !1), n.top.location.href);
    }
    (this.isUnderBlackout = function() {
      return o;
    }),
      t.on("init:loaded", function() {
        e(n.location.href);
      }),
      t.on("navigation", function() {
        e(n.location.href);
      }),
      t.on("local:forceBlackoutEnter", u),
      t.on("local:forceBlackoutLeave", c),
      (this.forceBlackoutEnter = function() {
        u();
      }),
      (this.forceBlackoutLeave = function() {
        c();
      });
  }
  function Mt(n, e, t, r) {
    (this.severity = n), (this.code = e), (this.count = t), r && (this.msg = r);
  }
  function Rt(s) {
    var e = { tilda: "_clstil", asterisks: "_clsast", space: "_clsspc" };
    function f(n, e) {
      if (h(n)) return e ? _.encoding.rootSelector : n.nodeName;
      var t = u(n.nodeName, e),
        r = (function(n) {
          if (!n.parentNode) return null;
          var e = n.parentNode.childNodes;
          if (e.length < 2) return null;
          for (var t = n.nodeName, r = [], i = 0; i < e.length; i += 1)
            e[i].nodeName === t && r.push(e[i]);
          if (r.length < 2) return null;
          for (var o = 0; o < r.length; o += 1) if (r[o] === n) return o;
          return null;
        })(n);
      if (null !== r)
        return (function(n, e, t) {
          var r = n;
          t || (r += ":eq");
          return r + "(" + e + ")";
        })(t, r, e);
      if (_.useClassesInSelectors) {
        var i = B.getClassList(n);
        if (0 < i.length) {
          for (var o = t, a = 0; a < i.length; a++) o += "." + i[a];
          return o;
        }
      }
      return t;
    }
    function d(n, e, t) {
      var r = B.getElementId(n);
      return (
        ((r && -1 !== r.indexOf("~")) ||
          -1 !== r.indexOf("*") ||
          -1 !== r.indexOf(" ")) &&
          (r = i(r)),
        e ? u(n.nodeName, t) + "#" + r : "#" + r
      );
    }
    function l(n, e) {
      var t = typeof e;
      ("string" != t && "number" != t) || n.unshift(e);
    }
    function u(n, e) {
      return e ? _.dictionary.encodeNodeName(n) : n;
    }
    function h(n) {
      var e = n.nodeName;
      return "HTML" === e || "BODY" === e;
    }
    function i(n) {
      return n
        .replace(/~/g, e.tilda)
        .replace(/\*/g, e.asterisks)
        .replace(/ /g, e.space);
    }
    function v(n) {
      for (var e = n.parentNode; null !== e; ) {
        if (
          (void 0 === e && console.log("hasFormAncestor undefined node: ", n),
          "FORM" === e.nodeName)
        )
          return 1;
        e = e.parentNode;
      }
    }
    function m(n, e, t) {
      var r = "[" + e + "='" + n.getAttribute(e) + "']";
      return (
        (-1 === r.indexOf("~") &&
          -1 === r.indexOf("*") &&
          -1 === r.indexOf(" ")) ||
          (r = i(r)),
        u(n.nodeName, t) + r
      );
    }
    function g(n, e) {
      if (
        0 === s.noIdSelectorsForClassNames.length &&
        0 === s.noIdSelectorsForIDs.length &&
        0 === s.noIdSelectorsForAttrs.length
      )
        return 1;
      for (
        var t = B.getClassList(n), r = 0;
        r < s.noIdSelectorsForClassNames.length;
        r++
      )
        if (0 <= E.indexOf(t, s.noIdSelectorsForClassNames[r])) return;
      for (r = 0; r < s.noIdSelectorsForAttrs.length; r++)
        if (n.hasAttribute(s.noIdSelectorsForAttrs[r])) return;
      for (r = 0; r < s.noIdSelectorsForIDs.length; r++) {
        var i = s.noIdSelectorsForIDs[r];
        if (i && 0 <= e.indexOf(i)) return;
      }
      return 1;
    }
    this.getSelectorInfo = function(n, e, t) {
      (e = void 0 !== e ? e : _.encodeSelectors), (t = t || { useId: !0 });
      var r = s.useIdSelectors && t.useId;
      if (null === n || E.isUndefined(n) || !B.isElement(n))
        return { selector: _.encoding.rootSelector };
      if (n.name && s.preferNamesInFormSelectors && v(n))
        return { selector: m(n, "name", e) };
      if (r) {
        var i = B.getElementId(n);
        if (i && !B.isDuplicateElementId(i) && g(n, i))
          return { selector: d(n, !0, e) };
      }
      if (n.name && s.useNameInFormSelectors && v(n))
        return { selector: m(n, "name", e) };
      if (t.identifyingAttribute && n.hasAttribute(t.identifyingAttribute))
        return { selector: m(n, t.identifyingAttribute, e) };
      for (var o = [f(n, e)], a = n, u = e ? "*" : ">"; a.parentNode && !h(a); )
        if (1 === (a = a.parentNode).nodeType) {
          var c = B.getElementId(a);
          if (c && r && !B.isDuplicateElementId(c) && g(a, c))
            return l(o, d(a, !1)), { selector: o.join(u) };
          if ((l(o, f(a, e)), a === parent)) return { selector: o.join(u) };
        }
      return { selector: o.join(u) };
    };
  }
  function At(a, n) {
    var u = B.immutableSet.apply(null, n);
    function c(n, e) {
      return n + "=" + e;
    }
    function s(n, e, t) {
      t && u[e] && n.push(c(e, t));
    }
    (a = encodeURIComponent(a)),
      (this.apply = function(n, e, t, r) {
        var i,
          o = [];
        if (
          (s(o, "clsjsv", a),
          e &&
            (s(o, "_cls_s", e.sessionId),
            s(o, "_cls_v", e.visitorId),
            u.ref && o.push(c("ref", encodeURIComponent(e.referrer))),
            s(o, "_cls_subs", e.subSessionId),
            s(o, "pid", e.pageId)),
          s(o, "sn", t),
          r)
        )
          for (i in r) r.hasOwnProperty(i) && o.push(c(i, r[i]));
        return o.length
          ? n + (-1 !== n.indexOf("?") ? "&" : "?") + o.join("&")
          : n;
      });
  }
  function Nt(t, e) {
    function r(n) {
      return e.keysPrefix + n;
    }
    (t = t || {}),
      (this.get = function(n) {
        try {
          return t[r(n)];
        } catch (n) {
          return L;
        }
      }),
      (this.set = function(n, e) {
        try {
          return (t[r(n)] = e);
        } catch (n) {
          return L;
        }
      }),
      (this.remove = function(n) {
        try {
          return delete t[r(n)];
        } catch (n) {
          return L;
        }
      });
  }
  function Dt(r, i) {
    r = r || {};
    var n,
      o = i.keysPrefix + "sid",
      a = function() {
        return (n = n || i.sessionIdFunc());
      };
    function u(n) {
      return i.keysPrefix + n;
    }
    (this.get = function(n) {
      var e = a();
      if (!e) return L;
      try {
        if (e === r[o]) return r[u(n)];
      } catch (n) {}
      return L;
    }),
      (this.set = function(n, e) {
        var t = a();
        if (!t) return L;
        try {
          return (
            t !== r[o] &&
              (function() {
                var n;
                for (n in r) 0 === n.indexOf(i.keysPrefix) && delete r[n];
              })(),
            (r[o] = t),
            (r[u(n)] = e)
          );
        } catch (n) {}
        return L;
      }),
      (this.remove = function(n) {
        var e = a();
        if (!e) return !0;
        try {
          if (e === r[o]) return delete r[u(n)];
        } catch (n) {}
        return !0;
      });
  }
  function _t(u, c) {
    c = B.optionsWithDefaults(c, { domainBy: "tld", tldSegmentCount: -1 });
    var s,
      f = {};
    function d(n, e, t, r) {
      var i =
        encodeURIComponent(n) +
        "=" +
        (e + "").replace(/[^!#-+\--:<-\[\]-~]/g, encodeURIComponent);
      return (
        (i += ";path=/"),
        (i += t),
        (i += r ? ";expires=" + r.toUTCString() : "")
      );
    }
    (this.get = function(n) {
      var e,
        t = f[n];
      return (
        void 0 === t &&
          ((t =
            ((e = new RegExp("[,; ]" + n + "=([^\\s,;]*)", "gi").exec(
              ";" + u.cookie
            )) &&
              e[1]) ||
            null),
          (f[n] = t)),
        null === t ? L : t
      );
    }),
      (this.set = function(n, e, t) {
        if (((f[n] = e), void 0 !== s)) u.cookie = d(n, e, s, t);
        else {
          for (
            var r,
              i = !1,
              o = (function() {
                if ("fqdn" === c.domainBy) return [""];
                var n,
                  e = [],
                  t = u.location.host.split(":")[0] || "",
                  r = t.split(".");
                if (r.length < 2) return [""];
                if (2 === r.length) return [t];
                if (2 <= c.tldSegmentCount && c.tldSegmentCount <= r.length)
                  return ["." + r.slice(-c.tldSegmentCount).join(".")];
                for (n = 2; n < r.length; n++)
                  e.push("." + r.slice(-n).join("."));
                return e;
              })(),
              a = 0;
            a < o.length;
            a++
          )
            if (
              ((r = o[a] ? ";domain=" + o[a] : ""),
              (u.cookie = d(n, e, r, t)),
              -1 !== u.cookie.indexOf(n) && -1 !== u.cookie.indexOf(e))
            ) {
              (s = r), o[a], (i = !0);
              break;
            }
          i || (s = "");
        }
      });
  }
  function Ot(n, e, t) {
    var r = E.isNumber(n) && E.isNumber(e);
    return (
      r ||
        An.setErrorOnEvent(
          state.currentlyEncodedPageEvent,
          An.types.WINDOW_SIZE_NOT_VALID_ERR,
          "Non valid values for window size for " + t + ": x=" + n + " y=" + e
        ),
      r ? { width: n, height: e } : null
    );
  }
  function Lt(n) {
    var e = B.getClassList(n);
    if (e)
      for (var t = 0; t < e.length; t++)
        if (B.startsWith(e[t], On.byClassPrefix)) return "." + e[t];
    return L;
  }
  function Ft(n, e, t) {
    (this.url = e), (this.timestamp = t), (this.type = n);
  }
  function Pt(n, e) {
    (this.x = n), (this.y = e);
  }
  function Bt(r) {
    var i = null;
    (this.setNext = function(n) {
      i = n;
    }),
      (this.handle = function(n, e, t) {
        r && t && (n.events = Ln.truncateEventsForUnload(n.events)),
          i.handle(n, e, t);
      });
  }
  function jt(i) {
    var r = null;
    (this.setNext = function(n) {
      r = n;
    }),
      (this.handle = function(n, e, t) {
        !(function(n, e) {
          if (e && i)
            for (var t = n.events, r = 0; r < t.length; r++)
              t[r].domSnapshot && delete t[r].domSnapshot;
        })(n, t),
          r.handle(n, e, t);
      });
  }
  function Ut(c) {
    c = c || 5e4;
    var r = null,
      s = {},
      f = {};
    (this.setNext = function(n) {
      r = n;
    }),
      (this.handle = function(n, e, t) {
        !(function(n, e) {
          var t,
            r,
            i,
            o,
            a = n.encodedEvents,
            u = n.metadata.pageId;
          for (s[u] = s[u] || 1, t = 0; t < a.length; t++)
            (o = (r = a[t]).length + _.encoding.delimiters.events.length),
              (!i || i.estimatedEncodedLength + o > c) &&
                (i && (i.endIndex = t),
                (i = {
                  startIndex: t,
                  metadata: n.metadata,
                  encodedEvents: [],
                  eventSetId: n.id,
                  estimatedEncodedLength: 0,
                  sn: s[u],
                }),
                f[u] && (i.storage = !0),
                s[u]++,
                e.push(i)),
              i.encodedEvents.push(r),
              (i.estimatedEncodedLength += o);
          i.endIndex = t;
        })(n, e),
          r.handle(n, e, t);
      }),
      (this.onRestoreState = function(n, e) {
        B.assign(s, n), B.assign(f, e);
      });
  }
  function Ht(i, o) {
    var r = null;
    (this.setNext = function(n) {
      r = n;
    }),
      (this.handle = function(n, e, t) {
        !(function(n, e) {
          for (var t = n.metadata.pageId, r = 0; r < e.length; r++)
            (i[t] = i[t] || {}),
              (i[t][e[r].sn] = {
                startIndex: e[r].startIndex,
                endIndex: e[r].endIndex,
                eventSetId: e[r].eventSetId,
                sn: e[r].sn,
              });
        })(n, e),
          r.handle(n, e, t);
      }),
      (this.onReporterMessage = function(n, e, t, r) {
        t
          ? t && i[e] && i[e][n] && (o(e, i[e][n], t), delete i[e][n])
          : o(e, i[e][n], t, r);
      });
  }
  function Vt(u, c) {
    var s,
      f = null;
    (this.setNext = function(n) {
      f = n;
    }),
      (this.handle = function(n, e, t) {
        for (var r, i, o = [], a = 0; a < n.events.length; a++)
          (r = (i = n.events[a]).selectorExpression || _.encoding.rootSelector),
            (s = (function(e, n) {
              try {
                return u.encodeEvent(e, n);
              } catch (n) {
                logger.error(
                  "ERROR: while encoding event: " + e.type + " . Exception: ",
                  n.stack ? n.stack : n.message
                ),
                  c &&
                    ((c.encodingErrors = c.encodingErrors || []),
                    c.encodingErrors.length < 100 &&
                      c.encodingErrors.push(n.message));
              }
            })(i, r)) && o.push(s);
        (n.encodedEvents = o), f.handle(n, e, t);
      });
  }
  function qt(n, e, t, r, i) {
    for (
      var o = new Ut(n.config.maxReportSize),
        a = [
          new Bt(i.truncateEventsWithUnload),
          new jt(i.domOmitAfterUnload),
          new Vt(t, r),
          o,
          e,
          new Wt(),
        ],
        u = 0;
      u < a.length;
      u++
    )
      a[u].setNext(a[u + 1]);
    (this.handle = function(n, e) {
      for (var t = [], r = 0; r < n.length; r++) a[0].handle(n[r], t, e);
      return t;
    }),
      (this.restoreState = function(n, e) {
        o.onRestoreState(n, e);
      });
  }
  function zt(t, r) {
    var i = null;
    (this.setNext = function(n) {
      i = n;
    }),
      (this.handle = function(n, e) {
        (r && r.extensionInspectMode) ||
          (t.emit("extensionEvent", n.event), i.handle(n, e));
      }),
      (this.onPipelineTick = function() {});
  }
  function Wt() {
    (this.setNext = function() {}),
      (this.handle = function() {}),
      (this.onPipelineTick = function() {});
  }
  function Xt(n) {
    var r = null,
      i = L,
      e = 0,
      o = [];
    function t() {
      (i = L), (o = []);
    }
    function a(n) {
      return new $e(++e, n);
    }
    n.on("recordingStopped", function() {
      t();
    }),
      (this.setNext = function(n) {
        r = n;
      }),
      (this.handle = function(n, e) {
        var t;
        E.contains(_.nobelEventTypes, n.event.type)
          ? ((t = a(n.metadata)).events.push(n.event), o.push(t), (i = L))
          : ((i && i.metadata === n.metadata) ||
              ((i = a(n.metadata)), o.push(i)),
            i.events.push(n.event)),
          r.handle(n, e);
      }),
      (this.pull = function() {
        var n = o;
        return t(), n;
      }),
      (this.onPipelineTick = function() {});
  }
  function Gt(n, t) {
    var r,
      e,
      i,
      o = null;
    function a() {
      B.currentTimestamp() - e < F.maxTimeForIdleEvent &&
        n.emit("reporter:idle", { idleBaseTime: e, latestEventTime: r });
    }
    (e = r = B.currentTimestamp()),
      -1 !== t && (i = setInterval(a, t)),
      (this.setNext = function(n) {
        o = n;
      }),
      (this.handle = function(n, e) {
        -1 !== t &&
          (clearInterval(i),
          (i = setInterval(a, t)),
          (r = B.currentTimestamp())),
          o.handle(n, e);
      }),
      (this.onPipelineTick = function() {});
  }
  function Jt(n, e) {
    var r,
      i = {},
      o = !1;
    function a() {
      return {
        sessionId: i.sessionId,
        subSessionId: i.subSessionId,
        visitorId: i.visitorId,
        pageId: i.pageId,
        pssn: i.pssn,
        referrer: i.referrer,
        subPage: i.subPage,
        segment: i.segment,
        reportURI: e,
      };
    }
    n.on("init:preloaded", function(n) {
      ((i = {}).sessionId = n.sessionId),
        (i.visitorId = n.visitorId),
        (i.pageId = n.pageId);
    }),
      n.on("session:new", function(n) {
        ((i = {}).sessionId = n.sessionId),
          (i.visitorId = n.visitorId),
          (i.pageId = n.pageId);
      }),
      n.on("session:newSubSessionId", function(n) {
        ((i = a()).pssn = n.pageSnapshotSN), (i.subSessionId = n.subSessionId);
      }),
      n.on("pageSnapshot:report", function(n) {
        (i = a()).pssn = n.seq;
      }),
      (this.setNext = function(n) {
        r = n;
      }),
      (this.handle = function(n, e) {
        var t = E.contains(_.nobelEventTypes, n.event.type);
        (o ||
          t ||
          i.referrer !== n.event.referrer ||
          i.subPage !== n.event.subPage ||
          i.segment !== n.event.segment) &&
          ((o = t ? !0 : o && !1),
          ((i = a()).referrer = n.event.referrer),
          (i.subPage = n.event.subPage),
          (i.segment = n.event.segment)),
          (n.metadata = i),
          r && r.handle(n, e);
      }),
      (this.onPipelineTick = function() {});
  }
  function Kt(r) {
    var i,
      o,
      a = null,
      u = !1,
      c = B.immutableSet("mousemove", "resize", "scroll");
    (this.setNext = function(n) {
      a = n;
    }),
      (this.handle = function(n, e) {
        var t = r(o, i, n.event);
        (o = i),
          (i = n.event),
          !t || (n.event.domSnapshot && n.event.domSnapshot.domChanges)
            ? (o && c[o.type] && u && ((u = !1), a.handle({ event: o }, e)),
              a.handle(n, e))
            : (u = !0);
      }),
      (this.onPipelineTick = function(n) {
        u &&
          100 < B.currentTimestamp() - i.timestamp &&
          ((u = !1), a.handle({ event: i }, n), (i = o = L));
      });
  }
  function Qt(n, e, t) {
    var r,
      i,
      o,
      a,
      u,
      c,
      s,
      f,
      d,
      l,
      h,
      v,
      m,
      g,
      p,
      y,
      w,
      b,
      E,
      C = null,
      S = B.compositeFunctionBuilder()
        .add(
          t.domRecordEnabled
            ? ((g = Nn),
              (p = t),
              (y = !1),
              (w = -1),
              (b = B.immutableSet.apply(null, _.snapshotApplicableEventType)),
              (E = B.immutableSet(
                "pageUpdate",
                "mousedown",
                "touchstart",
                "drag",
                "keydown",
                "unload"
              )),
              function(n) {
                return (
                  -1 !== p.domExpireSnapshotAfter &&
                    "pageSnapshot" !== n.type &&
                    -1 !== w &&
                    n.timestamp - w > p.domExpireSnapshotAfter &&
                    (k().reset(), (g.useCurrentTimeForPagesnapshot = !0)),
                  (y = y || E[n.type]) &&
                    b[n.type] &&
                    (n.domSnapshot = k().getDomSnapshot()),
                  "pageSnapshot" !== n.type && (w = n.timestamp),
                  !(
                    ("pageUpdate" === n.type && !n.domSnapshot) ||
                    k()
                      .getDomMasker()
                      .isDomMasked(n.element, Xn.SELF_OR_ANY_PARENT, Gn.OMIT)
                  )
                );
              })
            : L
        )
        .add(
          ((v = Ye.prototype.SELECTOR_ACTION_COUNT),
          (m = {}),
          function(n) {
            var e;
            return (
              n.selectorExpression &&
                (void 0 === m[n.selectorExpression] &&
                  (m[n.selectorExpression] = 0),
                (e = ++m[n.selectorExpression]),
                n.setExtraInfo(v, e)),
              !0
            );
          })
        )
        .add(
          ((a = {}),
          (u = {}),
          (c = {}),
          (s = {}),
          (h = l = d = !(f = {})),
          (i = e).on("beacon:sending", function(n) {
            a[n] = !0;
          }),
          i.on("beacon:sent", function(n) {
            delete a[n];
          }),
          i.on("beacon:storageAdded", function(n) {
            u[n] = !0;
          }),
          i.on("beacon:storageRemoved", function(n) {
            delete u[n];
          }),
          i.on("beacon:failed", function(n) {
            f[n.sn] = n.status;
          }),
          i.on("beacon:storageFlushFail", function(n) {
            c[n] = !0;
          }),
          i.on("beacon:sizeExceed", function(n) {
            s[n] = !0;
          }),
          i.on("beacon:sendingFromStorage", function() {
            d = !0;
          }),
          i.on("beacon:failedSendingFromStorage", function() {
            l = !0;
          }),
          i.on("devToolsVisibilityChanged", function(n) {
            o = n.size;
          }),
          i.on("worker:init", function(n) {
            h = !!n;
          }),
          function(n) {
            var e, t, r, i;
            return (
              "unload" === n.type &&
                (T(n, a, Ye.prototype.DEBUG_UNCONFIRMED_BEACONS),
                T(n, u, Ye.prototype.DEBUG_STORAGE_PENDING),
                T(n, c, Ye.prototype.FAILED_STORAGE_FLUSH_BEACONS),
                T(n, s, Ye.prototype.STORAGE_SIZE_EXCEED),
                (e = n),
                (t = f),
                (r = Ye.prototype.RETRIED),
                (i = Object.keys(t)).length &&
                  ((function(n, e) {
                    var t;
                    for (t = 0; t < n.length; t++)
                      n[t] = "sn_" + n[t] + "_status_" + e[n[t]];
                  })(i, t),
                  e.setExtraInfo(r, i.join(","))),
                d && n.setExtraInfo(Ye.prototype.FAILED_SEND_FROM_STORAGE, !0),
                l && n.setExtraInfo(Ye.prototype.SENDING_FROM_STORAGE, !0),
                o && n.setExtraInfo(Ye.prototype.DEVTOOLS_VALUES, o),
                n.setExtraInfo(Ye.prototype.USING_WORKER, h)),
              !0
            );
          })
        )
        .add(
          ((r = Nn.logicalSegmentTracker),
          function() {
            return r.onBeforeEmittingPageEvent(), !0;
          })
        )
        .buildBooleanAnd();
    function T(n, e, t) {
      var r = Object.keys(e);
      r.length && n.setExtraInfo(t, r.join(","));
    }
    function k() {
      return g.plugins.domRecordingPlugin;
    }
    (this.setNext = function(n) {
      C = n;
    }),
      (this.handle = function(n, e) {
        S(n.event) && C.handle(n, e);
      }),
      (this.onPipelineTick = function() {});
  }
  function Yt(n, e, t, r, i) {
    for (
      var o = { stats: r },
        a = [
          new Kt(Ln.diluteEvents.bind(Ln)),
          new Qt(0, e, i),
          new Jt(e, i.reportURI),
          new zt(e, Nn),
          new Gt(e, i.idleEventTimeInterval),
          t,
          new Wt(),
        ],
        u = 0;
      u < a.length;
      u++
    )
      a[u].setNext(a[u + 1]);
    setInterval(function() {
      for (var n = 0; n < a.length; n++) a[n].onPipelineTick(o);
    }, 5e3),
      e.on("saveEvent", function(n) {
        var e = { event: n };
        try {
          a[0].handle(e, o);
        } catch (n) {
          logger.error("Failed handling page event'. Error: " + n.message, n);
        }
      });
  }
  function $t(i, o, a, u, c, n, s, f) {
    var d = [];
    function l() {
      d.length ? h() : f++;
    }
    function h() {
      var n = d.shift(),
        e = n.beacon,
        t = n.queryParams;
      e.storage && (t.storage = !0);
      var r = o.encodeBeacon(
        _.beaconVersion,
        e.metadata,
        e.encodedEvents,
        e.sn
      );
      f--,
        i.emit("beacon:sending", e.sn),
        a.dispatch(r, e.metadata, e.sn, t, l),
        s(e.sn, r.length),
        e.sn,
        e.metadata.pageId,
        e.encodedEvents.length;
    }
    -1 === f && (f = 1e3),
      i.on("removeFromStorage", n.untrack),
      (this.restoreState = function(n, e) {
        u.restoreState(n, e);
      }),
      (this.encodeAndDispatch = function(n, e, t) {
        try {
          var r,
            i,
            o = c ? { aid: e } : {},
            a = (function(n, e) {
              for (var t = [], r = 0; r < n.length; r++)
                n[r].encodedEvents.length &&
                  t.push({ beacon: n[r], queryParams: e });
              return t;
            })(u.handle(n, t), o);
          for (
            a.length && (d = d.concat(a)), i = Math.min(d.length, f), r = 0;
            r < i;
            r++
          )
            h();
        } catch (n) {
          logger.error("Error while flushing beacons. message:", n.message);
        }
      });
  }
  function Zt(t, r) {
    (this.set = function(n, e) {
      try {
        t[n] = r.encode(e);
      } catch (n) {
        logger.error("error: failed writing to storage. message:", n.message);
      }
    }),
      (this.getAndClear = function(n) {
        try {
          var e = t[n];
          if ((t.removeItem(n), e)) return r.decode(e);
        } catch (n) {
          logger.error("error: failed reading from storage: " + n.message, n);
        }
        return L;
      });
  }
  function nr(t, e, r, o, a, i, u, c, s) {
    var f,
      d,
      n = !1,
      l = !1,
      h = "",
      v = -1,
      m = !(s.reportPreferSendBeaconAPI && Ct.isSupported()),
      g = {};
    function p() {
      return n && l && d;
    }
    function y(n, e) {
      (v = Math.max(v, n)), c.count++, (c.flushedBytes += e);
    }
    function w() {
      if (p())
        try {
          var n = a.pull();
          n.length && (b(n), Ln.notifyEventsFlush());
        } catch (n) {
          logger.error(
            "ERROR: while flushing pending events. Exception: ",
            n.stack ? n.stack : n.message
          );
        }
    }
    function b(n) {
      o.track(n), d.encodeAndDispatch(n, h);
    }
    function E() {
      try {
        var n = u.getAndClear(Zt.KEY_NAME_SN),
          e = u.getAndClear(Zt.KEY_NAME_EST);
        n &&
          e &&
          e.length &&
          (d.restoreState(
            n,
            (function(n) {
              for (var e = {}, t = 0; t < n.length; t++)
                e[n[t].metadata.pageId] = !0;
              return e;
            })(e)
          ),
          t.emit("beacon:sendingFromStorage"),
          b(e));
      } catch (n) {
        t.emit("beacon:failedSendingFromStorage"),
          logger.error(
            "error: could not send pending storage reports. message:",
            n.message
          );
      }
    }
    function C() {
      var n;
      E(),
        (n = s.reportByPost ? s.reportPostInterval : s.reportInterval) &&
          !f &&
          (f = setInterval(w, n));
    }
    function S(n) {
      try {
        g[n.data.pageId].postMessage({
          messageId: n.data.messageId,
          type: "eventSet",
        }),
          p()
            ? b(n.data.eventSets)
            : (logger.error(
                "Cannot flush event sets of a child iframe as the Flusher is not ready."
              ),
              t.emit(
                "clsDebug",
                "cannot flush child iframe's events: dispatcher not set (waiting for worker?)."
              ));
      } catch (n) {
        logger.error(
          "ERROR: while flushing event sets of a child iframe. Exception: ",
          n.stack ? n.stack : n.message
        );
      }
    }
    t.on("worker:init", function(n) {
      (d = n
        ? new tr(n, o, y, t)
        : new $t(t, e, r, i, m, o, y, s.reportMaxConcurrency)),
        p() && C();
    }),
      t.on("corsReady", function() {
        (l = !0), p() && C();
      }),
      t.on("corsReset", function() {
        l = !1;
      }),
      t.on("encryptionReady", function() {
        (n = !0), p() && C();
      }),
      t.on("sendStoragePendingReports", E),
      t.on(
        "event:unload",
        function() {
          try {
            var n,
              e,
              t,
              r,
              i = a.pull();
            s.storageBackedReporting
              ? ((n = o.packageEventSets()),
                (e = []),
                Array.prototype.push.apply(e, n.eventSets),
                Array.prototype.push.apply(e, i),
                (n.sn[i[0].metadata.pageId] = n.sn[i[0].metadata.pageId] || 1),
                (n.eventSets = $e.reduceByMetadata(e)),
                (t = u.getAndClear(Zt.KEY_NAME_EST)),
                (r = u.getAndClear(Zt.KEY_NAME_SN)) && B.assign(n.sn, r),
                t && Array.prototype.push.apply(n.eventSets, t),
                u.set(Zt.KEY_NAME_EST, n.eventSets),
                u.set(Zt.KEY_NAME_SN, n.sn))
              : i.length && p() && b(i);
          } catch (n) {
            logger.error(
              "Flusher error: handling 'unload' event raised an error.",
              n.message
            );
          }
        },
        L,
        1e3
      ),
      t.on("forceFlush", w),
      t.on("analyzerId", function(n) {
        h = n;
      }),
      t.on("iframePortReceived", function(n) {
        p() && E(), (g[n.pageId] = n.port), (n.port.onmessage = S);
      }),
      (this.flush = function() {
        w();
      });
  }
  function er(e, r, i, t, o, a) {
    var u,
      c = 1,
      s = {};
    function f(n) {
      try {
        var e = t.pull();
        e.length && (d(e, n), Ln.notifyEventsFlush());
      } catch (n) {
        logger.error(
          "ERROR: while flushing pending events. Exception: ",
          n.stack ? n.stack : n.message
        );
      }
    }
    function d(n, e) {
      try {
        var t;
        (s[c] = n),
          !e || (e && !a.storageBackedReporting)
            ? (i.send({ eventSets: n, messageId: c, pageId: r().page.id }), c++)
            : ((t = (o.getAndClear(Zt.KEY_NAME_EST) || []).concat(
                (function(n) {
                  var e,
                    t = [];
                  for (e in n) n.hasOwnProperty(e) && (t = t.concat(n[e]));
                  return t;
                })(s)
              )),
              o.set(Zt.KEY_NAME_EST, t),
              (s = {}));
      } catch (n) {
        logger.error("Exception while flushing events. message:", n.message);
      }
    }
    function l(n) {
      var e;
      "ack" === n.data.type
        ? (f(),
          (e = a.reportByPost ? a.reportPostInterval : a.reportInterval) &&
            !u &&
            (u = setInterval(f, e)))
        : delete s[n.data.messageId];
    }
    e.on("init:loaded", function() {
      var n = i.initPorts(l);
      e.emit("frame:port", { args: { pageId: r().page.id }, transferable: n });
    }),
      e.on("event:unload", f.bind(null, !0)),
      e.on("forceFlush", f),
      e.on("sendStoragePendingReports", function() {
        try {
          var n = o.getAndClear(Zt.KEY_NAME_EST);
          n && n.length && (e.emit("beacon:sendingFromStorage"), d(n, !1));
        } catch (n) {
          e.emit("beacon:failedSendingFromStorage"),
            logger.error(
              "error: could not send pending storage reports. message:",
              n.message
            );
        }
      }),
      (this.flush = function() {
        u && f();
      });
  }
  function tr(i, t, r, o) {
    i.addEventListener("message", function(n) {
      var e = n.data;
      "beaconSent" === e.type
        ? r(e.sn, e.encodedLength)
        : "onBeaconResponse" === e.type
        ? e.success
          ? (t.untrack({ pageId: e.pageId, beaconData: e.beaconData }),
            o.emit("beacon:sent", e.sn))
          : o.emit("beacon:failed", { sn: e.sn, status: e.requestStatus })
        : "newConfig" === e.type && o.emit("handleGatewayResponse", e.config);
    }),
      (this.restoreState = function(n, e) {
        i.postMessage({ type: "restoreState", args: [n, e] });
      }),
      (this.encodeAndDispatch = function(n, e, t) {
        var r = n.map(function(n) {
          return n.toJSON ? n.toJSON() : n;
        });
        i.postMessage({ type: "encodeAndDispatch", args: [r, e, t] });
      });
  }
  function rr(i, o, logger, c) {
    function a(n, e, t) {
      for (var r = n, i = 0; i < e.length; i++) if (!(r = r[e[i]])) return null;
      return (function(n, e) {
        var t,
          r,
          i,
          o,
          a = [];
        for (n instanceof Array || (n = [n]), t = 0; t < n.length; t++)
          for (i = n[t][e], r = 0; r < i.length; r++) {
            var u = i[r].responseTokens;
            (o = u) &&
            o["experience.id"] &&
            o["experience.name"] &&
            o["activity.id"] &&
            o["activity.name"]
              ? a.push({
                  variantId: u["experience.id"],
                  variantName: u["experience.name"],
                  experimentId: u["activity.id"],
                  experimentName: u["activity.name"],
                })
              : c.abTesting.missingFields++;
          }
        return a;
      })(r, t);
    }
    ((c = c || {}).abTesting = { missingFields: 0, success: 0 }),
      i.on("ajax:end", function(n) {
        try {
          if (
            200 <= n.status &&
            n.status <= 202 &&
            n.resContentType &&
            -1 < n.resContentType.indexOf("application/json")
          ) {
            var e,
              t,
              r = [];
            if (n.responseType && "text" !== n.responseType) {
              if ("json" !== n.responseType) return;
              t = n.response;
            } else t = JSON.parse(n.responseText);
            for (e = 0; e < o.length; e++)
              if (
                new RegExp(o[e].urlMatcher, "i").test(n.url) &&
                (r = a(t, o[e].path, o[e].tokenContainer)) &&
                r.length
              ) {
                i.emit("abTesting", r), c.abTesting.success++;
                break;
              }
          }
        } catch (n) {}
      });
  }
  function ir(t) {
    var r = ir.extractTLD(t);
    function o(n) {
      throw new SyntaxError("Illegal ajax predicate syntax: " + n);
    }
    var a = {
      always: function() {
        return function() {
          return !0;
        };
      },
      never: function() {
        return function() {
          return !1;
        };
      },
      fqdn: function() {
        return function(n) {
          var e = B.extractHostname(n.url);
          return !e || e === t;
        };
      },
      tld: function() {
        return function(n) {
          var e = B.extractHostname(n.url);
          return !e || ir.extractTLD(e) === r;
        };
      },
      statusgte: function(n) {
        n || o("Missing required argument 'status'.");
        var e = parseInt(n);
        return function(n) {
          return n.status >= e;
        };
      },
      urimatches: function(n) {
        n || o("Missing required argument 'pattern'.");
        var e = new RegExp(n);
        return function(n) {
          return !1 !== e.test(n.url);
        };
      },
      not: function(n) {
        n || o("Missing required arguments.");
        var e = i(n);
        return (
          1 !== e.length && o("Expecting single argument."),
          function(n) {
            return !e[0](n);
          }
        );
      },
      and: function(n) {
        n || o("Missing required arguments.");
        var t = i(n);
        return function(n) {
          for (var e = 0; e < t.length; e++) if (!t[e](n)) return !1;
          return !0;
        };
      },
      or: function(n) {
        n || o("Missing required arguments.");
        var t = i(n);
        return function(n) {
          for (var e = 0; e < t.length; e++) if (t[e](n)) return !0;
          return !1;
        };
      },
    };
    function u(n) {
      var e = n.indexOf("(");
      if (-1 < e) {
        for (var t = -1, r = 1, i = e + 1; i < n.length; i++)
          if (("(" === n.charAt(i) && r++, ")" === n.charAt(i) && 0 == --r)) {
            t = i;
            break;
          }
        return (
          -1 === t && o("Missing closing ')'."),
          [
            B.trim(n.substring(0, e).toLowerCase()),
            B.trim(n.substring(e + 1, t)),
          ]
        );
      }
      return [n.toLowerCase()];
    }
    function i(n) {
      for (var e, t = [], r = (n || "").split(","), i = 0; i < r.length; i++)
        (e = u(B.trim(r[i]))),
          a[e[0]] || o("Unsupported predicate type '" + e[0] + "'."),
          t.push(a[e[0]](e[1]));
      return t;
    }
    (a.true = a.always),
      (a.false = a.never),
      (this.create = function(n) {
        if (!n) return a.never();
        var e = u(n);
        return (
          a[e[0]] || o("Unsupported predicate type '" + e[0] + "'."),
          a[e[0]](e[1])
        );
      });
  }
  function or(f, n, e, d) {
    var l = {},
      h = ir.extractTLD(e),
      v = function() {
        return !1;
      },
      m = f.location.pathname;
    function g(n) {
      return l[or.getEntryKey(n)];
    }
    function c(n, e, t) {
      var r = n.duration,
        i = parseInt(n.contentLength),
        o = (function(n) {
          if (!n) return 0;
          if ("string" == typeof n) return n.length;
          if (void 0 !== n.byteLength) return n.byteLength;
          if (n instanceof Blob) return n.size;
          return 0;
        })(n.requestContent),
        a = e[t];
      ++(a = a || {
        count: 0,
        sumDuration: 0,
        sumResponseBytes: 0,
        sumRequestBytes: 0,
      }).count,
        (a.sumDuration = a.sumDuration + r),
        (a.sumResponseBytes = a.sumResponseBytes + (i || 0)),
        (a.sumRequestBytes = a.sumRequestBytes + (o || 0)),
        (e[t] = a);
    }
    return (
      n.on("segmentChanged", function(n) {
        m = n.current;
      }),
      n.on("event:unload", function() {
        B.isEmpty(l) ||
          n.emit(
            "ajax:reportStats",
            (function(n) {
              var e,
                t = [];
              for (e in n) n.hasOwnProperty(e) && t.push(n[e]);
              return t;
            })(l)
          );
      }),
      {
        initConfig: function(n) {
          try {
            if (d.ajaxRecordStats) return (v = n.create(d.ajaxRecordStats)), !0;
          } catch (n) {
            logger.error(
              "Error while parsing Ajax predicates from configuration. interception disabled. error:" +
                n
            );
          }
          return !1;
        },
        onSend: function(n) {
          var e, t, r, i, o, a, u, c, s;
          v(n) &&
            ((e = {}),
            (t = d.ajaxStatsQueryParams && B.parseQuery(n.url.split("?")[1])),
            (n.queryHash = (function(e, t) {
              if (!e) return 0;
              var r = 0;
              return (
                d.ajaxStatsQueryParams.forEach(function(n) {
                  e[n] &&
                    ((t[n] = e[n]),
                    (r = 31 * (r = 31 * r + B.hashcode(n)) + B.hashcode(e[n])));
                }),
                r
              );
            })(t, e)),
            (n.segment = m),
            (a = g(n)) ||
              ((r = f.location.href),
              (i = B.extractHostname(n.url) || f.location.hostname),
              (o = B.extractPath(n.url.split("?")[0])),
              (a = {
                fields: {
                  segment: m,
                  sameTLD: 0 === (s = i).indexOf("/") || h === ir.extractTLD(s),
                  method: n.method,
                  hostname: i,
                  path: o,
                  refHost: B.extractHostname(r),
                  refPath: B.extractPath(r.split("?")[0]),
                  api: n.api,
                },
                counters: {},
                queryParams: e,
              }),
              (u = n),
              (c = a),
              (l[or.getEntryKey(u)] = c)));
        },
        onLoadEnd: function(n) {
          var e,
            t,
            r,
            i,
            o,
            a,
            u = g(n);
          u &&
            ((e = n.resContentType),
            (t = n.reqContentType),
            0 === (r = n.status) && (r = n.aborted ? 1 : r),
            c(n, u.counters, r),
            (i = u),
            (a = t),
            (o = e) && (i.fields.responseContentType = o),
            a && (i.fields.requestContentType = a));
        },
      }
    );
  }
  function ar(s, f, d, l, t, r) {
    var n,
      h =
        ((n = 0),
        function() {
          return n++;
        }),
      v = {},
      m = r.ajaxCaptureRequestCookie || !1;
    d.on(
      "event:unload",
      function() {
        var n;
        for (n in v) v.hasOwnProperty(n) && ((v[n].status = 0), i(v[n]));
      },
      null,
      -1
    );
    function e() {
      return !1;
    }
    var g = e,
      p = e,
      y = e,
      w = e,
      b = e;
    function E(n, e, t, r, i, o) {
      var a = {};
      return (
        (a.startedAt = n.startTime),
        (a.endedAt = n.endTime),
        (a.url = dr.safeEncodeURI(n.url)),
        (a.method = n.method),
        (a.requestHeaders = e || null),
        (a.requestContent = "string" == typeof t ? t : null),
        (a.responseHeaders = r),
        (a.responseContent = i),
        (a.responseCompressed = o),
        (a.api = n.api),
        a
      );
    }
    function i(n) {
      if ((delete v[n.uuid], !n.recordingLimitExceeded)) {
        var e = y(n),
          t = e || p(n),
          r = b(n),
          i = r || w(n);
        if (!(i || t || g(n))) return !1;
        var o = e && n.hasGzipContentEncoding(),
          a = e ? n.captureContent() : null;
        o && (a = (c = a) ? l.pako.gzip(c) : null);
        var u = E(
          n,
          i
            ? (function(n) {
                var e = n.requestHeaders || [];
                if (
                  m &&
                  (l.extractHostname(n.url) === s.location.host ||
                    l.isHostRelativeUrl(n.url))
                )
                  try {
                    var t = f.cookie;
                    t && e.push("cookie: " + t);
                  } catch (n) {}
                return (
                  n.masking &&
                    n.masking.request &&
                    e.push("X-Glassbox-JSMasking: " + n.masking.request),
                  e.join("\r\n")
                );
              })(n)
            : null,
          r ? n.requestContent : null,
          t ? n.fixHeaders() : null,
          a,
          o
        );
        (u.lastFocusedSelectorInfo = n.lastFocusedSelectorInfo),
          (u.status = n.status),
          (u.statusText = n.statusText),
          (u.aborted = n.aborted),
          (u.sn = h()),
          setTimeout(function() {
            d.emit("ajax:loadend", u);
          }, 0);
      }
      var c;
    }
    return {
      initConfig: function(n) {
        var e = !1;
        return (
          r.ajaxRecordMetadata &&
            ((g = n.create(r.ajaxRecordMetadata)), (e = !0)),
          r.ajaxRecordResponseHeaders &&
            ((p = n.create(r.ajaxRecordResponseHeaders)), (e = !0)),
          r.ajaxRecordResponseBody &&
            ((y = n.create(r.ajaxRecordResponseBody)), (e = !0)),
          r.ajaxRecordRequestHeaders &&
            ((w = n.create(r.ajaxRecordRequestHeaders)), (e = !0)),
          r.ajaxRecordRequestBody &&
            ((b = n.create(r.ajaxRecordRequestBody)), (e = !0)),
          e
        );
      },
      onLoad: function(n) {
        n.recordingLimitExceeded || d.emit("ajax:load", E(n));
      },
      onError: function(n) {
        n.recordingLimitExceeded || d.emit("ajax:error", E(n));
      },
      onSend: function(n) {
        var e;
        t.allow()
          ? ((e = E((v[n.uuid] = n))),
            n.requestContent && (e.data = n.requestContent))
          : (n.recordingLimitExceeded = !0);
      },
      onLoadEnd: i,
    };
  }
  function ur(n, e, t, r, i) {
    var o;
    for (o in ((this.api = "fetch"),
    (this.url = n),
    (this.startTime = r),
    (this.lastFocusedSelectorInfo = i),
    (this.uuid = t),
    (this.init = e || {}),
    (this.method = e.method),
    (this.requestHeaders = []),
    (this.masking = {}),
    e.headers))
      e.headers.hasOwnProperty(o) &&
        (this.requestHeaders.push(o + ": " + e.headers[o]),
        "content-type" === o.toLowerCase() &&
          (this.reqContentType = e.headers[o]));
  }
  function cr(n, e, t, r, i, o) {
    (this.xhr = n),
      (this.uuid = i),
      (this.requestHeaders = []),
      (this.method = t),
      (this.url = e),
      (this.async = r),
      (this.api = "xhr"),
      (this.ajaxMasker = o),
      (this.masking = {});
  }
  function sr(a, u, c, s, f, d, l) {
    if (!a.fetch) return !1;
    function h(n) {
      return !n || n.includes("json") || n.includes("text");
    }
    var n = a.fetch;
    a.fetch = function() {
      var o = (function(n) {
        try {
          var e = "object" == typeof n[0] ? n[0].url || "" + n[0] : n[0],
            t =
              "object" == typeof n[1]
                ? n[1]
                : "object" == typeof n[0]
                ? n[0]
                : {};
          if (f(e, !1)) {
            var r = a.document.activeElement
                ? c.getSelectorInfo(a.document.activeElement)
                : null,
              i = new ur(s.mask(e), t, d.uuid(), d.currentTimestamp(), r);
            return (
              t.body &&
                h(i.reqContentType) &&
                (i.reqContentType && i.reqContentType.includes("json")
                  ? (i.requestContent = l.getJsonContent(i, "request", t.body))
                  : (i.requestContent = l.maskText(i, "request", t.body))),
              u("onSend", i),
              u("onLoadStart", i),
              i
            );
          }
        } catch (n) {
          logger.error(
            "Error while processing fetch request. Error: " + n.message,
            n
          );
        }
      })(arguments);
      return o
        ? Promise.resolve(
            n
              .apply(a, arguments)
              .then(function(n) {
                try {
                  var e, t;
                  n.bodyUsed ||
                    ((e = n.clone()),
                    (i = e),
                    ((r = o).resHeaders = i.headers),
                    (r.endTime = d.currentTimestamp()),
                    (r.duration = r.endTime - r.startTime),
                    (r.status = i.status),
                    (r.statusText = i.statusText),
                    (r.resContentType = i.headers.get("Content-Type")),
                    (r.contentLength = i.headers.get("Content-Length")),
                    (r.responseText = null),
                    h((t = e.headers.get("Content-Type"))) && e.ok
                      ? t && t.includes("json")
                        ? e
                            .json()
                            .then(function(n) {
                              (o.responseText = l.getJsonContent(
                                o,
                                "response",
                                n
                              )),
                                u("onLoadEnd", o);
                            })
                            .catch(function() {
                              u("onLoadEnd", o);
                            })
                        : e
                            .text()
                            .then(function(n) {
                              (o.responseText = l.maskText(o, "response", n)),
                                u("onLoadEnd", o);
                            })
                            .catch(function() {
                              u("onLoadEnd", o);
                            })
                      : u("onLoadEnd", o));
                } catch (n) {
                  logger.error("Error while processing fetch request.", n);
                }
                var r, i;
                return n;
              })
              .catch(function(n) {
                var e, t;
                return (
                  (t = n),
                  ((e = o).status = 0),
                  (e.statusText = t.stack),
                  (e.duration = d.currentTimestamp() - e.startTime),
                  (e.endTime = d.currentTimestamp()),
                  u("onLoadEnd", e),
                  Promise.reject(n)
                );
              })
          )
        : n.apply(a, arguments);
    };
  }
  function fr(n, t, e, r, i, o, a, u) {
    var c = a.hookProto(XMLHttpRequest.prototype);
    function s(n) {
      n.adapter.consumed ||
        (n.adapter.onCompleted(), t("onLoadEnd", n.adapter));
    }
    function f() {
      t("onLoad", this.adapter);
    }
    function d() {
      t("onError", this.adapter);
    }
    function l() {
      (this.adapter.startTime = o.currentTimestamp()),
        (this.adapter.lastFocusedSelectorInfo = n.document.activeElement
          ? e.getSelectorInfo(n.document.activeElement)
          : null),
        t("onLoadStart", this.adapter);
    }
    function h() {
      this.adapter && s(this);
    }
    return (
      "onloadend" in new XMLHttpRequest() &&
      (!!(
        c.setHookBefore("open", function() {
          var n =
            "object" == typeof arguments[1]
              ? arguments[1].toString()
              : arguments[1];
          i(n, this.cls_own) &&
            ((n = r.mask(n)),
            (this.adapter = new cr(
              this,
              n,
              arguments[0],
              arguments[2],
              o.uuid(),
              u
            )),
            this.addEventListener("load", f, !1),
            this.addEventListener("error", d, !1),
            this.addEventListener("loadstart", l, !1),
            this.addEventListener("loadend", h, !1));
        }) &&
        c.setHookBefore("send", function() {
          var n, e;
          this.adapter &&
            (arguments[0] &&
              ("string" == typeof arguments[0] ||
                (0 < arguments.length &&
                  (!(e = this.adapter.reqContentType) ||
                    0 <= e.indexOf("json") ||
                    0 <= e.indexOf("text")))) &&
              ((n = arguments[0]),
              (n =
                this.adapter.reqContentType &&
                0 <= this.adapter.reqContentType.indexOf("json")
                  ? u.getJsonContent(this.adapter, "request", n)
                  : u.maskText(this.adapter, "request", n)),
              (this.adapter.requestContent = n)),
            t("onSend", this.adapter));
        }) &&
        c.setHookBefore("abort", function() {
          this.adapter &&
            ((this.adapter.aborted = !0),
            this.status
              ? s(this)
              : ((this.adapter.aborted = !0), t("onAbort", this.adapter)));
        }) &&
        c.setHookBefore("setRequestHeader", function() {
          this.adapter &&
            arguments[1] &&
            (this.adapter.requestHeaders.push(
              arguments[0] + ": " + arguments[1]
            ),
            "Content-Type" === arguments[0] &&
              (this.adapter.reqContentType = arguments[1]));
        })
      ) ||
        (c.revert(), !1))
    );
  }
  function dr(i, o, n, a, e, u, c, s, f, d) {
    var t,
      r,
      l = [
        ar(i, i.document, n, B, e, f),
        or(i, n, c, f),
        ((t = n),
        (r = f),
        {
          initConfig: function() {
            return (
              r.interceptThirdPartyAttributes ||
              r.struggleCaptureAjaxErrors ||
              r.recordSpaLoadTime ||
              r.interceptABTesting ||
              r.struggleCaptureDeadClick
            );
          },
          onSend: function(n) {
            t.emit("ajax:send", n);
          },
          onLoadEnd: function(n) {
            t.emit("ajax:end", n);
          },
          onError: function(n) {
            t.emit("ajax:loadError", n);
          },
        }),
      ],
      h = [];
    function v(n, e) {
      for (var t = 0; t < h.length; ++t) h[t][n] && h[t][n](e);
    }
    function m(n, e) {
      if (!n) return !1;
      if (e) return !1;
      if (B.startsWith(n, "data:")) return !1;
      if (0 <= n.indexOf(f.reportURI)) return !1;
      for (var t = n.toLowerCase(), r = 0; r < d.length; r++)
        if (0 <= t.indexOf(d[r])) return !1;
      return !0;
    }
    this.initialize = function() {
      try {
        var n,
          e = new ir(c);
        for (u.init(e), n = 0; n < l.length; ++n)
          l[n].initConfig(e) && h.push(l[n]);
      } catch (n) {
        return (
          logger.error(
            "Error while parsing Ajax predicates from configuration. interception disabled. error:" +
              n
          ),
          !1
        );
      }
      return (
        (t = sr(i, v, a, s, m, B, u)),
        (r = fr(i, v, a, s, m, B, o, u)),
        !(!t && !r)
      );
      var t, r;
    };
  }
  function lr() {
    return parseInt(Vn.get(zn) || "0");
  }
  function hr(r, i, o) {
    var a = 0,
      u = {};
    (this.untrack = function(n) {
      try {
        var e, t;
        (u[n.pageId] = Math.max(u[n.pageId] || 1, n.beaconData.sn)),
          i[n.pageId] &&
            ((e = n.beaconData.eventSetId),
            (t = i[n.pageId][e].events).length &&
              ((a -= n.beaconData.endIndex - n.beaconData.startIndex),
              t.splice(
                n.beaconData.startIndex,
                n.beaconData.endIndex - n.beaconData.startIndex
              ),
              r.emit("beacon:storageRemoved", n.beaconData.sn),
              t.length || delete i[n.pageId][e]));
      } catch (n) {
        logger.error(
          "Failed removing form memory. Exception message:" + n.message,
          n
        );
      }
    }),
      (this.track = function(n) {
        for (var e, t, r = 0; r < n.length; r++)
          0 < (e = o - a) &&
            ((t = n[r]),
            (i[t.metadata.pageId] = i[t.metadata.pageId] || {}),
            (i[t.metadata.pageId][t.id] = t).events.length <= e
              ? (a += t.events.length)
              : ((a = o), t.events.splice(e)));
      }),
      (this.packageEventSets = function() {
        var n = (function() {
          var n,
            e,
            t = { sn: {}, eventSets: [] };
          for (n in i)
            if (i.hasOwnProperty(n))
              for (e in ((t.sn[n] = u[n] !== L ? u[n] + 1 : 1), i[n]))
                i[n].hasOwnProperty(e) && t.eventSets.push(i[n][e]);
          return t;
        })();
        return (i = {}), n;
      });
  }
  function vr(s, f, d, logger, l, h, v) {
    function m(n, e, t, r, i, o) {
      var a,
        u = !1;
      n = n || "";
      var c = d.createXMLHTTPObject(!1, n);
      if (!c)
        return (
          logger.error("Failed creating an XMLHttpRequest object"),
          (u = !0),
          void o()
        );
      v.reportAddUriParamAPI &&
        ((t.extraInfo = t.extraInfo || {}),
        (t.extraInfo.api = c.report_api ? c.report_api : "xhr")),
        (a = f.apply(t.metadata.reportURI, t.metadata, t.sn, t.extraInfo)),
        r === L && (r = v.reportMaxRetries),
        (c.onreadystatechange = function() {
          4 === c.readyState
            ? 200 === c.status
              ? (function() {
                  l(e, i, !0);
                  var n = c.getResponseHeader("Content-Type");
                  n && -1 !== n.indexOf("application/json") && h(c.response),
                    (u = !0),
                    o();
                })()
              : v.reportPostRetry && r
              ? (r--,
                l(e, i, !1, c.status),
                c.status,
                c.statusText,
                m(n, e, t, r, i, o))
              : (c.abort(), (u = !0), o())
            : 0 === c.readyState &&
              (v.reportPostRetry && r
                ? m(n, e, t, --r, i, o)
                : (c.abort(), (u = !0), o()));
        });
      try {
        c.open("POST", a, !0),
          (c.onprogress = function() {}),
          (c.ontimeout = function() {}),
          (c.onerror = function() {}),
          (c.withCredentials = !0),
          s.visitXhr(c),
          setTimeout(function() {
            -1 !== v.reportAbortAfter &&
              setTimeout(function() {
                4 !== c.readyState && (c.abort(), u || o());
              }, v.reportAbortAfter);
            try {
              c.send(n);
            } catch (n) {
              logger.error(
                "Failed sending (in) POST request (" +
                  e +
                  ") to url " +
                  a +
                  ": " +
                  n.message,
                n
              );
            }
          }, 0);
      } catch (n) {
        logger.error(
          "Failed sending POST request (" +
            e +
            ") to url " +
            a +
            ": " +
            n.message,
          n
        ),
          (u = !0),
          o();
      }
    }
    (this.name = "POST"),
      (this.config = { maxReportSize: v.maxPostReportSize }),
      (this.dispatch = function(n, e, t, r, i) {
        m(n, t, { metadata: e, sn: t, extraInfo: r }, L, e.pageId, i);
      });
  }
  function mr(t) {
    var r;
    (this.send = function(n) {
      try {
        var e = n.eventSets.map(function(n) {
          return n.toJSON ? n.toJSON() : n;
        });
        (n.eventSets = e), r.postMessage(n);
      } catch (n) {
        logger.error("error: could not send via port. message:", n.message);
      }
    }),
      (this.initPorts = function(n) {
        var e = new t.MessageChannel();
        return ((r = e.port1).onmessage = n), e.port2;
      });
  }
  function gr(e) {
    (this.encode = function(n) {
      return n.constructor === Array
        ? e.encode(B.arrayToJsonSafe(n))
        : e.encode(JSON.stringify(n));
    }),
      (this.decode = function(n) {
        return JSON.parse(e.decode(n));
      });
  }
  function pr(n, d) {
    var e = (n = n || {}).domMaskingMode === _.censorMode.WhiteList,
      t = n.valueMaskingMode === _.censorMode.WhiteList;
    function r(n, e, t, r, i, o) {
      var a,
        u,
        c = [],
        s = [];
      if (t) for (a = 0; a < t.length; a++) s.push(t[a]);
      if (n)
        for (a = 0; a < n.length; a++)
          1 === (c = (u = CSS.escape(n[a])).split("\\*")).length
            ? s.push("#" + u)
            : 2 === c.length
            ? s.push(pr.prepareWildCardSelector(c, "id"))
            : d.printErrorMsg("more than one wildcard in id list");
      if (e)
        for (a = 0; a < e.length; a++)
          1 === (c = (u = CSS.escape(e[a])).split("\\*")).length
            ? s.push("." + u)
            : 2 === c.length
            ? s.push(pr.prepareWildCardSelector(c, "class"))
            : d.printErrorMsg("more than one wildcard in class list");
      if (0 === s.length) return o && i ? (s.push("[" + i + "]"), s) : null;
      if (r)
        return s
          .map(function(n) {
            var e = n.split("][");
            return 2 === e.length
              ? ":not(" + e[0] + "]):not([" + e[1] + ")"
              : ":not(" + n + ")";
          })
          .join("");
      var f = i ? yr(s, i, o) : s.join(",");
      return d.validateSelector(f) ? f : null;
    }
    (this._domMaskingMode = n.domMaskingMode),
      (this._maskedAttributes = B.immutableSet.apply(
        null,
        n.domMaskedAttributes
      )),
      (this._maskedAttributesTags = B.immutableSet.apply(
        null,
        (n.domMaskAttributesTags || []).map(function(n) {
          return n.toUpperCase();
        })
      )),
      (this._ignoreMaskByAttribute = n.domMaskIgnoreAttribute),
      (this._selectorsByMaskingType = {}),
      (this._selectorsByMaskingType[Gn.TEXT] = {
        selector: r(
          n.domMaskIds,
          n.domMaskClasses,
          n.domMaskSimpleSelector,
          !1,
          n.domMaskIgnoreAttribute,
          e
        ),
        doInvert: this._domMaskingMode === _.censorMode.WhiteList,
      }),
      (this._selectorsByMaskingType[Gn.OMIT] = {
        selector: r(n.domOmitIds, n.domOmitClasses),
        doInvert: !1,
      }),
      (this._selectorsByMaskingType[Gn.VALUE_ATTRIBUTE] = {
        selector:
          "input" +
          r(
            n.valueMaskIds,
            ["cls_mask"].concat(n.valueMaskClasses || []),
            !1,
            t,
            n.valueMaskIgnoreAttribute,
            e
          ),
        doInvert: !1,
      }),
      (this._selectorsByMaskingType[Gn.ATTRIBUTE] = {
        selector: (function(n, e, t) {
          if (0 === n.length || 0 === e.length) return null;
          var r,
            i,
            o = [];
          for (r = 0; r < e.length; r++)
            for (i = 0; i < n.length; i++) o.push(e[r] + "[" + n[i] + "]");
          return t ? yr(o, t, !1) : o.join(",");
        })(
          n.domMaskedAttributes || [],
          n.domMaskAttributesTags || [],
          n.domMaskIgnoreAttribute
        ),
        doInvert: !1,
      }),
      (this._unmaskableTags = B.immutableSet("TITLE", "SCRIPT"));
  }
  function yr(n, e, t) {
    var r =
      1 === n.length
        ? t
          ? (n.push("[" + e + "]"), n.join(","))
          : ((n[0] = n[0] + ":not([" + e + "])"), n)
        : t
        ? n.push("[" + e + "]").join(",")
        : n.join(":not([" + e + "]),");
    return r;
  }
  function wr(n) {
    this._cookieMaskSet =
      n && n.cookieMask ? B.immutableSet.apply(null, n.cookieMask) : null;
  }
  function br(n, e, t, o, r) {
    (r = r || {}),
      (this._encryptionSelector = (function(n, e) {
        var t,
          r = [];
        if (n) for (t = 0; t < n.length; t++) r.push("#" + n[t]);
        if (e) for (t = 0; t < e.length; t++) r.push("." + e[t]);
        if (0 === r.length) return null;
        var i = r.join(",");
        return o.validateSelector(i) ? i : null;
      })(r.domEncryptIds, r.domEncryptClasses)),
      (this._unEncryptableTags = B.immutableSet("TITLE", "SCRIPT")),
      (this._encryptionUtils = e),
      (this._maskingUtils = t),
      (this._events = n),
      (this._shouldFallback = !1);
  }
  function Er(i) {
    var o,
      a = i.length;
    (this.onStart = function(n, e) {
      for (o = 0; o < a; o++) i[o].onStart(n, e);
    }),
      (this.onEnterElement = function(n, e) {
        var t, r;
        for (o = 0; o < a; o++) (r = i[o].onEnterElement(n, e)), (t = t || r);
        return t;
      }),
      (this.onLeaveElement = function(n, e) {
        for (o = 0; o < a; o++) i[o].onLeaveElement(n, e);
      }),
      (this.onEnd = function() {
        for (o = 0; o < a; o++) i[o].onEnd();
      });
  }
  function Cr(n, e) {
    (this._node = n), (this._predicate = e), (this._childIndex = -1);
  }
  function Sr(t) {
    t = B.optionsWithDefaults(t, {
      denyTagNames: [],
      acceptIfTextContentMatches: {},
      denyIdsByTagName: {},
      denyComments: !0,
      denyHeadTagNames: [],
      denyIds: [],
      denyClasses: [],
      denyObjectElementsByType: [],
    });
    var r,
      i,
      o,
      a,
      u,
      c,
      s,
      n = (function() {
        var n,
          e = {};
        for (n in t.denyIdsByTagName)
          e[n] = B.immutableSet.apply(null, t.denyIdsByTagName[n]);
        return e;
      })(),
      e = (function() {
        var n,
          e = {};
        for (n in t.acceptIfTextContentMatches)
          e[n] = new RegExp(t.acceptIfTextContentMatches[n]);
        return e;
      })(),
      f = B.immutableSet.apply(null, t.denyTagNames),
      d = B.immutableSet.apply(null, t.denyHeadTagNames),
      l = B.immutableSet.apply(null, t.denyIds),
      h = B.immutableSet.apply(null, t.denyObjectElementsByType);
    return (
      (r = f),
      (i = d),
      (o = n),
      (a = e),
      (u = l),
      (c = t.denyClasses),
      (s = h),
      function(n) {
        if (n.parentNode && "HEAD" === n.parentNode.tagName && i[n.tagName])
          return !1;
        if (
          u[n.id] ||
          ("OBJECT" === n.tagName && s[n.getAttribute("type")]) ||
          B.hasOneOfClassNames(n, c)
        )
          return !1;
        if (r[n.tagName]) {
          var e = a[n.tagName];
          if (!e || !e.exec(n.textContent)) return !1;
        }
        return !(
          (n.nodeType === Node.COMMENT_NODE && t.denyComments) ||
          (o[n.tagName] && "undefined" !== n.id && o[n.tagName][n.id])
        );
      }
    );
  }
  function Tr(l, h, e, v, t, m, g) {
    var p = !!l.ShadowRoot;
    this.clone = function(n, a, u) {
      var c = {},
        s = 0,
        f = h.clonerDoc.createElement("gb-root"),
        d = e.createFuse();
      return (
        t.visit(n, function(n, e) {
          if (d.blown) return !0;
          var t,
            r = !0,
            i = v.idOf(n);
          p && n instanceof l.ShadowRoot
            ? (t = h.clonerDoc.createElement("gb-shadow"))
            : (t = (a && a(n, e)) || (m && m(n, e)))
            ? (r = !1)
            : (t = h.cloneNode(n)),
            u && u(t, n),
            g && g(t, n),
            (n.shadowRoot || (n.childNodes && n.childNodes.length)) &&
              (c[i] = t);
          var o = n.parentNode || n.host;
          return (
            ((o && c[v.idOf(o)]) || f).appendChild(t),
            n.nodeType === Node.ELEMENT_NODE &&
              s++ % 100 == 0 &&
              d.onElementsCloned(s),
            r && !d.blown
          );
        }),
        f.childNodes.length,
        f.lastChild
      );
    };
  }
  function kr(c, s, f) {
    (f = B.optionsWithDefaults(f, { crossShadow: !1 })),
      (this.visit = function(n, e, t) {
        var r,
          i = t ? "children" : "childNodes",
          o = n,
          a = [o],
          u = {};
        for (s.onStart(n, u); a.length; )
          if ((o = a.pop()).isParentMarker) s.onLeaveElement(o.parent, u);
          else if (c(o) && !1 !== e(o, u)) {
            if (o[i] && o[i].length)
              for (
                s.onEnterElement(o, u) &&
                  a.push({ parent: o, isParentMarker: !0 }),
                  r = o[i].length - 1;
                0 <= r;
                r--
              )
                a.push(o[i][r]);
            f.crossShadow && o.shadowRoot && a.push(o.shadowRoot);
          }
        s.onEnd();
      });
  }
  function xr(r, n, i) {
    i = B.optionsWithDefaults(i, { expireAfter: 100, byCtor: [] });
    var o = {};
    n.on("domTrackingStarted", function() {
      setTimeout(function() {
        o = {};
      }, i.expireAfter);
    }),
      (this.clonerHook = function(n, e) {
        for (var t = 0; t < i.byCtor.length; t++)
          if (e instanceof r[i.byCtor[t]]) {
            o[i.byCtor[t]] || (o[i.byCtor[t]] = []), o[i.byCtor[t]].push(e);
            break;
          }
      }),
      (this.consumeByCtor = function(n) {
        var e = o[n];
        return delete o[n], e || [];
      });
  }
  function Ir(n, e) {
    n.rules &&
      0 < n.rules.length &&
      (B.ensureProperty(e, "cssRuleChanges").rules = n.rules);
  }
  function Mr(n, e, t, r, i) {
    if (void 0 !== r.characterDataChild) {
      var o = (function(n, e) {
        for (
          var t,
            r = -1,
            i = { nodeIndex: -1, hasElements: !1, mergedTextContent: "" };
          (t = n.next());

        )
          r++,
            t.nodeType !== Node.TEXT_NODE
              ? (i.hasElements = !0)
              : (i.mergedTextContent += t.textContent),
            t === e && (i.nodeIndex = r);
        return i;
      })(n(r.element), r.characterDataChild);
      if (0 <= o.nodeIndex) {
        var a = o.hasElements
          ? r.characterDataChild.textContent
          : o.mergedTextContent;
        e && e.isDomMasked(r.element, Xn.SELF_OR_ANY_PARENT, Gn.TEXT)
          ? (a = V.censorValueOf(a))
          : t &&
            t.isDomEncrypted(r.element, Xn.SELF_OR_ANY_PARENT) &&
            (a = t.encrypt(a));
        var u = B.ensureProperty(i, "domChanges", r.id);
        return (
          (u.characterData = {
            value: a,
            child: o.hasElements ? o.nodeIndex : 0,
          }),
          u
        );
      }
    }
  }
  function Rr(d, n) {
    n = n || {};
    var l = B.immutableSet("checkbox", "radio"),
      h = B.immutableSet.apply(null, n.ignoredFormElement || []);
    var v = { INPUT: "inputs", SELECT: "selects", TEXTAREA: "textareas" };
    return function(n, e) {
      var t, r, i, o, a;
      if (
        ((t = n.element), !h[B.getElementId(t)]) &&
        n.properties && 0 < n.properties.length
      ) {
        var u,
          c = v[n.element.tagName];
        if (c) {
          for (
            var s = B.ensureProperty(e, c, n.id), f = 0;
            f < n.properties.length;
            f++
          )
            (o = n.element),
              (a = n.properties[f]),
              (s[
                (u =
                  "SELECT" === o.tagName
                    ? "selectedIndex"
                    : "INPUT" === o.tagName && l[o.getAttribute("type") || ""]
                    ? "checked"
                    : a)
              ] =
                ((r = n.element),
                (i = u),
                d && "value" === i ? d.censor(r) : r[i]));
          return s;
        }
      }
    };
  }
  function Ar(n, r) {
    var i, e;
    n.WebSocket &&
      ((i = n.WebSocket),
      (((e = function(n, e) {
        var t = e ? new i(n, e) : new i(n);
        try {
          t.addEventListener("message", r);
        } catch (n) {
          logger.error(
            "failed intercepting WebSocket constructor: " + n.message,
            n
          );
        }
        return t;
      }).prototype = i.prototype).constructor = i),
      (e.CONNECTING = 0),
      (e.OPEN = 1),
      (e.CLOSING = 2),
      (e.CLOSED = 3),
      (n.WebSocket = e));
  }
  function Nr(t, r, i, o, a, n) {
    var e,
      u = !1,
      c = null;
    function s(n) {
      for (var e = 0; e < n.length; e++) if (a(n[e])) return;
      return 1;
    }
    void 0 !== t.MutationObserver
      ? (c = t.MutationObserver)
      : void 0 !== t.WebKitMutationObserver && (c = t.WebKitMutationObserver);
    function f(n) {
      var e = n.target;
      if (a(e) && B.isAttachedToDOM(e)) {
        if (
          ("characterData" === n.type &&
            e instanceof CharacterData &&
            (e = e.parentNode || e),
          "childList" === n.type)
        ) {
          if (s(n.addedNodes) && s(n.removedNodes)) return;
          var t = (function(n) {
            for (var e = [], t = 0; t < n.length; t++)
              B.isAttachedToDOM(n[t]) && e.push(n[t]);
            return e.length === n.length ? L : e;
          })(n.addedNodes);
          if (t) {
            if (!t.length && !n.removedNodes.length) return;
            n = {
              type: n.type,
              target: n.target,
              actualTarget: n.actualTarget,
              addedNodes: t,
              removedNodes: n.removedNodes,
            };
          }
        }
        (n.actualTarget = e), i.throttle(n) || r.emit("domMutation", n);
      }
    }
    var d = {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0,
      attributeOldValue: !1,
      characterDataOldValue: n.domTamperingDetectionEnabled || !1,
    };
    (this.getName = function() {
      return "MutationObserver based";
    }),
      (this.supported = function() {
        return null !== c;
      }),
      (this.start = function() {
        if (!u) {
          if (!e) {
            if (!c)
              throw new Error(
                "cannot start DomObserver: native interface not supported by the browser."
              );
            e = new c(function(n) {
              n.forEach(f);
            });
          }
          e.observe(o, d), (u = !0);
        }
      }),
      (this.stop = function() {
        e.disconnect();
      }),
      (this.n = function() {
        if (c && t.navigator.userAgent.match(/Trident\/(\d+)/)) {
          var n = new c(function(n) {});
          n.observe(o, { childList: !0, subtree: !0 });
          var e = new DOMParser().parseFromString(
            "<?xml version='1.0' encoding='UTF-8'?><test><![CDATA[-5153879911146088898:4982669000430465522]]></test>",
            "text/xml"
          );
          return n.disconnect(), 1 < e.firstChild.childNodes.length;
        }
        return !1;
      });
  }
  function Dr(c, s, e, f) {
    var t = !1,
      r = function(n) {
        var e,
          t,
          r,
          i,
          o = [],
          a = [],
          u = n.type;
        if ("DOMNodeInserted" === n.type) {
          if (
            ((e = "childList"),
            (t = n.target.parentNode) && (o.push(n.target), !f(n.target)))
          )
            return;
        } else if ("DOMNodeRemoved" === n.type) {
          if (
            ((e = "childList"),
            (t = n.target.parentNode) && (a.push(n.target), !f(n.target)))
          )
            return;
        } else if ("DOMCharacterDataModified" === n.type)
          (e = "characterData"), (t = n.target.parentNode);
        else {
          if ("DOMAttrModified" !== n.type) return;
          (e = "attributes"), (t = n.target), (r = n.attrName);
        }
        f(t) &&
          t &&
          ((i = {
            origType: u,
            type: e,
            target: n.target,
            actualTarget: t,
            attributeName: r,
            addedNodes: o,
            removedNodes: a,
          }),
          s.throttle(i) || c.emit("domMutation", i));
      };
    (this.getName = function() {
      return "DOM events based";
    }),
      (this.supported = function() {
        return "undefined" != typeof MutationEvent;
      }),
      (this.start = function() {
        var n;
        t ||
          ((n = e),
          B.addEventHandler(n, "DOMNodeInserted", r, !1),
          B.addEventHandler(n, "DOMCharacterDataModified", r, !1),
          B.addEventHandler(n, "DOMNodeRemoved", r, !1),
          B.addEventHandler(n, "DOMAttrModified", r, !1),
          (t = !0));
      }),
      (this.stop = function() {
        e.removeEventListener("DOMNodeInserted", r, !1),
          e.removeEventListener("DOMCharacterDataModified", r, !1),
          e.removeEventListener("DOMNodeRemoved", r, !1),
          e.removeEventListener("DOMAttrModified", r, !1);
      }),
      (this.isActive = function() {
        return t;
      });
  }
  function _r(e, t, r) {
    var i;
    t.on("init:loaded", function() {
      i = r.maskTitle
        ? B.transformTextSegments(e.title, V.censorValueOf)
        : e.title;
    }),
      t.on("domMutation", function() {
        var n;
        (n =
          !i ||
          i === e.title ||
          (r.maskTitle &&
            B.transformTextSegments(e.title, V.censorValueOf) === i)),
          (i = r.maskTitle
            ? B.transformTextSegments(e.title, V.censorValueOf)
            : e.title),
          n ||
            setTimeout(function() {
              t.emit("titleChanged");
            }, 0);
      });
  }
  function Or(n, i, o, a, u, c, s) {
    var f = i.doctype
      ? (i.doctype,
        (n.XMLSerializer
          ? new XMLSerializer().serializeToString(i.doctype)
          : "<!DOCTYPE html>") + "\n")
      : "";
    this.take = function(n) {
      if (null === i.body) return L;
      B.currentTimestamp();
      try {
        var e = o.cloneNode(i.documentElement, s, c),
          t = f + e.outerHTML,
          r = a ? a.maskCookie(i.cookie) : i.cookie;
        return new Lr(t, u.mask(i.referrer), n, r, i.characterSet);
      } catch (n) {
        return (
          logger.error("could not obtain page snapshot. error: " + n),
          (this.lastError = n),
          L
        );
      } finally {
        B.currentTimestamp();
      }
    };
  }
  function Lr(n, e, t, r, i) {
    (this.html = n),
      (this.referrer = e),
      (this.seq = t),
      (this.charset = i),
      (this.cookie = r);
  }
  function Fr(c, s, f) {
    (f = f || {}), (c = c || []);
    var d = 0;
    (this.getSnapshot = function() {
      for (
        var n,
          e,
          t,
          r,
          i,
          o = {
            timestamp: d++,
            propertiesMode: "modifiedOnly",
            version: f.tokenizationVersion,
          },
          a = 0,
          u = 0;
        u < c.length;
        u++
      ) {
        for (n in ((i = 0), (e = (r = c[u]).tracker.track())))
          (t = e[n]),
            (function(n, e, t) {
              if (!e.removed) {
                for (var r, i = !1, o = 0; o < n.length; o++)
                  (r = n[o](e, t)) &&
                    !i &&
                    ((r.selector = s.getSelectorInfo(e.element, !1).selector),
                    (i = !0));
                return 1;
              }
            })(r.providers, t, o) && i++;
        a += i;
      }
      return 0 === a && (o = L), o;
    }),
      (this.start = function() {
        for (var n = 0; n < c.length; n++) c[n].tracker.start();
      }),
      (this.addBundle = function(n) {
        c.push(n);
      }),
      (this.removeBundle = function(n) {
        for (var e = c.length - 1; 0 <= e; e--)
          if (c[e].tracker.getTarget() === n) {
            c.splice(e, 1);
            break;
          }
      });
  }
  function Pr(n, e, t) {
    (this.element = n),
      (this.id = e),
      (this.addedNodes = {}),
      (this._nodeCache = t);
  }
  function Br(n, o) {
    var i = {},
      a = {},
      u = 0;
    function c(n) {
      var e = o.idOf(n),
        t = i[e];
      return t || ((t = new Pr(n, e, o)), (i[e] = t)), t;
    }
    function e(n) {
      var e = u++,
        t = c(n.actualTarget);
      if ("characterData" === n.type) t.characterDataChild = n.target;
      else if ("childList" === n.type) {
        if (((t.childListOrdinal = e), n.addedNodes.length))
          for (var r, i = 0; i < n.addedNodes.length; i++)
            (r = o.idOf(n.addedNodes[i])), (a[r] = !0), t.onNodeAdded(r);
      } else
        "attributes" === n.type &&
          (t.attributes || (t.attributes = {}),
          (t.attributes[n.attributeName] = e));
    }
    n.on("shadow:rootAttached", function(n) {
      var e = o.idOf(n),
        t = c(n.host);
      (t.childListOrdinal = u++), (a[e] = !0), t.onNodeAdded(e);
    }),
      (this.start = function() {
        n.on("domMutation", e);
      }),
      (this.track = function() {
        var n = i;
        return (
          (function() {
            var n,
              e,
              t,
              r = 0;
            for (n in i)
              if (i.hasOwnProperty(n) && !(t = i[n]).removed) {
                for (e = t.element; e.parentNode; ) {
                  if (a[o.idOf(e)]) {
                    r++, (t.removed = !0);
                    break;
                  }
                  e = e.parentNode;
                }
                t.removed ||
                  e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
                  e.nodeType === Node.DOCUMENT_NODE ||
                  ((t.removed = !0), r++);
              }
          })(),
          (u = 0),
          (i = {}),
          (a = {}),
          n
        );
      }),
      (this.getTarget = function() {
        return target;
      });
  }
  function jr(v, m, g) {
    var p = !0,
      y = {};
    g = B.immutableSet.apply(null, g || []);
    (this.start = function() {}),
      (this.track = function() {
        for (
          var n,
            e,
            t,
            r,
            i,
            o,
            a,
            u,
            c,
            s,
            f = {},
            d = {},
            l = v.querySelectorAll("input,select,textarea"),
            h = 0;
          h < l.length;
          h++
        )
          ((c = l[h]).id && g[c.id]) ||
            "hidden" === c.getAttribute("type") ||
            ((n = m.idOf(l[h])),
            (e = l[h]),
            (t = n),
            (r = f),
            (a = void 0),
            (u = jr.propertyForElement(e)) &&
              ((i = (y[t] || {})[u]),
              (o = e[u]),
              (p ? o !== jr.defaultValue(e, u) : i !== o) &&
                (r[t] || ((r[t] = new Pr(e, t, m)), (r[t].properties = [])),
                r[t].properties.push(u)),
              ((a = {})[u] = o),
              (y[t] = a)),
            (d[n] = !0));
        for (s in y) d[s] || delete y[s];
        return (p = !1), f;
      }),
      (this.getTarget = function() {
        return v;
      });
  }
  function Ur(n, r) {
    var e,
      i,
      t,
      o,
      a = [];
    (e = n.CSSStyleSheet.prototype),
      (i = e.insertRule),
      (e.insertRule = function() {
        var n = i.apply(this, arguments);
        try {
          var e = arguments[0];
          this.gb_css_rules
            ? (this.gb_css_rules += e)
            : (this.gb_css_rules = e);
          var t = r.idOf(this.ownerNode);
          a.push({ selector: "" + t, type: "added", rule: e, index: n });
        } catch (n) {
          logger.error(
            "Exception occurred during CSS insertRule interception. Error: " +
              n.message,
            n
          );
        }
        return n;
      }),
      (t = n.CSSStyleSheet.prototype),
      (o = t.deleteRule),
      (t.deleteRule = function() {
        try {
          var n,
            e = arguments[0];
          this.cssRules[e] !== L &&
            ((n = r.idOf(this.ownerNode)),
            a.push({ selector: "" + n, type: "deleted", index: e }));
        } catch (n) {
          logger.error(
            "Exception occurred during CSS deleteRule interception. Error: " +
              n.message,
            n
          );
        }
        return o.apply(this, arguments);
      }),
      (this.start = function() {}),
      (this.track = function() {
        var n = {};
        return a.length && (n.cssRules = { rules: a }), (a = []), n;
      }),
      (this.getTarget = function() {
        return !1;
      });
  }
  function Hr(n, o, c) {
    var s = {},
      f = {},
      d = { throttledMutations: 0, throttledAddedNodes: 0 };
    function l(n) {
      var e = c.idOf(n);
      if (s[e]) {
        delete s[e];
        for (var t = [], r = n.childNodes || [], i = 0; i < r.length; i++)
          r[i]._gbPending && (delete r[i]._gbPending, t.push(r[i]));
        o.emit("domMutation", {
          origType: "childList",
          type: "childList",
          target: n,
          actualTarget: n,
          addedNodes: t,
          removedNodes: [],
        });
      }
    }
    this.throttle = function(n) {
      var e,
        t,
        r,
        i = c.idOf(n.actualTarget),
        o = B.isVisible(n.actualTarget);
      if (
        !(
          "childList" !== n.type ||
          ((e = n.actualTarget),
          (t = n.addedNodes),
          (r = n.removedNodes),
          e.ownerDocument.head.contains(e) || u(t || []) || u(r || [])) ||
          o
        )
      ) {
        for (var a = 0; a < n.addedNodes.length; a++)
          n.addedNodes[a]._gbPending = !0;
        return (
          (s[i] = !0),
          (d.throttledAddedNodes += n.addedNodes.length),
          d.throttledMutations++,
          (function(n) {
            for (; n; ) (f[c.idOf(n)] = !0), (n = n.parentNode);
          })(n.actualTarget),
          !0
        );
      }
      function u(n) {
        for (var e = 0; e < n.length; e++)
          if ("STYLE" === n[e].tagName) return 1;
      }
      return (
        f[i] &&
          o &&
          (function(n, e) {
            for (var t, r, i = [n]; i.length; )
              if ((e((n = i.shift())), (r = c.idOf(n)), n.children && f[r]))
                for (delete f[r], t = 0; t < n.children.length; t++)
                  i.push(n.children[t]);
          })(n.actualTarget, l),
        !1
      );
    };
  }
  function Vr(n) {
    if ("LINK" === n.tagName && "import" === n.getAttribute("rel")) {
      for (var e, t, r, i, o = n.import, a = [], u = "", c = {}; o; ) {
        if ((r = o.querySelectorAll("style")).length)
          for (e = 0; e < r.length; e++) u += r[e].textContent;
        for (
          i = o.querySelectorAll("link[rel='import']"), t = 0;
          t < i.length;
          t++
        )
          i[t].import &&
            !c[i[t].href] &&
            (a.push(i[t].import), (c[i[t].href] = !0));
        o = a.pop();
      }
      if (u) {
        var s = n.ownerDocument.createElement("style");
        return (
          (s.textContent = u), s.setAttribute("gb-imported-from", n.href), s
        );
      }
    }
  }
  function qr(n) {
    if ("STYLE" === n.tagName) {
      var e = n.ownerDocument.createElement("style");
      if (n.sheet) {
        for (var t = n.sheet.cssRules, r = "", i = 0; i < t.length; i++)
          "string" == typeof t[i].cssText && (r += t[i].cssText);
        e.textContent = r;
      }
      return e;
    }
  }
  function zr(n) {
    if ("STYLE" === n.tagName) {
      var e = n.ownerDocument.createElement("style");
      return (
        (e.textContent = (n.textContent || "") + (n.gb_css_rules || "")), e
      );
    }
  }
  function Wr(n, e) {
    var t, r;
    "SELECT" === n.tagName &&
      ((t = e.selectedIndex),
      (r = n.getElementsByTagName("option"))[t] &&
        r[t].setAttribute("selected", ""));
  }
  function Xr(e) {
    return {
      tokenForClonedNode: function(n) {
        return (
          (n.nodeType === Node.TEXT_NODE ? "text:" : "el:") +
          ((e = n), B.DOMElement2Str(e))
        );
        var e;
      },
      tokenForNode: function(n) {
        return n.nodeType === Node.TEXT_NODE
          ? "text-ref:" + B.hashcode(n.textContent)
          : "id:" + e.idOf(n);
      },
    };
  }
  function Gr(n, e, t, r, i) {
    var o =
        (i = i || {}).domThrottle ||
        (i.domThrottleIEOnly &&
          n.MSInputMethodContext &&
          n.document.documentMode)
          ? new Hr(0, e, Q)
          : {
              throttle: function() {
                return !1;
              },
            },
      a = new Nr(n, e, o, t, r, {
        domTamperingDetectionEnabled: i.domTamperingDetectionEnabled,
      });
    return (
      a.supported()
        ? !i.domIE11ForceMutationObserver && a.n() && (a = new Dr(e, t, r))
        : (a = i.semiDomEnabled ? L : new Dr(e, o, t, r)),
      a
    );
  }
  function Jr(t) {
    var r = [];
    return {
      name: "postMessage",
      sendMessageWithTransferable: function(n, e, t) {
        var r = e.value.transferable;
        return delete e.value.transferable, n.postMessage(e, t, [r]);
      },
      sendMessage: function(n, e, t) {
        return n.postMessage(e, t);
      },
      onMessage: function(e) {
        function n(n) {
          e(n) && n.stopImmediatePropagation();
        }
        return r.push(n), B.addEventHandler(t, "message", n);
      },
      close: function() {
        for (var n = 0; n < r.length; n++)
          t.removeEventListener("message", r[n]);
        r = [];
      },
    };
  }
  function Kr(r, n, i) {
    var t = [],
      o = r.location.origin || B.extractOrigin(r.location.href);
    return (
      (n.triggerMessage = function(n) {
        for (var e = 0; e < t.length; e++) t[e](n);
      }),
      {
        name: "direct",
        sendMessage: function(n, e) {
          var t;
          !(function(n) {
            try {
              return void n.location.href;
            } catch (n) {
              return 1;
            }
          })(n)
            ? (t = n[i]) && t.triggerMessage
              ? setTimeout(function() {
                  t.triggerMessage({ source: r, data: e, origin: o });
                }, 0)
              : iframeHelper.logError(
                  "failed sending message over direct channel: remote facade is invalid."
                )
            : iframeHelper.logError(
                "failed sending message over direct channel: cross origin."
              );
        },
        onMessage: function(n) {
          t.push(n);
        },
        close: function() {
          t = [];
        },
      }
    );
  }
  function Qr(r, e, i, o) {
    var a = {};
    function u(n) {
      return (
        !iframeHelper.isCrossOriginFrame(n, e.location.origin) &&
        (function(n) {
          try {
            return n.contentWindow.location.href, !0;
          } catch (n) {
            return !1;
          }
        })(n)
      );
    }
    function t(n) {
      n.contentWindow.addEventListener("unload", function() {
        i.emit("frame:unload", { sameOrigin: u(n), frame: n });
      });
    }
    function c(n) {
      var e = u(n.target);
      e && t(n.target),
        i.emit("frame:load", { sameOrigin: e, frame: n.target });
    }
    function s(n, e) {
      a[o.idOf(n)] = {
        visible: "none" !== r.getComputedStyle(n).display,
        sameOrigin: e,
      };
    }
    i.on("frame:domChange", function(n) {
      var e, t;
      "style" === n.attributeName &&
        ((e = "none" !== r.getComputedStyle(n.target).display),
        (t = o.idOf(n.target)),
        a[t] || s(n.target, u(n.target)),
        a[t].visible !== e &&
          i.emit("frame:visibilityChange", {
            visible: e,
            frame: n.target,
            sameOrigin: a[t].sameOrigin,
          }),
        (a[t].visible = e));
    }),
      (this.wireFrame = function(n) {
        var e = u(n);
        return (
          n._gbWired ||
            (n.addEventListener("load", c),
            s(n, e),
            e && t(n),
            (n._gbWired = !0),
            i.emit("frame:wired", { sameOrigin: e, frame: n })),
          e
        );
      });
  }
  function Yr(e, n, t, r, i) {
    i = B.optionsWithDefaults(i, {
      skipHidden: !0,
      forceDirectChannel: !1,
      skipWhenLocationContains: [],
      injectionMode: _.iframesAutoInjectMode.BlackList,
    });
    var o,
      a,
      u,
      c,
      s =
        ((o = t.getAttribute("id")),
        (a = B.toAbsoluteUrl(t.getAttribute("src"))),
        function(n) {
          var e = n.createElement("script");
          return (
            e.setAttribute("type", "text/javascript"),
            o && e.setAttribute("id", o),
            e.setAttribute("src", a),
            e.setAttribute("data-clsautoinjected", "true"),
            e
          );
        }),
      f =
        ((u = n),
        function() {
          var n = B.shallowExtend({}, u);
          return (
            (n.storageBackedReporting = !0),
            (n.iframesParentOrigin =
              e.location.origin || B.extractOrigin(e.location.href)),
            i.forceDirectChannel && (n.iframesDirectChannel = !0),
            (n.idleEventTimeInterval = -1),
            n
          );
        });
    function d(n) {
      return (
        (!i.skipHidden || !ae.hidden(n)) &&
        !(!n.contentDocument || !n.contentDocument.body.hasChildNodes()) &&
          "about:blank" !== n.contentWindow.location.href &&
            ((function(n, e) {
              for (
                var t = e === _.iframesAutoInjectMode.BlackList, r = 0;
                r < i.skipWhenLocationContains.length;
                r++
              )
                if (0 <= n.indexOf(i.skipWhenLocationContains[r])) return t;
              return !t;
            })(n.contentWindow.location.href, i.injectionMode)
              ? (n.contentWindow.location.href, !1)
              : "complete" === n.contentDocument.readyState)
      );
    }
    function l(e) {
      try {
        return (
          d(e) &&
          !(t = (n = e).contentWindow)[r] &&
            ((t._cls_config_forced = f()),
            t.document.head.appendChild(s(t.document)),
            (n._gbInjected = !0),
            c && setTimeout(c.bind(null, n, !0), 0),
            !0)
        );
      } catch (n) {
        return (
          iframeHelper.logError("failed injecting frame window. error:" + n),
          c && c(e, !1),
          !1
        );
      }
      var n, t;
    }
    (this.inject = l),
      (this.setInjectionCallback = function(n) {
        c = n;
      });
  }
  function $r(n, e) {
    var r,
      i = {};
    e.onMessage(function(e) {
      var n = e.data.message,
        t = i[n];
      if (t) {
        try {
          (r = e.ports && e.ports[0]), t(e.source, e.data.value, e.origin, r);
        } catch (n) {
          iframeHelper.logError(
            "message (origin:" + e.origin + ") handler raised an error.",
            n
          );
        }
        return !0;
      }
      return !1;
    }),
      (this.onMessage = function(n, e) {
        i[n] = e;
      });
  }
  function Zr(n, o, a) {
    a = a || "*";
    var u = B.immutableSet("javascript:", "data:");
    this.send = function(n, e, t, r) {
      var i;
      (r = (i = r) && !u[i] ? r : a),
        t.transferable
          ? o.sendMessageWithTransferable(n, { message: e, value: t }, r)
          : o.sendMessage(n, { message: e, value: t }, r);
    };
  }
  function ni(i, r, n, o, a) {
    a = B.optionsWithDefaults(a, { mscThrottle: 300, disabled: !1 });
    var u = !1,
      c = {};
    function s(n, e, t) {
      n && i !== n && r.send(n, "frame:notification", e, t);
    }
    function f(n, e) {
      if (e.propagate)
        for (
          var t = i.document.getElementsByTagName("iframe"), r = 0;
          r < t.length;
          r++
        )
          n !== t[r].contentWindow &&
            t[r]._gbHandshakeCompleted &&
            s(t[r].contentWindow, {
              type: e.type,
              args: e.args,
              propagate: !0,
            });
      e.bubble &&
        u &&
        s(i.parent, { type: e.type, args: e.args, bubble: !0, propagate: !0 });
    }
    n.onMessage("frame:notification", function(n, e, t, r) {
      e.type,
        !(function(n) {
          if ("onFramePort" !== n) {
            var e = B.currentTimestamp(),
              t = c[n];
            if (t && e - t < a.mscThrottle) return 1;
            c[n] = e;
          }
        })(e.type)
          ? (r && (r.postMessage({ type: "ack" }), e.args && (e.args.port = r)),
            o[e.type] && o[e.type](e.args),
            f(n, e))
          : (e.type, i.location.href);
    }),
      (this.onParentHandshake = function() {
        u = !0;
      }),
      (this.notify = function(n, e, t) {
        a.disabled ||
          s(n, { type: e.type, args: e.args, transferable: e.transferable }, t);
      }),
      (this.notifyAll = function(n) {
        a.disabled ||
          f(L, { type: n.type, args: n.args, propagate: !0, bubble: !0 });
      });
  }
  function ei(n, e, t, r, i, o, a) {
    (this.domTrackingStarted = function() {
      e().ensureStarted();
    }),
      (this.pageUpdate = function() {
        t();
      }),
      (this.forceFlush = function() {
        n.emit("forceFlush");
      }),
      (this.onPossibleBlackoutEnter = i.onPossibleBlackoutEnter),
      (this.onPossibleBlackoutLeave = i.onPossibleBlackoutLeave),
      (this.forceBlackoutEnter = r.forceBlackoutEnter),
      (this.forceBlackoutLeave = r.forceBlackoutLeave),
      (this.queryParamUpdate = o),
      (this.onFramePort = a);
  }
  function ti(t, o) {
    function a(n) {
      o.emit("frame:detected", n);
    }
    function r(n) {
      if ("childList" === n.type) {
        for (var e = [], t = 0; t < n.addedNodes.length; t++)
          "IFRAME" === n.addedNodes[t].tagName
            ? e.push(n.addedNodes[t])
            : "function" == typeof n.addedNodes[t].getElementsByTagName &&
              Array.prototype.push.apply(
                e,
                n.addedNodes[t].getElementsByTagName("iframe")
              );
        for (t = 0; t < e.length; t++) a(e[t]);
        e.length && e.length;
      } else
        "attributes" === n.type &&
          "IFRAME" === n.actualTarget.tagName &&
          ("IFRAME" === n.actualTarget.tagName ||
            ("function" == typeof n.actualTarget.getElementsByTagName &&
              0 < n.actualTarget.getElementsByTagName("iframe").length)) &&
          ((r = n.actualTarget),
          (i = n.attributeName),
          o.emit("frame:domChange", { target: r, attributeName: i }));
      var r, i;
    }
    this.start = function() {
      for (var n = t.getElementsByTagName("iframe"), e = 0; e < n.length; e++)
        a(n[e]);
      n.length, o.on("domMutation", r);
    };
  }
  function ri(u, c, s, f, n, d, l, r) {
    var i, h, o;
    (r = r || {
      containerIdAttribute: "gb_cid",
      mscTimeout: r.mscTimeout || 2e3,
    }),
      (this.perform = function(n, e, t) {
        (i = e),
          f.send(n, "child:hello", { pageId: c.id }),
          -1 !== r.mscTimeout && (o = setTimeout(t, r.mscTimeout));
      }),
      (this.setParentCallback = function(n) {
        h = n;
      }),
      n.onMessage("child:hello", function(n, e, t) {
        for (
          var r, i = u.getElementsByTagName("iframe"), o = 0;
          o < i.length;
          o++
        )
          if (n === i[o].contentWindow) {
            r = i[o];
            break;
          }
        if (!r) return e.pageId, void (h && h());
        var a = d(r);
        h && h(a, e.pageId),
          (r._gbHandshakeCompleted = !0),
          f.send(
            r.contentWindow,
            "parent:hello",
            {
              sessionId: l.sessionId,
              visitorId: l.visitorId,
              containerId: a,
              parentPageId: c.id,
              parentPageName: c.name,
              parentUnderBlackout: s.isUnderBlackout(),
            },
            t
          );
      }),
      n.onMessage("parent:hello", function(n, e, t) {
        o && clearTimeout(o),
          e.containerId,
          e.parentPageId,
          (!!e.parentUnderBlackout).toString(),
          i && i(e, t),
          (i = L);
      });
  }
  function ii(e, t, r) {
    r = B.optionsWithDefaults(r, { suspendReportingWhenLocationContains: [] });
    var n,
      i =
        ((n = 0),
        {
          increase: function() {
            return ++n;
          },
          decrease: function() {
            return --n;
          },
        });
    function o(n) {
      for (var e = 0; e < r.suspendReportingWhenLocationContains.length; e++)
        if (0 <= n.indexOf(r.suspendReportingWhenLocationContains[e])) return 1;
    }
    function a(n) {
      (!0 === n.visible && t.isUnderBlackout()) ||
        (n.sameOrigin &&
          o(n.frame.contentWindow.location.href) &&
          1 === i.increase() &&
          e.emit("frame:blackoutEnter", n.frame));
    }
    function u(n) {
      (!1 !== n.visible || t.isUnderBlackout()) &&
        n.sameOrigin &&
        o(n.frame.contentWindow.location.href) &&
        0 === i.decrease() &&
        e.emit("frame:blackoutLeave", n.frame);
    }
    e.on("frame:wired", a),
      e.on("frame:load", a),
      e.on("frame:unload", u),
      e.on("frame:visibilityChange", function(n) {
        (n.visible ? a : u)(n);
      });
  }
  function oi(n) {
    var e,
      t =
        ((e = 0),
        {
          increase: function() {
            return ++e;
          },
          decrease: function() {
            return --e;
          },
        });
    (this.onPossibleBlackoutEnter = function() {
      1 === t.increase() && n.emit("notifyAll:blackoutEnter");
    }),
      (this.onPossibleBlackoutLeave = function() {
        0 === t.decrease() && n.emit("notifyAll:blackoutLeave");
      });
  }
  function ai(e, t, n, r, i, o, a, u, c, s, f, d, l) {
    l = l || {};
    var h,
      v,
      m = {
        detected: 0,
        injected: 0,
        injectionFailed: 0,
        handshakesWithChildren: { success: 0, error: 0 },
        handshakeWithParent: { startedAt: -1, completedAt: -1, timeout: !1 },
      },
      g = e.top !== e;
    function p() {
      v && a.notifyAll({ type: "pageUpdate" });
    }
    function y(n, e) {
      ((h = n).origin = e),
        t.emit("parentWindowInfo", h),
        n.parentUnderBlackout && u.forceBlackoutEnter(),
        (m.handshakeWithParent.completedAt = B.currentTimestamp()),
        (m.handshakeWithParent.info = h),
        a.onParentHandshake(),
        d(n.parentPageId, n.containerId),
        h.containerId,
        h.parentPageId,
        h.sessionId;
    }
    function w() {
      t.emit("clsDebug", "handshake timeout"),
        (m.handshakeWithParent.timeout = !0),
        d();
    }
    o &&
      o.setInjectionCallback(function(n, e) {
        e ? m.injected++ : m.injectionFailed++;
      }),
      c.setParentCallback(function(n, e) {
        (m.handshakesWithChildren.success += n ? 1 : 0),
          (m.handshakesWithChildren.error += n ? 0 : 1),
          v && t.emit("pageUpdate");
      }),
      (this.initialize = function() {
        g || d();
      }),
      (this.stats = function() {
        return m;
      }),
      l.skipHidden &&
        t.on("frame:visibilityChange", function(n) {
          l.autoInject &&
            !n.frame._gbInjected &&
            n.visible &&
            o.inject(n.frame);
        }),
      t.on("saveEvent", function(n) {
        v &&
          "pageUpdate" !== n.type &&
          -1 !== _.snapshotApplicableEventType.indexOf(n.type) &&
          p();
      }),
      t.on("frame:detected", function(n) {
        f(n);
        var e = i.wireFrame(n);
        l.autoInject && o && e && o.inject(n), m.detected++;
      }),
      t.on("frame:domChange", function() {
        t.emit("pageUpdate"), p();
      }),
      t.on("init:loaded", function() {
        r.start(),
          g &&
            ((m.handshakeWithParent.startedAt = B.currentTimestamp()),
            c.perform(e.parent, y, w));
      }),
      t.on("domTrackingStarted", function() {
        (v = !0),
          h && a.notify(e.parent, { type: "domTrackingStarted" }, h.origin);
      }),
      t.on("frame:unload", function(n) {
        (n.frame._gbInjected = !1),
          setTimeout(function() {
            t.emit("sendStoragePendingReports");
          }, 1e3);
      }),
      t.on("frame:load", function(n) {
        var e = n.frame;
        (l.autoInject && n.sameOrigin && !o.inject(e)) || e.src;
      }),
      t.on("frame:blackoutEnter", function() {
        e === e.top
          ? n.onPossibleBlackoutEnter()
          : a.notify(e.top, { type: "onPossibleBlackoutEnter" });
      }),
      t.on("frame:blackoutLeave", function() {
        e === e.top
          ? n.onPossibleBlackoutLeave()
          : a.notify(e.top, { type: "onPossibleBlackoutLeave" });
      }),
      t.on("frame:port", function(n) {
        a.notify(e.top, {
          type: "onFramePort",
          args: n.args,
          transferable: n.transferable,
        });
      }),
      t.on("notifyAll:blackoutEnter", function() {
        t.emit("local:forceBlackoutEnter"),
          a.notifyAll({ type: "forceBlackoutEnter" });
      }),
      t.on("notifyAll:blackoutLeave", function() {
        t.emit("local:forceBlackoutLeave"),
          a.notifyAll({ type: "forceBlackoutLeave" });
      }),
      t.on("iFramesForceFlush", function() {
        a.notifyAll({ type: "forceFlush" });
      }),
      t.on("session:new", function(n) {
        a.notifyAll({ type: "queryParamUpdate", args: n });
      });
  }
  function ui(a, i, u, o, n) {
    var r = {},
      c = {},
      s = null,
      f = null,
      d = null,
      t = {},
      l = n.maxFocusTime || 3e4;
    function h(n) {
      for (; n; ) {
        if ("FORM" === n.tagName) return B.isVisible(n) ? n : null;
        n = n.parentNode || n.host;
      }
      return null;
    }
    return {
      handleSubmit: function(n) {
        var e = h(n.element),
          t = i.idOf(e);
        e && c[t] && delete c[t],
          (r[t] = r[t] ? ++r[t] : 1),
          1 < r[t] &&
            u({
              element: e,
              dataToEncode: { type: "formResubmitted", count: r[t] },
            });
      },
      handleKeyup: function(n) {
        ("INPUT" !== n.element.tagName && "TEXTAREA" !== n.element.tagName) ||
          (function(n) {
            n._gbMaxChars &&
              !t[i.idOf(n)] &&
              ((t[i.idOf(n)] = !0),
              u({ element: n, dataToEncode: { type: "inputCharsExceeded" } }));
            var e = parseInt(n.getAttribute("maxLength"));
            n._gbMaxChars = e <= n.value.length;
          })(n.element);
      },
      handleFocus: function(n) {
        var e,
          t = h(n.element);
        t && ((e = i.idOf(t)), c[e] || (c[e] = o.getSelectorInfo(t))),
          (function(n, e) {
            if ("radio" === n.type) {
              if (n.name === d) return;
              d = n.name;
            } else d = null;
            var t, r, i, o;
            s &&
              e === f &&
              (s &&
              n.getAttribute("tabindex") &&
              s.getAttribute("tabindex") &&
              n.getAttribute("tabindex") < s.getAttribute("tabindex")
                ? u({
                    element: n,
                    dataToEncode: { type: "formZigzag", reason: "tabindex" },
                  })
                : ((t = n.getBoundingClientRect()),
                  (r = s && s.getBoundingClientRect()),
                  (i = t.top - r.top == 0),
                  t.top - r.top < 0
                    ? u({
                        element: n,
                        dataToEncode: {
                          type: "formZigzag",
                          reason: "vertical",
                        },
                      })
                    : ((o =
                        "rtl" ===
                          a.getComputedStyle(n).getPropertyValue("direction") ||
                        "rtl" ===
                          a
                            .getComputedStyle(O.body)
                            .getPropertyValue("direction")),
                      i && !o && t.left - r.left < 0
                        ? u({
                            element: n,
                            dataToEncode: {
                              type: "formZigzag",
                              reason: "horizontal",
                            },
                          })
                        : i &&
                          o &&
                          0 < t.right - r.right &&
                          u({
                            element: n,
                            dataToEncode: {
                              type: "formZigzag",
                              reason: "horizontal-rtl",
                            },
                          })))),
              (f = e),
              (s = n);
          })(n.element, t);
        var r = n.extraInfo && Math.floor(n.extraInfo.focusTime || 0);
        l < r &&
          u({
            element: s,
            dataToEncode: { type: "longFocusTime", duration: r },
          });
      },
      handleUnload: function() {
        !(function() {
          for (var n in c)
            c.hasOwnProperty(n) &&
              u({
                elementSelector: c[n],
                dataToEncode: { type: "uncompletedForm" },
              });
        })();
      },
    };
  }
  function ci(t, r, n, i) {
    i = B.optionsWithDefaults(i, { horizontalScrollbar: !0, blankPage: !0 });
    var o = 0,
      a = !0;
    function u(n, e) {
      (e.struggleHorizScrollCount = e.struggleHorizScrollCount || 0),
        e.struggleHorizScrollCount < 3 &&
          o < 5 &&
          n.nodeType === Node.ELEMENT_NODE &&
          n.firstElementChild &&
          (function(n) {
            if (n.scrollWidth > n.clientWidth) {
              var e = t.getComputedStyle(n);
              return (
                "scroll" === e.overflow ||
                "scroll" === e.overflowX ||
                "auto" === e.overflow ||
                "auto" === e.overflowX
              );
            }
          })(n) &&
          B.isVisible(n) &&
          (e.struggleHorizScrollCount++,
          o++,
          r({ element: n, dataToEncode: { type: "horizontalScrollbar" } }));
    }
    return (
      n.on("pageSnapshot:report", function() {
        a && i.blankPage && r({ dataToEncode: { type: "blankPage" } });
      }),
      {
        handleNode: function(n, e) {
          var t, r;
          i.horizontalScrollbar && u(n, e),
            i.blankPage &&
              ((t = n),
              !a ||
                t.nodeType !== Node.TEXT_NODE ||
                ((r = t.textContent) &&
                  r.trim() &&
                  B.isVisible(t.parentNode) &&
                  (a = !1)));
        },
      }
    );
  }
  function si(n, e, t, r) {
    var i,
      o,
      a,
      u,
      c,
      s,
      f,
      d = [];
    function l() {
      clearTimeout(c);
    }
    r.domRecordEnabled &&
      r.interceptAjax &&
      r.struggleCaptureDeadClick &&
      ((o = e),
      (a = t),
      (u = { deadClickTimeout: r.struggleDeadClickInterval || 1e3 }),
      (s = u.deadClickTimeout),
      (f = { INPUT: !0, SELECT: !0, TEXTAREA: !0 }),
      o.on("domMutation", l),
      o.on("segmentChanged", l),
      o.on("event:change", l),
      o.on("ajax:send", l),
      o.on("pageError", l),
      o.on("event:unload", l),
      (i = {
        handleClick: function(n) {
          clearTimeout(c),
            f[n.element.tagName] ||
              (c = setTimeout(function() {
                a({ element: n.element, dataToEncode: { type: "deadClick" } });
              }, s));
        },
      }),
      d.push(i.handleClick.bind(i)));
    var h,
      v,
      m,
      g,
      p,
      y,
      w,
      b,
      E,
      C,
      S,
      T,
      k,
      x,
      I,
      M =
        ((h = n),
        (v = t),
        (m = {
          timeBetweenClicks: r.struggleRageClickInterval,
          minimumClicksToRage: r.struggleRageClickMinCount,
        }),
        (p = m.timeBetweenClicks || 3e3),
        (y = m.minimumClicksToRage || 5),
        (w = {}),
        (b = 1),
        {
          handleClick: function(e) {
            var n = h.idOf(e.element);
            w[n]
              ? (w[n].times.push(e.timestamp),
                w[n].times.length >= y &&
                  (w[n].times = w[n].times.filter(function(n) {
                    return e.timestamp - n < p;
                  })),
                w[n].times.length >= y
                  ? ((e.indexInRage = y + w[n].count),
                    (e.rageSequence = b),
                    w[n].isRage ||
                      v({
                        element: e.element,
                        dataToEncode: { type: "rageClick", rageSequence: b },
                      }),
                    (w[n].isRage = !0),
                    (w[n].count = w[n].count + 1))
                  : w[n].isRage &&
                    (((w = {})[n] = {}),
                    (w[n].times = []),
                    w[n].times.push(e.timestamp),
                    (w[n].count = 0),
                    ++b))
              : ((w[n] = {}),
                (w[n].times = []),
                w[n].times.push(e.timestamp),
                (w[n].count = 0)),
              g &&
                w[g] &&
                w[g].isRage &&
                !w[n].isRage &&
                ((w[g].isRage = !1), (w[g].count = 0), ++b),
              (g = n);
          },
        });
    return (
      d.push(M.handleClick.bind(M)),
      r.struggleCaptureErrorClick &&
        ((C = e),
        (S = t),
        (T = { errorClickTimeout: r.struggleErrorClickInterval || 1e3 }),
        (I = T.errorClickTimeout),
        C.on("pageError", function() {
          x = !0;
        }),
        (E = {
          handleClick: function(n) {
            clearTimeout(k),
              (k = setTimeout(function() {
                x &&
                  ((x = !1),
                  S({
                    element: n.element,
                    dataToEncode: { type: "errorClick" },
                  }));
              }, I));
          },
        }),
        d.push(E.handleClick.bind(E))),
      {
        handleClick: function(e) {
          d.forEach(function(n) {
            n(e);
          });
        },
      }
    );
  }
  function fi(t, r) {
    return {
      handlePageLoad: function() {
        !(function() {
          var n = t.performance.getEntriesByType
            ? t.performance.getEntriesByType("navigation")
            : [];
          if (0 < n.length)
            for (var e = 0; e < n.length; e++) {
              if ("reload" === n[e].type)
                return r({ element: O, dataToEncode: { type: "reload" } });
              if ("back_forward" === n[e].type)
                return r({ element: O, dataToEncode: { type: "backForward" } });
            }
          t.performance.navigation &&
            t.PerformanceNavigation &&
            (t.performance.navigation.type ===
              t.PerformanceNavigation.TYPE_RELOAD &&
              r({ element: O, dataToEncode: { type: "reload" } }),
            t.performance.navigation.type ===
              t.PerformanceNavigation.TYPE_BACK_FORWARD &&
              r({ element: O, dataToEncode: { type: "backForward" } }));
        })();
      },
    };
  }
  function di(n) {
    pe
      ? fe.emit("reportStruggle", n)
      : setTimeout(function() {
          fe.emit("reportStruggle", n);
        }, 0);
  }
  function li() {
    be.handlePageLoad();
  }
  function hi(n) {
    ye.handleSubmit(n);
  }
  function vi(n) {
    ye.handleKeyup(n);
  }
  function mi(n) {
    ye.handleFocus(n);
  }
  function gi() {
    (pe = !0), ye.handleUnload();
  }
  function pi(n) {
    we.handleClick(n);
  }
  function yi(n) {
    Ee.checkXhr(n);
  }
  function wi(o) {
    this.getSelectorInfo = function(n, e, t) {
      if (!n || "function" != typeof n.getRootNode)
        return { selector: o.getSelectorInfo(n, e, t).selector };
      for (var r = []; n; )
        r.unshift(o.getSelectorInfo(n, e, t).selector),
          (n = (n.getRootNode() || {}).host);
      var i = { selector: r.splice(r.length - 1)[0] };
      return r.length && (i.hostSelectorPath = r.join(",")), i;
    };
  }
  function bi(t, r, i) {
    var o = "_gbHasShadow",
      a = {
        initialShadowRootCount: 0,
        hookInvocationsCount: 0,
        totalShadowRootCount: 0,
        totalShadowRootRemoved: 0,
      };
    function u(n) {
      for (; n && !n[o]; )
        (n[o] = !0), (n = n.parentNode ? n.parentNode : n.host);
    }
    function e(n) {
      var e = t.Element.prototype[n];
      e &&
        (t.Element.prototype[n] = function() {
          var n = e.apply(this, arguments);
          try {
            B.isAttachedToDOM(this)
              ? (r.emit("shadow:rootAttached", n),
                r.emit("shadow:rootDetected", n))
              : u(this),
              a.hookInvocationsCount++,
              a.totalShadowRootCount++;
          } catch (n) {
            n.message;
          }
          return n;
        });
    }
    r.on("domMutation", function(n) {
      if ("childList" === n.type) {
        for (var e = 0; e < n.addedNodes.length; e++)
          n.addedNodes[e][o] &&
            i.visit(
              n.addedNodes[e],
              function(n) {
                n.shadowRoot && r.emit("shadow:rootDetected", n.shadowRoot);
              },
              kr.SHOW_ELEMENTS
            );
        for (e = 0; e < n.removedNodes.length; e++)
          n.removedNodes[e][o] &&
            i.visit(
              n.removedNodes[e],
              function(n) {
                n.shadowRoot &&
                  (r.emit("shadow:rootRemoved", n.shadowRoot),
                  a.totalShadowRootCount--,
                  a.totalShadowRootRemoved++);
              },
              kr.SHOW_ELEMENTS
            );
      }
    }),
      (this.startObservingShadowRoots = function(n) {
        !(function(n) {
          for (var e = 0; e < n.length; e++)
            u(n[e]),
              r.emit("shadow:rootDetected", n[e]),
              a.initialShadowRootCount++,
              a.totalShadowRootCount++;
        })(n || []),
          ["attachShadow", "createShadowRoot"].forEach(e),
          a.initialShadowRootCount;
      }),
      (this.stats = function() {
        return a;
      });
  }
  function Ei(e, t, r) {
    var i = { url: e };
    try {
      var o = new XMLHttpRequest();
      return o
        ? ((o.onreadystatechange = function() {
            var n;
            4 === o.readyState &&
              (200 === o.status
                ? ((n = o.getResponseHeader("Content-Type")),
                  (i.type = n),
                  (i.content = B.pako.gzip(o.response)),
                  t(i))
                : 0 === o.status
                ? r(i.url)
                : (logger.error(
                    "Failed getting resource data by Ajax for url : " +
                      e +
                      " status:" +
                      o.status +
                      "  " +
                      o.statusText
                  ),
                  (i.error = "status: " + o.statusText + " (" + o.status + ")"),
                  t(i)));
          }),
          (o.cls_own = !0),
          o.open("GET", e, !0),
          (o.responseType = "arraybuffer"),
          o.send(),
          !0)
        : !1;
    } catch (n) {
      return (
        logger.error(s + n.message, n),
        console.log(
          "Failed getting resource data by Ajax for url: " +
            e +
            ": " +
            n.message,
          n
        ),
        !1
      );
    }
  }
  function Ci(u, c, t, e, s, f, d, r) {
    var n, l;
    function h() {
      var n,
        e = c.get("res.pending");
      if ((c.remove("res.pending"), e))
        try {
          n = s.decode(e);
        } catch (n) {
          logger.error(
            "Failed parsing JSON for pending resources: " + n.message,
            n
          );
        }
      return n;
    }
    function i(n) {
      r.countRecorded++, e.emit("saveResourceEvent", n);
    }
    function o(n) {
      r.countCorsDenied++, e.emit("saveCorsDeniedEvent", n);
    }
    ((n = r || {}).countRecorded = 0),
      (n.countCorsDenied = 0),
      (n.recordingAll = !!c.get("res.all")),
      (r = n),
      (l = d.resourceRecordCssOnly
        ? B.immutableSet("link", "css")
        : B.immutableSet("link", "css", "font", "img", "input")),
      (this.fetchResources = function() {
        var n = h();
        if (n)
          for (var e = 0; e < n.length; e++)
            if (!t(n[e], i, o)) {
              logger.error(
                "Failed executing an XHR request for fetching a resource. Breaking the fetch loop."
              );
              break;
            }
      }),
      (this.electResources = function() {
        var n,
          e = d.electAmount,
          t = d.maxPendingResources;
        if (
          (c.get("res.all") &&
            ((n = !0), (e = Number.MAX_VALUE), (t = Number.MAX_VALUE)),
          (n = n || Math.random() < d.electProbability))
        ) {
          for (
            var r,
              i = (function(n) {
                for (var e = [], t = 0; t < n.length; t++) {
                  var r = n[t];
                  f(r.name) || (l[n[t].initiatorType] && e.push(r));
                }
                return e;
              })((i = u.performance.getEntriesByType("resource"))),
              o = h() || [],
              a = 0;
            a < e && 0 < i.length && !(o.length >= t);
            a++
          )
            (r = Math.floor(Math.random() * i.length)),
              o.push(i[r].name),
              i.splice(r, 1);
          c.set("res.pending", s.encode(o));
        }
      }),
      (this.recordAllResources = function() {
        c.set("res.all", "true");
      }),
      (this.stopRecordAllResources = function() {
        c.remove("res.all");
      });
  }
  function Si(f, t, r) {
    function i(n, e, t, r, i) {
      var o,
        a = [],
        u = f.performance.getEntriesByType(e),
        a =
          r && i
            ? u.filter(function(n) {
                return i[n[r]] !== L;
              })
            : u;
      if ("resource" === e)
        for (
          var c = (function() {
              for (
                var n = {},
                  e = f.document.getElementsByTagName("script"),
                  t = 0;
                t < e.length;
                t++
              )
                e[t].src && (n[e[t].src] = e[t].async ? 1 : 0);
              return n;
            })(),
            s = 0;
          s < a.length;
          s++
        )
          "script" === (o = a[s]).initiatorType &&
            (o.async = c[o.name] ? 1 : 0);
      for (n[e] = [], s = 0; s < a.length; s++)
        n[e].push(
          (function(n, e) {
            for (var t = {}, r = 0; r < e.length; r++)
              n[e[r]] !== L && (t[e[r]] = n[e[r]]);
            return t;
          })(a[s], t)
        );
    }
    this.reportMeasurements = function() {
      for (var n = {}, e = 0; e < r.length; e++)
        i(n, r[e].type, r[e].properties, r[e].filterBy, r[e].validFilterValues);
      t.emit("waterfall", n);
    };
  }
  function Ti(i, f, o, d, e, l) {
    l = o.optionsWithDefaults(l, {
      redComponentMin: 120,
      redComponentDelta: 80,
      minTextLen: 10,
      submitIds: [],
      ignoreNodesVisibility: !1,
      allowFormLevel: !0,
      considerBG: !0,
      additionalTagNames: [],
    });
    var t = o.immutableSet.apply(null, l.submitIds),
      r = o.immutableSet.apply(null, l.additionalTagNames),
      h = o.immutableSet("INPUT", "SELECT", "TEXTAREA"),
      v = 'input:not([type="hidden"]),select,textarea',
      m = 2,
      g = !1,
      p = {},
      y = {};
    function w(n) {
      for (; n; ) {
        if ("FORM" === n.tagName || r[n.tagName])
          return o.isVisible(n) ? n : null;
        n = n.parentNode || n.host;
      }
      return null;
    }
    function b(n, r) {
      e.visit(
        n,
        function(n) {
          if (
            n.nodeType === Node.TEXT_NODE &&
            ((t = n),
            !p[d.idOf(t)] &&
              (function(n) {
                return n.textContent.trim().length > l.minTextLen;
              })(t) &&
              (function(n) {
                function e(n) {
                  var e = n.match(/\d+/g);
                  return (
                    e &&
                    parseInt(e[0]) > l.redComponentMin &&
                    e[0] >
                      Math.max(parseInt(e[1]), parseInt(e[2])) +
                        l.redComponentDelta
                  );
                }
                var t = i.getComputedStyle(n.parentNode);
                return e(t.color) || (l.considerBG && e(t.backgroundColor));
              })(t))
          )
            r.push(n);
          else if (
            n.nodeType === Node.ELEMENT_NODE &&
            !l.ignoreNodesVisibility &&
            ((e = n),
            !o.isVisible(e) || "hidden" === i.getComputedStyle(e).visibility)
          )
            return !1;
          var e, t;
        },
        kr.SHOW_ALL
      );
    }
    f.on("domMutation", function(n) {
      if (g) {
        var e = w(n.actualTarget);
        if (e) {
          for (
            var t,
              r,
              i,
              o,
              a,
              u =
                "childList" === (r = n).type
                  ? r.addedNodes
                  : "attributes" === r.type
                  ? [r.actualTarget]
                  : [],
              c = [],
              s = 0;
            s < u.length;
            s++
          )
            b(u[s], c);
          for (s = 0; s < c.length; s++)
            (t = (function(n, e) {
              for (var t = n.parentNode, r = t.previousElementSibling; r; ) {
                if (h[r.tagName]) return r;
                r = r.previousElementSibling;
              }
              for (var i, o = m, a = t.parentElement; a && o--; ) {
                if (1 === (i = a.querySelectorAll(v)).length) return i[0];
                if (1 < i.length) break;
                if (a === e) break;
                a = a.parentNode;
              }
              return e;
            })(c[s], e)),
              (!l.allowFormLevel && t === e) ||
                (h[t.tagName] &&
                  ((i = t),
                  (a = void 0),
                  (o = d.idOf(i)),
                  (a = void 0 === y[o] || y[o] !== i.value),
                  (y[o] = i.value),
                  !a)) ||
                ((p[d.idOf(c[s])] = !0),
                (function(n, e) {
                  setTimeout(function() {
                    f.emit("formValidationError", { element: n, message: e });
                  }, 0);
                })(t, c[s].textContent.trim()));
        }
      }
    }),
      (this.intercept = function(n) {
        (g = t[n.id] || !!w(n)) && (p = {});
      });
  }
  function ki(c) {
    var s = 1;
    (this.showErrorsLRU = new kt(20)),
      (this.intercept = function() {
        var u = jQuery.validator.prototype.showErrors;
        jQuery.validator.prototype.showErrors = function(n) {
          try {
            if (this.errorList && 0 < this.errorList.length)
              for (var e = 0; e < this.errorList.length; e++) {
                var t = this.errorList[e].element,
                  r = this.errorList[e].message,
                  i = "SAME - NOT REPORTING";
                t.gbLocalId || ((t.gbLocalId = s), s++);
                var o,
                  a = this.showErrorsLRU.set(t.gbLocalId, r);
                null === a || E.isUndefined(a)
                  ? (i = "NEW")
                  : a !== r
                  ? (i = "UPDATE")
                  : a !== r ||
                    ((o = this.errorsFor(t)) &&
                      0 < o.length &&
                      !E.isUndefined(o[0].innerHTML) &&
                      ((o[0].innerHTML === r && jQuery(o[0]).is(":visible")) ||
                        (i = "SHOW"))),
                  ("NEW" !== i && "UPDATE" !== i && "SHOW" !== i) ||
                    c.emit("formValidationError", {
                      element: t,
                      message: 0 < r.length ? r : "NONE",
                    });
              }
          } catch (n) {
            logger.error(
              "Failed intercepting showErrors for validation error report. " +
                n.message,
              n
            );
          }
          u.call(this, n);
        };
      });
  }
  function xi() {
    return (
      !(
        "value" !== this.accessor ||
        !Ie.isDomMasked(this.elem, Xn.SELF, Gn.VALUE_ATTRIBUTE)
      ) ||
      !!Ie.isDomMasked(this.elem, Xn.SELF_OR_ANY_PARENT, Gn.OMIT) ||
        !(
          !Ne[this.accessor] ||
          !De[this.elem.tagName.toLowerCase()] ||
          (this.elem.hasAttribute && this.elem.hasAttribute(_e))
        )
    );
  }
  function Ii() {
    return (
      !(!Re || "value" !== this.accessor || !Re.isCensored(this.elem)) ||
      !(
        ("innerText" !== this.accessor && "textContent" !== this.accessor) ||
        !(
          Ie.isDomMasked(this.elem, Xn.SELF_OR_ANY_CHILD, Gn.TEXT) ||
          Ie.isDomMasked(this.elem, Xn.SELF_OR_ANY_PARENT, Gn.TEXT) ||
          Me.isDomEncrypted(this.elem, Xn.SELF_OR_ANY_CHILD) ||
          Me.isDomEncrypted(this.elem, Xn.SELF_OR_ANY_PARENT)
        )
      ) ||
        !(
          "innerHTML" !== this.accessor ||
          !(
            Ie.isDomMasked(
              this.elem,
              Xn.SELF_OR_ANY_CHILD,
              Gn.TEXT,
              Gn.ATTRIBUTE
            ) ||
            Ie.isDomMasked(
              this.elem,
              Xn.SELF_OR_ANY_PARENT,
              Gn.TEXT,
              Gn.ATTRIBUTE
            ) ||
            Me.isDomEncrypted(this.elem, Xn.SELF_OR_ANY_CHILD) ||
            Me.isDomEncrypted(this.elem, Xn.SELF_OR_ANY_PARENT)
          )
        ) ||
          !(
            "outerHTML" !== this.accessor ||
            !(
              Ie.isDomMasked(
                this.elem,
                Xn.SELF_OR_ANY_CHILD,
                Gn.TEXT,
                Gn.ATTRIBUTE
              ) ||
              Ie.isDomMasked(
                this.elem,
                Xn.SELF_OR_ANY_PARENT,
                Gn.TEXT,
                Gn.ATTRIBUTE
              ) ||
              Me.isDomEncrypted(this.elem, Xn.SELF_OR_ANY_CHILD) ||
              Me.isDomEncrypted(this.elem, Xn.SELF_OR_ANY_PARENT)
            )
          ) ||
            !!Ie.isDomMasked(this.elem, Xn.SELF_OR_ANY_PARENT, Gn.OMIT)
    );
  }
  function Mi() {
    return !!Ie.isDomMasked(this.elem, Xn.SELF_OR_ANY_PARENT, Gn.OMIT);
  }
  function Ri(n) {
    return n.replace(/^[\s>]*|[\s>]*$/gi, "");
  }
  function Ai(n, e, t, r, i) {
    if ("function" != typeof n.querySelector) return [];
    if (-1 !== e.eqIndex) {
      if (1 === r) {
        var o = n.querySelectorAll(e.selector);
        return o[e.eqIndex] ? [o[e.eqIndex]] : [];
      }
      for (
        var a = 0,
          u =
            n.nodeType === Node.DOCUMENT_NODE
              ? [n.documentElement]
              : n.children,
          c = 0;
        c < u.length;
        c++
      )
        if (Pe.call(u[c], e.selector) && a++ === e.eqIndex) return [u[c]];
      return [];
    }
    if (i && t) {
      var s = n.querySelector(e.selector);
      return s ? [s] : [];
    }
    return Array.prototype.slice.call(n.querySelectorAll(e.selector));
  }
  function Ni(n, e, t) {
    for (
      var r, i, o, a, u = (e = e.slice()).length, c = [], s = [n];
      0 < e.length;

    ) {
      for (r = e.shift(), o = [], i = 0; i < s.length; i++) {
        if (
          ((a = Ai(s[i], r, t, u, 0 === e.length)),
          t && 0 === r.length && 0 < a.length)
        )
          return [a[0]];
        o.push.apply(o, a);
      }
      c = s = o;
    }
    return c;
  }
  function Di(n, e) {
    return Ni(n, e, !1);
  }
  function _i(n, e, t, r) {
    (this._elementResolver = e),
      (this._accessors = t),
      (this._rule = n),
      (this._urlRegexp = r),
      (this._isHierarchical = -1 !== n.selector.indexOf(">"));
  }
  function Oi(t, n) {
    var r;
    t.on(
      "init:loaded",
      function() {
        (r = n[Oi.KEY_NAME]) && t.emit("analyzerId", r);
      },
      L,
      -1
    ),
      t.on("event:unload", function() {
        try {
          r && (n[Oi.KEY_NAME] = r);
        } catch (n) {
          logger.error("error: could not set aid to storage. " + n.message);
        }
      }),
      (this.handle = function(n, e) {
        n && ((r = n), t.emit("analyzerId", r));
      });
  }
  function Li(n) {
    for (var e = 0; e < qe.length; e++)
      je.hasOwnProperty(qe[e]) && (n[qe[e]] = je[qe[e]]);
    return n;
  }
  (!e &&
    (function(n, e) {
      if (void 0 === n[e]) return void 0 === n.NodeFilter;
      void 0 !== n.console &&
        "function" == typeof n.console.log &&
        console.log(
          "WARNING[EyeView-1301]: detector script has been loaded more than once. Please fix to have a single detector loading. (Extra script loading will be ignored)"
        );
      return !0;
    })(n, i)) ||
    ((r = self),
    (o = O),
    ((a = { beaconVersion: "2" }).detectorVersion = t),
    (a.mouseEvents =
      r && r.PointerEvent
        ? { down: "pointerdown", up: "pointerup" }
        : { down: "mousedown", up: "mouseup" }),
    (a.eventTypes = [
      a.mouseEvents.down,
      a.mouseEvents.up,
      "touchstart",
      "touchend",
      "scroll",
      "change",
      "blur",
      "focusout",
      "keydown",
      "keyup",
      "submit",
      "reset",
      "load",
      "unload",
      "ajaxComplete",
      "hashchange",
      "navigation",
      "popstate",
      "focus",
      "focusin",
      "mouseenter",
      "mousemove",
      "error",
      "beforeunload",
      "resize",
      "pagehide",
    ]),
    (a.snapshotApplicableEventType = [
      "pageUpdate",
      "change",
      "mousedown",
      "scroll",
      "touchstart",
      "blur",
      "submit",
      "drag",
      "formValidationError",
      "navigation",
      "unload",
      "beforeunload",
      "segmentChanged",
      "domTampered",
    ]),
    (a.reportBase64URLs = !1),
    (a.nobelEventTypes = ["pageSnapshot"]),
    (a.socialNobelEventTypes = ["resourceContent"]),
    (a.encryptionPrefix = "__ENC_"),
    (a.encodeSelectors = !0),
    (a.encodeEventTypes = !0),
    (a.useClassesInSelectors = !1),
    (a.encoding = {
      numberBase: 36,
      rootSelector: "-",
      delimiters: {
        versionPayload: ";",
        pages: "~~~",
        events: "~~",
        eventParts: "~",
        pageIdEvents: "_",
      },
      domSnapshotPrefix: "D",
      domSnapshotRefPrefix: "r",
      domSnapshotCompressedPrefix: "d",
      domSnapshotPlainPrefix: "P",
      valueEncodedPrefix: "E",
      valueNotEncodedPrefix: "N",
    }),
    (a.cookies = {
      session: "_cls_s",
      visitor: "_cls_v",
      sub_session: "_cls_subs",
      supportMode: "_cls_sm",
    }),
    (a.censorMode = { BlackList: "blacklist", WhiteList: "whitelist" }),
    (a.iframesAutoInjectMode = {
      BlackList: "blacklist",
      WhiteList: "whitelist",
    }),
    (a.Storage = { BoundKeyPrefix: "gb.", UnboundKeyPrefix: "gb_unbound." }),
    (a.detectorScript = o
      ? (function(n, e) {
          if (n)
            return (!n.hasAttribute(e) && o.querySelector("[" + e + "]")) || n;
          var t = o.querySelector("[" + e + "]");
          return (
            r &&
              !t &&
              r._cls_config &&
              r._cls_config.detectorTagId &&
              (t = o.getElementById(r._cls_config.detectorTagId)),
            (t = t || o.getElementById("_cls_detector"))
          );
        })(o.currentScript, "data-clsconfig")
      : L),
    (_ = a),
    void 0 !== (F = {}) && We(F),
    (_.setup = "dom"),
    void 0 !== F && Xe(F),
    (_.dictionary = {
      eventTypes: {
        change: 0,
        document: 2,
        mousedown: 3,
        touchstart: 4,
        touchend: 5,
        focusout: 6,
        blur: 7,
        unload: 9,
        submit: 10,
        reset: 11,
        mouseup: 12,
        drag: 13,
        scroll: 14,
        popstate: 15,
        keydown: 16,
        keyup: 17,
        keypress: 18,
        timing: 20,
        idle: 21,
        ajaxRequest: 22,
        formValidationError: 23,
        hashchange: 25,
        botDetection: 26,
        mouseenter: 27,
        navigation: 28,
        mousemove: 29,
        error: 30,
        thirdparty: 31,
        custom: 32,
        hover: 33,
        thirdpartymap: 34,
        performance: 35,
        resource: 36,
        clsdebug: 37,
        resize: 38,
        thirdPartyAttribute: 39,
        ajaxStats: 40,
        ajaxLimitReached: 41,
        pageSnapshot: 91,
        pageUpdate: 92,
        resourceContent: 93,
        corsDeniedResource: 94,
        blackout: 101,
        segmentChanged: 102,
        titleChanged: 103,
        devToolsVisibilityChanged: 104,
        domTampered: 105,
        webStruggle: 106,
        clientAttribute: 110,
        waterfall: 111,
        lastSegment: 112,
        abTesting: 120,
      },
      elements: {
        DIV: 0,
        SPAN: 1,
        INPUT: 2,
        FORM: 3,
        SELECT: 4,
        TEXTAREA: 5,
        TABLE: 6,
        TR: 7,
        TD: 8,
        IFRAME: 9,
        TBODY: 10,
        THEAD: 11,
        LABEL: 12,
      },
      encodingTypes: {
        cd_number: 0,
        cd_boolean: 1,
        cd_string: 2,
        cd_coordinate: 3,
        cd_navtiming: 4,
      },
      performanceTimingEvents: {
        navigationStart: 1,
        redirectStart: 2,
        fetchStart: 4,
        domainLookupStart: 5,
        connectStart: 7,
        secureConnectionStart: 8,
        requestStart: 10,
        responseStart: 13,
        domLoading: 15,
        domContentLoadedEventStart: 17,
        domComplete: 19,
        loadEventStart: 20,
        loadEventEnd: 21,
      },
      encode: function(n, e) {
        var t = e[n];
        return t !== L ? t : n;
      },
      encodeEventType: function(n) {
        return _.dictionary.encode(n, _.dictionary.eventTypes);
      },
      encodeNodeName: function(n) {
        return _.dictionary.encode(n, _.dictionary.elements);
      },
      encodeEncodingType: function(n) {
        return _.dictionary.encode(n, _.dictionary.encodingTypes);
      },
      encodePerformanceTimingMeasurement: function(n) {
        return _.dictionary.encode(n, _.dictionary.performanceTimingEvents);
      },
    }),
    (function(n) {
      if (n.CSS && n.CSS.escape) {
        return n.CSS.escape;
      }
      var e = function(n) {
        if (arguments.length === 0) {
          throw new TypeError("`CSS.escape` requires an argument.");
        }
        var e = String(n);
        var t = e.length;
        var r = -1;
        var i;
        var o = "";
        var a = e.charCodeAt(0);
        while (++r < t) {
          i = e.charCodeAt(r);
          if (i == 0) {
            o += "Ã¯Â¿Â½";
            continue;
          }
          if (
            (i >= 1 && i <= 31) ||
            i == 127 ||
            (r == 0 && i >= 48 && i <= 57) ||
            (r == 1 && i >= 48 && i <= 57 && a == 45)
          ) {
            o += "\\" + i.toString(16) + " ";
            continue;
          }
          if (r == 0 && t == 1 && i == 45) {
            o += "\\" + e.charAt(r);
            continue;
          }
          if (
            i >= 128 ||
            i == 45 ||
            i == 95 ||
            (i >= 48 && i <= 57) ||
            (i >= 65 && i <= 90) ||
            (i >= 97 && i <= 122)
          ) {
            o += e.charAt(r);
            continue;
          }
          o += "\\" + e.charAt(r);
        }
        return o;
      };
      if (!n.CSS) {
        n.CSS = {};
      }
      n.CSS.escape = e;
    })(self),
    (u = Object.prototype.toString),
    (E = {
      isFunction: function(n) {
        return "function" == typeof n;
      },
      isNumber: function(n) {
        return "number" == typeof n || "[object Number]" === u.call(n);
      },
      isString: function(n) {
        return "string" == typeof n || "[object String]" === u.call(n);
      },
      isUndefined: function(n) {
        return void 0 === n;
      },
      last: function(n) {
        return n && n[n.length - 1];
      },
      forOwn: function(n, e) {
        for (var t in n) n.hasOwnProperty(t) && e(n[t], t);
      },
      indexOf: (c = Ge("indexOf")),
      pluck: function(n, e) {
        return n
          ? n.map(function(n) {
              return n[e];
            })
          : [];
      },
      reduce: Ge("reduce"),
      contains:
        "function" == typeof Array.prototype.includes
          ? Ge("includes")
          : function(n, e, t) {
              return -1 < c(n, e, t);
            },
      forEach: Ge("forEach"),
    }),
    (f = E),
    (d = self),
    (l = (l = void 0 !== F ? F : {}) || {}),
    (logger = {
      isConsoleSupported: function() {
        return !f.isUndefined(d.console) && f.isFunction(d.console.log);
      },
      error: function() {
        this.log.apply(this, arguments);
      },
      log: function() {
        var n, e;
        !f.isUndefined(l.debugMode) &&
          l.debugMode &&
          ((n = Array.prototype.slice.call(arguments, 0)).unshift(
            B.currentTimestamp()
          ),
          Nn &&
            Nn.page &&
            Nn.page.frame &&
            n.push(" (in frame " + Nn.page.id + ")"),
          this.isConsoleSupported()
            ? console.log.apply(console, n)
            : f.isUndefined(d.console.log) ||
              ((e = n.join(" ")), console.log(e)));
      },
      trace: function() {
        l.traceMode && this.log.apply(this, arguments);
      },
    }),
    (s = "error was detected "),
    (P = new (function(n) {
      var o = {},
        a = [];
      function i(n, e) {
        return n[2] < e[2] ? -1 : n[2] > e[2] ? 1 : 0;
      }
      ((n = n || this).on = function(n, e, t, r) {
        r === L && (r = 0), (o[n] = o[n] || []).push([e, t, r]), o[n].sort(i);
      }),
        (n.off = function(n, e) {
          n || (o = {});
          for (var t = o[n] || a, r = (t.length = e ? t.length : 0); r--; )
            e == t[r][0] && t.splice(r, 1);
        }),
        (n.emit = function(n) {
          for (
            var e,
              t = o[n] || a,
              r = 0 < t.length ? t.slice(0, t.length) : t,
              i = 0;
            (e = r[i++]);

          )
            e[0].apply(e[1], a.slice.call(arguments, 1));
        });
    })()),
    (B = (function(i, o, a, e) {
      e = e || {};
      var t,
        u = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          unload: "img",
          abort: "img",
          readystatechange: "XMLHttpRequest",
        },
        c =
          "function" == typeof Object.assign
            ? Object.assign
            : function() {
                var n = arguments[0];
                if (null === n || n === L)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var e, t, r = Object(n), i = 1; i < arguments.length; i++)
                  if (null !== (e = arguments[i]) && e !== L)
                    for (t in e)
                      Object.prototype.hasOwnProperty.call(e, t) &&
                        (r[t] = e[t]);
                return r;
              },
        r = a && a.createElement("a"),
        s =
          o &&
          o.console &&
          o.console.time &&
          o.console.timeEnd &&
          o.console.timeStamp,
        f = i.isFunction(o.String.prototype.startsWith),
        d =
          o &&
          (o.Event.prototype.composedPath
            ? function(n) {
                return n.composedPath()[0];
              }
            : function(n) {
                return n.target;
              }),
        l = o.Node && o.Node.prototype.hasOwnProperty("isConnected");
      return {
        currentTimestamp:
          i.isFunction(Date.now) && i.isNumber(Date.now())
            ? Date.now
            : function() {
                return new Date().getTime();
              },
        isElement: function(n) {
          return "hasAttribute" in n;
        },
        isDOMElement: function(n) {
          return "object" == typeof HTMLElement
            ? n instanceof HTMLElement
            : n &&
                "object" == typeof n &&
                null !== n &&
                1 === n.nodeType &&
                "string" == typeof n.nodeName;
        },
        isEditableInput: function(n) {
          if (!n) return !1;
          if ("INPUT" !== n.tagName) return !0;
          var e = (n.getAttribute("type") || "").toLowerCase();
          return "button" !== e && "submit" !== e && "reset" !== e;
        },
        isOldIE: function() {
          return !a.addEventListener;
        },
        hasTouch: function() {
          return "ontouchstart" in o;
        },
        isMobile: function() {
          var n = navigator.userAgent;
          return /Android|webOS|iPhone|iPad|iPod|Windows Phone|IEMobile|Opera Mini|Mobile|mobile|Tablet|CriOS/i.test(
            n
          );
        },
        isChromeDesktop: function() {
          var n = navigator.userAgent,
            e = /Chrome/i.test(n);
          return !this.isMobile() && e;
        },
        isSafari: function(n) {
          var e = /Safari/i.test(n),
            t = /Chrome/i.test(n);
          return e && !t;
        },
        isIE: function(n) {
          return /Trident|MSIE/i.test(n);
        },
        isChromeOnIos: function(n) {
          return /CriOS/i.test(n);
        },
        getAttributeForElement: function(n, e) {
          return n && this.isElement(n)
            ? (n.hasAttribute(e.toLocaleLowerCase())
                ? (t = n.getAttribute(e.toLocaleLowerCase()))
                : n.hasAttribute(e.toLocaleUpperCase()) &&
                  (t = n.getAttribute(e.toLocaleUpperCase())),
              (t = t && this.trim(t)) || null)
            : null;
          var t;
        },
        getElementId: function(n) {
          return n && n.id
            ? i.isString(n.id) || "function" != typeof n.getAttribute
              ? n.id
              : n.getAttribute("id")
            : null;
        },
        isDuplicateElementId: function(n) {
          if (!e.duplicateIdCheck) return !1;
          try {
            return "querySelectorAll" in a
              ? 1 < a.querySelectorAll("[id='" + n + "']").length
              : !1;
          } catch (n) {
            return !1;
          }
        },
        getMouseEnterTarget: function() {
          return "onmouseenter" in a ? a : "onmouseenter" in o ? o : a.body;
        },
        hasTimingAPI: function() {
          return (
            !i.isUndefined(o.performance) &&
            !i.isUndefined(o.performance.timing)
          );
        },
        startsWith: function(n, e) {
          return (
            !(!i.isString(n) || !i.isString(e)) &&
            (f ? n.startsWith(e) : n.slice(0, e.length) === e)
          );
        },
        truncateStr: function(n, e, t) {
          var r = n;
          return (
            n &&
              n.length > e &&
              ((r = n.substr(0, e)), t && (r = r.concat("..."))),
            r
          );
        },
        getCoordinate: function(n) {
          var e = n.changedTouches || n.touches,
            t = e && 0 < e.length ? e[0] : n,
            r = this.extractElementFromEvent(n);
          return this.isHybrid() || "HTML" === r.nodeName.toUpperCase()
            ? new Pt(t.clientX, t.clientY)
            : i.isUndefined(t.pageX) || i.isUndefined(t.pageY)
            ? new Pt(
                n.clientX + a.body.scrollLeft + a.documentElement.scrollLeft,
                n.clientY + a.body.scrollTop + a.documentElement.scrollTop
              )
            : new Pt(t.pageX, t.pageY);
        },
        getScrollTopLeft: function() {
          try {
            var n = null !== o.top && o.top !== o.self ? o.top : o;
            return {
              top:
                void 0 !== n.pageYOffset
                  ? n.pageYOffset
                  : (
                      n.document.documentElement ||
                      n.document.body.parentNode ||
                      n.document.body
                    ).scrollTop,
              left:
                void 0 !== n.pageXOffset
                  ? n.pageXOffset
                  : (
                      n.document.documentElement ||
                      n.document.body.parentNode ||
                      n.document.body
                    ).scrollLeft,
            };
          } catch (n) {
            return (
              logger.error("Failed getting scroll values: " + n.message, n),
              { top: 0, left: 0 }
            );
          }
        },
        getElementXYCoordinates: function(n) {
          if (!n) return null;
          if (!("getBoundingClientRect" in n)) return null;
          var e = n.getBoundingClientRect(),
            t = this.getScrollTopLeft();
          return new Pt(Math.round(e.left + t.left), Math.round(e.top + t.top));
        },
        isSameCoordinates: function(n, e) {
          return n.x === e.x && n.y === e.y;
        },
        isCoordinatesDistLargerThan: function(n, e, t) {
          return Math.abs(n.x - e.x) > t || Math.abs(n.y - e.y) > t;
        },
        getCurrentScrollReach: function() {
          try {
            var n = null !== o.top && o.top !== o.self ? o.top : o;
            return (
              (void 0 !== n.pageYOffset
                ? n.pageYOffset
                : (
                    n.document.documentElement ||
                    n.document.body.parentNode ||
                    n.document.body
                  ).scrollTop) +
              (n.innerHeight ||
                n.document.documentElement.clientHeight ||
                n.document.body.clientHeight)
            );
          } catch (n) {
            return 0;
          }
        },
        getWindowSize: function() {
          return i.isNumber(o.innerWidth) && i.isNumber(o.innerHeight)
            ? this.validateSize(o.innerWidth, o.innerHeight)
            : !i.isUndefined(a.body) &&
              i.isNumber(a.body.offsetWidth) &&
              i.isNumber(a.body.offsetHeight)
            ? this.validateSize(a.body.offsetWidth, a.body.offsetHeight)
            : null;
        },
        getScreenSize: function() {
          return this.validateSize(screen.width, screen.height);
        },
        validateSize: function(n, e) {
          return i.isNumber(n) && i.isNumber(e)
            ? { width: n, height: e }
            : null;
        },
        indexOfNode: function(n, e, t) {
          for (var r = t || 0; r < n.length; r++) if (n[r] === e) return r;
          return -1;
        },
        getLocationUrlSplitByHash: function() {
          var n = o.location.href,
            e = n.indexOf("#");
          return -1 === e
            ? { url: n, withoutHash: n, hash: null }
            : {
                url: n,
                withoutHash: n.slice(0, e),
                hash: n.slice(e + 1, n.length),
              };
        },
        getHashFromUrl: function(n) {
          var e = n.indexOf("#");
          return -1 === e ? "" : n.slice(e + 1, n.length);
        },
        stripHash: function(n) {
          var e = n.indexOf("#");
          return -1 === e ? n : n.slice(0, e);
        },
        getReferrerUrlWithoutHash: function() {
          var n = o.document.referrer;
          if (!n || 0 === n.length) return null;
          var e = n.indexOf("#");
          return -1 !== e ? n.slice(0, e) : n;
        },
        encodeAsBase: function(n, e) {
          return n.toString(e);
        },
        uuid: function() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function(n) {
              var e = (16 * Math.random()) | 0;
              return ("x" === n ? e : (3 & e) | 8).toString(16);
            }
          );
        },
        addEventHandler: function(n, e, t, r) {
          n.addEventListener
            ? n.addEventListener(e, t, r)
            : n.attachEvent && n.attachEvent("on" + e, t);
        },
        removeEventHandler: function(n, e, t) {
          i.isUndefined(n.removeEventListener)
            ? i.isUndefined(n.detachEvent) || n.detachEvent("on" + e, t)
            : n.removeEventListener(e, t, !0);
        },
        extractElementFromEvent: function(n) {
          void 0 === n && (n = o.event);
          var e = (n.target.shadowRoot ? d(n) : n.target) || n.srcElement;
          return null == e ? null : 3 === e.nodeType ? e.parentNode : e;
        },
        isEventSupported: function(n) {
          var e = "on" + n;
          if (e in o || e in o.document) return !0;
          var t = a.createElement(u[e] || "div"),
            r = e in t;
          return (
            r || (t.setAttribute(e, "return;"), (r = i.isFunction(t[e]))),
            (t = null),
            r
          );
        },
        isConsoleSupported: function() {
          return !i.isUndefined(o.console) && i.isFunction(o.console.log);
        },
        getReason: function(n) {
          return i.isString(n) ? "(" + n + ")" : "(not specified)";
        },
        hashcode: function(n) {
          var e = 0;
          if (0 === n.length) return e;
          for (var t = 0; t < n.length; t++) {
            e = (e << 5) - e + n.charCodeAt(t);
            e &= e;
          }
          return e;
        },
        trim: function(n) {
          return "function" != typeof String.prototype.trim
            ? n.replace(/^\s+|\s+$/g, "")
            : n.trim();
        },
        time: function(n) {
          e.timingMode && s && o.console.time(n);
        },
        timeEnd: function(n) {
          e.timingMode && s && o.console.timeEnd(n);
        },
        timeStamp: function(n) {
          e.timingMode && s && o.console.timeStamp(n);
        },
        hasOneOfClassNames: function(n, e) {
          for (var t = " " + this.getClass(n) + " ", r = 0; r < e.length; r++)
            if (-1 < t.indexOf(" " + e[r] + " ")) return !0;
          return !1;
        },
        getClass: function(n) {
          return (n.getAttribute && n.getAttribute("class")) || "";
        },
        getClassList: function(n) {
          if (n.classList) return n.classList;
          var e = this.getClass(n);
          return e ? e.split(" ") : [];
        },
        hasClassName: function(n, e) {
          return -1 < (" " + this.getClass(n) + " ").indexOf(" " + e + " ");
        },
        getHybridType: function() {
          return "undefined" == typeof eyeViewHybridBridge
            ? null
            : eyeViewHybridBridge.getHybridType();
        },
        isHybrid: function() {
          return "undefined" != typeof eyeViewHybridBridge;
        },
        isHybridAndroid: function() {
          return (
            this.isHybrid() &&
            this.getHybridType() === eyeViewHybridBridge.HYBRID_ANDROID
          );
        },
        isHybridIOS: function() {
          return (
            this.isHybrid() &&
            this.getHybridType() === eyeViewHybridBridge.HYBRID_IOS
          );
        },
        immutableSet: function() {
          for (var n = {}, e = 0; e < arguments.length; e++)
            n[arguments[e]] = !0;
          return n;
        },
        DOMElement2Str: function(n) {
          return n instanceof CharacterData ? n.textContent : n.outerHTML;
        },
        dateFromNow: function(n) {
          return new Date(this.currentTimestamp() + n);
        },
        getRootNode: function(n) {
          if (!n) return n;
          if (n.getRootNode) return n.getRootNode();
          var e = n;
          for (n = n.parentNode; n; ) n = (e = n).parentNode;
          return e || n;
        },
        isAttachedToDOM: function(n) {
          if (!n) return !1;
          if (l) return n.isConnected;
          var e = n.ownerDocument;
          if (n.getRootNode) return e === n.getRootNode({ composed: !0 });
          for (; n; ) {
            if (n === e) return !0;
            n = n.parentNode || n.host;
          }
          return !1;
        },
        isVisible: function(n) {
          return !!(
            n.offsetWidth ||
            n.offsetHeight ||
            n.getClientRects().length
          );
        },
        ensureProperty: function(n) {
          for (
            var e = Array.prototype.slice.call(arguments, 1), t = n, r = 0;
            r < e.length;
            r++
          )
            t.hasOwnProperty(e[r]) || (t[e[r]] = {}), (t = t[e[r]]);
          return t;
        },
        shallowExtend: function(n, e) {
          if (!n) return n;
          var t;
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          return n;
        },
        isEmpty: function(n) {
          for (var e in n) if (n.hasOwnProperty(e)) return !1;
          return !0;
        },
        assign: function(n, e, t, r) {
          return c.call(null, n, e, t, r);
        },
        extractHostname: function(n) {
          if (!n) return "";
          var e = n.indexOf("//");
          if (-1 === e) return "";
          var t = n.indexOf("/", e + 2);
          return n.substring(e + 2, -1 !== t ? t : L);
        },
        isHostRelativeUrl: function(n) {
          return !n || !("//" === n.substring(0, 2) || -1 < n.indexOf("://"));
        },
        extractPath: function(n) {
          if (!n) return "";
          r.href = n;
          var e = r.pathname;
          return "/" !== e.charAt(0) && (e = "/" + e), e;
        },
        joinPath: function(n, e) {
          var t = "/" === n.charAt(n.length - 1),
            r = "/" === e.charAt(0);
          return t && r ? n + e.substring(1) : t || r ? n + e : n + "/" + e;
        },
        extractOrigin: function(n) {
          if (!n) return "";
          if (((r.href = n), r.origin)) return r.origin;
          var e = n.indexOf("://"),
            t = -1 !== e && -1 !== n.indexOf(":", e + 3);
          return r.hostname
            ? r.protocol + "//" + r.hostname + (t && r.port ? ":" + r.port : "")
            : "";
        },
        toAbsoluteUrl: function(n) {
          return (r.href = n), r.href;
        },
        arrayToJsonSafe: function(n) {
          return (t =
            t ||
            ("function" == typeof Array.prototype.toJSON
              ? function(n) {
                  var e = Array.prototype.toJSON;
                  delete Array.prototype.toJSON;
                  var t = JSON.stringify(n);
                  return (Array.prototype.toJSON = e), t;
                }
              : JSON.stringify))(n);
        },
        parseQuery: function(n) {
          var e = {};
          if (n)
            for (var t, r = n.split("&"), i = 0; i < r.length; i++)
              if ((t = r[i].split("="))[0])
                try {
                  e[t[0]] = t[1] ? decodeURIComponent(t[1]) : "";
                } catch (n) {}
          return e;
        },
        optionsWithDefaults: function(n, e) {
          var t;
          for (t in ((n = n || {}), (e = e || {})))
            e.hasOwnProperty(t) && (n[t] = void 0 !== n[t] ? n[t] : e[t]);
          return n;
        },
        strToBytes: function(n) {
          for (
            var e = new ArrayBuffer(n.length), t = new Uint8Array(e), r = 0;
            r < n.length;
            r++
          )
            t[r] = n.charCodeAt(r);
          return e;
        },
        strToUTF8Bytes: function(n) {
          for (var e = [], t = 0, r = 0; r < n.length; r++) {
            var i = n.charCodeAt(r);
            i < 128
              ? (e[t++] = i)
              : (i < 2048
                  ? (e[t++] = (i >> 6) | 192)
                  : (55296 == (64512 & i) &&
                    r + 1 < n.length &&
                    56320 == (64512 & n.charCodeAt(r + 1))
                      ? ((i =
                          65536 +
                          ((1023 & i) << 10) +
                          (1023 & n.charCodeAt(++r))),
                        (e[t++] = (i >> 18) | 240),
                        (e[t++] = ((i >> 12) & 63) | 128))
                      : (e[t++] = (i >> 12) | 224),
                    (e[t++] = ((i >> 6) & 63) | 128)),
                (e[t++] = (63 & i) | 128));
          }
          return e;
        },
        compositeFunctionBuilder: function(t) {
          var r = [];
          return {
            add: function(n) {
              return "function" == typeof n && r.push(n), this;
            },
            build: function() {
              return r.length
                ? function() {
                    for (var n, e = 0; e < r.length; e++)
                      if (((n = r[e].apply(null, arguments)), t && n)) return n;
                  }
                : L;
            },
            buildBooleanAnd: function() {
              return r.length
                ? function() {
                    for (var n = !0, e = 0; e < r.length; e++)
                      n = n && r[e].apply(null, arguments);
                    return n;
                  }
                : function() {
                    return !0;
                  };
            },
          };
        },
        transformTextSegments: function(n, e) {
          for (var t, r = 0, i = "", o = /\s+/gi; (t = o.exec(n)); )
            (i += e(n.substring(r, t.index))),
              (i += t[0]),
              (r = t.index + t[0].length);
          return (i += e(n.substring(r)));
        },
        elementMatches: (function() {
          if (!o.Element)
            return function() {
              return !1;
            };
          var n = o.Element.prototype;
          return (
            n.matches ||
              (n.matches =
                n.matchesSelector ||
                n.mozMatchesSelector ||
                n.msMatchesSelector ||
                n.oMatchesSelector ||
                n.webkitMatchesSelector ||
                function(n) {
                  for (
                    var e = (
                        this.document || this.ownerDocument
                      ).querySelectorAll(n),
                      t = e.length;
                    0 <= --t && e.item(t) !== this;

                  );
                  return -1 < t;
                }),
            function(n, e) {
              return n.matches(e);
            }
          );
        })(),
      };
    })(E, self, O, void 0 !== F ? F : {})),
    (function() {
      (
        ("undefined" !== typeof B ? B : {}) ||
        window ||
        this
      ).pako = (function o(a, u, c) {
        function s(t, n) {
          if (!u[t]) {
            if (!a[t]) {
              var e = "function" == typeof require && require;
              if (!n && e) return e(t, !0);
              if (f) return f(t, !0);
              var r = new Error("Cannot find module '" + t + "'");
              throw ((r.code = "MODULE_NOT_FOUND"), r);
            }
            var i = (u[t] = { exports: {} });
            a[t][0].call(
              i.exports,
              function(n) {
                var e = a[t][1][n];
                return s(e || n);
              },
              i,
              i.exports,
              o,
              a,
              u,
              c
            );
          }
          return u[t].exports;
        }
        for (
          var f = "function" == typeof require && require, n = 0;
          n < c.length;
          n++
        )
          s(c[n]);
        return s;
      })(
        {
          1: [
            function(n, e, t) {
              "use strict";
              var a = n("./zlib/deflate"),
                u = n("./utils/common"),
                c = n("./utils/strings"),
                i = n("./zlib/messages"),
                o = n("./zlib/zstream"),
                s = Object.prototype.toString,
                f = 0,
                d = -1,
                l = 0,
                h = 8;
              function v(n) {
                if (!(this instanceof v)) return new v(n);
                this.options = u.assign(
                  {
                    level: d,
                    method: h,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: l,
                    to: "",
                  },
                  n || {}
                );
                var e = this.options;
                e.raw && 0 < e.windowBits
                  ? (e.windowBits = -e.windowBits)
                  : e.gzip &&
                    0 < e.windowBits &&
                    e.windowBits < 16 &&
                    (e.windowBits += 16),
                  (this.err = 0),
                  (this.msg = ""),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new o()),
                  (this.strm.avail_out = 0);
                var t,
                  r = a.deflateInit2(
                    this.strm,
                    e.level,
                    e.method,
                    e.windowBits,
                    e.memLevel,
                    e.strategy
                  );
                if (r !== f) throw new Error(i[r]);
                if (
                  (e.header && a.deflateSetHeader(this.strm, e.header),
                  e.dictionary)
                ) {
                  if (
                    ((t =
                      "string" == typeof e.dictionary
                        ? c.string2buf(e.dictionary)
                        : "[object ArrayBuffer]" === s.call(e.dictionary)
                        ? new Uint8Array(e.dictionary)
                        : e.dictionary),
                    (r = a.deflateSetDictionary(this.strm, t)) !== f)
                  )
                    throw new Error(i[r]);
                  this._dict_set = !0;
                }
              }
              function r(n, e) {
                var t = new v(e);
                if ((t.push(n, !0), t.err)) throw t.msg || i[t.err];
                return t.result;
              }
              (v.prototype.push = function(n, e) {
                var t,
                  r,
                  i = this.strm,
                  o = this.options.chunkSize;
                if (this.ended) return !1;
                (r = e === ~~e ? e : !0 === e ? 4 : 0),
                  "string" == typeof n
                    ? (i.input = c.string2buf(n))
                    : "[object ArrayBuffer]" === s.call(n)
                    ? (i.input = new Uint8Array(n))
                    : (i.input = n),
                  (i.next_in = 0),
                  (i.avail_in = i.input.length);
                do {
                  if (
                    (0 === i.avail_out &&
                      ((i.output = new u.Buf8(o)),
                      (i.next_out = 0),
                      (i.avail_out = o)),
                    1 !== (t = a.deflate(i, r)) && t !== f)
                  )
                    return this.onEnd(t), !(this.ended = !0);
                  (0 !== i.avail_out &&
                    (0 !== i.avail_in || (4 !== r && 2 !== r))) ||
                    ("string" === this.options.to
                      ? this.onData(
                          c.buf2binstring(u.shrinkBuf(i.output, i.next_out))
                        )
                      : this.onData(u.shrinkBuf(i.output, i.next_out)));
                } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== t);
                return 4 === r
                  ? ((t = a.deflateEnd(this.strm)),
                    this.onEnd(t),
                    (this.ended = !0),
                    t === f)
                  : 2 !== r || (this.onEnd(f), !(i.avail_out = 0));
              }),
                (v.prototype.onData = function(n) {
                  this.chunks.push(n);
                }),
                (v.prototype.onEnd = function(n) {
                  n === f &&
                    ("string" === this.options.to
                      ? (this.result = this.chunks.join(""))
                      : (this.result = u.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = n),
                    (this.msg = this.strm.msg);
                }),
                (t.Deflate = v),
                (t.deflate = r),
                (t.deflateRaw = function(n, e) {
                  return ((e = e || {}).raw = !0), r(n, e);
                }),
                (t.gzip = function(n, e) {
                  return ((e = e || {}).gzip = !0), r(n, e);
                });
            },
            {
              "./utils/common": 2,
              "./utils/strings": 3,
              "./zlib/deflate": 6,
              "./zlib/messages": 7,
              "./zlib/zstream": 9,
            },
          ],
          2: [
            function(n, e, t) {
              "use strict";
              var r =
                "undefined" != typeof Uint8Array &&
                "undefined" != typeof Uint16Array &&
                "undefined" != typeof Int32Array;
              (t.assign = function(n) {
                for (
                  var e = Array.prototype.slice.call(arguments, 1);
                  e.length;

                ) {
                  var t = e.shift();
                  if (t) {
                    if ("object" != typeof t)
                      throw new TypeError(t + "must be non-object");
                    for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                  }
                }
                return n;
              }),
                (t.shrinkBuf = function(n, e) {
                  return n.length === e
                    ? n
                    : n.subarray
                    ? n.subarray(0, e)
                    : ((n.length = e), n);
                });
              var i = {
                  arraySet: function(n, e, t, r, i) {
                    if (e.subarray && n.subarray)
                      n.set(e.subarray(t, t + r), i);
                    else for (var o = 0; o < r; o++) n[i + o] = e[t + o];
                  },
                  flattenChunks: function(n) {
                    var e, t, r, i, o, a;
                    for (e = r = 0, t = n.length; e < t; e++) r += n[e].length;
                    for (
                      a = new Uint8Array(r), e = i = 0, t = n.length;
                      e < t;
                      e++
                    )
                      (o = n[e]), a.set(o, i), (i += o.length);
                    return a;
                  },
                },
                o = {
                  arraySet: function(n, e, t, r, i) {
                    for (var o = 0; o < r; o++) n[i + o] = e[t + o];
                  },
                  flattenChunks: function(n) {
                    return [].concat.apply([], n);
                  },
                };
              (t.setTyped = function(n) {
                n
                  ? ((t.Buf8 = Uint8Array),
                    (t.Buf16 = Uint16Array),
                    (t.Buf32 = Int32Array),
                    t.assign(t, i))
                  : ((t.Buf8 = Array),
                    (t.Buf16 = Array),
                    (t.Buf32 = Array),
                    t.assign(t, o));
              }),
                t.setTyped(r);
            },
            {},
          ],
          3: [
            function(n, e, t) {
              "use strict";
              var c = n("./common"),
                i = !0,
                o = !0;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (n) {
                i = !1;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (n) {
                o = !1;
              }
              for (var s = new c.Buf8(256), r = 0; r < 256; r++)
                s[r] =
                  252 <= r
                    ? 6
                    : 248 <= r
                    ? 5
                    : 240 <= r
                    ? 4
                    : 224 <= r
                    ? 3
                    : 192 <= r
                    ? 2
                    : 1;
              function f(n, e) {
                if (e < 65537 && ((n.subarray && o) || (!n.subarray && i)))
                  return String.fromCharCode.apply(null, c.shrinkBuf(n, e));
                for (var t = "", r = 0; r < e; r++)
                  t += String.fromCharCode(n[r]);
                return t;
              }
              (s[254] = s[254] = 1),
                (t.string2buf = function(n) {
                  var e,
                    t,
                    r,
                    i,
                    o,
                    a = n.length,
                    u = 0;
                  for (i = 0; i < a; i++)
                    55296 == (64512 & (t = n.charCodeAt(i))) &&
                      i + 1 < a &&
                      56320 == (64512 & (r = n.charCodeAt(i + 1))) &&
                      ((t = 65536 + ((t - 55296) << 10) + (r - 56320)), i++),
                      (u += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4);
                  for (e = new c.Buf8(u), i = o = 0; o < u; i++)
                    55296 == (64512 & (t = n.charCodeAt(i))) &&
                      i + 1 < a &&
                      56320 == (64512 & (r = n.charCodeAt(i + 1))) &&
                      ((t = 65536 + ((t - 55296) << 10) + (r - 56320)), i++),
                      t < 128
                        ? (e[o++] = t)
                        : (t < 2048
                            ? (e[o++] = 192 | (t >>> 6))
                            : (t < 65536
                                ? (e[o++] = 224 | (t >>> 12))
                                : ((e[o++] = 240 | (t >>> 18)),
                                  (e[o++] = 128 | ((t >>> 12) & 63))),
                              (e[o++] = 128 | ((t >>> 6) & 63))),
                          (e[o++] = 128 | (63 & t)));
                  return e;
                }),
                (t.buf2binstring = function(n) {
                  return f(n, n.length);
                }),
                (t.binstring2buf = function(n) {
                  for (
                    var e = new c.Buf8(n.length), t = 0, r = e.length;
                    t < r;
                    t++
                  )
                    e[t] = n.charCodeAt(t);
                  return e;
                }),
                (t.buf2string = function(n, e) {
                  var t,
                    r,
                    i,
                    o,
                    a = e || n.length,
                    u = new Array(2 * a);
                  for (t = r = 0; t < a; )
                    if ((i = n[t++]) < 128) u[r++] = i;
                    else if (4 < (o = s[i])) (u[r++] = 65533), (t += o - 1);
                    else {
                      for (
                        i &= 2 === o ? 31 : 3 === o ? 15 : 7;
                        1 < o && t < a;

                      )
                        (i = (i << 6) | (63 & n[t++])), o--;
                      1 < o
                        ? (u[r++] = 65533)
                        : i < 65536
                        ? (u[r++] = i)
                        : ((i -= 65536),
                          (u[r++] = 55296 | ((i >> 10) & 1023)),
                          (u[r++] = 56320 | (1023 & i)));
                    }
                  return f(u, r);
                }),
                (t.utf8border = function(n, e) {
                  var t;
                  for (
                    (e = e || n.length) > n.length && (e = n.length), t = e - 1;
                    0 <= t && 128 == (192 & n[t]);

                  )
                    t--;
                  return !(t < 0) && 0 !== t && t + s[n[t]] > e ? t : e;
                });
            },
            { "./common": 2 },
          ],
          4: [
            function(n, e, t) {
              "use strict";
              e.exports = function(n, e, t, r) {
                var i = (65535 & n) | 0,
                  o = ((n >>> 16) & 65535) | 0,
                  a = 0;
                for (; 0 !== t; ) {
                  for (
                    t -= a = 2e3 < t ? 2e3 : t;
                    (i = (i + e[r++]) | 0), (o = (o + i) | 0), --a;

                  );
                  (i %= 65521), (o %= 65521);
                }
                return i | (o << 16) | 0;
              };
            },
            {},
          ],
          5: [
            function(n, e, t) {
              "use strict";
              var u = (function() {
                for (var n, e = [], t = 0; t < 256; t++) {
                  n = t;
                  for (var r = 0; r < 8; r++)
                    n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
                  e[t] = n;
                }
                return e;
              })();
              e.exports = function(n, e, t, r) {
                var i = u,
                  o = r + t;
                n ^= -1;
                for (var a = r; a < o; a++) n = (n >>> 8) ^ i[255 & (n ^ e[a])];
                return -1 ^ n;
              };
            },
            {},
          ],
          6: [
            function(n, e, t) {
              "use strict";
              var s,
                d = n("../utils/common"),
                f = n("./trees"),
                l = n("./adler32"),
                h = n("./crc32"),
                r = n("./messages"),
                v = 0,
                m = 4,
                g = 0,
                p = -2,
                c = -1,
                y = 4,
                i = 2,
                w = 8,
                b = 9,
                o = 286,
                a = 30,
                u = 19,
                E = 2 * o + 1,
                C = 15,
                S = 3,
                T = 258,
                k = T + S + 1,
                x = 42,
                I = 113,
                M = 1,
                R = 2,
                A = 3,
                N = 4;
              function D(n, e) {
                return (n.msg = r[e]), e;
              }
              function _(n) {
                return (n << 1) - (4 < n ? 9 : 0);
              }
              function O(n) {
                for (var e = n.length; 0 <= --e; ) n[e] = 0;
              }
              function L(n) {
                var e = n.state,
                  t = e.pending;
                t > n.avail_out && (t = n.avail_out),
                  0 !== t &&
                    (d.arraySet(
                      n.output,
                      e.pending_buf,
                      e.pending_out,
                      t,
                      n.next_out
                    ),
                    (n.next_out += t),
                    (e.pending_out += t),
                    (n.total_out += t),
                    (n.avail_out -= t),
                    (e.pending -= t),
                    0 === e.pending && (e.pending_out = 0));
              }
              function F(n, e) {
                f._tr_flush_block(
                  n,
                  0 <= n.block_start ? n.block_start : -1,
                  n.strstart - n.block_start,
                  e
                ),
                  (n.block_start = n.strstart),
                  L(n.strm);
              }
              function P(n, e) {
                n.pending_buf[n.pending++] = e;
              }
              function B(n, e) {
                (n.pending_buf[n.pending++] = (e >>> 8) & 255),
                  (n.pending_buf[n.pending++] = 255 & e);
              }
              function j(n, e) {
                var t,
                  r,
                  i = n.max_chain_length,
                  o = n.strstart,
                  a = n.prev_length,
                  u = n.nice_match,
                  c =
                    n.strstart > n.w_size - k ? n.strstart - (n.w_size - k) : 0,
                  s = n.window,
                  f = n.w_mask,
                  d = n.prev,
                  l = n.strstart + T,
                  h = s[o + a - 1],
                  v = s[o + a];
                n.prev_length >= n.good_match && (i >>= 2),
                  u > n.lookahead && (u = n.lookahead);
                do {
                  if (
                    s[(t = e) + a] === v &&
                    s[t + a - 1] === h &&
                    s[t] === s[o] &&
                    s[++t] === s[o + 1]
                  ) {
                    (o += 2), t++;
                    do {} while (
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      s[++o] === s[++t] &&
                      o < l
                    );
                    if (((r = T - (l - o)), (o = l - T), a < r)) {
                      if (((n.match_start = e), u <= (a = r))) break;
                      (h = s[o + a - 1]), (v = s[o + a]);
                    }
                  }
                } while ((e = d[e & f]) > c && 0 != --i);
                return a <= n.lookahead ? a : n.lookahead;
              }
              function U(n) {
                var e,
                  t,
                  r,
                  i,
                  o,
                  a = n.w_size;
                do {
                  if (
                    ((i = n.window_size - n.lookahead - n.strstart),
                    n.strstart >= a + (a - k))
                  ) {
                    for (
                      d.arraySet(n.window, n.window, a, a, 0),
                        n.match_start -= a,
                        n.strstart -= a,
                        n.block_start -= a,
                        t = n.hash_size,
                        e = t;
                      (r = n.head[--e]), (n.head[e] = a <= r ? r - a : 0), --t;

                    );
                    for (
                      e = t = a;
                      (r = n.prev[--e]), (n.prev[e] = a <= r ? r - a : 0), --t;

                    );
                    i += a;
                  }
                  if (0 === n.strm.avail_in) break;
                  if (
                    ((t = (function(n, e, t, r) {
                      var i = n.avail_in;
                      r < i && (i = r);
                      if (0 === i) return 0;
                      (n.avail_in -= i),
                        d.arraySet(e, n.input, n.next_in, i, t),
                        1 === n.state.wrap
                          ? (n.adler = l(n.adler, e, i, t))
                          : 2 === n.state.wrap &&
                            (n.adler = h(n.adler, e, i, t));
                      return (n.next_in += i), (n.total_in += i), i;
                    })(n.strm, n.window, n.strstart + n.lookahead, i)),
                    (n.lookahead += t),
                    n.lookahead + n.insert >= S)
                  )
                    for (
                      o = n.strstart - n.insert,
                        n.ins_h = n.window[o],
                        n.ins_h =
                          ((n.ins_h << n.hash_shift) ^ n.window[o + 1]) &
                          n.hash_mask;
                      n.insert &&
                      ((n.ins_h =
                        ((n.ins_h << n.hash_shift) ^ n.window[o + S - 1]) &
                        n.hash_mask),
                      (n.prev[o & n.w_mask] = n.head[n.ins_h]),
                      (n.head[n.ins_h] = o),
                      o++,
                      n.insert--,
                      !(n.lookahead + n.insert < S));

                    );
                } while (n.lookahead < k && 0 !== n.strm.avail_in);
              }
              function H(n, e) {
                for (var t, r; ; ) {
                  if (n.lookahead < k) {
                    if ((U(n), n.lookahead < k && e === v)) return M;
                    if (0 === n.lookahead) break;
                  }
                  if (
                    ((t = 0),
                    n.lookahead >= S &&
                      ((n.ins_h =
                        ((n.ins_h << n.hash_shift) ^
                          n.window[n.strstart + S - 1]) &
                        n.hash_mask),
                      (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                      (n.head[n.ins_h] = n.strstart)),
                    0 !== t &&
                      n.strstart - t <= n.w_size - k &&
                      (n.match_length = j(n, t)),
                    n.match_length >= S)
                  )
                    if (
                      ((r = f._tr_tally(
                        n,
                        n.strstart - n.match_start,
                        n.match_length - S
                      )),
                      (n.lookahead -= n.match_length),
                      n.match_length <= n.max_lazy_match && n.lookahead >= S)
                    ) {
                      for (
                        n.match_length--;
                        n.strstart++,
                          (n.ins_h =
                            ((n.ins_h << n.hash_shift) ^
                              n.window[n.strstart + S - 1]) &
                            n.hash_mask),
                          (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                          (n.head[n.ins_h] = n.strstart),
                          0 != --n.match_length;

                      );
                      n.strstart++;
                    } else
                      (n.strstart += n.match_length),
                        (n.match_length = 0),
                        (n.ins_h = n.window[n.strstart]),
                        (n.ins_h =
                          ((n.ins_h << n.hash_shift) ^
                            n.window[n.strstart + 1]) &
                          n.hash_mask);
                  else
                    (r = f._tr_tally(n, 0, n.window[n.strstart])),
                      n.lookahead--,
                      n.strstart++;
                  if (r && (F(n, !1), 0 === n.strm.avail_out)) return M;
                }
                return (
                  (n.insert = n.strstart < S - 1 ? n.strstart : S - 1),
                  e === m
                    ? (F(n, !0), 0 === n.strm.avail_out ? A : N)
                    : n.last_lit && (F(n, !1), 0 === n.strm.avail_out)
                    ? M
                    : R
                );
              }
              function V(n, e) {
                for (var t, r, i; ; ) {
                  if (n.lookahead < k) {
                    if ((U(n), n.lookahead < k && e === v)) return M;
                    if (0 === n.lookahead) break;
                  }
                  if (
                    ((t = 0),
                    n.lookahead >= S &&
                      ((n.ins_h =
                        ((n.ins_h << n.hash_shift) ^
                          n.window[n.strstart + S - 1]) &
                        n.hash_mask),
                      (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                      (n.head[n.ins_h] = n.strstart)),
                    (n.prev_length = n.match_length),
                    (n.prev_match = n.match_start),
                    (n.match_length = S - 1),
                    0 !== t &&
                      n.prev_length < n.max_lazy_match &&
                      n.strstart - t <= n.w_size - k &&
                      ((n.match_length = j(n, t)),
                      n.match_length <= 5 &&
                        (1 === n.strategy ||
                          (n.match_length === S &&
                            4096 < n.strstart - n.match_start)) &&
                        (n.match_length = S - 1)),
                    n.prev_length >= S && n.match_length <= n.prev_length)
                  ) {
                    for (
                      i = n.strstart + n.lookahead - S,
                        r = f._tr_tally(
                          n,
                          n.strstart - 1 - n.prev_match,
                          n.prev_length - S
                        ),
                        n.lookahead -= n.prev_length - 1,
                        n.prev_length -= 2;
                      ++n.strstart <= i &&
                        ((n.ins_h =
                          ((n.ins_h << n.hash_shift) ^
                            n.window[n.strstart + S - 1]) &
                          n.hash_mask),
                        (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                        (n.head[n.ins_h] = n.strstart)),
                        0 != --n.prev_length;

                    );
                    if (
                      ((n.match_available = 0),
                      (n.match_length = S - 1),
                      n.strstart++,
                      r && (F(n, !1), 0 === n.strm.avail_out))
                    )
                      return M;
                  } else if (n.match_available) {
                    if (
                      ((r = f._tr_tally(n, 0, n.window[n.strstart - 1])) &&
                        F(n, !1),
                      n.strstart++,
                      n.lookahead--,
                      0 === n.strm.avail_out)
                    )
                      return M;
                  } else (n.match_available = 1), n.strstart++, n.lookahead--;
                }
                return (
                  n.match_available &&
                    ((r = f._tr_tally(n, 0, n.window[n.strstart - 1])),
                    (n.match_available = 0)),
                  (n.insert = n.strstart < S - 1 ? n.strstart : S - 1),
                  e === m
                    ? (F(n, !0), 0 === n.strm.avail_out ? A : N)
                    : n.last_lit && (F(n, !1), 0 === n.strm.avail_out)
                    ? M
                    : R
                );
              }
              function q(n, e) {
                for (var t, r, i, o, a = n.window; ; ) {
                  if (n.lookahead <= T) {
                    if ((U(n), n.lookahead <= T && e === v)) return M;
                    if (0 === n.lookahead) break;
                  }
                  if (
                    ((n.match_length = 0),
                    n.lookahead >= S &&
                      0 < n.strstart &&
                      ((i = n.strstart - 1),
                      (r = a[i]) === a[++i] && r === a[++i] && r === a[++i]))
                  ) {
                    o = n.strstart + T;
                    do {} while (
                      r === a[++i] &&
                      r === a[++i] &&
                      r === a[++i] &&
                      r === a[++i] &&
                      r === a[++i] &&
                      r === a[++i] &&
                      r === a[++i] &&
                      r === a[++i] &&
                      i < o
                    );
                    (n.match_length = T - (o - i)),
                      n.match_length > n.lookahead &&
                        (n.match_length = n.lookahead);
                  }
                  if (
                    (n.match_length >= S
                      ? ((t = f._tr_tally(n, 1, n.match_length - S)),
                        (n.lookahead -= n.match_length),
                        (n.strstart += n.match_length),
                        (n.match_length = 0))
                      : ((t = f._tr_tally(n, 0, n.window[n.strstart])),
                        n.lookahead--,
                        n.strstart++),
                    t && (F(n, !1), 0 === n.strm.avail_out))
                  )
                    return M;
                }
                return (
                  (n.insert = 0),
                  e === m
                    ? (F(n, !0), 0 === n.strm.avail_out ? A : N)
                    : n.last_lit && (F(n, !1), 0 === n.strm.avail_out)
                    ? M
                    : R
                );
              }
              function z(n, e) {
                for (var t; ; ) {
                  if (0 === n.lookahead && (U(n), 0 === n.lookahead)) {
                    if (e === v) return M;
                    break;
                  }
                  if (
                    ((n.match_length = 0),
                    (t = f._tr_tally(n, 0, n.window[n.strstart])),
                    n.lookahead--,
                    n.strstart++,
                    t && (F(n, !1), 0 === n.strm.avail_out))
                  )
                    return M;
                }
                return (
                  (n.insert = 0),
                  e === m
                    ? (F(n, !0), 0 === n.strm.avail_out ? A : N)
                    : n.last_lit && (F(n, !1), 0 === n.strm.avail_out)
                    ? M
                    : R
                );
              }
              function W(n, e, t, r, i) {
                (this.good_length = n),
                  (this.max_lazy = e),
                  (this.nice_length = t),
                  (this.max_chain = r),
                  (this.func = i);
              }
              function X() {
                (this.strm = null),
                  (this.status = 0),
                  (this.pending_buf = null),
                  (this.pending_buf_size = 0),
                  (this.pending_out = 0),
                  (this.pending = 0),
                  (this.wrap = 0),
                  (this.gzhead = null),
                  (this.gzindex = 0),
                  (this.method = w),
                  (this.last_flush = -1),
                  (this.w_size = 0),
                  (this.w_bits = 0),
                  (this.w_mask = 0),
                  (this.window = null),
                  (this.window_size = 0),
                  (this.prev = null),
                  (this.head = null),
                  (this.ins_h = 0),
                  (this.hash_size = 0),
                  (this.hash_bits = 0),
                  (this.hash_mask = 0),
                  (this.hash_shift = 0),
                  (this.block_start = 0),
                  (this.match_length = 0),
                  (this.prev_match = 0),
                  (this.match_available = 0),
                  (this.strstart = 0),
                  (this.match_start = 0),
                  (this.lookahead = 0),
                  (this.prev_length = 0),
                  (this.max_chain_length = 0),
                  (this.max_lazy_match = 0),
                  (this.level = 0),
                  (this.strategy = 0),
                  (this.good_match = 0),
                  (this.nice_match = 0),
                  (this.dyn_ltree = new d.Buf16(2 * E)),
                  (this.dyn_dtree = new d.Buf16(2 * (2 * a + 1))),
                  (this.bl_tree = new d.Buf16(2 * (2 * u + 1))),
                  O(this.dyn_ltree),
                  O(this.dyn_dtree),
                  O(this.bl_tree),
                  (this.l_desc = null),
                  (this.d_desc = null),
                  (this.bl_desc = null),
                  (this.bl_count = new d.Buf16(C + 1)),
                  (this.heap = new d.Buf16(2 * o + 1)),
                  O(this.heap),
                  (this.heap_len = 0),
                  (this.heap_max = 0),
                  (this.depth = new d.Buf16(2 * o + 1)),
                  O(this.depth),
                  (this.l_buf = 0),
                  (this.lit_bufsize = 0),
                  (this.last_lit = 0),
                  (this.d_buf = 0),
                  (this.opt_len = 0),
                  (this.static_len = 0),
                  (this.matches = 0),
                  (this.insert = 0),
                  (this.bi_buf = 0),
                  (this.bi_valid = 0);
              }
              function G(n) {
                var e;
                return n && n.state
                  ? ((n.total_in = n.total_out = 0),
                    (n.data_type = i),
                    ((e = n.state).pending = 0),
                    (e.pending_out = 0),
                    e.wrap < 0 && (e.wrap = -e.wrap),
                    (e.status = e.wrap ? x : I),
                    (n.adler = 2 === e.wrap ? 0 : 1),
                    (e.last_flush = v),
                    f._tr_init(e),
                    g)
                  : D(n, p);
              }
              function J(n) {
                var e = G(n);
                return (
                  e === g &&
                    (function(n) {
                      (n.window_size = 2 * n.w_size),
                        O(n.head),
                        (n.max_lazy_match = s[n.level].max_lazy),
                        (n.good_match = s[n.level].good_length),
                        (n.nice_match = s[n.level].nice_length),
                        (n.max_chain_length = s[n.level].max_chain),
                        (n.strstart = 0),
                        (n.block_start = 0),
                        (n.lookahead = 0),
                        (n.insert = 0),
                        (n.match_length = n.prev_length = S - 1),
                        (n.match_available = 0),
                        (n.ins_h = 0);
                    })(n.state),
                  e
                );
              }
              function K(n, e, t, r, i, o) {
                if (!n) return p;
                var a = 1;
                if (
                  (e === c && (e = 6),
                  r < 0 ? ((a = 0), (r = -r)) : 15 < r && ((a = 2), (r -= 16)),
                  i < 1 ||
                    b < i ||
                    t !== w ||
                    r < 8 ||
                    15 < r ||
                    e < 0 ||
                    9 < e ||
                    o < 0 ||
                    y < o)
                )
                  return D(n, p);
                8 === r && (r = 9);
                var u = new X();
                return (
                  ((n.state = u).strm = n),
                  (u.wrap = a),
                  (u.gzhead = null),
                  (u.w_bits = r),
                  (u.w_size = 1 << u.w_bits),
                  (u.w_mask = u.w_size - 1),
                  (u.hash_bits = i + 7),
                  (u.hash_size = 1 << u.hash_bits),
                  (u.hash_mask = u.hash_size - 1),
                  (u.hash_shift = ~~((u.hash_bits + S - 1) / S)),
                  (u.window = new d.Buf8(2 * u.w_size)),
                  (u.head = new d.Buf16(u.hash_size)),
                  (u.prev = new d.Buf16(u.w_size)),
                  (u.lit_bufsize = 1 << (i + 6)),
                  (u.pending_buf_size = 4 * u.lit_bufsize),
                  (u.pending_buf = new d.Buf8(u.pending_buf_size)),
                  (u.d_buf = +u.lit_bufsize),
                  (u.l_buf = 3 * u.lit_bufsize),
                  (u.level = e),
                  (u.strategy = o),
                  (u.method = t),
                  J(n)
                );
              }
              (s = [
                new W(0, 0, 0, 0, function(n, e) {
                  var t = 65535;
                  t > n.pending_buf_size - 5 && (t = n.pending_buf_size - 5);
                  for (;;) {
                    if (n.lookahead <= 1) {
                      if ((U(n), 0 === n.lookahead && e === v)) return M;
                      if (0 === n.lookahead) break;
                    }
                    (n.strstart += n.lookahead), (n.lookahead = 0);
                    var r = n.block_start + t;
                    if (
                      (0 === n.strstart || n.strstart >= r) &&
                      ((n.lookahead = n.strstart - r),
                      (n.strstart = r),
                      F(n, !1),
                      0 === n.strm.avail_out)
                    )
                      return M;
                    if (
                      n.strstart - n.block_start >= n.w_size - k &&
                      (F(n, !1), 0 === n.strm.avail_out)
                    )
                      return M;
                  }
                  if (((n.insert = 0), e === m))
                    return F(n, !0), 0 === n.strm.avail_out ? A : N;
                  if (
                    n.strstart > n.block_start &&
                    (F(n, !1), 0 === n.strm.avail_out)
                  )
                    return M;
                  return M;
                }),
                new W(4, 4, 8, 4, H),
                new W(4, 5, 16, 8, H),
                new W(4, 6, 32, 32, H),
                new W(4, 4, 16, 16, V),
                new W(8, 16, 32, 32, V),
                new W(8, 16, 128, 128, V),
                new W(8, 32, 128, 256, V),
                new W(32, 128, 258, 1024, V),
                new W(32, 258, 258, 4096, V),
              ]),
                (t.deflateInit = function(n, e) {
                  return K(n, e, w, 15, 8, 0);
                }),
                (t.deflateInit2 = K),
                (t.deflateReset = J),
                (t.deflateResetKeep = G),
                (t.deflateSetHeader = function(n, e) {
                  return n && n.state && 2 === n.state.wrap
                    ? ((n.state.gzhead = e), g)
                    : p;
                }),
                (t.deflate = function(n, e) {
                  var t, r, i, o;
                  if (!n || !n.state || 5 < e || e < 0) return n ? D(n, p) : p;
                  if (
                    ((r = n.state),
                    !n.output ||
                      (!n.input && 0 !== n.avail_in) ||
                      (666 === r.status && e !== m))
                  )
                    return D(n, 0 === n.avail_out ? -5 : p);
                  {
                    var a, u;
                    (r.strm = n),
                      (t = r.last_flush),
                      (r.last_flush = e),
                      r.status === x &&
                        (2 === r.wrap
                          ? ((n.adler = 0),
                            P(r, 31),
                            P(r, 139),
                            P(r, 8),
                            r.gzhead
                              ? (P(
                                  r,
                                  (r.gzhead.text ? 1 : 0) +
                                    (r.gzhead.hcrc ? 2 : 0) +
                                    (r.gzhead.extra ? 4 : 0) +
                                    (r.gzhead.name ? 8 : 0) +
                                    (r.gzhead.comment ? 16 : 0)
                                ),
                                P(r, 255 & r.gzhead.time),
                                P(r, (r.gzhead.time >> 8) & 255),
                                P(r, (r.gzhead.time >> 16) & 255),
                                P(r, (r.gzhead.time >> 24) & 255),
                                P(
                                  r,
                                  9 === r.level
                                    ? 2
                                    : 2 <= r.strategy || r.level < 2
                                    ? 4
                                    : 0
                                ),
                                P(r, 255 & r.gzhead.os),
                                r.gzhead.extra &&
                                  r.gzhead.extra.length &&
                                  (P(r, 255 & r.gzhead.extra.length),
                                  P(r, (r.gzhead.extra.length >> 8) & 255)),
                                r.gzhead.hcrc &&
                                  (n.adler = h(
                                    n.adler,
                                    r.pending_buf,
                                    r.pending,
                                    0
                                  )),
                                (r.gzindex = 0),
                                (r.status = 69))
                              : (P(r, 0),
                                P(r, 0),
                                P(r, 0),
                                P(r, 0),
                                P(r, 0),
                                P(
                                  r,
                                  9 === r.level
                                    ? 2
                                    : 2 <= r.strategy || r.level < 2
                                    ? 4
                                    : 0
                                ),
                                P(r, 3),
                                (r.status = I)))
                          : ((a = (w + ((r.w_bits - 8) << 4)) << 8),
                            (u = -1),
                            (u =
                              2 <= r.strategy || r.level < 2
                                ? 0
                                : r.level < 6
                                ? 1
                                : 6 === r.level
                                ? 2
                                : 3),
                            (a |= u << 6),
                            0 !== r.strstart && (a |= 32),
                            (a += 31 - (a % 31)),
                            (r.status = I),
                            B(r, a),
                            0 !== r.strstart &&
                              (B(r, n.adler >>> 16), B(r, 65535 & n.adler)),
                            (n.adler = 1)));
                  }
                  if (69 === r.status)
                    if (r.gzhead.extra) {
                      for (
                        i = r.pending;
                        r.gzindex < (65535 & r.gzhead.extra.length) &&
                        (r.pending !== r.pending_buf_size ||
                          (r.gzhead.hcrc &&
                            r.pending > i &&
                            (n.adler = h(
                              n.adler,
                              r.pending_buf,
                              r.pending - i,
                              i
                            )),
                          L(n),
                          (i = r.pending),
                          r.pending !== r.pending_buf_size));

                      )
                        P(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
                      r.gzhead.hcrc &&
                        r.pending > i &&
                        (n.adler = h(n.adler, r.pending_buf, r.pending - i, i)),
                        r.gzindex === r.gzhead.extra.length &&
                          ((r.gzindex = 0), (r.status = 73));
                    } else r.status = 73;
                  if (73 === r.status)
                    if (r.gzhead.name) {
                      i = r.pending;
                      do {
                        if (
                          r.pending === r.pending_buf_size &&
                          (r.gzhead.hcrc &&
                            r.pending > i &&
                            (n.adler = h(
                              n.adler,
                              r.pending_buf,
                              r.pending - i,
                              i
                            )),
                          L(n),
                          (i = r.pending),
                          r.pending === r.pending_buf_size)
                        ) {
                          o = 1;
                          break;
                        }
                        (o =
                          r.gzindex < r.gzhead.name.length
                            ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                            : 0),
                          P(r, o);
                      } while (0 !== o);
                      r.gzhead.hcrc &&
                        r.pending > i &&
                        (n.adler = h(n.adler, r.pending_buf, r.pending - i, i)),
                        0 === o && ((r.gzindex = 0), (r.status = 91));
                    } else r.status = 91;
                  if (91 === r.status)
                    if (r.gzhead.comment) {
                      i = r.pending;
                      do {
                        if (
                          r.pending === r.pending_buf_size &&
                          (r.gzhead.hcrc &&
                            r.pending > i &&
                            (n.adler = h(
                              n.adler,
                              r.pending_buf,
                              r.pending - i,
                              i
                            )),
                          L(n),
                          (i = r.pending),
                          r.pending === r.pending_buf_size)
                        ) {
                          o = 1;
                          break;
                        }
                        (o =
                          r.gzindex < r.gzhead.comment.length
                            ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                            : 0),
                          P(r, o);
                      } while (0 !== o);
                      r.gzhead.hcrc &&
                        r.pending > i &&
                        (n.adler = h(n.adler, r.pending_buf, r.pending - i, i)),
                        0 === o && (r.status = 103);
                    } else r.status = 103;
                  103 === r.status &&
                    (r.gzhead.hcrc
                      ? (r.pending + 2 > r.pending_buf_size && L(n),
                        r.pending + 2 <= r.pending_buf_size &&
                          (P(r, 255 & n.adler),
                          P(r, (n.adler >> 8) & 255),
                          (n.adler = 0),
                          (r.status = I)))
                      : (r.status = I));
                  if (0 !== r.pending) {
                    if ((L(n), 0 === n.avail_out))
                      return (r.last_flush = -1), g;
                  } else if (0 === n.avail_in && _(e) <= _(t) && e !== m)
                    return D(n, -5);
                  if (666 === r.status && 0 !== n.avail_in) return D(n, -5);
                  if (
                    0 !== n.avail_in ||
                    0 !== r.lookahead ||
                    (e !== v && 666 !== r.status)
                  ) {
                    var c =
                      2 === r.strategy
                        ? z(r, e)
                        : 3 === r.strategy
                        ? q(r, e)
                        : s[r.level].func(r, e);
                    if (
                      ((c !== A && c !== N) || (r.status = 666),
                      c === M || c === A)
                    )
                      return 0 === n.avail_out && (r.last_flush = -1), g;
                    if (
                      c === R &&
                      (1 === e
                        ? f._tr_align(r)
                        : 5 !== e &&
                          (f._tr_stored_block(r, 0, 0, !1),
                          3 === e &&
                            (O(r.head),
                            0 === r.lookahead &&
                              ((r.strstart = 0),
                              (r.block_start = 0),
                              (r.insert = 0)))),
                      L(n),
                      0 === n.avail_out)
                    )
                      return (r.last_flush = -1), g;
                  }
                  if (e !== m) return g;
                  if (r.wrap <= 0) return 1;
                  2 === r.wrap
                    ? (P(r, 255 & n.adler),
                      P(r, (n.adler >> 8) & 255),
                      P(r, (n.adler >> 16) & 255),
                      P(r, (n.adler >> 24) & 255),
                      P(r, 255 & n.total_in),
                      P(r, (n.total_in >> 8) & 255),
                      P(r, (n.total_in >> 16) & 255),
                      P(r, (n.total_in >> 24) & 255))
                    : (B(r, n.adler >>> 16), B(r, 65535 & n.adler));
                  L(n), 0 < r.wrap && (r.wrap = -r.wrap);
                  return 0 !== r.pending ? g : 1;
                }),
                (t.deflateEnd = function(n) {
                  var e;
                  return n && n.state
                    ? (e = n.state.status) === x ||
                      69 === e ||
                      73 === e ||
                      91 === e ||
                      103 === e ||
                      e === I ||
                      666 === e
                      ? ((n.state = null), e === I ? D(n, -3) : g)
                      : D(n, p)
                    : p;
                }),
                (t.deflateSetDictionary = function(n, e) {
                  var t,
                    r,
                    i,
                    o,
                    a,
                    u,
                    c,
                    s,
                    f = e.length;
                  if (!n || !n.state) return p;
                  if (
                    ((t = n.state),
                    2 === (o = t.wrap) ||
                      (1 === o && t.status !== x) ||
                      t.lookahead)
                  )
                    return p;
                  1 === o && (n.adler = l(n.adler, e, f, 0));
                  (t.wrap = 0),
                    f >= t.w_size &&
                      (0 === o &&
                        (O(t.head),
                        (t.strstart = 0),
                        (t.block_start = 0),
                        (t.insert = 0)),
                      (s = new d.Buf8(t.w_size)),
                      d.arraySet(s, e, f - t.w_size, t.w_size, 0),
                      (e = s),
                      (f = t.w_size));
                  (a = n.avail_in),
                    (u = n.next_in),
                    (c = n.input),
                    (n.avail_in = f),
                    (n.next_in = 0),
                    (n.input = e),
                    U(t);
                  for (; t.lookahead >= S; ) {
                    for (
                      r = t.strstart, i = t.lookahead - (S - 1);
                      (t.ins_h =
                        ((t.ins_h << t.hash_shift) ^ t.window[r + S - 1]) &
                        t.hash_mask),
                        (t.prev[r & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = r),
                        r++,
                        --i;

                    );
                    (t.strstart = r), (t.lookahead = S - 1), U(t);
                  }
                  return (
                    (t.strstart += t.lookahead),
                    (t.block_start = t.strstart),
                    (t.insert = t.lookahead),
                    (t.lookahead = 0),
                    (t.match_length = t.prev_length = S - 1),
                    (t.match_available = 0),
                    (n.next_in = u),
                    (n.input = c),
                    (n.avail_in = a),
                    (t.wrap = o),
                    g
                  );
                }),
                (t.deflateInfo = "pako deflate (from Nodeca project)");
            },
            {
              "../utils/common": 2,
              "./adler32": 4,
              "./crc32": 5,
              "./messages": 7,
              "./trees": 8,
            },
          ],
          7: [
            function(n, e, t) {
              "use strict";
              e.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version",
              };
            },
            {},
          ],
          8: [
            function(n, e, t) {
              "use strict";
              var i = n("../utils/common"),
                r = 0,
                o = 1;
              function a(n) {
                for (var e = n.length; 0 <= --e; ) n[e] = 0;
              }
              var u = 0,
                c = 29,
                s = 256,
                f = s + 1 + c,
                d = 30,
                l = 19,
                g = 2 * f + 1,
                p = 15,
                h = 16,
                v = 7,
                m = 256,
                y = 16,
                w = 17,
                b = 18,
                E = [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  1,
                  1,
                  2,
                  2,
                  2,
                  2,
                  3,
                  3,
                  3,
                  3,
                  4,
                  4,
                  4,
                  4,
                  5,
                  5,
                  5,
                  5,
                  0,
                ],
                C = [
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  2,
                  2,
                  3,
                  3,
                  4,
                  4,
                  5,
                  5,
                  6,
                  6,
                  7,
                  7,
                  8,
                  8,
                  9,
                  9,
                  10,
                  10,
                  11,
                  11,
                  12,
                  12,
                  13,
                  13,
                ],
                S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                T = [
                  16,
                  17,
                  18,
                  0,
                  8,
                  7,
                  9,
                  6,
                  10,
                  5,
                  11,
                  4,
                  12,
                  3,
                  13,
                  2,
                  14,
                  1,
                  15,
                ],
                k = new Array(2 * (f + 2));
              a(k);
              var x = new Array(2 * d);
              a(x);
              var I = new Array(512);
              a(I);
              var M = new Array(256);
              a(M);
              var R = new Array(c);
              a(R);
              var A,
                N,
                D,
                _ = new Array(d);
              function O(n, e, t, r, i) {
                (this.static_tree = n),
                  (this.extra_bits = e),
                  (this.extra_base = t),
                  (this.elems = r),
                  (this.max_length = i),
                  (this.has_stree = n && n.length);
              }
              function L(n, e) {
                (this.dyn_tree = n), (this.max_code = 0), (this.stat_desc = e);
              }
              function F(n) {
                return n < 256 ? I[n] : I[256 + (n >>> 7)];
              }
              function P(n, e) {
                (n.pending_buf[n.pending++] = 255 & e),
                  (n.pending_buf[n.pending++] = (e >>> 8) & 255);
              }
              function B(n, e, t) {
                n.bi_valid > h - t
                  ? ((n.bi_buf |= (e << n.bi_valid) & 65535),
                    P(n, n.bi_buf),
                    (n.bi_buf = e >> (h - n.bi_valid)),
                    (n.bi_valid += t - h))
                  : ((n.bi_buf |= (e << n.bi_valid) & 65535),
                    (n.bi_valid += t));
              }
              function j(n, e, t) {
                B(n, t[2 * e], t[2 * e + 1]);
              }
              function U(n, e) {
                for (var t = 0; (t |= 1 & n), (n >>>= 1), (t <<= 1), 0 < --e; );
                return t >>> 1;
              }
              function H(n) {
                16 === n.bi_valid
                  ? (P(n, n.bi_buf), (n.bi_buf = 0), (n.bi_valid = 0))
                  : 8 <= n.bi_valid &&
                    ((n.pending_buf[n.pending++] = 255 & n.bi_buf),
                    (n.bi_buf >>= 8),
                    (n.bi_valid -= 8));
              }
              function V(n, e, t) {
                var r,
                  i,
                  o = new Array(p + 1),
                  a = 0;
                for (r = 1; r <= p; r++) o[r] = a = (a + t[r - 1]) << 1;
                for (i = 0; i <= e; i++) {
                  var u = n[2 * i + 1];
                  0 !== u && (n[2 * i] = U(o[u]++, u));
                }
              }
              function q() {
                var n,
                  e,
                  t,
                  r,
                  i,
                  o = new Array(p + 1);
                for (r = t = 0; r < c - 1; r++)
                  for (R[r] = t, n = 0; n < 1 << E[r]; n++) M[t++] = r;
                for (M[t - 1] = r, r = i = 0; r < 16; r++)
                  for (_[r] = i, n = 0; n < 1 << C[r]; n++) I[i++] = r;
                for (i >>= 7; r < d; r++)
                  for (_[r] = i << 7, n = 0; n < 1 << (C[r] - 7); n++)
                    I[256 + i++] = r;
                for (e = 0; e <= p; e++) o[e] = 0;
                for (n = 0; n <= 143; ) (k[2 * n + 1] = 8), n++, o[8]++;
                for (; n <= 255; ) (k[2 * n + 1] = 9), n++, o[9]++;
                for (; n <= 279; ) (k[2 * n + 1] = 7), n++, o[7]++;
                for (; n <= 287; ) (k[2 * n + 1] = 8), n++, o[8]++;
                for (V(k, f + 1, o), n = 0; n < d; n++)
                  (x[2 * n + 1] = 5), (x[2 * n] = U(n, 5));
                (A = new O(k, E, s + 1, f, p)),
                  (N = new O(x, C, 0, d, p)),
                  (D = new O(new Array(0), S, 0, l, v));
              }
              function z(n) {
                var e;
                for (e = 0; e < f; e++) n.dyn_ltree[2 * e] = 0;
                for (e = 0; e < d; e++) n.dyn_dtree[2 * e] = 0;
                for (e = 0; e < l; e++) n.bl_tree[2 * e] = 0;
                (n.dyn_ltree[2 * m] = 1),
                  (n.opt_len = n.static_len = 0),
                  (n.last_lit = n.matches = 0);
              }
              function W(n) {
                8 < n.bi_valid
                  ? P(n, n.bi_buf)
                  : 0 < n.bi_valid && (n.pending_buf[n.pending++] = n.bi_buf),
                  (n.bi_buf = 0),
                  (n.bi_valid = 0);
              }
              function X(n, e, t, r) {
                var i = 2 * e,
                  o = 2 * t;
                return n[i] < n[o] || (n[i] === n[o] && r[e] <= r[t]);
              }
              function G(n, e, t) {
                for (
                  var r = n.heap[t], i = t << 1;
                  i <= n.heap_len &&
                  (i < n.heap_len &&
                    X(e, n.heap[i + 1], n.heap[i], n.depth) &&
                    i++,
                  !X(e, r, n.heap[i], n.depth));

                )
                  (n.heap[t] = n.heap[i]), (t = i), (i <<= 1);
                n.heap[t] = r;
              }
              function J(n, e, t) {
                var r,
                  i,
                  o,
                  a,
                  u = 0;
                if (0 !== n.last_lit)
                  for (
                    ;
                    (r =
                      (n.pending_buf[n.d_buf + 2 * u] << 8) |
                      n.pending_buf[n.d_buf + 2 * u + 1]),
                      (i = n.pending_buf[n.l_buf + u]),
                      u++,
                      0 === r
                        ? j(n, i, e)
                        : ((o = M[i]),
                          j(n, o + s + 1, e),
                          0 !== (a = E[o]) && ((i -= R[o]), B(n, i, a)),
                          (o = F(--r)),
                          j(n, o, t),
                          0 !== (a = C[o]) && ((r -= _[o]), B(n, r, a))),
                      u < n.last_lit;

                  );
                j(n, m, e);
              }
              function K(n, e) {
                var t,
                  r,
                  i,
                  o = e.dyn_tree,
                  a = e.stat_desc.static_tree,
                  u = e.stat_desc.has_stree,
                  c = e.stat_desc.elems,
                  s = -1;
                for (n.heap_len = 0, n.heap_max = g, t = 0; t < c; t++)
                  0 !== o[2 * t]
                    ? ((n.heap[++n.heap_len] = s = t), (n.depth[t] = 0))
                    : (o[2 * t + 1] = 0);
                for (; n.heap_len < 2; )
                  (i = n.heap[++n.heap_len] = s < 2 ? ++s : 0),
                    (o[2 * i] = 1),
                    (n.depth[i] = 0),
                    n.opt_len--,
                    u && (n.static_len -= a[2 * i + 1]);
                for (e.max_code = s, t = n.heap_len >> 1; 1 <= t; t--)
                  G(n, o, t);
                for (
                  i = c;
                  (t = n.heap[1]),
                    (n.heap[1] = n.heap[n.heap_len--]),
                    G(n, o, 1),
                    (r = n.heap[1]),
                    (n.heap[--n.heap_max] = t),
                    (n.heap[--n.heap_max] = r),
                    (o[2 * i] = o[2 * t] + o[2 * r]),
                    (n.depth[i] =
                      (n.depth[t] >= n.depth[r] ? n.depth[t] : n.depth[r]) + 1),
                    (o[2 * t + 1] = o[2 * r + 1] = i),
                    (n.heap[1] = i++),
                    G(n, o, 1),
                    2 <= n.heap_len;

                );
                (n.heap[--n.heap_max] = n.heap[1]),
                  (function(n, e) {
                    var t,
                      r,
                      i,
                      o,
                      a,
                      u,
                      c = e.dyn_tree,
                      s = e.max_code,
                      f = e.stat_desc.static_tree,
                      d = e.stat_desc.has_stree,
                      l = e.stat_desc.extra_bits,
                      h = e.stat_desc.extra_base,
                      v = e.stat_desc.max_length,
                      m = 0;
                    for (o = 0; o <= p; o++) n.bl_count[o] = 0;
                    for (
                      c[2 * n.heap[n.heap_max] + 1] = 0, t = n.heap_max + 1;
                      t < g;
                      t++
                    )
                      (r = n.heap[t]),
                        (o = c[2 * c[2 * r + 1] + 1] + 1),
                        v < o && ((o = v), m++),
                        (c[2 * r + 1] = o),
                        s < r ||
                          (n.bl_count[o]++,
                          (a = 0),
                          h <= r && (a = l[r - h]),
                          (u = c[2 * r]),
                          (n.opt_len += u * (o + a)),
                          d && (n.static_len += u * (f[2 * r + 1] + a)));
                    if (0 === m) return;
                    do {
                      for (o = v - 1; 0 === n.bl_count[o]; ) o--;
                      n.bl_count[o]--,
                        (n.bl_count[o + 1] += 2),
                        n.bl_count[v]--,
                        (m -= 2);
                    } while (0 < m);
                    for (o = v; 0 !== o; o--)
                      for (r = n.bl_count[o]; 0 !== r; )
                        (i = n.heap[--t]),
                          s < i ||
                            (c[2 * i + 1] !== o &&
                              ((n.opt_len += (o - c[2 * i + 1]) * c[2 * i]),
                              (c[2 * i + 1] = o)),
                            r--);
                  })(n, e),
                  V(o, s, n.bl_count);
              }
              function Q(n, e, t) {
                var r,
                  i,
                  o = -1,
                  a = e[1],
                  u = 0,
                  c = 7,
                  s = 4;
                for (
                  0 === a && ((c = 138), (s = 3)),
                    e[2 * (t + 1) + 1] = 65535,
                    r = 0;
                  r <= t;
                  r++
                )
                  (i = a),
                    (a = e[2 * (r + 1) + 1]),
                    (++u < c && i === a) ||
                      (u < s
                        ? (n.bl_tree[2 * i] += u)
                        : 0 !== i
                        ? (i !== o && n.bl_tree[2 * i]++, n.bl_tree[2 * y]++)
                        : u <= 10
                        ? n.bl_tree[2 * w]++
                        : n.bl_tree[2 * b]++,
                      (o = i),
                      (s =
                        (u = 0) === a
                          ? ((c = 138), 3)
                          : i === a
                          ? ((c = 6), 3)
                          : ((c = 7), 4)));
              }
              function Y(n, e, t) {
                var r,
                  i,
                  o = -1,
                  a = e[1],
                  u = 0,
                  c = 7,
                  s = 4;
                for (0 === a && ((c = 138), (s = 3)), r = 0; r <= t; r++)
                  if (
                    ((i = a), (a = e[2 * (r + 1) + 1]), !(++u < c && i === a))
                  ) {
                    if (u < s) for (; j(n, i, n.bl_tree), 0 != --u; );
                    else
                      0 !== i
                        ? (i !== o && (j(n, i, n.bl_tree), u--),
                          j(n, y, n.bl_tree),
                          B(n, u - 3, 2))
                        : u <= 10
                        ? (j(n, w, n.bl_tree), B(n, u - 3, 3))
                        : (j(n, b, n.bl_tree), B(n, u - 11, 7));
                    (o = i),
                      (s =
                        (u = 0) === a
                          ? ((c = 138), 3)
                          : i === a
                          ? ((c = 6), 3)
                          : ((c = 7), 4));
                  }
              }
              function $(n) {
                var e;
                for (
                  Q(n, n.dyn_ltree, n.l_desc.max_code),
                    Q(n, n.dyn_dtree, n.d_desc.max_code),
                    K(n, n.bl_desc),
                    e = l - 1;
                  3 <= e && 0 === n.bl_tree[2 * T[e] + 1];
                  e--
                );
                return (n.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
              }
              function Z(n, e, t, r) {
                var i;
                for (
                  B(n, e - 257, 5), B(n, t - 1, 5), B(n, r - 4, 4), i = 0;
                  i < r;
                  i++
                )
                  B(n, n.bl_tree[2 * T[i] + 1], 3);
                Y(n, n.dyn_ltree, e - 1), Y(n, n.dyn_dtree, t - 1);
              }
              function nn(n) {
                var e,
                  t = 4093624447;
                for (e = 0; e <= 31; e++, t >>>= 1)
                  if (1 & t && 0 !== n.dyn_ltree[2 * e]) return r;
                if (
                  0 !== n.dyn_ltree[18] ||
                  0 !== n.dyn_ltree[20] ||
                  0 !== n.dyn_ltree[26]
                )
                  return o;
                for (e = 32; e < s; e++) if (0 !== n.dyn_ltree[2 * e]) return o;
                return r;
              }
              a(_);
              var en = !1;
              function tn(n, e, t, r) {
                B(n, (u << 1) + (r ? 1 : 0), 3),
                  (function(n, e, t, r) {
                    W(n), r && (P(n, t), P(n, ~t));
                    i.arraySet(n.pending_buf, n.window, e, t, n.pending),
                      (n.pending += t);
                  })(n, e, t, !0);
              }
              (t._tr_init = function(n) {
                en || (q(), (en = !0));
                (n.l_desc = new L(n.dyn_ltree, A)),
                  (n.d_desc = new L(n.dyn_dtree, N)),
                  (n.bl_desc = new L(n.bl_tree, D)),
                  (n.bi_buf = 0),
                  (n.bi_valid = 0),
                  z(n);
              }),
                (t._tr_stored_block = tn),
                (t._tr_flush_block = function(n, e, t, r) {
                  var i,
                    o,
                    a = 0;
                  0 < n.level
                    ? (2 === n.strm.data_type && (n.strm.data_type = nn(n)),
                      K(n, n.l_desc),
                      K(n, n.d_desc),
                      (a = $(n)),
                      (i = (n.opt_len + 3 + 7) >>> 3),
                      (o = (n.static_len + 3 + 7) >>> 3) <= i && (i = o))
                    : (i = o = t + 5);
                  t + 4 <= i && -1 !== e
                    ? tn(n, e, t, r)
                    : 4 === n.strategy || o === i
                    ? (B(n, 2 + (r ? 1 : 0), 3), J(n, k, x))
                    : (B(n, 4 + (r ? 1 : 0), 3),
                      Z(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, a + 1),
                      J(n, n.dyn_ltree, n.dyn_dtree));
                  z(n), r && W(n);
                }),
                (t._tr_tally = function(n, e, t) {
                  (n.pending_buf[n.d_buf + 2 * n.last_lit] = (e >>> 8) & 255),
                    (n.pending_buf[n.d_buf + 2 * n.last_lit + 1] = 255 & e),
                    (n.pending_buf[n.l_buf + n.last_lit] = 255 & t),
                    n.last_lit++,
                    0 === e
                      ? n.dyn_ltree[2 * t]++
                      : (n.matches++,
                        e--,
                        n.dyn_ltree[2 * (M[t] + s + 1)]++,
                        n.dyn_dtree[2 * F(e)]++);
                  return n.last_lit === n.lit_bufsize - 1;
                }),
                (t._tr_align = function(n) {
                  B(n, 2, 3), j(n, m, k), H(n);
                });
            },
            { "../utils/common": 2 },
          ],
          9: [
            function(n, e, t) {
              "use strict";
              e.exports = function() {
                (this.input = null),
                  (this.next_in = 0),
                  (this.avail_in = 0),
                  (this.total_in = 0),
                  (this.output = null),
                  (this.next_out = 0),
                  (this.avail_out = 0),
                  (this.total_out = 0),
                  (this.msg = ""),
                  (this.state = null),
                  (this.data_type = 2),
                  (this.adler = 0);
              };
            },
            {},
          ],
        },
        {},
        [1]
      )(1);
    })(),
    (function(e, n) {
      "use strict";
      function t(n) {
        var e = n.charCodeAt(0);
        return e < 128
          ? n
          : e < 2048
          ? l(192 | (e >>> 6)) + l(128 | (63 & e))
          : l(224 | ((e >>> 12) & 15)) +
            l(128 | ((e >>> 6) & 63)) +
            l(128 | (63 & e));
      }
      function r(n) {
        return n.replace(/[^\x00-\x7F]/g, t);
      }
      function i(n) {
        var e = [0, 2, 1][n.length % 3],
          t =
            (n.charCodeAt(0) << 16) |
            ((1 < n.length ? n.charCodeAt(1) : 0) << 8) |
            (2 < n.length ? n.charCodeAt(2) : 0);
        return [
          f.charAt(t >>> 18),
          f.charAt((t >>> 12) & 63),
          2 <= e ? "=" : f.charAt((t >>> 6) & 63),
          1 <= e ? "=" : f.charAt(63 & t),
        ].join("");
      }
      function o(n) {
        return h(r(n));
      }
      function a(n, e) {
        return e
          ? o(n).replace(/[+\/]/g, function(n) {
              return "+" == n ? "-" : "_";
            })
          : o(n);
      }
      function u(n) {
        return l(
          n.length < 3
            ? ((31 & n.charCodeAt(0)) << 6) | (63 & n.charCodeAt(1))
            : ((15 & n.charCodeAt(0)) << 12) |
                ((63 & n.charCodeAt(1)) << 6) |
                (63 & n.charCodeAt(2))
        );
      }
      function c(n) {
        return n.replace(m, u);
      }
      function s(n) {
        return (
          (e = n
            .replace(/[-_]/g, function(n) {
              return "-" == n ? "+" : "/";
            })
            .replace(/[^A-Za-z0-9\+\/]/g, "")),
          c(v(e))
        );
        var e;
      }
      var f =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        d = (function(n) {
          for (var e = {}, t = 0, r = n.length; t < r; t++) e[n.charAt(t)] = t;
          return e;
        })(f),
        l = String.fromCharCode,
        h =
          "function" == typeof e.btoa
            ? function(n) {
                return e.btoa(n);
              }
            : function(n) {
                return n.replace(/[\s\S]{1,3}/g, i);
              },
        v =
          "function" == typeof e.atob
            ? function(n) {
                return e.atob(n);
              }
            : function(n) {
                return n.replace(/[\s\S]{1,4}/g, g);
              },
        m = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}/g,
        g = function(n) {
          var e = n.length,
            t = e % 4,
            r =
              (0 < e ? d[n.charAt(0)] << 18 : 0) |
              (1 < e ? d[n.charAt(1)] << 12 : 0) |
              (2 < e ? d[n.charAt(2)] << 6 : 0) |
              (3 < e ? d[n.charAt(3)] : 0),
            i = [l(r >>> 16), l((r >>> 8) & 255), l(255 & r)];
          return (i.length -= [0, 0, 2, 1][t]), i.join("");
        };
      n.Base64 = {
        atob: v,
        btoa: h,
        fromBase64: s,
        toBase64: a,
        bytesToBase64: function(n) {
          for (var e, t = "", r = 0; r < n.length; r += 3)
            (e = (252 & n[r]) >> 2),
              (t += f.charAt(e)),
              (e = (3 & n[r]) << 4),
              r + 1 < n.length
                ? ((e |= (240 & n[r + 1]) >> 4),
                  (t += f.charAt(e)),
                  (e = (15 & n[r + 1]) << 2),
                  r + 2 < n.length
                    ? ((e |= (192 & n[r + 2]) >> 6),
                      (t += f.charAt(e)),
                      (e = 63 & n[r + 2]),
                      (t += f.charAt(e)))
                    : ((t += f.charAt(e)), (t += "=")))
                : ((t += f.charAt(e)), (t += "=="));
          return t;
        },
        utob: r,
        encode: a,
        encodeURI: function(n) {
          return a(n, !0);
        },
        btou: c,
        decode: s,
      };
    })(self, void 0 !== B ? B : {}),
    void 0 !== n && (w = Je(F)),
    (Ke.prototype = {
      toJSON: function() {
        if (!(this instanceof Ke)) throw new Error("Illegal invocation");
        return Qe(this, this);
      },
    }),
    (Ye.prototype =
      ((h = Object.create(Ke.prototype)),
      (Ye.prototype.constructor = Ye),
      (h.toString = function() {
        return this.type;
      }),
      (h.setExtraInfo = function(n, e) {
        E.isUndefined(e)
          ? logger.error(
              "Failed setting value for extra info attribute: " +
                n +
                ". Value is undefined"
            )
          : (E.isUndefined(this.extraInfo) && (this.extraInfo = {}),
            (this.extraInfo[n] = e));
      }),
      (h.getExtraInfo = function(n) {
        if (E.isUndefined(this.extraInfo)) return null;
        var e = this.extraInfo[n];
        return void 0 === e ? null : e;
      }),
      (h.setDebugInfo = function(n) {
        E.isUndefined(this.debugInfo) && (this.debugInfo = {}),
          (this.debugInfo = n);
      }),
      (h.getDebugInfo = function() {
        return this.debugInfo;
      }),
      (h.getSubPage = function() {
        return this.subPage;
      }),
      (h.addHybridActionDataItem = function(n, e) {
        E.isUndefined(e)
          ? logger.error(
              "Failed setting value for hybrid action data item: " +
                n +
                ". Value is undefined"
            )
          : (E.isUndefined(this.hybridActionData) &&
              (this.hybridActionData = {}),
            (this.hybridActionData[n] = e));
      }),
      (h.getdHybridActionData = function() {
        return this.hybridActionData;
      }),
      (h.nextId = 1),
      h)),
    (Ye.fromJSON = function(n) {
      return (n.constructor = Ye), Object.setPrototypeOf(n, Ye.prototype), n;
    }),
    (Ye.prototype.FOCUS_TIME_ATTR = "focusTime"),
    (Ye.prototype.AUTO_COMPLETE_ATTR = "autoComplete"),
    (Ye.prototype.VISUAL_NAME = "visualName"),
    (Ye.prototype.PAGE_NAME = "pageName"),
    (Ye.prototype.WINDOW_DEPTH = "windowDepth"),
    (Ye.prototype.CONTAINER_ID = "containerId"),
    (Ye.prototype.PARENT_PAGE_ID = "parentPageId"),
    (Ye.prototype.HISTORY_LENGTH = "historyLen"),
    (Ye.prototype.TIME_SINCE_LAST_EVENT = "timeSinceLastIdle"),
    (Ye.prototype.COORDINATE_ATTR = "coordinate"),
    (Ye.prototype.SCROLL_REACH = "scrollReach"),
    (Ye.prototype.MOVES_TRUNCATED = "truncated"),
    (Ye.prototype.LOST_EVENTS_NUM = "lostEvents"),
    (Ye.prototype.TP_INTEGRATION_TYPE = "tpIntegrationType"),
    (Ye.prototype.EXTERNAL_ID = "externalId"),
    (Ye.prototype.SYNC_COORDINATE = "syncCoordinates"),
    (Ye.prototype.RAGE_SEQUENCE = "rageSequence"),
    (Ye.prototype.INDEX_IN_RAGE = "indexInRage"),
    (Ye.prototype.ZOOM = "zoom"),
    (Ye.prototype.MOBILE_HYBRID_ID = "mobileHybridId"),
    (Ye.prototype.DETECTOR_CONFIG_ID = "detectorCfg"),
    (Ye.prototype.AUTO_MASKING = "autoMasking"),
    (Ye.prototype.SCROLL_DEBOUNCED = "scrollDebounced"),
    (Ye.prototype.HOST_SELECTOR_PATH = "hostSelectorPath"),
    (Ye.prototype.SNAPSHOT_FUSE = "snapshotFuse"),
    (Ye.prototype.SELECTOR_ACTION_COUNT = "selectorActionCount"),
    (Ye.prototype.DEBUG_UNCONFIRMED_BEACONS = "unconfirmedBeacons"),
    (Ye.prototype.FINAL_CANCELLATION = "finalCancellation"),
    (Ye.prototype.ABORT_ON_TIMEOUT = "abortOnTimeout"),
    (Ye.prototype.DEBUG_STORAGE_PENDING = "storagePendingBeacons"),
    (Ye.prototype.FAIL_REQUEST_STATUS = "failedWithStatus"),
    (Ye.prototype.FAILED_STORAGE_FLUSH_BEACONS = "failedStorageFlushBeacons"),
    (Ye.prototype.STORAGE_SIZE_EXCEED = "storageSizeExceed"),
    (Ye.prototype.FAILED_SEND_FROM_STORAGE = "failedSendFromStorage"),
    (Ye.prototype.SENDING_FROM_STORAGE = "sendingFromStorage"),
    (Ye.prototype.RETRIED = "failed"),
    (Ye.prototype.DEVTOOLS_VALUES = "devToolsValues"),
    (Ye.prototype.DEBUG_PAGE_SN = "pageSn"),
    (Ye.prototype.DEBUG_BROWSER_TAB_ID = "browserTabId"),
    (Ye.prototype.USING_WORKER = "usingWorker"),
    (Ye.prototype.NAVIGATION_TIMING = "navigationTiming"),
    (Ye.prototype.CURRENT_VALUE = "currentValue"),
    (Ye.prototype.OLD_VALUE = "oldValue"),
    void 0 !== w &&
      (Ye.prototype.extraInfoAttrs = [
        {
          name: Ye.prototype.FOCUS_TIME_ATTR,
          encodeName: "ft",
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.AUTO_COMPLETE_ATTR,
          encodeName: "ac",
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.VISUAL_NAME,
          encodeName: "vn",
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.PAGE_NAME,
          encodeName: Ye.prototype.PAGE_NAME,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.WINDOW_DEPTH,
          encodeName: Ye.prototype.WINDOW_DEPTH,
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.CONTAINER_ID,
          encodeName: Ye.prototype.CONTAINER_ID,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.PARENT_PAGE_ID,
          encodeName: Ye.prototype.PARENT_PAGE_ID,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.HISTORY_LENGTH,
          encodeName: Ye.prototype.HISTORY_LENGTH,
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.TIME_SINCE_LAST_EVENT,
          encodeName: "tl",
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.COORDINATE_ATTR,
          encodeName: "co",
          encodeFunc: w.encodeCoordinate64,
          encodeCode: _.dictionary.encodeEncodingType("cd_coordinate"),
        },
        {
          name: Ye.prototype.SCROLL_REACH,
          encodeName: "sr",
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.MOVES_TRUNCATED,
          encodeName: "tr",
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.LOST_EVENTS_NUM,
          encodeName: "le",
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.TP_INTEGRATION_TYPE,
          encodeName: "tp",
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.EXTERNAL_ID,
          encodeName: "ei",
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.SYNC_COORDINATE,
          encodeName: "sy",
          encodeFunc: w.encodeCoordinate64,
          encodeCode: _.dictionary.encodeEncodingType("cd_coordinate"),
        },
        {
          name: Ye.prototype.RAGE_SEQUENCE,
          encodeName: Ye.prototype.RAGE_SEQUENCE,
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.INDEX_IN_RAGE,
          encodeName: Ye.prototype.INDEX_IN_RAGE,
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.ZOOM,
          encodeName: "zo",
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.MOBILE_HYBRID_ID,
          encodeName: Ye.prototype.MOBILE_HYBRID_ID,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.DETECTOR_CONFIG_ID,
          encodeName: Ye.prototype.DETECTOR_CONFIG_ID,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.AUTO_MASKING,
          encodeName: Ye.prototype.AUTO_MASKING,
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.SCROLL_DEBOUNCED,
          encodeName: Ye.prototype.SCROLL_DEBOUNCED,
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.HOST_SELECTOR_PATH,
          encodeName: Ye.prototype.HOST_SELECTOR_PATH,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.SELECTOR_ACTION_COUNT,
          encodeName: Ye.prototype.SELECTOR_ACTION_COUNT,
          encodeFunc: w.encodeNumber,
          encodeCode: _.dictionary.encodeEncodingType("cd_number"),
        },
        {
          name: Ye.prototype.DEBUG_UNCONFIRMED_BEACONS,
          encodeName: Ye.prototype.DEBUG_UNCONFIRMED_BEACONS,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.FINAL_CANCELLATION,
          encodeName: Ye.prototype.FINAL_CANCELLATION,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.ABORT_ON_TIMEOUT,
          encodeName: Ye.prototype.ABORT_ON_TIMEOUT,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.DEBUG_STORAGE_PENDING,
          encodeName: Ye.prototype.DEBUG_STORAGE_PENDING,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.FAIL_REQUEST_STATUS,
          encodeName: Ye.prototype.FAIL_REQUEST_STATUS,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.FAILED_STORAGE_FLUSH_BEACONS,
          encodeName: Ye.prototype.FAILED_STORAGE_FLUSH_BEACONS,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.STORAGE_SIZE_EXCEED,
          encodeName: Ye.prototype.STORAGE_SIZE_EXCEED,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.FAILED_SEND_FROM_STORAGE,
          encodeName: Ye.prototype.FAILED_SEND_FROM_STORAGE,
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.SENDING_FROM_STORAGE,
          encodeName: Ye.prototype.SENDING_FROM_STORAGE,
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.RETRIED,
          encodeName: Ye.prototype.RETRIED,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.DEVTOOLS_VALUES,
          encodeName: Ye.prototype.DEVTOOLS_VALUES,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.DEBUG_PAGE_SN,
          encodeName: Ye.prototype.DEBUG_PAGE_SN,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.DEBUG_BROWSER_TAB_ID,
          encodeName: Ye.prototype.DEBUG_BROWSER_TAB_ID,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.USING_WORKER,
          encodeName: Ye.prototype.USING_WORKER,
          encodeFunc: w.encodeBoolean,
          encodeCode: _.dictionary.encodeEncodingType("cd_boolean"),
        },
        {
          name: Ye.prototype.NAVIGATION_TIMING,
          encodeName: Ye.prototype.NAVIGATION_TIMING,
          encodeFunc: w.encodeNavigationTiming.bind(null, "_"),
          encodeCode: _.dictionary.encodeEncodingType("cd_navtiming"),
        },
        {
          name: Ye.prototype.OLD_VALUE,
          encodeName: Ye.prototype.OLD_VALUE,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.CURRENT_VALUE,
          encodeName: Ye.prototype.CURRENT_VALUE,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
        {
          name: Ye.prototype.SNAPSHOT_FUSE,
          encodeName: Ye.prototype.SNAPSHOT_FUSE,
          encodeFunc: w.encodeString,
          encodeCode: _.dictionary.encodeEncodingType("cd_string"),
        },
      ]),
    ($e.prototype =
      ((v = Object.create(Ke.prototype)),
      ($e.prototype.constructor = $e),
      (v.toString = function() {
        return (
          "EventSet {id:" + this.id + " Events:" + this.events.length + "}"
        );
      }),
      v)),
    ($e.fromJSON = function(n) {
      return (
        (n.constructor = $e),
        Object.setPrototypeOf(n, $e.prototype),
        n.events.forEach(function(n) {
          Ye.fromJSON(n);
        }),
        n
      );
    }),
    ($e.reduceByMetadata = function(n) {
      for (var e, t = 1, r = {}, i = 0; i < n.length; i++)
        (n[i].metadata._id = n[i].metadata._id || t++),
          r[(e = n[i].metadata._id)]
            ? Array.prototype.push.apply(r[e].events, n[i].events)
            : (r[e] = n[i]);
      var o = [];
      for (e in r) r.hasOwnProperty(e) && o.push(r[e]);
      return o;
    }),
    void 0 !== n &&
      (m = (function(n, s) {
        var e,
          t =
            "object" == typeof n.glassboxMobileBridge &&
            "function" == typeof n.glassboxMobileBridge.getContext
              ? n.glassboxMobileBridge.getContext()
              : L;
        if ("string" == typeof t)
          try {
            e = JSON.parse(t);
          } catch (n) {}
        return {
          sessionId: (e = e || {}).sessionId,
          config: e.config || {},
          override: function(n, e, t) {
            var r,
              i,
              o,
              a = n,
              u = e,
              c = "reportURI";
            return (
              ("mobileReportURI" !== n && c !== n) ||
                ((r = t[c]) !== L &&
                  ((a = c),
                  (i = s.extractOrigin(r)),
                  (o = 0 === u.indexOf("http") ? s.extractPath(u) : u),
                  (u = i.concat(o)))),
              { key: a, value: u }
            );
          },
        };
      })(n, B)),
    (nt.prototype.add = function(n, e) {
      return this._updates.push({ ref: e, update: n }), this;
    }),
    (Ze.INITIAL_COMPRESSION_FACTOR = 0.25),
    (Ze.MINIMAL_COMPRESSION_FACTOR = 0.05),
    ((b = {
      idle: "encodeNumber",
      document: "encodePageDetails",
      segmentChanged: "encodeSegmentChanged",
      lastSegment: "encodeSegmentChanged",
      pageSnapshot: "encodePageSnapshotData",
      devToolsVisibilityChanged: "encodeBoolean",
      webStruggle: "encodeStruggles",
      ajaxRequest: "encodeAjaxRequest",
      ajaxStats: "encodeAjaxStats",
      hover: "encodeHoverEvent",
      custom: "encodeKeyValue",
      thirdpartymap: "encodeKVMap",
      thirdPartyAttribute: "encodeThirdPartyAttributes",
      abTesting: "encodeABTesting",
      resourceContent: "encodeResourceContent",
      clientAttribute: "encodeKeyValue",
      waterfall: "encodeWaterfallTiming",
      performance: "encodePerformanceTimings",
      timing: "encodeTimings",
      resize: "encodeResize",
      submit: "encodeHashCode",
      touchmove: "encodeClickDetails",
      touchend: "encodeClickDetails",
      drag: "encodeClickDetails",
      mousemove: "encodeMouseMove",
      mouseover: "encodeHoverEvent",
      scroll: "encodeCoordinate",
      keydown: "encodeKeyEvent",
      keypress: "encodeKeyEvent",
    })[_.mouseEvents.up] = "encodeClickDetails"),
    (rt.COMPRESSED_INDICATION_CHARSET = "ISO-8859-15"),
    (rt.MINIMAL_COMPRESSION_FACTOR = 0.05),
    e
      ? (function(d, l) {
          var h = { incomingEventMessages: 0 };
          d[l] = { state: "INIT", stats: h };
          var i,
            r,
            v = {
              onBeaconDispatched: function(n, e) {
                i.postMessage({
                  type: "beaconSent",
                  sn: n,
                  encodedLength: e.length,
                });
              },
              onBeaconResponse: function(n, e, t, r) {
                i.postMessage({
                  type: "onBeaconResponse",
                  pageId: n,
                  beaconData: e,
                  success: t,
                  requestStatus: r,
                });
              },
              onWorkerReady: function() {
                i.postMessage({ type: "ready" });
              },
              onNewConfig: function(n) {
                i.postMessage({ type: "newConfig", config: n });
              },
            },
            m =
              ((r = {}),
              (i = d).addEventListener(
                "message",
                function(n) {
                  var e = n.data,
                    t = r[e.type];
                  t && t.apply(null, e.args);
                },
                !1
              ),
              {
                on: function(n, e) {
                  r[n] = e;
                },
              });
          m.on("init", function(n, e, t) {
            w = Je(n);
            var r = {
                getKeyInfo: function() {
                  return t;
                },
                stringIsEncrypted: function(n) {
                  return B.startsWith(n, _.encryptionPrefix);
                },
              },
              i = new At(_.detectorVersion, n.reportAddUriParams),
              o = Tt(self, !1, !1, !1),
              a = it(w, d.navigator, r, e, n),
              u = new Ht({}, v.onBeaconResponse),
              c = new vr(
                a,
                i,
                o,
                logger,
                u.onReporterMessage.bind(u),
                v.onNewConfig,
                n
              ),
              s = new qt(c, u, a, d[l].stats, n),
              f = new $t(
                { on: function() {}, off: function() {}, emit: function() {} },
                a,
                c,
                s,
                !0,
                {
                  track: function() {},
                  untrack: function() {},
                  packageEventSets: function() {},
                },
                v.onBeaconDispatched,
                n.reportMaxConcurrency
              );
            m.on("encodeAndDispatch", function(n, e, t) {
              h.incomingEventMessages++;
              var r = n.map(function(n) {
                return $e.fromJSON(n);
              });
              f.encodeAndDispatch(r, e, t);
            }),
              m.on("restoreState", function(n, e) {
                h.incomingEventMessages++, s.restoreState(n, e);
              }),
              (d[l].state = "READY"),
              v.onWorkerReady();
          });
        })(n, i)
      : ((g = ","),
        void 0 !== _ &&
          _.detectorScript &&
          (g = _.detectorScript.getAttribute("data-clsarraydelim") || g),
        (p = function(n, e) {
          if ("TRUE" === n.toUpperCase()) return !0;
          if ("FALSE" === n.toUpperCase()) return !1;
          throw "cannot parse boolean from '" + n + "'";
        }),
        (y = function(n) {
          var e = (-1 === n.indexOf(".") ? parseInt : parseFloat)(n);
          if (isNaN(e)) throw "cannot parse number from '" + n + "'";
          return e;
        }),
        (C = function(n) {
          return n;
        }),
        (S = function(n) {
          return null == n ? [] : n.split(g);
        }),
        (T = function(n) {
          return (Array.isArray
          ? Array.isArray(n)
          : n instanceof Array)
            ? null
            : "array is expected";
        }),
        (k = function(n, e) {
          for (var t = 0; t < e.length; t++)
            if (typeof e[t] !== n)
              return (
                "array element type mismatch. expected:" +
                n +
                " actual:" +
                typeof e[t]
              );
          return null;
        }),
        (x = function() {
          var r = arguments;
          return function(n) {
            for (var e = 0; e < r.length; e++) {
              var t = r[e](n);
              if (null != t) return t;
            }
            return null;
          };
        }),
        (ot.prototype.ignore = function(n) {
          this[n.toLowerCase()] = { name: n, ignore: !0 };
        }),
        (I = {
          options: {
            caseSensitive: !0,
            errorOnUnknown: !(ot.newBuilder = function() {
              var t = new ot();
              return {
                bool: function(n, e) {
                  return t.add("boolean", !1, p, null, n, e), this;
                },
                num: function(n, e) {
                  return t.add("number", !1, y, null, n, e), this;
                },
                str: function(n, e) {
                  return t.add("string", !0, C, null, n, e), this;
                },
                strarray: function(n, e) {
                  return (
                    t.add(
                      "object",
                      !0,
                      S,
                      x(T, function(n) {
                        return k("string", n);
                      }),
                      n,
                      e
                    ),
                    this
                  );
                },
                objarray: function(n, e) {
                  return (
                    t.add(
                      "object",
                      !0,
                      S,
                      x(T, function(n) {
                        return k("object", n);
                      }),
                      n,
                      e
                    ),
                    this
                  );
                },
                ignore: function(n) {
                  return t.ignore(n), this;
                },
                build: function() {
                  return t;
                },
              };
            }),
          },
          validate: function(n, e) {
            var t = new at();
            if (this.parsingError) return t.addError(I.parsingError), t;
            e = e || {};
            var r,
              i = n.requiredFieldsMask();
            for (r in e)
              if (e.hasOwnProperty(r)) {
                var o = n[r.toLowerCase()];
                if (!o) {
                  (I.options.errorOnUnknown ? t.addError : t.addWarning).call(
                    t,
                    "unknown configuration field",
                    r
                  );
                  continue;
                }
                if (o.ignore) continue;
                if (o.name !== r && I.options.caseSensitive) {
                  t.addError(
                    "unknown configuration field (did you mean '" +
                      o.name +
                      "'?).",
                    r
                  ),
                    delete i[o.name];
                  continue;
                }
                var a,
                  u = e[r];
                if (null === u || u === L) {
                  o.nullable ||
                    t.addError(
                      "value cannot be null, value of " +
                        o.type +
                        " type is expected.",
                      r
                    );
                  continue;
                }
                if (typeof u !== o.type) {
                  t.addError(
                    "value type mismatch. expected:" +
                      o.type +
                      " actual:" +
                      typeof u,
                    r
                  );
                  continue;
                }
                o.required && delete i[o.name],
                  !o.validator ||
                    ((a = o.validator(u)) &&
                      t.addError("value violation, " + a, r));
              }
            for (r in i)
              i.hasOwnProperty(r) && t.addError("missing required field", r);
            return t;
          },
          onParsingError: function(n) {
            I.parsingError = n;
          },
        }),
        (at.prototype.addError = function(n, e) {
          this.errors.push({ field: e, reason: n });
        }),
        (at.prototype.addWarning = function(n, e) {
          this.warnings.push({ field: e, reason: n });
        }),
        (at.prototype.toString = function() {
          function n(n) {
            var e = "",
              t = 0;
            return t < n.length
              ? e +
                  ("\n" +
                    (n[t].field ? "'" + n[t].field + "': " : "") +
                    n[t].reason)
              : e;
          }
          var e = "\n" + this.errors.length + " error(s):";
          return (
            (e += n(this.errors)),
            (e += "\n" + this.warnings.length + " warning(s):"),
            (e += n(this.warnings))
          );
        }),
        (M = function(n, e, t, r, i) {
          function o(n) {
            return "function" != typeof String.prototype.trim
              ? n.replace(/^\s+|\s+$/g, "")
              : n.trim();
          }
          n = n || {};
          for (var a = null != t ? t.split(e) : [], u = 0; u < a.length; u++) {
            var c = a[u].split("=");
            if (2 === c.length) {
              var s,
                f = o(c[0]),
                d = o(c[1]),
                l = n[f.toLowerCase()];
              (!l || void 0 === (s = l.parser)) && (s = C);
              try {
                r[f] = s(d);
              } catch (n) {
                i && i("'" + f + "': " + n);
              }
            }
          }
        }),
        (R = ot
          .newBuilder()
          .ignore("injectionTime")
          .ignore("visualName")
          .ignore("detectionScriptURI")
          .str("reportURI", !0)
          .str("configPath", !1)
          .bool("recordMouseMoves", !1)
          .bool("recordScrolls", !1)
          .bool("recordErrors", !1)
          .bool("reportValidationErrors", !1)
          .bool("domFormValidationTracking", !1)
          .num("domFormValidationRedComponentMin", !1)
          .num("domFormValidationRedComponentDelta", !1)
          .strarray("domFormValidationSubmissionIds", !1)
          .strarray("domFormValidationAdditionalTagNames", !1)
          .num("idleEventTimeInterval", !1)
          .bool("botDetection", !1)
          .bool("recordHovers", !1)
          .bool("reportByPost", !1)
          .num("maxPostReportSize", !1)
          .num("reportPostInterval", !1)
          .bool("reportPostRetry", !1)
          .num("reportMaxRetries", !1)
          .num("reportAbortAfter", !1)
          .bool("reportUseWorker", !1)
          .bool("DOMBeaconImg", !1)
          .num("reportInterval", !1)
          .num("maxReportSize", !1)
          .strarray("maskList", !1)
          .strarray("maskWhitelistValueById", !1)
          .strarray("maskBlacklistValueById", !1)
          .strarray("maskClassList", !1)
          .strarray("maskWhitelistValueByClass", !1)
          .strarray("maskBlacklistValueByClass", !1)
          .strarray("valueWhitelistMaskSimpleSelector", !1)
          .strarray("valueBlacklistMaskSimpleSelector", !1)
          .str("valueMaskIgnoreAttribute", !1)
          .bool("maskTitle", !1)
          .strarray("encryptionList", !1)
          .strarray("encryptionClassList", !1)
          .strarray("valueEncryptById", !1)
          .strarray("valueEncryptByClass", !1)
          .str("externalIdAttr", !1)
          .str("valueMaskingCharNumericLike", !1)
          .str("valueMaskingCharNumeric", !1)
          .strarray("valueMaskByCategories", !1)
          .bool("useIdSelectors", !1)
          .bool("useNameInFormSelectors", !1)
          .bool("preferNamesInFormSelectors", !1)
          .strarray("noIdSelectorsForClassNames", !1)
          .strarray("noIdSelectorsForIDs", !1)
          .strarray("noIdSelectorsForAttrs", !1)
          .bool("SCIntegration", !1)
          .strarray("SCIntegrationURLsContainList", !1)
          .strarray("SCIntegrationKeyList", !1)
          .bool("interceptThirdPartyAttributes", !1)
          .bool("interceptABTesting", !1)
          .bool("reportAllResourcesLoad", !1)
          .bool("reportExternalResources", !1)
          .strarray("ignoreReportResourcesByTagNames", !1)
          .num("reportMaxConcurrency", !1)
          .str("externalReporterObject", !1)
          .bool("debugMode", !1)
          .bool("traceMode", !1)
          .bool("suppressMouseMovesDebug", !1)
          .bool("visualNameDebug", !1)
          .bool("timingMode", !1)
          .num("minDragPixels", !1)
          .bool("reportVisualNames", !1)
          .num("titleCharsLimit", !1)
          .num("maxTimeForIdleEvent", !1)
          .num("validationValueForRenderTime", !1)
          .bool("reportDebugInfo", !1)
          .str("externalIdByClassesOnPrefix", !1)
          .bool("supportNativeAutoComplete", !1)
          .bool("recordEnterForInputs", !1)
          .bool("recordTypingAll", !1)
          .strarray("recordTypingForAttrs", !1)
          .strarray("recordTypingForClasses", !1)
          .strarray("recordTypingForIDs", !1)
          .num("mmMaxMovesWithUnload", !1)
          .num("mmMaxMovesInEventNoTimes", !1)
          .num("mmMaxMovesInEventWithTimes", !1)
          .num("mmMinStallingMoveTime", !1)
          .num("mmMaxInMemoryMoves", !1)
          .bool("mmDebug", !1)
          .num("mhDeepLevel", !1)
          .num("mhMaxListSize", !1)
          .num("mhMaxInMemeoryHovers", !1)
          .bool("mhDebug", !1)
          .num("minStallingScrollTime", !1)
          .bool("scrollDebug", !1)
          .bool("clsDebug", !1)
          .num("clsDebugCharsLimit", !1)
          .num("clsDebugMaxReports", !1)
          .bool("domRecordEnabled", !1)
          .bool("recordShadowDom", !1)
          .strarray("domNewPageTriggers", !1)
          .strarray("pageSnapshotTriggers", !1)
          .num("domStartAfter", !1)
          .num("domUpdateEveryWsMsgIn", !1)
          .num("domRecordEnabledByChance", !1)
          .str("domReportURI", !1)
          .bool("domCompress", !1)
          .strarray("domNewPageAjaxTriggers", !1)
          .strarray("domIgnoredFormElements", !1)
          .bool("domIncludeSelectorOnUpdate", !1)
          .bool("semiDomEnabled", !1)
          .bool("domRecordCssRules", !1)
          .bool("domPreciseStyleSheetCloning", !1)
          .bool("domThrottleChanges", !1)
          .strarray("ignorableElementIds", !1)
          .bool("recordAjaxCallsAnyway", !1)
          .bool("truncateEventsWithUnload", !1)
          .bool("mmRecordTimes", !1)
          .num("mmDiluteMinPixels", !1)
          .bool("reportHybrid", !1)
          .str("customTLD", !1)
          .num("enabledByChance", !1)
          .strarray("domCloningBannedIds", !1)
          .strarray("domCloningBannedClasses", !1)
          .str("reportEncoding", !1)
          .bool("reportCompress", !1)
          .bool("cordovaSdkReporting", !1)
          .str("maskingMode", !1)
          .str("valueMaskingMode", !1)
          .str("domMaskingMode", !1)
          .str("encryptionMode", !1)
          .str("valueEncryptionMode", !1)
          .strarray("reportAddUriParams", !1)
          .bool("recordConsoleErrors", !1)
          .strarray("domMaskContentById", !1)
          .strarray("domBlacklistMaskContentById", !1)
          .strarray("domWhitelistMaskContentById", !1)
          .strarray("domMaskContentByClass", !1)
          .strarray("domBlacklistMaskContentByClass", !1)
          .strarray("domWhitelistMaskContentByClass", !1)
          .strarray("domOmitById", !1)
          .strarray("domOmitByClass", !1)
          .strarray("domOmitObjectElementsByType", !1)
          .strarray("domMaskOmitById", !1)
          .strarray("domMaskOmitByClass", !1)
          .strarray("domMaskedAttributes", !1)
          .strarray("domMaskAttributesByTag", !1)
          .str("domMaskIgnoreAttribute", !1)
          .strarray("domMaskSimpleSelector", !1)
          .strarray("domBlacklistMaskSimpleSelector", !1)
          .strarray("domWhitelistMaskSimpleSelector", !1)
          .strarray("domEncryptById", !1)
          .strarray("domEncryptByClass", !1)
          .str("encryptionPublicKey", !1)
          .str("encryptionKeyId", !1)
          .num("encryptionTimeout", !1)
          .bool("reportPreferSendBeaconAPI", !1)
          .bool("domKeepComments", !1)
          .str("domKeepScriptMatching", !1)
          .num("domExpireSnapshotAfter", !1)
          .bool("reportCorsForceSafelistedHeaders", !1)
          .bool("reportDisableCors", !1)
          .strarray("reportCorsTakeNativeCookies", !1)
          .strarray("maskCookies", !1)
          .strarray("maskQueryParameters", !1)
          .strarray("reportStorageBackedForUA", !1)
          .bool("reportViaTopWindow", !1)
          .bool("reportAddUriParamAPI", !1)
          .bool("storageBackedReporting", !1)
          .bool("externalReporting", !1)
          .bool("domOmitAfterUnload", !1)
          .bool("duplicateIdCheck", !1)
          .strarray("domPartialWhenLocationContains", !1)
          .strarray("blackoutWhenLocationContains", !1)
          .bool("iframesAutoInject", !1)
          .str("iframesAutoInjectMode", !1)
          .bool("iframesRecordEnabled", !1)
          .str("iframesParentOrigin", !1)
          .num("iframesHandshakeTimeout", !1)
          .bool("iframesDebugEnabled", !1)
          .bool("iframesSkipHidden", !1)
          .bool("iframesDisableNotifications", !1)
          .bool("iframesDirectChannel", !1)
          .strarray("iframesDirectChannelWhenUriContains", !1)
          .strarray("iframesSkipWhenLocationContains", !1)
          .strarray("iframesBlackoutWhenLocationContains", !1)
          .bool("blackoutIdleReporting", !1)
          .bool("reportIncludeReferrer", !1)
          .str("mobileHybridId", !1)
          .bool("interceptAjax", !1)
          .bool("ajaxDebug", !1)
          .bool("ajaxHashRecurrentUrls", !1)
          .str("ajaxRecordMetadata", !1)
          .str("ajaxRecordResponseBody", !1)
          .str("ajaxRecordResponseHeaders", !1)
          .str("ajaxRecordRequestBody", !1)
          .str("ajaxRecordRequestHeaders", !1)
          .str("ajaxRecordStats", !1)
          .strarray("ajaxStatsQueryParams", !1)
          .num("ajaxRecordSessionLimit", !1)
          .bool("ajaxCaptureRequestCookie", !1)
          .objarray("ajaxMaskRequestBody", !1)
          .objarray("ajaxMaskResponseBody", !1)
          .bool("reportCreateSubSessionCookie", !1)
          .bool("resourcesRecordEnabled", !1)
          .bool("resourceRecordCssOnly", !1)
          .bool("resourcesRecordAllowCors", !1)
          .num("resourcesRecordCount", !1)
          .num("resourcesRecordChance", !1)
          .strarray("resourceIgnoreWhenUrlContains", !1)
          .bool("resourceTimingRecordEnabled", !1)
          .num("resourceTimingRecordEnabledByChance", !1)
          .bool("clientAttributesEnabled", !1)
          .num("clientAttributeMaxLength", !1)
          .bool("domIE11ForceMutationObserver", !1)
          .str("detectorTagId", !1)
          .bool("cookieAssignFQDN", !1)
          .num("cookieTLDSegmentCount", !1)
          .str("sessionIdByQueryParam", !1)
          .str("visitorIdByQueryParam", !1)
          .str("domIdentifyingAttribute", !1)
          .bool("sendStateInfo", !1)
          .num("debounceScrolls", !1)
          .bool("domHashTokens", !1)
          .bool("ccAutoMask", !1)
          .bool("ccAutoMaskByContent", !1)
          .strarray("ccAutoMaskFields", !1)
          .num("ccAutoMaskKeepLastDigits", !1)
          .bool("ccForceMaskContainer", !1)
          .str("domTokenizationVersion", !1)
          .strarray("captureGlobalObjects", !1)
          .bool("captureGlobalObjectsEmptyStrings", !1)
          .bool("captureGlobalObjectsOnSegmentChange", !1)
          .bool("domIEForceStyleCopyByRules", !1)
          .bool("domFormValidationAllowFormLevel", !1)
          .strarray("segmentationTriggerBySimpleSelector", !1)
          .strarray("segmentationLabelBySimpleSelector", !1)
          .str("segmentationLabelByAttribute", !1)
          .str("segmentationTitleByAttribute", !1)
          .str("segmentationPrefix", !1)
          .str("segmentationIgnoreWhenLocationContains", !1)
          .bool("recordSpaLoadTime", !1)
          .bool("collectStruggles", !1)
          .bool("collectFormStruggles", !1)
          .num("struggleMaxLongFocusTime", !1)
          .num("struggleRageClickInterval", !1)
          .num("struggleRageClickMinCount", !1)
          .bool("struggleCaptureDeadClick", !1)
          .num("struggleDeadClickInterval", !1)
          .bool("struggleCaptureErrorClick", !1)
          .num("struggleErrorClickInterval", !1)
          .bool("struggleCaptureAjaxErrors", !1)
          .bool("struggleCaptureHorizontalScrollbar", !1)
          .bool("struggleCaptureBlankPage", !1)
          .bool("domTamperingDetectionEnabled", !1)
          .bool("devToolsDetectionEnabled", !1)
          .str("devToolsDetectionMessage", !1)
          .bool("domThrottleChanges", !1)
          .bool("domThrottleChangesIE11Only", !1)
          .num("visualNameLimit", !1)
          .num("maxRecordedCountPerError", !1)
          .bool("useExtension", !1)
          .str("forceRenderingFixForUA", !1)
          .bool("pageNameResolvingEnabled", !1)
          .strarray("pageNameResolvingByElements", !1)
          .num("domFuseDuration", !1)
          .num("domFuseElementCount", !1)
          .num("domFuseDurationIE", !1)
          .num("domFuseElementCountIE", !1)
          .build()),
        _.detectorScript &&
          ((A = _.detectorScript.getAttribute("data-clsdelim") || ";"),
          (N = _.detectorScript.getAttribute("data-clsconfig")) &&
            M(R, A, N, F, I.onParsingError)),
        (D = window._cls_config || window._config || {}),
        ct(F, D),
        ct(F, window._cls_config_forced),
        (F.maskingMode ||
          st(
            F.domMaskContentById,
            F.domMaskContentByClass,
            F.domMaskSimpleSelector,
            F.maskList,
            F.maskClassList
          )) &&
          ((F.valueMaskingMode = F.maskingMode
            ? F.maskingMode
            : F.valueMaskingMode || _.censorMode.BlackList),
          (F.domBlacklistMaskContentById = F.domMaskContentById || []),
          (F.domWhitelistMaskContentById = F.domMaskContentById || []),
          (F.domBlacklistMaskContentByClass = F.domMaskContentByClass || []),
          (F.domWhitelistMaskContentByClass = F.domMaskContentByClass || []),
          (F.domBlacklistMaskSimpleSelector = F.domMaskSimpleSelector || []),
          (F.domWhitelistMaskSimpleSelector = F.domMaskSimpleSelector || []),
          (F.maskBlacklistValueById = F.maskList || []),
          (F.maskWhitelistValueById = F.maskList || []),
          (F.maskBlacklistValueByClass = F.maskClassList || []),
          (F.maskWhitelistValueByClass = F.maskClassList || [])),
        (F.valueMaskingMode = F.valueMaskingMode || _.censorMode.WhiteList),
        (F.domPreciseStyleSheetCloning =
          F.domPreciseStyleSheetCloning || !!F.domIEForceStyleCopyByRules),
        (F.reportPostRetry = F.reportPostRetry || !!F.postRetry),
        (F.encryptionMode || st(F.encryptionList, F.encryptionClassList)) &&
          ((F.valueEncryptionMode = F.encryptionMode
            ? F.encryptionMode
            : F.valueEncryptionMode || _.censorMode.BlackList),
          (F.valueEncryptById = F.encryptionList || []),
          (F.valueEncryptByClass = F.encryptionClassList || [])),
        F.reportAddUriParamAPI &&
          ((F.reportAddUriParams = F.reportAddUriParams || []),
          F.reportAddUriParams.push("api")),
        (function(n) {
          var e = F.reportToStorageAfterUnload,
            t =
              F.reportPreferSendBeaconAPI &&
              "function" != typeof navigator.sendBeacon;
          if (!e && F.reportStorageBackedForUA && !t)
            for (var r = 0; r < F.reportStorageBackedForUA.length; r++)
              try {
                if (
                  new RegExp(F.reportStorageBackedForUA[r], "gi").exec(
                    n.navigator.userAgent
                  )
                ) {
                  e = !0;
                  break;
                }
              } catch (n) {}
          e && (F.storageBackedReporting = !0);
        })(window),
        (j = window),
        F.externalReporterObject &&
          j[F.externalReporterObject] &&
          ((F.externalReporting = !0),
          (F.reportDisableCors = !0),
          F.reportUseWorker && (F.reportUseWorker = !1)),
        ct(F, m.config, m.override),
        F.domRecordEnabled &&
          void 0 !== F.domRecordEnabledByChance &&
          ((U = new _t(O, L)),
          (H = new Dt(window.localStorage, {
            keysPrefix: _.Storage.BoundKeyPrefix,
            sessionIdFunc: function() {
              return U.get(_.cookies.session);
            },
          })),
          ut(F.domRecordEnabledByChance, H, "dom")
            ? ((F.domRecordEnabled = !0),
              F.domReportURI && (F.reportURI = F.domReportURI))
            : (F.domRecordEnabled = !1),
          F.domRecordEnabledByChance),
        (V = {
          MASKING_CHAR: "*",
          censorValueOf: function(n, e, t) {
            return (
              (n = "" + (n || "")),
              0 < (e || 0)
                ? ((e = Math.min(n.length, e)),
                  new Array(n.length - e + 1).join(t || V.MASKING_CHAR) +
                    n.substring(n.length - e))
                : new Array(n.length + 1).join(t || V.MASKING_CHAR)
            );
          },
          isAvailable: function() {
            return !0;
          },
        }),
        (pt.prototype = {
          isCensored: function(n) {
            return !!yt.call(this, n).doMask;
          },
          censor: function(n) {
            var e = yt.call(this, n);
            return e.doMask
              ? (this.cb && this.cb(n, e.cause),
                this.maskingUtils.censorValueOf(
                  n.value,
                  e.keepLastDigits,
                  e.maskingChar
                ))
              : n.value;
          },
          isAvailable: function() {
            return !0;
          },
        }),
        (wt.attributeValueInRegexpArray = function(n, e) {
          for (var t = 0; t < e.length; t++) if (e[t].test(n)) return !0;
          return !1;
        }),
        (wt.checkSelector = function(n, e) {
          for (var t = 0; t < e.length; ++t)
            if (n.nodeType === Node.ELEMENT_NODE && B.elementMatches(n, e[t]))
              return !0;
          return !1;
        }),
        (wt.prototype.isCensored = function(n, e) {
          var t = e ? n.parentElement : n;
          if (!B.isEditableInput(t)) return !1;
          if (t.hasAttribute(this._options.valueCensorIgnoreAttribute))
            return !1;
          var r =
            this._options.valueCensorshipMode === this._envCensorMode.WhiteList;
          return (
            t.hasAttribute(this._censorAttribute) ||
            B.hasClassName(t, this._censorAttribute)
              ? (r = !0)
              : ((this._valueCensorIdsWithoutwildcards.length &&
                  E.contains(
                    this._valueCensorIdsWithoutwildcards,
                    B.getElementId(t)
                  )) ||
                  (this._valueCensorClassesWithoutwildcards.length &&
                    B.hasOneOfClassNames(
                      t,
                      this._valueCensorClassesWithoutwildcards
                    )) ||
                  (this._valueCensorSelectorsWithoutwildcards.length &&
                    wt.checkSelector(
                      t,
                      this._valueCensorSelectorsWithoutwildcards
                    )) ||
                  (this._regexpValueCensorIds.length &&
                    wt.attributeValueInRegexpArray(
                      B.getElementId(t),
                      this._regexpValueCensorIds
                    )) ||
                  (this._regexpValueCensorClasses.length &&
                    wt.attributeValueInRegexpArray(
                      B.getClass(t),
                      this._regexpValueCensorClasses
                    ))) &&
                (r = !r),
            r
          );
        }),
        (wt.prototype.censor = function(n, e) {
          return this.isCensored(n, e) ? this._censorValueOf(n.value) : n.value;
        }),
        (wt.prototype.isAvailable = function() {
          return this._isAvailable();
        }),
        (q = new (function(a, u, c) {
          var n = (function() {
            if (-1 === (u || "").indexOf("://")) return !1;
            var n = a.createElement("a");
            if (
              ((n.href = u),
              (/:\d+/gi.test(u) ? n.port : "") !== a.location.port)
            )
              return !0;
            if (c) return n.hostname !== a.location.hostname;
            for (
              var e = a.location.hostname.split("."),
                t = n.hostname.split("."),
                r = e.length <= 2,
                i = !1;
              e.length && t.length && !i;

            )
              i = e.pop() !== t.pop();
            var o = (i ? 1 : 0) + Math.max(e.length, t.length);
            return r ? 0 !== o : 1 < o;
          })();
          this.isCorsReporting = function() {
            return n;
          };
        })(O, F.reportURI, F.cookieAssignFQDN)),
        (z = new _t(O, {
          domainBy: F.cookieAssignFQDN ? "fqdn" : "tld",
          tldSegmentCount: F.cookieTLDSegmentCount,
        })),
        (W = new Dt(window.localStorage, {
          keysPrefix: _.Storage.BoundKeyPrefix,
          sessionIdFunc: function() {
            return z.get(_.cookies.session);
          },
        })),
        (En = window),
        (X =
          (Cn = F).recordShadowDom && En.ShadowRoot
            ? new wi(new Rt(Cn))
            : new Rt(Cn)),
        (G = new (function(t, e, n, r, i, o) {
          o = o || {};
          var a,
            u,
            c,
            s,
            f,
            d,
            l =
              0 < (i.valueEncryptById || []).length ||
              0 < (i.valueEncryptByClass || []).length ||
              0 < (i.domEncryptById || []).length ||
              0 < (i.domEncryptByClass || []).length ||
              i.valueEncryptionMode === _.censorMode.WhiteList,
            h = l && !(!o.publicKey || !o.keyId),
            v = !1,
            m = !1,
            g = !1,
            p = [];
          function y(n) {
            E((u = B.Base64.bytesToBase64(new Uint8Array(n)))), !g && m && b();
          }
          function w(n) {
            p.push(n),
              E(),
              m &&
                p.length &&
                e.emit("clsDebug", "Error: " + p.join(". Error: "));
          }
          function b() {
            n.set("hybrid.key", u),
              n.set("symmetric.key", B.Base64.bytesToBase64(new Uint8Array(a))),
              n.set("public.key.hash", B.hashcode(o.publicKey)),
              (g = !0);
          }
          function E(n) {
            v ||
              (B.currentTimestamp(),
              (v = !0),
              (u = n) && (c = o.keyId + "_" + u),
              setTimeout(function() {
                e.emit("encryptionReady");
              }, 0));
          }
          if (h)
            try {
              B.currentTimestamp(),
                (s = n.get("symmetric.key")),
                (f = n.get("hybrid.key")),
                (d = "" + B.hashcode(o.publicKey) === n.get("public.key.hash")),
                s && f && d
                  ? ((a = new Uint8Array(B.strToBytes(B.Base64.atob(s)))), E(f))
                  : (e.on("init:loaded", function() {
                      (m = !0),
                        !g && a && u && b(),
                        p.length &&
                          e.emit("clsDebug", "Error: " + p.join(". Error: "));
                    }),
                    (function() {
                      var n = r(t);
                      if (n) {
                        var e = B.strToBytes(B.Base64.atob(o.publicKey));
                        return (
                          (a = new Uint8Array(16)),
                          n.getRandomValues(a),
                          n.executeEncryptionFlow(e, a, y, w),
                          1
                        );
                      }
                      w("Current browser does not support crypto interface.");
                    })() &&
                      setTimeout(function() {
                        E();
                      }, o.timeout));
            } catch (n) {
              w(n.message || "unknown exception during encryption");
            }
          else
            l
              ? (w("encryption is not well configured"),
                console.error(
                  "[EyeView-403]: Encryption configuration error: missing encryption key settings. Sensitive data might be recorded."
                ))
              : E();
          (this.isEncryptionConfigured = function() {
            return !!l;
          }),
            (this.canUseEncryption = function() {
              return (
                !!c &&
                !!(
                  (t.crypto && (t.crypto.subtle || t.crypto.webkitSubtle)) ||
                  (t.msCrypto && t.msCrypto.subtle)
                )
              );
            }),
            (this.getEncryptionKey = function() {
              return c ? a : L;
            }),
            (this.getKeyInfo = function() {
              return c || L;
            }),
            (this.stringIsEncrypted = function(n) {
              return B.startsWith(n, _.encryptionPrefix);
            });
        })(
          window,
          P,
          W,
          function(n) {
            return n.crypto && (n.crypto.subtle || n.crypto.webkitSubtle)
              ? new lt(n)
              : n.msCrypto && n.msCrypto.subtle
              ? new dt(n)
              : null;
          },
          F,
          {
            publicKey: F.encryptionPublicKey,
            keyId: F.encryptionKeyId,
            timeout: F.encryptionTimeout,
          }
        )),
        window,
        (bn = G),
        (J = {
          censorValueOf: function(n) {
            var e = bn.getEncryptionKey(),
              t = bn.AES_CBC.encrypt(
                new Uint8Array(B.strToUTF8Bytes(n)),
                e,
                !0
              );
            return _.encryptionPrefix + B.Base64.bytesToBase64(t, !0) + "_";
          },
          isAvailable: function() {
            return bn.canUseEncryption();
          },
        }),
        (K = new (function(n, e) {
          var o = e.handlers;
          function a(n) {
            return (o[n] = e.fallbackHandlers[n] || o[n]), o[n];
          }
          (this.censor = function(e, t) {
            for (var n, r = e.value, i = 0; i < o.length; i++) {
              (n = o[i]).isAvailable() || (n = a(i));
              try {
                r = n.censor(e, t);
              } catch (n) {
                logger.error(
                  "failed censoring value, switching to fallback: " + n.message,
                  n
                ),
                  (r = a(i).censor(e, t));
              }
              if (r !== e.value) return r;
            }
            return r;
          }),
            (this.isCensored = function(n, e) {
              for (var t = 0; t < o.length; t++)
                if (o[t].isCensored(n, e)) return !0;
              return !1;
            });
        })(
          window,
          ((rn = G),
          (on = J),
          (an = P),
          (mn = ft()),
          (gn = (un = F).valueMaskingMode === _.censorMode.WhiteList),
          (pn = un.ccForceMaskContainer
            ? gt(an)
            : { markOwnerAndInputs: function() {} }),
          (wn = []),
          (yn = []).push(
            new pt(
              V,
              [
                function(n) {
                  return {
                    doMask: "INPUT" === n.tagName && "password" === n.type,
                    cause: "password",
                  };
                },
                ht({
                  enabled: un.ccAutoMask,
                  byContent: un.ccAutoMaskByContent,
                  byAttributes: un.ccAutoMaskFields,
                  keepLastDigits: un.ccAutoMaskKeepLastDigits,
                }),
                mt(
                  vt({
                    valueMaskByCategories: un.valueMaskByCategories,
                    valueMaskingCharNumeric: un.valueMaskingCharNumeric,
                    valueMaskingCharNumericLike: un.valueMaskingCharNumericLike,
                  })
                ),
              ],
              function(n, e) {
                "cc" === e && pn.markOwnerAndInputs(n),
                  Nn.onAutoMaskingApplied(n, e);
              }
            )
          ),
          wn.push(L),
          yn.push(
            ((cn = V),
            (sn = {
              valueCensorIds: gn ? un.maskWhitelistValueById : [],
              valueCensorClasses: gn ? un.maskWhitelistValueByClass : [],
              valueCensorSimpleSelector: gn
                ? un.valueWhitelistMaskSimpleSelector
                : [],
              valueCensorIgnoreAttribute: un.valueMaskIgnoreAttribute,
            }),
            (fn = []),
            (dn = []),
            (ln = []),
            (hn = []),
            (vn = sn || {}).valueCensorIds && Et(vn.valueCensorIds, fn, ln),
            vn.valueCensorClasses && Et(vn.valueCensorClasses, dn, hn),
            {
              isCensored: function(n, e) {
                var t = e ? n.parentElement : n,
                  r = !!t._gbForceMasking;
                return (
                  (t.hasAttribute(vn.valueCensorIgnoreAttribute) ||
                    (fn.length && E.contains(fn, B.getElementId(t))) ||
                    (dn.length && B.hasOneOfClassNames(t, dn)) ||
                    (ln.length &&
                      wt.attributeValueInRegexpArray(B.getElementId(t), ln)) ||
                    (hn.length &&
                      wt.attributeValueInRegexpArray(B.getClass(t), hn))) &&
                    (r = !1),
                  r
                );
              },
              censor: function(n, e) {
                return this.isCensored(n, e)
                  ? cn.censorValueOf(n.value)
                  : n.value;
              },
              isAvailable: function() {
                return !0;
              },
            })
          ),
          wn.push(L),
          rn.isEncryptionConfigured() &&
            (yn.push(
              new wt(
                on,
                _.censorMode,
                "cls_encrypt",
                {
                  name: "encryption",
                  valueCensorshipMode: un.valueEncryptionMode,
                  valueCensorIds: un.valueEncryptById,
                  valueCensorClasses: un.valueEncryptByClass,
                  autoCensorPredicate: L,
                },
                mn
              )
            ),
            wn.push(
              new wt(
                V,
                _.censorMode,
                "cls_encrypt",
                {
                  name: "masking_fallback",
                  valueCensorshipMode: un.valueEncryptionMode,
                  valueCensorIds: un.valueEncryptById,
                  valueCensorClasses: un.valueEncryptByClass,
                  valueCensorIgnoreAttribute: un.valueMaskIgnoreAttribute,
                },
                mn
              )
            )),
          yn.push(
            new wt(
              V,
              _.censorMode,
              "cls_mask",
              {
                name: "masking",
                valueCensorshipMode: un.valueMaskingMode,
                valueCensorIds: gn
                  ? un.maskWhitelistValueById
                  : un.maskBlacklistValueById,
                valueCensorClasses: gn
                  ? un.maskWhitelistValueByClass
                  : un.maskBlacklistValueByClass,
                valueCensorSimpleSelectors: gn
                  ? un.valueWhitelistMaskSimpleSelector
                  : un.valueBlacklistMaskSimpleSelector,
                valueCensorIgnoreAttribute: un.valueMaskIgnoreAttribute,
              },
              mn
            )
          ),
          wn.push(L),
          { handlers: yn, fallbackHandlers: wn })
        )),
        (nn = 0),
        (tn = function() {
          return ++nn;
        }),
        (Q = {
          idOf: function(n, e) {
            return e ? n[en] : bt(n);
          },
          selectorFor: function(n) {
            return { selector: "" + bt(n) };
          },
          GB_ID_FIELD_NAME: (en = "_gbid"),
        }),
        (Y = (function(n) {
          n = (n || []).map(function(n) {
            return n.toLowerCase();
          });
          var c = B.immutableSet.apply(null, n);
          function t(n) {
            var e = n.split("?");
            if (!e[1]) return n;
            for (
              var t, r, i, o = [], a = e[1].split("&"), u = 0;
              u < a.length;
              u++
            )
              1 < (t = a[u].split("=")).length
                ? ((r = t[0]),
                  (i = c[r.toLowerCase()] ? V.censorValueOf(t[1]) : t[1]),
                  o.push(r + "=" + i))
                : o.push(a[u]);
            return e[0] + "?" + o.join("&");
          }
          return {
            mask: function(n) {
              var e = n.split("#");
              return t(e[0]) + (1 < e.length ? "#" + t(e[1]) : "");
            },
          };
        })(F.maskQueryParameters)),
        ($ = {
          setListener: function(n) {
            Z = n;
          },
          clonerHook: function(n, e) {
            Z && Z(n, e);
          },
        }),
        (Sn = {
          hookProto: function(i) {
            var o = {};
            return {
              setHookBefore: function(e, n) {
                var t = i[e];
                return (
                  !!t &&
                  ((i[e] = function() {
                    try {
                      n.apply(this, arguments);
                    } catch (n) {
                      logger.error(
                        "error during method '" +
                          e +
                          "' hook invocation. error: " +
                          n.message,
                        n
                      );
                    }
                    return t.apply(this, arguments);
                  }),
                  (o[e] = t),
                  !0)
                );
              },
              setHookAfter: function(e, t) {
                var r = i[e];
                return (
                  !!r &&
                  ((i[e] = function() {
                    var n = r.apply(this, arguments);
                    try {
                      t.apply(this, arguments);
                    } catch (n) {
                      logger.error(
                        "error during method '" +
                          e +
                          "' hook invocation. error: " +
                          n.message,
                        n
                      );
                    }
                    return n;
                  }),
                  (o[e] = r),
                  !0)
                );
              },
              hookSetPropertyAfter: function(e, t) {
                var r = Object.getOwnPropertyDescriptor(i, e)
                  ? Object.getOwnPropertyDescriptor(i, e).set
                  : null;
                return (
                  !!r &&
                  (Object.defineProperty(i, e, {
                    set: function() {
                      var n = r.apply(this, arguments);
                      try {
                        t.apply(this, arguments);
                      } catch (n) {
                        logger.error(
                          "error during method '" +
                            e +
                            "' hook invocation. error: " +
                            n.message,
                          n
                        );
                      }
                      return n;
                    },
                  }),
                  (o[e] = r),
                  !0)
                );
              },
              revert: function() {
                var n;
                for (n in o) o.hasOwnProperty(n) && (i[n] = o[n]);
              },
            };
          },
        }),
        (kn = O),
        (xn = void 0 !== F && F.scrollDebug),
        (Tn = {
          scroll: function(n, e) {
            function a() {
              l &&
                (v++,
                l(),
                (l = null),
                f && console.log("SCROLL DEBUG: bounced invocation #" + v));
            }
            var u, c, s, f, d, l, h, v;
            return (
              (u = kn),
              (c = e),
              (s = n),
              (f = xn),
              (v = h = 0),
              (In = {
                debouncedHandler: function(n) {
                  var e, t, r, i, o;
                  clearTimeout(d),
                    (l = s.bind(this, n)),
                    (o = n.target),
                    (i = o === u ? u.documentElement : o)._gb_scrollInfo ||
                      (i._gb_scrollInfo = {
                        lastScrollTop: i.scrollTop,
                        lastVDelta: 0,
                      }),
                    (t = (e = i).scrollTop - e._gb_scrollInfo.lastScrollTop),
                    (r = t * e._gb_scrollInfo.lastVDelta < 0),
                    (e._gb_scrollInfo.lastVDelta = t),
                    (e._gb_scrollInfo.lastScrollTop = e.scrollTop),
                    r
                      ? a()
                      : ((d = setTimeout(a, c)),
                        h++,
                        f &&
                          h % 20 == 0 &&
                          console.log(
                            "SCROLL DEBUG: de-bouncer - called:",
                            v,
                            " of total:",
                            h
                          ));
                },
                bounce: a,
              })
            );
          },
          bounceAll: function(n) {
            In && "scroll" !== n && In.bounce();
          },
        }),
        (Ct.prototype.open = function(n, e) {
          (this._url = e),
            (this.readyState = XMLHttpRequest.OPENED),
            this.onreadystatechange && this.onreadystatechange();
        }),
        (Ct.prototype.send = function(n) {
          var e, t;
          (this.readyState = XMLHttpRequest.LOADING),
            (t = this._contentType
              ? ((e = { type: this._contentType }), new Blob([n], e))
              : n),
            (this.status = navigator.sendBeacon(this._url, t)
              ? 200
              : Ct.BEACON_ERROR_STATUS),
            200 !== this.status &&
              logger.error(
                "failed posting new beacon using sendBeacon API. payload:  contentType:" +
                  this._contentType
              ),
            (this.readyState = XMLHttpRequest.DONE),
            this.onreadystatechange && this.onreadystatechange();
        }),
        (Ct.prototype.setRequestHeader = function(n, e) {
          "Content-Type" === n && (this._contentType = e);
        }),
        (Ct.prototype.getResponseHeader = function() {
          return null;
        }),
        (Ct.canSend =
          ((Mn = /chrome/.test(navigator.userAgent.toLowerCase())),
          function(n) {
            return !(Mn && n && n.length > Ct.CHROME_PAYLOAD_LIMIT);
          })),
        (Ct.isSupported = function() {
          return "function" == typeof navigator.sendBeacon;
        }),
        (Ct.CHROME_PAYLOAD_LIMIT = 61440),
        (Ct.BEACON_ERROR_STATUS = 400),
        (St.prototype.open = function(n, e) {
          -1 === e.indexOf("://") &&
            (e =
              location.protocol +
              "//" +
              location.hostname +
              (e.startsWith("/") ? "" : "/") +
              e),
            this.xdr.open(n, e),
            (this.readyState = XMLHttpRequest.OPENED),
            this.onreadystatechange && this.onreadystatechange();
        }),
        (St.prototype.send = function(n) {
          this.xdr.send(n),
            (this.readyState = XMLHttpRequest.LOADING),
            this.onreadystatechange && this.onreadystatechange();
        }),
        (St.prototype.setRequestHeader = function() {}),
        (St.prototype.getResponseHeader = function() {
          return null;
        }),
        (Rn = Tt(
          self,
          F.reportPreferSendBeaconAPI,
          F.clientAttributesEnabled || F.interceptThirdPartyAttributes,
          F.cordovaSdkReporting
        )),
        (function(n) {
          var r,
            i,
            e =
              (this && this.__extends) ||
              ((r = function(n, e) {
                return (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(n, e) {
                      n.__proto__ = e;
                    }) ||
                  function(n, e) {
                    for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                  })(n, e);
              }),
              function(n, e) {
                function t() {
                  this.constructor = n;
                }
                r(n, e),
                  (n.prototype =
                    null === e
                      ? Object.create(e)
                      : ((t.prototype = e.prototype), new t()));
              }),
            f = ((i = Error), e(t, i), t);
          function t() {
            for (var n = [], e = 0; e < arguments.length; e++)
              n[e] = arguments[e];
            var t = i.apply(this, n) || this;
            return (
              Object.create(Error.prototype, {
                name: { value: "IllegalArgumentError" },
              }),
              t
            );
          }
          var w = (function() {
              "use strict";
              var a,
                u,
                i = !1;
              function o(n, e) {
                var t = a[(u[n] + u[e]) % 255];
                return (0 !== n && 0 !== e) || (t = 0), t;
              }
              var m,
                c,
                s,
                f,
                d = !1;
              function r() {
                function n(n) {
                  var e, t, r, i, o;
                  for (
                    o = a[255 - u[(i = n)]],
                      0 === i && (o = 0),
                      t = r = o,
                      e = 0;
                    e < 4;
                    e++
                  )
                    r ^= t = 255 & ((t << 1) | (t >>> 7));
                  return (r ^= 99);
                }
                i ||
                  (function() {
                    (a = []), (u = []);
                    for (var n, e = 1, t = 0; t < 255; t++)
                      (n = 128 & (a[t] = e)),
                        (e <<= 1),
                        (e &= 255),
                        128 == n && (e ^= 27),
                        (e ^= a[t]),
                        (u[a[t]] = t);
                    (a[255] = a[0]), (u[0] = 0), (i = !0);
                  })(),
                  (m = []),
                  (c = []),
                  (s = [[], [], [], []]),
                  (f = [[], [], [], []]);
                for (var e = 0; e < 256; e++) {
                  var t = n(e);
                  (m[e] = t),
                    (c[t] = e),
                    (s[0][e] =
                      (o(2, t) << 24) | (t << 16) | (t << 8) | o(3, t)),
                    (f[0][t] =
                      (o(14, e) << 24) |
                      (o(9, e) << 16) |
                      (o(13, e) << 8) |
                      o(11, e));
                  for (var r = 1; r < 4; r++)
                    (s[r][e] = (s[r - 1][e] >>> 8) | (s[r - 1][e] << 24)),
                      (f[r][t] = (f[r - 1][t] >>> 8) | (f[r - 1][t] << 24));
                }
                d = !0;
              }
              function n(n, e) {
                d || r();
                var h = new Uint32Array(e);
                h.set(m, 512), h.set(c, 768);
                for (var t = 0; t < 4; t++)
                  h.set(s[t], (4096 + 1024 * t) >> 2),
                    h.set(f[t], (8192 + 1024 * t) >> 2);
                var v = (function(n, e) {
                  "use asm";
                  var g = 0,
                    p = 0,
                    y = 0,
                    w = 0,
                    v = 0,
                    m = 0,
                    b = 0,
                    E = 0,
                    i = 0,
                    o = 0,
                    a = 0,
                    u = 0,
                    c = 0,
                    s = 0,
                    f = 0,
                    d = 0,
                    C = 0,
                    S = 0,
                    T = 0,
                    k = 0,
                    l = 0;
                  var x = new n.Uint32Array(e),
                    h = new n.Uint8Array(e);
                  function I(n, e, t, r, i, o, a, u) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    i = i | 0;
                    o = o | 0;
                    a = a | 0;
                    u = u | 0;
                    var c = 0,
                      s = 0,
                      f = 0,
                      d = 0,
                      l = 0,
                      h = 0,
                      v = 0,
                      m = 0;
                    (c = t | 0x400), (s = t | 0x800), (f = t | 0xc00);
                    (i = i ^ x[(n | 0) >> 2]),
                      (o = o ^ x[(n | 4) >> 2]),
                      (a = a ^ x[(n | 8) >> 2]),
                      (u = u ^ x[(n | 12) >> 2]);
                    for (m = 16; (m | 0) <= r << 4; m = (m + 16) | 0) {
                      (d =
                        x[(t | ((i >> 22) & 1020)) >> 2] ^
                        x[(c | ((o >> 14) & 1020)) >> 2] ^
                        x[(s | ((a >> 6) & 1020)) >> 2] ^
                        x[(f | ((u << 2) & 1020)) >> 2] ^
                        x[(n | m | 0) >> 2]),
                        (l =
                          x[(t | ((o >> 22) & 1020)) >> 2] ^
                          x[(c | ((a >> 14) & 1020)) >> 2] ^
                          x[(s | ((u >> 6) & 1020)) >> 2] ^
                          x[(f | ((i << 2) & 1020)) >> 2] ^
                          x[(n | m | 4) >> 2]),
                        (h =
                          x[(t | ((a >> 22) & 1020)) >> 2] ^
                          x[(c | ((u >> 14) & 1020)) >> 2] ^
                          x[(s | ((i >> 6) & 1020)) >> 2] ^
                          x[(f | ((o << 2) & 1020)) >> 2] ^
                          x[(n | m | 8) >> 2]),
                        (v =
                          x[(t | ((u >> 22) & 1020)) >> 2] ^
                          x[(c | ((i >> 14) & 1020)) >> 2] ^
                          x[(s | ((o >> 6) & 1020)) >> 2] ^
                          x[(f | ((a << 2) & 1020)) >> 2] ^
                          x[(n | m | 12) >> 2]);
                      (i = d), (o = l), (a = h), (u = v);
                    }
                    (g =
                      (x[(e | ((i >> 22) & 1020)) >> 2] << 24) ^
                      (x[(e | ((o >> 14) & 1020)) >> 2] << 16) ^
                      (x[(e | ((a >> 6) & 1020)) >> 2] << 8) ^
                      x[(e | ((u << 2) & 1020)) >> 2] ^
                      x[(n | m | 0) >> 2]),
                      (p =
                        (x[(e | ((o >> 22) & 1020)) >> 2] << 24) ^
                        (x[(e | ((a >> 14) & 1020)) >> 2] << 16) ^
                        (x[(e | ((u >> 6) & 1020)) >> 2] << 8) ^
                        x[(e | ((i << 2) & 1020)) >> 2] ^
                        x[(n | m | 4) >> 2]),
                      (y =
                        (x[(e | ((a >> 22) & 1020)) >> 2] << 24) ^
                        (x[(e | ((u >> 14) & 1020)) >> 2] << 16) ^
                        (x[(e | ((i >> 6) & 1020)) >> 2] << 8) ^
                        x[(e | ((o << 2) & 1020)) >> 2] ^
                        x[(n | m | 8) >> 2]),
                      (w =
                        (x[(e | ((u >> 22) & 1020)) >> 2] << 24) ^
                        (x[(e | ((i >> 14) & 1020)) >> 2] << 16) ^
                        (x[(e | ((o >> 6) & 1020)) >> 2] << 8) ^
                        x[(e | ((a << 2) & 1020)) >> 2] ^
                        x[(n | m | 12) >> 2]);
                  }
                  function M(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    I(0x0000, 0x0800, 0x1000, l, n, e, t, r);
                  }
                  function R(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    var i = 0;
                    I(0x0400, 0x0c00, 0x2000, l, n, r, t, e);
                    (i = p), (p = w), (w = i);
                  }
                  function A(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    I(0x0000, 0x0800, 0x1000, l, v ^ n, m ^ e, b ^ t, E ^ r);
                    (v = g), (m = p), (b = y), (E = w);
                  }
                  function N(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    var i = 0;
                    I(0x0400, 0x0c00, 0x2000, l, n, r, t, e);
                    (i = p), (p = w), (w = i);
                    (g = g ^ v), (p = p ^ m), (y = y ^ b), (w = w ^ E);
                    (v = n), (m = e), (b = t), (E = r);
                  }
                  function D(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    I(0x0000, 0x0800, 0x1000, l, v, m, b, E);
                    (v = g = g ^ n),
                      (m = p = p ^ e),
                      (b = y = y ^ t),
                      (E = w = w ^ r);
                  }
                  function _(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    I(0x0000, 0x0800, 0x1000, l, v, m, b, E);
                    (g = g ^ n), (p = p ^ e), (y = y ^ t), (w = w ^ r);
                    (v = n), (m = e), (b = t), (E = r);
                  }
                  function O(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    I(0x0000, 0x0800, 0x1000, l, v, m, b, E);
                    (v = g), (m = p), (b = y), (E = w);
                    (g = g ^ n), (p = p ^ e), (y = y ^ t), (w = w ^ r);
                  }
                  function L(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    I(0x0000, 0x0800, 0x1000, l, i, o, a, u);
                    u = (~d & u) | (d & (u + 1));
                    a = (~f & a) | (f & (a + ((u | 0) == 0)));
                    o = (~s & o) | (s & (o + ((a | 0) == 0)));
                    i = (~c & i) | (c & (i + ((o | 0) == 0)));
                    g = g ^ n;
                    p = p ^ e;
                    y = y ^ t;
                    w = w ^ r;
                  }
                  function F(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    var i = 0,
                      o = 0,
                      a = 0,
                      u = 0,
                      c = 0,
                      s = 0,
                      f = 0,
                      d = 0,
                      l = 0,
                      h = 0;
                    (n = n ^ v), (e = e ^ m), (t = t ^ b), (r = r ^ E);
                    (i = C | 0), (o = S | 0), (a = T | 0), (u = k | 0);
                    for (; (l | 0) < 128; l = (l + 1) | 0) {
                      if (i >>> 31) {
                        (c = c ^ n), (s = s ^ e), (f = f ^ t), (d = d ^ r);
                      }
                      (i = (i << 1) | (o >>> 31)),
                        (o = (o << 1) | (a >>> 31)),
                        (a = (a << 1) | (u >>> 31)),
                        (u = u << 1);
                      h = r & 1;
                      (r = (r >>> 1) | (t << 31)),
                        (t = (t >>> 1) | (e << 31)),
                        (e = (e >>> 1) | (n << 31)),
                        (n = n >>> 1);
                      if (h) n = n ^ 0xe1000000;
                    }
                    (v = c), (m = s), (b = f), (E = d);
                  }
                  function t(n) {
                    n = n | 0;
                    l = n;
                  }
                  function P(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    (g = n), (p = e), (y = t), (w = r);
                  }
                  function B(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    (v = n), (m = e), (b = t), (E = r);
                  }
                  function j(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    (i = n), (o = e), (a = t), (u = r);
                  }
                  function U(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    (c = n), (s = e), (f = t), (d = r);
                  }
                  function H(n, e, t, r) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    r = r | 0;
                    (u = (~d & u) | (d & r)),
                      (a = (~f & a) | (f & t)),
                      (o = (~s & o) | (s & e)),
                      (i = (~c & i) | (c & n));
                  }
                  function r(n) {
                    n = n | 0;
                    if (n & 15) return -1;
                    (h[n | 0] = g >>> 24),
                      (h[n | 1] = (g >>> 16) & 255),
                      (h[n | 2] = (g >>> 8) & 255),
                      (h[n | 3] = g & 255),
                      (h[n | 4] = p >>> 24),
                      (h[n | 5] = (p >>> 16) & 255),
                      (h[n | 6] = (p >>> 8) & 255),
                      (h[n | 7] = p & 255),
                      (h[n | 8] = y >>> 24),
                      (h[n | 9] = (y >>> 16) & 255),
                      (h[n | 10] = (y >>> 8) & 255),
                      (h[n | 11] = y & 255),
                      (h[n | 12] = w >>> 24),
                      (h[n | 13] = (w >>> 16) & 255),
                      (h[n | 14] = (w >>> 8) & 255),
                      (h[n | 15] = w & 255);
                    return 16;
                  }
                  function V(n) {
                    n = n | 0;
                    if (n & 15) return -1;
                    (h[n | 0] = v >>> 24),
                      (h[n | 1] = (v >>> 16) & 255),
                      (h[n | 2] = (v >>> 8) & 255),
                      (h[n | 3] = v & 255),
                      (h[n | 4] = m >>> 24),
                      (h[n | 5] = (m >>> 16) & 255),
                      (h[n | 6] = (m >>> 8) & 255),
                      (h[n | 7] = m & 255),
                      (h[n | 8] = b >>> 24),
                      (h[n | 9] = (b >>> 16) & 255),
                      (h[n | 10] = (b >>> 8) & 255),
                      (h[n | 11] = b & 255),
                      (h[n | 12] = E >>> 24),
                      (h[n | 13] = (E >>> 16) & 255),
                      (h[n | 14] = (E >>> 8) & 255),
                      (h[n | 15] = E & 255);
                    return 16;
                  }
                  function q() {
                    M(0, 0, 0, 0);
                    (C = g), (S = p), (T = y), (k = w);
                  }
                  function z(n, e, t) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    var r = 0;
                    if (e & 15) return -1;
                    while ((t | 0) >= 16) {
                      X[n & 7](
                        (h[e | 0] << 24) |
                          (h[e | 1] << 16) |
                          (h[e | 2] << 8) |
                          h[e | 3],
                        (h[e | 4] << 24) |
                          (h[e | 5] << 16) |
                          (h[e | 6] << 8) |
                          h[e | 7],
                        (h[e | 8] << 24) |
                          (h[e | 9] << 16) |
                          (h[e | 10] << 8) |
                          h[e | 11],
                        (h[e | 12] << 24) |
                          (h[e | 13] << 16) |
                          (h[e | 14] << 8) |
                          h[e | 15]
                      );
                      (h[e | 0] = g >>> 24),
                        (h[e | 1] = (g >>> 16) & 255),
                        (h[e | 2] = (g >>> 8) & 255),
                        (h[e | 3] = g & 255),
                        (h[e | 4] = p >>> 24),
                        (h[e | 5] = (p >>> 16) & 255),
                        (h[e | 6] = (p >>> 8) & 255),
                        (h[e | 7] = p & 255),
                        (h[e | 8] = y >>> 24),
                        (h[e | 9] = (y >>> 16) & 255),
                        (h[e | 10] = (y >>> 8) & 255),
                        (h[e | 11] = y & 255),
                        (h[e | 12] = w >>> 24),
                        (h[e | 13] = (w >>> 16) & 255),
                        (h[e | 14] = (w >>> 8) & 255),
                        (h[e | 15] = w & 255);
                      (r = (r + 16) | 0),
                        (e = (e + 16) | 0),
                        (t = (t - 16) | 0);
                    }
                    return r | 0;
                  }
                  function W(n, e, t) {
                    n = n | 0;
                    e = e | 0;
                    t = t | 0;
                    var r = 0;
                    if (e & 15) return -1;
                    while ((t | 0) >= 16) {
                      G[n & 1](
                        (h[e | 0] << 24) |
                          (h[e | 1] << 16) |
                          (h[e | 2] << 8) |
                          h[e | 3],
                        (h[e | 4] << 24) |
                          (h[e | 5] << 16) |
                          (h[e | 6] << 8) |
                          h[e | 7],
                        (h[e | 8] << 24) |
                          (h[e | 9] << 16) |
                          (h[e | 10] << 8) |
                          h[e | 11],
                        (h[e | 12] << 24) |
                          (h[e | 13] << 16) |
                          (h[e | 14] << 8) |
                          h[e | 15]
                      );
                      (r = (r + 16) | 0),
                        (e = (e + 16) | 0),
                        (t = (t - 16) | 0);
                    }
                    return r | 0;
                  }
                  var X = [M, R, A, N, D, _, O, L];
                  var G = [A, F];
                  return {
                    set_rounds: t,
                    set_state: P,
                    set_iv: B,
                    set_nonce: j,
                    set_mask: U,
                    set_counter: H,
                    get_state: r,
                    get_iv: V,
                    gcm_init: q,
                    cipher: z,
                    mac: W,
                  };
                })({ Uint8Array: Uint8Array, Uint32Array: Uint32Array }, e);
                return (
                  (v.set_key = function(n, e, t, r, i, o, a, u, c) {
                    var s = h.subarray(0, 60);
                    h.subarray(256, 316), s.set([e, t, r, i, o, a, u, c]);
                    for (var f = n, d = 1; f < 4 * n + 28; f++) {
                      var l = s[f - 1];
                      (f % n == 0 || (8 === n && f % n == 4)) &&
                        (l =
                          (m[l >>> 24] << 24) ^
                          (m[(l >>> 16) & 255] << 16) ^
                          (m[(l >>> 8) & 255] << 8) ^
                          m[255 & l]),
                        f % n == 0 &&
                          ((l = (l << 8) ^ (l >>> 24) ^ (d << 24)),
                          (d = (d << 1) ^ (128 & d ? 27 : 0))),
                        (s[f] = s[f - n] ^ l);
                    }
                    v.set_rounds(n + 5);
                  }),
                  v
                );
              }
              return (
                (n.ENC = { ECB: 0, CBC: 2, CFB: 4, OFB: 6, CTR: 7 }),
                (n.MAC = { CBC: 0, GCM: 1 }),
                (n.HEAP_DATA = 16384),
                n
              );
            })(),
            o =
              ((a.prototype.AES_Encrypt_process = function(n) {
                if (!(n instanceof Uint8Array))
                  throw new TypeError("data isn't of expected type");
                for (
                  var e,
                    t,
                    r,
                    i,
                    o,
                    a,
                    u,
                    c = this.asm,
                    s = this.heap,
                    f = w.ENC[this.mode],
                    d = w.HEAP_DATA,
                    l = this.pos,
                    h = this.len,
                    v = 0,
                    m = n.length || 0,
                    g = 0,
                    p = 0,
                    y = new Uint8Array((h + m) & -16);
                  0 < m;

                )
                  (t = l + h),
                    (r = n),
                    (i = v),
                    (o = m),
                    (a = (e = s).length - t),
                    (u = a < o ? a : o),
                    e.set(r.subarray(i, i + u), t),
                    (h += p = u),
                    (v += p),
                    (m -= p),
                    (p = c.cipher(f, d + l, h)) &&
                      y.set(s.subarray(l, l + p), g),
                    (g += p),
                    p < h ? ((l += p), (h -= p)) : (h = l = 0);
                return (this.pos = l), (this.len = h), y;
              }),
              (a.prototype.AES_Encrypt_finish = function() {
                var n = this.asm,
                  e = this.heap,
                  t = w.ENC[this.mode],
                  r = w.HEAP_DATA,
                  i = this.pos,
                  o = this.len,
                  a = 16 - (o % 16),
                  u = o;
                if (this.hasOwnProperty("padding")) {
                  if (this.padding) {
                    for (var c = 0; c < a; ++c) e[i + o + c] = a;
                    u = o += a;
                  } else if (o % 16)
                    throw new f(
                      "data length must be a multiple of the block size"
                    );
                } else o += a;
                var s = new Uint8Array(u);
                return (
                  o && n.cipher(t, r + i, o),
                  u && s.set(e.subarray(i, i + u)),
                  (this.pos = 0),
                  (this.len = 0),
                  s
                );
              }),
              a);
          function a(n, e, t, r, i, o) {
            void 0 === t && (t = !0),
              (this.pos = 0),
              (this.len = 0),
              (this.mode = r),
              (this.heap =
                i ||
                (function(n, e) {
                  var t = n ? n.byteLength : e || 65536;
                  if (4095 & t || t <= 0)
                    throw new Error(
                      "heap size must be a positive integer and a multiple of 4096"
                    );
                  return (n = n || new Uint8Array(new ArrayBuffer(t)));
                })().subarray(w.HEAP_DATA)),
              (this.asm = o || new w(null, this.heap.buffer)),
              (this.pos = 0),
              (this.len = 0);
            var a = n.length;
            if (16 !== a && 24 !== a && 32 !== a)
              throw new f("illegal key size");
            var u = new DataView(n.buffer, n.byteOffset, n.byteLength);
            if (
              (this.asm.set_key(
                a >> 2,
                u.getUint32(0),
                u.getUint32(4),
                u.getUint32(8),
                u.getUint32(12),
                16 < a ? u.getUint32(16) : 0,
                16 < a ? u.getUint32(20) : 0,
                24 < a ? u.getUint32(24) : 0,
                24 < a ? u.getUint32(28) : 0
              ),
              e !== L)
            ) {
              if (16 !== e.length) throw new f("illegal iv size");
              var c = new DataView(e.buffer, e.byteOffset, e.byteLength);
              this.asm.set_iv(
                c.getUint32(0),
                c.getUint32(4),
                c.getUint32(8),
                c.getUint32(12)
              );
            } else this.asm.set_iv(0, 0, 0, 0);
            this.padding = t;
          }
          function u(n, e, t, r) {
            void 0 === t && (t = !0), (this.aes = r || new o(n, e, t, "CBC"));
          }
          n.AES_CBC =
            ((u.encrypt = function(n, e, t, r) {
              return void 0 === t && (t = !0), new u(e, r, t).encrypt(n);
            }),
            (u.prototype.encrypt = function(n) {
              return (function() {
                for (var n = [], e = 0; e < arguments.length; e++)
                  n[e] = arguments[e];
                for (
                  var t = n.reduce(function(n, e) {
                      return n + e.length;
                    }, 0),
                    r = new Uint8Array(t),
                    i = 0,
                    o = 0;
                  o < n.length;
                  o++
                )
                  r.set(n[o], i), (i += n[o].length);
                return r;
              })(
                this.aes.AES_Encrypt_process(n),
                this.aes.AES_Encrypt_finish()
              );
            }),
            u);
        })(G),
        (kt.prototype.put = function(n, e) {
          var t = { key: n, value: e };
          if (
            ((this._keymap[n] = t),
            this.tail
              ? ((this.tail.newer = t).older = this.tail)
              : (this.head = t),
            (this.tail = t),
            this.size === this.limit)
          )
            return this.shift();
          this.size++;
        }),
        (kt.prototype.shift = function() {
          var n = this.head;
          return (
            n &&
              (this.head.newer
                ? ((this.head = this.head.newer), (this.head.older = L))
                : (this.head = L),
              (n.newer = n.older = L),
              delete this._keymap[n.key]),
            n
          );
        }),
        (kt.prototype.get = function(n, e) {
          var t = this._keymap[n];
          if (t !== L)
            return (
              t === this.tail ||
                (t.newer &&
                  (t === this.head && (this.head = t.newer),
                  (t.newer.older = t.older)),
                t.older && (t.older.newer = t.newer),
                (t.newer = L),
                (t.older = this.tail),
                this.tail && (this.tail.newer = t),
                (this.tail = t)),
              e ? t : t.value
            );
        }),
        (kt.prototype.find = function(n) {
          return this._keymap[n];
        }),
        (kt.prototype.set = function(n, e) {
          var t,
            r = this.get(n, !0);
          return (
            r
              ? ((t = r.value), (r.value = e))
              : (t = (t = this.put(n, e)) && t.value),
            t
          );
        }),
        (kt.prototype.toString = function() {
          for (var n = "", e = this.head; e; )
            (n += String(e.key) + ":" + e.value), (e = e.newer) && (n += " < ");
          return n;
        }),
        (xt.MAX_ENTRIES = 150),
        (xt.DirectionType = { BACK: 1, FORWARD: 2 }),
        (xt.UrlType = { FUlL_URL: 1, HASH_ONLY: 2 }),
        (It.EVENTS = {
          BlackoutEnter: "BlackoutEnter",
          BlackoutLeave: "BlackoutLeave",
        }),
        (It.ALWAYS_FALSE = function() {
          return !1;
        }),
        (An = {
          severity: { ERROR: 0, WARN: 1, INFO: 2, DEBUG: 3 },
          types: {
            GENERAL_ERR: { code: 100, count: 0 },
            INVALID_TIMING_ERR: { code: 101, count: 0 },
            TOP_WINDOW_SIZE_ERR: { code: 102, count: 0 },
            WINDOW_SIZE_NOT_VALID_ERR: { code: 103, count: 0 },
            KEREN_ERR: { code: 104, count: 0 },
          },
          currentDebugInfo: null,
          registerError: function(n, e) {
            An.registerDebugInfo(An.severity.ERROR, n, e);
          },
          registerErrorAndLog: function(n, e) {
            An.registerDebugInfoAndLog(An.severity.ERROR, n, e);
          },
          registerDebugInfoAndLog: function(n, e, t) {
            An.registerDebugInfo(n, e, t);
          },
          registerDebugInfo: function(n, e, t) {
            e.count++,
              null === An.currentDebugInfo &&
                (An.currentDebugInfo = new Mt(n, e.code, e.count, t));
          },
          getRegisteredDebugInfo: function(n) {
            var e = An.currentDebugInfo;
            return null === e || E.isUndefined(e)
              ? null
              : (n && An.clearDebugInfo(), e);
          },
          clearDebugInfo: function() {
            An.currentDebugInfo = null;
          },
          setRegisteredDebugInfoOnEvent: function(n) {
            var e;
            (null !== n.getDebugInfo() && !E.isUndefined(n.getDebugInfo())) ||
              (null != (e = An.getRegisteredDebugInfo(!0)) &&
                n.setDebugInfo(e));
          },
          setErrorOnEvent: function(n, e, t) {
            An.setDebugInfoOnEvent(n, An.severity.ERROR, e, t);
          },
          setErrorOnEventAndLog: function(n, e, t, r) {
            An.setDebugInfoOnEvent(n, An.severity.ERROR, e, t);
          },
          setWarnOnEvent: function(n, e, t) {
            An.setDebugInfoOnEvent(n, An.severity.WARN, e, t);
          },
          setDebugInfoOnEvent: function(n, e, t, r) {
            var i;
            null === n || E.isUndefined(n)
              ? logger.error("Failed setting debug on non-existing event")
              : ((i = new Mt(e, t.code, t.count, r)), n.setDebugInfo(i));
          },
        }),
        (Nn = {
          env: _,
          config: F,
          utils: B,
          _: E,
          sessionId: L,
          visitorId: L,
          externalIdResolver:
            ((On =
              (On = {
                byAttribute: F.externalIdAttr,
                byClassPrefix: F.externalIdByClassesOnPrefix,
              }) || {}),
            {
              resolve: function(n) {
                if (n.getAttribute) {
                  if (On.byClassPrefix) {
                    var e = Lt(n);
                    if (e)
                      return (function(n, e) {
                        for (var t = n.parentElement, r = [e]; t; )
                          (e = Lt(t)) && r.unshift(e), (t = t.parentElement);
                        return r.join(" ");
                      })(n, e);
                  }
                  if (On.byAttribute) {
                    var t = n.getAttribute(On.byAttribute);
                    if (t) return t;
                  }
                }
                return null;
              },
            }),
          uaUtils: {
            captureWindowSize: function() {
              return E.isNumber(window.innerWidth) &&
                E.isNumber(window.innerHeight)
                ? Ot(window.innerWidth, window.innerHeight, "[inner]")
                : !E.isUndefined(O.body) &&
                  E.isNumber(O.body.offsetWidth) &&
                  E.isNumber(O.body.offsetHeight)
                ? Ot(O.body.offsetWidth, O.body.offsetHeight, "[offset]")
                : null;
            },
            captureScreenSize: function() {
              return Ot(window.screen.width, window.screen.height, "[screen]");
            },
          },
          debugHelper:
            ((Dn = F),
            {
              visitLoadEvent: function(n) {
                var e, t;
                Dn.sendStateInfo &&
                  (We((e = {})),
                  Xe(e),
                  (t = {
                    ver: _n,
                    config: (function(n) {
                      var e,
                        t,
                        r = {};
                      for (e in Dn)
                        if (Dn.hasOwnProperty(e))
                          switch (typeof Dn[e]) {
                            case "object":
                              0 < (Dn[e].length || 0) && (r[e] = Dn[e]);
                              break;
                            default:
                              (t = "" + Dn[e]),
                                "" + n[e] !== t &&
                                  (100 < t.length &&
                                    (t = "[trimmed] " + t.substring(0, 100)),
                                  (r[e] = t));
                          }
                      return r;
                    })(e),
                  }),
                  n.setExtraInfo(
                    Ye.prototype.DETECTOR_CONFIG_ID,
                    JSON.stringify(t)
                  ));
              },
              visitUnloadEvent: function(n) {},
            }),
          page: { snapshotEmitted: !(_n = t), snapshotFuseData: L, timing: {} },
          encryptionPendingEvents: [],
          bindings: { registered: [], unsupportedEventTypes: [] },
          plugins: {},
          reports: { events: [], resources: [] },
          state: {
            loaded: !1,
            handshakeDone: !1,
            encryptionReady: !1,
            stopped: !1,
            clickStart: L,
            clickStartType: L,
            scrolling: {},
            unloading: !1,
            maxScrollReach: 0,
            typableElementsLRUMap: new kt(20),
            lastFocusData: {},
            mouseEnterReported: !1,
            hover: { hoverStartTimestamp: 0, hoverElementList: [] },
            clsDebugCounter: 0,
            dpr: window.devicePixelRatio,
          },
          touchDetected: !1,
          ajaxUrls: new kt(20),
          historyManager: new xt(window, P, window.history),
          blackoutManager: new It(window, P, F.blackoutWhenLocationContains),
          debugInfoHandler: An,
          zoomType: { IN: 1, OUT: 2 },
          version: _.detectorVersion,
          logicalSegmentTracker: new (function(o, a, t, u) {
            var r,
              i,
              c,
              s,
              f = !1;
            function d(n) {
              var e = n.join(",");
              return t.validateSelector(e) ? e : null;
            }
            function l(n) {
              for (
                var e, t, r = a.querySelectorAll(c), i = 0;
                i < r.length;
                i++
              ) {
                if ((e = r[i].getAttribute(u.labelByAttribute)) && e !== s) {
                  (s = e),
                    n &&
                      (o.emit(
                        "logicalSegmentEntered",
                        u.segmentationPrefix + e
                      ),
                      (t = r[i].getAttribute(u.titleByAttribute)) &&
                        o.emit("titleChanged", t));
                  break;
                }
                n && (f = !0);
              }
            }
            function h() {
              setTimeout(l.bind(null, !0), 0);
            }
            function n() {
              var n, e;
              if (
                ((i = d(u.triggerBySimpleSelector)),
                (c = d(u.labelBySimpleSelector)),
                i && c)
              ) {
                for (n = 0; n < u.triggerBySimpleSelector.length; n++)
                  for (
                    r = a.querySelectorAll(u.triggerBySimpleSelector[n]), e = 0;
                    e < r.length;
                    e++
                  )
                    B.addEventHandler(r[e], "click", h, !0);
                l(!1);
              }
            }
            (this.init = function() {
              n();
            }),
              (this.onBeforeEmittingPageEvent = function() {
                f && l(!(f = !1));
              });
          })(P, O, ft(), {
            triggerBySimpleSelector: F.segmentationTriggerBySimpleSelector,
            labelBySimpleSelector: F.segmentationLabelBySimpleSelector,
            labelByAttribute: F.segmentationLabelByAttribute,
            titleByAttribute: F.segmentationTitleByAttribute,
            segmentationPrefix: F.segmentationPrefix,
          }),
          segmentManager: new (function(r, u, c, i, n) {
            n = n || { ignoreWhenLocationContains: L };
            var s = !1,
              e = "",
              o = i.mask(B.stripHash(r.location.href)),
              f = {
                startedAt: B.currentTimestamp(),
                value: r.location.pathname,
                type: "path",
              };
            function a(n) {
              (e = i.mask(r.location.hash)), d() || l("hash", n, e);
            }
            function d() {
              return (
                n.ignoreWhenLocationContains &&
                0 <= r.location.href.indexOf(n.ignoreWhenLocationContains)
              );
            }
            function l(n, e, t) {
              var r = B.currentTimestamp(),
                i = f.value,
                o = c.segmentChange(r),
                a = {
                  type: n,
                  hint: e,
                  current: t,
                  last: i,
                  lastDwell: r - f.startedAt,
                  lastLoadTime: o,
                };
              (f.startedAt = r),
                (f.type = n),
                (f.value = t),
                (s = !0),
                u.emit("segmentChanged", a);
            }
            u.on("init:loaded", function() {
              (o = i.mask(B.stripHash(r.location.href))),
                r.location.hash && a("load");
            }),
              u.on("navigation", function(n) {
                var e, t;
                n.direction === xt.DirectionType.BACK
                  ? (e = "back")
                  : n.direction === xt.DirectionType.FORWARD && (e = "forward"),
                  n.urlType === xt.UrlType.HASH_ONLY
                    ? a(e)
                    : ((t = e),
                      (o = i.mask(B.stripHash(r.location.href))),
                      d() || l("path", t, i.mask(r.location.pathname)));
              }),
              u.on("logicalSegmentEntered", function(n) {
                var e = i.mask(B.joinPath(r.location.pathname, n));
                (o = i.mask(B.joinPath(r.location.pathname, n))),
                  l("path", "logical", e);
              }),
              (this.onUnload = function() {
                s &&
                  u.emit("lastSegment", {
                    last: f.value,
                    lastDwell: B.currentTimestamp() - f.startedAt,
                    lastLoadTime: f.lastLoadTime,
                  });
              }),
              (this.visitEvent = function(n) {
                (n.referrer = o), (n.segment = f.value), (n.subPage = e);
              });
          })(
            O,
            P,
            F.recordSpaLoadTime && F.interceptAjax
              ? new (function(e, t) {
                  var r = 50,
                    i = {
                      pendingEvents: {},
                      totalLoadTime: 0,
                      startTime: 0,
                      keepListen: !1,
                    },
                    o = null,
                    a = null,
                    u = (function(s, f, d) {
                      function l(e) {
                        var n,
                          t,
                          r,
                          i,
                          o,
                          a,
                          u = !1,
                          c = e.nodeName.toUpperCase();
                        if (
                          c.match(/^(IMG|IFRAME|IMAGE)$/) ||
                          ("LINK" === c &&
                            e.rel &&
                            e.rel.match(/\bstylesheet\b/i))
                        ) {
                          if ("LINK" === c && e.rel && e.sheet) return;
                          if (
                            ((n = d(e)) && e.src !== n.url && (u = !0),
                            !(o =
                              e.src ||
                              ("function" == typeof e.getAttribute &&
                                e.getAttribute("xlink:href")) ||
                              e.href) ||
                              o.match(/^(about:|javascript:|data:)/i))
                          )
                            return;
                          if ((n && n.url !== o && (u = !0), "IMG" === c)) {
                            if (
                              (e.naturalWidth && !u) ||
                              ("" !== e.getAttribute("src") && e.complete)
                            )
                              return;
                            if (
                              "function" == typeof e.getAttribute &&
                              "" === e.getAttribute("src")
                            )
                              return;
                          }
                          if ("IFRAME" === c && u) return;
                          n || s(e, o),
                            (a = function(n) {
                              f(n.target),
                                B.removeEventHandler(e, "load", a),
                                B.removeEventHandler(e, "error", a);
                            }),
                            B.addEventHandler(e, "load", a),
                            B.addEventHandler(e, "error", a);
                        } else
                          e.nodeType === Node.ELEMENT_NODE &&
                            ["IMAGE", "IMG"].forEach(function(n) {
                              if ((t = e.getElementsByTagName(n)).length)
                                for (r = 0, i = t.length; r < i; r++) l(t[r]);
                            }, this);
                      }
                      return {
                        checkMutation: function(n) {
                          var e, t, r;
                          if ("attributes" === n.type) l(n.target);
                          else if ("childList" === n.type) {
                            for (t = n.addedNodes.length, e = 0; e < t; e++)
                              l(n.addedNodes[e]);
                            for (t = n.removedNodes.length, e = 0; e < t; e++)
                              "IFRAME" ===
                                (r =
                                  n.removedNodes[e]).nodeName.toUpperCase() &&
                                d(r) &&
                                f(r);
                          }
                        },
                      };
                    })(
                      function(n, e) {
                        i.pendingEvents[t.idOf(n)] = { url: e };
                      },
                      function(n) {
                        l(t.idOf(n));
                      },
                      function(n) {
                        return i.pendingEvents[t.idOf(n)];
                      }
                    );
                  function c(n) {
                    i.isRoutingStart && (a = i.totalLoadTime),
                      (i.keepListen = !0),
                      (i.pendingEvents = {}),
                      (i.totalLoadTime = 0),
                      (i.startTime = n),
                      i.isRoutingStart ||
                        (e.on("ajax:send", f),
                        e.on("ajax:end", d),
                        e.on("ajax:loadError", d),
                        e.on("domMutation", h),
                        (i.isRoutingStart = !0));
                  }
                  function s() {
                    B.isEmpty(i.pendingEvents) &&
                      ((a = i.totalLoadTime), (i.keepListen = !1));
                  }
                  function f(n) {
                    i.keepListen && (i.pendingEvents[n.uuid] = { url: n.url });
                  }
                  function d(n) {
                    i.keepListen && l(n.uuid);
                  }
                  function l(n) {
                    var e;
                    i.pendingEvents[n] &&
                      ((i.totalLoadTime = B.currentTimestamp() - i.startTime),
                      delete i.pendingEvents[n],
                      B.isEmpty(i.pendingEvents) &&
                        ((e = r),
                        o && clearTimeout(o),
                        (o = setTimeout(s, e))));
                  }
                  function h(n) {
                    i.keepListen && u.checkMutation(n);
                  }
                  this.segmentChange = function(n) {
                    return (
                      c(n),
                      null === a &&
                        (a =
                          window.performance.timing.domContentLoadedEventEnd -
                          window.performance.timing.navigationStart),
                      a
                    );
                  };
                })(P, Q)
              : null,
            Y,
            {
              ignoreWhenLocationContains:
                F.segmentationIgnoreWhenLocationContains,
            }
          ),
          botDetector: new (function(t, e, i) {
            var o = "bot.nh",
              r = "bot.d",
              a = {
                CLICKS_WITH_NO_MOUSE_MOVES: { code: "1", active: !0 },
                NOT_TRUSTED_MOUSEEVENT: { code: "3", active: !0 },
                INVALID_NAVIGATION_API_VALUES: { code: "4", active: !0 },
                MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES: {
                  code: "5",
                  active: !0,
                },
              },
              u = {
                MANY_MOUSE_MOVES_BETWEEN_CLICKS: { code: "-1", active: !0 },
              },
              c = !1,
              s = !1,
              f = null,
              d = null,
              l = 0,
              h = 100,
              v = 0,
              m = { robot: !1, human: !1 },
              g = !1;
            function p() {
              w("mousemove", n), w("click", y), (g = !1);
            }
            function n(n) {
              return (
                c || ((d = B.getCoordinate(n)), (l = B.currentTimestamp())),
                s && v++,
                (c = !0)
              );
            }
            function y(n) {
              return (
                n.type === _.mouseEvents.down &&
                  (function(n) {
                    if (n.type !== _.mouseEvents.down) return;
                    s = !0;
                    var e = B.getCoordinate(n);
                    null !== f
                      ? u.MANY_MOUSE_MOVES_BETWEEN_CLICKS.active &&
                        !B.isSameCoordinates(e, f)
                        ? 10 <= v &&
                          (function(n) {
                            n.code, (m.human = !0), i.set(r, n.code), p();
                          })(u.MANY_MOUSE_MOVES_BETWEEN_CLICKS)
                        : a.CLICKS_WITH_NO_MOUSE_MOVES.active &&
                          B.isCoordinatesDistLargerThan(e, f, 10) &&
                          0 === v &&
                          b(a.CLICKS_WITH_NO_MOUSE_MOVES)
                      : c &&
                        (function(n) {
                          if (
                            !a.MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES.active
                          )
                            return;
                          var e = B.getCoordinate(n);
                          {
                            var t, r;
                            null !== d &&
                              B.isSameCoordinates(e, d) &&
                              B.currentTimestamp() - l < h &&
                              ((t = i.get(o)),
                              E.isUndefined(t)
                                ? i.set(o, 1)
                                : ((r = parseInt(t)),
                                  isNaN(r) && (r = 1),
                                  r++,
                                  i.set(o, r),
                                  b(
                                    a.MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES
                                  ),
                                  (a.MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES.active = !1)));
                          }
                        })(n);
                    (v = 0), (f = e);
                  })(n),
                (function(n) {
                  if (!a.NOT_TRUSTED_MOUSEEVENT.active) return;
                  "isTrusted" in n &&
                    !1 === n.isTrusted &&
                    b(a.NOT_TRUSTED_MOUSEEVENT);
                })(n),
                !0
              );
            }
            function w(e, n) {
              try {
                B.removeEventHandler(t.body, e, n);
              } catch (n) {
                logger.error(
                  "BotDetector failed to remove " +
                    e +
                    " listener. " +
                    n.message(),
                  n
                );
              }
            }
            function b(n) {
              g &&
                (n.code,
                (n.active = !1),
                i.set(r, n.code),
                (m.robot = !0),
                p(),
                e.emit("botDetection", n.code));
            }
            (this.init = function() {
              i.get(r) ||
                ((g = !0),
                B.addEventHandler(t.body, "mousemove", n, !0),
                B.addEventHandler(t.body, "click", y, !0));
            }),
              (this.isActive = function() {
                return g;
              }),
              (this.notifyMouseAction = y);
          })(O, P, W),
          pageInfo: (function(n, e, t) {
            var r, i, o, a;
            if (!t || e) return L;
            n.on("event:unload", function() {
              t["gb.unloaded"] = !0;
            });
            try {
              (r = (function() {
                var e = t["gb.psn"] || "0";
                try {
                  e = parseInt(e) + 1;
                } catch (n) {
                  e = 1;
                }
                return (t["gb.psn"] = e);
              })()),
                (o = t["gb.btabid"]),
                (a = t["gb.unloaded"]),
                (void 0 !== o && void 0 !== a) ||
                  ((o = B.uuid()), (t["gb.btabid"] = o)),
                delete t["gb.unloaded"],
                (i = o);
            } catch (n) {}
            return { pageSn: r, browserTabId: i };
          })((window, P), window.top !== window, window.sessionStorage),
          initialize: function() {
            var n, e, t;
            if (
              (_.setup,
              Nn.version,
              Nn.setClientCookies(
                ((F.visitorIdByQueryParam || F.sessionIdByQueryParam) &&
                  ((e = (n = B.parseQuery(O.location.search.substring(1)))[
                    F.sessionIdByQueryParam
                  ]),
                  (t = n[F.visitorIdByQueryParam])),
                m.sessionId && (m.sessionId, (e = m.sessionId)),
                { sessionId: e, visitorId: t })
              ),
              void 0 !== F.enabledByChance &&
                !ut(F.enabledByChance, W, "recording"))
            )
              return (_.disabled = !0), void F.enabledByChance;
            try {
              if (void 0 !== R) {
                var r = I.validate(R, F);
                if (0 < r.errors.length)
                  return void console.error(
                    "[EyeView-1401]: Detector configuration validation failure. validation report:" +
                      r
                  );
              }
            } catch (n) {
              return void console.error(
                "[EyeView-1402]: Error while validating Detector configuration:" +
                  n +
                  ". Detector is DISABLED."
              );
            }
            try {
              Nn.checkSupportModeSession(),
                Nn.initializePageDetails(),
                Nn.registerPlugins(),
                P.on("clsDebug", Nn.saveClsDebugErrorEvent),
                P.on(It.EVENTS.BlackoutEnter, Nn.onBlackoutEnter),
                P.on(It.EVENTS.BlackoutLeave, Nn.onBlackoutLeave),
                this.asStoppable().isStopped(!0),
                Nn.addDomReadyEventHandler(),
                Nn.updateScrollReach(),
                Nn.registerPreLoadEvents(),
                P.on("3rdpartymap:scReport", Nn.saveThirdPartyMapEvent),
                P.on("3rdPartyAttribute", Nn.saveThirdPartyAttributeEvent),
                P.on("abTesting", Nn.saveABTesting),
                P.on("pageNameResolved", Nn.onPageNameResolved),
                P.on("encryptionReady", Nn.onEncryptionReady),
                P.on("dom:fuseBlown", Nn.onDomFuseBlown),
                P.emit("init:preloaded", {
                  sessionId: Nn.sessionId,
                  visitorId: Nn.visitorId,
                  pageId: Nn.page.id,
                }),
                Nn.saveDocumentLoadEvent(Nn.page.initializationTimestamp),
                Nn.page.id,
                Nn.page.urlWithoutHash;
              var i = window.document.readyState;
              O.body && "complete" === i
                ? Nn.onLoad()
                : B.addEventHandler(window, "load", Nn.onLoad, !1);
            } catch (n) {
              logger.error(
                "ERROR: while initializing detector. Exception: ",
                n.stack ? n.stack : n.message
              ),
                console.log(
                  "WARNING[EyeView-1302]: Failed initializing detector script - " +
                    n.message
                ),
                Nn.saveClsDebugErrorEvent("initialize", n);
            }
            F.reportValidationErrors &&
              P.on("formValidationError", Nn.saveValidationError);
          },
          onEncryptionReady: function() {
            var n;
            for (
              Nn.state.encryptionReady = !0, n = 0;
              n < Nn.encryptionPendingEvents.length;
              n++
            )
              P.emit("saveEvent", Nn.encryptionPendingEvents[n]);
            Nn.encryptionPendingEvents = [];
          },
          onBlackoutEnter: function(n) {
            var e;
            window === window.top &&
              (((e = Nn.createEventObject(
                "blackout",
                B.currentTimestamp(),
                null
              )).value = n),
              Nn.saveEvent(e));
          },
          onBlackoutLeave: function() {
            Nn.savePageUpdate();
          },
          onLoad: function() {
            window.location.href;
            var n = B.currentTimestamp();
            Nn.state.loaded ||
              (B.time("onLoadInitialization"),
              Nn.documentEvent &&
                0 < O.title.length &&
                (void 0 === Nn.page.title || 0 === Nn.page.title.length) &&
                ((Nn.page.title = Nn.getPageTitle()),
                Nn.documentEvent.setExtraInfo(
                  Ye.prototype.VISUAL_NAME,
                  Nn.page.title
                )),
              !B.getLocationUrlSplitByHash(window.location.href).hash &&
                0 < F.segmentationTriggerBySimpleSelector.length &&
                0 < F.segmentationLabelBySimpleSelector.length &&
                "" !== F.segmentationLabelByAttribute &&
                "" !== F.segmentationTitleByAttribute &&
                Nn.logicalSegmentTracker.init(),
              F.botDetection && !B.hasTouch() && Nn.botDetector.init(),
              (Nn.state.loaded = !0),
              (Nn.page.loadTimestamp = n),
              Nn.trySendPerformanceEvent(),
              P.emit("init:loaded"),
              Nn.registerPostLoadEvents(),
              Nn.plugins.domRecordingPlugin && new _r(O, P, F),
              P.emit("init:post_binding"),
              B.timeEnd("onLoadInitialization"),
              window.location.href);
          },
          registerPlugins: function() {
            var t = this;
            E.forOwn(Nn.plugins, function(n, e) {
              n.initialize(P, t);
            });
          },
          registerPreLoadEvents: function() {
            function n() {
              return Nn.state.unloading;
            }
            var e = [
              {
                type: "beforeunload",
                interception: Nn.interceptUnload,
                target: window,
                logicalName: "unload",
                filter: n,
              },
              {
                type: "pagehide",
                interception: Nn.interceptUnload,
                target: window,
                logicalName: "unload",
                filter: n,
              },
              {
                type: "resize",
                internallyDispatchAs: "window",
                filter: Nn.filterResize,
                interception: Nn.interceptResize,
                target: window,
              },
              {
                type: Nn.getChangeEventType(),
                valueExtraction: Nn.extractElementValue,
                interception: Nn.interceptFocusLost,
                filter: Nn.filterNonChangableEventsElements,
                logicalName: "change",
                target: O,
              },
              { type: "reset", target: O },
              {
                type: "submit",
                valueExtraction: Nn.extractElementSource,
                target: O,
              },
              { type: "keyup", target: O, internalOnly: !0 },
              {
                type: Nn.getFocusInEventType(),
                internallyDispatchAs: "element",
                valueExtraction: Nn.extractElementValue,
                interception: Nn.interceptFocusIn,
                filter: Nn.filterNonTypableElements,
                target: O,
              },
            ];
            Nn.page.hasTouch
              ? (e.push({
                  type: "touchstart",
                  interception: Nn.interceptTouchStart,
                  target: O,
                }),
                e.push({
                  type: B.isHybridAndroid() ? "touchmove" : "touchend",
                  interception: Nn.interceptClickEnd,
                  target: O,
                }))
              : (e.push({
                  type: _.mouseEvents.down,
                  interception: Nn.interceptClickStart,
                  target: O,
                  logicalName: "mousedown",
                }),
                e.push({
                  type: _.mouseEvents.up,
                  interception: Nn.interceptClickEnd,
                  target: O,
                })),
              "blur" !== Nn.getChangeEventType() &&
                e.push({
                  preload: !0,
                  type: "blur",
                  valueExtraction: Nn.extractElementValue,
                  interception: Nn.interceptBlur,
                  filter: Nn.filterNonTypableElements,
                  logicalName: "change",
                  target: O,
                }),
              F.recordMouseMoves &&
                e.push({
                  type: "mousemove",
                  valueExtraction: Nn.extractMouseMoveValue,
                  encodeValue: !1,
                  interception: Nn.interceptMouseMove,
                  dontSendElement: !0,
                  target: O,
                }),
              F.recordHovers &&
                e.push({
                  type: "mouseover",
                  encodeValue: !1,
                  filter: Nn.filterHovers,
                  interception: Nn.interceptMouseOver,
                  target: O,
                }),
              F.recordScrolls &&
                e.push({
                  type: "scroll",
                  debounceBy: F.debounceScrolls,
                  valueExtraction: Nn.extractScrollValue,
                  filter: Nn.filterScrollElements,
                  interception: Nn.interceptScroll,
                  target: O,
                });
            var t = B.getMouseEnterTarget();
            (t !== O && t !== window) ||
              e.push({
                type: "mouseenter",
                interception: Nn.interceptMouseEnter,
                target: t,
              }),
              Nn.shouldListenToKeyEvents() &&
                (e.push({
                  type: "keydown",
                  interception: Nn.interceptKeyboard,
                  target: O,
                }),
                e.push({
                  type: "keypress",
                  interception: Nn.interceptKeyboard,
                  target: O,
                })),
              F.domRecordEnabled &&
                (P.on("pageSnapshot:save", Nn.savePageSnapshotEvent),
                P.on("pageUpdate", Nn.savePageUpdate)),
              F.resourcesRecordEnabled &&
                P.on("saveResourceEvent", Nn.saveResourceDataEvent),
              F.resourcesRecordAllowCors &&
                P.on("saveCorsDeniedEvent", Nn.saveCorsDeniedDataEvent),
              F.clientAttributesEnabled &&
                P.on("clientAttribute", Nn.saveClientAttributeEvent),
              F.resourceTimingRecordEnabled &&
                ut(
                  F.resourceTimingRecordEnabledByChance,
                  W,
                  "performanceRecord"
                ) &&
                P.on("waterfall", Nn.savePerformanceDataEvent),
              (Nn.page.hasTimingAPI && !F.recordAjaxCallsAnyway) ||
                (P.on("ajax:load", Nn.recordAjaxResource),
                P.on("ajax:error", Nn.recordAjaxResource)),
              -1 !== F.ajaxRecordSessionLimit &&
                P.on("ajax:limitReached", Nn.ajaxLimitReached),
              P.on("devToolsVisibilityChanged", Nn.saveDevToolsChangeEvent),
              P.on("domTampered", Nn.saveDomTamperedEvent),
              P.on("ajax:loadend", Nn.saveAjaxRequestEvent),
              P.on("ajax:reportStats", Nn.saveAjaxStatsEvent),
              P.on("segmentChanged", Nn.saveSegmentChangedEvent),
              P.on("lastSegment", Nn.saveLastSegmentEvent),
              P.on("titleChanged", Nn.saveTitleChanged),
              P.on("botDetection", Nn.saveBotDetectionEvent),
              P.on("reporter:idle", Nn.saveIdleEvent),
              P.on("customEvent", Nn.saveCustomEvent),
              P.on("pageError", Nn.onPageError),
              P.on("parentWindowInfo", Nn.setClientCookies),
              P.on("reportStruggle", Nn.saveStruggle),
              P.on("invalidateSession", Nn.onInvalidateSession),
              Nn.bindPageEvents(e);
          },
          saveIdleEvent: function(n) {
            var e = B.currentTimestamp(),
              t = Nn.createEventObject("idle", e, null);
            (t.value = e - n.idleBaseTime),
              t.setExtraInfo(
                Ye.prototype.TIME_SINCE_LAST_EVENT,
                e - n.latestEventTime
              ),
              Nn.saveEvent(t);
          },
          saveBotDetectionEvent: function(n) {
            var e = Nn.createEventObject(
              "botDetection",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          registerPostLoadEvents: function() {
            var n = [];
            Nn.state.mouseEnterReported ||
              B.getMouseEnterTarget() !== O.body ||
              n.push({
                type: "mouseenter",
                interception: Nn.interceptMouseEnter,
                target: O.body,
              }),
              0 < n.length && Nn.bindPageEvents(n);
          },
          bindPageEvents: function(n) {
            B.time("bindPageEvents"),
              E.forEach(n, function(n) {
                Nn.registerEventBinding(n);
              }),
              Nn.bindings.registered.length,
              E.pluck(Nn.bindings.registered, "type"),
              Nn.bindings.unsupportedEventTypes.length &&
                Nn.bindings.unsupportedEventTypes.join(", "),
              B.timeEnd("bindPageEvents");
          },
          registerEventBinding: function(e) {
            var n = e.target || window.document.body;
            if (E.isUndefined(n) || null == n) e.type;
            else
              try {
                Nn.handleElementsEvents(n, e);
              } catch (n) {
                logger.error(
                  "Failed binding '" + e.type + "'. Error: " + n.message,
                  n
                ),
                  window.console && console.error(n);
              }
          },
          handleElementsEvents: function(n, e) {
            var t,
              r = e.type;
            E.contains(_.eventTypes, r) &&
              (B.isEventSupported(r)
                ? ((t = Nn.createHandler(e)),
                  B.addEventHandler(n, r, t, !0),
                  Nn.bindings.registered.push({ type: r, el: n, handler: t }))
                : Nn.bindings.unsupportedEventTypes.push(r));
          },
          createHandler: function(e) {
            var n,
              t = function(n) {
                if (
                  (Tn.bounceAll(n.type),
                  Nn.handleDOMEvent(n, e),
                  "beforeunload" !== n.type)
                )
                  return !0;
              };
            return (
              0 < (e.debounceBy || 0) &&
                ((n = Tn[e.type])
                  ? (t = n(t, e.debounceBy).debouncedHandler)
                  : e.type),
              t
            );
          },
          handleDOMEvent: function(e, n) {
            try {
              if (
                ((e = e || window.event),
                !E.isUndefined(e._cls_handled) && !0 === e._cls_handled)
              )
                return;
              (e._cls_handled = !0), B.time("handleDOMEvent_" + e.type);
              var t = B.extractElementFromEvent(e),
                r = B.getElementId(t);
              (F.ignorableElementIds && E.contains(F.ignorableElementIds, r)) ||
                Nn.handleEvent(e, t, n),
                B.timeEnd("handleDOMEvent_" + e.type);
            } catch (n) {
              logger.error(
                "ERROR: while handling " + e.type + " DOM event ",
                e,
                " Exception: ",
                n.stack ? n.stack : n.message
              ),
                Nn.saveClsDebugErrorEvent(
                  "handleDOMEvent",
                  n,
                  "event type=" + e.type
                );
            }
          },
          assignSelectorInfo: function(n, e) {
            var t = X.getSelectorInfo(n);
            (e.selectorExpression = t.selector || _.encoding.rootSelector),
              t.hostSelectorPath &&
                e.setExtraInfo(
                  Ye.prototype.HOST_SELECTOR_PATH,
                  t.hostSelectorPath
                );
          },
          handleEvent: function(n, e, t) {
            var r, i, o, a, u;
            t.internallyDispatchAs &&
              P.emit(t.internallyDispatchAs + ":" + t.type, e),
              (E.isFunction(t.filter) && t.filter(e, n)) ||
                ((r = B.currentTimestamp()),
                (i = n.type),
                B.time("handleEvent_" + i),
                ((o = Nn.createEventObject(i, r, e)).domEvent = n),
                (a =
                  !E.isUndefined(t.dontSendElement) &&
                  !0 === t.dontSendElement),
                Nn.assignSelectorInfo(e, o),
                (o.selectorExpression = a
                  ? _.encoding.rootSelector
                  : o.selectorExpression),
                (o.binding = t),
                E.isUndefined(t.encodeValue) ||
                  !1 !== t.encodeValue ||
                  (o.shouldEncodeValue = !1),
                Nn.extractValue(o, t),
                Nn.extractExternalId(o, e),
                Nn.interceptReport(o, t),
                !F.reportVisualNames ||
                  !o.report ||
                  a ||
                  ((u = Nn.extractVisualName(e)) &&
                    o.setExtraInfo(Ye.prototype.VISUAL_NAME, u)),
                Nn.autoMaskingSignaled &&
                  (o.setExtraInfo(
                    Ye.prototype.AUTO_MASKING,
                    Nn.autoMaskingSignaled
                  ),
                  (Nn.autoMaskingSignaled = null)),
                t.internalOnly || Nn.saveEvent(o),
                P.emit("event:" + o.type, o),
                B.timeEnd("handleEvent" + i));
          },
          createEventObject: function(n, e, t) {
            var r = new Ye(n, e, t, Nn.page.id);
            return Nn.segmentManager.visitEvent(r), r;
          },
          onDomReady: function() {
            P.emit("init:domready");
          },
          onAutoMaskingApplied: function(n, e) {
            n.tagName, n.id, (Nn.autoMaskingSignaled = e);
          },
          addDomReadyEventHandler: function() {
            "interactive" === O.readyState
              ? Nn.onDomReady()
              : B.addEventHandler(
                  window,
                  "DOMContentLoaded",
                  Nn.onDomReady,
                  !0
                );
          },
          extractValue: function(e, n) {
            try {
              var t;
              E.isUndefined(n.valueExtraction) ||
                ((t = n.valueExtraction(e.domEvent, e.element)),
                E.isUndefined(t) || null == t || (e.value = t));
            } catch (n) {
              logger.error(
                "Failed extracting value for event " +
                  e.type +
                  " - " +
                  n.name +
                  ": " +
                  n.message,
                n
              ),
                "clsdebug" !== e.type &&
                  Nn.saveClsDebugErrorEvent(
                    "extractValue",
                    n,
                    "event type=" + e.type
                  );
            }
          },
          extractExternalId: function(n, e) {
            var t;
            e &&
              B.isElement(e) &&
              (t = this.externalIdResolver.resolve(e)) &&
                n.setExtraInfo(Ye.prototype.EXTERNAL_ID, t);
          },
          interceptReport: function(e, n) {
            if (!E.isUndefined(n.interception))
              try {
                e.report = n.interception(e);
              } catch (n) {
                logger.error(
                  "Failed intercepting " + e.type + " event: " + n.message,
                  n,
                  e
                ),
                  "clsdebug" !== e.type &&
                    Nn.saveClsDebugErrorEvent(
                      "interceptReport",
                      n,
                      "event type=" + e.type
                    );
              }
          },
          addEvent: function(n) {
            Nn.config.debugMode && Nn.reports.events.push(n);
          },
          getFocusInEventType: function() {
            return B.isOldIE() ? "focusin" : "focus";
          },
          getChangeEventType: function() {
            return B.isOldIE()
              ? "onfocusout" in O
                ? "focusout"
                : "blur"
              : "change";
          },
          startFocusTiming: function(n) {
            var e = B.currentTimestamp(),
              t = Nn.state.lastFocusData.startTime;
            Nn.state.lastFocusData = {
              element: n,
              startTime: e,
              prevFocusStartTime: t,
            };
          },
          endFocusTiming: function(n) {
            var e;
            Nn.state.lastFocusData.element === n &&
              ((e = B.currentTimestamp()),
              (Nn.state.lastFocusData.focusTime =
                e - Nn.state.lastFocusData.startTime));
          },
          filterNonTypableElements: function(n, e) {
            return (
              null === n ||
              (Nn.isChangebleElement(n) &&
                ("focus" === e.type || "focusin" === e.type
                  ? Nn.startFocusTiming(n)
                  : "blur" === e.type && Nn.endFocusTiming(n)),
              !Nn.isTypableElement(n))
            );
          },
          filterNonChangableEventsElements: function(n, e) {
            return (
              null === n ||
              null === e ||
              (Nn.isChangebleElement(n) && Nn.endFocusTiming(n),
              "change" !== e.type && !Nn.isChangebleElement(n))
            );
          },
          interceptFocusIn: function(n) {
            return Nn.checkTypedContentHasChangedAndUpdate(n), !1;
          },
          interceptFocusLost: function(n) {
            return (
              null !== n &&
              null !== n.element &&
              (Nn.state.lastFocusData.focusTime &&
                n.setExtraInfo(
                  n.FOCUS_TIME_ATTR,
                  Nn.state.lastFocusData.focusTime
                ),
              P.emit("event:elementChange", n),
              !!Nn.isSelectableElement(n.element) ||
                Nn.checkTypedContentHasChangedAndUpdate(n))
            );
          },
          interceptBlur: function(n) {
            return (
              Nn.state.lastFocusData.focusTime &&
                n.setExtraInfo(
                  n.FOCUS_TIME_ATTR,
                  Nn.state.lastFocusData.focusTime
                ),
              P.emit("event:elementChange", n),
              Nn.checkTypedContentHasChangedAndUpdate(n)
            );
          },
          checkTypedContentHasChangedAndUpdate: function(n) {
            var e = "focus" === n.type || "focusin" === n.type,
              t = "blur" === n.type || "focusout" === n.type,
              r = n.selectorExpression,
              i = n.value;
            if (null === i || E.isUndefined(i)) return !1;
            var o = { text: i, markAutoComplete: !1 },
              a = Nn.state.typableElementsLRUMap.set(r, o),
              u = E.isUndefined(a);
            if (u && t) return !1;
            if (
              (e &&
                !u &&
                a.text !== i &&
                0 <=
                  i.toLocaleLowerCase().indexOf(a.text.toLocaleLowerCase()) &&
                (o.markAutoComplete = !0),
              t && !u && a.markAutoComplete)
            ) {
              var c,
                s = Nn.state.lastFocusData.prevFocusStartTime;
              return (
                !E.isUndefined(s) &&
                E.isNumber(s) &&
                Nn.state.lastFocusData.element === n.element
                  ? ((c = B.currentTimestamp() - s),
                    n.setExtraInfo(n.FOCUS_TIME_ATTR, c))
                  : n.setExtraInfo(n.FOCUS_TIME_ATTR, -1),
                n.setExtraInfo(n.AUTO_COMPLETE_ATTR, !0),
                !0
              );
            }
            return u || a.text !== i;
          },
          isMouseEvent: function(n) {
            return n === _.mouseEvents.down || n === _.mouseEvents.up;
          },
          isTouchEvent: function(n) {
            return "touchstart" === n || "touchend" === n || "touchmove" === n;
          },
          interceptMouseEnter: function(n) {
            if (Nn.state.mouseEnterReported) return !1;
            var e = B.getCoordinate(n.domEvent);
            return (
              n.setExtraInfo(Ye.prototype.COORDINATE_ATTR, e),
              Nn.removeEventBinding("mouseenter"),
              (Nn.state.mouseEnterReported = !0),
              Nn.page.hasTouch &&
                !Nn.touchDetected &&
                B.isChromeDesktop() &&
                (Nn.switchTouchToMouse(), (Nn.page.hasTouch = !1)),
              !0
            );
          },
          switchTouchToMouse: function() {
            Nn.removeEventBinding("touchstart"),
              B.isHybridAndroid()
                ? Nn.removeEventBinding("touchmove")
                : Nn.removeEventBinding("touchend");
            var n = [
              {
                type: _.mouseEvents.down,
                interception: Nn.interceptClickStart,
                target: O,
                logicalName: "mousedown",
              },
              {
                type: _.mouseEvents.up,
                interception: Nn.interceptClickEnd,
                target: O,
                logicalName: "mouseup",
              },
            ];
            Nn.bindPageEvents(n);
          },
          filterHovers: function(e) {
            try {
              if (
                "undefined" == typeof jQuery ||
                E.isUndefined(jQuery) ||
                E.isUndefined(jQuery._data)
              )
                return !0;
              for (
                var n = e,
                  t = 1,
                  r = E.isNumber(F.mhDeepLevel) ? F.mhDeepLevel : 1;
                null !== n && n !== O.body && t <= r;

              ) {
                var i = jQuery._data(n, "events");
                if (i && i.mouseover && 0 < i.mouseover.length)
                  return F.mhDebug && n.id && n.id, Nn.addHoverElement(n), !0;
                t++, (n = n.parentElement);
              }
            } catch (n) {
              logger.error(
                "Exception while extracting hover information for element : ",
                e,
                n.message,
                n
              ),
                Nn.saveClsDebugErrorEvent(
                  "filterHovers",
                  n,
                  "element=" + (e ? e.nodeName : "null")
                );
            }
            return !0;
          },
          addHoverElement: function(n) {
            Nn.state.hover.hoverElementList.length < F.mhMaxInMemeoryHovers &&
              (Nn.state.hover.hoverElementList.push(n),
              (Nn.state.hover.hoverStartTimestamp = B.currentTimestamp()));
          },
          cleanHoverElements: function() {
            F.mhDebug,
              (Nn.state.hover.hoverElementList = []),
              (Nn.state.hover.hoverStartTimestamp = 0);
          },
          filterResize: function() {
            return B.isOldIE();
          },
          interceptResize: function(n) {
            var e = B.getWindowSize(),
              t = B.getScreenSize(),
              r = !1;
            return (
              null === e ||
                null === Nn.page.windowSize ||
                (Nn.page.windowSize.width === e.width &&
                  Nn.page.windowSize.height === e.height) ||
                ((Nn.page.windowSize = e), (r = !0)),
              null === t ||
                null === Nn.page.screenSize ||
                (Nn.page.screenSize.width === t.width &&
                  Nn.page.screenSize.height === t.height) ||
                ((Nn.page.screenSize = t), (r = !0)),
              window.devicePixelRatio !== Nn.state.dpr &&
                (window.devicePixelRatio > Nn.state.dpr
                  ? n.setExtraInfo(n.ZOOM, Nn.zoomType.IN)
                  : n.setExtraInfo(n.ZOOM, Nn.zoomType.OUT),
                (Nn.state.dpr = window.devicePixelRatio)),
              (n.value = {}),
              (n.value.dpr = Nn.state.dpr),
              (n.value.window = Nn.page.windowSize),
              (n.value.screen = Nn.page.screenSize),
              r
            );
          },
          interceptMouseOver: function() {
            return !1;
          },
          interceptClickStart: function(n) {
            return (
              Nn.botDetector.isActive() &&
                Nn.isMouseEvent(n.type) &&
                Nn.botDetector.notifyMouseAction(n.domEvent),
              F.recordHovers && Nn.saveHoverEvent(),
              (Nn.state.clickStart = Nn.createClickDetailsObject(n)),
              !(Nn.state.clickStartType = "mousedown")
            );
          },
          interceptTouchStart: function(n) {
            return (
              (Nn.touchDetected = !0),
              (Nn.state.clickStartType = "touchstart"),
              (Nn.state.clickStart = Nn.createClickDetailsObject(n)),
              !1
            );
          },
          interceptClickEnd: function(n) {
            Nn.botDetector.isActive() &&
              Nn.isMouseEvent(n.type) &&
              Nn.botDetector.notifyMouseAction(n.domEvent);
            var e,
              t,
              r = !1,
              i = Nn.state.clickStart,
              o = Nn.createClickDetailsObject(n);
            return (
              i &&
              (Math.abs(o.coordinate.x - i.coordinate.x) > F.minDragPixels ||
                Math.abs(o.coordinate.y - i.coordinate.y) > F.minDragPixels)
                ? ((t = {
                    duration: i.timestamp ? o.timestamp - i.timestamp : -1,
                    start: i.coordinate,
                    end: o.coordinate,
                  }),
                  (n.type = "drag"),
                  (n.value = t),
                  (e = B.getElementXYCoordinates(i.el)) &&
                    n.setExtraInfo(Ye.prototype.SYNC_COORDINATE, e),
                  B.isHybrid() &&
                    (n.addHybridActionDataItem("start", {
                      x: i.coordinate.x,
                      y: i.coordinate.y,
                    }),
                    n.addHybridActionDataItem("end", {
                      x: o.coordinate.x,
                      y: o.coordinate.y,
                    })),
                  (r = !0))
                : i &&
                  ((n.type = Nn.state.clickStartType),
                  (n.value = i),
                  (n.timestamp = i.timestamp),
                  n.setExtraInfo(
                    Ye.prototype.COORDINATE_ATTR,
                    Nn.state.clickStart.coordinate
                  ),
                  E.isUndefined(n.element) ||
                    ((e = B.getElementXYCoordinates(n.element)) &&
                      n.setExtraInfo(Ye.prototype.SYNC_COORDINATE, e)),
                  B.isHybrid() &&
                    n.addHybridActionDataItem("start", {
                      x: Nn.state.clickStart.coordinate.x,
                      y: Nn.state.clickStart.coordinate.y,
                    }),
                  P.emit("event:click", n),
                  n.rageSequence &&
                    n.indexInRage &&
                    (n.setExtraInfo(Ye.prototype.RAGE_SEQUENCE, n.rageSequence),
                    n.setExtraInfo(Ye.prototype.INDEX_IN_RAGE, n.indexInRage)),
                  (r = !0)),
              (Nn.state.clickStart = L),
              (Nn.state.clickStartType = L),
              r
            );
          },
          interceptUnload: function(n) {
            B.time("unload"),
              (Nn.state.unloading = !0),
              Nn.segmentManager.onUnload();
            var e = B.currentTimestamp();
            Nn.page.hasTimingAPI ||
              (sessionStorage["gb.lastReferrer"] =
                w.encodeNumber(e) +
                "_" +
                B.Base64.encode(Nn.page.urlWithoutHash));
            var t = e - Nn.page.initializationTimestamp;
            return (
              n.setExtraInfo(n.FOCUS_TIME_ATTR, t),
              n.setExtraInfo(
                n.SCROLL_REACH,
                Math.round(Nn.state.maxScrollReach)
              ),
              Nn.debugHelper.visitUnloadEvent(n),
              B.timeEnd("unload"),
              (n.timestamp = e),
              !0
            );
          },
          updateScrollReach: function() {
            Nn.state.maxScrollReach = Math.max(
              Nn.state.maxScrollReach,
              B.getCurrentScrollReach()
            );
          },
          interceptScroll: function(n) {
            return (
              "#document" === n.element.nodeName && Nn.updateScrollReach(), !0
            );
          },
          filterScrollElements: function(n) {
            return !(null != n && "MARQUEE" !== n.nodeName);
          },
          interceptMouseMove: function(n) {
            return (
              (n.lastSingleMoveTimestamp = n.timestamp),
              n.setExtraInfo(n.FOCUS_TIME_ATTR, 0),
              !0
            );
          },
          createClickDetailsObject: function(n) {
            return {
              coordinate: B.getCoordinate(n.domEvent),
              el: n.element,
              selector: n.selectorExpression,
              timestamp: n.timestamp,
            };
          },
          shouldListenToKeyEvents: function() {
            return (
              F.recordEnterForInputs || Nn.recordAutoCompleteRelatedChars()
            );
          },
          recordAutoCompleteRelatedChars: function() {
            return (
              void 0 === Nn.acCharsSupport &&
                (Nn.acCharsSupport =
                  F.recordTypingAll ||
                  F.supportNativeAutoComplete ||
                  (F.recordTypingForAttrs &&
                    0 < F.recordTypingForAttrs.length) ||
                  (F.recordTypingForClasses &&
                    0 < F.recordTypingForClasses.length) ||
                  (F.recordTypingForIDs && 0 < F.recordTypingForIDs.length)),
              Nn.acCharsSupport
            );
          },
          resolveKeyData: function(n) {
            var e = n.domEvent,
              t = n.element.value,
              r = n.element,
              i = e.keyCode || e.charCode;
            n.value = { unicode: i };
            var o = K.isCensored(r);
            return "keypress" === n.type
              ? 13 !== i &&
                  8 !== i &&
                  "0" !== e.charCode &&
                    (o
                      ? (n.value = { unicode: 42 })
                      : E.isUndefined(t) ||
                        null === t ||
                        (n.value.content = t + String.fromCharCode(i)),
                    !0)
              : "keydown" === n.type &&
                  (38 === i || 40 === i || 13 === i
                    ? (o || (n.value.content = n.element.value), !0)
                    : 8 === i &&
                      !E.isUndefined(t) &&
                      null !== t &&
                      !o &&
                      ((n.value.content =
                        0 < t.length ? t.substring(0, t.length - 1) : ""),
                      !0));
          },
          interceptKeyboard: function(n) {
            var e = n.element;
            if (!(e && ("INPUT" === e.nodeName || "BUTTON" === e.nodeName)))
              return !1;
            var t,
              r = 13 === (n.domEvent.keyCode || n.domEvent.charCode);
            if (((n.shouldEncodeValue = !1), r && F.recordEnterForInputs))
              return Nn.resolveKeyData(n);
            if (
              F.supportNativeAutoComplete &&
              (e.hasAttribute("autocomplete") ||
                (e.hasAttribute("aria-autocomplete") &&
                  "none" !== e.getAttribute("aria-autocomplete")) ||
                (e.hasAttribute("class") &&
                  E.contains(e.getAttribute("class"), "autocomplete")))
            )
              return Nn.resolveKeyData(n);
            if (F.recordTypingAll) return Nn.resolveKeyData(n);
            if (F.recordTypingForAttrs && 0 < F.recordTypingForAttrs.length)
              for (t = 0; t < F.recordTypingForAttrs.length; t++)
                if (e.hasAttribute(F.recordTypingForAttrs[t]))
                  return Nn.resolveKeyData(n);
            if (
              e.hasAttribute("class") &&
              F.recordTypingForClasses &&
              0 < F.recordTypingForClasses.length
            )
              for (t = 0; t < F.recordTypingForClasses.length; t++)
                if (
                  E.contains(
                    e.getAttribute("class"),
                    F.recordTypingForClasses[t]
                  )
                )
                  return Nn.resolveKeyData(n);
            var i = B.getElementId(e);
            if (i && F.recordTypingForIDs && 0 < F.recordTypingForIDs.length)
              for (t = 0; t < F.recordTypingForIDs.length; t++)
                if (i === F.recordTypingForIDs[t]) return Nn.resolveKeyData(n);
            return !1;
          },
          recordAjaxResource: function(n) {
            Nn.addResource("ajax", n.url, n.timestamp);
          },
          addResource: function(n, e, t) {
            var r = new Ft(n, e, t);
            return Nn.reports.resources.push(r), P.emit("timingResource", r), r;
          },
          saveEvent: function(n) {
            var e;
            (Nn.blackoutManager.isUnderBlackout() &&
              ("idle" !== n.type ||
                ("idle" === n.type && !F.blackoutIdleReporting))) ||
              this.state.stopped ||
              ((e = Nn.renameEventType(n)),
              Nn.addEvent(n),
              An.setRegisteredDebugInfoOnEvent(n),
              F.debugMode &&
                (n.report || F.traceMode) &&
                Nn.shouldLog(n.type) &&
                Nn.logEvent(n, e),
              n.report &&
                (Nn.state.encryptionReady
                  ? P.emit("saveEvent", n)
                  : Nn.encryptionPendingEvents.push(n)));
          },
          shouldLog: function(n) {
            return "mousemove" === n
              ? !F.suppressMouseMovesDebug || F.mmDebug
              : "scroll" !== n || F.scrollDebug;
          },
          renameEventType: function(n) {
            var e = n.type;
            return (
              E.isUndefined(n.binding) ||
                E.isUndefined(n.binding.logicalName) ||
                "drag" === n.type ||
                (n.type = n.binding.logicalName),
              e
            );
          },
          logEvent: function(n, e) {
            var t;
            F.debugMode &&
              ((t = [
                "saving event: " +
                  (n.type === e ? n.type : n.type + "(" + e + ")") +
                  " selector: " +
                  (n.selectorExpression || ""),
              ]).push("{value="),
              t.push(n.value || "NONE"),
              n.extraInfo && (t.push("{ extraInfo="), t.push(n.extraInfo)),
              t.push("}"));
          },
          saveDocumentLoadEvent: function(n) {
            var e = Nn.createEventObject("document", n, null);
            (Nn.page.url = Y.mask(Nn.page.url)),
              (Nn.page.urlWithoutHash = Y.mask(Nn.page.urlWithoutHash)),
              (e.value = Nn.page),
              (e.shouldEncodeValue = !1),
              (Nn.page.screenSize = Nn.uaUtils.captureScreenSize()),
              (Nn.page.windowSize = Nn.uaUtils.captureWindowSize()),
              (Nn.page.title = Nn.getPageTitle()),
              Nn.page.title &&
                e.setExtraInfo(Ye.prototype.VISUAL_NAME, Nn.page.title),
              void 0 !== iframeHelper &&
                e.setExtraInfo(
                  Ye.prototype.WINDOW_DEPTH,
                  iframeHelper.tryGetCurrentDepth(window)
                ),
              e.setExtraInfo(
                Ye.prototype.HISTORY_LENGTH,
                window.history.length
              ),
              Nn.pageInfo &&
                (e.setExtraInfo(
                  Ye.prototype.DEBUG_PAGE_SN,
                  "" + Nn.pageInfo.pageSn
                ),
                e.setExtraInfo(
                  Ye.prototype.DEBUG_BROWSER_TAB_ID,
                  "" + Nn.pageInfo.browserTabId
                )),
              F.mobileHybridId &&
                e.setExtraInfo(Ye.prototype.MOBILE_HYBRID_ID, F.mobileHybridId),
              F.debounceScrolls &&
                e.setExtraInfo(Ye.prototype.SCROLL_DEBOUNCED, !0),
              (Nn.documentEvent = e),
              this.debugHelper.visitLoadEvent(e),
              Nn.documentEventHook
                ? Nn.documentEventHook(e, Nn.onParentHandshakeDone)
                : Nn.onParentHandshakeDone();
          },
          trySendPerformanceEvent: function() {
            Nn.state.loaded &&
              Nn.state.handshakeDone &&
              Nn.resolvePageLoadTime(Nn.page);
          },
          onParentHandshakeDone: function() {
            (Nn.state.handshakeDone = !0),
              Nn.documentEvent &&
                (Nn.saveEvent(Nn.documentEvent), P.emit("event:document")),
              Nn.trySendPerformanceEvent();
          },
          savePageUpdate: function() {
            var n = Nn.createEventObject(
              "pageUpdate",
              B.currentTimestamp(),
              null
            );
            Nn.saveEvent(n);
          },
          onPageError: function(n) {
            var e;
            n.eventLimitExceeded ||
              (((e = Nn.createEventObject(
                "error",
                B.currentTimestamp(),
                null
              )).value = n.error),
              (e.shouldEncodeValue = !0),
              Nn.saveEvent(e));
          },
          saveTitleChanged: function(n) {
            var e = Nn.createEventObject(
              "titleChanged",
              B.currentTimestamp(),
              null
            );
            (e.value = Nn.getPageTitle()),
              (e.shouldEncodeValue = !0),
              Nn.saveEvent(e);
          },
          saveSegmentChangedEvent: function(n) {
            var e = Nn.createEventObject(
              "segmentChanged",
              B.currentTimestamp(),
              null
            );
            (e.value = n),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e),
              Nn.plugins.domRecordingPlugin &&
                Nn.plugins.domRecordingPlugin.isStarted() &&
                setTimeout(function() {
                  Nn.savePageUpdate();
                }, 0);
          },
          saveLastSegmentEvent: function(n) {
            var e = Nn.createEventObject(
              "lastSegment",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          savePageSnapshotEvent: function(n) {
            var e = Nn.useCurrentTimeForPagesnapshot
                ? B.currentTimestamp()
                : Nn.page.initializationTimestamp,
              t = Nn.createEventObject("pageSnapshot", e, null);
            (t.value = n), (t.shouldEncodeValue = !1);
            var r = window.performance && window.performance.timing;
            r &&
              t.setExtraInfo(
                Ye.prototype.NAVIGATION_TIMING,
                JSON.parse(JSON.stringify(r))
              ),
              Nn.autoMaskingSignaled &&
                (t.setExtraInfo(
                  Ye.prototype.AUTO_MASKING,
                  Nn.autoMaskingSignaled
                ),
                (Nn.autoMaskingSignaled = null)),
              Nn.page.snapshotFuseData &&
                t.setExtraInfo(
                  Ye.prototype.SNAPSHOT_FUSE,
                  JSON.stringify(Nn.page.snapshotFuseData)
                ),
              Nn.saveEvent(t);
          },
          saveDevToolsChangeEvent: function(n) {
            var e = Nn.createEventObject(
              "devToolsVisibilityChanged",
              B.currentTimestamp(),
              null
            );
            (e.value = n.value), Nn.saveEvent(e);
          },
          saveDomTamperedEvent: function(n) {
            var e = Nn.createEventObject(
              "domTampered",
              B.currentTimestamp(),
              null
            );
            (e.element = n.element),
              void 0 !== n.newText &&
                e.setExtraInfo(Ye.prototype.CURRENT_VALUE, n.newText),
              void 0 !== n.prevText &&
                e.setExtraInfo(Ye.prototype.OLD_VALUE, n.prevText),
              Nn.assignSelectorInfo(n.element, e),
              Nn.saveEvent(e);
          },
          saveStruggle: function(n) {
            var e = Nn.createEventObject(
              "webStruggle",
              B.currentTimestamp(),
              null
            );
            n.elementSelector
              ? ((e.selectorExpression =
                  n.elementSelector.selector || _.encoding.rootSelector),
                n.elementSelector.hostSelectorPath &&
                  n.setExtraInfo(
                    Ye.prototype.HOST_SELECTOR_PATH,
                    n.elementSelector.hostSelectorPath
                  ))
              : ((e.element = n.element), Nn.assignSelectorInfo(n.element, e)),
              (e.value = n.dataToEncode),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e);
          },
          saveAjaxRequestEvent: function(n) {
            var e = Nn.createEventObject(
              "ajaxRequest",
              n.startedAt || B.currentTimestamp(),
              null
            );
            (n.ajaxUrls = Nn.ajaxUrls),
              (e.value = n),
              (e.selectorExpression = n.lastFocusedSelectorInfo
                ? n.lastFocusedSelectorInfo.selector
                : _.encoding.rootSelector),
              n.lastFocusedSelectorInfo &&
                n.lastFocusedSelectorInfo.hostSelectorPath &&
                e.setExtraInfo(
                  Ye.prototype.HOST_SELECTOR_PATH,
                  n.lastFocusedSelectorInfo.hostSelectorPath
                ),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e);
          },
          ajaxLimitReached: function() {
            var n = Nn.createEventObject(
              "ajaxLimitReached",
              B.currentTimestamp(),
              null
            );
            Nn.saveEvent(n);
          },
          saveAjaxStatsEvent: function(n) {
            var e = Nn.createEventObject(
              "ajaxStats",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          saveClsDebugErrorEvent: function(n, e, t) {
            var r,
              i = Nn.formatClsDebugMessage(n, e, t);
            0 !== i.length &&
              (((r = Nn.createEventObject(
                "clsdebug",
                B.currentTimestamp(),
                null
              )).value = i),
              Nn.saveEvent(r));
          },
          formatClsDebugMessage: function(n, e, t) {
            if (Nn.state.clsDebugCounter >= F.clsDebugMaxReports) return "";
            Nn.state.clsDebugCounter++;
            var r = e ? (e.stack ? e.stack : e.name + ": " + e.message) : "";
            return (
              "CLS Error in " +
              n +
              " " +
              (t ? "{" + t + "} " : "") +
              (0 < (r = B.truncateStr(r, F.clsDebugCharsLimit, !0)).length
                ? ": " + r
                : "")
            );
          },
          saveValidationError: function(n) {
            var e = Nn.createEventObject(
              "formValidationError",
              B.currentTimestamp(),
              null
            );
            (e.element = n.element),
              (e.value = n.message),
              Nn.assignSelectorInfo(n.element, e),
              Nn.saveEvent(e);
          },
          saveHoverEvent: function() {
            var n = Nn.createEventObject(
              "hover",
              Nn.state.hover.hoverStartTimestamp,
              null
            );
            if (0 !== Nn.state.hover.hoverElementList.length) {
              F.mhDebug && Nn.state.hover.hoverElementList.length;
              var e = Nn.state.hover.hoverElementList;
              Nn.cleanHoverElements();
              for (var t, r, i = {}, o = [], a = e.length - 1; 0 <= a; a--)
                if (
                  ((r = e[a]),
                  i[
                    (t =
                      X.getSelectorInfo(r).selector || _.encoding.rootSelector)
                  ])
                )
                  F.mhDebug;
                else if (
                  ((i[t] = !0), o.push(t), o.length >= F.mhMaxListSize)
                ) {
                  F.mhDebug;
                  break;
                }
              (n.value = e), (n.shouldEncodeValue = !1), Nn.saveEvent(n);
            } else F.mhDebug;
          },
          saveCustomEvent: function(n) {
            var e = Nn.createEventObject("custom", B.currentTimestamp(), null);
            (e.value = n),
              !E.isUndefined(n.domEl) &&
                B.isDOMElement(n.domEl) &&
                ((e.element = n.domEl), Nn.assignSelectorInfo(n.domEl, e)),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e);
          },
          saveThirdPartyMapEvent: function(n) {
            var e = Nn.createEventObject(
              "thirdpartymap",
              B.currentTimestamp(),
              null
            );
            (e.value = n.value),
              n.type &&
                e.setExtraInfo(Ye.prototype.TP_INTEGRATION_TYPE, n.type),
              n.element &&
                ((e.element = n.element), Nn.assignSelectorInfo(n.element, e)),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e);
          },
          saveThirdPartyAttributeEvent: function(n) {
            var e = Nn.createEventObject(
              "thirdPartyAttribute",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          onDomFuseBlown: function(n) {
            Nn.page.snapshotEmitted || (Nn.page.snapshotFuseData = n);
          },
          onPageNameResolved: function(n) {
            Nn.page.name = n;
          },
          saveABTesting: function(n) {
            var e = Nn.createEventObject(
              "abTesting",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          saveResourceDataEvent: function(n) {
            var e = Nn.createEventObject(
              "resourceContent",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          saveCorsDeniedDataEvent: function(n) {
            var e = Nn.createEventObject(
              "corsDeniedResource",
              B.currentTimestamp(),
              null
            );
            (e.value = n), Nn.saveEvent(e);
          },
          saveClientAttributeEvent: function(n) {
            var e = Nn.createEventObject(
              "clientAttribute",
              B.currentTimestamp(),
              null
            );
            (e.value = n), (e.shouldEncodeValue = !1), Nn.saveEvent(e);
          },
          savePerformanceDataEvent: function(n) {
            var e = Nn.createEventObject(
              "waterfall",
              B.currentTimestamp(),
              null
            );
            (e.value = JSON.parse(JSON.stringify(n))),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e);
          },
          initializePageDetails: function() {
            B.time("initializePageDetails");
            var n = Nn.page;
            (n.initializationTimestamp = B.currentTimestamp()),
              (n.id = B.uuid()),
              (n.frame = window.self !== top),
              n.frame &&
                (n.referrerWithoutHash = B.getReferrerUrlWithoutHash());
            var e = B.getLocationUrlSplitByHash();
            (n.url = e.url),
              (n.urlWithoutHash = e.withoutHash),
              (n.hash = e.hash),
              (n.hasTouch = B.hasTouch()),
              (n.hasTimingAPI = B.hasTimingAPI()),
              (n.title = Nn.getPageTitle()),
              B.timeEnd("initializePageDetails");
          },
          getPageTitle: function() {
            var n = B.truncateStr(O.title, F.titleCharsLimit, !0);
            return (
              F.maskTitle && (n = B.transformTextSegments(n, V.censorValueOf)),
              n
            );
          },
          resolvePageLoadTime: function(n) {
            var e, t, r, i;
            n.hasTimingAPI
              ? Nn.acquirePerformanceTiming()
              : (e = sessionStorage["gb.lastReferrer"]) &&
                ((t = O.referrer.replace(/#.*/, "")),
                (r = e.split("_")),
                t === B.Base64.decode(r[1]) &&
                  ((i = parseInt(r[0], 36)),
                  (n.timing.total = n.loadTimestamp - i),
                  Nn.saveTimingEvent({ page: n.timing })));
          },
          saveTimingEvent: function(n) {
            var e = Nn.createEventObject(
              "timing",
              B.currentTimestamp(),
              window.document
            );
            (e.value = n),
              Nn.page.title &&
                e.setExtraInfo(Ye.prototype.VISUAL_NAME, Nn.page.title),
              Nn.saveEvent(e);
          },
          savePerformanceEvent: function(n) {
            var e = Nn.createEventObject(
              "performance",
              B.currentTimestamp(),
              window.document
            );
            window.performance &&
              window.performance.timing &&
              ((e.value = {
                perf: JSON.parse(JSON.stringify(window.performance)),
                browserTime: n,
              }),
              Nn.page.title &&
                e.setExtraInfo(Ye.prototype.VISUAL_NAME, Nn.page.title),
              Nn.page.name &&
                e.setExtraInfo(Ye.prototype.PAGE_NAME, Nn.page.name),
              (e.shouldEncodeValue = !1),
              Nn.saveEvent(e));
          },
          acquirePerformanceTiming: function() {
            var n;
            0 === window.performance.timing.loadEventEnd
              ? window.setTimeout(Nn.acquirePerformanceTiming, 300)
              : ((n = B.currentTimestamp() - Nn.page.initializationTimestamp),
                Nn.savePerformanceEvent(n));
          },
          setClientCookies: function(n, e) {
            var t,
              r = (function(n, e, t) {
                e = e || {};
                var r,
                  i,
                  o,
                  a,
                  u,
                  c,
                  s = {};
                t ||
                  ((i = e.visitorId),
                  (c = u = a = !1),
                  (o = i)
                    ? o !== n.get(_.cookies.visitor) && (c = u = !0)
                    : (o = n.get(_.cookies.visitor)) ||
                      ((u = a = !0), (o = B.uuid())),
                  u && n.set(_.cookies.visitor, o, B.dateFromNow(15768e7)),
                  (r = { isNew: a, visitorId: o, valueChanged: c }),
                  (s.visitorId = r.visitorId),
                  (s.changed = r.valueChanged));
                var f,
                  d,
                  l,
                  h,
                  v,
                  m,
                  g =
                    ((f = t),
                    (d = e.sessionId),
                    (l = r && r.isNew),
                    (m = v = !1),
                    f
                      ? ((h = B.uuid() + ":" + (l ? "0" : "1")), (m = v = !0))
                      : (h = d)
                      ? h !== n.get(_.cookies.session) && (m = v = !0)
                      : (h = n.get(_.cookies.session)) ||
                        ((h = B.uuid() + ":" + (l ? "0" : "1")), (v = !0)),
                    v && n.set(_.cookies.session, h),
                    { sessionId: h, valueChanged: m });
                return (
                  (s.sessionId = g.sessionId),
                  (s.changed = s.changed || g.valueChanged),
                  s
                );
              })(z, n, e);
            q.isCorsReporting() &&
              r.changed &&
              (t = Nn.plugins.cors) && t.onCookieChanged(),
              r.visitorId && (this.visitorId = r.visitorId),
              (this.sessionId = r.sessionId);
          },
          onInvalidateSession: function() {
            P.emit("forceFlush"),
              Nn.setClientCookies(L, !0),
              Nn.sessionId,
              (Nn.page.id = B.uuid()),
              (Nn.page.snapshotEmitted = !1),
              (Nn.page.snapshotFuseData = L),
              P.emit("session:new", {
                sessionId: Nn.sessionId,
                visitorId: Nn.visitorId,
                pageId: Nn.page.id,
                pageName: Nn.page.name,
              });
          },
          registerPlugin: function(n, e) {
            Nn.plugins[n] = e;
          },
          removeEventBinding: function(n) {
            for (var e = -1, t = 0; t < Nn.bindings.registered.length; t++) {
              var r = Nn.bindings.registered[t];
              r.type === n &&
                (B.removeEventHandler(r.el, n, r.handler), (e = t));
            }
            0 <= e && Nn.bindings.registered.splice(e, 1);
          },
          removeBindings: function() {
            E.forEach(Nn.bindings.registered, function(n) {
              B.removeEventHandler(n.el, n.type, n.handler);
            }),
              (Nn.bindings.registered = []),
              (Nn.bindings.unsupportedEventTypes = []);
          },
          getEncoder: function() {
            return w;
          },
          supportModeOn: function(n) {
            (n = n || !1), Nn.applySupportMode(), n && W.set("supportMode", !0);
          },
          isSupportModeSession: function() {
            return (
              void 0 !== z.get(_.cookies.supportMode) || W.get("supportMode")
            );
          },
          checkSupportModeSession: function() {
            Nn.isSupportModeSession() && Nn.applySupportMode();
          },
          applySupportMode: function() {},
          asStoppable: function() {
            var e = this;
            return {
              isStopped: function(n) {
                return (
                  n && (e.state.stopped = "true" === W.get("stopped")),
                  e.state.stopped
                );
              },
              start: function() {
                return (
                  !!e.state.stopped &&
                  ((e.state.stopped = !1), W.remove("stopped"), !0)
                );
              },
              stop: function() {
                return (
                  !e.state.stopped &&
                  ((e.state.stopped = !0),
                  P.emit("recordingStopped"),
                  W.set("stopped", "true"),
                  !0)
                );
              },
            };
          },
        }),
        (Ft.prototype.toString = function() {
          return this.url;
        }),
        (Pt.prototype.toString = function() {
          return "(" + this.x + "," + this.y + ")";
        }),
        (Ln = {
          inMemoryMovesCounter: 0,
          notifyEventsFlush: function() {
            Ln.inMemoryMovesCounter = 0;
          },
          diluteEvents: function(n, e, t) {
            if (e) {
              if ("resize" === t.type) return !0;
              if ("scroll" === t.type)
                return "scroll" === e.type ||
                  (Nn.page.hasTouch && "drag" === e.type)
                  ? !(t.timestamp - e.timestamp > F.minStallingScrollTime) &&
                      ((t.selectorExpression = e.selectorExpression),
                      F.scrollDebug && e.type,
                      !0)
                  : !(
                      "mousemove" !== e.type ||
                      1 !== e.value.length ||
                      !n ||
                      "scroll" !== n.type
                    ) &&
                      !(t.timestamp - n.timestamp > F.minStallingScrollTime) &&
                        (F.scrollDebug, !0);
              if ("mousemove" === t.type && "mousemove" !== e.type) return !0;
              if ("mousemove" === t.type && "mousemove" === e.type) {
                var r = F.reportByPost ? 3e3 : F.mmMaxMovesInEventWithTimes,
                  i = F.reportByPost ? 3e3 : F.mmMaxMovesInEventNoTimes;
                return (F.mmRecordTimes && e.value.length >= r) ||
                  (!F.mmRecordTimes && e.value.length >= i)
                  ? (F.mmDebug && e.value.length, Ln.inMemoryMovesCounter++, !1)
                  : !E.isUndefined(F.mmMinStallingMoveTime) &&
                    t.timestamp - e.lastSingleMoveTimestamp >
                      F.mmMinStallingMoveTime
                  ? (F.mmDebug && (t.timestamp, e.lastSingleMoveTimestamp),
                    Ln.inMemoryMovesCounter++,
                    !1)
                  : (Ln.checkExceededInMemoryMoves()
                      ? F.mmDebug && F.mmMaxInMemoryMoves
                      : Ln.diluteMoveEvents(e, t) && Ln.inMemoryMovesCounter++,
                    !0);
              }
            }
            return "mousemove" === t.type && (Ln.inMemoryMovesCounter++, !0);
          },
          checkExceededInMemoryMoves: function() {
            var n = F.reportByPost ? 3e3 : F.mmMaxInMemoryMoves;
            return Ln.inMemoryMovesCounter >= n;
          },
          diluteMoveEvents: function(n, e) {
            var t = E.last(n.value),
              r = e.value[0],
              i = e.timestamp - n.lastSingleMoveTimestamp,
              o = n.getExtraInfo(n.FOCUS_TIME_ATTR);
            return Math.abs(t.x - r.x) > F.mmDiluteMinPixels ||
              Math.abs(t.y - r.y) > F.mmDiluteMinPixels
              ? ((o += r.t = i),
                e.setExtraInfo(e.FOCUS_TIME_ATTR, o),
                (e.timestamp = n.timestamp),
                n.value.push(r),
                (e.value = n.value),
                F.mmDebug && e.value,
                !0)
              : (e.setExtraInfo(e.FOCUS_TIME_ATTR, o),
                (e.timestamp = n.timestamp),
                (e.value = n.value),
                (e.lastSingleMoveTimestamp = n.lastSingleMoveTimestamp),
                F.mmDebug && F.mmDiluteMinPixels,
                !1);
          },
          truncateEventsForUnload: function(n) {
            for (
              var e = [], t = F.mmMaxMovesWithUnload, r = 0, i = !1, o = 0;
              o < n.length;
              o++
            ) {
              var a = n[o];
              if ("mousemove" === a.type) {
                if (r >= F.mmMaxMovesWithUnload) {
                  F.mmMaxMovesWithUnload, (i = !0);
                  continue;
                }
                var u = a.value.length,
                  c = Ln.truncateMouseMoveEvent(a, t - r);
                (r += c), c < u && (i = !0);
              }
              "unload" === a.type &&
                i &&
                a.event.setExtraInfo(a.MOVES_TRUNCATED, !0),
                e.push(a);
            }
            return e;
          },
          truncateMouseMoveEvent: function(n, e) {
            var t = n.value.length;
            return t < e ? t : ((n.value = n.value.slice(0, e)), e);
          },
        }),
        (Nn.checkElementChangebility = function(n) {
          var e = n.nodeName,
            t = n.type,
            r = !1,
            i = !1;
          switch (e) {
            case "SELECT":
              i = !0;
              break;
            case "TEXTAREA":
              r = !0;
              break;
            case "INPUT":
              if (null === t) break;
              switch (t) {
                case "checkbox":
                case "radio":
                  i = !0;
                  break;
                case "text":
                case "password":
                case "number":
                case "file":
                case "url":
                case "search":
                case "email":
                case "date":
                case "time":
                case "tel":
                case "range":
                case "month":
                case "week":
                case "datetime":
                case "datetime-local":
                case "color":
                  r = !0;
              }
          }
          return { isTypable: r, isSelectable: i };
        }),
        (Nn.isTypableElement = function(n) {
          return Nn.checkElementChangebility(n).isTypable;
        }),
        (Nn.isSelectableElement = function(n) {
          return Nn.checkElementChangebility(n).isSelectable;
        }),
        (Nn.isChangebleElement = function(n) {
          return Nn.isTypableElement(n) || Nn.isSelectableElement(n);
        }),
        void 0 !== Nn &&
          (function(n, o) {
            n = n || {};
            var a = B.immutableSet(
              "password",
              "text",
              "number",
              "file",
              "url",
              "search",
              "email",
              "date",
              "time",
              "tel",
              "range",
              "month",
              "week",
              "datetime",
              "datetime-local",
              "color",
              "radio"
            );
            (n.extractElementValue = function(n, e) {
              var t = e.nodeName;
              if ("INPUT" === t) {
                var r = e.type;
                if (a[r]) return o.censor(e);
                if ("checkbox" === r) return e.checked ? "true" : "false";
              } else {
                if ("TEXTAREA" === t) return o.censor(e);
                if ("SELECT" === t) {
                  var i = e.options;
                  if (
                    !E.isUndefined(i) &&
                    "number" == typeof i.length &&
                    0 < i.length
                  ) {
                    if (!E.isUndefined(e.multiple) && e.multiple)
                      return (
                        "[" +
                        (function(n) {
                          for (var e = [], t = 0; t < n.length; t++) {
                            var r = n[t];
                            r.selected && e.push(o.censor(r, !0));
                          }
                          return e;
                        })(i).join(",") +
                        "]"
                      );
                    if (
                      !E.isUndefined(e.selectedIndex) &&
                      !E.isUndefined(i[e.selectedIndex])
                    )
                      return o.censor(i[e.selectedIndex], !0);
                  }
                }
              }
            }),
              (n.extractElementSource = function(n, e) {
                var t = e.src || e.href;
                return E.isUndefined(t) || null == t ? void 0 : t;
              }),
              (n.extractLocationHash = function(n, e) {
                return B.getLocationUrlSplitByHash().hash;
              }),
              (n.extractScrollValue = function(n, e) {
                if ("#document" !== e.nodeName)
                  return new Pt(e.scrollLeft, e.scrollTop);
                var t = B.getScrollTopLeft();
                return new Pt(t.left, t.top);
              }),
              (n.extractMouseMoveValue = function(n, e) {
                return [B.getCoordinate(n)];
              });
          })(Nn, K),
        void 0 !== Nn &&
          F.useExtension &&
          B.isChromeDesktop() &&
          Nn.registerPlugin(
            "extensionManager",
            new (function(t, n, e, r, i) {
              var o = {};
              function a(n) {
                n.data && o[n.data.name] && o[n.data.name](n.data.data);
              }
              function u(n, e) {
                o[n] = e;
              }
              function c(n, e) {
                t.postMessage({ name: n, data: e || {} });
              }
              function s(n) {
                c("GBX_EventLog", n.toJSON());
              }
              t.addEventListener("message", a, !1),
                u("GBX_Inspection", function() {
                  n.extensionInspectMode = !0;
                }),
                u("GBX_StopInspection", function() {
                  n.extensionInspectMode = !1;
                }),
                (this.initialize = function() {
                  O.querySelector("meta[name='gb-extension']") &&
                    (e.on("extensionEvent", s, null, -1),
                    c("GBD_initData", {
                      detectorConfig: i,
                      version: n.version,
                    }));
                }),
                (this.removeListener = function() {
                  t.removeEventListener("message", a, !1);
                });
            })(window, Nn, P, 0, F)
          ),
        (Zt.KEY_NAME_EST = _.Storage.BoundKeyPrefix + "est"),
        (Zt.KEY_NAME_SN = _.Storage.BoundKeyPrefix + "sn"),
        (Fn = {
          uriContainsAnyOf: function(n, e) {
            if (!n) return !1;
            for (var t = 0; t < e.length; t++)
              if (0 <= n.indexOf(e[t])) return !0;
            return !1;
          },
          tryParseValueMap: function(n, e) {
            for (
              var t, r, i = {}, o = n.split("&"), a = !1, u = 0;
              u < o.length;
              u++
            )
              if (2 === (t = o[u].split("=")).length)
                try {
                  if (!e[(r = decodeURIComponent(t[0]))]) continue;
                  (i[r] = decodeURIComponent(t[1])), (a = !0);
                } catch (n) {
                  logger.error("error was detected: " + n);
                }
            return a ? i : L;
          },
        }),
        void 0 !== Nn &&
          ((Pn = []),
          F.interceptThirdPartyAttributes &&
            Pn.push(
              new (function(o) {
                var a = [];
                function t(e, n) {
                  for (var t, r = [], i = 0; i < a.length; i++)
                    try {
                      Fn.uriContainsAnyOf(e, [a[i].rule.urlMatcher]) &&
                        (t = Fn.tryParseValueMap(n, a[i].keySet)) &&
                        r.push({
                          urlMatcher: a[i].rule.urlMatcher,
                          valueMap: t,
                        });
                    } catch (n) {
                      logger.error(
                        "Error while parsing request for  " +
                          e +
                          " for third party integration: " +
                          n.message,
                        n
                      );
                    }
                  r.length && o.emit("3rdPartyAttribute", r);
                }
                o.on("newRemoteConfig", function(n) {
                  if (n.thirdPartyAttributeRules)
                    for (var e = 0; e < n.thirdPartyAttributeRules.length; e++)
                      (t = n.thirdPartyAttributeRules[e]).urlMatcher &&
                        t.attributes &&
                        t.attributes.length &&
                        a.push({
                          rule: n.thirdPartyAttributeRules[e],
                          keySet: B.immutableSet.apply(
                            null,
                            n.thirdPartyAttributeRules[e].attributes || []
                          ),
                        });
                  var t;
                }),
                  o.on("ajax:send", function(n) {
                    "POST" === n.method &&
                      "string" == typeof n.requestContent &&
                      t(n.url, n.requestContent);
                  }),
                  (this.intercept = function(n) {
                    var e = (n.src || "").split("?")[1];
                    e && t(n.src, e);
                  });
              })(P)
            ),
          F.SCIntegration &&
            (F.SCIntegrationURLsContainList || []).length &&
            (F.SCIntegrationKeyList || []).length &&
            Pn.push(
              new (function(r, i) {
                i = i || {};
                var o = B.immutableSet.apply(null, i.keys || []);
                this.intercept = function(e) {
                  var n,
                    t = (e.src || "").split("?")[1];
                  if (t)
                    try {
                      !Fn.uriContainsAnyOf(e.src, i.urlTokens) ||
                        ((n = Fn.tryParseValueMap(t, o)) &&
                          r.emit("3rdpartymap:scReport", { value: n }));
                    } catch (n) {
                      logger.error(
                        "Error while checking image " +
                          e.src +
                          " for third party integration: " +
                          n.message,
                        n
                      );
                    }
                };
              })(P, {
                urlTokens: F.SCIntegrationURLsContainList,
                keys: F.SCIntegrationKeyList,
              })
            ),
          Nn.registerPlugin(
            "SCIntegration",
            new (function(o, n, a) {
              var e = {};
              function t() {
                !(function() {
                  for (
                    var n,
                      e = o.document.querySelectorAll("script, img"),
                      t = 0;
                    t < e.length;
                    t++
                  )
                    for (n = 0; n < a.length; n++)
                      a[n].intercept.call(a[n], e[t]);
                })(),
                  (function() {
                    var i = o.Image;
                    o.Image = function(n, e) {
                      for (var t = new i(n, e), r = 0; r < a.length; r++)
                        try {
                          B.addEventHandler(
                            t,
                            "load",
                            a[r].intercept.bind(a[r], t)
                          );
                        } catch (n) {
                          logger.error(
                            "failed intercepting Image report via constructor. " +
                              n.message,
                            n
                          );
                        }
                      return t;
                    };
                    var r = o.document.createElement;
                    o.document.createElement = function() {
                      var n = r.apply(o.document, [].slice.call(arguments));
                      if ("string" == typeof arguments[0]) {
                        var e = arguments[0].toLowerCase();
                        if ("img" === e || "script" === e)
                          for (var t = 0; t < a.length; t++)
                            try {
                              B.addEventHandler(
                                n,
                                "load",
                                a[t].intercept.bind(a[t], n)
                              );
                            } catch (n) {
                              logger.error(
                                "failed intercepting native createElement method. " +
                                  n.message,
                                n
                              );
                            }
                        return n;
                      }
                    };
                  })();
              }
              (this.initialize = function() {
                F.interceptABTesting &&
                  F.interceptAjax &&
                  new rr(
                    P,
                    [
                      {
                        urlMatcher: "global-mbox",
                        path: [],
                        tokenContainer: "offers",
                      },
                      {
                        urlMatcher: "tt.omtrdc",
                        path: ["execute", "pageLoad"],
                        tokenContainer: "options",
                      },
                      {
                        urlMatcher: "tt.omtrdc",
                        path: ["execute", "mboxes"],
                        tokenContainer: "options",
                      },
                    ],
                    0,
                    e
                  ),
                  n.on("init:preloaded", t, L, 10);
              }),
                (this.stats = function() {
                  return e;
                });
            })(window, P, Pn)
          )),
        void 0 !== Nn &&
          ((Bn = [F.domRecordEnabled ? "domTrackingStarted" : "init:loaded"]),
          F.captureGlobalObjectsOnSegmentChange && Bn.push("segmentChanged"),
          Nn.registerPlugin(
            "ObjectCapture",
            new (function(e, t, n, r, i) {
              r = r || [];
              var o = n({
                  emptyStrings: (i = i || {
                    paths: [],
                    captureEmptyStrings: !1,
                  }).captureEmptyStrings,
                }),
                a = { captured: [] };
              function u(n) {
                n &&
                  (t.emit("3rdpartymap:scReport", { value: n }),
                  a.captured.push(n));
              }
              i.paths.length &&
                r.forEach(function(n) {
                  t.on(n, function() {
                    u(o.capture(e, i.paths));
                  });
                }),
                t.on("api:captureObject", function(n) {
                  u(o.toFlatMap(n));
                }),
                (this.initialize = function() {
                  return !0;
                }),
                (this.stats = function() {
                  return a;
                });
            })(
              window,
              P,
              function(u) {
                u = u || { emptyStrings: !1 };
                var c = B.immutableSet("number", "string", "boolean");
                function s(n) {
                  return Array.isArray(n) && c[typeof n[0]];
                }
                return {
                  capture: function(n, e) {
                    for (var t, r = {}, i = 0; i < e.length; i++)
                      (t = (function(n, e) {
                        for (
                          var t = n, r = e.split("."), i = 0;
                          i < r.length;
                          i++
                        )
                          if (
                            (t = t[r[i]]) === L ||
                            (!u.emptyStrings && "string" == typeof t && !t)
                          )
                            return null;
                        return { object: t, name: r[r.length - 1] };
                      })(n, e[i])) &&
                        (function n(e, t, r, i) {
                          var o,
                            a = typeof e;
                          if (c[a])
                            (e || "string" != a || u.emptyStrings) &&
                              (r[t] = "" + e);
                          else if (s(e)) r[t] = e.join(",");
                          else if (i && "object" == a)
                            for (o in e)
                              e.hasOwnProperty(o) && n(e[o], o, r, !1);
                        })(t.object, t.name, r, !0);
                    return Object.keys(r).length ? r : null;
                  },
                  toFlatMap: function(n) {
                    if (!n || "object" != typeof n) return null;
                    var e = {};
                    return (
                      (function n(e, t, r) {
                        var i,
                          o = typeof e;
                        if (c[o])
                          (e || "string" != o || u.emptyStrings) &&
                            (r[t] = "" + e);
                        else if (s(e)) r[t] = e.join(",");
                        else if ("object" == o)
                          for (i in ((t = t.length ? t + "." : t), e))
                            e.hasOwnProperty(i) && n(e[i], t + i, r);
                      })(n, "", e),
                      Object.keys(e).length ? e : null
                    );
                  },
                };
              },
              Bn,
              {
                paths: F.captureGlobalObjects || [],
                captureEmptyStrings: F.captureGlobalObjectsEmptyStrings,
              }
            )
          )),
        void 0 !== Nn &&
          (function(n, u, e) {
            n = n || {};
            var o,
              a,
              c,
              s = (e = e || {}).visualName,
              f = e.visualNameDebug || !1,
              d =
                0 < e.visualNameLimit
                  ? Math.min(e.visualNameLimit, e.visualName.maxLimit)
                  : e.visualName.maxLimit,
              l = B.immutableSet.apply(null, s.wrapperElementList || []),
              h =
                ((o = e.noIdSelectorsForClassNames || []),
                (a = e.noIdSelectorsForIDs || []),
                (c = e.noIdSelectorsForAttrs || []),
                function(n) {
                  if (0 === o.length && 0 === a.length && 0 === c.length)
                    return !0;
                  var e = n.getAttribute("id");
                  if (e)
                    for (i = 0; i < a.length; i++) {
                      var t = a[i];
                      if (t && 0 <= e.indexOf(t)) return !1;
                    }
                  for (var r = B.getClassList(n), i = 0; i < o.length; i++)
                    if (0 <= E.indexOf(r, o[i])) return !1;
                  for (i = 0; i < c; i++) if (n.hasAttribute(c[i])) return !1;
                  return !0;
                });
            function v(n) {
              var e = n.tagName;
              if ("TD" === e) return null;
              if ("TEXTAREA" !== e) {
                var t = B.getAttributeForElement(n, "class");
                if (t && E.contains(s.filterInlineTextByClassName, t))
                  return null;
                var r,
                  i = null;
                if (
                  (s.by.labelTag && "LABEL" === n.tagName && (i = n),
                  ("SPAN" !== e && "DIV" !== e) ||
                    (1 === n.childElementCount &&
                      (r = n.firstElementChild) &&
                      "A" === r.tagName &&
                      0 === r.childElementCount &&
                      (i = r)),
                  (i =
                    i ||
                    (function(n) {
                      for (var e = s.maxParentLevel + 1; n && e--; ) {
                        if (l[n.tagName]) return n;
                        n = n.parentNode;
                      }
                      return null;
                    })(n)) ||
                    0 !== n.childElementCount ||
                    (i = n),
                  i ||
                    (1 === n.childElementCount &&
                      0 === (r = n.firstElementChild).childElementCount &&
                      (i = n)),
                  i)
                )
                  try {
                    var o = u(),
                      a = (o ? o.cloneNode(i) : i).innerText;
                    return B.trim(a);
                  } catch (n) {}
                return null;
              }
            }
            n.extractVisualName = function(n) {
              var e = null;
              if (!n || !B.isElement(n)) return e;
              if (
                E.contains(
                  s.filterNamingByTagName,
                  n.tagName.toLocaleLowerCase()
                )
              )
                return e;
              var t, r, i;
              return (
                (e = B.getAttributeForElement(n, s.CLS_NAME_ATTR)) && 0,
                !e &&
                  s.by.title &&
                  (e = B.getAttributeForElement(n, "title")) &&
                  0,
                !e && s.by.alt && (e = B.getAttributeForElement(n, "alt")) && 0,
                !e &&
                  s.by.ariaLabel &&
                  (e = B.getAttributeForElement(n, "aria-label")) &&
                  0,
                e ||
                  (!s.by.inputConsts && !s.by.inputButtonsValue) ||
                  ((e = (function(n) {
                    var e;
                    if ("INPUT" === n.tagName) {
                      var t = n.type.toLocaleLowerCase();
                      if (
                        (("button" !== t && "submit" !== t && "reset" !== t) ||
                          !s.by.inputButtonsValue ||
                          (e = n.value),
                        !e && s.by.inputConsts)
                      )
                        switch (t) {
                          case "password":
                            e = "Password";
                            break;
                          case "button":
                          case "submit":
                          case "image":
                            e = "Submit";
                            break;
                          case "file":
                            e = "Choose File";
                            break;
                          case "reset":
                            e = "Reset";
                        }
                    }
                    return (e = e && B.trim(e)) || null;
                  })(n)) &&
                    0),
                !e &&
                  s.by.name &&
                  (e = B.getAttributeForElement(n, "name")) &&
                  0,
                !e && s.by.inlineText && (e = v(n)) && 0,
                !e &&
                  s.by.id &&
                  h(n) &&
                  (e = B.getAttributeForElement(n, "id")) &&
                  0,
                !e &&
                  s.by.placeholder &&
                  (e = B.getAttributeForElement(n, "placeholder")) &&
                  0,
                !e &&
                  s.by.parent &&
                  (e = (function(n) {
                    if (
                      !E.contains(
                        s.elementListToCheckParent,
                        n.tagName.toLocaleLowerCase()
                      )
                    )
                      return null;
                    var e = null,
                      t = n.parentElement;
                    return (
                      !t ||
                        ("a" !== t.tagName.toLocaleLowerCase() &&
                          "button" !== t.tagName.toLocaleLowerCase()) ||
                        (e =
                          B.getAttributeForElement(t, "title") ||
                          B.getAttributeForElement(t, "alt") ||
                          B.getAttributeForElement(t, "aria-label") ||
                          B.getAttributeForElement(t, "name") ||
                          B.getAttributeForElement(t, "id")),
                      e || null
                    );
                  })(n)) &&
                  0,
                !e &&
                  s.by.child &&
                  ((t = n),
                  (e = E.contains(
                    s.elementListToCheckChild,
                    t.tagName.toLocaleLowerCase()
                  )
                    ? (1 === t.childElementCount &&
                        ((r = t.firstElementChild),
                        (i =
                          B.getAttributeForElement(r, "title") ||
                          B.getAttributeForElement(r, "alt") ||
                          B.getAttributeForElement(r, "aria-label") ||
                          B.getAttributeForElement(r, "name") ||
                          B.getAttributeForElement(r, "id"))),
                      i || null)
                    : null) && 0),
                e && e.length > d && (e = e.substr(0, d).concat("...")),
                f && (n.tagName, n.type && n.type),
                e
              );
            };
          })(
            Nn,
            function() {
              return Nn.plugins.domRecordingPlugin
                ? Nn.plugins.domRecordingPlugin.getNodeCloner()
                : null;
            },
            F
          ),
        void 0 !== Nn &&
          Nn.registerPlugin(
            "workerLoader",
            new (function(e, t, r) {
              var i,
                o,
                a = !1,
                u = !1,
                c = !1,
                s = { state: "init" };
              function f(n) {
                "ready" === n.data.type
                  ? ((u = !0), clearTimeout(o), c && d("ready"))
                  : t.emit(n.data);
              }
              function d(n) {
                a || ((a = !0), (s.state = n), t.emit("worker:init", i));
              }
              function l() {
                try {
                  var n = q.isCorsReporting() && !r.reportDisableCors;
                  (i = new Worker(
                    _.detectorScript.src + "?worker"
                  )).addEventListener("message", f),
                    i.postMessage({
                      type: "init",
                      args: [r, n, G.getKeyInfo()],
                    }),
                    (s.state = "started");
                } catch (n) {
                  (s.error = n.message),
                    logger.error("Failed starting web worker. " + n.message);
                }
              }
              function h() {
                (c = !0),
                  u ? d("ready") : setTimeout(d.bind(null, "timeout"), 1e3);
              }
              (this.initialize = function() {
                var n = !1;
                (r.reportUseWorker && !r.reportPreferSendBeaconAPI) ||
                  ((s.waivingReason = "disabled"), (n = !0)),
                  !n &&
                    e !== e.top &&
                    r.reportViaTopWindow &&
                    ((s.waivingReason = "non-top-window"), (n = !0)),
                  n ||
                    e.Worker ||
                    ((s.waivingReason = "not-supported"), (n = !0)),
                  n ||
                    _.detectorScript ||
                    ((s.waivingReason = "no-script"), (n = !0)),
                  n
                    ? t.emit("worker:init", L)
                    : (t.on("init:preloaded", l), t.on("init:loaded", h));
              }),
                (this.stats = function() {
                  return s;
                });
            })(self, P, F)
          ),
        (ir.extractTLD = function(n) {
          var e = n.split(".");
          return e.shift(), 0 < e.length ? e.join(".") : n;
        }),
        (or.getEntryKey = function(n) {
          return (
            n.url.split("?")[0] +
            "_" +
            n.method +
            "_" +
            n.segment +
            "_" +
            n.queryHash
          );
        }),
        (ur.prototype.hasGzipContentEncoding = function() {
          if (this.resHeaders)
            for (var n = this.resHeaders.entries(), e = n.next(); !e.done; ) {
              if (
                "content-encoding" === e.value[0].toLowerCase() &&
                "gzip" === e.value[1].toLowerCase()
              )
                return !0;
              e = n.next();
            }
          return !1;
        }),
        (ur.prototype.captureContent = function() {
          return this.responseText;
        }),
        (ur.prototype.fixHeaders = function() {
          if (!this.resHeaders) return "";
          var t = "";
          return (
            this.resHeaders.forEach(function(n, e) {
              ("transfer-encoding" === e.toLowerCase() &&
                "chunked" === n.toLowerCase()) ||
                (t =
                  "content-length" === e.toLowerCase()
                    ? t + "X-Glassbox-Orig-Content-Length: " + n + "\r\n"
                    : t + e + ": " + n + "\r\n");
            }),
            this.masking.response &&
              (t += "X-Glassbox-JSMasking: " + this.masking.response + "\r\n"),
            t
          );
        }),
        (cr.prototype.hasGzipContentEncoding = function() {
          return (
            null !== /content-encoding:\sgzip/gi.exec(this.resHeaders || "")
          );
        }),
        (cr.prototype.captureContent = function() {
          return "json" === this.xhr.responseType ||
            (this.resContentType && -1 !== this.resContentType.indexOf("json"))
            ? this.ajaxMasker.getJsonContent(
                this,
                "response",
                this.xhr.response
              )
            : "string" == typeof this.xhr.response
            ? this.ajaxMasker.maskText(this, "response", this.xhr.response)
            : null;
        }),
        (cr.prototype.fixHeaders = function() {
          var n = (n = (this.resHeaders || "").replace(
            /transfer-encoding:\schunked/gi,
            "X-Glassbox-Orig-Transfer-Encoding: chunked"
          )).replace(/content-length:/gi, "X-Glassbox-Orig-Content-Length:");
          return (
            this.masking.response &&
              ((n = n.trim()),
              (n +=
                "\r\nX-Glassbox-JSMasking: " + this.masking.response + "\r\n")),
            n
          );
        }),
        (cr.prototype.onCompleted = function() {
          var n = B.currentTimestamp();
          (this.consumed = !0),
            (this.status = this.xhr.status),
            (this.statusText = this.xhr.statusText),
            (this.resHeaders = this.xhr.getAllResponseHeaders()),
            (this.resContentType = this.xhr.getResponseHeader("Content-Type")),
            (this.contentLength = this.xhr.getResponseHeader("Content-Length")),
            (this.duration = n - this.startTime),
            (this.endTime = n),
            (this.responseType = this.xhr.responseType),
            (this.response = this.xhr.response),
            (this.responseText =
              this.xhr.responseType && "text" !== this.xhr.responseType
                ? L
                : this.xhr.responseText);
        }),
        (dr.safeEncodeURI = function(e) {
          try {
            return e === decodeURI(e) ? encodeURI(e) : e;
          } catch (n) {
            return encodeURI(e);
          }
        }),
        void 0 !== Nn &&
          void 0 !== F &&
          F.interceptAjax &&
          ((jn = {
            allow: function() {
              return !0;
            },
          }),
          -1 !== F.ajaxRecordSessionLimit &&
            (window,
            (Hn = P),
            (Vn = W),
            (qn = F.ajaxRecordSessionLimit),
            (zn = "xhr.cnt"),
            (Wn = qn <= lr()),
            (jn = {
              allow: function() {
                var n = lr(),
                  e = ++n <= qn;
                return (
                  e || Wn || (Hn.emit("ajax:limitReached"), (Wn = !0)),
                  Vn.set(zn, n),
                  e
                );
              },
            })),
          (Un = new (function(r, t) {
            var f = "MASKING ERROR";
            t = B.optionsWithDefaults(t, {
              requestRules: [],
              responseRules: [],
            });
            var d = !0,
              i = [],
              o = { request: [], response: [] };
            function l(n) {
              for (var e = 0; e < i.length; ++e) if (i[e](n)) return 1;
            }
            function h(n, e) {
              for (var t = [], r = 0; r < o[e].length; ++r)
                o[e][r].predicate(n) && t.push(o[e][r].transformations);
              return t;
            }
            function a(n, e, t) {
              try {
                n.push({
                  predicate: e,
                  transformations: {
                    jsonField: r.jsonField(t),
                    pattern: r.pattern(t),
                  },
                });
              } catch (n) {
                logger.error(
                  "Error while processing AJAX masking rule. Please check rules transformation configuration.",
                  n
                ),
                  i.push(e);
              }
            }
            function v(n, e, t) {
              n.masking && (n.masking[e] = t);
            }
            (this.init = function(n) {
              try {
                for (var e = 0; e < t.responseRules.length; ++e)
                  a(
                    o.response,
                    n.create(t.responseRules[e].predicate),
                    t.responseRules[e].transformations
                  );
                for (e = 0; e < t.requestRules.length; ++e)
                  a(
                    o.request,
                    n.create(t.requestRules[e].predicate),
                    t.requestRules[e].transformations
                  );
              } catch (n) {
                (d = !1),
                  logger.error(
                    "Error while initializing AJAX masking settings. Please check rules predicates configuration.",
                    n
                  );
              }
            }),
              (this.maskText = function(e, t, n) {
                if (!n) return "";
                try {
                  if (!d || l(e)) return v(e, t, "bad-config"), f;
                  var r = h(e, t);
                  if (r.length) {
                    for (var i = {}, o = 0; o < r.length; ++o)
                      n = r[o].pattern(n, i);
                    i.masked && v(e, t, "masked");
                  }
                  return n;
                } catch (n) {
                  return (
                    v(e, t, "error"),
                    logger.error(
                      "Error during textual ajax content masking.",
                      n
                    ),
                    f
                  );
                }
              }),
              (this.getJsonContent = function(e, t, n) {
                if (!n) return "";
                try {
                  if (!d || l(e)) return e.masking && v(e, t, "bad-config"), f;
                  var r = "string" == typeof n,
                    i = {},
                    o = h(e, t);
                  if (!o.length) return r ? n : JSON.stringify(n);
                  var a = r ? JSON.parse(n) : n,
                    u = JSON.stringify(
                      a,
                      ((c = i),
                      (s = o),
                      function(n, e) {
                        for (var t = e, r = 0; r < s.length; ++r)
                          t = s[r].jsonField(n, t, c);
                        return t;
                      })
                    );
                  return i.masked && v(e, t, "masked"), u;
                } catch (n) {
                  return (
                    v(e, t, "error"),
                    logger.error("Error during json ajax content masking.", n),
                    f
                  );
                }
                var c, s;
              });
          })(
            new (function() {
              function i(n) {
                return new RegExp(n, "g");
              }
              function o(n, e) {
                return V.censorValueOf(e, 0, n);
              }
              function e(n, e) {
                for (var t = [], r = 0; r < n.length; ++r)
                  n[r].type.toLowerCase() === e &&
                    (n[r].replace
                      ? t.push({
                          search: i(n[r].search),
                          replace: n[r].replace,
                        })
                      : t.push({
                          search: i(n[r].search),
                          replaceChar: n[r].replaceChar || "*",
                        }));
                return t;
              }
              (this.jsonField = function(n) {
                var o = e(n, "jsonfield");
                return function(n, e, t) {
                  for (var r = 0; r < o.length; ++r)
                    if (o[r].search.test(n)) {
                      var i = e + "";
                      return (
                        t && (t.masked = !0),
                        o[r].replace
                          ? o[r].replace
                          : V.censorValueOf(i, 0, o[r].replaceChar)
                      );
                    }
                  return e;
                };
              }),
                (this.pattern = function(n) {
                  var r = e(n, "pattern");
                  return function(n, e) {
                    for (var t = 0; t < r.length; ++t)
                      (n = r[t].replace
                        ? n.replace(r[t].search, r[t].replace)
                        : n.replace(
                            r[t].search,
                            o.bind(null, r[t].replaceChar || "*")
                          )),
                        e && (e.masked = !0);
                    return n;
                  };
                });
            })(),
            {
              requestRules: F.ajaxMaskRequestBody,
              responseRules: F.ajaxMaskResponseBody,
            }
          )),
          Nn.registerPlugin(
            "ajaxInterceptor",
            new dr(window, Sn, P, X, jn, Un, O.location.host, Y, F, [
              "adrum",
              "dynatrace",
              "appdynamics.com",
              "tealeaf",
              "/retail/discountinternet/portal/coex.asmx/keepalive",
              "oauth/cc",
            ])
          )),
        void 0 !== Nn &&
          Nn.registerPlugin(
            "errors",
            new (function(n, t, e) {
              var r = (e = e || {}).maxRecordedCountPerError || -1,
                i = {
                  interceptedErrors: 0,
                  interceptedConsoleErrors: 0,
                  limitExceededErrors: 0,
                  emittedPageEvents: 0,
                },
                o = {},
                a =
                  -1 === r
                    ? function() {
                        return !0;
                      }
                    : function(n) {
                        var e = n.substring(0, 30);
                        return (o[e] = (o[e] || 0) + 1), o[e] <= r;
                      };
              function u(n) {
                var e = !a(n);
                t.emit("pageError", { error: n, eventLimitExceeded: e }),
                  e ? i.emittedPageEvents++ : i.limitExceededErrors++;
              }
              function c(n) {
                var e = "";
                "string" == typeof n.message && (e += n.message),
                  "string" == typeof n.url
                    ? (e += "; URL: " + n.url)
                    : "string" == typeof n.filename &&
                      (e += "; FILE: " + n.filename),
                  "number" == typeof n.lineno && (e += "; L: " + n.lineno),
                  "number" == typeof n.colno && (e += "; C: " + n.colno),
                  e && (i.interceptedErrors++, u(e));
              }
              function s(n) {
                i.interceptedConsoleErrors++, u((n || []).join(" "));
              }
              (this.initialize = function() {
                e.recordErrors && B.addEventHandler(n, "error", c),
                  e.recordConsoleErrors &&
                    (function(n) {
                      var e;
                      if ("object" == typeof console)
                        for (e in n)
                          !(function(n, e) {
                            var t;
                            "function" == typeof console[n] &&
                              ((t = console[n]),
                              (console[n] = function() {
                                var n = Array.prototype.slice.call(arguments);
                                t.apply(console, n), e(n);
                              }));
                          })(e, n[e]);
                    })({ error: s });
              }),
                (this.stats = function() {
                  return i;
                });
            })(window, P, F)
          ),
        void 0 !== Nn &&
          Nn.registerPlugin(
            "cors",
            new (function(n, i, e, o, a, u) {
              u = u || {};
              var c = { INIT: 0, HELPING: 1, READY: 2 },
                s = 5e3,
                f = "cors_ready",
                d = [_.cookies.session, _.cookies.visitor],
                l = u.reportCorsTakeNativeCookies || [],
                t = !0,
                h = c.INIT,
                v = -1,
                m = -1;
              function g(n, e) {
                for (var t, r = 0; r < n.length; r++)
                  (t = a.get(n[r])) &&
                    e.push(n[r] + "=" + encodeURIComponent(t));
              }
              function r() {
                var n = [];
                if ((g(d, n), g(l, n), 0 !== n.length)) {
                  var e = B.currentTimestamp();
                  h = c.HELPING;
                  var t = u.reportURI + "?" + n.join("&"),
                    r = i();
                  return (
                    (r.onreadystatechange = function() {
                      4 === r.readyState
                        ? ((v = B.currentTimestamp() - e),
                          (m = r.status),
                          200 === r.status ? o.set(f, !0) : r.status,
                          y())
                        : 0 === r.readyState && y();
                    }),
                    r.open("GET", t, !0),
                    (r.withCredentials = !0),
                    (r.setTimeout = s),
                    r.send(),
                    1
                  );
                }
              }
              function p() {
                return t && !o.get(f) && r() ? void 0 : y();
              }
              function y() {
                (h = c.READY), n.emit("corsReady");
              }
              (this.initialize = function() {
                (t = e.isCorsReporting() && !u.reportDisableCors),
                  n.on("init:loaded", p);
              }),
                (this.onCookieChanged = function() {
                  t &&
                    (n.emit("corsReset"),
                    o.set(f, ""),
                    (h = c.INIT),
                    (m = v = -1),
                    r());
                }),
                (this.stats = function() {
                  return {
                    enabled: t,
                    state: h,
                    requestDuration: v,
                    requestStatus: m,
                  };
                });
            })(P, Rn.createXMLHTTPObject, q, W, z, F)
          ),
        void 0 !== Nn &&
          Nn.registerPlugin(
            "naming",
            new (function(n, e, t) {
              t = B.optionsWithDefaults(t, { pageNameEnabled: !1 });
              var r,
                i,
                o,
                a,
                u,
                c,
                s = {};
              function f() {
                var n = i.resolve();
                n &&
                  ((r = n),
                  (s.pageNameCurrent = r),
                  e.emit("pageNameResolved", r));
              }
              t.pageNameEnabled
                ? ((s.pageName = "enabled"),
                  (o = n),
                  (a = { selectors: t.pageNameByElements }),
                  (u = (a = a || {}).selectors || []),
                  (c = B.immutableSet.apply(null, u)),
                  (i = {
                    resolve: function() {
                      for (var n, e = 0; e < u.length; e++)
                        if (c[u[e]])
                          try {
                            if ((n = o.querySelector(u[e])))
                              return n.textContent;
                          } catch (n) {
                            c[u[e]] = !1;
                          }
                    },
                  }),
                  e.on("init:loaded", f),
                  e.on("frame:load", f),
                  e.on("parentWindowInfo", function(n) {
                    n.parentPageName &&
                      ((r = n.parentPageName),
                      (s.pageNameCurrent = r),
                      e.emit("pageNameResolved", r));
                  }))
                : (s.pageName = "disabled"),
                (this.initialize = function() {
                  return !0;
                }),
                (this.stats = function() {
                  return s;
                });
            })(O, P, {
              pageNameEnabled: F.pageNameResolvingEnabled,
              pageNameByElements: F.pageNameResolvingByElements || [],
            })
          ),
        new (function(n, t, e, r, i, o) {
          var a, u;
          function c(n) {
            if (n) for (var e in n) "hash" !== e && (o[e] = n[e]);
          }
          n.detectorScript &&
            n.detectorScript.src &&
            o.configPath &&
            ((function() {
              var n,
                e = t.get("js.conf");
              if (e)
                try {
                  (n = r.decode(e)), (a = n.hash), c(n);
                } catch (n) {
                  logger.error(
                    "failed parsing JSON of external configuration: " +
                      n.message,
                    n
                  );
                }
            })(),
            (u = B.extractOrigin(n.detectorScript.src)),
            e(
              B.joinPath(u, o.configPath),
              function(n) {
                var e;
                try {
                  e = JSON.parse(n);
                } catch (n) {
                  return void logger.error(
                    "Failed parsing external configuration JSON: " + n.message,
                    n
                  );
                }
                (void 0 !== a && void 0 !== e.hash && a === e.hash) ||
                  (t.set("js.conf", r.encode(e)), c(e), (a = e.hash));
              },
              function(n) {
                i.emit("clsDebug", n);
              }
            ));
        })(
          _,
          new Nt(window.localStorage, {
            keysPrefix: _.Storage.UnboundKeyPrefix,
          }),
          function(t, r, i) {
            try {
              var o = Rn.createXMLHTTPObject(!0);
              o ||
                i(
                  "Failed creating XHR object for fetching external configuration"
                ),
                (o.onreadystatechange = function() {
                  var n, e;
                  4 === o.readyState &&
                    (200 === o.status
                      ? (n = o.getResponseHeader("Content-Type")) &&
                        -1 !== n.indexOf("application/json") &&
                        r(o.response)
                      : ((e =
                          "Failed getting external configuration for url : " +
                          t +
                          " status:" +
                          o.status +
                          "  " +
                          o.statusText),
                        i(e)));
                }),
                o.open("GET", t, !0),
                (o.onprogress = function() {}),
                (o.ontimeout = function() {}),
                (o.onerror = function() {}),
                setTimeout(function() {
                  try {
                    o.send();
                  } catch (n) {
                    logger.error(
                      "Failed sending request to url " + t + ": " + n.message,
                      n
                    );
                  }
                }, 0);
            } catch (n) {
              logger.error(s + n.message, n),
                console.log(
                  "Failed getting external configuration for url: " +
                    t +
                    ": " +
                    n.message,
                  n
                ),
                i(n.message);
            }
          },
          new gr(B.Base64),
          P,
          F
        ),
        (Xn = {
          SELF: {
            follow: function(n, e) {
              return n.nodeType === Node.ELEMENT_NODE && B.elementMatches(n, e);
            },
          },
          SELF_OR_ANY_PARENT: {
            follow: function(n, e) {
              for (var t = n; t; ) {
                if (t.nodeType === Node.ELEMENT_NODE && B.elementMatches(t, e))
                  return !0;
                t = t.parentNode;
              }
              return !1;
            },
          },
          SELF_OR_ANY_CHILD: {
            follow: function(n, e) {
              return (
                !(
                  n.nodeType !== Node.ELEMENT_NODE || !B.elementMatches(n, e)
                ) ||
                ("function" == typeof n.querySelector && !!n.querySelector(e))
              );
            },
          },
        }),
        (pr.prototype.isAttributeMasked = function(n, e) {
          return !(
            !this._maskedAttributesTags[n.tagName] ||
            !this._maskedAttributes[e] ||
            (n.hasAttribute && n.hasAttribute(this._ignoreMaskByAttribute))
          );
        }),
        (pr.prototype.isDomMasked = function(n, e) {
          for (
            var t, r, i, o = Array.prototype.slice.call(arguments, 2), a = 0;
            a < o.length;
            a++
          ) {
            if (
              ((r =
                !!(t = this._selectorsByMaskingType[o[a]].selector) &&
                e.follow(n, t)),
              (i = this._selectorsByMaskingType[o[a]].doInvert),
              r)
            )
              return !i;
            if (i) return !0;
          }
          return !!i;
        }),
        (pr.prototype.createContextUpdater = function(o) {
          var a = this,
            u = this._domMaskingMode === _.censorMode.WhiteList,
            c = {},
            s = [];
          function f(n, e) {
            s.push(n), (e.maskText = n);
          }
          return {
            onStart: function(n, e) {
              if (
                (f(
                  !a._unmaskableTags[n.tagName] &&
                    a.isDomMasked(n, Xn.SELF_OR_ANY_PARENT, Gn.TEXT),
                  e
                ),
                n.querySelectorAll)
              ) {
                var t = a._selectorsByMaskingType[Gn.TEXT].selector;
                if (t)
                  for (var r = n.querySelectorAll(t), i = 0; i < r.length; i++)
                    c[o.idOf(r[i])] = !0;
              }
            },
            onEnterElement: function(n, e) {
              var t = s[s.length - 1],
                r = o.idOf(n);
              if (c[r]) {
                var i = !u && !a._unmaskableTags[n.tagName];
                if (i !== t) return f(i, e), !0;
              }
              return (
                !!(
                  (t && a._unmaskableTags[n.tagName]) ||
                  (t &&
                    n.hasAttribute &&
                    n.hasAttribute(a._ignoreMaskByAttribute))
                ) && (f(!1, e), !0)
              );
            },
            onLeaveElement: function(n, e) {
              s.pop(), (e.maskText = s[s.length - 1]);
            },
            onEnd: function() {
              (c = {}), (s = []);
            },
          };
        }),
        (Gn = {
          TEXT: "TEXT",
          ATTRIBUTE: "ATTRIBUTE",
          VALUE_ATTRIBUTE: "VALUE_ATTRIBUTE",
          OMIT: "OMIT",
        }),
        (pr.prepareWildCardSelector = function(n, e) {
          var t =
            "" === n[0]
              ? "[" + e + "$='" + n[1] + "']"
              : "" === n[1]
              ? "[" + e + "^='" + n[0] + "']"
              : "[" + e + "^='" + n[0] + "'][" + e + "$='" + n[1] + "']";
          return t;
        }),
        (wr.prototype.maskCookie = function(n) {
          if (!n || !this._cookieMaskSet) return n;
          for (
            var e, t, r, i, o = n.split(";"), a = [], u = 0;
            u < o.length;
            u++
          )
            -1 !== (t = (e = o[u]).indexOf("="))
              ? ((r = e.substring(0, t).trim()),
                (i = e.substring(t + 1)),
                a.push(
                  r +
                    "=" +
                    (i && this._cookieMaskSet.hasOwnProperty(r)
                      ? V.censorValueOf(i)
                      : i)
                ))
              : a.push(e);
          return a.join("; ");
        }),
        (br.prototype.isDomEncrypted = function(n, e) {
          return e.follow(n, this._encryptionSelector);
        }),
        (br.prototype.encrypt = function(e) {
          if (this._shouldFallback)
            return B.transformTextSegments(e, this._maskingUtils.censorValueOf);
          if (!this._encryptionUtils.isAvailable())
            return (
              (this._shouldFallback = !0),
              logger.error("encryption not available, switching to fallback."),
              this._events.emit(
                "clsDebug",
                "encryption not available, switching to fallback"
              ),
              B.transformTextSegments(e, this._maskingUtils.censorValueOf)
            );
          try {
            return this._encryptionUtils.censorValueOf(e);
          } catch (n) {
            return (
              logger.error(
                "failed encrypting text, switching to fallback: " + n.message,
                n
              ),
              this._events.emit(
                "clsDebug",
                "Error: failed encrypting text. Switching to fallback"
              ),
              (this._shouldFallback = !0),
              B.transformTextSegments(e, this._maskingUtils.censorValueOf)
            );
          }
        }),
        (br.prototype.createContextUpdater = function(o) {
          var a = this,
            u = {},
            c = [];
          function s(n, e) {
            c.push(n), (e.encryptText = n);
          }
          return {
            onStart: function(n, e) {
              if (
                (s(
                  !a._unEncryptableTags[n.tagName] &&
                    a.isDomEncrypted(n, Xn.SELF_OR_ANY_PARENT),
                  e
                ),
                n.querySelectorAll)
              ) {
                var t = a._encryptionSelector;
                if (t)
                  for (var r = n.querySelectorAll(t), i = 0; i < r.length; i++)
                    u[o.idOf(r[i])] = !0;
              }
            },
            onEnterElement: function(n, e) {
              var t = c[c.length - 1],
                r = o.idOf(n);
              if (u[r]) {
                var i = !a._unEncryptableTags[n.tagName];
                if (i !== t) return s(i, e), !0;
              }
              return (
                !(!t || !a._unEncryptableTags[n.tagName]) && (s(!1, e), !0)
              );
            },
            onLeaveElement: function(n, e) {
              c.pop(), (e.encryptText = c[c.length - 1]);
            },
            onEnd: function() {
              (u = {}), (c = []);
            },
          };
        }),
        (Cr.prototype = {
          next: function() {
            for (
              var n = this._node.childNodes[++this._childIndex];
              n && !this._predicate(n);

            )
              n = this._node.childNodes[++this._childIndex];
            return n;
          },
        }),
        (kr.SHOW_ALL = 0),
        (kr.SHOW_ELEMENTS = 1),
        (Lr.prototype.toString = function() {
          return (
            "seq:" +
            this.seq +
            "referrer" +
            this.referrer +
            "charset:" +
            this.charset +
            "cookie-len" +
            (this.cookie ? this.cookie.length : 0) +
            (20 < this.html.length
              ? "html length: " + this.html.length
              : "html: " + this.html)
          );
        }),
        (Pr.prototype.onNodeAdded = function(n) {
          this.addedNodes[n] = !0;
        }),
        (jr.propertyForElement = function(n) {
          if ("SELECT" === n.tagName) return "selectedIndex";
          if ("TEXTAREA" === n.tagName) return "value";
          if ("INPUT" !== n.tagName) return L;
          var e =
            n.getAttribute("type") && n.getAttribute("type").toLowerCase();
          return !e || ("checkbox" !== e && "radio" !== e)
            ? "value"
            : "checked";
        }),
        (jr.defaultValue = function(n, e) {
          if ("checked" === e) return n.hasAttribute("checked");
          if ("selectedIndex" === e) {
            var t = n.querySelector("option[selected]");
            return t ? t.index : null !== n.querySelector("option") ? 0 : -1;
          }
          var r = n.getAttribute(e);
          return r || "value" !== e ? r : "";
        }),
        void 0 !== Nn &&
          F.domRecordEnabled &&
          ((Jn = F.valueMaskingMode === _.censorMode.WhiteList),
          (Kn = F.domMaskingMode === _.censorMode.WhiteList),
          (ke = new pr(
            {
              valueMaskingMode: F.valueMaskingMode,
              valueMaskIds: Jn
                ? F.maskWhitelistValueById
                : F.maskBlacklistValueById,
              valueMaskClasses: Jn
                ? F.maskWhitelistValueByClass
                : F.maskBlacklistValueByClass,
              valueMaskIgnoreAttribute: F.valueMaskIgnoreAttribute,
              domMaskingMode: F.domMaskingMode,
              domMaskIds: Kn
                ? F.domWhitelistMaskContentById
                : F.domBlacklistMaskContentById,
              domMaskClasses: Kn
                ? F.domWhitelistMaskContentByClass
                : F.domBlacklistMaskContentByClass,
              domOmitIds: F.domMaskOmitById || F.domOmitById,
              domOmitClasses: F.domMaskOmitByClass || F.domOmitByClass,
              domMaskedAttributes: F.domMaskedAttributes,
              domMaskAttributesTags: F.domMaskAttributesByTag,
              domMaskIgnoreAttribute: F.domMaskIgnoreAttribute,
              domMaskSimpleSelector: Kn
                ? F.domWhitelistMaskSimpleSelector
                : F.domBlacklistMaskSimpleSelector,
            },
            ft()
          )),
          (xe = new br(P, J, V, ft(), {
            domEncryptIds: F.domEncryptById,
            domEncryptClasses: F.domEncryptByClass,
          })),
          (Qn = new (function(n, e, t, r, i, o, a, u) {
            var c = Sr({
                denyComments: !u.domKeepComments,
                denyTagNames: ["SCRIPT", "NOSCRIPT", "DOM-IF"],
                denyIdsByTagName: u.domIgnoredFormElements
                  ? { INPUT: u.domIgnoredFormElements }
                  : {},
                acceptIfTextContentMatches: u.domKeepScriptMatching
                  ? { SCRIPT: u.domKeepScriptMatching }
                  : {},
                denyHeadTagNames: ["IFRAME"],
                denyIds: u.domMaskOmitById || u.domOmitById,
                denyClasses: u.domMaskOmitByClass || u.domOmitByClass,
                denyObjectElementsByType: u.domOmitObjectElementsByType,
              }),
              s = [];
            s.push(o.createContextUpdater(t)),
              s.push(a.createContextUpdater(t));
            var f,
              d,
              l,
              h = new kr(c, new Er(s), { crossShadow: u.recordShadowDom }),
              v = B.compositeFunctionBuilder(!0)
                .add(Vr)
                .add(zr);
            v.add(
              ((f = V),
              (d = a),
              function(n, e) {
                if (n.nodeType === Node.TEXT_NODE && e && e.maskText)
                  return n.ownerDocument.createTextNode(
                    B.transformTextSegments(n.textContent, f.censorValueOf)
                  );
                if (n.nodeType === Node.TEXT_NODE && e && e.encryptText) {
                  var t = d.encrypt(n.textContent);
                  return n.ownerDocument.createTextNode(t);
                }
              })
            ),
              u.maskTitle &&
                v.add(
                  ((l = V),
                  function(n) {
                    if ("TITLE" === n.nodeName) {
                      var e = n.ownerDocument.createElement("title");
                      return (
                        (e.textContent = B.transformTextSegments(
                          n.textContent,
                          l.censorValueOf
                        )),
                        e
                      );
                    }
                  })
                ),
              (u.struggleCaptureHorizontalScrollbar ||
                u.struggleCaptureBlankPage) &&
                v.add(i.clonerHook);
            var m,
              g,
              p,
              y,
              w,
              b,
              E,
              C,
              S = B.compositeFunctionBuilder(!0).add(
                function(n, e, t, r) {
                  t.nodeType === Node.ELEMENT_NODE && t.setAttribute(n, r[e]);
                }.bind(null, "gbid", Q.GB_ID_FIELD_NAME)
              );
            (u.valueMaskingMode === _.censorMode.WhiteList ||
              u.maskBlacklistValueByClass.length ||
              u.maskBlacklistValueById.length ||
              u.valueMaskByCategories.length ||
              u.valueBlacklistMaskSimpleSelector.length ||
              u.valueEncryptionMode === _.censorMode.WhiteList ||
                u.valueEncryptById.length ||
                u.valueEncryptByClass.length) &&
              (S.add(
                ((g = r),
                function(n) {
                  "INPUT" === n.tagName &&
                    n.getAttribute("value") &&
                    n.setAttribute("value", g.censor(n));
                })
              ),
              v.add(
                ((m = r),
                function(n) {
                  var e;
                  if (
                    "TEXTAREA" === n.tagName &&
                    n.firstChild &&
                    n.firstChild.textContent &&
                    (e = m.censor(n)) !== n.firstChild.textContent
                  ) {
                    var t = n.cloneNode(!0);
                    return (
                      (t.firstChild.textContent = e), (t.maskContent = !0), t
                    );
                  }
                })
              )),
              u.domMaskAttributesByTag.length &&
                u.domMaskedAttributes.length &&
                S.add(
                  ((p = V),
                  (y = {
                    domMaskedAttributes: u.domMaskedAttributes,
                    domMaskAttributesTags: u.domMaskAttributesByTag,
                    domMaskIgnoreAttribute: u.domMaskIgnoreAttribute,
                  }),
                  (w = { IMG: "data:image/gif;base64," }),
                  (b = B.immutableSet.apply(null, y.domMaskedAttributes)),
                  (E = B.immutableSet.apply(
                    null,
                    (y.domMaskAttributesTags || []).map(function(n) {
                      return n.toUpperCase();
                    })
                  )),
                  (C = y.domMaskIgnoreAttribute),
                  function(n) {
                    var e, t;
                    if (
                      E[n.tagName] &&
                      "function" == typeof n.getAttribute &&
                      !n.hasAttribute(C)
                    )
                      for (e in b)
                        !b.hasOwnProperty(e) ||
                          ((t = n.getAttribute(e)) &&
                            (w[n.tagName] && "src" === e
                              ? n.setAttribute(e, w[n.tagName])
                              : n.setAttribute(e, p.censorValueOf(t))));
                  })
                );
            var T,
              k,
              x,
              I,
              M = B.isIE(n.navigator.userAgent),
              R =
                ((T = e),
                (k = {
                  maxElements: M
                    ? u.domFuseElementCountIE
                    : u.domFuseElementCount,
                  maxDuration: M ? u.domFuseDurationIE : u.domFuseDuration,
                }),
                (x = 0 < ((k = k || {}).maxElements || 0)),
                (I = 0 < (k.maxDuration || 0)),
                {
                  createFuse: function() {
                    return {
                      blown: !1,
                      createdAt: new Date(),
                      elementCount: -1,
                      duration: -1,
                      onElementsCloned: N,
                    };
                  },
                });
            function A(n, e) {
              var t;
              n.blown ||
                ((t =
                  -1 !== n.duration ? n.duration : new Date() - n.createdAt),
                n.elementCount,
                (n.blown = !0),
                T.emit("dom:fuseBlown", {
                  reason: e,
                  duration: t,
                  elements: n.elementCount,
                  maxDuration: k.maxDuration || -1,
                  maxElements: k.maxElements || -1,
                }));
            }
            function N(n) {
              this.blown ||
                ((this.elementCount = n),
                I &&
                ((this.duration = new Date() - this.createdAt),
                this.duration >= k.maxDuration)
                  ? A(this, "duration")
                  : x &&
                    this.elementCount >= k.maxElements &&
                    A(this, "elementCount"));
            }
            var D = new Tr(
              n,
              (function(n, e, t) {
                var r,
                  i,
                  o,
                  a = L;
                try {
                  a = t ? new RegExp(t, "i") : L;
                } catch (n) {}
                return (
                  (o =
                    (a && a.test(n.navigator.userAgent)) ||
                    e.isSafari(n.navigator.userAgent) ||
                    e.isChromeOnIos(n.navigator.userAgent)
                      ? ((r = n.document.implementation.createHTMLDocument(
                          "cloner-doc"
                        )),
                        (i = O.documentElement.namespaceURI),
                        function(n) {
                          var e;
                          return (
                            n.nodeType === Node.ELEMENT_NODE
                              ? ((e =
                                  n.namespaceURI !== i
                                    ? r.createElementNS(
                                        n.namespaceURI,
                                        n.tagName.toLowerCase()
                                      )
                                    : r.createElement(n.tagName)),
                                Array.prototype.slice
                                  .call(n.attributes)
                                  .forEach(function(n) {
                                    try {
                                      e.setAttribute(n.name, n.value);
                                    } catch (n) {}
                                  }))
                              : (e = r.importNode(n, !1)),
                            e
                          );
                        })
                      : e.isIE(n.navigator.userAgent)
                      ? ((r = n.document),
                        function(n) {
                          return n.cloneNode(!1);
                        })
                      : ((r = n.document.implementation.createHTMLDocument(
                          "cloner-doc"
                        )),
                        function(n) {
                          return r.importNode(n, !1);
                        })),
                  { clonerDoc: r, cloneNode: o }
                );
              })(n, B, u.forceRenderingFixForUA),
              R,
              t,
              h,
              v.build(),
              S.build()
            );
            (this.isNodeAccepted = c),
              (this.createChildNodesIterator = function(n) {
                return new Cr(n, c);
              }),
              (this.visit = h.visit.bind(h)),
              (this.cloneNode = D.clone.bind(D));
          })(window, P, Q, K, $, ke, xe, F)),
          (Yn = Gr(window, P, O, Qn.isNodeAccepted, {
            semiDomEnabled: F.semiDomEnabled,
            domIE11ForceMutationObserver: F.domIE11ForceMutationObserver,
            domTamperingDetectionEnabled: F.domTamperingDetectionEnabled,
            domThrottle: F.domThrottleChanges,
            domThrottleIEOnly: F.domThrottleChangesIE11Only,
          })),
          ($n = (function(n, e) {
            for (var t = 0; t < e.length; t++)
              if (-1 !== n.indexOf(e[t])) return !0;
            return !1;
          })(O.location.href, F.domPartialWhenLocationContains || [])),
          Nn.registerPlugin(
            "domRecordingPlugin",
            new (function(e, t, r, n, i, o, a, u, c, s, f, d) {
              var l,
                h,
                v,
                m,
                g = new Fr(
                  ((l = Xr(i)),
                  (h = [
                    {
                      name: "DOM-mutations",
                      tracker: new Br(P, i),
                      providers: [
                        Mr.bind(null, n.createChildNodesIterator, o, a),
                        function(n, e, t, r) {
                          var i = t.attributes ? Object.keys(t.attributes) : [];
                          if (i && 0 < i.length) {
                            for (var o, a = {}, u = 0; u < i.length; u++)
                              (o = t.element.getAttribute(i[u])),
                                "INPUT" === t.element.tagName &&
                                "value" === i[u]
                                  ? (o =
                                      "password" ===
                                      t.element.getAttribute("type")
                                        ? V.censorValueOf(o)
                                        : n.censor(t.element))
                                  : e.isAttributeMasked(t.element, i[u]) &&
                                    (o = V.censorValueOf(o)),
                                (a[i[u]] = {
                                  value: o,
                                  ordinal: t.attributes[i[u]],
                                });
                            var c = B.ensureProperty(r, "domChanges", t.id);
                            return (c.attributes = a), c;
                          }
                        }.bind(null, c, o),
                        function(n, e, t, r, i, o, a) {
                          if (void 0 !== o.childListOrdinal) {
                            if (
                              i.isDomMasked(
                                o.element,
                                Xn.SELF_OR_ANY_PARENT,
                                Gn.OMIT
                              )
                            )
                              return;
                            for (
                              var u, c, s, f = [], d = r(o.element);
                              (u = d.next());

                            )
                              (c = e.idOf(u)),
                                o.addedNodes && o.addedNodes[c]
                                  ? ((s = n.cloneNode(u)),
                                    f.push(t.tokenForClonedNode(s)))
                                  : f.push(t.tokenForNode(u));
                            var l = o.element.shadowRoot;
                            l &&
                              o.addedNodes[e.idOf(l)] &&
                              f.push(t.tokenForClonedNode(n.cloneNode(l)));
                            var h = B.ensureProperty(a, "domChanges", o.id);
                            return (
                              (h.children = {
                                ordinal: o.childListOrdinal,
                                childList: f,
                              }),
                              h
                            );
                          }
                        }.bind(null, n, i, l, n.createChildNodesIterator, o),
                      ],
                    },
                    {
                      name: "property",
                      tracker: new jr(O, i, d.ignoredFormElements),
                      providers: [
                        Rr(c, { ignoredFormElement: d.ignoredFormElements }),
                      ],
                    },
                  ]),
                  d.recordCssRules &&
                    h.push({
                      name: "css",
                      tracker: new Ur(e, i),
                      providers: [Ir],
                    }),
                  h),
                  d.includeSelectorOnUpdate
                    ? new Rt(F)
                    : {
                        getSelectorInfo: function() {
                          return {};
                        },
                      },
                  { tokenizationVersion: "2" }
                ),
                p = B.compositeFunctionBuilder()
                  .add(
                    function(n, e) {
                      "INPUT" === n.tagName &&
                        (e.value && n.setAttribute("value", e.value),
                        e.checked && n.setAttribute("checked", ""));
                    }.bind(null)
                  )
                  .add(
                    ((v = V),
                    function(n, e) {
                      "TEXTAREA" === n.tagName &&
                        e.firstChild &&
                        e.value !== e.firstChild.textContent &&
                        (n.maskContent
                          ? (n.firstChild.textContent = v.censorValueOf(
                              e.value
                            ))
                          : (n.firstChild.textContent = e.value));
                    })
                  )
                  .add(Wr);
              e.ShadowRoot &&
                d.recordShadowDom &&
                ((m = new xr(e, t, { byCtor: ["ShadowRoot"] })),
                p.add(m.clonerHook.bind(m)));
              var y = new Or(
                  e,
                  O,
                  n,
                  new wr({ cookieMask: d.maskCookies }),
                  Y,
                  p.build(),
                  d.preciseStyleSheetCloning ? qr : zr
                ),
                w = {
                  snapshotDuration: -1,
                  domUpdateDuration: -1,
                  domUpdateCount: 0,
                  domObserver: r ? r.getName() : "NONE",
                },
                b = !!r;
              function E() {
                (R = M = !1), (A = 0);
              }
              function C() {
                E(), _();
              }
              function S(n) {
                if (!I) return L;
                for (var e = 0; e < d.ajaxTriggers.length; e++)
                  if (-1 !== n.url.indexOf(d.ajaxTriggers[e]))
                    return n.url, void C();
              }
              function T(n) {
                if (!I) return L;
                -1 !== d.triggers.indexOf(n.selectorExpression) &&
                  (n.selectorExpression, C());
              }
              function k() {
                b &&
                  (r.start(),
                  !I ||
                    M ||
                    R ||
                    void 0 === d.onLoadTimeoutReport ||
                    -1 === d.onLoadTimeoutReport ||
                    setTimeout(_, d.onLoadTimeoutReport));
              }
              function x() {
                ++D % d.updateOnWsCount == 0 && t.emit("pageUpdate");
              }
              (d = d || {}), (f = f || function() {});
              var I = !1,
                M = !1,
                R = !1,
                A = 0,
                N = 0,
                D = 0,
                _ = function() {
                  if (!R && !M)
                    try {
                      b && r.start(),
                        ((n = new Date()),
                        (e = y.take(N)) &&
                          ((w.snapshotDuration = new Date() - n),
                          N++,
                          t.emit("pageSnapshot:report", e),
                          t.emit("pageSnapshot:save", e)),
                        e)
                          ? (t.emit("domTrackingStarted"), g.start(), (M = !0))
                          : 3 <= ++A &&
                            (f("pageSnapshotError(3)", y.lastError), (R = !0));
                    } catch (n) {
                      f("startingError", n),
                        logger.error(
                          "error during DOM recording plugin starting. error: " +
                            n
                        );
                    }
                  var n, e;
                  return M;
                };
              (this.initialize = function(n) {
                return (
                  n.on("event:mousedown", T),
                  n.on("ajax:send", S),
                  n.on("init:loaded", k),
                  n.on("session:new", C),
                  -1 !== d.updateOnWsCount && new Ar(e, x),
                  d.compressionEnabled,
                  (I = !0)
                );
              }),
                (this.stats = function() {
                  return w;
                }),
                (this.getDomSnapshot = function() {
                  if (!I) return L;
                  if (R) return L;
                  if (!_()) return L;
                  if (!b) return L;
                  var n = new Date(),
                    e = g.getSnapshot();
                  return (
                    (w.domUpdateDuration += new Date() - n),
                    w.domUpdateCount++,
                    e
                  );
                }),
                (this.ensureStarted = _),
                (this.isSemiDomActivated = function() {
                  return !b;
                }),
                (this.isStarted = function() {
                  return M;
                }),
                (this.reset = E),
                (this.getNodeCloner = function() {
                  return n;
                }),
                (this.getDomMasker = function() {
                  return o;
                }),
                (this.getDomEncryptor = function() {
                  return a;
                }),
                (this.getNodeVisitor = function() {
                  return n;
                }),
                (this.consumeCapturedNodes = function(n) {
                  return m ? m.consumeByCtor(n) : [];
                }),
                (this.nodeAcceptancePredicate = n.isNodeAccepted.bind(n)),
                (this.getSnapshotAccumulator = function() {
                  return g;
                });
            })(
              window,
              P,
              Yn,
              Qn,
              Q,
              ke,
              xe,
              0,
              K,
              0,
              function(n, e) {
                Nn.saveClsDebugErrorEvent("domPlugin", e, n);
              },
              {
                triggers: F.domNewPageTriggers,
                ajaxTriggers: F.domNewPageAjaxTriggers,
                onLoadTimeoutReport: F.domStartAfter,
                updateOnWsCount: F.domUpdateEveryWsMsgIn,
                compressionEnabled: F.domCompress,
                ignoredFormElements: F.domIgnoredFormElements,
                recordCssRules: F.domRecordCssRules,
                maskCookies: F.maskCookies,
                recordShadowDom: F.recordShadowDom,
                preciseStyleSheetCloning: F.domPreciseStyleSheetCloning,
                includeSelectorOnUpdate: F.domIncludeSelectorOnUpdate,
              }
            )
          )),
        void 0 !== Nn &&
          ((Zn = new Ht({}, function(n, e, t, r) {
            t
              ? (P.emit("removeFromStorage", { pageId: n, beaconData: e }),
                P.emit("beacon:sent", e.sn))
              : P.emit("beacon:failed", { sn: e.sn, status: r });
          })),
          (ne = function(n) {
            P.emit("handleGatewayResponse", n);
          }),
          (ee = it(w, navigator, G, q.isCorsReporting(), F)),
          (te = F.externalReporting
            ? new (function(c, o, s, logger, f, d, l, h) {
                var v = 0;
                function m(n, e, t, r, i, o) {
                  try {
                    var a = !1;
                    if (3 === v)
                      return (
                        l.stop(),
                        void logger.error(
                          "Stopped recording after exceeding errors limit"
                        )
                      );
                    n = n || "";
                    var u = s.createRequest(t);
                    if (!u)
                      return (
                        logger.error("Failed creating request object"),
                        v++,
                        (a = !0),
                        void o()
                      );
                    r === L && (r = h.reportMaxRetries),
                      (u.onreadystatechange = function() {
                        2 === u.readyState
                          ? u.success
                            ? (function() {
                                f(e, i, !0);
                                var n = u.responseContentType;
                                n &&
                                  -1 !== n.indexOf("application/json") &&
                                  d(u.response),
                                  (a = !0),
                                  o();
                              })()
                            : h.reportPostRetry && r
                            ? (r--, f(e, i, !1, u.status), m(n, e, t, r, i, o))
                            : ((a = !0), o())
                          : 3 === u.readyState &&
                            (h.reportPostRetry && r
                              ? m(n, e, t, --r, i, o)
                              : ((a = !0), o()));
                      }),
                      -1 !== h.reportAbortAfter &&
                        setTimeout(function() {
                          2 !== u.readyState && (u.abort(), a || o());
                        }, h.reportAbortAfter),
                      u.send(n, c.getContentType(), h.reportCompress);
                  } catch (n) {
                    v++,
                      logger.error(
                        "Failed creating or handling request with beacon (" +
                          e +
                          ") to url " +
                          t +
                          ": " +
                          n.message,
                        n
                      ),
                      (a = !0),
                      o();
                  }
                }
                (this.name = "ExternalReporter"),
                  (this.config = { maxReportSize: h.maxPostReportSize }),
                  (this.dispatch = function(n, e, t, r, i) {
                    m(n, t, o.apply(e.reportURI, e, t, r), L, e.pageId, i);
                  });
              })(
                ee,
                new At(_.detectorVersion, F.reportAddUriParams),
                window[F.externalReporterObject],
                logger,
                Zn.onReporterMessage.bind(Zn),
                ne,
                Nn.asStoppable(),
                F
              )
            : F.reportByPost ||
              F.domRecordEnabled ||
              "undefined" == typeof createHttpGetReporter
            ? new vr(
                ee,
                new At(_.detectorVersion, F.reportAddUriParams),
                Rn,
                logger,
                Zn.onReporterMessage.bind(Zn),
                ne,
                F
              )
            : createHttpGetReporter()),
          Nn.registerPlugin(
            "reporter",
            new (function(t, r, n, e, i) {
              var o,
                a = { count: 0, flushedBytes: 0, encodingErrors: [] },
                u = new Xt(t);
              function c(n) {
                var e;
                o.flush(),
                  i.reportCreateSubSessionCookie &&
                    ((e = B.uuid()),
                    z.set(_.cookies.sub_session, e),
                    (n.cookie = O.cookie),
                    t.emit("session:newSubSessionId", {
                      pageSnapshotSN: n.seq,
                      subSessionId: e,
                    }));
              }
              new Yt(window, t, u, a, i),
                (o =
                  window !== window.top &&
                  window.MessageChannel &&
                  i.reportViaTopWindow
                    ? new er(
                        t,
                        function() {
                          return Nn;
                        },
                        new mr(window),
                        u,
                        new Zt(window.sessionStorage, new gr(B.Base64)),
                        i
                      )
                    : new nr(
                        t,
                        r,
                        e,
                        new hr(P, {}, 1e3),
                        u,
                        new qt(e, n, r, a, i),
                        new Zt(window.sessionStorage, new gr(B.Base64)),
                        a,
                        i
                      )),
                (this.initialize = function(n, e) {
                  if (!E.isUndefined(i.reportURI) && 0 !== i.reportURI.length)
                    return (
                      i.reportByPost,
                      r.name,
                      i.reportCompress,
                      r.supportsCompression,
                      t.on("pageSnapshot:report", c),
                      !0
                    );
                  console.log(
                    "ERROR[EyeView-1401]: Detector script is missing configuration for 'reportURI'. Please add it."
                  );
                }),
                (this.stats = function() {
                  return a;
                });
            })(P, ee, Zn, te, F)
          )),
        void 0 === Nn ||
          void 0 === F ||
          B.isMobile() ||
          !F.domTamperingDetectionEnabled ||
          ("undefined" == typeof MutationObserver &&
            "undefined" == typeof WebKitMutationObserver) ||
          Nn.registerPlugin(
            "domTamperingPlugin",
            new (function(o, a, u) {
              var t,
                c = {},
                s = 5,
                f = 0,
                r = !1,
                i = !1;
              function e() {
                t = B.currentTimestamp();
              }
              function d(n) {
                var e = n.target.data;
                (r =
                  r ||
                  ((t = t || B.currentTimestamp()),
                  500 <= B.currentTimestamp() - t)),
                  i &&
                    r &&
                    f < s &&
                    "characterData" === n.type &&
                    c[u.idOf(n.target)] !== e &&
                    n.oldValue !== e &&
                    (++f,
                    a.emit("domTampered", {
                      element: n.target.parentNode,
                      newText: e,
                      prevText: n.oldValue,
                    })),
                  (i = !0);
              }
              function l(e) {
                var t,
                  n = O.implementation.createHTMLDocument("test");
                (t = new MutationObserver(function(n) {
                  t && t.disconnect(), "characterData" !== n[0].type && e();
                })).observe(n, {
                  attributes: !1,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                  attributeOldValue: !1,
                  characterDataOldValue: !1,
                }),
                  (n.body.innerText = "text1");
              }
              this.initialize = function() {
                function n() {
                  function n() {
                    f < s && (c[u.idOf(this)] = this.data);
                  }
                  function e() {
                    this.nodeType === Node.TEXT_NODE &&
                      f < s &&
                      (c[u.idOf(this)] = this.data);
                  }
                  var t, r, i;
                  (t = Sn.hookProto(o.CharacterData.prototype)),
                    (r = Sn.hookProto(o.Text.prototype)),
                    (i = Sn.hookProto(o.Node.prototype)),
                    t.setHookAfter("replaceData", n),
                    t.setHookAfter("appendData", n),
                    t.setHookAfter("insertData", n),
                    t.setHookAfter("deleteData", n),
                    t.hookSetPropertyAfter("data", n),
                    r.setHookAfter("splitText", n),
                    i.hookSetPropertyAfter("textContent", e),
                    i.hookSetPropertyAfter("nodeValue", e),
                    r.setHookAfter("replaceWholeText", n),
                    a.on("domMutation", d);
                }
                a.on("init:domready", e), !!o.chrome && !o.opr ? l(n) : n();
              };
            })(window, P, Q)
          ),
        (re = window),
        (ie = void 0 !== F && F.iframesDebugEnabled),
        (oe = re.top !== re),
        (iframeHelper = {
          MAX_DEPTH_THRESHOLD: 20,
          tryGetCurrentDepth: function(n) {
            var e = 0,
              t = n;
            try {
              for (; t.parent != t && e <= this.MAX_DEPTH_THRESHOLD; )
                (t = t.parent), e++;
            } catch (n) {
              return (
                logger.error(
                  "could not retrieve current window's depth (a CORS issue?). error:" +
                    n
                ),
                -1
              );
            }
            return e > this.MAX_DEPTH_THRESHOLD
              ? (this.MAX_DEPTH_THRESHOLD, -1)
              : e;
          },
          isCrossOriginFrame: function(n, e) {
            try {
              if (!n.contentWindow) return !0;
              var t = n.getAttribute("src");
              if ("about:blank" === t) return !1;
              if (!t) return !1;
              var r = B.extractOrigin(t);
              return !!r && e !== r;
            } catch (n) {
              return !0;
            }
          },
          isEmpty: function(n) {
            return !(
              n.contentDocument && n.contentDocument.body.hasChildNodes()
            );
          },
          logError: function() {
            var n = Array.prototype.slice.call(arguments);
            return (
              "string" == typeof n[0] &&
                (n[0] =
                  "[frame.debug] " +
                  (oe ? "FRAME (" + re.location.href + ")" : "TOP") +
                  "  " +
                  n[0]),
              ie ? console.log.apply(console, n) : logger.error(n)
            );
          },
          logDebug: function() {
            var n = Array.prototype.slice.call(arguments);
            return (
              "string" == typeof n[0] &&
                (n[0] =
                  "[frame.debug] " +
                  (oe ? "FRAME (" + re.location.href + ")" : "TOP") +
                  "  " +
                  n[0]),
              ie && logger.log(n)
            );
          },
        }),
        (ae = {
          hidden: function(n) {
            return !(!n || !n.style || "none" !== n.style.display);
          },
        }),
        void 0 !== Nn &&
          F.iframesRecordEnabled &&
          ((ue = function(n) {
            return "" + Q.idOf(n);
          }),
          (ce = (function(n, e, t, r) {
            if ((r = r || {}).directChannel) return Kr(n, e, t);
            if (r.directChannelWhenUriContainer)
              for (var i = 0; i < r.directChannelWhenUriContainer.length; i++)
                if (
                  0 <=
                  n.location.href.indexOf(r.directChannelWhenUriContainer[i])
                )
                  return Kr(n, e, t);
            return Jr(n);
          })(window, Nn, i, {
            directChannel: F.iframesDirectChannel,
            directChannelWhenUriContainer:
              F.iframesDirectChannelWhenUriContains,
          })),
          Nn.registerPlugin(
            "iframes",
            (function() {
              new ii(P, Nn.blackoutManager, {
                suspendReportingWhenLocationContains:
                  F.iframesBlackoutWhenLocationContains,
              });
              var n = new oi(P),
                e = new Zr(window, ce, F.iframesParentOrigin),
                t = new $r(window, ce),
                r = new ei(
                  P,
                  function() {
                    return Nn.plugins.domRecordingPlugin;
                  },
                  Nn.savePageUpdate.bind(Nn),
                  Nn.blackoutManager,
                  n,
                  function(n) {
                    P.emit("parentWindowInfo", n);
                  },
                  function(n) {
                    P.emit("iframePortReceived", n);
                  }
                );
              return new ai(
                window,
                P,
                n,
                new ti(O, P),
                new Qr(window, O, P, Q),
                _.detectorScript
                  ? new Yr(O, F, _.detectorScript, i, {
                      skipHidden: F.iframesSkipHidden,
                      forceDirectChannel: "direct" === ce.name,
                      skipWhenLocationContains:
                        F.iframesSkipWhenLocationContains,
                      injectionMode: F.iframesAutoInjectMode,
                    })
                  : L,
                new ni(window, e, t, r, {
                  disabled: F.iframesDisableNotifications,
                }),
                Nn.blackoutManager,
                new ri(O, Nn.page, Nn.blackoutManager, e, t, ue, Nn, {
                  mscTimeout: F.iframesHandshakeTimeout,
                }),
                0,
                ue,
                (function(n, e, t) {
                  t = t || {
                    containerIdKey: "containerId",
                    parentPageIdKey: "pageId",
                  };
                  var r,
                    i,
                    o,
                    a = !1;
                  function u() {
                    a ||
                      (o[t.containerIdKey] &&
                        r.setExtraInfo(t.containerIdKey, o[t.containerIdKey]),
                      o[t.parentPageIdKey] &&
                        r.setExtraInfo(t.parentPageIdKey, o[t.parentPageIdKey]),
                      i(),
                      (a = !0));
                  }
                  return (
                    n.on(
                      "event:unload",
                      function() {
                        r && ((o = {}), u());
                      },
                      L,
                      -100
                    ),
                    (e.documentEventHook = function(n, e) {
                      (r = n), (i = e), o && u();
                    }),
                    function(n, e) {
                      (o = { parentPageId: n, containerId: e }), r && i && u();
                    }
                  );
                })(P, Nn, {
                  parentPageIdKey: Ye.prototype.PARENT_PAGE_ID,
                  containerIdKey: Ye.prototype.CONTAINER_ID,
                }),
                {
                  skipHidden: F.iframesSkipHidden,
                  autoInject: F.iframesAutoInject,
                }
              );
            })()
          )),
        void 0 !== Nn &&
          void 0 !== F &&
          F.collectStruggles &&
          Nn.registerPlugin(
            "strugglesPlugin",
            ((se = window),
            (fe = P),
            (de = Q),
            (le = $),
            (he = X),
            (ve = window !== window.top),
            (ye = {}),
            (we = si(de, fe, di, (me = F))),
            (be = fi(se, di)),
            (Ee = {
              checkXhr: function(n) {
                ((0 === n.status && !n.aborted) || 400 <= n.status) &&
                  ge({
                    elementSelector: n.lastFocusedSelectorInfo,
                    dataToEncode: {
                      type: "ajaxError",
                      xhrStatus: n.status,
                      url: n.url,
                    },
                  });
              },
            }),
            (Ce = ci(se, (ge = di), fe, {
              horizontalScrollbar: me.struggleCaptureHorizontalScrollbar,
              blankPage: !ve && me.struggleCaptureBlankPage,
            })),
            le.setListener(Ce.handleNode),
            {
              initialize: function() {
                fe.on("init:loaded", li),
                  fe.on("event:click", pi),
                  fe.on("ajax:end", yi),
                  me.collectFormStruggles &&
                    ((ye = ui(se, de, di, he, {
                      maxFocusTime: me.struggleMaxLongFocusTime,
                    })),
                    fe.on("event:submit", hi),
                    fe.on("event:keyup", vi),
                    fe.on("event:elementChange", mi),
                    fe.on("event:unload", gi));
              },
            })
          ),
        void 0 !== Nn &&
          window === window.top &&
          F.devToolsDetectionEnabled &&
          !B.isMobile() &&
          ((Se = /firefox/i.test(navigator.userAgent)
            ? new (function(n, e) {
                var t = !1,
                  r = n.outerHeight,
                  i = n.innerHeight,
                  o = n.outerWidth,
                  a = n.innerWidth;
                function u() {
                  t ||
                    (n.outerHeight === r && 150 < n.Math.abs(n.innerHeight - i)
                      ? (e.emit("devToolsVisibilityChanged", {
                          value: !0,
                          size: "oh_" + n.outerHeight + "_ih_" + n.innerHeight,
                        }),
                        (t = !0))
                      : n.outerWidth === o && 150 < n.Math.abs(n.innerWidth - a)
                      ? (e.emit("devToolsVisibilityChanged", {
                          value: !0,
                          size: "ow_" + n.outerWidth + "_iw_" + n.innerWidth,
                        }),
                        (t = !0))
                      : n.outerHeight !== r
                      ? ((r = n.outerHeight), (i = n.innerHeight))
                      : ((o = n.outerWidth), (a = n.innerWidth)));
                }
                this.startDetecting = function() {
                  e.on("window:resize", u);
                };
              })(window, P)
            : new (function(e, n, t) {
                t = t || { consoleMessage: "" };
                var r = !1,
                  i = e.document.createElement("div"),
                  o = e.outerHeight,
                  a = e.outerWidth;
                function u(n) {
                  r ||
                    (n &&
                      (e.outerHeight !== o
                        ? ((o = e.outerHeight), 1)
                        : e.outerWidth !== a && ((a = e.outerWidth), 1))) ||
                    e.console.log(i);
                }
                (i.textContent = t.consoleMessage),
                  Object.defineProperty(i, "id", {
                    get: function() {
                      r ||
                        ((r = !0),
                        n.emit("devToolsVisibilityChanged", {
                          value: !0,
                          size:
                            "oh_" +
                            e.outerHeight +
                            "_ih_" +
                            e.innerHeight +
                            "_ow_" +
                            e.outerWidth +
                            "_iw_" +
                            e.innerWidth,
                        }));
                    },
                  }),
                  (this.startDetecting = function() {
                    n.on("event:unload", u.bind(null, !1)),
                      n.on("init:preloaded", u.bind(null, !1)),
                      n.on("window:resize", u.bind(null, !0));
                  });
              })(window, P, { consoleMessage: F.devToolsDetectionMessage })),
          Nn.registerPlugin(
            "devToolsTrackingPlugin",
            new (function(n) {
              n.startDetecting(), (this.initialize = function() {});
            })(Se)
          )),
        F.recordShadowDom &&
          F.domRecordEnabled &&
          window.ShadowRoot &&
          ((Te = new Rt(F)),
          Nn.registerPlugin(
            "shadowDomPlugin",
            new (function(t, n, r, i, o, a, u) {
              var c = {},
                s = Q,
                e = new bi(t, r, o.getNodeVisitor());
              r.on("shadow:rootDetected", function(n) {
                var e = Gr(t, r, n, o.nodeAcceptancePredicate, {
                  semiDomEnabled: u.semiDomEnabled,
                  domIE11ForceMutationObserver: u.domIE11ForceMutationObserver,
                  domTamperingDetectionEnabled: u.domTamperingDetectionEnabled,
                });
                (c[s.idOf(n)] = e),
                  o
                    .getSnapshotAccumulator()
                    .addBundle({
                      name: "property",
                      tracker: new jr(n, s, a, u.domIgnoredFormElements),
                      providers: [
                        Rr(i, { ignoredFormElement: u.domIgnoredFormElements }),
                      ],
                    }),
                  e.start();
              }),
                r.on("shadow:rootRemoved", function(n) {
                  var e = s.idOf(n);
                  c[e] && (c[e].stop(), delete c[e]),
                    o.getSnapshotAccumulator().removeBundle(n);
                }),
                r.on("domTrackingStarted", function() {
                  e.startObservingShadowRoots(
                    o.consumeCapturedNodes("ShadowRoot")
                  );
                }),
                (this.initialize = function() {}),
                (this.stats = function() {
                  return e.stats();
                });
            })(window, 0, P, K, Nn.plugins.domRecordingPlugin, Te, {
              semiDomEnabled: F.semiDomEnabled,
              domIgnoredFormElements: F.domIgnoredFormElements,
              domIE11ForceMutationObserver: F.domIE11ForceMutationObserver,
            })
          )),
        void 0 !== Nn &&
          window.performance &&
          void 0 !== window.performance.getEntriesByType &&
          void 0 !== window.MutationObserver &&
          Nn.registerPlugin(
            "resourceRecorderPlugin",
            new (function(n, e, t) {
              var r,
                i,
                o,
                a,
                u = {};
              F.resourcesRecordEnabled &&
                void 0 !== n.XMLHttpRequest &&
                ((r = new Ci(
                  n,
                  new Nt(n.localStorage, {
                    keysPrefix: _.Storage.UnboundKeyPrefix,
                  }),
                  Ei,
                  e,
                  t,
                  ((i = F.resourcesRecordAllowCors),
                  (o = F.resourceIgnoreWhenUrlContains),
                  function(n) {
                    if (
                      !B.startsWith(n, "http") ||
                      (!i && B.extractOrigin(n) !== window.location.origin)
                    )
                      return !0;
                    for (var e = 0; e < o.length; e++)
                      if (-1 !== n.indexOf(o[e])) return !0;
                    return !1;
                  }),
                  {
                    electProbability: F.resourcesRecordChance,
                    electAmount: F.resourcesRecordCount,
                    maxPendingResources: 5,
                    resourceRecordCssOnly: F.resourceRecordCssOnly,
                  },
                  u
                )),
                e.on("init:loaded", function() {
                  setTimeout(r.fetchResources.bind(r), 5e3);
                }),
                e.on("event:unload", r.electResources.bind(r))),
                F.resourceTimingRecordEnabled &&
                  ut(
                    F.resourceTimingRecordEnabledByChance,
                    W,
                    "performanceRecord"
                  ) &&
                  ((a = new Si(n, P, [
                    {
                      type: "resource",
                      properties: [
                        "name",
                        "startTime",
                        "requestStart",
                        "responseStart",
                        "responseEnd",
                        "duration",
                        "decodedBodySize",
                        "async",
                      ],
                      filterBy: "initiatorType",
                      validFilterValues: B.immutableSet(
                        "link",
                        "css",
                        "font",
                        "img",
                        "input",
                        "script"
                      ),
                    },
                  ])),
                  e.on("init:loaded", a.reportMeasurements.bind(a))),
                (this.initialize = function() {}),
                (this.startRecordingAll = function() {
                  r
                    ? (console.log("Entering full resources recording mode."),
                      r.recordAllResources())
                    : console.log("Please allow resource recording first.");
                }),
                (this.stopRecordingAll = function() {
                  r
                    ? (console.log("Exiting full resources recording mode."),
                      r.stopRecordAllResources())
                    : console.log("Please allow resource recording first.");
                }),
                (this.stats = function() {
                  return u;
                });
            })(window, P, new gr(B.Base64))
          ),
        F.reportValidationErrors &&
          Nn.plugins.domRecordingPlugin &&
          Nn.registerPlugin(
            "formValidationPlugin",
            new (function(n, t, r, i, o) {
              t.on("init:loaded", function() {
                "undefined" != typeof jQuery &&
                  void 0 !== jQuery.validator &&
                  new ki(t).intercept();
              }),
                t.on("init:preloaded", function() {
                  var e;
                  o.domFormValidationTracking &&
                    ((e = new Ti(n, t, B, r, i, {
                      redComponentMin: o.redComponentMin,
                      redComponentDelta: o.redComponentDelta,
                      submitIds: o.submitIds,
                      allowFormLevel: o.allowFormLevel,
                      considerBG: o.considerBG,
                      additionalTagNames: o.additionalTagNames,
                    })),
                    t.on("event:mousedown", function(n) {
                      e.intercept(n.element);
                    }),
                    t.on("element:focus", function(n) {
                      e.intercept(n);
                    }));
                }),
                (this.initialize = function() {});
            })(window, P, Q, Nn.plugins.domRecordingPlugin.getNodeVisitor(), {
              domFormValidationTracking: F.domFormValidationTracking,
              redComponentMin: F.domFormValidationRedComponentMin,
              redComponentDelta: F.domFormValidationRedComponentDelta,
              submitIds: F.domFormValidationSubmissionIds,
              allowFormLevel: F.domFormViolationsAllowFormLevel,
              considerBG: F.domFormValidationConsiderBG,
              additionalTagNames: F.domFormValidationAdditionalTagNames,
            })
          ),
        F.clientAttributesEnabled &&
          void 0 !== Nn &&
          ((ke = (ke =
            Nn.plugins.domRecordingPlugin &&
            Nn.plugins.domRecordingPlugin.getDomMasker()) || {
            isDomMasked: function() {
              return !1;
            },
          }),
          (xe = (xe =
            Nn.plugins.domRecordingPlugin &&
            Nn.plugins.domRecordingPlugin.getDomEncryptor()) || {
            isDomEncrypted: function() {
              return !1;
            },
          }),
          Nn.registerPlugin(
            "attributePlugin",
            new (function(n, e) {
              n.on("newRemoteConfig", function(n) {
                n.attributeRules && e.processRules(n.attributeRules);
              }),
                (this.initialize = function() {}),
                (this.stats = function() {
                  return e.getStats();
                }),
                (this.evaluateAttributes = function() {
                  e.evaluateAttributes();
                });
            })(
              P,
              new (function(f, d, i, o, a, l) {
                var h = {},
                  v = [],
                  u = [
                    "name",
                    "pageUrl",
                    "selector",
                    "accessorMethod",
                    "accessor",
                  ],
                  e = !1,
                  m = {
                    masked: 0,
                    reported: 0,
                    configured: 0,
                    configurationLastUpdatedAt: 0,
                    badRules: 0,
                    evalRoundsCount: 0,
                    evalDurationTotalMsc: 0,
                    evalDurationAverageMsc: 0,
                    reportsByRule: {},
                    rulesList: [],
                  };
                function t(n) {
                  for (var e, t = 0; t < n.length; t++)
                    (e = (function(n) {
                      for (var e = 0; e < u.length; e++) if (!n[u[e]]) return;
                      if (
                        a[n.accessorMethod] &&
                        o.isValidSelector(n.selector)
                      ) {
                        var t,
                          r = n.pageUrl;
                        n.pageHash &&
                          (r +=
                            ("#" === n.pageHash.charAt(0) ? "" : "#") +
                            n.pageHash);
                        try {
                          t = new RegExp("^" + r.split("*").join(".*") + "$");
                        } catch (n) {
                          return void logger.error(
                            "Exception occurred during parsing regular expression. Error: " +
                              n.message,
                            n
                          );
                        }
                        return (
                          (n.selector = n.selector.replace(/\s*>\s*/g, ">")),
                          new i(n, o, a, t)
                        );
                      }
                    })(n[t])) && v.push(e);
                  (m.configured = n.length), (m.badRules = n.length - v.length);
                }
                function c(n, e) {
                  try {
                    for (
                      var t, r = f.location.href, i = {}, o = 0;
                      o < v.length;
                      o++
                    ) {
                      var a,
                        u = Date.now(),
                        c = v[o].evaluate(
                          n,
                          r,
                          e,
                          i,
                          (function(n) {
                            var e;
                            return function() {
                              return (e =
                                e || X.getSelectorInfo(n, !1).selector);
                            };
                          })(n)
                        ),
                        s = Date.now();
                      (m.evalDurationTotalMsc += s - u),
                        m.evalRoundsCount++,
                        (m.evalDurationAverageMsc =
                          m.evalDurationTotalMsc / m.evalRoundsCount),
                        (t = v[o].getRuleName()),
                        c &&
                          c.val &&
                          h[t] !== c.val &&
                          (c.isMasked()
                            ? m.masked++
                            : ((a =
                                v[o].getRuleMaxLength() ||
                                l.clientAttributeMaxLength),
                              d.emit("clientAttribute", {
                                name: t,
                                val: c.val.substring(0, a),
                              }),
                              (m.reportsByRule[t] =
                                (m.reportsByRule[t] || 0) + 1),
                              m.reported++),
                          (h[t] = c.val));
                    }
                  } catch (n) {
                    logger.error(
                      "Exception occurred during rule evaluation. Error: " +
                        n.message,
                      n
                    );
                  }
                }
                d.on("domMutation", function(n) {
                  var e = "characterData" === n.type,
                    t = !e && "attributes" === n.type,
                    r = e ? n.target.parentNode : n.target;
                  e ||
                    "childList" !== n.type ||
                    (e =
                      1 === n.addedNodes.length &&
                      n.addedNodes[0].nodeType === Node.TEXT_NODE),
                    c(r, e || t);
                }),
                  d.on("init:loaded", function() {
                    c(f.document, !1), (e = !0);
                  }),
                  (this.processRules = function(n) {
                    (h = {}),
                      (m.configurationLastUpdatedAt = B.currentTimestamp()),
                      B.assign(m.rulesList, n),
                      t(n),
                      e && c(f.document, !1);
                  }),
                  (this.getStats = function() {
                    return m;
                  }),
                  (this.evaluateAttributes = function() {
                    c(f.document, !1);
                  });
              })(
                window,
                P,
                _i,
                ((Oe = window.document),
                (Fe = Oe.createElement("div")),
                (Pe =
                  Element.prototype.matches ||
                  Element.prototype.msMatchesSelector ||
                  function() {
                    return !1;
                  }),
                (Le = /([^>]*):eq\((\d+)\)/gi),
                (Be = function(n) {
                  for (var e, t = [], r = 0, i = Le.exec(n); null !== i; )
                    i.index &&
                      (e = Ri(n.substring(r, i.index))) &&
                      t.push({ selector: e, eqIndex: -1 }),
                      t.push({ selector: Ri(i[1]), eqIndex: parseInt(i[2]) }),
                      (r = i.index + i[0].length),
                      (i = Le.exec(n));
                  return (
                    r < n.length &&
                      (e = Ri(n.substring(r))) &&
                      t.push({ selector: e, eqIndex: -1 }),
                    t
                  );
                }),
                {
                  querySelector: function(n, e) {
                    var t,
                      r,
                      i,
                      o = Be(e);
                    return (
                      (r = e),
                      (i = o),
                      (t = n).nodeType === Node.ELEMENT_NODE &&
                      (1 === i.length && -1 === i[0].eqIndex
                        ? Pe.call(t, r)
                        : -1 !== Di(B.getRootNode(t), i).indexOf(t))
                        ? n
                        : Ni(n, o, !0)[0] || null
                    );
                  },
                  matches: function(n, e) {
                    var t = Be(e);
                    return 1 === t.length && -1 === t[0].eqIndex
                      ? Pe.call(n, e)
                      : -1 !== Di(n.ownerDocument, t).indexOf(n);
                  },
                  isValidSelector: function(n) {
                    if (!n) return !1;
                    try {
                      for (var e = Be(n), t = 0; t < e.length; t++)
                        Ai(Fe, e[0], !0, e.length, !0);
                      return 0 < e.length;
                    } catch (n) {
                      return !1;
                    }
                  },
                }),
                ((Ie = ke),
                (Me = xe),
                (Re = K),
                (Ae = {
                  domMaskedAttributes: F.domMaskedAttributes,
                  domMaskAttributesByTag: F.domMaskAttributesByTag,
                  domMaskIgnoreAttribute: F.domMaskIgnoreAttribute,
                }),
                (Ne = B.immutableSet.apply(null, Ae.domMaskedAttributes)),
                (De = B.immutableSet.apply(null, Ae.domMaskAttributesByTag)),
                (_e = Ae.domMaskIgnoreAttribute),
                {
                  attribute: function(n, e) {
                    return {
                      accessor: e,
                      elem: n,
                      val: n.getAttribute && n.getAttribute(e),
                      isMasked: xi,
                    };
                  },
                  property: function(n, e) {
                    return {
                      accessor: e,
                      elem: n,
                      val: "" + (n[e] || ""),
                      isMasked: Ii,
                    };
                  },
                  constant: function(n, e) {
                    return { elem: n, val: e, isMasked: Mi };
                  },
                }),
                { clientAttributeMaxLength: F.clientAttributeMaxLength }
              )
            )
          )),
        (_i.prototype.matchPattern = function(n) {
          return this._urlRegexp.test(n);
        }),
        (_i.prototype.getRuleName = function() {
          return this._rule.name;
        }),
        (_i.prototype.getRuleMaxLength = function() {
          return this._rule.maxLength;
        }),
        (_i.prototype.evaluate = function(n, e, t, r, i) {
          if (this.matchPattern(e)) {
            var o = r[this._rule.selector];
            if (
              (o ||
                (t
                  ? this._elementResolver.matches(n, this._rule.selector) &&
                    (o = n)
                  : (o = this._elementResolver.querySelector(
                      n,
                      this._rule.selector
                    ))),
              !o && this._isHierarchical)
            ) {
              var a = i();
              if (B.startsWith(this._rule.selector, a)) {
                var u = this._rule.selector.substring(a.length + 1);
                if (u)
                  try {
                    t
                      ? this._elementResolver.matches(n, u) && (o = n)
                      : (o = this._elementResolver.querySelector(n, u));
                  } catch (n) {}
              }
            }
            if (o)
              return (
                (r[this._rule.selector] = o),
                this._accessors[this._rule.accessorMethod](
                  o,
                  this._rule.accessor
                )
              );
          }
        }),
        void 0 !== Nn &&
          Nn.registerPlugin(
            "gatewayPlugin",
            new (function(n, i) {
              n.on("handleGatewayResponse", function(n) {
                var e;
                try {
                  e = JSON.parse(n);
                } catch (n) {
                  return void logger.error(
                    "Failed parsing JSON of response: " + n.message,
                    n
                  );
                }
                var t = e.appId;
                for (var r in e)
                  e.hasOwnProperty(r) && i[r] && i[r].handle(e[r], t);
              }),
                (this.initialize = function() {});
            })(P, {
              configuration: new (function(t, r, i) {
                var o;
                t.on("init:preloaded", function() {
                  (o =
                    (function() {
                      var n,
                        e = i.get("app.conf");
                      if (e)
                        try {
                          n = r.decode(e);
                        } catch (n) {
                          logger.error(
                            "Failed parsing JSON for configuration: " +
                              n.message,
                            n
                          );
                        }
                      return n;
                    })() || {}).configuration &&
                    t.emit("newRemoteConfig", o.configuration);
                }),
                  (this.handle = function(n, e) {
                    o &&
                      ((o.configuration && o.configuration.hash !== n.hash) ||
                        o.appId !== e) &&
                      (i.set(
                        "app.conf",
                        r.encode({ configuration: n, appId: e })
                      ),
                      (o.configuration = n),
                      (o.appId = e),
                      n && t.emit("newRemoteConfig", n));
                  });
              })(
                P,
                new gr(B.Base64),
                new Nt(window.localStorage, {
                  keysPrefix: _.Storage.UnboundKeyPrefix,
                })
              ),
              aid:
                F.reportPreferSendBeaconAPI && Ct.isSupported()
                  ? { handle: function() {} }
                  : new Oi(P, window.sessionStorage),
              commands: new (function() {
                this.handle = function(n, e) {};
              })(),
            })
          ),
        (Oi.KEY_NAME = _.Storage.BoundKeyPrefix + "aid"),
        (n[i] =
          ((Ue = (je = Nn).asStoppable()),
          (He = P),
          (Ve = F.debugMode),
          (qe = [
            "config",
            "page",
            "plugins",
            "blackoutManager",
            "version",
            "triggerMessage",
            "sessionId",
            "visitorId",
          ]),
          (ze = B.shallowExtend(Ve ? je : {}, {
            triggerCustomEvent: function(e, t, r) {
              try {
                if (!e || "string" != typeof e) return;
                He.emit("customEvent", { name: "" + e, val: "" + t, domEl: r });
              } catch (n) {
                logger.error(
                  "triggerCustomEvent: error while triggering event with name=" +
                    e +
                    " value=" +
                    t +
                    " domElement=" +
                    r,
                  n.stack ? n.stack : n.message
                );
              }
            },
            trigger3rdPartyMap: function(n) {
              He.emit("api:captureObject", n);
            },
            isRecording: function() {
              return !(Ue && Ue.isStopped());
            },
            startRecording: function() {
              Ue && Ue.start();
            },
            stopRecording: function() {
              Ue && Ue.stop();
            },
            invalidateSession: function() {
              He.emit("invalidateSession"), Li(ze);
            },
            flush: function() {
              He.emit("forceFlush"), He.emit("iFramesForceFlush");
            },
          })),
          He.on("init:loaded", Li.bind(null, ze)),
          Li(ze))),
        (n.Zone && n.Zone.root && "function" == typeof n.Zone.root.wrap
          ? n.Zone.root.wrap(Nn.initialize)
          : Nn.initialize
        ).call(Nn)));
})(
  "_detector",
  "undefined" != typeof window ? window : self,
  "undefined" == typeof window,
  "undefined" != typeof document ? document : void 0,
  "6.3.100B144"
);
