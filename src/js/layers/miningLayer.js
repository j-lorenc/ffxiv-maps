import MiningNodeIcon from "../icons/miningNodeIcon.js";

class MiningLayer {
    
    constructor(miningNodes){        
        let miningNodeIcon = new MiningNodeIcon(),
            quarryingNodeIcon = new MiningNodeIcon("Quarrying"),
            ephemeralNodeIcon = new MiningNodeIcon("Ephemeral"),
            unspoiledNode = new MiningNodeIcon("Unspoiled Node")
        
        let modifier = (256 /41);
        
        let miningNodeGroup = [];
        
        let iconMap = {
            "Mineral Deposit": miningNodeIcon,
            "Rocky Outcrop": quarryingNodeIcon,
            "Ephemeral Node": ephemeralNodeIcon,
            "Unspoiled Node": unspoiledNode
        }

        for (let idx in miningNodes){
            let node = miningNodes[idx].location;
            let drawX = (node[0]-1) *modifier; 
            let drawY = (node[1]-1) *-modifier; 
            let x = miningNodes[idx].location[0];
            let y = miningNodes[idx].location[1];
            
            let icon = iconMap[miningNodes[idx].type];
            let items = miningNodes[idx].items ? miningNodes[idx].items.join(",<br> ") : "";
            
            let template = miningNodes[idx].type+'<br>x: '+x+' y: '+y+"</br>"+items.split();
            
            let marker = L.marker([drawY, drawX], {icon:icon}).bindPopup(`Lvl: `+miningNodes[idx].level+` `+miningNodes[idx].type);
            
            marker.on("click", (e)=>{
               document.getElementsByClassName("marker-info")[0].innerHTML = template;
            });

            miningNodeGroup.push(marker);
        }

        return L.layerGroup(miningNodeGroup); 
    }
    
}

export default MiningLayer;