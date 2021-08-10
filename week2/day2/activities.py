





class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


# player1 = User ("Britt", "Rawlings")
# player2 = User ("Kaylee", "Matthews")
# print(player1.first_name)


class Address(User):   
    def __init__(self, first_name,last_name, street, city, state, zip_code):
        super().__init__(first_name,last_name)
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code
        self.address = []

    
    
      

