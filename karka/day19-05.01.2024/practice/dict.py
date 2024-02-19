# list=[
#              {
#                  "name"  :   "Sanjay",
#                  "age"   :   "22",
#                  "degree":   ["BE","BSc"],
#                  "hobbies":   ["Playing","Cooking"],
#                  "place" :  "NGC"
#             },
#              {
#                  "name"  :   "Siva",
#                  "age"   :   "24",
#                  "degree":   ["BSC","MBA"],
#                  "hobbies":   ["Listening Music","Coding","Cooking"],
#                  "place" :  "Vadasery"
#             },
#             {
#                  "name"  :   "Hari",
#                  "age"   :   "26",
#                  "degree":   ["B.Tech","BSc"],
#                  "hobbies":   ["Browsing","Playing"],
#                  "place" :  "KK"
#             },
#             {
#                "name"  :   "Ajay",
#                  "age"   :  "25",
#                  "degree":   ["BA","B.Tech"],
#                  "hobbies":   ["Coding","Cooking","Playing"],
#                  "place" :  "KK"
#             }
#         ]
# for i in list:
#     # print(i["name"]) 
#   if ("BE" in i["degree"] or "Coding" in i["hobbies"]) and "KK" in i["place"]:
#     print(i["name"]) 
# else:
#     print("not found")
# list={
#                  "name"  :   "Sanjay",
#                  "age"   :   "22",
#                  "degree":   ["BE","BSc"],
#                  "hobbies":   ["Playing","Cooking"],
#                  "place" :  "NGC"
#             }
# print(list["degree"][0])


# x=[0,1,2,0,3,0]
# y=[]
# for i in x:
#     if i==0:
#         x.remove(i)
#         x.append("*")
#     # else:
#     #     y.append('*')
# print(x)



# x=[0,1,2,0,3,0]
# y=[]
# for i in x:
#     if i!=0:
#         y.append(i)
# # for j in x:
#     if i==0:
#         y.append(0,"*")
# print(y)


# # a=5
# # def dis():
# #     a=10
# # # dis()
# # print(a)
# # dis()

# pn=0
# for i in range(10):
#     sum=i+pn
#     print(i,pn,sum)
#     pn=sum

# even=0
# odd=0
# for i in range(10,55):
#     if i%2==0:
#         even+=1
#     if i%2==1:
#         odd+=1
# print(even)
# print(odd)
list=[2,3,42,2,2,2,5,6,6,5,5]   
a=[]
for i in range(0,len(list)):
    duplicate=False
    for j in range(0,len(a)):
        if list[i]==a[j]:
            duplicate=True
    if duplicate==False:
        a.append(list[i])
print(a)
# a=[5,10,15,20,25,5,10,1,2,1,2]
# b=[]
# for i in range(0,len(a)):
#     duplicate=False
#     for j in range(0,len(b)):
#         if(a[i]==b[j]):
#             duplicate=True
#     if(duplicate==False):
#         b.append(a[i])
# print(b)

