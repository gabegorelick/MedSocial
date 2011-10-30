function toggleView(stackId, viewId) {
    if (stackId.length > 0 && viewId.length > 0) {
        var stack = document.getElementById(stackId);
        
        if (stack != null) {
            var allViews = stack.childNodes;
    
            for (var i = 0; i < allViews.length; i++) {
                $(allViews[i]).css("position", "absolute");
                $(allViews[i]).css("left", "-10000px");
            }
    
            var visibleView = document.getElementById(viewId);
    
            if (visibleView != null) {
                $(visibleView).css("position", "relative");
                $(visibleView).css("left", "0px");
            }
        }
    }
}

function addBarChart(chartId, data) {
    var datas = data.split(",");
    
    var line = new Array();
    
    for (i = 0; i < datas.length; i++) {
        line[i] = parseInt(datas[i]);
    }
    
    if (line.length < 1 || line[0] == 0) {
        line = [10,25,15,20,30]
    }
    
    $.jqplot(chartId, [line], {
        seriesDefaults:{shadow: false, renderer:$.jqplot.BarRenderer, rendererOptions: {padding: 5}}, grid:{shadow: false, background: '#ffffff', borderWidth: 0},
        axes: {xaxis: {renderer:$.jqplot.CategoryAxisRenderer}, yaxis:{min: 0}}
    });
}

function addLineChart(chartId, data) {
    var datas = data.split(",");
    
    var line = new Array();
    
    for (i = 0; i < datas.length; i++) {
        line[i] = parseInt(datas[i]);
    }
    
    if (line.length < 1 || line[0] == 0) {
        line = [10,25,15,20,30]
    }
    
    $.jqplot(chartId, [line], {
        seriesDefaults:{shadow: false, rendererOptions: {padding: 5}}, grid:{shadow: false, background: '#ffffff', borderWidth: 0}
    });
}

function addPieChart(chartId, data) {
    var datas = data.split(",");
    
    var line = new Array();
    
    for (i = 0; i < datas.length; i++) {
        line[i] = parseInt(datas[i]);
    }
    
    if (line.length < 1 || line[0] == 0) {
        line = [10,25,15,20,30]
    }
    
    $.jqplot(chartId, [line], {
        seriesDefaults:{shadow: false, renderer:$.jqplot.PieRenderer, rendererOptions: {padding: 2}}, grid:{shadow: false, background: '#ffffff', borderWidth: 1}
    });
}