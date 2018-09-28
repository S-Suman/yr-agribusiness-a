// Our labels along the x-axis
var Months = ["January","February","March","April","May","June","July","August"];
// For drawing the lines
var Rain = [50,110,80,105,200,220,225,350];
var Temp = [20,21,22,12,14,18,23,25];

var  p =[7704300,2613700,4827000,6039100,706500,518500]

var States = ["New south Wales","Western Australia","Queens Land","Victoria","South Australia","Tasmania"];
// For drawing the lines
var Pop_S = [7704300,2613700,4827000,6039100,1706500,518500];
var cott_S = [7000000,1044000,3440000,0,0,0];
var Pop_y	 = [22120064,22324503,22730728,23122028,23469509,23799556,24125848,24450561];
var cott_y = [27546600,27546600,22146360,13289420,14069840,14599870,14895000,15800590];
var cott_M = [15000000,20000000,36500000,42500000,39500000,39800000,20000000,15000000];
var pop = [24450561,24450561,24450561,24450561,24450561,24450561,24450561,24450561];
var Tom_S = [1873200,1100000,2109000,1330600,2168500,1343000];
var Tom_y = [34482000,28957000,32879000,40897000,30244000,35875000,31258000,48961000];
var Tom_M = [39780000,55474000,66500000,56975000,52474000,39780000,55890000,44483000]
var Year = [2010,2011,2012,2013,2014,2015,2016,2017]

function graph() {

	var ctx = document.getElementById("myChart");
	
	var a = document.getElementById("cause").value;


	 var b = document.getElementById("effect").value;

	 var c = document.getElementById("xaxis").value;
	 


if(b==1 & c==1)
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Year,
    datasets: [
      { 
        data: Pop_y,
        label: "Population",
        backgroundColor	: "#B5FF9F",
        
        //fill: false
      },
      { 
        data: cott_y,
        label: "cotton yearly",
        backgroundColor: "#E5FF9F",
        //fill: false
      }
    ]
  }
});
else if(b==1 & c==2)
	var myChart1 = new Chart(ctx, {
		  type: 'bar',
		  data: {
		    labels: Months,
		    datasets: [
		      { 
		        data: pop,
		        label: "Population",
		        backgroundColor	: "#B5FF9F",
		        
		        //fill: false
		      },
		      { 
		        data: cott_M,
		        label: "cotton monthly",
		        backgroundColor: "#E5FF9F",
		        //fill: false
		      }
		    ]
		  }
		});
else if(b==1 & c==3)
	var myChart2 = new Chart(ctx, {
		  type: 'bar',
		  data: {
		    labels: States,
		    datasets: [
		      { 
		        data: Pop_S,
		        label: "Population",
		        backgroundColor	: "#B5FF9F",
		        
		        //fill: false
		      },
		      { 
		        data: cott_S,
		        label: "cotton",
		        backgroundColor: "#E5FF9F",
		        //fill: false
		      }
		    ]
		  }
		});
else if(b==2 & c==1)
	var myChart3 = new Chart(ctx, {
	  type: 'bar',
	  data: {
	    labels: Year,
	    datasets: [
	      { 
	        data: Pop_y,
	        label: "Population",
	        backgroundColor	: "#B5FF9F",
	        
	        //fill: false
	      },
	      { 
	        data: Tom_y,
	        label: "tommato",
	        backgroundColor: "#E5FF9F",
	        //fill: false
	      }
	    ]
	  }
	});
else if(b==2 & c==2)
		var myChart4 = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: Months,
			    datasets: [
			      { 
			        data: pop,
			        label: "Population",
			        backgroundColor	: "#B5FF9F",
			        
			        //fill: false
			      },
			      { 
			        data: Tom_M,
			        label: "tommato",
			        backgroundColor: "#E5FF9F",
			        //fill: false
			      }
			    ]
			  }
			});
else if(b==2 & c==3)
		var myChart5 = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: States,
			    datasets: [
			      { 
			        data: Pop_S,
			        label: "Population",
			        backgroundColor	: "#B5FF9F",
			        
			        //fill: false
			      },
			      { 
			        data: Tom_S,
			        label: "tommato",
			        backgroundColor: "#E5FF9F",
			        //fill: false
			      }
			    ]
			  }
			});

	
}

