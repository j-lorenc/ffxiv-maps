import L from 'leaflet'
require ("leaflet/dist/leaflet.css");
require ("../scss/index.scss");

import Navigation from "./ui/navigation.js";
import Layers from "./ui/layers.js";
import LayerManager from "./layer-manager.js";
import Coordinates from "./ui/coordinates.js";

let mapWidth = 2048;


class FFXIVMap {
    
    constructor(maps){
        let map = maps[0];
        
        this.setMappingData(maps);
        this.setCurrentMapData(map);        
        this.setMapDOMId("map");
        
        this.spawnMap();
        this.setUpMapLayer();
        
        this.layerManager = new LayerManager(this.getMap(), this.getCurrentMapData());
        
        this.navigationUI = new Navigation(this);
        this.layerUI = new Layers(this);
        this.coordinatesUI = new Coordinates(this);
        
        
    }
    
    setMapDOMId(mapDOMId){
        this.mapDOMId = mapDOMId;
    }
    
    getMapDOMId(){
        return this.mapDOMId;
    }
    
    setMappingData(maps){
        this.mappingData = maps;
    }
    
    getMappingData(){
        return this.mappingData;
    }
    
    setCurrentMapData(mapData){
        this.currentMapData = mapData;
    }
    
    getCurrentMapData(){
        return this.currentMapData;
    }
    
    setMap(map){
        this.map = map;
    }
    
    getMap(){
        return this.map;
    }
    
    getMapDataByTitle(title){
        return this.getMappingData().filter((map)=>{
            return map.title == title;
        })[0];
    }
    
    
    getMapAssetPath(){
        return '/assets/maps/'+this.getCurrentMapData().title+'/{z}/{x}/{y}.png';
    }    
    
    spawnMap(){
        let map = L.map(this.getMapDOMId(),{
                maxZoom: 3,
                minZoom: 1,
                zoom: 1,
                center: [0,0],
                attributionControl: false,
                crs:L.CRS.Simple
            });
        
        this.setMap(map)
    }
    
    getBounds(){
        let map = this.getMap(),
            southWest =  map.unproject([0,mapWidth], map.getMaxZoom()),
            northEast =  map.unproject([mapWidth,0], map.getMaxZoom()),
            bounds = new L.LatLngBounds(
                southWest,
                northEast
            );
        return bounds;
    }
    
    setUpMapLayer(){
        let map = this.getMap(),
            bounds = this.getBounds(),
            mapLayer = L.tileLayer(this.getMapAssetPath(), {
                noWrap: true,
                bounds: bounds,
                crs:L.CRS.Simple
            });
        
        mapLayer.addTo(map);    
        this.mapTiles = mapLayer.addTo(map);
        map.setMaxBounds(bounds);
    }
    
    updateCurrentMap(title){
        this.setCurrentMapData(this.getMapDataByTitle(title));
        this.layerManager.setCurrentMapData(this.getMapDataByTitle(title));
        this.mapTiles.setUrl(this.getMapAssetPath());
        
        //this.layerUI.render();
        
        var visibleLayers = Object.keys(this.layerManager.getLayers()).filter((layer)=>{
            return this.layerManager.isLayerVisible(layer) && layer != "map";
        });
        
        Object.keys(this.layerManager.getLayers()).filter((layer)=>{            
            return layer != "map";
        }).forEach((layer)=>{
            this.layerManager.hideLayer(layer);
            this.setMap(this.layerManager.getMap());
        });
        
        
        visibleLayers.forEach((layer)=>{
           this.layerManager.showLayer(layer); 
        });
    }
    

 
}




export default FFXIVMap;