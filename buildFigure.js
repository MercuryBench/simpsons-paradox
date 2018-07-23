var makeBlocks = function(blockSelection, Nx, Ny, sc, pad, col)
        {
            for (let i=0; i<Nx; i++){
                for (let j=0; j<Ny; j++){
                    blockSelection.append("rect")
                        .attr("width", sc-pad)
                        .attr("height", sc-pad)
                        .attr('transform', `translate(${i*sc}, ${j*sc})`)
                        .attr("fill", col)
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

    fig = groupref//.attr('transform', `translate(${graphicalData.textPadding}, ${graphicalData.textPadding})`)

    
        

    if (graphicalData.subdivideHori == false){
        var blockUL = fig.select("#upperleft");
        makeBlocks(blockUL, data.Nx11, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])

        var blockLL = fig.select("#lowerleft")
        makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
        blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')
        var blockUR = fig.select("#upperright")
        makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
        blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

        var blockLR = fig.select("#lowerright")
        makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
        blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')
    }
    else{
        var blockUL = fig.select("#upperleft");
        makeBlocks(blockUL, data.Nx11, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])

        var blockLL = fig.select("#lowerleft")
        makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
        blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')
        if (graphicalData.subdivideVert == true){
            var blockUR = fig.select("#upperright")
            makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[1])
            blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

            var blockLR = fig.select("#lowerright")
            makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[3])
            blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')
        }
        else{
            var blockUR = fig.select("#upperright")
            makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
            blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')
            
            var blockLR = fig.select("#lowerright")
            makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
            blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')

        }
    }

    
    if (graphicalData.subdivideHori == false){
        fig.append("text")
        .attr("x", (data.Nx11+data.Nx12)/2*graphicalData.scale)
        .attr("y", 0)
        .text(data.Nx11+data.Nx12)
        .attr("text-anchor", "middle")
        fig.append("text")
        .attr("x", 0)
        .attr("y", (data.Ny1+data.Ny2)/2*graphicalData.scale)
        .text(data.Ny1+data.Ny2)
        .attr("text-anchor", "end")
    }
    else{
        fig.append("text")
        .attr("x", 0)
        .attr("y", data.Ny1/2*graphicalData.scale)
        .text(data.Ny1)
        .attr("text-anchor", "end")
        fig.append("text")
            .attr("x", 0)
            .attr("y", (data.Ny1 + data.Ny2/2)*graphicalData.scale)
            .text(data.Ny2)
            .attr("text-anchor", "end")
        
        if (graphicalData.subdivideVert == true) {
            fig.append("text")
                .attr("x", data.Nx11/2*graphicalData.scale)
                .attr("y", 0)
                .text(data.Nx11)
                .attr("text-anchor", "middle")
            fig.append("text")
                .attr("x", (data.Nx11 + data.Nx12/2)*graphicalData.scale)
                .attr("y", 0)
                .text(data.Nx12)
                .attr("text-anchor", "middle")
            fig.append("text")
                .attr("x", data.Nx21/2*graphicalData.scale)
                .attr("y", data.Ny*graphicalData.scale+15) // 15 is a bad hack to shift text below a bit
                .text(data.Nx21)
                .attr("text-anchor", "middle")
            fig.append("text")
                .attr("x", (data.Nx21 + data.Nx22/2)*graphicalData.scale)
                .attr("y", data.Ny*graphicalData.scale+15) // 15 is a bad hack to shift text below a bit
                .text(data.Nx22)
                .attr("text-anchor", "middle")
        }
        else {
            fig.append("text")
                .attr("x", (data.Nx11+data.Nx12)/2*graphicalData.scale)
                .attr("y", 0)
                .text(data.Nx11+data.Nx12)
                .attr("text-anchor", "middle")
        }
}
    var widthBlock = data.Nx*graphicalData.scale + graphicalData.textPadding;
    var heightBlock = data.Ny*graphicalData.scale + 2*graphicalData.textPadding;
    fig.attr("width", parseFloat(widthBlock))
        .attr("height", parseFloat(heightBlock))
    return fig

}

var buildFigure = function(reffig, dataLeft, dataRight, graphicalDataLeft, graphicalDataRight, paddingBlocks){
    reffig.append("g")
        .attr("id", "groupLeft")
    reffig.append("g")
        .attr("id", "groupRight")

    var groupLeft = buildGroup(reffig.select("#groupLeft"), dataLeft, graphicalDataLeft)
    var groupRight = buildGroup(reffig.select("#groupRight"), dataRight, graphicalDataRight)
    var transformLeftX = parseFloat(graphicalDataLeft.textPadding)
    var transformLeftY = parseFloat(graphicalDataLeft.textPadding)
    var transformRightX = parseFloat(groupLeft.attr("width"))+parseFloat(graphicalDataRight.textPadding)
    var transformRightY = parseFloat(graphicalDataLeft.textPadding)
    groupLeft.attr("transform", `translate(${transformLeftX}, ${transformLeftY})`)
    groupRight.attr("transform", `translate(${transformRightX}, ${transformRightY})`)
    var w = parseFloat(groupLeft.attr("width"))+parseFloat(groupRight.attr("width"))+paddingBlocks;
    var h = Math.max(parseFloat(groupLeft.attr("height")), parseFloat(groupRight.attr("height")));

    var fig = reffig
        .attr("width", w)
        .attr("height", h);
}