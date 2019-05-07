# Webservice Documentation
This is brief documentation for the recruitment webservice. Anything not listed here you are expected to diagnose or reverse engineer yourself.

## Your Aim
1. Using the webservice list the products that are available.
2. Handle any errors
3. For each insurance product returned, get more infomration and display

## Basics
The webservice can be accessed at https://www.itccompliance.co.uk/recruitment-webservice/api/ and provides 2 methods list and info. Append the method names to the URL to use them.

### List
Returns a list of insurance products as a json array in the form {"products": {"id": "name", "id": "name"}}

### Info
Gets information about a specific insurance product as a json array in the form {"id": {"name": "...", "description": "...", "type": "...", "suppliers": ["name", "name"]}}. Add the product ID as a query string like ?id=...

## Known Issues
Unfortunately this data is retrieved from an unreliable source and the webservice may return an error. When this occurs, simply re-try the request until it succeeds.
Data is provided directly from a third-party and should be sanitised. 
 
What we are looking for:
* OOP skills demonstrated
* No Frameworks
* Separation of front end and backend code
* Nice to have would be to follow PSR2 standards

