list1 = [1, 2, 3, 4, 5]
list2 = ['A', 'B', 'C']
list3 = ["Hello", 5, 12.3]
list4 = [1, 2, [3, 4], 5]

list1.append(6)  # This will add 6 at last of list1
list2.insert(len(list2), 'D') #This will add D at index of 3 at list2
list3.extend([12, "SAMI", "hi"])  #This will extend list 3 3ith these 3 elements
list4.pop(3) # Remove element index of 3


print(list3, sep=" ")