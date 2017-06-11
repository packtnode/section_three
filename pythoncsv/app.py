
import csv
csvfile = open('sample.csv','rb')
csvFileArray = []


count = 0
for row in csv.reader(csvfile, delimiter = '.'):
    csvFileArray.append(row)
    print(row)
    
    count += 1

    file = open(str(count) + "_file.csv", 'w+')
    file.write(str(row[3]))

    print(count)

