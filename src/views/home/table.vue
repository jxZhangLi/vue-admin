<template>
  <div class="components-table">
    <div>
      Components - Table
    </div>
    <h3>Table - columns</h3>
    <base-table
      :columns="columns"
      :data="tableData"
    >
    </base-table>

    <h3>Table - slot-scope</h3>
    <base-table
      :columns="columnSlotScope"
      :data="tableData"
      border
      stripe
    >
      <template slot-scope="{ row, $index }" slot="date">
        {{ 'index:' + $index + ' - ' + row.date + ' 12:12:12' }}
      </template>

      <el-table-column
        fixed="right"
        label="操作 - slot"
        width="250">
        <template slot-scope="row">
          <el-button
            size="mini">编辑</el-button>
          <el-button
            size="mini"
            type="danger">删除</el-button>
        </template>
      </el-table-column>
    </base-table>

    <h3>Table - slot-render and header</h3>
    <code>
      <pre>render 参数调用：</pre>
      <pre>render() {} 不能使用这种</pre>
      <pre>render:()=>{} 应该使用该种</pre>
      <pre>有什么不一样的吗？</pre>
    </code>
    <input type="text" placeholder="邮编 - render" v-model="zipInput" />
    <base-table
      :columns="columnSlotRender"
      :data="tableData"
    />

    <h3>Table - Pagination</h3>
    <base-table
      :columns="columnsPage"
      :requestDataFn="tableRequestFn"
      :pagination="pagination"
      size="mini"
    />
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄打算单位签订单位',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄打算单位签订单位',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄打算单位签订单位',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      columns: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          label: '配送信息',
          columns: [
            {
              prop: 'name',
              label: '姓名'
            },
            {
              label: '地址',
              columns: [
                {
                  prop: 'province',
                  label: '省份'
                },
                {
                  prop: 'city',
                  label: '市区'
                },
                {
                  prop: 'address',
                  label: '地址'
                },
                {
                  prop: 'zip',
                  label: '邮编'
                }
              ]
            }
          ]
        }
      ],
      columnSlotScope: [
        {
          prop: 'name',
          label: '姓名',
          width: 111,
          fixed: true
        },
        {
          prop: 'address',
          label: '地区',
          width: 222,
          'show-overflow-tooltip': true
        },
        {
          prop: 'date',
          label: '日期 - slot-scope'
        }
      ],
      zipInput: '邮编 - render',
      columnSlotRender: [
        {
          prop: 'name',
          label: '姓名 - render and header',
          // render() {} 不能使用这种方式，它和下面 render: ()=>{} 有什么不一样的吗
          render: ({ row }) => {
            // console.log('scope render', row)
            return (
              <div>{ `${row.city}-${row.name}` }</div>
            )
          },
          header: (column) => {
            // console.log('scope header', column)
            return (
              <el-input
                size="mini"
                placeholder="输入关键字搜索 slot-header"/>
            )
          }
        },
        {
          prop: 'address',
          label: '地区'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'zip',
          label: '邮编 - render',
          render: (row) => {
            return (
              <div>{ this.zipInput }</div>
            )
          }
        }
      ],
      columnsPage: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地区'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'zip',
          label: '邮编'
        }
      ],
      pagination: {
        small: true,
        total: 10
      }
    }
  },
  methods: {
    tableRequestFn: function ({ currentPage, pageSize }) {
      const data = []
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          for (let i = 0; i < pageSize; i++) {
            const index = i + pageSize * (currentPage - 1)
            data.push({
              date: `${index}-date`,
              name: `${index}-name`,
              province: `${index}-province`,
              city: `${index}-city`,
              address: `${index}-address`,
              zip: `${index}-zip`
            })
          }
          resolve({
            data,
            total: 100
          })
        }, 1000)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .components-table{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
