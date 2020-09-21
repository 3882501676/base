import create from './create'
import update from './update'
import delete from './delete'

export { default as create } from './create'
export { default as update } from './create'
export { default as delete } from './create'

const point = { create, update, delete }

export default point