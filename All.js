describe('Protrator Element Demo', function() {
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
		
	}
	
	it('Locators', function() {
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		Add(30,7);
		Add(30,8);
		Add(30,9);
		Add(30,10);
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log("The Count is  "+text);
		})
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log("Addition of 2 number is "+text);				
			})
		})
		
		
	})	
	
		
})
	
	
