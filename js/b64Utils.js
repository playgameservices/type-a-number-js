/**
 * Created with Notepad++.
 * User: Žiga Hajdukoviæ (zigah)
 * Date: 2013-11-03
 * Time: 15:55
 *
 * This two functions are intended to replace btoa and atob
 * that have a problem with handling Unicode caharacters in
 * a player's g+ name.
 *
 * The functions below were effectively copy pasted from ecmanaut.blogspot.com
 * as suggested by MDN: https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
 * and written by Johan Sundström.
 *
 * In most browsers, calling window.btoa on a Unicode string 
 * will cause a Character Out Of Range exception.
 * To avoid this, consider this pattern, noted by Johan Sundström:
 * http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html
 *
 */
"use strict";

var b64Utils = b64Utils || {};

b64Utils.utf8_to_b64 = function(str) {
    return window.btoa(unescape(encodeURIComponent( str )));
};

b64Utils.b64_to_utf8 = function(str) {
    return decodeURIComponent(escape(window.atob( str )));
};
