describe('Protrator Element Demo', function() {
	
	it('Locators', function() {
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("10");
		element(by.model("second")).sendKeys("33");
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()
		.then(function(text){
			console.log("The Output is "+ text);
			
		})
		
		
	})
	
	
		
})
	
	
