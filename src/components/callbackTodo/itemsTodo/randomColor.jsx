let randomColor = ['#ff0000','#ff3600','#ff6d00','#ffa300','#ffda00','#ecff00','#b6ff00','#7fff00','#48ff00','#12ff00','#00ff24',
        '#00ff5b','#00ff91','#00ffc8','#00ffff','#00c8ff','#0091ff','#005bff','#0024ff','#1200ff','#4800ff','#7f00ff',
        '#b600ff','#ec00ff','#ff00da','#ff00a3','#ff006d','#ff0036'] // length = 28

        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' // length = 52

export const RandomColor = () => {

    const randomColorHandler = (index) => { return randomColor[ (index % 28) ]}
    const randomCharacterHandler = (index) => { return characters[ (index % 52) ]}

    return [randomColorHandler,randomCharacterHandler]
}