var makeBlocks = function(blockSelection, Nx, Ny, sc, pad, col)
        {
            var rectGroup = blockSelection.append("g").attr("id", "rectGroup");
            for (let i=0; i<Nx; i++){
                for (let j=0; j<Ny; j++){
                    rectGroup.append("rect")
                        .attr("width", sc-pad)
                        .attr("height", sc-pad)
                        .attr('transform', `translate(${i*sc}, ${j*sc})`)
                        .attr("stroke", "grey")
                        .attr("fill-opacity", "0.0")
                        //.attr("fill", col)
                }
            }
        }
var buildGroup = function(groupref, data, graphicalData, tooltip_ref){
    
    
    groupref.append("g")
        .attr("id", "upperleft")
    groupref.append("g")
        .attr("id", "upperright")
    groupref.append("g")
        .attr("id", "lowerleft")
    groupref.append("g")
        .attr("id", "lowerright")

    fig = groupref


    var blockUL = fig.select("#upperleft");
    blockUL.append("rect")
        .attr("id", "backgroundUL")
        .attr("fill", graphicalData.color[0])
        .attr("width", data.Nx11*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockUL, data.Nx11, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
    blockUL.append("text")
        .attr("id", "labelU")
        .attr("x", (data.Nx11+data.Nx12)*graphicalData.scale/2)
        .attr("y", data.Ny1*graphicalData.scale/2)
        .text(graphicalData.labelData.labelUpper[0])
        .attr("text-anchor", "middle")
        .attr("visibility", graphicalData.labelData.labelUpper[1])
    blockUL.append("text")
      .attr("id", "labelUL")
        .attr("x", (data.Nx11)*graphicalData.scale/2)
        .attr("y", data.Ny1*graphicalData.scale/2)
        .text(graphicalData.labelData.labelUpperLeft[0])
        .attr("text-anchor", "middle")
        .attr("visibility", graphicalData.labelData.labelUpperLeft[1])

    /*var tooltip = fig.append("text")
        .attr("x", 50)
        .attr("y", 50)
        .style("z-index", "10")
        .attr("visibility", "hidden")
        .text("a simple tooltip");*/
    
     


        /*g1.append("rect")
        .attr("id", "ratioBarTopLeft")
            .attr("width", data.Nx11*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("x", data.Nx11*graphicalData.scale)
            .attr("dx", "-0.5em")
            .attr("text-anchor", "end")*/


    var blockUR = fig.select("#upperright")
    blockUR.append("rect")
        .attr("id", "backgroundUR")
        .attr("fill", graphicalData.color[1])
        .attr("width", data.Nx12*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[1])
    blockUR.append("text")
    .attr("id", "labelUR")
        .attr("x", (data.Nx12)*graphicalData.scale/2)
        .attr("y", data.Ny1*graphicalData.scale/2)
        .text(graphicalData.labelData.labelUpperRight[0])
        .attr("text-anchor", "middle")
        .attr("visibility", graphicalData.labelData.labelUpperRight[1])
    blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

    var blockLL = fig.select("#lowerleft")
    blockLL.append("rect")
        .attr("id", "backgroundLL")
        .attr("fill", graphicalData.color[2])
        .attr("width", data.Nx21*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
    blockLL.append("text")
    .attr("id", "labelL")
        .attr("x", (data.Nx11+data.Nx12)*graphicalData.scale/2)
        .attr("y", data.Ny2*graphicalData.scale/2)
        .text(graphicalData.labelData.labelLower[0])
        .attr("text-anchor", "middle")
        .attr("visibility", graphicalData.labelData.labelLower[1])
    blockLL.append("text")
    .attr("id", "labelLL")
        .attr("x", (data.Nx21)*graphicalData.scale/2)
        .attr("y", data.Ny2*graphicalData.scale/2)
        .text(graphicalData.labelData.labelLowerLeft[0])
        .attr("text-anchor", "middle")
        .attr("visibility", graphicalData.labelData.labelLowerLeft[1])
    blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')

    var blockLR = fig.select("#lowerright")
    blockLR.append("rect")
        .attr("id", "backgroundLR")
        .attr("fill", graphicalData.color[3])
        .attr("width", data.Nx22*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[3])
    blockLR.append("text")
    .attr("id", "labelLR")
        .attr("x", (data.Nx22)*graphicalData.scale/2)
        .attr("y", data.Ny2*graphicalData.scale/2)
        .text(graphicalData.labelData.labelLowerRight[0])
        .attr("text-anchor", "middle")
        .attr("visibility", graphicalData.labelData.labelLowerRight[1])
    blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')

    
        fig.append("text")
            .attr("id", "labelNx")
            .attr("x", (data.Nx11+data.Nx12)/2*graphicalData.scale)
            .attr("y", 0)
            .attr("dy", "-0.5em")
            .text(data.Nx11+data.Nx12)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"hidden":"visible")

        
    
        if (fig.attr("id") == "groupLeft")
        {
        fig.append("text")
            .attr("id", "labelNy")
            .attr("x", 0)
            .attr("dx", "-0.5em")
            .attr("y", (data.Ny1+data.Ny2)/2*graphicalData.scale)
            .text(data.Ny1+data.Ny2)
            .attr("text-anchor", "end")
            .attr("visibility", graphicalData.subdivideVert?"hidden":"visible")
            
        fig.append("text")
            .attr("id", "labelNy1")
            .attr("class", "labelNy_sub")
            .attr("x", 0)
            .attr("dx", "-0.5em")
            .attr("y", data.Ny1/2*graphicalData.scale)
            .text(data.Ny1)
            .attr("text-anchor", "end")
            .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")

        fig.append("text")
            .attr("id", "labelNy2")
            .attr("class", "labelNy_sub")
            .attr("x", 0)
            .attr("dx", "-0.5em")
            .attr("y", (data.Ny1 + data.Ny2/2)*graphicalData.scale)
            .text(data.Ny2)
            .attr("text-anchor", "end")
            .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")
        }
        else
        {
            fig.append("text")
                .attr("id", "labelNy")
                .attr("x", (data.Nx21 + data.Nx22)*graphicalData.scale)
                .attr("dx", "0.5em")
                .attr("y", (data.Ny1+data.Ny2)/2*graphicalData.scale)
                .text(data.Ny1+data.Ny2)
                .attr("visibility", graphicalData.subdivideVert?"hidden":"visible")
                //.attr("text-anchor", "end")
            fig.append("text")
                .attr("id", "labelNy1")
                .attr("class", "labelNy_sub")
                .attr("x", (data.Nx21 + data.Nx22)*graphicalData.scale)
                .attr("dx", "0.5em")
                .attr("y", data.Ny1/2*graphicalData.scale)
                .text(data.Ny1)
                .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")
                //.attr("text-anchor", "end")
    
            fig.append("text")
                .attr("id", "labelNy2")
                .attr("class", "labelNy_sub")
                .attr("x", (data.Nx21 + data.Nx22)*graphicalData.scale)
                .attr("dx", "0.5em")
                .attr("y", (data.Ny1 + data.Ny2/2)*graphicalData.scale)
                .text(data.Ny2)
                .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")
                //.attr("text-anchor", "end")
            }
        
        fig.append("text")
            .attr("id", "labelNx11")
            .attr("class", "labelNx_sub")
            .attr("x", data.Nx11/2*graphicalData.scale)
            .attr("y", 0)
            .attr("dy", "-0.5em")
            .text(data.Nx11)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        fig.append("text")
            .attr("id", "labelNx12")
            .attr("class", "labelNx_sub")
            .attr("x", (data.Nx11 + data.Nx12/2)*graphicalData.scale)
            .attr("y", 0)
            .attr("dy", "-0.5em")
            .text(data.Nx12)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        fig.append("text")
            .attr("id", "labelNx21")
            .attr("class", "labelNx_sub")
            .attr("x", data.Nx21/2*graphicalData.scale)
            .attr("y", data.Ny*graphicalData.scale) // 15 is a bad hack to shift text below a bit
            .attr("dy", "1.5em")
            .text(data.Nx21)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        fig.append("text")
            .attr("id", "labelNx22")
            .attr("class", "labelNx_sub")
            .attr("x", (data.Nx21 + data.Nx22/2)*graphicalData.scale)
            .attr("y", data.Ny*graphicalData.scale) // 15 is a bad hack to shift text below a bit
            .attr("dy", "1.5em")
            .text(data.Nx22)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
    
        

    // visualization of ratios vertically on the left hand side...
    if (fig.attr("id") == "groupLeft") {
    
        g1 = fig.append("g")
            .attr("transform", `translate(-${graphicalData.widthBar+graphicalData.paddingBar}, ${data.Ny1*graphicalData.scale}) rotate(270) `)
            .attr("class", "ratioBarSide")
            .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")

        var t1 = Number(100*data.Ny1/(data.Ny1+data.Ny2))
        t1 = t1.toFixed(1) 
        g1.append("rect")
            .attr("width", data.Ny1*graphicalData.scale)
            .attr("id", "ratioBarSideTop")
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
            /*.on("mouseover", function()
            {
                tooltip_ref.select("text").text(graphicalData.labelData.labelRatioBarLeftTop); 
                tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
                return tooltip_ref.attr("visibility", "visible");})
            .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});*/
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("dx", "0.5em")
        g1.append("rect")
             .attr("width", data.Ny1*graphicalData.scale)
            .attr("id", "overlay_ratioBarSideTop")
            .attr("height", graphicalData.widthBar)
            .attr("opacity", 0.0)
            .on("mouseover", function()
            {
                tooltip_ref.select("text").text(graphicalData.labelData.labelRatioBarSideTop); 
                tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
                return tooltip_ref.attr("visibility", "visible");})
            .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});

        g2 = fig.append("g")
        .attr("transform", `translate(-${graphicalData.widthBar+graphicalData.paddingBar}, ${(data.Ny1+data.Ny2)*graphicalData.scale}) rotate(270)`)
        .attr("class", "ratioBarSide")
        .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")
        var t2 = Number(100*data.Ny2/(data.Ny1+data.Ny2))
        t2 = t2.toFixed(1) 
        g2.append("rect")
            .attr("width", data.Ny2*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("id", "ratioBarSideBottom")
            .attr("fill", graphicalData.color[2])
            .attr("stroke", "black")
        g2.append("text")
            .text(`${t2}%`)
            .attr("x", data.Ny2*graphicalData.scale)
            .attr("dx", "-.5em")
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
        g2.append("rect")
        .attr("width", data.Ny2*graphicalData.scale)
            .attr("id", "overlay_ratioBarSideBottom")
            .attr("height", graphicalData.widthBar)
            .attr("opacity", 0.0)
            .on("mouseover", function()
            {
                tooltip_ref.select("text").text(graphicalData.labelData.labelRatioBarSideBottom); 
                tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
                return tooltip_ref.attr("visibility", "visible");})
            .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});
    }
    // visualization of ratios vertically on the right hand side...
    else {
        g1 = fig.append("g")
            .attr("transform", `translate(${(data.Nx11+data.Nx12)*graphicalData.scale+graphicalData.paddingBar}, ${data.Ny1*graphicalData.scale}) rotate(270) `)
            .attr("class", "ratioBarSide")
            .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")

        g1.append("rect")
        .attr("id", "ratioBarSideTop")
            .attr("width", data.Ny1*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
        var t1 = Number(100*data.Ny1/(data.Ny1+data.Ny2))
        t1 = t1.toFixed(1) 
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("dx", "0.5em")
        g1.append("rect")
            .attr("width", data.Ny1*graphicalData.scale)
            .attr("id", "overlay_ratioBarSideTop")
            .attr("height", graphicalData.widthBar)
            .attr("opacity", 0.0)
            .on("mouseover", function()
            {
                tooltip_ref.select("text").text(graphicalData.labelData.labelRatioBarSideTop); 
                tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
                return tooltip_ref.attr("visibility", "visible");})
            .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});

        g2 = fig.append("g")
        .attr("transform", `translate(${(data.Nx11+data.Nx12)*graphicalData.scale+graphicalData.paddingBar}, ${(data.Ny1+data.Ny2)*graphicalData.scale}) rotate(270)`)
        .attr("class", "ratioBarSide")
        .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")

        var t2 = Number(100*data.Ny2/(data.Ny1+data.Ny2))
        t2 = t2.toFixed(1) 
        g2.append("rect")
        .attr("id", "ratioBarSideBottom")
            .attr("width", data.Ny2*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("dx", "0.5em")
            .attr("fill", graphicalData.color[2])
            .attr("stroke", "black")
        g2.append("text")
            .text(`${t2}%`)
            .attr("x", data.Ny2*graphicalData.scale)
            .attr("dx", "-.5em")
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
        g2.append("rect")
        .attr("width", data.Ny2*graphicalData.scale)
            .attr("id", "overlay_ratioBarSideBottom")
            .attr("height", graphicalData.widthBar)
            .attr("opacity", 0.0)
            .on("mouseover", function()
            {
                tooltip_ref.select("text").text(graphicalData.labelData.labelRatioBarSideBottom); 
                tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
                return tooltip_ref.attr("visibility", "visible");})
            .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});
    }

    // visualization of ratios horizontally on the top ...
    
        g1 = fig.append("g")
            .attr("transform", `translate(0, -${graphicalData.widthBar+graphicalData.paddingBar})`)
            .attr("class", "ratioBarTop")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")

        var t1 = Number(100*data.Nx11/(data.Nx11+data.Nx12))
        t1 = "Probability of success: " + t1.toFixed(1) 
        g1.append("rect")
        .attr("id", "ratioBarTopLeft")
            .attr("width", data.Nx11*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
            .attr("id", "leftestRatioBarTop")
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("x", data.Nx11*graphicalData.scale)
            .attr("dx", "-0.5em")
            .attr("text-anchor", "end")

        g2 = fig.append("g")
        .attr("transform", `translate(${(data.Nx11)*graphicalData.scale}, -${graphicalData.widthBar+graphicalData.paddingBar})`)
        .attr("class", "ratioBarTop")
        .attr("id", "rightestRatioBarTop")
        .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        var t2 = Number(100*data.Nx12/(data.Nx11+data.Nx12))
        t2 = t2.toFixed(1) 
        g2.append("rect")
        .attr("id", "ratioBarTopRight")
            .attr("width", data.Nx12*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[1])
            .attr("stroke", "black")
        g2.append("text")
            .text(`${t2}%`)
            .attr("dx", ".5em")
            .attr("y", 12.5)
            .attr("dy", "0.35em")
        
        g3 = fig.append("g")
            .attr("transform", `translate(0, ${(data.Ny1+data.Ny2)*graphicalData.scale+graphicalData.widthBar})`)
            .attr("class", "ratioBarBottom")
            .attr("id", "leftestRatioBarBottom")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")

        var t3 = Number(100*data.Nx21/(data.Nx21+data.Nx22))
        t3 = "Probability of success: " +t3.toFixed(1) 
        g3.append("rect")
        .attr("id", "ratioBarBottomLeft")
            .attr("width", data.Nx21*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[2])
            .attr("stroke", "black")
        g3.append("text")
            .text(`${t3}%`)
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("x", data.Nx21*graphicalData.scale)
            .attr("dx", "-0.5em")
            .attr("text-anchor", "end")

        g4 = fig.append("g")
        .attr("transform", `translate(${(data.Nx21)*graphicalData.scale}, ${(data.Ny1+data.Ny2)*graphicalData.scale+graphicalData.widthBar})`)
        .attr("class", "ratioBarBottom")
        .attr("id", "rightestRatioBarBottom")
        .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        var t4 = Number(100*data.Nx22/(data.Nx21+data.Nx22))
        t4 = t4.toFixed(1) 
        g4.append("rect")
        .attr("id", "ratioBarBottomRight")
            .attr("width", data.Nx22*graphicalData.scale)
            .attr("height", graphicalData.widthBar)
            .attr("fill", graphicalData.color[3])
            .attr("stroke", "black")
        g4.append("text")
            .text(`${t4}%`)
            .attr("dx", ".5em")
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
    


    var widthBlock = data.Nx*graphicalData.scale + graphicalData.textPadding;
    var heightBlock = data.Ny*graphicalData.scale + 2*graphicalData.textPadding;


    // Build overlay blocks on top of everything for handling tooltips
    var refBlockUL = fig.select("#upperleft").select("#backgroundUL");
    var refBlockUR = fig.select("#upperright").select("#backgroundUR");
    var refBlockLL = fig.select("#lowerleft").select("#backgroundLL");
    var refBlockLR = fig.select("#lowerright").select("#backgroundLR");

    fig.attr("width", parseFloat(widthBlock))
        .attr("height", parseFloat(heightBlock))
    
    fig.append("rect")
        .attr("id", "overlayUL")
        .attr("width", refBlockUL.attr("width"))
        .attr("height", refBlockUL.attr("height"))
        .attr("transform", fig.select("#upperleft").attr("transform"))
        .attr("opacity", 0.0)
        .on("mouseover", function()
            {
                tooltip_ref.select("text").text(graphicalData.labelData.labelUpperLeft[0]); 
                tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20)
                return tooltip_ref.attr("visibility", "visible");})
        //.on("mousemove", function(){tooltip.attr("x", d3.mouse(this)[0]).attr("y",d3.mouse(this)[1]);console.log(1)})
        .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});
    fig.append("rect")
        .attr("id", "overlayUR")
        .attr("width", refBlockUR.attr("width"))
        .attr("height", refBlockUR.attr("height"))
        .attr("transform", fig.select("#upperright").attr("transform"))
        .attr("opacity", 0.0)
        .on("mouseover", function()
        {
            tooltip_ref.select("text").text(graphicalData.labelData.labelUpperRight[0]); 
            tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
            return tooltip_ref.attr("visibility", "visible");})
        //.on("mousemove", function(){tooltip.attr("x", d3.mouse(this)[0]).attr("y",d3.mouse(this)[1]);console.log(1)})
        .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});
    fig.append("rect")
        .attr("id", "overlayLL")
        .attr("width", refBlockLL.attr("width"))
        .attr("height", refBlockLL.attr("height"))
        .attr("transform", fig.select("#lowerleft").attr("transform"))
        .attr("opacity", 0.0)
        .on("mouseover", function()
        {
            tooltip_ref.select("text").text(graphicalData.labelData.labelLowerLeft[0]); 
            tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
            return tooltip_ref.attr("visibility", "visible");})
        //.on("mousemove", function(){tooltip.attr("x", d3.mouse(this)[0]).attr("y",d3.mouse(this)[1]);console.log(1)})
        .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});
    fig.append("rect")
        .attr("id", "overlayLR")
        .attr("width", refBlockLR.attr("width"))
        .attr("height", refBlockLR.attr("height"))
        .attr("transform", fig.select("#lowerright").attr("transform"))
        .attr("opacity", 0.0)
        .on("mouseover", function()
        {
            tooltip_ref.select("text").text(graphicalData.labelData.labelLowerRight[0]); 
            tooltip_ref.select("rect").attr("width", tooltip_ref.select("text").node().getComputedTextLength()+20);
            return tooltip_ref.attr("visibility", "visible");})
        //.on("mousemove", function(){tooltip.attr("x", d3.mouse(this)[0]).attr("y",d3.mouse(this)[1]);console.log(1)})
        .on("mouseout", function(){return tooltip_ref.attr("visibility", "hidden");});

    return fig

}

