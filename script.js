[c, d, e, f, g, h, i, j, k, l].forEach((v, i) => window[String.fromCharCode(99 + i)] = 1)
var pcomp = 10
document.getElementById('progress').innerHTML = `Steps Completed ${pcomp}/10`
document.getElementById('p-width').style.width = `${(pcomp * 100) / 10}%`
document.getElementById('file').disabled = false
document.getElementById("10").className = "fa fa-unlock"
["subscribe", "fbfollow", "instalike", "youtubelike", "secondsubscribe", "instafollow", "telegramjoin", "discordjoin", "ytshare", "joinwhatsapp"].forEach(id => document.getElementById(id).style.background = "green")
