var widthBlock = scale*numhori+padding;
var w = 2*widthBlock+paddingBlocks, h=scale;
var fig2 = d3.select("#fig2")
    .attr("width", w)
    .attr("height", h);

fig2.select("#groupW").append("rect")
    .attr('width', scale*54)
    .attr('height', scale)
    .attr('fill', d3.hcl(150,90,50));
fig2.select("#groupW").append('rect')
    .attr('x', scale*54+padding)
    .attr('width', scale*6)
    .attr('height', scale)
    .attr('fill', d3.hcl(150,90,85));

fig2.select("#groupM").attr('transform', `translate(${widthBlock+paddingBlocks}, 0)`).append("rect")
    .attr('width', scale*51)
    .attr('height', scale)
    .attr('fill', d3.hcl(150,90,50));
    
fig2.select("#groupM").append('rect')
.attr('x', scale*51+padding)
.attr('width', scale*9)
.attr('height', scale)
.attr('fill', d3.hcl(150,90,85));
 /*   tempW.append('rect')
    .attr('width', scale*54)
    .attr('height', scale)
    .attr('fill', d3.hcl(150,90,50));
tempW.append('rect')
    .attr('x', scale*54+padding)
    .attr('width', scale*54)
    .attr('height', scale)
    .attr('fill', d3.hcl(150,90,85));
tempW.append('rect')
    .attr('y', scale+padding)
    .attr('width', scale*42)
    .attr('height', scale)
    .attr('fill', d3.hcl(250,90,50));
tempW.append('rect')
    .attr('y', scale+padding)
    .attr('x', scale*42+padding)
    .attr('width', scale*54)
    .attr('height', scale)
    .attr('fill', d3.hcl(250,90,85));*/


    