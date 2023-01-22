export const updateValue = (array, id, newValue) => {
  return array.map(item => {
    if (item.question_id === id) {
      return {...item, answer_id: newValue};
    }
    return item;
  });
};

export const validateIfAllIsFilled = array => {
  return array.reduce((acc, item) => acc && item.answer_id !== '0', true);
};
