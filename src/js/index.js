import L from 'leaflet'
require ("leaflet/dist/leaflet.css");
require ("../scss/index.scss");

import FFXIVMap from "./ffxiv-map.js";

let maps = [
{
    mapId:"mapid4",
    title:"The_Fringes",
    sortOrder: 1,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [9.5, 27.8],
                [11.7, 16.3],
                [17.4, 15.2],
                [19.4, 4.4],
                [25.0, 11.0],
                [25.0, 26.2],
                [27.9, 21.6],
                [29.6, 28.8],
                [34.2, 30.0],
                [35.7, 16.7]
            ]
        },
        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 60,
                        type: "Mineral Deposit",
                        location: [15,12],
                        items: ["Gyr Abanian Alumen", "Wind Crystal"]
                    },
                    {
                        level: 65,
                        type: "Mineral Deposit",
                        location: [23,13],
                        items: ["Gyr Abanian Mineral Water", "Raw Kyanite", "Wind Crystal"]
                    },
                    {
                        level: 70,
                        type: "Unspoiled Node",
                        location: [25,8],
                        items: ["Raw Triphane"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 60,
                        type: "Lush Vegetation Patch",
                        location: [16,7],
                        items: ["Bloodhemp", "Gyr Abanian Wheat", "Fire Crystal"]
                    },{
                        level: 65,
                        type: "Mature Tree",
                        location: [10,16],
                        items: ["Beech Log", "Loquat", "Fire Crystal"]
                    },{
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [11,26],
                        items: ["Kudzu Root", "Kudzu Vine", "Holy Basil", "Fire Crystal"]
                    },{
                        level: 70,
                        type: "Mature Tree",
                        location: [10,30],
                        items: ["Persimmon", "Persimmon Leaf", "Persimmon Log", "Fire Crystal"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [11,18],
                        items: ["Beech Branch"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 61,
                    name: "Timmon Beck",
                    location: [11,17],
                    items: ["Steelhead Trout", "Miounnefish", "Balloon Frog", "Death Loach"]
                },{
                    level: 62,
                    name: "Dimwold",
                    location: [10,30],
                    items: ["Miounnefish","Bone Melter","Fallen Leaf","Padjali Loach","	Cave Killifish", "Wraithfish"]
                },{
                    level: 62,
                    name: "The Comet's Tail",
                    location: [14,31],
                    items: ["Bone Melter","Falling Start","Nirvana Crab","Capsized Squeaker"]
                },{
                    level: 61,
                    name: "The Velodyna River",
                    location: [18,10],
                    items: ["Velodyna Grass Carp","Greenstream Grass Carp", "Bloodsipper","Black Velodyna Carp", "Deep Velodyna Carp"]
                },{
                    level: 62,
                    name: "The Velodyna River",
                    location: [29,13],
                    items: ["Highland Perch","Mirage Chub", "Gravel Gudgeon","Rhalgr's Bolt"]
                }]
                
            }]
        }
    ]
},{
    mapId:"mapid5",
    title:"The_Peaks",
    sortOrder: 2,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [11.9, 5.8],
                [15.8, 16.9],
                [26.7, 6.9],
                [27.5, 21.0],
                [35.6, 11.6],
                [10.8, 26.4],
                [16.6, 31.8],
                [8.1, 32.6],
                [21.1, 22.0],
                [23.9, 31.8]
            ]
        },
        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 65,
                        type: "Rocky Outcrop",
                        location: [21,13],
                        items:["Koppranickel Sand", "Stiperstone", "Slate", "Earth Crystal"]
                    },{
                        level: 65,
                        type: "Unspoiled Node",
                        location: [26.9,12.7],
                        items:["Raw Rhodonite"]
                    },{
                        level: 65,
                        type: "Unspoiled Node",
                        location: [16,33.9],
                        items:["Chromite Ore"]            
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [13,11],
                        items: ["Buckwheat Kernels", "Sugar Beet", "Green Leek", "Mountain Popoto", "Lightning Crystal"]
                    },{
                        level: 70,
                        type: "Lush Vegetation Patch",
                        location: [26,27],
                        items: ["Alyssum", "Lightning Crystal", "Gyr Abanian Carrot", "Twincoon"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [23,16],
                        items: ["Hallowed Basil"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 61,
                    name: "The Slow Wash",
                    location: [24,8],
                    items: ["Idle Goby","Rapids Jumper","Gyr Abanian Trout","Heather Charr","Death Loach","Invisible Crayfish"]
                },{
                    level: 61,
                    name: "Grymm & Enid",
                    location: [6,15],
                    items: ["Death Loach","Grymm Crab","Enid Shrimp"]
                },{
                    level: 65,
                    name: "Heather Falls",
                    location: [32,6],
                    items: ["Adamantium Bichir","Death Loach","Abalathian Salamander","Steelshark"]
                },{
                    level: 68,
                    name: "The Bull's Bath",
                    location: [20,32],
                    items: ["Death Loach","Invisible Crayfish","Bull's Bite","Peeping Pisces","Gazelleskin Map"]
                },{
                    level: 70,
                    name: "The Arms of Meed",
                    location: [9,37],
                    items: ["Gyr Abanian Trout","Gigant Bass","Eastern Pike","Scimitarfish","Ala Mhigan Ribbon","Gazelleskin Map"]
                },{
                    level:70,
                    name:"The Ephor",
                    location:[32,17],
                    items:["Heather Charr","Meditator","Stonytongue","Deemster"]
                }]
                
            }]
        }
    ]
},{
    mapId:"mapid3",
    title:"The_Ruby_Sea",
    sortOrder: 3,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [30.0, 38.8],
                [15.2, 38.3],
                [31.4, 25.1],
                [35.6, 20.4],
                [17.6, 7.5],
                [21.9, 8.9],
                [23.0, 3.9],
                [31.4, 6.3],
                [8.5, 9.1],
                [7.9, 28.9]
            ]
        },

        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 65,
                        type: "Mineral Deposit",
                        location: [25,35],
                        items: ["Koppranickel Ore", "Feather Iron Ore", "Water Crystal"]
                    },{
                        level: 65,
                        type: "Mineral Deposit",
                        location: [14,16],
                        items: ["Diatomite", "Water Crystal"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [15,4.5],
                        items: ["Raw Star Spinel"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [26,19],
                        items: ["Gem Algae", "Ruby Cotton Boll", "Ama Nori", "Water Crystal"]
                    },{
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [7,8],
                        items: ["Soybeans", "Cumin Seeds", "Water Crystal"]
                    },{
                        level: 65,
                        type: "Mature Tree",
                        location: [20,9],
                        items: ["Shiitake Mushroom", "Larch Log", "Water Crystal"]
                    },{
                        level: 70,
                        type: "Lush Vegetation Patch",
                        location: [11,13],
                        items: ["Ruby Tide Kelp", "Water Crystal"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 62,
                    name: "The Ruby Price",
                    location: [37,37],
                    items: ["Grinning Anchovy","Glass Herring","Coeurl Snake Eel"]
                },{
                    level: 62,
                    name: "Hell's Lid",
                    location: [25,32],
                    items: ["Grinning Anchovy","Hellyfish","Ruby Shrimp","Blockhead","Liopleurodon"]
                },{
                    level: 63,
                    name: "Shoal Rock",
                    location: [32,9],
                    items: ["Grinning Anchovy","Ruby Coral","Sapphire Coral","Bone Coral","Butterfly Fish","Harutsuge","Harutsuge Sprag"]
                },{
                    level: 64,
                    name: "Isari",
                    location: [8,12],
                    items: ["Glass Herring", "Gilding Fish", "Globefish", "Fan Clam", "Ruby Meagre"]
                },{
                    level: 64,
                    name: "Onokoro",
                    location: [22,11],
                    items: ["Ruby Shrimp", "Leaf Tatsunoko", "Glass Flounder", "Blackfin Snake Eel", "Swordfish", "Giant Plesiosaur"]
                },{
                    level:65,
                    name:"The Isle of Bekko",
                    location:[34,19],
                    items:["Grinning Anchovy","Hellyfish","Ruby Shrimp","Dafu","Glass Tuna","Tawney Wench Shark"]
                },{
                    level:70,
                    name:"The Isle of Zekki",
                    location:[8,27],
                    items:["Ruby Shrimp", "Daio Squid", "Koromo Octopus","Zekki Grouper", "Zekki Gator", "Timeworn Gazelleskin Map"]
                }]
                
            }]
        }
    ]  
},{
    mapId:"mapid6",
    title:"Yanxia",
    sortOrder: 4,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [39.4, 20.7],
                [29.1, 16.9],
                [24.8, 21.2],
                [29.9, 23.4],
                [31.4, 29.7],
                [30.6, 37.8],
                [24.7, 30.8],
                [19.5, 32.7],
                [16.0, 29.3],
                [11.7, 27.5]
            ]
        },
        {   
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                        {
                            level: 65,
                            type: "Mineral Deposit",
                            location: [33,22],
                            items: ["Doman Iron Ore", "Crescent Spring Water", "Fire Crystal"]
                        },{
                            level: 70,
                            type: "Mineral Deposit",
                            location: [36,19],
                            items: ["Durium Ore, Serpentine, Fire Crystal"]
                        },{
                            level: 65,
                            type: "Unspoiled Node",
                            location: [20.5, 10.4],
                            items: ["Palladium Ore"]
                        },{
                            level: 65,
                            type: "Unspoiled Node",
                            location: [29,9],
                            items: ["Raw Imperial Jade"]
                        },{
                            level: 65,
                            type: "Ephemeral Node",
                            location: [38,19],
                            items: ["Perlite", "Fire Crystal"]
                        }    
                ]   
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 65,
                        type: "Mature Tree",
                        location: [36,15],
                        items: ["Pine Resin", "Pine Log", "Wind Crystal"]
                    },{
                        level: 65,
                        type: "Lush Vegetation Patch",
                        location: [22,10],
                        items: ["Doman Eggplant", "Wind Crystal", "Yanxian Parsley", "Nagxian Cudweed", "Daikon Radish"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [28,7],
                        items: ["Lotus Root"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [28,25],
                        items: ["Bamboo Shoot"]
                    },{
                        level: 70,
                        type: "Ephemeral Node",
                        location: [22,13],
                        items: ["Wind Crystal", "Windtea Leaves"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 64,
                    name: "Namai",
                    location: [29,15],
                    items: ["Nogoi"]
                },{
                    level: 64,
                    name: "The Heron's Nest",
                    location: [34,14],
                    items: ["Doman Trout", "Doman Crayfish"]
                },{
                    level: 64,
                    name: "The Heron's Way",
                    location: [35,17],
                    items: ["River Barramundi","Doman Trout","Doman Crayfish"]
                },{
                    level: 65,
                    name: "The One River (East)",
                    location: [20,24],
                    items: ["Yanxian Koi","Longhair Catfish","Doman Trout","Yanxian Barramundi","Kotsu Zetsu"]
                },{
                    level: 67,
                    name: "Doma Castle",
                    location: [14,7],
                    items: ["Doman Trout", "Samurai Fish", "Blank Oscar", "Dragonfish", "Raitonfish", "Timeworn Gaganaskin Map"]
                },{
                    level:67,
                    name:"Mercantile Docks",
                    location:[11,14],
                    items:["Doman Trout", "Doman Grass Carp", "Lordly Salmon", "Kotsu Zetsu"]
                },{
                    level:67,
                    name:"Prism Canyon",
                    location:[31,7],
                    items:["Doman Trout","Doman Crayfish","Doman Eel"]
                },{
                    level:70,
                    name:"Plum Spring",
                    location:[36,23],
                    items:["Doman Trout","Kotsu Zetsu","Pandamoth","Silken Koi","Plum Koi"]
                },{
                    level:70,
                    name:"The One River (West)",
                    location:[11,33],
                    items:["Doman Trout","Kotsu Zetsu","Longhair Catfish","Seraphim","Timeworn Gazelleskin Map"]
                },{
                    level:67,
                    name:"Prism Lake",
                    location:[28,6],
                    items:["Yellow Prismfish","Blue Prismfish"]
                }]
                
            }]
        }
    ]
},{
    mapId:"mapid",
    title:"Azim_Steppe",
    sortOrder: 5,
    layers: [
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [33.4, 30.6],
                [36.2, 17.5],
                [27.1, 12.2],
                [16.1, 14.2],
                [13.2, 20.9],
                [5.9, 28.3],
                [8.7, 35.5],
                [15.5, 34.4],
                [23.5, 29.1],
                [23.56, 20.55]  
            ]
        }, {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 70,
                        type: "Mineral Deposit",
                        location: [29,15],
                        items: ["Durium Sand","Doman Iron Sand", "Palladium Sand", "Lightning Crystal"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [5,29],
                        items: ["Raw Azurite"]
                    },{
                        level: 70,
                        type: "Ephemeral Node",
                        location: [29.15,15.15],
                        items: ["Schorl", "Lightning Crystal"]
                    }  
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 70,
                        type: "Lush Vegetation Patch",
                        location: [14,26],
                        items: ["Nipplewort", "Earth Crystal", "Sun Cabbage", "Fennel", "Chickweed"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [20,8],
                        items: ["Rhea"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [27,17],
                        items: ["Othardian Plum"]
                    },{
                        level: 70,
                        type: "Ephemeral Node",
                        location: [16,28],
                        items: ["Doman Yellow", "Earth Crystal"]
                    }  
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 66,
                    name: "Hak Khaal",
                    location: [29,20],
                    items: ["Zagas Khaal","Curtain Pleco","Dry Steppe Skipper","Dusk Crayfish","Hak Bitterling","Timeworn Gaganaskin Map"]
                },{
                    level: 66,
                    name: "Nem Khaal",
                    location: [32,30],
                    items: ["Killifish","Othardian Trout","Zagas Khaal","Steppe Skipper","Dawn Crayfish","Timeworn Gaganaskin Map"]
                },{
                    level: 67,
                    name: "Dotharl Khaa",
                    location: [12,33],
                    items: ["Brassfish","Nhaama's Boon"]
                },{
                    level: 67,
                    name: "Lower Yat Khaal",
                    location: [22,28],
                    items: ["Othardian Trout","Steppe Skipper","Dawn Crayfish","Yat Goby","Jade Sculpin"]
                },{
                    level:67,
                    name:"Tao Khaal",
                    location:[16,14],
                    items:["Zagas Khaal","Dry Steppe Skipper","Dusk Crayfish", "Bowfish", "Tao Bitterling","Gazelleskin Map","Timeworn Gaganaskin Map"]
                },{
                    level:67,
                    name:"Upper Yat Khaal",
                    location:[17,19],
                    items:["Tail Mountains Minnow","Zagas Khaal","Dry Steppe Skipper", "Skytear", "Dusk Crayfish", "Timeworn Gaganaskin Map"]
                },{
                    level:70,
                    name:"Azim Khaat",
                    location:[21,22],
                    items:["Othardian Trout","Zagas Khaal","Sun Bass","Hardscale","Sweatfish"]
                }]
                
            }]
            
        }        
    ]
    
}, {
    mapId:"mapid2",
    title:"The_Lochs",
    sortOrder: 6,
    layers:[
        {
            name:"aetherCurrents",
            displayName: "Aether Currents",
            data: [
                [14.3, 21.6],
                [13.4, 36.2],
                [17.9, 30.9],
                [23.6, 37.2],
                [29.5, 22.9],
                [22.4, 16.3],
                [34.8, 7.2],
                [14.9, 12.3],
                [8.59, 15.6],
                [34.9, 31.6]
            ]
        },
        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 70,
                        type: "Unspoiled Node",
                        location: [21.7,29],
                        items: ["Ala Mhigan Salt Crystal"]
                    },{
                        level: 70,
                        type: "Ephemeral Node",
                        location: [13,17],
                        items: ["Almandine", "Ice Crystal"]
                    }  
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 70,
                        type: "Mature Tree",
                        location: [26,9],
                        items: ["Zelkova Log", "Ice Crystal"]
                    },{
                        level: 70,
                        type: "Unspoiled Node",
                        location: [11,13],
                        items: ["Torreya Log"]
                    },{
                        level: 70,
                        type: "Ephemeral Node",
                        location: [28,10],
                        items: ["Torreya Branch", "ice Crystal"]
                    }  
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 70,
                    name: "Lock Sled",
                    location: [21,21],
                    items: ["Rock Saltfish","Saltshield Snapper","Whitehorse","Pearl-eye","Sculptor"]
                }]
                
            }]
        }
    ]
}];

let map = new FFXIVMap(maps);

