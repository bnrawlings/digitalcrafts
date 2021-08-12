greeting = input("""
     What would you like to do?
     Press 1 to Create a new List
     Press 2 to add an Item to a List
     Press 3 to display your Lists
     Press 4 to Exit
                """
    )
print(greeting)    



class ShoppingList:
    newShoppingList = []
    def __init__(self, store_title, address=None):
        self.store_title = store_title
        self.address = address
        
    def addNewList():
        newList = input("Enter Store Name: \n")
        newList2 = input("Enter Store Address\n")
        newShoppingList = []
        newShoppingList.append(ShoppingList(newList + newList2))

    def addItem():
        newItem1 = input("What item would you like to add?\n")
        newItem2 = input("What is the price?\n")
        newItem3 = input("what is the quantity?\n") 
        newAddedItem = []
        newAddedItem.append(ShoppingList(newItem1 + newItem2 + newItem3))   
        
      
addedShoppingList = ShoppingList




while greeting != "4":
    if greeting == "1":
        addedShoppingList.addNewList()
        #print(addedShoppingList)
        print(greeting)

    if greeting == "2":
        addedShoppingList.addItem()
        print(addedShoppingList)

    break