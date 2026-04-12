// ==UserScript==
// @name              【PRO版本】B站哔哩哔哩使用增强，全网VIP视频免费破解去广告，知乎使用增强，短视频无水印下载，油管、Facebook等国外视频解析下载等😈
// @name:zh           【PRO版本】B站哔哩哔哩使用增强，全网VIP视频免费破解去广告，知乎使用增强，短视频无水印下载，油管、Facebook等国外视频解析下载等😈
// @name:zh-TW		  【PRO版本】B站嗶哩嗶哩使用增強，全網VIP視頻免費破解去廣告，知乎使用增強，短視頻無水印下載，油管、Facebook等國外視頻解析下載等😈
// @namespace         bilibili_namespace_20230625
// @version           2.3.6
// @description       功能可选择性打开：1、B站使用增强：支持视频下载(👉支持多P批量快速下载👈)、浏览记录提示、一键三连、自动签到、描述文本网址转链接等；2、全网VIP视频解析：爱奇艺、腾讯、优酷、bilibili等视频免费解析(支持自定义解析接口)；3、知乎使用助手：内容种类标识、问答显示优化、视频下载等；4、短视频去水印下载：支持知乎、抖音、快手等；5、油管、Facebook、Tiktok等国外视频解析下载；🔥6、搜索引擎功能增强,百度添加网址显示，google结果新标签页打开灯,导航可自定义网址【脚本长期维护更新，完全免费，无广告，仅限学习交流！！】
// @description:zh    功能可选择性打开：1、B站使用增强：支持视频下载(👉支持多P批量快速下载👈)、浏览记录提示、一键三连、自动签到、描述文本网址转链接等；2、全网VIP视频解析：爱奇艺、腾讯、优酷、bilibili等视频免费解析(支持自定义解析接口)；3、知乎使用助手：内容种类标识、问答显示优化、视频下载等；4、短视频去水印下载：支持知乎、抖音、快手等；5、油管、Facebook、Tiktok等国外视频解析下载；🔥6、搜索引擎功能增强,百度添加网址显示，google结果新标签页打开灯,导航可自定义网址【脚本长期维护更新，完全免费，无广告，仅限学习交流！！】
// @description:zh-TW 功能可選擇性開啟：1、B站使用增強：支援視頻下載(👉支援多P批量快速下載👈)、瀏覽記錄提示、一鍵三連、自動簽到、描述文本網址轉連結等；2、全網VIP視頻解析：愛奇藝、騰訊、優酷、bilibili等視頻免費解析(支援自定義解析介面)；3、知乎使用助手：內容種類標識、問答顯示優化、視頻下載等；4、短視頻去水印下載：支援知乎、抖音、快手等；5、油管、Facebook、Tiktok等國外視頻解析下載；🔥6、搜索引擎功能增強,百度添加網址顯示，google結果新標籤頁開啟燈,導航可自定義網址【指令碼或直譯式程式長期維護更新，完全免費，無廣告，僅限學習交流！！】
// @author            huahuacat
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
// @include           *://*/*
// @exclude           *://cloud.tencent.com/login*
// @exclude           *://console.cloud.tencent.com/*
// @exclude           *://market.cloud.tencent.com/*
// @exclude           *://www.aliyun.com/smarter-engine/*
// @exclude           *://account.aliyun.com/*
// @exclude           *://developer.aliyun.com/*
// @exclude           *://promotion.aliyun.com/*
// @exclude           *://free.aliyun.com/*
// @exclude           *://summit.aliyun.com/*
// @exclude           *://startup.aliyun.com/*
// @exclude           *://university.aliyun.com/*
// @exclude           *://careers.aliyun.com/*
// @exclude           *://market.aliyun.com/*
// @exclude           *://yunqi.aliyun.com/*
// @exclude           *://help.aliyun.com/*
// @exclude           *://g.alicdn.com/*
// @exclude           *://passport.aliyun.com/*
// @exclude           *://*.console.aliyun.com/*
// @exclude           *://auth.huaweicloud.com/*
// @exclude           *://support.huaweicloud.com/*
// @exclude           *://console.huaweicloud.com/*
// @exclude           *://jianghu.taobao.com/*
// @exclude           *://login.taobao.com/*
// @exclude           *://uland.taobao.com/*
// @exclude           *://map.taobao.com/*
// @exclude           *://creator.guanghe.taobao.com/*
// @exclude           *://myseller.taobao.com/*
// @exclude           *://qn.taobao.com/*
// @exclude           *://jingfen.jd.com/*
// @exclude           *://passport.jd.com/*
// @exclude           *://jmw.jd.com/*
// @exclude           *://passport.shop.jd.com/*
// @exclude           *://passport.vip.com/*
// @exclude           *://huodong.taobao.com/wow/z/guang/gg_publish/*
// @exclude           *://loginmyseller.taobao.com/*
// @include           *://www.tiktok.com/@*
// @include           *://www.youtube.com/watch**
// @include           *://www.youtube.com/shorts**
// @exclude           *://accounts.youtube.com/*
// @exclude           *://www.youtube.com/live_chat_replay*
// @exclude           *://www.youtube.com/persist_identity*
// @exclude           *://passport.suning.com/*
// @connect           bilibili.com
// @connect           staticj.top
// @connect           tikdownloader.io
// @connect           mimixiaoke.com
// @connect           shuqiandiqiu.com
// @connect           jtmate.com
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_addStyle
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @grant             GM_addElement
// @grant             GM_setClipboard
// @grant             GM_download
// @grant             GM_deleteValue
// @license           AGPL License
// @charset		      UTF-8
// @noframes
// @run-at            document-idle
// @downloadURL       https://api.staticj.top/script/update/huahuacat_pro_union.user.js
// @updateURL         https://api.staticj.top/script/update/huahuacat_pro_union.meta.js
// ==/UserScript==

/**
 * findAndReplaceDOMText v 0.4.6
 * @author James Padolsey http://james.padolsey.com
 * @license http://unlicense.org/UNLICENSE
 *
 * Matches the text of a DOM node against a regular expression
 * and replaces each match (or node-separated portions of the match)
 * in the specified element.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    // Node/CommonJS
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals
    root.findAndReplaceDOMText = factory();
  }
})(this, function factory() {
  var PORTION_MODE_RETAIN = "retain";
  var PORTION_MODE_FIRST = "first";

  var doc = document;
  var hasOwn = {}.hasOwnProperty;

  function escapeRegExp(s) {
    return String(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
  }

  function exposed() {
    // Try deprecated arg signature first:
    return (
      deprecated.apply(null, arguments) ||
      findAndReplaceDOMText.apply(null, arguments)
    );
  }

  function deprecated(regex, node, replacement, captureGroup, elFilter) {
    if (node && !node.nodeType && arguments.length <= 2) {
      return false;
    }
    var isReplacementFunction = typeof replacement == "function";

    if (isReplacementFunction) {
      replacement = (function (original) {
        return function (portion, match) {
          return original(portion.text, match.startIndex);
        };
      })(replacement);
    }

    // Awkward support for deprecated argument signature (<0.4.0)
    var instance = findAndReplaceDOMText(node, {
      find: regex,

      wrap: isReplacementFunction ? null : replacement,
      replace: isReplacementFunction
        ? replacement
        : "$" + (captureGroup || "&"),

      prepMatch: function (m, mi) {
        // Support captureGroup (a deprecated feature)

        if (!m[0])
          throw "findAndReplaceDOMText cannot handle zero-length matches";

        if (captureGroup > 0) {
          var cg = m[captureGroup];
          m.index += m[0].indexOf(cg);
          m[0] = cg;
        }

        m.endIndex = m.index + m[0].length;
        m.startIndex = m.index;
        m.index = mi;

        return m;
      },
      filterElements: elFilter,
    });

    exposed.revert = function () {
      return instance.revert();
    };

    return true;
  }

  /**
   * findAndReplaceDOMText
   *
   * Locates matches and replaces with replacementNode
   *
   * @param {Node} node Element or Text node to search within
   * @param {RegExp} options.find The regular expression to match
   * @param {String|Element} [options.wrap] A NodeName, or a Node to clone
   * @param {String} [options.wrapClass] A classname to append to the wrapping element
   * @param {String|Function} [options.replace=''] What to replace each match with
   * @param {Function} [options.filterElements] A Function to be called to check whether to
   *	process an element. (returning true = process element,
   *	returning false = avoid element)
   */
  function findAndReplaceDOMText(node, options) {
    return new Finder(node, options);
  }

  exposed.NON_PROSE_ELEMENTS = {
    br: 1,
    hr: 1,
    // Media / Source elements:
    script: 1,
    style: 1,
    img: 1,
    video: 1,
    audio: 1,
    canvas: 1,
    svg: 1,
    map: 1,
    object: 1,
    // Input elements
    input: 1,
    textarea: 1,
    select: 1,
    option: 1,
    optgroup: 1,
    button: 1,
  };

  exposed.NON_CONTIGUOUS_PROSE_ELEMENTS = {
    // Elements that will not contain prose or block elements where we don't
    // want prose to be matches across element borders:

    // Block Elements
    address: 1,
    article: 1,
    aside: 1,
    blockquote: 1,
    dd: 1,
    div: 1,
    dl: 1,
    fieldset: 1,
    figcaption: 1,
    figure: 1,
    footer: 1,
    form: 1,
    h1: 1,
    h2: 1,
    h3: 1,
    h4: 1,
    h5: 1,
    h6: 1,
    header: 1,
    hgroup: 1,
    hr: 1,
    main: 1,
    nav: 1,
    noscript: 1,
    ol: 1,
    output: 1,
    p: 1,
    pre: 1,
    section: 1,
    ul: 1,
    // Other misc. elements that are not part of continuous inline prose:
    br: 1,
    li: 1,
    summary: 1,
    dt: 1,
    details: 1,
    rp: 1,
    rt: 1,
    rtc: 1,
    // Media / Source elements:
    script: 1,
    style: 1,
    img: 1,
    video: 1,
    audio: 1,
    canvas: 1,
    svg: 1,
    map: 1,
    object: 1,
    // Input elements
    input: 1,
    textarea: 1,
    select: 1,
    option: 1,
    optgroup: 1,
    button: 1,
    // Table related elements:
    table: 1,
    tbody: 1,
    thead: 1,
    th: 1,
    tr: 1,
    td: 1,
    caption: 1,
    col: 1,
    tfoot: 1,
    colgroup: 1,
  };

  exposed.NON_INLINE_PROSE = function (el) {
    return hasOwn.call(
      exposed.NON_CONTIGUOUS_PROSE_ELEMENTS,
      el.nodeName.toLowerCase()
    );
  };

  // Presets accessed via `options.preset` when calling findAndReplaceDOMText():
  exposed.PRESETS = {
    prose: {
      forceContext: exposed.NON_INLINE_PROSE,
      filterElements: function (el) {
        return !hasOwn.call(
          exposed.NON_PROSE_ELEMENTS,
          el.nodeName.toLowerCase()
        );
      },
    },
  };

  exposed.Finder = Finder;

  /**
   * Finder -- encapsulates logic to find and replace.
   */
  function Finder(node, options) {
    var preset = options.preset && exposed.PRESETS[options.preset];

    options.portionMode = options.portionMode || PORTION_MODE_RETAIN;

    if (preset) {
      for (var i in preset) {
        if (hasOwn.call(preset, i) && !hasOwn.call(options, i)) {
          options[i] = preset[i];
        }
      }
    }

    this.node = node;
    this.options = options;

    // Enable match-preparation method to be passed as option:
    this.prepMatch = options.prepMatch || this.prepMatch;

    this.reverts = [];

    this.matches = this.search();

    if (this.matches.length) {
      this.processMatches();
    }
  }

  Finder.prototype = {
    /**
     * Searches for all matches that comply with the instance's 'match' option
     */
    search: function () {
      var match;
      var matchIndex = 0;
      var offset = 0;
      var regex = this.options.find;
      var textAggregation = this.getAggregateText();
      var matches = [];
      var self = this;

      regex =
        typeof regex === "string" ? RegExp(escapeRegExp(regex), "g") : regex;

      matchAggregation(textAggregation);

      function matchAggregation(textAggregation) {
        for (var i = 0, l = textAggregation.length; i < l; ++i) {
          var text = textAggregation[i];

          if (typeof text !== "string") {
            // Deal with nested contexts: (recursive)
            matchAggregation(text);
            continue;
          }

          if (regex.global) {
            while ((match = regex.exec(text))) {
              matches.push(self.prepMatch(match, matchIndex++, offset));
            }
          } else {
            if ((match = text.match(regex))) {
              matches.push(self.prepMatch(match, 0, offset));
            }
          }

          offset += text.length;
        }
      }

      return matches;
    },

    /**
     * Prepares a single match with useful meta info:
     */
    prepMatch: function (match, matchIndex, characterOffset) {
      if (!match[0]) {
        throw new Error(
          "findAndReplaceDOMText cannot handle zero-length matches"
        );
      }

      match.endIndex = characterOffset + match.index + match[0].length;
      match.startIndex = characterOffset + match.index;
      match.index = matchIndex;

      return match;
    },

    /**
     * Gets aggregate text within subject node
     */
    getAggregateText: function () {
      var elementFilter = this.options.filterElements;
      var forceContext = this.options.forceContext;

      return getText(this.node);

      /**
       * Gets aggregate text of a node without resorting
       * to broken innerText/textContent
       */
      function getText(node) {
        if (node == null) {
          return [];
        }
        if (node.nodeType === Node.TEXT_NODE) {
          return [node.data];
        }

        if (elementFilter && !elementFilter(node)) {
          return [];
        }

        var txt = [""];
        var i = 0;

        if ((node = node.firstChild))
          do {
            if (node.nodeType === Node.TEXT_NODE) {
              txt[i] += node.data;
              continue;
            }

            var innerText = getText(node);

            if (
              forceContext &&
              node.nodeType === Node.ELEMENT_NODE &&
              (forceContext === true || forceContext(node))
            ) {
              txt[++i] = innerText;
              txt[++i] = "";
            } else {
              if (typeof innerText[0] === "string") {
                // Bridge nested text-node data so that they're
                // not considered their own contexts:
                // I.e. ['some', ['thing']] -> ['something']
                txt[i] += innerText.shift();
              }
              if (innerText.length) {
                txt[++i] = innerText;
                txt[++i] = "";
              }
            }
          } while ((node = node.nextSibling));

        return txt;
      }
    },

    /**
     * Steps through the target node, looking for matches, and
     * calling replaceFn when a match is found.
     */
    processMatches: function () {
      var matches = this.matches;
      var node = this.node;
      var elementFilter = this.options.filterElements;

      var startPortion,
        endPortion,
        innerPortions = [],
        curNode = node,
        match = matches.shift(),
        atIndex = 0, // i.e. nodeAtIndex
        matchIndex = 0,
        portionIndex = 0,
        doAvoidNode,
        nodeStack = [node];

      out: while (true) {
        if (curNode.nodeType === Node.TEXT_NODE) {
          if (!endPortion && curNode.length + atIndex >= match.endIndex) {
            // We've found the ending
            // (Note that, in the case of a single portion, it'll be an
            // endPortion, not a startPortion.)
            endPortion = {
              node: curNode,
              index: portionIndex++,
              text: curNode.data.substring(
                match.startIndex - atIndex,
                match.endIndex - atIndex
              ),

              // If it's the first match (atIndex==0) we should just return 0
              indexInMatch: atIndex === 0 ? 0 : atIndex - match.startIndex,

              indexInNode: match.startIndex - atIndex,
              endIndexInNode: match.endIndex - atIndex,
              isEnd: true,
            };
          } else if (startPortion) {
            // Intersecting node
            innerPortions.push({
              node: curNode,
              index: portionIndex++,
              text: curNode.data,
              indexInMatch: atIndex - match.startIndex,
              indexInNode: 0, // always zero for inner-portions
            });
          }

          if (!startPortion && curNode.length + atIndex > match.startIndex) {
            // We've found the match start
            startPortion = {
              node: curNode,
              index: portionIndex++,
              indexInMatch: 0,
              indexInNode: match.startIndex - atIndex,
              endIndexInNode: match.endIndex - atIndex,
              text: curNode.data.substring(
                match.startIndex - atIndex,
                match.endIndex - atIndex
              ),
            };
          }

          atIndex += curNode.data.length;
        }

        doAvoidNode =
          curNode.nodeType === Node.ELEMENT_NODE &&
          elementFilter &&
          !elementFilter(curNode);

        if (startPortion && endPortion) {
          curNode = this.replaceMatch(
            match,
            startPortion,
            innerPortions,
            endPortion
          );

          // processMatches has to return the node that replaced the endNode
          // and then we step back so we can continue from the end of the
          // match:

          atIndex -= endPortion.node.data.length - endPortion.endIndexInNode;

          startPortion = null;
          endPortion = null;
          innerPortions = [];
          match = matches.shift();
          portionIndex = 0;
          matchIndex++;

          if (!match) {
            break; // no more matches
          }
        } else if (
          !doAvoidNode &&
          (curNode.firstChild || curNode.nextSibling)
        ) {
          // Move down or forward:
          if (curNode.firstChild) {
            nodeStack.push(curNode);
            curNode = curNode.firstChild;
          } else {
            curNode = curNode.nextSibling;
          }
          continue;
        }

        // Move forward or up:
        while (true) {
          if (curNode.nextSibling) {
            curNode = curNode.nextSibling;
            break;
          }
          curNode = nodeStack.pop();
          if (curNode === node) {
            break out;
          }
        }
      }
    },

    /**
     * Reverts ... TODO
     */
    revert: function () {
      // Reversion occurs backwards so as to avoid nodes subsequently
      // replaced during the matching phase (a forward process):
      for (var l = this.reverts.length; l--; ) {
        this.reverts[l]();
      }
      this.reverts = [];
    },

    prepareReplacementString: function (string, portion, match) {
      var portionMode = this.options.portionMode;
      if (portionMode === PORTION_MODE_FIRST && portion.indexInMatch > 0) {
        return "";
      }
      string = string.replace(/\$(\d+|&|`|')/g, function ($0, t) {
        var replacement;
        switch (t) {
          case "&":
            replacement = match[0];
            break;
          case "`":
            replacement = match.input.substring(0, match.startIndex);
            break;
          case "'":
            replacement = match.input.substring(match.endIndex);
            break;
          default:
            replacement = match[+t] || "";
        }
        return replacement;
      });

      if (portionMode === PORTION_MODE_FIRST) {
        return string;
      }

      if (portion.isEnd) {
        return string.substring(portion.indexInMatch);
      }

      return string.substring(
        portion.indexInMatch,
        portion.indexInMatch + portion.text.length
      );
    },

    getPortionReplacementNode: function (portion, match) {
      var replacement = this.options.replace || "";
      var wrapper = this.options.wrap;
      var wrapperClass = this.options.wrapClass;

      if (wrapper && wrapper.nodeType) {
        // Wrapper has been provided as a stencil-node for us to clone:
        var clone = doc.createElement("div");
        clone.innerHTML =
          wrapper.outerHTML || new XMLSerializer().serializeToString(wrapper);
        wrapper = clone.firstChild;
      }

      if (typeof replacement == "function") {
        replacement = replacement(portion, match);
        if (replacement && replacement.nodeType) {
          return replacement;
        }
        return doc.createTextNode(String(replacement));
      }

      var el =
        typeof wrapper == "string" ? doc.createElement(wrapper) : wrapper;

      if (el && wrapperClass) {
        el.className = wrapperClass;
      }

      replacement = doc.createTextNode(
        this.prepareReplacementString(replacement, portion, match)
      );

      if (!replacement.data) {
        return replacement;
      }

      if (!el) {
        return replacement;
      }

      el.appendChild(replacement);

      return el;
    },

    replaceMatch: function (match, startPortion, innerPortions, endPortion) {
      var matchStartNode = startPortion.node;
      var matchEndNode = endPortion.node;

      var precedingTextNode;
      var followingTextNode;

      if (matchStartNode === matchEndNode) {
        var node = matchStartNode;

        if (startPortion.indexInNode > 0) {
          // Add `before` text node (before the match)
          precedingTextNode = doc.createTextNode(
            node.data.substring(0, startPortion.indexInNode)
          );
          node.parentNode.insertBefore(precedingTextNode, node);
        }

        // Create the replacement node:
        var newNode = this.getPortionReplacementNode(endPortion, match);

        node.parentNode.insertBefore(newNode, node);

        if (endPortion.endIndexInNode < node.length) {
          // ?????
          // Add `after` text node (after the match)
          followingTextNode = doc.createTextNode(
            node.data.substring(endPortion.endIndexInNode)
          );
          node.parentNode.insertBefore(followingTextNode, node);
        }

        node.parentNode.removeChild(node);

        this.reverts.push(function () {
          if (precedingTextNode === newNode.previousSibling) {
            precedingTextNode.parentNode.removeChild(precedingTextNode);
          }
          if (followingTextNode === newNode.nextSibling) {
            followingTextNode.parentNode.removeChild(followingTextNode);
          }
          newNode.parentNode.replaceChild(node, newNode);
        });

        return newNode;
      } else {
        // Replace matchStartNode -> [innerMatchNodes...] -> matchEndNode (in that order)

        precedingTextNode = doc.createTextNode(
          matchStartNode.data.substring(0, startPortion.indexInNode)
        );

        followingTextNode = doc.createTextNode(
          matchEndNode.data.substring(endPortion.endIndexInNode)
        );

        var firstNode = this.getPortionReplacementNode(startPortion, match);

        var innerNodes = [];

        for (var i = 0, l = innerPortions.length; i < l; ++i) {
          var portion = innerPortions[i];
          var innerNode = this.getPortionReplacementNode(portion, match);
          portion.node.parentNode.replaceChild(innerNode, portion.node);
          this.reverts.push(
            (function (portion, innerNode) {
              return function () {
                innerNode.parentNode.replaceChild(portion.node, innerNode);
              };
            })(portion, innerNode)
          );
          innerNodes.push(innerNode);
        }

        var lastNode = this.getPortionReplacementNode(endPortion, match);

        matchStartNode.parentNode.insertBefore(
          precedingTextNode,
          matchStartNode
        );
        matchStartNode.parentNode.insertBefore(firstNode, matchStartNode);
        matchStartNode.parentNode.removeChild(matchStartNode);

        matchEndNode.parentNode.insertBefore(lastNode, matchEndNode);
        matchEndNode.parentNode.insertBefore(followingTextNode, matchEndNode);
        matchEndNode.parentNode.removeChild(matchEndNode);

        this.reverts.push(function () {
          precedingTextNode.parentNode.removeChild(precedingTextNode);
          firstNode.parentNode.replaceChild(matchStartNode, firstNode);
          followingTextNode.parentNode.removeChild(followingTextNode);
          lastNode.parentNode.replaceChild(matchEndNode, lastNode);
        });

        return lastNode;
      }
    },
  };

  return exposed;
});

(function () {
	'use strict';
	/**
 * 脚本遵循AGPL License开源协议；在协议允许的范围类，可以自由修改
 * 开完万岁！！
 */
	//共有方法，全局共享
function CommonFunction(){
	this.GMgetValue = function (name, value=null) {
		let storageValue = value;
		if (typeof GM_getValue === "function") {
			storageValue = GM_getValue(name, value);
		} else if(typeof GM.setValue === "function"){
			storageValue = GM.getValue(name, value);
		}else{
			var arr = window.localStorage.getItem(name);
			if(arr != null){
				storageValue = arr
			}
		}
		return storageValue;
	};
	this.GMsetValue = function(name, value){
		if (typeof GM_setValue === "function") {
			GM_setValue(name, value);
		} else if(typeof GM.setValue === "function"){
			GM.setValue(name, value);
		}else{
			window.localStorage.setItem(name, value)
		}
	};
	this.GMaddStyle = function(css){
		var myStyle = document.createElement('style');
		myStyle.textContent = css;
		var doc = document.head || document.documentElement;
		doc.appendChild(myStyle);
	};
	this.GMopenInTab = function(url, options={"active":true, "insert":true, "setParent":true}){
		if (typeof GM_openInTab === "function") {
			GM_openInTab(url, options);
		} else {
			GM.openInTab(url, options);
		}
	};
	this.addScript = function(url){
		var s = document.createElement('script');
		s.setAttribute('src',url);
		document.body.appendChild(s);
	};
	this.randomNumber = function(){
		return Math.ceil(Math.random()*100000000);
	};
	this.request=function(method, url, param, headers={"Content-Type": "application/json;charset=UTF-8"}){
		return new Promise(function(resolve, reject){
			GM_xmlhttpRequest({
				url: url,
				method: method,
				data:param,
				headers:headers,
				onload: function(response) {
					var status = response.status;
					var playurl = "";
					if(status==200||status=='200'){
						var responseText = response.responseText;
						resolve({"result":"success", "data":responseText});
					}else{
						reject({"result":"error", "data":null});
					}
				}
			});
		})
	};
	this.crossRequest=function(method, url, param){
		if(!method){
			method = "get";
		}
		if(!url){
			return new Promise(function(resolve, reject){
				reject({"result":"error", "data":null});
			});
		}
		if(!param){
			param = {};
		}
		method = method.toUpperCase();
	    let config = {
	        method: method
	    };
	    if (method === 'POST') {
	        config.headers['Content-Type'] = 'application/json';
	        config.body = JSON.stringify(param);
	    }
		return new Promise(function(resolve, reject){
			fetch(url, config).then(response => response.text()).then(text => {
				resolve({"result":"success", "data":text});
			}).catch(error => {
				reject({"result":"error", "data":null});
			});
		});
	};
	this.addCommonHtmlCss = function(){
		var cssText = 
			`
			@keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-webkit-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-moz-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-o-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-ms-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-webkit-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-moz-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-o-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-ms-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			.web-toast-kkli9{
				position: fixed;
				background: rgba(0, 0, 0, 0.7);
				color: #fff;
				font-size: 14px;
				line-height: 1;
				padding:10px;
				border-radius: 3px;
				left: 50%;
				transform: translateX(-50%);
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-o-transform: translateX(-50%);
				-ms-transform: translateX(-50%);
				z-index: 2147483648;
				white-space: nowrap;
			}
			.fadeOut{
				animation: fadeOut .5s;
			}
			.fadeIn{
				animation:fadeIn .5s;
			}
			`;
		this.GMaddStyle(cssText);
	};
	this.webToast = function(params) {	//小提示框
		var time = params.time;
		var background = params.background;
		var color = params.color;
		var position = params.position;  //center-top, center-bottom
		var defaultMarginValue = 50;
		
		if(time == undefined || time == ''){
			time = 1500;
		}
		
		var el = document.createElement("div");
		el.setAttribute("class", "web-toast-kkli9");
		el.innerHTML = params.message;
		//背景颜色
		if(background!=undefined && background!=''){
			el.style.backgroundColor=background;
		}
		//字体颜色
		if(color!=undefined && color!=''){
			el.style.color=color;
		}
		
		//显示位置
		if(position==undefined || position==''){
			position = "center-bottom";
		}
		
		//设置显示位置，当前有种两种形式
		if(position==="center-bottom"){
			el.style.bottom = defaultMarginValue+"px"; 
		}else{
			el.style.top = defaultMarginValue+"px"; 
		}
		el.style.zIndex=999999;
		
		document.body.appendChild(el);
		el.classList.add("fadeIn");
		setTimeout(function () {
			el.classList.remove("fadeIn");
			el.classList.add("fadeOut");
			/*监听动画结束，移除提示信息元素*/
			el.addEventListener("animationend", function () {
				document.body.removeChild(el);
			});
			el.addEventListener("webkitAnimationEnd", function () {
				document.body.removeChild(el);
			});
		}, time);
	};
	this.filterStr = function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		return encodeURIComponent(str)
	};
	this.getParamterQueryUrl = function(text, tag) { //查询GET请求url中的参数
		if(text.indexOf("?")!=-1){ //选取?后面的字符串,兼容window.location.search，前面的?不能去掉
			var textArray = text.split("?");
			text = "?"+textArray[textArray.length-1];
		}
		var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
		var a = text.substr(1).match(t);
		if (a != null){
			return a[2];
		}
		return "";
	};
	this.getEndHtmlIdByUrl = function(url) { //获得以html结束的ID
		if(url.indexOf("?")!=-1){
			url = url.split("?")[0]
		}
		if(url.indexOf("#")!=-1){
			url = url.split("#")[0]
		}
		var splitText = url.split("/");
		var idText = splitText[splitText.length-1];
		idText = idText.replace(".html","");
		return idText;
	};
	this.suningParameter=function(url){
		const regex = /product\.suning\.com\/(\d+\/\d+)\.html/;
		const match = url.match(regex);
		if(match){
			return match[1].replace(/\//g, '-');
		}
		return null;
	};
	this.getEcommercePlatform=function(host = window.location.host){
		let platform = "";
		if(host.indexOf(".taobao.")!=-1 || host.indexOf(".liangxinyao.")!=-1){
			platform = "taobao";
		}else if(host.indexOf(".tmall.")!=-1){
			platform = "tmall";
		}else if(host.indexOf(".jd.")!=-1 || host.indexOf(".yiyaojd.")!=-1 || host.indexOf(".jkcsjd.")!=-1 || host.indexOf(".jingdonghealth.")!=-1){
			platform = "jd";
		}else if(host.indexOf(".vip.")!=-1 || host.indexOf(".vipglobal.")!=-1){
			platform = "vpinhui";
		}else if(host.indexOf(".suning.")!=-1){
			platform = "suning";
		}
		return platform;
	}
	this.isPC = function(){
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	};
	this.getBilibiliBV=function(){
		var pathname = window.location.pathname;
		var bv = pathname.replace("/video/","").replace("/","");
		return bv;
	};
	this.getSystemOS=function(){
		var u = navigator.userAgent;
		if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
			return 'windows';
		} else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
			return 'macOS';
		} else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
			return 'ios';
		} else if (!!u.match(/android/i)) {
			return 'android';
		} else {
			return 'other';
		}
	};
	this.RPCDownloadFile = function(fileName, url, savePath="D:/", RPCURL="ws://localhost:16800/jsonrpc", RPCToken="") {		
		const self = this;
		if(!savePath){
			savePath = "D:/";
		}
		if(!RPCURL){
			RPCURL = "ws://localhost:16800/jsonrpc";
		}
		let options = { //下载配置文件
			"dir":savePath,
			"max-connection-per-server": "16",
			"header":["User-Agent:"+navigator.userAgent+"", "Cookie:"+document.cookie+"", "Referer:"+window.location.href+""]
		}
		if(!!fileName) {
			options.out = fileName;
		}
		let jsonRPC = {
			"jsonrpc": "2.0",
			"id": "huahuacat",
			"method": "aria2.addUri",
			"params": [[url], options],
		}
		if (!!RPCToken) {
			jsonRPC.params.unshift("token:" + RPCToken); // 必须要加在第一个
		}
		return new Promise(function(resolve, reject) {
			var webSocket = new WebSocket(RPCURL);
			webSocket.onerror = function(event) {
				console.log("webSocket.onerror", event);
				reject("Aria2连接错误，请打开Aria2和检查RPC设置！");
			}
			webSocket.onopen = function(){
				webSocket.send(JSON.stringify(jsonRPC));
			}
			webSocket.onmessage = function(event){
				let result = JSON.parse(event.data);
				switch (result.method) {
					case "aria2.onDownloadStart":
						resolve("Aria2 开始下载【"+fileName+"】");
						webSocket.close();
						break;
					case "aria2.onDownloadComplete":
						break;
					default:
						break;
				}
			}
		});
	};
	this.getElementObject = function(selector, target=document.body, allowEmpty = true, delay=10, maxDelay=10 * 1000){
		return new Promise((resolve,reject) =>{
			if (selector.toUpperCase() === "BODY") {
				resolve(document.body);
				return;
			}
			if (selector.toUpperCase() === "HTML") {
				resolve(document.html);
				return;
			}
			let totalDelay = 0;
			
			let element = target.querySelector(selector);
			let result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
			if(result){
				resolve(element);
			}
			
			const elementInterval = setInterval(()=>{
				if(totalDelay >= maxDelay){
					clearInterval(elementInterval);
					resolve(null);
				}
				element = target.querySelector(selector);
				result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
				if(result){
					clearInterval(elementInterval);
					resolve(element);
				}else{
					totalDelay += delay;
				}
			}, delay);
		});
	};
	/**
	 * @param {Object} time
	 * @param {Object} format
	 * 时间格式化
	 * DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss")
	 */
	this.DateFormat = function(time, format) {
		var o = {
			"M+": time.getMonth() + 1, //月份 
			"d+": time.getDate(), //日 
			"h+": time.getHours(), //小时 
			"m+": time.getMinutes(), //分 
			"s+": time.getSeconds(), //秒 
			"q+": Math.floor((time.getMonth() + 3) / 3), //季度 
			"S": time.getMilliseconds() //毫秒 
		};
		if(/(y+)/.test(format)){
			format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for(var k in o){
			if(new RegExp("(" + k + ")").test(format)){
				format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return format;
	};
	this.decryptStr=function(str){
		let result = atob(str);
		return result.split('').reverse().join('');
	};
	this.encryptStr=function(str){
		let result = str.split('').reverse().join('');
		return btoa(result);
	};
}
//全局弹窗对象
const dialog = (function(){
	class Dialog {
		constructor() {
			this.mask = document.createElement('div');
			this.dialogStyle = document.createElement('style');
			
			this.setStyle(this.mask, {
				"width": '100%',
				"height": '100%',
				"backgroundColor": 'rgba(0, 0, 0, .6)',
				"position": 'fixed',
				"left": "0px",
				"top": "0px",
				"bottom":"0px",
				"right":"0px",
				"z-index":"2147483647"
			});
			
			this.content = document.createElement('div');
			this.setStyle(this.content, {
				"max-width": '450px',
				"width":"100%",
				"max-height": '600px',
				"backgroundColor": '#fff',
				"boxShadow": '0 0 2px #999',
				"position": 'absolute',
				"left": '50%',
				"top": '50%',
				"transform": 'translate(-50%,-50%)',
				"borderRadius": '5px'
			})
			this.mask.appendChild(this.content);
		}
		middleBox(param) {
			// 先清空中间小div的内容 - 防止调用多次，出现混乱
			this.content.innerHTML = '';
			
			let title = '默认标题内容';
			if({}.toString.call(param) === '[object String]') {
				title = param;
			} else if({}.toString.call(param) === '[object Object]') {
				title = param.title;
			}

			document.body.appendChild(this.mask);
			this.title = document.createElement('div');
			this.setStyle(this.title, {
				"width": '100%',
				"height": '40px',
				"lineHeight": '40px',
				"boxSizing": 'border-box',
				"background-color":"#dedede",
				"color": '#000',
				"text-align": 'center',
				"font-weight":"700",
				"font-size":"17px",
				"border-radius": "4px 4px 0px 0px"
			});
			
			this.title.innerText = title;
			this.content.appendChild(this.title);

			this.closeBtn = document.createElement('div');
			this.closeBtn.innerText = '×';
			
			this.setStyle(this.closeBtn, {
				"textDecoration": 'none',
				"color": '#000',
				"position": 'absolute',
				"right": '10px',
				"top": '0px',
				"fontSize": '25px',
				"display":"inline-block",
				"cursor":"pointer"
			})
			this.title.appendChild(this.closeBtn);
			
			const self = this;
			this.closeBtn.onclick = function(){
				self.close();
				if(param.onClose && (typeof param.onClose)==="function"){
					param.onClose();
				}
			}
		}
		showMake(param) {
			//添加公用样式表
			if(param.hasOwnProperty("styleSheet")){
				this.dialogStyle.textContent = param.styleSheet;
			}
			document.querySelector("head").appendChild(this.dialogStyle);
			
			this.middleBox(param);
			this.dialogContent = document.createElement('div');
			this.setStyle(this.dialogContent,{
				"padding":"15px",
				"max-height":"400px"
			});
			this.dialogContent.innerHTML = param.content;
			this.content.appendChild(this.dialogContent);
			param.onContentReady(this);
		}
		close() {
			document.body.removeChild(this.mask);
			document.querySelector("head").removeChild(this.dialogStyle);
		}
		setStyle(ele, styleObj) {
			for(let attr in styleObj){
				ele.style[attr] = styleObj[attr];
			}
		}
	}
	let dialog = null;
	return (function() {
		if(!dialog) {
			dialog = new Dialog()
		}
		return dialog;
	})()
})();
	
//全局统一方法对象
const commonFunctionObject = new CommonFunction(); 
commonFunctionObject.addCommonHtmlCss();	//统一html、css元素添加
let functionController = null;
	//相关功能关闭控制
functionController = commonFunctionObject.GMgetValue("setingData");
if(!functionController){
	functionController={
		"bilibiliHelper":true,"superVideoHelper":true,
		"abroadVideoHelper":true,
		"searchEnginesNavigation":true,"zhihuHelper":true,
		"shortVideoDownload":true
	}
}	
//用户功能设置函数
function usersSeting(){
	var bilibiliHelper=true, superVideoHelper=true, abroadVideoHelper=true, 
	searchEnginesNavigation=true, zhihuHelper=true, shortVideoDownload=true;
	var isUpdateStorage = false;
	if(!functionController.hasOwnProperty("bilibiliHelper")){
		functionController.bilibiliHelper = true;
		isUpdateStorage = true;
	}else{
		bilibiliHelper = functionController.bilibiliHelper;
	}
	if(!functionController.hasOwnProperty("superVideoHelper")){
		functionController.superVideoHelper = true;
		isUpdateStorage = true;
	}else{
		superVideoHelper = functionController.superVideoHelper;
	}
	if(!functionController.hasOwnProperty("abroadVideoHelper")){
		functionController.abroadVideoHelper = true;
		isUpdateStorage = true;
	}else{
		abroadVideoHelper = functionController.abroadVideoHelper;
	}
	if(!functionController.hasOwnProperty("searchEnginesNavigation")){
		functionController.searchEnginesNavigation = true;
		isUpdateStorage = true;
	}else{
		searchEnginesNavigation = functionController.searchEnginesNavigation;
	}
	if(!functionController.hasOwnProperty("zhihuHelper")){
		functionController.zhihuHelper = true;
		isUpdateStorage = true;
	}else{
		zhihuHelper = functionController.zhihuHelper;
	}
	if(!functionController.hasOwnProperty("shortVideoDownload")){
		functionController.shortVideoDownload = true;
		isUpdateStorage = true;
	}else{
		shortVideoDownload = functionController.shortVideoDownload;
	}
	if(isUpdateStorage){
		commonFunctionObject.GMsetValue("setingData",functionController);
	}
	var setingData=[
		{"tag":"bilibiliHelper", "name":"B站使用加强(视频下载支持批量、浏览记录、一键三连)", "checked":bilibiliHelper},
		{"tag":"zhihuHelper", "name":"知乎使用加强(内容标识、问答显示优化、视频下载等)", "checked":zhihuHelper},
		{"tag":"superVideoHelper", "name":"全网VIP视频解析(支持爱奇艺、腾讯视频、B站番剧等)", "checked":superVideoHelper},
		{"tag":"searchEnginesNavigation", "name":"搜索引擎使用加强(适配百度、360、搜狗、必应、Google等)", "checked":searchEnginesNavigation},
		{"tag":"shortVideoDownload", "name":"短视频去水印下载(支持抖音、快手等)", "checked":shortVideoDownload},
		{"tag":"abroadVideoHelper", "name":"国外视频解析下载(支持油管、Facebook等)", "checked":abroadVideoHelper}
	]
	var content = "";
	for(var i=0; i<setingData.length;i++){
		var one = setingData[i];
		content += `
			<div style="padding: 5px 0px;">
				<input style="display:inline-block;width: 15px;height: 15px;display: inline-block;vertical-align: middle; -webkit-appearance:checkbox;margin-bottom: 3px;cursor: pointer;" name="Checkbox" type="checkbox" data-tag="`+one.tag+`" `+(one.checked ? "checked" : "")+`>
				<label style="display:inline-block;font-size: 14px;margin:3px 0;vertical-align: middle;font-weight:500;color:#000;">`+one.name+`</label>
			</div>
		`
	}
	dialog.showMake({
		"title":"功能开关",
		"content":content,
		"onClose":function(){
			location.reload();
		},
		"onContentReady":function($that){
			$that.dialogContent.querySelectorAll("input[type='checkbox']").forEach(function(checkbox){
				checkbox.addEventListener("click", function(e){
					var tag = e.target.getAttribute("data-tag");
					var checked = e.target.checked;
					functionController[tag] = checked;
					commonFunctionObject.GMsetValue("setingData",functionController);
					commonFunctionObject.webToast({"message":"操作成功", "background":"#FF4D40"});
				});
			})
		}
	});
}

// 菜单按钮弹框
if(commonFunctionObject.isPC()){
	GM_registerMenuCommand("功能开关",()=>usersSeting());
}else{
	functionController.bilibiliHelper = false;
	functionController.abroadVideoHelper = false;
	functionController.searchEnginesNavigation = false;
	functionController.zhihuHelper = false;
}
	
	//VIP视频解析接口可自定义；请严格按照格式添加
//showType=1(仅PC), showType=2(仅mobile), showType=3(同时显示)
const originalInterfaceList = [

];

function SuperVideoHelper(originalInterfaceList) {
  this.originalInterfaceList = originalInterfaceList;
  this.elementId = Math.ceil(Math.random() * 100000000) + "mmx";
  this.customInterfaceKey = "custom_interface_key_dddsdxxa";
  this.quicklyInterfaceKey = "custom_quickly_interface_key_dddsdxxa";
  this.defaultQuicklyInterfaceIndex = 1;
  this.detectVideoPlatform = function(url=window.location.href) {
    const { host, pathname } = new URL(url);
    const rules = [
        {
            name: 'youku',
            hosts: [/youku\.com$/],
            paths: [
                /^\/v_/,
                /^\/video\/id_/,
                /^\/alipay_video\//
            ]
        },
        {
            name: 'iqiyi',
            hosts: [/iqiyi\.com$/],
            paths: [
                /^\/v_/,
                /^\/w_/,
                /^\/a_/,
                /^\/resource\/pcw\/play\//
            ]
        },
        {
            name: 'qq',
            hosts: [/qq\.com$/],
            paths: [
                /^\/x\/cover\//,
                /^\/x\/page\//,
                /^\/tv\//
            ]
        },
        {
            name: 'mgtv',
            hosts: [/mgtv\.com$/],
            paths: [/^\/b\//]
        },
        {
            name: 'sohu',
            hosts: [/sohu\.com$/],
            paths: [
                /^\/v\//,
                /^\/album\//
            ]
        },
        {
            name: 'le',
            hosts: [/le\.com$/],
            paths: [/^\/ptv\/vplay\//]
        },
        {
            name: 'pptv',
            hosts: [/pptv\.com$/],
            paths: [/^\/show\//]
        },
        {
            name: 'tudou',
            hosts: [/tudou\.com$/],
            paths: [
                /^\/listplay\//,
                /^\/albumplay\//,
                /^\/programs\/view\//
            ]
        },
        {
            name: 'baofeng',
            hosts: [/baofeng\.com$/],
            paths: [/^\/play\//]
        },
        {
            name: 'wasu',
            hosts: [/wasu\.cn$/],
            paths: [/^\/Play\/show\//]
        },
        {
            name: '1905',
            hosts: [/1905\.com$/],
            paths: [
                /^\/video\//,
                /^\/play\//,
                /^\/.*\/play\//
            ]
        },
        {
            name: 'miguvideo',
            hosts: [/miguvideo\.com$/],
            paths: [/^\/mgs\//]
        },
        {
            name: 'acfun',
            hosts: [/acfun\.cn$/],
            paths: [/^\/v\//]
        },
        {
            name: 'bilibili',
            hosts: [/bilibili\.com$/],
            paths: [
              /^\/bangumi\/play\//
            ]
        }
    ];

    for (const rule of rules) {
        if (rule.hosts.some(h => h.test(host)) &&
            rule.paths.some(p => p.test(pathname))) {
            return rule.name;
        }
    }
    return null;
  };
  this.isRun = function() { //判断是否运行
    return !!this.detectVideoPlatform();
  };
  this.showPlayerWindow = function(playObject) { //显示播放窗口
    const url = playObject.url + window.location.href;
    commonFunctionObject.GMopenInTab(url);
  };
  this.analysisCustomInterface = function() { //自定义接口解析
    const customInterface = commonFunctionObject.GMgetValue(this.customInterfaceKey, "");
    if (customInterface) {
      try {
        const customizeInterfaceList = [];
        const analysisArray = customInterface.split("\n");
        for (let i = 0; i < analysisArray.length; i++) {
          const onePiece = analysisArray[i];
          if (onePiece && onePiece.includes(",")) {
            const onePieceArray = onePiece.split(",");
            if (onePieceArray.length === 2 && onePieceArray[0] && /(http|https):\/\/\S*/.test(onePieceArray[1])) {
              customizeInterfaceList.push({
                "name": "" + onePieceArray[0] + "",
                "url": "" + onePieceArray[1] + "",
                "showType": 1
              });
            }
          }
        }
        this.originalInterfaceList = customizeInterfaceList.concat(this.originalInterfaceList);
      } catch (e) {}
    }
  };
  this.getQuicklyInterfaceIndex = function() {
    const quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey, "") + "";
    let quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
    if (quicklyInterfaceIndexString) {
      quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
    }
    if (this.originalInterfaceList.length - 1 < quicklyInterfaceIndex) {
      quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
    }
    return quicklyInterfaceIndex;
  };
  this.addHtmlElements = function() { //添加HTML
    const vipVideoImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9klEQVRoQ+2ZPWgVQRDH/7/CWqOIYOFHFbRSjJhGMGDpByoIago70cqvUtQgdipWFqawMWghGIidhcHKQAJqEURBRfED1CCCjc3IPu4em31775J7d3m8cAtX3O7szP7nPzszx6EeH/T4+VUD6DaDTQbMbE+3D7MY+8Ckkw8BPFuMki7KDtUAuuh9Z3oZMtBljxY2X9eBwq4raWPNQEmOLKxm+TBgZqsknQ1dAVzNco+ZhWsm6ZakHZLC1mQyrZ5OX2RvzMxnSa8lzQJ/YwLzGDCze5JOeoI/gbVtAMxJ6vPW7wKnkr4qbEuaxccDcGWBsfNV0mjMmSGAg5LGA6XbgFehITPbLel5MN84ZAUAUjMPgWO+zZY7YGbvJW0OvRoB8EjSEW9+BhhIvOvCp0wGfPPbgZfpRAzATUnn56GEmJyLd39cBNxeF99FADTa42BskuQef4wDh9oB2CXpRbDpMPA4nTOz05LuBDLrgW+dAACGIkxfkHTDm/8DrMwEkBxgOskkqdwEcMAD4GLf3YF0PACOe+uFGMgA4Bj4EAAbAGbcXLQOmNklSdeCTRuBT2bWL+lNsLYfeFIRgH2SJgJ7GwCXYjMBrJb0K9jUiHEzG5F02VubA9b4skXvQMiAmW2VdFSSn24/As0kk1mJzeyppL3ewaaBnWY2K2mLNz8S5ueCAMLwz3q/DZxreweSe3BC0v1Ai7tkYXrsB96WwMBCAfQBv3MBJCD+SVrhaXaZ54z3PgUMhpYrZKCF7bbNnJk5BhwT6fghyW8thoGxigE4my6tXwemQlt5AGI1oamDSIFLmCuURiW5BOGPL8C7drGV206b2XdJ6yJKxoDhmPKCIeS61ZZClncxFgLAtcyxrnEwRmknDFQFIFYTWnJ/CVmoGgYSj7Z81OR86Lg7sOgPmnY6s0IpN4TyYrDb6zWAmoEOPVCHUIcO7Hh7/YemYxcWU7AMf3BkNGDF/FP9rkwGqjddkoWWv5Ql6V1yNXUdWHKXBwZ7noH/dP+HQNqheToAAAAASUVORK5CYII=";
	const quicklyBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAv1JREFUWEfFl02IVWUYx39/EDdKoCiCGYquxNw404QL+wA/wIUfA5luMotk0jGoiDQFv1oMqCCOFkYQtopczKxMGsUUF2bNKsWFKBroJtLI2qjwl+dy7uV47jnnnntnygcOF97nfd7/777nfZ7nPeIZm8Zb3/ZsYBEwE5gFzAGmAX8lz9/AA0l7QnvcAGwvBd4E1gOTK/yxvQExZgDbbwHvAq9UEE1POSzpwzEB2D4KbG1TuD79G0nvdAxg+2egp0PxCBuS1NsRgG2PQbgeelbS0rYBbJ8DXisAuAdcB2Ykp7+M8ztJGyoD2H4J+AxYU7DqoKQP6j7b24AjJQQDknaUAtieDvQmz/KSxUYkNfltx07FjuVZv6RjhQC21wIHgHkV3vc2SZERTWb7d+CFHFevpKFcANvvA19UEK5PWSnphwKAS8DLGd8/wIuSbjcB2I4SubsN8Zj6iaSDBQB/AlMzvq8lvRdjTwEk5XSkTfHadEl5fyYOYRzGrC2TdOYpANvdwC+diKditgNXkxRcBSzLWe+CpFfr4w1q21eABZmAx8DFkrzvhHejpG/zAPqSbhaCtUfSv7YHgE87UcqJOSapPz1eqRDZ/h54Y4wQlyVls6H6fcD2r0BXpxB5h7QpC1otbjtq/ZRW8zL+nyS9XhTTqhR3SRpNB9u+k1y3qnAMS4qKWmhFlXAlsC/Z8lvAifodLlayPQysrkDQI6k0tfOKx0TgGjA3I7BO0sn6mO1DwEclED9KWtEKMg/gOLA5J/CupOczryN2aUlBneiTFGuVWrYUR6pFyhVZd86ZeARMyATcABZL+qMygO043eeBhQVBo5KiXDfM9iQgOlvWaq22lXj406X4c2BnQdDNaCqSTmUA4h2fzsRskfRlFfEGgO35QPTt53ICv0rEH2Z9tvcDu1LjtY+NquJpgLh8xCUkbb8B+9MnPwcgfUFttNhOANILxbfbIHBI0v2yxWx/DGwC3pYUpbptq52B5BYUPTryP2638fu/WKVu+F+SPAG7l/wh4NsJOQAAAABJRU5ErkJggg==";
	const currentHost = window.location.host;

    const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
    let currentQuicklyInterfaceObject = null;

    let category_1_html = "";
    this.originalInterfaceList.forEach((item, index) => {
      if (item.showType !== 2) {
        let selected = "";
        if (index === quicklyInterfaceIndex) {
          selected = "selected";
          currentQuicklyInterfaceObject = item;
        }
        category_1_html += `<span title="${item.name}" data-index="${index}" class="${selected}">${item.name}</span>`;
      }
    });

    let left = 0;
    let top = 120;
    const position = commonFunctionObject.GMgetValue("Position_" + currentHost);
    if (position) {
      left = position.left;
      top = position.top;
    }
    let color = "#FF4D40";
    let hoverColor = "#000000";
    if (currentHost.includes("bilibili.com")) {
      color = "#fb7299";
      hoverColor = "#00B0E1";
    }

    const cssMould = `#vip_movie_box${this.elementId}{cursor:pointer; position:fixed; top:${top}px; left:${left}px; width:0px; z-index:99999999; font-size:16px; text-align:left;}
        #vip_movie_box${this.elementId} .img_box${this.elementId}{width:24px; height:32px;line-height:32px;text-align:center;background-color:${color};}
        #vip_movie_box${this.elementId} .img_box${this.elementId}:hover{
            background: linear-gradient(30deg, #2a66ff 40%, ${color});
        }
        #vip_movie_box${this.elementId} .img_box${this.elementId}>img {width:20px; display:inline-block; vertical-align:middle;}
        #vip_movie_box${this.elementId} .showhide_box${this.elementId}{display:none;padding-left:5px;position: absolute;left: 24px;top: 0;}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii{width:380px; max-height:400px; overflow-y:auto;background-color:rgba(241,241,241);}
        #vip_movie_box${this.elementId} .default-scrollbar-55678::-webkit-scrollbar{width:5px; height:1px;}
        #vip_movie_box${this.elementId} .default-scrollbar-55678::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
        #vip_movie_box${this.elementId} .default-scrollbar-55678::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId}{margin-bottom:10px;}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId}:last-child{margin-bottom:0px;}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId} > .title${this.elementId}{font-size:14px; text-align:left;color:#000000;font-weight:600;margin:5px 3px;}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId} > .interface_box${this.elementId}{}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId} > .interface_box${this.elementId} > span{border-radius:3px;border-top:3px solid ${color}; border-bottom:3px solid ${color};display:inline-block;width:calc(25% - 6px);width:-moz-calc(25% - 6px);width: -webkit-calc(25% - 6px);height:20px;line-height:20px;background-color:${color};color:#FFF;cursor:pointer;margin:3px;text-align:center;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;font-size:12px!important;box-sizing:content-box!important;}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId} > .interface_box${this.elementId} > span:hover{border-top:3px solid ${hoverColor}; border-bottom:3px solid ${hoverColor};}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId} > .interface_box${this.elementId} > span.selected{border-top:3px solid ${hoverColor}; border-bottom:3px solid ${hoverColor};}
        #vip_movie_box${this.elementId} .vip_mod_box_action_687ii > .item_box${this.elementId} > .content${this.elementId}{font-size:12px;color:#000000;margin-left:3px;}
        `;
    commonFunctionObject.GMaddStyle(cssMould);

    const htmlMould = `<div id='vip_movie_box${this.elementId}'>
        <div class='plugin_inner_${this.elementId}'>
            <div class='img_box${this.elementId}' id='img_box_jump_6667897iio'><img src='${vipVideoImageBase64}' title='选择解析线路'/></div>
            <div class='showhide_box${this.elementId}'>
                <div class='vip_mod_box_action_687ii default-scrollbar-55678'>
                    <div class='item_box${this.elementId}'>
                        <div class='title${this.elementId}'><b>接口添加</b></div>
                        <div class='content${this.elementId}'>
                            对现有接口不满意？可添加自定义接口哟~<span id='img_set_6667897iio' style='display:inline-block;border-radius:2px;margin-left:5px;padding:3px 5px;background-color:#CCC;cursor:pointer;'>添加接口</span>
                        </div>
                        <div class='title${this.elementId}'>
                            <a style='font-size:13px;color:blue;' href='javascript:void(0);' target='_blank'>接口请自行添加~</a>
                        </div>
                    </div>
                    <div class='item_box${this.elementId}' style='min-height:80px;border:1px dashed #000;'>
                        <div class='interface_box${this.elementId}'>
                            ${category_1_html}
                        </div>
                    </div>
                    <div class='item_box${this.elementId}' style='padding:10px 0px;'>
                        <div class='title${this.elementId}'><b>免责声明：</b></div>
                        <div class='content${this.elementId}'>
                            1、<b style='color:red;'>需要使用VIP视频解析的，请自行添加接口</b>，版权问题请联系相关解析接口所有者，脚本不承担相关责任！"<br>
                            2、为创造良好的创作氛围，请大家支持正版！<br>
                            3、脚本仅限个人学习交流，使用即已代表您已经充分了解相关问题，否则后果自负，特此声明！<br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='img_box${this.elementId}' id='img_quickly_6667897iio'><img src='`+quicklyBase64+`' title='快速开始(当前所选接口：${currentQuicklyInterfaceObject ? currentQuicklyInterfaceObject.name : '无'})'/></div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', htmlMould);
  };
  this.runEvent = function() { //事件运行
    const that = this;
    const vipMovieBox = document.getElementById(`vip_movie_box${this.elementId}`);
    const pluginInner = vipMovieBox.querySelector(`.plugin_inner_${this.elementId}`);
    const showhideBox = vipMovieBox.querySelector(`.showhide_box${this.elementId}`);
    const interfaceBox = vipMovieBox.querySelector(`.interface_box${this.elementId}`);
    const imgSetBtn = document.getElementById('img_set_6667897iio');
    const imgQuicklyBtn = document.getElementById('img_quickly_6667897iio');
    const quicklyImg = imgQuicklyBtn.querySelector('img');

    pluginInner.addEventListener("mouseover", () => {
      showhideBox.style.display = 'block';
    });
    pluginInner.addEventListener("mouseout", () => {
      showhideBox.style.display = 'none';
    });

    interfaceBox.addEventListener("click", function(event) {
      if (event.target.tagName === 'SPAN') {
        const span = event.target;
        const index = parseInt(span.dataset.index);
        const playObject = that.originalInterfaceList[index];
        that.showPlayerWindow(playObject);

        const allSpans = this.querySelectorAll('span');
        allSpans.forEach(s => s.classList.remove("selected"));
        span.classList.add("selected");
        commonFunctionObject.GMsetValue(that.quicklyInterfaceKey, index);

        quicklyImg.title = `快速开始(当前所选接口：${playObject.name})`;
      }
    });

    imgSetBtn.addEventListener("click", () => {
      that.showSetingDialog();
    });

    imgQuicklyBtn.addEventListener("click", () => {
      const quicklyInterfaceIndex = that.getQuicklyInterfaceIndex();
      const playObject = that.originalInterfaceList[quicklyInterfaceIndex];
      that.showPlayerWindow(playObject);
    });

    //右键移动位置
    vipMovieBox.addEventListener('mousedown', function(e) {
      if (e.which === 3) {
        e.preventDefault();
        vipMovieBox.style.cursor = "move";
        const positionDiv = this.getBoundingClientRect();
        const distenceX = e.pageX - positionDiv.left;
        const distenceY = e.pageY - positionDiv.top;

        const mouseMoveHandler = function(e) {
          let x = e.pageX - distenceX;
          let y = e.pageY - distenceY;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          if (x < 0) {
            x = 0;
          } else if (x > windowWidth - vipMovieBox.offsetWidth - 100) {
            x = windowWidth - vipMovieBox.offsetWidth - 100;
          }

          if (y < 0) {
            y = 0;
          } else if (y > windowHeight - vipMovieBox.offsetHeight) {
            y = windowHeight - vipMovieBox.offsetHeight;
          }

          vipMovieBox.style.left = `${x}px`;
          vipMovieBox.style.top = `${y}px`;
          commonFunctionObject.GMsetValue("Position_" + window.location.host, {
            "left": x,
            "top": y
          });
        };

        const mouseUpHandler = function() {
          document.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mouseup', mouseUpHandler);
          vipMovieBox.style.cursor = "pointer";
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
        document.addEventListener('contextmenu', e => e.preventDefault());
      }
    });
  };
  this.removeVideoAdBlock_iqiyi = function() {

  };
  this.removeVideoAdBlock_vqq = function() {

  };
  this.removeVideoAdBlock_youku = function() {

  };
  this.removeVideoAdBlock_mgtv = function() {

  };
  this.removeVideoAdBlock_sohu = function() {

  };
  this.removeVideoAdBlock = function() {
    const currentHost = window.location.host;
    if (currentHost.includes("www.iqiyi.com")) {
      this.removeVideoAdBlock_iqiyi();
    } else if (currentHost.includes("v.qq.com")) {
      this.removeVideoAdBlock_vqq();
    } else if (currentHost.includes("v.youku.com")) {
      this.removeVideoAdBlock_youku();
    } else if (currentHost.includes("www.mgtv.com")) {
      this.removeVideoAdBlock_mgtv();
    } else if (currentHost.includes("tv.sohu.com")) {
      this.removeVideoAdBlock_sohu();
    }
  };
  this.showSetingDialog = function() {
    const that = this;
    const customInterfaceKey = that.customInterfaceKey;
    const customInterface = commonFunctionObject.GMgetValue(customInterfaceKey, "");

    const content = `
      <div>
        <div style="font-size:14px;font-weight:700;color:#000;">自定义解析接口</div>
        <div style="font-size:13px;color:red;">
          数据格式：[名字] + [,] + [接口地址]<br>
          例如：就是名字而已,https://xxxxxx?url=<br>
          注：一行一个
        </div>
        <div style="margin-top:5px;height:200px;width:100%;">
          <textarea
            placeholder="请严格按照格式填写，否则不生效"
            class="custom-interface-textarea"
            style="color:#000;font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">${customInterface}</textarea>
        </div>
        <div style="text-align:center;margin-top:15px;">
          <button class="save-custom-interface-btn" style="color:#000;cursor:pointer;">保存自定义接口</button>
        </div>
      </div>
    `;

    dialog.showMake({
      "title": "解析接口添加",
      "content": content,
      "onContentReady": function($that) {
        const saveCustomInterfaceBtn = $that.dialogContent.querySelector(".save-custom-interface-btn");
        saveCustomInterfaceBtn.addEventListener("click", function() {
          const customInterfaceTextarea = $that.dialogContent.querySelector(".custom-interface-textarea");
          const content = customInterfaceTextarea.value;
          commonFunctionObject.GMsetValue(customInterfaceKey, content);
          commonFunctionObject.webToast({
            "message": "自定义接口保存成功",
            "background": "#FF4D40"
          });
        });
      }
    });
  };
  this.start = function() {
    let delayTimeMs = 0;
    if (window.location.host.includes("www.bilibili.com")) {
      delayTimeMs = 2200;
    }
    setTimeout(() => {
      try {
        this.removeVideoAdBlock();
      } catch (e) {}
      try {
        this.analysisCustomInterface();
        this.addHtmlElements();
        this.runEvent();
      } catch (e) {}
    }, delayTimeMs);
  };
}

/**
 * 移动端VIP解析
 * @param {Object} originalInterfaceList
 */
function SuperVideoHelperMobile(originalInterfaceList) {
  this.originalInterfaceList = originalInterfaceList;
  this.elementId = Math.ceil(Math.random() * 100000000) + "mmx";
  this.quicklyInterfaceKey = "custom_mobile_quickly_interface_key_dddsdxxa";
  this.defaultQuicklyInterfaceIndex = 2;
  this.playerNodes = [{
    "url": "m.iqiyi.com",
    "showNode": ".m-video-player-wrap",
    "color": "#05B03B"
  }, {
    "url": "m.v.qq.com",
    "showNode": ".mod_player",
    "color": "#F99D39"
  }, {
    "url": "m.youku.com",
    "showNode": ".h5-detail-player",
    "color": "#08BAFD"
  }, {
    "url": "m.mgtv.com",
    "showNode": ".video-area",
    "color": "#E95904"
  }];
  this.isRun = function() { //判断是否运行
    const host = window.location.host;
    const urls = ["m.iqiyi.com", "m.v.qq.com", "m.youku.com", "m.mgtv.com", "m.bilibili.com"];
    let result = false;
    if (host.startsWith("m.")) { //是移动端执行
      for (let i = 0; i < urls.length; i++) {
        if (host.includes(urls[i])) {
          result = true;
          break;
        }
      }
    }
    return result;
  };
  this.getwindowElement = function() {
    let nodeObject = null;
    for (let i in this.playerNodes) { //获得窗口ID
      if (this.playerNodes[i].url === window.location.host) {
        nodeObject = this.playerNodes[i];
        break;
      }
    }
    return nodeObject;
  };
  this.getQuicklyInterfaceIndex = function() {
    const quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey, "") + "";
    let quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
    if (quicklyInterfaceIndexString) {
      quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
    }
    if (this.originalInterfaceList.length - 1 < quicklyInterfaceIndex) {
      quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
    }
    return quicklyInterfaceIndex;
  };
  this.addHtmlElements = function() {
    const nodeObject = this.getwindowElement();
    const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
    if (!nodeObject) return;
    return new Promise((resolve, reject) => {
      const elementInterval = setInterval(() => {
        const nodeElementObject = document.querySelector(nodeObject.showNode);
        const themeColor = nodeObject.color;

        if (!nodeElementObject) return;
        clearInterval(elementInterval);

        let category_1_html = "";
        this.originalInterfaceList.forEach((item, index) => {
          if (item.showType !== 1) {
            const selected = index === quicklyInterfaceIndex ? "selected" : "";
            category_1_html += `<option value='${item.url}' index='${index}' ${selected}>${item.name}</option>`;
          }
        });

        const htmlMould = `
          <div style="margin:15px 15px 50px 15px;padding:10px;background-color:${themeColor};border-radius:4px;cursor:pointer;z-index: 999999999999999999999;color:#FFF;">
            <div style="font-weight:700;font-size:14px;text-align:center;">
              <span>选择解析接口</span>
              <select id="interface_selection_${this.elementId}" style="background-color:#FFF;padding: 0px 10px;">
                ${category_1_html}
              </select>
            </div>
            <div style="text-align:center;">
              <a href="javascript:void(0);" id="start_analysis_outer_${this.elementId}" style="box-sizing:border-box;margin:10px 0px;display:inline-block;padding:10px 0px;width:100%;border-radius:4px;color:#FFF;background-color:#F2503F;font-size:14px;">站外解析</a>
            </div>
            <div style="text-align:left;font-size:10px;">
              <div>
                免责申明：1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！
                2、为创造良好的创作氛围，请大家支持正版！
                3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！
                4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！
              </div>
            </div>
          </div>
        `;
        nodeElementObject.insertAdjacentHTML('afterend', htmlMould);
        resolve("ok");
      }, 100);
    });
  };
  this.getPlayObjectBySelect = function() {
    const selectElement = document.getElementById(`interface_selection_${this.elementId}`);
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const indexString = selectedOption.getAttribute("index");
    const index = indexString ? parseInt(indexString) : 0;
    return this.originalInterfaceList[index];
  };
  this.runEvent = function() { //事件运行
    const self = this;
    const startAnalysisBtn = document.getElementById(`start_analysis_outer_${self.elementId}`);
    const interfaceSelection = document.getElementById(`interface_selection_${self.elementId}`);

    const playObject = self.getPlayObjectBySelect();
    startAnalysisBtn.href = playObject.url + window.location.href;

    startAnalysisBtn.addEventListener('click', function(e) {
      if (commonFunctionObject.GMgetValue("copyright_video_remind_mobile_outer", null) === "true") {
        return;
      }
      const r = confirm(
        "脚本运行提醒！！！\u000d" +
        "使用站外解析功能，视频解析时脚本跳出本页面，如不同意此脚本行为，请点击【取消】按钮！！"
      );
      if (r === false) {
        e.preventDefault();
      } else {
        commonFunctionObject.GMsetValue("copyright_video_remind_mobile_outer", "true");
      }
    });

    interfaceSelection.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      const value = selectedOption.value;
      const index = parseInt(selectedOption.getAttribute("index"));
      startAnalysisBtn.href = value + window.location.href;
      commonFunctionObject.GMsetValue(self.quicklyInterfaceKey, index);
    });
  };
  this.start = function() {
    const self = this;
    if (this.isRun()) {
      this.addHtmlElements().then(() => {
        self.runEvent();
      });
    }
  };
}

try {
  let newOriginalInterfaceList = originalInterfaceList;
  if (!functionController || functionController.superVideoHelper) {
    const superVideoHelperObject = new SuperVideoHelper(newOriginalInterfaceList);
    if (superVideoHelperObject.isRun()) {
      if (commonFunctionObject.GMgetValue("copyright_video_remind", null) === "true") {
        superVideoHelperObject.start();
      } else {
        const r = confirm(
          "脚本运行提醒！！！\u000d" +
          "1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！\u000d" +
          "2、为创造良好的创作氛围，请大家支持正版！\u000d" +
          "3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！\u000d" +
          "4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！\u000d" +
          "5、此提醒只弹出一次，确认后，后续将不在弹出，请知悉！"
        );
        if (r === true) {
          commonFunctionObject.GMsetValue("copyright_video_remind", "true");
          superVideoHelperObject.start();
        }
      }
    }
    (new SuperVideoHelperMobile(newOriginalInterfaceList)).start();
  }
} catch (e) {
  console.log("全网VIP解析：error：" + e);
}
	/**
 * B站相关功能：视频多P下载，一键三联，浏览记录等
 */
function BilibiliHelper() {
  this.isRun = function() {
    return window.location.host.indexOf("bilibili.com") !== -1;
  };
  this.baseFunction = function() {
    /**
     * B站基本功能，一件三连、视频解析、视频下载
     */
    function baseFunctionObject() {
      this.elementId = Math.ceil(Math.random() * 100000000) + "mmx";
      this.downloadSettingKey = "download_setting_key";
      this.downloadResutError = function(btnElement) {
        btnElement.textContent = "下载视频";
        btnElement.removeAttribute("disabled");
      };
      this.downloadResutSuccess = function(btnElement) {
        btnElement.textContent = "下载视频";
        btnElement.removeAttribute("disabled");
      };
      this.getDownloadPages = function() {
        return new Promise(function(resolve, reject) {
          const pathname = window.location.pathname;
          let bv = null;
          if (pathname.indexOf("/medialist/play/watchlater/") !== -1) {
            bv = pathname.replace("/medialist/play/watchlater/", "").replace("/", "");
          } else {
            bv = pathname.replace("/video/", "").replace("/", "");
          }
          if (!bv) {
            resolve({
              "status": "bv_null"
            });
            return;
          }
          commonFunctionObject.request("get", "https://api.bilibili.com/x/web-interface/view?bvid=" + bv, null).then((resultData) => {
            const dataJson = JSON.parse(resultData.data);
            if (!dataJson || dataJson.code !== 0 || !dataJson.data) {
              resolve({
                "status": "request_error"
              });
              return;
            }
            const data = dataJson.data;
            if (!data) {
              resolve({
                "status": "aid_null"
              });
              return;
            }
            const aid = data.aid;
            const pic = data.pic;
            const title = data.title;
            if (!aid) {
              resolve({
                "status": "aid_null"
              });
              return;
            }
            commonFunctionObject.request("get", "https://api.bilibili.com/x/web-interface/view?aid=" + aid, null).then((resultData2) => {
              const dataJson2 = JSON.parse(resultData2.data);
              if (!dataJson2 || dataJson2.code !== 0 || !dataJson2.data) {
                resolve({
                  "status": "request_error"
                });
                return;
              }
              const downloadData = dataJson2.data;
              const {
                aid,
                bvid
              } = downloadData;
              const items = [];
              if (downloadData.hasOwnProperty("ugc_season") && downloadData.ugc_season.hasOwnProperty("sections")) {
                const sections = downloadData.ugc_season.sections;
                let page = 1;
                for (let i = 0; i < sections.length; i++) {
                  const section = sections[i];
                  if (section.hasOwnProperty("episodes")) {
                    for (let j = 0; j < section.episodes.length; j++) {
                      const episode = section.episodes[j];
                      items.push({
                        "cover": "",
                        "page": page,
                        "title": episode.title,
                        "cid": episode.cid,
                        "aid": episode.aid
                      });
                      page++;
                    }
                  }
                }
              } else {
                for (let i = 0; i < downloadData.pages.length; i++) {
                  const pageData = downloadData.pages[i];
                  items.push({
                    "cover": pageData.first_frame,
                    "page": pageData.page,
                    "title": pageData.part,
                    "cid": pageData.cid,
                    "aid": aid
                  });
                }
              }
              resolve({
                "status": "success",
                "downloadData": {
                  "items": items,
                  "pic": pic,
                  "title": title
                }
              });
            }).catch((errorData) => {
              resolve({
                "status": "request_error"
              });
            });
          }).catch((errorData) => {
            resolve({
              "status": "request_error"
            });
          });
        });
      };
      this.startDownloadFile = function(options) {
        let aid = options.aid,
          cid = options.cid,
          fileName = options.fileName,
          savePath = options.savePath,
          RPCURL = options.RPCURL,
          RPCToken = options.RPCToken;
        let isByPRC = options.isByPRC;

        commonFunctionObject.request("get", "https://api.bilibili.com/x/player/playurl?avid=" + aid + "&cid=" + cid + "&qn=112", null).then((resultData3) => {
          if (!fileName) {
            fileName = (new Date()).getTime() + "";
          }
          fileName = fileName.replace(/[\ |\~|\`|\=|\||\\|\;|\:|\"|\'|\,|\.|\>|\/]/g, "");
          fileName = fileName.substring(0, 50);
          fileName = fileName + ".mp4";

          const dataJson3 = JSON.parse(resultData3.data);
          if (!!dataJson3 && dataJson3.code === 0 && !!dataJson3.data) {
            const downloadUrl = dataJson3.data.durl[0].url;
            if (isByPRC) {
              commonFunctionObject.RPCDownloadFile(fileName, downloadUrl, savePath, RPCURL).then((data) => {
                commonFunctionObject.webToast({
                  "message": data,
                  "time": 3000
                });
              }).catch((data) => {
                commonFunctionObject.webToast({
                  "message": data,
                  "time": 3000
                });
              });
            } else {
              window.open(downloadUrl);
            }
          } else {
            commonFunctionObject.webToast({
              "message": "获取下载链接失败",
              "background": "#FF4D40"
            });
          }
        }).catch((errorData) => {
          commonFunctionObject.webToast({
            "message": "获取下载链接失败",
            "background": "#FF4D40"
          });
        });
      };
      this.createModals = function() {
        const css = `
          .modal-mask-${this.elementId}{
            position:fixed;
            top:0;
            left:0;
            z-index:999;
            width:100%;
            height:100%;
            display:none;
            background-color:#000;
            opacity:0.3;
            overflow:hidden;
          }
          .modal-body-${this.elementId}{
            position:fixed;
            border-radius:5px;
            background-color: #FFFFFF;
            top:10%;
            width:600px;
            max-width:90%;
            max-height:80%;
            z-index:1000;
            left: 50%;
            transform: translateX(-50%);
            display:none;
            padding: 10px;
            overflow-y: auto;
          }
          .modal-body-${this.elementId} >.page-header{
            height:30px;
            line-height:30px;
            position:relative;
          }
          .modal-body-${this.elementId} >.page-header >span{
            display:inline-block;
          }
          .modal-body-${this.elementId} >.page-header >span:nth-child(1) {
            font-size:18px;
            font-weight:bold;
            position:absolute;
            left:10px;
          }
          .modal-body-${this.elementId} >.page-header >span:nth-child(2) {
            font-size:28px;
            font-weight:bold;
            position:absolute;
            right:10px;
            cursor:pointer;
          }
          .modal-body-${this.elementId} >.page-container{
            max-height: 500px;
            overflow-y: auto;
          }
          .modal-body-${this.elementId} .page-wrap{
            display: flex;
            flex-wrap: wrap;
            margin-top:5px;
          }
          .modal-body-${this.elementId} .page-wrap >.board-item{
            display: block;
            width: calc(50% - 10px);
            background-color: #6A5F60;
            margin: 5px;
            background-color:#FB7299;
            color:#FFFFFF;
            cursor: pointer;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
          }
          .modal-body-${this.elementId} .page-wrap >.board-item >input{
            width: 14px;
            height: 14px;
            vertical-align: middle;
            margin-right:5px;
          }
          .modal-body-${this.elementId} .page-wrap >.board-item >span{
            vertical-align: middle;
          }
          .modal-body-${this.elementId} .modal-btn-wrap{
            text-align: center;
            margin-top: 10px;
            cursor: pointer;
          }
          .modal-body-${this.elementId} .aria2-setting{
            border:1px dashed #F1F1F1;
            border-radius:4px;
            margin-top:10px;
          }
          .modal-body-${this.elementId} .aria2-setting >.setting-item{
            text-align: center;
            font-size:14px;
            margin:10px 0px;
          }
          .modal-body-${this.elementId} .aria2-setting >.setting-item .topic-name{
            display:inline-block;
            width:80px;
            text-align:left;
          }
          .modal-body-${this.elementId} .aria2-setting >.setting-item> input{
            width:300px;
            padding-left:10px;
            border:1px solid #888;
            outline:none;
            border-radius:3px;
          }
          .modal-body-${this.elementId} .modal-btn-wrap >span{
            border:1px solid #ccc;
            display:inline-block;
            padding:3px 5px;
            margin:0px 5px;
            border-radius:3px;
          }
          .modal-body-${this.elementId} .tip-wrap{
            margin-top: 10px;
            font-size:12px;
          }
          .modal-body-${this.elementId} .tip-wrap >.title{
            font-size:16px;
            font-weight:bold;
          }
          .modal-body-${this.elementId} .tip-wrap >.content >ul >li{
            margin-top:5px;
          }
        `;

        const html = `
          <div class='modal-mask-${this.elementId}'></div>
          <div class='modal-body-${this.elementId}'>
            <div class="page-header">
              <span>视频下载(可批量)</span>
              <span class="close">×</span>
            </div>
            <div class="page-container">
              <label style="color:red;">注：此功能会调用bilibili的API，脚本仅用于个人交流，切勿用于商业用途，否则后果自负，特此申明！</label>
              <div class="page-wrap">
              </div>
              <div class="aria2-setting">
                <div class="setting-item">
                  <span><input type="radio" name="downloadWay" value="Motrix">Motrix下载</span>&nbsp;&nbsp;&nbsp;
                  <span><input type="radio" name="downloadWay" value="AriaNgGUI">AriaNgGUI下载</span>
                </div>
                <div class="setting-item">
                  <label class="topic-name">配置RPC:</label><input type="text" name="RPCURL" value="" placeholder="请准确输入RPC对应软件的地址，默认：Motrix">
                </div>
                <div class="setting-item">
                  <label class="topic-name">配置Token:</label><input type="text" name="RPCToken" value="" placeholder="默认无需填写">
                </div>
                <div class="setting-item">
                  <label class="topic-name">保存路径:</label><input type="text" name="savePath" value="" placeholder="请准确输入文件保存路径">
                  <div style="font-size:12px;color:#888;">最好自定义下载地址，默认地址可能不满足需要</div>
                </div>
              </div>
              <div class="modal-btn-wrap">
                <span name="selectall">全选</span>
                <span name="removeSelect">取消选择</span>
                <span name="downloadAll">批量下载</span>
              </div>
              <div class="tip-wrap">
                <div class="title">关于单P下载：</div>
                <div class="content"><span>点击弹框单个选集，即可下载单集视频！PS:单P下载，推荐大家使用BBDown下载，此工具功能很强大，具体查看：<a target="_blank" href="https://github.com/nilaoda/BBDown">https://github.com/nilaoda/BBDown</a></span></div>
              </div>
              <div class="tip-wrap">
                <div class="title">关于批量下载：</div>
                <div class="content">
                  <ul>
                    <li>
                      <b>1、批量下载需要第三方软件的支持，脚本推荐使用：Motrix</b>
                      <ul>
                        <li>Motrix下载地址：<a href="https://motrix.app/zh-CN/" target="_blank">https://motrix.app/zh-CN/</a></li>
                        <li>AriaNgGUI下载地址：<a href="https://github.com/Xmader/aria-ng-gui" target="_blank">https://github.com/Xmader/aria-ng-gui</a></li>
                      </ul>
                    </li>
                    <li>
                      <b>2、在批量下载前需要提前打开软件，本教程以Motrix为准</b>
                      <ul>
                        <li>(1)、如果全部按照默认配置，只需要打开软件即可</li>
                        <li>(2)、如果想自定义RPC地址和文件保存路径，可更改上面输入框的内容（此数据非常重要，请准确填写）</li>
                        <li>
                        (3)、Motrix运行图片
                        <img src="https://pic.rmb.bdstatic.com/bjh/8912582c0416119405ec37ea27d12376.jpeg" width="100%" />
                        </li>
                      </ui>
                    </li>
                    <li>
                      <b>3、默认RPC默认地址</b>
                      <ul>
                        <li>(1)、Motrix RPC默认地址：ws://localhost:16800/jsonrpc</li>
                        <li>(2)、Aria2 RPC默认地址：ws://localhost:6800/jsonrpc</li>
                        <li>(3)点击“批量下载会自动保存当前下载设置”</li>
                      </ul>
                    </li>
                    <li>
                      <b>4、如使用AriaNgGUI，使用方式类似，大家可以自行研究</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tip-wrap">
                <div class="title">必要说明：</div>
                <div class="content">
                  申明：本功能仅能作为学习交流使用，且不可用于其它用途，否则后果自负。请大家重视版权，尊重创作者，切勿搬运抄袭。请大家多用[一键三连]为创作者投币~，小破站牛掰！
                </div>
              </div>
            </div>
          </div>
        `;
        commonFunctionObject.GMaddStyle(css);
        document.body.insertAdjacentHTML('beforeend', html);
      };
      this.hideModals = function() {
        document.querySelector(`.modal-body-${this.elementId}`).style.display = 'none';
        document.querySelector(`.modal-mask-${this.elementId}`).style.display = 'none';
      };
      this.showModals = function(pageHtml) {
        const self = this;
        const downloadSettingKey = self.downloadSettingKey;

        document.querySelector(`.modal-body-${self.elementId}`).style.display = 'block';
        document.querySelector(`.modal-mask-${self.elementId}`).style.display = 'block';
        document.querySelector(`.modal-body-${self.elementId} .page-wrap`).innerHTML = pageHtml;

        let savePath = "D:/";
        if ("macOS" === commonFunctionObject.getSystemOS()) {
          savePath = "";
        }
        const downloadSetting = commonFunctionObject.GMgetValue(this.downloadSettingKey, {
          "RPCURL": "ws://localhost:16800/jsonrpc",
          "savePath": savePath,
          "RPCToken": '',
          "downloadWay": "Motrix"
        });
        const isMotrix = downloadSetting.downloadWay === "Motrix";

        document.querySelector(`.modal-body-${self.elementId} input[name='RPCURL']`).value = downloadSetting.RPCURL;
        document.querySelector(`.modal-body-${self.elementId} input[name='savePath']`).value = downloadSetting.savePath;
        document.querySelector(`.modal-body-${self.elementId} input[name='RPCToken']`).value = downloadSetting.RPCToken;

        const downloadWayRadios = document.querySelectorAll(`.modal-body-${self.elementId} input[name='downloadWay']`);
        downloadWayRadios.forEach(radio => radio.removeAttribute('checked'));
        if (isMotrix) {
          document.querySelector(`.modal-body-${self.elementId} input[value='Motrix']`).setAttribute('checked', 'true');
        } else {
          document.querySelector(`.modal-body-${self.elementId} input[value='AriaNgGUI']`).setAttribute('checked', 'true');
        }

        const boardItems = document.querySelectorAll(`.modal-body-${self.elementId} .page-wrap >.board-item >span`);
        boardItems.forEach(item => {
          item.removeEventListener("click", self.handleDownloadClick);
          self.handleDownloadClick = function() {
            this.style.backgroundColor = "#ccc";
            const downloadOptions = {
              "aid": this.dataset.aid,
              "cid": this.dataset.cid,
              "isByPRC": false
            };
            self.startDownloadFile(downloadOptions);
          };
          item.addEventListener("click", self.handleDownloadClick);
        });

        document.querySelector(`.modal-body-${self.elementId} .page-header >span.close`).addEventListener("click", () => {
          self.hideModals();
        });

        document.querySelector(`.modal-body-${self.elementId} .modal-btn-wrap >span[name='selectall']`).addEventListener("click", () => {
          document.querySelectorAll(`.modal-body-${self.elementId} .page-wrap input[type='checkbox']`).forEach(checkbox => {
            checkbox.checked = true;
          });
        });

        document.querySelectorAll(`.modal-body-${self.elementId} input[name='downloadWay']`).forEach(radio => {
          radio.removeEventListener("change", self.handleDownloadWayChange);
          self.handleDownloadWayChange = function() {
            if (this.value === "Motrix") {
              document.querySelector(`.modal-body-${self.elementId} input[name='RPCURL']`).value = "ws://localhost:16800/jsonrpc";
            } else {
              document.querySelector(`.modal-body-${self.elementId} input[name='RPCURL']`).value = "ws://localhost:6800/jsonrpc";
            }
          };
          radio.addEventListener("change", self.handleDownloadWayChange);
        });

        document.querySelector(`.modal-body-${self.elementId} .modal-btn-wrap >span[name='removeSelect']`).addEventListener("click", () => {
          document.querySelectorAll(`.modal-body-${self.elementId} .page-wrap input[type='checkbox']`).forEach(checkbox => {
            checkbox.checked = false;
          });
        });

        document.querySelector(`.modal-body-${self.elementId} .modal-btn-wrap >span[name='downloadAll']`).addEventListener("click", () => {
          const RPCURL = document.querySelector(`.modal-body-${self.elementId} input[name='RPCURL']`).value;
          const savePath = document.querySelector(`.modal-body-${self.elementId} input[name='savePath']`).value;
          const RPCToken = document.querySelector(`.modal-body-${self.elementId} input[name='RPCToken']`).value;
          const downloadWay = document.querySelector(`.modal-body-${self.elementId} input[name='downloadWay']:checked`).value;

          commonFunctionObject.GMsetValue(downloadSettingKey, {
            "RPCURL": RPCURL,
            "savePath": savePath,
            "RPCToken": RPCToken,
            "downloadWay": downloadWay
          });

          const inputElements = document.querySelectorAll(`.modal-body-${self.elementId} .page-wrap input[type='checkbox']:checked`);
          if (inputElements.length === 0) {
            commonFunctionObject.webToast({
              "message": "至少需要选中1P",
              "background": "#FF4D40"
            });
            return;
          }

          if (!savePath) {
            commonFunctionObject.webToast({
              "message": "保存路径不能为空",
              "background": "#FF4D40"
            });
            return;
          }
          if (!RPCURL) {
            commonFunctionObject.webToast({
              "message": "PRC地址不能为空",
              "background": "#FF4D40"
            });
            return;
          }

          const downloadOptions = {
            "aid": "",
            "cid": "",
            "isByPRC": true,
            "fileName": "",
            "savePath": savePath,
            "RPCURL": RPCURL,
            "RPCToken": RPCToken
          };

          inputElements.forEach((element, index) => {
            setTimeout(() => {
              const aid = element.dataset.aid;
              const cid = element.dataset.cid;
              const fileName = element.getAttribute("title");
              downloadOptions.aid = aid;
              downloadOptions.cid = cid;
              downloadOptions.fileName = fileName;
              self.startDownloadFile(downloadOptions);
            }, 1000 * index);
          });
        });
      };
      this.createElementHtml = async function() {
        const existingElement = document.getElementById("bilibili_exti_9787fjfh12j");
        if (existingElement) {
          existingElement.remove();
        }

        const randomNumber = this.elementId;
        const self = this;
        const cssText = `
          #bilibili_exti_9787fjfh12j{
            position:fixed;
            left:-30px;
            top:250px;
            opacity:0.6;
            transition: 0.3s;
          }
          #bilibili_exti_9787fjfh12j >.self_s_btn{
            background-color:#FB7299;
            color:#FFF;
            font-size:10px;
            border-radius:3px;
            cursor:pointer;
            margin:10px 0px;
            width:60px;
            height:20px;
            text-align:center;
            line-height:20px;
          }
        `;
        const htmlText = `
          <div id="bilibili_exti_9787fjfh12j">
            <div class="self_s_btn" id="download_s_${randomNumber}">下载视频</div>
            <div class="self_s_btn" id="focus_s_${randomNumber}">一键三连</div>
          </div>
        `;

        commonFunctionObject.GMaddStyle(cssText);
        document.body.insertAdjacentHTML('beforeend', htmlText);

        this.createModals();

        const bilibiliExti = document.getElementById("bilibili_exti_9787fjfh12j");
        bilibiliExti.addEventListener("mouseenter", function() {
          this.style.left = "0px";
          this.style.opacity = 1;
        });
        bilibiliExti.addEventListener("mouseleave", function() {
          this.style.left = (0 - this.offsetWidth) / 2 + "px";
          this.style.opacity = 0.6;
        });

        document.body.addEventListener("click", function(event) {
          if (event.target && event.target.id === `download_s_${randomNumber}`) {
            const btnElement = event.target;
            btnElement.setAttribute("disabled", "disabled");
            btnElement.textContent = "准备中~";
            self.getDownloadPages().then((resule) => {
              if (resule.status === "success") {
                const {
                  items,
                  pic,
                  title
                } = resule.downloadData;
                let itemHtml = "";
                itemHtml += `<div style='width:100%;'><a href='${pic}' target='_blank'>标题：${title}（点我跳转封面）</a></div>`;
                for (let i = 0; i < items.length; i++) {
                  const currentTitle = `【P${items[i].page}】${items[i].title}`;
                  itemHtml += `<div class='board-item'>`;
                  itemHtml += `<input data-aid='${items[i].aid}' data-cid='${items[i].cid}' title='${currentTitle}' type='checkbox'>`;
                  itemHtml += `<span data-aid='${items[i].aid}' data-cid='${items[i].cid}' title='${currentTitle}'>${currentTitle}</span>`;
                  itemHtml += `</div>`;
                }
                self.showModals(itemHtml);
                self.downloadResutSuccess(btnElement);
              } else {
                self.downloadResutError(btnElement);
              }
            }).catch((error) => {
              self.downloadResutError(btnElement);
            });
          }
          if (event.target && event.target.id === `focus_s_${randomNumber}`) {
            document.querySelector("#arc_toolbar_report .video-like")?.click();
            document.querySelector("#arc_toolbar_report .video-coin")?.click();
          }
        });
      };
      this.start = function() {
        const locationHost = window.location.host;
        const locationPathname = window.location.pathname;
        if (locationHost === "www.bilibili.com" && (locationPathname.indexOf("/video") !== -1 || locationPathname.indexOf("/watchlater") !== -1)) {
          this.createElementHtml();
        }
      };
    }
    try {
      (new baseFunctionObject()).start();
    } catch (e) {
      console.log("baseFunctionObject new error", e);
    }
  };
  /**
   * 浏览历史记录提醒
   */
  this.recordViewFunction = function() {
    function recordViewObject() {
      this.localCacheName = "bilibili_video_record";
      this.recordOneVideo = function() {
        return new Promise((resolve, reject) => {
          const bv = commonFunctionObject.getBilibiliBV();
          let cacheText = commonFunctionObject.GMgetValue(this.localCacheName);
          cacheText = cacheText ? cacheText : "";
          const maxLength = 12 * 500;
          const currentLength = cacheText.length;
          if (currentLength > maxLength) {
            cacheText = cacheText.substring(12 * 100, currentLength);
          }

          if (cacheText.indexOf(bv) === -1) {
            cacheText += bv;
            commonFunctionObject.GMsetValue(this.localCacheName, cacheText);
          }
          resolve({
            "result": "success"
          });
        });
      };
      this.searchPageRemindHtml = function(element, top = 8, right = 8) {
        if (!element.querySelector("div[name='marklooked']")) {
          element.style.position = "relative";
          const div = document.createElement("div");
          div.setAttribute("name", "marklooked");
          div.style.cssText = `z-index: 100;position:absolute; top:${top}px; right:${right}px; background-color: rgba(251,123,159,1); border-radius:3px; font-size:10px; color:#FFF;padding:0px 2px;`;
          div.textContent = "已看";
          element.appendChild(div);
        }
      };
      this.searchPageRemind = function() {
        const self = this;
        const elementArray = [
          {"node": ".bili-video-card", "top": 8, "right": 12},
          {"node": "#page-index .small-item", "top": 12, "right": 12},
          {"node": "#submit-video-list .small-item", "top": 12, "right": 12},
          {"node": "#page-series-detail .small-item.fakeDanmu-item", "top": 12, "right": 12},
        ];
        setInterval(function() {
          const cacheText = commonFunctionObject.GMgetValue(self.localCacheName) || "";
          elementArray.forEach(elementObj => {
            document.querySelectorAll(elementObj.node).forEach(element => {
              if (element.getAttribute("dealxll") !== "true") {
                const videoLink = element.querySelector("a[href^='//www.bilibili.com/video']");
                if (videoLink) {
                  const videourl = videoLink.getAttribute("href");
                  const bvs = videourl.match(/(\/BV(.*?)\/)/g);
                  if (bvs && bvs.length === 1) {
                    const bv = bvs[0].replace(/\//g, "");
                    if (cacheText.indexOf(bv) !== -1) {
                      self.searchPageRemindHtml(element, elementObj.top, elementObj.right);
                    }
                    element.addEventListener("click", () => {
                      self.searchPageRemindHtml(element, elementObj.top, elementObj.right);
                    });
                  }
                  element.setAttribute("dealxll", "true");
                }
              }
            });
          });
        }, 500);
      };
      this.start = function() {
        const self = this;
        if (window.location.pathname.indexOf("/video") !== -1 && window.location.host === "www.bilibili.com") {
          let currentHref = "";
          setInterval(() => {
            if (window.location.href !== currentHref) {
              this.recordOneVideo();
              currentHref = window.location.href;
            }
          }, 500);
        }
        if (window.location.host.indexOf("bilibili.com") !== -1) {
          this.searchPageRemind();
          GM_registerMenuCommand("清空B站浏览记录", function() {
            if (confirm('是否要清空B站浏览记录？清空后将不可恢复...')) {
              commonFunctionObject.GMsetValue(self.localCacheName, "");
            }
          });
        }
      };
    }
    try {
      (new recordViewObject()).start();
    } catch (e) {
      console.log("recordViewObject new error", e);
    }
  };
  /**
   * 视频描述文本转链接
   */
  this.textToLinkFunction = function() {
    function textToLinkObject() {
      this.link = function(selector) {
        const textToLinkArea = document.querySelector(selector);
        if (!textToLinkArea) {
          return;
        }
        findAndReplaceDOMText(textToLinkArea, {
          find: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g,
          replace: function(e, t) {
            const text = e.text;
            let element = null;
            if (text.indexOf("bilibili.com") === -1 && /^(http|ftp|https)/i.test(text)) {
              element = document.createElement("a");
              element.setAttribute("href", text);
              element.setAttribute("target", "_blank");
              element.style.color = "#00AEEC";
            } else {
              element = document.createElement("span");
            }
            element.innerText = text;
            return element;
          },
          preset: "prose"
        });
      };
      this.start = function() {
        const selector = "#v_desc";
        this.link(selector);

        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        const bodyMutationObserver = new MutationObserver(() => {
          this.link(selector);
        });

        const element = document.querySelector(selector);
        if (element) {
          bodyMutationObserver.observe(element, {
            "characterData": true,
            "attributes": true,
            "childList": true
          });
        }
      };
    }
    try {
      (new textToLinkObject()).start();
    } catch (e) {
      console.log("textToLinkObject new error", e);
    }
  };
  this.signIn = async function() {};
  this.start = function() {
    if (this.isRun()) {
      this.baseFunction();
      this.recordViewFunction();
      this.textToLinkFunction();
      this.signIn();
    }
  };
}

try {
  if (!functionController || functionController.bilibiliHelper) {
    new BilibiliHelper().start();
  }
} catch (e) {
  console.log("B站视频下载：error：" + e);
}
	/**
 * 知乎助手开始
 */
function ZhihuHelper() {
  this.markArticleOrQuestion = function() {
    const questionsCss = `
			.AnswerItem .ContentItem-title a::before {
				content: '问题';
				color: #f68b83;
				background-color: #f68b8333;
				font-weight: bold;
				font-size: 13px;
				padding: 1px 4px 0px;
				border-radius: 2px;
				display: inline-block;
				vertical-align: middle;
				margin: 0px 4px 0px 0px;
			}
			.ArticleItem .ContentItem-title a::before {
				content: '文章';
				color: #0066FF;
				background-color: #E5EFFF;
				font-weight: bold;
				font-size: 13px;
				padding: 1px 4px 0;
				border-radius: 2px;
				display: inline-block;
				vertical-align: middle;
				margin: 0px 4px 0px 0px;
			}
			.ZvideoItem .ContentItem-title a::before {
				content:'视频';
				color: #00BCD4;
				background-color: #00BCD433;
				font-weight: bold;
				font-size: 13px;
				padding: 1px 4px 0;
				border-radius: 2px;
				display: inline-block;
				vertical-align: middle;
				margin: 0px 4px 0px 0px;
			}
			.TopstoryItem--advertCard{
				text-decoration:line-through;
			}
		`;
    commonFunctionObject.GMaddStyle(questionsCss);
  };
  this.autoJumpTarget = function() {
    const regexResult = location.search.match(/target=(.+?)(&|$)/);
    if (regexResult && regexResult.length === 3) {
      location.href = decodeURIComponent(regexResult[1]);
    }
  };
  // 为问题本身添加时间
  this.addDateQuestion = function() {
    const title = document.querySelector(".QuestionPage");
    if (title) {
      const dateCreatedEl = title.querySelector("[itemprop~=dateCreated][content]");
      const dateModifiedEl = title.querySelector("[itemprop~=dateModified][content]");
      
      if (!dateCreatedEl || !dateModifiedEl) return;
      
      const dateCreated = dateCreatedEl.content;
      const dateModified = dateModifiedEl.content;
      const createDate = commonFunctionObject.DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
      const editDate = commonFunctionObject.DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");

      const side = title.querySelector(".QuestionHeader-side");
      const timeDiv = document.createElement('div');
      timeDiv.innerHTML = `<p>创建于:&nbsp;${createDate}</p><p>编辑于:&nbsp;${editDate}</p>`;
      timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;';
      side.appendChild(timeDiv);
    }
  };
  // 为回答添加时间
  this.addTimeAnswerItems = function() {
    const list = document.querySelectorAll(".AnswerItem:not(div[zh_date_mk='true'])");
    let isComplete = true;
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.getAttribute('zh_date_mk') === 'true') {
        continue;
      }
      item.setAttribute("zh_date_mk", "true");
      try {
        const dateCreatedEl = item.querySelector("[itemprop~=dateCreated][content]");
        const dateModifiedEl = item.querySelector("[itemprop~=dateModified][content]");
        
        if (!dateCreatedEl || !dateModifiedEl) {
          isComplete = false;
          continue;
        }

        const dateCreated = dateCreatedEl.content;
        const dateModified = dateModifiedEl.content;
        const createDate = commonFunctionObject.DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
        const editDate = commonFunctionObject.DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");

        const sideItem = item.querySelector(".ContentItem-meta");
        const timeDiv = document.createElement('div');
        timeDiv.innerHTML = `创建于:&nbsp;${createDate}&nbsp;&nbsp;&nbsp;修改于:&nbsp;${editDate}`;
        timeDiv.className = "Voters";
        timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;display:block;padding:5px 0px;';
        sideItem.appendChild(timeDiv);
      } catch (e) {
        console.error("Error adding date to answer item:", e);
        isComplete = false;
      }
    }
    return isComplete;
  };
  // 提问者标识出来
  this.showQuestionAuthor = function() {
    //此处代码借鉴自 - 知乎增强
    //原作者：X.I.U
    //https://greasyfork.org/zh-CN/scripts/419081-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA
    if (document.querySelector('.SpecialQuestionAuthor-Wrapper, .SpecialQuestionAuthor')) {
      return;
    }
    const jsData = document.querySelector('#js-initialData');
    if (!jsData) return;
    
    const qJson = JSON.parse(jsData.textContent).initialState.entities.questions[/\d+/.exec(location.pathname)[0]].author;
    const html = `<div class="BrandQuestionSymbol"><a class="BrandQuestionSymbol-brandLink" href="/people/${qJson.urlToken}"><img role="presentation" src="${qJson.avatarUrl}" class="BrandQuestionSymbol-logo" alt=""><span class="BrandQuestionSymbol-name">${qJson.name}</span></a><div class="BrandQuestionSymbol-divider" style="margin-left: 5px;margin-right: 10px;"></div></div>`;
    const questionTopics = document.querySelector('.QuestionHeader-topics');
    if (questionTopics) {
      questionTopics.insertAdjacentHTML('beforebegin', html);
    }
  };
  this.startDealwithQuestion = function() {
    let isMarkComplete = true;
    setInterval(() => {
      if (isMarkComplete) {
        isMarkComplete = false;
        isMarkComplete = this.addTimeAnswerItems();
      }
    }, 2500);
    this.showQuestionAuthor();
    this.addDateQuestion();
  };
  this.downloadVideo = function() {
    let isMarkComplete = true;

    function addDownloadButton() {
      if (!isMarkComplete) return;
      isMarkComplete = false;

      const itemArray = document.querySelectorAll("._1tg8oir:not(span[zh_date_mk='true'])");
      if (itemArray.length === 0) {
        isMarkComplete = true;
        return;
      }

      for (let i = 0; i < itemArray.length; i++) {
        const item = itemArray[i];
        if (item.getAttribute('zh_date_mk') === 'true') {
          continue;
        }

        if (item.innerText.trim() !== "倍速") {
          continue;
        }

        const playButLi = item.parentNode.parentNode;
        if (!playButLi) continue;
        const downloadBut = playButLi.cloneNode(true);
        if (!downloadBut.querySelector('._1tg8oir')) continue;

        const downloadButChildren = Array.from(downloadBut.children);
        for (let j = 0; j < downloadButChildren.length; j++) {
          if (downloadButChildren[j].nodeName !== "BUTTON") {
            downloadBut.removeChild(downloadButChildren[j]);
          }
        }
        
        downloadBut.setAttribute("zh_date_mk", "true");
        downloadBut.querySelector('._1tg8oir').innerText = '下载';
        playButLi.before(downloadBut);

        downloadBut.addEventListener("click", function() {
          const href = window.location.href;
          let findClassName = ".ZVideoItem-video";
          if (href.includes("www.zhihu.com/search")) {
            findClassName = ".List-item";
          } else if (href.includes("www.zhihu.com/zvideo/")) {
            findClassName = ".ZVideo-player";
          } else if (href.includes("https://video.zhihu.com/video")) {
            findClassName = "#player";
          }
          if (!findClassName) return;

          const container = downloadBut.closest(findClassName);
          if (!container) return;
          
          const videoElement = container.querySelector("video");
          if (videoElement && videoElement.src) {
            commonFunctionObject.GMopenInTab(videoElement.src);
          }
        });
      }
      isMarkComplete = true;
    }

    setInterval(addDownloadButton, 1499);
  };
  this.start = function() {
    const host = window.location.host;
    if (host === "link.zhihu.com") {
      this.autoJumpTarget();
    }
    if (host.includes("zhihu.com")) {
      this.markArticleOrQuestion();
      if (window.location.href.includes("www.zhihu.com/question/")) {
        this.startDealwithQuestion();
      }
      this.downloadVideo();
    }
  };
}

try {
  if (!functionController || functionController.zhihuHelper) {
    (new ZhihuHelper()).start();
  }
} catch (e) {
  console.log("知乎助手：error：" + e);
}
	/**
 * 搜索引擎资源提醒
 */
function SearchEnginesNavigation() {

  this.customNavigationkey = "custom-navigation-key-8898";
  this.serverNavigationkey = "server-navigation-key-8898";
  this.searchEnginesData = [{
    "host": "www.baidu.com",
    "element": "#content_right",
    "elementInput": "#kw"
  }, {
    "host": "www.so.com",
    "element": "#side",
    "elementInput": "#keyword"
  }, {
    "host": "www.sogou.com",
    "element": "#right",
    "elementInput": "#upquery"
  }, {
    "host": "cn.bing.com",
    "element": "#b_context",
    "elementInput": "#sb_form_q"
  }, {
    "host": "www.bing.com",
    "element": "#b_context",
    "elementInput": "#sb_form_q"
  }, {
    "host": "www4.bing.com",
    "element": "#b_context",
    "elementInput": "#sb_form_q"
  }, {
    "host": "so.toutiao.com",
    "element": ".s-side-list",
    "elementInput": "input[type='search']"
  }, {
    "host": "www.google.com",
    "element": "#rhs",
    "elementInput": "textarea[name='q']"
  }, {
    "host": "www.google.com.hk",
    "element": "#rhs",
    "elementInput": "textarea[name='q']"
  }, {
    "host": "duckduckgo.com",
    "element": ".react-results--sidebar",
    "elementInput": "#search_form_input"
  }, ];
  this.defaultNavigationData = [{
    "name": "资源搜索",
    "list": [{
      "name": "书签搜索 · 🔥发现",
      "url": "https://www.bookmarkearth.cn/?from=dxy"
    }, {
      "name": "百度百科",
      "url": "https://baike.baidu.com/item/@@"
    }, {
      "name": "知乎搜索",
      "url": "https://www.zhihu.com/search?type=content&q=@@"
    }, {
      "name": "B站搜索",
      "url": "https://search.bilibili.com/all?keyword=@@&from_source=webtop_search&spm_id_from=333.851"
    }, {
      "name": "财经雪球",
      "url": "https://xueqiu.com/k?q=@@"
    }, {
      "name": "抖音搜索",
      "url": "https://www.douyin.com/search/@@"
    }, {
      "name": "搜狗|公众号",
      "url": "https://weixin.sogou.com/weixin?type=2&query=@@"
    }, {
      "name": "豆瓣搜索",
      "url": "https://www.douban.com/search?q=@@"
    }, {
      "name": "维基百科",
      "url": "https://en.wikipedia.org/w/index.php?search=@@"
    }, {
      "name": "法律法规",
      "url": "https://www.pkulaw.com/law/chl?Keywords=@@"
    }, {
      "name": "icon搜索",
      "url": "https://www.iconfont.cn/search/index?searchType=icon&q=@@"
    }, {
      "name": "github",
      "url": "https://github.com/search?q=@@"
    }, {
      "name": "csdn",
      "url": "https://so.csdn.net/so/search?q=@@&t=&u="
    }, {
      "name": "stackoverflow",
      "url": "https://stackoverflow.com/"
    }, {
      "name": "AI内容分析🔥",
      "url": "https://www.quzhuanpan.com/redirect/d_n?t=" + (new Date()).getTime()
    }, {
      "name": "在线工具",
      "url": "https://www.tool77.com/category/1?from=vbx"
    }, ]
  }, {
    "name": "搜索引擎",
    "list": [{
      "name": "百度",
      "url": "https://www.baidu.com/s?wd=@@"
    }, {
      "name": "必应",
      "url": "https://cn.bing.com/search?q=@@"
    }, {
      "name": "google",
      "url": "https://www.google.com/search?q=@@"
    }, {
      "name": "360搜索",
      "url": "https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&nlpv=basest&q=@@"
    }, {
      "name": "搜狗",
      "url": "https://www.sogou.com/web?query=@@"
    }, {
      "name": "头条搜索",
      "url": "https://so.toutiao.com/search?dvpf=pc&source=input&keyword=@@"
    }, {
      "name": "DuckDuckGo",
      "url": "https://duckduckgo.com/?t=h_&q=@@&ia=web"
    }, ]
  }, ];
  this.getNavigationData = async function(element, elementInput) {
    const self = this;
    let navigationData = self.defaultNavigationData;
    let finalNavigationData = null;
    try {
      const customNavigationData = commonFunctionObject.GMgetValue(self.customNavigationkey, null);
      if (customNavigationData) {
        finalNavigationData = JSON.parse(JSON.stringify(customNavigationData));
      } else {
        const currentMS = (new Date()).getTime();
        const delayMS = 1000 * 60 * 5;
        const serverNavigationData = commonFunctionObject.GMgetValue(self.serverNavigationkey, null);
        if (!serverNavigationData || (currentMS - serverNavigationData.ms) > delayMS) {
          commonFunctionObject.request("get", `https://sct.staticj.top/script/api/nav?t=${currentMS}`, null).then(serverJson => {
            const data = JSON.parse(serverJson.data);
            data.ms = currentMS;
            commonFunctionObject.GMsetValue(self.serverNavigationkey, data);
          }).catch(error => {});
        }
        if (serverNavigationData) {
          finalNavigationData = JSON.parse(serverNavigationData.list);
        } else {
          finalNavigationData = navigationData;
        }
      }
    } catch (e) {
      finalNavigationData = navigationData;
    }
    self.createHtml(element, elementInput, finalNavigationData);
  };
  this.createCss = function(elementNum) {
    const innnerCss = `
			#dsdsd99mmmjj7760011{
				margin-bottom:20px;
			}
			.tab${elementNum}{
				margin-bottom:8px;
			}
			.tab-c-titles${elementNum}{
				margin-bottom:8px;
			}
			.tab-c-links${elementNum}{
				
			}
			
			.tabs-t${elementNum}{
				display: inline-block;
				width: 80px;
				height: 28px;
				line-height: 28px;
				font-size: 15px;
				letter-spacing: 0;
				text-align: center;
				font-weight: 400;
				border-radius: 6px;
				cursor: pointer;
				background: #f8f8f8;
				color: #333;
			}
			.tabs-t-selected-ddsds1idddx90{
			    color: #315EFB!important;;
			    font-weight: 500!important;;
			    background: rgba(49, 94, 251, 0.1)!important;;
			}
			.tabs-t-small-ddsds1idddx90{
			    margin-left: 8px;
			}
			
			.tab-c-links${elementNum} a[name='navigation']{
				display:inline-block;
				text-align:center;
				margin-right:12px;
				margin-top:5px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow:ellipsis;
				box-sizing:border-box;
				line-height:20px;
				font-size:14px!important;
				text-decoration: none;
				color:#1a0dab;
			}
			.tab-c-links${elementNum} a[name='navigation']:hover{
				text-decoration: underline;
			}
			
			.bookmarks${elementNum}{
				min-height:50px;
			}
		`.trim().replace(/\s+/g, " ");
    if (!document.getElementById("plugin_css_style_dddsoo")) {
      const style = document.createElement("style");
      style.id = "plugin_css_style_dddsoo";
      style.textContent = innnerCss;
      document.head.appendChild(style);
    }
  };
  this.showSetingDialog = function() {
    const self = this;
    let customNavigationData = "";
    const customNavigation = commonFunctionObject.GMgetValue(self.customNavigationkey, null);
    if (customNavigation) {
      customNavigationData = JSON.stringify(customNavigation, null, 4);
    }
    const content = `
			<div>
				<div style="font-size:13px;color:red;">
					注意事项如下：
					<br>1、请严格按照格式添加，否则不生效
					<br>2、数据为json格式，请确保json格式正确，必要时请到<a target="_blank" href="https://www.json.cn/">https://www.json.cn/</a>校验
					<br>3、点击下面”示例“按钮，查看具体格式情况
					<br>4、链接中的搜索关键词请用”@@“代替，脚本会自动替换成当前搜索词。例如：https://www.baidu.com/s?wd=@@
					<br>5、大家可以自定义导航数据，<b>但是必须要注意数据格式，发现出现错误，可点“初始化”</b>
				</div>
				<div style="margin-top:5px;height:200px;width:100%;">
					<textarea 
						placeholder="请严格按照格式填写，否则不生效"
						class="navigation-textarea"
						style="color:#000;font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">${customNavigationData}</textarea>
				</div>
				<div style="text-align:center;margin-top:15px;">
					<button class="navigation-init" style="color:#000;cursor:pointer;">初始化</button>
					<button class="navigation-example" style="color:#000;cursor:pointer;">示例</button>
					<button class="navigation-clear" style="color:#000;cursor:pointer;">清空</button>
					<button class="navigation-save" style="color:#000;cursor:pointer;">保存自定义导航</button>
				</div>
			</div>
		`;
    dialog.showMake({
      "title": "自定义添加导航",
      "content": content,
      "onClose": function() {
        location.reload();
      },
      "onContentReady": function($that) {
        const navigationExample = $that.dialogContent.querySelector(".navigation-example");
        const navigationClear = $that.dialogContent.querySelector(".navigation-clear");
        const navigationSave = $that.dialogContent.querySelector(".navigation-save");
        const navigationInit = $that.dialogContent.querySelector(".navigation-init");
        const textarea = $that.dialogContent.querySelector(".navigation-textarea");

        navigationExample.addEventListener("click", () => {
          textarea.value = JSON.stringify(self.defaultNavigationData, null, 4);
        });
        navigationClear.addEventListener("click", () => {
          textarea.value = "";
        });
        navigationInit.addEventListener("click", () => {
          textarea.value = "";
          commonFunctionObject.GMsetValue(self.customNavigationkey, null);
        });
        navigationSave.addEventListener("click", () => {
          const content = textarea.value;
          if (!content) {
            commonFunctionObject.GMsetValue(self.customNavigationkey, null);
            commonFunctionObject.webToast({
              "message": "保存成功：数据为空",
              "background": "#FF4D40"
            });
            return;
          }
          if (content.length === 0 || content.indexOf("{") === -1 || content.indexOf("[") === -1) {
            commonFunctionObject.webToast({
              "message": "格式错误，请更正",
              "background": "#FF4D40"
            });
            return;
          }
          try {
            const contentJson = JSON.parse(content);
            if (Array.isArray(contentJson)) {
              let isOK = true;
              for (let i = 0; i < contentJson.length; i++) {
                if (Array.isArray(contentJson[i])) {
                  isOK = false;
                  break;
                }
                if (!contentJson[i].hasOwnProperty("name") || !contentJson[i].hasOwnProperty("list")) {
                  isOK = false;
                  break;
                }
                if (typeof(contentJson[i]["name"]) !== "string") {
                  isOK = false;
                  break;
                }
                if (!Array.isArray(contentJson[i]["list"])) {
                  isOK = false;
                  break;
                }
                for (let j = 0; j < contentJson[i]["list"].length; j++) {
                  if (!contentJson[i]["list"][j].hasOwnProperty("name") || !contentJson[i]["list"][j].hasOwnProperty("url")) {
                    isOK = false;
                    break;
                  }
                  if (typeof(contentJson[i]["list"][j]["name"]) !== "string" || typeof(contentJson[i]["list"][j]["url"]) !== "string") {
                    isOK = false;
                    break;
                  }
                }
                if (!isOK) {
                  break;
                }
              }
              if (isOK) {
                commonFunctionObject.GMsetValue(self.customNavigationkey, contentJson);
                commonFunctionObject.webToast({
                  "message": "保存成功",
                  "background": "#FF4D40"
                });
              } else {
                commonFunctionObject.webToast({
                  "message": "格式错误，请更正",
                  "background": "#FF4D40"
                });
              }
            } else {
              commonFunctionObject.webToast({
                "message": "格式错误，请更正",
                "background": "#FF4D40"
              });
            }
          } catch (e) {
            commonFunctionObject.webToast({
              "message": "格式错误，请更正",
              "background": "#FF4D40"
            });
          }
        });
      }
    });
  };
  this.createHtml = function(element, elementInput, navigationData) {
    const existingElement = document.getElementById("dsdsd99mmmjj7760011");
    if (existingElement) {
      existingElement.remove();
    }
    let isComplate = true;
    const self = this;
    const elementNum = commonFunctionObject.randomNumber();
    const elementInterval = setInterval(() => {
      if (isComplate) {
        const elementToPrepend = document.querySelector(element);
        const box = document.getElementById("dsdsd99mmmjj7760011");
        isComplate = false;
        if (elementToPrepend && !box) {
          const nameArray = [];
          const linkArray = [];
          for (let i = 0; i < navigationData.length; i++) {
            let name = "";
            if (i === 0) {
              name += `<span class="tabs-t${elementNum} tabs-t-selected-ddsds1idddx90" name="tab-list-xxsddddssd-${i}">${navigationData[i].name}</span>`;
            } else {
              name += `<span class="tabs-t${elementNum} tabs-t-small-ddsds1idddx90" name="tab-list-xxsddddssd-${i}">${navigationData[i].name}</span>`;
            }
            nameArray.push(name);
            let links = "";
            if (i === 0) {
              links = `<div id="tab-list-xxsddddssd-${i}">`;
            } else {
              links = `<div id="tab-list-xxsddddssd-${i}" style="display:none;">`;
            }
            for (let j = 0; j < navigationData[i].list.length; j++) {
              let url = navigationData[i].list[j].url;
              url = url.replace("${t}", (new Date()).getTime());
              const linkName = navigationData[i].list[j].name;
              links += `<a target='_blank' name='navigation' data-url='${url}' href='javascript:void(0);'>${linkName}</a>`;
            }
            links += "</div>";
            linkArray.push(links);
          }
          const html = `
						<div id="dsdsd99mmmjj7760011" style="position:relative!important;left:0px!important;">
							<div class="tab${elementNum}">
								<div class="tab-c-titles${elementNum}">${nameArray.join("")}</div>
								<div class="tab-c-links${elementNum}">${linkArray.join("")}</div>
							</div>
							<div style='margin-bottom:10px;margin-top:5px;font-size:12px;'>
								<a target='_blank' onclick="return false;" href='javascript:void(0);' style="color: #000;background-color: #efefef;padding: 2px 5px; border-radius: 2px;">*该数据由油猴脚本提供</a>
								&nbsp;&nbsp;
								<a href="javascript:void(0);" name="customNavigation" style="color: #000;background-color: #efefef;padding: 2px 5px; border-radius: 2px;">🔧自定义网址</a>
							</div>
						<div>
					`;
          self.createCss(elementNum);
          elementToPrepend.insertAdjacentHTML('afterbegin', html);
          document.querySelectorAll(`#dsdsd99mmmjj7760011 .tabs-t${elementNum}`).forEach(tab => {
            tab.addEventListener("click", function() {
              document.querySelectorAll("div[id^='tab-list-xxsddddssd-']").forEach(div => div.style.display = 'none');
              document.querySelectorAll(`.tabs-t${elementNum}`).forEach(span => span.classList.remove("tabs-t-selected-ddsds1idddx90"));
              document.getElementById(this.getAttribute("name")).style.display = 'block';
              this.classList.add("tabs-t-selected-ddsds1idddx90");
            });
          });
          document.querySelectorAll("#dsdsd99mmmjj7760011 a[name='navigation']").forEach(link => {
            link.addEventListener("click", function(e) {
              const url = this.dataset.url;
              const inputValue = document.querySelector(elementInput).value;
              commonFunctionObject.GMopenInTab(url.replace("@@", inputValue));
              e.preventDefault();
            });
          });
          document.querySelector("#dsdsd99mmmjj7760011 a[name='customNavigation']").addEventListener("click", function(e) {
            self.showSetingDialog();
            e.preventDefault();
          });
        }
        isComplate = true;
      }
    }, 100);
  };
  this.hookBaidu = function() {
    const items = document.querySelectorAll("#content_left>div");
    for (let item of items) {
      if (item.getAttribute("baidu_dealxx")) {
        continue;
      }
      item.setAttribute("baidu_dealxx", "--");
      const a = item.querySelector("a");
      if (!a || !a.href) {
        continue;
      }
      const OP_LOG_LINK = item.querySelector(".OP_LOG_LINK");
      if (OP_LOG_LINK && OP_LOG_LINK.innerText.search("http") !== -1) {
        continue;
      }
      const cGapBottomSmall = item.querySelector(".c-gap-bottom-small");
      if (cGapBottomSmall) {
        continue;
      }
      if (a.href.includes("www.baidu.com/link?url=")) {
        const url = item.getAttribute("mu");
        if (url && url.indexOf("http") !== -1 && !url.includes("nourl.ubs.baidu.com")) {
          a.href = url;
          item.insertAdjacentHTML('beforeend', `<div style="color:#ccc;font-size:12px;display:flex;align-items:center;width:100%;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;">
										<img style="width:15px;height:15px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAKhJREFUOE+9k9ENwjAMBc8RA7AR7UhMQDsBszBBw0YMAAmKrBS3pM1HpOb/ne9ZjtD4pDHPEYBTB2FSU9fD21vrisEcHsF5BS0hFYCLwAhh0KkZGOZcBSATyAM4K8QNEC8Q+1yjAEhTPjeQ50+bq0KW4QRZAWxnXsBdO4euFC4AbOe1fvlijEGebrecOqeXl/gP2aiwr125g2wSvd321skfccr7363Z4Asklz4RHmdA1gAAAABJRU5ErkJggg=="/>
										<a style="color:#626675;" href="${url}" target="_blank">${url}</a>
									</div>`);
        }
      }
      const itemNews = item.querySelectorAll("[class^=single-card-wrapper] div, [class^=group-wrapper] div");
      if (!itemNews) {
        continue;
      }
      for (let itemNew of itemNews) {
        let dataUrl = null;
        const divs = itemNew.querySelectorAll("div");
        for (let div of divs) {
          dataUrl = div.getAttribute("data-url");
          if (dataUrl) {
            const innerA = itemNew.querySelector("a");
            if (innerA) {
              innerA.setAttribute("href", dataUrl);
            }
          }
        }
      }
    }
  };
  this.hookGoogle = function() {
    const items = document.querySelectorAll("#center_col a");
    for (let a of items) {
      if (!a.getAttribute("target")) {
        a.setAttribute("target", "_blank");
      }
    }
  };
  this.hooks = function() {
    const host = window.location.host;
    const self = this;
    setInterval(() => {
      if (host === "www.baidu.com") {
        self.hookBaidu();
      } else if (host === "www.google.com" || host === "www.google.com.hk") {
        self.hookGoogle();
      }
    }, 300);
  };
  this.show = function() {
    const self = this;
    const host = window.location.host;
    const href = window.location.href;
    const matches = self.searchEnginesData.some(engine => host === engine.host && href.includes(engine.host));
    if (matches) {
      let currentSearchEnginesData = null;
      for (let i = 0; i < self.searchEnginesData.length; i++) {
        if (host === self.searchEnginesData[i].host) {
          currentSearchEnginesData = self.searchEnginesData[i];
          break;
        }
      }
      if (currentSearchEnginesData) {
        self.getNavigationData(currentSearchEnginesData.element, currentSearchEnginesData.elementInput);
      }
      self.hooks();
    }
  };
  this.start = function() {
    this.show();
  };
}
try {
  if (!functionController || functionController.searchEnginesNavigation) {
    (new SearchEnginesNavigation()).start();
  }
} catch (e) {
  console.log("搜索引擎导航：error：" + e);
}
	/**
 * 购物助手部分功能借鉴自：https://greasyfork.org/zh-CN/scripts/428266
 * 作者：洪皓儿，原脚本开源协议：AGPL License
 * 本脚本继承AGPL License协议并开源，在源代码基础上优化了部分逻辑，修复了部分bug，特此申明！！
 */
const recordBrowsingHistoryKey = "record_browsing_history_mark_key";
const browsedHtml = `
	<div style="position:absolute;white-space: nowrap; top:7px;padding:2px 5px;font-size:12px;background-color:rgba(0,0,0);color:#FFF;z-index:9999999999;border-radius:20px;right:10px;"><b>已浏览</b></div>
`;

function QueryCoupon() {
  this.platforms = ["detail.tmall.com", "item.taobao.com", "item.jd.com", "item.yiyaojd.com", "npcitem.jd.hk",
    "detail.tmall.hk", "detail.vip.com", "item.jkcsjd.com", "product.suning.com","item.jingdonghealth.cn"
  ];
  this.createQrcodeIsResult = true;
  this.isRun = function() {
    for (let i = 0; i < this.platforms.length; i++) {
      if (window.location.host.indexOf(this.platforms[i]) !== -1) {
        return true;
      }
    }
    return false;
  };
  this.filterName = function(str) {
    if (!str) return "";
    str = str.replace(/\t/g, "").replace(/\r/g, "");
    return encodeURIComponent(str);
  };
  this.getGoodsData = async function(platform) {
    let goodsId = "";
    let goodsName = "";
    const href = window.location.href;
    if (platform === "taobao" || platform === "tmall") {
      goodsId = commonFunctionObject.getParamterQueryUrl(window.location.search, "id");
      try {
        const titleObj = document.querySelector("[class^='ItemTitle--']");
        if (titleObj) {
          goodsName = titleObj.textContent;
        }
      } catch (e) {}
    } else if (platform === "jd") {
      goodsId = commonFunctionObject.getEndHtmlIdByUrl(href);
      try {
        const titleObj = document.querySelector(".sku-name");
        if (titleObj) {
          goodsName = titleObj.textContent;
        }
      } catch (e) {}
    } else if (platform === "vpinhui") {
      goodsId = commonFunctionObject.getEndHtmlIdByUrl(href).replace("detail-", "");
      const titleObj = document.querySelector(".pib-title-detail");
      if (titleObj) {
        goodsName = titleObj.textContent;
      }
    } else if (platform === "suning") {
      goodsId = commonFunctionObject.suningParameter(href);
      const titleObj = document.querySelector("#itemDisplayName");
      if (titleObj) {
        goodsName = titleObj.textContent;
      }
    }
    const data = {
      "goodsId": goodsId,
      "goodsName": this.filterName(goodsName)
    };
    return data;
  };
  this.randomSpmValue = function() {
    document.querySelectorAll("meta[name='data-spm'], meta[name='spm-id']").forEach(meta => {
      const max = 5000;
      const min = 1000;
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
      meta.setAttribute("content", randomValue + randomLetter);
    });
    document.body.querySelectorAll("*").forEach(element => {
      element.removeAttribute("data-spm-anchor-id");
      element.removeAttribute("data-spm");
    });
  };
  this.runAliDeceptionSpm = function() {
    const host = window.location.host;
    if (host.indexOf("aliyun.com") !== -1 || host.indexOf("taobao.com") !== -1 || host.indexOf("tmall.com") !== -1) {
      this.randomSpmValue();
      setInterval(() => {
        this.randomSpmValue();
      }, 2000);
    }
  };
  this.browsingHistoryMark = function(platform, goodsId) {
    let histories = commonFunctionObject.GMgetValue(recordBrowsingHistoryKey, []);
    const saveContent = platform + "_" + goodsId;
    if (!histories.includes(saveContent)) {
      histories.unshift(saveContent);
      commonFunctionObject.GMsetValue(recordBrowsingHistoryKey, histories.slice(0, 60));
    }
  };
  this.createHtml = async function(platform, goodsId, goodsName) {
    if (!platform || !goodsId) {
      return "kong";
    }
    this.browsingHistoryMark(platform, goodsId);
    let addition = "";
    if (platform === "vpinhui") {
      const vip = goodsId.split("-");
      addition = vip[0];
      goodsId = vip[1];
    }
    const goodsCouponUrl = "https://tt.shuqiandiqiu.com/api/coupon/discover?no=5&v=1.0.2&pl="+platform+"&id="+goodsId+"&qu="+goodsName+"&addition="+addition;
    try {
      const data = await commonFunctionObject.request("GET", goodsCouponUrl, null);
      if (data.result === "success" && data.data) {
        const json = JSON.parse(data.data);
        await this.createCoupon(platform, json.data);
        await this.createQrcode(platform, json.mscan);
        let heartms = 0;
        const HEART_DELAY = 1500,
          MAX_MS = 1000 * 30;
        const createResultInterval = setInterval(async () => {
          if (this.createQrcodeIsResult) {
            if (document.querySelector("*[name='exist-llkbccxs-9246-hi']") || heartms >= MAX_MS) {
              clearInterval(createResultInterval);
            } else {
              await this.createCoupon(platform, json.data);
            }
          }
          heartms += HEART_DELAY;
        }, HEART_DELAY);
      }
    } catch (e) {
      console.log("createCouponHtml:", e);
    }
  };
  this.getHandlerElement = async function(handler) {
    const getElement = async (handler) => {
      const promiseArray = [];
      const handlers = handler.split("@");
      for (let i = 0; i < handlers.length; i++) {
        const eleName = handlers[i];
        if (!eleName) continue;
        if (eleName === "body") {
          promiseArray.push(new Promise(resolve => resolve(document.body)));
        } else if (eleName === "html") {
          promiseArray.push(new Promise(resolve => resolve(document.documentElement)));
        } else {
          promiseArray.push(commonFunctionObject.getElementObject(eleName, document.body, true, 10, 1500));
        }
      }
      const element = await Promise.race(promiseArray);
      return element || null;
    };
    const element = await getElement(handler);
    return new Promise(resolve => resolve(element));
  };
  this.createCoupon = async function(platform, result) {
    try {
      this.createQrcodeIsResult = false;
      if (!result || result === "null" || !result.hasOwnProperty("css") || !result.hasOwnProperty("html") || !result.hasOwnProperty("handler")) {
        return;
      }
      const {
        css: cssText,
        html: htmlText,
        handler,
        templateId
      } = result;
      if (!cssText || !htmlText || !handler) {
        return;
      }
      GM_addStyle(cssText);
      const handlerElement = await this.getHandlerElement(handler);
      if (handlerElement) {
        if (platform === "taobao" || platform === "tmall") {
          handlerElement.parentNode.insertAdjacentHTML('afterend', htmlText);
        } else if (platform === "jd" || platform === "vpinhui" || platform === "suning") {
          handlerElement.insertAdjacentHTML('afterend', htmlText);
        }
      }
      const template = document.getElementById(templateId);
      if (!template) {
        return;
      }
      const couponId = template.dataset.id;
      const goodsPrivateUrl = "https://tt.shuqiandiqiu.com/api/private/change/coupon?no=5&v=1.0.2&platform="+platform+"&id=";
      if (!/\d/.test(couponId)) {
        return;
      }
      setInterval(() => {
        template.querySelectorAll("*").forEach(el => el.removeAttribute("data-spm-anchor-id"));
      }, 400);
      const couponElementA = template.querySelector("a[name='cpShUrl']");
      if (couponElementA) {
        couponElementA.addEventListener("click", event => {
          event.stopPropagation();
          event.preventDefault();
          commonFunctionObject.request("GET", goodsPrivateUrl + couponId, null).then(privateResultData => {
            if (privateResultData.result === "success" && privateResultData.data) {
              const url = JSON.parse(privateResultData.data).url;
              if (url) GM_openInTab(url, {
                active: true
              });
            }
          });
        });
      }
      const canvasElement = document.getElementById(`ca${templateId}`);
      if (!canvasElement) {
        return;
      }
      const qrcodeResultData = await commonFunctionObject.request("GET", goodsPrivateUrl + couponId, null);
      if (qrcodeResultData && qrcodeResultData.result === "success" && qrcodeResultData.data) {
        const img = JSON.parse(qrcodeResultData.data).img;
        if (img) {
          const cxt = canvasElement.getContext("2d");
          const imgData = new Image();
          imgData.src = img;
          imgData.onload = function() {
            cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
          };
        }
      }
    } catch (e) {
      console.log("~~~~~~~~~~~~~~~~~", e);
    } finally {
      this.createQrcodeIsResult = true;
    }
  };
  this.createQrcode = async function(platform, mscan) {
    if (!mscan || mscan === "null" || !mscan.hasOwnProperty("mount") || !mscan.hasOwnProperty("html") || !mscan.hasOwnProperty("qrcode")) {
      return;
    }
    const {
      mount,
      html,
      qrcode,
      iden
    } = mscan;
    if (mount && html && qrcode && iden) {
      const mountElement = document.querySelector(mount);
      if (mountElement) {
        mountElement.insertAdjacentHTML('beforeend', html);
        const canvasElement = document.getElementById(`mscan${iden}`);
        if (canvasElement) {
          const width = canvasElement.getAttribute("width");
          const height = canvasElement.getAttribute("height");
          const cxt = canvasElement.getContext("2d");
          const imgData = new Image();
          imgData.src = qrcode;
          imgData.onload = function() {
            cxt.drawImage(imgData, 0, 0, width, height);
          };
        }
      }
    }
  };
  this.start = async function() {
    if (this.isRun()) {
      this.runAliDeceptionSpm();
      const platform = commonFunctionObject.getEcommercePlatform();
      if (!platform) return;
      if (platform === "tmall" || platform === "taobao") {
        commonFunctionObject.getElementObject("div[class^='skuWrapper--']", document.body, false, 10, 1500).then(skuItemWrapper => {
          if (skuItemWrapper) {
            skuItemWrapper.style.maxHeight = "400px";
            skuItemWrapper.style.overflow = "auto";
          }
        }).catch(() => {});
      } else if (platform === "jd") {
        const skuItemWrapper = document.querySelector("#choose-attrs");
        if (skuItemWrapper) {
          skuItemWrapper.style.maxHeight = "400px";
          skuItemWrapper.style.overflow = "auto";
        }
      }
      const goodsData = await this.getGoodsData(platform);
      this.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
    }
  };
}

function SearchPageObject() {
  this.intervalIsRunComplete = true;
  this.histories = commonFunctionObject.GMgetValue(recordBrowsingHistoryKey, []);
  this.isRun = function() {
    const visitHref = window.location.href;
    const allows = [
      /^https:\/\/www\.taobao\.com(\/|\/\?)?/i,
      /^https:\/\/s\.taobao\.com/i,
	  /^https:\/\/new-s\.taobao\.com/i,
      /^https:\/\/shop(\d+)\.taobao\.com/i,
      /^https:\/\/www\.tmall\.com(\/|\/\?)?/i,
      /pages\.tmall\.com/i,
      /list\.tmall\.com/i,
      /list\.tmall\.hk/i,
      /tmall\.com\/category/i,
      /tmall\.com\/search/i,
      /tmall\.com\/shop/i,
      /tmall\.com\/\?q=/i,
      /maiyao\.liangxinyao\.com/i,
      /^https:\/\/www\.jd\.com(\/|\/\?)?/i,
      /search\.jd\.com/i,
      /search\.jd\.hk/i,
      /pro\.jd\.com\/mall/i,
      /jd\.com\/view_search/i,
      /category\.vip\.com/i,
      /list\.vip\.com/i,
      /^https:\/\/(?!product|dfp\.)([^\/]+)\.suning\.com\//i
    ];
    return allows.some(reg => reg.test(visitHref));
  };
  this.requestConf = function() {
    return new Promise((resolve, reject) => {
      commonFunctionObject.crossRequest("GET", "https://tt.shuqiandiqiu.com/api/plugin/load/conf", null).then(data => {
        if (data.result === "success" && data.data) {
          resolve(data.data);
        } else {
          resolve(null);
        }
      });
    });
  };
  this.pickupSearchElements = function(conf, platform) {
    const selectorElementList = [];
    const visitHref = window.location.href;
    let confFilter = conf;
    try {
      confFilter = confFilter.replace(/\\\\/g, "\\");
    } catch (e) {}
    const confJson = JSON.parse(confFilter);
    if (confJson.hasOwnProperty(platform)) {
      const platformConfJson = confJson[platform];
      for (let i = 0; i < platformConfJson.length; i++) {
        const itemJson = platformConfJson[i];
        if (!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")) {
          continue;
        }
        const {
          elements,
          matches
        } = itemJson;
        const isMatch = matches.map(reg => (new RegExp(reg, "i")).test(visitHref)).some(res => res);
        if (isMatch) {
          for (let j = 0; j < elements.length; j++) {
            selectorElementList.push({
              "element": elements[j]["element"],
              "findA": elements[j]["findA"],
              "page": elements[j]["page"],
              "extra": elements[j]["extra"]
            });
          }
        }
      }
    }
    return selectorElementList;
  };
  this.createAllElementHtml = function(items) {
    this.intervalIsRunComplete = false;
    this.processLinksInBatches(items, 18).then(() => {
      this.intervalIsRunComplete = true;
    });
  };
  this.processLinksInBatches = async function(items, batchSize) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(item => this.createOneElementHtml(item))
      );
      results.push(...batchResults);
    }
    return results;
  };
  this.getAnchorElement = function(element, findA) {
    let finalElement = null;
    if (findA === "this") {
      finalElement = element;
    } else {
      finalElement = element.querySelector(findA.replace(/^child@/, ""));
    }
    return finalElement;
  };
  this.createOneElementHtml = function(item) {
    const {
      element,
      page,
      findA,
      extra
    } = item;
    const self = this;
    return new Promise(function(resolve) {
      if (element.getAttribute("honghaoerbox")) {
        resolve(-10000);
        return;
      }
      element.setAttribute("honghaoerbox", "true");
      element.style.position = "relative";
      element.addEventListener("click", function() {
        this.insertAdjacentHTML('beforeend', browsedHtml);
      });
      const finalElement = self.getAnchorElement(element, findA);
      if (!finalElement) {
        resolve(-30000);
        return;
      }
      let goodsDetailUrl = null;
      let isAnchorA = true;
      if (extra) {
        const {
          durl,
          attribute
        } = extra;
        const attributeValue = finalElement.getAttribute(attribute);
        if (attributeValue) {
          goodsDetailUrl = durl.replace("@", attributeValue);
          isAnchorA = false;
        }
      } else {
        goodsDetailUrl = finalElement.getAttribute("href");
      }
      if (!goodsDetailUrl) {
        resolve(-20000);
        return;
      }
      let analysisData = null;
      if (page.indexOf("jd_") !== -1) {
        const jdId = commonFunctionObject.getEndHtmlIdByUrl(goodsDetailUrl);
        if (jdId) analysisData = {
          "id": jdId,
          "platform": "jd"
        };
      } else if (page.indexOf("vpinhui_") !== -1) {
        const vipId = commonFunctionObject.getEndHtmlIdByUrl(goodsDetailUrl).replace("detail-", "");
        if (vipId) {
          analysisData = {
            "id": vipId.split("-")[1],
            "platform": "vpinhui"
          };
        }
      } else if (page.indexOf("suning_") !== -1) {
        const suningId = commonFunctionObject.suningParameter(goodsDetailUrl);
        if (suningId) {
          analysisData = {
            "id": suningId,
            "platform": "suning"
          };
        }
      } else {
        const platform = commonFunctionObject.getEcommercePlatform(goodsDetailUrl);
        const id = commonFunctionObject.getParamterQueryUrl(goodsDetailUrl, "id");
        if (platform && id) {
          analysisData = {
            "id": id,
            "platform": platform
          };
        }
      }
      if (!analysisData) {
        resolve(-30000);
        return;
      }
      const mark = analysisData.platform + "_" + analysisData.id;
      if (self.histories.includes(mark)) {
        element.insertAdjacentHTML('beforeend', browsedHtml);
      }
      const searchUrl = "https://j.jiayoushichang.com/api/ebusiness/coupon/exist/"+analysisData.platform+"?no=5&id="+analysisData.id;
      commonFunctionObject.crossRequest("GET", searchUrl, null).then(data => {
        if (data.result === "success" && data.data) {
          const {
            id,
            tip,
            encryptLink
          } = JSON.parse(data.data);
          if (tip) {
            element.insertAdjacentHTML('beforeend', tip);
          }
          if (encryptLink) {
            let decryptUrl = null;
            try {
              const decryptLink = atob(encryptLink);
              decryptUrl = decryptLink.split('').reverse().join('');
            } catch (e) {}
            if (decryptUrl) {
              if (isAnchorA) {
                self.relativeAnchorAJu(page, element, decryptUrl);
              } else {
                self.relativeJu(element, decryptUrl);
              }
            }
          }
        }
        resolve(10000);
      }).catch(() => {
        resolve(-40000);
      });
    });
  };
  this.relativeJu = function(element, decryptUrl) {
    element.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      commonFunctionObject.GMopenInTab(decryptUrl);
    }, true);
  };
  this.relativeAnchorAJu = function(page, element, decryptUrl) {
    const self = this;
    try {
      if (page.indexOf("jd_") !== -1) {
        element.querySelectorAll("a").forEach(a => {
          const href = a.getAttribute("href");
          if (/item\.jd|npcitem\.jd/.test(href)) {
            a.removeAttribute("onclick");
            a.addEventListener("click", function(e) {
              e.preventDefault();
              e.stopPropagation();
              commonFunctionObject.GMopenInTab(decryptUrl);
            }, true);
          }
        });
      } else if (page.indexOf("taobao_") !== -1 || page.indexOf("tmall_") !== -1) {
        element.addEventListener("click", function(e) {
          const target = e.target;
          const tagName = target.tagName.toUpperCase();
          let isPreventDefault = false;
          if (tagName === "A") {
            const href = target.getAttribute("href");
            const isDetail = [/detail\.tmall\.com/, /item\.taobao\.com/]
              .some(reg => reg.test(href));
            if (isDetail) {
              isPreventDefault = true;
            }
          } else {
            isPreventDefault = true;
          }
          if (isPreventDefault) {
            e.preventDefault();
            e.stopPropagation();
            commonFunctionObject.GMopenInTab(decryptUrl);
          }
        }, true);
      } else if (page.indexOf("vpinhui_") !== -1) {
        element.querySelectorAll("a").forEach(a => {
          const href = a.getAttribute("href");
          if (href && href.indexOf("detail.vip.com/detail-") !== -1) {
            a.addEventListener("click", function(e) {
              e.preventDefault();
              e.stopPropagation();
              commonFunctionObject.GMopenInTab(decryptUrl);
            }, true);
          }
        });
      } else if (page.indexOf("suning_") !== -1) {
        element.querySelectorAll("a").forEach(a => {
          const href = a.getAttribute("href");
          if (href && href.indexOf("product.suning.com") !== -1) {
            a.addEventListener("click", function(e) {
              e.preventDefault();
              e.stopPropagation();
              commonFunctionObject.GMopenInTab(decryptUrl);
            }, true);
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  this.searchPage = function(selectorElementList) {
    const items = [];
    selectorElementList.forEach(elementData => {
      if (elementData.element) {
        document.querySelectorAll(elementData.element + ":not([honghaoerbox='true'])").forEach(el => {
          items.push({
            "element": el,
            "findA": elementData.findA,
            "extra": elementData.extra,
            "page": elementData.page
          });
        });
      }
    });
    if (items.length > 0) {
      this.createAllElementHtml(items);
    }
  };
  this.start = function() {
    if (this.isRun()) {
      const platform = commonFunctionObject.getEcommercePlatform();
      this.requestConf().then(conf => {
        const selectorElementList = this.pickupSearchElements(conf, (platform === "tmall" ? "taobao" : platform));
        
		if (this.intervalIsRunComplete) {
          this.searchPage(selectorElementList);
        }
        setInterval(() => {
          if (this.intervalIsRunComplete) {
            this.searchPage(selectorElementList);
          }
        }, 1500);
      });
    }
  };
}

try {
  (new SearchPageObject()).start();
  (new QueryCoupon()).start();
  if (/taobao|jd|tmall|jkcsjd|vip|vipglobal|yiyaojd|liangxinyao|suning/.test(window.location.host)) {
    GM_registerMenuCommand("清除商品浏览记录", () => {
      if (confirm('此弹窗来自脚本-[🔥]!!网购小助手,不花冤枉钱\n是否要移除所有的浏览记录？移除后将不可恢复...')) {
        commonFunctionObject.GMsetValue(recordBrowsingHistoryKey, []);
      }
    });
  }
} catch (e) {
  console.log("优惠券查询：error：" + e);
}
	
	function ServerNavigation(){
	this.allowHosts = ["tencent.com","aliyun.com","huaweicloud.com","bandwagonhost.com","hostwinds.com"];
	this.number = Math.ceil(Math.random()*100000000);
	this.containerHight = 150;
	this.GMopenInTab = function(url, options={"active":true, "insert":true, "setParent":true}){
		if (typeof GM_openInTab === "function") {
			GM_openInTab(url, options);
		} else {
			GM.openInTab(url, options);
		}
	};
	this.addStyle = function(css){
		GM_addStyle(css);
	};
	this.serverMenu = function(){
		var isOpenServer = GM_getValue("server_navigation_key", true);
		GM_registerMenuCommand("服务器导航设置",()=>{
			var person = prompt("是否开启服务器导航功能？请填写yes或者no....", isOpenServer ? "yes" : "no");
		  if(person==null||person==undefined){
			return;
		  }
		  var validate = person==="no"||person==="NO"||person==="yes"|| person==="YES";
		  if(validate) GM_setValue("server_navigation_key", (person==="yes"|| person==="YES"));

		  var toastMessage = "开启服务器导航功能";
			if(person==="yes"|| person==="YES"){
			toastMessage = "开启服务器导航功能";
		  }else if(person==="no"|| person==="NO"){
			toastMessage = "关闭服务器导航功能";
		  }else{
			toastMessage = "参数错误，只能填写yes或者no";
		  }
		  toast.show({"message":toastMessage, "background":"#474747"});
		  //只有验证通过后，才会刷新页面
		  if(validate){
			setTimeout(function(){
			  location.reload();
			},1000);
		  }
		});
	};
	this.request = function(mothed, url, param){   //网络请求
		return new Promise(function(resolve, reject){
			GM_xmlhttpRequest({
				url: url,
				method: mothed,
				data:param,
				onload: function(response) {
					var status = response.status;
					var playurl = "";
					if(status==200||status=='200'){
						var responseText = response.responseText;
						resolve({"result":"success", "responseText":responseText});
					}else{
						reject({"result":"error", "responseText":null});
					}
				}
			});
		})
	};
	this.isRun = function(){
		const host = window.location.host;
		for(let i=0;i<this.allowHosts.length;i++){
			if(host.indexOf(this.allowHosts[i])!=-1){
				return true;
			}
		}
		return false;
	};
	this.temporary=function(track,rules){
		const pathname = window.location.pathname;
		const {matches, filter} = rules;
		const isMatch = matches.some(pattern => {
			const regex = new RegExp(pattern.replace(/\\\\/g, "\\"));
			return regex.test(pathname);
		});
		if(isMatch){
			const anchorRun=()=>{
				const {open, keywords} = filter;
				var num = 0;
				document.querySelectorAll("a").forEach(function(element,index){
				  var href = element.getAttribute("href");
				  if(!href || (element.getAttribute("anchor-i") && element.getAttribute("anchor-i-url")===href)){
					return;
				  }
				  element.setAttribute("anchor-i","true");
				  element.setAttribute("anchor-i-url",href);
				  let textContent = "";
				  for(let node of element.childNodes){
					if(node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && node.tagName!== 'A')) {
					  textContent += node.textContent;
					}
				  }
				  textContent = textContent.replace(/\n|\t|\s/g, "");
				  const result = !open || keywords.some(item => textContent.includes(item));
				  if(result){
					if(href.indexOf(track)!=-1) return;
					element.setAttribute("rel", "noreferrer nofollow");
					href = href + (href.indexOf("?")!=-1 ? "&" : "?") + track;

					element.removeAttribute("data-spm");
					element.removeAttribute("data-spm-anchor-id");
					element.removeAttribute("data-tracker-scm");

					element.setAttribute("href", href);
					element.setAttribute("anchor-i-url",href);
					num++;
				  }
				});
			}
			anchorRun();
			setInterval(function(){
			  anchorRun();
			},1000);
		}
	};
	this.generateHtml=function(html){
		if(!html){
			return;
		}
		const number = this.number;
		const containerHight = this.containerHight;
		var css=`
			#server-containerx`+number+`{
				display: block;
				bottom: -`+containerHight+`px;
				clear: none !important;
				float: none !important;
				left: 50%;
				margin: 0px !important;
				max-height: none !important;
				max-width: none !important;
				opacity: 1;
				overflow: visible !important;
				padding: 0px !important;
				position: fixed;
				right: auto !important;
				top: auto !important;
				vertical-align: baseline !important;
				visibility: visible !important;
				z-index: 2147483647;
				background: rgb(250, 250, 250) !important;
				transition-duration:0.8s!important;
				-webkit-transition-duration:0.8s!important;
				transform:translateX(-50%);
				width: 60% !important;
				height: `+containerHight+`px !important;
				max-width:700px!important;
				box-sizing: border-box!important;
				box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
			}
			#server-containerx`+number+`:hover{
				-webkit-box-shadow: 0 4px 12px rgba(0,0,0,.08);
				box-shadow: 0 4px 12px rgba(0,0,0,.08);
			}
			#server-container-decoration`+number+`{
				inset: auto !important;
				clear: none !important;
				display: block !important;
				float: none !important;
				height: 5px !important;
				margin: 0px !important;
				max-height: none !important;
				max-width: none !important;
				opacity: 1 !important;
				overflow: visible !important;
				padding: 0px !important;
				position: relative !important;
				vertical-align: baseline !important;
				visibility: visible !important;
				width: auto !important;
				z-index: 1 !important;
				background-color: #e4eaf6 !important;
				box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
			}
			#server-container-expand`+number+`{
				cursor:pointer;
				position:absolute;
				width:50px;
				height:30px;
				background-color: #e4eaf6;
				top:-30px;
				left:50%;
				transform:translateX(-50%);
				border-radius: 5px 5px 0px 0px;
			}
			#server-container-expand`+number+`:hover{

			}
			#server-container-expand`+number+`>svg{
				width:50px;
				height:30px;
			}
			#server-container-expand`+number+`>svg:hover{
				transition: 0.6s;
				transform: scale(1.1);
			}
			.server-container-column9980x{
				position:relative;
			}
			.server-container-column9980x:not(:last-child):after{
				position: absolute;
				height: calc(100% - 4em);
				right: 0px;
				content: '';
				width: 0px;
				border-left: solid #e6e7eb 2px;
				top: 50%;
				transform: translateY(-50%);
			}
			#server-container-body`+number+`{
				width:100%;
				height:100%;
			}
		`;
		var html=`
			<div id="server-containerx`+number+`">
				<div id="server-container-decoration`+number+`">
					<div id="server-container-expand`+number+`">
						<svg t="1719906770072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4303" width="256" height="256"><path d="M444 136.3L123.8 324.8l3.2 371.5 323.3 183 320.2-188.5-3.2-371.5z" fill="#FFFFFF" p-id="4304"></path><path d="M630 287.6l-20.1-11.4-279.7 164.7L333 767l20.1 11.3-2.8-326z" fill="#06F3FF" p-id="4305"></path><path d="M746.8 489.8l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9-6.2-13.8-3.4z" fill="#005BFF" p-id="4306"></path><path d="M638.6 534c-1.6-0.9-3.4-1.3-5.2-1.3-4.9 0-9.9 2.6-13 4.6-20.6 13-38 47.5-38 75.2 0 12.2 3.4 21.4 9.1 24.5 6 3.3 14-0.6 18.2-3.3 20.6-13 38-47.5 38-75.2 0-12.2-3.4-21.3-9.1-24.5z m-9.9 50.4l-8.6 5.2c-1.6 1-3.4 1.4-5.2 1.4-3.4 0-6.7-1.7-8.6-4.8-2.9-4.7-1.3-10.9 3.4-13.7l8.6-5.2c4.7-2.9 10.9-1.3 13.7 3.4 3 4.7 1.5 10.9-3.3 13.7z" fill="#E6E6E6" p-id="4307"></path><path d="M618.4 567.3l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9.1-6.3-13.8-3.4z" fill="#E6E6E6" p-id="4308"></path><path d="M444 136.3L123.8 324.8l3.2 371.5 323.3 183 320.1-188.5-3.2-371.5-323.2-183zM166.8 672.9L164 347.6l280.3-165.1 71.2 40.3-280.3 165.1 2.8 325.3-71.2-40.3z m262.8 148.7l-76.5-43.3L333 767l-74.9-42.4-2.8-325.3 280.4-165.1 74.2 42 20.1 11.4 77.8 44-281 165.5 2.8 324.5z m40 0L467 519.8l260.7-153.5 2.6 301.7-260.7 153.6z m287.6-314.7l-8.6 5.2c-1.6 1-3.4 1.4-5.2 1.4-3.4 0-6.7-1.7-8.6-4.8-2.9-4.7-1.3-10.9 3.4-13.7l8.6-5.2c4.7-2.9 10.9-1.3 13.7 3.4 2.9 4.7 1.4 10.9-3.3 13.7z" fill="#005BFF" p-id="4309"></path><path d="M704 515.6l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9-6.2-13.8-3.4zM827.2 430.8c-5.5 0-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-5.5-4.5-10-10-10zM837.2 390.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM837.2 340.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM837.2 290.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM803.4 467.4c-2.9-4.7-9-6.3-13.7-3.4l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.6-2.9 6.1-9 3.3-13.7zM665.3 540.1c-3-10.8-8.9-19.1-17.1-23.6-11.2-6.1-24.8-4.8-38.5 3.9-26.5 16.8-47.3 57.2-47.3 92.1 0 19.9 7.1 35.2 19.5 42 4.6 2.5 9.6 3.8 14.9 3.8 7.5 0 15.6-2.6 23.7-7.7 25.9-16.4 46.4-55.4 47.3-89.7l3.9-2.4c4.7-2.9 6.2-9 3.4-13.7-2.2-3.4-6.1-5.1-9.8-4.7z m-55.6 93.7c-4.2 2.7-12.2 6.6-18.2 3.3-5.7-3.1-9.1-12.3-9.1-24.5 0-27.7 17.4-62.2 38-75.2 3.1-1.9 8.1-4.6 13-4.6 1.8 0 3.6 0.4 5.2 1.3 5.7 3.1 9.1 12.3 9.1 24.5 0 27.7-17.4 62.1-38 75.2z" fill="#005BFF" p-id="4310"></path><path d="M891.2 321.7c-5.5 0-10 4.5-10 10v156.4l-81.7 49.3c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l91.4-55.1V331.7c-0.1-5.5-4.6-10-10.1-10zM817.3 239.6c-0.1 0.4-0.1 0.8-0.1 1.3v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-0.4 0-0.9-0.1-1.3 23.4-4.6 41-25.3 41-50 0-28.2-22.8-51-51-51s-51 22.8-51 51c0 24.7 17.7 45.4 41.2 50z" fill="#005BFF" p-id="4311"></path></svg>
					</div>
				</div>
				<div id="server-container-body`+number+`">`+html+`</div>
			</div>
		`;

		this.addStyle(css);
		document.body.insertAdjacentHTML("beforeend", html);
		
		const expandOrShow = (forceClose=false) =>{
			const serverContainerx = document.querySelector("#server-containerx"+number);
			var {bottom, height} = window.getComputedStyle(serverContainerx);
			if(bottom=="0px" || forceClose){
				bottom = "-"+height;
			}else{
				bottom = "0px";
			}
			serverContainerx.style.bottom = bottom;
		}
		
		document.querySelector("#server-container-expand"+number).addEventListener("click",function(){
			expandOrShow();
		});
		
		var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const startContainer =()=>{
			setTimeout(function(){
				window.addEventListener("scroll", function () {
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
					if (scrollTop - lastScrollTop > 30) { //向下滚动
						expandOrShow(true);
					} else { //向上滚动
		
					}
					lastScrollTop = scrollTop;
				});
			}, 1500);
		}
		startContainer();
	};
	this.addEventListener=function(){
		const self = this;
		const number = this.number;
		const url = "https://server.staticj.top/api/server/discover?url="+encodeURIComponent(window.location.href)+"&no=0";
		self.request("get", url, null).then((data)=>{
			if(data.result=="success" && !!data.responseText){
				const {html, track, rules} = JSON.parse(data.responseText).data;
				self.generateHtml(html);
				self.temporary(track, rules);
			}
		}).catch((error)=>{
			console.log(error);
		});
	};
	this.start=function(){
		if(!this.isRun()){
			return;
		}
		this.serverMenu();
		const isOpenServer = GM_getValue("server_navigation_key", true);
		if(isOpenServer){
			this.addEventListener();
		}
	};
}
(new ServerNavigation()).start();
	/**
 * 代码借鉴子：https://greasyfork.org/en/scripts/501542-twitter-x-%E1%B4%BE%CB%A1%E1%B5%98%CB%A2-youtube%E1%B4%BE%CB%A1%E1%B5%98%CB%A2
 * 原脚本开源协议为：MIT
 * 本脚本在原脚本基础上优惠了部分逻辑，特此声明！
 */
function Tiktok(){
	this.extractHref=function(html){
		const regex = /<a\s+(?:[^>]*?\s+)?href=(['"])(.*?)\1/gi;
		const hrefs = [];
		let match;

		while ((match = regex.exec(html)) !== null) {
			hrefs.push(match[2]);
		}
		return hrefs.filter((href) => href.indexOf("snapcdn.app")!=-1);
	};
	this.download=async function(url, element){
		commonFunctionObject.webToast({"message":"正在下载中...", "background":"#000"});
		element.classList.add("download-loadding");
		const data = await commonFunctionObject.request("POST", "https://tikdownloader.io/api/ajaxSearch", 
			"q="+url+"&lang=en", {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"});
		if(data.result==="success"){
			const result = JSON.parse(data.data);
			if(result.status=="ok" && result.hasOwnProperty("data")){
				const data = result.data;
				const downloadUrls = this.extractHref(data);
				if(downloadUrls.length>=2){
					commonFunctionObject.GMopenInTab(downloadUrls.at(-2));
				}
			}
		}
		element.classList.remove("download-loadding");
	};
	this.start=async function(){
		if(!/www\.tiktok\.com/.test(window.location.host)){
			return;
		}
		commonFunctionObject.GMaddStyle(`
			@keyframes scriptspin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}
			.download-loadding{
				animation: scriptspin 1s linear infinite;
			}
		`);
		setInterval(()=>{
			if(!document.querySelector("#tiktok-download-990i")){
				const container = document.querySelector('#main-content-video_detail') || document.body;
				if(!container){
					return;
				}
				
				const divs = container.querySelectorAll("div");
				const regex = /-DivRightControlsWrapper|-DivMiniPlayerContainer/;
				const matchedDiv = Array.from(divs).find(div => {
					return div.classList.value.split(' ').some(className => {
						return regex.test(className);
					});
				});
				if(matchedDiv){
					let cloneNode =  null;
					let isDetail = matchedDiv.children.length!=1;
					if(isDetail){
						cloneNode = matchedDiv.children[0].cloneNode(true);
					}else{
						cloneNode = matchedDiv.cloneNode(true);
					}
					cloneNode.id = "tiktok-download-990i";
					cloneNode.querySelector("div").innerHTML=`<svg t="1724300009050" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5307" width="35" height="35"><path d="M298.666667 554.666667v85.333333H256v128h512v-128h-42.666667v-85.333333h128v213.333333a85.333333 85.333333 0 0 1-78.933333 85.077333L768 853.333333H256a85.333333 85.333333 0 0 1-85.12-78.933333L170.666667 768v-213.333333h128z" fill="#ffffff" p-id="5308"></path><path d="M512 627.498667l219.477333-219.477334h-120.704L512 506.88 413.141333 408.021333H292.522667L512 627.498667z" fill="#ffffff" p-id="5309"></path><path d="M554.666667 528V167.978667h-85.333334v360.021333h85.333334z" fill="#ffffff" p-id="5310"></path></svg>`;
					if(isDetail){
						matchedDiv.insertBefore(cloneNode, matchedDiv.children[0]);
					}else{
						cloneNode.style.right=(166)+"px";
						matchedDiv.parentNode.insertBefore(cloneNode, matchedDiv);
					}
					cloneNode.title = "点击下载视频（高清无水印）";
					cloneNode.addEventListener("click",()=>{
						this.download(window.location.href,cloneNode);
					});
				}
			}
		}, 2000);
	}
}

try{
	if(!functionController || functionController.abroadVideoHelper){
		(new Tiktok()).start();
	}
}catch(e){
	console.log("国外视频解析：error："+e);
}
	function ShortVideoDownloader() {
  this.douyinVideoDownloader = function() {
    /**
     * 此处代码有借鉴lazyfrog的代码，在原来代码的基础上修改了部分功能和bug修复
     * 脚本地址：https://greasyfork.org/zh-CN/scripts/469521
     * 特此注明
     */
    const _self = this;

    function run() {
      if (window.location.host !== "www.douyin.com") {
        return;
      }
      const downloadOption = [{
        name: '',
        id: 'toServer'
      }, {
        name: '打开视频(可下载)',
        id: 'toLink'
      }];
      const videoElements = document.querySelectorAll('video');
      if (videoElements.length === 0) return;

      const playVideoElements = [];
      videoElements.forEach(function(element) {
        const autoplay = element.getAttribute('autoplay');
        if (autoplay !== null) {
          playVideoElements.push(element);
        }
      });

      const videoContainer = location.href.indexOf('modal_id') !== -1 ?
        playVideoElements[0] :
        playVideoElements[playVideoElements.length - 1];

      if (!videoContainer) return;

      const url = (videoContainer && videoContainer.children.length > 0 && videoContainer.children[0].src) ?
        videoContainer.children[0].src :
        videoContainer.src;

      let videoId;
      let resp = url.match(/^(https:)?\/\/.+\.com\/([a-zA-Z0-9]+)\/[a-zA-Z0-9]+\/video/);
      let res = url.match(/blob:https:\/\/www.douyin.com\/(.*)/);
      if (resp && resp[2]) {
        videoId = resp[2];
      } else if (res && res[1]) {
        videoId = res[1];
      } else {
        videoId = videoContainer.getAttribute('data-xgplayerid');
      }

      const playContainer = videoContainer.parentNode.parentNode.querySelector('.xg-right-grid');
      if (!playContainer) return;

      const videoDownloadDom = playContainer.querySelector('#scriptVideoDownload' + videoId);
      if (videoDownloadDom) {
        const dom = playContainer.querySelectorAll('.xgplayer-playclarity-setting');
        dom.forEach(function(d) {
          const btn = d.querySelector('.btn');
          if (d.id !== 'scriptVideoDownload' + videoId && btn && btn.innerText === '下载') {
            d.parentNode.removeChild(d);
          }
        });
        return;
      }

      if (videoContainer && playContainer) {
        const playClarityDom = playContainer.querySelector('.xgplayer-playclarity-setting');
        if (!playClarityDom) return;

        const palyClarityBtn = playClarityDom.querySelector('.btn');
        if (!palyClarityBtn) return;

        const downloadDom = playClarityDom.cloneNode(true);
        downloadDom.setAttribute('id', 'scriptVideoDownload' + videoId);

        if (location.href.indexOf('search') === -1) {
          downloadDom.style.cssText = 'margin-top:-68px;padding-top:100px;padding-left:20px;padding-right:20px;';
        } else {
          downloadDom.style.cssText = 'margin-top:0px;padding-top:100px;';
        }

        const downloadText = downloadDom.querySelector('.btn');
        downloadText.innerText = '下载';
        downloadText.style.cssText = 'font-size:14px;font-weight:600;';
        playClarityDom.after(downloadDom);
		
		downloadDom.addEventListener("click", ()=>{
			window.open("https://www.tool77.com/zh-CN/v/downloader?url="+encodeURIComponent(window.location.href));
		});
      }
    }
	
    setInterval(function() {
      run();
    }, 500);
  };
  this.kuaishouVideoDownloader = function() {
    if (window.location.host !== "www.kuaishou.com") {
      return;
    }
    window.addEventListener('load', function() {
      async function downloader() {
        let kuaishouVideoDownloder = document.querySelector("#kuaishou-video-downloder");
        if (!kuaishouVideoDownloder) {
          const downloadDIV = document.createElement("div");
          downloadDIV.style.cssText = "cursor:pointer;width:50px;height:40px;line-height:40px;text-align:center;background-color:#FFF;color:#000;position:fixed;top:200px;left:0px;z-index:999;";
          downloadDIV.innerText = "下载";
          downloadDIV.setAttribute('id', 'kuaishou-video-downloder');
          document.body.appendChild(downloadDIV);

          downloadDIV.addEventListener("click", function(e) {
            const videoDom = document.querySelector('.player-video');
            if (!videoDom) {
              console.log('没有找到DOM');
              return;
            }
            const videoSrc = videoDom.getAttribute('src');
            if (videoSrc.match(/^blob/)) {
              console.log('blob视频无法下载');
              return;
            }
            commonFunctionObject.GMopenInTab(videoSrc);
          });
        }
      }

      document.querySelectorAll(".switch-item").forEach(function(value) {
        value.addEventListener("click", function() {
          downloader();
        });
      });
      downloader();
      setInterval(function() {
        const kuaishouVideoDownloder = document.querySelector("#kuaishou-video-downloder");
        if (kuaishouVideoDownloder) {
          if (window.location.href.match(/https:\/\/www\.kuaishou\.com\/short-video\/.*/)) {
            kuaishouVideoDownloder.style.display = "block";
          } else {
            kuaishouVideoDownloder.style.display = "none";
          }
        }
      }, 800);
    });
  };
  this.start = function() {
    this.douyinVideoDownloader();
    this.kuaishouVideoDownloader();
  };
}

try {
  if (!functionController || functionController.shortVideoDownload) {
    (new ShortVideoDownloader()).start();
  }
} catch (e) {
  console.log("短视频去水印下载：error：" + e);
}
	
	function OverseaNavigation(){
	this.number = Math.ceil(Math.random()*100000000);
	this.containerHight = 150;
	this.GMopenInTab = function(url, options={"active":true, "insert":true, "setParent":true}){
		if (typeof GM_openInTab === "function") {
			GM_openInTab(url, options);
		} else {
			GM.openInTab(url, options);
		}
	};
	this.addStyle = function(css){
		GM_addStyle(css);
	};
	this.request = function(mothed, url, param){   //网络请求
		return new Promise(function(resolve, reject){
			GM_xmlhttpRequest({
				url: url,
				method: mothed,
				data:param,
				onload: function(response) {
					var status = response.status;
					var playurl = "";
					if(status==200||status=='200'){
						var responseText = response.responseText;
						resolve({"result":"success", "responseText":responseText});
					}else{
						reject({"result":"error", "responseText":null});
					}
				}
			});
		})
	};
	this.isRun = function(origin) {
	  const host = window.location.host;
	  const regexGroups = {
		  isRunServer: [
			  /cloudways\.com/, /getresponse\.com/, /bandwagonhost\.com/,
			  /moosend\.com/, /domainracer\.com/, /namesilo\.com/, /digitalocean\.com/, /virmach\.com/,
			  /vultr\.com/, /hostwinds\.com/, /west\.cn/, /ucloud\.cn/
		  ],
		  isRunEncrypto: [
			  /changelly\.com/, /bybit\.com/, /gate\.io/, /gate\.com/, /kucoin\.com/, /coinmama\.com/,
			  /cex\.io/, /paxful\.com/, /htx\.com/, /mexc\.com/, /bitget\.com/, /freebitco\.in/, /crypto\.com/,
			  /okx\.com/, /coinbase\.com/, /binance\.com/, /wazirx\.com/, /coindcx\.com/, /zebpay\.com/, 
			  /bitbns\.com/, /kraken\.com/
		  ],
		  isRunAffi: [
			  /wps\.com/
		  ]
	  };
	  const result = { isRunServer: false, isRunEncrypto: false, isRunAffi: false };
	  for (const [key, regexs] of Object.entries(regexGroups)) {
		  if (regexs.some(regex => regex.test(host))) {
			  result[key] = true;
			  break;
		  }
	  }
	  return result;
	};
	this.addParamToURL = function(url, track) {
	    const [baseUrl, hash] = url.split('#'); // 分离#部分
	    const separator = baseUrl.includes('?') ? '&' : '?'; // 确定?或&
	    const newUrl = `${baseUrl}${separator}${track}`;
	    return hash ? `${newUrl}#${hash}` : newUrl;
	};
	this.temporary=function(platform){
		const anchorRun=()=>{
			document.querySelectorAll('a:not([anchor="true"])').forEach((element,index)=>{
				var href = element.getAttribute("href");
				element.setAttribute("anchor","true");
				element.setAttribute("anchor-url",href);
				if(href && href.indexOf("javascript:")==-1 && href.indexOf(platform.track)==-1){
					element.setAttribute("rel", "noreferrer nofollow");
					href = this.addParamToURL(href, platform.track);
					element.setAttribute("href", href);
					element.setAttribute("anchor-i-url",href);
				}
			});
		}
		anchorRun();
		setInterval(function(){
		  anchorRun();
		},1000);
	};
	this.generateHtml=function(html){
		if(!html){
			return;
		}
		const number = this.number;
		const containerHight = this.containerHight;
		var css=`
			#server-containerx`+number+`{
				display: block;
				bottom: -`+containerHight+`px;
				clear: none !important;
				float: none !important;
				left: 50%;
				margin: 0px !important;
				max-height: none !important;
				max-width: none !important;
				opacity: 1;
				overflow: visible !important;
				padding: 0px !important;
				position: fixed;
				right: auto !important;
				top: auto !important;
				vertical-align: baseline !important;
				visibility: visible !important;
				z-index: 2147483647;
				background: rgb(250, 250, 250) !important;
				transition-duration:0.8s!important;
				-webkit-transition-duration:0.8s!important;
				transform:translateX(-50%);
				width: 60% !important;
				height: `+containerHight+`px !important;
				max-width:700px!important;
				box-sizing: border-box!important;
				box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
			}
			#server-containerx`+number+`:hover{
				-webkit-box-shadow: 0 4px 12px rgba(0,0,0,.08);
				box-shadow: 0 4px 12px rgba(0,0,0,.08);
			}
			#server-container-decoration`+number+`{
				inset: auto !important;
				clear: none !important;
				display: block !important;
				float: none !important;
				height: 5px !important;
				margin: 0px !important;
				max-height: none !important;
				max-width: none !important;
				opacity: 1 !important;
				overflow: visible !important;
				padding: 0px !important;
				position: relative !important;
				vertical-align: baseline !important;
				visibility: visible !important;
				width: auto !important;
				z-index: 1 !important;
				background-color: #e4eaf6 !important;
				box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
			}
			#server-container-expand`+number+`{
				cursor:pointer;
				position:absolute;
				width:50px;
				height:30px;
				background-color: #e4eaf6;
				top:-30px;
				left:50%;
				transform:translateX(-50%);
				border-radius: 5px 5px 0px 0px;
			}
			#server-container-expand`+number+`:hover{

			}
			#server-container-expand`+number+`>svg{
				width:50px;
				height:30px;
			}
			#server-container-expand`+number+`>svg:hover{
				transition: 0.6s;
				transform: scale(1.1);
			}
			.server-container-column9980x{
				position:relative;
			}
			.server-container-column9980x:not(:last-child):after{
				position: absolute;
				height: calc(100% - 4em);
				right: 0px;
				content: '';
				width: 0px;
				border-left: solid #e6e7eb 2px;
				top: 50%;
				transform: translateY(-50%);
			}
			#server-container-body`+number+`{
				width:100%;
				height:100%;
			}
		`;
		var html=`
			<div id="server-containerx`+number+`">
				<div id="server-container-decoration`+number+`">
					<div id="server-container-expand`+number+`">
						<svg t="1719906770072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4303" width="256" height="256"><path d="M444 136.3L123.8 324.8l3.2 371.5 323.3 183 320.2-188.5-3.2-371.5z" fill="#FFFFFF" p-id="4304"></path><path d="M630 287.6l-20.1-11.4-279.7 164.7L333 767l20.1 11.3-2.8-326z" fill="#06F3FF" p-id="4305"></path><path d="M746.8 489.8l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9-6.2-13.8-3.4z" fill="#005BFF" p-id="4306"></path><path d="M638.6 534c-1.6-0.9-3.4-1.3-5.2-1.3-4.9 0-9.9 2.6-13 4.6-20.6 13-38 47.5-38 75.2 0 12.2 3.4 21.4 9.1 24.5 6 3.3 14-0.6 18.2-3.3 20.6-13 38-47.5 38-75.2 0-12.2-3.4-21.3-9.1-24.5z m-9.9 50.4l-8.6 5.2c-1.6 1-3.4 1.4-5.2 1.4-3.4 0-6.7-1.7-8.6-4.8-2.9-4.7-1.3-10.9 3.4-13.7l8.6-5.2c4.7-2.9 10.9-1.3 13.7 3.4 3 4.7 1.5 10.9-3.3 13.7z" fill="#E6E6E6" p-id="4307"></path><path d="M618.4 567.3l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9.1-6.3-13.8-3.4z" fill="#E6E6E6" p-id="4308"></path><path d="M444 136.3L123.8 324.8l3.2 371.5 323.3 183 320.1-188.5-3.2-371.5-323.2-183zM166.8 672.9L164 347.6l280.3-165.1 71.2 40.3-280.3 165.1 2.8 325.3-71.2-40.3z m262.8 148.7l-76.5-43.3L333 767l-74.9-42.4-2.8-325.3 280.4-165.1 74.2 42 20.1 11.4 77.8 44-281 165.5 2.8 324.5z m40 0L467 519.8l260.7-153.5 2.6 301.7-260.7 153.6z m287.6-314.7l-8.6 5.2c-1.6 1-3.4 1.4-5.2 1.4-3.4 0-6.7-1.7-8.6-4.8-2.9-4.7-1.3-10.9 3.4-13.7l8.6-5.2c4.7-2.9 10.9-1.3 13.7 3.4 2.9 4.7 1.4 10.9-3.3 13.7z" fill="#005BFF" p-id="4309"></path><path d="M704 515.6l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.7-2.9 6.2-9 3.4-13.7-2.9-4.7-9-6.2-13.8-3.4zM827.2 430.8c-5.5 0-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-5.5-4.5-10-10-10zM837.2 390.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM837.2 340.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM837.2 290.8c0-5.5-4.5-10-10-10s-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10zM803.4 467.4c-2.9-4.7-9-6.3-13.7-3.4l-8.6 5.2c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l8.6-5.2c4.6-2.9 6.1-9 3.3-13.7zM665.3 540.1c-3-10.8-8.9-19.1-17.1-23.6-11.2-6.1-24.8-4.8-38.5 3.9-26.5 16.8-47.3 57.2-47.3 92.1 0 19.9 7.1 35.2 19.5 42 4.6 2.5 9.6 3.8 14.9 3.8 7.5 0 15.6-2.6 23.7-7.7 25.9-16.4 46.4-55.4 47.3-89.7l3.9-2.4c4.7-2.9 6.2-9 3.4-13.7-2.2-3.4-6.1-5.1-9.8-4.7z m-55.6 93.7c-4.2 2.7-12.2 6.6-18.2 3.3-5.7-3.1-9.1-12.3-9.1-24.5 0-27.7 17.4-62.2 38-75.2 3.1-1.9 8.1-4.6 13-4.6 1.8 0 3.6 0.4 5.2 1.3 5.7 3.1 9.1 12.3 9.1 24.5 0 27.7-17.4 62.1-38 75.2z" fill="#005BFF" p-id="4310"></path><path d="M891.2 321.7c-5.5 0-10 4.5-10 10v156.4l-81.7 49.3c-4.7 2.9-6.2 9-3.4 13.7 1.9 3.1 5.2 4.8 8.6 4.8 1.8 0 3.5-0.5 5.2-1.4l91.4-55.1V331.7c-0.1-5.5-4.6-10-10.1-10zM817.3 239.6c-0.1 0.4-0.1 0.8-0.1 1.3v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-0.4 0-0.9-0.1-1.3 23.4-4.6 41-25.3 41-50 0-28.2-22.8-51-51-51s-51 22.8-51 51c0 24.7 17.7 45.4 41.2 50z" fill="#005BFF" p-id="4311"></path></svg>
					</div>
				</div>
				<div id="server-container-body`+number+`">`+html+`</div>
			</div>
		`;

		//插入骨架
		this.addStyle(css);
		document.body.insertAdjacentHTML("beforeend", html);

		//点击展开面板
		const expandOrShow =(forceClose = false) =>{
		const serverContainerx = document.querySelector("#server-containerx"+number);
		var {bottom, height} = window.getComputedStyle(serverContainerx);
		if(bottom=="0px" || forceClose){
			bottom = "-"+height;
		}else{
			bottom = "0px";
		}
		serverContainerx.style.bottom = bottom;
		}
		document.querySelector("#server-container-expand"+number).addEventListener("click",function(){
			expandOrShow();
		});

		//滚动关闭
		var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const startContainer = () =>{
		setTimeout(function(){
			window.addEventListener("scroll", function () {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				if (scrollTop - lastScrollTop > 30) { //向下滚动
					expandOrShow(true);
				} else { //向上滚动

				}
				lastScrollTop = scrollTop;
			});
		}, 1500);
		}
		startContainer();
	};
	this.addEventListener=function(origin){
		const self = this;
		const number = this.number;
		const href = window.location.href;
		const url = "https://oversea.mimixiaoke.com/api/discover/"+origin;
		self.request("post", url, JSON.stringify({"no":0})).then((data)=>{
			if(data.result=="success" && !!data.responseText){
				const { html, platforms } = JSON.parse(data.responseText).data;
				self.generateHtml(html);
				
				let platform = null;
				for(let i=0; i<platforms.length; i++){
					if((new RegExp(platforms[i].match.replace(/\\\\/g,"\\"), "i")).test(href)){
						platform = platforms[i];
						break;
					}
				}
				if(platform){
					const storageKey = "__anchor__"+window.location.host;
					if(platform.support_append || !!sessionStorage.getItem(storageKey)){
						self.temporary(platform);
					}else{ //promo_link不需要
						const pathname = window.location.pathname;
						const targets = platform.targets;
						if(targets){
							for(let i=0; i<targets.length; i++){
								const target = targets[i];
								if((new RegExp(target.match.replace(/\\\\/g,"\\"), "i")).test(pathname)){
									sessionStorage.setItem(storageKey, "true");
									window.location.href = target.rpl;
									break;
								}
							}
						}
					}
				}
			}
		}).catch((error)=>{
			console.log(error);
		});
	};
	this.start=function(){
		const {isRunServer, isRunEncrypto, isRunAffi} = this.isRun();
		let origin = null;
		if(isRunServer){
			origin = "server";
		}
		if(isRunEncrypto){
			origin = "encrypto";
		}
		if(isRunAffi){
			origin = "affi";
		}
		if(origin){
			this.addEventListener(origin);
		}
	};
}
(new OverseaNavigation()).start();
})();
(function () {
  'use strict';

  
  /*!
  * Copyright (c) 2024 - 2026, Thaddeus310,PeterParker. All rights reserved.
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  */


  const ScriptConst = {
    "lang": (() => {
      const navLang = navigator.language || navigator.userLanguage || "en";
      if (navLang.startsWith("zh")) {
        return navLang === "zh-CN" || navLang === "zh-TW" ? navLang : "zh-CN";
      }
      return navLang.slice(0, 2).toLowerCase() || "en";
    })(),
    "isDev": false,
    "isDebug": false,
    "version": "1.0.1",
    "number": "104",
    "currentHost": window.location.host,
    "currentUrl": window.location.href
  };
  const PlatformConst = {
    "x": { "p": "x", "match": /twitter|x\.com$/ },
    "youtube": { "p": "youtube", "match": /youtube\.com$/ },
    "google": { "p": "google", "match": /google\.com$/ },
    "tiktok": { "p": "tiktok", "match": /www\.tiktok\.com/ },
    "cobalt": { "p": "cobalt", "match": /cobalt\.tools/ }
  };

  var __async$q = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Logger = {
    log: function(level = "info", ...messages) {
    }
  };
  const Tools = {
    decryptStr: function(str) {
      try {
        if (!str) {
          return str;
        }
        let result = atob(str);
        return result.split("").reverse().join("");
      } catch (e) {
      }
      return null;
    },
    encryptStr: function(str) {
      try {
        if (!str) {
          return str;
        }
        let result = str.split("").reverse().join("");
        return btoa(result);
      } catch (e) {
      }
      return null;
    },
    getOtherPlatform: function() {
      let platform = null;
      const currentHost = window.location.host;
      for (let key in PlatformConst) {
        if (PlatformConst[key].match.test(currentHost)) {
          platform = PlatformConst[key].p;
          break;
        }
      }
      return platform;
    },
    removeAnchorsByNode: function(node) {
      const tagName = node.tagName;
      if (!tagName)
        return;
      const exist = ["A", "IMG", "DIV", "SPAN", "LABEL", "TABLE", "TR", "TD", "CANVAS"].some((name) => name === tagName);
      if (exist) {
        node.removeAttribute("data-spm-anchor-id");
        for (let i = 0; i < node.childNodes.length; i++) {
          this.removeAnchorsByNode(node.childNodes[i]);
        }
      }
    },
    openInTab: function(url, options = { "active": true, "insert": true, "setParent": true }) {
      if (typeof GM_openInTab === "function") {
        GM_openInTab(url, options);
      } else {
        GM.openInTab(url, options);
      }
    },
    onPageLoad: function(callback) {
      if (document.readyState === "complete") {
        callback();
      } else {
        window.addEventListener("DOMContentLoaded", callback, { once: true });
        window.addEventListener("load", callback, { once: true });
      }
    },
    request: function(method, url, param, headers = { "Content-Type": "application/json;charset=UTF-8" }, timeout = 20 * 1e3) {
      if (!url) {
        return Promise.reject({ "code": "exception", "result": null });
      }
      return new Promise((resolve, reject) => {
        const config = {
          method: method.toUpperCase(),
          url,
          timeout,
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              resolve({ "code": "success", "result": response.responseText });
            } else {
              reject({ "code": "error", "result": response.statusText });
            }
          },
          ontimeout: function(error) {
            reject({ "code": "error", "result": error });
          },
          onerror: function(error) {
            reject({ "code": "error", "result": error });
          }
        };
        if (config.method === "POST") {
          config.headers = headers != null ? headers : { "Content-Type": "application/json" };
          if (JSON.stringify(config.headers).indexOf("application/json") != -1) {
            config.data = JSON.stringify(param);
          } else {
            config.data = param;
          }
        } else if (config.method === "GET") {
          config.headers = headers != null ? headers : { "Content-Type": "application/json" };
          config.data = param;
        }
        GM_xmlhttpRequest(config);
      });
    },
    crossRequest: function(method = "GET", url, param = {}, headers = { "Content-Type": "application/json;charset=UTF-8" }, timeout = 20 * 1e3) {
      if (!url) {
        return Promise.reject({ "code": "exception", "result": null });
      }
      const config = { method: method.toUpperCase(), headers };
      const controller = new AbortController();
      const signal = controller.signal;
      config.signal = signal;
      if (config.method === "POST") {
        config.headers = headers != null ? headers : { "Content-Type": "application/json" };
        config.body = JSON.stringify(param);
      }
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      return fetch(url, config).then((response) => response.ok ? response.text() : Promise.reject(response.statusText)).then((result) => {
        clearTimeout(timeoutId);
        return { "code": "success", "result": result };
      }).catch((error) => {
        clearTimeout(timeoutId);
        if (error.name === "AbortError") {
          return { "code": "error", "result": "Request timeout" };
        }
        return { "code": "error", "result": error };
      });
    },
    getGoodsIdByLink: function(url = window.location.href) {
      if (url.indexOf("?") != -1) {
        url = url.split("?")[0];
      }
      if (url.indexOf("#") != -1) {
        url = url.split("#")[0];
      }
      const suffix = "html|htm|id|p";
      let regex = new RegExp("\\/([^\\/]*?)\\.(" + suffix + ")");
      if (/lazada\./.test(url)) {
        regex = new RegExp("-i(\\d+)(?:-s(\\d+))?\\.html");
      } else if (/ebay\./.test(url)) {
        regex = new RegExp("\\/itm\\/(\\d+)");
      } else if (/banggood\./.test(url)) {
        regex = new RegExp("-p-(\\d+)\\.html");
      } else if (/amazon\./.test(url)) {
        regex = new RegExp("\\/(?:dp|gp\\/product|gp\\/aw\\/d|gp\\/offer-listing)\\/([A-Za-z0-9]{8,15})");
      }
      const match = url.match(regex);
      return match ? match[1] : null;
    },
    getParamterBySearch: function(paramsString = window.location.href, tag) {
      if (paramsString.indexOf("?") != -1) {
        paramsString = paramsString.split("?")[1];
      }
      const params = new URLSearchParams(paramsString);
      return params.get(tag);
    },
    waitForElementByInterval: function(selector, target = document.body, allowEmpty = true, delay = 10, maxDelay = 10 * 1e3) {
      return new Promise((resolve, reject) => {
        let totalDelay = 0;
        let element = target.querySelector(selector);
        let result = allowEmpty ? !!element : !!element && !!element.innerHTML;
        if (result) {
          resolve(element);
        }
        const elementInterval = setInterval(() => {
          if (totalDelay >= maxDelay) {
            clearInterval(elementInterval);
            resolve(null);
          }
          element = target.querySelector(selector);
          result = allowEmpty ? !!element : !!element && !!element.innerHTML;
          if (result) {
            clearInterval(elementInterval);
            resolve(element);
          } else {
            totalDelay += delay;
          }
        }, delay);
      });
    },
    randomNumber: function() {
      return Math.ceil(Math.random() * 1e8);
    },
    elementInContainer: function(container, element) {
      return container.contains(element);
    },
    mustGetElement: function(handler) {
      return __async$q(this, null, function* () {
        const getElements = (h) => __async$q(this, null, function* () {
          const names = h.split("@").filter((s) => s.length);
          const promises = names.map((eleName) => {
            if (eleName === "body")
              return Promise.resolve(document.body);
            if (eleName === "html")
              return Promise.resolve(document.documentElement);
            return this.waitForElementByInterval(eleName, document.body, true, 10, 1500);
          });
          return promises.length ? Promise.race(promises) : null;
        });
        let element = yield getElements(handler);
        if (element)
          return element;
        return new Promise((resolve) => {
          const waitInterval = setInterval(() => __async$q(this, null, function* () {
            const el = yield getElements(handler);
            if (el) {
              clearInterval(waitInterval);
              resolve(el);
            }
          }), 2e3);
        });
      });
    },
    loopTask: function(callback, delay = 1500) {
      callback();
      setInterval(() => {
        callback();
      }, delay);
    },
    distinguishRemoveAndTry: function(distinguish, callback) {
      const distinguishElements = distinguish.map((name) => document.querySelector("*[name='" + name + "']"));
      const validateRs = distinguishElements.some((ele) => ele === null || ele === void 0);
      if (validateRs) {
        distinguishElements.reverse().forEach((element) => {
          if (element) {
            element.remove();
          }
        });
        callback();
      }
    },
    getDomain: function(url) {
      try {
        const hostname = new URL(url).hostname;
        const parts = hostname.split(".");
        if (parts.length > 2) {
          return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
        }
        return hostname;
      } catch (error) {
        return null;
      }
    },
    getCommonMarketplace: function(url = window.location.href) {
      try {
        const domainParts = new URL(url).hostname.split(".");
        const countryCode = domainParts[domainParts.length - 1];
        return countryCode;
      } catch (error) {
      }
      return null;
    },
    getDocumentBody: function() {
      return new Promise((resolve, reject) => {
        if (document.body) {
          resolve(document.body);
          return;
        }
        const checkBody = setInterval(function() {
          if (document.body) {
            clearInterval(checkBody);
            resolve(document.body);
          }
        }, 50);
      });
    }
  };

  const Toast = {
    show: function(params) {
      let time = params.time;
      let background = params.background;
      let color = params.color;
      let position = params.position;
      let defaultMarginValue = 50;
      if (time == void 0 || time == "") {
        time = 1500;
      }
      if (position == void 0 || position == "") {
        position = "center-bottom";
      }
      const style = document.createElement("style");
      style.textContent = `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.toast-style-kk998y{position:fixed;background:rgba(0,0,0,0.7);color:#fff;font-size:14px;line-height:1;padding:10px;border-radius:3px;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);z-index:999999999999999999999999999;white-space:nowrap}.fadeOut{animation:fadeOut .5s}.fadeIn{animation:fadeIn .5s}`;
      const el = document.createElement("div");
      if (background != void 0 && background != "") {
        el.style.backgroundColor = background;
      }
      if (color != void 0 && color != "") {
        el.style.color = color;
      }
      el.setAttribute("class", "toast-style-kk998y");
      el.innerText = params.message;
      el.style.zIndex = 999999999;
      if (position === "center-bottom") {
        el.style.bottom = defaultMarginValue + "px";
      } else {
        el.style.top = defaultMarginValue + "px";
      }
      document.body.appendChild(el);
      document.head.appendChild(style);
      el.classList.add("fadeIn");
      setTimeout(function() {
        el.classList.remove("fadeIn");
        el.classList.add("fadeOut");
        el.addEventListener("animationend", function() {
          document.body.removeChild(el);
          document.head.removeChild(style);
        });
        el.addEventListener("webkitAnimationEnd", function() {
          document.body.removeChild(el);
          document.head.removeChild(style);
        });
      }, time);
    }
  };

  const SupportData = {
    supports: null,
    support: null
  };
  const StorageKeys = {
    activatePositionTop: "inspect_activate_position_top",
    token: "inspect_token",
    exchangeInfo: "exchange_info",
    supports: "supports_key",
    featureControl: {
      windowShow: "window_show"
    },
    history: {
      goodsHistory: "goooods_history_key",
      offset: "goooods_wrapper_key",
      maximumRecordsKey: "goooods_max_records_key"
    },
    langue: {
      custom: "custom_langue_key",
      objects: "langue_data_objects_key"
    }
  };
  const DefaultValue = {
    lang: ScriptConst.lang,
    history: {
      historyStorage: { "aliexpress": [], "amazon": [], "shein": [], "shopee": [], "lazada": [], "ebay": [], "bestbuy": [], "banggood": [], "wish": [] },
      offsetWrapper: { right: 10, bottom: 10 },
      records: { min: 10, max: 500, default: 100 },
      toolbarGoodsNum: 4
    },
    exchangeInfoLocal: {
      certificate: "https://www.jtmate.com/api/certificate",
      redirect: "https://www.jtmate.com/mid/redirect?url="
    },
    updateSupportsDelay: 1e3 * 60 * 5,
    updateExchangeInfoDelay: 1e3 * 60 * 10
  };
  const getRequestUrl = () => {
    const baseUrl = "https://ot.shuqiandiqiu.com";
    return {
      supports: { method: "GET", url: baseUrl + "/api/load/conf?origin=support" },
      exchangeInfo: { method: "GET", url: baseUrl + "/api/exchange/info" },
      detectCoupon: { method: "POST", url: baseUrl + "/api/detect/coupon" },
      detectInfo: { method: "POST", url: baseUrl + "/api/detect/info" },
      getLangue: { method: "POST", url: baseUrl + "/api/load/lang" },
      couponQuery: { method: "GET", url: baseUrl + "/api/coupon/query" },
      couponChange: { method: "GET", url: baseUrl + "/api/coupon/change" },
      couponExist: { method: "GET", url: baseUrl + "/api/coupon/exist" },
      couponExistConf: { method: "GET", url: baseUrl + "/api/load/conf" },
      searchEnginExistConf: { method: "GET", url: baseUrl + "/api/load/conf?origin=se" },
      engineScreen: { method: "POST", url: baseUrl + "/api/engine/screen" }
    };
  };

  const StorageUtil = {
    getValue: function(key, defaultValue) {
      return GM_getValue(key, defaultValue);
    },
    setValue: function(key, value) {
      GM_setValue(key, value);
    },
    deleteValue: function(key) {
      GM_deleteValue(key);
    }
  };

  const RequestUtil = {
    request: function(method, url, params) {
      return Tools.request(method, url, params);
    },
    _addExtraParams: function(params) {
      if (!params.hasOwnProperty("url")) {
        params.url = encodeURIComponent(window.location.href);
      }
      if (!params.hasOwnProperty("v")) {
        params.v = ScriptConst.version;
      }
      if (!params.hasOwnProperty("no")) {
        params.no = ScriptConst.number;
      }
      const token = StorageUtil.getValue(StorageKeys.token, "");
      params.token = token;
      return params;
    },
    _baseQuery: function(scopName, params) {
      params = this._addExtraParams(params);
      const { method, url } = getRequestUrl()[scopName];
      let finalUrl = url;
      if (method.toUpperCase() === "GET") {
        finalUrl = finalUrl + "?" + Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
        params = null;
      }
      return this.request(method, finalUrl, params);
    },
    getCouponQuery: function(params) {
      return this._baseQuery("couponQuery", params);
    },
    getCouponChange: function(params) {
      return this._baseQuery("couponChange", params);
    }
  };

  const ItemSearchBaseObj = {
    visitUrl: window.location.href,
    searchAttribute: "loop-task-i9v---search",
    baseUrl: "https://ot.shuqiandiqiu.com",
    cacheRequestMap: {},
    requestAndSaveSate: function(method, url, param) {
      return new Promise((resolve, reject) => {
        const key = "key_" + new Date().getTime();
        const xhr = new XMLHttpRequest();
        this.cacheRequestMap[key] = xhr;
        if (method === "GET") {
          let queryString = "";
          if (param) {
            const params = new URLSearchParams(param);
            queryString = "?" + params.toString();
          }
          xhr.open(method, url + queryString);
          xhr.send();
        } else if (method === "POST") {
          xhr.open(method, url);
          xhr.setRequestHeader("Content - Type", "application/json");
          xhr.send(JSON.stringify(param));
        } else {
          resolve({ "code": "error", "requestKey": key, "result": null });
          return;
        }
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve({ "code": "success", "requestKey": key, "result": xhr.responseText });
              } catch (e) {
                resolve({ "code": "error", "requestKey": key, "result": null });
              }
            } else {
              resolve({ "code": "error", "requestKey": key, "result": null });
            }
          }
        };
      });
    },
    requestConf: function() {
      return new Promise((resolve, reject) => {
        Tools.request("GET", this.baseUrl + "/api/load/conf", null).then((data) => {
          if (data.code == "success" && !!data.result) {
            resolve(data.result);
          } else {
            resolve(null);
          }
        });
      });
    },
    pickupGoodsItem: function(platform, confString) {
      const visitHref = window.location.href;
      const selectorElementList = new Array();
      let confFilter = confString;
      try {
        confFilter = confFilter.replace(/\\\\/g, "\\");
      } catch (e) {
      }
      const confJson = JSON.parse(confFilter)[platform];
      for (let i = 0; i < confJson.length; i++) {
        const itemJson = confJson[i];
        if (!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")) {
          continue;
        }
        const { elements, matches } = itemJson;
        const isMatch = matches.map((reg) => new RegExp(reg, "i").test(visitHref)).some((res) => res);
        if (isMatch) {
          for (let j = 0; j < elements.length; j++) {
            selectorElementList.push({
              "element": elements[j]["element"],
              "findA": elements[j]["findA"],
              "page": elements[j]["page"],
              "price": elements[j]["price"]
            });
          }
        }
      }
      return selectorElementList;
    },
    getGoodsLinkByElement: function(element, findTag) {
      let searchElement = null;
      if (findTag == "this") {
        searchElement = element;
      } else if (/^child@/.test(findTag)) {
        searchElement = element.querySelector(findTag.replace(/^child@/, ""));
      }
      return searchElement;
    },
    getGoodsPriceByElement: function(element, tag) {
      if (!element || !tag) {
        return "";
      }
      const goodsPrice = element.querySelector(tag);
      let price = goodsPrice == null ? "" : goodsPrice.innerText;
      if (price) {
        price = price.replace(/\s|,/g, "");
      }
      return price;
    },
    getGoodsPrice: function(content) {
      content = content.replace(/,/g, "");
      const amount = content.match(/(?:₱|\$|฿|₫|Rp|RM|￥)\n?\d+(?:(?:\.\d{1,3})*)?/);
      let price = amount ? amount[0] : "";
      if (price && price.indexOf("Rp") != -1) {
        price = price.replace(/\./g, "");
      }
      price = price.replace(/\n|,/g, "");
      return price;
    },
    isElementDisplayed: function(element) {
      if (element.offsetParent !== null) {
        return true;
      }
      const style = window.getComputedStyle(element);
      return style.display !== "none";
    },
    calcRequestGroup: function(array, itemsPerGroup = 10) {
      const groups = [];
      for (let i = 0; i < array.length; i += itemsPerGroup) {
        groups.push(array.slice(i, i + itemsPerGroup));
      }
      return groups;
    }
  };

  var __async$p = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Aliexpress = {
    languageStorageKey: "aliexpress-language-key",
    currencyStorageKey: "aliexpress-currency-key",
    marketplaceStorageKey: "aliexpress-marketplace-key",
    checkDomInsertRs: true,
    getLang: function() {
      const host = window.location.host;
      let lang = "en";
      if (/^(us|ko|uk|fr|de|it|ca|au|jp|ja|he|kr|ru|br|in|es|mx|pl|tr|ar|id|th|vn|sg|my|ph|be|nl|se|ch|no|dk|at|ie|fi|pt|gr|hu|cz|bg|ro|ua|il|sa|eg|ir|pk|iq|af|ly|et|gh|ke|ng|za|tz|mg|mw|zm|bw|sn|cm|ci|gh|ma|tn|mr|mu|om|kw|qa|bh|ae|lb|jo|sy|lb|il|ps|kr|cl|pe|uy|ec|ve|bo|gt|pa|hn|ni|cr|sv|gt|sl|lr|sd|er|dj|et|mw|mz|ao|tz|zm|zw|mw|na|bw|ls|mg|km)\.aliexpress\.com$/.test(host)) {
        lang = host.split(".")[0];
      } else if (/^www\.aliexpress\.com$/.test(host)) {
        lang = "en";
      } else if (/^aliexpress\.ru$/.test(host)) {
        lang = "ru";
      }
      GM_setValue(this.languageStorageKey, lang);
      return lang;
    },
    getMarketplace: function(marketplaceHandler) {
      return __async$p(this, null, function* () {
        var _a, _b;
        let countryCode = "";
        const host = window.location.host;
        if (/^(us|ko|uk|fr|de|it|ca|au|jp|ja|he|kr|ru|br|in|es|mx|pl|tr|ar|id|th|vn|sg|my|ph|be|nl|se|ch|no|dk|at|ie|fi|pt|gr|hu|cz|bg|ro|ua|il|sa|eg|ir|pk|iq|af|ly|et|gh|ke|ng|za|tz|mg|mw|zm|bw|sn|cm|ci|gh|ma|tn|mr|mu|om|kw|qa|bh|ae|lb|jo|sy|lb|il|ps|kr|cl|pe|uy|ec|ve|bo|gt|pa|hn|ni|cr|sv|gt|sl|lr|sd|er|dj|et|mw|mz|ao|tz|zm|zw|mw|na|bw|ls|mg|km)\.aliexpress\.com$/.test(host)) {
          countryCode = host.split(".")[0];
        } else {
          countryCode = host.split(".").slice(-1)[0];
        }
        let marketplace = GM_getValue(this.marketplaceStorageKey, null);
        const defaultMarketplace = { countryCode, className: "", html: "" };
        if (marketplaceHandler && !/\.ru/.test(host)) {
          const handlerElement = yield Tools.waitForElementByInterval(marketplaceHandler, document.body, true, 50, 2 * 1e3);
          if (handlerElement) {
            marketplace = {
              countryCode,
              className: (_a = handlerElement.className) != null ? _a : "",
              html: (_b = handlerElement.outerHTML) != null ? _b : ""
            };
            GM_setValue(this.marketplaceStorageKey, marketplace);
          }
        }
        if (!marketplace) {
          marketplace = defaultMarketplace;
        }
        return encodeURIComponent(JSON.stringify(marketplace));
      });
    },
    getCurrency: function() {
      const host = window.location.host;
      return new Promise((resolve, reject) => {
        if (host.indexOf("aliexpress.ru") != -1) {
          resolve("unknown");
        } else {
          const element = document.querySelector("div[class^='ship-to--menuItem--']") || document.querySelector("div[class^='countryFlag--']");
          if (element) {
            let currency = element.textContent;
            if (currency) {
              currency = encodeURIComponent(currency);
              GM_setValue(this.currencyStorageKey, currency);
              resolve(currency);
            } else {
              resolve("unknown");
            }
          } else {
            resolve("unknown");
          }
        }
      });
    },
    detail: function(marketplaceHandler) {
      return __async$p(this, null, function* () {
        const visitUrl = window.location.href;
        const validate = [/\/item\/[^\/]*?\.html\?/, /\/item\/[^\/]*?\.html$/].map((reg) => reg.test(visitUrl)).some((rs) => rs == true);
        if (!validate)
          return;
        const language = this.getLang();
        const currency = yield this.getCurrency();
        const marketplace = yield this.getMarketplace(marketplaceHandler);
        const id = Tools.getGoodsIdByLink(visitUrl);
        try {
          const params = {
            "ids": id,
            "qu": "",
            "p": SupportData.support.p,
            "lang": language,
            "mul": false,
            "currency": currency,
            "marketplace": marketplace
          };
          const data = yield RequestUtil.getCouponQuery(params);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, language, currency, marketplace);
          }
        } catch (e) {
        }
      });
    },
    detailAnalyze: function(json, language, currency, marketplace) {
      return __async$p(this, null, function* () {
        this.checkDomInsertRs = false;
        try {
          if (!json)
            return;
          let couponResult = null;
          let qrcodeResult = null;
          if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
            const { handler, css, html, templateId, distinguish, hint } = json.data;
            var mid = null;
            if (json.data.hasOwnProperty("mid")) {
              mid = json.data["mid"];
            }
            GM_addStyle(css);
            const element = yield Tools.mustGetElement(handler);
            Logger.log("info", "coupon insert：element", element);
            if (element) {
              couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
            }
          }
          if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
            const { iden, html, mount, distinguish } = json.mscan;
            const id = json.id;
            const promiseResultArray = [];
            const elementPromise = Tools.mustGetElement(mount);
            const params = {
              "id": id,
              "lang": language,
              "platform": SupportData.support.p,
              "currency": currency,
              "marketplace": marketplace
            };
            const reqPromise = RequestUtil.getCouponChange(params);
            promiseResultArray.push(elementPromise, reqPromise);
            const allResult = yield Promise.all(promiseResultArray);
            let element = null, qrcodeData = null;
            for (let i = 0; i < allResult.length; i++) {
              if (allResult[i]) {
                if (allResult[i].hasOwnProperty("code")) {
                  qrcodeData = allResult[i];
                } else {
                  element = allResult[i];
                }
              }
            }
            Logger.log("info", "qrcocd insert：element", element);
            if (element && qrcodeData) {
              qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
            }
          }
          Tools.loopTask(() => {
            if (couponResult) {
              Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
                this.detailCouponAnalyze(couponResult);
              });
            }
            if (qrcodeResult) {
              Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
                this.detailMscanAnalyze(qrcodeResult);
              });
            }
          });
        } catch (error) {
        } finally {
          this.checkDomInsertRs = true;
        }
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        if (couponCodeElement) {
          const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
          templateIdEle.addEventListener("click", () => {
            GM_setClipboard(promoCode, "txt", () => {
              Toast.show({ "message": hint, "background": "#D3031C" });
              if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
                const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
                setTimeout(() => {
                  if (target === "_blank") {
                    Tools.openInTab(linkDecrypt);
                  } else if (target === "_self") {
                    window.location.href = linkDecrypt;
                  } else if (target === "_replace") {
                    window.location.replace(linkDecrypt);
                  }
                }, delay);
              }
            });
          });
        }
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    trade: function() {
      return __async$p(this, null, function* () {
        const visitUrl = window.location.href;
        const validate = SupportData.support.trade.map((reg) => reg.test(visitUrl)).some((rs) => rs == true);
        if (!validate)
          return;
        const language = yield GM_getValue(this.languageStorageKey, navigator.language);
        const currency = yield GM_getValue(this.currencyStorageKey, "USD");
        const marketplace = yield this.getMarketplace();
        const ids = Tools.getParamterBySearch(window.location.search, "objectId") || Tools.getParamterBySearch(window.location.search, "availableProductShopcartIds") || Tools.getParamterBySearch(window.location.search, "itemId");
        const params = {
          "ids": ids,
          "qu": "",
          "p": SupportData.support.p,
          "lang": language,
          "mul": true,
          "currency": currency,
          "marketplace": marketplace
        };
        const res = yield RequestUtil.getCouponQuery(params);
        if (res.code == "success" && !!res.result) {
          const json = JSON.parse(res.result);
          yield this.tradeAnalyze(json, language);
        }
      });
    },
    tradeAnalyze: function(json, language) {
      return __async$p(this, null, function* () {
        if (!json || !json.handler || !json.css || !json.templateId) {
          return;
        }
        const { handler, css, html, templateId, distinguish } = json;
        GM_addStyle(css);
        let element = yield Tools.mustGetElement(handler);
        Tools.loopTask(() => {
          if (!element) {
            return;
          }
          Tools.distinguishRemoveAndTry(distinguish, () => {
            element.insertAdjacentHTML("afterend", html);
            const templateIdEle = document.querySelector("#" + templateId + ">.item");
            if (templateIdEle) {
              const promoCode = Tools.decryptStr(templateIdEle.querySelector(".copy").getAttribute("data-encryptcode"));
              templateIdEle.addEventListener("click", () => {
                GM_setClipboard(promoCode, "txt", () => {
                  Toast.show({ "message": "copied", "background": "#D3031C" });
                });
              });
              const arrowElement = document.querySelector(".pl-summary__item-arrow-pc");
              if (arrowElement) {
                arrowElement.click();
              }
            }
          });
        });
      });
    },
    removeAnchor: function() {
      setInterval(() => {
        const anchors = document.querySelectorAll("div[name^='ali-gogo-coupon-']");
        anchors.forEach((element) => {
          Tools.removeAnchorsByNode(element);
        });
      }, 3e3);
    },
    start: function() {
      return __async$p(this, null, function* () {
        const { support } = SupportData;
        const visitUrl = window.location.href;
        if (support.detail.test(visitUrl)) {
          this.detail(support.marketplace);
        }
        this.trade();
        this.removeAnchor();
      });
    }
  };

  var __async$o = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const AliexpressSearch = {
    loopIsComplete: true,
    cacheLinkDoms: {},
    isInbusinessPage: function() {
      return /inbusiness\.aliexpress\.com\/web\/search-products/.test(ItemSearchBaseObj.visitUrl);
    },
    isItemLink: function(url) {
      return SupportData.support.detail.test(url);
    },
    pickUpWholesale: function(selectors, language, currency, marketplace, couponExistPer) {
      return __async$o(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements.length);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink2 = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  let id = null;
                  if (this.isItemLink(goodsLink2)) {
                    id = Tools.getGoodsIdByLink(goodsLink2.getAttribute("href"));
                    this.cacheLinkDoms[id] = goodsLink2;
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "platform": SupportData.support.p,
                      "handler": element,
                      "findA": findA,
                      "from": "wholesale"
                    });
                  }
                }
              });
            }
          });
          if (items.length > 0) {
            yield this.search(items, language, currency, marketplace, couponExistPer);
          }
        } catch (e) {
        }
      });
    },
    pickUpInbusiness: function(language, currency, marketplace, couponExistPer) {
      return __async$o(this, null, function* () {
        const validate = this.isInbusinessPage();
        if (!validate)
          return;
        try {
          const iceContainerElement = document.querySelector("#ice-container");
          const loadMoreElement = yield Tools.waitForElementByInterval("#loadMore", iceContainerElement);
          if (loadMoreElement) {
            const array = new Array();
            const containerElement = loadMoreElement.previousElementSibling;
            if (containerElement && containerElement.tagName === "DIV") {
              const childNodes = containerElement.childNodes;
              childNodes.forEach((child) => {
                if (child.tagName === "A" && ItemSearchBaseObj.isElementDisplayed(child) && !child.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const id = Tools.getGoodsIdByLink(child.getAttribute("href"));
                  if (id) {
                    array.push({
                      "id": id,
                      "platform": SupportData.support.p,
                      "handler": child,
                      "from": "inbusiness"
                    });
                    this.cacheLinkDoms[id] = goodsLink;
                  }
                }
              });
            }
            yield this.search(array, language, currency, marketplace, couponExistPer);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, language, currency, marketplace, couponExistPer) {
      const groups = ItemSearchBaseObj.calcRequestGroup(array, couponExistPer);
      const len = groups.length;
      return new Promise((resolve, reject) => {
        if (len <= 0) {
          resolve("complete");
          return;
        }
        const promises = [];
        for (let i = 0; i < groups.length; i++) {
          promises.push(this.createItemHtml(groups[i], language, currency, marketplace));
        }
        Promise.all(promises).then((data) => {
          resolve("complete");
        });
      });
    },
    createItemHtml: function(group, language, currency, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ",";
            group[i].handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&lang=" + language + "&no=104&v=1.0.1&currency=" + currency + "&marketplace=" + marketplace;
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>");
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            Logger.log("info", "json", json);
            let isBroken = false;
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              const currentId = elementA ? Tools.getGoodsIdByLink(elementA.getAttribute("href")) : "";
              if (currentId != key) {
                group.forEach((gItem) => {
                  const ele = gItem.handler;
                  ele.removeAttribute(ItemSearchBaseObj.searchAttribute);
                  const tipElement = ele.querySelector("div[name^='ali-gogo-coupon-']");
                  if (tipElement) {
                    tipElement.remove();
                  }
                });
                Logger.log("info", "exception currentGoodsId != request id");
                isBroken = true;
                break;
              } else {
                if (tip) {
                  handler.style.position = "relative";
                  handler.insertAdjacentHTML("beforeend", tip);
                  Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
                }
                if (decryptUrl) {
                  this.relativeJ(handler, decryptUrl);
                  Logger.log("info", "good job >>>>>>>>>>>>>", key);
                }
              }
            }
            resolve(isBroken ? "broken" : "complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i";
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (this.isItemLink(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!this.isItemLink(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              Array.from(target.classList).forEach((className) => {
                const iscontains = ["icon", "-btn-"].map((name) => className.indexOf(name) != -1).some((result) => result);
                if (iscontains) {
                  isPreventDefault = false;
                }
              });
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    isRun: function() {
      let run = false;
      if (window.location.host.indexOf("aliexpress.") != -1) {
        run = !/\/(item|trade|checkout)\//.test(window.location.pathname);
      }
      return run;
    },
    changePageEvent: function() {
      let hookDivTimer = null, removeTagIsComplete = true;
      const onInitDom = () => {
        if (!removeTagIsComplete)
          return;
        removeTagIsComplete = false;
        const attr = ItemSearchBaseObj.searchAttribute;
        document.querySelectorAll(`*[${attr}='true']`).forEach((el) => {
          el.removeAttribute(attr);
          const tip = el.querySelector("*[name^='ali-gogo-coupon-']");
          if (tip) {
            tip.remove();
          }
        });
        removeTagIsComplete = true;
        this.cacheLinkDoms = {};
      };
      const checkObjectValues = () => {
        const obj = this.cacheLinkDoms;
        const keys = Object.keys(obj);
        let notContain = 0;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const el = obj[key];
          try {
            const href = el.getAttribute("href");
            if (!href.includes(key)) {
              if (++notContain > 2)
                return true;
            }
          } catch (e) {
          }
        }
        return false;
      };
      const observer = new MutationObserver((mutations) => {
        const hasDelete = mutations.some(
          (m) => m.target === document.body && m.removedNodes.length > 0
        );
        if (!hasDelete)
          return;
        if (hookDivTimer)
          clearTimeout(hookDivTimer);
        hookDivTimer = setTimeout(() => {
          hookDivTimer = null;
          if (checkObjectValues())
            onInitDom();
        }, 500);
      });
      observer.observe(document.body, { childList: true, subtree: false });
    },
    start: function() {
      return __async$o(this, null, function* () {
        const { support } = SupportData;
        if (!this.isRun()) {
          return;
        }
        const language = Aliexpress.getLang();
        const currency = yield Aliexpress.getCurrency();
        const marketplace = yield Aliexpress.getMarketplace(support.marketplace);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const couponExistPer = support.couponExistPer || 10;
        const selectors = ItemSearchBaseObj.pickupGoodsItem(SupportData.support.p, confString);
        setInterval(() => __async$o(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpInbusiness(language, currency, marketplace, couponExistPer);
            yield this.pickUpWholesale(selectors, language, currency, marketplace, couponExistPer);
            this.loopIsComplete = true;
          }
        }), 1700);
        if (selectors.length != 0 && window.location.pathname != "/") {
          this.changePageEvent();
        }
      });
    }
  };

  var __async$n = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Ebay = {
    detail: function() {
      return __async$n(this, null, function* () {
        const visitUrl = window.location.href;
        const id = Tools.getGoodsIdByLink(visitUrl);
        const varG = Tools.getParamterBySearch(window.location.href, "var");
        if (!id) {
          return;
        }
        const marketplace = Tools.getCommonMarketplace(visitUrl);
        var idsG = id;
        if (!!varG) {
          idsG += "@" + varG;
        }
        try {
          const params = {
            "ids": idsG,
            "qu": "",
            "p": SupportData.support.p,
            "marketplace": marketplace,
            "mul": false
          };
          const data = yield RequestUtil.getCouponQuery(params);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$n(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish, hint } = json.data;
          var mid = null;
          if (json.data.hasOwnProperty("mid")) {
            mid = json.data["mid"];
          }
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const params = {
            "id": id,
            "marketplace": marketplace,
            "platform": SupportData.support.p
          };
          const reqPromise = RequestUtil.getCouponChange(params);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        if (couponCodeElement) {
          const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
          templateIdEle.addEventListener("click", () => {
            GM_setClipboard(promoCode, "txt", () => {
              Toast.show({ "message": hint, "background": "#D3031C" });
              if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
                const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
                setTimeout(() => {
                  if (target === "_blank") {
                    Tools.openInTab(linkDecrypt);
                  } else if (target === "_self") {
                    window.location.href = linkDecrypt;
                  } else if (target === "_replace") {
                    window.location.replace(linkDecrypt);
                  }
                }, delay);
              }
            });
          });
        }
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$n(this, null, function* () {
        const { support } = SupportData;
        const visitUrl = window.location.href;
        if (support.detail.test(visitUrl)) {
          this.detail();
        }
      });
    }
  };

  var __async$m = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const EbaySearch = {
    loopIsComplete: true,
    isRun: function() {
      let run = false;
      if (window.location.host.indexOf("ebay.") != -1) {
        run = !/\/(item|itm|trade|checkout|rxo)\//.test(window.location.pathname);
      }
      return run;
    },
    isItemLink: function(url) {
      return SupportData.support.detail.test(url);
    },
    pickUpItems: function(selectors, marketplace, couponExistPer) {
      return __async$m(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const priceQuery = elementObj.price;
                  Logger.log("info", "search price elements======>", element, priceQuery);
                  const price = ItemSearchBaseObj.getGoodsPriceByElement(element, priceQuery);
                  Logger.log("info", "search price======>", price);
                  let id = null, varG = null;
                  if (this.isItemLink(goodsLink)) {
                    const goodsLinkHref = goodsLink.getAttribute("href");
                    id = Tools.getGoodsIdByLink(goodsLinkHref);
                    varG = Tools.getParamterBySearch(goodsLinkHref, "var");
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "varG": varG,
                      "price": price,
                      "platform": SupportData.support.p,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace, couponExistPer);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace, couponExistPer) {
      return __async$m(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array, couponExistPer);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id;
            if (!!group[i].varG) {
              reqId += "@" + group[i].varG;
            }
            reqId += ":" + group[i].price + ",";
            group[i].handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=104&v=1.0.1";
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (tip) {
                handler.style.position = "relative";
                handler.insertAdjacentHTML("beforeend", tip);
                Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
              }
              if (decryptUrl) {
                this.relativeJ(handler, decryptUrl);
                Logger.log("info", "good job >>>>>>>>>>>>>", key);
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i", self = this;
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (self.isItemLink(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!self.isItemLink(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              Array.from(target.classList).forEach((className) => {
                const iscontains = ["btn", "icon"].map((name) => className.indexOf(name) != -1).some((result) => result);
                if (iscontains) {
                  isPreventDefault = false;
                }
              });
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    start: function() {
      return __async$m(this, null, function* () {
        const { support } = SupportData;
        if (!this.isRun()) {
          return;
        }
        const marketplace = Tools.getCommonMarketplace(window.location.href);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const couponExistPer = support.couponExistPer || 10;
        const selectors = ItemSearchBaseObj.pickupGoodsItem(SupportData.support.p, confString);
        setInterval(() => __async$m(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpItems(selectors, marketplace, couponExistPer);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$l = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Lazada = {
    detailMyMscanAnalyze: function(result) {
      return __async$l(this, null, function* () {
        const { id, iden, marketplace, platform, mount, html, cmd } = result;
        if (!mount || !html) {
          return;
        }
        if (cmd && cmd.do && cmd.ele) {
          const cmdElement = yield Tools.waitForElementByInterval(cmd.ele);
          if (cmdElement) {
            if (cmd.do == "empty") {
              cmdElement.innerHTML = "";
            }
          }
        }
        const element = yield Tools.mustGetElement(mount);
        if (!element) {
          return;
        }
        element.insertAdjacentHTML("beforeend", html);
        const params = {
          "id": id,
          "marketplace": marketplace,
          "platform": platform
        };
        const qrcodeData = yield RequestUtil.getCouponChange(params);
        if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
          let mscanImg = JSON.parse(qrcodeData.result).mscanImg;
          if (!!mscanImg) {
            var canvasElement = document.getElementById("mscan" + iden);
            if (!!canvasElement) {
              var cxt = canvasElement.getContext("2d");
              var imgData = new Image();
              imgData.src = mscanImg;
              imgData.onload = function() {
                cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
              };
            }
          }
        }
      });
    },
    detail: function() {
      return __async$l(this, null, function* () {
        const visitUrl = window.location.href;
        const marketplace = Tools.getCommonMarketplace(visitUrl);
        const ids = Tools.getGoodsIdByLink(visitUrl);
        if (!ids) {
          return;
        }
        try {
          const params = {
            "ids": ids,
            "qu": "",
            "p": SupportData.support.p,
            "marketplace": marketplace,
            "mul": false
          };
          const data = yield RequestUtil.getCouponQuery(params);
          if (!!data && data.code === "success" && !!data.result) {
            const json = JSON.parse(data.result);
            if (json && json.mscan) {
              const { distinguish, iden, html, cmd, mount } = json.mscan;
              const mscanResult = {
                "id": json.id,
                "iden": iden,
                "marketplace": marketplace,
                "platform": SupportData.support.p,
                "mount": mount,
                "html": html,
                "cmd": cmd
              };
              Tools.loopTask(() => {
                Tools.distinguishRemoveAndTry(distinguish, () => {
                  this.detailMyMscanAnalyze(mscanResult);
                });
              });
            }
          }
        } catch (e) {
        }
      });
    },
    start: function() {
      return __async$l(this, null, function* () {
        const { support } = SupportData;
        const visitUrl = window.location.href;
        if (support.detail.test(visitUrl)) {
          this.detail();
        }
      });
    }
  };

  var __async$k = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const LazadaSearch = {
    loopIsComplete: true,
    isRun: function() {
      let run = false;
      if (window.location.host.indexOf("lazada.") != -1) {
        run = !this.isItemLink(window.location.href) && !/\/(\/shipping\\?)\//.test(window.location.pathname);
      }
      return run;
    },
    isItemLink: function(url) {
      return SupportData.support.detail.test(url);
    },
    pickUpItems: function(selectors, marketplace, couponExistPer) {
      return __async$k(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const price = ItemSearchBaseObj.getGoodsPrice(element.innerText);
                  let id = null;
                  if (this.isItemLink(goodsLink)) {
                    id = Tools.getGoodsIdByLink(goodsLink.getAttribute("href"));
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "price": price,
                      "platform": SupportData.support.p,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace, couponExistPer);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace, couponExistPer) {
      return __async$k(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array, couponExistPer);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ":" + group[i].price + ",";
            group[i].handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=104&v=1.0.1";
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            Logger.log("info", "request finish json>>>>>>>>>>>>>", json);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const { handler, findA } = group.find((obj) => obj.id === key);
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (tip) {
                handler.style.position = "relative";
                handler.insertAdjacentHTML("beforeend", tip);
                Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
              }
              if (decryptUrl) {
                this.relativeJ(handler, decryptUrl);
                Logger.log("info", "good job >>>>>>>>>>>>>", key);
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      let selectorA = null;
      if (handler.tagName == "A") {
        selectorA = [handler];
      } else {
        selectorA = handler.querySelectorAll("a");
      }
      selectorA.forEach((element_a) => {
        if (this.isItemLink(element_a.getAttribute("href"))) {
          element_a.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            Tools.openInTab(decryptUrl);
          });
        }
      });
    },
    start: function() {
      return __async$k(this, null, function* () {
        const { support } = SupportData;
        if (!this.isRun()) {
          return;
        }
        const marketplace = Tools.getCommonMarketplace(window.location.href);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const couponExistPer = support.couponExistPer || 10;
        const selectors = ItemSearchBaseObj.pickupGoodsItem(SupportData.support.p, confString);
        setInterval(() => __async$k(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpItems(selectors, marketplace, couponExistPer);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$j = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Bestbuy = {
    detail: function() {
      return __async$j(this, null, function* () {
        const visitUrl = window.location.href;
        const id = Tools.getGoodsIdByLink(visitUrl);
        if (!id) {
          return;
        }
        const marketplace = Tools.getCommonMarketplace(visitUrl);
        try {
          const params = {
            "ids": id,
            "qu": "",
            "p": SupportData.support.p,
            "marketplace": marketplace,
            "mul": false
          };
          const data = yield RequestUtil.getCouponQuery(params);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$j(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish } = json.data;
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const params = {
            "id": id,
            "marketplace": marketplace,
            "platform": SupportData.support.p
          };
          const reqPromise = RequestUtil.getCouponChange(params);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        if (couponCodeElement) {
          const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
          templateIdEle.addEventListener("click", () => {
            GM_setClipboard(promoCode, "txt", () => {
              Toast.show({ "message": "copied", "background": "#D3031C" });
            });
          });
        }
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$j(this, null, function* () {
        const { support } = SupportData;
        const visitUrl = window.location.href;
        if (support.detail.test(visitUrl)) {
          this.detail();
        }
      });
    }
  };

  var __async$i = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const BestbuySearch = {
    loopIsComplete: true,
    pickUpItems: function(selectors, marketplace, couponExistPer) {
      return __async$i(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const priceQuery = elementObj.price;
                  Logger.log("info", "search price elements======>", element, priceQuery);
                  const price = ItemSearchBaseObj.getGoodsPrice(
                    ItemSearchBaseObj.getGoodsPriceByElement(element, priceQuery)
                  );
                  Logger.log("info", "search price======>", price);
                  let id = null;
                  if (this.isItemLink(goodsLink)) {
                    id = Tools.getGoodsIdByLink(goodsLink.getAttribute("href"));
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "price": price,
                      "platform": SupportData.support.p,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace, couponExistPer);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace, couponExistPer) {
      return __async$i(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array, couponExistPer);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ":" + group[i].price + ",";
            group[i].handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=104&v=1.0.1";
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (tip) {
                handler.style.position = "relative";
                handler.insertAdjacentHTML("beforeend", tip);
                Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
              }
              if (decryptUrl) {
                this.relativeJ(handler, decryptUrl);
                Logger.log("info", "good job >>>>>>>>>>>>>", key);
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i", self = this;
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (self.isItemLink(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!self.isItemLink(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              Array.from(target.classList).forEach((className) => {
                const iscontains = ["btn", "icon"].map((name) => className.indexOf(name) != -1).some((result) => result);
                if (iscontains) {
                  isPreventDefault = false;
                }
              });
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    isItemLink: function(url) {
      return SupportData.support.detail.test(url);
    },
    isRun: function() {
      return /https:\/\/www\.bestbuy\.com\/site\/searchpage\.jsp/.test(window.location.href);
    },
    start: function() {
      return __async$i(this, null, function* () {
        const { support } = SupportData;
        if (!this.isRun()) {
          return;
        }
        const marketplace = Tools.getCommonMarketplace(window.location.href);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const couponExistPer = support.couponExistPer || 10;
        const selectors = ItemSearchBaseObj.pickupGoodsItem(SupportData.support.p, confString);
        setInterval(() => __async$i(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpItems(selectors, marketplace, couponExistPer);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$h = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Banggood = {
    getLang: function() {
      return document.querySelector("html").getAttribute("lang") || "";
    },
    getCurrency: function() {
      const element = document.querySelector(".shipto-state");
      if (element) {
        return encodeURIComponent(element.textContent);
      }
      return "";
    },
    getMarketplace: function(url = window.location.href) {
      const marketplace = [
        /https?:\/\/www\.banggood\.com\/([a-z]{2,3})\//,
        /https?:\/\/([a-z]{2,3})\.banggood\.com/
      ].map((rs) => {
        var match = url.match(rs);
        if (match) {
          return match[1];
        }
        return null;
      }).find((rs) => rs != null);
      return marketplace ? marketplace : "com";
    },
    detail: function() {
      return __async$h(this, null, function* () {
        const visitUrl = window.location.href;
        const id = Tools.getGoodsIdByLink(visitUrl);
        if (!id) {
          return;
        }
        const marketplace = this.getMarketplace(visitUrl);
        const currency = this.getCurrency();
        const lang = this.getLang();
        try {
          const params = {
            "ids": id,
            "qu": "",
            "p": SupportData.support.p,
            "marketplace": marketplace,
            "mul": false,
            "currency": currency,
            "lang": lang
          };
          const data = yield RequestUtil.getCouponQuery(params);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$h(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish, hint } = json.data;
          var mid = null;
          if (json.data.hasOwnProperty("mid")) {
            mid = json.data["mid"];
          }
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const params = {
            "id": id,
            "marketplace": marketplace,
            "platform": SupportData.support.p
          };
          const reqPromise = RequestUtil.getCouponChange(params);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        if (couponCodeElement) {
          const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
          templateIdEle.addEventListener("click", () => {
            GM_setClipboard(promoCode, "txt", () => {
              Toast.show({ "message": hint, "background": "#D3031C" });
              if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
                const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
                setTimeout(() => {
                  if (target === "_blank") {
                    Tools.openInTab(linkDecrypt);
                  } else if (target === "_self") {
                    window.location.href = linkDecrypt;
                  } else if (target === "_replace") {
                    window.location.replace(linkDecrypt);
                  }
                }, delay);
              }
            });
          });
        }
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$h(this, null, function* () {
        const { support } = SupportData;
        const visitUrl = window.location.href;
        if (support.detail.test(visitUrl)) {
          this.detail();
        }
      });
    }
  };

  var __async$g = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const BanggoodSearch = {
    loopIsComplete: true,
    pickUpItems: function(selectors, marketplace, lang, currency, couponExistPer) {
      return __async$g(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const priceQuery = elementObj.price;
                  Logger.log("info", "search price elements======>", element, priceQuery);
                  const price = ItemSearchBaseObj.getGoodsPriceByElement(element, priceQuery);
                  Logger.log("info", "search price======>", price);
                  let id = null;
                  if (SupportData.support.detail.test(goodsLink)) {
                    const goodsLinkHref = goodsLink.getAttribute("href");
                    id = Tools.getGoodsIdByLink(goodsLinkHref);
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "price": price,
                      "platform": SupportData.support.p,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace, lang, currency, couponExistPer);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace, lang, currency, couponExistPer) {
      return __async$g(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array, couponExistPer);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace, lang, currency));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace, lang, currency) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ":" + group[i].price + ",";
            group[i].handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=104&v=1.0.1&currency=" + currency + "&lang=" + lang;
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (tip) {
                handler.style.position = "relative";
                handler.insertAdjacentHTML("beforeend", tip);
                Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
              }
              if (decryptUrl) {
                this.relativeJ(handler, decryptUrl);
                Logger.log("info", "good job >>>>>>>>>>>>>", key);
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i";
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (SupportData.support.detail.test(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!SupportData.support.detail.test(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    isRun: function(support) {
      return !support.detail.test(window.location.href);
    },
    start: function() {
      return __async$g(this, null, function* () {
        const { support } = SupportData;
        if (!this.isRun(support)) {
          return;
        }
        const marketplace = Banggood.getMarketplace(window.location.href);
        const lang = Banggood.getLang();
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const couponExistPer = support.couponExistPer || 10;
        const selectors = ItemSearchBaseObj.pickupGoodsItem(SupportData.support.p, confString);
        setInterval(() => __async$g(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            const currency = Banggood.getCurrency();
            yield this.pickUpItems(selectors, marketplace, lang, currency, couponExistPer);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$f = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Amazon = {
    detail: function() {
      return __async$f(this, null, function* () {
        const visitUrl = window.location.href;
        const id = Tools.getGoodsIdByLink(visitUrl);
        if (!id) {
          return;
        }
        const marketplace = Tools.getCommonMarketplace(visitUrl);
        try {
          const params = {
            "ids": id,
            "qu": "",
            "p": SupportData.support.p,
            "marketplace": marketplace,
            "mul": false
          };
          const data = yield RequestUtil.getCouponQuery(params);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$f(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish, hint } = json.data;
          var mid = null;
          if (json.data.hasOwnProperty("mid")) {
            mid = json.data["mid"];
          }
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const params = {
            "id": id,
            "marketplace": marketplace,
            "platform": SupportData.support.p
          };
          const reqPromise = RequestUtil.getCouponChange(params);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        if (couponCodeElement) {
          const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
          templateIdEle.addEventListener("click", () => {
            GM_setClipboard(promoCode, "txt", () => {
              Toast.show({ "message": hint, "background": "#D3031C" });
              if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
                const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
                setTimeout(() => {
                  if (target === "_blank") {
                    Tools.openInTab(linkDecrypt);
                  } else if (target === "_self") {
                    window.location.href = linkDecrypt;
                  } else if (target === "_replace") {
                    window.location.replace(linkDecrypt);
                  }
                }, delay);
              }
            });
          });
        }
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$f(this, null, function* () {
        const { support } = SupportData;
        const visitUrl = window.location.href;
        if (support.detail.test(visitUrl)) {
          this.detail();
        }
      });
    }
  };

  const PlatformModules = {
    Aliexpress: {
      Aliexpress,
      AliexpressSearch
    },
    Ebay: {
      Ebay,
      EbaySearch
    },
    Lazada: {
      Lazada,
      LazadaSearch
    },
    Bestbuy: {
      Bestbuy,
      BestbuySearch
    },
    Banggood: {
      Banggood,
      BanggoodSearch
    },
    Amazon: {
      Amazon
    }
  };

  var css_248z$5 = ".mask-container{align-items:center;background-color:#0003;display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;transition:opacity .3s ease,visibility .3s ease;width:100%;z-index:2147483647}.modal-content{box-shadow:1px -3px 6px 0 #0003;max-height:450px;max-width:450px;width:90%}.coupon-list-widget-conent,.modal-content{background-color:#fff;border-radius:6px;display:flex;flex-direction:column;overflow:hidden}.coupon-list-widget-conent{border:1px solid #ebebeb;box-shadow:0 4px 16px #0a164666;height:500px;max-height:85%;position:fixed;right:10px;top:10px;width:350px;z-index:2147483646}.coupon-list-widget-conent .modal-header,.modal-content .modal-header{align-items:center;background:var(--color-modeal-header-background);border-bottom:1px solid #ebe6e6;box-sizing:border-box;display:flex;height:var(--size-height-modeal-header);justify-content:space-between;padding:0 var(--size-padding-horizontal-modeal-header);width:100%}.modal-header .logo>img{width:50px}.coupon-list-widget-conent .logo,.modal-header .logo{align-items:center;display:flex;justify-content:center}.coupon-list-widget-conent .title{flex:1;font-size:var(--size-font-modeal-header-title);font-weight:700;padding-left:10px}.modal-header .btns{display:flex;flex-direction:row;position:relative}.modal-header .btns .close,.modal-header .btns .setting{align-items:center;cursor:pointer;display:flex;justify-content:center;width:var(--size-height-modeal-operat-icon)}.modal-header svg.icon-i87i-svg path{fill:var(--color-modeal-header-icon)!important}.modal-header svg.icon-i87i-svg:hover path{fill:var(--color-modeal-header-icon-hover)!important}.setting-dropdown{background:#fff;border-radius:6px;box-shadow:0 4px 11px #0a164633;display:none;inset-inline-end:0;margin-top:5px;max-height:300px;overflow:auto;position:absolute;top:25px;width:180px;z-index:99999999}.setting-dropdown.active{display:block}.setting-category{border-top:1px solid #eee;padding:10px}.setting-category-title{font-size:14px;font-weight:700;margin-bottom:8px}.setting-option{border-radius:4px;cursor:pointer;font-size:12px;padding:3px 7px}.setting-option:hover{background-color:#f0f0f0}.coupon-list-widget-conent .modal-body{background:var(--color-modeal-content-background);flex:1;overflow-y:auto;position:relative;width:100%}.deal-description-warpper{margin:20px auto;text-align:center}.deal-description-warpper>.title{color:#000;font-size:18px;font-weight:800;margin-bottom:5px}.deal-description-warpper>.sub-title{color:#9f9f9f;font-size:14px}.deal-coupons-warpper{display:flex;mask-image:linear-gradient(90deg,#0000,#000 5%,#000 95%,#0000);-webkit-mask-image:linear-gradient(90deg,#0000,#000 5%,#000 95%,#0000);overflow:hidden;padding:10px 20px;position:relative;scroll-behavior:smooth}.deal-coupons-warpper .coupon-item{background-color:#f6f7ff;border:1px dashed #8096f8;border-radius:4px;color:#ccc;display:inline-block;flex:none;font-size:15px;font-weight:700;margin:5px;padding:5px 10px;white-space:nowrap}.deal-coupons-warpper .coupon-item-active{color:#005cf6!important}.deal-coupons-warpper .coupon-item-lose{text-decoration:line-through!important;text-decoration-thickness:2px!important}.deal-progress-warpper{margin-top:20px}.deal-progress-warpper .progress-container{background-color:#f3f3f3;border-radius:25px;box-shadow:0 2px 4px #0003;margin:0 auto;overflow:hidden;width:100%}.deal-progress-warpper .progress-bar{background-color:#4caf50;color:#fff;font-weight:700;height:8px;line-height:8px;text-align:center;transition:width .5s ease-in-out;width:50%}.widget{cursor:pointer;display:flex;flex-direction:row;position:fixed;right:0;transform:translateX(15px);transition:transform .3s ease;z-index:2147483646}.widget:hover{transform:translateX(0)}.widget .content{border-radius:10px 0 0 10px;direction:ltr!important;display:flex;flex-direction:row}.widget .content .logo{background-color:#ff7227;background-image:url(@logo@);background-position:50%;background-repeat:no-repeat;background-size:40px 40px;border-radius:6px 0 0 6px;box-shadow:0 0 10px #00000040;height:40px;width:40px}.widget .content .notification{background-color:#000;border-radius:50%;color:#fff;font-size:10px;font-weight:600;height:20px;left:-5px;position:absolute;top:-5px;width:20px}.widget .content .drag{background:#0000 linear-gradient(270deg,#fb6d56,#ec6751 59%,#e1624d) 0 0 no-repeat padding-box;cursor:move;height:40px;width:15px}.widget .content .drag img{width:6px!important}.all-center{align-items:center;display:flex;justify-content:center}.pulse-reveal{animation:pulse-reveal 2s ease;animation-iteration-count:10}";

  var css_248z$4 = ".request-state{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.loading{perspective:200px;position:relative;width:50px}.loading:after,.loading:before{animation:scriptJumping .5s infinite alternate;background:#0000;content:\"\";height:20px;position:absolute;width:20px}.loading:before{left:0}.loading:after{animation-delay:.15s;right:0}@keyframes scriptJumping{0%{transform:scale(1) translateY(0) rotateX(0deg)}to{background:#000;transform:scale(1.2) translateY(-25px) rotateX(45deg)}}.loading-error-image{text-align:center}.loading-error-image,.loading-error-retry{align-items:center;display:flex;justify-content:center}.loading-error-retry{border:4px solid #ccc;border-radius:50px;cursor:pointer;height:40px;margin:20px auto;width:140px}";

  var css_248z$3 = "[data-extension-direction=rtl]{direction:rtl!important}";

  const settingSVG = `
  <svg style="height:30px;width:30px;" class="icon-i87i-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770" width="30" height="30"><path d="M811.04 468.728a39.72 39.72 0 0 0-27.672-30.36l-10.2-2.28a100.872 100.872 0 0 1-68.856-120.24l3.12-9.552a41.592 41.592 0 0 0-11.424-40.368 281.64 281.64 0 0 0-36.816-24.336c-12.36-7.2-25.224-13.536-38.496-18.912a41.592 41.592 0 0 0-41.592 9.984l-7.08 7.488a100.248 100.248 0 0 1-69.264 27.456 100.464 100.464 0 0 1-68.64-27.672l-6.864-7.272a41.592 41.592 0 0 0-41.592-9.984 294.96 294.96 0 0 0-37.848 18.912c-12.696 7.152-24.792 15.288-36.192 24.336a41.592 41.592 0 0 0-10.824 40.368l2.904 9.552a101.088 101.088 0 0 1-10.8 74.064 96.72 96.72 0 0 1-57.408 45.552l-9.792 2.28a35.352 35.352 0 0 0-26.616 28.488c-1.872 14.352-2.64 28.8-2.28 43.272-0.408 14.736 0.36 29.472 2.28 44.088a39.936 39.936 0 0 0 25.8 31.2l9.552 2.304a99 99 0 0 1 57.624 46.992c12.984 22.392 16.848 48.912 10.8 74.064l-2.064 9.36a41.592 41.592 0 0 0 11.856 40.344c11.136 9.072 22.968 17.28 35.352 24.552 12.312 7.488 25.176 14.016 38.496 19.536 14.64 4.608 30.624 0.768 41.592-9.984l6.648-7.272a101.088 101.088 0 0 1 139.152 0l6.672 7.272a41.592 41.592 0 0 0 41.592 9.984 295.152 295.152 0 0 0 37.224-19.536 271.848 271.848 0 0 0 36.624-24.336c10.944-10.32 15.48-25.752 11.856-40.368l-2.928-9.768a100.872 100.872 0 0 1 69.48-120l9.576-2.304a39.72 39.72 0 0 0 27.648-30.36c1.68-14.376 2.232-28.824 1.68-43.272a291.192 291.192 0 0 0-2.304-43.272z m-307.44 190.944a147.672 147.672 0 1 1 0-295.344 147.672 147.672 0 0 1 0 295.344z" fill="#8a8a8a" p-id="1771"></path></svg>
`.trim();
  const closeSVG = `
  <svg style="height:30px;width:30px;" class="icon-i87i-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1609" width="30" height="30"><path d="M673.5644448 281.66826667L512 447.82933333 351.16373333 281.71377813a44.6464 44.6464 0 0 0-63.6700448-0.50062293 46.1027552 46.1027552 0 0 0-0.50062186 64.6712896L447.82933333 512l-160.83626666 165.84248853c-17.52177813 18.06791147-17.29422187 46.8764448 0.50062186 64.6712896a44.69191147 44.69191147 0 0 0 63.71555627-0.45511146L512 576.17066667l161.5644448 165.93351146a44.78293333 44.78293333 0 0 0 63.7155552 0.4096 45.96622187 45.96622187 0 0 0 0.45511147-64.62577813L576.17066667 512l161.5644448-166.16106667a46.01173333 46.01173333 0 0 0-0.45511147-64.62577813 44.73742187 44.73742187 0 0 0-63.7155552 0.45511147z" fill="#5D6E7F" p-id="1610"></path></svg>
`.trim();
  const historyIconSVG = `
  <svg t="1736495784741" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" width="48" height="48"><path d="M539.7171875 536.1734375m-280.63125 0a280.63125 280.63125 0 1 0 561.2625 0 280.63125 280.63125 0 1 0-561.2625 0Z" fill="#56E5BE" p-id="2657"></path><path d="M567.940625 564.3546875m-252.45 0a252.45 252.45 0 1 0 504.9 0 252.45 252.45 0 1 0-504.9 0Z" fill="#50DDB8" p-id="2658"></path><path d="M596.7546875 584.9421875m-219.5015625 0a219.5015625 219.5015625 0 1 0 439.003125 0 219.5015625 219.5015625 0 1 0-439.003125 0Z" fill="#42D3AD" p-id="2659"></path><path d="M512.590625 165.1765625c-13.9640625 0-25.3125 11.3484375-25.3125 25.3125s11.3484375 25.3125 25.3125 25.3125c162.253125 0 294.2578125 132.0046875 294.2578125 294.2578125s-132.0046875 294.2578125-294.2578125 294.2578125S218.3328125 672.3125 218.3328125 510.059375c0-88.171875 38.6015625-169.7625 104.9203125-225.28125v55.6453125c0 13.9640625 11.3484375 25.3125 25.3125 25.3125s25.3125-11.3484375 25.3125-25.3125V219.640625c0-13.9640625-11.3484375-25.3125-25.3125-25.3125h-115.59375c-13.9640625 0-25.3125 11.3484375-25.3125 25.3125s11.3484375 25.3125 25.3125 25.3125h58.978125C213.4390625 310.0484375 167.7078125 406.1515625 167.7078125 510.059375c0 190.18125 154.7015625 344.8828125 344.8828125 344.8828125s344.8828125-154.7015625 344.8828125-344.8828125-154.74375-344.8828125-344.8828125-344.8828125z" fill="#515151" p-id="2660"></path><path d="M617.6796875 579.7109375H474.36875c-13.9640625 0-25.3125-11.3484375-25.3125-25.3125V423.9546875c0-13.9640625 11.3484375-25.3125 25.3125-25.3125s25.3125 11.3484375 25.3125 25.3125v105.13125h117.9984375c13.9640625 0 25.3125 11.3484375 25.3125 25.3125s-11.3484375 25.3125-25.3125 25.3125z" fill="#515151" p-id="2661"></path></svg>
`.trim();
  const alertErrorIconSVG = `
  <svg t="1750318981890" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7681" width="45" height="45"><path d="M736 336zM336 736h-0.01 0.02-0.01zM688 736h0.01-0.01zM736 688z" fill="#666666" p-id="7682"></path><path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64z m220.62 346.18L472.4 670.39a40 40 0 0 1-56.57 0L291.38 545.94a40 40 0 0 1 0-56.57 40 40 0 0 1 56.57 0l96.17 96.17 231.93-231.93a40 40 0 0 1 56.57 0 40 40 0 0 1 0 56.57z" fill="#999999" p-id="7683"></path><path d="M732.62 353.61a40 40 0 0 0-56.57 0L444.12 585.54 348 489.37a40 40 0 0 0-56.57 0 40 40 0 0 0 0 56.57l124.4 124.45a40 40 0 0 0 56.57 0l260.22-260.21a40 40 0 0 0 0-56.57z" fill="#FFFFFF" p-id="7684"></path></svg>
`.trim();
  const alertSuccessIconSVG = `
  <svg t="1750318938251" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7517" width="45" height="45"><path d="M511.950005 512.049995m-447.956254 0a447.956254 447.956254 0 1 0 895.912508 0 447.956254 447.956254 0 1 0-895.912508 0Z" fill="#20B759" p-id="7518"></path><path d="M458.95518 649.636559L289.271751 479.95313c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.395859l169.683429 169.68343c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.598867 11.798848-30.597012 0-42.39586z" fill="#FFFFFF" p-id="7519"></path><path d="M777.62406 332.267552c-11.698858-11.698858-30.697002-11.698858-42.39586 0L424.158578 643.437164c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l311.069622-311.069622c11.798848-11.798848 11.798848-30.796992 0-42.49585z" fill="#FFFFFF" p-id="7520"></path></svg>
`.trim();
  const logoBase64 = `
  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNC0wM1QxODo0MzozNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wNC0wM1QxODo0Mzo0NyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDQtMDNUMTg6NDM6NDcrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZTMyY2UzLThmYWEtMjM0NC1iODM4LTA1YWRhMzI5YWViYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIxMGQ3MWMzLWI2MzgtMDI0ZS05YzE3LTNkMDNkNmFlMTYxOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjYxM2YyNTBjLWFjYWQtZjE0Ny04NzczLWQ4YWJjNTY2ODg0ZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjEzZjI1MGMtYWNhZC1mMTQ3LTg3NzMtZDhhYmM1NjY4ODRlIiBzdEV2dDp3aGVuPSIyMDI1LTA0LTAzVDE4OjQzOjM1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdhZjc2ZDZjLWIwYzktYjM0MC05ODJlLTE1ZTU3YzAyZTYzMiIgc3RFdnQ6d2hlbj0iMjAyNS0wNC0wM1QxODo0Mzo0NyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OWUzMmNlMy04ZmFhLTIzNDQtYjgzOC0wNWFkYTMyOWFlYmEiIHN0RXZ0OndoZW49IjIwMjUtMDQtMDNUMTg6NDM6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2FmNzZkNmMtYjBjOS1iMzQwLTk4MmUtMTVlNTdjMDJlNjMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxM2YyNTBjLWFjYWQtZjE0Ny04NzczLWQ4YWJjNTY2ODg0ZSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjYxM2YyNTBjLWFjYWQtZjE0Ny04NzczLWQ4YWJjNTY2ODg0ZSIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Yzg1NGYyMTQtMjY2MS1iMDQyLTg3YjQtMTE1YmRkMTE5MzMxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+agFuvQAADXtJREFUeJztnXuwXdVdxz+/tfY+555zXwlBUpIGijW0QTtQg6UMDmBaYxWRAamVUYexxbHW1nFqo21H6TDKiFWnFYp/WKaddgSLFBo7Q+vg8CpjiyADbW1DAKFJSAIJuTe5ubn37MdaP/9Y+97cJDfnPnP2xu7PzG9y9+v89trfvd6/tSOqSk11MGXfQM2x1IJUjFqQilELUjFqQSpGLUjFqAWpGLUgFaMWpGLUglSMWpCKUQtSMWpBKkYtSMWoBakYtSAVoxakYtSCVIxakIpRC1IxakEqRtRrh++8sftx0WD44t9iHzP/5oTtnwLeDlyA8hbgjcDpQAsYBMaBCeAAsAdhO/A94EngeZUp5yfez2OfXlj6lkrPBVlGzgd+XeEK4Gen986e5weLf98MTItZ8AzwTeBe4KllvscF83oU5L3ABxE2AbO+1XNy7DUXFPYJ4FvA1cDIEu5vSbyeBLkS+JQKG0+hj0uB06gF6cpPALchvA+OL21OCdmpd3Fyqi7IbwD/pMJw2TfSK6opSMgGN6pwU8l30nOqKQjcheG6RVzngB8C24GdwFixzwJDwFmEJvJPA/Hy3OryUilBisbPvWq4ZgGXJcB9wDdQHgFeluLHZtY3AqDT+9YgXAL8KnAt0J5xaqnLASoliMJdyLzFOAh8RuAOlD0IuBhcFB6+caHTqIRtb0AtqILN2GMd96Dcg7BF4f2EZu8Q0DwliZsnvRfk5IM1n0TnXUzdDtyIZ8RbyPtAHLQOOZqHc/oO58Qdh3EENRRcLGQtS9K2dIZiOkMGNRB32IfnFgx3AJ8k9O5Lo+eC6GwdOeU9wM3zGFnbj/LbAg+oQNaGuAOn7egwsC+hPZoRJR7jFDXHOgrDL4q3QtYyTA7HHF7dx6Ezm7gYGh1eAz6qi+tqLhtVEKSBcO88Lv2+KO8WZZ9rghcY2pty+osTDBxIUcA1DFnLHh3vChR55Kh/45WhvQlDryYM7W3y2k+2GT8jxuZgU3TWl6ZHlC6IwD9zbKU6G99CuRzQpB/iSWXNs4cZ3tMBEZL+CFQRZQPwi8BFwAUK5834jVHCgOL93spXXb99CSO0R1LWjaaMntVi//oBOgOh/imLcusQ5Z0axqa68TxwGRqKqNao48z/GaPvcEbetqCCeK5C+KDCewA0+PAo/4AwAQwTBhY3ApcBnyYMJP5p1rIPgbJy1wRR4hk7s4m4meVWb+v4cnOI8Pk5Tj8iykUodIZheG/G2qcPgUI6EGEcb0G5VQ2bZyn67wL+2LgZtYIICmeqcD3CTSgPAvepkevTwXi8OZ5xxvZ0StCC3grS+wkqmbbLEH5mxvZsdqUKo8kgtEcda58eAyhyBtd54YfestlbmMUGXBRaVzJjbgXYC9yiQtNH/LmPuEaF/Xg2ujjUQXnzqPWanguiMm2fmvH3bHanwsNZE6JEWfvdMVAlDWJ82Bu5y0difCScxFSNkDWErFn0EmdU9kWmudkbeYeLpM8b/hv4hV4/j+PpfZEVXoHVzJV45fcx4PrgDU9P0DiS0xmKEdWrvHDbPFx5AATSWFADfeMeFQ33YECtQYw86YWz1bIDeAiR84BtS0njUiirDvmdOU77rMCRtA2De3P6X+0wORSjhrNAts7TlZ/+SyDrU/JmHz6KwCk2z4nSDNThY7tTRc4HvksYCzsD2L/gxC0DvW9lBUHmGh75K2dD83N45xFcJORNAdWtC/A0XUCJ9/iGpbNiAPFFs9ZDlHskn8TkHVDzPbXym8CHCIORpVBGkbWS0E84GQ+gHMj7YGhPSjzpSIYswDUgb1+Aq+kcIh6ydgtRiJKjFby3Bt/ox+QRjfFxxMvdPoruni7t/Ky/e0opo8i6iO6NibuR8DCaBzPyhuAiAeWWBboKj1Md2ohxjQZReuwJ4sEo5K0mLjb0HRxDXA4IUQZ53PsuexlF1pvnGN9+2EcQT3ps6kjbFjWyEXT9Aj0FNypo3Bda0aH5uwFlE9BCyFBeMhlfT/tj1AzTd+gIop6xVZbx03tfcpVRZK3rcng38JJGYBOPorimAbh2EWN+HhTRCCMx4kCF213Eh4oceLk4TtOId2G4Okr5hGtEryRDw6StjNHVKTbvfTetjCLr7C6Hf1Ccg+QOFwkuFBvvWIQrr3isNoot7nVxaEyosA14tDEBUcbXkgZbXIO/FM+HfYMkaQtRqhjX+7mqMgQZ7HJ4FzIVuajkTcHHAsqaRXhSsGgUo4arRY9t2amFzkCOSXKMxH9rsOu88XkaZzibY1w5UbZlDC6e1eXoYQAkDH/kMWiEAAMLdaPgRQy+X0D4w5m9dDUkkuX4dBI/EPokNje7fKS4SDHeTM829poycsjb5nFOKKoagkZiWMR9isNrw5ANgcDaqaerBkziN9hO8pxvxYgYdU2VXH1iUzlsvK5SQYDngO8ANy/U91IoQ5CnCYHRszEVi4CzQCyoFUcIZFgQIqquAckgKExM9T3UgknI2mPysiLqGoidVLRpzeSwPb9vf/KMGryKXEEIMf3/LQjCbk4uyAoAMeAbgjpBrQCMCl0bAye6MUacgbQNPuJh8UcDsv2weT5vNDeteHYSM6Ikp0WMr7Fr0mF7BT7+fGMkI2/KTlF2LzKVi6aMZu+hLodD/SLgGwZymRrEeIHwts6fSKzJFW88yUrzNybhT6YrBaGVrrUkQ21wnnRlJKL8tW9wq11lMGOCi1gH3LnQ9C2VMoqsnV0Onzc1F6KxwTcFRAAeIcRPLQSDV8y4I1tr9ovh3Qj/DkR43oDAxDkGNWZzfJjrjXK/SXkqPpCTteRijQTga4tJ41IoI4fs6HJ4NbBBYBuRwTWKeQyR+0A/t0BXxlmDPeyJxpVsUB5UZYNaPo5yoRq2mJSmeFZh+IIKD7ZezJBMyVvm40VU3ROLT+niKKMOeW6OMzYpbBNAGxbnHQb2KvIIcPkCPBlEsJOexognH7LgeUGFG7wlErhYlX0I2zWC9i5PdMiTDhqAXxPkS4tL4NIoI4c8AaRA4ySnXEcIhMNgSazHqIDwZ8B/LcCVAfD9BjnssOOGbDDkOFFy4DGKaMbGfk/8Sk7WFtTKVwAE/mjRiVwCZUzhHlHhsS5Tt5eocLYXsCKINWSx4q084SL5NxeF0d95mHGRhNFiATviQ3UUFRYHf3ZUiXc78ljIm+YiZ+V9LpLP5FbGcvvjMdoLITj6XV3O+guFG4xCE0saaahKlN9S4RXm13OfftnEGEg8esjg28U8Rw5mUuGIkrUEowyjPA68IMpHF5/ApVFWkMNX5ghw+ADC6txArEJDLWkELpIj3sqmLoENMy0EQNiw3RkyZKnCSDAZVSQBItBIVnkru4vrLpyZ03pN7wUxoIYRNWydQ5QvI+AMtHNDwxvy0N1+Ui2/5KLQm+9ixtkQ9Z60haxPMFKk2BJWh4TUX6rCay6irZY3YTiELc4pYSK3zDCgmwpxTmab1fBeX2wP5obICz40Rx9QIxdqJHs0Cr35Wc0IeZ/gGoI5cTp2BXCHGnnUR/K8iqxC2TEdLnRc2FCvKDNQ7hmER+cIlPsXNax3NvQPB7AYBBee1FNq2OAst/kIZrHUxaG4mjE33ias5t2qwqiP+ICPuEkN5wKjqpStB9Lr/z/knH+dsaGcS1h+1o2DCOvV8JoU/cRx40giECNgwAvnInKDhibzG6dKfhW+I8oRQmzvOYSvOwTP8FlRvVmUA3hQp7RyoYkcI8TL1/S2Hum5IG+654Rd/wj8wRyXvYjwcyqMSPF8JowyEStalPMiggoRwqUaolo2EmYam4R5lh9JGE7/Jsq3p9eLAJGDdi70OTlhovilhSyuWwZ6L8hXT9yn8Cpwxhzv4i4VfhnhB0iIFsmMMhEpnRi8CQ9TBKbXsR2HaKi/fJFk65S+XGjnQqRH989kR48FKbNSnzaEX6F7iwsV1hEiC39XFZxApMJQZliRGPpTIfJAcSw3oYU2ZbkJ+1FoOBhIhRWpYTATrIaluoUepa4x7H2lbma1pzC8f45WF2qwCl8AtgLrvYSHHHsYTGFlR1jREYYSYTAR+hNop9CfwmAS9q/oCCsSYSCFyAexfMhNbwXuUdhQZqXe+xxycvsiwufmaHVNCXgVwrPArcBGX/RXKMRpZzCQFCJ0hMGOMJBAKw/Hp/o3hRAXAH+HsA3DtRgOHfOy9JjSl7Qdx0cQ+oAb5vFTBvhIYf8J3K/wkArf17BqalYkrLJ9G+FDM1cSOoYzKXFBW8XWqRf8nhoOonxsAddcUhiEj5T9LyHobj/hYzIxsApYo7AeOL1L3F3vx0tmUEVBQNmC4UfAwialQqG/qrDulPrYT06Vv7l4uwo/r8L2OVpfR23uRsFRm+dv9poqCwKhbnirCn8/b1GW2XpN1QWZ4mMIlyD8x5ytsKVbfMx2j3m9CALwbWCzCher8KVi5nE5c0Oqwp0q7Cszh1SzUu/O48DjCFuAq4qvkl7M3F+DmI0J4AmBbwBfR9mzjPe5KHo+llXTnddTkfVjQS1IxagFqRi1IBWjFqRi1IJUjFqQilELUjFqQSpGLUjFqAWpGLUgFaMWpGLUglSMWpCKUQtSMWpBKkYtSMWoBakYtSAVoxakYvwfl7Kmmdjaw0wAAAAASUVORK5CYII=
`.trim();

  const ElementUtil = {
    createElement: function(tag, options = {}) {
      const element = document.createElement(tag);
      if (options.text) {
        element.textContent = options.text;
      }
      if (options.html) {
        element.innerHTML = options.html;
      }
      if (options.style) {
        Object.assign(element.style, options.style);
      }
      if (options.className) {
        element.className = options.className;
      }
      if (options.attributes) {
        for (let [key, value] of Object.entries(options.attributes)) {
          element.setAttribute(key, value);
        }
      }
      if (options.childrens) {
        options.childrens.forEach((child) => {
          element.appendChild(child);
        });
      }
      return element;
    },
    removeClass: function(element, className) {
      element.classList.remove(className);
    }
  };

  const ClipboardUtil = {
    setValue: function(text, type = "text/plain") {
      GM_setClipboard(text, type);
    }
  };

  var __async$e = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const CACHE_ROOT_DIVS = [];
  const InspectUtil = {
    generateShadowDomRoot: function(name, css = "", dir = "ltr", moveToEnd = false, observerTime = 2e4) {
      const insertRootElement = document.documentElement || document.body;
      const root = ElementUtil.createElement("div", {
        attributes: {
          "style": "all: initial!important;z-index:2147483647!important;display:block!important;",
          "action": "action-" + name
        }
      });
      root.addEventListener("wheel", (e) => {
        e.stopImmediatePropagation();
      }, { passive: false, capture: true });
      insertRootElement.appendChild(root);
      const outerDIV = ElementUtil.createElement("div", {
        attributes: {
          "data-extension-direction": dir,
          "id": "root-" + name
        }
      });
      const shadowRoot = root.attachShadow({ mode: "open" });
      this.addStyle(shadowRoot, name, css);
      shadowRoot.appendChild(outerDIV);
      const now = Date.now();
      if (moveToEnd) {
        const observer = new MutationObserver(() => {
          const lastChild = insertRootElement.lastElementChild;
          if (lastChild !== root && !lastChild.getAttribute("action") && document.documentElement) {
            if (Date.now() - now <= observerTime) {
              insertRootElement.appendChild(root);
            } else {
              observer.disconnect();
            }
          }
        });
        observer.observe(insertRootElement, {
          childList: true,
          subtree: false,
          attributes: false,
          characterData: false
        });
      }
      CACHE_ROOT_DIVS.push(shadowRoot);
      if (name && name.indexOf("aliexpress") != -1) {
        setInterval(() => {
          outerDIV.querySelectorAll("*[data-re-mark-tag='aliexpress']").forEach((element) => {
            Tools.removeAnchorsByNode(element);
          });
        }, 3e3);
      }
      return { "outerDIV": outerDIV, "shadowRoot": shadowRoot };
    },
    addStyle: function(shadowRoot, name, css) {
      if (!shadowRoot.querySelector("#style-" + name)) {
        const newStyle = document.createElement("style");
        newStyle.textContent = css;
        newStyle.id = "style-" + name;
        const existingStyle = shadowRoot.querySelector("style");
        if (existingStyle) {
          existingStyle.after(newStyle);
        } else {
          shadowRoot.insertBefore(newStyle, shadowRoot.firstChild);
        }
      }
    },
    openUrl: function(option) {
      const { active, affLink, close, pause, delay, position, target } = option;
      let realAffLink = affLink;
      if (!realAffLink) {
        return;
      }
      if (realAffLink.indexOf("http") == -1) {
        realAffLink = Tools.decryptStr(affLink);
      }
      if (target === "_blank") {
        setTimeout(() => {
          const newTab = GM_openInTab(realAffLink, {
            active,
            insert: position === "after"
          });
          if (close) {
            setTimeout(() => {
              newTab.close();
            }, pause);
          }
        }, delay);
      } else if (target === "_self") {
        setTimeout(() => {
          window.location.href = realAffLink;
        }, delay);
      } else if (target === "_replace") {
        setTimeout(() => {
          window.location.replace(realAffLink);
        }, delay);
      }
    },
    customOpenUrl: function(element, json, operate = "clickToJump", callback = {}) {
      const options = [];
      for (let i = 0; i < json.length; i++) {
        const item = json[i];
        const option = {
          "affLink": Tools.decryptStr(item.affLink),
          "close": item.close,
          "pause": item.pause,
          "delay": item.delay,
          "target": item.target,
          "active": item.active,
          "position": item.position,
          "dismissAfter": item.dismissAfter,
          "callbackEvent": item.callbackEvent
        };
        let code = item.code, msg = item.msg;
        if (code) {
          ClipboardUtil.setValue(Tools.decryptStr(code));
          if (element) {
            element.innerText = msg;
          }
        }
        options.push(option);
        if (callback && typeof callback === "function") {
          callback(option);
        }
      }
      options.sort((a, b) => a.target === "_blank" ? -1 : b.target === "_blank" ? 1 : 0).forEach((option, index) => {
        setTimeout(() => {
          this.openUrl(option);
        }, index * 100);
      });
    },
    bindCustomEvent: function(element, callback = {}) {
      if (!element) {
        return;
      }
      element.addEventListener("click", () => {
        try {
          const dataContent = element.getAttribute("data-content");
          const operate = element.getAttribute("name");
          const json = JSON.parse(dataContent);
          this.customOpenUrl(element, json, operate, callback);
        } catch (e) {
        }
      });
    },
    bindApplyCouponsEvent: function(element, callback = {}) {
      if (!element) {
        return;
      }
      element.addEventListener("click", () => {
        const dataContent = element.getAttribute("data-content");
        if (dataContent) {
          const dataContentJson = JSON.parse(dataContent)[0];
          if (dataContentJson.hasOwnProperty("codes") && dataContentJson.hasOwnProperty("platform") && dataContentJson.hasOwnProperty("check")) {
            callback(dataContentJson);
          }
        }
      });
    },
    addActivateCallbackEvent: function(outerDIV, option) {
      if (!outerDIV || !option) {
        return;
      }
      if (!option.callbackEvent) {
        return;
      }
      const { link, max, period } = option.callbackEvent;
      const decrypLink = Tools.decryptStr(link);
      let count = 0;
      let isRequesting = false;
      const intervalId = setInterval(() => __async$e(this, null, function* () {
        if (count >= max) {
          clearInterval(intervalId);
          return;
        }
        count += period;
        if (isRequesting) {
          return;
        }
        try {
          isRequesting = true;
          const data = yield Tools.request("post", decrypLink, null);
          if (data && data.code == "success") {
            const loopJson = JSON.parse(data.result);
            if (loopJson.hasOwnProperty("code") && loopJson.code == "ok") {
              clearInterval(intervalId);
              if (loopJson.hasOwnProperty("data") && loopJson.data) {
                const { replacement } = loopJson.data;
                for (let i = 0; i < replacement.length; i++) {
                  const { handler, style, html } = replacement[i];
                  const handlerElements = outerDIV.querySelectorAll(handler);
                  handlerElements.forEach((handlerElement) => {
                    handlerElement.innerHTML = html;
                    const handlerStyle = handlerElement.getAttribute("style") || "";
                    handlerElement.setAttribute("style", style + ";" + handlerStyle);
                  });
                }
              }
            }
          }
        } catch (e) {
        } finally {
          isRequesting = false;
        }
      }), period);
    }
  };

  var __async$d = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const LangueUtil = {
    updateDelay: 15 * 60 * 1e3,
    _locations: {
      "en": { "languageDefault": "Follow Browser" },
      "es": { "languageDefault": "Seguir el navegador" },
      "ar": { "languageDefault": "اتباع المتصفح" },
      "fr": { "languageDefault": "Suivre le navigateur" },
      "pt": { "languageDefault": "Seguir o navegador" },
      "ru": { "languageDefault": "Следовать браузеру" },
      "ja": { "languageDefault": "ブラウザに従う" },
      "de": { "languageDefault": "Dem Browser folgen" },
      "ko": { "languageDefault": "브라우저 따르기" },
      "it": { "languageDefault": "Segui il browser" },
      "id": { "languageDefault": "Ikuti browser" },
      "tr": { "languageDefault": "Tarayıcıyı takip et" },
      "pl": { "languageDefault": "Podążaj za przeglądarką" },
      "uk": { "languageDefault": "Слідувати браузеру" },
      "nl": { "languageDefault": "Volg browser" },
      "vi": { "languageDefault": "Theo trình duyệt" },
      "ms": { "languageDefault": "Ikut pelayar" },
      "th": { "languageDefault": "ตามเบราว์เซอร์" },
      "mx": { "languageDefault": "Seguir el navegador" },
      "zh-CN": { "languageDefault": "跟随浏览器" },
      "zh-TW": { "languageDefault": "跟隨瀏覽器" }
    },
    getLanguages: function() {
      var _a, _b, _c;
      const languages = [
        { code: "en", name: "English", dir: "ltr" },
        { code: "es", name: "Español", dir: "ltr" },
        { code: "ar", name: "العربية", dir: "rtl" },
        { code: "fr", name: "Français", dir: "ltr" },
        { code: "pt", name: "Português", dir: "ltr" },
        { code: "ru", name: "Русский", dir: "ltr" },
        { code: "ja", name: "日本語", dir: "ltr" },
        { code: "de", name: "Deutsch", dir: "ltr" },
        { code: "ko", name: "한국어", dir: "ltr" },
        { code: "it", name: "Italiano", dir: "ltr" },
        { code: "id", name: "Bahasa Indonesia", dir: "ltr" },
        { code: "tr", name: "Türkçe", dir: "ltr" },
        { code: "pl", name: "Polski", dir: "ltr" },
        { code: "uk", name: "Українська", dir: "ltr" },
        { code: "nl", name: "Nederlands", dir: "ltr" },
        { code: "vi", name: "Tiếng Việt", dir: "ltr" },
        { code: "ms", name: "Bahasa Melayu", dir: "ltr" },
        { code: "th", name: "ไทย", dir: "ltr" },
        { code: "mx", name: "Mexican Spanish", dir: "ltr" },
        { code: "cl", name: "Chilean Spanish", dir: "ltr" },
        { code: "zh-CN", name: "中文（简体）", dir: "ltr" },
        { code: "zh-TW", name: "中文（繁體）", dir: "ltr" }
      ];
      const language = (_a = languages.find((lang) => lang.code === DefaultValue.lang)) != null ? _a : languages[0];
      const defaultLanguage = Object.assign({}, language);
      defaultLanguage.code = "default";
      defaultLanguage.name = (_c = ((_b = this._locations[DefaultValue.lang]) != null ? _b : this._locations["en"])["languageDefault"]) != null ? _c : "Default";
      languages.unshift(defaultLanguage);
      return languages;
    },
    defaultLangueObjects: {
      "extension.structure.setting_modal_title": "Settings",
      "extension.structure.setting_modal_langue_title": "Language",
      "extension.structure.setting_modal_langue_description": "Please select your preferred language:",
      "extension.structure.setting_modal_history_title": "Browsing History Count:",
      "extension.structure.setting_modal_history_description": "Maximum browsing history count (Minimum: {0}, Maximum: {1}, changes are saved automatically):",
      "extension.structure.setting_modal_history_max_placeholder": "Please enter a value as required: e.g., 30",
      "extension.structure.setting_modal_clear_title": "Clear Cache:",
      "extension.structure.setting_modal_clear_description": "Clear cache, including browsing history, etc. Note: Once cleared, it cannot be recovered.",
      "extension.structure.setting_modal_clear_btn": "Click to Clear",
      "extension.structure.setting_modal_clear_confirm": "Do you want to clear all browsing history? Once cleared, it cannot be recovered.",
      "extension.structure.history_box_title": "Browsing History",
      "extension.structure.history_bar_hint": "History",
      "extension.structure.history_box_hit_today": "—— Today ——",
      "extension.structure.history_box_hit_yesterday": "—— Yesterday ——",
      "extension.structure.couponList_modal_retry": "Retry",
      "extension.structure.couponList_modal_copid": "Copied",
      "extension.structure.auto_detect_modal_description": "Finding great deals...",
      "extension.structure.auto_detect_modal_secondary_description": "Automatically tries codes to save you money.",
      "extension.structure.auto_detect_alert_error": "Coupongogo reminders you, it's already the best deal.",
      "extension.structure.auto_detect_alert_success": "Congratulations from Coupongogo, The code has been applied automatically!",
      "extension.structure.setting_window_show_display_title": "Display Settings",
      "extension.structure.setting_window_show_display_hide30m": "Hide for {0} minutes",
      "extension.structure.setting_window_show_display_session": "Hide for this shopping session",
      "extension.structure.setting_window_show_display_all": "Show all components",
      "extension.structure.setting_window_show_general_title": "General Settings",
      "extension.structure.setting_window_show_general_general": "Language, History, etc."
    },
    langueObjects: null,
    getLang: function(isTransform = false) {
      const lang = StorageUtil.getValue(StorageKeys.langue.custom, "default");
      if (isTransform) {
        return lang === "default" ? DefaultValue.lang : lang;
      }
      return lang;
    },
    setLang: function(lang) {
      StorageUtil.setValue(StorageKeys.langue.custom, lang);
    },
    getSelectedLanguage: function(selectedLang) {
      if (!selectedLang) {
        selectedLang = this.getLang(true);
      }
      let selectedLanguage = this.getLanguages().find((lang) => lang.code === selectedLang);
      if (!selectedLanguage) {
        selectedLanguage = this.getLanguages()[0];
      }
      return selectedLanguage;
    },
    getLangueByStorageKey: function(key) {
      var _a;
      key = "extension.structure." + key;
      let langueObjects = this.langueObjects;
      if (!langueObjects) {
        langueObjects = this.defaultLangueObjects;
      }
      return (_a = langueObjects[key]) != null ? _a : this.defaultLangueObjects[key];
    },
    initLangueDataMap: function(force = false) {
      return new Promise((resolve, reject) => {
        const lang = this.getLang(true);
        const now = new Date().getTime();
        const langueObjects = StorageUtil.getValue(StorageKeys.langue.objects, { "data": this.defaultLangueObjects, "time": now, "lang": "default" });
        if (now - langueObjects.time >= this.updateDelay || now === langueObjects.time || langueObjects.lang != lang || force) {
          try {
            const requestsBase = getRequestUrl()["getLangue"];
            Logger.log("info", "lang=======>", requestsBase.method, requestsBase.url, { "lang": lang });
            Tools.request(requestsBase.method, requestsBase.url, { "lang": lang }, { "Content-Type": "application/json;charset=UTF-8" }, 5 * 1e3).then((serverLangueJson) => {
              if (serverLangueJson.code === "success") {
                const serverLangueObjects = JSON.parse(serverLangueJson.result);
                StorageUtil.setValue(StorageKeys.langue.objects, { "data": serverLangueObjects, "time": new Date().getTime(), "lang": lang });
                this.langueObjects = serverLangueObjects;
                Logger.log("info", "get server langue success=======>", this.langueObjects);
              } else {
                Logger.log("info", "get server langue error=======>", this.langueObjects);
                this.langueObjects = this.defaultLangueObjects;
              }
            }).catch((error) => {
              this.langueObjects = this.defaultLangueObjects;
              Logger.log("error", error);
            }).then(() => {
              resolve("success");
            });
          } catch (error) {
            this.langueObjects = this.defaultLangueObjects;
            resolve("success");
          }
        } else {
          this.langueObjects = langueObjects.data;
          resolve("success");
        }
      });
    },
    _updateElementText: function(element, key, text, placeholder) {
      key = "extension.structure." + key;
      if ("extension.structure.setting_modal_history_description" === key) {
        const { min, max } = DefaultValue.history.records;
        if (text) {
          text = this.formatTemplateWithArray(text, [min, max]);
        }
      }
      if (text) {
        element.innerText = text;
      }
      if (placeholder) {
        element.setAttribute("placeholder", placeholder);
      }
    },
    refreshLangue: function(force = false) {
      return __async$d(this, null, function* () {
        const queryDirectionElements = (selector) => {
          return CACHE_ROOT_DIVS.flatMap((div) => div ? Array.from(div.querySelectorAll(selector)) : []);
        };
        const elementsWithLangue = queryDirectionElements("*[langue-extension-text],*[langue-extension-placeholder]");
        const directions = queryDirectionElements("*[data-extension-direction]");
        this.initLangueDataMap(force).then(() => {
          this.langueObjects;
          const selectedLanguage = this.getSelectedLanguage();
          directions.forEach((element) => {
            element.setAttribute("data-extension-direction", selectedLanguage.dir);
          });
          elementsWithLangue.forEach((element) => {
            let langueTextKey = element.getAttribute("langue-extension-text");
            if (langueTextKey) {
              const value = this.getLangueByStorageKey(langueTextKey);
              this._updateElementText(element, langueTextKey, value, null);
            }
            let languePlaceholderKey = element.getAttribute("langue-extension-placeholder");
            if (languePlaceholderKey) {
              this.getLangueByStorageKey(languePlaceholderKey);
              this._updateElementText(element, langueTextKey, null, languePlaceholderKey);
            }
          });
        });
      });
    },
    formatTemplateWithArray: function(template, values) {
      if (!template)
        return template;
      return template.replace(/{(\d+)}/g, (match, index) => {
        var _a;
        return (_a = values[index]) != null ? _a : match;
      });
    }
  };

  var __async$c = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const RequestUnionUtil = {
    _getBaseParams: function() {
      const token = StorageUtil.getValue(StorageKeys.token, "");
      return {
        v: ScriptConst.version,
        version: ScriptConst.version,
        no: ScriptConst.number,
        token: !!token ? token : ""
      };
    },
    _getDetectCouponParams: function() {
      return __async$c(this, null, function* () {
        const { Aliexpress, Ebay, Lazada, Bestbuy, Banggood } = PlatformModules;
        let platform = SupportData.support.p, marketplace = "", currency = "", countryCode = "";
        let lang = StorageUtil.getValue(StorageKeys.langue.custom, "default");
        if (lang === "default") {
          lang = DefaultValue.lang;
        }
        switch (platform) {
          case SupportData.supports.aliexpress.p:
            marketplace = yield Aliexpress.Aliexpress.getMarketplace();
            currency = yield Aliexpress.Aliexpress.getCurrency();
            break;
          case SupportData.supports.banggood.p:
            countryCode = Banggood.Banggood.getMarketplace();
            currency = Banggood.Banggood.getCurrency();
            marketplace = encodeURIComponent(JSON.stringify({ "countryCode": countryCode, "className": "", "html": "" }));
            break;
          default:
            countryCode = Tools.getCommonMarketplace();
            marketplace = encodeURIComponent(JSON.stringify({ "countryCode": countryCode, "className": "", "html": "" }));
        }
        let params = {
          platform,
          title: document.title,
          url: window.location.href,
          lang,
          marketplace,
          currency
        };
        params = Object.assign({}, params, this._getBaseParams());
        Logger.log("info", "detect coupon params====>", JSON.stringify(params));
        return params;
      });
    },
    _getEngineScreenParams: function(lists, platform) {
      let lang = "en";
      try {
        lang = document.documentElement.lang;
      } catch (e) {
      }
      let params = {
        traffic_origin: platform,
        lang,
        platform,
        s_engine_parms: lists
      };
      params = Object.assign({}, params, this._getBaseParams());
      Logger.log("info", "engineScreen params====>", JSON.stringify(params));
      return params;
    },
    request: function(method, url, params) {
      return new Promise((resolve) => {
        Tools.request(method, url, params).then((data) => {
          if (data && data.code == "success") {
            resolve(JSON.parse(data.result));
          }
        }).catch((error) => {
          resolve(null);
        });
      });
    },
    getDetectCouponResult: function() {
      return __async$c(this, null, function* () {
        const params = yield this._getDetectCouponParams();
        const { method, url } = getRequestUrl()["detectCoupon"];
        return this.request(method, url, params);
      });
    },
    getDetectInfoResult: function() {
      return __async$c(this, null, function* () {
        const params = yield this._getDetectCouponParams();
        const { method, url } = getRequestUrl()["detectInfo"];
        return this.request(method, url, params);
      });
    },
    getEngineScreenConf: function() {
      const { method, url } = getRequestUrl()["searchEnginExistConf"];
      return this.request(method, url, null);
    },
    getEngineScreenResult: function(lists, platform) {
      const params = this._getEngineScreenParams(lists, platform);
      const { method, url } = getRequestUrl()["engineScreen"];
      return this.request(method, url, params);
    },
    initRequestData: function() {
      return __async$c(this, null, function* () {
        try {
          const now = Date.now();
          let exchangeInfoLocal = StorageUtil.getValue(StorageKeys.exchangeInfo, null);
          const needFetchConfig = !exchangeInfoLocal || exchangeInfoLocal.time && now - exchangeInfoLocal.time > DefaultValue.updateExchangeInfoDelay;
          if (needFetchConfig) {
            const exchangeInfo = getRequestUrl()["exchangeInfo"];
            const exchangeInfoJsonServer = yield this.request(exchangeInfo.method, exchangeInfo.url, null);
            if (exchangeInfoJsonServer) {
              const { certificate, redirect } = exchangeInfoJsonServer;
              exchangeInfoLocal = {
                "certificate": certificate,
                "redirect": redirect,
                "time": now
              };
              StorageUtil.setValue(StorageKeys.exchangeInfo, exchangeInfoLocal);
            } else {
              Logger.log("error", "exchangeInfo====>null");
            }
          }
          if (!exchangeInfoLocal || !exchangeInfoLocal.certificate) {
            exchangeInfoLocal = DefaultValue.exchangeInfoLocal;
          }
          const tokenJson = yield this.request("POST", exchangeInfoLocal.certificate, null);
          if (tokenJson && tokenJson.token) {
            StorageUtil.setValue(StorageKeys.token, encodeURIComponent(tokenJson.token));
            Logger.log("info", "token====>", tokenJson.token);
          } else {
            Logger.log("info", "Token====>null");
          }
        } catch (error) {
        }
      });
    }
  };

  var css_248z$2 = ":root{--color-modeal-header-background:#fff;--color-modeal-content-background:#f9f9f9;--color-modeal-header-icon:#bfbfbf;--color-modeal-header-icon-hover:#6a7a9b;--size-padding-horizontal-modeal-header:10px;--size-height-modeal-icon:50px;--size-height-modeal-operat-icon:30px;--size-height-modeal-header:55px;--size-font-modeal-header-title:18px}[data-extension-direction=rtl]{direction:rtl!important}";

  const StyleUtil = {
    addStyle: function(css) {
      GM_addStyle(css);
    },
    init: function() {
      this.addStyle(css_248z$2 + css_248z$3);
    }
  };

  const Activate = {
    generate: function(couponTotal, badgeData, dragData, interfaceData) {
      const badgeCss = Object.entries(badgeData).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const dragCss = Object.entries(dragData).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const interfaceCss = Object.entries(interfaceData).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const drag = ElementUtil.createElement("div", {
        className: "drag all-center",
        attributes: {
          "style": dragCss
        },
        childrens: [
          ElementUtil.createElement("img", {
            attributes: {
              src: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='17'%20viewBox='0%200%2010%2017'%3e%3cg%20id='drag_icon'%20data-name='drag%20icon'%20transform='translate(-756.458%20-5682.563)'%3e%3ccircle%20id='Ellipse_277'%20data-name='Ellipse%20277'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(756.458%205682.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_280'%20data-name='Ellipse%20280'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(763.458%205682.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_281'%20data-name='Ellipse%20281'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(756.458%205689.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_283'%20data-name='Ellipse%20283'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(756.458%205696.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_282'%20data-name='Ellipse%20282'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(763.458%205689.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_284'%20data-name='Ellipse%20284'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(763.458%205696.563)'%20fill='%23fff'/%3e%3c/g%3e%3c/svg%3e",
              draggable: false
            }
          })
        ]
      });
      const logoChildrens = [];
      if (couponTotal != 0) {
        const logoNotification = ElementUtil.createElement("div", {
          className: "notification all-center pulse-reveal",
          text: couponTotal,
          attributes: {
            "style": badgeCss
          }
        });
        logoChildrens.push(logoNotification);
      }
      const logo = ElementUtil.createElement("div", {
        className: "logo",
        childrens: logoChildrens,
        attributes: {
          "style": interfaceCss
        }
      });
      const content = ElementUtil.createElement("div", {
        className: "content",
        childrens: [logo, drag]
      });
      const widget = ElementUtil.createElement("div", {
        className: "widget",
        attributes: {
          "style": "top:" + this.getActivateTop() + "px;z-index:2147483647!important"
        },
        childrens: [content]
      });
      this.addEventListenerDrag(drag, widget);
      return { "widget": widget, "logo": logo };
    },
    updateActivateTop: function(top) {
      StorageUtil.setValue(StorageKeys.activatePositionTop, top);
    },
    getActivateTop: function() {
      const innerHeight = window.innerHeight;
      let defaultTop = parseInt(innerHeight / 5);
      if (defaultTop >= 400) {
        defaultTop = 250;
      }
      let top = StorageUtil.getValue(StorageKeys.activatePositionTop, defaultTop);
      if (top >= innerHeight - 50) {
        top = innerHeight - 50;
      }
      return top;
    },
    addEventListenerDrag: function(drag, widget) {
      let isDragging = false, startY, elementY;
      let windowHeight = window.innerHeight;
      const self = this;
      function onMouseMove(e) {
        if (!isDragging)
          return;
        const deltaY = e.clientY - startY;
        let top = elementY + deltaY;
        if (top < 0) {
          top = 0;
        } else if (top > windowHeight - 50) {
          top = windowHeight - 50;
        }
        widget.style.top = `${top}px`;
        self.updateActivateTop(top);
      }
      function onMouseUp() {
        if (!isDragging)
          return;
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
      drag.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDragging = true;
        startY = e.clientY;
        elementY = parseInt(widget.style.top, 10) || 0;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }
  };

  var css_248z$1 = ".setting-piece:not(:last-child){margin-bottom:15px}.setting-piece .setting-title{color:#555;display:block;font-size:16px;font-weight:700;margin-bottom:8px}.setting-description{color:#888;font-size:12px;margin-bottom:10px}.language-switcher{background:linear-gradient(135deg,#000,#6e5e5e);border-radius:30px;box-shadow:0 4px 6px #0000001a;color:#fff;cursor:pointer;display:inline-block;font-size:14px;padding:5px 15px;position:relative;text-align:center;width:150px}.language-switcher .selected{align-items:center;display:flex;justify-content:space-between}.language-switcher .selected>span{flex-grow:1;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.language-switcher .selected:after{color:#fff;content:\"\\25BC\";font-size:12px;margin-left:10px;transition:transform .3s}.language-switcher.open .selected:after{transform:rotate(180deg)}.language-switcher .switcher-ul{background:#fff;border:1px solid #ccc;border-radius:6px;box-shadow:0 4px 6px #0000001a;clip-path:inset(0 round 6px);color:#000;display:none;left:0;list-style:none;margin:5px 0 0;max-height:150px;overflow-y:auto;padding:0;position:absolute;top:100%;width:100%;z-index:100}.language-switcher.open-ul .switcher-ul{display:block}.language-switcher .switcher-ul .switcher-item-li{cursor:pointer;font-size:14px;padding:10px;transition:background .3s}.language-switcher .switcher-ul .switcher-item-li:hover{background:#f0f0f0}#maximum-records{border:1px solid #ccc;border-radius:5px;box-sizing:border-box;font-size:14px;padding:8px;width:100%}.setting-clear-cache{background:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;font-size:14px;padding:10px;transition:background .3s;width:100%}.setting-clear-cache:hover{background:#0056b3}";

  const Dialog = function() {
    class Dialog2 {
      constructor() {
        this.root = null;
        this.mask = null;
        this.dialogStyle = null;
        this.closeBtn = null;
        this.content = null;
        this.dialogContent = null;
      }
      createElements(params) {
        const root = document.createElement("div");
        root.setAttribute("style", "all: initial!important;z-index:2147483647!important;display:block!important;");
        root.setAttribute("action", "action-dialog");
        (document.documentElement || document.body).appendChild(root);
        const mask = document.createElement("div");
        mask.classList.add("dialog-gcc-mask");
        const shadowRoot = root.attachShadow({ mode: "open" });
        shadowRoot.appendChild(mask);
        const content = document.createElement("div");
        content.classList.add("dialog-gcc-container");
        if (params.hasOwnProperty("direction")) {
          content.setAttribute("data-extension-direction", params.direction);
        }
        mask.appendChild(content);
        let styleText = `
        *[data-extension-direction='rtl']{
          direction: rtl!important;
        }
        .dialog-gcc-mask {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 9999999999999;
        }
        .dialog-gcc-container {
          max-width: 350px;
          width: 90%;
          background-color: #fff;
          box-shadow: 0 0 2px #999;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 5px;
        }
        .dialog-gcc-title {
          width: 100%;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          background-color: #dedede;
          color: #000;
          text-align: center;
          font-weight: 700;
          font-size: 17px;
          border-radius: 4px 4px 0 0;
          position: relative;
        }
        .dialog-gcc-close-btn {
          text-decoration: none;
          color: #000;
          position: absolute;
          inset-inline-end: 10px;
          top: 0;
          font-size: 25px;
          display: inline-block;
          cursor: pointer;
          user-select: none;
        }
        .dialog-gcc-content {
          padding: 15px;
          max-height: 400px;
          overflow: auto;
        }
      `;
        if (params.hasOwnProperty("styleSheet")) {
          styleText += params.styleSheet;
        }
        const dialogStyle = document.createElement("style");
        dialogStyle.textContent = styleText;
        shadowRoot.insertBefore(dialogStyle, shadowRoot.firstChild);
        this.root = root;
        this.mask = mask;
        this.content = content;
        this.dialogStyle = dialogStyle;
        this.shadowRoot = shadowRoot;
      }
      middleBox(params) {
        const { content } = this;
        content.replaceChildren();
        const title = document.createElement("div");
        title.classList.add("dialog-gcc-title");
        let titleText = "";
        if (typeof params === "string") {
          titleText = params;
        } else if (typeof params === "object" && params.title) {
          titleText = params.title;
        }
        const span = document.createElement("span");
        span.textContent = titleText;
        span.setAttribute("langue-extension-text", "setting_modal_title");
        title.appendChild(span);
        const closeBtn = document.createElement("span");
        closeBtn.textContent = "×";
        closeBtn.classList.add("dialog-gcc-close-btn");
        closeBtn.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.close();
        };
        title.appendChild(closeBtn);
        content.appendChild(title);
        this.closeBtn = closeBtn;
      }
      showMake(params) {
        this.createElements(params);
        this.middleBox(params);
        this.params = params;
        const { content } = this;
        const dialogContent = document.createElement("div");
        dialogContent.classList.add("dialog-gcc-content");
        dialogContent.insertAdjacentHTML("beforeend", params.content || "");
        content.appendChild(dialogContent);
        this.dialogContent = dialogContent;
        if (typeof params.onContentReady === "function") {
          params.onContentReady(this);
        }
      }
      close() {
        if (this.root) {
          this.root.remove();
        }
        const params = this.params;
        if (params && typeof params.onContentReady === "function") {
          params.onClose(this);
        }
        this.params = null;
      }
    }
    let dialog = null;
    return function() {
      if (!dialog) {
        dialog = new Dialog2();
      }
      return dialog;
    }();
  }();

  const SettingOperat = {
    changeLanguage: function($content, langCode) {
      const selectedLanguage = LangueUtil.getSelectedLanguage(langCode);
      $content.querySelector("#selected-language").innerText = selectedLanguage.name;
      this.toggleDropdown($content, false);
      const selectedLang = LangueUtil.getLang();
      if (selectedLang !== langCode) {
        LangueUtil.setLang(langCode);
        LangueUtil.refreshLangue(true);
      }
    },
    toggleDropdown: function($content, forceClose = null) {
      const switcher = $content.querySelector("#language-switcher");
      if (forceClose === false || switcher.classList.contains("open-ul")) {
        switcher.classList.remove("open-ul");
      } else {
        switcher.classList.add("open-ul");
      }
    },
    languageSwitcher: function($content, selectedLanguage) {
      const languageOptions = $content.querySelector("#language-options");
      LangueUtil.getLanguages().forEach((lang) => {
        const li = document.createElement("li");
        li.classList.add("switcher-item-li");
        li.textContent = lang.name;
        li.addEventListener("click", () => {
          this.changeLanguage($content, lang.code);
        });
        languageOptions.appendChild(li);
      });
      const switcher = $content.querySelector(".selected");
      switcher.addEventListener("click", () => {
        this.toggleDropdown($content);
      });
      $content.addEventListener("click", (e) => {
        if (!switcher.contains(e.target)) {
          this.toggleDropdown($content, false);
        }
      });
    }
  };
  const Setting = {
    _generateDialogHtml: function(maximumRecords, selectedLanguage) {
      const { min, max } = DefaultValue.history.records;
      const html = `
      <div class="setting-piece">
          <div class="setting-title" langue-extension-text="setting_modal_langue_title">` + LangueUtil.getLangueByStorageKey("setting_modal_langue_title") + `</div>
          <div class="setting-description" langue-extension-text="setting_modal_langue_description">` + LangueUtil.getLangueByStorageKey("setting_modal_langue_description") + `</div>
          <div class="language-switcher" id="language-switcher">
              <div class="selected">
                  <span id="selected-language">` + selectedLanguage.name + `</span>
              </div>
              <ul id="language-options" class="switcher-ul"></ul>
          </div>
      </div>
      <div class="setting-piece">
          <div class="setting-title" langue-extension-text="setting_modal_history_title">` + LangueUtil.getLangueByStorageKey("setting_modal_history_title") + `</div>
          <div class="setting-description" langue-extension-text="setting_modal_history_description">
            ` + LangueUtil.formatTemplateWithArray(
        LangueUtil.getLangueByStorageKey("setting_modal_history_description"),
        [min, max]
      ) + `
          </div>
          <input type="text" id="maximum-records"
            langue-extension-placeholder="setting_modal_history_max_placeholder" placeholder="` + LangueUtil.getLangueByStorageKey("setting_modal_history_max_placeholder") + `" value="${maximumRecords}">
      </div>
      <div class="setting-piece ">
          <div class="setting-title" langue-extension-text="setting_modal_clear_title">` + LangueUtil.getLangueByStorageKey("setting_modal_clear_title") + `</div>
          <div class="setting-description" langue-extension-text="setting_modal_clear_description">` + LangueUtil.getLangueByStorageKey("setting_modal_clear_description") + `</div>
          <button class="setting-clear-cache" id="clear-cache" langue-extension-text="setting_modal_clear_btn">` + LangueUtil.getLangueByStorageKey("setting_modal_clear_btn") + `</button>
      </div>
    `;
      return { "styleSheet": css_248z$1, "content": html };
    },
    showDialog: function(callback) {
      const { min, max } = DefaultValue.history.records;
      const maximumRecords = StorageUtil.getValue(StorageKeys.history.maximumRecordsKey, DefaultValue.history.records.default);
      const selectedLang = LangueUtil.getLang();
      const selectedLanguage = LangueUtil.getSelectedLanguage(selectedLang);
      const { styleSheet, content } = this._generateDialogHtml(maximumRecords, selectedLanguage);
      Dialog.showMake({
        title: LangueUtil.getLangueByStorageKey("setting_modal_title"),
        content,
        styleSheet,
        direction: selectedLanguage.dir,
        onContentReady: function($that) {
          CACHE_ROOT_DIVS.push($that.shadowRoot);
          SettingOperat.languageSwitcher($that.dialogContent, selectedLanguage);
          const $input = $that.dialogContent.querySelector("#maximum-records");
          const $clearCache = $that.dialogContent.querySelector("#clear-cache");
          $input.value = maximumRecords;
          $input.onchange = function(e) {
            const value = this.value;
            if (value >= min && value <= max) {
              StorageUtil.setValue(StorageKeys.history.maximumRecordsKey, value);
            }
          };
          $clearCache.addEventListener("click", function() {
            if (confirm(LangueUtil.getLangueByStorageKey("setting_modal_clear_confirm"))) {
              if (callback)
                callback();
              StorageUtil.setValue(StorageKeys.history.goodsHistory, DefaultValue.history.historyStorage);
            }
          });
        },
        onClose: function($that) {
          const index = CACHE_ROOT_DIVS.indexOf($that.mask);
          if (index !== -1) {
            CACHE_ROOT_DIVS.splice(index, 1);
          }
        }
      });
    }
  };

  const Mask = {
    generate: function() {
      const mask = ElementUtil.createElement("div", {
        className: "mask-container"
      });
      return mask;
    }
  };

  class AutoDetectBase {
    constructor() {
      this.BUTTON_CLICK_PASUE_MS = 700;
      this.VALIDATE_DELAY_MAX_MS = 10 * 1e3;
      this.VALIDATE_LOOP_DELAY_MS = 1500;
      this.VALIDATE_END_PASUE_MS = 500;
      this.HookType = {
        "react": "react",
        "default": "default"
      };
    }
    reactHook(element, value, useSetter = true) {
      var _a;
      const inputEvent = new InputEvent("input", {
        view: unsafeWindow,
        bubbles: true,
        cancelable: true
      });
      const changeEvent = new InputEvent("change", {
        view: unsafeWindow,
        bubbles: true,
        cancelable: true
      });
      const keyupEvent = new InputEvent("keyup", {
        view: unsafeWindow,
        bubbles: true,
        cancelable: true
      });
      element.setAttribute("readonly", "readonly");
      setTimeout(() => {
        element.removeAttribute("readonly");
      }, 200);
      const valueSetter = (_a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : _a.set;
      if (valueSetter && useSetter) {
        valueSetter.call(element, value);
      } else {
        element.value = value;
      }
      element.dispatchEvent(inputEvent);
      element.dispatchEvent(changeEvent);
      element.dispatchEvent(keyupEvent);
    }
    unusedHook(element, value) {
      element.value = value;
    }
    validate(supportData) {
      const submitButton = document.querySelector(supportData.submitButtonSelector);
      const couponInput = document.querySelector(supportData.couponInputSelector);
      const validateData = { "couponInput": null, "submitButton": null };
      if (couponInput) {
        validateData.couponInput = couponInput;
        validateData.submitButton = submitButton;
      }
      return validateData;
    }
    clickValidateButton(supportData, couponInput, submitButton, code, hookType) {
      if (!couponInput) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      if (hookType === this.HookType.react) {
        this.reactHook(couponInput, code);
      } else if (hookType === this.HookType.default) {
        this.unusedHook(couponInput, code);
      }
      if (!submitButton) {
        submitButton = document.querySelector(supportData.submitButtonSelector);
        if (!submitButton) {
          return new Promise((resolve) => {
            resolve(false);
          });
        }
      }
      return new Promise((resolve) => {
        const clickPromise = new Promise((resolveCheck) => {
          setTimeout(() => {
            submitButton.click();
            resolveCheck(true);
          }, this.BUTTON_CLICK_PASUE_MS);
        });
        clickPromise.then((result) => {
          resolve(result);
        });
      });
    }
  }

  var __async$b = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class AliexpressAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$b(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null, inputCode = null;
        let checkResult = false, current = 0;
        const checkInterval = setInterval(() => {
          errors = document.querySelector(supportData.applyErrorSelector);
          if (supportData.existingCodeSelector) {
            existingCode = document.querySelector(supportData.existingCodeSelector);
          }
          inputCode = document.querySelector(supportData.couponInputSelector);
          if (errors || existingCode || !inputCode || current >= this.VALIDATE_DELAY_MAX_MS) {
            clearInterval(checkInterval);
            checkResult = !!existingCode || !inputCode;
            setTimeout(() => {
              resolve(checkResult);
            }, this.VALIDATE_END_PASUE_MS);
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$a = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class WishAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$a(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null;
        let checkResult = false, current = 0;
        const checkInterval = setInterval(() => {
          errors = document.querySelector(supportData.applyErrorSelector);
          if (supportData.existingCodeSelector) {
            existingCode = document.querySelector(supportData.existingCodeSelector);
          }
          if (errors || existingCode || current >= this.VALIDATE_DELAY_MAX_MS) {
            clearInterval(checkInterval);
            checkResult = !!existingCode;
            setTimeout(() => {
              resolve(checkResult);
            }, this.VALIDATE_END_PASUE_MS);
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$9 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class EbayAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$9(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null;
        let checkResult = false, current = 0;
        errors = document.querySelector(supportData.applyErrorSelector);
        if (errors) {
          errors.remove();
        }
        const checkInterval = setInterval(() => {
          errors = document.querySelector(supportData.applyErrorSelector);
          if (supportData.existingCodeSelector) {
            existingCode = document.querySelector(supportData.existingCodeSelector);
          }
          if (errors || existingCode || current >= this.VALIDATE_DELAY_MAX_MS) {
            clearInterval(checkInterval);
            checkResult = !!existingCode;
            setTimeout(() => {
              resolve(checkResult);
            }, this.VALIDATE_END_PASUE_MS);
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$8 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class AmazonAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$8(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null, loading = null;
        let checkResult = false, current = 0;
        const checkInterval = setInterval(() => {
          loading = document.querySelector(supportData.loadingSelector);
          if (!loading) {
            errors = document.querySelector(supportData.applyErrorSelector);
            if (supportData.existingCodeSelector) {
              existingCode = document.querySelector(supportData.existingCodeSelector);
            }
            if (errors || existingCode || current >= this.VALIDATE_DELAY_MAX_MS) {
              clearInterval(checkInterval);
              checkResult = !!existingCode;
              setTimeout(() => {
                resolve(checkResult);
              }, this.VALIDATE_END_PASUE_MS);
            }
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$7 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const DetectHelper = {
    _tryClickExpand: function(supportData) {
      const { couponInputSelector, expandCodeBoxSelectors } = supportData;
      const couponInput = document.querySelector(couponInputSelector);
      if (couponInput) {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
      if (!expandCodeBoxSelectors || expandCodeBoxSelectors.length == 0) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      return new Promise((resolve) => __async$7(this, null, function* () {
        let result = false;
        for (let i = 0; i < expandCodeBoxSelectors.length; i++) {
          const elements = document.querySelectorAll(expandCodeBoxSelectors[i]);
          for (let j = 0; j < elements.length; j++) {
            let element = elements[j];
            element.click();
            result = yield new Promise((resolveInner) => {
              let elapsed = 0;
              const interval = 200, maxTime = 6e3;
              const timer = setInterval(() => {
                let hasCouponInput = document.querySelector(couponInputSelector);
                if (hasCouponInput) {
                  clearInterval(timer);
                  resolveInner(true);
                } else if (elapsed >= maxTime) {
                  clearInterval(timer);
                  resolveInner(false);
                }
                elapsed += interval;
              }, interval);
            });
            if (result) {
              break;
            }
          }
          if (result) {
            break;
          }
        }
        resolve(result);
      }));
    },
    isPrepared: function(supportData) {
      return new Promise((resolve) => {
        Tools.waitForElementByInterval(supportData.promoContainerSelector, document.body, true, 50, 5 * 1e3).then((promoContainerElement) => {
          if (promoContainerElement) {
            this._tryClickExpand(supportData).then((result) => {
              resolve(result);
            });
          } else {
            resolve(false);
          }
        }).catch(() => {
          resolve(false);
        });
      });
    }
  };
  const AutoDetectUtil = {
    validate: function(platform, supportData) {
      return __async$7(this, null, function* () {
        const preparedData = {
          "result": false
        };
        if (!!platform && !!supportData) {
          const isPrepared = yield DetectHelper.isPrepared(supportData);
          preparedData.result = isPrepared;
        }
        return preparedData;
      });
    },
    tryCode: function(platform, _supportData, code) {
      let promise = null;
      const supports = SupportData.supports;
      try {
        if (platform === supports.aliexpress.p) {
          promise = new AliexpressAutoDetect().start(_supportData, code);
        } else if (platform === supports.wish.p) {
          promise = new WishAutoDetect().start(_supportData, code);
        } else if (platform === supports.ebay.p) {
          promise = new EbayAutoDetect().start(_supportData, code);
        } else if (platform === supports.amazon.p) {
          promise = new AmazonAutoDetect().start(_supportData, code);
        }
      } catch (e) {
      }
      return promise;
    }
  };

  const CustomAlert = {
    show: function(params) {
      const style = document.createElement("style");
      const random = "_" + Math.ceil(Math.random() * 1e8);
      style.textContent = `
      .custom-alert-container` + random + ` {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2147483647;
        width: 250px;
      }
      .custom-alert-content` + random + ` {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        border: 1px solid #ecebeb;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px;
        opacity: 1;
        animation: fadein 0.5s;
      }
      .custom-alert-icon` + random + ` {
        margin-bottom: 10px;
      }
      .custom-alert-message` + random + ` {
        font-size: 15px;
        color: #333;
        text-align: center;
      }
      @keyframes customFadein` + random + ` {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes customFadeout` + random + ` {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
      const container = document.createElement("div");
      container.className = "custom-alert-container" + random;
      const alertContent = document.createElement("div");
      alertContent.className = `custom-alert-content` + random;
      container.appendChild(alertContent);
      if (params.icon) {
        const icon = document.createElement("div");
        icon.className = "custom-alert-icon" + random;
        icon.innerHTML = params.icon;
        alertContent.appendChild(icon);
      }
      const text = document.createElement("div");
      text.className = "custom-alert-message" + random;
      text.textContent = params.message;
      alertContent.appendChild(text);
      document.body.appendChild(container);
      document.head.appendChild(style);
      setTimeout(() => {
        alertContent.style.animation = "customFadeout" + random + " 0.5s";
        alertContent.addEventListener("animationend", () => {
          container.remove();
          style.remove();
        });
      }, params.delay);
    }
  };

  var __async$6 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const ProgressModal = {
    checkIsStop: false,
    _start: function() {
      this.checkIsStop = false;
      document.body.style.overflow = "hidden";
    },
    _end: function() {
      document.body.style.overflow = "auto";
      this.checkIsStop = true;
    },
    initProgress: function(progressBar) {
      progressBar.style.width = "0%";
    },
    updateProgressValue: function(progressBar, value) {
      progressBar.style.width = value * 100 + "%";
    },
    activeCouponItem: function(couponItem) {
      couponItem.classList.add("coupon-item-active");
    },
    inactiveCouponItem: function(couponItem) {
      ElementUtil.removeClass(couponItem, "coupon-item-active");
      couponItem.classList.add("coupon-item-lose");
    },
    closeModal: function(mask) {
      mask.remove();
      this._end();
    },
    addCloseEventListener: function(mask, modal) {
      modal.querySelector("div[class^='close']").addEventListener("click", (e) => {
        this.closeModal(mask);
      });
    },
    showCouponItems: function(mask, modal, platform, coupons, supportData) {
      return __async$6(this, null, function* () {
        const couponsWarpper = modal.querySelector("div[class^='deal-coupons-warpper']");
        const progressBar = modal.querySelector("div[class^='progress-bar']");
        const couponElements = coupons.map((coupon) => {
          return {
            "element": ElementUtil.createElement("div", {
              className: "coupon-item",
              text: coupon
            }),
            "code": coupon
          };
        });
        couponElements.forEach((item, index2) => {
          couponsWarpper.append(item.element);
        });
        let total = coupons.length;
        const alertHiddenDelay = 4e3;
        this.initProgress(progressBar);
        const validateData = yield AutoDetectUtil.validate(platform, supportData);
        if (!validateData || !validateData.result) {
          this.closeModal(mask);
          CustomAlert.show({
            "icon": alertErrorIconSVG,
            "message": LangueUtil.getLangueByStorageKey("auto_detect_alert_error"),
            "delay": alertHiddenDelay
          });
          return;
        }
        const results = [];
        for (let index2 = 0; index2 < total; index2++) {
          if (this.checkIsStop) {
            break;
          }
          const { element, code } = couponElements[index2];
          if (index2 != 0) {
            this.inactiveCouponItem(couponElements[index2 - 1].element);
          }
          this.activeCouponItem(element);
          this.couponScrollToCenter(couponsWarpper, element);
          this.updateProgressValue(progressBar, (index2 + 1) / total);
          let result = yield AutoDetectUtil.tryCode(platform, supportData, code);
          results.push({ "code": code, "result": result });
          if (result) {
            break;
          }
        }
        this.closeModal(mask);
        const successCodeObj = results.find((item) => item.result === true);
        if (successCodeObj) {
          CustomAlert.show({
            "icon": alertSuccessIconSVG,
            "message": LangueUtil.getLangueByStorageKey("auto_detect_alert_success"),
            "delay": alertHiddenDelay
          });
        } else {
          CustomAlert.show({
            "icon": alertErrorIconSVG,
            "message": LangueUtil.getLangueByStorageKey("auto_detect_alert_error"),
            "delay": alertHiddenDelay
          });
        }
      });
    },
    couponScrollToCenter: function(couponsWarpper, element) {
      const couponsWarpperRect = couponsWarpper.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollLeft = couponsWarpper.scrollLeft + (elementRect.left + elementRect.width / 2) - (couponsWarpperRect.left + couponsWarpperRect.width / 2);
      couponsWarpper.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    },
    generate: function(logoBase64, root, platform, coupons, supportData) {
      const { outerDIV } = root;
      this._start();
      const modalHtml = `
      <div class="modal-header">
        <div class="logo">
          <img src="` + logoBase64 + `" />
        </div>
        <div class="title"></div>
        <div class="btns">
          <div class="close">` + closeSVG + `</div>
        </div>
      </div>
      <div class="modal-body">
        <div class="deal-pic-warpper"></div>
        <div class="deal-description-warpper">
          <div class="title" langue-extension-text="auto_detect_modal_description">` + LangueUtil.getLangueByStorageKey("auto_detect_modal_description") + `</div>
          <div class="sub-title" langue-extension-text="auto_detect_modal_secondary_description">` + LangueUtil.getLangueByStorageKey("auto_detect_modal_secondary_description") + `</div>
        </div>
        <div class="deal-coupons-warpper"></div>
        <div class="deal-progress-warpper">
          <div class="progress-container">
            <div class="progress-bar" style="width:0px;"></div>
          </div>
        </div>
      </div>
    `;
      const mask = Mask.generate();
      const modal = ElementUtil.createElement("div", {
        className: "modal-content",
        html: modalHtml
      });
      mask.append(modal);
      outerDIV.append(mask);
      this.showCouponItems(mask, modal, platform, coupons, supportData);
      this.addCloseEventListener(mask, modal);
    }
  };

  var __async$5 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const FeatureControl = {
    createFeatureKey: function(key) {
      return {
        until: `${key}_disabledUntil`
      };
    },
    disableTemporarily: function(key, durationMs) {
      return __async$5(this, null, function* () {
        const until = Date.now() + durationMs;
        StorageUtil.setValue(this.createFeatureKey(key).until, until);
      });
    },
    isEnabled: function(key) {
      return __async$5(this, null, function* () {
        const { until } = this.createFeatureKey(key);
        const disabledUntil = StorageUtil.getValue(until, null);
        if (disabledUntil && Date.now() < disabledUntil) {
          return false;
        }
        return true;
      });
    },
    runIfEnabled: function(key, callback) {
      return __async$5(this, null, function* () {
        const enabled = yield this.isEnabled(key);
        if (enabled) {
          callback();
        }
      });
    }
  };

  var css_248z = ".history-panel-wrapper{box-sizing:border-box;position:fixed;z-index:2147483646}.history-panel-wrapper svg.icon-i87i-svg path{fill:var(--color-modeal-header-icon)!important}.history-panel-wrapper svg.icon-i87i-svg:hover path{fill:var(--color-modeal-header-icon-hover)!important}.history-panel-wrapper>.history-panel-aside-main{background-color:#fff;border:1px solid #ebebeb;border-radius:5px;bottom:70px;box-shadow:2px 2px 5px #b6bdc5;height:400px;overflow-x:hidden;overflow-y:auto;position:absolute;right:0;width:400px}.history-panel-wrapper>.history-panel-aside-main>.panel-aside-main-inner{display:flex;flex-direction:column;height:100%;width:100%}.history-panel-aside-main .panel-aside-main-header{align-items:center;background-color:var(--color-modeal-header-background);border-bottom:1px solid #ebe6e6;box-sizing:border-box;display:flex;height:var(--size-height-modeal-header);justify-content:space-between;padding:0 var(--size-padding-horizontal-modeal-header)}.history-panel-aside-main .panel-aside-main-header>.logo-header{align-items:center;display:flex;justify-content:center}.history-panel-aside-main .panel-aside-main-header>.logo-header>svg{height:var(--size-height-modeal-icon)!important;width:var(--size-height-modeal-icon)!important}.history-panel-aside-main .panel-aside-main-header>.title-header{flex:1;font-size:var(--size-font-modeal-header-title);font-weight:700;padding-left:10px}.history-panel-aside-main .panel-aside-main-header .btns-header{display:flex;flex-direction:row}.history-panel-aside-main .panel-aside-main-header .btns-header .close,.history-panel-aside-main .panel-aside-main-header .btns-header .setting{align-items:center;cursor:pointer;display:flex;justify-content:center;width:var(--size-height-modeal-operat-icon)}.history-panel-aside-main .panel-aside-main-content{background-color:var(--color-modeal-content-background);flex:1;overflow-x:hidden;overflow-y:auto}.history-panel-aside-main .panel-aside-main-content::-webkit-scrollbar{width:2px}.history-panel-aside-main .panel-aside-main-content::-webkit-scrollbar-track{background:#0000}.history-panel-aside-main .panel-aside-main-content::-webkit-scrollbar-thumb{background-color:#969696;border-radius:2px}.history-panel-aside-main .panel-aside-main-item{margin:5px 0;padding:5px}.history-panel-aside-main .panel-aside-main-item .item-title{color:#b6b6b6;font-size:13px;font-weight:500;padding:5px 0;text-align:center}.history-panel-aside-main .panel-aside-main-item .item-container{display:flex;flex-flow:wrap;flex-direction:row;justify-content:flex-start}.history-panel-aside-main .histories-box-review_item{margin:5px 0;overflow:hidden;width:33.3333%}.history-panel-aside-main .histories-box-review_item>a{background-color:#fff!important;border:1px solid #ccc!important;border-radius:5px!important;box-sizing:initial!important;display:block!important;margin:0 auto!important;position:relative!important;width:110px!important}.history-panel-aside-main .histories-box-review_item>a>.review-shadow{border:2px solid red;border-radius:5px;bottom:0;display:none;left:0;position:absolute;right:0;text-align:center;top:0;z-index:99}.history-panel-aside-main .histories-box-review_item>a>.review-shadow .delete-btn{background-color:red;border-radius:3px;color:#fff;font-size:13px;height:15px;line-height:10px;position:absolute;right:0;text-align:center;top:0;width:15px}.history-panel-aside-main .histories-box-review_item>a>.review-img{border-radius:5px 5px 0 0;height:110px;overflow:hidden;width:110px}.history-panel-aside-main .histories-box-review_item>a>.review-img>img{width:100%!important}.history-panel-aside-main .histories-box-review_item>a>.review-text{color:#000!important;font-size:13px!important;overflow:hidden!important;padding:5px!important;text-align:center!important;text-decoration:underline!important;text-overflow:ellipsis!important;white-space:nowrap!important}.history-panel-wrapper>.history-panel-aside-body{background-color:#fafafa;border-radius:5px;box-shadow:1px 1px 2px #b6bdc5;direction:ltr!important;display:flex;height:60px;overflow:hidden}.history-panel-wrapper>.history-panel-aside-body>div{align-items:center!important;display:flex!important;justify-content:center!important}.history-panel-aside-body .goods-expand{cursor:pointer;width:20px!important}.history-panel-aside-body .goods-expand svg{transition:transform .3s!important}.history-panel-aside-body .goods-review{flex-direction:row;transition:all .5s ease-in-out;width:auto}.history-panel-aside-body .goods-review-item{border-radius:4px;cursor:pointer;height:45px;line-height:45px;margin:0 5px;overflow:hidden;position:relative;width:45px}.history-panel-aside-body .goods-review-item>a{display:block!important;height:100%!important;width:100%!important}.history-panel-aside-body .goods-review-item>a>.review-shadow{background-color:#3d9ba433;bottom:0;display:none;left:0;position:absolute;right:0;text-align:center;top:0;z-index:99}.history-panel-aside-body .goods-review-item>a>.review-shadow img{width:15px!important}.history-panel-aside-body .goods-review-item img{width:100%!important}.history-panel-aside-body .history-box-expand{cursor:pointer;flex-direction:column;margin:0 10px;text-align:center}.history-panel-aside-body .history-box-expand svg{height:33px!important;width:33px!important}.history-panel-aside-body .history-box-expand label{font-size:12px!important;font-weight:700!important}.history-panel-aside-body .wrapper-drag-handle{box-shadow:0 3px 3px -2px #0003,0 3px 4px 0 #00000024,0 1px 8px 0 #0000001f;cursor:move;width:20px!important}";

  const GoodsHistory = {
    root: null,
    models: {
      history: "history-model"
    },
    push: function(platform, obj) {
      var _a;
      try {
        const storageObj = StorageUtil.getValue(StorageKeys.history.goodsHistory, DefaultValue.history.historyStorage);
        const maximumRecords = StorageUtil.getValue(StorageKeys.history.maximumRecordsKey, DefaultValue.history.records.default);
        const histories = (_a = storageObj[platform]) != null ? _a : [];
        if (histories.length >= maximumRecords) {
          histories.splice(0, parseInt(maximumRecords / 5));
        }
        const newArr = histories.filter((item, index) => item.id != obj.id);
        newArr.push(obj);
        storageObj[platform] = newArr;
        StorageUtil.setValue(StorageKeys.history.goodsHistory, storageObj);
      } catch (e) {
      }
    },
    get: function(platform, num = -1) {
      var _a;
      const storageObj = StorageUtil.getValue(StorageKeys.history.goodsHistory, DefaultValue.history.historyStorage);
      const histories = (_a = storageObj[platform]) != null ? _a : [];
      if (num > 0) {
        const showHistories = [];
        for (let i = histories.length - 1; i >= 0; i--) {
          if (showHistories.length >= num)
            break;
          showHistories.push(histories[i]);
        }
        return showHistories;
      }
      return histories;
    },
    remove: function(platform, id) {
      const storageObj = StorageUtil.getValue(StorageKeys.history.goodsHistory, DefaultValue.history.historyStorage);
      const histories = storageObj[platform];
      let newArr = histories.filter((item, index) => item.id != id);
      storageObj[platform] = newArr;
      StorageUtil.setValue(StorageKeys.history.goodsHistory, storageObj);
    },
    getGoodsByDateGroup: function(platform) {
      const histories = this.get(platform).reverse();
      const group = [];
      const today = new Date();
      const yesterday = new Date(today);
      const format = "dd/MM";
      yesterday.setDate(today.getDate() - 1);
      const todayStr = this.dateFormat(today, format);
      const yesterdayStr = this.dateFormat(yesterday, format);
      const showDateFormat = (todayStr2, yesterdayStr2, current) => {
        const langueFormat2 = {};
        if (current === todayStr2) {
          langueFormat2.str = LangueUtil.getLangueByStorageKey("history_box_hit_today");
          langueFormat2.langueKey = "history_box_hit_today";
        } else if (current === yesterdayStr2) {
          langueFormat2.str = LangueUtil.getLangueByStorageKey("history_box_hit_yesterday");
          langueFormat2.langueKey = "history_box_hit_yesterday";
        } else {
          langueFormat2.str = " —— " + current + " —— ";
          langueFormat2.langueKey = "";
        }
        return langueFormat2;
      };
      let items = [], cacheDateStr = null, currentDateStr = null, langueFormat = null;
      for (let i = 0; i < histories.length; i++) {
        today.setTime(histories[i].date);
        currentDateStr = this.dateFormat(today, format);
        if (!!cacheDateStr) {
          if (cacheDateStr != currentDateStr) {
            langueFormat = showDateFormat(todayStr, yesterdayStr, cacheDateStr);
            group.push({
              "str": langueFormat.str,
              "langueKey": langueFormat.langueKey,
              "items": items
            });
            items = [];
            cacheDateStr = currentDateStr;
          }
        } else {
          cacheDateStr = currentDateStr;
        }
        items.push(histories[i]);
      }
      if (items.length != 0) {
        langueFormat = showDateFormat(todayStr, yesterdayStr, cacheDateStr);
        group.push({
          "str": langueFormat.str,
          "langueKey": langueFormat.langueKey,
          "items": items
        });
      }
      return group;
    },
    dateFormat: function(date, format) {
      var showDate = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S+": date.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in showDate) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? showDate[k] : ("00" + showDate[k]).substr(("" + showDate[k]).length));
        }
      }
      return format;
    },
    showOrHideHistoryBox: function(platform) {
      const { outerDIV, shadowRoot } = this.root;
      const self = this;
      const group = this.getGoodsByDateGroup(platform);
      const contentElement = outerDIV.querySelector(".history-panel-aside-main .panel-aside-main-content");
      contentElement.innerHTML = "";
      let historiesBoxHtml = "", jumpUrl = "", imgUrl = "";
      for (let i = 0; i < group.length; i++) {
        historiesBoxHtml += `<div class="panel-aside-main-item">`;
        historiesBoxHtml += `<div class="item-title" langue-extension-text="` + group[i].langueKey + `">` + group[i].str + `</div>`;
        historiesBoxHtml += `<div class="item-container">`;
        for (let j = 0; j < group[i].items.length; j++) {
          jumpUrl = this.pretreatmentJumpUrl(group[i].items[j].url, platform);
          imgUrl = this.pretreatmentImageUrl(group[i].items[j].pic, platform);
          historiesBoxHtml += `
          <div class="histories-box-review_item">
            <a title="` + group[i].items[j].title + `" jump-tag="true" href="javascript:void(0);" jump-url="` + jumpUrl + `" target="_blank">
              <div class="review-shadow">
                <div class="delete-btn" data-id="` + group[i].items[j].id + `">×</div>
              </div>
              <div class="review-img"><img src="` + imgUrl + `" /></div>
              <div class="review-text">` + group[i].items[j].price + `</div>
            </a>
          </div>
        `;
        }
        historiesBoxHtml += `</div>`;
        historiesBoxHtml += `</div>`;
      }
      contentElement.innerHTML = historiesBoxHtml;
      outerDIV.querySelectorAll(".history-panel-aside-main .delete-btn").forEach((ele) => {
        ele.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const id = this.getAttribute("data-id");
          this.parentNode.parentNode.parentNode.remove();
          self.remove(platform, id);
        });
      });
      const items = outerDIV.querySelectorAll(".history-panel-aside-main .histories-box-review_item > a");
      items.forEach((ele) => {
        ele.addEventListener("mouseover", function() {
          this.querySelector(".review-shadow").style.display = "block";
        });
        ele.addEventListener("mouseout", function() {
          this.querySelector(".review-shadow").style.display = "none";
        });
      });
      outerDIV.querySelectorAll(".history-panel-aside-main a[jump-tag='true']").forEach((ele) => {
        ele.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const href = this.getAttribute("jump-url");
          Tools.openInTab(Tools.decryptStr(href));
        });
      });
    },
    pretreatmentJumpUrl: function(url, platform) {
      const exchangeInfoLocal = StorageUtil.getValue(StorageKeys.exchangeInfo, DefaultValue.exchangeInfoLocal);
      const redirect = exchangeInfoLocal.redirect;
      const jumpUrl = redirect + encodeURIComponent(url);
      return Tools.encryptStr(jumpUrl);
    },
    pretreatmentImageUrl: function(imgUrl, platform) {
      let dealImgUrl = "";
      if (platform == "aliexpress") {
        dealImgUrl = imgUrl.replace(/_\d+x\d+\./, "_150x150.");
      } else {
        dealImgUrl = imgUrl;
      }
      return dealImgUrl;
    },
    createHistoryBox: function(platform) {
      const { outerDIV, shadowRoot } = this.root;
      const wrapperOffset = StorageUtil.getValue(StorageKeys.history.offset, DefaultValue.history.offsetWrapper);
      const histories = this.get(platform, DefaultValue.history.toolbarGoodsNum);
      const selectedLanguage = LangueUtil.getSelectedLanguage();
      let goodsHtml = ``, jumpUrl = "";
      histories.forEach((h) => {
        jumpUrl = this.pretreatmentJumpUrl(h.url, platform);
        goodsHtml += `
        <div class="goods-review-item">
          <a title="` + h.title + `" jump-tag="true" jump-url="` + jumpUrl + `" target="_blank">
            <div class="review-shadow">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAVlJREFUWEftlsGRgzAMRS26wBQTUtluKltSDKYLlJUHMY6xZMGFi7lkCObr6cuWAHfzBTfHdw2gOdAcOOXAPM+/fGwB4OGcG7f7iX4R8d113dT3fby3XCYACgwAPxZBBiKYYRh2YOldFUAKjIivNNNlWUZEJEB2ZI9HazUQEUALLgluIH95thpEESCEQCKHbADgyfXNACcAeNEzpVyT9/6Zwx0ApOD/QFFAypKEvfdR74x7XwCaOGevANIpiPXWNm1eji8ATZyzCyGgdhos63gN6eQAorhFmMugOcml3PtJmo3FukpPqO6TdCMfHLBuIKkMiUvFU5RnXwSgP6W9kG6gbQ0tpya0NxvFftsx5JJIVucWWkp4uhHVIMhKajy0jptPtLMwLy634kJm6fSrzqVa4OIpqKlSfdd1HbdRHOufTj9+3zIFLwHUAK88N30PXBG2vtMAmgPNgQ/i7v8h6Um2jAAAAABJRU5ErkJggg==" />
            </div>
            <img src="` + h.pic + `" />
          </a>
        </div>
      `;
      });
      let html = `
      <div class="history-panel-wrapper" data-re-mark-tag="` + platform + `" style="bottom:` + wrapperOffset.bottom + `px; right:` + wrapperOffset.right + `px;">
        <div class="history-panel-aside-main" data-extension-direction="` + selectedLanguage.dir + `" style="display:none;">
          <div class="panel-aside-main-inner">
            <div class="panel-aside-main-header">
              <div class="logo-header">` + historyIconSVG + `</div>
              <div class="title-header" langue-extension-text="history_box_title">` + LangueUtil.getLangueByStorageKey("history_box_title") + `</div>
              <div class="btns-header">
                <div class="setting">` + settingSVG + `</div>
                <div class="close">` + closeSVG + `</div>
              </div>
            </div>
            <div class="panel-aside-main-content"></div>
          </div>
        </div>
        <div class="history-panel-aside-body">
          <div class="goods-expand">
            <svg focusable="false" class="icon-i87i-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1365" width="20" height="20"><path d="M317.84959998 926.1056a46.08 46.08 0 0 1 10.8544-29.9008L643.68639998 521.216a13.312 13.312 0 0 0 0-18.432l-3.6864-3.072L328.70399998 127.7952a46.4896 46.4896 0 0 1 71.0656-59.8016l311.0912 370.68799999a105.8816 105.8816 0 0 1 0 146.63680002l-311.0912 370.68799999a46.2848 46.2848 0 0 1-81.92-29.9008z" fill="#bfbfbf" p-id="1366"></path></svg>
          </div>
          <div class="goods-review">
            ` + goodsHtml + `
          </div>
          <div class="history-box-expand">
            ` + historyIconSVG + `
            <label langue-extension-text="history_bar_hint">` + LangueUtil.getLangueByStorageKey("history_bar_hint") + `</label>
          </div>
          <div class="wrapper-drag-handle">
            <svg focusable="false" class="icon-i87i-svg" viewBox="0 0 24 24" data-testid="DragIndicatorIcon"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" fill="#bfbfbf"></path></svg>
          </div>
        </div>
      </div>
    `;
      outerDIV.insertAdjacentHTML("beforeend", html);
      this.addEventListener(platform);
    },
    addDragEventListener: function() {
      const { outerDIV, shadowRoot } = this.root;
      const draggable = outerDIV.querySelector(".history-panel-wrapper .wrapper-drag-handle");
      const wrapper = outerDIV.querySelector(".history-panel-wrapper");
      const offsetWrapper = Object.assign({}, DefaultValue.history.offsetWrapper);
      let isDragging = false, startY, elementBottom;
      let windowHeight = window.innerHeight;
      let bottomMax = parseInt(windowHeight / 3) * 2, bottomMin = DefaultValue.history.offsetWrapper.bottom;
      window.addEventListener("resize", () => {
        windowHeight = window.innerHeight;
        bottomMax = parseInt(windowHeight / 3) * 2;
      });
      function onMouseUp() {
        if (!isDragging)
          return;
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        StorageUtil.setValue(StorageKeys.history.offset, offsetWrapper);
      }
      function onMouseMove(e) {
        if (!isDragging)
          return;
        const deltaY = e.clientY - startY;
        let newBottom = elementBottom - deltaY;
        if (newBottom <= bottomMin) {
          newBottom = bottomMin;
        } else if (newBottom > bottomMax) {
          newBottom = bottomMax;
        }
        wrapper.style.bottom = `${newBottom}px`;
        offsetWrapper.bottom = newBottom;
      }
      draggable.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (window.getComputedStyle(wrapper).position !== "absolute" && window.getComputedStyle(wrapper).position !== "fixed") {
          return;
        }
        isDragging = true;
        startY = e.clientY;
        elementBottom = parseInt(window.getComputedStyle(wrapper).bottom, DefaultValue.history.offsetWrapper.bottom) || DefaultValue.history.offsetWrapper.bottom;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    },
    addEventListener: function(platform) {
      const { outerDIV, shadowRoot } = this.root;
      const self = this;
      const items = outerDIV.querySelectorAll(".goods-review >.goods-review-item >a");
      items.forEach((ele) => {
        ele.addEventListener("mouseover", function() {
          this.querySelector(".review-shadow").style.display = "block";
        });
        ele.addEventListener("mouseout", function() {
          this.querySelector(".review-shadow").style.display = "none";
        });
      });
      const goodsExpandEle = outerDIV.querySelector(".history-panel-wrapper .goods-expand");
      if (goodsExpandEle) {
        goodsExpandEle.addEventListener("click", function() {
          const goodsReviewEle = this.nextElementSibling;
          const svgEle = this.querySelector("svg");
          svgEle.style.transition = "transform 0.3s";
          if (goodsReviewEle.style.width == "0px") {
            goodsReviewEle.style.width = "auto";
            svgEle.style.transform = "rotate(0deg)";
          } else {
            goodsReviewEle.style.width = "0px";
            svgEle.style.transform = "rotate(180deg)";
          }
        });
      }
      const historyBoxExpandEles = [
        outerDIV.querySelector(".history-panel-wrapper .history-box-expand"),
        outerDIV.querySelector(".history-panel-wrapper .close")
      ];
      const asideMainEle = outerDIV.querySelector(".history-panel-wrapper >.history-panel-aside-main");
      if (asideMainEle) {
        historyBoxExpandEles.forEach((ele) => {
          if (ele) {
            ele.addEventListener("click", function() {
              const computedDisplay = window.getComputedStyle(asideMainEle).display;
              if (computedDisplay === "none") {
                self.showOrHideHistoryBox(platform);
                asideMainEle.style.display = "block";
              } else {
                asideMainEle.style.display = "none";
              }
            });
          }
        });
      }
      document.addEventListener("click", function(event) {
        const path = event.composedPath();
        const clickedInsideShadow = path.some((el) => el === outerDIV || el === shadowRoot);
        if (!clickedInsideShadow) {
          asideMainEle.style.display = "none";
        }
      });
      const headerSettingElement = outerDIV.querySelector(".history-panel-wrapper .setting");
      if (headerSettingElement) {
        headerSettingElement.addEventListener("click", () => {
          Setting.showDialog(() => {
            outerDIV.querySelector(".history-panel-aside-body .goods-review").innerHTML = "";
            outerDIV.querySelector(".history-panel-aside-main .panel-aside-main-content").innerHTML = "";
          });
        });
      }
      outerDIV.querySelectorAll(".history-panel-aside-body a[jump-tag='true']").forEach((ele) => {
        ele.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const href = this.getAttribute("jump-url");
          Tools.openInTab(Tools.decryptStr(href));
        });
      });
      self.addDragEventListener();
    },
    show: function() {
      var _a;
      const outerDIV = (_a = this.root) == null ? void 0 : _a.outerDIV;
      if (outerDIV) {
        outerDIV.style.display = "block";
      }
    },
    hide: function() {
      var _a;
      const outerDIV = (_a = this.root) == null ? void 0 : _a.outerDIV;
      if (outerDIV) {
        outerDIV.style.display = "none";
      }
    },
    start: function(support) {
      try {
        if (support.record.disabled) {
          return;
        }
        const platform = support.p;
        const styles = css_248z$3 + css_248z;
        const root = InspectUtil.generateShadowDomRoot(platform + "-" + this.models.history, styles);
        this.root = root;
        this.createHistoryBox(platform);
      } catch (e) {
      }
    }
  };

  var __async$4 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const CouponListModal = {
    _root: null,
    _logoBase64: null,
    _hasModal: false,
    removeModel: function(modal) {
      modal.remove();
      this._hasModal = false;
    },
    addCloseEventListener: function(button, modal) {
      button.addEventListener("click", (e) => {
        this.removeModel(modal);
      });
    },
    addShowSettingEventListener: function(platform, modal) {
      return __async$4(this, null, function* () {
        const setting = modal.querySelector(".modal-header .btns> .setting");
        const dropdown = modal.querySelector(".modal-header #settingsDropdown");
        const hide30m = 15;
        const settingsData = [
          {
            category: LangueUtil.getLangueByStorageKey("setting_window_show_display_title"),
            items: [
              { id: "hide30m", label: LangueUtil.formatTemplateWithArray(
                LangueUtil.getLangueByStorageKey("setting_window_show_display_hide30m"),
                [hide30m]
              ) },
              { id: "showAll", label: LangueUtil.getLangueByStorageKey("setting_window_show_display_all") }
            ]
          },
          {
            category: LangueUtil.getLangueByStorageKey("setting_window_show_general_title"),
            items: [
              { id: "general", label: LangueUtil.getLangueByStorageKey("setting_window_show_general_general") }
            ]
          }
        ];
        const windowShow = yield FeatureControl.isEnabled(StorageKeys.featureControl.windowShow + "_" + platform);
        if (windowShow) {
          settingsData.forEach((group) => {
            group.items = group.items.filter((item) => item.id !== "showAll");
          });
        } else {
          settingsData.forEach((group) => {
            group.items = group.items.filter((item) => item.id === "showAll");
          });
        }
        const renderSettings = () => {
          dropdown.innerHTML = "";
          settingsData.forEach((group) => {
            const categoryDiv = document.createElement("div");
            categoryDiv.className = "setting-category";
            const title = document.createElement("div");
            title.className = "setting-category-title";
            title.textContent = group.category;
            categoryDiv.appendChild(title);
            group.items.forEach((item) => {
              const opt = document.createElement("div");
              opt.className = "setting-option";
              opt.textContent = item.label;
              opt.dataset.id = item.id;
              opt.addEventListener("click", () => {
                if (item.id === "hide30m") {
                  FeatureControl.disableTemporarily(StorageKeys.featureControl.windowShow + "_" + platform, hide30m * 60 * 1e3);
                  this.hideAllComponents();
                  this.removeModel(modal);
                } else if (item.id === "showAll") {
                  FeatureControl.enable(StorageKeys.featureControl.windowShow + "_" + platform);
                  this.showAllComponents();
                } else if (item.id === "general") {
                  this.removeModel(modal);
                  Setting.showDialog();
                }
                dropdown.classList.remove("active");
              });
              categoryDiv.appendChild(opt);
            });
            dropdown.appendChild(categoryDiv);
          });
        };
        setting.addEventListener("click", () => {
          dropdown.classList.toggle("active");
          if (dropdown.classList.contains("active")) {
            renderSettings();
          }
        });
        modal.addEventListener("click", (e) => {
          if (!modal.querySelector(".modal-header .btns").contains(e.target)) {
            dropdown.classList.remove("active");
          }
        });
      });
    },
    addApplyCouponsEventListener: function(button, modal) {
      InspectUtil.bindApplyCouponsEvent(button, (dataJson) => {
        this.removeModel(modal);
        const { platform, codes, check, open } = dataJson;
        Promise.resolve().then(() => {
          ProgressModal.generate(
            this._logoBase64,
            this._root,
            platform,
            codes,
            check
          );
        });
        Promise.resolve().then(() => {
          if (!!open) {
            try {
              InspectUtil.openUrl(open);
            } catch (e) {
            }
          }
        });
      });
    },
    generateRequest: function(modalBody) {
      const requestState = ElementUtil.createElement("div", {
        className: "request-state"
      });
      modalBody.append(requestState);
      return requestState;
    },
    generateRequestLoadding: function() {
      return ElementUtil.createElement("div", {
        className: "loading"
      });
    },
    generateRequestLoaddingError: function(callback) {
      const retry = ElementUtil.createElement("div", {
        className: "loading-error-retry",
        text: LangueUtil.getLangueByStorageKey("couponList_modal_retry"),
        attributes: {
          "langue-extension-text": "couponList_modal_retry"
        }
      });
      retry.addEventListener("click", () => {
        callback();
      });
      const error = ElementUtil.createElement("div", {
        className: "loading-error",
        childrens: [
          ElementUtil.createElement("div", {
            className: "loading-error-image",
            html: `
            <svg t="1735570722474" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7538" width="64" height="64"><path d="M143.1552 722.0224s-2.56-1.536-7.7824-4.096l4.096-7.2704c4.608 2.56 7.2704 4.096 7.2704 4.096l-3.584 7.2704z m-22.7328-12.9024c-4.608-2.56-9.3184-6.2464-14.4384-9.3184l4.608-7.2704c5.12 3.584 9.8304 6.7584 13.9264 9.3184l-4.096 7.2704z m-28.3648-19.6608c-4.608-3.072-8.8064-6.7584-13.4144-10.8544l5.632-6.7584c4.608 3.584 8.8064 7.2704 13.4144 10.3424l-5.632 7.2704z m-26.8288-22.2208c-4.096-4.096-8.2944-7.7824-12.3904-12.3904l6.2464-5.632c4.096 4.096 7.7824 8.2944 11.8784 11.8784l-5.7344 6.144z m-23.7568-25.2928c-3.584-4.608-7.2704-9.3184-10.3424-13.9264l7.2704-4.608c3.072 4.608 6.2464 8.8064 9.8304 13.4144l-6.7584 5.12z m-19.6608-29.3888c-2.56-5.7344-5.12-10.8544-6.7584-16.4864l8.2944-2.56c1.536 5.12 3.584 10.3424 6.2464 14.9504l-7.7824 4.096z m-10.8544-33.5872c-0.512-4.096-1.024-8.2944-1.024-12.3904v-5.632l8.2944 0.512v5.12c0 3.584 0.512 7.2704 1.024 10.8544l-8.2944 1.536z m10.8544-33.0752l-8.2944-2.56c1.536-5.7344 3.584-11.3664 6.7584-16.4864l7.7824 3.584c-3.1744 5.12-5.2224 10.24-6.2464 15.4624z m815.616-19.6608h-16.9984v-8.2944h16.4864l0.512 8.2944z m17.1008-0.512v-8.2944c5.7344 0 11.3664 0 16.9984-0.512l0.512 8.2944c-5.632 0.512-11.3664 0.512-17.5104 0.512z m-51.2 0c-5.632 0-11.3664-0.512-16.9984-0.512l0.512-8.2944c5.632 0 11.3664 0.512 16.9984 0.512l-0.512 8.2944z m85.8112-1.024l-0.512-8.2944c5.632-0.512 11.3664-0.512 16.9984-1.024l0.512 8.2944c-5.12 0.512-11.3664 0.512-16.9984 1.024z m-120.32-0.512c-5.7344-0.512-11.3664-0.512-16.9984-1.024l0.512-8.2944c5.7344 0.512 11.3664 0.512 17.1008 1.024l-0.6144 8.2944z m-34.0992-2.048c-5.632-0.512-11.3664-1.024-16.9984-1.024l0.512-8.2944c5.632 0.512 11.3664 1.024 16.9984 1.024l-0.512 8.2944z m189.0304-0.512l-1.024-8.2944c5.7344-0.512 11.3664-1.536 16.4864-2.56l1.536 8.2944c-5.632 1.024-11.3664 2.048-16.9984 2.56z m-223.1296-2.048l-17.1008-1.536 1.024-8.2944 16.9984 1.536-0.9216 8.2944z m-663.8592-1.024l-5.7344-6.2464c3.584-3.584 8.8064-7.2704 14.4384-10.3424l4.608 7.2704c-5.5296 3.072-9.6256 6.144-13.312 9.3184z m629.248-2.1504l-16.9984-1.536 1.024-8.2944 16.9984 1.536-1.024 8.2944z m291.84-0.512l-2.048-8.2944c5.7344-1.536 11.3664-2.56 15.9744-4.096l2.56 8.2944c-4.608 1.536-10.3424 3.072-16.4864 4.096z m-325.9392-3.072c-5.7344-0.512-11.3664-1.536-17.1008-2.048l1.024-8.2944c5.632 0.512 11.3664 1.536 16.9984 2.048l-0.9216 8.2944z m-34.0992-4.096c-5.632-0.512-11.3664-1.536-16.9984-2.048l1.024-8.2944c5.7344 0.512 11.3664 1.536 17.1008 2.048l-1.1264 8.2944z m393.1136-4.1984l-4.096-7.7824c5.12-2.56 9.3184-5.7344 12.3904-9.3184l6.2464 5.7344c-3.1744 4.7104-7.8848 8.2944-14.5408 11.3664z m-426.7008-0.512c-5.632-1.024-11.3664-1.536-16.9984-2.56l1.024-8.2944c5.632 1.024 11.3664 1.536 16.9984 2.56l-1.024 8.2944z m-499.5072-3.072l-3.584-7.7824c5.12-2.56 10.3424-4.608 15.9744-6.7584l3.072 7.7824c-5.7344 2.6624-10.8544 4.7104-15.4624 6.7584z m465.408-2.048c-5.7344-1.024-11.3664-1.536-17.1008-2.56l1.536-8.2944c5.632 1.024 11.3664 2.048 16.9984 2.56l-1.4336 8.2944z m-34.0992-5.7344l-16.9984-3.072 1.536-8.2944 17.1008 3.072-1.6384 8.2944z m-399.872-4.608l-3.072-8.2944c5.12-2.048 10.8544-3.584 16.4864-5.12l2.56 8.2944c-5.632 1.536-10.752 3.072-15.9744 5.12z m366.2848-1.024l-16.9984-3.072 1.536-8.2944 16.9984 3.072-1.536 8.2944z m-33.5872-6.7584c-5.7344-1.024-11.3664-2.048-17.1008-3.584l1.536-8.2944c5.632 1.024 11.3664 2.048 16.4864 3.584l-0.9216 8.2944zM128.7168 478.208l-2.048-8.2944c5.12-1.536 10.8544-3.072 16.4864-4.608l2.048 8.2944c-5.632 1.536-11.264 3.072-16.4864 4.608z m875.6224-2.56v-1.024c-0.512-4.096-2.048-8.2944-5.12-12.3904l6.7584-5.12c3.584 5.12 6.2464 10.8544 6.7584 16.4864v1.536l-8.3968 0.512zM395.264 474.112c-5.7344-1.024-11.3664-2.56-16.4864-3.584l2.048-8.2944c5.632 1.024 10.8544 2.56 16.4864 3.584l-2.048 8.2944z m-233.984-4.1984l-1.536-8.2944c5.632-1.536 10.8544-2.56 16.4864-4.096l2.048 8.2944c-5.632 1.536-11.264 2.56-16.9984 4.096z m200.3968-3.584c-5.632-1.536-11.3664-2.56-16.4864-4.096l2.048-8.2944c5.632 1.536 10.8544 2.56 16.4864 4.096l-2.048 8.2944z m-166.8096-4.096l-1.536-8.2944c5.7344-1.024 11.3664-2.048 17.1008-3.584l1.536 8.2944c-6.2464 1.4336-11.4688 2.56-17.1008 3.584z m133.2224-4.1984c-5.632-1.536-11.3664-3.072-16.4864-4.096l2.048-8.2944c5.7344 1.536 10.8544 3.072 16.4864 4.096l-2.048 8.2944z m-99.6352-2.56l-1.536-8.2944 16.9984-3.072 1.536 8.2944c-6.144 1.024-11.8784 2.048-16.9984 3.072z m759.296-3.584c-4.096-2.56-8.8064-5.12-14.4384-7.7824l3.584-7.7824c5.7344 2.56 11.3664 5.7344 15.4624 8.2944l-4.608 7.2704z m-725.7088-2.56l-1.536-8.2944c5.632-1.024 11.3664-2.048 16.9984-2.56l1.024 6.2464 2.56-8.2944c4.608 1.536 9.3184 2.56 14.4384 4.096l-1.024-4.608c5.632-1.024 11.3664-1.536 16.9984-2.56l1.024 8.2944c-5.7344 1.024-10.8544 1.536-15.9744 2.56l-1.536 5.12c-5.632-1.536-10.8544-3.072-16.4864-4.608l0.512 2.048c-5.632 0.9216-11.3664 1.9456-16.9984 2.56z m0-9.8304c-5.7344-1.536-10.8544-3.584-16.4864-5.12l2.56-8.2944c5.12 1.536 10.8544 3.584 15.9744 5.12l-2.048 8.2944z m67.6864-0.512l-1.024-8.2944c5.7344-1.024 11.3664-1.536 16.9984-2.048l1.024 8.2944c-5.632 0.4096-11.3664 1.536-16.9984 2.048z m628.1216-1.024c-5.12-1.536-10.3424-3.072-15.9744-4.608l2.048-8.2944c5.632 1.536 11.3664 3.072 16.4864 5.12l-2.56 7.7824z m-594.6368-3.1744l-1.024-8.2944c5.632-0.512 11.3664-1.536 16.9984-2.048l1.024 8.2944c-5.632 0.512-11.264 1.024-16.9984 2.048z m34.0992-4.096l-1.024-8.2944c5.7344-0.512 11.3664-1.024 17.1008-2.048l1.024 8.2944c-5.7344 1.024-11.3664 1.536-17.1008 2.048z m527.9744-1.536c-5.12-1.024-10.8544-2.048-16.4864-3.072l1.536-8.2944 16.9984 3.072-2.048 8.2944z m-695.808 0c-5.632-2.048-10.8544-3.584-15.9744-5.632l3.072-7.7824c5.12 2.048 10.3424 3.584 15.9744 5.632l-3.072 7.7824z m201.9328-2.048l-1.024-8.2944 16.9984-1.536 1.024 8.2944-16.9984 1.536z m34.0992-3.1744l-1.024-8.8064 16.9984-1.536 0.512 8.2944c-5.12 1.024-10.752 1.536-16.4864 2.048z m426.1888-0.512c-5.7344-1.024-10.8544-1.536-16.9984-2.048l1.024-8.2944c5.7344 0.512 11.3664 1.536 17.1008 2.048l-1.1264 8.2944zM499.6096 420.864l-0.512-8.2944c5.7344-0.512 11.3664-1.024 16.9984-1.024l0.512 8.2944c-5.632 0.512-11.264 1.024-16.9984 1.024z m358.5024-1.536l-16.9984-1.536 0.512-8.2944 16.9984 1.536-0.512 8.2944z m-324.4032-0.512l-0.512-8.2944c5.632-0.512 11.3664-0.512 16.9984-1.024l0.512 8.2944c-5.632 0-11.264 0.512-16.9984 1.024z m-336.7936-1.536c-5.632-2.56-10.8544-4.608-15.9744-6.7584l3.072-7.7824c5.12 2.048 10.3424 4.096 15.4624 6.7584l-2.56 7.7824z m370.8928-0.512l-0.512-8.2944c5.7344-0.512 11.3664-0.512 17.1008-1.024l0.512 8.2944c-5.7344 0.512-11.3664 0.512-17.1008 1.024z m256.2048-0.512c-5.7344-0.512-11.3664-0.512-17.1008-1.024l0.512-8.2944c5.7344 0.512 11.3664 0.512 16.9984 1.024l-0.4096 8.2944zM601.9072 414.72l-0.512-8.2944c5.632 0 11.3664-0.512 16.9984-0.512l0.512 8.2944c-5.632 0.512-11.264 0.512-16.9984 0.512z m188.0064-0.6144c-5.632 0-11.3664-0.512-16.9984-0.512l0.512-8.2944c5.632 0 11.3664 0.512 16.9984 0.512l-0.512 8.2944z m-153.9072-0.512v-8.2944c5.7344 0 11.3664-0.512 17.1008-0.512v8.2944c-5.7344 0-11.3664 0.512-17.1008 0.512z m119.808-0.512c-5.632 0-11.3664 0-16.9984-0.512v-8.2944c5.7344 0 11.3664 0 16.9984 0.512v8.2944z m-85.1968-0.512v-8.2944h16.9984v8.2944h-16.9984z m51.0976 0h-17.1008v-8.2944h17.1008v8.2944z m-556.3392-9.216c-5.12-2.56-10.8544-5.12-15.4624-7.7824l4.096-7.7824c4.608 2.56 9.8304 5.12 14.9504 7.7824l-3.584 7.7824z m-30.9248-16.0768c-5.12-3.072-10.3424-6.2464-14.4384-9.3184l5.12-6.7584c4.096 3.072 8.8064 6.2464 13.9264 9.3184l-4.608 6.7584zM105.984 366.592c-4.608-4.096-8.8064-8.8064-11.8784-12.9024l6.7584-5.12c3.072 4.096 6.7584 7.7824 10.8544 11.8784l-5.7344 6.144z m-20.1728-28.8768c-1.024-3.584-1.536-6.7584-1.536-10.3424 0-3.072 0.512-5.632 1.024-8.8064l8.2944 2.048c-0.512 2.048-0.512 4.096-0.512 6.7584 0 2.56 0.512 5.12 1.024 7.7824l-8.2944 2.56zM100.864 306.176l-7.2704-4.608c3.072-5.12 6.7584-9.8304 10.3424-14.4384l6.7584 5.12c-3.6864 5.12-7.2704 9.3184-9.8304 13.9264z m768.1024-16.4864c-5.632-0.512-11.3664-0.512-16.9984-1.024l0.512-8.2944c5.632 0.512 11.3664 1.024 16.9984 1.024l-0.512 8.2944z m-34.6112-2.6624l-17.1008-1.536 1.024-8.2944 16.9984 1.536-0.9216 8.2944z m-34.0992-4.096c-5.632-0.512-11.3664-1.536-16.9984-2.048l1.024-8.2944c5.632 0.512 11.3664 1.536 16.9984 2.048l-1.024 8.2944z m-678.7072-2.56l-6.2464-6.2464c4.096-4.096 8.2944-8.2944 12.9024-11.8784l5.12 6.7584c-4.096 4.096-8.192 7.7824-11.776 11.3664z m645.12-2.048c-5.632-1.024-11.3664-1.536-16.9984-2.56l1.024-8.2944c5.632 1.024 11.3664 1.536 16.9984 2.56l-1.024 8.2944z m-34.0992-4.7104l-17.1008-2.56 1.536-8.2944 16.9984 2.56-1.4336 8.2944z m-34.0992-5.632l-16.9984-2.56 1.536-8.2944 17.1008 2.56-1.6384 8.2944z m-33.4848-5.7344l-16.9984-3.072 1.536-8.2944 16.9984 3.072-1.536 8.2944z m-517.632-2.56l-4.608-7.2704c4.608-3.072 9.8304-6.2464 14.9504-8.8064l4.096 7.7824c-5.12 2.6624-9.8304 5.2224-14.4384 8.2944z m484.0448-3.072l-17.1008-3.072 1.536-8.2944 16.9984 3.072-1.4336 8.2944z m-34.0992-6.2464l-16.9984-3.072 1.536-8.2944 17.1008 3.072-1.6384 8.2944z m-33.5872-5.632l-16.9984-2.56 1.536-8.2944 16.9984 2.56-1.536 8.2944z m-386.9696-0.512l-3.072-7.7824c5.12-2.048 10.8544-4.096 15.9744-6.2464l2.56 8.2944c-5.12 1.536-10.24 3.6864-15.4624 5.7344z m352.8704-4.7104c-5.7344-1.024-11.3664-1.536-17.1008-2.56l1.024-8.2944c5.7344 1.024 11.3664 1.536 16.9984 2.56l-0.9216 8.2944z m-33.5872-5.12c-5.632-1.024-11.3664-1.536-16.9984-2.56l1.024-8.2944c5.7344 0.512 11.3664 1.536 17.1008 2.56l-1.1264 8.2944z m-287.232-1.024l-2.048-8.2944c5.632-1.536 11.3664-3.072 16.9984-4.096l1.536 8.2944c-5.632 1.024-11.264 2.56-16.4864 4.096z m253.6448-3.584c-5.632-0.512-11.3664-1.536-16.9984-2.048l1.024-8.2944c5.632 0.512 11.3664 1.536 16.9984 2.048l-1.024 8.2944z m-220.5696-3.6864l-1.536-8.2944c5.7344-1.024 11.3664-1.536 17.1008-2.56l1.024 8.2944c-5.7344 0.512-11.4688 1.536-16.5888 2.56z m186.4704 0l-17.1008-1.536 1.024-8.2944 16.9984 1.536-0.9216 8.2944z m-34.0992-3.072c-5.632-0.512-11.3664-1.024-16.9984-1.024l0.512-8.2944c5.632 0.512 11.3664 0.512 16.9984 1.024l-0.512 8.2944z m-118.784-1.024l-0.512-8.2944c5.632-0.512 11.3664-1.024 16.9984-1.024l0.512 8.2944c-6.144 0-11.8784 0.512-16.9984 1.024z m84.6848-1.024c-5.632 0-11.3664-0.512-16.9984-0.512v-8.2944c5.7344 0 11.3664 0.512 16.9984 0.512v8.2944z m-51.0976-1.024v-8.2944h16.9984v8.2944h-16.9984z m585.728 70.7584h-8.8064l0.512-8.2944h8.2944v8.2944z m0 0" fill="#CCE1FF" p-id="7539"></path><path d="M677.376 592.384l-324.4032 1.024c-3.072 0-6.2464-2.56-6.2464-6.2464v-7.7824c0-3.072 2.56-6.2464 6.2464-6.2464l324.4032-1.024c3.072 0 6.2464 2.56 6.2464 6.2464v7.7824c-0.6144 3.6864-3.1744 6.2464-6.2464 6.2464z m0 0" fill="#E6EFFF" p-id="7540"></path><path d="M863.8464 323.2768c-38.1952-42.9056-92.4672-99.7376-144.0768-160.6656l-287.232 1.024-2.048 39.7312 36.1472 25.2928-34.0992 8.2944 34.0992 30.0032-27.3408 4.608-21.1968 53.248-19.1488-25.2928-36.1472-19.1488 23.2448-27.8528-47.104-21.1968 30.0032-21.1968-25.2928-45.9776-124.5184 0.512c-23.2448 0-41.8816 19.1488-41.8816 42.3936l1.536 389.5296c0 23.2448 19.1488 41.8816 42.3936 41.8816l602.3168-1.536c23.2448 0 41.8816-19.1488 41.8816-42.3936l-1.536-271.2576z m0 0" fill="#FFFFFF" p-id="7541"></path><path d="M220.16 640.9216c-11.8784 0-23.2448-4.608-32.0512-13.4144-8.8064-8.8064-13.4144-20.1728-13.4144-32.0512l-1.536-389.5296c0-11.8784 4.608-23.2448 12.9024-32.0512 8.8064-8.8064 20.1728-13.4144 32.0512-13.4144l126.5664-0.512 27.8528 50.0736-27.8528 19.6608 45.4656 20.6848-23.7568 27.8528 33.5872 18.1248 15.9744 21.1968 19.6608-49.5616 22.7328-3.584-33.5872-29.4912 33.0752-8.2944-32.0512-22.7328 2.048-44.9536 291.84-1.024 1.024 1.024c34.0992 40.2432 69.2224 78.5408 100.2496 112.64 15.9744 16.9984 30.5152 33.0752 43.4176 47.5136l1.024 1.024v1.024l1.024 270.6432c0 24.7808-20.1728 45.4656-44.9536 45.4656L220.16 640.9216z m121.4464-474.2144l-122.9824 0.512c-10.3424 0-20.1728 4.096-27.3408 11.3664-7.2704 7.2704-11.3664 17.1008-11.3664 27.3408l1.536 389.5296c0 10.3424 4.096 20.1728 11.3664 27.3408 7.2704 7.2704 16.9984 11.3664 27.3408 11.3664l602.3168-1.536c21.7088 0 38.7072-17.6128 38.7072-39.2192l-1.024-269.1072c-12.9024-14.4384-27.3408-30.0032-42.3936-47.0016-31.0272-33.5872-65.6384-71.7824-99.7376-111.616l-282.5216 0.512-1.536 35.1232 40.2432 28.3648-35.1232 9.3184 34.6112 30.5152-32.5632 5.12-22.7328 56.832-22.1184-29.9008-39.2192-20.6848 23.2448-27.3408-48.0256-21.7088 32.0512-22.7328-22.7328-42.3936z m0 0" fill="#A2ADC2" p-id="7542"></path><path d="M860.672 318.0544c-1.024 7.7824-7.7824 12.9024-14.9504 12.3904l-137.9328-14.4384c-7.7824-1.024-12.9024-7.7824-12.3904-14.9504l11.3664-125.0304c1.024-7.7824 7.7824-12.9024 14.9504-12.3904l138.9568 154.4192z m0 0" fill="#FFEED4" p-id="7543"></path><path d="M847.2576 333.6192h-1.536l-137.9328-13.9264c-4.608-0.512-8.2944-2.56-11.3664-6.2464-2.56-3.584-4.096-7.7824-3.584-12.3904l11.3664-125.0304c1.024-9.3184 9.3184-15.9744 18.6368-14.9504h1.024l1.024 1.024 139.4688 154.9312v1.536c-1.024 8.8064-8.8064 15.0528-17.1008 15.0528zM720.6912 167.2192c-5.12 0-9.8304 4.096-10.3424 9.3184l-11.3664 125.0304c-0.512 2.56 0.512 5.7344 2.048 7.7824s4.096 3.584 7.2704 3.584l137.9328 14.4384c2.56 0.512 5.7344-0.512 7.7824-2.048s3.072-3.584 3.584-5.7344L720.6912 167.2192z m0 0" fill="#A2ADC2" p-id="7544"></path><path d="M828.7232 864.0512h-629.76c-15.4624 0-28.3648-12.9024-28.3648-28.3648l-42.3936-271.6672c0-15.4624 12.9024-28.3648 28.3648-28.3648h720.0768c15.4624 0 28.3648 12.9024 28.3648 28.3648L857.088 835.6864c-0.512 15.4624-12.9024 28.3648-28.3648 28.3648z m0 0" fill="#FFEED4" p-id="7545"></path><path d="M828.7232 867.2256h-629.76c-17.6128 0-31.5392-13.9264-31.5392-31.5392l-42.3936-271.1552c0-18.1248 13.9264-32.0512 31.5392-32.0512h720.0768c17.5104 0 31.5392 13.9264 31.5392 31.5392L860.16 836.1984c0 16.9984-14.4384 31.0272-31.4368 31.0272zM156.672 538.624c-13.9264 0-25.2928 11.3664-25.2928 25.2928l42.3936 271.1552c0 14.4384 11.3664 25.8048 25.2928 25.8048h629.1456c13.9264 0 25.2928-11.3664 25.2928-25.2928l48.0256-272.2816c0-13.4144-11.3664-24.7808-25.2928-24.7808H156.672z m0 0" fill="#A2ADC2" p-id="7546"></path><path d="M411.3408 671.9488c0 3.584 1.536 7.7824 4.096 10.3424s6.7584 4.096 10.3424 4.096 7.7824-1.536 10.3424-4.096 4.096-6.7584 4.096-10.3424-1.536-7.7824-4.096-10.3424-6.7584-4.096-10.3424-4.096-7.7824 1.536-10.3424 4.096c-2.56 3.072-4.096 6.656-4.096 10.3424z m170.9056 0c0 3.584 1.536 7.7824 4.096 10.3424s6.7584 4.096 10.3424 4.096 7.7824-1.536 10.3424-4.096 4.096-6.7584 4.096-10.3424-1.536-7.7824-4.096-10.3424-6.7584-4.096-10.3424-4.096-7.7824 1.536-10.3424 4.096c-2.4576 3.072-4.096 6.656-4.096 10.3424z m0 0M561.152 757.6576c5.12 0 9.3184-3.072 8.2944-6.7584-4.608-18.1248-27.8528-32.0512-55.808-32.0512-27.8528 0-51.0976 13.9264-55.808 32.0512-1.024 3.584 3.072 6.7584 8.2944 6.7584 4.096 0 7.7824-2.048 8.2944-4.608 3.072-12.9024 19.6608-22.2208 39.2192-22.2208 19.6608 0 35.6352 9.8304 39.2192 22.2208 0.512 2.56 4.096 4.608 8.2944 4.608z m0 0" fill="#A2ADC2" p-id="7547"></path><path d="M33.1776 498.8928c0 71.8848 58.2656 130.1504 130.1504 130.1504 71.8848 0 130.1504-58.2656 130.1504-130.1504s-58.2656-130.1504-130.1504-130.1504c-71.8848 0-130.1504 58.2656-130.1504 130.1504z m0 0" fill="#FFFFFF" p-id="7548"></path><path d="M163.328 632.1152c-73.3184 0-133.3248-59.904-133.3248-133.3248S90.0096 365.568 163.328 365.568s133.3248 59.904 133.3248 133.3248-60.0064 133.2224-133.3248 133.2224z m0-260.3008c-69.7344 0-127.0784 56.832-127.0784 127.0784 0 69.7344 56.832 127.0784 127.0784 127.0784s127.0784-56.832 127.0784-127.0784c0-69.7344-56.832-127.0784-127.0784-127.0784z m0 0" fill="#A2ADC2" p-id="7549"></path><path d="M173.6704 572.2112c-2.56 2.56-6.2464 4.608-9.8304 4.608s-7.2704-1.536-9.8304-4.096-4.096-6.7584-4.096-10.3424 1.536-7.7824 4.096-10.3424 6.2464-4.608 9.8304-4.608 7.2704 1.536 9.8304 4.096 4.096 6.7584 4.096 10.3424-1.536 7.7824-4.096 10.3424z m5.2224-116.736l-6.2464 71.7824c0 5.7344-4.608 9.8304-9.8304 9.8304-5.12 0-9.8304-4.096-10.3424-9.8304l-9.3184-71.7824c-0.512-1.536-0.512-2.56-0.512-4.096 0-10.3424 7.7824-19.1488 18.1248-19.1488s18.6368 8.2944 18.6368 18.6368c0 2.048-0.512 3.584-0.512 4.608z m0 0M643.7888 601.1904c-2.56 0-4.608 2.048-4.608 4.096v32.5632c0 2.56 2.048 4.096 4.608 4.096s4.608-2.048 4.608-4.096v-32.5632c0-2.048-2.048-4.096-4.608-4.096z m19.0464 0c-2.56 0-4.608 2.048-4.608 4.096v32.5632c0 2.56 2.048 4.096 4.608 4.096s4.608-2.048 4.608-4.096v-32.5632c0.1024-2.048-1.9456-4.096-4.608-4.096z m21.1968 0c-2.56 0-4.608 2.048-4.608 4.096v32.5632c0 2.56 2.048 4.096 4.608 4.096s4.608-2.048 4.608-4.096v-32.5632c0.1024-2.048-2.048-4.096-4.608-4.096z m0 0" fill="#A2ADC2" p-id="7550"></path></svg>
          `
          }),
          retry
        ]
      });
      return error;
    },
    setCouponsHtml: function(root, modal) {
      const { outerDIV, shadowRoot } = root;
      const modalBody = modal.querySelector("div[name='modalBody']");
      const self = this;
      const generateRequest = this.generateRequest(modalBody);
      const generateRequestLoadding = this.generateRequestLoadding();
      const generateRequestLoaddingError = this.generateRequestLoaddingError(() => {
        generateRequest.remove();
        this.setCouponsHtml(root, modal);
      });
      generateRequest.append(generateRequestLoadding);
      RequestUnionUtil.getDetectCouponResult().then((dataJson) => {
        if (!dataJson) {
          generateRequestLoadding.remove();
          generateRequest.append(generateRequestLoaddingError);
          return;
        }
        generateRequest.remove();
        const { data, structure } = dataJson;
        if (structure.hasOwnProperty("css") && structure.hasOwnProperty("html")) {
          const { css, html } = structure;
          InspectUtil.addStyle(this._root.shadowRoot, "coupon-list", css);
          modalBody.innerHTML = html;
          [".discount-base", ".cgg-store-item", ".showmore-btn", "*[name='cgg02xClickToActivate']"].flatMap((selector) => Array.from(modalBody.querySelectorAll(selector))).forEach((button) => {
            const isActivateButton = button.matches("*[name='cgg02xClickToActivate']");
            InspectUtil.bindCustomEvent(button, (option) => {
              if (isActivateButton) {
                InspectUtil.addActivateCallbackEvent(outerDIV, option);
              }
            });
          });
          const tabs = modalBody.querySelectorAll("a[data-toggle='tab']");
          const tabPanes = modalBody.querySelectorAll(".tab-pane");
          tabs.forEach((element) => {
            element.addEventListener("click", function(e) {
              e.preventDefault();
              e.stopPropagation();
              tabs.forEach((tab) => tab.classList.remove("active"));
              e.target.classList.add("active");
              tabPanes.forEach((tab) => tab.classList.remove("fade-in", "active"));
              const toggle = modalBody.querySelector(e.target.getAttribute("data-href") || e.target.getAttribute("href"));
              toggle.classList.add("fade-in", "active");
            });
          });
          const items = modalBody.querySelectorAll(".cgg-store-item");
          items.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
              e.target.querySelector("span").classList.add("underline-show");
            });
            item.addEventListener("mouseleave", (e) => {
              e.target.querySelector("span").classList.remove("underline-show");
            });
          });
          const activateButton = modalBody.querySelector("*[name='activateButton']");
          self.addApplyCouponsEventListener(activateButton, modal);
        }
      }).catch((error) => {
        generateRequestLoadding.remove();
        generateRequest.append(generateRequestLoaddingError);
      });
    },
    showAllComponents: function() {
      var _a;
      const outerDIV = (_a = this._root) == null ? void 0 : _a.outerDIV;
      if (outerDIV) {
        outerDIV.querySelector(".widget").style.display = "block";
      }
      GoodsHistory.show();
    },
    hideAllComponents: function() {
      var _a;
      const outerDIV = (_a = this._root) == null ? void 0 : _a.outerDIV;
      if (outerDIV) {
        outerDIV.querySelector(".widget").style.display = "none";
      }
      GoodsHistory.hide();
    },
    generate: function(logoBase64, root, title, modalPosition, platform) {
      if (this._hasModal) {
        return;
      }
      const { outerDIV, shadowRoot } = root;
      this._root = root;
      this._logoBase64 = logoBase64;
      const contentHtml = `
      <div class="modal-header">
        <div class="logo">
          <img src="` + logoBase64 + `" />
        </div>
        <div class="title">` + title + `</div>
        <div class="btns">
          <div class="setting">` + settingSVG + `</div>
          <div class="setting-dropdown" id="settingsDropdown"></div>
          <div class="close">` + closeSVG + `</div>
        </div>
      </div>
      <div class="modal-body" name="modalBody">

      </div>
    `;
      let modelCss = Object.entries(modalPosition).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const modal = ElementUtil.createElement("div", {
        className: "coupon-list-widget-conent",
        html: contentHtml,
        attributes: {
          "style": modelCss
        }
      });
      outerDIV.append(modal);
      this._hasModal = true;
      const close = modal.querySelector(".modal-header .btns> .close");
      this.addCloseEventListener(close, modal);
      this.addShowSettingEventListener(platform, modal);
      this.setCouponsHtml(root, modal);
      return modal;
    }
  };

  var __async$3 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const InspectCouponsHTML = {
    root: null,
    models: {
      flyout: "flyout-model",
      detect: "detect-model"
    },
    getStyle: function() {
      const css = css_248z$3 + css_248z$5 + css_248z$4;
      return css.replace(/@logo@/g, logoBase64);
    },
    showFlyOut: function(root, flyout, platform, logoBase64) {
      const { outerDIV, shadowRoot } = root;
      if (!!flyout && !!flyout.html && !!flyout.css && !!flyout.conf) {
        const { html, css, conf } = flyout;
        InspectUtil.addStyle(shadowRoot, this.models.flyout, css);
        outerDIV.insertAdjacentHTML("beforeend", html);
        const cggfCloseFlyout = () => {
          const flyoutEl = outerDIV.querySelector("[name='" + flyout.conf.name + "']");
          if (flyoutEl) {
            flyoutEl.classList.add(flyout.conf.close_animation);
            flyoutEl.addEventListener("animationend", () => flyoutEl.remove(), { once: true });
          }
        };
        if (flyout.conf.delay > 0) {
          setTimeout(cggfCloseFlyout, flyout.conf.delay);
        }
        const closeButton = outerDIV.querySelector(flyout.conf.close_button);
        if (closeButton) {
          closeButton.addEventListener("click", cggfCloseFlyout);
        }
        InspectUtil.bindCustomEvent(outerDIV.querySelector("*[name='cgg02xClickToActivate']"), (option) => {
          if (!option) {
            return;
          }
          if (option.hasOwnProperty("dismissAfter") && option.dismissAfter) {
            cggfCloseFlyout();
          }
          if (option.hasOwnProperty("callbackEvent")) {
            InspectUtil.addActivateCallbackEvent(outerDIV, option);
          }
        });
        InspectUtil.bindApplyCouponsEvent(outerDIV.querySelector("*[name='applyCouponButton']"), (dataJson) => {
          const { codes, check, open } = dataJson;
          Promise.resolve().then(() => {
            ProgressModal.generate(
              logoBase64,
              root,
              platform,
              codes,
              check
            );
          });
          Promise.resolve().then(() => {
            if (!!open) {
              try {
                InspectUtil.openUrl(open);
              } catch (e) {
              }
            }
          });
        });
      }
    },
    start: function() {
      return __async$3(this, null, function* () {
        var _a;
        const support = SupportData.support;
        const platform = support.p;
        const windowShow = yield FeatureControl.isEnabled(StorageKeys.featureControl.windowShow + "_" + platform);
        let infoJson = null;
        try {
          infoJson = yield RequestUnionUtil.getDetectInfoResult();
        } catch (e) {
        }
        if (!infoJson)
          return;
        const couponTotal = infoJson["coupon_total"];
        const modalPosition = infoJson["modal"];
        const historyShow = infoJson["history_show"];
        const iconJson = infoJson["icon"];
        const badgeData = iconJson["badge"];
        const dragData = iconJson["drag"];
        const interfaceData = iconJson["interface"];
        const cggJson = infoJson["cgg"];
        const autoOpen = cggJson["auto_open"];
        const modalTitle = cggJson["current_platform"];
        const logoBase64$1 = !!cggJson["logo"] ? cggJson["logo"] : logoBase64;
        const moveToEnd = cggJson["move_to_end"];
        const observerTime = (_a = cggJson["observer_time"]) != null ? _a : 20 * 1e3;
        const flyout = infoJson["flyout"];
        if (historyShow) {
          GoodsHistory.start(support);
          if (!windowShow) {
            GoodsHistory.hide();
          }
        }
        if (!infoJson["show"]) {
          return;
        }
        const selectedLanguage = LangueUtil.getSelectedLanguage();
        const style = this.getStyle();
        const root = InspectUtil.generateShadowDomRoot(
          platform + "-" + this.models.detect,
          style,
          selectedLanguage.dir,
          moveToEnd,
          observerTime
        );
        const { outerDIV } = root;
        this.root = root;
        outerDIV.setAttribute("data-re-mark-tag", platform);
        const { widget, logo } = Activate.generate(couponTotal, badgeData, dragData, interfaceData, platform);
        outerDIV.append(widget);
        if (windowShow) {
          if (autoOpen) {
            CouponListModal.generate(logoBase64$1, root, modalTitle, modalPosition, platform);
          }
        } else {
          widget.style.display = "none";
        }
        logo.addEventListener("click", (e) => {
          CouponListModal.generate(logoBase64$1, root, modalTitle, modalPosition, platform);
        });
        setTimeout(() => {
          this.showFlyOut(root, flyout, platform, logoBase64$1);
          outerDIV.setAttribute("status", "complete");
        }, 100);
      });
    }
  };

  var __async$2 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const SearchEnginScreen = {
    blockAttributeKey: "jscan-slo-u8",
    uniqueMarkAttributeKey: "jvtxi-uid-t8",
    loopIsComplete: true,
    UUIDGenerator: function() {
      let counter = 0;
      const seed = Math.floor(Math.random() * 1e6).toString(36);
      return function getUUID() {
        const prefix = Date.now().toString(36);
        return `${seed}${prefix}${(counter++).toString(36)}`;
      };
    }(),
    getLinkByElement: function(element, findTag) {
      let searchElement = null;
      if (findTag == "this") {
        searchElement = element;
      } else if (/^child@/.test(findTag)) {
        searchElement = element.querySelector(findTag.replace(/^child@/, ""));
      }
      return searchElement;
    },
    pickupSelectors: function(confJson, platform) {
      const list = new Array();
      for (let i = 0; i < confJson.length; i++) {
        const itemJson = confJson[i];
        if (!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")) {
          continue;
        }
        const { elements, matches } = itemJson;
        const isMatch = matches.map((reg) => new RegExp(reg.replace(/\\\\/g, "\\"), "i").test(window.location.href)).some((res) => res);
        if (isMatch) {
          for (let j = 0; j < elements.length; j++) {
            list.push({
              "selector": elements[j]["element"],
              "findA": elements[j]["findA"]
            });
          }
        }
      }
      return list;
    },
    queryElements: function(selectors, platform) {
      return __async$2(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((selectorObj) => {
            if (selectorObj.selector) {
              const elements = document.querySelectorAll(selectorObj.selector + ":not([" + this.blockAttributeKey + "='true'])");
              Logger.log("info", "search items======>", elements);
              const findA = selectorObj.findA;
              elements.forEach((element) => {
                if (element && !element.getAttribute(this.blockAttributeKey) && !element.querySelector("[" + this.blockAttributeKey + "]")) {
                  const linkElement = this.getLinkByElement(element, findA);
                  const handler = this.UUIDGenerator();
                  element.setAttribute(this.uniqueMarkAttributeKey, handler);
                  element.setAttribute(this.blockAttributeKey, "true");
                  if (linkElement) {
                    let link = linkElement.getAttribute("href") || linkElement.textContent;
                    if (link) {
                      link = link.replace(/\s+/g, "");
                    }
                    if (link && link.indexOf("http") != -1) {
                      items.push({
                        "handler": handler,
                        "link": link,
                        "platform": platform,
                        "element": element
                      });
                    }
                  }
                }
              });
            }
          });
          if (items.length > 0) {
            yield this.search(items, platform);
          }
        } catch (e) {
        }
      });
    },
    search: function(items, platform) {
      return __async$2(this, null, function* () {
        const lists = [];
        items.forEach((item) => {
          lists.push({ "handler": item.handler, "url": item.link });
        });
        const dataJson = yield RequestUnionUtil.getEngineScreenResult(lists, platform);
        if (dataJson && dataJson.list) {
          const { list } = dataJson;
          this.createHtml(items, list, platform);
        }
      });
    },
    createHtml: function(items, list, platform) {
      for (let i = 0; i < list.length; i++) {
        const { handler, content } = list[i];
        const item = items.find((obj) => obj.handler === handler);
        if (!item) {
          continue;
        }
        if (item.hasOwnProperty("handler") && item.hasOwnProperty("element")) {
          item.handler;
          let element = item.element;
          if (content) {
            element.insertAdjacentHTML("afterbegin", content);
          }
        }
      }
      document.querySelectorAll("*[name='se-rebate-343234xy-funx']").forEach((element) => {
        InspectUtil.bindCustomEvent(element);
      });
    },
    start: function(platform) {
      return __async$2(this, null, function* () {
        const confDataJson = yield RequestUnionUtil.getEngineScreenConf();
        if (!confDataJson) {
          return;
        }
        const confJson = confDataJson[platform];
        const runSearch = () => {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            const selectors = this.pickupSelectors(confJson, platform);
            this.queryElements(selectors, platform).then(() => {
              this.loopIsComplete = true;
            });
          }
        };
        runSearch();
        setInterval(() => {
          runSearch();
        }, 1500);
      });
    }
  };

  const MidListener = {
    start: function() {
      if ((window.location.host !== "www.jtmate.com" || window.location.href.indexOf("www.jtmate.com/mid/merge") == -1) && !ScriptConst.isDev) {
        return;
      }
      const autoRedirect = document.querySelector(".auto-redirect");
      if (autoRedirect) {
        const dataContent = autoRedirect.getAttribute("data-content");
        if (dataContent) {
          const json = JSON.parse(dataContent);
          InspectUtil.customOpenUrl(null, json);
        }
      }
    }
  };

  const GoodsRecord = {
    start: function() {
      const href = window.location.href;
      const support = SupportData.support;
      if (support.record.disabled) {
        return;
      }
      const { title, price, cover } = support.record.elements;
      if (!support.detail.test(href)) {
        return;
      }
      const id = Tools.getGoodsIdByLink(href);
      if (title && price && cover) {
        Promise.all([
          Tools.waitForElementByInterval(cover, document.body, true),
          Tools.waitForElementByInterval(price, document.body, false, 10, 5e3)
        ]).then((elements) => {
          const coverElement = elements[0];
          const priceElement = elements[1];
          const titleElement = document.querySelector(title);
          if (coverElement) {
            var imgSrc = "";
            if (coverElement.tagName == "IMG") {
              imgSrc = coverElement.getAttribute("data-src") || coverElement.getAttribute("data-url") || coverElement.getAttribute("src");
            } else if (coverElement.tagName == "SOURCE") {
              imgSrc = coverElement.getAttribute("srcSet") || coverElement.getAttribute("src");
            }
            const price2 = priceElement ? priceElement.innerText : "Unknown";
            const title2 = titleElement ? titleElement.innerText : "--";
            const goods = { "id": id, "url": href, "pic": imgSrc, "date": new Date().getTime(), "price": price2, "title": title2 };
            GoodsHistory.push(support.p, goods);
          }
        }).catch(() => {
        });
      }
    }
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  const supportModules = {
    InspectCouponsHTML,
    SearchEnginScreen,
    MidListener,
    GoodsRecord
  };
  const AllModules = __spreadValues(__spreadValues({}, PlatformModules), supportModules);

  var __async$1 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const SupportsHelper = {
    defaultSupportsString: `
    {
      "jtmMid":{
          "p":"jtmMid",
          "match": "www\\\\.jtmate\\\\.com\\\\/mid",
          "record":{
              "disabled":true
          },
          "disabled":false
      },
      "aliexpress": {
          "p": "aliexpress",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?aliexpress\\\\.[a-z]{2,}(\\\\.[a-z]{2,})*(\\\\/.*)?",
          "detail": "\\\\/item\\\\/[^.\\\\/]+\\\\.html",
          "trade": ["\\\\/trade\\\\/confirm\\\\.html", "\\\\/checkout\\\\?"],
          "record":{
              "elements":{
                  "title":"h1[data-pl='product-title'], h1[class*='HazeProductDescription_HazeProductDescription__smallText_']",
                  "price":"span.product-price-value, div[class*='currentPriceText'], div[class*='HazeProductPrice_SnowPrice__container']>div",
                  "cover":"div[class*='slider--img'] >img, div[class*='__previewItem__'] picture[class*='Picture__container']>source"
              },
              "disabled":false
          },
          "disabled":false
      },
      "lazada":{
          "p": "lazada",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?lazada\\\\.[\\\\w.-]+([/?#].*)?$",
          "detail": "\\\\/products\\\\/.*-i\\\\d+.*\\\\.html",
          "trade":[],
          "record":{
              "elements":{
          "title":"h1[class*='pdp-mod-product-badge-title']",
                  "price":"div[class*='product-current-price-container'],div[class*='product-price-content-salePrice'],.pdp-product-price",
                  "cover":"div[class*='gallery-preview-panel'] >img:last-child, .gallery-preview-panel__content >img:last-child"
              },
              "disabled":false
          },
          "disabled":false
      },
      "banggood":{
          "p": "banggood",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?banggood\\\\.[\\\\w.-]+([/?#].*)?$",
          "detail":"\\\\/.*-p-\\\\d+\\\\.html",
          "trade":[],
          "record":{
              "elements":{
                  "title":".product-title-text",
                  "price":".newbie-price",
                  "cover":"a.p-img >img"
              },
              "disabled":false
          },
          "disabled":false
      },
      "ebay": {
          "p": "ebay",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?ebay\\\\.[\\\\w.-]+([/?#].*)?$",
          "detail":"\\\\/itm\\\\/\\\\d+",
          "trade":[],
          "record":{
              "elements":{
                  "title":".x-item-title__mainTitle",
                  "price":".x-price-primary >span",
                  "cover":".ux-image-grid-item >img, .ux-image-carousel-item >img"
              },
              "disabled":false
          },
          "disabled":false
      },
      "bestbuy": {
          "p": "bestbuy",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?bestbuy\\\\.[\\\\w.-]+([/?#].*)?$",
          "detail":"\\\\/site\\\\/.*\\\\/\\\\d+\\\\.p",
          "trade":[],
          "record":{
              "elements":{
                  "title":".sm:text-title-sm",
                  "price":"*[class*='_price_']",
                  "cover":"*[class*='displayingImage'] img"
              },
              "disabled":true
          },
          "disabled":false
      },
      "shopee": {
          "p": "shopee",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?shopee\\\\.[\\\\w.-]+([/?#].*)?$",
          "record":{
              "disabled":true
          },
          "disabled":false
      },
      "wish": {
          "p": "wish",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?wish\\\\.[\\\\w.-]+([/?#].*)?$",
          "record":{
              "disabled":true
          },
          "disabled":false
      },
      "amazon": {
          "p": "amazon",
          "match": "^https:\\\\/\\\\/([\\\\w-]+\\\\.)?amazon\\\\.[\\\\w.-]+([/?#].*)?$",
          "record":{
              "disabled":true
          },
          "disabled":false
      }
    }
  `,
    getSupportsByServer: function() {
      return __async$1(this, null, function* () {
        const { method, url } = getRequestUrl()["supports"];
        const finalUrl = url + "&v=" + ScriptConst.version + "&no=" + ScriptConst.number + "&url=" + encodeURIComponent(window.location.href);
        const serverData = yield Tools.request(method, finalUrl, null);
        let supportsString = null;
        if (serverData && serverData.code === "success") {
          supportsString = serverData.result;
          if (supportsString) {
            supportsString = supportsString.replace(/\\\\/g, "\\");
          }
        }
        return supportsString;
      });
    },
    analysisSupports: function() {
      return __async$1(this, null, function* () {
        let supportObj = StorageUtil.getValue(StorageKeys.supports, "");
        try {
          if (!supportObj || typeof supportObj !== "object" || !supportObj.time || new Date().getTime() - supportObj.time > DefaultValue.updateSupportsDelay) {
            const serverSupports = yield this.getSupportsByServer();
            supportObj = {
              time: new Date().getTime(),
              supports: serverSupports
            };
            if (serverSupports) {
              StorageUtil.setValue(StorageKeys.supports, supportObj);
            }
          } else {
          }
        } catch (e) {
          supportObj = {
            time: new Date().getTime(),
            supports: this.defaultSupportsString
          };
        }
        let supportsString = supportObj.supports;
        if (!supportsString) {
          supportsString = this.defaultSupportsString;
        }
        let supportsJson = null;
        try {
          supportsJson = JSON.parse(supportsString);
        } catch (e) {
          StorageUtil.setValue(StorageKeys.supports, "");
          supportsJson = JSON.parse(this.defaultSupportsString);
        }
        return supportsJson;
      });
    },
    getSupport: function() {
      return __async$1(this, null, function* () {
        const currentUrl = window.location.href;
        const supports = yield this.analysisSupports();
        let support = null;
        for (let key in supports) {
          const { match, disabled } = supports[key];
          const matchReg = new RegExp(match);
          if (matchReg.test(currentUrl) && !disabled) {
            support = supports[key];
            support.match = matchReg;
            if (support.detail) {
              support.detail = new RegExp(support.detail);
            }
            if (support.trade) {
              support.trade = support.trade.map((pattern) => new RegExp(pattern));
            }
            break;
          }
        }
        return { support, supports };
      });
    }
  };

  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Init = {
    aliexpress: function() {
      AllModules.Aliexpress.Aliexpress.start();
      AllModules.Aliexpress.AliexpressSearch.start();
    },
    ebay: function() {
      AllModules.Ebay.Ebay.start();
      AllModules.Ebay.EbaySearch.start();
    },
    lazada: function() {
      AllModules.Lazada.Lazada.start();
      AllModules.Lazada.LazadaSearch.start();
    },
    bestbuy: function() {
      AllModules.Bestbuy.Bestbuy.start();
      AllModules.Bestbuy.BestbuySearch.start();
    },
    banggood: function() {
      AllModules.Banggood.Banggood.start();
      AllModules.Banggood.BanggoodSearch.start();
    },
    amazon: function() {
      AllModules.Amazon.Amazon.start();
    },
    unknown: function() {
    },
    start: function() {
      return __async(this, null, function* () {
        const { support, supports } = yield SupportsHelper.getSupport();
        SupportData.supports = supports;
        SupportData.support = support;
        if (!support) {
          return;
        }
        const disabled = support.disabled, platform = support.p;
        if (disabled) {
          return;
        }
        yield RequestUnionUtil.initRequestData();
        yield LangueUtil.initLangueDataMap();
        yield Tools.getDocumentBody();
        if (platform === "bing" || platform === "google") {
          AllModules.SearchEnginScreen.start(platform);
        } else {
          StyleUtil.init();
          try {
            if (typeof this[platform] === "function") {
              this[platform]();
            } else {
            }
          } catch (e) {
          }
          AllModules.InspectCouponsHTML.start();
          AllModules.MidListener.start();
          AllModules.GoodsRecord.start();
        }
      });
    }
  };
  Init.start();

}());
