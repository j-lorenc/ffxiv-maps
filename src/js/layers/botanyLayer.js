import BotanyNodeIcon from "../icons/botanyNodeIcon.js";

class BotanyLayer {
    
    constructor(botanyNodes){        
        let loggingNodeIcon = new BotanyNodeIcon(),
            harvestingNodeIcon = new BotanyNodeIcon("Harvesting"),
            ephemeralNodeIcon = new BotanyNodeIcon("Ephemeral"),
            unspoiledNode = new BotanyNodeIcon("Unspoiled Node")
        
        let modifier = (256 /41);
        
        let botanyNodeGroup = [];
        
        let iconMap = {
            "Mature Tree": loggingNodeIcon,
            "Lush Vegetation Patch": harvestingNodeIcon,
            "Ephemeral Node": ephemeralNodeIcon,
            "Unspoiled Node": unspoiledNode
        }

        for (let idx in botanyNodes){
            let node = botanyNodes[idx].location;
            let drawX = (node[0]-1) *modifier; 
            let drawY = (node[1]-1) *-modifier; 
            let x = botanyNodes[idx].location[0];
            let y = botanyNodes[idx].location[1];
            
            let icon = iconMap[botanyNodes[idx].type];
            let items = botanyNodes[idx].items ? botanyNodes[idx].items.join(",<br> ") : ""

            let marker = L.marker([drawY, drawX], {icon:icon}).bindPopup(`Lvl: `+botanyNodes[idx].level+` `+botanyNodes[idx].type);
            marker.on("click", (e)=>{
               document.getElementsByClassName("marker-info")[0].innerHTML = botanyNodes[idx].type+'<br>x: '+x+' y: '+y+"</br>"+items.split();
            });
            
            botanyNodeGroup.push(marker);
        }

        return L.layerGroup(botanyNodeGroup); 
    }
    
}

export default BotanyLayer;