export default e => {
    if (!e) return
    let direction = +7

    if (e.offsetTop < window.scrollY) direction = -7

    const anime = () => {
        console.log(direction, window.scrollY)
        if (direction === +7 && window.scrollY >= e.offsetTop) {
            window.scroll(0, e.offsetTop)
            return
        } else if (direction === -7 && window.scrollY <= e.offsetTop) {
            window.scroll(0, e.offsetTop)
            return
        }

        window.scroll(0, window.scrollY + direction)
        setTimeout(anime, 1)
    }
    anime()
}
