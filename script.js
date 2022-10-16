const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.speed + state.position
})

const killer = (state) => ({
  kill: () => console.log(`I ${state.name} will murder you!`)
})

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  }
  return Object.assign (
    {},
    barker(state),
    driver(state),
    killer(state),
  )
}

const april = murderRobotDog('April');
const kelly = murderRobotDog('Kelly');