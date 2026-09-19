menu = ["espresso", "mocha", "latte", "cappuccino", "cortado", "americano"]

def find_coffee(coffee):
    if coffee[0] == "c":
        return coffee

my_coffee = map(find_coffee, menu)
for x in my_coffee:
    print(x)