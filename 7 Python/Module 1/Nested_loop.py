import time

start_time = time.time()

# outer Loop
for i in range(100):
    # inner loop
    for i in range(100):
        print("0", end=" ")
    print()


print(time.time() - start_time)