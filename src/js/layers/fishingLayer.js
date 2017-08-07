import FishingNodeIcon from "../icons/fishingNodeIcon.js";

class FishingLayer {
    
    constructor(fishingNodes){
        let fishingNodeIcon = new FishingNodeIcon(),
            spearNodeIcon = new FishingNodeIcon("Spear"),
            ephemeralNodeIcon = new FishingNodeIcon("Ephemeral"),
            unspoiledNode = new FishingNodeIcon("Unspoiled Node")
        
        let modifier = (256 /41);
        
        let fishingNodeGroup = [];
        
        let iconMap = {
            "Mineral Deposit": fishingNodeIcon
        }


        for (let idx in fishingNodes){
            
            let well = fishingNodes[idx]
            
            let node = fishingNodes[idx].location;
            let drawX = (node[0]-1) *modifier; 
            let drawY = (node[1]-1) *-modifier; 
            let x = fishingNodes[idx].location[0];
            let y = fishingNodes[idx].location[1];
            
            let icon = fishingNodeIcon;
            let items = fishingNodes[idx].items ? fishingNodes[idx].items.join(",<br> ") : ""
            
            let marker = L.marker([drawY, drawX], {icon:icon}).bindPopup(well.name);
            
            marker.on("click", (e)=>{
               document.getElementsByClassName("marker-info")[0].innerHTML = well.name+'<br>x: '+x+' y: '+y+"</br>"+items.split();
            });

            fishingNodeGroup.push(marker);
        }

        return L.layerGroup(fishingNodeGroup); 
    }
    
}

export default FishingLayer;