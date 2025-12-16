"""
This is for a stats project
in here we will create 200 students, with names, and a basic boolean system
main question, DO YOU LIKE TO STUDY IN THE LIBRARY
if not, add 0
if so, add 1
about 154 students of the 200 do like to study in the libray, the others dont
"""
import random

#generates random names
def generate_random_name():
    first_names = [
        "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace",
        "Heidi", "Ivan", "Judy", "Kevin", "Liam", "Mia", "Noah", "Olivia"
    ]
    last_names = [
        "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
        "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
        "Wilson", "Anderson"
    ]

    random_first_name = random.choice(first_names)
    random_last_name = random.choice(last_names)

    return f"{random_first_name} {random_last_name}"

#makes the random selection
def choice_of_study():
    num = random.randint(0, 1)
    return num

#adds the selection to a list
def random_200():
    num_list = []
    for _ in range(200):
        num_list.append(choice_of_study())

    return num_list

#checking if there are more people who wanted to study in the libray then anywhere else
def checking_1_majority(list):
    #count the amount lavaliere
    num_1 = list.count(1)

    #if the list is not 154 1's then go through a loop
    if num_1 != 154:
        #for the whole list, if the number is 0, then turn it to 1
        for i in range(len(list)):
            if list[i] == 0:
                list[i] = 1

            #will check if the new count is now 154, if so break out the loop
            num_1 = list.count(1)
            if num_1 == 154:
                break

    return list


def main():
    #making the section that will determine if we have 154 students that like to study in the library
    num_list = random_200() #creates a list of numbers
    num_list_clone = num_list #clones the list
    num_list_clone = checking_1_majority(num_list_clone) #modifys the clones list
    num_list = num_list_clone #asigns the clone list back to the original list

    for i in range(200): #loops through 200 times which will generate the list with a randomly made name
        print(f'{generate_random_name()} {num_list[i]} ')

if __name__ == '__main__':
    main()