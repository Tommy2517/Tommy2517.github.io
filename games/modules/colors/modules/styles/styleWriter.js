class StyleWriter {
    write = (objects, styles) => {
        for (const obj of objects) {
            for (const styleKey in styles) {
                obj.style[styleKey] = styles[styleKey]
            }
        }
    }
}

export const styleWriter = new StyleWriter()