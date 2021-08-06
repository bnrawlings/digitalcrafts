#Exercise1
#ogAvengers = ["Captain America", "Thor", "Iron Man", "Black Widow", "Hulk"]
#ogAvengers.append("Hawk Eye")
#print(ogAvengers)

#del ogAvengers [2]
#print(ogAvengers)

#ogAvengers.insert(1,"Black Panther")
#print(ogAvengers)

#Exercise2
#for i in range(1,101):
    #print(i)

#for i in range(1,101):
    #if i % 3 == 0 and i % 5 == 0:
        #print("BUZZ FIZZ")
    #elif (i % 3) == 0:  
        #print("FIZZ") 
    #elif (i % 5) == 0: 
        #print("BUZZ")

    #else: 
        #print(i)

#Exercise3
array1 = [0,1,0,3,12]
#array2 = [1,7,0,0,8,0,10,12,0,4]     

for num in array1:
    if num == 0:
        array1.remove(0)
        array1.append(0)
        print(array1)


