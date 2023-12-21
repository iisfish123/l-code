<template>
  <div id="#app">
    <Elform :form="form">
      <SchemaField
        :schema="schema"
        :scope="{ useProvinceDataSource, useCityDataSource }">
        <template v-slot:default>
          123321
        </template>
      </SchemaField>
      <Submit @submit="onSubmit">提交</Submit>
      <Reset @click="onReset">重置</Reset>
    </Elform>
  </div>
</template>

<script>
import { createForm, onFieldValueChange, onFieldReact } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form as Elform, FormItem, Select, Input, Submit, Reset } from '@formily/element'

const areaData = [
  {
    label: '浙江',
    value: 1,
    children: [
      {
        label: '杭州',
        value: 11
      },
      {
        label: '嘉兴',
        value: 12
      },
      {
        label: '温州',
        value: 13
      }
    ]
  },
  {
    label: '江苏',
    value: 2,
    children: [
      {
        label: '南京',
        value: 21
      },
      {
        label: '苏州',
        value: 22
      },
      {
        label: '扬州',
        value: 23
      }
    ]
  }
]

const schema = {
  type: 'object',
  properties: {
    province: {
      type: 'number',
      title: '省',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        clearable: true
      },
      'x-reactions': ['{{useProvinceDataSource()}}']
    },
    city: {
      type: 'number',
      title: '市',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: 'width: 240px;',
        clearable: true
      },
      'x-reactions': ['{{useCityDataSource()}}']
    },
    addressDetails: {
      type: 'number',
      title: '详细地址',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        style: 'width: 100%;',
        placeholder: '请输入'
      },
      'x-display': 'none'
    }
  }
}

// 设置省枚举值
const useProvinceDataSource = () => {
  return field => {
    field.dataSource = areaData.map(({ label, value }) => ({ label, value }))
  }
}

// 设置市枚举值
const useCityDataSource = () => {
  return field => {
    const componentType = field.query('province').get('value')
    if (!componentType) return []
    const findItem = areaData.find(item => item.value === componentType)
    field.dataSource = findItem ? findItem.children : []
  }
}

const form = createForm({
  values: {
    province: 2,
    city: 21
  },
  effects() {
    onFieldValueChange('province', () => {
      form.setValuesIn('city', '')
    })
    onFieldReact('addressDetails', field => {
      const city = field.query('city').value()
      // 当选择的城市是 南京 时，显示详细地址输入框
      field.display = city === 21 ? 'visible' : 'none'
    })
  }
})

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Select,
    Input
  }
})
console.log(SchemaField)

export default {
  name: 'SearchForm',
  components: { Elform, SchemaField, Submit, Reset },
  data() {
    return {
      form,
      schema
    }
  },
  methods: {
    useProvinceDataSource,
    useCityDataSource,
    onSubmit(value) {
      console.log(value)
    },
    onReset() {
      console.log('onReset')
    }
  }
}
</script>
