class Receipe:
    def __init__(self, dish, items, time):
        self.dish = dish
        self.items = items
        self.time = time

    def contents(self):
        print("The " + self.dish + " contains " + str(self.items) + \
              " and takes " + str(self.time) + " minutes to prepare")

pizza = Receipe("Pizza", ["cheeze", "Bread", "tomato"], 45)
pasta = Receipe("Pasta", ["ceuce", "idk"], 45)

print(pizza.contents())