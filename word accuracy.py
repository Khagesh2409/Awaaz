import difflib

def word_accuracy(word1, word2):
    """
    Calculate the percentage of correctness between two words.
    """
    seq = difflib.SequenceMatcher(None, word1, word2)
    similarity_ratio = seq.ratio()
    percentage_correct = similarity_ratio * 100
    return percentage_correct

# Example usage:
word1 = "sunday"
word2 = "shunday"
percentage_correct = word_accuracy(word1, word2)
p=int(percentage_correct)
print(f"The percentage of correctness between '{word1}' and '{word2}': {p}%")
