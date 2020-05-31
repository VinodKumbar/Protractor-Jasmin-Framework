function car(){
	
	this.firstinput = element(by.model("first"));
	this.secondinput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.result = element(by.css("h2[class='ng-binding']"));
	
	this.color ="Blue";
	this.engine = "Turbo";
	this.brand = "Benz";
	this.search = "by.css('input')";
	
	this.getModel=function(){
		console.log("This is 2020 Model");
	};
	
	this.getURL = function(){
		browser.get('https://juliemr.github.io/protractor-demo/');
	};
};

/*var a = new car();
a.getModel();*/

module.exports= new car();
