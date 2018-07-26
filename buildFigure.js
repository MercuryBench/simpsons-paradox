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

    fig = groupref//.attr('transform', `translate(${graphicalData.textPadding}, ${graphicalData.textPadding})`)

    
    /*var blockUL = fig.select("#upperleft");
        blockUL.append("rect")
            .attr("id", "backgroundUL")
            .attr("fill", graphicalData.color[0])
            .attr("width", data.Nx11*graphicalData.scale)
            .attr("height", data.Ny1*graphicalData.scale)
        makeBlocks(blockUL, data.Nx11, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])

        var blockLL = fig.select("#lowerleft")
        blockLL.append("rect")
            .attr("id", "backgroundLL")
            .attr("fill", graphicalData.color[2])
            .attr("width", data.Nx21*graphicalData.scale)
            .attr("height", data.Ny2*graphicalData.scale)
        makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
        blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')*/

        /*if (graphicalData.subdivideHori == true){
            var blockUR = fig.select("#upperright")
            blockUR.append("rect")
                .attr("id", "backgroundUR")
                .attr("fill", graphicalData.color[1])
                .attr("width", data.Nx12*graphicalData.scale-graphicalData.padding)
                .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
            makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[1])
            blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

            var blockLR = fig.select("#lowerright")
            blockLR.append("rect")
                .attr("id", "backgroundLR")
                .attr("fill", graphicalData.color[3])
                .attr("width", data.Nx22*graphicalData.scale-graphicalData.padding)
                .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
            makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[3])
            blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')
        }    */

    if (graphicalData.subdivideVert == false){
        var blockUL = fig.select("#upperleft");
        blockUL.append("rect")
            .attr("id", "backgroundUL")
            .attr("fill", graphicalData.color[0])
            .attr("width", data.Nx11*graphicalData.scale-graphicalData.padding)
            .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
        makeBlocks(blockUL, data.Nx11, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])

        var blockLL = fig.select("#lowerleft")
        blockLL.append("rect")
            .attr("id", "backgroundLL")
            .attr("fill", graphicalData.color[0])
            .attr("width", data.Nx21*graphicalData.scale-graphicalData.padding)
            .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
        makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
        blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')

        var blockUR = fig.select("#upperright")
        blockUR.append("rect")
            .attr("id", "backgroundUR")
            .attr("fill", graphicalData.color[0])
            .attr("width", data.Nx12*graphicalData.scale-graphicalData.padding)
            .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
        makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
        blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

        var blockLR = fig.select("#lowerright")
        blockLR.append("rect")
            .attr("id", "backgroundLR")
            .attr("fill", graphicalData.color[0])
            .attr("width", data.Nx22*graphicalData.scale-graphicalData.padding)
            .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
        makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
        blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')
    }
    else{
        var blockUL = fig.select("#upperleft");
        blockUL.append("rect")
            .attr("id", "backgroundUL")
            .attr("fill", graphicalData.color[0])
            .attr("width", data.Nx11*graphicalData.scale-graphicalData.padding)
            .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
        makeBlocks(blockUL, data.Nx11, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])

        var blockLL = fig.select("#lowerleft")
        blockLL.append("rect")
            .attr("id", "backgroundLL")
            .attr("fill", graphicalData.color[2])
            .attr("width", data.Nx21*graphicalData.scale-graphicalData.padding)
            .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
        makeBlocks(blockLL, data.Nx21, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
        blockLL.attr('transform', 'translate(0,' + (data.Ny1*graphicalData.scale) + ')')
        if (graphicalData.subdivideHori == true){
            var blockUR = fig.select("#upperright")
            blockUR.append("rect")
                .attr("id", "backgroundUR")
                .attr("fill", graphicalData.color[1])
                .attr("width", data.Nx12*graphicalData.scale-graphicalData.padding)
                .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
            makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[1])
            blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')

            var blockLR = fig.select("#lowerright")
            blockLR.append("rect")
                .attr("id", "backgroundLR")
                .attr("fill", graphicalData.color[3])
                .attr("width", data.Nx22*graphicalData.scale-graphicalData.padding)
                .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
            makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[3])
            blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')
        }
        else{
            var blockUR = fig.select("#upperright")
            blockUR.append("rect")
                .attr("id", "backgroundUR")
                .attr("fill", graphicalData.color[0])
                .attr("width", data.Nx12*graphicalData.scale-graphicalData.padding)
                .attr("height", data.Ny1*graphicalData.scale-graphicalData.padding)
            makeBlocks(blockUR, data.Nx12, data.Ny1, graphicalData.scale, graphicalData.padding, graphicalData.color[0])
            blockUR.attr('transform', 'translate(' + (data.Nx11*graphicalData.scale) + ',0)')
            
            var blockLR = fig.select("#lowerright")
            blockLR.append("rect")
                .attr("id", "backgroundLR")
                .attr("fill", graphicalData.color[2])
                .attr("width", data.Nx22*graphicalData.scale-graphicalData.padding)
                .attr("height", data.Ny2*graphicalData.scale-graphicalData.padding)
            makeBlocks(blockLR, data.Nx22, data.Ny2, graphicalData.scale, graphicalData.padding, graphicalData.color[2])
            blockLR.attr('transform', 'translate(' + (data.Nx21*graphicalData.scale) + ',' + (data.Ny1*graphicalData.scale) + ')')

        }
    }

    
    if (graphicalData.subdivideVert == false){
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
        
        if (graphicalData.subdivideHori == true) {
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
    // if we want a visualization of ratios vertically on the left hand side...
    if (graphicalData.ratiosVert == "left"){
        g1 = fig.append("g")
            .attr("transform", `translate(-50, ${data.Ny1*graphicalData.scale}) rotate(270) `)
            .attr("class", "ratioBar")

        var t1 = Number(100*data.Ny1/(data.Ny1+data.Ny2))
        t1 = t1.toFixed(1) 
        g1.append("rect")
            .attr("width", data.Ny1*graphicalData.scale)
            .attr("id", "ratioBarLeftTop")
            .attr("height", 25)
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            .attr("dx", "0.5em")
            //.attr("transform", "rotate(270)")
            //.attr("text-anchor", "end")

        g2 = fig.append("g")
        .attr("transform", `translate(-50, ${(data.Ny1+data.Ny2)*graphicalData.scale}) rotate(270)`)
        .attr("class", "ratioBar")
        var t2 = Number(100*data.Ny2/(data.Ny1+data.Ny2))
        t2 = t2.toFixed(1) 
        g2.append("rect")
            .attr("width", data.Ny2*graphicalData.scale)
            .attr("height", 25)
            .attr("id", "ratioBarLeftBottom")
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[2])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g2.append("text")
            .text(`${t2}%`)
            .attr("x", data.Ny2*graphicalData.scale)
            .attr("dx", "-.5em")
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            //.attr("transform", "rotate(270)")
            .attr("text-anchor", "end")
    }
    // if we want a visualization of ratios vertically on the right hand side...
    else if (graphicalData.ratiosVert == "right"){
        g1 = fig.append("g")
            .attr("transform", `translate(${(data.Nx11+data.Nx12)*graphicalData.scale+25}, ${data.Ny1*graphicalData.scale}) rotate(270) `)
            .attr("class", "ratioBar")

        g1.append("rect")
        .attr("id", "ratioBarRightTop")
            .attr("width", data.Ny1*graphicalData.scale)
            .attr("height", 25)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
        var t1 = Number(100*data.Ny1/(data.Ny1+data.Ny2))
        t1 = t1.toFixed(1) 
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            .attr("dx", "0.5em")

        g2 = fig.append("g")
        .attr("transform", `translate(${(data.Nx11+data.Nx12)*graphicalData.scale+25}, ${(data.Ny1+data.Ny2)*graphicalData.scale}) rotate(270)`)
        .attr("class", "ratioBar")

        var t2 = Number(100*data.Ny2/(data.Ny1+data.Ny2))
        t2 = t2.toFixed(1) 
        g2.append("rect")
        .attr("id", "ratioBarRightBottom")
            .attr("width", data.Ny2*graphicalData.scale)
            .attr("height", 25)
            .attr("dx", "0.5em")
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[2])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g2.append("text")
            .text(`${t2}%`)
            .attr("x", data.Ny2*graphicalData.scale)
            .attr("dx", "-.5em")
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            //.attr("transform", "rotate(270)")
            .attr("text-anchor", "end")
    }

    // if we want a visualization of ratios horizontally on the top ...
    if (graphicalData.ratiosHori == true){
        g1 = fig.append("g")
            .attr("transform", `translate(0, -50)`)
            .attr("class", "ratioBar")

        var t1 = Number(100*data.Nx11/(data.Nx11+data.Nx12))
        t1 = t1.toFixed(1) 
        g1.append("rect")
        .attr("id", "ratioBarTopLeft")
            .attr("width", data.Nx11*graphicalData.scale)
            .attr("height", 25)
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[0])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g1.append("text")
            .text(`${t1}%`)
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            .attr("x", data.Nx11*graphicalData.scale)
            .attr("dx", "-0.5em")
            //.attr("transform", "rotate(270)")
            .attr("text-anchor", "end")

        g2 = fig.append("g")
        .attr("transform", `translate(${(data.Nx11)*graphicalData.scale}, -50)`)
        .attr("class", "ratioBar")
        var t2 = Number(100*data.Nx12/(data.Nx11+data.Nx12))
        t2 = t2.toFixed(1) 
        g2.append("rect")
        .attr("id", "ratioBarTopRight")
            .attr("width", data.Nx12*graphicalData.scale)
            .attr("height", 25)
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[1])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g2.append("text")
            .text(`${t2}%`)
            //.attr("x", data.Nx12*graphicalData.scale)
            .attr("dx", ".5em")
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            //.attr("transform", "rotate(270)")
            //.attr("text-anchor", "end")
        
        g3 = fig.append("g")
            .attr("transform", `translate(0, ${(data.Ny1+data.Ny2)*graphicalData.scale+25})`)
            .attr("class", "ratioBar")

        var t3 = Number(100*data.Nx21/(data.Nx21+data.Nx22))
        t3 = t3.toFixed(1) 
        g3.append("rect")
        .attr("id", "ratioBarBottomLeft")
            .attr("width", data.Nx21*graphicalData.scale)
            .attr("height", 25)
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[2])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g3.append("text")
            .text(`${t3}%`)
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            .attr("x", data.Nx21*graphicalData.scale)
            .attr("dx", "-0.5em")
            //.attr("transform", "rotate(270)")
            .attr("text-anchor", "end")

        g4 = fig.append("g")
        .attr("transform", `translate(${(data.Nx21)*graphicalData.scale}, ${(data.Ny1+data.Ny2)*graphicalData.scale+25})`)
        .attr("class", "ratioBar")
        var t4 = Number(100*data.Nx22/(data.Nx21+data.Nx22))
        t4 = t4.toFixed(1) 
        g4.append("rect")
        .attr("id", "ratioBarBottomRight")
            .attr("width", data.Nx22*graphicalData.scale)
            .attr("height", 25)
            //.attr("x", -data.Ny1*graphicalData.scale)
            //.attr("y", -25)
            //.attr("width", 25)
            //.attr("height", data.Ny1*graphicalData.scale)
            .attr("fill", graphicalData.color[3])
            .attr("stroke", "black")
            //.attr("transform", `translate(-50, 0)`)
        g4.append("text")
            .text(`${t4}%`)
            //.attr("x", data.Nx12*graphicalData.scale)
            .attr("dx", ".5em")
            .attr("y", 12.5)
            .attr("dy", "0.35em")
            //.attr("transform", "rotate(270)")
            //.attr("text-anchor", "end")
    }


    var widthBlock = data.Nx*graphicalData.scale + graphicalData.textPadding;
    var heightBlock = data.Ny*graphicalData.scale + 2*graphicalData.textPadding;
    fig.attr("width", parseFloat(widthBlock))
        .attr("height", parseFloat(heightBlock))
    return fig

}

