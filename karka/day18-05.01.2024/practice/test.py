# list=[2,3,42,2,2,2,5,6,6,5,5]   
# a=[]
# for i in range(0,len(list)):
#     duplicate=False
#     for j in range(0,len(a)):
#         if list[i]==a[j]:
#             duplicate=True
#     if duplicate==False:
#         a.append(list[i])
# print(a)


# a=[3,2,2,3]
# for i in a:
#     if i==3:
#         a.remove(3)
#         a.append("*")
# print(a)

# a=[1,2,4,3]
# for i in a:
#     if a.count(i)>1:
#         print("T")
#         break
#     else:
#         print("F")
#         break


# a=[1,0,2,3,0,4,5,0]
# b=[]
# for i in range(0,len(a)):
#     b.append(a[i])
#     if a[i]==0:
#         b.append(0)
#     # else:
#     #     b.append(a[i])
# print(b)

no=int(input("Enter the value:"))
ans=0
q=no//10
r=no%10
nos=[]
nos.append(q)
nos.append(r)
for i in range(0,len(nos)):
ans=ans+q+r
if(ans<=9):
    print(ans)
else:
     ans=ans+q+r
print(56874%9)


# no=38
# ans=0
# while(no>=10):
#     def spilt():
#         q=no//10
#         r=no%10
#         ans=ans+q+r

#     if ans>10:
#         spilt()
#     else:
#         print(ans)
# print(no)


# num = int(input("Enter the value:"))
# def sum(n):
#     while n >= 10:
#         sum_of_digits = 0
#         while n > 0:
#             sum_of_digits += n % 10
#             n //= 10
#         n = sum_of_digits
#     return n
# result = sum(num)
# print(f"The digital root of {num} is {result}")


# a=[1,2,2,1]
# b=[2]
# c=[]
# for i in a:
#     for j in b:
#         if i==j and i not in c:
#             c.append(i)
#             # break
# print(c)


# num=[[1,2],[3,4]]
# res=0
# for i in range(0,len(num)):
#     res=res+num[i]

# # result=num[0][0]+num[0][1]+num[1][0]+num[1][1]
# print(res)



# num = [[1, 2], [3, 4]]
# res = 0
# for i in num:
#     for j in i:
#         res+=j
# print(res)


# num1=[[23,98],[42,70]]
# result=''
# for i in num1:
#     for j in i:
#         # nums=str(j)
#         result+=str(j)+""
# print(result)



# result=nums[0][0]+nums[0][1]+nums[1][0]+nums[1][1]
# print(result)



# ip=[5,10,20,2,0,33,100,90]
# op=[]
# for i in range(0,len(ip),2):
#     op.append(ip[i])
#     op.append(ip[i+1])
#     op.append(ip[i]+ip[i+1])
# print(op)


# ipn=[0,1,0,3,12]
# opn=[]
# for i in range(0,len(ipn)):
#     if ipn[i]==0:
#         ipn.remove(0)
#         ipn.append(0)
# print(ipn)



ip=0
lc=0
uc=0
dig=0
sc=0

symbol=["!","@","#","%","^","&","*","(",")","{","}","[","]","/","|","?","<",">",":",";","$"]
ipv=input("Enter the value:")
for i in range(len(ipv)):
    lenv=len(ipv)
    if lenv>=8:
        ip=ip+1
        if(ipv[i].islower()):
            lc+=1
        elif(ipv[i].isupper()):
            uc+=1
        elif(ipv[i].isdigit):
            dig+=1
        elif ipv[i] in symbol:
            sc=sc+1
        else:
            print("unaccepted")
if(ip!=0 and lc!=0 and uc!=0 and dig!=0 and sc!=0):
    
    print("Correct Password")
else:
     print(sc,dig,uc,lc,ip)
     print("In Correct Password")
    
# print("Enter atleat 8 Charecter")



