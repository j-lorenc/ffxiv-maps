class navigation {
    
    constructor(maps){
        
        this.zoneMap = {
            "The_Fringes": "Gyr Abania",
            "The_Peaks":"Gyr Abania",
            "The_Lochs":"Gyr Abania",
            "Azim_Steppe":"Othard",
            "Yanxia":"Othard",
            "The_Ruby_Sea":"Othard"          
        }
        
        this.iconMap = {
            "Othard":"icon-othard",
            "Gyr Abania":"icon-gyrabania"
        }    
            
        this.maps = maps;
        let mapNames = maps.getMappingData().map((map)=>{
            return [map.title, map.title.split("_").join(" "), this.iconMap[this.zoneMap[map.title]]];
        });
        
        this.mapNames = mapNames;
        this.render();
        this.attachEventListeners();
    }
    
    render(){
        let template = this.mapNames.reduce((acc, value)=>{
            return acc + `<li class="`+value[0]+`"><div class="icon `+value[2]+`"></div>`+value[1]+`</li>`                              
         },`<ul class="map-nav">`) + `</ul>`

        document.getElementsByClassName("map-nav")[0].insertAdjacentHTML("afterbegin",template);
        this.template = template;
        
        return template;
    }
    
    
    attachEventListeners(){
        var that = this;
        Array.from((document.getElementsByClassName("map-nav"))[0].getElementsByTagName("li")).forEach((item)=>{
            item.addEventListener("click", (e)=>{
                handleMapNavClick(e, item);
            })
        });

        function handleMapNavClick(e, item){
            that.maps.updateCurrentMap(item.className);
        }
    }
    
    
}
export default navigation