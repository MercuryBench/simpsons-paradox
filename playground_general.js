var dataPGA_general = {Nx: 1, Ny: 1, Nx11: 0.8, Nx12: 0.2, Nx21: 0.75, Nx22: 0.25, Ny1: 0.5, Ny2: 0.5};
var dataPGB_general = {Nx: 1, Ny: 1, Nx11: 0.5, Nx12: 0.5, Nx21: 0.5, Nx22: 0.5, Ny1: 0.5, Ny2: 0.5};

var labels = []

// graphical parameters
var scale = 350
var paddingGroups = 50;
var paddingBars = 25;
var paddingFig = 15;
var heightText = 30;
var barWidth = 25
var paddingText = 20

var svg = d3.select("#figPlayground_general");

                          var graphicalData = {scale: scale, paddingGroups: paddingGroups, paddingBars: paddingBars, paddingFig: paddingFig, heightText: heightText, barWidth: barWidth, paddingText: paddingText}
 buildPlayground(svg, dataPGA_general, dataPGB_general, graphicalData)

svg.select("#giantGroup").select("#groupLeft").select("#title").text("Female applicants")
svg.select("#giantGroup").select("#groupLeft").select("#labelGood").text("Maths")
svg.select("#giantGroup").select("#groupLeft").select("#labelBad").text("Chemistry")
svg.select("#giantGroup").select("#groupRight").select("#title").text("Male applicants")
svg.select("#giantGroup").select("#groupRight").select("#labelGood").text("Maths")
svg.select("#giantGroup").select("#groupRight").select("#labelBad").text("Chemistry")
updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general)

var updateTotalRatio_general = function(dataA, dataB)
                          {
                          
                              var rs = calculateTotalRatios(dataA, dataB);
                              var ra = rs[0], rb = rs[1];
                      
                              d3.select("#totalRatioA_general").text(Number(ra).toFixed(2))
                              d3.select("#totalRatioB_general").text(Number(rb).toFixed(2))
                              }
                              
var updateParadox_general = function(dataA, dataB)
{// update paradox status
    if (testForParadox(dataA, dataB)) {
      d3.select("#p_paradox").text("Yes");
      document.getElementById("explanation_general").innerHTML = "<b>Well done!</b> In this particular university, the math graduate program gets mostly male applicants while the chemistry graduate"
      + " program receives more applications from women. In both departments, female applicants are slightly more likely to get into the program."
      + " As it happens, the math program is a lot easier to get into with admission rates of just under 80% for both genders. The chemistry program is more selective with admission rates of 75% for women "
      + " and lower for men. These two factors combined mean the following: </br>When we pick a woman applying for a graduate program, she is more likely to be applying for the chemistry program which is "
      + " tougher to get into. A given male applicant is typically trying to get into the 'easy choice', the math program. This factor is stronger than the disadvantage of male applicants in each department."
      
      
        d3.select("#explanation_general").style("background-color", "green")
    }
    else {
        d3.select("#p_paradox").text("No");
    }
}

updateTotalRatio_general(dataPGA_general, dataPGB_general)
updateParadox_general(dataPGA_general, dataPGB_general)

// set sliders to initial data
var slider1 = document.getElementById("rangeRatioA1_general");
var slider2 = document.getElementById("rangeRatioB1_general");
var slider3 = document.getElementById("rangeSuccA1_general");
var slider4 = document.getElementById("rangeSuccA2_general");
var slider5 = document.getElementById("rangeSuccB1_general");
var slider6 = document.getElementById("rangeSuccB2_general");
slider1.value = dataPGA_general.Ny1/dataPGA_general.Ny*100
slider2.value = dataPGB_general.Ny1/dataPGB_general.Ny*100
slider3.value = dataPGA_general.Nx11/dataPGA_general.Nx*100
slider4.value = dataPGA_general.Nx21/dataPGA_general.Nx*100
slider5.value = dataPGB_general.Nx11/dataPGB_general.Nx*100
slider6.value = dataPGB_general.Nx21/dataPGB_general.Nx*100

