export default e => {
    if (!e) return;

    const anime = () => {
        if (window.scrollY >= e.offsetTop) return;
        window.scroll(0, window.scrollY + 7)
        setTimeout(anime, 1)
    }
    anime()
}
