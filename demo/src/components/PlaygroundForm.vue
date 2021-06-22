<template>
  <div class="playground-form">
    <div class="playground-form__schema">
      <div>Form schema</div>
      <div v-if="error" class="alert alert-danger">
        {{ error.message }}
      </div>
      <textarea v-model="text_schema" />
    </div>
    <div class="playground-form__form">
      <div>Form</div>
      <unrest-form v-bind="form_attrs" @input="input" @change="change" @submit="submit" />
    </div>
    <div class="playground-result" v-if="panels.includes('state')">
      <div>Form State</div>
      <div class="playground-result__body">
        {{ text_state }}
      </div>
    </div>
    <div class="playground-result" v-if="panels.includes('schema')">
      <div>Resulting schema</div>
      <pre>{{ parsed_schema }}</pre>
    </div>
  </div>
  <div class="playground-form">
    <div class="playgroud-result">
      <div>Events</div>
      <ul>
        <li v-for="(event, i) in events" :key="i" class="playground-log__event">
          <div>{{ event.message }}</div>
          <div v-if="event.count" class="pill pill-primary">{{ event.count }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UrForm from '@unrest/form'
export default {
  props: {
    schema: Object,
    state: {
      type: Object,
      default: () => ({}),
    },
    panels: {
      type: Array,
      default: () => ['editor', 'form', 'state'],
    },
  },
  data() {
    const text_schema = JSON.stringify(this.schema, null, 4)
    return { text_schema, current_schema: this.schema, error: null, text_state: null, events: [] }
  },
  computed: {
    parsed_schema() {
      return JSON.stringify(UrForm.prepField('__root', this.current_schema), null, 4)
    },
    form_attrs() {
      const { current_schema, state } = this
      return { schema: current_schema, state }
    },
  },
  mounted() {
    this.sync()
  },
  watch: {
    text_schema: 'sync',
  },
  methods: {
    log(event) {
      const last = this.events[this.events.length - 1]
      if (last?.message === event.message) {
        last.count = (last.count || 0) + 1
      } else {
        this.events.push(event)
      }
      this.sync()
    },
    input(_state, e) {
      this.log({ type: 'input', message: `input@${e.target.name}` })
    },
    change(_state, e) {
      this.log({ type: 'change', message: `change@${e.target.name}` })
    },
    submit() {
      this.log({ type: 'submit', message: 'submit' })
    },
    sync() {
      this.error = null
      try {
        const parsed = JSON.parse(this.text_schema)
        UrForm.prepField('__root', parsed)
        this.current_schema = parsed
      } catch (e) {
        window.E = e
        this.error = e
      }
      this.text_state = JSON.stringify(this.state, null, 2)
    },
  },
}
</script>
