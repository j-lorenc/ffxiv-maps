export default {
    mapId:"mapid4",
    title:"Eastern_La_Noscea",
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
                        level: 35,
                        type: "Mineral Deposit",
                        location: [28,27],
                        items: ["Raw Garnet", "Raw Aquamarine", "Raw Goshenite", "Water Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 30,
                        type: "Mature Tree",
                        location: [28,33],
                        items: ["Grade 2 Carbonized Matter", "Blue Pigment", "Water Shard", "Water Crystal"]
                    },{
                        level: 35,
                        type: "Lush Vegetation Patch",
                        location: [26,30],
                        items: ["Dragon Pepper", "Midland Basil", "Mandrake", "Salt Leek", "Water Shard", "Midland Basil Seeds (Hidden and Rare)", "Mandrake Seeds (Hidden & Rare)"]
                    },{
                        level: 40,
                        type: "Mature Tree",
                        location: [19,25],
                        items: ["Iron Acorn", "Almonds", "Nutmeg", "Mahogany Log", "Water Shard", "Almond Seeds (Hidden)"]
                    },{
                        level: 40,
                        type: "Lush Vegetation Patch",
                        location: [21,29],
                        items: ["Maiden Artichoke", "Ramhorn Zucchini", "Mugwort", "Water Shard"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 25,
                    name: "South Bloodshore",
                    location: [33,33],
                    items: ["Merlthor Goby", "Coral Butterfly", "Blue Octopus", "Blue Coral", "Sea Bo", "Bianaq Bream"]
                },{
                    level: 30,
                    name: "Costa del Sol",
                    location: [33,30],
                    items: ["Angelfish", "Blowfish", "Bianaq Bream"]
                }]
                
            }]
        }
    ]
}