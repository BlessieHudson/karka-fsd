# def add():
#     a=int(input("Enter the value of a: "))
#     b=int(input("Enter the value of b: "))
#     c=a+b
#     print("Before Execution")
#     return c
#     print("After Execution")
# result=add()
# print(result)
# # print(add())
# # print("end")
def add(a,b):
    c=a+b
    return c
a=float(input("Enter the value of a: "))
b=float(input("Enter the value of b: "))
ans=add(a,b)
print(ans)