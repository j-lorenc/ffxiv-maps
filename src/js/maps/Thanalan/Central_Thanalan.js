export default {
    mapId:"mapid4",
    title:"Central_Thanalan",
    sortOrder: 1,
    layers: [
        {
            name:"gatheringNodes",
            displayName:"Gathering Nodes",
            layers: [{
                name:"miningNodes",
                displayName:"Mining",
                data: [
                    {
                        level: 5,
                        type: "Mineral Deposit",
                        location: [18,25],
                        items: ["Muddy Water", "Copper Ore", "Wind Shard", "Lightning Shard"]
                    },
                    {
                        level: 5,
                        type: "Mineral Deposit",
                        location: [24,26],
                        items: ["Bone Chip", "Wind Shard", "Lightning Shard"]
                    },
                    {
                        level: 10,
                        type: "Mineral Deposit",
                        location: [20,22],
                        items: ["Tin Ore", "Zinc Ore", "Soiled Femur", "Lightning Shard"]
                    },
                    {
                        level: 15,
                        type: "Rocky Outcrop",
                        location: [14,23],
                        items: ["Rock Salt", "Ragstone", "Fine Sand", "Lightning Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 10,
                        type: "Mature Tree",
                        location: [22,26],
                        items: ["Cock Feather", "Cloves", "Lightning Shard"]
                    },{
                        level: 15,
                        type: "Lush Vegetation Patch",
                        location: [25,20],
                        items: ["Black Pepper", "Yellow Ginseng", "Alpine Parsnip", "Lightning Shard", "Black Pepper Seeds (Hidden)", "Levinlight Seeds (Hidden)"]
                    },{
                        level: 20,
                        type: "Mature Tree",
                        location: [21,20],
                        items: ["Nopales", "Lightning Shard"]
                    },{
                        level: 30,
                        type: "Mature Tree",
                        location: [24,31],
                        items: ["Grade 2 Carbonized Matter", "Purple Pigment", "Lightning Shard", "Lightning Crystal"]
                    },{
                        level: 50,
                        type: "Mature Tree",
                        location: [29,19],
                        items: ["Grade 3 Carbonized Matter", "Lightning Crystal", "Lightning Shard"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 5,
                    name: "Upper Soot Creek",
                    location: [24,18],
                    items: ["Bone Crayfish", "Dusk Goby", "Brass Loach", "Maiden Carp", "Dark Bass"]
                },{
                    level: 10,
                    name: "Lower Soot Creek",
                    location: [17,24],
                    items: ["Bone Crayfish", "Dusk Goby", "Brass Loach", "Maiden Carp", "Dark Bass"]
                },{
                    level: 10,
                    name: "The Clutch",
                    location: [29,22],
                    items: ["Bone Crayfish", "Dusk Goby", "Brass Loach", "Maiden Carp", "Dark Bass"]
                }]
                
            }]
        }
    ]
}