var widthBlock = scale*numhori+padding;
var paddingText = 20;
var w = 2*widthBlock+paddingBlocks+2*paddingText, h=scale*numverti+padding+paddingText ;
var fig1 = d3.select("#fig1")
    .attr("width", w)
    .attr("height", h);


var colorScale = d3.scaleOrdinal()
    .domain([["math", true], ["lit", true], ["math", false], ["lit", false]])
    .range([d3.hcl(150,90,50), d3.hcl(250, 90, 50), d3.hcl(150, 90, 50), d3.hcl(250, 90, 50)]);

    
rectW = fig1.select("#groupW").selectAll("rect")
.data(datasetW)
.enter()
.append("rect")
    .attr("x", function(d){return d.x*(scale)+padding+paddingText;})
    .attr("y", function(d){return d.y*(scale)+padding+paddingText;})
    .attr('width', scale-padding)
    .attr('height', scale-padding)
    .attr('fill', function(d){return colorScale([d.study, d.accepted]);})
    .attr('stroke-width', 1)
    //.attr('shape-rendering', 'crispEdges')
    //.attr('stroke', "lightslategray");
fig1.select("#groupW").append("text").text("8")
    .attr("x", 0)
    .attr("y", paddingText + 8*scale/2)
fig1.select("#groupW").append("text").text("16")
    .attr("x", 0)
    .attr("y", paddingText + 8*scale + 16*scale/2)
fig1.select("#groupW").append("text").text("60")
    .attr("x", widthBlock/2)
    .attr("y", paddingText/2)

fig1.select("#groupM").append("text").text("20")
    .attr("x", widthBlock + paddingText)
    .attr("y", paddingText + 20*scale/2)

fig1.select("#groupM").append("text").text("60")
    .attr("x", widthBlock/2)
    .attr("y", paddingText/2)
rectM = fig1.select("#groupM").attr('transform', `translate(${widthBlock+paddingBlocks}, 0)`).selectAll("rect")
.data(datasetM)
.enter()
.append("rect")
    .attr("x", function(d){return d.x*(scale)+padding+paddingText;})
    .attr("y", function(d){return d.y*(scale)+padding+paddingText;})
    .attr('width', scale-padding)
    .attr('height', scale-padding)
    .attr('fill', function(d){return colorScale([d.study, d.accepted]);})
    .attr('stroke-width', 1)


