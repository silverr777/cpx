var rev = "fwd";
function titlebar(t) {
    var e = "cpx7"
      , i = t
      , r = (e = "" + e).length;
    if ("fwd" == rev)
        i < r ? (i += 1,
        scroll = e.substr(0, i),
        document.title = scroll,
        timer = window.setTimeout("titlebar(" + i + ")", 145)) : (rev = "bwd",
        timer = window.setTimeout("titlebar(" + i + ")", 145));
    else if (i > 0) {
        var a = r - (i -= 1);
        scrol = e.substr(a, r),
        document.title = scrol,
        timer = window.setTimeout("titlebar(" + i + ")", 145)
    } else
        rev = "fwd",
        timer = window.setTimeout("titlebar(" + i + ")", 145)
}
titlebar(0);
