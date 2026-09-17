def sum_of(*kwargs):
    sum = 0
    for i, j in kwargs:
        sum = sum+j
    return round(sum, 2)

print(sum_of(coffee=2.99, cake=7.34, juice=2.5))