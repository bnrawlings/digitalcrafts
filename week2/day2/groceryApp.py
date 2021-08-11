greeting = input("""
     What would you like to do?
     Press 1 to Create a new List
     Press 2 to add an Item to a List
     Press 3 to display you Lists
     Press 4 to Exit
                """
    )
print(greeting)    



class ShoppingList:
    newShoppingList = []
    def __init__(self, store_title, address):
        self.store_title = store_title
        self.address = address

    def addNewList(cls):
        newList = input("Enter Store Name and Address \nex. CVS, 7513 Hunter Ln\n")
        cls.newShoppingList.append(ShoppingList(newList))

ShoppingList.addNewList
print(ShoppingList)


while greeting != "4":
    if greeting == "1":
        ShoppingList.addNewList
        print(greeting)
