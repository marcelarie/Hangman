const hangManLetters = document.querySelectorAll('.letterButton');
let correct = true;
hangManLetters.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.add('visibilityHidden')
        fail();
        for (c in levelWord) {
            if (levelWord[c] === e.textContent) {
                let newHidden = hidden.replaceAt(c, levelWord[c])
                hidden = newHidden;
                hangManGuessLetters.textContent = newHidden;
            } else {
                correct = false;
            }
        }
    })
})

let hidden = '';
var wordsLevel1 = ["age", "all", "and", "as", "ask", "ate", "baby", "bake", "ball", "ball", "band", "bask", "bay", "bee", "beef", "beep", "beet", "bell", "bent", "best", "bike", "bird", "boat", "bold", "bone", "book", "bow", "bow", "bowl", "boy", "bump", "bus", "by", "cage", "cake", "call", "car", "cat", "cold", "cone", "cook", "cow", "cow", "crow", "cry", "cube", "dad", "damp", "date", "day", "deep", "deer", "dent", "die", "dike", "dog", "doll", "dry", "duck", "dump", "dust", "eat", "fake", "fall", "fate", "feet", "fell", "find", "five", "fold", "fork", "four", "fray", "frog", "fry", "game", "gate", "get", "girl", "got", "gray", "gust", "had", "hall", "hand", "hate", "have", "hay", "heat", "her", "her", "here", "hide", "hike", "him", "hind", "his", "hoe", "hold", "home", "how", "hump", "if", "in", "is", "it", "jeep", "kind", "lake", "lamp", "land", "late", "law", "lawn", "lent", "lie", "like", "lion", "low", "lump", "make", "mall", "mall", "mask", "mate", "may", "meat", "meet", "mind", "mine", "mold", "mom", "mow", "must", "now", "one", "ours", "page", "paw", "paw", "pay", "peep", "pest", "pie", "pike", "plane", "play", "pond", "pray", "pump", "rage", "rate", "raw", "raw", "ray", "rest", "ride", "room", "rust", "said", "saw", "saw", "say", "say", "seat", "six", "sold", "spoon", "stamp", "stow", "stray", "take", "tall", "task", "tent", "test", "them", "there", "they", "three", "tie", "toe", "told", "took", "tow", "toy", "train", "truck", "try", "tube", "two", "wall", "way", "well", "west", "wide", "with", "wow", "zoo", "about", "above", "animal", "back", "been", "bell", "below", "black", "block", "blow", "boat", "bone", "brick", "broom", "brown", "called", "chop", "clay", "clock", "clown", "coat", "code", "come", "could", "deep", "dime", "down", "drive", "drop", "duck", "each", "feel", "fell", "find", "first", "five", "float", "flow", "foot", "free", "from", "game", "glad", "good", "grass", "green", "grow", "have", "heat", "hole", "hook", "huge", "into", "kick", "legs", "less", "light", "like", "lime", "load", "long", "look", "luck", "made", "make", "many", "mine", "moon", "more", "must", "name", "need", "nest", "nice", "nose", "note", "number", "other", "page", "part", "people", "play", "plow", "pool", "race", "rock", "roof", "roots", "rose", "sack", "said", "seed", "sell", "shake", "shell", "ship", "shop", "show", "shut", "sick", "skin", "sled", "snack", "snow", "soak", "soap", "sock", "soil", "some", "spin", "spoke", "spoon", "stay", "stick", "stood", "stop", "stuck", "suck", "summer", "sure", "tame", "tape", "tell", "than", "that", "their", "them", "then", "there", "these", "they", "thin", "this", "time", "took", "tooth", "tower", "town", "tray", "tree", "trip", "truck", "vote", "water", "weather", "well", "were", "what", "when", "which", "will", "wise", "with", "wood", "words", "would", "write", "your"];
var wordsLevel2 = ["allegator", "almoner", "anchusa", "apprehend", "argle-bargle", "baksheesh", "bamboo", "bamboozled", "bazinga", "berserker", "bevy", "bibble", "bifurcate", "beelzebub", "blackguard", "blinker", "blowhole", "blubber", "blunderbuss", "bobolink", "bogey", "bombastic", "botchy", "bowline", "braggart", "brouhaha", "buccaneer", "bulgur", "bumbershoot", "bumfuzzle", "bumpkin", "bust", "calabash", "canoodle", "cantankerous", "carbuncle", "cattywampus", "cheeky", "cheesecake", "chockablock", "chortle", "clapboard", "cloying", "clubfooted", "cockamamie", "codswallop", "collop", "collywobbles", "conniption", "coot", "couscous", "crapulence", "crudivore", "crumple", "cruse", "curlicue", "currish", "daedal", "debauchery", "deckle", "didgeridoo", "dillydally", "dingy", "dither", "dithyramb", "daff", "dollop", "doodle", "doohickey", "doozy", "drivel", "droll", "dullard", "dumbfounded", "vacuum", "eschew", "ewer", "fancywork", "fard", "fartlek", "fatuous", "feeble", "festooned", "fiddledeedee", "filibuster", "finagle", "finicky", "fizgig", "flanker", "floozy", "flummox", "formication", "frippery", "fuddy-duddy", "fuggy", "fungible", "furphy", "gamin", "gardyloo", "gargoyle", "gastromancy", "gibbous", "giggle", "girdle", "gnomon", "gobbledygook", "gobsmacked", "goggles", "gonzo", "googolplex", "goombah", "grog", "gubbins", "gumption", "gunky", "haft", "haphazard", "hen-peck", "hocus-pocus", "hodgepodge", "hogwash", "hoodwink", "hootenanny", "hornswoggle", "hubbub", "huisache", "hullabaloo", "indubitably", "itty-bitty", "jackanapes", "jambeau", "janky", "jape", "jerkin", "jest", "juggernaut", "jumble", "kahuna", "kameez", "katydid", "kerfuffle", "kerplunk", "kinkajou", "kismet", "klutz", "knickers", "la-di-da", "lickspittle", "lollygag", "loopy", "malarkey", "manscape", "maverick", "mawkish", "mealymouthed", "meme", "mojo", "mollycoddle", "monkey", "mugwump", "namby-pamby", "nautch", "nincompoop", "noggin", "nosegay", "nudnik", "ornery", "outflow", "paltry", "pannikin", "pantaloons", "passel", "persnickety", "pettifogger", "piddling", "piffling", "pleach", "pogey", "pompous", "pontoon", "prim", "primp", "proctor", "quizzical", "ragamuffin", "rambunctious", "ramshackle", "ranivorous", "rapscallion", "rigmarole", "rinderpest", "rookery", "rumpus", "feng shui", "scootch", "scrivener", "scuppernong", "scuttlebutt", "shebang", "shenanigans", "shrubs", "skedaddle", "skullduggery", "slangwhanger", "slapstick", "slipshod", "slosh", "smellfungus", "snafu", "snarky", "snickersnee", "snollygoster", "snooker", "snuffle", "soliloquy", "spelunker", "sphinx", "spork", "sprocket", "squabble", "squeegee", "squelch", "sthene", "succubus", "sully", "syzygy", "tally ho", "taradiddle", "tarboosh", "tater", "tiddlywinks", "tightwad", "tomalley", "topple", "troglodyte", "tunic", "viper", "vomitory", "wabbit", "waddle", "walkabout", "wasabi", "weasel", "wenis", "whatnot", "whorl", "widdershins", "wishy-washy", "wombat", "wonky", "xertz", "yahoo", "yarborough", "zeitgeist"]
var wordsLevel3 = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch ", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"];

const hangManGuessLetters = document.getElementById('hangManGuessLetters')

let levelWord = '';
let word1 = wordsLevel1[Math.floor(Math.random() * wordsLevel1.length)];
let word2 = wordsLevel2[Math.floor(Math.random() * wordsLevel2.length)];
let word3 = wordsLevel3[Math.floor(Math.random() * wordsLevel3.length)];

function showTheWord() {
    if (level === 1) {
        return levelWord = word1.toUpperCase();
        //hangManGuessLetters.textContent = word1;
    } else if (level === 2) {
        return levelWord = word2.toUpperCase();
        //hangManGuessLetters.textContent = word2;
    } else {
        return levelWord = word3.toUpperCase();
        //hangManGuessLetters.textContent = word3;
    };
};

function hiddenCharacters() {
    for (w in levelWord) {
        hidden += '_';
    }
    hangManGuessLetters.textContent = hidden;
}

function runTheGame() {
    showTheWord();
    hiddenCharacters();
}

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    var chars = this.split('');
    chars[index] = '';
    chars[index] = replacement;
    if (chars.length > levelWord.length) {
        chars.pop();
    }
    return chars.join('');
}

