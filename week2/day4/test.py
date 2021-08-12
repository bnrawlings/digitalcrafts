choice = ""

while choice is !=  "0":
    if choice == "1":
        dragon.takeDamage(30)
    if dragon.health < 50:
        print("He's still alive, attack again!", roundOne)
    if choice == "2":
        witch.takeDamage(30)
        titan.takeDamage(30)
        print("You must fight or we will all DIE")
        break
