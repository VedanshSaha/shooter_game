AFRAME.registerComponent('wire-fence',{
    init:function(){
        posX = -20;
        posY = 2;
        posZ = 80;

        for(i=0;i<10;i++){
            var fence1 = document.createElement("a-entity");
            var fence2 = document.createElement("a-entity");
            var fence3 = document.createElement("a-entity");
            var fence4 = document.createElement("a-entity");

            // set x,y.z position
            posX+=5;
            posY=2;
            posZ-=10;

            var scale={x:2,y:2,z:2}

            // id
            fence1.setAttribute("id","fence1"+i);
            fence2.setAttribute("id","fence2"+i);
            fence3.setAttribute("id","fence3"+i);
            fence4.setAttribute("id","fence4"+i);

            // position
            fence1.setAttribute("position",{x:posX,y:2,z:-30});
            fence2.setAttribute("position",{x:posX,y:2,z:85});
            fence3.setAttribute("position",{x:-30,y:2,z:posZ});
            fence4.setAttribute("position",{x:50,y:2,z:posZ});

            // scale
            fence1.setAttribute("scale",scale);
            fence2.setAttribute("scale",scale);
            fence3.setAttribute("scale",scale);
            fence4.setAttribute("scale",scale);

            // model
            fence1.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            fence2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            fence3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            fence4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");

            // rotation
            fence3.setAttribute("rotation",{x:0,y:90,z:0});
            fence4.setAttribute("rotation",{x:0,y:90,z:0});

            // physics-body
            fence1.setAttribute("static-body",{});
            fence3.setAttribute("static-body",{});
            fence3.setAttribute("static-body",{});
            fence4.setAttribute("static-body",{});

            var sceneEL = document.querySelector("#scene");
            sceneEL.appendChild(fence1)
            sceneEL.appendChild(fence2)
            sceneEL.appendChild(fence3)
            sceneEL.appendChild(fence4)

        }
    }
})

AFRAME.registerComponent('boxes',{
    schema:{
        height : {type:"number",default:3},
        width : {type:"number",default:3},
        depth : {type:"number",default:3}
    },

    init:function(){
        for(i=0;i<20;i++){
            var box= document.createElement("a-entity");
            box.setAttribute("id","box"+i);

            posX = Math.random()*30-10;
            posY = 1.5;
            posZ= Math.random()*-30-10;

            position= {x:posX,y:posY,z:posZ};
            box.setAttribute("position",position)

            box.setAttribute("geometry",{
                primitive:"box",
                height:this.data.height,
                width:this.data.width,
                depth:this.data.depth
            })
            box.setAttribute("material",{
                src:"./images/boxtexture1.jpg",
                repeat:"1 1 1"
            })
            box.setAttribute("static-body",{})
            var sceneEL = document.querySelector("#scene");
            sceneEL.appendChild(box)
        }
    }
})