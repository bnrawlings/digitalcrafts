


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


class Villian:
    def __init__(self, name, type, health):
        self.name = name
        self.type = type
        self.health = health

    def takeDamage(self, damageAmount):
        self.health -= damageAmount    

    def getHealth(self, powerUp):
        self.health += powerUp     

dragon = Villian("Puff the Magic Dragon", "dragon", 110) 



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


while True:
    roundOne = ("""
What would you like to do?
Select 1 to Attack
Select 2 to Run
""")

    choice = ""
    choice = input(roundOne)


    if choice == "1":
        dragon.takeDamage(30)
        print("He's still alive, attack again!")
    if dragon.health < 50:
        print("He's weak!! Keep Attacking!!")
    if choice == "2":
        witch.takeDamage(30)
        titan.takeDamage(30)
        print("You must fight or we will all DIE")

    if dragon.health < 40:
            
        break
           

# choice = ""
# choice = input(roundOne)
# while True:
#     if choice == "1":
#         dragon.takeDamage(30)
#     if dragon.health < 50:
#         print("He's still alive, attack again!")
#         break
#     if choice == "2":
#         witch.takeDamage(30)
#         titan.takeDamage(30)
#         print("You must fight or we will all DIE")
#         break

    # else:
    #     print("HAZAH, YOU'VE DEFEATED THE DRAGON!!!") 
    #     break   
    