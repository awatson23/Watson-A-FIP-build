var cyclists;
var pedestrians;
var img;

function preload() {
    cyclists = loadTable("data/cyclists-clean.csv","header");
    pedestrians = loadTable("data/pedestrians-clean.csv","header");
    img = loadImage('assets/toronto-map.jpg');
}

function setup() {
    createCanvas(960, 587);
    noStroke();
    slider = createSlider(0.1, 1.5, 0.3, 0.0);
    slider.position(1000, 1270);
    slider.style('width', '350px');
}

function draw() {
   drawCyclists();
   drawPedestrians();
}

function drawCyclists() {
    fill(255,115,0,120);
    image(img, 0, 0);
    let sliderVal = slider.value();
    //console.log(sliderVal)
    scale(578);
    translate(-267.64,-150.47)
    

    for (var i=0; i < cyclists.getRowCount(); i++) {
        var latitude = cyclists.getNum(i, "LATITUDE");
        var longitude = cyclists.getNum(i, "LONGITUDE");
        //var density = cities.getNum(i, "density")
        setXYcycs(latitude, longitude);
        
    }
    //this function expects lat and lng to be passed
   function setXYcycs(lat, lng) {
       //change range of lng to match sketch dimensions
        var x = map(lng, -180, 180, 0, width);
        var y = map(lat,90, -90,0,height);
        ellipse(x,y,.025*sliderVal, .025*sliderVal, 70);
   }

}

function drawPedestrians() {
    fill(0,100,255,120);
    let sliderVal = slider.value();

    //console.log(sliderVal)

    for (var i=0; i < pedestrians.getRowCount(); i++) {
        var latitude = pedestrians.getNum(i, "LATITUDE");
        var longitude = pedestrians.getNum(i, "LONGITUDE");
        //var density = cities.getNum(i, "density")
        setXYpeds(latitude, longitude);
    }
    //this function expects lat and lng to be passed
   function setXYpeds(lat, lng) {
       //change range of lng to match sketch dimensions
        var x = map(lng, -180, 180, 0, width);
        var y = map(lat,90, -90,0,height);
        ellipse(x,y,.025*sliderVal, .025*sliderVal, 70);
   }
}