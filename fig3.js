var widthBlock = scale*numhori+padding;
var w = 2*widthBlock+paddingBlocks, h=scale*numverti+padding;
var fig3 = d3.select("#fig3")
    .attr("width", w)
    .attr("height", h);


var colorScale = d3.scaleOrdinal()
    .domain([["math", true], ["lit", true], ["math", false], ["lit", false]])
    .range([d3.hcl(150,90,50), d3.hcl(250, 90, 50), d3.hcl(150, 90, 85), d3.hcl(250, 90, 85)]);

    
rect = fig3.select("#groupW").selectAll("rect")
.data(datasetW)
.enter()
.append("rect")
    .attr("x", function(d){return d.x*(scale)+padding;})
    .attr("y", function(d){return d.y*(scale)+padding;})
    .attr('width', scale-padding)
    .attr('height', scale-padding)
    .attr('fill', function(d){return colorScale([d.study, d.accepted]);})
    .attr('stroke-width', 1)
    //.attr('shape-rendering', 'crispEdges')
    //.attr('stroke', "lightslategray");
rectM = fig3.select("#groupM").attr('transform', `translate(${widthBlock+paddingBlocks}, 0)`).selectAll("rect")
.data(datasetM)
.enter()
.append("rect")
    .attr("x", function(d){return d.x*(scale)+padding;})
    .attr("y", function(d){return d.y*(scale)+padding;})
    .attr('width', scale-padding)
    .attr('height', scale-padding)
    .attr('fill', function(d){return colorScale([d.study, d.accepted]);})
    .attr('stroke-width', 1)