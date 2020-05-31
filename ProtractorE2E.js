describe('Protrator Practice End to End', function() {
	
	function selectItems(product){
		/*
		 * take all 4 app cards into list
		 * traverse through each index in the list - and get the title, if title =desired title then
		 * in that index will select add button */ 
		
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text){
				if(text=="Samsung Note 8"){
					item.element(by.css("button[class*='btn btn-info']")).click();
				}
			})
		})
	}
	it('Locators', function() {
		
		browser.get('https://rahulshettyacademy.com/angularpractice/');
		browser.driver.manage().window().maximize();
		element(by.name("name")).sendKeys("Vinod Kumbar");
		element(by.css("input[name='email']")).sendKeys("vnkumbar@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("vk@123$$");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Male")).click();
		element.all(by.name("inlineRadioOptions")).get(1).click();
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
			})
		})
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("V").then(function(){
			element(by.css("[class='alert alert-danger']")).getText().then(function(text){
				console.log(text);
			})
		})
		
		element(by.linkText("Shop")).click();
		selectItems("Samsung Note 8");
		selectItems("iphone X");
		
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			var res = text.split("(");
			
			// convert string as Interger
			var x = Number(res[1].trim().charAt(0));
			var y = x + 1;
			console.log(y);
			expect(res[1].trim().charAt(0)).toBe("2");
			//expect(res[1].trim().charAt(0)).toBe(y);
		
		})
	
	})
	
})
	
	
