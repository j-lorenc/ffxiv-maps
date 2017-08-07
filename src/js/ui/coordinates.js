class Coordinates {
    
    constructor(map){
        this.map = map;
        this.x = 0;
        this.y = 0;
        this.attachEventListeners();
        this.update(this.x, this.y);
    }
    
    render(){
        
        let template = `<div>X: `+this.x+`  Y: `+this.y+`</div>`;
        document.getElementsByClassName("coords")[0].innerHTML = template;
    }
    
    attachEventListeners(){
        
        this.map.getMap().on("mousemove",(e)=>{
            let x = e.latlng.lng;
            let y = e.latlng.lat;
            
            this.update(x,y);
        });
        
        this.map.getMap().on("mouseout", (e)=>{
            let x=0;
            let y=0;
            
            this.update(x,y);
        });
    }
    
    update(x, y){
        let modifier = (256 /41);

        let convertedX = (Math.floor(((x / modifier)+1)*10) / 10).toFixed(1);
        let convertedY = (Math.floor(((y / -modifier) +1)*10) / 10).toFixed(1);

        this.x = convertedX;
        this.y = convertedY;
        
        this.render();
    }
    
}

export default Coordinates;