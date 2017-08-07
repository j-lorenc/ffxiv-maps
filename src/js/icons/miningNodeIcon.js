class MiningNodeIcon {
    
    constructor(type){
        
        let miningNodeIconPath = "/assets/map_ui/mining.png",
            quarryingNodeIconPath = "/assets/map_ui/quarrying.png",
            ephemeralNodeIconPath = "/assets/map_ui/ephemeral_mining.png",
            unspoiledNodeIconPath = "/assets/map_ui/unspoiled_mining.png",
            miningNodeShadowPath = "/assets/map_ui/bluecircle.png",
            iconSize = [32, 32],
            shadowSize = [32, 32],
            defaultType = "Mining"
            

        let icon = L.Icon.extend({
                    options:{
                        shadowUrl: miningNodeShadowPath,
                        iconSize: iconSize,
                        shadowSize: shadowSize
                    }
        });
        
        this.miningNodeShadowPath = miningNodeShadowPath;
        this.miningNodeIcon = icon;
        
        let pathMap = {
            "Mining": miningNodeIconPath,
            "Quarrying": quarryingNodeIconPath,
            "Ephemeral": ephemeralNodeIconPath,
            "Unspoiled Node": unspoiledNodeIconPath
        };
        
        let iconPath = pathMap[type] ? pathMap[type] : pathMap[defaultType];
        this.miningNodeIconPath = miningNodeIconPath;        
        
        return new this.miningNodeIcon({iconUrl: iconPath});
    }
}



export default MiningNodeIcon;