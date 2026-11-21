from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the little lemon restaurant")

def menu(request):
    text = """<h1 style = "color: red;"> This is little lemon again<h1>"""
    return HttpResponse(text)

def pathing(request):
    Path = request.path
    return HttpResponse(Path, content_type='text/html', charset='utf-8')

def work(request):
    return HttpResponse("This page is working!")

def using_variables(request):
    path = request.path
    scheme = request.scheme
    method = request.method
    address = request.META['REMOTE_ADDR']
    user_agent = request.META['HTTP_USER_AGENT']
    path_info = request.path_info

    msg = f"""<br>
            Path = {path} <br>
            Scheme = {scheme} <br>
            Method = {method} <br>
            Adress = {address} <br>
            User agent = {user_agent} <br>
            Path information = {path_info}
            """
    return HttpResponse(msg, content_type='text/html', charset='utf-8')