var buildFigure = function(reffig, dataLeft, dataRight, graphicalDataLeft, graphicalDataRight){
    reffig.append("g")
        .attr("id", "groupLeft")
    reffig.append("g")
        .attr("id", "groupRight")
    
    reffig.append("text")
        .attr("id", "titleLeft")
        .text(graphicalDataLeft.titleLeft)
        .attr("dy", "2em")
        .style("font-size", "20px")
    reffig.append("text")
    .attr("id", "titleRight")
        .text(graphicalDataLeft.titleRight)
        .attr("dy", "2em")
        .style("font-size", "20px")
    var tooltip = reffig.append("g").attr("id", "tooltip")
        .attr("visibility", "hidden")
    var groupLeft = buildGroup(reffig.select("#groupLeft"), dataLeft, graphicalDataLeft, tooltip)
    var groupRight = buildGroup(reffig.select("#groupRight"), dataRight, graphicalDataRight, tooltip)
    var transformLeftX = parseFloat(graphicalDataLeft.textPadding+graphicalDataLeft.paddingBar)
    var transformLeftY = parseFloat(graphicalDataLeft.textPadding+graphicalDataLeft.paddingBar+graphicalDataLeft.titlePadding)
    var transformRightX = parseFloat(groupLeft.attr("width"))+parseFloat(graphicalDataRight.textPadding)+graphicalDataRight.paddingBar
    var transformRightY = parseFloat(graphicalDataLeft.textPadding+ graphicalDataRight.paddingBar+graphicalDataRight.titlePadding)
    groupLeft.attr("transform", `translate(${transformLeftX}, ${transformLeftY})`)
    groupRight.attr("transform", `translate(${transformRightX}, ${transformRightY})`)
    var w = parseFloat(groupLeft.attr("width"))+parseFloat(groupRight.attr("width"))+graphicalDataLeft.paddingBlocks + 3*graphicalDataLeft.paddingBar; // REVIEW!!!
    var h = Math.max(parseFloat(groupLeft.attr("height")), parseFloat(groupRight.attr("height"))) + 2.5*graphicalDataLeft.paddingBar; // REVIEW!!!

    reffig.select("#titleLeft")
        .attr("transform", `translate(${groupLeft.attr("width")/2},0)`)
    reffig.select("#titleRight")
        .attr("transform", `translate(${parseFloat(groupLeft.attr("width")) + parseFloat(groupRight.attr("width"))/2},0)`)

    var fig = reffig
        .attr("width", w)
        .attr("height", h)
    
        var tooltipW = 100;
        var tooltipH = 20;
        
    
    
    tooltip.append("rect")
        .attr("width", 200)
        .attr("height", 20)
        .style("fill", "white")
        .style("stroke", "black")
    
    tooltip.append("text")
        .text("a simple tooltip")
        .attr("y", tooltipH/2)
        .attr("dx", "1em")
        //.attr("x", tooltipW/2)
        //.attr("text-anchor", "middle")
        //.attr(`viewBox(-100 -100 ${w} ${h}`)
    
}