// mock tableListDataSource
const genList = (current, pageSize) => {
  const tableListDataSource = []

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i
    tableListDataSource.push({
      key: index,
      disabled: i % 6 === 0,
      href: 'https://ant.design',
      avatar: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'
      ][i % 2],
      name: `TradeCode ${index}`,
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: Math.floor(Math.random() * 1000),
      status: (Math.floor(Math.random() * 10) % 4).toString(),
      updatedAt: new Date(),
      createdAt: new Date(),
      progress: Math.ceil(Math.random() * 100)
    })
  }
  tableListDataSource.reverse()
  return tableListDataSource
}

let tableListDataSource = genList(1, 100)

function getRule(req, res) {
  const params = req.query
  const { current = 1, pageSize = 10 } = req.query

  let dataSource = [...tableListDataSource].slice(
    (current - 1) * pageSize,
    current * pageSize
  )

  if (params.name) {
    dataSource = dataSource.filter((data) =>
      data.name.includes(params.name || '')
    )
  }

  let finalPageSize = 10
  if (params.pageSize) {
    finalPageSize = parseInt(`${params.pageSize}`, 10)
  }

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize: finalPageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1
  }

  return res.json(result)
}

function postRule(req, res) {
  const body = req.body
  const { name, desc, key } = body

  switch (req.method) {
    /* eslint no-case-declarations: 0 */
    case 'DELETE':
      tableListDataSource = tableListDataSource.filter(
        (item) => key.indexOf(item.key) === -1
      )
      return

    case 'POST':
      ;(() => {
        const i = Math.ceil(Math.random() * 10000)
        const newRule = {
          key: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: (Math.floor(Math.random() * 10) % 2).toString(),
          updatedAt: new Date(),
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100)
        }
        tableListDataSource.unshift(newRule)
        return res.json(newRule)
      })()
      return

    case 'PUT':
      ;(() => {
        let newRule = {}
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name }
            return { ...item, desc, name }
          }
          return item
        })
        return res.json(newRule)
      })()
      return
    default:
      break
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length
    }
  }

  res.json(result)
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
  'DELETE /api/rule': postRule
}
