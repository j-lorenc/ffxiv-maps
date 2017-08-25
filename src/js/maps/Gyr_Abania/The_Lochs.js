export default {
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
}