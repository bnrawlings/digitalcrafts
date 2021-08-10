#Intro into classes
# a classes is a more advanced dictionary that can house information, 
# methods or functions and can be replicated

#List ["can", 123, {}]
#Dictionary {"key" : "value"}
#Tuple (142534427384, 1272553882)

#you define a class with the keyword "class", followed by the name of the class

class Person:
    #constructor, is a blueprint/model for your class. This is the intializer to your function!
    #you define the constructor like a function
    #you will us the keyword __int__ as the name, make sure to include ()
    #you will use the keyword self (self)
    #set parameters then assign as the value to your self. variable
    def __int__(self, name, hairColor, age):
        self.name = name
        self.hairColor = hairColor
        self.age = age

#First we must instantiate a class and assign it a variable
joe = Person() #define this persons parameters within the parenthises

#to access use dot notation
print(joe.name)

# code to show how someone can take damage and we can run a scenario based on class attribute
#while True:
    #joe.takedamage(1)





# def getAge():
    #Joesage = 10
    #return Joesage

   #age = getAge()
   #print(age) 