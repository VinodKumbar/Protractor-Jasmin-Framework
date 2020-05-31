var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementsBasics.js'],  
  
  onPrepare: function() {
	  
	  browser.driver.manage().window().maximize();
	  
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		    );
  },
  
  suites:{
	  Smoke: ['ChainLocators.js','DropDowns.js' ],
  	  Regression: 'ElementsBasics.js',
	  
  },
  
  jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	  }
  
   /*capabilities: {
	  'browserName': 'firefox'
	}*/
  
};