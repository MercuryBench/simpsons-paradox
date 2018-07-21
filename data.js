
            //var dataset = datasetM;
            var setStudy = function(d){
                if ((d.gender == "m" && d.y < 20) || (d.gender == "w" && d.y < 8)) {
                    d.study = "math";
                }
                else {
                    d.study = "lit";
                }
                return d;
            }
            var setAccepted = function(d){
                if ((d.gender == "m" && d.study == "math" && d.x < 51) || (d.gender == "w" && d.study == "math" && d.x < 54)) {
                    d.accepted = true;
                }
                else if ((d.gender =="m" && d.study == "lit" && d.x < 39) ||(d.gender =="w" && d.study == "lit" && d.x < 42)) {
                    d.accepted = true;
                }
                else {
                    d.accepted = false;
                }
                return d;
            }


            var getDataM = function()
            {
                var datasetM = []
                var numhori = 60, numverti = 24;  // 60, 24
                for (let n = 0; n < numverti; n++) {
                    for (let m = 0; m < numhori; m++){
                        datasetM.push({x: m, y: n, gender: "m", study: null, accepted: null})
                    }
                }
                
                datasetM = datasetM.map(function(d){return setStudy(d);}).map(function(d){return setAccepted(d);})
                return datasetM;
            }

            var getDataW = function()
            {
                var numhori = 60, numverti = 24;  // 60, 24
                var datasetW = []
                for (let n = 0; n < numverti; n++) {
                    for (let m = 0; m < numhori; m++){
                        datasetW.push({x: m, y: n, gender: "w", study: null, accepted: null})
                    }
                }
                
                datasetW = datasetW.map(function(d){return setStudy(d);}).map(function(d){return setAccepted(d);})
                return datasetW;
            }
            
            
            var datasetW = getDataW();
            var datasetM = getDataM();

            var w = 600, h = 400;
            var padding = 1;
            var numhori = 60, numverti = 24;  // 60, 24
            var scale = 5; // 8
            var paddingBlocks = 5;