# age=[71,12,18,23,81,24,32]
# b=[]
# for i in range(len(age)):
#     if (age[i]>=18):
#         b.append(age[i])
# print(b)

# age=[71,12,18,23,81,24,32]
# b=[]
# for i in range(len(age)):
#     if (age[i]>=18)and(age[i]%2==0):
#         b.append(age[i])
# print(b)

# tamil=int(input("Enter Tamil Mark:"))
# eng=int(input("Enter English Mark:"))
# mat=int(input("Enter Maths Mark:"))
# sci=int(input("Enter Science Mark:"))
# ss=int(input("Enter ss Mark:"))
# def sum():
#     tamil=int(input("Enter Tamil Mark:"))
#     eng=int(input("Enter English Mark:"))
#     mat=int(input("Enter Maths Mark:"))
#     sci=int(input("Enter Science Mark:"))
#     ss=int(input("Enter ss Mark:"))
#     total=tamil+eng+mat+sci+ss
#     avg=total/5
#     print("Total Marks:",total)
#     print("Average:",avg)
# sum()
# result=sum()
# print(result)



# for i in range(1,31):
#     if(i%3==0) and (i%5==0):
#         print("FizzBuzz")
#     elif(i%3==0):
#         print("Fizz")
#     elif(i%5==0):
#         print("Buzz")
#     else:
#         print(i)


# a=[]
# c=0
# for i in range(5):
#     b=int(input("Enter the value:"))
#     a.append(b)
#     # c=c+a[i]
#     c+=a[i]
# print(a)
# print(c)

# a=[5,110,15,20,25]
# max=a[0]
# for i in range(0,len(a)):
#     if(a[i]>max):
#         max=a[i]
# print(max)


# a=[]
# max=0
# for i in range(5):
#     b=int(input("Enter the value:"))
#     a.append(b)
#     if(a[i]>max):
#         # max=0
#         max=a[i]
# print(max)



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


# a=[5,10,15,20,25,5,10,1,2,1,2]
# b=[]
# for i in a:
#     if a.count(i)==1:
#         b.append(i)
# print(b)


profiles=[
             {
                 "name"  :   "Blessie",
                 "DoB"   :   "09.01.1990",
                 "Degree":   "M.Sc.,M.Phil",
                 "Phone" :   "9487476840",
                 "Skills":   ["Teacher","Chef"]
            },
             {
                "name"  :   "Hudson",
                "DoB"   :   "26.12.1985",
                "Degree":   "M.Sc.,Phd",
                "Phone" :   "9952654515",
                "Skills":   ["Professor","Player"]
            },
            {
                "name"  :   "Gabriella",
                "DoB"   :   "25.01.2016",
                "Degree":   "Schooling",
                "Phone" :   "995000000",
                "Skills":   ["Story Teller","Hard Working"]
            },
            {
                "name"  :   "Jeffitha",
                "DoB"   :   "22.01.2003",
                "Degree":   "Schooling",
                "Phone" :   "995000011",
                "Skills":   ["Tailor","Teacher"]
            }
        ]
for i in profiles:
    print(i["name"])

# for in range(len(profile)):
#     profile[i]["name"]
# profile[0]["name"]
# print(profiles)
# print(profiles[0])
# print(profiles[name])



