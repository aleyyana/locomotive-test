(function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    document.getElementById("anchor").onclick=function(e){
        e.preventDefault;

        scroll.scrollTo(document.querySelector('.main-header'))
    }
})();