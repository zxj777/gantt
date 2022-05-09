export const getColumnConfig = () => ({
  title: { label: '标题', value: 'title', isLink: true, editable: false, expandable: true },
  creator: { label: '创建人', value: 'creator', isLink: false, editable: false, expandable: false },
  owner: { label: '处理人', value: 'owner', isLink: false, editable: true, expandable: false },
  begin: { label: '预计开始', value: 'begin', isLink: false, editable: true, expandable: false },
  due: { label: '预计结束', value: 'due', isLink: false, editable: true, expandable: false },
  status: { label: '状态', value: 'status', isLink: false, editable: true, expandable: false },
})
