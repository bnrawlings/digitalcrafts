#list

#to_do_list = ["yardwork", "party", "eat better", "sleep", "become coder", "walk dog"]
#print(to_do_list)

#kids_ages = [20, 10, 40]

#these_are_my_variables = [variable1, variable2, variable3]

#multiple_data_types = ["Troy", 7, mystery_variables]

#indexes (positions, seat number, indentify)
#zero-based

#print(to_do_list[2] )

#try:
    #print(to_do_list[5])
#except IndexError:
    #print("that item doesn't exist")    


#slice index example print(todo_list[1:2])   
#to_do_list [starthereAndIncludethisvalue:endhereDontinclude the value] 

#print(to_do_list[-2:#leavingThis Blank Allows it to go all the way to the end])

#print(len(to_do_list))

#index = 0
#count = index + 1

#while index < len(to_do_list):
    #todo = to_do_list[index]
    #print("You need to do this:" + str(count), todo)
    #index = index + 1
    #count = count + 1

# INTIAL STATE, CONDITION, CODE BLOCK

#for todo in to_do_list:
    #print(todo)

#print(to_do_list[1])

#to_do_list[1] = "shower" 
#print(to_do_list)


list5 = [66,9,7,5,43]
great = [0]
print ("The list : " + str(list5))
count = 0
for high in list5:
    if high > great:
        count = count + 1
print("The numbers greater than zero: " + str(count)) 
