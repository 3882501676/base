import create from './create'
import update from './update'
import delete_ from './delete'

export { default as create } from './create'
export { default as update } from './create'
export { default as delete_ } from './create'

const point = { create, update, delete_ }

export default point