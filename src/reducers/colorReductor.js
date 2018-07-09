/* It' s handle action - change state to another immutable */
const colorReductor = (state = {value: false}, action) => {
    switch (action.type) {
      case 'COLOR_INVERSE':
        return {
            value: !state.value    
        };
      default:
        return state
    }
  }
  
  export default colorReductor
  