from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the little lemon restaurant")

def Dishes(request, name):
    Items = {
        "Cake": "A type of desert usually eaten on birthdays and special occions",
        "Pasta": "Type of noodles made by eggs weat nd other spies",
        "Pizza": "Round shape dish made with weat with different types of toppings"
    }

    discription = Items[name]
    return HttpResponse(f"<h1> {name} </h1>" + discription)

def drinks(request, drink_name):
    drink = {
        "mocha": "Type of coffee",
        "tea": "Type of bevarage",
        "lemonade": "Type of refreshment"
    }
    choice_of_drink = drink[drink_name]
    return HttpResponse(f"<h2> {drink_name} </h2>" + choice_of_drink)