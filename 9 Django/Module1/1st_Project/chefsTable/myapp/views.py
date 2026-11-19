from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the little lemon restaurant")

def menu(request):
    text = """<h1 style = "color: red;"> This is little lemon again<h1>"""
    return HttpResponse (text)
