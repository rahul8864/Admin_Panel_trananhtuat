const setMode = mode => {
    console.log(mode)
    return {
        type: 'SET_MODE',
        payload: mode
    }
}

const setColor = color => {
    console.log(color)
    return {
        type: 'SET_COLOR',
        payload: color
    }
}

const getTheme = () => {
    return {
        type: 'GET_THEME'
    }
}

const exportDefault = {
    setColor,
    setMode,
    getTheme
}

export default exportDefault