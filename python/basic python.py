list1 = [["a", 1],["b",4], ["c",6]]
# copy list without Reference
list2 = list(list1)  
# or use
list2 = list1[:]
# delete element from list
del(list1[1]) 
#  add element using slice 
# list1 = list1 + ["a",4] or list1[1:4] ending index is exclusive
# get length using len(),max=  max(), round(), sorted(),
# get type() to get type of variable
# count occurance
list1.count(1)
# type cast 
int("1")
#  captalize() first character in string
# replace string replace("","")
# get index of an element using index("a")
# add element in list
list1.append("a")
# list.reverse() changes the list
# some methods just returns new list and some changes the current list
#use of dictionary
di = {1:2, 2:3}
di.keys() #prints allkeys
#dictionary is immutable can't change elements
#adding elements in dictionary
di[4] = 5
#check if a key exits or not
4 in di # returns true if it exits
#delete an element in a dictionary
del(di[4])
#dictionary of dictionaries
europe = { 'spain': { 'capital':'madrid', 'population':46.77 },
           'france': { 'capital':'paris', 'population':66.03 },
           'germany': { 'capital':'berlin', 'population':80.62 },
           'norway': { 'capital':'oslo', 'population':5.084 } }
# 1 key contains multiple dictionaris

# loops
# for lists:
# for x in list:
# for range
# for x in range(5) this will go to 0 to 4
# for x in range(2,5) this will start from 2 to 4
#  for increament 
#  for x in range(2,10,3) increamnet will be 3
# for list
#  for index, values in enumerate(list3) enumerate returns a tuple of index, value 
#  for dictionaries
# for x in thisdict: gets all the keys
#  to get values
#  for x in thisdict:
#   print(thisdict[x])
# or
# for x in thisdict.values():
# print(x)
# or
# for k, v in thisdict.items():
#   print(k, v)
#  for empty loops :  use pass
# for x in [0, 1, 2]:
#  pass
# dictionary
# get value by key
# x = thisdict.get("model")
# copy a dictionary
# mydict = thisdict.copy()
# items()	Returns a list containing a tuple for each key value pair
# keys() Returns a list containing the dictionary's keys
# pop()	Removes the element with the specified key
# popitem()	Removes the last inserted key-value pair

# tupple : this are sorted & unchangeable. written with round brackets
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
# access tuple item
print(thistuple[1])
# get items in a range
print(thistuple[2:5])
# change item in tuple / add item (manual process )
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
# check if item is available
# thistuple = ("apple", "banana", "cherry")
# if "apple" in thistuple:
#   print("Yes, 'apple' is in the fruits tuple")
# join two tuple
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)

tuple3 = tuple1 + tuple2
# count 
x.count('apple')	#Returns the number of times a specified value occurs in a tuple
x.index('apple') #gets the index of this item

# ternary operator
age = 22
message = 'eligible' if age>=18 else 'not eligible'
print(message) 
# if statements
if 18 <= age <= 65:
    print('eligible') 
#  formatted string
f_name = 'Nayeem'
l_name = 'Rafsan'
full = f"{f_name} {l_name}"
# taking input
# x = int(input())
# taking seprate variable input 
# import sys 
# def get_ints(): return map(int, sys.stdin.readline().strip().split()) 
# a,b,c,d = get_ints()
# taking array input
#  array = [int(x) for x in raw_input().split()]
#  defining functions
def functioname(i, j):
    return i+j
functioname(i=2,j=5)
# default arguments
def fun2(i,j=2): #here j is optional we put optional parameters in last
    return i+j
fun2(4) #sending one arguement the other one will be used as default
# n numbers of argument
def product(*numbers): # this turns all arguments to a tuple
    prod =1
    for i in numbers:
        prod*=i
    return prod
product(3,4,5)
# more arguments
# turns into dictionary
def user_info(**user):
    print(user)
    print(user['id'])
user_info(id=1, name='nayeem', age=21)
# create a list 
list2 = [1]*100
# this will contain 100 1's
# sequence list with range
list3 = list(range(10))
# string to char list
charlst = list('abcd')
# take all even index from list
list3[::2]
# iterate reversely
list3[::-1]
# combine list
#  list1 = list0+list2
# list unpacking
list4 = list(range(3))
first, second, third = list4 #this works on tuples as well
#  this takes 1st,2nd, 3rd item from list3. we should have same amount of varibale on left 
# as we have items in length
# how to take first two out of this
first, second, *other = list4
# insert item 
list4.append(7)
# for a specific insertion in  a index
list4.insert(2, 5)
# delete items
list4.pop() #removes last item from list
# list4.push() #removes first item from list
list4.remove(2) #will remove first 2 from list
del list4[2] #or deletes by index
del list4[:1] #deletes a range of items
# get index of an item
list4.index(1)
# sorting
list3.sort()
# reverse
list3.sort(reverse=True)
# get a new sort list , that doesn't modify the original list
sortedlist = sorted(list3)
# sort a complex list
list5 = [('product1', 9),('product2',1),('product',4)] # list of tuples
def sort_list(item): # this just returns the number values
    return item[1]
list5.sort(key=sort_list) # this will pass every tuple one by one and
# use lambda to do this
# (key=lambda parametes: expression)
list5.sort(key=lambda item: item[1])
li5 =[]
for i in list5:
    li5.append(i[1])
# do this using map
# map(func, *iterables) this returns a iterable
x12 = map(lambda item: item[1], list5)
for i in x12:
    print(i)
# filter function
# take all items that is >1 
x13 =filter(lambda i: i[1]>1, list5)
for i in x13:
    print(i)
# comprehension
# [expression(return) for i in iterable] iterate over this iterable and perform this expression
# this will replace map and filter
x12 = [items[1] for items in list5]
x13 = [items[1] for items in list5 if items[1]>1]
# zip function . combines all list like this: one item first list, 2nd from second list,..... so on
zip(list4, list5) 
zip("abc", "abc") # retursn ('a','a'),('b','b'),('c','c')
# works with 3,4 lists as well
# declaring tuple
tup = (1,2,3,4,5) #or
tup = 1,2,3,4
# swipe variables
# a,b = b,c   this is a tuple
# arrays are faster than list 
# import array from array
# arr = array("i", [1,2,3,4]) here i defines int check google for more types
# set 
set1 = {1,2,3,4,5,6}
set2 = {1,3,5}
print(set1 | set2) #or operation combines them
print(set1 & set2) #and 
print(set1 - set2) #removes similar items that are in set1
print(set1 ^ set2 )# removes all common items (x-or)
# set does not have indexing
# it is used to perfomr these tasks + to check if any item exists or not
if 2 in set2:
    print(2)
# dictionaries
dic = dict(x=1,y=2)
dic.get(x) #to get a value from dictionary
for k,v in dic.items():
    print(k,v)
# dictionary comprehension
duc = {i+1 for i in range(5)} # use curly braces
# use generator to save memory
from sys import getsizeof
gen = (x*2 for x in range(10000))
getsizeof(gen) 
# unpacking operator
lst4 = [1,2,3,4,5]
print(*lst4) #this prints without the brackets
lis4 = [*"heloooo"]  # converts to char array
# it's not possible to sort a dictionary but we can get a represtation
di22 = {"a":12, "b":82,"q":1, "c":6}
{k:v for k,v in sorted(di22.items(),key= lambda item: item[1])}