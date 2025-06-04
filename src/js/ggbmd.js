var t = 0;
for(var i=0; i<ggbs.length*3; i++){
    var si = i.toString();
    var ggbsxxx = "ggbs"+si;
    var ggbid = document.getElementById(ggbsxxx);
    
    if(ggbid){
        var ii =  i % ggbs.length;
        var parametersx = { 
        "appletOnLoad":function(api){api.evalCommand('SetPerspective("-A")');api.evalCommand('SetPerspective("-P")');},"width":ggbid.offsetWidth,"height":ggbid.offsetHeight,
        "showAlgebraInput":false,"showToolBar":false,"borderColor":"white", 
        "enableRightClick":false,"enableShiftDragZoom":false, "enableLabelDrags":false,
        "ggbBase64": ggbs[ii]
        };
        var content = ggbid.textContent.trim();
        var contentArray = content.split(',');
        contentArray.forEach(function(item) {
            var keyValue = item.split(':');
            if (keyValue.length === 2) {
                var key = keyValue[0].trim().replace(/"/g, ''); 
                var value = keyValue[1].trim().replace(/"/g, ''); 
                parametersx[key] = value === '1' ? false : value === '2' ? false : value;
            }
        });
        var appletx = new GGBApplet(parametersx, "5.0");
        appletx.setHTML5Codebase(ggbpath);
        appletx.inject(ggbsxxx);
        t += 1;
    }
}