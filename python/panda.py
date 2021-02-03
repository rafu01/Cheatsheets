import pandas as pd
import numpy as np
# create a dictionary then use it as a dataframe
dic = {
    'countries': ['brazil','china'],
    'captial':['a', 'b'],
    'population': [344.6,44.5]
}
brics = pd.DataFrame(dic)
row_labels = ["BR","CH"]
#creating custom index
brics.index = row_labels
#import csv file to brics
brics2 = pd.read_csv("brics.csv")
#set column 0 as index
brics2 = pd.read_csv("brics.csv", index_col =0)
# Print out country column as Pandas Series
brics2['country']
# Print out country column as Pandas DataFrame
brics2[['country']]
# Print out DataFrame with country and drives_right columns
brics2[['country','capital']]
#getting partial row column
# use square brackets to get column for row use slicing
# Print out first 3 observations
brics2[0:3]
# Print out fourth, fifth and sixth observation
brics2[3:6]
# loc and iloc 
# loc is used to get info using data points
#use double square brackets for loc[row, column]
brics2.loc[["RU", "IN"], ["country","capital"]]
# iloc is used to get info using index
# same using iloc
brics2.iloc[[1,2,3], [0,1]]
brics2.loc[:,["country","capital"] ]
brics2.iloc[:, [0,1]]
# Print out observation for Japan
brics2.loc['IN']
brics2.iloc[2]
# Print out observations for Australia and Egypt
brics2.loc[['CH','BR']]
brics2.iloc[[1,2]]

# get data based on logic
# to use [] then brics = pd.read_csv("my.csv", index_col =0,sep=r'\s*,\s*', engine='python')
# print(brics2['area']>2)
# or use iloc
brics2.iloc[:,[2]]>4 # returns a bool list
greater_than_four = brics2.iloc[:,2]>4

brics2[greater_than_four]

ls = [1,2,3,4,5,6]

# to get index , value 
for i, j in enumerate(ls):
    print('index: '+str(i)+' values: '+ str(j))
# to print dictionaries
dc = {1:3,2:3,3:3,4:3}
for k, v in dc.items(): # this is a method
    print(str(k)+' '+ str(v))
# for numpy arra use for in 
# for 2d numpy arrays use for i in nditer() function
height = [1,2,3,4]
weight = [5,6,7,8]
np_2dd = np.array([height, weight])
for i in np.nditer(np_2dd):
    print(i)
#iterows method in brics dataframe for iteration in dataframe
for index, row in brics2.iterrows():
  print(index)
  print(row)
  #print specific row
for index, row in brics2.iterrows():
  print(index+':' + row['capital'])
#adding data . adding length of capital
#but this is not efficient
for index, row in brics2.iterrows():
    brics2.loc[index, 'name_length']=len(row['capital'])

#efficient way
# the apply function produces a new array with len of each capital
#adding this array to our brics2
brics2['length'] = brics2['capital'].apply(len)

# 3rd course
# get a view of few data from your csv (if you have thousands of data printing all of them could be hard)
brics2.head()
#information about rows (also missing data)
brics2.info()
# shape attribute
brics2.shape
# for numeric colum this provides mean, median, std, min, max
brics2.describe()
# gives 2d numpy array
brics.values
# column info
brics2.columns
# row info
brics2.index
# sort by any column
brics2.sort_values('name_length')
# descending sort
brics2.sort_values('name_length', ascending = False)
# sort by 2 columns first area then population
brics2.sort_values(['polpulation', 'area'], ascending = [True, False])
# select one column
brics2['country']
# to select multiple columns 2 square brackets
brics2[['country','capital']]
# choose based on text (can use &, | )
brics2[brics2['capital']=='Brasilia']
# to check if and sub list exists use .isin() 
# is_black_or_brown = dogs["color"].isin(["Black","Brown"])
# dogs[is_black_or_brown] 
# more available functions
# .min()
# .max()
# .agg() gives you compute custom summary statistics
#  to get 30 percentile
#.agg() helps to add my own custom functions to dataframes
# you can also add numpy functions to .agg()
# def pct30(column):
#     return column.quantile(.3)
# def pct40(column):
#     return column.quantile(0.4)

