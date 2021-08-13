choice = ""

while True:
    if choice == "1":
        dragon.takeDamage(30)
    if dragon.health < 50:
        print("He's still alive, attack again!", roundOne)
    if choice == "2":
        witch.takeDamage(30)
        titan.takeDamage(30)
        print("You must fight or we will all DIE")
        break


 choice = ""
    choice = input(theFight)
     
    while choice is != "":
        if choice == "1":
         dragon.takeDamage(30)
         print("You did some damage but the Dragon's health is,")
         print(dragon.health)
         print("He's still alive, attack again!")
         print(input(theFight))
   
        elif choice == "2":
         witch.takeDamage(30)
         titan.takeDamage(30)
         print("You must fight or we will all DIE")
         print(input(theFight))
        

        elif choice == "3":
         print("Your health is at:")
         print(witch.health)
         print(input(theFight))
         
    
        
        if dragon.health <= 40:
    
            break  
     
      

choiceMenu()

print("HAZAH, YOU'VE DEFEATED THE DRAGON!!!") 

user_response = ""
while user_response != "1" or user_response != "2" or user_response != "3":

    #This breaks the code if someone dies.
    if dragon.health <= 40 or witch.health <= 40 or titan.health <= 40:
        user_response == "0"
        break
    #This determines when the villain attacks
    attack_chance = random.randint(1, 10)

    user_choice = input("""
    What would you like to do, %s?\n
    Press 1 to attack %s\n
    Press 2 to run away...that's probably your best bet.\n
    Press 3 to eat some apples to rebuild your health.\n
    Press x to exit, or if you're a weenie.\n 
    """ % (user_name, villain.name))


    if hero.health == 0 and villain.health == 0:
        print("Well now you've killed each other\nAt the same time\nThat's some Monty Python BS right there")
        user_choice == "x"
        break

    elif user_choice == "1":
        hero.deal_damage()
        if attack_chance >= 6 and villain.health > 0:
            hero.hero_lose_health()

   
    elif user_choice == "2":
        hero.hero_runaway()

    elif user_choice == "3":
        hero.hero_eat_apples()
        

    elif user_choice == "x" or user_choice == "X":
        print("Weenie.")
        break
    
    else: 
        print("That's not an option\nYou unsalted pretzel.")
