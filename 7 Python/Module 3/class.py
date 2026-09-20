class MyClass:
    a = 5
    print("Testing")
    def Hello(self):   # This will not work with mycl : def Hello()
        print("Hello, World")

mycl = MyClass()
print(mycl.a)  # or print(MyClass.a)
print(mycl.Hello())