my_tuple = (1, "string", 13.2, True)
print(my_tuple)
print(my_tuple.count(1))  # It will just print how many time 1 is in tuple
print(my_tuple.index(13.2)) # It will print index of element "True"

for i in my_tuple:
    print(i)