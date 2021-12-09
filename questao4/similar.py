from difflib import SequenceMatcher

def compara_string(a, b):

    if len(a) > 300 or len(b) > 300:
        return "Uma das cadeias de caracteres excedeu o limite máximo de caracteres."
    seq = SequenceMatcher(None, a,b).ratio()
    return print(seq)

compara_string("We need to do something", "There's something that must be done here")
compara_string("I like to eat peas everyday", "I don't like to eat peanuts very often")
compara_string("They are currently studying Ukrainian", "They are currently studying in Ukraine")

