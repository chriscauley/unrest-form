export default {
  type: 'object',
  properties: {
    name: {
      type: 'text',
    },
    age: {
      type: 'number',
    },
    color: {
      type: 'text',
      enum: ['red', 'green', 'blue'],
    },
    colorPicker: {
      type: 'text',
      format: 'color',
    },
    newsletter: {
      type: 'boolean',
      title: 'Sign up for our newsletter',
    },
    avatar: {
      type: 'image',
      title: 'Avatar',
      default: 'https://i.imgur.com/YSPe6yA.jpg',
    },
    hidden: {
      type: 'string',
      title: "Shouldn't see me",
      default: 'Foo',
      ui: { tagName: 'ur-hidden' },
    },
    password: {
      type: 'string',
      default: 'I am a password field',
    },
    password_hint: {
      type: 'string',
      default: 'I am not a password field',
      ui: { type: 'text' },
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
      },
    },
  },
}
