class BotanyNodeIcon {
    
    constructor(type){
        
        let loggingNodeIconPath = "/assets/map_ui/logging.png",
            harvestingNodeIconPath = "/assets/map_ui/harvesting.png",
            ephemeralNodeIconPath = "/assets/map_ui/ephemeral_botany.png",
            unspoiledNodeIconPath = "/assets/map_ui/unspoiled_botany.png",
            botanyNodeShadowPath = "/assets/map_ui/bluecircle.png",
            iconSize = [32, 32],
            shadowSize = [32, 32],
            defaultType = "Logging"
            

        let icon = L.Icon.extend({
                    options:{
                        shadowUrl: botanyNodeShadowPath,
                        iconSize: iconSize,
                        shadowSize: shadowSize
                    }
        });
        
        this.botanyNodeShadowPath = botanyNodeShadowPath;
        this.botanyNodeIcon = icon;
        
        let pathMap = {
            "Logging": loggingNodeIconPath,
            "Harvesting": harvestingNodeIconPath,
            "Ephemeral": ephemeralNodeIconPath,
            "Unspoiled Node": unspoiledNodeIconPath
        };
        
        
        
        let iconPath = pathMap[type] ? pathMap[type] : pathMap[defaultType];
        
        this.botanyNodeIconPath = loggingNodeIconPath;        
        
        return new this.botanyNodeIcon({iconUrl: iconPath});
    }
}



export default BotanyNodeIcon;