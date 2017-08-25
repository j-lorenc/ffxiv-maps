export default {
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
    
}