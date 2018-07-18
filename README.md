# bamazon

## This app will take orders from customers and deplete stock from the store's inventory.

* The user is shown a table of products to buy.

    The Product Table at Start Up:
    ![Product Table at Start Up](/images/bamazon_StartUp.JPG)

* The user is asked if he or she would "like to [BUY] an item or [QUIT] or quit the app?"

* If the user selects BUY, then the user is asked, "Select the ID of the product you would like to buy?"

    The User Selects the Product with the ID of 3:
    ![Selecting Product with ID = 3](/images/bamazon_SelectID3.JPG)


* After the user selects the ID of the product he or she would like to buy, the user then enters the
number of units of the product he or she wishes to buy.

    Buying 4 Units of the Product:
    ![Buying 4 Units of the Product](/images/bamazon_Buy4Units.JPG)

* If the user enters a number of units of the product to buy that is less than or equal to the current
quantity of that item in the store, the quantity of that item in the store is reduced by the units the
user requested to buy, the total cost of the purchase is displayed to the user, and the message that the order was successfully placed is displayed.

    The Total Cost Displayed:
    ![Total Cost Message](/images/bamazon_Successful_Purchase_A.JPG)

    The Product Table with the Quantity of that Item Reduced:
    ![Product Table with Reduced Quantity](/images/bamazon_Successful_Purchase.JPG)



* If the user enters a number of units of the product to buy that is greater than the current quantity of that
item in the store then the user get a message that there is insufficient quantity to meet the user's request and
the user is brought back to the buy or quit menu.

    Ordering More of the Product that is In-Stock - Before the Order is Placed:
    ![Ordering More than is in In-Stock - Before](/images/bamazon_QuantityRequestedExceedsWhatsInStock.JPG)

    Ordering More of the Product that is in Stock - Insufficient Quantity Message:
    ![Ordering More than is in In-Stock - Message](/images/bamazon_QuantityRequestedExceedsWhatsInStock2A.JPG)

    Ordering More of the Product that is in Stock - Buy or Quit Option Brought Up After Insufficient Quantity Order:
    ![Buy or Quit Option Brought Up After Insufficient Quantity](/images/bamazon_QuantityRequestedExceedsWhatsInStock2.JPG)


* If the user selects QUIT, then the user is displayed the message,"The user has quit the app" and the
app is ended.

    Selecting Quit:
    ![Selecting Quit](/images/bamazon_Quit.JPG)

    The Quit Message:
    ![Quit Message](/images/bamazon_Quit2.JPG)

