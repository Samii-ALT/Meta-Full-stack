def sum_of(*args):
    sum = 0
    for i in args:
        sum = sum+i
    return sum
print(sum_of(1, 5, 45, 76, 8))