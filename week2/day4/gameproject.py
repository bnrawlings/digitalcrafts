


class Hero:
    def __init__(self, name, type, health, weapon):
        self.name = name
        self.type = type
        self.health = health
        self.weapon = weapon

    def takeDamage(self, damageAmount):
        self.health -= damageAmount    

    def getHealth(self, powerUp):
        self.health += powerUp   

 
            
witch = Hero("The Sorceress", "witch", 100, "Strength Spell")
titan = Hero("The Titan", "demi-god", 100, "AK-47")


class Villain:
    def __init__(self, name, type, health):
        self.name = name
        self.type = type
        self.health = health

    def takeDamage(self, damageAmount):
        self.health -= damageAmount    

    def getHealth(self, powerUp):
        self.health += powerUp     

dragon = Villain("Puff the Magic Dragon", "dragon", 100) 



startmenu = input("""
Hazah!!! You've arrived! 
Puff the Magic Dragon has terrorized our village for days and we need your help!!!
What shall we call you?\n
""")
print("Hello", startmenu, "!")

heroMenu = (''' 
.....and WHAT are you?!
Select 1 for Witch
Select 2 for Titan
Select 0 to quit
''')

response = ""
response = input(heroMenu)
while response != "1" or "2":
    if response == "1":
        print("Ahh a sorceress! Use your magic and defet the dragon!!")
        print(startmenu, witch.name) 

    if response == "2":
        print("The Gods have blessed us with a mighty Titan, go defeat the dragon!!")
        print(startmenu, titan.name) 

    if response == "0":
        print("Farewell Coward!!")

    

    else:
        print("LOOK THE DRAGON IS COMING!!!!")    
    break


def choiceMenu():
    theFight = ("""
What would you like to do?
Select 1 to Attack
Select 2 to Run
Select 3 to View Health
Select 0 to Leave This Place
""")

    user_response = ""
    while user_response == "1" or user_response == "2" or user_response == "3":


        if dragon.health <= 40 or witch.health <= 40 or titan.health <= 40:
            user_response == "0"
        break



    user_response = input(theFight)
  

    if witch.health or titan.health <=40:
            print("RIP Try Again")
    if dragon.health <=40:
            print("HAZAH, YOU'VE DEFEATED THE DRAGON!!!")
        
        
    elif user_response == "1":
             dragon.takeDamage(30)
             print("You did some damage but the Dragon's health is,")
             print(dragon.health)
             print("He's still alive, attack again!")
             

    elif user_response == "2":
            witch.takeDamage(30)
            titan.takeDamage(30)
            print("You must fight or we will all DIE")
            
 

    elif user_response == "3":
            print("Your health is at:")
            print(witch.health)
             

    elif user_response != "0" or "!" or "2" or "3":
            print("Please Select 1, 2, or 3")
                  

    else:
        user_response = "0"
        print("Farewell Coward")
        

    
            


choiceMenu()






    
   




    
   