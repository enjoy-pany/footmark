window.onload = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4 + 'px';
    window.addEventListener('resize',function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4 + 'px';
    })
}