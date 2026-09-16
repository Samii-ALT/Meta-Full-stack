Bill = int(input("Enter your Bill: "))
Discount1 = 10
Discount2 = 20
if Bill > 100 and Bill < 200:
    print("Bill is greater than 100!")
    Bill = Bill - Discount1
elif Bill >= 200:
    print("Bill is greater than 200!")
    Bill = Bill - Discount2
else:
    print("Your Bill is less than 100")

print("To Pay: "+str(Bill))
