(function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        repeat:true,
        scrollingClass:"is-scrolling"
    });

    document.querySelector(".anchor").onclick=function(e){
        e.preventDefault;

        scroll.scrollTo(document.querySelector('.main-header'))
    }
    let list = ['preview', 'img-details', 'blue-title', 'text-details']
    let listS= ["left-h1", "tickets-title", "online", "anchor"]

    scroll.on("scroll", (args) => {

        list.forEach(function(a){

            if(typeof args.currentElements[a] === 'object'){
                let progress = args.currentElements[a].progress;
                let opacitySet = 0;
                    if(progress <= 0.5){
                    opacitySet = Math.round(progress*200)/100;
                    document.querySelectorAll("." + a)[0].style.opacity = opacitySet;
                    document.querySelectorAll("." + a)[1].style.opacity = opacitySet;
                    document.querySelectorAll("." + a)[2].style.opacity = opacitySet;
                    document.querySelectorAll("." + a)[3].style.opacity = opacitySet;
                }
            }
    
        });

        listS.forEach(function(b){

            if(typeof args.currentElements[b] === 'object'){
                let progress = args.currentElements[b].progress;
                let opacitySet = 0;
                    if(progress <= 0.5){
                        opacitySet = Math.round(progress*250)/100;
                        document.querySelector("." + b).style.opacity = opacitySet;
    
                    }
            }
        })
    });
})();