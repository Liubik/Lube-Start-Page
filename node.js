const backgrounds = [
    "https://i.4cdn.org/w/1578382494355.jpg",
    "https://i.4cdn.org/w/1610796437867.jpg",
    "https://i.4cdn.org/w/1578382534663.jpg",
    "https://i.4cdn.org/w/1648155828175.png",
    "https://i.4cdn.org/w/1648235902794.jpg",
    "https://i.4cdn.org/w/1648300577829.jpg",
    "https://i.4cdn.org/w/1648307490525.jpg",
    "https://i.4cdn.org/w/1648844597889.jpg",
    "https://i.4cdn.org/w/1649539222601.png",
    "https://i.4cdn.org/w/1650184524495.jpg",
    "https://i.4cdn.org/w/1650074343550.jpg",
    "https://i.4cdn.org/w/1650812205426.png",
    "https://i.4cdn.org/w/1651434558255.jpg",
    "https://i.4cdn.org/w/1652762583626.jpg"
]

const randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
