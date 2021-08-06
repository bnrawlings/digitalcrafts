list1 =[]
tuple1 = ()
dogs_list = ["pug", "frenchie", "doberman"]
iwanttopettheDog = dogs_list[1]
#print(iwanttopettheDog)
#peteveryDogupTofrenchie = dogs_list[0]
#print(peteveryDogupTofrenchie)

startingpoint = 3
#print(dogs_list[startingpoint])

#count = 0
#while startingpoint < 10:
    #print(dogs_list[count], count, startingpoint)
    #count = count + 1
    #startingpoint += 1

for dogs in dogs_list:
    print(dogs)

#built in functions 
# print()   
#input()
#int()
#del something

#creating functions
#1. def
#2. name of the function
#3. Parenthesis
#4. colon :
#5 return statement
# Parameters are what you call ANYTHING that goes inside of the parenthesis
#when you define a function
#parameters can be named whatever you want, like a variable.
#it is like you are defining a variable for the function to use in its function body
#Can define multiple ones by using a comma

def addTwonNumbers():
    #function body
    num1 = 20
    num2 = 30
    #sum = num1 + num2
    #return sum
    return num1 + num2

#In order to call the functiom
# write the function name, then opn and close ()
# print(addTwonNumbers())    

def addTwonNumbers(num1, num2):
    #function body
    
    #sum = num1 + num2
    #return sum
    return num1 + num2
print(addTwonNumbers(20, 30))    

#arguments are what you call values you put in a function (), when you
#invoke a function