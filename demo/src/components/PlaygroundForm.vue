<template>
  <div class="playground">
    <div class="playground__top">
      <div class="playground__box-wrapper">
        <div class="playground__box -schema">
          <div class="playground__box-title">Form schema</div>
          <div v-if="error" class="alert alert-danger">
            {{ error.message }}
          </div>
          <div class="codemirror-wrapper">
            <div ref="codemirror" />
          </div>
        </div>
      </div>
      <div class="playground__box-wrapper">
        <div class="playground__box -form">
          <div class="playground__box-title">Form</div>
          <div class="playground__box-content">
            <unrest-form v-bind="form_attrs" @input="input" @change="change" @submit="submit" />
          </div>
        </div>
      </div>
    </div>
    <div class="playground__bottom">
      <div class="playground__box-wrapper">
        <div class="playground__box -state" v-if="panels.includes('state')">
          <div class="playground__box-title">Form State</div>
          <div class="playground__box-content -pre">
            {{ text_state }}
          </div>
        </div>
      </div>
      <div class="playground__box-wrapper">
        <div class="playground__box -resulting-schema" v-if="panels.includes('schema')">
          <div class="playground__box-title">Resulting schema</div>
          <div class="playground__box-content -pre">
            {{ parsed_schema }}
          </div>
        </div>
      </div>
      <div class="playground__box-wrapper">
        <div class="playground__box -events">
          <div class="playground__box-title">Events</div>
          <div class="playground__box-content">
            <ul>
              <li v-for="(event, i) in events" :key="i" class="playground__event">
                <div>{{ event.message }}</div>
                <div v-if="event.count" class="pill pill-primary">{{ event.count }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UrForm from '@unrest/form'

import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/railscasts.css'

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
  watch: {
    text_schema: 'sync',
  },
  mounted() {
    this.codemirror = CodeMirror(this.$refs.codemirror, {
      mode: 'javascript',
      value: JSON.stringify(this.schema, null, 2),
      theme: 'railscasts',
      lineNumbers: true,
    })
    this.codemirror.on('change', (cm) => {
      this.text_schema = cm.getValue()
      this.sync()
    })

    this.sync()
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
