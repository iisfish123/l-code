import { createForm, onFieldValueChange, onFieldReact } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form as Elform, FormItem, Select, Input, Submit, Reset } from '@formily/element'

export default {
  name: 'SearchForm',
  props: {
    element: { type: Array }
  },
  data() {
    return {
    }
  },
  render() {
    console.log(createForm, onFieldValueChange, onFieldReact, createSchemaField, FormItem, Select, Input)
    const form = {}
    return (
      <Elform form={form}>
        <SchemaField
          schema='schema'
        >
          <template v-slot:default>
            123321
          </template>
        </SchemaField>
        <Submit onsubmit={() => {}}>提交</Submit>
        <Reset onclick={() => {}}>重置</Reset>
      </Elform>
    )
  }
}
