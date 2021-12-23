(function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        repeat:true,
        scrollingClass:"is-scrolling"
    });

    document.getElementById("anchor").onclick=function(e){
        e.preventDefault;

        scroll.scrollTo(document.querySelector('.main-header'))
    }
    let list = ['preview', 'img-details', 'blue-title', 'text-details']
    let i=0;
    list.forEach(function(a){

        console.log(a);

    });
    scroll.on("scroll", (args) => {
        // if(typeof args.currentElements["preview"] === 'object'){
        //     let progress = args.currentElements["preview"].progress;
        //     let opacitySet = 0;
        //         if(progress <= 0.5){
        //         opacitySet = Math.round(progress*200)/100;
        //         document.querySelectorAll(".preview")[0].style.opacity = opacitySet;
        //         document.querySelectorAll(".preview")[1].style.opacity = opacitySet;
        //         document.querySelectorAll(".preview")[2].style.opacity = opacitySet;
        //         document.querySelectorAll(".preview")[3].style.opacity = opacitySet;
        //     }
        // }
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
        if(typeof args.currentElements["h1-left"] === 'object'){
            let progress = args.currentElements["h1-left"].progress;
            let opacitySet = 0;
                if(progress <= 0.5){
                    opacitySet = Math.round(progress*250)/100;
                    document.querySelector(".left-h1").style.opacity = opacitySet;

                }
        }
    });
})();