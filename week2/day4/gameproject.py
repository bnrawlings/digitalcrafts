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


def choiceMenu():
    witch = ""
    titan = ""

    heroMenu = ('''
.....and WHAT are you?!
Select 1 for Witch
Select 2 for Titan
Select 0 to quit
''')

    response = input(heroMenu)
    theFight = ("""
What would you like to do?
Select 1 to Attack
Select 2 to Run
Select 3 to View Health
Select 0 to Leave This Place
""")

    if response == "1":
        witch = Hero("The Sorceress", "witch", 100, "Strength Spell")
        print("Ahh a sorceress! Use your magic anddefet    thedragon!!")
        print(startmenu, witch.name)
    else:
        titan = Hero("The Titan", "demi-god", 100, "AK-47")
        print("The Gods have blessed us with a mightyTitan,go  defeat the dragon!!")
        print(startmenu, titan.name)
    print("LOOK THE DRAGON IS COMING!!!!")
    while True:
        user_response = input(theFight)
        if dragon.health <= 40:
            print("HAZAH, YOU'VE DEFEATED THE DRAGON!!!")
            break
        if user_response == "1":
            dragon.takeDamage(30)
            print(
                f"You did some damage but the Dragon's health is, {dragon.health}\nHe's still alive, attack again!")
        elif user_response == "2":
            if witch != "":
                if witch.health <= 0:
                    print("Noble Witch,You are dead")
                    break
                else:
                    print(
                        f" {witch.health}")
                    witch.takeDamage(30)
                    print(
                        f"You must fight or we will allDIE\n You took 30 damage andhave {witch.health} remaining")
            else:
                if titan.health <= 0:
                    print("Noble Titan,You are dead")
                    break
                else:
                    titan.takeDamage(30)
                    print(
                        f"You must fight or we will allDIE\nYou took 30 damage and have{titan.health} remaining")
        elif user_response == "3":
            if witch != "":
                if witch.health <= 0:
                    print("Noble Witch,You are dead")
                    break
                else:
                    print("Your health is at:")
                    print(witch.health)
            else:
                if titan.health <= 0:
                    print("Noble Titan,You are dead")
                    break
                else:
                    print("Your health is at:")
                    print(titan.health)
        elif user_response == "0":
            print("Farewell Coward")
            break
        else:
            print("Please select a valid choice from the menu")


choiceMenu()



















