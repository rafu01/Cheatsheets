# 2nd course
# Matplotlib
import matplotlib.pyplot as plt

xaxis = [1,2,3,5,6]
yaxis = [1.2, 3.5, 5.6,7.5, 8.5]

# plt.plot(xaxis, yaxis) # plot(x,y)
# # plt.show() # to show the plot

# plt.scatter(xaxis, yaxis) # plots only the data points
# # plt.show()

# plt.xscale('log') # to plot x axis on a logarithmic scale
# plt.show()
#histograms

list2 = [1.2,1.4,2,2.5,3,3,5,4.3,4.7,5.8,7.6,8.3,10.4,12.42]
plt.hist(list2, bins=3)
# plt.show()
plt.clf() # to clean up plot

# adding label in plot
xlab = "this is the x axis"
ylab = "this is the y axis"
title = "this is the title of the graph"
plt.xlabel(xlab)
plt.ylabel(ylab)
plt.title(title)
# to add tick values
tick_val = [1000, 10000, 100000]
tick_lab = ['1k', '10k', '100k']
plt.xticks(tick_val, tick_lab) #it will show these values instead of 1000,10000,100000
import numpy as np
pop = [1,2,3,55,5] # this will be used as size of dots in graph
np_pop = np.array(pop)
np_pop = np_pop*2 # using numpy to double each value
plt.scatter(xaxis, yaxis, s = np_pop) # s list denotes the size of each dot 
# adding color to plot
plt.scatter(xaxis, yaxis, s = np_pop, c = xaxis, alpha= 0.8)
#adding text to plot
plt.text(1, 1.2, 'India')
plt.text(2, 1.4, 'China')
#adding grid 
plt.grid()
plt.show()