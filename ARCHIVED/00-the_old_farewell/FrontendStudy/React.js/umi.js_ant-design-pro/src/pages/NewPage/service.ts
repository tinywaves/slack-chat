import { request } from 'umi'

export interface TableListItem {
  key: number
  name: string
  desc: string
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number
    /** 页面的容量 */
    pageSize?: number
  },
  options?: Record<string, unknown>
) {
  return request<{
    data: TableListItem[]
    /** 列表的内容总数 */
    total?: number
    success?: boolean
  }>('/api/rule', {
    method: 'GET',
    params: {
      ...params
    },
    ...(options || {})
  })
}

/** 新建规则 POST /api/rule */
export async function addRule(
  data: TableListItem,
  options?: Record<string, unknown>
) {
  return request<TableListItem>('/api/rule', {
    method: 'POST',
    data,
    ...(options || {})
  })
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(
  data: {
    key: number[]
  },
  options?: Record<string, unknown>
) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    data,
    ...(options || {})
  })
}
