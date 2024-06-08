
var allmybtn=document.getElementsByClassName("nameofplanet")
for (let index = 0; index < allmybtn.length; index++) {
    
document.getElementById("Venus").onclick=function(){

var venus=document.getElementById("Venus")
var allbtn=document.getElementsByClassName("nameofplanet")
if(venus.onclick){
    venus.style.borderBlockStartColor="red"
    allbtn[4,3,5].style.borderBlockStartColor="yellow"
    

}





    var nameplant=document.getElementById("name")
nameplant.innerText="Venus"


var paragraph=document.getElementById("p")
paragraph.innerText="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."

var img=document.getElementById("img")
img.src="planet-venus.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="243 DAYS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="224.7 DAYS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="6,051.8 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="471°C"

  document.getElementById("btn2").onclick=function(){
        var paragraph=document.getElementById("p")
        paragraph.innerText="The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate." 

        var img=document.getElementById("img")
img.src="planet-venus-internal.svg"
    }
    
    document.getElementById("btn1").onclick=function(){
        var paragraph=document.getElementById("p")
        paragraph.innerText="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight"

        var img=document.getElementById("img")
img.src="planet-venus.svg"
    }
    document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii." 
    var img=document.getElementById("img")
    
img.src="geology-venus.png"
    
}

} 
  




document.getElementById("Earth").onclick=function(){
    
    var earth=document.getElementById("Earth")
    var allbtn=document.getElementsByClassName("nameofplanet")
    if(earth.onclick){
        earth.style.borderBlockStartColor="blue"
        allbtn[index].style.borderBlockStartColor="yellow"
           
    }








    var nameplant=document.getElementById("name")
    nameplant.innerText="Earth"
    
    var paragraph=document.getElementById("p")
paragraph.innerText=" Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."

var img=document.getElementById("img")
img.src="planet-earth.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="0.99 DAYS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="365.26 DAYS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="6,371 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="16°C"


document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle." 
    var img=document.getElementById("img")
img.src="planet-earth-internal.svg"

}
document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive" 
    var img=document.getElementById("img")
img.src="planet-earth.svg"

}
document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors." 
    var img=document.getElementById("img")
    
img.src="geology-earth.png"
    
}

}







document.getElementById("Mars").onclick=function(){
    var nameplant=document.getElementById("name")
    nameplant.innerText="Mars"
    
    var paragraph=document.getElementById("p")
paragraph.innerText=" Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet."

var img=document.getElementById("img")
img.src="planet-mars.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="1.03 DAYS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="1.88 YEARS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="3,389.5 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="-28°C"
 
document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur." 
    var img=document.getElementById("img")
img.src="planet-mars-internal.svg"
}
document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet" 
    var img=document.getElementById("img")
img.src="planet-mars.svg"
}
document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt." 
    var img=document.getElementById("img")
    
img.src="geology-mars.png"
    
}

}







document.getElementById("Jupiter").onclick=function(){
    var nameplant=document.getElementById("name")
    nameplant.innerText="Jupiter"
    
    var paragraph=document.getElementById("p")
paragraph.innerText=" Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun"

var img=document.getElementById("img")
img.src="planet-jupiter.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="9.93 HOURS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="11.86 YEARS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="69,911 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="-108°C"
document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core." 
    var img=document.getElementById("img")
img.src="planet-jupiter-internal.svg"
}
document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun" 
    var img=document.getElementById("img")
img.src="planet-jupiter.svg"
}
document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665. " 
    var img=document.getElementById("img")
    
img.src="geology-jupiter.png"
    
}

}





document.getElementById("Saturn").onclick=function(){
    var nameplant=document.getElementById("name")
    nameplant.innerText="Saturn"
    
    var paragraph=document.getElementById("p")
paragraph.innerText="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth. "

var img=document.getElementById("img")
img.src="planet-saturn.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="10.8 HOURS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="29.46 YEARS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="58,232 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="-138°C"

document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass." 
    var img=document.getElementById("img")
img.src="planet-saturn-internal.svg"
}
document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth." 
    var img=document.getElementById("img")
img.src="planet-saturn.svg"
}
document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.  " 
    var img=document.getElementById("img")
    
img.src="geology-saturn.png"
    
}
}










document.getElementById("Uranus").onclick=function(){
    var nameplant=document.getElementById("name")
    nameplant.innerText="Uranus"
    
    var paragraph=document.getElementById("p")
paragraph.innerText=" Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."

var img=document.getElementById("img")
img.src="planet-uranus.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="17.2 HOURS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="84 YEARS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="25,362 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="-195°C"

document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses." 
    var img=document.getElementById("img")
img.src="planet-uranus-internal.svg"
}
document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System." 
    var img=document.getElementById("img")
img.src="planet-uranus.svg"
}
document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere. " 
    var img=document.getElementById("img")
    
img.src="geology-uranus.png"
    
}
}





document.getElementById("Neptune").onclick=function(){
    var nameplant=document.getElementById("name")
    nameplant.innerText="Neptune"
    
    var paragraph=document.getElementById("p")
paragraph.innerText="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus. "

var img=document.getElementById("img")
img.src="planet-neptune.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="16.08 HOURS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="164.79 YEARS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="24,622 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="-201°C"

document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions." 
    var img=document.getElementById("img")
img.src="planet-neptune-internal.svg"
}

document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus." 
    var img=document.getElementById("img")
img.src="planet-neptune.svg"
}
document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum. " 
    var img=document.getElementById("img")
    
img.src="geology-neptune.png"

}

}






document.getElementById("Mercury").onclick=function(){
    var nameplant=document.getElementById("name")
    nameplant.innerText="Mercury"
    
    var paragraph=document.getElementById("p")
paragraph.innerText=" Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."

var img=document.getElementById("img")
img.src="planet-mercury.svg"

var minilabelone=document.getElementById("mini1")
minilabelone.innerText="58.6 DAYS"

var minilabeltwo=document.getElementById("mini2")
minilabeltwo.innerText="87.97 DAYS"

var minilabelthree=document.getElementById("mini3")
minilabelthree.innerText="2,439.7 KM"

var minilabelfour=document.getElementById("mini4")
minilabelfour.innerText="430°C"


document.getElementById("btn2").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density." 
    var img=document.getElementById("img")
img.src="planet-mercury-internal.svg"
}
document.getElementById("btn1").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText=" Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth." 
    var img=document.getElementById("img")
img.src="planet-mercury.svg"
}

document.getElementById("btn3").onclick=function(){
    var paragraph=document.getElementById("p")
    paragraph.innerText="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s. " 
    var img=document.getElementById("img")
    
img.src="geology-mercury.png"
    
}


}







}