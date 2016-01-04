$(function(){
	Chart.defaults.global.responsive = true;
	
	// [ SLOC ]
	Chart.defaults.global.scaleLabel = "<%=value%> sloc";
	var slocCanvas = $("#slocChart").get(0).getContext("2d");
	var slocChart = new Chart(slocCanvas).Bar({
	  labels: ['Total 1.6.4', 'Sails 0.10.2', "Geddy v13.0.7", "Hapi v7.5.2", "Express v4", "Locomotive v0.4.2", "Flatiron v0.4.2", "Koa v0.13", "Diet v0.9"],
	  datasets: [
	      {
	          label: "Diet v0.9",
	          fillColor: "rgba(151,187,205,0.2)",
	          strokeColor: "rgba(151,187,205,1)",
	          pointColor: "rgba(151,187,205,1)",
	          pointStrokeColor: "#fff",
	          pointHighlightFill: "#fff",
	          pointHighlightStroke: "rgba(151,187,205,1)",
	          data: [17226, 7339, 5940, 3318, 1583, 1480, 581, 544, 400], 
	      }
	  ]
	}, {});
	
	Chart.defaults.global.scaleLabel = "<%=value%>ms";
	// [ VANILLA ]
	var vanillaCanvas = $("#vanillaCanvas").get(0).getContext("2d");
	var vanillaChart = new Chart(vanillaCanvas).Line({
	  labels: ["1st Test", "2nd Test", "3rd Test", "4th Test", "6th Test", "7th Test"],
	  datasets: [
	      {
	         label: "Response time with Vanilla Node.js",
	         fillColor: "rgba(220,220,220,0.2)",
             strokeColor: "rgba(220,220,220,1)",
             pointColor: "rgba(220,220,220,1)",
             pointStrokeColor: "#fff",
             pointHighlightFill: "#fff",
             pointHighlightStroke: "rgba(220,220,220,1)",
	         data: [543, 842, 642, 643, 743, 563]
	      },
	      {
	          label: "Response time with Diet.js",
	          fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
	          data: [280, 342, 432, 400, 325, 343],
	      }
	  ]
	}, {});
	$('#framework-comparison-legend').append(vanillaChart.generateLegend());
	
	

})