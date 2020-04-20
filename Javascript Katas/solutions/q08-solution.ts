// How do you print duplicate characters from a string?

export let findDuplicates = (text: string): string[] => {
    const splittedText = text.split("");
    const duplicated = splittedText.filter(
      (item, index) => splittedText.indexOf(item) != index
    );
    return [...new Set(duplicated)];
  };
  