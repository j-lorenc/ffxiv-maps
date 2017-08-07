class AetherCurrentIcon {
    
    constructor(){
        this.aetherIconPath = "/assets/map_ui/aether.png";
        this.aetherShadowPath = "/assets/map_ui/bluecircle.png";
        
        this.aetherIcon = L.icon({
            iconUrl: this.aetherIconPath,
            shadowUrl: this.aetherShadowPath,
            iconSize:     [32, 32],
            shadowSize: [32,32]
        });
        
        return this.aetherIcon;
    }
}

export default AetherCurrentIcon;