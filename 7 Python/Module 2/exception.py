def divide(a, b):
    return a / b

try:
    print(divide(40, 0))
except ZeroDivisionError as e:
    print(e, "We can't Divide by 0")
except Exception as e:
    print("Something went wrong", e)
    print(e.__class__)