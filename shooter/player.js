AFRAME.registerComponent('player-movements',{
    init:function(){
        this.walkingSound()
    },
    walkingSound:function(){
        window.addEventListener("keyDown",(e)=>{
            if(e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowLeft"){

                    var entity = document.querySelector("#sound2");
                    entity.components.sound.playSound();

            }
        })

    }
})