var buildFigure = function(reffig, dataLeft, dataRight, graphicalDataLeft, graphicalDataRight, paddingBlocks, paddingLeft){
    reffig.append("g")
        .attr("id", "groupLeft")
    reffig.append("g")
        .attr("id", "groupRight")

    var groupLeft = buildGroup(reffig.select("#groupLeft"), dataLeft, graphicalDataLeft)
    var groupRight = buildGroup(reffig.select("#groupRight"), dataRight, graphicalDataRight)
    var transformLeftX = parseFloat(graphicalDataLeft.textPadding+paddingLeft)
    var transformLeftY = parseFloat(graphicalDataLeft.textPadding+paddingLeft)
    var transformRightX = parseFloat(groupLeft.attr("width"))+parseFloat(graphicalDataRight.textPadding)+paddingLeft
    var transformRightY = parseFloat(graphicalDataLeft.textPadding+ paddingLeft)
    groupLeft.attr("transform", `translate(${transformLeftX}, ${transformLeftY})`)
    groupRight.attr("transform", `translate(${transformRightX}, ${transformRightY})`)
    var w = parseFloat(groupLeft.attr("width"))+parseFloat(groupRight.attr("width"))+paddingBlocks + 2.5*paddingLeft;
    var h = Math.max(parseFloat(groupLeft.attr("height")), parseFloat(groupRight.attr("height"))) + 2.5*paddingLeft;

    var fig = reffig
        .attr("width", w)
        .attr("height", h)
        //.attr(`viewBox(-100 -100 ${w} ${h}`)
    
}