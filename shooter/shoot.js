AFRAME.registerComponent('bullets',{
    init:function(){
        this.shootBullets();
    },

    shootBullets:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var bullet = document.createElement('a-entity');
                bullet.setAttribute("geometry",{
                    primitive: "sphere",
                    radius: 0.1
                })
                bullet.setAttribute("material","color","black");
                var cam = document.querySelector("#camera");
                var camPos = cam.getAttribute("position");
                bullet.setAttribute("position",{
                    x: camPos.x,
                    y: camPos.y,
                    z: camPos.z
                })
                var camera1 = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();
                camera1.getWorldDirection(direction)
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))
                var scn = document.querySelector("#scene")
                bullet.setAttribute("dynamic-body",{
                    shape: "sphere",
                    mass: "0"
                })
                bullet.addEventListener("collide",this.removeBullets)
                scn.appendChild(bullet)

                this.shootingSound()
            }
        })
    },

    removeBullets: function(e){
        console.log(e.detail.target.el);
        console.log(e.detail.body.el);
        var element = e.detail.target.el;
        var elementHit = e.detail.body.el;

        if(elementHit.id.includes("box")){
            elementHit.setAttribute("material",{
                opacity:0.6
            })

            // applying impulse
            var impulse= new CANNON.Vec3(-2,1,1);
            var worldPoint = new CANNON.Vec3().copy(elementHit.getAttribute("position"));
            elementHit.body.applyImpulse(impulse,worldPoint)

            element.removeEventListener("collide",this.shoot)
            var scen = document.querySelector("#scene");
            scen.removeChild(element)
        }
    },

    shootingSound:function(){
        var entity = document.querySelector("#sound1");
        entity.components.sound.playSound();
    }
})