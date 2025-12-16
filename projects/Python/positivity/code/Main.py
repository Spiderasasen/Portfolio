# calling the main text file
def main():
    letter_check = []
    #Checking if the code was found
    try:
        #opens the text file and makes it look nice
        with open("Positive-Words.txt") as f:
            lines = f.readlines()
            words = [line.strip() for line in lines]

        #Checks what the user enters
        user_input = input('Please enter a message.\n')

        #if the user enters any number, an exception will be lifted. otherwise it will continue as is
        if user_input.isdigit():
            raise TypeError("Your input can not be a number")
        else:
            user_input_upercase = user_input.upper()
            #this loop will get the message entered and then will only print out the letter separately
            for letter in user_input_upercase:
                #if the letter is actually a letter, then it will loop thorugh the code and see if there is a possible word for the letter
                if letter.isalpha():
                    #loop that will just look for the right words starting with the letter from the user input and its checking for unique words in to be added onto the code
                    for word in words:
                        if word.startswith(letter) and word not in letter_check:
                            letter_check.append(word)
                            break
                    #there are no more unique words so we are just reapting the list
                    else:
                        for word in words:
                            if word.startswith(letter):
                                letter_check.append(word)
                                break
                #if the letter is anything else, then it will just add that letter to the charter list
                else:
                    letter_check.append(letter)

            #pretty printing the items
            for i in range(len(user_input)):
                print(f'{user_input[i]}: {letter_check[i]}')

    #   If the file was not found
    except FileNotFoundError:
        print(f"Error: File Not Found.")
    # If there was a different code
    except Exception as e:
        print(f"Error Occurred: {e}")

if __name__ == "__main__":
    main()