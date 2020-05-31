describe('Protrator baby steps', function() {
	
	it('Open Angular JS Website', function() {
		
		// write your rraw protractor code
		// browser.get() - will hit URL on Browser (by default om Chorme Broswer)
		// Each it block will be called as a Spec
		
		browser.get('https://angularjs.org');
		
		browser.get('https://juliemr.github.io/protractor-demo/').then(function(){
		
			console.log("I am the last step to execute");
			
		})
		
		
	})
	
	it('Close Angular JS Website', function(){
		
		// write your code to close Website
		
	})
	
	
})

// describe block
// 1st parameter - Test Suite Name
// 2nd parameter - Function (function will have all test (it blocks))

//it block
// 1st parameter - Test Case Name
// 2nd parameter - Function (Write your Protractor Code)
