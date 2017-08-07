import AetherCurrentIcon from "../icons/aetherCurrentIcon.js";

class AetherCurrentLayer {
    
    constructor(aetherCurrents){        
        let aetherIcon = new AetherCurrentIcon();
        let modifier = (256 /41);
        
        let aetherCurrentGroup = [];

        for (let idx in aetherCurrents){
            let current = aetherCurrents[idx];
            let drawX = (current[0]-1) *modifier; 
            let drawY = (current[1]-1) *-modifier; 
            let x = aetherCurrents[idx][0];
            let y = aetherCurrents[idx][1];
            
            
            let marker = L.marker([drawY, drawX], {icon:aetherIcon}).bindPopup('x: '+x+' y: '+y);
            
            marker.on("click", (e)=>{
               document.getElementsByClassName("marker-info")[0].innerHTML = 'x: '+x+' y: '+y;
            });
            

            aetherCurrentGroup.push(marker);
        }

        return L.layerGroup(aetherCurrentGroup); 
    }
    
}

export default AetherCurrentLayer;