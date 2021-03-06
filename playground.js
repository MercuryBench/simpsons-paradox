var dataPGA_actually = {Nx: 1, Ny: 1, Nx11: 0.95, Nx12: 0.05, Nx21: 0.75, Nx22: 0.25, Ny1: 0.1, Ny2: 0.9};
                          var dataPGB_actually = {Nx: 1, Ny: 1, Nx11: 0.8, Nx12: 0.2, Nx21: 0.25, Nx22: 0.75, Ny1: 0.99, Ny2: 0.01};
                              var dataPGA = {Nx: 1, Ny: 1, Nx11: 0.95, Nx12: 0.05, Nx21: 0.75, Nx22: 0.25, Ny1: 0.5, Ny2: 0.5};
                              var dataPGB = {Nx: 1, Ny: 1, Nx11: 0.8, Nx12: 0.2, Nx21: 0.25, Nx22: 0.75, Ny1: 0.5, Ny2: 0.5};
                              
                              var labels = []
                      
                              // graphical parameters
                            var scale = 350
                            var paddingGroups = 50;
                            var paddingBars = 25;
                            var paddingFig = 15;
                            var heightText = 30;
                          var barWidth = 25
                          var paddingText = 20
                          
                          var svg = d3.select("#figPlayground");
                          
                          var graphicalData = {scale: scale, paddingGroups: paddingGroups, paddingBars: paddingBars, paddingFig: paddingFig, heightText: heightText, barWidth: barWidth, paddingText: paddingText}
                          
                      var buildPlayground = function(fig, dataA, dataB, graphicalData)
                      {
                      
                          // translate right group away from left group
                          fig.select("#groupRight").attr("transform",  `translate(${dataA.Nx*scale+graphicalData.paddingGroups}, 0)`)
                          //fig.attr("viewBox", `-${paddingBars+barWidth+paddingFig} -${paddingBars+barWidth+paddingFig} ${(dataA.Nx+dataB.Nx)*scale + paddingGroups + 2*paddingBars + paddingBars+barWidth +2*paddingFig} ${(dataA.Ny)*scale + paddingGroups + 2*paddingBars + paddingBars+barWidth} `)
                          fig.select("#groupLeft").select("#title")
                              .attr("transform", `translate(0, -${graphicalData.paddingBars+graphicalData.barWidth+graphicalData.paddingBars})`)
                              .style("font-size", graphicalData.heightText)
                          fig.select("#groupRight").select("#title")
                              .attr("transform", `translate(0, -${graphicalData.paddingBars+graphicalData.barWidth+graphicalData.paddingBars})`)
                              .style("font-size", graphicalData.heightText)
                          fig.attr("width", (dataA.Nx+dataB.Nx)*scale + graphicalData.paddingGroups + 2*graphicalData.paddingBars + graphicalData.paddingBars+graphicalData.barWidth +2*graphicalData.paddingFig + 2.5*graphicalData.paddingText)
                              .attr("height", (dataA.Ny)*graphicalData.scale + graphicalData.paddingGroups + 2*graphicalData.paddingBars + 2*graphicalData.paddingBars+graphicalData.barWidth + graphicalData.heightText)
                      
                          fig.select("#giantGroup").attr("transform", `translate(${graphicalData.paddingBars+graphicalData.barWidth+graphicalData.paddingFig+graphicalData.paddingText}, ${2*graphicalData.paddingBars+graphicalData.barWidth+graphicalData.paddingFig+graphicalData.heightText})`)
                      
                          
                              
                          // for both left and right group do:
                          for (var id of [["#groupLeft", dataA], ["#groupRight", dataB]]) {
                              var g = fig.select(id[0]);
                      
                      
                              // Build "ratio bar on top"
                              var bar = g.select("#ratioBarTop")
                              var subbar = bar.select("#left")
                              subbar.append("rect")
                                  .attr("width", id[1].Nx11*graphicalData.scale)
                                  .attr("height", graphicalData.barWidth)
                                  .attr("fill", "white")
                                  .attr("stroke", "black")
                              subbar.append("text")
                                  .attr("text-anchor", "end")
                                  .attr("dx", "-0.5em")
                                  .attr("x", id[1].Nx11*graphicalData.scale)
                                  .attr("y", graphicalData.barWidth/2)
                                  .attr("dy", "0.25em")
                                  .text(Number(id[1].Nx11/id[1].Nx).toFixed(2))
                              
                              var subbar = bar.select("#right")
                              subbar.append("rect")
                                  .attr("x", id[1].Nx11*graphicalData.scale)
                                  .attr("width", id[1].Nx12*graphicalData.scale)
                                  .attr("height", graphicalData.barWidth)
                                  .attr("fill", "white")
                                  .attr("stroke", "black")
                              subbar.append("text")
                                  .attr("x", id[1].Nx11*graphicalData.scale)
                                  .attr("dx", "0.5em")
                                  .attr("y", graphicalData.barWidth/2)
                                  .attr("dy", "0.25em")
                                  .text(Number(id[1].Nx12/id[1].Nx).toFixed(2))
                              
                              bar.attr("transform", `translate(0, -${graphicalData.paddingBars+graphicalData.barWidth})`)
                      
                              // Build "ratio bar at the bottom"
                              var bar = g.select("#ratioBarBottom")
                              var subbar = bar.select("#left")
                              subbar.append("rect")
                                  .attr("width", id[1].Nx21*graphicalData.scale)
                                  .attr("height", graphicalData.barWidth)
                                  .attr("fill", "white")
                                  .attr("stroke", "black")
                              subbar.append("text")
                                  .attr("text-anchor", "end")
                                  .attr("dx", "-0.5em")
                                  .attr("x", id[1].Nx21*graphicalData.scale)
                                  .attr("y", graphicalData.barWidth/2)
                                  .attr("dy", "0.25em")
                                  .text(Number(id[1].Nx21/id[1].Nx).toFixed(2))
                              
                              var subbar = bar.select("#right")
                              subbar.append("rect")
                                  .attr("x", id[1].Nx21*graphicalData.scale)
                                  .attr("width", id[1].Nx22*graphicalData.scale)
                                  .attr("height", graphicalData.barWidth)
                                  .attr("fill", "white")
                                  .attr("stroke", "black")
                              subbar.append("text")
                                  .attr("x", id[1].Nx21*graphicalData.scale)
                                  .attr("dx", "0.5em")
                                  .attr("y", graphicalData.barWidth/2)
                                  .attr("dy", "0.25em")
                                  .text(Number(id[1].Nx22/id[1].Nx).toFixed(2))
                              
                              bar.attr("transform", `translate(0, ${id[1].Ny*graphicalData.scale + graphicalData.paddingBars})`)
                      
                              // build "ratio bar at the side"
                              var bar = g.select("#ratioBarSide")
                              var subbar = bar.select("#top")
                              subbar.append("rect")
                                  .attr("x", id[1].Ny2*graphicalData.scale)
                                  .attr("width", id[1].Ny1*graphicalData.scale)
                                  .attr("height", graphicalData.barWidth)
                                  .attr("fill", "white")
                                  .attr("stroke", "black")
                              subbar.append("text")
                                  .attr("x", id[1].Ny2*graphicalData.scale)
                                  .attr("dx", "0.5em")
                                  .attr("y", graphicalData.barWidth/2)
                                  .attr("dy", "0.25em")
                                  .text(Number(id[1].Ny1/id[1].Ny).toFixed(2))
                              
                              var subbar = bar.select("#bottom")
                              subbar.append("rect")
                                  .attr("width", id[1].Ny2*graphicalData.scale)
                                  .attr("height", graphicalData.barWidth)
                                  .attr("fill", "white")
                                  .attr("stroke", "black")
                              subbar.append("text")
                                  .attr("text-anchor", "end")
                                  .attr("dx", "-0.5em")
                                  .attr("x", id[1].Ny2*graphicalData.scale)
                                  .attr("y", graphicalData.barWidth/2)
                                  .attr("dy", "0.25em")
                                  .text(Number(id[1].Ny2/id[1].Ny).toFixed(2))
                              
                              if (id[0] == "#groupLeft") {
                                  bar.attr("transform", `translate(-${graphicalData.paddingBars+graphicalData.barWidth}, ${id[1].Ny*graphicalData.scale}), rotate(270)`)
                              }
                              else {
                                  bar.attr("transform", `translate(${id[1].Nx*graphicalData.scale + graphicalData.paddingBars}, ${id[1].Ny*graphicalData.scale}), rotate(270)`)
                              }
                              // add label for good and bad weather
                               var g = fig.select(id[0])

                               if (id[0] == "#groupLeft") {
                               g.select("#labelGood")
                                .attr("text-anchor", "middle")
                                .attr("transform", `translate(${-graphicalData.paddingBars-graphicalData.heightText}, ${dataA.Ny1/2*graphicalData.scale})`+ " rotate(270)")
                                .text("life vest")
                               g.select("#labelBad")
                                .attr("text-anchor", "middle")
                                .attr("transform", `translate(${-graphicalData.paddingBars-graphicalData.heightText}, ${(dataA.Ny1+dataA.Ny2/2)*graphicalData.scale})`+ " rotate(270)")
                                .text("no life vest")
                               }
                               else{
                                // add label for good and bad weather
                               var g = fig.select("#groupRight")
                               g.select("#labelGood")
                                .attr("text-anchor", "middle")
                                .attr("transform", `translate(${id[1].Nx*graphicalData.scale + graphicalData.paddingBars + 1.5*graphicalData.heightText}, ${dataA.Ny1/2*scale})`+ " rotate(270)")
                                .text("life vest")
                               g.select("#labelBad")
                                .attr("text-anchor", "middle")
                                .attr("transform", `translate(${id[1].Nx*graphicalData.scale + graphicalData.paddingBars + 1.5*graphicalData.heightText}, ${(dataA.Ny1+dataA.Ny2/2)*graphicalData.scale})`+ " rotate(270)")
                                .text("no life vest")
                               }

                          }
                          
                          }
                              var testForParadox = function(dataA, dataB){
                                  var ratio1AhigherB = (dataA.Nx11/dataA.Nx > dataB.Nx11/dataB.Nx);
                                  var ratio2AhigherB = (dataA.Nx21/dataA.Nx > dataB.Nx21/dataB.Nx);
                                  var ratioTotAhigherB = ((dataA.Nx11*dataA.Ny1+dataA.Nx21*dataA.Ny2)/(dataA.Nx*dataA.Ny) >= (dataB.Nx11*dataB.Ny1+dataB.Nx21*dataB.Ny2)/(dataB.Nx*dataB.Ny));
                                  if ((ratio1AhigherB && ratio2AhigherB && !ratioTotAhigherB) || (!ratio1AhigherB && !ratio2AhigherB && ratioTotAhigherB)) {
                                      return true;
                                  }
                                  else{
                                      return false;
                                  }
                              }
                      
                              var calculateTotalRatios = function(dataA, dataB){
                                  return [(dataA.Nx11*dataA.Ny1+dataA.Nx21*dataA.Ny2)/(dataA.Nx*dataA.Ny), (dataB.Nx11*dataB.Ny1+dataB.Nx21*dataB.Ny2)/(dataB.Nx*dataB.Ny)]
                              }
                      
                            var newColors = [d3.hcl(75, 80, 75), d3.hcl(75, 50, 85), d3.hcl(250, 80, 60), d3.hcl(250, 20, 70)];
                            //var labelDataA = {labelUpper: ["small stones", "hidden"], labelLower: ["large stones", "hidden"], labelUpperLeft: ["", "hidden"], labelUpperRight: [labelAUpper, "hidden"], labelLowerLeft: [labelALower, "hidden"], labelLowerRight: [labelALower, "hidden"], labelRatioBarSideTop: "Ratio of patients under treatment A with small kidney stones", labelRatioBarSideBottom: "Ratio of patients under treatment A with large kidney stones"};
                            //var labelDataB = {labelUpper: ["small stones", "hidden"], labelLower: ["large stones", "hidden"], labelUpperLeft: [labelBUpper, "hidden"], labelUpperRight: [labelBUpper, "hidden"], labelLowerLeft: [labelBLower, "hidden"], labelLowerRight: [labelBLower, "hidden"], labelRatioBarSideTop: "Ratio of patients under treatment B with small kidney stones", labelRatioBarSideBottom: "Ratio of patients under treatment B with large kidney stones"};
                            var graphicalDataA = {padding: 1, scale: scale, textPadding: 30, color: newColors};
                            var graphicalDataB = {padding: 1, scale: scale, textPadding: 30, color: newColors};
                          var svg = d3.select("#figPlayground");
                      
                      
                      var updateFigure = function(fig, dataA, dataB)
                          {
                              
                      
                              // update left group
                              var g = fig.select("#groupLeft");
                      
                            
                              // update rectangle geometry
                              g.select("#rect1")
                                  .attr("height", dataA.Ny1*scale)
                                  .attr("width", dataA.Nx11*scale)
                              g.select("#rect2")
                                  .attr("height", dataA.Ny1*scale)
                                  .attr("width", dataA.Nx12*scale)
                                  .attr("x", dataA.Nx11*scale)
                              g.select("#rect3")
                                  .attr("height", dataA.Ny2*scale)
                                  .attr("width", dataA.Nx21*scale)
                                  .attr("y", dataA.Ny1*scale)
                              g.select("#rect4")
                                  .attr("height", dataA.Ny2*scale)
                                  .attr("width", dataA.Nx22*scale)
                                  .attr("x", dataA.Nx21*scale)
                                  .attr("y", dataA.Ny1*scale)
                      
                              // update ratio bar geometry
                      
                              // ratio bar top
                              var ratioBarTop = g.select("#ratioBarTop");
                              var left = ratioBarTop.select("#left");
                              var rect = left.select("rect")
                              rect.attr("width", dataA.Nx11*scale);
                              var text = left.select("text");
                              var txtval = Number(dataA.Nx11/dataA.Nx).toFixed(2)
                              text.attr("x", dataA.Nx11*scale).text(txtval);
                              
                              var right = ratioBarTop.select("#right");
                              var rect = right.select("rect")
                              rect.attr("x", dataA.Nx11*scale).attr("width", dataA.Nx12*scale);
                              var text = right.select("text");
                              var txtval = Number(dataA.Nx12/dataA.Nx).toFixed(2)
                              text.attr("x", dataA.Nx11*scale).text(txtval);
                      
                              // ratio bar side
                              var ratioBarSide = g.select("#ratioBarSide");
                              var top = ratioBarSide.select("#top");
                              var rect = top.select("rect");
                              rect.attr("x", dataA.Ny2*scale).attr("width", dataA.Ny1*scale)
                              var text = top.select("text");
                              var txtval = Number(dataA.Ny1/dataA.Ny).toFixed(2)
                              text.attr("x", dataA.Ny2*scale).text(txtval)
                      
                              var bottom = ratioBarSide.select("#bottom");
                              var rect = bottom.select("rect");
                              rect.attr("width", dataA.Ny2*scale)
                              var text = bottom.select("text");
                              var txtval = Number(dataA.Ny2/dataA.Ny).toFixed(2)
                              text.attr("x", dataA.Ny2*scale).text(txtval)
                      
                              // ratio bar bottom
                              var ratioBarBottom = g.select("#ratioBarBottom");
                              var left = ratioBarBottom.select("#left");
                              var rect = left.select("rect")
                              rect.attr("width", dataA.Nx21*scale);
                              var text = left.select("text");
                              var txtval = Number(dataA.Nx21/dataA.Nx).toFixed(2)
                              text.attr("x", dataA.Nx21*scale).text(txtval);
                      
                              var right = ratioBarBottom.select("#right");
                              var rect = right.select("rect")
                              rect.attr("x", dataA.Nx21*scale).attr("width", dataA.Nx22*scale);
                              var text = right.select("text");
                              var txtval = Number(dataA.Nx22/dataA.Nx).toFixed(2)
                              text.attr("x", dataA.Nx21*scale).text(txtval);
                      
                      
                              
                              // update text on rectangles
                              var textRect = g.select("#text1")
                              textRect.text(Number(dataA.Nx11/dataA.Nx*dataA.Ny1*dataA.Ny).toFixed(2))
                                  .attr("x", (dataA.Nx11/2)*scale)
                                  .attr("y", (dataA.Ny1/2)*scale)
                              var textRect = g.select("#text2")
                              textRect.text(Number(dataA.Nx12/dataA.Nx*dataA.Ny1*dataA.Ny).toFixed(2))
                                  .attr("x", (dataA.Nx11 + dataA.Nx12/2)*scale)
                                  .attr("y", (dataA.Ny1/2)*scale)
                              var textRect = g.select("#text3")
                              textRect.text(Number(dataA.Nx21/dataA.Nx*dataA.Ny2*dataA.Ny).toFixed(2))
                                  .attr("x", (dataA.Nx21/2)*scale)
                                  .attr("y", (dataA.Ny1+dataA.Ny2/2)*scale)
                              var textRect = g.select("#text4")
                              textRect.text(Number(dataA.Nx22/dataA.Nx*dataA.Ny2*dataA.Ny).toFixed(2))
                                  .attr("x", (dataA.Nx21 + dataA.Nx22/2)*scale)
                                  .attr("y", (dataA.Ny1+dataA.Ny2/2)*scale)
                                  
                      
                      
                                  var g = fig.select("#groupRight");
                      
                              g.select("#rect1")
                                  .attr("height", dataB.Ny1*scale)
                                  .attr("width", dataB.Nx11*scale)
                              g.select("#rect2")
                                  .attr("height", dataB.Ny1*scale)
                                  .attr("width", dataB.Nx12*scale)
                                  .attr("x", dataB.Nx11*scale)
                              g.select("#rect3")
                                  .attr("height", dataB.Ny2*scale)
                                  .attr("width", dataB.Nx21*scale)
                                  .attr("y", dataB.Ny1*scale)
                              g.select("#rect4")
                                  .attr("height", dataB.Ny2*scale)
                                  .attr("width", dataB.Nx22*scale)
                                  .attr("x", dataB.Nx21*scale)
                                  .attr("y", dataB.Ny1*scale)
                      
                              var ratioBarSide = g.select("#ratioBarSide");
                              var top = ratioBarSide.select("#top");
                              var rect = top.select("rect");
                              rect.attr("x", dataB.Ny2*scale).attr("width", dataB.Ny1*scale)
                              var text = top.select("text");
                              var txtval = Number(dataB.Ny1/dataB.Ny).toFixed(2)
                              text.attr("x", dataB.Ny2*scale).text(txtval)
                      
                              var bottom = ratioBarSide.select("#bottom");
                              var rect = bottom.select("rect");
                              rect.attr("width", dataB.Ny2*scale)
                              var text = bottom.select("text");
                              var txtval = Number(dataB.Ny2/dataB.Ny).toFixed(2)
                              text.attr("x", dataB.Ny2*scale).text(txtval)
                      
                              var ratioBarTop = g.select("#ratioBarTop");
                              var left = ratioBarTop.select("#left");
                              var rect = left.select("rect")
                              rect.attr("width", dataB.Nx11*scale);
                              var text = left.select("text");
                              var txtval = Number(dataB.Nx11/dataB.Nx).toFixed(2)
                              text.attr("x", dataB.Nx11*scale).text(txtval);
                      
                              var right = ratioBarTop.select("#right");
                              var rect = right.select("rect")
                              rect.attr("x", dataB.Nx11*scale).attr("width", dataB.Nx12*scale);
                              var text = right.select("text");
                              var txtval = Number(dataB.Nx12/dataB.Nx).toFixed(2)
                              text.attr("x", dataB.Nx11*scale).text(txtval);
                      
                              var ratioBarBottom = g.select("#ratioBarBottom");
                              var left = ratioBarBottom.select("#left");
                              var rect = left.select("rect")
                              rect.attr("width", dataB.Nx21*scale);
                              var text = left.select("text");
                              var txtval = Number(dataB.Nx21/dataB.Nx).toFixed(2)
                              text.attr("x", dataB.Nx21*scale).text(txtval);
                      
                              var right = ratioBarBottom.select("#right");
                              var rect = right.select("rect")
                              rect.attr("x", dataB.Nx21*scale).attr("width", dataB.Nx22*scale);
                              var text = right.select("text");
                              var txtval = Number(dataB.Nx22/dataB.Nx).toFixed(2)
                              text.attr("x", dataB.Nx21*scale).text(txtval);
                      
                      
                              var textRect = g.select("#text1")
                              textRect.text(Number(dataB.Nx11/dataB.Nx*dataB.Ny1*dataB.Ny).toFixed(2))
                                  .attr("x", (dataB.Nx11/2)*scale)
                                  .attr("y", (dataB.Ny1/2)*scale)
                              var textRect = g.select("#text2")
                              textRect.text(Number(dataB.Nx12/dataB.Nx*dataB.Ny1*dataB.Ny).toFixed(2))
                                  .attr("x", (dataB.Nx11 + dataB.Nx12/2)*scale)
                                  .attr("y", (dataB.Ny1/2)*scale)
                              var textRect = g.select("#text3")
                              textRect.text(Number(dataB.Nx21/dataB.Nx*dataB.Ny2*dataB.Ny).toFixed(2))
                                  .attr("x", (dataB.Nx21/2)*scale)
                                  .attr("y", (dataB.Ny1+dataB.Ny2/2)*scale)
                              var textRect = g.select("#text4")
                              textRect.text(Number(dataB.Nx22/dataB.Nx*dataB.Ny2*dataB.Ny).toFixed(2))
                                  .attr("x", (dataB.Nx21 + dataB.Nx22/2)*scale)
                                  .attr("y", (dataB.Ny1+dataB.Ny2/2)*scale)
                      
                      
                      
                                  
                              // update color if necessary
                              if (dataA.Nx11/dataA.Nx*dataA.Ny1/dataA.Ny + dataA.Nx21/dataA.Nx*dataA.Ny2/dataA.Ny > dataB.Nx11/dataB.Nx*dataB.Ny1/dataB.Ny + dataB.Nx21/dataB.Nx*dataB.Ny2/dataB.Ny){
                                  fig.select("#groupLeft").select("#rect1").attr("fill", "green");
                                  fig.select("#groupLeft").select("#rect3").attr("fill", "green");
                                  fig.select("#groupRight").select("#rect1").attr("fill", "red");
                                  fig.select("#groupRight").select("#rect3").attr("fill", "red");
                              }
                              else{
                                  fig.select("#groupLeft").select("#rect1").attr("fill", "red");
                                  fig.select("#groupLeft").select("#rect3").attr("fill", "red");
                                  fig.select("#groupRight").select("#rect1").attr("fill", "green");
                                  fig.select("#groupRight").select("#rect3").attr("fill", "green");
                              }
                      
                              if (dataA.Nx11/dataA.Nx > dataB.Nx11/dataB.Nx){
                                  fig.select("#groupLeft").select("#ratioBarTop").select("#left").select("rect").attr("fill", "green")
                                  fig.select("#groupRight").select("#ratioBarTop").select("#left").select("rect").attr("fill", "red")
                              }
                              else{            
                                  fig.select("#groupLeft").select("#ratioBarTop").select("#left").select("rect").attr("fill", "red")
                                  fig.select("#groupRight").select("#ratioBarTop").select("#left").select("rect").attr("fill", "green")
                              }
                      
                              if (dataA.Nx21/dataA.Nx > dataB.Nx21/dataB.Nx){
                                  fig.select("#groupLeft").select("#ratioBarBottom").select("#left").select("rect").attr("fill", "green")
                                  fig.select("#groupRight").select("#ratioBarBottom").select("#left").select("rect").attr("fill", "red")
                              }
                              else{            
                                  fig.select("#groupLeft").select("#ratioBarBottom").select("#left").select("rect").attr("fill", "red")
                                  fig.select("#groupRight").select("#ratioBarBottom").select("#left").select("rect").attr("fill", "green")
                              }
                              
                              
                      
                              
                          }
                          var updateParadox = function(dataA, dataB)
                          {// update paradox status
                              if (testForParadox(dataA, dataB)) {
                                d3.select("#p_paradox").text("Yes");
                                document.getElementById("explanation").innerHTML = "<b>Well done!</b> In good weather, your rescue probability is not too bad even without a life vest. In bad weather, wearing no life jacket"
                                 + " is a really terrible idea. The way you chose those parameters, it seems that sailors pretty much only wear life vests in bad weather and deem it unnecessary in good weather."
                                 + " Hence if we look at a typical sailor gone overboard in bad weather, he is probably wearing a life jacket and will hence be rescued with pretty high probability (80%)."
                                 + " On the other hand, if you pick a typical distressed sailor in good weather, he probably was too careless to don a life jacket beforehand and thus will only be rescued"
                                 + " with probability 75%. As 75% is lower than 80%, it appears that sailors in bad weather are actually safer than sailors in good weather."
                                 d3.select("#explanation").style("background-color", "green")
                              }
                              else {
                                  d3.select("#p_paradox").text("No");
                              }
                          }
                          
                          var updateTotalRatio = function(dataA, dataB)
                          {
                          
                              var rs = calculateTotalRatios(dataA, dataB);
                              var ra = rs[0], rb = rs[1];
                      
                              d3.select("#totalRatioA").text(Number(ra).toFixed(2))
                              d3.select("#totalRatioB").text(Number(rb).toFixed(2))
                              }
                      
                            buildPlayground(svg, dataPGA, dataPGB, graphicalData)
                          updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB)
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                      
                            // set sliders to initial data
                            var slider1 = document.getElementById("rangeRatioA1");
                            var slider2 = document.getElementById("rangeRatioB1");
                            var slider3 = document.getElementById("rangeSuccA1");
                            var slider4 = document.getElementById("rangeSuccA2");
                            var slider5 = document.getElementById("rangeSuccB1");
                            var slider6 = document.getElementById("rangeSuccB2");
                            slider1.value = dataPGA.Ny1/dataPGA.Ny*100
                            slider2.value = dataPGB.Ny1/dataPGB.Ny*100
                            slider3.value = dataPGA.Nx11/dataPGA.Nx*100
                            slider4.value = dataPGA.Nx21/dataPGA.Nx*100
                            slider5.value = dataPGB.Nx11/dataPGB.Nx*100
                            slider6.value = dataPGB.Nx21/dataPGB.Nx*100
                      
                            var indicator1 = document.getElementById("indicator1")
                            var indicator2 = document.getElementById("indicator2")
                            var indicator3 = document.getElementById("indicator3")
                            var indicator4 = document.getElementById("indicator4")
                            var indicator5 = document.getElementById("indicator5")
                            var indicator6 = document.getElementById("indicator6")
                            indicator1.innerHTML = slider1.value/100
                            indicator2.innerHTML = slider2.value/100
                            indicator3.innerHTML = slider3.value/100
                            indicator4.innerHTML = slider4.value/100
                            indicator5.innerHTML = slider5.value/100
                            indicator6.innerHTML = slider6.value/100
                      
                          
                      
                            
                      
                            // slider1 input reaction 
                            slider1.oninput = function() {
                              dataPGA.Ny1 = this.value*dataPGA.Ny/100;
                              dataPGA.Ny2 = (100-this.value)*dataPGA.Ny/100;
                              
                              d3.select("#indicator1").text(Number(this.value/100).toFixed(2))
                              
                              updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB);
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                              
                      
                            } 
                            // slider 2 update function (see slider 1 for comments)
                            slider2.oninput = function() {
                              var g = d3.select("#figPlayground").select("#groupRight");
                              dataPGB.Ny1 = this.value*dataPGB.Ny/100;
                              dataPGB.Ny2 = (100-this.value)*dataPGB.Ny/100;
                              d3.select("#indicator2").text(Number(this.value/100).toFixed(2))
                              
                              updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB);
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                              
                              
                            } 
                      
                            slider3.oninput = function() {
                              var g = d3.select("#figPlayground").select("#groupLeft");
                              dataPGA.Nx11 = this.value*dataPGA.Nx/100;
                              dataPGA.Nx12 = (100-this.value)*dataPGA.Nx/100;
                              d3.select("#indicator3").text(Number(this.value/100).toFixed(2))
                              
                              updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB);
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                            }      
                      
                            slider4.oninput = function() {
                              var g = d3.select("#figPlayground").select("#groupLeft");
                              dataPGA.Nx21 = this.value*dataPGA.Nx/100;
                              dataPGA.Nx22 = (100-this.value)*dataPGA.Nx/100;
                              d3.select("#indicator4").text(Number(this.value/100).toFixed(2))
                      
                              updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB);
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                              
                             
                            } 
                      
                            slider5.oninput = function() {
                              var g = d3.select("#figPlayground").select("#groupRight");
                              dataPGB.Nx11 = this.value*dataPGB.Nx/100;
                              dataPGB.Nx12 = (100-this.value)*dataPGB.Nx/100;
                              d3.select("#indicator5").text(Number(this.value/100).toFixed(2))
                      
                              updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB);
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                              
                            } 
                      
                            slider6.oninput = function() {
                              var g = d3.select("#figPlayground").select("#groupRight");
                              dataPGB.Nx21 = this.value*dataPGB.Nx/100;
                              dataPGB.Nx22 = (100-this.value)*dataPGB.Nx/100;
                              d3.select("#indicator6").text(Number(this.value/100).toFixed(2))
                      
                              updateFigure(d3.select("#figPlayground"), dataPGA, dataPGB);
                          updateParadox(dataPGA, dataPGB)
                          updateTotalRatio(dataPGA, dataPGB)
                            } 
                      
                      
                            
                        
