describe('Protrator Drop Down Demo', function() {
	function Calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
				
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(values){
				//console.log("The Name of Calc Operatios are  "+values);
				
				if(values==c){
					item.click();
				}
			})
		})
		
		element(by.id("gobutton")).click();
	}
	
	it('Locators', function() {
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		Calc(10,3, "MULTIPLICATION");
		Calc(100,10,"DIVISION");
		Calc(10,6,"ADDITION");
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);				
			})
		})	
				
	})	
	
		
})
	
	
