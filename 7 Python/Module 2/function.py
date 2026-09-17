def calculate_tax(bill, tax_rate):
    return round((bill * tax_rate) / 100.00, 2)

print("You have to pay:", calculate_tax(2700, 13))
print("You have to pay:", calculate_tax(120, 7))