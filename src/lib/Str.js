export default {
  toSentenceCase: s => {
    // convert camelCase and snake_case to Sentence case
    s = s
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
      .replace(/_/g, ' ')
    return s[0].toUpperCase() + s.slice(1)
  },
}
