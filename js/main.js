//typed settings
var typed = new Typed('.typed', {
    strings: ["&nbsp;PP Farmer", "&nbsp;Frikandelbroodje Lover", "&nbsp;Code Noob", "&nbsp;Mcosu Enjoyer", "&nbsp;Fumo Connoisseur"],
    typeSpeed: 40,
    startDelay: 1500,
    backSpeed: 30,
    backDelay: 2750,
    loop: true,
    showCursor: true
});

var keys = '';
window.addEventListener('keypress', function (e) {
    keys += `${e.charCode}+`;
    console.log(keys);
    if (keys == '108+105+111+110+122+') window.location.replace('https://i.imgur.com/7CiCPWs.png');
});