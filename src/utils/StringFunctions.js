const takeTextWithWholeWord = (text, size) => {
  return text.substring(0, size + text.substring(size).indexOf(' '));
};

export { takeTextWithWholeWord };
