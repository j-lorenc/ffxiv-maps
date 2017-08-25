class navigation {
    
    constructor(maps){
        
        this.zoneMap = {
            "A Realm Reborn": 
                {
                    "La Noscea": [
                        "Middle_La_Noscea",
                        "Lower_La_Noscea",
                        "Upper_La_Noscea",
                        "Eastern_La_Noscea",
                        "Western_La_Noscea",
                        "Outer_La_Noscea"
                    ],                
                    
                    "Shroud": [
                        "Central_Shroud",
                        "East Shroud",
                        "South_Shroud",
                        "North_Shroud"
                    ],
                    
                    "Thanalan": [
                        "Western_Thanalan",
                        "Central_Thanalan",
                        "Eastern_Thanalan",
                        "Southern_Thanalan",
                        "Northern_Thanalan"
                    ],
                    
                    "Coerthas": [
                        "Coerthas_Central_Highlands"
                    ],
                    
                    "Mor Dhona":[
                        "Mor_Dhona"
                    ] 
            },
            
            "Heavensward": {
                
                "Coerthas": [
                    "Coerthas_Western_Highlands"
                ],
                
                "Dravania": [
                    "Dravanian_Forelands",
                    "Churning_Mists",
                    "Dravanian_Hinterlands"
                ],
                "Alabathia's_Spine":[
                    "Sea_Of_Clouds",
                    "Azys_Lla"
                ]
            },
            
            
            "Stormblood": {
                "Gyr Abania": [
                    "The_Fringes",
                    "The_Peaks",
                    "The_Lochs"
                ],
                
                "Othard": [
                    "Azim_Steppe",
                    "Yanxia",
                    "The_Ruby_Sea"    
                ]
                
            }
        }
        
        let mapTitles = maps.getMappingData().map((map)=>{
            return map.title;
            
        });
        
        let loadedZoneMap = Object.keys(this.zoneMap).reduce((acc,val)=>{
            
            let nationMap = this.zoneMap[val];
            
            let nation = Object.keys(nationMap).reduce((acc, val)=>{
                let nationArray = nationMap[val].filter((nation)=>{
                   return mapTitles.includes(nation);
               });
                
                
                if(nationArray.length > 0){
                    acc[val] = nationArray;
                }
               
               return acc;
             }, {});
            
            if(Object.keys(nation).length > 1){
                acc[val] = nation; 
            }
            
            return acc;
        },{});
        
        this.iconMap = {
            "Mor Dhona":"icon-other",
            "Coerthas":"icon-coerthas",
            "Thanalan":"icon-thanalan",
            "Shroud":"icon-shroud",
            "La Noscea":"icon-la-noscea",
            "Dravania":"icon-other",
            "Alabathia's_Spine":"icon-other",
            "Othard":"icon-othard",
            "Gyr Abania":"icon-gyrabania"
        } 
            
        this.maps = maps;
        
        this.mapNames = loadedZoneMap;
        this.render();
        this.attachEventListeners();
    }
    
    render(){
        
        let expansionsArray = Object.keys(this.mapNames);
        
        let template = expansionsArray.reduce((acc, val)=>{
            return acc + `<div class="zone-header">`+val+`</div>`+ 
            Object.keys(this.mapNames[val]).reduce((acc,value)=>{
                let iconPath = this.iconMap[value];

                acc += this.mapNames[val][value].reduce((acc, mapTitle)=>{
                    return acc + `<li class="`+mapTitle+`"><div class="icon `+iconPath+`"></div>`+mapTitle.split("_").join(" ")+`</li>`
                },``)
                return acc;                              
            },`<ul class="map-nav">`) + `</ul>`;
        },``);    
        
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
        
        
        
        Array.from((document.getElementsByClassName("zone-header"))).forEach((item)=>{
            item.addEventListener("click",(e)=>{
                let headerClasses = e.target.nextElementSibling.className;
                
                if(!headerClasses.includes("hide")){
                    e.target.nextElementSibling.className += " hide";
                }else{
                     e.target.nextElementSibling.className = (e.target.nextElementSibling.className).replace(" hide","");
                }
                
            })
        });
    }
    
    
}
export default navigation