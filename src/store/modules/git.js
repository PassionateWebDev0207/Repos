import Vue from 'vue'

const baseUrl = 'https://api.github.com/graphql'
const accessToken = 'Bearer 1c3da4fd73a683623aa18558bba7ab0ac691e98a'

const state = () => ({
  loading: false,
  isError: false,
  totalCount: 0,
  repositories: [],
  errors: []
})

const getters = {
  getTotalCount (state) {
    return state.totalCount
  },
  getRepositories (state) {
    return state.repositories
  }
}

const actions = {
  async GET_REPOS ({ commit }) {
    const query = `
      {
        viewer {
          repositories(first: 100, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  createdAt
                  updatedAt 
                  description
                  isPrivate
                  url
                  owner {
                    login
                  }
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history(first: 100) {
                          totalCount
                          edges {
                            node {
                              ... on Commit {
                                committedDate
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    commit('setLoading', true)
    commit('setErrors', { status: false, list: [] })
    commit('setRepositories', [])
    commit('setTotalCount', 0)
    await Vue.axios.post(baseUrl, { query }, { headers: { Authorization: accessToken } }).then((res) => {
      if (res.data.errors !== undefined) {
        commit('setErrors', { status: true, list: res.data.errors })
      } else {
        commit('setRepositories', res.data.data.viewer.repositories.edges)
        commit('setTotalCount', res.data.data.viewer.repositories.totalCount)
      }
      commit('setLoading', false)
    }).catch((err) => {
      commit('setLoading', false)
      Vue.prototype.$message({ title: 'Error', type: 'error', message: `${err}`, offset: 80 })
    })    
  },
}

const mutations = {
  setLoading (state, status) {
    state.loading = status
  },
  setTotalCount (state, count) {
    state.totalCount = count
  },
  setRepositories (state, repos) {
    state.repositories = repos
  },
  setErrors (state, error) {
    state.isError = error.status
    state.errors = error.list
  }
}

export default { state, getters, actions, mutations }