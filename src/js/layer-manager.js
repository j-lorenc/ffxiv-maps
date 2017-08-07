import AetherCurrentLayer from "./layers/aetherCurrentLayer.js";
import MiningLayer from "./layers/miningLayer.js";
import BotanyLayer from "./layers/botanyLayer.js";
import FishingLayer from "./layers/fishingLayer.js"

class LayerManager{
    
    constructor(map, currentMapData){
        this.setMap(map);
        this.setCurrentMapData(currentMapData);
        
        this.layerMap = {
            "aetherCurrents": [this.setUpAetherCurrents],
            "miningNodes": [this.setUpMiningNodes],
            "botanyNodes": [this.setUpBotanyNodes],
            "fishingWells": [this.setUpFishingWells]
        }
        
        Object.keys(this.layerMap).forEach((layer)=>{
            this.setLayer(layer, {});                                   
        });
    }
    
    setMap(map){
        this.map = map;
    }
    
    getMap(){
        return this.map;
    }
    
    setCurrentMapData(mapData){
        this.currentMapData = mapData;
    }
    
    getCurrentMapData(){
        return this.currentMapData;
    }
    
    setLayer(layerName, layer){
        if(!this.layers){
            this.layers = {};
        }
        this.layers[layerName] = layer;
    }
    
    getLayers(){
        return this.layers;
    }
    
    
    showLayer(layerName){
        this.layerMap[layerName][0].call(this);
    }
    
    hideLayer(layerName){
        this.getMap().removeLayer(this.getLayers()[layerName]);
    }
    
    toggleLayer(layerName){
        this.getMap().hasLayer(this.getLayers()[layerName]) ? this.hideLayer(layerName) :this.showLayer(layerName);
    }
    
    isLayerVisible(layerName){
        return this.getMap().hasLayer(this.getLayers()[layerName]);
    }
    
    setUpGatheringNodes(){
        this.setUpMiningNodes();
    }
    
    setUpAetherCurrents(){
        let aetherCurrents = this.getCurrentMapData().layers.filter((layer)=>{
            return layer.name == "aetherCurrents";
        })[0],
        
            aetherCurrentLayer = new AetherCurrentLayer(aetherCurrents.data),
            map = this.getMap();
        
        
        aetherCurrentLayer.addTo(map);
        this.setLayer("aetherCurrents", aetherCurrentLayer);
    }
    
    setUpMiningNodes(){
        let miningNodes = this.getCurrentMapData().layers.filter((layer)=>{
            return layer.name == "gatheringNodes";
        })[0].layers.filter((layer)=>{
             return layer.name == "miningNodes";
        })[0].data,
        
    
        miningLayer = new MiningLayer(miningNodes),        
            map = this.getMap();
        
        miningLayer.addTo(map);
        this.setLayer("miningNodes", miningLayer);
    }
    
    
    setUpBotanyNodes(){
        let botanyNodes = this.getCurrentMapData().layers.filter((layer)=>{
            return layer.name == "gatheringNodes";
        })[0].layers.filter((layer)=>{
             return layer.name == "botanyNodes";
        })[0].data,
        
    
        botanyLayer = new BotanyLayer(botanyNodes),        
            map = this.getMap();
        
        botanyLayer.addTo(map);
        this.setLayer("botanyNodes", botanyLayer);
    }
    
    setUpFishingWells(){
        let fishingWells = this.getCurrentMapData().layers.filter((layer)=>{
            return layer.name == "gatheringNodes";
        })[0].layers.filter((layer)=>{
             return layer.name == "fishingWells";
        })[0].data,
        
    
        fishingLayer = new FishingLayer(fishingWells),        
            map = this.getMap();
        
        fishingLayer.addTo(map);
        this.setLayer("fishingWells", fishingLayer);
    }
}

export default LayerManager;