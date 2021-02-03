import numpy as np
height = [1,2,3,4]
weight = [5,6,7,8]
num_h = np.array(height)
num_w = np.array(weight)
num_t = num_w/num_h # works with individual elements
print(num_t)
print(num_h>2) # returns an array of boolean with true false. false where smaller than 2 elements
# so to get elements that are greater than 2
print(num_h[num_h>2])
# 2D numpy arrays are a list of lists
np_2d = np.array([[1,2,3,4], 
                 [5,6,7,8]])
print(np_2d.shape) # this gives the column and row of 2d array
# np_2d[row,column] ( start row:end row, start column: end column)
np_2d[:,:] # all 
print(np_2d[0:1, 1:4])
# numpy array to find mean/ average
np.mean(np_2d[:,0])
np.median(np_2d[:,0]) # sorts the data then middle value
np.std(np_2d[:,0]) # for standard deviation
# np.sum(), np.sort()  these are faster than built in function