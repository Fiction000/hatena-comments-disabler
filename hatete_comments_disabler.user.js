// ==UserScript==
// @name         Hatena Comments Disabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the links to comments section on Hatena bookmark
// @author       Tatsuhiko Kato
// @match        https://b.hatena.ne.jp/hotentry/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const spans = document.querySelectorAll('span.entrylist-contents-users');
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.display = 'none';
    }
})();
