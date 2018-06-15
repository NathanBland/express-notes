export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user.isAuthenticated) {
    console.log('store.dispatch', store.dispatch)
    return store.dispatch('userCheck').then((res) => {
      // console.log('res', res)
    })
    .catch(e => {
      return redirect('/login')
    })
    // return false
    // return redirect('/login')
  }
}
