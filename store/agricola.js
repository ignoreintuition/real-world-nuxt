/* jshint esversion:6 */
export const state = () => ({
  sortItem: 'card',
  sortOrder: 'desc'
})

export const mutations = {
  setSortOrder: (i, o) => {
    this.sortItem = i
    this.sortOrder = o
  }
}
