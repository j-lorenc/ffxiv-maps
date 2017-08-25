export default {
    mapId:"mapid4",
    title:"East Shroud",
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
                        level: 30,
                        type: "Mineral Deposit",
                        location: [20,27],
                        items: ["Grade 2 Carbonized Matter", "Green Pigment", "Wind Shard", "Wind Crystal", "Grade 1 Shroud Topsoil (Rare)"]
                    },
                    {
                        level: 50,
                        type: "Mineral Deposit",
                        location: [18,24],
                        items: ["Grade 3 Carbonized Matter", "Wind Shard", "Wind Crystal", "Grade 2 Shroud Topsoil (Rare)"]
                    }
                ]
            },{
                name:"botanyNodes",
                displayName:"Botany",
                data: [
                    {
                        level: 20,
                        type: "Lush Vegetation Patch",
                        location: [18,28],
                        items: ["Galago Mint", "Belladonna", "Gil Bun", "Shroud Seedling", "Wind Shard"]
                    },{
                        level: 20,
                        type: "Mature Tree",
                        location: [15,27],
                        items: ["Faerie Apple", "Yew Branch", "Yew Log", "Wind Shard", "Faerie Apple Seeds (Hidden)"]
                    },{
                        level: 50,
                        type: "Lush Vegetation Patch",
                        location: [16,23],
                        items: ["Rosewood Log", "Rosewood Branch", "Wind Shard"]
                    }
                ]
            }]
        }
    ]
}