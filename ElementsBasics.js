describe('Protrator Element Demo', function() {
	var obj = require("./JsObjectsDemo.js");
	var using = require('jasmine-data-provider');
	var d = require("./data.js");
	
	
	beforeEach(function(){
		obj.getURL();
	});
	
	// data stores actual data
	// description stores sub object name
	// for every iteration one data set is picked
	using(d.Datadriven, function (data, description) {
		
		it('Testing Calculator Functionalities ' + description, function() {	
			
			
			obj.firstinput.sendKeys(data.firstinput);
			obj.secondinput.sendKeys(data.secondinput);
			obj.goButton.click();
			
			//Jasmine takes care of Promise Resolve
			//1. expect(true).toBe(true); - string
			
			expect(obj.result.getText()).toBe(data.result);
			
			//2. expect(false).not.toBe(true);
			// var a = 13;
			// 3. expect(a).not.toBe(null) 
			// 4. expect(a).toEqual(12) - integers
			// 5. expect(message).toMatch(/bar/)
			// 6. expect(message).not.toMatch(/bar/) 
			
			obj.result.getText().then(function(text){
				console.log(text);
				
			})
			
			
			
		})
        
        });
	
	
	
	afterEach(function (){
		console.log("Test Completed: Delete Cookies");
	});
		
})
	
	
