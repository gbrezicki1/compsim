def example_function(x, y):
    if x > y:
        print(f"{x} is greater than {y}")
    else:
        print(f"{x} is less than or equal to {y}")
    for i in range(0, 10):
        print(i, end=", ")
    return x + y


def another_function(a, b, c):
    result = a * b + c
    if result > 100:
        print("Result is greater than 100")
    else:
        print("Result is 100 or less")
    return result
