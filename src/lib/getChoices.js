export default (field) => {
  let choices
  if (field.getChoices) {
    choices = field.getChoices()
  } else {
    const enum_ = field.enum || field.items?.enum
    const names = field.enumNames || field.items?.enumNames || enum_
    choices = enum_.map((value, i) => ({
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
