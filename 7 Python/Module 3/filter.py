menu = ["espresso", "mocha", "latte", "cappuccino", "cortado", "americano"]

def find_coffee(coffee):
    if coffee[0] == "c":
        return coffee

my_coffee = filter(find_coffee, menu)
for x in my_coffee:
    print(x)


# The basic difference of filter and map is that map return existing list and filter creates a new list.