export default {
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
};