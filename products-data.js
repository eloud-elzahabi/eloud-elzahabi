const DEFAULT_PERFUME_PRICES = {
    "30 مل": 150,
    "50 مل": 250,
    "100 مل": 400
};

const KHAMRAH_OASIS_PRICES = {
    "30 مل": 200,
    "50 مل": 300,
    "100 مل": 450
};

const SYMPHONY_PRICES = {
    "30 مل": 250,
    "50 مل": 350,
    "100 مل": 500
};

const DEFAULT_SPLASH_PRICES = {
    "150 مل": 70
};

const KHAMRAH_SPLASH_PRICES = {
    "150 مل": 100
};

const MAKHMARAT_PRICES = {
    "50 جرام": 30
};

const MAKHMARAT_IMAGE = "products/bodymusk/p1.png";

const MEN_BASE_ITEMS = [
    {
        slug: "marbat-man",
        nameAr: "ماربت مان",
        nameEn: "Marbat Man",
        image: "products/men/pm2.jpg",
        notesImage: "products/men/notat/n1.jpg",
        prices: DEFAULT_PERFUME_PRICES,
        noteAr: "عطر رجالي ألماني كلاسيكي يجمع بين الانتعاش العشبي والدفء الخشبي في تركيبة متوازنة وأنيقة، يتميز برائحة نظيفة وهادئة تبدأ بنفحات حمضية وعطرية ثم تستقر على قاعدة دافئة من الجلود والأخشاب تدوم لساعات، مما يجعله خياراً عملياً للعمل والاستخدام اليومي.\n\nالمكونات:\n• المقدمة: اللافندر، البرغموت، الريحان، والأرطميسيا.\n• القلب: العسل الأبيض، القرفة، القرنفل، إبرة الراعي، وتوت العرعر.\n• القاعدة: الجلود، خشب الأرز، خشب الصندل، طحلب البلوط، الباتشولي، العنبر، والمسك.",
        noteEn: "A classic German men's fragrance blending herbal freshness with woody warmth in a balanced, refined composition. Clean and calm, it opens with citrus and aromatic notes before settling onto a warm base of leather, woods, amber, and musk that lasts for hours—making it an ideal choice for work and everyday wear.\n\nNotes:\n• Top: Lavender, Bergamot, Basil, Artemisia.\n• Heart: White Honey, Cinnamon, Clove, Geranium, Juniper Berry.\n• Base: Leather, Cedarwood, Sandalwood, Oakmoss, Patchouli, Amber, Musk."
    },
    {
        slug: "black-afgano",
        nameAr: "بلاك افغانو",
        nameEn: "Black Afgano",
        image: "products/men/pm4.jpg",
        notesImage: "products/men/notat/n2.jpg",
        prices: KHAMRAH_OASIS_PRICES,
        noteAr: "عطر خشبي أروماتيك داكن يجمع بين الروائح الدخانية العميقة والدفء الشرقي في تركيبة مركزة وقوية، يتميز بطابع غامق وجريء يتركز على العود، البخور، والقهوة المحمصة مع ثبات وفوحان عاليين، مما يجعله خياراً مثالياً للمناسبات المسائية والأجواء الباردة.\n\nالمكونات:\n• المقدمة: القنب، النوتات الخضراء، الزعفران، الزعتر، وعشبة الدافانا.\n• القلب: الراتنجات، الأخشاب، التبغ، القهوة، القرفة، البنفسج، وتوت العليق.\n• القاعدة: العود، البخور، العنبر، أخشاب الغاياك، خشب الأرز، المسك، التونكا، الفانيليا، والأمبروكسان.",
        noteEn: "A dark woody aromatic fragrance blending deep smoky accords with oriental warmth in a rich, intense composition. Bold and mysterious, it centers on oud, incense, and roasted coffee with high longevity and projection—ideal for evening occasions and cold weather.\n\nNotes:\n• Top: Cannabis, Green Notes, Saffron, Thyme, Davana.\n• Heart: Resins, Woods, Tobacco, Coffee, Cinnamon, Violet, Raspberry.\n• Base: Oud, Incense, Amber, Guaiac Wood, Cedarwood, Musk, Tonka, Vanilla, Ambroxan."
    },
    {
        slug: "one-man-show",
        nameAr: "ون مان شو",
        nameEn: "One Man Show",
        image: "products/men/pm3.jpg",
        notesImage: "products/men/notat/n3.jpg",
        prices: DEFAULT_PERFUME_PRICES,
        noteAr: "عطر رجالي فرنسي كلاسيكي يتميز بطابع عشبي وخشبي قوي وثابت، يجمع بين الانتعاش الأخضر لأشواك الصنوبر والريحان في البداية، ثم يستقر على قاعدة دافئة من الجلود والتوابل وطحلب البلوط؛ مما يمنحه حضوراً رجولياً واضحاً وثابتاً يدوم طويلاً.\n\nالمكونات:\n• المقدمة: الريحان، البرغموت، الشيح، والكراوية.\n• القلب: أشواك الصنوبر، جوزة الطيب، القرنفل، الباتشولي، ونجيل الهند.\n• القاعدة: الجلود، طحلب البلوط، خشب الأرز، خشب الصندل، والعنبر.",
        noteEn: "A classic French men's fragrance featuring a bold, long-lasting herbal and woody character. It blends the green freshness of pine needles and basil at the opening before settling onto a warm base of leather, spices, and oakmoss—giving it a distinct, lasting masculine presence.\n\nNotes:\n• Top: Basil, Bergamot, Wormwood, Caraway.\n• Heart: Pine Needles, Nutmeg, Clove, Patchouli, Vetiver.\n• Base: Leather, Oakmoss, Cedarwood, Sandalwood, Amber."
    },
    {
        slug: "cigar",
        nameAr: "سيجار",
        nameEn: "Cigar",
        image: "products/men/pm3.jpg",
        notesImage: "products/men/notat/n4.jpg",
        prices: DEFAULT_PERFUME_PRICES,
        noteAr: "عطر رجالي فرنسي كلاسيكي يجمع بين دفء أوراق التبغ ولمسة فاكهية جذابة، تبدأ رائحته بنفحات منعشة وحلوة من البرقوق والأناناس، ثم تستقر على قاعدة غنية من التبغ والباتشولي والأخشاب؛ مما يمنحه ثباتاً جيداً وطابعاً رجولياً دافئاً يناسب مختلف الأوقات.\n\nالمكونات:\n• المقدمة: البرقوق، الأناناس، البرغموت، الكمثرى، والليمون.\n• القلب: ورق اللورا، إبرة الراعي، الياسمين، وزهرة القطيفة.\n• القاعدة: أوراق التبغ، الباتشولي، خشب الصندل، خشب الأرز، والمسك.",
        noteEn: "A classic French men's fragrance combining the warmth of tobacco leaves with an alluring fruity touch. It opens with fresh, sweet notes of plum and pineapple before settling onto a rich base of tobacco, patchouli, and woods—offering solid longevity and a warm masculine character suitable for any occasion.\n\nNotes:\n• Top: Plum, Pineapple, Bergamot, Pear, Lemon.\n• Heart: Bay Leaf, Geranium, Jasmine, Marigold.\n• Base: Tobacco Leaf, Patchouli, Sandalwood, Cedarwood, Musk."
    },
    {
        slug: "chance-chanel",
        nameAr: "شانس شانل",
        nameEn: "Chance Chanel",
        image: "products/men/pm6.jpg",
        notesImage: "products/men/notat/n5.jpg",
        prices: DEFAULT_PERFUME_PRICES,
        noteAr: "عطر رجالي وشبابي منعش يتميز برائحة نظيفة وحيوية تجمع بين الحمضيات والأخشاب، يبدأ بنفحات مشرقة من الليمون والبرغموت مع لمسة خفيفة من الفلفل الوردي، ثم يستقر على قاعدة هادئة من المسك الأبيض ونجيل الهند والأخشاب؛ مما يجعله خياراً مثالياً للعمل والاستخدام اليومي.\n\nالمكونات:\n• المقدمة: الليمون، البرغموت، والفلفل الوردي.\n• القلب: الياسمين، زهرة السوسن، وصفير الماء.\n• القاعدة: خشب الساج، نجيل الهند، الباتشولي، المسك الأبيض، والعنبر.",
        noteEn: "A fresh, youthful fragrance featuring a clean, vibrant scent that blends citrus and woods. It opens with bright notes of lemon and bergamot with a subtle touch of pink pepper, then settles onto a calm base of white musk, vetiver, and woods—making it an ideal choice for work and everyday wear.\n\nNotes:\n• Top: Lemon, Bergamot, Pink Pepper.\n• Heart: Jasmine, Iris, Water Hyacinth.\n• Base: Teak Wood, Vetiver, Patchouli, White Musk, Amber."
    },
    {
        slug: "le-male-elixir",
        nameAr: "لو مال الكسير",
        nameEn: "Le Male Elixir",
        image: "products/men/pm3.jpg",
        notesImage: "products/men/notat/n6.jpg",
        prices: KHAMRAH_OASIS_PRICES,
        inStock: false,
        noteAr: "عطر فرنسي رجالي دافئ وجذاب يجمع بين العسل والفانيليا وعمق التبغ، يبدأ بنفحات منعشة من اللافندر والنعناع تكسر حدة الحلاوة، ثم يستقر على قاعدة غنية وثابتة من العسل وحبوب التونكا وأوراق التبغ؛ مما يمنحه فوحاناً قوياً وحضوراً لافتاً يدوم لساعات طويلة.\n\nالمكونات:\n• المقدمة: اللافندر، والنعناع.\n• القلب: الفانيليا، والبنزوين.\n• القاعدة: العسل، حبوب التونكا، والتبغ.",
        noteEn: "A warm, captivating French men's fragrance blending honey, vanilla, and deep tobacco. It opens with refreshing notes of lavender and mint to balance the sweetness, then settles onto a rich, long-lasting base of honey, tonka bean, and tobacco leaves—delivering strong projection and a striking presence for hours.\n\nNotes:\n• Top: Lavender, Mint.\n• Heart: Vanilla, Benzoin.\n• Base: Honey, Tonka Bean, Tobacco."
    },
    {
        slug: "khamrah-oasis",
        nameAr: "خمرة واحة مميزة",
        nameEn: "Khamrah Oasis Special",
        image: "products/men/pm3.jpg",
        notesImage: "products/men/notat/n7.jpg",
        prices: KHAMRAH_OASIS_PRICES,
        noteAr: "عطر إماراتي يجمع بين الانتعاش المائي البارد والدفء الشرقي الناعم، يبدأ بنفحات منعشة من الحمضيات والزنجبيل والخيار وملح البحر، ثم يستقر على قاعدة دافئة وجذابة من الفانيليا وحبوب التونكا والأخشاب؛ مما يمنحه توازناً فريداً وثباتاً يدوم طويلاً.\n\nالمكونات:\n• المقدمة: البرغموت، اليوزو، توت العرعر، والزنجبيل.\n• القلب: الخيار، ملح البحر، المريمية، وزهرة السوسن.\n• القاعدة: الفانيليا، حبوب التونكا، المسك، أخشاب الأكيغالا، والأمبروفيكس.",
        noteEn: "An Emirati fragrance blending cool aquatic freshness with soft oriental warmth. It opens with refreshing notes of citrus, ginger, cucumber, and sea salt, then settles onto a warm, captivating base of vanilla, tonka bean, and woods—giving it a unique balance and long-lasting wear.\n\nNotes:\n• Top: Bergamot, Yuzu, Juniper Berry, Ginger.\n• Heart: Cucumber, Sea Salt, Sage, Iris.\n• Base: Vanilla, Tonka Bean, Musk, Akigalawood, Ambrofix."
    },
    { slug: "bianco-latte", nameAr: "بيانكو لاتية", nameEn: "Bianco Latte", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n8.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "acqua-di-gio", nameAr: "أكوا دي جيو", nameEn: "Acqua di Gio", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n9.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "jimmy-choo", nameAr: "جيمي شو", nameEn: "Jimmy Choo", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n10.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "bmw", nameAr: "بي ام دبليو", nameEn: "BMW", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n11.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "erba-pura", nameAr: "اربا بورا", nameEn: "Erba Pura", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n12.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "myslf", nameAr: "ماي سيلف", nameEn: "MYSLF", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n13.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "hugo", nameAr: "هوجو", nameEn: "Hugo", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n14.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "voyage", nameAr: "فوياج", nameEn: "Voyage", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n15.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "alterum", nameAr: "التراميل", nameEn: "Alterum", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n16.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "valentino", nameAr: "فلانتينو", nameEn: "Valentino", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n17.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "rose-vanilla", nameAr: "روز فانيليا", nameEn: "Rose Vanilla", image: "products/men/pm6.jpg", notesImage: "products/men/notat/n18.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "stronger-with-you", nameAr: "استرونجر", nameEn: "Stronger With You", image: "products/men/pm3.jpg", notesImage: "products/men/notat/n19.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "sauvage", nameAr: "سوفاج", nameEn: "Sauvage", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n20.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "dunhill", nameAr: "دانهل", nameEn: "Dunhill", image: "products/men/pm3.jpg", notesImage: "products/men/notat/n21.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "egoiste-platinum", nameAr: "ايجوست بلاتينيوم", nameEn: "Egoiste Platinum", image: "products/men/pm1.jpg", notesImage: "products/men/notat/n22.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "1-million", nameAr: "ون مليون", nameEn: "1 Million", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n23.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "sculpture", nameAr: "سكلبشر", nameEn: "Sculpture", image: "products/men/pm5.jpg", notesImage: "products/men/notat/n24.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "silver-scent", nameAr: "سلفر سنت", nameEn: "Silver Scent", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n25.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "black-orchid", nameAr: "بلاك اوركيد", nameEn: "Black Orchid", image: "products/men/pm4.jpg", notesImage: "products/men/notat/n26.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "tobacco-vanille", nameAr: "توباكو فانيليا", nameEn: "Tobacco Vanille", image: "products/men/pm4.jpg", notesImage: "products/men/notat/n27.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "versace-eros", nameAr: "فيرزاتش ايروس", nameEn: "Versace Eros", image: "products/men/pm5.jpg", notesImage: "products/men/notat/n28.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "azzaro", nameAr: "ازارو", nameEn: "Azzaro", image: "products/men/pm2.jpg", notesImage: "products/men/notat/n29.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "symphony", nameAr: "سيمفوني", nameEn: "Symphony", image: "products/men/pm6.jpg", notesImage: "products/men/notat/n30.jpg", prices: SYMPHONY_PRICES }
];

const WOMEN_BASE_ITEMS = [
    { slug: "scandal", nameAr: "سكاندل", nameEn: "Scandal", image: "products/women/pw3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "into-the-night", nameAr: "انتو ذا نايت", nameEn: "Into The Night", image: "products/women/pw4.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "libre", nameAr: "ليبرا", nameEn: "Libre", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "escada-taj", nameAr: "اسكادا تاج", nameEn: "Escada Taj Sunset", image: "products/women/pw3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "escada-turquoise", nameAr: "اسكادا تركوزا", nameEn: "Escada Turquoise Summer", image: "products/women/pw1.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "pink-sugar", nameAr: "بينك شوجر", nameEn: "Pink Sugar", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "champion-toast", nameAr: "شامبيون توست", nameEn: "Champion Toast", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "dark-kiss", nameAr: "دارك كيس", nameEn: "Dark Kiss", image: "products/women/pw4.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "gucci-rush", nameAr: "جوتش راش", nameEn: "Gucci Rush", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "dahlia", nameAr: "داليا", nameEn: "Dahlia", image: "products/women/pw3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "yara-candy", nameAr: "يارا كاندي", nameEn: "Yara Candy", image: "products/women/pw3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "good-girl", nameAr: "جود جيرل - good girl", nameEn: "Good Girl", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "japanese-cherry", nameAr: "جابانيز تشيري", nameEn: "Japanese Cherry Blossom", image: "products/women/pw1.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "si-passione", nameAr: "سي باشون", nameEn: "Si Passione", image: "products/women/pw3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "perceive-women", nameAr: "برسيف حريمي", nameEn: "Perceive Women", image: "products/women/pw1.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "roberto-cavalli", nameAr: "روبيرتو كافالي", nameEn: "Roberto Cavalli", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "hawaii", nameAr: "هواي", nameEn: "Hawaii", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "olympea", nameAr: "اولومبيا", nameEn: "Olympéa", image: "products/women/pw3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "georgina", nameAr: "جورجينا", nameEn: "Georgina", image: "products/women/pw2.jpg", prices: DEFAULT_PERFUME_PRICES }
];

const ORIENTAL_BASE_ITEMS = [
    { slug: "white-oud", nameAr: "عود ابيض", nameEn: "White Oud", image: "products/oud/p1.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "oud-bouquet", nameAr: "عود بوكية", nameEn: "Oud Bouquet", image: "products/oud/p2.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "oud-kalemat", nameAr: "عود كلمات", nameEn: "Oud Kalemat", image: "products/oud/p3.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "oud-wisal", nameAr: "عود وصال", nameEn: "Oud Wisal", image: "products/oud/p4.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "arabians-tonka", nameAr: "اربيان تونكا", nameEn: "Arabians Tonka", image: "products/oud/p5.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "royal-oud", nameAr: "عود ملكي", nameEn: "Royal Oud", image: "products/oud/p6.jpg", prices: DEFAULT_PERFUME_PRICES },
    { slug: "thousand-one-nights", nameAr: "عود الف ليلة وليلة", nameEn: "One Thousand and One Nights Oud", image: "products/oud/p7.jpg", prices: DEFAULT_PERFUME_PRICES }
];

const BODY_SPLASH_IMAGES_BY_SLUG = {
    "acqua-di-gio": "products/bodysplash/pbs1.jpg",
    "erba-pura": "products/bodysplash/pbs1.jpg",
    "myslf": "products/bodysplash/pbs1.jpg",
    "voyage": "products/bodysplash/pbs1.jpg",
    "egoiste-platinum": "products/bodysplash/pbs1.jpg",
    "bmw": "products/bodysplash/pbs1.jpg",
    "sauvage": "products/bodysplash/pbs1.jpg",
    "valentino": "products/bodysplash/pbs1.jpg",
    "perceive-women": "products/bodysplash/pbs1.jpg",
    "japanese-cherry": "products/bodysplash/pbs1.jpg",
    "escada-turquoise": "products/bodysplash/pbs1.jpg",

    "marbat-man": "products/bodysplash/pbs2.jpg",
    "alterum": "products/bodysplash/pbs2.jpg",
    "silver-scent": "products/bodysplash/pbs2.jpg",
    "jimmy-choo": "products/bodysplash/pbs2.jpg",
    "bianco-latte": "products/bodysplash/pbs2.jpg",
    "1-million": "products/bodysplash/pbs2.jpg",
    "azzaro": "products/bodysplash/pbs2.jpg",
    "hugo": "products/bodysplash/pbs2.jpg",
    "libre": "products/bodysplash/pbs2.jpg",
    "pink-sugar": "products/bodysplash/pbs2.jpg",
    "champion-toast": "products/bodysplash/pbs2.jpg",
    "gucci-rush": "products/bodysplash/pbs2.jpg",
    "good-girl": "products/bodysplash/pbs2.jpg",
    "roberto-cavalli": "products/bodysplash/pbs2.jpg",
    "georgina": "products/bodysplash/pbs2.jpg",
    "hawaii": "products/bodysplash/pbs2.jpg",

    "one-man-show": "products/bodysplash/pbs3.jpg",
    "cigar": "products/bodysplash/pbs3.jpg",
    "le-male-elixir": "products/bodysplash/pbs3.jpg",
    "khamrah-oasis": "products/bodysplash/pbs3.jpg",
    "stronger-with-you": "products/bodysplash/pbs3.jpg",
    "dunhill": "products/bodysplash/pbs3.jpg",
    "dark-kiss": "products/bodysplash/pbs3.jpg",

    "chance-chanel": "products/bodysplash/pbs4.jpg",
    "rose-vanilla": "products/bodysplash/pbs4.jpg",
    "scandal": "products/bodysplash/pbs4.jpg",
    "escada-taj": "products/bodysplash/pbs4.jpg",
    "dahlia": "products/bodysplash/pbs4.jpg",
    "yara-candy": "products/bodysplash/pbs4.jpg",
    "si-passione": "products/bodysplash/pbs4.jpg",
    "olympea": "products/bodysplash/pbs4.jpg",

    "versace-eros": "products/bodysplash/pbs5.jpg",
    "sculpture": "products/bodysplash/pbs5.jpg",

    "symphony": "products/bodysplash/pbs6.jpg",
    "into-the-night": "products/bodysplash/pbs6.jpg",

    "black-afgano": "products/bodysplash/pbs7.jpg",
    "tobacco-vanille": "products/bodysplash/pbs7.jpg",
    "black-orchid": "products/bodysplash/pbs7.jpg"
};

const ALL_SCENT_ITEMS = [...MEN_BASE_ITEMS, ...WOMEN_BASE_ITEMS];

const menProducts = MEN_BASE_ITEMS.map((item, idx) => ({
    id: `men-${idx + 1}`,
    category: "men",
    hasDiscount: false,
    inStock: item.inStock !== false,
    image: item.image || "",
    notesImage: item.notesImage || "",
    defaultSize: "30 مل",
    prices: { ...item.prices },
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    noteAr: item.noteAr || "",
    noteEn: item.noteEn || ""
}));

const womenProducts = WOMEN_BASE_ITEMS.map((item, idx) => ({
    id: `women-${idx + 1}`,
    category: "women",
    hasDiscount: false,
    inStock: item.inStock !== false,
    image: item.image || "",
    notesImage: item.notesImage || "",
    defaultSize: "30 مل",
    prices: { ...item.prices },
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    noteAr: item.noteAr || "",
    noteEn: item.noteEn || ""
}));

const orientalProducts = ORIENTAL_BASE_ITEMS.map((item, idx) => ({
    id: `oriental-${idx + 1}`,
    category: "oriental",
    hasDiscount: false,
    inStock: item.inStock !== false,
    image: item.image || "",
    notesImage: item.notesImage || "",
    defaultSize: "30 مل",
    prices: { ...item.prices },
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    noteAr: item.noteAr || "",
    noteEn: item.noteEn || ""
}));

const splashProducts = ALL_SCENT_ITEMS.map((item, idx) => ({
    id: `splash-${idx + 1}`,
    category: "splash",
    hasDiscount: false,
    inStock: item.inStock !== false,
    image: BODY_SPLASH_IMAGES_BY_SLUG[item.slug] || "",
    notesImage: "",
    defaultSize: "150 مل",
    prices: item.slug === "khamrah-oasis" ? { ...KHAMRAH_SPLASH_PRICES } : { ...DEFAULT_SPLASH_PRICES },
    nameAr: `بادي سبلاش ${item.nameAr}`,
    nameEn: `${item.nameEn} Body Splash`,
    noteAr: "",
    noteEn: ""
}));

const makhmaratProducts = [
    ...ALL_SCENT_ITEMS.map((item, idx) => ({
        id: `makhmarat-${idx + 1}`,
        category: "makhmarat",
        hasDiscount: false,
        inStock: item.inStock !== false,
        image: MAKHMARAT_IMAGE,
        notesImage: "",
        defaultSize: "50 جرام",
        prices: { ...MAKHMARAT_PRICES },
        nameAr: `مخمرية ${item.nameAr}`,
        nameEn: `${item.nameEn} Makhmarah`,
        noteAr: "",
        noteEn: ""
    })),
    {
        id: `makhmarat-${ALL_SCENT_ITEMS.length + 1}`,
        category: "makhmarat",
        hasDiscount: false,
        inStock: true,
        image: MAKHMARAT_IMAGE,
        notesImage: "",
        defaultSize: "50 جرام",
        prices: { ...MAKHMARAT_PRICES },
        nameAr: "مخمرية ستروبري باوند كيك",
        nameEn: "Strawberry Pound Cake Makhmarah",
        noteAr: "",
        noteEn: ""
    }
];

window.GOLDEN_OUD_PRODUCTS = [
    ...menProducts,
    ...womenProducts,
    ...orientalProducts,
    ...splashProducts,
    ...makhmaratProducts
];