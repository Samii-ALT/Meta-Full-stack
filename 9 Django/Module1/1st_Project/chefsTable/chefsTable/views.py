from django.http import HttpResponse

def handler404(request, exception):
    return HttpResponse("<h1> 404: Page not Found</h1> <button> Go back to homepage </button>")