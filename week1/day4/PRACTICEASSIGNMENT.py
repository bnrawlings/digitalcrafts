toDo = []
response = ""
mainMenu  = """
Choose an action:
press 1 to add task
press 2 to delete task
press 3 to view all task
press q to quit

"""
while response != "q":
    response = input(mainMenu)
    if response == "1":
        add_task = input("Enter your task "" ")
        add_priority = input("Enter priority, ex. high, med, low "" ")
        newTasklist = add_task + " " + add_priority 
        toDo.append(newTasklist)
        print(toDo)

    if response == "2":
        print("This is Your To Do list :", toDo)
        taskToDelete = int(input("Which task would you like to delete?")) - 1
        del toDo[taskToDelete]
        print("You task has been deleted ")
        print(toDo)

    
    if response == "3":
       print("This is Your To Do List\n", toDo) 