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
  render(h) {
    console.log(createForm, onFieldValueChange, onFieldReact, createSchemaField, FormItem, Select, Input)
    const form = createForm({})
    const { SchemaField } = createSchemaField({
      components: {
        FormItem,
        Select,
        Input
      }
    })
    const schema = {
      type: 'object',
      properties: {
        [Symbol('1').toString()]: {
          type: 'number',
          title: '',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            style: 'width: 100%',
            placeholder: '请输入'
          }
        }
      }

    }
    return (
      // <Elform form={form}>
      //   {h(SchemaField, { props: { schema }})}
      //   <Submit>提交</Submit>
      //   <Reset>重置</Reset>
      // </Elform>
      h(Elform, { props: { form }}, [
        h(SchemaField, { props: { schema }}),
        h(Submit, '提交'),
        h(Reset, '提交')
      ])
    )
  }
}
