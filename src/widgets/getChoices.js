export default (field) => {
  if (field.getChoices) {
    return field.getChoices()
  }
  const names = field.enumNames || field.enum
  return field.enum.map((value, i) => ({
    value,
    name: names[i],
  }))
}