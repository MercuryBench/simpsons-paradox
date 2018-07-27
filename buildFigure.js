var makeBlocks = function(blockSelection, Nx, Ny, sc, pad, col)
        {
            for (let i=0; i<Nx; i++){
                for (let j=0; j<Ny; j++){
                    blockSelection.append("rect")
                        .attr("width", sc-pad)
                        .attr("height", sc-pad)
                        .attr('transform', `translate(${i*sc}, ${j*sc})`)
                        .attr("stroke", "grey")
                        .attr("fill-opacity", "0.0")
                        //.attr("fill", col)
                }
            }
        }
var buildGroup = function(groupref, data, graphicalData){
    
    
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

    var blockUR = fig.select("#upperright")
    blockUR.append("rect")
        .attr("id", "backgroundUR")
        .attr("fill", graphicalData.color[1])
        .attr("width", data.Nx12*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[1])
    blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

    var blockLL = fig.select("#lowerleft")
    blockLL.append("rect")
        .attr("id", "backgroundLL")
        .attr("fill", graphicalData.color[2])
        .attr("width", data.Nx21*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
    blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')

    var blockLR = fig.select("#lowerright")
    blockLR.append("rect")
        .attr("id", "backgroundLR")
        .attr("fill", graphicalData.color[3])
        .attr("width", data.Nx22*graphicalData.scale-graphicalData.padding)
        .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
    makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[3])
    blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')

    
        fig.append("text")
            .attr("id", "labelNx")
            .attr("x", (data.Nx11+data.Nx12)/2*graphicalData.scale)
            .attr("y", 0)
            .text(data.Nx11+data.Nx12)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"hidden":"visible")

        
    
        if (fig.attr("id") == "groupLeft")
        {
        fig.append("text")
            .attr("id", "labelNy")
            .attr("x", 0)
            .attr("y", (data.Ny1+data.Ny2)/2*graphicalData.scale)
            .text(data.Ny1+data.Ny2)
            .attr("text-anchor", "end")
            .attr("visibility", graphicalData.subdivideVert?"hidden":"visible")
            
        fig.append("text")
            .attr("id", "labelNy1")
            .attr("class", "labelNy_sub")
            .attr("x", 0)
            .attr("y", data.Ny1/2*graphicalData.scale)
            .text(data.Ny1)
            .attr("text-anchor", "end")
            .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")

        fig.append("text")
            .attr("id", "labelNy2")
            .attr("class", "labelNy_sub")
            .attr("x", 0)
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
                .attr("y", (data.Ny1+data.Ny2)/2*graphicalData.scale)
                .text(data.Ny1+data.Ny2)
                .attr("visibility", graphicalData.subdivideVert?"hidden":"visible")
                //.attr("text-anchor", "end")
            fig.append("text")
                .attr("id", "labelNy1")
                .attr("class", "labelNy_sub")
                .attr("x", (data.Nx21 + data.Nx22)*graphicalData.scale)
                .attr("y", data.Ny1/2*graphicalData.scale)
                .text(data.Ny1)
                .attr("visibility", graphicalData.subdivideVert?"visible":"hidden")
                //.attr("text-anchor", "end")
    
            fig.append("text")
                .attr("id", "labelNy2")
                .attr("class", "labelNy_sub")
                .attr("x", (data.Nx21 + data.Nx22)*graphicalData.scale)
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
            .text(data.Nx11)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        fig.append("text")
            .attr("id", "labelNx12")
            .attr("class", "labelNx_sub")
            .attr("x", (data.Nx11 + data.Nx12/2)*graphicalData.scale)
            .attr("y", 0)
            .text(data.Nx12)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        fig.append("text")
            .attr("id", "labelNx21")
            .attr("class", "labelNx_sub")
            .attr("x", data.Nx21/2*graphicalData.scale)
            .attr("y", data.Ny*graphicalData.scale+15) // 15 is a bad hack to shift text below a bit
            .text(data.Nx21)
            .attr("text-anchor", "middle")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")
        fig.append("text")
            .attr("id", "labelNx22")
            .attr("class", "labelNx_sub")
            .attr("x", (data.Nx21 + data.Nx22/2)*graphicalData.scale)
            .attr("y", data.Ny*graphicalData.scale+15) // 15 is a bad hack to shift text below a bit
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
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", graphicalData.widthBar/2)
            .attr("dy", "0.35em")
            .attr("dx", "0.5em")

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
    }

    // visualization of ratios horizontally on the top ...
    
        g1 = fig.append("g")
            .attr("transform", `translate(0, -${graphicalData.widthBar+graphicalData.paddingBar})`)
            .attr("class", "ratioBarTop")
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")

        var t1 = Number(100*data.Nx11/(data.Nx11+data.Nx12))
        t1 = t1.toFixed(1) 
        g1.append("rect")
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
            .attr("text-anchor", "end")

        g2 = fig.append("g")
        .attr("transform", `translate(${(data.Nx11)*graphicalData.scale}, -${graphicalData.widthBar+graphicalData.paddingBar})`)
        .attr("class", "ratioBarTop")
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
            .attr("visibility", graphicalData.subdivideHori?"visible":"hidden")

        var t3 = Number(100*data.Nx21/(data.Nx21+data.Nx22))
        t3 = t3.toFixed(1) 
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
    fig.attr("width", parseFloat(widthBlock))
        .attr("height", parseFloat(heightBlock))
    return fig

}

var buildFigure = function(reffig, dataLeft, dataRight, graphicalDataLeft, graphicalDataRight){
    reffig.append("g")
        .attr("id", "groupLeft")
    reffig.append("g")
        .attr("id", "groupRight")

    var groupLeft = buildGroup(reffig.select("#groupLeft"), dataLeft, graphicalDataLeft)
    var groupRight = buildGroup(reffig.select("#groupRight"), dataRight, graphicalDataRight)
    var transformLeftX = parseFloat(graphicalDataLeft.textPadding+graphicalDataLeft.paddingBar)
    var transformLeftY = parseFloat(graphicalDataLeft.textPadding+graphicalDataLeft.paddingBar)
    var transformRightX = parseFloat(groupLeft.attr("width"))+parseFloat(graphicalDataRight.textPadding)+graphicalDataRight.paddingBar
    var transformRightY = parseFloat(graphicalDataLeft.textPadding+ graphicalDataRight.paddingBar)
    groupLeft.attr("transform", `translate(${transformLeftX}, ${transformLeftY})`)
    groupRight.attr("transform", `translate(${transformRightX}, ${transformRightY})`)
    var w = parseFloat(groupLeft.attr("width"))+parseFloat(groupRight.attr("width"))+graphicalDataLeft.paddingBlocks + 2.5*graphicalDataLeft.paddingBar; // REVIEW!!!
    var h = Math.max(parseFloat(groupLeft.attr("height")), parseFloat(groupRight.attr("height"))) + 2.5*graphicalDataLeft.paddingBar; // REVIEW!!!

    var fig = reffig
        .attr("width", w)
        .attr("height", h)
        //.attr(`viewBox(-100 -100 ${w} ${h}`)
    
}