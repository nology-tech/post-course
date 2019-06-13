# AJAX Data Table (JavaScript)

Looking for: JavaScript, logic, readability, structure, defensiveness

Time allocation: Approximately 55 minutes

---

Using the URL below, request data from the API and display it on the page in a tabular format:

http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air

Use any libraries/frameworks you wish.

Display the following data for each offer:

-   Merchant logo
-   Merchant name
-   Product name
-   Product price (and currency)
-   Product link

Data structure hints:

-   widget.data.offers - An array of offers available for the iPad Ai\*
-   widget.data.offers[x].offer - Contains name, price, currency, link, etc for the product\*
-   widget.data.offfers[x].merchant - Contains name, logo URL, ID, etc for the merchant of the offer
