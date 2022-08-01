export default (field) => {
  let choices
  if (field.getChoices) {
    choices = field.getChoices()
  } else {
    const names = field.enumNames || field.enum
    choices = field.enum.map((value, i) => ({
      value,
      name: names[i],
    }))
  }
  if (field.placeholder) {
    choices.unshift({
      name: field.placeholder,
      value: '',
    })
  }
  return choices
}