# brics2[['population', 'area']].agg(pct30)
# for multiple functions make a list
# brics2['population'].agg([pct30,pct40])

#for cumulative sum
brics2['population'].cumsum()
# other cumulative methods
# .cummax()
# .cummin()
# .cumprod()

# cut all duplicates
brics2.drop_duplicates(subset='name') # if there's any duplicate in name it will be removed
brics2.drop_duplicates(subset=['name', 'population']) 
# count the number of appearance
brics2['population'].value_counts()
# get the max at top
brics2['population'].value_counts(sort=True)
# make a proportion of the total using count (% of each element)
brics2['population'].value_counts(normalize = True)
# groupby
# picking all the columns in population then calculating their mean
# the same country can occur many times, so it will calculate the mean of all countries with same name
brics2.groupby('country')['population'].mean()
brics2.groupby('country')['population'].mean()
#agg and groupby
brics2.groupby('country')['population'].agg([max,sum, min])
brics2.groupby(['country','capital'])['population'].agg([max,sum, min])

#pivot table
brics2.pivot_table(values ='capital', index = 'country') # by default it calculates the mean
# for other agg funcitons
brics2.pivot_table(values ='capital', index = 'country',aggfunc=np.meadin)
# for multiple functions
brics2.pivot_table(values ='capital', index = 'country',aggfunc=[np.meadin, np.mean])
#adding column
brics2.pivot_table(values ='capital', index = 'country', columns = 'capital', fill_value =0) #fill val is for missing info
#sum of row, column use margins=True
brics2.pivot_table(values ='capital', index = 'country', columns = 'capital', fill_value =0, margins=True) #fill val is for missing info

#chapter 3
#setting index for a dataframe
# brics2.set_index('country')
# you can also have a list of indexes
# brics2.set_index(['country','capital'])
# undo this brics2.reset_index()
# dropping index names entirely from the dataframe
# brics2.reset_index(drop=True)
# sort by index
# brics2.sort_index()

#chapter 4
# brics2.plot(x = 'country, y= 'capital')
# change type of plot brics2.plot(kind = bar/line/scatter) 
# rotate label in 45 degree .plot(rot =45)

# comparison with plot
# dog_pack[dog_pack["sex"]=="F"]["height_cm"].hist()
# dog_pack[dog_pack["sex"]=="M"]["height_cm"].hist()
# adding legend (label)
# plt.legend(["F", "M"])
# set transparency usign alpha
# dog_pack[dog_pack["sex"]=="F"]["height_cm"].hist(alpha=0.7)
# dog_pack[dog_pack["sex"]=="M"]["height_cm"].hist(alpha=0.7)
# also set the title 
# avocados.plot(x='nb_sold', y='avg_price', kind = 'scatter',
# title="Number of avocados sold vs. average price")

#detecting missing values
# check for missing values with .isna() 
# false = not missing
#dogs.isna() but this is not efficient for large number of data
# use .isna().any() provides only the missing ones
# use .isna().sum() no of data missing
# plot a graph with missing data
# dogs.isna().sum().plot(kind ='bar') then  plt.show()
# remove rows where datas are missing
# dogs.dropna()
# fill missing values
# dogs.fillna(0);

# creating dataframes
# using dictionary
# create list of dictionaries
# avocados_list = [
#     {"date": "2019-11-03", "small_sold": 10376832, "large_sold": 7835071},
#     {"date": "2019-11-10", "small_sold": 10717154, "large_sold": 8561348},
# ]
# or 1 dictionary with list as value
# avocados_dict = {
#   "date": ["2019-11-17","2019-12-01"],
#   "small_sold": [10859987, 9291631],
#   "large_sold": [7674135, 6238096]
# }

#DataFrame to CSV file
#dogs.to_csv('new_dogs.csv');