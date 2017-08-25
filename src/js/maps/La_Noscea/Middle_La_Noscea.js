export default {
    mapId:"mapid4",
    title:"Middle_La_Noscea",
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
                        level: 20,
                        type: "Rocky Outcrop",
                        location: [15,10],
                        items: ["Grade 1 Carbonized Matter", "Fire Shard"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 15,
                        type: "Lush Vegetation Patch",
                        location: [22,19],
                        items: ["Ruby Tomato", "Sunset Wheat", "Straw", "La Noscean Lettuce", "Fire Shard", "La Noscean Lettuce Seeds (Hidden)", "Firelight Seeds (Hidden)"]
                    },{
                        level: 30,
                        type: "Mature Tree",
                        location: [16,13],
                        items: ["Grade 2 Carbonized Matter, Red Pigment, Fire Shard, Fire Crystal"]
                    },{
                        level: 50,
                        type: "Mature Tree",
                        location: [19,21],
                        items: ["Grade 3 Carbonized Matter", "Fire Crystal", "Fire Shard"]
                    }
                ]
            },{
                name:"fishingWells",
                displayName:"Fishing",
                data: [{
                    level: 1,
                    name: "Zephyr Drift",
                    location: [19,22],
                    items: ["Merlthor Goby", "Lominsan Anchovy", "Finger Shrimp", "Ocean Cloud", "Sea Cucumber", "Harbor Herring", "Coral Butterfly", "Angelfish", "Blue Octopus"]
                },{
                    level: 1,
                    name: "Rogue River",
                    location: [22,22],
                    items: ["Crayfish", "Chub", "Dwarf Catfish", "Princess Trout", "La Noscean Perch"]
                },{
                    level: 1,
                    name: "West Agelyss River",
                    location: [20,18],
                    items: ["Crayfish", "Chub", "Dwarf Catfish", "Princess Trout", "Gudgeon", "La Noscean Perch"]
                },{
                    level: 5,
                    name: "Nym River",
                    location: [18,15],
                    items: ["Chub", "Dwarf Catfish", "Princess Trout", "Dusk Goby", "Gudgeon", "Maiden Carp", "La Noscean Perch"]
                },{
                    level: 5,
                    name: "Summerford",
                    location: [15,15],
                    items: ["Merlthor Goby", "Finger Shrimp", "White Coral", "Ocean Cloud", "Harbor Herring", "Vongola Clam", "Blue Octopus", "Ogre Barracuda"]
                },{
                    level: 15,
                    name: "Woad Whisper Canyon",
                    location: [21,12],
                    items: ["Dwarf Catfish", "Dusk Goby", "River Crab", "La Noscean Perch", "Copperfish"]
                }]
                
            }]
        }
    ]
}