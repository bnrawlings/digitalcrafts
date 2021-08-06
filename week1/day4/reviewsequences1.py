list1 = [1,2,3,4,5]
total = 0

for nums in range (0, len(list1)):
    total = total + list1[nums]
print("The Sum is: ", total) 


list2 = [17, 4, 19, 62, 8]
list2.sort()
print("Largest number is:", list2[-2])


list3 = [17, 4, 19, 62, 8]
list3.sort()
print("Smallest number is:", list2[1])

list4 = [19,3,78,4,20]
for nums in list4:
    if nums % 2 == 0:
        print(nums, end = " ")

list5 = [0,9,7,5,43]
great = 0
index = 9, 7, 5, 43
for great in list5:
    if index > great:
        great = great + 1
print("The numbers greater than zero: " + str(great))        



