export default class LoadingState {
  init () {
  
  preload () {
  // images
this.game.load.image('BEAN', 'BEAN.png')

create () {
    this.game.state.start('play', true, false, {
    })
  }
}