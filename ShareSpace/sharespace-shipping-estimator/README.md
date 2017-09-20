## Sharespace Shipping Cost Estimator
## Instructions for running
1. Clone repo
2. npm install
3. npm start

## Instructions for testing
1. npm test

### Features
* Material UI Design
* Add items
* Remove items
* Update Distance and recalculate prices
* Calculate item price
	* Use product dimensions, distance, and type
	* Assumptions
		* Can rotate all items but couch
		* Couch only uses the length and width to calculate area
* Calculate total price
* Verify inputs
	* Non-numerical characters not allowed
	* Inputs less than 0 and greater than 60' are not allowed
* Info button for clarification on any fields
* All functional subcomponents functional controlled components
* Basic testing suite built w/ Jest