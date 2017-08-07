class FishingNodeIcon {
    
    constructor(type){
        
        let fishingNodeIconPath = "/assets/map_ui/fishing.png",
            spearNodeIconPath = "/assets/map_ui/spear.png",
            ephemeralNodeIconPath = "/assets/map_ui/ephemeral_fishing.png",
            unspoiledNodeIconPath = "/assets/map_ui/unspoiled_fishing.png",
            fishingNodeShadowPath = "/assets/map_ui/bluecircle.png",
            iconSize = [32, 32],
            shadowSize = [32, 32],
            defaultType = "Fishing"
            

        let icon = L.Icon.extend({
                    options:{
                        shadowUrl: fishingNodeShadowPath,
                        iconSize: iconSize,
                        shadowSize: shadowSize
                    }
        });
        
        this.fishingNodeShadowPath = fishingNodeShadowPath;
        this.fishingNodeIcon = icon;
        
        let pathMap = {
            "Fishing": fishingNodeIconPath,
            "Spear": spearNodeIconPath,
            "Ephemeral": ephemeralNodeIconPath,
            "Unspoiled Node": unspoiledNodeIconPath
        };
        
        let iconPath = pathMap[type] ? pathMap[type] : pathMap[defaultType];
        this.fishingNodeIconPath = fishingNodeIconPath;        
        
        return new this.fishingNodeIcon({iconUrl: iconPath});
    }
}



export default FishingNodeIcon;