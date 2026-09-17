# global variable
global_v = 10

def Scopess():
    enclosed_v = 5
    def inner():
        local_v = 2
        print("Global:", global_v)
        print("Enclosed:", enclosed_v)
        print("Local:", local_v)
    inner()

Scopess()

    