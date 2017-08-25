export default {
    mapId:"mapid4",
    title:"South_Shroud",
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
                        level: 25,
                        type: "Rocky Outcrop",
                        location: [23,21],
                        items: ["Silver Sand", "Earth Rock", "Ice Rock", "Wind Rock", "Ice Shard"]
                    },
                    {
                        level: 25,
                        type: "Mineral Deposit",
                        location: [15,19],
                        items: ["Effervescent Water", "Silver Ore", "Ice Shard"]
                    },
                    {
                        level: 40,
                        type: "Mineral Deposit",
                        location: [28,22],
                        items: ["Black Alumen", "Raw Tourmaline", "Raw Spinel", "Ice Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 25,
                        type: "Mature Tree",
                        location: [23,21],
                        items: ["Gridanian Walnut", "Walnut Log", "Matron's Mistletoe", "Ice Shard"]
                    },{
                        level: 30,
                        type: "Mature Tree",
                        location: [16,21],
                        items: ["Grade 2 Carbonized Matter", "Grey Pigment", "Ice Shard", "Ice Crystal"]
                    },{
                        level: 30,
                        type: "Mature Tree",
                        location: [26,19],
                        items: ["Chocobo Feather", "Alligator Pear", "Ice Shard"]
                    },{
                        level: 35,
                        type: "Lush Vegetation Patch",
                        location: [17,28],
                        items: ["Wildfowl Feather", "Flax", "White Truffle", "Ice Shard", "Linseed (Hidden)"]
                    },{
                        level: 35,
                        type: "Mature Tree",
                        location: [16,30],
                        items: ["Tarantula", "Oak Branch", "Oak Log", "Ice Shard"]
                    },{
                        level: 40,
                        type: "Lush Vegetation Patch",
                        location: [21,29],
                        items: ["Blood Currants", "Thyme", "Ice Shard", "Blood Currant Seeds (Hidden)"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 20,
                    name: "Upper Hathoeva River",
                    location: [18,19],
                    items: ["Rainbow Trout", "River Crab", "Ala Mhigan Fighting Fish", "Faerie Bass", "Dark Sleeper", "Black Eel"]
                },{
                    level: 25,
                    name: "East Hathoeva River",
                    location: [24,22],
                    items: ["Rainbow Trout", "Faerie Bass", "Dark Sleeper", "Copperfish", "Mudcrab", "Black Eel"]
                },{
                    level: 25,
                    name: "Lower Hathoeva River",
                    location: [18,19],
                    items: ["Rainbow Trout", "Ala Mhigan Fighting Fish", "Faerie Bass", "Mudcrab", "Black Eel", "Climbing Perch, Yugr'am Salmon"]
                }]
                
            }]
        }
    ]
}