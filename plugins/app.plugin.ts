export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('initBopApp', () => {
    return {
      id:'whiteboard',
      name:'Whiteboard',
      to:'/whiteboard',
      icon:'fluent:whiteboard-16-filled',
      role:['admin']
    }
  })
});