var indicator1 = document.getElementById("indicator1_general")
var indicator2 = document.getElementById("indicator2_general")
var indicator3 = document.getElementById("indicator3_general")
var indicator4 = document.getElementById("indicator4_general")
var indicator5 = document.getElementById("indicator5_general")
var indicator6 = document.getElementById("indicator6_general")
indicator1.innerHTML = slider1.value/100
indicator2.innerHTML = slider2.value/100
indicator3.innerHTML = slider3.value/100
indicator4.innerHTML = slider4.value/100
indicator5.innerHTML = slider5.value/100
indicator6.innerHTML = slider6.value/100





// slider1 input reaction 
slider1.oninput = function() {
  dataPGA_general.Ny1 = this.value*dataPGA_general.Ny/100;
  dataPGA_general.Ny2 = (100-this.value)*dataPGA_general.Ny/100;
  
  d3.select("#indicator1_general").text(Number(this.value/100).toFixed(2))
  
  updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general);
  updateTotalRatio_general(dataPGA_general, dataPGB_general)
  updateParadox_general(dataPGA_general, dataPGB_general)

} 
// slider 2 update function (see slider 1 for comments)
slider2.oninput = function() {
  var g = d3.select("#figPlayground_general").select("#groupRight_general");
  dataPGB_general.Ny1 = this.value*dataPGB_general.Ny/100;
  dataPGB_general.Ny2 = (100-this.value)*dataPGB_general.Ny/100;
  d3.select("#indicator2_general").text(Number(this.value/100).toFixed(2))
  
  updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general);
  updateTotalRatio_general(dataPGA_general, dataPGB_general)
  updateParadox_general(dataPGA_general, dataPGB_general)
  
} 

slider3.oninput = function() {
  var g = d3.select("#figPlayground_general").select("#groupLeft_general");
  dataPGA_general.Nx11 = this.value*dataPGA_general.Nx/100;
  dataPGA_general.Nx12 = (100-this.value)*dataPGA_general.Nx/100;
  d3.select("#indicator3_general").text(Number(this.value/100).toFixed(2))
  
  updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general);
  updateTotalRatio_general(dataPGA_general, dataPGB_general)
  updateParadox_general(dataPGA_general, dataPGB_general)
}      

slider4.oninput = function() {
  var g = d3.select("#figPlayground_general").select("#groupLeft_general");
  dataPGA_general.Nx21 = this.value*dataPGA_general.Nx/100;
  dataPGA_general.Nx22 = (100-this.value)*dataPGA_general.Nx/100;
  d3.select("#indicator4_general").text(Number(this.value/100).toFixed(2))

  updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general);
  updateTotalRatio_general(dataPGA_general, dataPGB_general)
  updateParadox_general(dataPGA_general, dataPGB_general)
 
} 

slider5.oninput = function() {
  var g = d3.select("#figPlayground_general").select("#groupRight_general");
  dataPGB_general.Nx11 = this.value*dataPGB_general.Nx/100;
  dataPGB_general.Nx12 = (100-this.value)*dataPGB_general.Nx/100;
  d3.select("#indicator5_general").text(Number(this.value/100).toFixed(2))

  updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general);
  updateTotalRatio_general(dataPGA_general, dataPGB_general)
  updateParadox_general(dataPGA_general, dataPGB_general)
} 

slider6.oninput = function() {
  var g = d3.select("#figPlayground_general").select("#groupRight_general");
  dataPGB_general.Nx21 = this.value*dataPGB_general.Nx/100;
  dataPGB_general.Nx22 = (100-this.value)*dataPGB_general.Nx/100;
  d3.select("#indicator6_general").text(Number(this.value/100).toFixed(2))

  updateFigure(d3.select("#figPlayground_general"), dataPGA_general, dataPGB_general);
  updateTotalRatio_general(dataPGA_general, dataPGB_general)
  updateParadox_general(dataPGA_general, dataPGB_general)
} 

