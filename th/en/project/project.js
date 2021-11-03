window.styleMenu = null;
const UNIQID = "616f733759c29";
const TEMPLATE_URL = 'https://theshift.tokyo/wp-content/themes/the-shift';
const SITE_URL = 'https://theshift.tokyo/';
const CDN_URL = 'https://d17292ff19wl6v.cloudfront.net/v2';
const SCRIPT_FOR_DESKTOP = "../../wp-content/themes/the-shift/assets/js/prod-desktop3d22.js?616f733759c62";
const SCRIPT_FOR_MOBILE  = "../../wp-content/themes/the-shift/assets/js/prod-mobile52f0.js?616f733759c75";
const THUMB = [
{
    // aeroplane
    title: "JAL SKY MUSEUM",
    post_id: "580",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1201",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1201&w=1800",
        d1x: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
        mob: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720",
    }
}, {
    // race
    title: "Onerace",
    post_id: "192",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "856",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=856&w=1800",
        d1x: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=571&w=1200",
        mob: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=343&w=720",
    }
}, {
    // dark city
    title: "JAL STEAM SCHOOL",
    post_id: "193",
    type: "project",
    media: "image",
    ratio: {
        w: "1558",
        h: "862",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=862&w=1558",
        d1x: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=664&w=1200",
        mob: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=398&w=720",
    }
}, {
    // vr
    title: "Finding Perceptions",
    post_id: "484",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1202",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1202&w=1800",
        d1x: "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=801&w=1200",
        mob: "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=481&w=720",
    }
}, {
    // lighter
    title: "Co-ca cola coke vision",
    post_id: "604",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1200",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/1342650/pexels-photo-1342650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800",
        d1x: "https://images.pexels.com/photos/1342650/pexels-photo-1342650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
        mob: "https://images.pexels.com/photos/1342650/pexels-photo-1342650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720",
    }
}, {
    // light tail vr
    title: "Nissan IMx Demonstrator",
    post_id: "496",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1200",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800",
        d1x: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
        mob: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720",
    }
}, {
    // motion people 
    title: "kolor PARISCollection",
    post_id: "189",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1013",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1013&w=1800",
        d1x: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=675&w=1200",
        mob: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=405&w=720",
    }
}, {
    // fire skate
    title: "Munch in motion",
    post_id: "184",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1200",
    },
    video: {
        src: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2017/07/24102412/kolor.mp4",
    },
    image: {
        d2x: "https://images.pexels.com/photos/4816811/pexels-photo-4816811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800",
        d1x: "https://images.pexels.com/photos/4816811/pexels-photo-4816811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
        mob: "https://images.pexels.com/photos/4816811/pexels-photo-4816811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720",
    }
}, {
    // child
    title: "PPP CI renewal",
    post_id: "183",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1200",
    },
    video: {
        src: "/wp-content/uploads/2021/07/1280x720.mp4",
    },
    image: {
        d2x: "https://images.pexels.com/photos/2002719/pexels-photo-2002719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800",
        d1x: "https://images.pexels.com/photos/2002719/pexels-photo-2002719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
        mob: "https://images.pexels.com/photos/2002719/pexels-photo-2002719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720",
    }
}, {
    // cracker
    title: "Electro Fork",
    post_id: "557",
    type: "project",
    media: "image",
    ratio: {
        w: "1800",
        h: "1089",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/4816805/pexels-photo-4816805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1089&w=1800",
        d1x: "https://images.pexels.com/photos/4816805/pexels-photo-4816805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=726&w=1200",
        mob: "https://images.pexels.com/photos/4816805/pexels-photo-4816805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=436&w=720",
    }
}, {
    // tasty ice
    title: "Imaginary Sweets",
    post_id: "710",
    type: "research",
    media: "image",
    ratio: {
        w: "1256",
        h: "904",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=904&w=1256",
        d1x: "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=864&w=1200",
        mob: "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=518&w=720",
    }
}, {
    title: "BorderLESS",
    post_id: "275",
    type: "research",
    media: "image",
    ratio: {
        w: "841",
        h: "480",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/07/20231317/2-1%402x.jpg",
        d1x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/07/20231317/2-1%402x.jpg",
        mob: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/07/20231317/2-1%402x-720x411.jpg",
    }
}, {
    title: "[A] Marque Exploration",
    post_id: "1337",
    type: "research",
    media: "image",
    ratio: {
        w: "1800",
        h: "1276",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/10/13192425/Screenshot-2021-10-12-at-19.03.07-1800x1276.jpg",
        d1x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/10/13192425/Screenshot-2021-10-12-at-19.03.07-1200x851.jpg",
        mob: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/10/13192425/Screenshot-2021-10-12-at-19.03.07-720x510.jpg",
    }
}, {
    title: "The Shift Book",
    post_id: "355",
    type: "research",
    media: "image",
    ratio: {
        w: "1800",
        h: "1200",
    },
    video: {
        src: "",
    },
    image: {
        d2x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/08/20231842/0915_aircord_raw74751-1800x1200.jpg",
        d1x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/08/20231842/0915_aircord_raw74751-1200x800.jpg",
        mob: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/08/20231842/0915_aircord_raw74751-720x480.jpg",
    }
}, {
    post_id: "team-0",
    type: "team",
    media: "image",
    ratio: {
        w: "1440",
        h: "960",
    },
    image: {
        d2x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/08/20231900/ata1086s-1-1440x960.jpg",
        d1x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/08/20231900/ata1086s-1-720x480.jpg",
        mob: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/08/20231900/ata1086s-1-450x300.jpg",
    }
}, {
    post_id: "team-1",
    type: "team",
    media: "image",
    ratio: {
        w: "1440",
        h: "1080",
    },
    image: {
        d2x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/08140739/profile-1440x1080.jpg",
        d1x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/08140739/profile-720x540.jpg",
        mob: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/08140739/profile-450x337.jpg",
    }
}, {
    post_id: "team-2",
    type: "team",
    media: "image",
    ratio: {
        w: "1440",
        h: "1080",
    },
    image: {
        d2x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/08073100/IMG_4126-1440x1080.jpg",
        d1x: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/08073100/IMG_4126-720x540.jpg",
        mob: "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2021/09/08073100/IMG_4126-450x338.jpg",
    }
}, ];