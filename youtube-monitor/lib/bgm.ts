import { partType } from "./time_table"

export type Bgm = {
    title: string
    artist: string
    file: string
    forPart: string[]
}

export function getCurrentRandomBgm(currentPartName: string): Bgm {
    const bgm_list: Bgm[] = []
    for (const bgm of (LofiGirlBgmTable)) {
        if (bgm.forPart.includes(currentPartName)) {
            bgm_list.push(bgm)
        }
    }
    if (bgm_list.length > 0) {
        return bgm_list[Math.floor(Math.random() * bgm_list.length)]
    }
    console.error('failed to get current random bgm.')
    return bgm_list[0]
}

const AllPartType = [
    partType.Morning,
    partType.BeforeNoon,
    partType.Noon,
    partType.AfterNoon1,
    partType.AfterNoon2,
    partType.Evening,
    partType.Night1,
    partType.Night2,
    partType.MidNight1,
    partType.MidNight2,
    partType.EarlyMorning,
]

export const LofiGirlBgmTable: Bgm[] = [

    // Ages Ago
    {
        title: 'channel 12',
        artist: 'Flovry x tender spring',
        file: '/audio/lofigirl/Ages Ago/1. channel 12.mp3',
        forPart: AllPartType,
    },
    {
        title: 'recess',
        artist: 'Flovry x tender spring',
        file: '/audio/lofigirl/Ages Ago/2. recess.mp3',
        forPart: AllPartType,
    },
    {
        title: 'first heartbreak',
        artist: 'Flovry x tender spring',
        file: '/audio/lofigirl/Ages Ago/3. first heartbreak.mp3',
        forPart: AllPartType,
    },
    {
        title: 'backpack City',
        artist: 'Flovry x tender spring',
        file: '/audio/lofigirl/Ages Ago/4. backpack city.mp3',
        forPart: AllPartType,
    },
    {
        title: 'becoming',
        artist: 'Flovry x tender spring',
        file: '/audio/lofigirl/Ages Ago/5. becoming.mp3',
        forPart: AllPartType,
    },
    {
        title: 'c u in class !',
        artist: 'Flovry x tender spring',
        file: '/audio/lofigirl/Ages Ago/6. c u in class!.mp3',
        forPart: AllPartType,
    },
    // 1 A.M Study Session
    {
        title: 'Snowman',
        artist: 'WYS',
        file: '/audio/lofigirl/1 A.M Study Session/01 WYS - Snowman (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Cotton Cloud',
        artist: 'Fatb',
        file: '/audio/lofigirl/1 A.M Study Session/03 Fatb - Cotton Cloud (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'the places we used to walk',
        artist: 'rook1e x tender spring',
        file: '/audio/lofigirl/1 A.M Study Session/04 rook1e x tender spring - the places we used to walk (Kupla master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'wool gloves',
        artist: 'imagiro',
        file: '/audio/lofigirl/1 A.M Study Session/05 imagiro - wool gloves (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'I\'m sorry',
        artist: 'Glimlip x Yasper',
        file: '/audio/lofigirl/1 A.M Study Session/06 Glimlip x Yasper - I_m sorry (Mastered).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Nova',
        artist: 'mell-ø',
        file: '/audio/lofigirl/1 A.M Study Session/07 mell-ø - Nova (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'carried away',
        artist: 'goosetaf x the fields tape x francis',
        file: '/audio/lofigirl/1 A.M Study Session/08 goosetaf x the fields tape x francis - carried away (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'snow & sand',
        artist: 'j\'san x epektase',
        file: '/audio/lofigirl/1 A.M Study Session/09 j_san x epektase - snow _ sand (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Single Phial',
        artist: 'HM Surf',
        file: '/audio/lofigirl/1 A.M Study Session/10 HM Surf - Single Phial (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Drops',
        artist: 'Cocabona x Glimlip',
        file: '/audio/lofigirl/1 A.M Study Session/11 cocabona x Glimlip - Drops (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'espresso',
        artist: 'Aso',
        file: '/audio/lofigirl/1 A.M Study Session/12 Aso - espresso (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Luminescence',
        artist: 'Ambulo x mell-ø',
        file: '/audio/lofigirl/1 A.M Study Session/13 Ambulo x mell-ø - Luminescence (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Explorers',
        artist: 'DLJ x BIDØ',
        file: '/audio/lofigirl/1 A.M Study Session/14 DLJ x BIDØ - Explorers (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Wish You Were Mine',
        artist: 'Sarcastic Sounds',
        file: '/audio/lofigirl/1 A.M Study Session/15 Sarcastic Sounds - Wish You Were Mine (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Reflections',
        artist: 'BluntOne',
        file: '/audio/lofigirl/1 A.M Study Session/16 BluntOne - Reflections (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Alone Time',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/1 A.M Study Session/17 Purrple Cat - Alone Time (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Owls of the Night',
        artist: 'Kupla',
        file: '/audio/lofigirl/1 A.M Study Session/18 Kupla - Owls of the Night (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'amber',
        artist: 'ENRA',
        file: '/audio/lofigirl/1 A.M Study Session/19 ENRA - amber (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'fever',
        artist: 'Psalm Trees',
        file: '/audio/lofigirl/1 A.M Study Session/17 Purrple Cat - Alone Time (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Circle',
        artist: 'H.1v',
        file: '/audio/lofigirl/1 A.M Study Session/21 H.1 - Circle (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Cuddlin',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/1 A.M Study Session/22 Pandrezz - Cuddlin (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Late Night Call',
        artist: 'Jordy Chandra',
        file: '/audio/lofigirl/1 A.M Study Session/23 Jordy Chandra - Late Night Call (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Gyoza',
        artist: 'less.people',
        file: '/audio/lofigirl/1 A.M Study Session/24 less.people - Gyoza (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Keyframe',
        artist: 'G Mills',
        file: '/audio/lofigirl/1 A.M Study Session/25 G Mills - Keyframe (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'breeze',
        artist: 'mvdb',
        file: '/audio/lofigirl/1 A.M Study Session/26 mvdb - breeze (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Lunar Drive',
        artist: 'Mondo Loops',
        file: '/audio/lofigirl/1 A.M Study Session/27 Mondo Loops - Lunar Drive (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Steps',
        artist: 'dryhope',
        file: '/audio/lofigirl/1 A.M Study Session/28 dryhope - Steps (Kupla Master).mp3',
        forPart: AllPartType,
    },
    // North Pole
    {
        title: 'Ice Field',
        artist: 'WYS',
        file: '/audio/lofigirl/North Pole/1 Ice Field.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Comforting You',
        artist: 'WYS',
        file: '/audio/lofigirl/North Pole/2 Comforting You.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Satellite',
        artist: 'WYS',
        file: '/audio/lofigirl/North Pole/3 Satellite.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Take Me Back',
        artist: 'WYS',
        file: '/audio/lofigirl/North Pole/4 Take Me Back .mp3',
        forPart: AllPartType,
    },
    {
        title: 'Shield',
        artist: 'WYS',
        file: '/audio/lofigirl/North Pole/5 Shield .mp3',
        forPart: AllPartType,
    },
    // L'aventure
    {
        title: 'Hello',
        artist: 'C4C x kokoro',
        file: '/audio/lofigirl/L\'Aventure/1. C4C x kokoro - Hello.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Say Yes',
        artist: 'C4C x kokoro',
        file: '/audio/lofigirl/L\'Aventure/2. C4C x kokoro - Say Yes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'L\'aventure',
        artist: 'C4C x kokoro',
        file: '/audio/lofigirl/L\'Aventure/3. C4C x kokoro - L_aventure.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Chérie',
        artist: 'C4C x kokoro',
        file: '/audio/lofigirl/L\'Aventure/4. C4C x kokoro - Chérie.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Adieu',
        artist: 'C4C x kokoro',
        file: '/audio/lofigirl/L\'Aventure/5. C4C x kokoro - Adieu.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Drifter',
        artist: 'C4C x kokoro',
        file: '/audio/lofigirl/L\'Aventure/6. C4C x kokoro - Drifter.mp3',
        forPart: AllPartType,
    },
    // Perspective
    {
        title: 'First Snow',
        artist: 'Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Perspective/1. First Snow.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Abundance',
        artist: 'Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Perspective/2. Abundance.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Giving, not taking',
        artist: 'Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Perspective/3. Giving, not taking.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Winter\'s Kiss',
        artist: 'Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Perspective/4. Winter_s Kiss.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Stay Mindful',
        artist: 'Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Perspective/5. Stay Mindful ft. The Field Tapes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Perspective',
        artist: 'Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Perspective/6. Perspective.mp3',
        forPart: AllPartType,
    },
    // Jiro Dreams
    {
        title: 'Maki',
        artist: 'Dontcry x Glimlip',
        file: '/audio/lofigirl/Jiro Dreams/1. Dontcry x Glimlip - Maki.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Ebi Tempura',
        artist: 'Dontcry x Glimlip',
        file: '/audio/lofigirl/Jiro Dreams/2. Dontcry x Glimlip - Ebi Tempura.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sashimi',
        artist: 'Dontcry x Glimlip',
        file: '/audio/lofigirl/Jiro Dreams/3. Dontcry x Glimlip - Sashimi.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Edamame',
        artist: 'Dontcry x Glimlip',
        file: '/audio/lofigirl/Jiro Dreams/4. Dontcry x Glimlip - Edamame.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Jiro Dreams',
        artist: 'Dontcry x Glimlip',
        file: '/audio/lofigirl/Jiro Dreams/5. Dontcry x Glimlip x Sleepermane - Jiro Dreams.mp3',
        forPart: AllPartType,
    },
    // Kingdom in Blue
    {
        title: 'Serenity',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/01 Kupla - Serenity (master 2.0).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Valentine',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/02 Kupla - Valentine (Mastered).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Dew',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/03 Kupla - Dew (master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sunray',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/04 Kupla - Sunray (master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sleepy Little One',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/05 Kupla - Sleepy Little One (Mastered).mp3',
        forPart: AllPartType,
    },
    {
        title: 'In Your Eyes',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/06 Kupla - In Your Eyes (master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Roots',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/07 Kupla - Roots (Final).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Kingdom in Blue',
        artist: 'Kupla',
        file: '/audio/lofigirl/Kingdom in Blue/08 Kupla - Kingdom in Blue (master).mp3',
        forPart: AllPartType,
    },
    // Cloud Surfing
    {
        title: 'Antarctic Sunrise',
        artist: 'BluntOne',
        file: '/audio/lofigirl/Cloud Surfing/01_AntarcticSunrise.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Gates Of Heaven',
        artist: 'BluntOne',
        file: '/audio/lofigirl/Cloud Surfing/02_GatesOfHeaven.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Monk Serenity',
        artist: 'BluntOne',
        file: '/audio/lofigirl/Cloud Surfing/03_Monk_Serenity.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Under Your Skin',
        artist: 'BluntOne x Baen Mow',
        file: '/audio/lofigirl/Cloud Surfing/04_UnderYourSkin(BluntOne _ Baen Mow).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Render Your Heart',
        artist: 'BluntOne',
        file: '/audio/lofigirl/Cloud Surfing/05_Render_Your_Heart.mp3',
        forPart: AllPartType,
    },
    // Online Mall Music
    {
        title: 'Dimes',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/1. Dimes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Modigliani Nudes',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/2. Modigliani nudes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Laid Up',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/3. Laid up .mp3',
        forPart: AllPartType,
    },
    {
        title: 'Blinds',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/4. Blinds.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Home Pour',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/5. Home pour.mp3',
        forPart: AllPartType,
    },
    {
        title: 'It Will Be Different, I Swear',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/6. It will be different, I swear.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Enough to Go Around',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/7. Enough to go around.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Everything\'s a Symptom',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/8. Everything_s a symptom.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Forget Me',
        artist: 'less.people',
        file: '/audio/lofigirl/Online Mall Music/9. Forget me.mp3',
        forPart: AllPartType,
    },
    // Night Emotions
    {
        title: 'Abandoned',
        artist: 'DLJ x TABAL',
        file: '/audio/lofigirl/Night Emotions/1 - Abandoned (w_ TABAL) MASTER v2.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Blackout',
        artist: 'DLJ',
        file: '/audio/lofigirl/Night Emotions/2 - Blackout MASTER V3.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Further',
        artist: 'DLJ',
        file: '/audio/lofigirl/Night Emotions/3 Further MASTER.mp3',
        forPart: AllPartType,
    },
    {
        title: 'The Docks',
        artist: 'DLJ',
        file: '/audio/lofigirl/Night Emotions/4 - The Docks MASTER V3.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Truth',
        artist: 'DLJ',
        file: '/audio/lofigirl/Night Emotions/5 - Truth MASTER.mp3',
        forPart: AllPartType,
    },
    // Afloat Again
    {
        title: 'Childhood Memories',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/1 Childhood Memories (MASTER).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Solace',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/2 Solace (MASTER2) .mp3',
        forPart: AllPartType,
    },
    {
        title: 'Afloat Again',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/3 Afloat Again (MASTER).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Breathe',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/4 Breathe (MASTER).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Dozing Off',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/5 Dozing Off (MASTER).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Stay the Same',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/6 Stay the Same (MASTER).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Gloom',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/7 Gloom (MASTER).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Epilogue',
        artist: 'mell-ø x Ambulo',
        file: '/audio/lofigirl/Afloat Again/8 Epilogue (MASTER 2).mp3',
        forPart: AllPartType,
    },
    // Perpetual
    {
        title: 'Perpetual',
        artist: 'goosetaf',
        file: '/audio/lofigirl/Perpetual/1 - Perpetual.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Spend Some Time',
        artist: 'goosetaf x fantompower',
        file: '/audio/lofigirl/Perpetual/2 - Spend Some Time w_ fantompower.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Looking Back',
        artist: 'goosetaf',
        file: '/audio/lofigirl/Perpetual/3 - Looking Back.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Full Tide',
        artist: 'goosetaf x HM Surf',
        file: '/audio/lofigirl/Perpetual/4 - Full Tide w_ HM Surf.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sunday Fog',
        artist: 'goosetaf',
        file: '/audio/lofigirl/Perpetual/5 - Sunday Fog.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Transcend',
        artist: 'goosetaf',
        file: '/audio/lofigirl/Perpetual/6 - Transcend.mp3',
        forPart: AllPartType,
    },
    // Contrasts
    {
        title: 'Amber',
        artist: 'dryhope',
        file: '/audio/lofigirl/Contrasts/1. Amber.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Down River',
        artist: 'dryhope',
        file: '/audio/lofigirl/Contrasts/2. Down River.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Someday',
        artist: 'dryhope',
        file: '/audio/lofigirl/Contrasts/3. Someday.mp3',
        forPart: AllPartType,
    },
    {
        title: 'First Light',
        artist: 'dryhope',
        file: '/audio/lofigirl/Contrasts/4. First Light.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Contrasts',
        artist: 'dryhope',
        file: '/audio/lofigirl/Contrasts/5. Contrasts.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Shade',
        artist: 'dryhope',
        file: '/audio/lofigirl/Contrasts/6. Shade.mp3',
        forPart: AllPartType,
    },
    // このアルバムはnpm run startのときに再生できなくなる原因となってしまう。原因不明。npm run devだと問題なし。
    // Frozen Roses
    {
        title: 'A While',
        artist: 'a[way]',
        file: '/audio/lofigirl/Frozen Roses/1 a[way] - A While.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Frosted Wood',
        artist: 'a[way]',
        file: '/audio/lofigirl/Frozen Roses/2 a[way] - Frosted Wood.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Frozen Snow',
        artist: 'a[way]',
        file: '/audio/lofigirl/Frozen Roses/3 a[way] - Frozen Snow.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Cozy Dreams',
        artist: 'a[way]',
        file: '/audio/lofigirl/Frozen Roses/4 a[way] - Cozy Dreams.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Warm Nights',
        artist: 'a[way]',
        file: '/audio/lofigirl/Frozen Roses/5 a[way] - Warm Nights.mp3',
        forPart: AllPartType,
    },
    // 2 A.M Study Session
    {
        title: 'Missing Earth',
        artist: 'hoogway',
        file: '/audio/lofigirl/2 AM Study Session/01 hoogway - Missing Earth (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'You',
        artist: 'hoogway',
        file: '/audio/lofigirl/2 AM Study Session/02 Cocabona - You (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Ruby',
        artist: 'Cocabona',
        file: '/audio/lofigirl/2 AM Study Session/03 Sleepermane x Sebastian Kamae - Ruby (Kupla Master) (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Ships',
        artist: 'Sleepermane x Sebastian Kamae',
        file: '/audio/lofigirl/2 AM Study Session/04 Elior x eaup - Ships (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'VHS',
        artist: 'Elior x eaup',
        file: '/audio/lofigirl/2 AM Study Session/05 Spencer Hunt x WYS - VHS (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Pale Moon',
        artist: 'Spencer Hunt x WYS',
        file: '/audio/lofigirl/2 AM Study Session/06 Dr. Dundiff x Allem Iversom - Pale Moon (Kupla Master2) (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Puddles',
        artist: 'E I S U',
        file: '/audio/lofigirl/2 AM Study Session/07 E I S U - Puddles (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Honey & Lemon',
        artist: 'Lilac',
        file: '/audio/lofigirl/2 AM Study Session/08 lilac - Honey _ Lemon (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Nautilus',
        artist: 'WYS',
        file: '/audio/lofigirl/2 AM Study Session/09 WYS - Nautilus (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Compassion',
        artist: 'Steezy Prime x Spencer Hunt',
        file: '/audio/lofigirl/2 AM Study Session/10 Steezy Prime x Spencer Hunt - Compassion (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'It\'s Going to Be a Good Day',
        artist: 'ocha',
        file: '/audio/lofigirl/2 AM Study Session/11 ocha - It_s Going to Be a Good Day (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Midnight Snack',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/2 AM Study Session/12 purrple cat - Midnight Snack (Kupl Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Infused',
        artist: 'Yasper x Glimlip',
        file: '/audio/lofigirl/2 AM Study Session/13 Yasper x Glimlip - Infused (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Torii',
        artist: 'Fatb',
        file: '/audio/lofigirl/2 AM Study Session/14 Fatb - Torii (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'February',
        artist: 'Jay-Lounge',
        file: '/audio/lofigirl/2 AM Study Session/15 Jay-Lounge - February (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'See u Soon',
        artist: 'Tzelun',
        file: '/audio/lofigirl/2 AM Study Session/16 Tzelun - See u Soon (Song for Dad) (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Night Owls',
        artist: 'Casiio x Sleepermane',
        file: '/audio/lofigirl/2 AM Study Session/17 Casioo x Sleepermane - Night Owls (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'waking up slowly',
        artist: 'No Spirit x SAINT WKND',
        file: '/audio/lofigirl/2 AM Study Session/18 No Spirit x SAINT WKND - waking up slowly (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Stars and Chimneys',
        artist: 'Kalaido',
        file: '/audio/lofigirl/2 AM Study Session/19 Kalaido - Stars and Chimneys (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'in passing',
        artist: 'stream error',
        file: '/audio/lofigirl/2 AM Study Session/20 stream error - in passing (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Breath',
        artist: 'H.1',
        file: '/audio/lofigirl/2 AM Study Session/21 H.1 - Breath (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Inspect',
        artist: 'Nothingtosay',
        file: '/audio/lofigirl/2 AM Study Session/22 Nothingtosay - Inspect (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sweet Look',
        artist: 'jhove x bert',
        file: '/audio/lofigirl/2 AM Study Session/23 jhove x bert - Sweet Look (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Drowsy',
        artist: 'brillion.',
        file: '/audio/lofigirl/2 AM Study Session/24 brillion. - Drowsy (Kupla Master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Ghost in my Mind',
        artist: 'j\'san x epektase',
        file: '/audio/lofigirl/2 AM Study Session/25 j_san x epektase - Ghost in my Mind (Kupla Master).mp3',
        forPart: AllPartType,
    },
    // Vondelpark
    {
        title: 'Vondelpark',
        artist: 'Sebastian Kamae x Aylior',
        file: '/audio/lofigirl/Vondelpark/1 Vondelpark (MASTERED).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Q&A',
        artist: 'Sebastian Kamae x Aylior',
        file: '/audio/lofigirl/Vondelpark/2 Q_A (MASTERED).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Mr Catchy',
        artist: 'Sebastian Kamae x Aylior',
        file: '/audio/lofigirl/Vondelpark/3 Mr Catchy (MASTERED).mp3',
        forPart: AllPartType,
    },
    {
        title: 'dontyouknow',
        artist: 'Sebastian Kamae x Aylior',
        file: '/audio/lofigirl/Vondelpark/4 dontyouknow (MASTERED).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Outlet',
        artist: 'Sebastian Kamae x Aylior',
        file: '/audio/lofigirl/Vondelpark/5 Outlet (MASTERED).mp3',
        forPart: AllPartType,
    },
    // Sweet Dreams
    {
        title: 'Black Cherry',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/Sweet Dreams/1 - Black Cherry.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Caramellow',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/Sweet Dreams/2 - Caramellow.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Late Night Latte',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/Sweet Dreams/3 - Late Night Latte.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sundae Sunset',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/Sweet Dreams/4 - Sundae Sunset.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Dark Chocolate',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/Sweet Dreams/5 - Dark Chocolate.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sugar Coat',
        artist: 'Purrple Cat',
        file: '/audio/lofigirl/Sweet Dreams/6 - Sugar Coat.mp3',
        forPart: AllPartType,
    },
    // Future feelings
    {
        title: 'Pure Bliss',
        artist: 'SPEECHLESS',
        file: '/audio/lofigirl/Future feelings/1 - pure_bliss_FINAL_.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Late Night Adventure',
        artist: 'SPEECHLESS',
        file: '/audio/lofigirl/Future feelings/2 - late_night_adventure_FINAL.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Nightfall',
        artist: 'SPEECHLESS',
        file: '/audio/lofigirl/Future feelings/3 - nightfall_FINAL.mp3',
        forPart: AllPartType,
    },
    {
        title: 'After Thought',
        artist: 'SPEECHLESS',
        file: '/audio/lofigirl/Future feelings/4 - after_thought_FINAL.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sleep Well',
        artist: 'SPEECHLESS',
        file: '/audio/lofigirl/Future feelings/5 - sleep_well (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Alone Forever',
        artist: 'SPEECHLESS',
        file: '/audio/lofigirl/Future feelings/5 - alone_forever_FINAL.mp3',
        forPart: AllPartType,
    },
    // Calm Lands
    {
        title: 'Chrono',
        artist: 'Monma',
        file: '/audio/lofigirl/Calm Lands/1 - Chrono.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Meet You In The Park',
        artist: 'Monma',
        file: '/audio/lofigirl/Calm Lands/2 - Meet You In The Park.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sequences',
        artist: 'Monma',
        file: '/audio/lofigirl/Calm Lands/3 - Sequences.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Snaps',
        artist: 'Monma',
        file: '/audio/lofigirl/Calm Lands/4 - Snaps.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Winter Days',
        artist: 'Monma',
        file: '/audio/lofigirl/Calm Lands/5 - Winter Days.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Waking Up',
        artist: 'Monma',
        file: '/audio/lofigirl/Calm Lands/6 - Waking Up.mp3',
        forPart: AllPartType,
    },
    // Tomorrows that follow
    {
        title: 'Mariana',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/1 - ENRA _ Sleepermane - Mariana_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Now & Then',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/2 - ENRA _ Sleepermane - Now _ Then_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Aislin',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/3 - ENRA _ Sleepermane - Aislin_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Mirror Image',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/4 - ENRA _ Sleepermane - Mirror Image_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Shifting',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/5 - ENRA _ Sleepermane - Shifting_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Soft Spoken',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/6 - ENRA _ Sleepermane - Soft-Spoken_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Tomorrows That Follow',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/7 - ENRA _ Sleepermane - Tomorrows That Follow_master.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Reminders',
        artist: 'ENRA x Sleepermane',
        file: '/audio/lofigirl/Tomorrows That Follow/8 - ENRA _ Sleepermane - Reminders_master.mp3',
        forPart: AllPartType,
    },
    // Relief
    {
        title: 'SnowFlakes',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/01 - SnowFlakes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'When She Cries',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/02 - When She Cries (2.0).mp3',
        forPart: AllPartType,
    },
    {
        title: 'When She Sleeps',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/03 - When She Sleeps.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Deep Down',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/04 - Deep Down.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Crystal Lake',
        artist: 'Pandrezz x Epektase',
        file: '/audio/lofigirl/Relief/05 - Crystal Lake (feat. Epektase).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Just Hold On',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/06 - Just Hold On.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Last Minute',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/07 - Last Minute.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Deserved Rest',
        artist: 'Pandrezz',
        file: '/audio/lofigirl/Relief/08 - Deserved Rest.mp3',
        forPart: AllPartType,
    },
    // Before You Go
    {
        title: 'escape',
        artist: 'jhove x Kokoro',
        file: '/audio/lofigirl/Before You Go/1 - jhove - escape ft kokoro 01.mp3',
        forPart: AllPartType,
    },
    {
        title: 'we\'ll be fine, i promise',
        artist: 'jhove',
        file: '/audio/lofigirl/Before You Go/2 - jhove - we_ll be fine, i promise.mp3',
        forPart: AllPartType,
    },
    {
        title: 'what if it all turned out fine',
        artist: 'jhove',
        file: '/audio/lofigirl/Before You Go/3 - what if it all turned out fine (2).mp3',
        forPart: AllPartType,
    },
    {
        title: 'been a while',
        artist: 'jhove',
        file: '/audio/lofigirl/Before You Go/4 - jhove - been a while (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'reminiscing',
        artist: 'jhove x Flovry',
        file: '/audio/lofigirl/Before You Go/5 - jhove - reminiscing ft flovry (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'back when',
        artist: 'jhove x tender spring',
        file: '/audio/lofigirl/Before You Go/6 - jhove tender spring - back when.mp3',
        forPart: AllPartType,
    },
    {
        title: 'away from home',
        artist: 'jhove x Bert',
        file: '/audio/lofigirl/Before You Go/7 - away from home ft bert.mp3',
        forPart: AllPartType,
    },
    {
        title: 'if only you knew',
        artist: 'jhove',
        file: '/audio/lofigirl/Before You Go/8 - if only you knew.mp3',
        forPart: AllPartType,
    },
    {
        title: 'before you go',
        artist: 'jhove',
        file: '/audio/lofigirl/Before You Go/9 - before you go - jhove.mp3',
        forPart: AllPartType,
    },
    // A way of existing
    {
        title: 'Pendulum',
        artist: 'Kanisan x no one\'s perfect',
        file: '/audio/lofigirl/A way of existing/1 - Pendulum.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Lost',
        artist: 'Kanisan x no one\'s perfect',
        file: '/audio/lofigirl/A way of existing/2 - Lost.mp3',
        forPart: AllPartType,
    },
    {
        title: 'A Meditation',
        artist: 'Kanisan x no one\'s perfect',
        file: '/audio/lofigirl/A way of existing/3 - A Meditation.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Gentle Wind',
        artist: 'Kanisan x no one\'s perfect',
        file: '/audio/lofigirl/A way of existing/4 - Gentle Wind.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Nothingness',
        artist: 'Kanisan x no one\'s perfect',
        file: '/audio/lofigirl/A way of existing/5 - Nothingness.mp3',
        forPart: AllPartType,
    },
    // Bedtime Stories Pt. 2
    {
        title: 'When The Sun Goes Down',
        artist: 'brillion.',
        file: '/audio/lofigirl/bedtime stories pt 2/1 - When The Sun Goes Down (3).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Reflection',
        artist: 'brillion.',
        file: '/audio/lofigirl/bedtime stories pt 2/2 - Reflection.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Nightlight',
        artist: 'brillion. x Nolfo',
        file: '/audio/lofigirl/bedtime stories pt 2/3 - brillion. x Nolfo - Nightlight.mp3',
        forPart: AllPartType,
    },
    {
        title: 'REM',
        artist: 'brillion. x Strehlow',
        file: '/audio/lofigirl/bedtime stories pt 2/4 - brillion. x Strehlow - REM.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Cradle',
        artist: 'brillion. x HM Surf',
        file: '/audio/lofigirl/bedtime stories pt 2/5 - brillion. x HM Surf - Cradle (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Eventide',
        artist: 'brillion. x No Spirit x Sitting Duck',
        file: '/audio/lofigirl/bedtime stories pt 2/6 - brillion. x No Spirit x Sitting Duck - Eventide (2).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Just Close Your Eyes',
        artist: 'brillion. x Lucid Green',
        file: '/audio/lofigirl/bedtime stories pt 2/7 - brillion. x Lucid Green - Just Close Your Eyes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Through The Cloud',
        artist: 'brillion. x Tender Spring',
        file: '/audio/lofigirl/bedtime stories pt 2/8 - brillion. x Tender Spring - Through The Clouds.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Dreamscape',
        artist: 'brillion. x Kupla x Arbour',
        file: '/audio/lofigirl/bedtime stories pt 2/9 - brillion. x Kupla x Arbour - Dreamscape.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Journey',
        artist: 'brillion. x TyLuv',
        file: '/audio/lofigirl/bedtime stories pt 2/10 - brillion. x TyLuv - Journey (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Moon Theme',
        artist: 'brillion. x chief.',
        file: '/audio/lofigirl/bedtime stories pt 2/11 - brillion. x chief. - Moon Theme (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'In Clover',
        artist: 'brillion. x HM Surf',
        file: '/audio/lofigirl/bedtime stories pt 2/12 - brillion. x HM Surf - In Clover (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Memories',
        artist: 'brillion. x Chris Mazuera',
        file: '/audio/lofigirl/bedtime stories pt 2/13 - brilllion. x Chris Mazuera - Memories.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Still Dreaming',
        artist: 'brillion. x Pointy Features',
        file: '/audio/lofigirl/bedtime stories pt 2/14 - brillion. x Pointy Features - Still Dreaming (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Aurora',
        artist: 'brillion. x Monma x Tom Doolie',
        file: '/audio/lofigirl/bedtime stories pt 2/15 - brillion. x Monma x Tom Doolie - Aurora (1).mp3',
        forPart: AllPartType,
    },
    // Odyssey
    {
        title: 'Bunnies',
        artist: 'dontcry x nokiaa',
        file: '/audio/lofigirl/Odyssey/1. Dontcry _ Nokiaa - Bunnies.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Tides',
        artist: 'dontcry x nokiaa',
        file: '/audio/lofigirl/Odyssey/2. Dontcry _ Nokiaa - Tides.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Since',
        artist: 'dontcry x nokiaa',
        file: '/audio/lofigirl/Odyssey/3. Dontcry _ Nokiaa - Since.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Decay',
        artist: 'dontcry x nokiaa',
        file: '/audio/lofigirl/Odyssey/4. Dontcry _ Nokiaa - Decay.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Cosmos',
        artist: 'dontcry x nokiaa',
        file: '/audio/lofigirl/Odyssey/5. Dontcry _ Nokiaa - Cosmos.mp3',
        forPart: AllPartType,
    },
    // Sound Asleep
    {
        title: 'Dreamscape',
        artist: 'Spencer Hunt',
        file: '/audio/lofigirl/Sound asleep/1 dreamscape.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Lonely',
        artist: 'Spencer Hunt',
        file: '/audio/lofigirl/Sound asleep/2 lonely.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Thoughts Of You',
        artist: 'Spencer Hunt',
        file: '/audio/lofigirl/Sound asleep/3 thoughts of you.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Moonlight',
        artist: 'Spencer Hunt',
        file: '/audio/lofigirl/Sound asleep/4 moonlight.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sleepy',
        artist: 'Spencer Hunt',
        file: '/audio/lofigirl/Sound asleep/5 sleepy.mp3',
        forPart: AllPartType,
    },
    {
        title: 'I Love You, Goodnight',
        artist: 'Spencer Hunt',
        file: '/audio/lofigirl/Sound asleep/6 i love you, goodnight.mp3',
        forPart: AllPartType,
    },
    // Terrapin
    {
        title: 'À l\'aube',
        artist: 'Mondo Loops x kanisan',
        file: '/audio/lofigirl/Terrapin/1 - à-l_aube (With Kanisan) 2.0 MASTER.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Drive To Midnight',
        artist: 'Mondo Loops',
        file: '/audio/lofigirl/Terrapin/2 - Drive to midnight (Fade).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Starside Groove',
        artist: 'Mondo Loops',
        file: '/audio/lofigirl/Terrapin/3 - Starside Groove (Master version) (1).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Tea House',
        artist: 'Mondo Loops x kanisan',
        file: '/audio/lofigirl/Terrapin/4 - tea-house-(With Kanisan).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Terraping',
        artist: 'Mondo Loops',
        file: '/audio/lofigirl/Terrapin/5 - Terrapin 72 bpm track flatt.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Waves Calling',
        artist: 'Mondo Loops x kanisan',
        file: '/audio/lofigirl/Terrapin/6 - Waves Calling (With Kanisan).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Winter Shells',
        artist: 'Mondo Loops x kanisan',
        file: '/audio/lofigirl/Terrapin/7 - winter-shells(With Kanisan).mp3',
        forPart: AllPartType,
    },
    // Hush
    {
        title: 'Insomnia',
        artist: 'Team Astro',
        file: '/audio/lofigirl/Hush/1. Team Astro - Insomnia.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Liquid Luck',
        artist: 'Team Astro',
        file: '/audio/lofigirl/Hush/2. Team Astro - Liquid Luck.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Helpless',
        artist: 'Team Astro',
        file: '/audio/lofigirl/Hush/3. Team Astro - Helpless.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Lullaby',
        artist: 'Team Astro',
        file: '/audio/lofigirl/Hush/4. Team Astro - Lullaby.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Empty Shelves',
        artist: 'Team Astro',
        file: '/audio/lofigirl/Hush/5. Team Astro - Empty Shelves.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Love Lockdown',
        artist: 'Team Astro',
        file: '/audio/lofigirl/Hush/6. Team Astro - Love Lockdown.mp3',
        forPart: AllPartType,
    },
    // conscious ego
    {
        title: 'Cianite',
        artist: 'Fatb x Flitz&Suppe',
        file: '/audio/lofigirl/conscious ego/1 Fatb - Cianite feat Flitz_Suppe short intro.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Unravel',
        artist: 'Fatb x dryhope',
        file: '/audio/lofigirl/conscious ego/2 Fatb - Unravel feat dryhope.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Dittany',
        artist: 'Fatb x Flitz&Suppe',
        file: '/audio/lofigirl/conscious ego/3 Fatb - Dittany feat Flitz_Suppe.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Lost Thoughts',
        artist: 'Fatb x ZENDR',
        file: '/audio/lofigirl/conscious ego/4 Fatb - Lost Thoughts feat ZENDR.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Bloom',
        artist: 'Fatb x Tesk',
        file: '/audio/lofigirl/conscious ego/5 Fatb - Bloom feat Tesk.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Settembre',
        artist: 'Fatb',
        file: '/audio/lofigirl/conscious ego/6 Fatb - Settembre.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Aurora Boreale',
        artist: 'Fatb x mell-ø',
        file: '/audio/lofigirl/conscious ego/7 Fatb - Aurora Boreale feat mell-ø.mp3',
        forPart: AllPartType,
    },
    // Tranquility
    {
        title: 'Lush',
        artist: 'G Mills',
        file: '/audio/lofigirl/Tranquility/01_Lush.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Icicles',
        artist: 'G Mills x Chris Mazuera x tender spring',
        file: '/audio/lofigirl/Tranquility/02_Icicles (ft. Chris Mazuera _ tender spring).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Crimson',
        artist: 'G Mills',
        file: '/audio/lofigirl/Tranquility/03_Crimson.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sunshower',
        artist: 'G Mills',
        file: '/audio/lofigirl/Tranquility/04_Sunshower.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sublimation',
        artist: 'G Mills x Arbour',
        file: '/audio/lofigirl/Tranquility/05_Sublimation (ft. Arbour).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Rest Your Head',
        artist: 'G Mills',
        file: '/audio/lofigirl/Tranquility/06_Rest Your Head.mp3',
        forPart: AllPartType,
    },
    // Way of Life
    {
        title: 'Waking Up',
        artist: 'Yasumu',
        file: '/audio/lofigirl/Way of Life/01 Yasumu - Waking up.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Questions',
        artist: 'Yasumu',
        file: '/audio/lofigirl/Way of Life/02 Yasumu - Questions.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Thunderstorm',
        artist: 'Yasumu',
        file: '/audio/lofigirl/Way of Life/03 Yasumu - Thunderstorm.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Leafy Breeze',
        artist: 'Yasumu',
        file: '/audio/lofigirl/Way of Life/04 Yasumu - Leafy Breeze.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Evening Jam',
        artist: 'Yasumu',
        file: '/audio/lofigirl/Way of Life/05 Yasumu - Evening Jam (new master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Midnight Thoughts',
        artist: 'Yasumu',
        file: '/audio/lofigirl/Way of Life/06 Yasumu - Midnight thoughts.mp3',
        forPart: AllPartType,
    },
    // Discovery
    {
        title: 'Introvert',
        artist: 'Blue Wednesday',
        file: '/audio/lofigirl/Discovery/01 Blue Wednesday - Introvert.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Driftwood',
        artist: 'Blue Wednesday x Middle School x Tender Spring',
        file: '/audio/lofigirl/Discovery/02 Blue Wednesday x Middle School x Tender Spring - Driftwood.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Japanese Garden',
        artist: 'Blue Wednesday',
        file: '/audio/lofigirl/Discovery/03 Blue Wednesday - Japanese Garden.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Cascadia',
        artist: 'Blue Wednesday x Dillan Witherow',
        file: '/audio/lofigirl/Discovery/04 Blue Wednesday x Dillan Witherow - Cascadia.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Youth',
        artist: 'Blue Wednesday',
        file: '/audio/lofigirl/Discovery/05 Blue Wednesday - Youth.mp3',
        forPart: AllPartType,
    },
    // Dozing
    {
        title: 'Obscurity',
        artist: 'Chris Mazuera',
        file: '/audio/lofigirl/Dozing/1. Obscurity.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Distant',
        artist: 'Chris Mazuera',
        file: '/audio/lofigirl/Dozing/2. Distant.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Counting',
        artist: 'Chris Mazuera x G Mills',
        file: '/audio/lofigirl/Dozing/3. Counting w_ G Mills.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Day 12',
        artist: 'Chris Mazuera',
        file: '/audio/lofigirl/Dozing/4. Day 12.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Dozing',
        artist: 'Chris Mazuera',
        file: '/audio/lofigirl/Dozing/5. Dozing.mp3',
        forPart: AllPartType,
    },
    // Naoko
    {
        title: 'Darjeeling',
        artist: 'Tom Doolie',
        file: '/audio/lofigirl/Naoko/01 Darjeeling.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Rain on Sunday',
        artist: 'Tom Doolie',
        file: '/audio/lofigirl/Naoko/02 Rain on Sunday.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Rackets',
        artist: 'Tom Doolie x Rudy Raw',
        file: '/audio/lofigirl/Naoko/03 Rackets w Rudy Raw.mp3',
        forPart: AllPartType,
    },
    {
        title: 'New Fields',
        artist: 'Tom Doolie x Saib',
        file: '/audio/lofigirl/Naoko/04 New fields w Saib.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Circuit',
        artist: 'Tom Doolie',
        file: '/audio/lofigirl/Naoko/05 Circuit.mp3',
        forPart: AllPartType,
    },
    {
        title: 'To The Sea And Back',
        artist: 'Tom Doolie',
        file: '/audio/lofigirl/Naoko/06 To The Sea And Back.mp3',
        forPart: AllPartType,
    },
    // Sometimes I Wait For You
    {
        title: 'Autumn Morning',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/1 - autumn morning.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Before The Rain Comes',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/2 - before the rain comes.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Breathing In October',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/3 - Breathing in October.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Ease Out',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/4 - Ease out wav.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Saturday',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/5 - saturday.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Snug',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/6 - snug.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Warm Inside',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/7 - warm inside.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Small Things',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/8 - Small Things.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Stray',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/9 - Stray.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Felt The Same',
        artist: 'Softy',
        file: '/audio/lofigirl/Sometimes I Wait For You/10 - felt the same.mp3',
        forPart: AllPartType,
    },
    // Forever Ago
    {
        title: 'Same Ocean',
        artist: 'Hoogway',
        file: '/audio/lofigirl/Forever Ago/1 Hoogway - Same Ocean.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Carousel',
        artist: 'Hoogway',
        file: '/audio/lofigirl/Forever Ago/2 Hoogway - Carousel.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Forever Ago',
        artist: 'Hoogway',
        file: '/audio/lofigirl/Forever Ago/3 Hoogway - Forever Ago.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Different Waves',
        artist: 'Hoogway x Nohone x Tohaj',
        file: '/audio/lofigirl/Forever Ago/4 Hoogway - Different Waves x Nohone, Tohaj.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Sail Away',
        artist: 'Hoogway',
        file: '/audio/lofigirl/Forever Ago/5 Hoogway - Sail Away.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Skyline',
        artist: 'Hoogway x DLJ',
        file: '/audio/lofigirl/Forever Ago/6 Hoogway - Skyline x DLJ.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Love Letter',
        artist: 'Hoogway',
        file: '/audio/lofigirl/Forever Ago/7 - hoogway - Love letter (master).mp3',
        forPart: AllPartType,
    },
    {
        title: 'Everything (You Are)',
        artist: 'Hoogway',
        file: '/audio/lofigirl/Forever Ago/8 Hoogway - Everything (You Are).mp3',
        forPart: AllPartType,
    },
    // Dove
    {
        title: 'Innocent',
        artist: 'Oatmello x Dayn x Epektase',
        file: '/audio/lofigirl/Dove/01 Innocent w_ Dayn and Epektase.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Tranquility',
        artist: 'Oatmello x fantom power',
        file: '/audio/lofigirl/Dove/02 Tranquility w_ Fantom Power.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Hushed Tones',
        artist: 'Oatmello',
        file: '/audio/lofigirl/Dove/03 Hushed Tones.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Essenced',
        artist: 'Oatmello',
        file: '/audio/lofigirl/Dove/04 Essenced.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Minimal',
        artist: 'Oatmello',
        file: '/audio/lofigirl/Dove/05 Minimal.mp3',
        forPart: AllPartType,
    },
    {
        title: 'Good Night',
        artist: 'Oatmello x Late Era',
        file: '/audio/lofigirl/Dove/06 Good Night w_ Late Era.mp3',
        forPart: AllPartType,
    },
    // "Yōkai",
    {
        title: "Tanuki",
        artist: "Flitz&Suppe x Mr. Käfer",
        file: "/audio/lofigirl/Yokai/01_Tanuki_Master_v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Kodamas Path",
        artist: "Flitz&Suppe x Mr. Käfer",
        file: "/audio/lofigirl/Yokai/2_Kodamas Path_Master_v1.mp3",
        forPart: AllPartType
    },
    {
        title: "Hidden Onsen",
        artist: "Flitz&Suppe x Mr. Käfer",
        file: "/audio/lofigirl/Yokai/03_Hidden Onsen_Master_v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Team Steam",
        artist: "Flitz&Suppe x Mr. Käfer ft. Scayos",
        file: "/audio/lofigirl/Yokai/4_Tea Steam(ft Scayos)_Master_v1.mp3",
        forPart: AllPartType
    },
    {
        title: "Mujinas Ramen Shop",
        artist: "Flitz&Suppe x Mr. Käfer",
        file: "/audio/lofigirl/Yokai/05_Mujinas Ramen_Shop_Master_v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Sea of Trees",
        artist: "Flitz&Suppe x Mr. Käfer ft. Kupla",
        file: "/audio/lofigirl/Yokai/6_Sea of Trees(ft. Kupla)_Master_v1.mp3",
        forPart: AllPartType
    },
    {
        title: "Ato",
        artist: "Flitz&Suppe x Mr. Käfer ft. Kupla",
        file: "/audio/lofigirl/Yokai/7_Ato(ft. Kupla)_Master_v1.mp3",
        forPart: AllPartType
    },
    // "Summer Nights",
    {
        title: "A Walk In The Park",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/1 Laffey - A Walk In The Park (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Nighttime",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/2 Laffey - Nighttime (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Crush",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/3 Laffey - Crush (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Umbrella",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/4 Laffey - Umbrella (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Gloomy",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/5 Laffey - Gloomy (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Moonlight",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/6 Laffey - Moonlight (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Streetlights",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/7 Laffey - Streetlights (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Campfire",
        artist: "Laffey",
        file: "/audio/lofigirl/Summer Nights/8 Laffey - Campfire (Master V2).mp3",
        forPart: AllPartType
    },
    // "Introspective",
    {
        title: "Cleared Sky",
        artist: "Nothingtosay",
        file: "/audio/lofigirl/Introspective/1 - cleared sky.mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Afternoon",
        artist: "Nothingtosay x midnight alpha.",
        file: "/audio/lofigirl/Introspective/2 - Blue Afternoon (w midnight alpha).mp3",
        forPart: AllPartType
    },
    {
        title: "I'll Follow You",
        artist: "Nothingtosay",
        file: "/audio/lofigirl/Introspective/3 - i_ll follow you.mp3",
        forPart: AllPartType
    },
    {
        title: "I Can't Sleep",
        artist: "Nothingtosay",
        file: "/audio/lofigirl/Introspective/4 - i can_t sleep.mp3",
        forPart: AllPartType
    },
    {
        title: "Far Away",
        artist: "Nothingtosay x Zeyn",
        file: "/audio/lofigirl/Introspective/5 - far awat ft zeyn.mp3",
        forPart: AllPartType
    },
    {
        title: "I am not lost",
        artist: "Nothingtosay",
        file: "/audio/lofigirl/Introspective/6 - i am not lost.mp3",
        forPart: AllPartType
    },
    {
        title: "Lazyness",
        artist: "Nothingtosay",
        file: "/audio/lofigirl/Introspective/7 - lazyness.mp3",
        forPart: AllPartType
    },
    {
        title: "For You",
        artist: "Nothingtosay x D0d",
        file: "/audio/lofigirl/Introspective/8 - for you ft D0d.mp3",
        forPart: AllPartType
    },
    // "Lazy Sunday",
    {
        title: "It All",
        artist: "jhove",
        file: "/audio/lofigirl/Lazy Sunday/1 jhove - it all (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Pillows",
        artist: "towerz x Spencer Hunt",
        file: "/audio/lofigirl/Lazy Sunday/2 towerz x spencer hunt - pillows (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Eternal Life",
        artist: "Hoogway",
        file: "/audio/lofigirl/Lazy Sunday/3 hoogway - Eternal life (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Habits",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/Lazy Sunday/4 Allem Iversom - Habits (Kupla Master (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Teakwood",
        artist: "Aso",
        file: "/audio/lofigirl/Lazy Sunday/5 Aso - Teakwood (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Over The Valley",
        artist: "jhove x trxxshed",
        file: "/audio/lofigirl/Lazy Sunday/6 jhove x trxxshed - over the valley (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Cruisin",
        artist: "Elior x eaup",
        file: "/audio/lofigirl/Lazy Sunday/7 Elior x eaup - Cruisin_ (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Kiptime",
        artist: "brillion. x HM surf",
        file: "/audio/lofigirl/Lazy Sunday/8 brillion - Kiptime w HM surf (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Garnet",
        artist: "Monma x Cocabona",
        file: "/audio/lofigirl/Lazy Sunday/9 Monma x Cocabona - Garnet (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Builind A New Life",
        artist: "Celestial Alignment",
        file: "/audio/lofigirl/Lazy Sunday/10 Celestial Alignment - building a new life (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Diet Cola",
        artist: "tender spring x Middle School",
        file: "/audio/lofigirl/Lazy Sunday/11 tender spring - diet cola w middle school (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Stray",
        artist: "Casiio",
        file: "/audio/lofigirl/Lazy Sunday/12 Casiio - Stray (Kupla Master2) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Dont Let Go",
        artist: "Blue Wednesday x tender spring",
        file: "/audio/lofigirl/Lazy Sunday/13 Blue Wednesday - Dont let go w tender spring (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Remorse",
        artist: "Thaehan",
        file: "/audio/lofigirl/Lazy Sunday/14 Thaehan - Remorse (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Pink Night Sky",
        artist: "Dr Dundiff",
        file: "/audio/lofigirl/Lazy Sunday/15 Dr Dundiff - Pink Night Sky (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Mmmm",
        artist: "G Mills x HM surf",
        file: "/audio/lofigirl/Lazy Sunday/16 G Mills x HM surf - Mmmm (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Nautilus",
        artist: "mell-ø x Phlocalyst",
        file: "/audio/lofigirl/Lazy Sunday/17 mell-ø x Phlocalyst - Nautilus (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "3 am",
        artist: "DLJ x TABAL",
        file: "/audio/lofigirl/Lazy Sunday/18 DLJ x TABAL - 3 am (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Soft to Touch",
        artist: "Kupla",
        file: "/audio/lofigirl/Lazy Sunday/19 Kupla - Soft to Touch (first master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Vivid Memories",
        artist: "Otaam x Sitting Duck",
        file: "/audio/lofigirl/Lazy Sunday/20 Otaam x Sitting Duck - vivid memories (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Floating Away",
        artist: "Glimlip x Yasper",
        file: "/audio/lofigirl/Lazy Sunday/21 Glimlip x Yasper - Floating Away (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Nostalgia",
        artist: "Glimlip x Sleepermane",
        file: "/audio/lofigirl/Lazy Sunday/22 Glimlip x Sleepermane - Nostalgia (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Untold Stories",
        artist: "Yasumu",
        file: "/audio/lofigirl/Lazy Sunday/23 Yasumu - Untold Stories (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Desire",
        artist: "Nospirit",
        file: "/audio/lofigirl/Lazy Sunday/24 Nospirit x Fatb - Desire (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Wandering Another world",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/Lazy Sunday/25 Mondoloops - Wandering Another World (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Snowflakes",
        artist: "Eisu x softy",
        file: "/audio/lofigirl/Lazy Sunday/26 Eisu x softy - Snowflakes (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Quilted Dreams",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Lazy Sunday/27 kainbeats - Quilted Dreams (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Psilo",
        artist: "lofty x pointy features",
        file: "/audio/lofigirl/Lazy Sunday/28 lofty x pointy features - psilo (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "30. Before",
        artist: "Chiccote's Beats",
        file: "/audio/lofigirl/Lazy Sunday/30 chiccotes - before (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "1. Ponds",
        artist: "Elior",
        file: "/audio/lofigirl/Lazy Sunday/31 Elior - Ponds (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    // "Staring Through",
    {
        title: "sun",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/1-sun.mp3",
        forPart: AllPartType
    },
    {
        title: "off",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/2-off.mp3",
        forPart: AllPartType
    },
    {
        title: "cold",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/3-cold.mp3",
        forPart: AllPartType
    },
    {
        title: "station",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/4-station (master).mp3",
        forPart: AllPartType
    },
    {
        title: "bodies",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/5-bodies.mp3",
        forPart: AllPartType
    },
    {
        title: "sing",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/6-sing.mp3",
        forPart: AllPartType
    },
    {
        title: "slow",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/7-slow.mp3",
        forPart: AllPartType
    },
    {
        title: "put",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/8-put (1).mp3",
        forPart: AllPartType
    },
    {
        title: "painting",
        artist: "Kudo",
        file: "/audio/lofigirl/Staring Through/9-painting.mp3",
        forPart: AllPartType
    },
    // "Silent River",
    {
        title: "Raining",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/01 Mila Coolness - Raining.mp3",
        forPart: AllPartType
    },
    {
        title: "Silent River",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/02 Mila Coolness - Silent River.mp3",
        forPart: AllPartType
    },
    {
        title: "Heron",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/03 Mila Coolness - Heron.mp3",
        forPart: AllPartType
    },
    {
        title: "Ibis",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/04 Mila Coolness - Ibis.mp3",
        forPart: AllPartType
    },
    {
        title: "Balance",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/05 Mila Coolness - Balance.mp3",
        forPart: AllPartType
    },
    {
        title: "Surf",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/06 Mila Coolness - Surf.mp3",
        forPart: AllPartType
    },
    {
        title: "Far Away",
        artist: "Mila Coolness",
        file: "/audio/lofigirl/Silent River/07 Mila Coolness - Far Away.mp3",
        forPart: AllPartType
    },
    // "Life Forms",
    {
        title: "Eons",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/01 Kupla - Eons (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Heroes",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/02 Kupla - Heroes (master 5).mp3",
        forPart: AllPartType
    },
    {
        title: "A Waltz for My Best Friend",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/03 Kupla - A Waltz for My Best Friend (master 2).mp3",
        forPart: AllPartType
    },
    {
        title: "Magic",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/04 Kupla - Magic (master6).mp3",
        forPart: AllPartType
    },
    {
        title: "Soft to Touch",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/05 Kupla - Soft to Touch (first master).mp3",
        forPart: AllPartType
    },
    {
        title: "Those Were the Days",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/06 Kupla - Those Were the Days (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Mycelium",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/07 Kupla - Mycelium (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Weightless",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/08 Kupla - Weightless (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Microscopic",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/09 Kupla - Microscopic (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Distant Lands",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/10 Kupla - Distant Lands (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Natural Ways",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/11 Kupla - Natural Ways (master 2).mp3",
        forPart: AllPartType
    },
    {
        title: "Purple Vision",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/12 Kupla - Purple Vision (master).mp3",
        forPart: AllPartType
    },
    {
        title: "4. Sylvan",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/14 Kupla - Sylvan (master 2).mp3",
        forPart: AllPartType
    },
    {
        title: "5. Last Walk",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/15 Kupla - Last Walk (master 2).mp3",
        forPart: AllPartType
    },
    {
        title: "6. Safe Haven",
        artist: "Kupla",
        file: "/audio/lofigirl/Life Forms/16 Kupla - Safe Haven (Master).mp3",
        forPart: AllPartType
    },
    // "Florist",
    {
        title: "Violet",
        artist: "Lilac",
        file: "/audio/lofigirl/Florist/01 Violet.mp3",
        forPart: AllPartType
    },
    {
        title: "Orchid",
        artist: "Lilac",
        file: "/audio/lofigirl/Florist/02 Orchid.mp3",
        forPart: AllPartType
    },
    {
        title: "Hyacinth",
        artist: "Lilac",
        file: "/audio/lofigirl/Florist/03 Hyacinth.mp3",
        forPart: AllPartType
    },
    {
        title: "Catmint",
        artist: "Lilac",
        file: "/audio/lofigirl/Florist/04 Catmint.mp3",
        forPart: AllPartType
    },
    {
        title: "Hydraengea",
        artist: "Lilac",
        file: "/audio/lofigirl/Florist/05 Hydrangea.mp3",
        forPart: AllPartType
    },
    // "Inside Space",
    {
        title: "An Unknown Journey",
        artist: "TABAL",
        file: "/audio/lofigirl/Inside Space/1. TABAL - An Unknown Journey.mp3",
        forPart: AllPartType
    },
    {
        title: "Crystal Land",
        artist: "TABAL x Blumen",
        file: "/audio/lofigirl/Inside Space/2. TABAL x Blumen - Crystal Land.mp3",
        forPart: AllPartType
    },
    {
        title: "Inside Space",
        artist: "TABAL",
        file: "/audio/lofigirl/Inside Space/3. TABAL - Inside Space.mp3",
        forPart: AllPartType
    },
    {
        title: "Menthol Breathing",
        artist: "TABAL x tah.",
        file: "/audio/lofigirl/Inside Space/4. TABAL x tah. - Menthol Breathing.mp3",
        forPart: AllPartType
    },
    {
        title: "No Return",
        artist: "TABAL",
        file: "/audio/lofigirl/Inside Space/5. TABAL - No Return.mp3",
        forPart: AllPartType
    },
    // "Window Seat",
    {
        title: "Counting Sheep",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/1 counting sheep [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Moon",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/2 blue moon [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Staying In",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/3 staying in [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Pink Skies",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/4 pink skies [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Rainy Day",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/5 rainy day [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Dusk",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/6 dusk [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Dawn",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/7 dawn [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Cloudburst",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/8 cloudburst [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Moonwake",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/9 moonwake [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Breeze",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/10 breeze [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Midnight",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/11 midnight [final].mp3",
        forPart: AllPartType
    },
    {
        title: "Letting Go",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Window Seat/12 letting go [final].mp3",
        forPart: AllPartType
    },
    // "Illusion",
    {
        title: "away",
        artist: "Chiccote's Beats",
        file: "/audio/lofigirl/Illusion/1. away.mp3",
        forPart: AllPartType
    },
    {
        title: "finding",
        artist: "Chiccote's Beats",
        file: "/audio/lofigirl/Illusion/2. finding.mp3",
        forPart: AllPartType
    },
    {
        title: "timeless",
        artist: "Chiccote's Beats",
        file: "/audio/lofigirl/Illusion/3. timeless.mp3",
        forPart: AllPartType
    },
    {
        title: "back",
        artist: "Chiccote's Beats",
        file: "/audio/lofigirl/Illusion/4. back.mp3",
        forPart: AllPartType
    },
    {
        title: "illusion",
        artist: "Chiccote's Beats x Pueblo Vista",
        file: "/audio/lofigirl/Illusion/5. illusion.mp3",
        forPart: AllPartType
    },
    // "Cocobolo",
    {
        title: "Sugar Haze",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/1. sugar haze.mp3",
        forPart: AllPartType
    },
    {
        title: "Icy Waves",
        artist: "HM Surf x Iceboi",
        file: "/audio/lofigirl/Cocobolo/2. icy waves SURF and ICEBOI.mp3",
        forPart: AllPartType
    },
    {
        title: "Mount And Blade",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/3. mount and blade.mp3",
        forPart: AllPartType
    },
    {
        title: "The Vet",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/4. the vet (new mix123).mp3",
        forPart: AllPartType
    },
    {
        title: "Mud",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/5. mud master.mp3",
        forPart: AllPartType
    },
    {
        title: "Cloyster",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/6. Cloyster (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "It's Chronic",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/7. its chronic (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Hey Jerry",
        artist: "HM Surf",
        file: "/audio/lofigirl/Cocobolo/8. hey jerry (mastered).mp3",
        forPart: AllPartType
    },
    // "Solitude",
    {
        title: "The Day You Left",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Solitude/1. amies _ cxlt - the day you left .mp3",
        forPart: AllPartType
    },
    {
        title: "Broken",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Solitude/2. amies _ cxlt - broken .mp3",
        forPart: AllPartType
    },
    {
        title: "Not The Same",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Solitude/3. amies _ cxlt - not the same .mp3",
        forPart: AllPartType
    },
    {
        title: "Isolated",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Solitude/4. amies _ cxlt - isolated.mp3",
        forPart: AllPartType
    },
    {
        title: "Things Will Work Out",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Solitude/5. amies _ cxlt - things will work out .mp3",
        forPart: AllPartType
    },
    {
        title: "It's Okay",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Solitude/6. amies _ cxlt - it_s okay .mp3",
        forPart: AllPartType
    },
    // "Beginnings",
    {
        title: "Feels Like Home",
        artist: "Iamalex x Dillan Witherow ft. tender spring",
        file: "/audio/lofigirl/Beginnings/1. Feels Like Home - Iamalex and Dillan Witherow (feat. tender spring).mp3",
        forPart: AllPartType
    },
    {
        title: "Nightwalk",
        artist: "Iamalex x Dillan Witherow ft. Azula",
        file: "/audio/lofigirl/Beginnings/2. Nightwalk - Iamalex and Dillan Witherow (feat. azula).mp3",
        forPart: AllPartType
    },
    {
        title: "Above Water",
        artist: "Iamalex x Dillan Witherow",
        file: "/audio/lofigirl/Beginnings/3. Above Water - Iamalex and Dillan Witherow.mp3",
        forPart: AllPartType
    },
    {
        title: "Over The Clouds",
        artist: "Iamalex x Dillan Witherow ft. Azula",
        file: "/audio/lofigirl/Beginnings/4. Over The Clouds - Iamalex and Dillan Witherow(feat. azula).mp3",
        forPart: AllPartType
    },
    {
        title: "Coral",
        artist: "Iamalex x Dillan Witherow",
        file: "/audio/lofigirl/Beginnings/5. Coral - Iamalex and Dillan Witherow.mp3",
        forPart: AllPartType
    },
    {
        title: "Falling Forward",
        artist: "Iamalex x Dillan Witherow ft. Chris Mazuera",
        file: "/audio/lofigirl/Beginnings/6. Falling Forward - Iamalex and Dillan Witherow(feat. Chris Mazuera).mp3",
        forPart: AllPartType
    },
    {
        title: "Lazy Morning",
        artist: "Iamalex x Dillan Witherow",
        file: "/audio/lofigirl/Beginnings/7. Lazy Morning - Iamalex and Dillan Witherow.mp3",
        forPart: AllPartType
    },
    // "La Hague",
    {
        title: "Going South",
        artist: "Blumen",
        file: "/audio/lofigirl/La Hague/1 - Blumen - Going South.mp3",
        forPart: AllPartType
    },
    {
        title: "La Hague",
        artist: "Blumen",
        file: "/audio/lofigirl/La Hague/2 - Blumen - La Hague.mp3",
        forPart: AllPartType
    },
    {
        title: "On My Way",
        artist: "Blumen",
        file: "/audio/lofigirl/La Hague/3 - Blumen - On my Way.mp3",
        forPart: AllPartType
    },
    {
        title: "Stay",
        artist: "Blumen x Tah.",
        file: "/audio/lofigirl/La Hague/4 - Blumen x Tah. - Stay.mp3",
        forPart: AllPartType
    },
    {
        title: "L'Aube",
        artist: "Blumen x mell-ø",
        file: "/audio/lofigirl/La Hague/5 - Blumen x mell-o -L_Aube.mp3",
        forPart: AllPartType
    },
    {
        title: "Control the Sky",
        artist: "Blumen x Hoogway",
        file: "/audio/lofigirl/La Hague/6 - Blumen x Hoogway - Control the Sky.mp3",
        forPart: AllPartType
    },
    // "Memories We Made",
    {
        title: "Memories We Made",
        artist: "No Spirit",
        file: "/audio/lofigirl/Memories we made/01 No Spirit - Memories We Made (Master2).mp3",
        forPart: AllPartType
    },
    {
        title: "Trees In The Wind",
        artist: "No Spirit",
        file: "/audio/lofigirl/Memories we made/02 No Spirit - Trees In The Wind (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Rain In My Head",
        artist: "No Spirit x Kupla",
        file: "/audio/lofigirl/Memories we made/03 No Spirit x Kupla - Rain in my Head (Master1).mp3",
        forPart: AllPartType
    },
    {
        title: "Hope",
        artist: "No Spirit",
        file: "/audio/lofigirl/Memories we made/04 No Spirit - Hope (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "In The Grass",
        artist: "No Spirit x Flaneur",
        file: "/audio/lofigirl/Memories we made/05 No Spirit x Flaneur - in the grass (Master2).mp3",
        forPart: AllPartType
    },
    {
        title: "Some Alone Time",
        artist: "No Spirit",
        file: "/audio/lofigirl/Memories we made/06 No Spirit - Some Alone Time (Master2).mp3",
        forPart: AllPartType
    },
    {
        title: "Train Of Thought",
        artist: "No Spirit x Sitting Duck",
        file: "/audio/lofigirl/Memories we made/07 No Spirit _ Sitting Duck - Train Of Thought (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "La Rochelle",
        artist: "No Spirit x mell-ø x Sitting Duck",
        file: "/audio/lofigirl/Memories we made/08 No Spirit _ Mell-o _ Sitting Duck - La Rochelle (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Havanna",
        artist: "No Spirit x Sitting Duck",
        file: "/audio/lofigirl/Memories we made/09 No Spirit _ Sitting Duck - Havanna (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Purple Sky",
        artist: "No Spirit x Swink",
        file: "/audio/lofigirl/Memories we made/10 No Spirit x Swink - Purple sky (Master2).mp3",
        forPart: AllPartType
    },
    {
        title: "Washed Ashore",
        artist: "No Spirit x Mondo Loops",
        file: "/audio/lofigirl/Memories we made/11 No Spirit x Mondo Loops - Washed Ashore (Master2).mp3",
        forPart: AllPartType
    },
    {
        title: "Waiting For The Sun",
        artist: "No Spirit",
        file: "/audio/lofigirl/Memories we made/12 No Spirit - Waiting For The Sun (Master3).mp3",
        forPart: AllPartType
    },
    // "Feel free to imagine",
    {
        title: "Get lost in the mind's ocean",
        artist: "Eugenio Izzi",
        file: "/audio/lofigirl/Feel free to imagine/1. Get lost in the mind_s ocean.mp3",
        forPart: AllPartType
    },
    {
        title: "I'll wait for you at home, even if it's raining",
        artist: "Eugenio Izzi",
        file: "/audio/lofigirl/Feel free to imagine/2. I_ll wait for you at home, even if it_s raining.mp3",
        forPart: AllPartType
    },
    {
        title: "Distant, but near realities",
        artist: "Eugenio Izzi",
        file: "/audio/lofigirl/Feel free to imagine/3. Distant, but near realities.mp3",
        forPart: AllPartType
    },
    {
        title: "Climb the roof breathe better",
        artist: "Eugenio Izzi",
        file: "/audio/lofigirl/Feel free to imagine/4. Climb the roof to breathe better.mp3",
        forPart: AllPartType
    },
    {
        title: "The fairie's city",
        artist: "Eugenio Izzi",
        file: "/audio/lofigirl/Feel free to imagine/5. The fairie_s city.mp3",
        forPart: AllPartType
    },
    // "3 A.M Study Session",
    {
        title: "Glowing lights",
        artist: "No Spirit",
        file: "/audio/lofigirl/3 am study session/01 No Spirit - Glowing lights (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "somewhere else",
        artist: "dryhope",
        file: "/audio/lofigirl/3 am study session/02 dryhope - somewhere else (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "sheets",
        artist: "Eisu",
        file: "/audio/lofigirl/3 am study session/03 Eisu - sheets (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Phantasm",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/3 am study session/04 Casiio _ Sleepermane - Phantasm (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "after sunset",
        artist: "Project AER x WYS",
        file: "/audio/lofigirl/3 am study session/05 Project AER x WYS - after sunset (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Luna",
        artist: "Tenno",
        file: "/audio/lofigirl/3 am study session/06 Tenno - Luna (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Lucid",
        artist: "Sebastian Kamae x Intoku",
        file: "/audio/lofigirl/3 am study session/07 Sebastian Kamae _ Intoku - Lucid (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "contemplation",
        artist: "epektase x j'san",
        file: "/audio/lofigirl/3 am study session/08 epektase x j_san - contemplation (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Signals",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/3 am study session/09 Casiio _ Sleepermane - Signals (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Feelings",
        artist: "Phlocalyst x Living Room",
        file: "/audio/lofigirl/3 am study session/10 Phlocalyst _ Living Room - Feelings (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Blind Forest",
        artist: "Pandrezz",
        file: "/audio/lofigirl/3 am study session/11 Pandrezz - Blind Forest (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Show Me How",
        artist: "SwuM x chief.",
        file: "/audio/lofigirl/3 am study session/12 SwuM x chief. - Show Me How (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Numb",
        artist: "Comodo",
        file: "/audio/lofigirl/3 am study session/13 Comodo - Numb (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Weightless",
        artist: "TABAL x mell-ø",
        file: "/audio/lofigirl/3 am study session/14 TABAL x mell-ø - Weightless (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Night Bus",
        artist: "Ambulo",
        file: "/audio/lofigirl/3 am study session/15 Ambulo - Night Bus (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Fireflies",
        artist: "Kanisan x Frad",
        file: "/audio/lofigirl/3 am study session/16 Kanisan x Frad - Fireflies (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Timeless",
        artist: "H.1",
        file: "/audio/lofigirl/3 am study session/17 H.1 - Timeless (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Recharge",
        artist: "Yasumu",
        file: "/audio/lofigirl/3 am study session/18 Yasumu - Recharge (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "fade away",
        artist: "cxlt.",
        file: "/audio/lofigirl/3 am study session/19 cxlt. - fade away (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Escape Route",
        artist: "Mondo Loops x Kanisan",
        file: "/audio/lofigirl/3 am study session/20 Mondo Loops x Kanisan - Escape Route (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "fateful slumber",
        artist: "towerz",
        file: "/audio/lofigirl/3 am study session/21 towerz - fateful slumber (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Crescent",
        artist: "brillion.",
        file: "/audio/lofigirl/3 am study session/22 brillion. - Crescent (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "persist",
        artist: "less.people",
        file: "/audio/lofigirl/3 am study session/23 less.people - persist (Kupla Master2).mp3",
        forPart: AllPartType
    },
    {
        title: "Drifting Far Away",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/3 am study session/24 Mondoloops - Drifting Far Away (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    // "Cabin Fever",
    {
        title: "Love Cabin",
        artist: "xander.",
        file: "/audio/lofigirl/Cabin Fever/1. Love Cabin.mp3",
        forPart: AllPartType
    },
    {
        title: "Driving Alone",
        artist: "xander.",
        file: "/audio/lofigirl/Cabin Fever/2. driving alone.mp3",
        forPart: AllPartType
    },
    {
        title: "Don't let her Go",
        artist: "xander.",
        file: "/audio/lofigirl/Cabin Fever/3 - dont let her go.mp3",
        forPart: AllPartType
    },
    {
        title: "Glitter",
        artist: "xander. x Carrick",
        file: "/audio/lofigirl/Cabin Fever/4 Glitter ft. Carrick.mp3",
        forPart: AllPartType
    },
    {
        title: "Dreams Come True",
        artist: "xander.",
        file: "/audio/lofigirl/Cabin Fever/5. Dreams Come True .mp3",
        forPart: AllPartType
    },
    {
        title: "Morning Time",
        artist: "xander.",
        file: "/audio/lofigirl/Cabin Fever/6. Morning Time.mp3",
        forPart: AllPartType
    },
    {
        title: "Missing You",
        artist: "xander.",
        file: "/audio/lofigirl/Cabin Fever/7. Missing You.mp3",
        forPart: AllPartType
    },
    // "Kenopsia",
    {
        title: "Gravity",
        artist: "dryhope",
        file: "/audio/lofigirl/Kenopsia/1. Gravity.mp3",
        forPart: AllPartType
    },
    {
        title: "Childhood Home",
        artist: "dryhope",
        file: "/audio/lofigirl/Kenopsia/2. Childhood Home.mp3",
        forPart: AllPartType
    },
    {
        title: "Quetzal",
        artist: "dryhope",
        file: "/audio/lofigirl/Kenopsia/3. Quetzal.mp3",
        forPart: AllPartType
    },
    {
        title: "Higher State",
        artist: "dryhope",
        file: "/audio/lofigirl/Kenopsia/4. Higher State.mp3",
        forPart: AllPartType
    },
    {
        title: "Evoke",
        artist: "dryhope x dontcry",
        file: "/audio/lofigirl/Kenopsia/5. Evoke (w_ Dontcry).mp3",
        forPart: AllPartType
    },
    {
        title: "No Secrets",
        artist: "dryhope",
        file: "/audio/lofigirl/Kenopsia/6. No Secrets.mp3",
        forPart: AllPartType
    },
    // "Moonglow",
    {
        title: "Warm Meadows",
        artist: "S N U G",
        file: "/audio/lofigirl/Moonglow/warm meadows.mp3",
        forPart: AllPartType
    },
    {
        title: "Balcony Nights",
        artist: "S N U G x Spencer Hunt",
        file: "/audio/lofigirl/Moonglow/balcony nights ft. Spencer Hunt.mp3",
        forPart: AllPartType
    },
    {
        title: "Blankets",
        artist: "S N U G",
        file: "/audio/lofigirl/Moonglow/blankets.mp3",
        forPart: AllPartType
    },
    {
        title: "Dreams of You",
        artist: "S N U G",
        file: "/audio/lofigirl/Moonglow/dreams of you.mp3",
        forPart: AllPartType
    },
    {
        title: "Snooze",
        artist: "S N U G x Jordy Chandra",
        file: "/audio/lofigirl/Moonglow/snooze ft. Jordy Chandra.mp3",
        forPart: AllPartType
    },
    {
        title: "Stargazing",
        artist: "S N U G",
        file: "/audio/lofigirl/Moonglow/stargazing.mp3",
        forPart: AllPartType
    },
    {
        title: "Missing You",
        artist: "S N U G",
        file: "/audio/lofigirl/Moonglow/missing you.mp3",
        forPart: AllPartType
    },
    {
        title: "Night Coffee",
        artist: "S N U G x Mondo Loops",
        file: "/audio/lofigirl/Moonglow/night coffee ft. Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "At Ease",
        artist: "S N U G",
        file: "/audio/lofigirl/Moonglow/at ease.mp3",
        forPart: AllPartType
    },
    // "In Motion",
    {
        title: "Seasons",
        artist: "ENRA x Dr Niar",
        file: "/audio/lofigirl/In Motion/1.ENRA - seasons (feat dr niar).mp3",
        forPart: AllPartType
    },
    {
        title: "In Motion",
        artist: "ENRA",
        file: "/audio/lofigirl/In Motion/2.ENRA - in motion.mp3",
        forPart: AllPartType
    },
    {
        title: "Consequences",
        artist: "ENRA",
        file: "/audio/lofigirl/In Motion/3.ENRA - consequences.mp3",
        forPart: AllPartType
    },
    {
        title: "Silver Lining",
        artist: "ENRA x Sleepermane",
        file: "/audio/lofigirl/In Motion/4.ENRA - silver lining (feat Sleepermane).mp3",
        forPart: AllPartType
    },
    {
        title: "Where We Left Off",
        artist: "ENRA",
        file: "/audio/lofigirl/In Motion/5.ENRA - where we left off.mp3",
        forPart: AllPartType
    },
    {
        title: "Virginia",
        artist: "ENRA",
        file: "/audio/lofigirl/In Motion/6.ENRA - virginia.mp3",
        forPart: AllPartType
    },
    // "Heading Home",
    {
        title: "Reflections",
        artist: "Ajmw x chief.",
        file: "/audio/lofigirl/Heading Home/1. AJMW - Reflections ft. chief..mp3",
        forPart: AllPartType
    },
    {
        title: "Way Back When",
        artist: "Ajmw",
        file: "/audio/lofigirl/Heading Home/2. AJMW - Way Back When.mp3",
        forPart: AllPartType
    },
    {
        title: "Hometown",
        artist: "Ajmw",
        file: "/audio/lofigirl/Heading Home/3. AJMW - Hometown.mp3",
        forPart: AllPartType
    },
    {
        title: "Patterns",
        artist: "Ajmw x less.people x C4C x Dwyer",
        file: "/audio/lofigirl/Heading Home/4. AJMW - Patterns ft. less.people - C4C - Dwyer.mp3",
        forPart: AllPartType
    },
    {
        title: "Clouds",
        artist: "Ajmw",
        file: "/audio/lofigirl/Heading Home/5. AJMW - Clouds.mp3",
        forPart: AllPartType
    },
    // "Wonderland Chapter 1",
    {
        title: "Wonderland",
        artist: "Sitting Duck x Squeeda",
        file: "/audio/lofigirl/Wonderland Chapter 1/1. Wonderland - Sitting Duck x Squeeda.mp3",
        forPart: AllPartType
    },
    {
        title: "The Unknown",
        artist: "Sitting Duck x Mondo Loops",
        file: "/audio/lofigirl/Wonderland Chapter 1/2. The Unknown - Sitting Duck x Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "Ancient Tales",
        artist: "Sitting Duck x Mondo Loops",
        file: "/audio/lofigirl/Wonderland Chapter 1/3. Ancient Tales - Sitting Duck x Mondo Loops .mp3",
        forPart: AllPartType
    },
    {
        title: "Setting Sails",
        artist: "Sitting Duck x Mondo Loops",
        file: "/audio/lofigirl/Wonderland Chapter 1/4. Setting Sails - Sitting Duck x Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "Be Kind",
        artist: "Sitting Duck x Dillan Witherow  x Azula",
        file: "/audio/lofigirl/Wonderland Chapter 1/5. Be Kind - Sitting Duck _ Dillan Witherow _ Azula .mp3",
        forPart: AllPartType
    },
    {
        title: "Dreamstate",
        artist: "Sitting Duck x Dillan Witherow  x Azula",
        file: "/audio/lofigirl/Wonderland Chapter 1/6. Dreamstate - Sitting Duck x Dillan Witherow x Azula.mp3",
        forPart: AllPartType
    },
    {
        title: "Slow Mornings",
        artist: "Sitting Duck x Hoffy Beats",
        file: "/audio/lofigirl/Wonderland Chapter 1/7. Slow Mornings - Sitting Duck x Hoffy Beats.mp3",
        forPart: AllPartType
    },
    {
        title: "Forest Whispers",
        artist: "Sitting Duck x Ambulo x Louk",
        file: "/audio/lofigirl/Wonderland Chapter 1/8. Forest Whispers - Sitting Duck x Ambulo x Louk .mp3",
        forPart: AllPartType
    },
    // "The Ridge",
    {
        title: "The Ridge",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/The Ridge/01 allem iversom - the ridge.mp3",
        forPart: AllPartType
    },
    {
        title: "Whole Again",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/The Ridge/02 allem iversom - whole again.mp3",
        forPart: AllPartType
    },
    {
        title: "Moon",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/The Ridge/03 allem iversom - moon.mp3",
        forPart: AllPartType
    },
    {
        title: "Wasting",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/The Ridge/04 allem iversom - wasting (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Howufeel",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/The Ridge/05 allem iversom - howufeel.mp3",
        forPart: AllPartType
    },
    {
        title: "The End",
        artist: "Allem Iversom",
        file: "/audio/lofigirl/The Ridge/06 allem iversom - the end.mp3",
        forPart: AllPartType
    },
    // "Drifting Away",
    {
        title: "Wishing, Waiting",
        artist: "Hevi x Kainbeats",
        file: "/audio/lofigirl/Drifting away/1 Wishing, Waiting.mp3",
        forPart: AllPartType
    },
    {
        title: "If You Knew",
        artist: "Hevi x Kainbeats",
        file: "/audio/lofigirl/Drifting away/2 If You Knew.mp3",
        forPart: AllPartType
    },
    {
        title: "Runaway",
        artist: "Hevi x Kainbeats",
        file: "/audio/lofigirl/Drifting away/3 Runaway.mp3",
        forPart: AllPartType
    },
    {
        title: "Uncertainty",
        artist: "Hevi x Kainbeats",
        file: "/audio/lofigirl/Drifting away/4 Uncertainty.mp3",
        forPart: AllPartType
    },
    {
        title: "Empathise",
        artist: "Hevi x Kainbeats",
        file: "/audio/lofigirl/Drifting away/5 Empathise.mp3",
        forPart: AllPartType
    },
    // "Azure Blue",
    {
        title: "Downt The Port",
        artist: "Miramare x Clément Matra",
        file: "/audio/lofigirl/Azure Blue/1 Miramare x Clément Matrat - Down The Port (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Foam",
        artist: "Miramare x Clément Matra",
        file: "/audio/lofigirl/Azure Blue/2.Miramare x Clément Matrat - Foam (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Marseille",
        artist: "Miramare x Clément Matra",
        file: "/audio/lofigirl/Azure Blue/3Miramare x Clément Matrat - Marseille (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Ocean Drift",
        artist: "Miramare x Clément Matra",
        file: "/audio/lofigirl/Azure Blue/4Miramare x Clément Matrat - Ocean Drift (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "That Old Beach House",
        artist: "Miramare x Clément Matra",
        file: "/audio/lofigirl/Azure Blue/5Miramare x Clément Matrat - That Old Beach House (Master).mp3",
        forPart: AllPartType
    },
    // "Autumn in Budapest",
    {
        title: "Aether",
        artist: "BluntOne x Ky akasha",
        file: "/audio/lofigirl/Autumn in Budapest/01_Aether(w_Kyakasha).mp3",
        forPart: AllPartType
    },
    {
        title: "Zen Fusion",
        artist: "BluntOne x Baen Mow",
        file: "/audio/lofigirl/Autumn in Budapest/02_ZenFusion(feat.BaenMow)_final.mp3",
        forPart: AllPartType
    },
    {
        title: "Natures Cures",
        artist: "BluntOne",
        file: "/audio/lofigirl/Autumn in Budapest/03_NatureCures.mp3",
        forPart: AllPartType
    },
    {
        title: "Thrivin'",
        artist: "BluntOne x Fatb",
        file: "/audio/lofigirl/Autumn in Budapest/04_Thrivin(w_Fatb).mp3",
        forPart: AllPartType
    },
    {
        title: "Misty Dawn",
        artist: "BluntOne",
        file: "/audio/lofigirl/Autumn in Budapest/05_MistyDawn.mp3",
        forPart: AllPartType
    },
    {
        title: "Pocket Full of Hope",
        artist: "BluntOne x Baen Mow",
        file: "/audio/lofigirl/Autumn in Budapest/06_PocketFullOfHope(w_Baen).mp3",
        forPart: AllPartType
    },
    {
        title: "Air Never been So Fresh",
        artist: "BluntOne",
        file: "/audio/lofigirl/Autumn in Budapest/07_AirNeverBeenSoFresh.mp3",
        forPart: AllPartType
    },
    {
        title: "Simplicity",
        artist: "BluntOne",
        file: "/audio/lofigirl/Autumn in Budapest/08_Simplicity.mp3",
        forPart: AllPartType
    },
    {
        title: "Danube Blues",
        artist: "BluntOne Baen Mow",
        file: "/audio/lofigirl/Autumn in Budapest/09_DanubeBlues(w_BaenMow).mp3",
        forPart: AllPartType
    },
    // "Time Remembered",
    {
        title: "neff",
        artist: "chief.",
        file: "/audio/lofigirl/Time Remembered/1. neff.mp3",
        forPart: AllPartType
    },
    {
        title: "message in a bottle",
        artist: "chief.",
        file: "/audio/lofigirl/Time Remembered/2. message in a bottle.mp3",
        forPart: AllPartType
    },
    {
        title: "ashes",
        artist: "chief.",
        file: "/audio/lofigirl/Time Remembered/3. ashes.mp3",
        forPart: AllPartType
    },
    {
        title: "distance",
        artist: "chief. x Kurt Stewart",
        file: "/audio/lofigirl/Time Remembered/4. distance w_ kurt stewart v2.mp3",
        forPart: AllPartType
    },
    {
        title: "you used to",
        artist: "chief.",
        file: "/audio/lofigirl/Time Remembered/5. you used to.mp3",
        forPart: AllPartType
    },
    {
        title: "liquid",
        artist: "chief. x Odyssee",
        file: "/audio/lofigirl/Time Remembered/6. liquid w_ odyssee v2.mp3",
        forPart: AllPartType
    },
    {
        title: "downtown",
        artist: "chief. x Joe Nora",
        file: "/audio/lofigirl/Time Remembered/7. downtown w_ joe nora.mp3",
        forPart: AllPartType
    },
    {
        title: "it happens",
        artist: "chief.",
        file: "/audio/lofigirl/Time Remembered/8. it happens.mp3",
        forPart: AllPartType
    },
    // "Chance Encounter",
    {
        title: "Rewinding Memories",
        artist: "Refeeld x Project AER",
        file: "/audio/lofigirl/Chance Encounter/1 Refeeld x Project AER - Rewinding Memories.mp3",
        forPart: AllPartType
    },
    {
        title: "Tell Me Your Name",
        artist: "Refeeld x Project AER",
        file: "/audio/lofigirl/Chance Encounter/2__Tell_Me_Your_Name.mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Terrain",
        artist: "Refeeld x Project AER",
        file: "/audio/lofigirl/Chance Encounter/3 Refeeld x Project AER - Blue Terrain.mp3",
        forPart: AllPartType
    },
    {
        title: "Your Best Option",
        artist: "Refeeld x Project AER",
        file: "/audio/lofigirl/Chance Encounter/4 Refeeld x Project AER - Your Best Option.mp3",
        forPart: AllPartType
    },
    {
        title: "Maybe We're Still Sleeping",
        artist: "Refeeld x Project AER",
        file: "/audio/lofigirl/Chance Encounter/5 Refeeld x Project AER - Maybe We_re Still Sleeping.mp3",
        forPart: AllPartType
    },
    // "Until Forever",
    {
        title: "We Met",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/1 We Met.mp3",
        forPart: AllPartType
    },
    {
        title: "First Dates",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/2 First Dates.mp3",
        forPart: AllPartType
    },
    {
        title: "Day One",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/3 Day One.mp3",
        forPart: AllPartType
    },
    {
        title: "Fallen in Love",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/4 Fallen in Love.mp3",
        forPart: AllPartType
    },
    {
        title: "Discovering",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/5 Discovering.mp3",
        forPart: AllPartType
    },
    {
        title: "Feeling home",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/6 Feeling Home.mp3",
        forPart: AllPartType
    },
    {
        title: "At The Sea",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/7 At The Sea.mp3",
        forPart: AllPartType
    },
    {
        title: "Island Walks",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/8 Island Walks.mp3",
        forPart: AllPartType
    },
    {
        title: "Soulmates",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/9 Soulmates.mp3",
        forPart: AllPartType
    },
    {
        title: "Thermal Baths",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/10 Thermal Baths.mp3",
        forPart: AllPartType
    },
    {
        title: "Different Cities",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/11 Different Cities.mp3",
        forPart: AllPartType
    },
    {
        title: "Pancakes",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/12 Pancakes.mp3",
        forPart: AllPartType
    },
    {
        title: "Balcony Breakfast",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/13 Balcony Breakfast .mp3",
        forPart: AllPartType
    },
    {
        title: "Chocolate Puddings",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/14 Chocolate Puddings.mp3",
        forPart: AllPartType
    },
    {
        title: "Late Night Talks",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/15 Late Night Talks.mp3",
        forPart: AllPartType
    },
    {
        title: "Until Forever",
        artist: "Yasumu",
        file: "/audio/lofigirl/Until Forever/16 Until Forever.mp3",
        forPart: AllPartType
    },
    // "Underneath",
    {
        title: "Surfaced",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/1_Surfaced.mp3",
        forPart: AllPartType
    },
    {
        title: "underneath",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/2. Underneath.mp3",
        forPart: AllPartType
    },
    {
        title: "Lightning bugs",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/3. Lightning bugs.mp3",
        forPart: AllPartType
    },
    {
        title: "Atlantis",
        artist: "Casiio x Sleepermane ft. Sling Dilly",
        file: "/audio/lofigirl/Underneath/4. Atlantis w Sling Dilly.mp3",
        forPart: AllPartType
    },
    {
        title: "Cascades",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/5. Cascades.mp3",
        forPart: AllPartType
    },
    {
        title: "Prisms",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/6. Prisms.mp3",
        forPart: AllPartType
    },
    {
        title: "Wishing Well",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/7. Wishing Well.mp3",
        forPart: AllPartType
    },
    {
        title: "Luna",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/8. Luna.mp3",
        forPart: AllPartType
    },
    {
        title: "Lagoon",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/9. Lagoon.mp3",
        forPart: AllPartType
    },
    {
        title: "Wetlands",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/10. Wetlands.mp3",
        forPart: AllPartType
    },
    {
        title: "Depths",
        artist: "Casiio x Sleepermane",
        file: "/audio/lofigirl/Underneath/11. Depths.mp3",
        forPart: AllPartType
    },
    // "Riverside",
    {
        title: "Riverside",
        artist: "Slo Loris",
        file: "/audio/lofigirl/Riverside/1. Riverside (Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Aftercastle",
        artist: "Slo Loris x Strehlow",
        file: "/audio/lofigirl/Riverside/2. Aftercastle (Slo Loris x Strehlow) (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Kings of the Indoors",
        artist: "Slo Loris x Tender Spring",
        file: "/audio/lofigirl/Riverside/3. Kings of the Indoors (Slo Loris x Tender Spring .mp3",
        forPart: AllPartType
    },
    {
        title: "Lily Field",
        artist: "Slo Loris",
        file: "/audio/lofigirl/Riverside/4. Lily Fieldwav.mp3",
        forPart: AllPartType
    },
    {
        title: "Pier",
        artist: "Slo Loris",
        file: "/audio/lofigirl/Riverside/5. Pier .mp3",
        forPart: AllPartType
    },
    // "Until Tomorrow",
    {
        title: "Until Tomorrow",
        artist: "Towerz x Fourwalls",
        file: "/audio/lofigirl/Until Tomorrow/1 - Until Tomorrow ft. Fourwalls.mp3",
        forPart: AllPartType
    },
    {
        title: "Distant Thoughts",
        artist: "Towerz x Hoogway",
        file: "/audio/lofigirl/Until Tomorrow/2 - Distant Thoughts ft. Hoogway.mp3",
        forPart: AllPartType
    },
    {
        title: "Drifting",
        artist: "Towerz",
        file: "/audio/lofigirl/Until Tomorrow/3 - Drifting.mp3",
        forPart: AllPartType
    },
    {
        title: "Hearts",
        artist: "Towerz",
        file: "/audio/lofigirl/Until Tomorrow/4 - Hearts.mp3",
        forPart: AllPartType
    },
    {
        title: "Chao",
        artist: "Towerz x Chris Mazuera",
        file: "/audio/lofigirl/Until Tomorrow/5 - Chao ft. Chris Mazuera.mp3",
        forPart: AllPartType
    },
    {
        title: "Catbug",
        artist: "Towerz x Tender Spring",
        file: "/audio/lofigirl/Until Tomorrow/6 - Catbug ft. Tender Spring.mp3",
        forPart: AllPartType
    },
    {
        title: "Aimless Wander",
        artist: "Towerz x Fourwalls x Farewell",
        file: "/audio/lofigirl/Until Tomorrow/7 - Towerz ft. Fourwalls x Farewell - Aimless Wander.mp3",
        forPart: AllPartType
    },
    {
        title: "Skinny Atlas",
        artist: "Towerz x Skinny Atlas",
        file: "/audio/lofigirl/Until Tomorrow/8 -Serendipity ft. Skinny Atlas.mp3",
        forPart: AllPartType
    },
    // "Zero",
    {
        title: "Zero",
        artist: "Sebastian Kamae x Aylior",
        file: "/audio/lofigirl/Zero/1. Zero v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Poolside",
        artist: "Sebastian Kamae x Aylior",
        file: "/audio/lofigirl/Zero/2. Poolside v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Sunrise",
        artist: "Sebastian Kamae x Aylior",
        file: "/audio/lofigirl/Zero/3. Sunrise v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Dunes",
        artist: "Sebastian Kamae x Aylior",
        file: "/audio/lofigirl/Zero/4 Dunes v3.mp3",
        forPart: AllPartType
    },
    {
        title: "Snooze",
        artist: "Sebastian Kamae x Aylior",
        file: "/audio/lofigirl/Zero/5. Snooze v3.mp3",
        forPart: AllPartType
    },
    {
        title: "Wake Up",
        artist: "Sebastian Kamae x Aylior",
        file: "/audio/lofigirl/Zero/6. Wake Up v3.mp3",
        forPart: AllPartType
    },
    // "Bedtime Stories Pt. 3",
    {
        title: "Interlude",
        artist: "brillion.",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(1 - brillion. - Interlude.mp3",
        forPart: AllPartType
    },
    {
        title: "Summit",
        artist: "brillion. x Kurt Stewart",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(2 - brillion. x Kurt Stewart - Summit.mp3",
        forPart: AllPartType
    },
    {
        title: "Forever",
        artist: "brillion. x Khutko",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(3.) brillion. x Khutko - Forever (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Drift",
        artist: "brillion. x  chief.",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(4.) brillion. x chief. - Drift (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Searching",
        artist: "brillion. x Fatb",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(5.) REPLACE brillion. x Fatb - Searching (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Moonglow",
        artist: "brillion. x Hm Surf",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(6.) brillion. x Hm Surf - Moonglow (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Melatonin",
        artist: "brillion. x Sleepdealer",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(7.) brillion. x Sleepdealer - Melatonin (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Orbit",
        artist: "brillion. x Lucid Green",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(8.) brillion. x Lucid Green - Orbit (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "My Spaceship",
        artist: "brillion.",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(9.) REPLACE brillion. - My Spaceship (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Floating",
        artist: "brillion. x Jazzinuf",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(11.) REPLACE brillion. x Odyssee - Down To Earth (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Down To Earth",
        artist: "brillion. x Odyssee",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(11.) REPLACE brillion. x Odyssee - Down To Earth (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Discovery",
        artist: "brillion. x NOlfo",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(12.) brillion. x Nolfo - Discovery (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Arrival",
        artist: "brillion. x Imagiro",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(13.) REPLACE brillion. x Imagiro - Arrival (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Eternal",
        artist: "brillion. x No Spirit",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(14.) REPLACE brillion. x No Spirit - Eternal (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Transcendence",
        artist: "brillion. x Sitting Duck x Hoffy",
        file: "/audio/lofigirl/Bedtime Stories Pt. 3/(15.) brillion. x Sitting Duck x Hoffy - Transcendence (Master).mp3",
        forPart: AllPartType
    },
    // "A Friendly Warmth",
    {
        title: "It’s alright to feel afraid",
        artist: "Tender Spring x Blurred Figures",
        file: "/audio/lofigirl/A Friendly Warmth/1 - it_s alright to feel afraid.mp3",
        forPart: AllPartType
    },
    {
        title: "Keep friends close",
        artist: "Tender Spring x Blurred Figures ft. Chris Mazuera",
        file: "/audio/lofigirl/A Friendly Warmth/2 - keep friends close (w chris mazuera _ louk).mp3",
        forPart: AllPartType
    },
    {
        title: "A friendly warmth",
        artist: "Tender Spring x Blurred Figures",
        file: "/audio/lofigirl/A Friendly Warmth/3 - a friendly warmth.mp3",
        forPart: AllPartType
    },
    {
        title: "Birds of a feather",
        artist: "Tender Spring x Blurred Figures ft. Middle School",
        file: "/audio/lofigirl/A Friendly Warmth/4 - birds of a feather (w middle school).mp3",
        forPart: AllPartType
    },
    {
        title: "Don’t worry, I’ll always be here",
        artist: "Tender Spring x Blurred Figures",
        file: "/audio/lofigirl/A Friendly Warmth/5 - don_t worry, i_ll always be here.mp3",
        forPart: AllPartType
    },
    {
        title: "Hugs",
        artist: "Tender Spring x Blurred Figures ft. INKY!",
        file: "/audio/lofigirl/A Friendly Warmth/6 - hugs (w inky!).mp3",
        forPart: AllPartType
    },
    // "The Beauty Around Us",
    {
        title: "Reverie",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/1. Reverie 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonflower",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/2. Moonflower 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Hiding Place",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/3. Hiding Place 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Cloud Cover",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/4. Cloud Cover 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Lakeview",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/5. Lakeview 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Skylark",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/6. Skylark 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Until The Morning Comes",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/7. Until The Morning Comes 3.mp3",
        forPart: AllPartType
    },
    {
        title: "The Overlook",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/8. The Overlook 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Constellation",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/9. Constellation 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Daisies",
        artist: "softy x no one's perfect",
        file: "/audio/lofigirl/The Beatuty Around Us/10. Daisies 3.mp3",
        forPart: AllPartType
    },
    // "The Prophecy",
    {
        title: "Kaya Village",
        artist: "Tenno",
        file: "/audio/lofigirl/The Prophecy/1 Tenno - Kaya Village.mp3",
        forPart: AllPartType
    },
    {
        title: "Daydreaming",
        artist: "Tenno",
        file: "/audio/lofigirl/The Prophecy/2 Tenno - Daydreaming.mp3",
        forPart: AllPartType
    },
    {
        title: "Vision",
        artist: "Tenno",
        file: "/audio/lofigirl/The Prophecy/3 Tenno - Vision.mp3",
        forPart: AllPartType
    },
    {
        title: "The Seeker",
        artist: "Tenno",
        file: "/audio/lofigirl/The Prophecy/4 Tenno - The Seeker.mp3",
        forPart: AllPartType
    },
    {
        title: "Sacred Tree",
        artist: "Tenno",
        file: "/audio/lofigirl/The Prophecy/5 Tenno - Sacred Tree.mp3",
        forPart: AllPartType
    },
    {
        title: "The Prophecy Unfolds",
        artist: "Tenno",
        file: "/audio/lofigirl/The Prophecy/6 Tenno - The Prophecy Unfolds.mp3",
        forPart: AllPartType
    },
    // "Lanterns",
    {
        title: "Under A Wishing Sky",
        artist: "Lilac",
        file: "/audio/lofigirl/Lanterns/01 Under A Wishing Sky.mp3",
        forPart: AllPartType
    },
    {
        title: "Celestial",
        artist: "Lilac",
        file: "/audio/lofigirl/Lanterns/02 Celestial.mp3",
        forPart: AllPartType
    },
    {
        title: "Your Light",
        artist: "Lilac",
        file: "/audio/lofigirl/Lanterns/04 Fireworks.mp3",
        forPart: AllPartType
    },
    {
        title: "Fireworks",
        artist: "Lilac",
        file: "/audio/lofigirl/Lanterns/04 Fireworks.mp3",
        forPart: AllPartType
    },
    {
        title: "Singing to the Moon",
        artist: "Lilac",
        file: "/audio/lofigirl/Lanterns/05 Singing to the Moon.mp3",
        forPart: AllPartType
    },
    // "Forever Changing",
    {
        title: "Forever Changing",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/1 Laffey - Forever Changing (MasterV3).mp3",
        forPart: AllPartType
    },
    {
        title: "Home",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/2 Laffey - Home (MasterV2).mp3",
        forPart: AllPartType
    },
    {
        title: "Constellations",
        artist: "Laffey x Oatmello",
        file: "/audio/lofigirl/Forever Changing/3 Laffey - Constellations ft. Oatmello (MasterV2).mp3",
        forPart: AllPartType
    },
    {
        title: "Stillness",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/4 Laffey - Stillness (MasterV3).mp3",
        forPart: AllPartType
    },
    {
        title: "Astral",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/5 Laffey - Astral (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Under The Stars",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/6 Laffey - Under The Stars (MasterV2).mp3",
        forPart: AllPartType
    },
    {
        title: "Looking Back",
        artist: "Laffey x Yasumu",
        file: "/audio/lofigirl/Forever Changing/7 Laffey - Looking Back ft. Yasumu (MasterV2).mp3",
        forPart: AllPartType
    },
    {
        title: "By The Pond",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/8 Laffey - By The Pond (Master V3).mp3",
        forPart: AllPartType
    },
    {
        title: "Midnight",
        artist: "Laffey",
        file: "/audio/lofigirl/Forever Changing/9 Laffey - Midnight (MasterV2).mp3",
        forPart: AllPartType
    },
    {
        title: "Sunsets",
        artist: "Laffey x Rook1e",
        file: "/audio/lofigirl/Forever Changing/10 Laffey - Sunsets ft. Rook1e (Master V2).mp3",
        forPart: AllPartType
    },
    // "Been Thinking",
    {
        title: "Blue eyes",
        artist: "Jhove",
        file: "/audio/lofigirl/Been Thinking/01. jhove - blue eyes (final master version).mp3",
        forPart: AllPartType
    },
    {
        title: "Far Away",
        artist: "Jhove",
        file: "/audio/lofigirl/Been Thinking/02. jhove - far away (final master version).mp3",
        forPart: AllPartType
    },
    {
        title: "Above Couds",
        artist: "Jhove",
        file: "/audio/lofigirl/Been Thinking/03. jhove - above clouds (final master version).mp3",
        forPart: AllPartType
    },
    {
        title: "About Us",
        artist: "Jhove",
        file: "/audio/lofigirl/Been Thinking/04. jhove - about us (master).mp3",
        forPart: AllPartType
    },
    {
        title: "You",
        artist: "Jhove",
        file: "/audio/lofigirl/Been Thinking/05. jhove - you (master).mp3",
        forPart: AllPartType
    },
    {
        title: "After Hours",
        artist: "Jhove",
        file: "/audio/lofigirl/Been Thinking/06. jhove - after hours (master).mp3",
        forPart: AllPartType
    },
    // "Escapade",
    {
        title: "Moon Waltz",
        artist: "Elijah Lee x aimless",
        file: "/audio/lofigirl/Escapade/1. Moon Waltz.mp3",
        forPart: AllPartType
    },
    {
        title: "Explorers",
        artist: "Elijah Lee x aimless",
        file: "/audio/lofigirl/Escapade/2. Explorers.mp3",
        forPart: AllPartType
    },
    {
        title: "Escape With Me",
        artist: "Elijah Lee x aimless",
        file: "/audio/lofigirl/Escapade/3. Escape With Me.mp3",
        forPart: AllPartType
    },
    {
        title: "Our Hideaway",
        artist: "Elijah Lee x aimless",
        file: "/audio/lofigirl/Escapade/4. Our Hideaway.mp3",
        forPart: AllPartType
    },
    {
        title: "Infinite",
        artist: "Elijah Lee x aimless",
        file: "/audio/lofigirl/Escapade/5. Infinite.mp3",
        forPart: AllPartType
    },
    {
        title: "Midnight Sky",
        artist: "Elijah Lee x aimless",
        file: "/audio/lofigirl/Escapade/6. Midnight Sky.mp3",
        forPart: AllPartType
    },
    // "Rüya",
    {
        title: "Rüya",
        artist: "Kanisan x WYS",
        file: "/audio/lofigirl/Rüya/1. kanisan - rüya (ft. wys).mp3",
        forPart: AllPartType
    },
    {
        title: "Left Alone",
        artist: "Kanisan x Nymano",
        file: "/audio/lofigirl/Rüya/2. kanisan - left alone (ft. nymano).mp3",
        forPart: AllPartType
    },
    {
        title: "Kokoro",
        artist: "Kanisan",
        file: "/audio/lofigirl/Rüya/3. kanisan - kokoro.mp3",
        forPart: AllPartType
    },
    {
        title: "Couldn't Help",
        artist: "Kanisan x Pandrezz",
        file: "/audio/lofigirl/Rüya/4. kanisan - couldn_t help (ft. pandrezz).mp3",
        forPart: AllPartType
    },
    {
        title: "Withheld Call",
        artist: "Kanisan x Mau",
        file: "/audio/lofigirl/Rüya/5. kanisan - withheld call (ft. mau).mp3",
        forPart: AllPartType
    },
    {
        title: "Lights Out",
        artist: "Kanisan x  Mondo Loops",
        file: "/audio/lofigirl/Rüya/6. kanisan - lights out (ft. mondo loops).mp3",
        forPart: AllPartType
    },
    {
        title: "Hour Away",
        artist: "Kanisan x Sadtoi",
        file: "/audio/lofigirl/Rüya/7. kanisan - hours away (ft. sadtoi).mp3",
        forPart: AllPartType
    },
    {
        title: "Sorrow",
        artist: "Kanisan x pointy features",
        file: "/audio/lofigirl/Rüya/8. kanisan - sorrow (ft. pointy features).mp3",
        forPart: AllPartType
    },
    // "Distant Worlds",
    {
        title: "Alien Sky",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/1 - Alien Sky.mp3",
        forPart: AllPartType
    },
    {
        title: "Missing You",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/2 - Missing You.mp3",
        forPart: AllPartType
    },
    {
        title: "Falling Star",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/3 - Falling Star.mp3",
        forPart: AllPartType
    },
    {
        title: "Lunar Eclipse",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/4 - Lunar Eclipse.mp3",
        forPart: AllPartType
    },
    {
        title: "Too Tired",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/5 - Too Tired.mp3",
        forPart: AllPartType
    },
    {
        title: "Reflection",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/6 - Reflection.mp3",
        forPart: AllPartType
    },
    {
        title: "Cold Pizza",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/7 - Cold Pizza.mp3",
        forPart: AllPartType
    },
    {
        title: "Finding Myself",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/8 - Finding Myself.mp3",
        forPart: AllPartType
    },
    {
        title: "After the Rain",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/9 - After the Rain.mp3",
        forPart: AllPartType
    },
    {
        title: "Morning Light",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Distant Worlds/10 - Morning Light.mp3",
        forPart: AllPartType
    },
    {
        title: "Tabula Rasa",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/Dove",
        forPart: AllPartType
    },
    // "Angelic",
    {
        title: "Lilac",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Angelic/1 - Lilac.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonwalker",
        artist: "Kainbeats x Kanisan",
        file: "/audio/lofigirl/Angelic/2 - Moonwalker w Kanisan.mp3",
        forPart: AllPartType
    },
    {
        title: "Steadfast",
        artist: "Kainbeats x Hoogway",
        file: "/audio/lofigirl/Angelic/3 - Steadfast w Hoogway.mp3",
        forPart: AllPartType
    },
    {
        title: "Purity",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Angelic/4 - Purity.mp3",
        forPart: AllPartType
    },
    {
        title: "Outcast",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Angelic/5 - Outcast.mp3",
        forPart: AllPartType
    },
    {
        title: "Ephemerality",
        artist: "Kainbeats x cxlt.",
        file: "/audio/lofigirl/Angelic/6 - Ephemerality w cxlt..mp3",
        forPart: AllPartType
    },
    {
        title: "Angelic",
        artist: "Kainbeats x Hevi",
        file: "/audio/lofigirl/Angelic/7 - Angelic w Hevi.mp3",
        forPart: AllPartType
    },
    {
        title: "Pure Warmth",
        artist: "Kainbeats x Mondo Loops",
        file: "/audio/lofigirl/Angelic/8 - Pure Warmth w Mondo Loops.mp3",
        forPart: AllPartType
    },
    // "Walls",
    {
        title: "Discover",
        artist: "Elior",
        file: "/audio/lofigirl/Walls/1. Discover mstr v3.mp3",
        forPart: AllPartType
    },
    {
        title: "Walls",
        artist: "Elior x Aylior",
        file: "/audio/lofigirl/Walls/2. Walls mstr v3.mp3",
        forPart: AllPartType
    },
    {
        title: "Lucid Dreams",
        artist: "Elior x DJ Garlik",
        file: "/audio/lofigirl/Walls/3. Lucid Dreams mstr v3.mp3",
        forPart: AllPartType
    },
    {
        title: "Liza",
        artist: "Elior",
        file: "/audio/lofigirl/Walls/4. Liza mstr v4.mp3",
        forPart: AllPartType
    },
    {
        title: "Moving On",
        artist: "Elior",
        file: "/audio/lofigirl/Walls/5. Moving On mstr v3.mp3",
        forPart: AllPartType
    },
    {
        title: "Savour",
        artist: "Elior",
        file: "/audio/lofigirl/Walls/6. Savour - Broomstick v8 (mstr v3).mp3",
        forPart: AllPartType
    },
    // "One day it’s over",
    {
        title: "As the world burns",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/as the world burns_.mp3",
        forPart: AllPartType
    },
    {
        title: "Hoboken",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/hoboken_.mp3",
        forPart: AllPartType
    },
    {
        title: "Healthy distraction",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/healthy distraction_.mp3",
        forPart: AllPartType
    },
    {
        title: "Dowsy",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/drowsy_.mp3",
        forPart: AllPartType
    },
    {
        title: "You all sound the same",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/You all sound the same_.mp3",
        forPart: AllPartType
    },
    {
        title: "Starting late",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/starting late_.mp3",
        forPart: AllPartType
    },
    {
        title: "28 days",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/28 days_.mp3",
        forPart: AllPartType
    },
    {
        title: "Capturing the light",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/capturing the light_.mp3",
        forPart: AllPartType
    },
    {
        title: "Firefly",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/firefly_.mp3",
        forPart: AllPartType
    },
    {
        title: "I wish you love",
        artist: "less.people",
        file: "/audio/lofigirl/One day it's over/Iwish you love_.mp3",
        forPart: AllPartType
    },
    // "Nostalgia",
    {
        title: "Infinity ...",
        artist: "Mujo x Sweet Medicine ft. Mondo Loops",
        file: "/audio/lofigirl/Nostalgia/01 - Mujo x Sweet Medicine x Mondo Loops - Infinity (NEW VERSION).mp3",
        forPart: AllPartType
    },
    {
        title: "SchoolYard",
        artist: "Mujo x Sweet Medicine ft. WYS",
        file: "/audio/lofigirl/Nostalgia/02 - Mujo x Sweet Medicine x WYS - SchoolYard.mp3",
        forPart: AllPartType
    },
    {
        title: "Lagoon",
        artist: "Mujo x Sweet Medicine",
        file: "/audio/lofigirl/Nostalgia/03 - Mujo x Sweet Medicine - Lagoon.mp3",
        forPart: AllPartType
    },
    {
        title: "Crystals",
        artist: "Mujo x Sweet Medicine ft. Casiio",
        file: "/audio/lofigirl/Nostalgia/04 - Mujo x Sweet Medicine x Casiio - Crystals.mp3",
        forPart: AllPartType
    },
    {
        title: "Escaped",
        artist: "Mujo x Sweet Medicine ft. Mondo Loops",
        file: "/audio/lofigirl/Nostalgia/05 - Mujo x Sweet Medicine x Mondo Loops - Escaped.mp3",
        forPart: AllPartType
    },
    {
        title: "Nostalgia",
        artist: "Mujo x Sweet Medicine",
        file: "/audio/lofigirl/Nostalgia/06 - Mujo x Sweet Medicine - Nostalgia.mp3",
        forPart: AllPartType
    },
    // "Memory Within A Dream",
    {
        title: "Yerba Mate",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/1 Yerba Mate.mp3",
        forPart: AllPartType
    },
    {
        title: "In The End",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/2 In The End.mp3",
        forPart: AllPartType
    },
    {
        title: "Yuma",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/3 Yuma.mp3",
        forPart: AllPartType
    },
    {
        title: "Desireless",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/4 Desireless.mp3",
        forPart: AllPartType
    },
    {
        title: "Overthinking",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/5 Overthinking.mp3",
        forPart: AllPartType
    },
    {
        title: "Memory Within A Dream",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/6 Memory Within A Dream.mp3",
        forPart: AllPartType
    },
    {
        title: "Solar Reset",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/7 Solar Reset.mp3",
        forPart: AllPartType
    },
    {
        title: "Join Me",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/8 Join Me.mp3",
        forPart: AllPartType
    },
    {
        title: "You've Forgotten How",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/9 You_ve Forgotten How.mp3",
        forPart: AllPartType
    },
    {
        title: "Constant Motion",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/10 Constant Motion.mp3",
        forPart: AllPartType
    },
    {
        title: "38 Hz",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/11 38 Hz.mp3",
        forPart: AllPartType
    },
    {
        title: "Canella",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/12 Canella.mp3",
        forPart: AllPartType
    },
    {
        title: "Fragments Of Our Youth",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/13 Fragments Of Our Youth.mp3",
        forPart: AllPartType
    },
    {
        title: "It Was Always There",
        artist: "Ky Akasha",
        file: "/audio/lofigirl/Memory within A dream/14 It Was Always There.mp3",
        forPart: AllPartType
    },
    // "Latibule",
    {
        title: "Windmill City",
        artist: "goosetaf x Dillan Witherow",
        file: "/audio/lofigirl/Latibule/1 Windmill City w_ Dillan Witherow.mp3",
        forPart: AllPartType
    },
    {
        title: "Silk",
        artist: "goosetaf x Blue Wednesday",
        file: "/audio/lofigirl/Latibule/2 Silk w_ Blue Wednesday.mp3",
        forPart: AllPartType
    },
    {
        title: "Full of Heart",
        artist: "goosetaf",
        file: "/audio/lofigirl/Latibule/3 Full of Heart.mp3",
        forPart: AllPartType
    },
    {
        title: "Tree Sap",
        artist: "goosetaf",
        file: "/audio/lofigirl/Latibule/4 Tree Sap.mp3",
        forPart: AllPartType
    },
    {
        title: "Tucked Inside",
        artist: "goosetaf",
        file: "/audio/lofigirl/Latibule/5 Tucked Inside.mp3",
        forPart: AllPartType
    },
    {
        title: "Afternoon Commute",
        artist: "goosetaf",
        file: "/audio/lofigirl/Latibule/6 - Afternoon Commute.mp3",
        forPart: AllPartType
    },
    {
        title: "Siren",
        artist: "goosetaf x brillion.",
        file: "/audio/lofigirl/Latibule/7 Siren w_ brillion..mp3",
        forPart: AllPartType
    },
    {
        title: "Somewhere Away",
        artist: "goosetaf x INKY!",
        file: "/audio/lofigirl/Latibule/8 Somewhere Away (feat. INKY!).mp3",
        forPart: AllPartType
    },
    // "outer space",
    {
        title: "takeoff",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/1 - takeoff - MASTER v3.mp3",
        forPart: AllPartType
    },
    {
        title: "outer space",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/2 - outer space - MASTER v6.mp3",
        forPart: AllPartType
    },
    {
        title: "alone in the void",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/3 - alone in the void- MASTER v2.mp3",
        forPart: AllPartType
    },
    {
        title: "outer peace | inner demons",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/4 - outer peace � inner demons - MASTER v4.mp3",
        forPart: AllPartType
    },
    {
        title: "deep dive",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/5 - deep dive - MASTER v1.mp3",
        forPart: AllPartType
    },
    {
        title: "a new world",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/6 - a new world - MASTER v3.mp3",
        forPart: AllPartType
    },
    {
        title: "on the edge",
        artist: "j'san x epektase",
        file: "/audio/lofigirl/outer space/7- on the edge - MASTER v3.mp3",
        forPart: AllPartType
    },
    // "Cozy Winter ☕",
    {
        title: "Over The Moon",
        artist: "Team  Astro",
        file: "/audio/lofigirl/Cozy Winter/1 Team Astro - Over The Moon (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "After You",
        artist: "Hoogway",
        file: "/audio/lofigirl/Cozy Winter/2 Hoogway - After You (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Moonlit Walk",
        artist: "Purpple Cat",
        file: "/audio/lofigirl/Cozy Winter/03 Purrple Cat - Moonlit Walk (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Fjallstoppur",
        artist: "Enluv x E I S U",
        file: "/audio/lofigirl/Cozy Winter/04 Enluv _ E I S U - Fjallstoppur (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Vulnerable",
        artist: "Squeeda",
        file: "/audio/lofigirl/Cozy Winter/05 squeeda - Vulnerable (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "sparkler",
        artist: "Towerz x farewell",
        file: "/audio/lofigirl/Cozy Winter/06 towerz x farewell - sparkler (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "night lamp",
        artist: "jhove",
        file: "/audio/lofigirl/Cozy Winter/07 jhove - night lamp (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "overthinking",
        artist: "cxlt",
        file: "/audio/lofigirl/Cozy Winter/08 cxlt - overthinking (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Soaring",
        artist: "Elior",
        file: "/audio/lofigirl/Cozy Winter/09 Elior - Soaring (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Rain Come Again",
        artist: "Xander",
        file: "/audio/lofigirl/Cozy Winter/10 Xander - Rain Come Again (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Drifting",
        artist: "G Mills x aimless",
        file: "/audio/lofigirl/Cozy Winter/11 G Mills x aimless - Drifting (Kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "San Francisco",
        artist: "WYS",
        file: "/audio/lofigirl/Cozy Winter/12 WYS - San Francisco (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Love's Dissonance",
        artist: "lofty x pointy features x quist",
        file: "/audio/lofigirl/Cozy Winter/13 lofty x pointy features x quist - Love_s Dissonance (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Tetra",
        artist: "Monma x Cocabona",
        file: "/audio/lofigirl/Cozy Winter/14 Monma x Cocabona - Tetra (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "every second",
        artist: "aimless x Soho",
        file: "/audio/lofigirl/Cozy Winter/15 aimless x Soho - every second (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Ebs and Flows",
        artist: "Glimlip",
        file: "/audio/lofigirl/Cozy Winter/16 Glimlip - Ebs and Flows (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Days Will Pass",
        artist: "TABAL x eaup",
        file: "/audio/lofigirl/Cozy Winter/17 TABAL x eaup - Days Will Pass (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Serene",
        artist: "Ambulo",
        file: "/audio/lofigirl/Cozy Winter/18 Ambulo - Serene (Kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Inside Out",
        artist: "Sleepermane x Sling Dilly",
        file: "/audio/lofigirl/Cozy Winter/19 Sleepermane _ Sling Dilly - Inside Out (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Dreaming of Snow",
        artist: "Otaam x Squeeda",
        file: "/audio/lofigirl/Cozy Winter/20 Otaam x squeeda - Dreaming of Snow (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Floating",
        artist: "eaup x Elior",
        file: "/audio/lofigirl/Cozy Winter/21 eaup ft. Elior - Floating (Kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Campfire",
        artist: "bert x Nerok",
        file: "/audio/lofigirl/Cozy Winter/22 bert x Nerok - Campfire (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Hammock",
        artist: "Azula x IamAlex x Dillan Witherow",
        file: "/audio/lofigirl/Cozy Winter/23 azula iamalex Dillan Witherow - Hammock (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Sixth Station",
        artist: "Anbuu x Blue Wednesday",
        file: "/audio/lofigirl/Cozy Winter/24 anbuu - Sixth Station w Blue Wednesday (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Heated Blanket",
        artist: "Tysu x Spencer Hunt",
        file: "/audio/lofigirl/Cozy Winter/25 tysu x spencer hunt - Heated Blanket.mp3",
        forPart: AllPartType
    },
    {
        title: "Formless",
        artist: "Kainbeats x S N U G",
        file: "/audio/lofigirl/Cozy Winter/26 Kainbeats _ S N U G - Formless (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Counting Stars",
        artist: "Chiccote's Beat x Pueblo Vista",
        file: "/audio/lofigirl/Cozy Winter/27 Chiccote_s Beats x  Pueblo Vista - Counting Stars (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "moonfall",
        artist: "Towerz x Hoogway",
        file: "/audio/lofigirl/Cozy Winter/28 towerz x hoogway - moonfall (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Waves",
        artist: "Fourwalls",
        file: "/audio/lofigirl/Cozy Winter/29 fourwalls - Waves (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "a roomful of memories and longing",
        artist: "Celestial Alignment",
        file: "/audio/lofigirl/Cozy Winter/30 celestial alignment - a roomful of memories and longing (Kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "Always Drifting",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/Cozy Winter/31 Mondo Loops - Always Drifting (kupla master).mp3",
        forPart: AllPartType
    },
    {
        title: "As The Sun Sets",
        artist: "Laffey",
        file: "/audio/lofigirl/Cozy Winter/32 Laffey - As The Sun Sets (kupla master).mp3",
        forPart: AllPartType
    },
    // "Staring Contest",
    {
        title: "Nobody There",
        artist: "fourwalls",
        file: "/audio/lofigirl/Staring Contest/1 FOURWALLS - NOBODY THERE.mp3",
        forPart: AllPartType
    },
    {
        title: "Staring Contest",
        artist: "fourwalls",
        file: "/audio/lofigirl/Staring Contest/2 FOURWALLS - STARING CONTEST.mp3",
        forPart: AllPartType
    },
    {
        title: "Firefly",
        artist: "fourwalls x Skinny Atlas",
        file: "/audio/lofigirl/Staring Contest/3 FOURWALLS - FIREFLY FT. SKINNY ATLAS.mp3",
        forPart: AllPartType
    },
    {
        title: "Skin",
        artist: "fourwalls x nighlight",
        file: "/audio/lofigirl/Staring Contest/4 skin ft nightlight master(1).mp3",
        forPart: AllPartType
    },
    {
        title: "Above The Clouds",
        artist: "fourwalls",
        file: "/audio/lofigirl/Staring Contest/5 FOURWALLS - ABOVE THE CLOUDS.mp3",
        forPart: AllPartType
    },
    {
        title: "Out West",
        artist: "fourwalls x Chris Mazuera",
        file: "/audio/lofigirl/Staring Contest/6 FOURWALLS - OUT WEST FT. CHRIS MAZUERA.mp3",
        forPart: AllPartType
    },
    {
        title: "Waiting At The Lights",
        artist: "fourwalls x tender spring",
        file: "/audio/lofigirl/Staring Contest/7 FOURWALLS - WAITING AT THE LIGHTS FT. TENDER SPRING.mp3",
        forPart: AllPartType
    },
    {
        title: "Remembering",
        artist: "fourwalls x Towerz",
        file: "/audio/lofigirl/Staring Contest/8 FOURWALLS - REMEMBERING YOU FT. TOWERZ.mp3",
        forPart: AllPartType
    },
    {
        title: "Smile From A Friend",
        artist: "fourwalls x farewell",
        file: "/audio/lofigirl/Staring Contest/smile from a friend ft farewell master(1).mp3",
        forPart: AllPartType
    },
    // "The Pursuit of Simplicity",
    {
        title: "Go Time",
        artist: "C4C",
        file: "/audio/lofigirl/The pursuit of Simplicity/1. Go Time v10.mp3",
        forPart: AllPartType
    },
    {
        title: "Skkip Town",
        artist: "C4C",
        file: "/audio/lofigirl/The pursuit of Simplicity/2. Skip Town v11.mp3",
        forPart: AllPartType
    },
    {
        title: "Vagabond Life",
        artist: "C4C",
        file: "/audio/lofigirl/The pursuit of Simplicity/3. Vagabond Life v11.mp3",
        forPart: AllPartType
    },
    {
        title: "New Homeland",
        artist: "C4C",
        file: "/audio/lofigirl/The pursuit of Simplicity/4. New Homeland v10.mp3",
        forPart: AllPartType
    },
    {
        title: "Build with Love",
        artist: "C4C x Blue Wednesday",
        file: "/audio/lofigirl/The pursuit of Simplicity/5. Build with Love (ft. Blue Wednesday) v10.mp3",
        forPart: AllPartType
    },
    {
        title: "Light a Fire",
        artist: "C4C",
        file: "/audio/lofigirl/The pursuit of Simplicity/6. Light a Fire v10.mp3",
        forPart: AllPartType
    },
    {
        title: "Enjoy",
        artist: "C4C",
        file: "/audio/lofigirl/The pursuit of Simplicity/7. Enjoy v10.mp3",
        forPart: AllPartType
    },
    // "Melodic Nostalgic",
    {
        title: "introspection",
        artist: "tomcbumpz",
        file: "/audio/lofigirl/Melodic Nostalgic/1. introspection (master).mp3",
        forPart: AllPartType
    },
    {
        title: "saudade",
        artist: "tomcbumpz x Yutaka hirasaka",
        file: "/audio/lofigirl/Melodic Nostalgic/2. saudade (w_ yutaka hirasaka) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "eyes shut, mind open",
        artist: "tomcbumpz x tender spring",
        file: "/audio/lofigirl/Melodic Nostalgic/3. eyes shut, mind open (w_ tender spring) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "within & without",
        artist: "tomcbumpz x Paniyolo",
        file: "/audio/lofigirl/Melodic Nostalgic/4. within _ without (w_ paniyolo) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "be",
        artist: "tomcbumpz",
        file: "/audio/lofigirl/Melodic Nostalgic/5. be (master).mp3",
        forPart: AllPartType
    },
    // "Temple Garden",
    {
        title: "Lotus",
        artist: "BVG",
        file: "/audio/lofigirl/Temple Garden/1 - BVG - lotus (Shortened version).mp3",
        forPart: AllPartType
    },
    {
        title: "Gentle Wind",
        artist: "BVG",
        file: "/audio/lofigirl/Temple Garden/2 - BVG - Gentle Wind.mp3",
        forPart: AllPartType
    },
    {
        title: "Spring Rain",
        artist: "BVG",
        file: "/audio/lofigirl/Temple Garden/3 - BVG - Spring Rain (Shortened Version).mp3",
        forPart: AllPartType
    },
    {
        title: "Youth",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Temple Garden/4 - BVG x møndberg - Youth.mp3",
        forPart: AllPartType
    },
    {
        title: "Spirited Away",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Temple Garden/5 - BVG x møndberg - spirited away (final version 4).mp3",
        forPart: AllPartType
    },
    // "River Glow",
    {
        title: "Dusk",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/1) Dusk.mp3",
        forPart: AllPartType
    },
    {
        title: "Down by the Lake",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/2) Down by the Lake.mp3",
        forPart: AllPartType
    },
    {
        title: "Fire Flies",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/3) Fire Flies.mp3",
        forPart: AllPartType
    },
    {
        title: "Mercury Retrograde",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/4) Mercury Retrograde.mp3",
        forPart: AllPartType
    },
    {
        title: "Astral Hour",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/5) Astral Hour.mp3",
        forPart: AllPartType
    },
    {
        title: "Diamonds",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/6) Diamonds.mp3",
        forPart: AllPartType
    },
    {
        title: "Pillow Beat with Strehlow",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/7) Pillow Beat with Strehlow.mp3",
        forPart: AllPartType
    },
    {
        title: "Marmalade Sky",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/8) Marmalade Sky.mp3",
        forPart: AllPartType
    },
    {
        title: "Crystal Lake",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/9) Crystal Lake.mp3",
        forPart: AllPartType
    },
    {
        title: "River Glow",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/10) River Glow.mp3",
        forPart: AllPartType
    },
    {
        title: "Traces of Light",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/11) Traces of Light.mp3",
        forPart: AllPartType
    },
    {
        title: "Sliver Of Morning",
        artist: "Tyluv.",
        file: "/audio/lofigirl/River Glow/12) Sliver of Morning.mp3",
        forPart: AllPartType
    },
    // "Time In Motion",
    {
        title: "Unwritten",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/1 Dontcry _ Nokiaa - Unwritten.mp3",
        forPart: AllPartType
    },
    {
        title: "Mind Pool",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/3 Dontcry _ Nokiaa - Garden Flower.mp3",
        forPart: AllPartType
    },
    {
        title: "Garden Flower",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/3 Dontcry _ Nokiaa - Garden Flower.mp3",
        forPart: AllPartType
    },
    {
        title: "Distant Memory",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/4 Dontcry _ Nokiaa - Distant Memory.mp3",
        forPart: AllPartType
    },
    {
        title: "EthereaL",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/5 Dontcry _ Nokiaa - EthereaL.mp3",
        forPart: AllPartType
    },
    {
        title: "No Words",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/6 Dontcry _ Nokiaa - No Words.mp3",
        forPart: AllPartType
    },
    {
        title: "Light Years Apart",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/7 Dontcry _ Nokiaa - Light Years Apart.mp3",
        forPart: AllPartType
    },
    {
        title: "Grey",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/8 Dontcry _ Nokiaa - Grey.mp3",
        forPart: AllPartType
    },
    {
        title: "Feels Like Home",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/Time in Motion/9 Dontcry _ Nokiaa - Feels Like Home.mp3",
        forPart: AllPartType
    },
    {
        title: "Bluebird",
        artist: "Dontcry x Nokiaa ft. Sleepermane",
        file: "/audio/lofigirl/Time in Motion/10 Dontcry _ Nokiaa - Bluebird (ft. Sleepermane).mp3",
        forPart: AllPartType
    },
    // "Before It's Late",
    {
        title: "Late",
        artist: "Hevi",
        file: "/audio/lofigirl/before it's late/1. Late [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "These Are The Nights",
        artist: "Hevi",
        file: "/audio/lofigirl/before it's late/2. These Are The Nights [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Imaginary",
        artist: "Hevi x Kurt Stewart x S N U G",
        file: "/audio/lofigirl/before it's late/3. Imaginary (feat. Kurt Stewart _ S N U G) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "We Had Better Days",
        artist: "Hevi x softy",
        file: "/audio/lofigirl/before it's late/4. We Had Better Days (feat. Softy) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Lucid",
        artist: "Hevi x Naga",
        file: "/audio/lofigirl/before it's late/5. Lucid (feat. Naga) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Beyond the Dreams",
        artist: "Hevi x Stuffed Tomato",
        file: "/audio/lofigirl/before it's late/6. Beyond the Dreams (feat. Stuffed Tomato) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Finally Breathing",
        artist: "Hevi x Redmatic",
        file: "/audio/lofigirl/before it's late/8. Mind At Ease [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Mind At Ease",
        artist: "Hevi",
        file: "/audio/lofigirl/before it's late/8. Mind At Ease [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Alone",
        artist: "Hevi x INKY!",
        file: "/audio/lofigirl/before it's late/9. Alone (feat. INKY!) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Bedtime",
        artist: "Hevi x probablyasleep",
        file: "/audio/lofigirl/before it's late/10. Bedtime (feat. probablyasleep) mastered.mp3",
        forPart: AllPartType
    },
    {
        title: "Lonely Nights",
        artist: "Hevi x Trxxshed",
        file: "/audio/lofigirl/before it's late/11. Lonely Nights (feat. Trxxshed) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Yesterday",
        artist: "Hevi x Trxxshed",
        file: "/audio/lofigirl/before it's late/12. Yesterday (feat. Trxxshed) [Final].mp3",
        forPart: AllPartType
    },
    {
        title: "Leave This Town",
        artist: "Hevi x tender spring",
        file: "/audio/lofigirl/before it's late/13. Leave This Town (feat. tender spring) [Final].mp3",
        forPart: AllPartType
    },
    // "Traveler",
    {
        title: "Travelers",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/1. Team Astro - Travelers.mp3",
        forPart: AllPartType
    },
    {
        title: "Lucid",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/2. Team Astro - Lucid.mp3",
        forPart: AllPartType
    },
    {
        title: "See You When I See You",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/3. Team Astro - See You When I See You.mp3",
        forPart: AllPartType
    },
    {
        title: "Planet Buddies",
        artist: "Team Astro x cocabona",
        file: "/audio/lofigirl/Traveler/4. Team Astro x cocabona - Planet Buddies.mp3",
        forPart: AllPartType
    },
    {
        title: "Snowflakes",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/5. Team Astro - Snowflakes.mp3",
        forPart: AllPartType
    },
    {
        title: "Beehive",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/6. Team Astro - Beehive.mp3",
        forPart: AllPartType
    },
    {
        title: "Countdown to Zero",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/7. Team Astro - Countdown to Zero.mp3",
        forPart: AllPartType
    },
    {
        title: "Nothingness",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/8. Team Astro - Nothingness.mp3",
        forPart: AllPartType
    },
    {
        title: "Searching...",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/9. Team Astro - Searching....mp3",
        forPart: AllPartType
    },
    {
        title: "Pluto",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/10. Team Astro - Pluto.mp3",
        forPart: AllPartType
    },
    {
        title: "Stop Calling Me Cute",
        artist: "Team Astro",
        file: "/audio/lofigirl/Traveler/11. Team Astro - Stop Calling Me Cute.mp3",
        forPart: AllPartType
    },
    // "Blue Woods",
    {
        title: "Finally Breathing",
        artist: "GlobulDub",
        file: "/audio/lofigirl/Blue Woods/Finally Breathing - GlobulDub.mp3",
        forPart: AllPartType
    },
    {
        title: "Gone Home",
        artist: "GlobulDub",
        file: "/audio/lofigirl/Blue Woods/Gone Home - GlobulDub.mp3",
        forPart: AllPartType
    },
    {
        title: "Night Cat",
        artist: "GlobulDub",
        file: "/audio/lofigirl/Blue Woods/Night Cat - GlobulDub.mp3",
        forPart: AllPartType
    },
    {
        title: "Sail",
        artist: "GlobulDub",
        file: "/audio/lofigirl/Blue Woods/Sail - GlobulDub.mp3",
        forPart: AllPartType
    },
    {
        title: "Sweet Memories",
        artist: "GlobulDub",
        file: "/audio/lofigirl/Blue Woods/Sweet Memories - GlobulDub.mp3",
        forPart: AllPartType
    },
    // "Precious Moments",
    {
        title: "Heading Home",
        artist: "Celestial Alignment ",
        file: "/audio/lofigirl/Precious Moments/01_heading_home.mp3",
        forPart: AllPartType
    },
    {
        title: "Hammock",
        artist: "Celestial Alignment ",
        file: "/audio/lofigirl/Precious Moments/02_hammock.mp3",
        forPart: AllPartType
    },
    {
        title: "The Feeling Is Still There",
        artist: "Celestial Alignment x Mecklin",
        file: "/audio/lofigirl/Precious Moments/03_the_feeling_is_still_there_ft_mecklin.mp3",
        forPart: AllPartType
    },
    {
        title: "Let Me Get You A Glass",
        artist: "Celestial Alignment ",
        file: "/audio/lofigirl/Precious Moments/04_let_me_get_you_a_glass.mp3",
        forPart: AllPartType
    },
    {
        title: "Eaves",
        artist: "Celestial Alignment x Payubeats",
        file: "/audio/lofigirl/Precious Moments/05_eaves_ft_payubeats.mp3",
        forPart: AllPartType
    },
    {
        title: "Precious Moments",
        artist: "Celestial Alignment x Glacier Kid",
        file: "/audio/lofigirl/Precious Moments/06_precious_moments_2nd_version_ft_glacier_kid (1).mp3",
        forPart: AllPartType
    },
    {
        title: "It's All Good",
        artist: "Celestial Alignment ",
        file: "/audio/lofigirl/Precious Moments/07_its_all_good_after_all.mp3",
        forPart: AllPartType
    },
    // "Winter Love",
    {
        title: "Winter Love",
        artist: "Dr. Dundiff",
        file: "/audio/lofigirl/Winter Love/1. Winter Love - Dr. Dundiff (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Snowday",
        artist: "Dr. Dundiff",
        file: "/audio/lofigirl/Winter Love/2. Snowday - Dr. Dundiff (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Through the Woods",
        artist: "Dr. Dundiff x Ian Ewing",
        file: "/audio/lofigirl/Winter Love/3. Through the Woods - Dr. Dundiff ft. Ian Ewing (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Whistiling Winds",
        artist: "Dr. Dundiff",
        file: "/audio/lofigirl/Winter Love/4. Whistling Winds - Dr. Dundiff (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "From My Window",
        artist: "Dr. Dundiff x Cocabona",
        file: "/audio/lofigirl/Winter Love/5. From My Window - Dr. Dundiff ft. Cocabona (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Orange Leaves",
        artist: "Dr. Dundiff",
        file: "/audio/lofigirl/Winter Love/6. Orange Leaves - Dr. Dundiff (Master).mp3",
        forPart: AllPartType
    },
    // "A Bridge Between",
    {
        title: "A Bridge Between",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/1. towerz _ hi jude - a bridge between master.mp3",
        forPart: AllPartType
    },
    {
        title: "Something To Cherish",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/2. towerz _ hi jude - something to cherish master.mp3",
        forPart: AllPartType
    },
    {
        title: "Heartsease",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/3. towerz _ hi jude - heartsease master.mp3",
        forPart: AllPartType
    },
    {
        title: "Willows",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/4. towerz _ hi jude - willows master.mp3",
        forPart: AllPartType
    },
    {
        title: "Familiar Feeling",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/5. towerz _ hi jude - familiar feeling master.mp3",
        forPart: AllPartType
    },
    {
        title: "Lighted Path",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/6. towerz _ hi jude - lighted path master.mp3",
        forPart: AllPartType
    },
    {
        title: "Ripples",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/8. towerz _ hi jude - abundance master.mp3",
        forPart: AllPartType
    },
    {
        title: "Abundance",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/8. towerz _ hi jude - abundance master.mp3",
        forPart: AllPartType
    },
    {
        title: "Empty Spaces",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/9. towerz _ hi jude - empty spaces master.mp3",
        forPart: AllPartType
    },
    {
        title: "Choices",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/10. towerz _ hi jude - choices master.mp3",
        forPart: AllPartType
    },
    {
        title: "Seeking Peace",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/11. towerz _ hi jude - seeking peace master.mp3",
        forPart: AllPartType
    },
    {
        title: "Arrowhead",
        artist: "Towerz x hi jude",
        file: "/audio/lofigirl/A bridge Between/12. towerz _ hi jude - arrowhead master.mp3",
        forPart: AllPartType
    },
    // "Land of Calm",
    {
        title: "Rent a Van",
        artist: "Tom Doolie",
        file: "/audio/lofigirl/Land of Calm/1 - Tom Doolie - Rent a Van.mp3",
        forPart: AllPartType
    },
    {
        title: "Awake",
        artist: "Tom Doolie",
        file: "/audio/lofigirl/Land of Calm/2 - Tom Doolie - Awake.mp3",
        forPart: AllPartType
    },
    {
        title: "Mavericks",
        artist: "Tom Doolie ft. Hya x Rich Jacques",
        file: "/audio/lofigirl/Land of Calm/3 - Tom Doolie - Mavericks (feat. HYA _ Rich Jacques).mp3",
        forPart: AllPartType
    },
    {
        title: "Into you",
        artist: "Tom Doolie",
        file: "/audio/lofigirl/Land of Calm/4 - Tom Doolie - into you.mp3",
        forPart: AllPartType
    },
    {
        title: "Rehab",
        artist: "Tom Doolie",
        file: "/audio/lofigirl/Land of Calm/5 - Tom Doolie - Rehab.mp3",
        forPart: AllPartType
    },
    {
        title: "Sincere",
        artist: "Tom Doolie x DAO",
        file: "/audio/lofigirl/Land of Calm/6 - Tom Doolie - Sincere (ft. DAO).mp3",
        forPart: AllPartType
    },
    // "Relatives",
    {
        title: "Playgrounds",
        artist: "Phlocalyst  ft. mell-ø x Akīn",
        file: "/audio/lofigirl/Relatives/1 Phlocalyst _ mell-ø _ Akīn - Playgrounds.mp3",
        forPart: AllPartType
    },
    {
        title: "Homage",
        artist: "Phlocalyst ft. Sátyr x Akīn",
        file: "/audio/lofigirl/Relatives/2 Phlocalyst _ Sátyr _ Akīn - Homage.mp3",
        forPart: AllPartType
    },
    {
        title: "Bamboo",
        artist: "Phlocalyst ft. Elior x Living Room",
        file: "/audio/lofigirl/Relatives/3 Phlocalyst _ Elior _ Living Room - Bamboo.mp3",
        forPart: AllPartType
    },
    {
        title: "Beautiful Morning",
        artist: "Phlocalyst ft. Living Room x Akīn",
        file: "/audio/lofigirl/Relatives/4 Phlocalyst _ Living Room _ Akīn - Beautiful Morning.mp3",
        forPart: AllPartType
    },
    {
        title: "Old Friend",
        artist: "Phlocalyst ft. Living Room x Akīn",
        file: "/audio/lofigirl/Relatives/5 Phlocalyst _ Living Room _ Akīn - Old Friend.mp3",
        forPart: AllPartType
    },
    // "Midnight Gazing",
    {
        title: "Hidden In Dusk",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/1. Hidden In Dusk 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Elusive",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/2. Elusive 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Star Sailing",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/3. Star Sailing 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Note",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/4. Blue Note 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Evening Porch",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/5. Evening Porch 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Gilding",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/6. Gliding 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Forrest Lullaby",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/7. Forrest Lullaby 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Dragons Dreams",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/9. Goyo 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Goyo",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/9. Goyo 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Homebound",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/10. Homebound 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Late Night Magic",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/11. Late Night Magic .mp3",
        forPart: AllPartType
    },
    {
        title: "On The Way Home",
        artist: "Mondo Loops x Softy",
        file: "/audio/lofigirl/Midnight Gazing/12. On The Way Home.mp3",
        forPart: AllPartType
    },
    // "Nightfall",
    {
        title: "NightFall",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/1. nightfall.mp3",
        forPart: AllPartType
    },
    {
        title: "Frost",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/2. frost.mp3",
        forPart: AllPartType
    },
    {
        title: "Alaska",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/3. alaska.mp3",
        forPart: AllPartType
    },
    {
        title: "Afloat",
        artist: "S N U G x Nuver ft. Project AER",
        file: "/audio/lofigirl/Nightfall/4. afloat ft. Project Aer.mp3",
        forPart: AllPartType
    },
    {
        title: "Lighthouse",
        artist: "S N U G x Nuver ft. Sitting Duck",
        file: "/audio/lofigirl/Nightfall/5. lighthouse ft. Sitting Duck.mp3",
        forPart: AllPartType
    },
    {
        title: "After Dark",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/6. after dark.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonscapes",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/7. moonscapes.mp3",
        forPart: AllPartType
    },
    {
        title: "Horizons",
        artist: "S N U G x Nuver ft. Mondo Loops",
        file: "/audio/lofigirl/Nightfall/8. horizons ft. Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "Paths",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/9. paths.mp3",
        forPart: AllPartType
    },
    {
        title: "Dazed",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/10.dazed.mp3",
        forPart: AllPartType
    },
    {
        title: "Nova",
        artist: "S N U G x Nuver ft. Jordy Chandra",
        file: "/audio/lofigirl/Nightfall/11. nova ft. Jordy Chandra.mp3",
        forPart: AllPartType
    },
    {
        title: "It's Getting Late",
        artist: "S N U G x Nuver",
        file: "/audio/lofigirl/Nightfall/12. it_s getting late.mp3",
        forPart: AllPartType
    },
    // "Hourglass",
    {
        title: "Hourglass",
        artist: "Thaehan",
        file: "/audio/lofigirl/Hourglass/01 Hourglass (master) 2.mp3",
        forPart: AllPartType
    },
    {
        title: "No Regrets",
        artist: "Thaehan",
        file: "/audio/lofigirl/Hourglass/02 No Regrets (master) 2.mp3",
        forPart: AllPartType
    },
    {
        title: "One Last Time",
        artist: "Thaehan",
        file: "/audio/lofigirl/Hourglass/03 One Last Time (master) 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Grains of Sand",
        artist: "Thaehan",
        file: "/audio/lofigirl/Hourglass/04 Grains of Sand (master) 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Ephemeral",
        artist: "Thaehan",
        file: "/audio/lofigirl/Hourglass/05 Ephemeral (master) 2.mp3",
        forPart: AllPartType
    },
    // "Falling dreams",
    {
        title: "a lonely star",
        artist: "jhove",
        file: "/audio/lofigirl/Falling Dreams/1. jhove - a lonely star.mp3",
        forPart: AllPartType
    },
    {
        title: "before i met you",
        artist: "jhove x elijah lee",
        file: "/audio/lofigirl/Falling Dreams/2. jhove - before i met you ft elijah lee.mp3",
        forPart: AllPartType
    },
    {
        title: "beyond the stars",
        artist: "jhove x tysu",
        file: "/audio/lofigirl/Falling Dreams/3. jhove - beyond the stars ft tysu.mp3",
        forPart: AllPartType
    },
    {
        title: "closes eyes",
        artist: "jhove x hm surf",
        file: "/audio/lofigirl/Falling Dreams/4. jhove - closed eyes ft hm surf.mp3",
        forPart: AllPartType
    },
    {
        title: "times flies",
        artist: "jhove",
        file: "/audio/lofigirl/Falling Dreams/5. jhove - time flies.mp3",
        forPart: AllPartType
    },
    {
        title: "in the morning",
        artist: "jhove",
        file: "/audio/lofigirl/Falling Dreams/6. jhove - in the morning.mp3",
        forPart: AllPartType
    },
    {
        title: "i know, goodbye",
        artist: "jhove x amess",
        file: "/audio/lofigirl/Falling Dreams/7. jhove - i know, goodbye ft amess.mp3",
        forPart: AllPartType
    },
    // "Evermore",
    {
        title: "True Love",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/01 - True Love.mp3",
        forPart: AllPartType
    },
    {
        title: "Mourning Dove",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/02 - Mourning Dove.mp3",
        forPart: AllPartType
    },
    {
        title: "Practiced Compassion",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/03 - Practiced Compassion.mp3",
        forPart: AllPartType
    },
    {
        title: "Aftermath",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/04 - Aftermath.mp3",
        forPart: AllPartType
    },
    {
        title: "Arizona Zero",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/05 - Arizona Zero.mp3",
        forPart: AllPartType
    },
    {
        title: "Down the Line",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/06 - Down the Line.mp3",
        forPart: AllPartType
    },
    {
        title: "Washed Out",
        artist: "WYS x Sweet Medicine",
        file: "/audio/lofigirl/Evermore/07 - Washed Out.mp3",
        forPart: AllPartType
    },
    // "Feelings",
    {
        title: "Inner Peace",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/1 Bcalm - Banks - Inner Peace (New Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Firelight",
        artist: "Bcalm x Banks ft. Purrple Cat",
        file: "/audio/lofigirl/Feelings/2 Firelight (ft Purrple Cat).mp3",
        forPart: AllPartType
    },
    {
        title: "Comfort",
        artist: "Bcalm x Banks ft. Fletcher Reed",
        file: "/audio/lofigirl/Feelings/3 - Comfort (ft Fletcher Reed).mp3",
        forPart: AllPartType
    },
    {
        title: "Sleep Patterns",
        artist: "Bcalm x Banks ft. Sleep Patterns",
        file: "/audio/lofigirl/Feelings/4 - Sleep Patterns (ft Sleep Patterns).mp3",
        forPart: AllPartType
    },
    {
        title: "Crystalize",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/5 - Crystalize ft Casiio.mp3",
        forPart: AllPartType
    },
    {
        title: "Winter Sun",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/6 - Winter Sun.mp3",
        forPart: AllPartType
    },
    {
        title: "Because",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/7 - Because.mp3",
        forPart: AllPartType
    },
    {
        title: "Toughts",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/8 - Thoughts.mp3",
        forPart: AllPartType
    },
    {
        title: "I'll Remember u",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/9 - I_ll Remember u.mp3",
        forPart: AllPartType
    },
    {
        title: "Mary",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/Feelings/10 - Mary ft Purrple Cat.mp3",
        forPart: AllPartType
    },
    // "Growth Patterns",
    {
        title: "Growth",
        artist: "Project AER",
        file: "/audio/lofigirl/Growth Pattern/01 Growth_MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "A Better Place",
        artist: "Project AER x cxlt",
        file: "/audio/lofigirl/Growth Pattern/02 A Better Place w cxlt_MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Brighter  Days",
        artist: "Project AER x Refeeld",
        file: "/audio/lofigirl/Growth Pattern/03 Brighter Days w Refeeld_MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Likelife",
        artist: "Project AER",
        file: "/audio/lofigirl/Growth Pattern/Project AER - Likelife_MASTER v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Mind Over Matter",
        artist: "Project AER x Fletcher Reed",
        file: "/audio/lofigirl/Growth Pattern/07 Mind Over Matter w Fletcher Reed_MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Open Eyes",
        artist: "Project AER x WYS",
        file: "/audio/lofigirl/Growth Pattern/12 Open Eyes w WYS_MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Downtime",
        artist: "Project AER",
        file: "/audio/lofigirl/Growth Pattern/14 Downtime_MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "The Finality of it All",
        artist: "Project AER x Colours in Context",
        file: "/audio/lofigirl/Growth Pattern/15 The Finality of It All w Colours in Context_MASTER.mp3",
        forPart: AllPartType
    },
    // "Polar",
    {
        title: "Noctilucent",
        artist: "Ambulo x Squeeda",
        file: "/audio/lofigirl/Polar/1.Ambulo_x_Squeeda-Noctilucent.mp3",
        forPart: AllPartType
    },
    {
        title: "Polar",
        artist: "Ambulo",
        file: "/audio/lofigirl/Polar/2.Ambulo-Polar.mp3",
        forPart: AllPartType
    },
    {
        title: "Sun dog",
        artist: "Ambulo x Squeeda",
        file: "/audio/lofigirl/Polar/3.Ambulo_x_squeeda-Sun dog.mp3",
        forPart: AllPartType
    },
    {
        title: "Resilience",
        artist: "Ambulo x mell-o",
        file: "/audio/lofigirl/Polar/4.Ambulo_x_mell-o-Resilience.mp3",
        forPart: AllPartType
    },
    {
        title: "Child",
        artist: "Ambulo",
        file: "/audio/lofigirl/Polar/5.Ambulo-Child.mp3",
        forPart: AllPartType
    },
    {
        title: "Pleasant",
        artist: "Ambulo x Kasper",
        file: "/audio/lofigirl/Polar/6.Ambulo_x_Kasper_lindmark-Pleasant.mp3",
        forPart: AllPartType
    },
    {
        title: "Intentions",
        artist: "Ambulo x Kasper",
        file: "/audio/lofigirl/Polar/7.Ambulo_x_Kasper_Lindmark-Intentions.mp3",
        forPart: AllPartType
    },
    // "Tender Memories",
    {
        title: "Reassuring Skies",
        artist: "Lenny Loops x Hoffy Beats",
        file: "/audio/lofigirl/Tender Memories/01 - Reassuring Skies.mp3",
        forPart: AllPartType
    },
    {
        title: "Tender Memories",
        artist: "Lenny Loops x Hoffy Beats",
        file: "/audio/lofigirl/Tender Memories/02 - Tender Memories.mp3",
        forPart: AllPartType
    },
    {
        title: "Daydreaming",
        artist: "Lenny Loops x Hoffy Beats",
        file: "/audio/lofigirl/Tender Memories/03 - Daydreaming.mp3",
        forPart: AllPartType
    },
    {
        title: "Lost in Thought",
        artist: "Lenny Loops x Hoffy Beats",
        file: "/audio/lofigirl/Tender Memories/04 - Lost in Thought.mp3",
        forPart: AllPartType
    },
    {
        title: "Almost Asleep",
        artist: "Lenny Loops x Hoffy Beats",
        file: "/audio/lofigirl/Tender Memories/05 - Almost Asleep.mp3",
        forPart: AllPartType
    },
    {
        title: "Caring",
        artist: "Lenny Loops x Hoffy Beats",
        file: "/audio/lofigirl/Tender Memories/06 - Caring.mp3",
        forPart: AllPartType
    },
    // "Last Light",
    {
        title: "Hidden Clouds",
        artist: "TABAL",
        file: "/audio/lofigirl/Last Light/1. TABAL - Hidden Clouds.mp3",
        forPart: AllPartType
    },
    {
        title: "A Childish Day",
        artist: "TABAL",
        file: "/audio/lofigirl/Last Light/2. TABAL - A Childish Day.mp3",
        forPart: AllPartType
    },
    {
        title: "Last Light",
        artist: "TABAL",
        file: "/audio/lofigirl/Last Light/3. TABAL - Last Light.mp3",
        forPart: AllPartType
    },
    {
        title: "The Other Way",
        artist: "TABAL",
        file: "/audio/lofigirl/Last Light/4. TABAL - The Other Way.mp3",
        forPart: AllPartType
    },
    {
        title: "Fireflies",
        artist: "TABAL x  DLJ",
        file: "/audio/lofigirl/Last Light/5. TABAL x DLJ - Fireflies.mp3",
        forPart: AllPartType
    },
    {
        title: "Finally Home",
        artist: "TABAL",
        file: "/audio/lofigirl/Last Light/6. TABAL - Finally Home.mp3",
        forPart: AllPartType
    },
    // "Motions",
    {
        title: "Wander",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/Motions/1. Wander (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Ember",
        artist: "Tibeauthetraveler x Eleven",
        file: "/audio/lofigirl/Motions/2. Ember ft. Eleven (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Northern Lights",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/Motions/3. Northern Lights (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Motions",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/Motions/4. Motions (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Water Circles",
        artist: "Tibeauthetraveler x Hoogway",
        file: "/audio/lofigirl/Motions/5. Water Circles ft. Hoogway (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Starry Night",
        artist: "Tibeauthetraveler  x Just Steezy Things",
        file: "/audio/lofigirl/Motions/6. Starry Night ft Just Steezy Things (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Out of Breath",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/Motions/7. Out of Breath (master).mp3",
        forPart: AllPartType
    },
    // "Before Sunrise",
    {
        title: "Fig Trees",
        artist: "Dillan Witherow x Wednesday",
        file: "/audio/lofigirl/Before Sunrise/1. Fig Trees ft. Blue Wednesday - Master 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Rose Bay",
        artist: "Dillan Witherow x Santpoort",
        file: "/audio/lofigirl/Before Sunrise/2. Rose Bay ft. Santpoort - Master 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Before Sunrise",
        artist: "Dillan Witherow x tender spring x azula",
        file: "/audio/lofigirl/Before Sunrise/3. Before Sunrise ft. tender spring and azula - Master 2.mp3",
        forPart: AllPartType
    },
    {
        title: "twopointeight",
        artist: "Dillan Witherow x Blurred Figures",
        file: "/audio/lofigirl/Before Sunrise/4. twopointeight ft. Blurred Figures - Master 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Inside Out",
        artist: "Dillan Witherow Blue Wednesday",
        file: "/audio/lofigirl/Before Sunrise/5. Inside Out ft. Blue Wednesday - Master 3.mp3",
        forPart: AllPartType
    },
    {
        title: "Field of Stars",
        artist: "Dillan Witherow x Sitting Duck x No Spirit",
        file: "/audio/lofigirl/Before Sunrise/6. Field of Stars ft. Sitting Duck and No Spirit - Master 6.mp3",
        forPart: AllPartType
    },
    {
        title: "Superlunary",
        artist: "Dillan Witherow x G Mills",
        file: "/audio/lofigirl/Before Sunrise/7. Superlunary ft. G Mills - Master 3.mp3",
        forPart: AllPartType
    },
    {
        title: "To You, From Me",
        artist: "Dillan Witherow x tender spring",
        file: "/audio/lofigirl/Before Sunrise/8. To You, From Me ft. tender spring - Master 4.mp3",
        forPart: AllPartType
    },
    {
        title: "Hiding In a Flower",
        artist: "Dillan Witherow x No Spirit",
        file: "/audio/lofigirl/Before Sunrise/9. Hiding In a Flower ft. No Spirit - Master 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Opposite Ends",
        artist: "Dillan Witherow x WYS x azula",
        file: "/audio/lofigirl/Before Sunrise/10. Opposite Ends Ft. WYS _ azula - Master 5.mp3",
        forPart: AllPartType
    },
    {
        title: "First Snow",
        artist: "Dillan Witherow x Sitting Duck",
        file: "/audio/lofigirl/Before Sunrise/11. First Snow ft. Sitting Duck - Master 2.mp3",
        forPart: AllPartType
    },
    // "After Hours",
    {
        title: "Long Walk Short Dock",
        artist: "Blue Wednesday x Dillan Witherow",
        file: "/audio/lofigirl/After Hours/01 Long Walk, Short Dock (ft Dillan Witherow).mp3",
        forPart: AllPartType
    },
    {
        title: "Dots",
        artist: "Blue Wednesday",
        file: "/audio/lofigirl/After Hours/02 Dots.mp3",
        forPart: AllPartType
    },
    {
        title: "Wildflower",
        artist: "Blue Wednesday",
        file: "/audio/lofigirl/After Hours/03 Wildflower v2.mp3",
        forPart: AllPartType
    },
    {
        title: "Attic",
        artist: "Blue Wednesday x INKY!",
        file: "/audio/lofigirl/After Hours/04 Attic (feat. INKY!) v2.mp3",
        forPart: AllPartType
    },
    {
        title: "I See You In Slow Motion",
        artist: "Blue Wednesday",
        file: "/audio/lofigirl/After Hours/05 I See You In Slow Motion v2.mp3",
        forPart: AllPartType
    },
    // "Homeland",
    {
        title: "Farewell",
        artist: "L'Outlander",
        file: "/audio/lofigirl/Homeland/1.Farewell.mp3",
        forPart: AllPartType
    },
    {
        title: "Speculations",
        artist: "L'Outlander",
        file: "/audio/lofigirl/Homeland/2.Speculations.mp3",
        forPart: AllPartType
    },
    {
        title: "Past Things",
        artist: "L'Outlander x Mondo Loops",
        file: "/audio/lofigirl/Homeland/3.Past Things ft. Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "Looking For Answers",
        artist: "L'Outlander",
        file: "/audio/lofigirl/Homeland/4.Looking For Answers.mp3",
        forPart: AllPartType
    },
    {
        title: "Higher Calling",
        artist: "L'Outlander",
        file: "/audio/lofigirl/Homeland/5.Higher Calling.mp3",
        forPart: AllPartType
    },
    {
        title: "Homeland",
        artist: "L'Outlander",
        file: "/audio/lofigirl/Homeland/6.Homeland.mp3",
        forPart: AllPartType
    },
    // "A Day At A Time",
    {
        title: "A Day At A Time",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/1 Laffey - A Day At A Time (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Infinite",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/2 Laffey - Infinite (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "In This Moment",
        artist: "Laffey x Softy",
        file: "/audio/lofigirl/A Day at a time/3 Laffey - In This Moment ft. Softy (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "New Beginnings",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/4 Laffey - New Beginnings (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "Acceptance",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/5 Laffey - Acceptance (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "Together",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/6 Laffey - Together (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "Exhale",
        artist: "Laffey x Dilan Witherow",
        file: "/audio/lofigirl/A Day at a time/7 Laffey - Exhale ft. Dillan Witherow (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "Auburn",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/8 Laffey - Auburn (Master V2).mp3",
        forPart: AllPartType
    },
    {
        title: "Compassion",
        artist: "Laffey x  Softy",
        file: "/audio/lofigirl/A Day at a time/9 Laffey - Compassion ft. Softy (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "Comfort",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/10 Laffey - Comfort (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "The Journey",
        artist: "Laffey x Sunlight Jr.",
        file: "/audio/lofigirl/A Day at a time/11 Laffey - The Journey ft. Sunlight Jr. (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "A New Path",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/12 Laffey - A New Path (Master V1).mp3",
        forPart: AllPartType
    },
    {
        title: "Healing",
        artist: "Laffey",
        file: "/audio/lofigirl/A Day at a time/13 Laffey - Healing (Master V2).mp3",
        forPart: AllPartType
    },
    // "Distant Images",
    {
        title: "Slow Ride",
        artist: "Softy x Kaspa",
        file: "/audio/lofigirl/Distant Images/1. Slow Ride (w. Kaspa) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Hideaway",
        artist: "Softy x Mondo Loops",
        file: "/audio/lofigirl/Distant Images/2. Hideaway (w. mondo loops) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Evergreen",
        artist: "Softy x Lucid Green",
        file: "/audio/lofigirl/Distant Images/3. Evergreen (w. lucid green) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Lining",
        artist: "Softy x Mondo Loops",
        file: "/audio/lofigirl/Distant Images/4. Blue Lining (w. mondo loops) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Glimpses",
        artist: "Softy x Lucid Green",
        file: "/audio/lofigirl/Distant Images/5. Glimpses (w. lucid green) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Solstice",
        artist: "Softy x Pointy Features",
        file: "/audio/lofigirl/Distant Images/6. Solstice (w. Pointy Features) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Inside All Day",
        artist: "Softy x Hoogway",
        file: "/audio/lofigirl/Distant Images/7. Inside All Day (w. hoogway) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Homesick",
        artist: "Softy",
        file: "/audio/lofigirl/Distant Images/8. Homesick (1).mp3",
        forPart: AllPartType
    },
    {
        title: "After All",
        artist: "Softy x Hoogway",
        file: "/audio/lofigirl/Distant Images/9. After all (w. hoogway) .mp3",
        forPart: AllPartType
    },
    {
        title: "Contrasts",
        artist: "Softy x Kaspa",
        file: "/audio/lofigirl/Distant Images/10. Contrasts (w. kaspa) .mp3",
        forPart: AllPartType
    },
    {
        title: "Sundown",
        artist: "Softy x Celestial Alignment",
        file: "/audio/lofigirl/Distant Images/11. Sundown (w. Celestial Alignment) .mp3",
        forPart: AllPartType
    },
    {
        title: "Close To",
        artist: "Softy x Refeeld",
        file: "/audio/lofigirl/Distant Images/12. Close To (w. Refeeld) .mp3",
        forPart: AllPartType
    },
    // "Retro Colors",
    {
        title: "Ivory",
        artist: "Trxxshed x Jhove",
        file: "/audio/lofigirl/Retro Colors/01 - Ivory (ft. jhove).mp3",
        forPart: AllPartType
    },
    {
        title: "Synesthesia",
        artist: "Trxxshed x Clangon",
        file: "/audio/lofigirl/Retro Colors/02 - Synesthesia (ft. clangon).mp3",
        forPart: AllPartType
    },
    {
        title: "Lost In Between",
        artist: "Trxxshed",
        file: "/audio/lofigirl/Retro Colors/03 - Lost In Between.mp3",
        forPart: AllPartType
    },
    {
        title: "Magnitude",
        artist: "Trxxshed x j'san",
        file: "/audio/lofigirl/Retro Colors/04 - Magnitude (ft. j_san).mp3",
        forPart: AllPartType
    },
    {
        title: "Passing Time",
        artist: "Trxxshed x fourwalls",
        file: "/audio/lofigirl/Retro Colors/05 - Passing Time (ft. fourwalls).mp3",
        forPart: AllPartType
    },
    {
        title: "Reminiscence",
        artist: "Trxxshed",
        file: "/audio/lofigirl/Retro Colors/06 - Reminiscence.mp3",
        forPart: AllPartType
    },
    {
        title: "Altitude",
        artist: "Trxxshed x Lomtre",
        file: "/audio/lofigirl/Retro Colors/07 - Altitude (ft. lomtre).mp3",
        forPart: AllPartType
    },
    {
        title: "Saturated",
        artist: "Trxxshed",
        file: "/audio/lofigirl/Retro Colors/08 - Saturated.mp3",
        forPart: AllPartType
    },
    {
        title: "Early Days",
        artist: "Trxxshed x cxlt.",
        file: "/audio/lofigirl/Retro Colors/09 - Early Days (ft. cxlt.).mp3",
        forPart: AllPartType
    },
    {
        title: "Dysomnia",
        artist: "Trxxshed x Creative Self",
        file: "/audio/lofigirl/Retro Colors/10 - Dysomnia (ft. creative self).mp3",
        forPart: AllPartType
    },
    {
        title: "Obscure Sorrows",
        artist: "Trxxshed",
        file: "/audio/lofigirl/Retro Colors/11 - Obscure Sorrows.mp3",
        forPart: AllPartType
    },
    // "Rituals",
    {
        title: "Rituals",
        artist: "Living Room x M e a d o w",
        file: "/audio/lofigirl/Rituals/1. Living Room x M e a d o w - Rituals.mp3",
        forPart: AllPartType
    },
    {
        title: "Buddha",
        artist: "Living Room x Phlocalyst",
        file: "/audio/lofigirl/Rituals/2. Living Room x Phlocalyst - Buddha.mp3",
        forPart: AllPartType
    },
    {
        title: "Kyoto Sunrise",
        artist: "Living Room x Mondo Loops",
        file: "/audio/lofigirl/Rituals/3. Living Room x Mondo Loops - Kyoto Sunrise.mp3",
        forPart: AllPartType
    },
    {
        title: "Circle Of Truste",
        artist: "Living Room x Akīn",
        file: "/audio/lofigirl/Rituals/4. Living Room x Akīn - Circle of Trust.mp3",
        forPart: AllPartType
    },
    {
        title: "Consciousness",
        artist: "Living Room x ",
        file: "/audio/lofigirl/Rituals/5. Living Room - Consciousness.mp3",
        forPart: AllPartType
    },
    {
        title: "Sublime",
        artist: "Living Room x Otaam",
        file: "/audio/lofigirl/Rituals/6. Living Room x Otaam - Sublime.mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Hour",
        artist: "Living Room x Phlocalyst",
        file: "/audio/lofigirl/Rituals/7. Living Room x Phlocalyst - Blue Hour.mp3",
        forPart: AllPartType
    },
    {
        title: "Sleepmodee",
        artist: "Living Room x Rudy Raw",
        file: "/audio/lofigirl/Rituals/8. Living Room x Rudy Raw - Sleepmodee.mp3",
        forPart: AllPartType
    },
    // "Wonderland Chapter II",
    {
        title: "Chasing Dreams",
        artist: "Sitting Duck x Khukto",
        file: "/audio/lofigirl/Wonderland Chapter II/Beau Diako _ Sitting Duck - Chasing Dreams 1 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Save Tonight",
        artist: "Sitting Duck x Khukto",
        file: "/audio/lofigirl/Wonderland Chapter II/Beau Diako _ Sitting Duck - save tonight 2 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Sweet Honey",
        artist: "Sitting Duck x Mondo Loops",
        file: "/audio/lofigirl/Wonderland Chapter II/Mondo Loops _ Sitting Duck - sweet honey 1 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Hope",
        artist: "Sitting Duck x Mondo Loops",
        file: "/audio/lofigirl/Wonderland Chapter II/Mondo Loops _ Sitting Duck - hope 1 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Lessons We Learned",
        artist: "Sitting Duck x No Spirit",
        file: "/audio/lofigirl/Wonderland Chapter II/No Spirirt _ Sitting Duck - lessons we learned 2 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Reflection",
        artist: "Sitting Duck x Cloud Break",
        file: "/audio/lofigirl/Wonderland Chapter II/Cloud Break _ Sitting Duck - Reflection 2 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Changes",
        artist: "Sitting Duck x Nuver",
        file: "/audio/lofigirl/Wonderland Chapter II/Nuver _ Sitting Duck - Changes 1 1.mp3",
        forPart: AllPartType
    },
    {
        title: "Faded",
        artist: "Sitting Duck x Sinnr",
        file: "/audio/lofigirl/Wonderland Chapter II/Sinnr _ Sitting Duck - faded 3 1.mp3",
        forPart: AllPartType
    },
    // "Wilderness",
    {
        title: "dim the lights",
        artist: "Nvmb x Lona Moor",
        file: "/audio/lofigirl/Wilderness/1_dim_the_lights.mp3",
        forPart: AllPartType
    },
    {
        title: "wilderness",
        artist: "Nvmb",
        file: "/audio/lofigirl/Wilderness/2_wilderness.mp3",
        forPart: AllPartType
    },
    {
        title: "intimate",
        artist: "Nvmb",
        file: "/audio/lofigirl/Wilderness/3_intimate.mp3",
        forPart: AllPartType
    },
    {
        title: "your colors",
        artist: "Nvmb",
        file: "/audio/lofigirl/Wilderness/4_your_colors.mp3",
        forPart: AllPartType
    },
    {
        title: "lakeside",
        artist: "Nvmb",
        file: "/audio/lofigirl/Wilderness/5_lakeside.mp3",
        forPart: AllPartType
    },
    {
        title: "funny place",
        artist: "Nvmb",
        file: "/audio/lofigirl/Wilderness/6_funny_place.mp3",
        forPart: AllPartType
    },
    {
        title: "campfire",
        artist: "Nvmb",
        file: "/audio/lofigirl/Wilderness/7_campfire.mp3",
        forPart: AllPartType
    },
    {
        title: "inaudible",
        artist: "Nvmb x Tom Doolie",
        file: "/audio/lofigirl/Wilderness/8_inaudible.mp3",
        forPart: AllPartType
    },
    // "Shine On",
    {
        title: "Coral Caves",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/8. Coral Caves.mp3",
        forPart: AllPartType
    },
    {
        title: "Nightcall",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/2. Nightcall.mp3",
        forPart: AllPartType
    },
    {
        title: "Dozy",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/4. Dozy.mp3",
        forPart: AllPartType
    },
    {
        title: "Kindred Spirits",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/3. Kindred Spirits.mp3",
        forPart: AllPartType
    },
    {
        title: "Low Tide",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/9. Low Tide.mp3",
        forPart: AllPartType
    },
    {
        title: "Moon Base",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/6. Moon Base.mp3",
        forPart: AllPartType
    },
    {
        title: "Five Years",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/Five Years.mp3",
        forPart: AllPartType
    },
    {
        title: "Seven Seas",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/Seven Seas.mp3",
        forPart: AllPartType
    },
    {
        title: "Afloat",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/7. Afloat.mp3",
        forPart: AllPartType
    },
    {
        title: "Red Alley",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/5. Red Alley.mp3",
        forPart: AllPartType
    },
    {
        title: "Lights Low",
        artist: "Pointy features x Kanisan x softy",
        file: "/audio/lofigirl/Shine On/1. Lights Low.mp3",
        forPart: AllPartType
    },
    // "Oblivion",
    {
        title: "Destination Unknown",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/01 amies - Destination Unknown.mp3",
        forPart: AllPartType
    },
    {
        title: "Levitate",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/Oblivion/02 amies _ cxlt. - Levitate.mp3",
        forPart: AllPartType
    },
    {
        title: "Leave The World Behind",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/03 amies - Leave The World Behind.mp3",
        forPart: AllPartType
    },
    {
        title: "Follow Me",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/04 amies - Follow Me.mp3",
        forPart: AllPartType
    },
    {
        title: "Lost In Time",
        artist: "amies x softy",
        file: "/audio/lofigirl/Oblivion/05 amies _ softy - Lost In Space.mp3",
        forPart: AllPartType
    },
    {
        title: "Arriving",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/06 amies - Arriving.mp3",
        forPart: AllPartType
    },
    {
        title: "Memory Lane",
        artist: "amies x midnight alpha",
        file: "/audio/lofigirl/Oblivion/07 amies _ midnight alpha. - Memory Lane.mp3",
        forPart: AllPartType
    },
    {
        title: "Dimensions",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/08 amies - Dimensions.mp3",
        forPart: AllPartType
    },
    {
        title: "Silenced",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/09 amies - Silenced.mp3",
        forPart: AllPartType
    },
    {
        title: "New Beginning",
        artist: "amies",
        file: "/audio/lofigirl/Oblivion/10 amies - New Beginning.mp3",
        forPart: AllPartType
    },
    // "Can We Talk",
    {
        title: "Call You Soon",
        artist: "Glimlip x Louk",
        file: "/audio/lofigirl/Can We Talk/1. Glimlip x Louk - Call You Soon.mp3",
        forPart: AllPartType
    },
    {
        title: "How Have You Been",
        artist: "Glimlip x Louk",
        file: "/audio/lofigirl/Can We Talk/2. Glimlip x Louk - How Have You Been.mp3",
        forPart: AllPartType
    },
    {
        title: "Your Words Not Mine",
        artist: "Glimlip x Louk",
        file: "/audio/lofigirl/Can We Talk/3. Glimlip x Louk - Your Words Not Mine.mp3",
        forPart: AllPartType
    },
    {
        title: "I'll Meet You At The Station",
        artist: "Glimlip x Louk",
        file: "/audio/lofigirl/Can We Talk/4. Glimlip x Louk - I_ll Meet You At The Station.mp3",
        forPart: AllPartType
    },
    {
        title: "Seeing You Is Like",
        artist: "Glimlip x Louk",
        file: "/audio/lofigirl/Can We Talk/5. Glimlip x Louk - Seeing You Is Like.mp3",
        forPart: AllPartType
    },
    // "Sons of the Dew",
    {
        title: "We Met in the Forest",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/1 Raimu - We Met in the Forest.mp3",
        forPart: AllPartType
    },
    {
        title: "Wisteria Arbour",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/2 Raimu - Wisteria Arbour.mp3",
        forPart: AllPartType
    },
    {
        title: "Samurai's Dream",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/3 Raimu - Samurai_s Dream.mp3",
        forPart: AllPartType
    },
    {
        title: "Nagano, 5 Am",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/4 Raimu - Nagano, 5 Am.mp3",
        forPart: AllPartType
    },
    {
        title: "Kosame",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/5 Raimu - Kosame.mp3",
        forPart: AllPartType
    },
    {
        title: "Love Under The Roof",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/6 Raimu - Love Under the Roof.mp3",
        forPart: AllPartType
    },
    {
        title: "Overgrown",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/7 Raimu - Overgrown.mp3",
        forPart: AllPartType
    },
    {
        title: "Kami's Gift",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/8 Raimu - Kami_s Gift.mp3",
        forPart: AllPartType
    },
    {
        title: "Botanicals",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/9 Raimu - Botanicals.mp3",
        forPart: AllPartType
    },
    {
        title: "Despite the Pain",
        artist: "Raimu",
        file: "/audio/lofigirl/Sons of the Dew/10 Raimu - Despite the Pain.mp3",
        forPart: AllPartType
    },
    // "Melody Mountain",
    {
        title: "Lavender",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/01 Kupla - Lavender.mp3",
        forPart: AllPartType
    },
    {
        title: "Orion",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/02 Kupla - Orion (Final Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Memory of You",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/03 Kupla - Memory of You.mp3",
        forPart: AllPartType
    },
    {
        title: "Tender Souls",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/04 Kupla - Tender Souls.mp3",
        forPart: AllPartType
    },
    {
        title: "Under the Bridge",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/05 Kupla - Under The Bridge.mp3",
        forPart: AllPartType
    },
    {
        title: "Valley of Hope",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/06 Kupla - Valley of Hope (final master).mp3",
        forPart: AllPartType
    },
    {
        title: "Melody Mountain",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/07 Kupla - Melody Mountain.mp3",
        forPart: AllPartType
    },
    {
        title: "Castles in the Snow",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/08 Kupla - Castles In The Snow.mp3",
        forPart: AllPartType
    },
    {
        title: "Fairies",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/09 Kupla - Fairies.mp3",
        forPart: AllPartType
    },
    {
        title: "Orchid",
        artist: "Kupla",
        file: "/audio/lofigirl/Melody Mountain/10 Kupla - Orchid.mp3",
        forPart: AllPartType
    },
    // "Cloud Studies",
    {
        title: "Almost Dreaming",
        artist: "Enluv",
        file: "/audio/lofigirl/Cloud Studies/Almost Dreaming.mp3",
        forPart: AllPartType
    },
    {
        title: "Cloud Studies",
        artist: "Enluv x E I S U x tapei",
        file: "/audio/lofigirl/Cloud Studies/Cloud Studies w_ E I S U _ tapei.mp3",
        forPart: AllPartType
    },
    {
        title: "Woodland Hills",
        artist: "Enluv x Squeeda x No Spirit",
        file: "/audio/lofigirl/Cloud Studies/Woodland Hills w_ no spirit _ squeeda.mp3",
        forPart: AllPartType
    },
    {
        title: "Balance",
        artist: "Enluv x Sitting Duck x Squeeda",
        file: "/audio/lofigirl/Cloud Studies/Balance w_ Squeeda _ Sitting Duck.mp3",
        forPart: AllPartType
    },
    {
        title: "Contemplate",
        artist: "Enluv",
        file: "/audio/lofigirl/Cloud Studies/Contemplate.mp3",
        forPart: AllPartType
    },
    {
        title: "Within",
        artist: "Enluv",
        file: "/audio/lofigirl/Cloud Studies/Within.mp3",
        forPart: AllPartType
    },
    {
        title: "Winterhome",
        artist: "Enluv x tapei",
        file: "/audio/lofigirl/Cloud Studies/Winterhome w_ tapei.mp3",
        forPart: AllPartType
    },
    {
        title: "Frozen Over",
        artist: "Enluv x softy",
        file: "/audio/lofigirl/Cloud Studies/Frozen Over w_ softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Altitude",
        artist: "Enluv x tysu",
        file: "/audio/lofigirl/Cloud Studies/Altitude w_ tysu.mp3",
        forPart: AllPartType
    },
    {
        title: "Flying Away",
        artist: "Enluv",
        file: "/audio/lofigirl/Cloud Studies/Flying Away.mp3",
        forPart: AllPartType
    },
    // "Days of Tomorrow",
    {
        title: "Driving North",
        artist: "M e a d o w x Living Room x Phlocalyst",
        file: "/audio/lofigirl/Days of Tomorrow/01 Driving North (21) Master 1.0.mp3",
        forPart: AllPartType
    },
    {
        title: "Empty Streets",
        artist: "M e a d o w x Rudy Raw x Phlocalyst",
        file: "/audio/lofigirl/Days of Tomorrow/02 Empty Streets (19) Master 1.0.mp3",
        forPart: AllPartType
    },
    {
        title: "Stargazing",
        artist: "M e a d o w x Hoffy Beats",
        file: "/audio/lofigirl/Days of Tomorrow/03 Stargazing Master 1.0.mp3",
        forPart: AllPartType
    },
    {
        title: "Time",
        artist: "M e a d o w x Drxnk x Sátyr",
        file: "/audio/lofigirl/Days of Tomorrow/04 Time (27) Master 1.0.mp3",
        forPart: AllPartType
    },
    {
        title: "Fluid",
        artist: "M e a d o w x Sátyr x Drxnk",
        file: "/audio/lofigirl/Days of Tomorrow/05 Fluid (28) Master 1.1.mp3",
        forPart: AllPartType
    },
    {
        title: "Leaves",
        artist: "M e a d o w x Drxnk x Sátyr",
        file: "/audio/lofigirl/Days of Tomorrow/06 Leaves (26) Master 1.0.mp3",
        forPart: AllPartType
    },
    {
        title: "Evening",
        artist: "M e a d o w x Otaam",
        file: "/audio/lofigirl/Days of Tomorrow/07 Evening Stroll Master 1.1.mp3",
        forPart: AllPartType
    },
    // "4 A.M Study Session",
    {
        title: "Snooze Button",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/4 A.M Study Session/A1- 01 Purrple Cat - Snooze Button (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Parallel",
        artist: "Tom Doolie x lōland",
        file: "/audio/lofigirl/4 A.M Study Session/A2 - 02 Tom Doolie - Parallel feat lōland (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Counting Sheep",
        artist: "jhove",
        file: "/audio/lofigirl/4 A.M Study Session/A3 - 03 jhove - counting sheep (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Bliss",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/4 A.M Study Session/A4 - 04 Dontcry _ Nokiaa - Bliss (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Above the Clouds",
        artist: "amies",
        file: "/audio/lofigirl/4 A.M Study Session/A5 - 05 amies - above the clouds (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Sayonara",
        artist: "Tenno",
        file: "/audio/lofigirl/4 A.M Study Session/A6 - 06 Tenno - Sayonara (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Im Fine",
        artist: "Kayou",
        file: "/audio/lofigirl/4 A.M Study Session/B1 - 07 Kayou - Im Fine (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Secret Garden",
        artist: "Thaehan",
        file: "/audio/lofigirl/4 A.M Study Session/B2 - 08 Thaehan - Secret Garden (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Carry Me",
        artist: "No Spirit",
        file: "/audio/lofigirl/4 A.M Study Session/B3 - 09 No Spirit - Carry Me (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Alaska",
        artist: "lōland x Nokiaa x Tom Doolie",
        file: "/audio/lofigirl/4 A.M Study Session/B4 - 10 Loland x Nokiaa x Tom Doolie - Alaska (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Night Walk",
        artist: "l'Outlander x Kanisan",
        file: "/audio/lofigirl/4 A.M Study Session/B5 - 11 L_outlander - Night Walk Ft Kanisan (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Drowsy Town",
        artist: "Miramare x Clément Matrat",
        file: "/audio/lofigirl/4 A.M Study Session/B6 - 12 Miramare _ Clément Matrat - Drowsy Town (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Nemui",
        artist: "lilac",
        file: "/audio/lofigirl/4 A.M Study Session/C1 - 13 lilac - nemui (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Sunsets",
        artist: "Yasumu",
        file: "/audio/lofigirl/4 A.M Study Session/C2 - 14 Yasumu - Sunsets (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Voyager",
        artist: "dryhope",
        file: "/audio/lofigirl/4 A.M Study Session/C3 - 15 Dryhope - Voyager (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Shimmer",
        artist: "sleepermane",
        file: "/audio/lofigirl/4 A.M Study Session/C4 - 16 sleepermane x sling dilly - shimmer (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Night Drive",
        artist: "Ky akasha",
        file: "/audio/lofigirl/4 A.M Study Session/C5 - 17 Ky Akasha - Night Drive (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Drowning",
        artist: "Kanisan x Hoogway",
        file: "/audio/lofigirl/4 A.M Study Session/C6 - 18 kanisan x hoogway - drowning (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Shimmering Nights",
        artist: "Mondo Loops x Yasumu",
        file: "/audio/lofigirl/4 A.M Study Session/D1 - 19 Mondo Loops - Shimmering Nights (With Yasumu) (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Everything Went Quiet",
        artist: "cxlt.",
        file: "/audio/lofigirl/4 A.M Study Session/D2 - 20 cxlt - everything went quiet (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Lullaby",
        artist: "Chiccotes Beats x Pueblo Vista",
        file: "/audio/lofigirl/4 A.M Study Session/D3 - 21 Chiccotes Beats x Pueblo Vista - Lullaby (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Imaginary",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/4 A.M Study Session/D4 - 22 amies _ cxlt - Imaginary (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Patience",
        artist: "Arbour",
        file: "/audio/lofigirl/4 A.M Study Session/D5 - 23 arbour - patience (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Midsummer",
        artist: "Sebastian Kamae",
        file: "/audio/lofigirl/4 A.M Study Session/D6 - 24 Sebastian Kamae - Midsummer (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Rainbowsend",
        artist: "Living Room",
        file: "/audio/lofigirl/4 A.M Study Session/D7 - 25 Living Room - Rainbowsend (Kupla Master) (1).mp3",
        forPart: AllPartType
    },
    // "Pegan Hill",
    {
        title: "Old Cars",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/01 Old Cars.mp3",
        forPart: AllPartType
    },
    {
        title: "The Brook",
        artist: "Kurt Stewart x Lomme x Yutaka Hirasaka",
        file: "/audio/lofigirl/Pegan Hill/02 The Brook (with Yutaka Hirasaka).mp3",
        forPart: AllPartType
    },
    {
        title: "Cope",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/03 Cope.mp3",
        forPart: AllPartType
    },
    {
        title: "The Long Way",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/04 The Long Way.mp3",
        forPart: AllPartType
    },
    {
        title: "Window Seat",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/05 Window Seat.mp3",
        forPart: AllPartType
    },
    {
        title: "Daydreams",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/06 Daydreams.mp3",
        forPart: AllPartType
    },
    {
        title: "Adrift",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/07 Adrift.mp3",
        forPart: AllPartType
    },
    {
        title: "Nightfall",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/08 Nightfall.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonlight",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/09 Moonlight.mp3",
        forPart: AllPartType
    },
    {
        title: "Years Ago",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/10 Years Ago.mp3",
        forPart: AllPartType
    },
    {
        title: "Moments",
        artist: "Kurt Stewart x Lomme",
        file: "/audio/lofigirl/Pegan Hill/11 Moments.mp3",
        forPart: AllPartType
    },
    // "Ghosts of the Floating World",
    {
        title: "Teahouse Spirits",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/1. Teahouse Spirits.mp3",
        forPart: AllPartType
    },
    {
        title: "Streelight Reverie",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/2. Streetlight Reverie.mp3",
        forPart: AllPartType
    },
    {
        title: "Kami",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/3. Kami.mp3",
        forPart: AllPartType
    },
    {
        title: "One Summer Afternoon",
        artist: "Kalaido ",
        file: "/audio/lofigirl/Ghost of the Floating World/4. One Summer Afternoon.mp3",
        forPart: AllPartType
    },
    {
        title: "Power Lines and Pastel Skies",
        artist: "Kalaido x biosphere",
        file: "/audio/lofigirl/Ghost of the Floating World/5. Power Lines and Pastel Skies (w_ biosphere).mp3",
        forPart: AllPartType
    },
    {
        title: "Floating Ghosts",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/6. Floating Ghosts.mp3",
        forPart: AllPartType
    },
    {
        title: "Maboroshi",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/7. Maboroshi.mp3",
        forPart: AllPartType
    },
    {
        title: "Phantoms and Dreams",
        artist: "Kalaido ",
        file: "/audio/lofigirl/Ghost of the Floating World/8. Phantoms and Dreams.mp3",
        forPart: AllPartType
    },
    {
        title: "Sleepy Town",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/9. Sleepy Town.mp3",
        forPart: AllPartType
    },
    {
        title: "Houses on Hills",
        artist: "Kalaido x Kennebec",
        file: "/audio/lofigirl/Ghost of the Floating World/10. Houses on Hills (w_ Kennebec).mp3",
        forPart: AllPartType
    },
    {
        title: "Yume",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/11. Yume.mp3",
        forPart: AllPartType
    },
    {
        title: "Ending Theme",
        artist: "Kalaido x aqualina",
        file: "/audio/lofigirl/Ghost of the Floating World/12. Ending Theme (w_ aqualina).mp3",
        forPart: AllPartType
    },
    {
        title: "Night Yokai",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/13. Night Yokai.mp3",
        forPart: AllPartType
    },
    {
        title: "Neon Memories",
        artist: "Kalaido",
        file: "/audio/lofigirl/Ghost of the Floating World/14. Neon Memories.mp3",
        forPart: AllPartType
    },
    // "Departure",
    {
        title: "Departure",
        artist: "Peak Twilight x S N U G",
        file: "/audio/lofigirl/Departure/1 Departure ft. S N U G (final master v2).mp3",
        forPart: AllPartType
    },
    {
        title: "Ascent",
        artist: "Peak Twilight x Aizyc",
        file: "/audio/lofigirl/Departure/2 Ascent ft. Ayzic (final master v2).mp3",
        forPart: AllPartType
    },
    {
        title: "Lunar Shores",
        artist: "Peak Twilight x no one’s perfect",
        file: "/audio/lofigirl/Departure/3 Lunar Shores ft. no one_s perfect (final master v2).mp3",
        forPart: AllPartType
    },
    {
        title: "Magical Connection",
        artist: "Peak Twilight x Prithvi",
        file: "/audio/lofigirl/Departure/4 Magical Connection ft. Prithvi (final master v2).mp3",
        forPart: AllPartType
    },
    {
        title: "Desolation",
        artist: "Peak Twilight x mell-ø",
        file: "/audio/lofigirl/Departure/5 Desolation ft. mell-o (final master v2).mp3",
        forPart: AllPartType
    },
    {
        title: "Picturesque",
        artist: "Peak Twilight x Tibeauthetraveler",
        file: "/audio/lofigirl/Departure/6 Picturesque ft. Tibeauthetraveler (final master v2).mp3",
        forPart: AllPartType
    },
    {
        title: "Until We Meet Again",
        artist: "Peak Twilight x amies",
        file: "/audio/lofigirl/Departure/7 Until We Meet Again ft. amies (final master v2).mp3",
        forPart: AllPartType
    },
    // "love you two",
    {
        title: "My Person",
        artist: "kudo",
        file: "/audio/lofigirl/love you two/1-my person.mp3",
        forPart: AllPartType
    },
    {
        title: "Builder Home",
        artist: "kudo",
        file: "/audio/lofigirl/love you two/2-builder home.mp3",
        forPart: AllPartType
    },
    {
        title: "Cool Winds",
        artist: "kudo",
        file: "/audio/lofigirl/love you two/3-cool winds.mp3",
        forPart: AllPartType
    },
    {
        title: "Their Chair",
        artist: "kudo",
        file: "/audio/lofigirl/love you two/4-their chair.mp3",
        forPart: AllPartType
    },
    {
        title: "Can’t See",
        artist: "kudo",
        file: "/audio/lofigirl/love you two/5-cant see.mp3",
        forPart: AllPartType
    },
    {
        title: "Turn Ways",
        artist: "kudo",
        file: "/audio/lofigirl/love you two/6-turn ways.mp3",
        forPart: AllPartType
    },
    // "Mirror of Time",
    {
        title: "Repressed Emotions",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/1 Repressed Emotions.mp3",
        forPart: AllPartType
    },
    {
        title: "Left Behind",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/2 Left Behind.mp3",
        forPart: AllPartType
    },
    {
        title: "Searching for Answers",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/3 Searching For Answers.mp3",
        forPart: AllPartType
    },
    {
        title: "Brighter Days",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/4 Brighter Days.mp3",
        forPart: AllPartType
    },
    {
        title: "A New Beginning",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/5 A New Beginning.mp3",
        forPart: AllPartType
    },
    {
        title: "Flowstate",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/6 Flowstate.mp3",
        forPart: AllPartType
    },
    {
        title: "Petrichor",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/7 Petrichor.mp3",
        forPart: AllPartType
    },
    {
        title: "How We Feel",
        artist: "/audio/lofigirl/Mirror of Time/8 How We Feel.mp3",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Dreamlands",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/9 Dreamlands.mp3",
        forPart: AllPartType
    },
    {
        title: "Mirror of Time",
        artist: "Yasumu",
        file: "/audio/lofigirl/Mirror of Time/10 Mirror of Time.mp3",
        forPart: AllPartType
    },
    // "Golden Hour",
    {
        title: "Dreams We Shared",
        artist: "Fourwalls x jhove x Towerz",
        file: "/audio/lofigirl/Golden Hour/1 DREAMS WE SHARED FT TOWERZ.mp3",
        forPart: AllPartType
    },
    {
        title: "Still Shining",
        artist: "Fourwalls x jhove x Skinny Atlas",
        file: "/audio/lofigirl/Golden Hour/2 STILL SHINING FT SKINNY ATLASwav.mp3",
        forPart: AllPartType
    },
    {
        title: "La Lune",
        artist: "Fourwalls x jhove x allove",
        file: "/audio/lofigirl/Golden Hour/4 LA LUNE FT ALLOVE.mp3",
        forPart: AllPartType
    },
    {
        title: "Pillow Fight",
        artist: "Fourwalls x jhove x nightlight",
        file: "/audio/lofigirl/Golden Hour/7 PILLOW FIGHT FT NIGHTLIGHT.mp3",
        forPart: AllPartType
    },
    {
        title: "Golden Hour",
        artist: "Fourwalls x jhove",
        file: "/audio/lofigirl/Golden Hour/8 GOLDEN HOUR.mp3",
        forPart: AllPartType
    },
    // "Somewhere In Time",
    {
        title: "Somewhere In Time",
        artist: "cxlt.",
        file: "/audio/lofigirl/Somewhere in Time/01 Somewhere In Time .mp3",
        forPart: AllPartType
    },
    {
        title: "Slow Hours",
        artist: "cxlt. x herman.",
        file: "/audio/lofigirl/Somewhere in Time/02 Slow Hours (w_ herman.) .mp3",
        forPart: AllPartType
    },
    {
        title: "Above The Quiet City",
        artist: "cxlt.",
        file: "/audio/lofigirl/Somewhere in Time/03 Above The Quiet City .mp3",
        forPart: AllPartType
    },
    {
        title: "After The Rain",
        artist: "cxlt. x Project AER",
        file: "/audio/lofigirl/Somewhere in Time/04 After The Rain (w_ Project AER).mp3",
        forPart: AllPartType
    },
    {
        title: "Canvas",
        artist: "cxlt.",
        file: "/audio/lofigirl/Somewhere in Time/05 Canvas .mp3",
        forPart: AllPartType
    },
    {
        title: "Reliving",
        artist: "cxlt. x amies",
        file: "/audio/lofigirl/Somewhere in Time/06 Reliving (w_ amies).mp3",
        forPart: AllPartType
    },
    {
        title: "In Between",
        artist: "cxlt.",
        file: "/audio/lofigirl/Somewhere in Time/07 In Between .mp3",
        forPart: AllPartType
    },
    {
        title: "Glowing Light",
        artist: "cxlt.",
        file: "/audio/lofigirl/Somewhere in Time/08 Glowing Light .mp3",
        forPart: AllPartType
    },
    {
        title: "Blurred",
        artist: "cxlt. x lednem",
        file: "/audio/lofigirl/Somewhere in Time/09 Blurred (w_ lednem).mp3",
        forPart: AllPartType
    },
    {
        title: "Home, Now",
        artist: "cxlt.",
        file: "/audio/lofigirl/Somewhere in Time/10 Home, Now.mp3",
        forPart: AllPartType
    },
    // "Finding Beauty",
    {
        title: "Midnight Journey",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Finding Beauty/1 Midnight Journey.mp3",
        forPart: AllPartType
    },
    {
        title: "Fading Stars",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Finding Beauty/2 Fading Stars.mp3",
        forPart: AllPartType
    },
    {
        title: "Wanderer ft. kudo",
        artist: "Kainbeats x kudo",
        file: "/audio/lofigirl/Finding Beauty/3 Wanderer x kudo.mp3",
        forPart: AllPartType
    },
    {
        title: "Lonely Path",
        artist: "Kainbeats",
        file: "/audio/lofigirl/Finding Beauty/4 Lonely Path.mp3",
        forPart: AllPartType
    },
    {
        title: "Respite",
        artist: "Kainbeats x Kurt Stewart",
        file: "/audio/lofigirl/Finding Beauty/5 Respite w Kurt Stewart.mp3",
        forPart: AllPartType
    },
    {
        title: "Cirrus Bridge",
        artist: "Kainbeats x no one’s perfect",
        file: "/audio/lofigirl/Finding Beauty/6 Cirrus Bridge x no one_s perfect.mp3",
        forPart: AllPartType
    },
    {
        title: "Cloudy Springs",
        artist: "Kainbeats x softy",
        file: "/audio/lofigirl/Finding Beauty/7 Cloudy Springs x softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Hillside Tree",
        artist: "Kainbeats x S N U G",
        file: "/audio/lofigirl/Finding Beauty/8 Hillside Tree x S N U G.mp3",
        forPart: AllPartType
    },
    {
        title: "Glass Spire",
        artist: "Kainbeats x Towerz",
        file: "/audio/lofigirl/Finding Beauty/9 Glass Spire w towerz.mp3",
        forPart: AllPartType
    },
    {
        title: "Palace in The Sky",
        artist: "Kainbeats x cxlt.",
        file: "/audio/lofigirl/Finding Beauty/10 Palace in the Sky x cxlt.mp3",
        forPart: AllPartType
    },
    // "Satellite Nights",
    {
        title: "Meteor Shower",
        artist: "drkmnd x Ambulo",
        file: "/audio/lofigirl/Satellite Nights/1. Meteor Shower ft. Ambulo.mp3",
        forPart: AllPartType
    },
    {
        title: "Satellite Nights",
        artist: "drkmnd",
        file: "/audio/lofigirl/Satellite Nights/2. Satellite Nights.mp3",
        forPart: AllPartType
    },
    {
        title: "Pluto",
        artist: "drkmnd x Allem Iverson",
        file: "/audio/lofigirl/Satellite Nights/3. Pluto ft. allem iversom.mp3",
        forPart: AllPartType
    },
    {
        title: "Jupiter Jam",
        artist: "drkmnd",
        file: "/audio/lofigirl/Satellite Nights/4. Jupiter Jam.mp3",
        forPart: AllPartType
    },
    {
        title: "Signal",
        artist: "drkmnd",
        file: "/audio/lofigirl/Satellite Nights/5. Signal.mp3",
        forPart: AllPartType
    },
    {
        title: "Last Alive",
        artist: "drkmnd",
        file: "/audio/lofigirl/Satellite Nights/6. Last Alive.mp3",
        forPart: AllPartType
    },
    // "Violet",
    {
        title: "Walk Out",
        artist: "Khutko x Blue Wednesday",
        file: "/audio/lofigirl/Violet/Khutko - Walk Out [with Blue Wednesday] (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Underbelly",
        artist: "Khutko",
        file: "/audio/lofigirl/Violet/Khutko - Underbelly (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Chimes",
        artist: "Khutko",
        file: "/audio/lofigirl/Violet/Khutko - Chimes (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Violet",
        artist: "Khutko",
        file: "/audio/lofigirl/Violet/Khutko - Violet (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Pillow",
        artist: "Khutko",
        file: "/audio/lofigirl/Violet/Khutko - Underbelly (Master).mp3",
        forPart: AllPartType
    },
    // "Vanishing Journey",
    {
        title: "Night Drive",
        artist: "Elijah Lee",
        file: "/audio/lofigirl/Vanishing Journey/1_Night_Drive.mp3",
        forPart: AllPartType
    },
    {
        title: "Birdcage",
        artist: "Elijah Lee x Epona",
        file: "/audio/lofigirl/Vanishing Journey/2_Birdcage.mp3",
        forPart: AllPartType
    },
    {
        title: "Trapped in My Mind",
        artist: "Elijah Lee",
        file: "/audio/lofigirl/Vanishing Journey/3_Trapped_in_My_Mind.mp3",
        forPart: AllPartType
    },
    {
        title: "Calm",
        artist: "Elijah Lee",
        file: "/audio/lofigirl/Vanishing Journey/4_Calm.mp3",
        forPart: AllPartType
    },
    {
        title: "Introspection",
        artist: "Elijah Lee",
        file: "/audio/lofigirl/Vanishing Journey/5_Introspection.mp3",
        forPart: AllPartType
    },
    {
        title: "Coming Home",
        artist: "Elijah Lee x mell-ø",
        file: "/audio/lofigirl/Vanishing Journey/6_Coming_Home.mp3",
        forPart: AllPartType
    },
    {
        title: "Sigh of Relief",
        artist: "Elijah Lee x softy",
        file: "/audio/lofigirl/Vanishing Journey/7_Sigh_of_Relief.mp3",
        forPart: AllPartType
    },
    // "High Flying",
    {
        title: "Warm Shimmers",
        artist: "Loafy Building x Project AER",
        file: "/audio/lofigirl/High Flying/A1 Warm Shimmers (Project AER) (M2).mp3",
        forPart: AllPartType
    },
    {
        title: "Found Movement",
        artist: "Loafy Building x Hoogway",
        file: "/audio/lofigirl/High Flying/A2 Found Movement (Hoogway) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Timeless",
        artist: "Loafy Building x Ayzic",
        file: "/audio/lofigirl/High Flying/A3 Timeless (Ayzic) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "High Flying",
        artist: "Loafy Building x Yestalgia",
        file: "/audio/lofigirl/High Flying/A4 High Flying (Yestalgia) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Moonglow",
        artist: "Loafy Building x Mondo Loops",
        file: "/audio/lofigirl/High Flying/A6 Moonglow (Mondo) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Max’s Garden",
        artist: "Loafy Building x w00ds",
        file: "/audio/lofigirl/High Flying/A7 Max's Garden (w00ds) (M2).mp3",
        forPart: AllPartType
    },
    {
        title: "Sleepless Wonder",
        artist: "Loafy Building x Hoffy Beats",
        file: "/audio/lofigirl/High Flying/A9 Sleepless Wonder (Hoffy) (M).mp3",
        forPart: AllPartType
    },
    // "Particles",
    {
        title: "Afterglow",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/1. Afterglow.mp3",
        forPart: AllPartType
    },
    {
        title: "Bamboo",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/2. Bamboo.mp3",
        forPart: AllPartType
    },
    {
        title: "Cycles",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/3. Cycles.mp3",
        forPart: AllPartType
    },
    {
        title: "Suntai",
        artist: "Sleepermane x Casiio x Odyssee",
        file: "/audio/lofigirl/Particles/4. Suntai (ft. Odyssee).mp3",
        forPart: AllPartType
    },
    {
        title: "Maya",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/5. Maya.mp3",
        forPart: AllPartType
    },
    {
        title: "Particles",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/6. Particles.mp3",
        forPart: AllPartType
    },
    {
        title: "Magenta",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/7. Magenta.mp3",
        forPart: AllPartType
    },
    {
        title: "Returnal",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/8. Returnal.mp3",
        forPart: AllPartType
    },
    {
        title: "Distant Blue",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/9. Distant Blue.mp3",
        forPart: AllPartType
    },
    {
        title: "Mockingbird",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/10. Mockingbird.mp3",
        forPart: AllPartType
    },
    {
        title: "Atoms",
        artist: "Sleepermane x Casiio",
        file: "/audio/lofigirl/Particles/11. Atoms.mp3",
        forPart: AllPartType
    },
    // "Argo",
    {
        title: "Flood",
        artist: "Sátyr x Drxnk",
        file: "/audio/lofigirl/Argo/01 - Sátyr _ Drxnk - Flood.mp3",
        forPart: AllPartType
    },
    {
        title: "Circle",
        artist: "Sátyr x Phlocalyst x mell-ø",
        file: "/audio/lofigirl/Argo/02 - Sátyr, Phlocalyst _ mell-ø - Circle.mp3",
        forPart: AllPartType
    },
    {
        title: "Emerald",
        artist: "Sátyr x Phlocalyst x Rudy Raw",
        file: "/audio/lofigirl/Argo/03 - Sátyr, Phlocalyst _ Rudy Raw - Emerald.mp3",
        forPart: AllPartType
    },
    {
        title: "Cicada",
        artist: "Sátyr x Phlocalyst x LESKY",
        file: "/audio/lofigirl/Argo/04 - Sátyr, Phlocalyst _ LESKY - Cicada.mp3",
        forPart: AllPartType
    },
    {
        title: "Marble",
        artist: "Sátyr x Drxnk x Elior",
        file: "/audio/lofigirl/Argo/05 - Sátyr, Drxnk _ Elior - Marble.mp3",
        forPart: AllPartType
    },
    {
        title: "Hyacinth",
        artist: "Sátyr x Drxnk x Akīn",
        file: "/audio/lofigirl/Argo/06 - Sátyr, Drxnk _ Akīn - Hyacinth.mp3",
        forPart: AllPartType
    },
    {
        title: "Lucid Dreamin'",
        artist: "Sátyr x Drxnk x Living Room",
        file: "/audio/lofigirl/Argo/07 - Sátyr, Drxnk _ Living Room - Lucid Dream.mp3",
        forPart: AllPartType
    },
    // "Floating Dreams",
    {
        title: "Sunday Morning",
        artist: "BVG x møndberg x Spencer Hunt",
        file: "/audio/lofigirl/Floating Dreams/1 - BVG x møndberg - Sunday Morning (ft spencer hunt).mp3",
        forPart: AllPartType
    },
    {
        title: "set sail",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/2 - BVG x møndberg - Set Sail (Shortened).mp3",
        forPart: AllPartType
    },
    {
        title: "Dreams Can Come True",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/3 - BVG x møndberg - Dreams Can Come True (Shortened).mp3",
        forPart: AllPartType
    },
    {
        title: "almost home",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/4 - BVG x møndberg - Almost Home (Shortened).mp3",
        forPart: AllPartType
    },
    {
        title: "Fireplace",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/5 - BVG x møndberg - Fireplace.mp3",
        forPart: AllPartType
    },
    {
        title: "insomnia",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/BVG x møndberg - insomnia.mp3",
        forPart: AllPartType
    },
    {
        title: "after rain",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/BVG x møndberg - after rain.mp3",
        forPart: AllPartType
    },
    {
        title: "The World at Night",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/Floating Dreams/BVG x møndberg - The World At Night (final render).mp3",
        forPart: AllPartType
    },
    // "When I Dreamt of You",
    {
        title: "I Want To See You Smile",
        artist: "Lilac",
        file: "/audio/lofigirl/When I dreamt of You/1. I want to see you smile.mp3",
        forPart: AllPartType
    },
    {
        title: "Perfume",
        artist: "Lilac",
        file: "/audio/lofigirl/When I dreamt of You/2. perfume.mp3",
        forPart: AllPartType
    },
    {
        title: "When I Dreamt of You",
        artist: "Lilac",
        file: "/audio/lofigirl/When I dreamt of You/3. when i dreamt of you.mp3",
        forPart: AllPartType
    },
    {
        title: "Dearest",
        artist: "Lilac",
        file: "/audio/lofigirl/When I dreamt of You/4. dearest.mp3",
        forPart: AllPartType
    },
    {
        title: "Dry Your Eyes",
        artist: "Lilac",
        file: "/audio/lofigirl/When I dreamt of You/5. dry your eyes.mp3",
        forPart: AllPartType
    },
    // "The Story",
    {
        title: "Wishing Well",
        artist: "Kaspa. x softy",
        file: "/audio/lofigirl/The Story/1. Kaspa. x softy - Wishing Well .mp3",
        forPart: AllPartType
    },
    {
        title: "Holding On",
        artist: "Kaspa. x softy",
        file: "/audio/lofigirl/The Story/2. Kaspa. x softy - Holding On .mp3",
        forPart: AllPartType
    },
    {
        title: "Star Trails",
        artist: "Kaspa. x Mondo Loops",
        file: "/audio/lofigirl/The Story/3. Kaspa. x Mondo Loops - Star Trail .mp3",
        forPart: AllPartType
    },
    {
        title: "English Rain",
        artist: "Kaspa. x Pointy Features",
        file: "/audio/lofigirl/The Story/4. Kaspa. x Pointy Features - English Rain .mp3",
        forPart: AllPartType
    },
    {
        title: "Mull Over",
        artist: "Kaspa. x eaup",
        file: "/audio/lofigirl/The Story/5. Kaspa. x Eaup - Mull Over .mp3",
        forPart: AllPartType
    },
    // "Beauty In All Forms",
    {
        title: "Beauty In All Forms",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/1. Beauty In All Forms.mp3",
        forPart: AllPartType
    },
    {
        title: "Stay Here",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/2. Stay Here.mp3",
        forPart: AllPartType
    },
    {
        title: "Forever More",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/3. Forever More.mp3",
        forPart: AllPartType
    },
    {
        title: "Lovely",
        artist: "Hoogway x High On Stars",
        file: "/audio/lofigirl/Beauty in all Forms/4. Lovely x High On Stars.mp3",
        forPart: AllPartType
    },
    {
        title: "Earl Grey",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/5. Earl Grey.mp3",
        forPart: AllPartType
    },
    {
        title: "Soft Garden",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/Beauty in all Forms/6. Soft Gardens x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Days Like This",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/7. Days Like This.mp3",
        forPart: AllPartType
    },
    {
        title: "Through Your Eyes",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/8. Through Your Eyes.mp3",
        forPart: AllPartType
    },
    {
        title: "Rivage",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/9. Rivage.mp3",
        forPart: AllPartType
    },
    {
        title: "Heading North",
        artist: "Hoogway x DLJ",
        file: "/audio/lofigirl/Beauty in all Forms/10. Heading North x DLJ.mp3",
        forPart: AllPartType
    },
    {
        title: "Etoiles",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/11. Etoiles.mp3",
        forPart: AllPartType
    },
    {
        title: "Healing",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/12. Healing.mp3",
        forPart: AllPartType
    },
    {
        title: "All In The Stars",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/13. All In The Stars.mp3",
        forPart: AllPartType
    },
    {
        title: "Miles Away",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/14. Miles Away.mp3",
        forPart: AllPartType
    },
    {
        title: "For The Roses",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/15. For The Roses.mp3",
        forPart: AllPartType
    },
    {
        title: "Outside For A While",
        artist: "Hoogway",
        file: "/audio/lofigirl/Beauty in all Forms/16. Outside For A While.mp3",
        forPart: AllPartType
    },
    // "Daydreaming",
    {
        title: "Cabin In The Forest",
        artist: "Xander",
        file: "/audio/lofigirl/Daydreaming/Cabin In A Forest.mp3",
        forPart: AllPartType
    },
    {
        title: "Leaves",
        artist: "Xander",
        file: "/audio/lofigirl/Daydreaming/Leaves.mp3",
        forPart: AllPartType
    },
    {
        title: "Love Stories",
        artist: "Xander",
        file: "/audio/lofigirl/Daydreaming/Love Stories.mp3",
        forPart: AllPartType
    },
    {
        title: "Lodge",
        artist: "Xander x Chris Mazuera",
        file: "/audio/lofigirl/Daydreaming/Lodge w_Chris Mazuera.mp3",
        forPart: AllPartType
    },
    {
        title: "Somber",
        artist: "Xander x Philip Somber",
        file: "/audio/lofigirl/Daydreaming/Gloomy w_Philip Somber.mp3",
        forPart: AllPartType
    },
    {
        title: "Love Is Still Here",
        artist: "Xander x Carrick",
        file: "/audio/lofigirl/Daydreaming/Love Is Still Here w_Carrick.mp3",
        forPart: AllPartType
    },
    {
        title: "Summer Love",
        artist: "Xander x Carrick",
        file: "/audio/lofigirl/Daydreaming/Summer Love w_Carrick.mp3",
        forPart: AllPartType
    },
    {
        title: "Dreaming",
        artist: "Xander x Philip Somber",
        file: "/audio/lofigirl/Daydreaming/Dreaming w_Philip Somber.mp3",
        forPart: AllPartType
    },
    {
        title: "Something Between Us",
        artist: "Xander",
        file: "/audio/lofigirl/Daydreaming/Something Between Us.mp3",
        forPart: AllPartType
    },
    {
        title: "Warm Summer",
        artist: "Xander x Philip Somber",
        file: "/audio/lofigirl/Daydreaming/Warm summer w_Philip Somber.mp3",
        forPart: AllPartType
    },
    {
        title: "Miss What We Had",
        artist: "Xander x Goosetaf",
        file: "/audio/lofigirl/Daydreaming/Miss What We Had w_goosetaf.mp3",
        forPart: AllPartType
    },
    // "beyond the pines",
    {
        title: "letting go",
        artist: "steezy prime",
        file: "/audio/lofigirl/beyond the pines/1. steezy prime - letting go.mp3",
        forPart: AllPartType
    },
    {
        title: "haven",
        artist: "steezy prime",
        file: "/audio/lofigirl/beyond the pines/2. steezy prime - haven.mp3",
        forPart: AllPartType
    },
    {
        title: "sanctuary",
        artist: "steezy prime",
        file: "/audio/lofigirl/beyond the pines/3. steezy prime - sanctuary.mp3",
        forPart: AllPartType
    },
    {
        title: "campfire",
        artist: "steezy prime x Devon Rea",
        file: "/audio/lofigirl/beyond the pines/4. steezy prime - campfire (w_ devon rea).mp3",
        forPart: AllPartType
    },
    {
        title: "youth",
        artist: "steezy prime x Ayzic",
        file: "/audio/lofigirl/beyond the pines/5. steezy prime - youth (w_ ayzic).mp3",
        forPart: AllPartType
    },
    {
        title: "beluga",
        artist: "steezy prime x tender spring",
        file: "/audio/lofigirl/beyond the pines/6. steezy prime - beluga (w_ tender spring).mp3",
        forPart: AllPartType
    },
    {
        title: "canopy",
        artist: "steezy prime x no one's perfect",
        file: "/audio/lofigirl/beyond the pines/7. steezy prime - canopy (w_ no one_s perfect).mp3",
        forPart: AllPartType
    },
    {
        title: "promises",
        artist: "steezy prime x Tibeauthetraveler",
        file: "/audio/lofigirl/beyond the pines/8. steezy prime - promises (w_ tibeauthetraveler).mp3",
        forPart: AllPartType
    },
    // "Reflections in the moonlight",
    {
        title: "Starry night",
        artist: "eugenio izzi x Mondo Loops",
        file: "/audio/lofigirl/Reflections in the moonlight/1. Starry night (feat. Mondo Loops).mp3",
        forPart: AllPartType
    },
    {
        title: "A fresh breath",
        artist: "eugenio izzi",
        file: "/audio/lofigirl/Reflections in the moonlight/2. A fresh breath.mp3",
        forPart: AllPartType
    },
    {
        title: "Lethargy",
        artist: "eugenio izzi x Hoogway",
        file: "/audio/lofigirl/Reflections in the moonlight/3. Lethargy (feat. Hoogway).mp3",
        forPart: AllPartType
    },
    {
        title: "Like a serendipity",
        artist: "eugenio izzi",
        file: "/audio/lofigirl/Reflections in the moonlight/4. Like a serendipity.mp3",
        forPart: AllPartType
    },
    {
        title: "The autumn sea",
        artist: "eugenio izzi",
        file: "/audio/lofigirl/Reflections in the moonlight/5. The autumn sea.mp3",
        forPart: AllPartType
    },
    // "Purple Skies",
    {
        title: "Fading Mist",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/fading mist.mp3",
        forPart: AllPartType
    },
    {
        title: "Evenings",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/evenings.mp3",
        forPart: AllPartType
    },
    {
        title: "Purple Skies",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/purple skies.mp3",
        forPart: AllPartType
    },
    {
        title: "Dusk",
        artist: "S N U G x Mondo Loops",
        file: "/audio/lofigirl/Purple Skies/dusk ft. mondo loops.mp3",
        forPart: AllPartType
    },
    {
        title: "Findings",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/findings.mp3",
        forPart: AllPartType
    },
    {
        title: "New Beginnings",
        artist: "S N U G x Mondo Loops",
        file: "/audio/lofigirl/Purple Skies/new beginnings ft. mondo loops.mp3",
        forPart: AllPartType
    },
    {
        title: "Haze",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/haze.mp3",
        forPart: AllPartType
    },
    {
        title: "Another Era",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/another era.mp3",
        forPart: AllPartType
    },
    {
        title: "Illusion",
        artist: "S N U G",
        file: "/audio/lofigirl/Purple Skies/illusion.mp3",
        forPart: AllPartType
    },
    {
        title: "Late Return",
        artist: "S N U G x Jordy Chandra",
        file: "/audio/lofigirl/Purple Skies/late return ft. Jordy Chandra.mp3",
        forPart: AllPartType
    },
    // "Sleep Cycles EP",
    {
        title: "time for bed",
        artist: "goodnyght",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "slept in",
        artist: "goodnyght",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "working late",
        artist: "goodnyght",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "early morning",
        artist: "goodnyght",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "dreams",
        artist: "goodnyght",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    // "Massa",
    {
        title: "Massa",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - L'outlander - Massa/1.Massa.mp3",
        forPart: AllPartType
    },
    {
        title: "Goshen",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - L'outlander - Massa/2.Goshen.mp3",
        forPart: AllPartType
    },
    {
        title: "Desert Night",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - L'outlander - Massa/3.Desert Night.mp3",
        forPart: AllPartType
    },
    {
        title: "To The Euphrates",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - L'outlander - Massa/4.To The Euphrates.mp3",
        forPart: AllPartType
    },
    {
        title: "The Silk Road",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - L'outlander - Massa/5.The Silk Road.mp3",
        forPart: AllPartType
    },
    // "Perspectives",
    {
        title: "Seashore",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/Seashore - (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Can't Stay",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/Can't Stay - (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Cold Water",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/Cold Water - (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "On My Own",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/On my Own - (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Another Life",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/Another Life - (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Mist",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/Mist - (Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Circles",
        artist: "Dontcry x Nokiaa",
        file: "/audio/lofigirl/MP3-Dontcry x Nokiaa - Perspectives/Circles - (Master).mp3",
        forPart: AllPartType
    },
    // "Adventure Island",
    {
        title: "Where We Take Us",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Where the Waves Take Us.mp3",
        forPart: AllPartType
    },
    {
        title: "Time Stands Still",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Time Stands Still.mp3",
        forPart: AllPartType
    },
    {
        title: "Breathtaking",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Breathtaking.mp3",
        forPart: AllPartType
    },
    {
        title: "Ferris Wheel",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Ferris Wheel.mp3",
        forPart: AllPartType
    },
    {
        title: "Shipwreck Cove",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Shipwreck Cove.mp3",
        forPart: AllPartType
    },
    {
        title: "Lost Treasure",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Lost Treasure.mp3",
        forPart: AllPartType
    },
    {
        title: "Rainbow Falls",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Rainbow Falls.mp3",
        forPart: AllPartType
    },
    {
        title: "Storm Clouds",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Storm Clouds.mp3",
        forPart: AllPartType
    },
    {
        title: "Puddle Jumping",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Puddle Jumping.mp3",
        forPart: AllPartType
    },
    {
        title: "Mysterious Lights",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Mysterious Lights.mp3",
        forPart: AllPartType
    },
    {
        title: "Around the Campfire",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Around the Campfire.mp3",
        forPart: AllPartType
    },
    {
        title: "S’mores",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/S'mores.mp3",
        forPart: AllPartType
    },
    {
        title: "Wanted",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Wanted.mp3",
        forPart: AllPartType
    },
    {
        title: "Journey’s End",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Purrple Cat - Adventure Island/Journey's End.mp3",
        forPart: AllPartType
    },
    // "offline",
    {
        title: "breezehome",
        artist: "Bert",
        file: "/audio/lofigirl/MP3 - Bert - offline/1. breezehome.mp3",
        forPart: AllPartType
    },
    {
        title: "getting better",
        artist: "Bert",
        file: "/audio/lofigirl/MP3 - Bert - offline/2. getting better.mp3",
        forPart: AllPartType
    },
    {
        title: "oregon",
        artist: "Bert",
        file: "/audio/lofigirl/MP3 - Bert - offline/3. oregon.mp3",
        forPart: AllPartType
    },
    {
        title: "cheat codes",
        artist: "Bert",
        file: "/audio/lofigirl/MP3 - Bert - offline/4. cheat codes.mp3",
        forPart: AllPartType
    },
    {
        title: "sincerely",
        artist: "Bert",
        file: "/audio/lofigirl/MP3 - Bert - offline/5. sincerely.mp3",
        forPart: AllPartType
    },
    {
        title: "apart",
        artist: "Bert x møndberg",
        file: "/audio/lofigirl/MP3 - Bert - offline/6. apart ft. møndberg.mp3",
        forPart: AllPartType
    },
    {
        title: "soul gem",
        artist: "Bert",
        file: "/audio/lofigirl/MP3 - Bert - offline/7. soul gem.mp3",
        forPart: AllPartType
    },
    {
        title: "two moons",
        artist: "Bert x Trxxshed",
        file: "/audio/lofigirl/MP3 - Bert - offline/8. two moons ft. txxshed.mp3",
        forPart: AllPartType
    },
    {
        title: "fuji",
        artist: "Bert x Jhove",
        file: "/audio/lofigirl/MP3 - Bert - offline/9. fuji ft.jhove.mp3",
        forPart: AllPartType
    },
    // "The Shallows",
    {
        title: "the shallows",
        artist: "hi jude x Towerz",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz - the shallows (master).mp3",
        forPart: AllPartType
    },
    {
        title: "companion",
        artist: "hi jude x Towerz",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz - companion (master).mp3",
        forPart: AllPartType
    },
    {
        title: "extend",
        artist: "hi jude x Towerz",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz - extend (master).mp3",
        forPart: AllPartType
    },
    {
        title: "undertones",
        artist: "hi jude x Towerz x edelwize",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz ft. edelwize - undertones (master).mp3",
        forPart: AllPartType
    },
    {
        title: "distant places",
        artist: "hi jude x Towerz",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz - distant places (master).mp3",
        forPart: AllPartType
    },
    {
        title: "oath",
        artist: "hi jude x Towerz x Xandra",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz ft. xandra - oath (master).mp3",
        forPart: AllPartType
    },
    {
        title: "close to home",
        artist: "hi jude x Towerz",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz - close to home (master).mp3",
        forPart: AllPartType
    },
    {
        title: "lakeside",
        artist: "hi jude x Towerz",
        file: "/audio/lofigirl/MP3 - hi jude x towerz - the shallows/hi jude & towerz - lakeside (master).mp3",
        forPart: AllPartType
    },
    // "The Bad Party",
    {
        title: "The Bad Party",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/1) The Bad Party (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "Trampoline",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/2) Trampoline (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "Numb",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/3) Numb (mastered) .mp3",
        forPart: AllPartType
    },
    {
        title: "By The Pool",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/4) By The Pool (mastered) .mp3",
        forPart: AllPartType
    },
    {
        title: "Her",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/5) Her (mastered) .mp3",
        forPart: AllPartType
    },
    {
        title: "Rehash",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/6) Rehash (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "Sleeping On A Chair",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/7) Sleeping On A Chair (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "Unspoken",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/8) Unspoken (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "Constant Fear",
        artist: "WYS",
        file: "/audio/lofigirl/MP3 - WYS - The Bad Party/9) Constant Fear (mastered).mp3",
        forPart: AllPartType
    },
    // "Time Capsule",
    {
        title: "Endless Seas",
        artist: "DLJ x Hoogway",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x Hoogway - Endless Seas.mp3",
        forPart: AllPartType
    },
    {
        title: "To the Moon",
        artist: "DLJ x BIDØ",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x BIDO - To the Moon.mp3",
        forPart: AllPartType
    },
    {
        title: "Thousands of Dots",
        artist: "DLJ",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ - Thousands of Dots.mp3",
        forPart: AllPartType
    },
    {
        title: "Souvenir",
        artist: "DLJ x Nymano",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x Nymano - Souvenir.mp3",
        forPart: AllPartType
    },
    {
        title: "Sand City",
        artist: "DLJ",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ - Sand City.mp3",
        forPart: AllPartType
    },
    {
        title: "Moving Parts",
        artist: "DLJ x Dosi",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x Dosi - Moving Parts.mp3",
        forPart: AllPartType
    },
    {
        title: "Far Away",
        artist: "DLJ x Hoogway",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x Hoogway - Far Away.mp3",
        forPart: AllPartType
    },
    {
        title: "Same Thoughts",
        artist: "DLJ x Tah.",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x Tah. Same Thoughts.mp3",
        forPart: AllPartType
    },
    {
        title: "Lost Stars",
        artist: "DLJ x TABAL",
        file: "/audio/lofigirl/MP3 - DLJ - Time Capsule/DLJ x TABAL - Lost Stars.mp3",
        forPart: AllPartType
    },
    // "Nocturne",
    {
        title: "Nocturne",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/1. Nocturne.mp3",
        forPart: AllPartType
    },
    {
        title: "Nighttide",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/2. Nighttide.mp3",
        forPart: AllPartType
    },
    {
        title: "Lost In Thoughts",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/3. Lost In Thought.mp3",
        forPart: AllPartType
    },
    {
        title: "Blue Moon",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/4. Blue Moon.mp3",
        forPart: AllPartType
    },
    {
        title: "Into The Void",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/5. Into The Void.mp3",
        forPart: AllPartType
    },
    {
        title: "Fireflies",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/6. Fireflies.mp3",
        forPart: AllPartType
    },
    {
        title: "Echoes In Time",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/7. Echoes In Time.mp3",
        forPart: AllPartType
    },
    {
        title: "Eden",
        artist: "amies x cxlt.",
        file: "/audio/lofigirl/MP3 - Amies x cxlt. - Nocturne/8. Eden.mp3",
        forPart: AllPartType
    },
    // "Sea Beams",
    {
        title: "Escapade",
        artist: "Kinissue x Hoffy Beats x Ambulo",
        file: "/audio/lofigirl/MP3 - Kinissue - Sea Beams/Kinissue & Hoffy Beats & Ambulo - Escapade (M) 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Shore",
        artist: "Kinissue x cxlt. x softy",
        file: "/audio/lofigirl/MP3 - Kinissue - Sea Beams/Shore-Feat. Cxlt, Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Sea Beams",
        artist: "Kinissue x Banks",
        file: "/audio/lofigirl/MP3 - Kinissue - Sea Beams/Kinissue & Banks - SeaBeams (M) 2.mp3",
        forPart: AllPartType
    },
    {
        title: "Amorous",
        artist: "Kinissue x steezy prime",
        file: "/audio/lofigirl/MP3 - Kinissue - Sea Beams/Kinissue & steezy prime - Amorous (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Cascade",
        artist: "Kinissue x Ayzic",
        file: "/audio/lofigirl/MP3 - Kinissue - Sea Beams/Kinissue & Ayzic - Cascade (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Shipwreck",
        artist: "Kinissue x Pointy Features",
        file: "/audio/lofigirl/MP3 - Kinissue - Sea Beams/Kinissue & Pointy Features - Shipwreck (M) 2.mp3",
        forPart: AllPartType
    },
    // "Imagenero",
    {
        title: "Warm Atmos",
        artist: "Rudy Raw x HM Surf",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/01 Warm Atmos ft. HM Surf.mp3",
        forPart: AllPartType
    },
    {
        title: "Golden Clouds",
        artist: "Rudy Raw x mell-ø",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/02 Golden Clouds ft. Mellø.mp3",
        forPart: AllPartType
    },
    {
        title: "Liquid Spots",
        artist: "Rudy Raw x Sátyr x Phlocalyst",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/03 Liquid Spots ft. Sátyr & Phlocalyst.mp3",
        forPart: AllPartType
    },
    {
        title: "Cosmic Nights",
        artist: "Rudy Raw x Phlocalyst",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/04 Cosmic Nights ft. Phlocalyst.mp3",
        forPart: AllPartType
    },
    {
        title: "Peaceful Fusion",
        artist: "Rudy Raw",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/05 Peaceful Fusion.mp3",
        forPart: AllPartType
    },
    {
        title: "Space Magnet",
        artist: "Rudy Raw x Tom Doolie",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/06 Space Magnet ft. Tom Doolie.mp3",
        forPart: AllPartType
    },
    {
        title: "Acoustic Dreams",
        artist: "Rudy Raw",
        file: "/audio/lofigirl/MP3 - Rudy Raw - Imagenero/07 Acoustic Dreams.mp3",
        forPart: AllPartType
    },
    // "Shelter",
    {
        title: "Leicester Square",
        artist: "Loafy Building x Socrab x ticofaces",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/1. Leicester Square (feat. Socrab & ticofaces) (M2).mp3",
        forPart: AllPartType
    },
    {
        title: "Reflecting",
        artist: "Loafy Building x Hoogway",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/2. Reflecting (feat. Hoogway) (M3).mp3",
        forPart: AllPartType
    },
    {
        title: "Busyland",
        artist: "Loafy Building x Tibeauthetraveler x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/3. Busyland (feat. Tibeauthetraveler & Mondo Loops) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Floods of Calm",
        artist: "Loafy Building x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/4. Floods of Calm (feat. Mondo Loops).mp3",
        forPart: AllPartType
    },
    {
        title: "Navy Skies",
        artist: "Loafy Building x Ayzic",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/5. Navy Skies (feat. Ayzic).mp3",
        forPart: AllPartType
    },
    {
        title: "Shelter",
        artist: "Loafy Building x w00ds",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/6. Shelter (feat. w00ds) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "Camden to Chinatown",
        artist: "Loafy Building x Raimu",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/7. Camden to Chinatown (feat. Raimu).mp3",
        forPart: AllPartType
    },
    {
        title: "Somewhere",
        artist: "Loafy Building x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/8. Somewhere (feat. Mondo Loops) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "True Colours",
        artist: " Loafy Building x ticofaces x Socrab",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/9. True Colours (feat. ticofaces & Socrab) (M).mp3",
        forPart: AllPartType
    },
    {
        title: "My Happy Place",
        artist: "Loafy Building x Kainbeats",
        file: "/audio/lofigirl/MP3 - Loafy Building - Shelter/10. My Happy Place (feat. Kainbeats) (M).mp3",
        forPart: AllPartType
    },
    // "A place above heaven",
    {
        title: "Safest place on earth",
        artist: "aMess x cxlt.",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Safest place on earth.mp3",
        forPart: AllPartType
    },
    {
        title: "Final moments",
        artist: "aMess x kokoro",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Final moments.mp3",
        forPart: AllPartType
    },
    {
        title: "Field of flowers",
        artist: "aMess x S N U G",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Field of Flowers.mp3",
        forPart: AllPartType
    },
    {
        title: "I’ll be here in the morning",
        artist: "aMess",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/I'll be here in the morning .mp3",
        forPart: AllPartType
    },
    {
        title: "Dependency",
        artist: "aMess",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Dependancy .mp3",
        forPart: AllPartType
    },
    {
        title: "Friday nights",
        artist: "aMess x amies",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Friday Nights.mp3",
        forPart: AllPartType
    },
    {
        title: "Midnight walk",
        artist: "aMess x cxlt.",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Midnight walk.mp3",
        forPart: AllPartType
    },
    {
        title: "Your cozy home",
        artist: "aMess",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Your cozy home.mp3",
        forPart: AllPartType
    },
    {
        title: "Endless",
        artist: "aMess x Bcalm x Banks",
        file: "/audio/lofigirl/MP3 - aMess - A place above heaven/Endless.mp3",
        forPart: AllPartType
    },
    // "The Inner Light",
    {
        title: "Pure Soul",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Pure Soul.mp3",
        forPart: AllPartType
    },
    {
        title: "Between Worlds",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Between Worlds.mp3",
        forPart: AllPartType
    },
    {
        title: "Imaginary",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Imaginary.mp3",
        forPart: AllPartType
    },
    {
        title: "Komorebi",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Komorebi.mp3",
        forPart: AllPartType
    },
    {
        title: "Overgrown",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Overgrown.mp3",
        forPart: AllPartType
    },
    {
        title: "Healing River",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Healing River.mp3",
        forPart: AllPartType
    },
    {
        title: "Bittersweet Sorrow",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Bittersweet Sorrow.mp3",
        forPart: AllPartType
    },
    {
        title: "Butterfly Lullaby",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Butterfly Lullaby.mp3",
        forPart: AllPartType
    },
    {
        title: "Warm Sleep",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Warm Sleep.mp3",
        forPart: AllPartType
    },
    {
        title: "Light",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Tenno - The Inner Light/Light.mp3",
        forPart: AllPartType
    },
    // "Enchantments",
    {
        title: "Aisuru",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Aisuru.mp3",
        forPart: AllPartType
    },
    {
        title: "Evening Rain",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Evening Rain.mp3",
        forPart: AllPartType
    },
    {
        title: "Heart of Sakura",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Heart of Sakura.mp3",
        forPart: AllPartType
    },
    {
        title: "The Secret Road",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/The Secret Road.mp3",
        forPart: AllPartType
    },
    {
        title: "Pure Dream",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Pure Dream.mp3",
        forPart: AllPartType
    },
    {
        title: "Allure",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Allure.mp3",
        forPart: AllPartType
    },
    {
        title: "Quiet Whisper",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Quite Whisper.mp3",
        forPart: AllPartType
    },
    {
        title: "A While Ago",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/A While Ago.mp3",
        forPart: AllPartType
    },
    {
        title: "Place I’ve Never Been Before",
        artist: "DaniSogen",
        file: "/audio/lofigirl/MP3 - DaniSogen - Enchantments/Place I've never been before.mp3",
        forPart: AllPartType
    },
    // "Shifting Past",
    {
        title: "Come Around",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Come Around .mp3",
        forPart: AllPartType
    },
    {
        title: "Gentle Soul",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Gentle Soul.mp3",
        forPart: AllPartType
    },
    {
        title: "Open Gates",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Open Gates .mp3",
        forPart: AllPartType
    },
    {
        title: "Softened",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Softened .mp3",
        forPart: AllPartType
    },
    {
        title: "Takeoff",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Takeoff .mp3",
        forPart: AllPartType
    },
    {
        title: "Wavelength",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Wavelength .mp3",
        forPart: AllPartType
    },
    {
        title: "Awakened Mind",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Awakened Mind .mp3",
        forPart: AllPartType
    },
    {
        title: "Bloom",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Bloom.mp3",
        forPart: AllPartType
    },
    {
        title: "Shifting",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Shifting .mp3",
        forPart: AllPartType
    },
    {
        title: "Sunrise",
        artist: "Kaspa. x Softy",
        file: "/audio/lofigirl/MP3 - Kaspa. x Softy - Shifting Past/Kaspa. x softy - Sunrise .mp3",
        forPart: AllPartType
    },
    // "dream tapes",
    {
        title: "been waiting for you",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - been waiting for you.mp3",
        forPart: AllPartType
    },
    {
        title: "i don’t wanna grow old",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - i dont wanna grow old.mp3",
        forPart: AllPartType
    },
    {
        title: "white leaf",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - white leaf.mp3",
        forPart: AllPartType
    },
    {
        title: "just around the corner",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - just around the corner.mp3",
        forPart: AllPartType
    },
    {
        title: "gaze",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - gaze.mp3",
        forPart: AllPartType
    },
    {
        title: "i’m your fallen soldier",
        artist: "Jhove x kokoro",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "when i close my eyes",
        artist: "Jhove x Dillan Witherow",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - when i close my eyes (ft. dillan witherow).mp3",
        forPart: AllPartType
    },
    {
        title: "please, never let go",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - please, never let go.mp3",
        forPart: AllPartType
    },
    {
        title: "i can’t find my mask",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Jhove - dream tapes/jhove - i cant find my mask.mp3",
        forPart: AllPartType
    },
    // "Notes from Yesterday",
    {
        title: "just you",
        artist: "Swink",
        file: "/audio/lofigirl/MP3 - Swink - Notes form Yesterday/1 - Just you.mp3",
        forPart: AllPartType
    },
    {
        title: "leaves fly away",
        artist: "Swink",
        file: "/audio/lofigirl/MP3 - Swink - Notes form Yesterday/2 - leaves fly away.mp3",
        forPart: AllPartType
    },
    {
        title: "afternoon in the park",
        artist: "Swink",
        file: "/audio/lofigirl/MP3 - Swink - Notes form Yesterday/3 - afternoon in the park.mp3",
        forPart: AllPartType
    },
    {
        title: "haku",
        artist: "Swink",
        file: "/audio/lofigirl/MP3 - Swink - Notes form Yesterday/4 - haku.mp3",
        forPart: AllPartType
    },
    {
        title: "sleepin in the park",
        artist: "Swink",
        file: "/audio/lofigirl/MP3 - Swink - Notes form Yesterday/5 - sleepin in the park.mp3",
        forPart: AllPartType
    },
    {
        title: "the end of fall",
        artist: "Swink",
        file: "/audio/lofigirl/MP3 - Swink - Notes form Yesterday/6 - the end of fall.mp3",
        forPart: AllPartType
    },
    // "Creating Memories",
    {
        title: "Creating Memories",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - Creating Memories.mp3",
        forPart: AllPartType
    },
    {
        title: "Drift Away",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - Drift Away.mp3",
        forPart: AllPartType
    },
    {
        title: "Dreaming About It",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - Dreaming About It.mp3",
        forPart: AllPartType
    },
    {
        title: "Perspectives",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - Perspectives.mp3",
        forPart: AllPartType
    },
    {
        title: "Leaves",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - Leaves.mp3",
        forPart: AllPartType
    },
    {
        title: "At Night",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - At Night.mp3",
        forPart: AllPartType
    },
    {
        title: "I Thought We Were Friends",
        artist: "Yasumu",
        file: "/audio/lofigirl/MP3 - Yasumu - Creating Memories/Yasumu - I Thought We Were Friends.mp3",
        forPart: AllPartType
    },
    // "Dreamscapes",
    {
        title: "The Last Time",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - The Last Time.mp3",
        forPart: AllPartType
    },
    {
        title: "Stargazing",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Stargazing.mp3",
        forPart: AllPartType
    },
    {
        title: "Growing Up",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Growing Up.mp3",
        forPart: AllPartType
    },
    {
        title: "Fireflies",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Fireflies.mp3",
        forPart: AllPartType
    },
    {
        title: "Echoes Of The Past",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Echoes Of The Past.mp3",
        forPart: AllPartType
    },
    {
        title: "Sternbilder",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Sternbilder.mp3",
        forPart: AllPartType
    },
    {
        title: "Passing Lights",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Passing Lights.mp3",
        forPart: AllPartType
    },
    {
        title: "Memory Lane",
        artist: "Kayou.",
        file: "/audio/lofigirl/MP3 - Kayou - Dreamscapes/Kayou. - Memory Lane.mp3",
        forPart: AllPartType
    },
    // "Ethereal Nights",
    {
        title: "Ocean Planet",
        artist: "SCayos x Barnes Blvd.",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/01 Ocean Planet w_ Barnes Blvd MASTER (online-audio-converter.com).mp3",
        forPart: AllPartType
    },
    {
        title: "Horizon",
        artist: "SCayos",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/02 Horizon MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Andromeda",
        artist: "SCayos",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/03 Andromeda MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Astro",
        artist: "SCayos x frumhere x Hixon Foster",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/04 Astro w_ Frumhere & Hixon Foster MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Satellite",
        artist: "SCayos",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/05 Satellite MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Galaxy",
        artist: "SCayos x Phlocalyst",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/06 Galaxy w_ Phlocalyst MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Nebula",
        artist: "SCayos",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/07 Nebula MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Interstellar",
        artist: "SCayos x Strehlow",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/08 Interstellar w_ Strehlow MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Lunar Souls",
        artist: "SCayos x Interlude",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/09 Lunar Souls (Interlude) MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Spacecraft",
        artist: "SCayos x frumhere",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/10 Spacecraft w_ Frumhere MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Ethereal Nights",
        artist: "SCayos",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/11 Ethereal Nights MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonshine",
        artist: "SCayos x Hixon Foster",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/12 Moonshine w_ Hixon Foster MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Orion",
        artist: "SCayos x Azayaka",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/13 Orion w_ Azayaka MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Moondrops",
        artist: "SCayos x Phlocalyst",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/14 Moondrops w_ Phlocalyst MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Constellations",
        artist: "SCayos",
        file: "/audio/lofigirl/MP3 - SCayos - Ethereal Nights/15 Constellations MASTER.mp3",
        forPart: AllPartType
    },
    // "Forest Tales",
    {
        title: "Dusty Records",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/1) Dusty Records.mp3",
        forPart: AllPartType
    },
    {
        title: "Essence of the Forest",
        artist: "Mondo Loops x Purrple Cat",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/2) Essence of the Forest - w Purple Cat.mp3",
        forPart: AllPartType
    },
    {
        title: "Kyoshi",
        artist: "Mondo Loops x L.Dre",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/3) Kyoshi (Ft L.Dre).mp3",
        forPart: AllPartType
    },
    {
        title: "Secret Forest",
        artist: "Mondo Loops x softy",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/4) Secret Forest (Ft Softy_.mp3",
        forPart: AllPartType
    },
    {
        title: "Have Hope",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/5) Have Hope.mp3",
        forPart: AllPartType
    },
    {   // ファイル名とタイトルが一致しない。
        title: "Suntory Time",
        artist: "Mondo Loops x WYS",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Old Dee",
        artist: "Mondo Loops x Kanisan",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/7) Old Dee Ft Kanisan.mp3",
        forPart: AllPartType
    },
    {
        title: "A Journey In The Dark",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/8) A Journey In The Dark.mp3",
        forPart: AllPartType
    },
    {
        title: "Treasures In The Cave",
        artist: "Mondo Loops x softy",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/9) Treasures In The Cave Ft Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Visions In The Trees",
        artist: "Mondo Loops x Kanisan",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/10) Visions In The Trees Ft Kanisan.mp3",
        forPart: AllPartType
    },
    {
        title: "End Of The Water",
        artist: "Mondo Loops x L.Dre",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/11) End Of The Water (Ft L.Dre).mp3",
        forPart: AllPartType
    },
    {
        title: "Videotapes",
        artist: "Mondo Loops",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/12) Videotapes.mp3",
        forPart: AllPartType
    },
    {
        title: "Forgotten Riddles",
        artist: "Mondo Loops x Kanisan",
        file: "/audio/lofigirl/MP3 - Mondo Loops - Forest Tales/13) Forgotten Riddles Ft Kanisan.mp3",
        forPart: AllPartType
    },
    // "Simple Things",
    {
        title: "Thinking of You",
        artist: "Oatmello",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/01_Thinking of You.mp3",
        forPart: AllPartType
    },
    {
        title: "Dark Chocolate",
        artist: "Oatmello x Slo Loris",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/02_Dark Chocolate with Slo Loris.mp3",
        forPart: AllPartType
    },
    {
        title: "Gentle Breeze",
        artist: "Oatmello x TyLuv. x Dillion Witherow",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/03_Gentle Breeze with Tyluv and Dillon Witherow.mp3",
        forPart: AllPartType
    },
    {
        title: "Fresh Snow",
        artist: "Oatmello",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/04_Fresh Snow.mp3",
        forPart: AllPartType
    },
    {
        title: "Hot Coffee",
        artist: "Oatmello x SCayos",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/05_Hot Coffee with Scayos.mp3",
        forPart: AllPartType
    },
    {
        title: "Watching the Stars",
        artist: "Oatmello",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/06_Watching the Stars.mp3",
        forPart: AllPartType
    },
    {
        title: "Ocean Sunset",
        artist: "Oatmello",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/07_Ocean Sunset.mp3",
        forPart: AllPartType
    },
    {
        title: "Afternoon Nap",
        artist: "Oatmello",
        file: "/audio/lofigirl/MP3 - Oatmello - Simple Things/08_Afternoon Nap.mp3",
        forPart: AllPartType
    },
    // "After Sunset",
    {
        title: "After Sunset",
        artist: "Living Room x Viktor Minsky",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Viktor Minsky - After Sunset MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Friendship",
        artist: "Living Room x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Mondo Loops - Friendship MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Big Dreams",
        artist: "Living Room x Otaam",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Otaam - Big Dreams MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "The Night Is Full Of Wonders",
        artist: "Living Room x mell-ø",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Mell-o - The Night Is Full Of Wonders MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Prayer",
        artist: "Living Room x Viktor Minsky x Rosoul",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Rosoul x Viktor Minsky - Prayer MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Bright Future",
        artist: "Living Room x Phlocalyst",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Phlocalyst - Bright Future MASTER (1).mp3",
        forPart: AllPartType
    },
    {
        title: "Seven",
        artist: "Living Room x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Mondo Loops - Seven MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Northern Tales",
        artist: "Living Room x Epona",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Elior - Northern Tales MASTER2.mp3",
        forPart: AllPartType
    },
    {
        title: "Purple Sky",
        artist: "Living Room x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Mondo Loops - Purple Sky MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonflowers",
        artist: "Living Room x Akīn",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Akin - Moonflowers MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Movie",
        artist: "Living Room x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Living Room - After Sunset/Living Room x Mondo Loops - Movie MASTER.mp3",
        forPart: AllPartType
    },
    // "Springtime, with friends",
    {
        title: "i got u",
        artist: "tender spring x another silent weekend x Blue Wednesday",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/i got u w. asw & blue wednesday.mp3",
        forPart: AllPartType
    },
    {
        title: "springtime, with friends",
        artist: "tender spring x biniou",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/springtime, with friends w. biniou.mp3",
        forPart: AllPartType
    },
    {
        title: "last sunset",
        artist: "tender spring x Towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/last sunset w towerz & edelwize.mp3",
        forPart: AllPartType
    },
    {
        title: "slow melt",
        artist: "tender spring x another silent weekend x INKY!",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/slow melt w asw & INKY!.mp3",
        forPart: AllPartType
    },
    {
        title: "holding",
        artist: "tender spring x Tatami Construct",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/holding hams w tatami construct (1).mp3",
        forPart: AllPartType
    },
    {
        title: "plucky",
        artist: "tender spring x Blurred Figures",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/plucky w blurred figures.mp3",
        forPart: AllPartType
    },
    {
        title: "snowstorm in april",
        artist: "tender spring x biniou x chief.",
        file: "/audio/lofigirl/MP3 - Tender Spring - Springtime, with friends/snowstorm in april w. chief & biniou.mp3",
        forPart: AllPartType
    },
    // "Quietude",
    {
        title: "Circadian",
        artist: "S N U G x Enluv",
        file: "/audio/lofigirl/MP3 - S N U G - Quietude/1. circadian ft. Enluv.mp3",
        forPart: AllPartType
    },
    {
        title: "Equinox",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Quietude/3. equinox.mp3",
        forPart: AllPartType
    },
    {
        title: "4. fireflies",
        artist: "S N U G x Dimension 32",
        file: "/audio/lofigirl/MP3 - S N U G - Quietude/7. fireflies ft. Dimension 32.mp3",
        forPart: AllPartType
    },
    {
        title: "5. mahogany",
        artist: "S N U G x Mondo Loops",
        file: "/audio/lofigirl/MP3 - S N U G - Quietude/8. mahogany ft. Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "7. Lustre",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Quietude/5. lustre.mp3",
        forPart: AllPartType
    },
    // "Silk",
    {
        title: "Summer Rain",
        artist: "iamalex x Felty",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/1. iamalex & Felty - Summer Rain.mp3",
        forPart: AllPartType
    },
    {
        title: "Kiss Me",
        artist: "iamalex x Felty x Blossum",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/2. iamalex & Felty - Kiss Me (Feat. Blossum) .mp3",
        forPart: AllPartType
    },
    {
        title: "Desert",
        artist: "iamalex x Felty",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/3. iamalex & Felty - Desert.mp3",
        forPart: AllPartType
    },
    {
        title: "Fields",
        artist: "iamalex x Felty x Jhove",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/4. iamalex & Felty - Fields (Feat. Jhove).mp3",
        forPart: AllPartType
    },
    {
        title: "On A Cloud",
        artist: "iamalex x Felty",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/5. iamalex & Felty - On A Cloud.mp3",
        forPart: AllPartType
    },
    {
        title: "Sunday Sleeping",
        artist: "iamalex x Felty",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/6. iamalex & Felty - Sunday Sleeping.mp3",
        forPart: AllPartType
    },
    {
        title: "Far From Home",
        artist: "iamalex x Felty",
        file: "/audio/lofigirl/MP3 - iamalex x Felty - Silk/7. iamalex & Felty - Far From Home.mp3",
        forPart: AllPartType
    },
    // "Inference",
    {
        title: "Divine",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Divine.mp3",
        forPart: AllPartType
    },
    {
        title: "Slow Down",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Slow Down.mp3",
        forPart: AllPartType
    },
    {
        title: "Beacon",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Beacon.mp3",
        forPart: AllPartType
    },
    {
        title: "Traffic Lights",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Traffic Lights.mp3",
        forPart: AllPartType
    },
    {
        title: "Bird Watcher",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Bird Watcher.mp3",
        forPart: AllPartType
    },
    {
        title: "94",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/94 new.mp3",
        forPart: AllPartType
    },
    {
        title: "Graze",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Graze.mp3",
        forPart: AllPartType
    },
    {
        title: "Breakaway",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Breakaway.mp3",
        forPart: AllPartType
    },
    {
        title: "Flash",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Flash.mp3",
        forPart: AllPartType
    },
    {
        title: "Butterflies",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Butterflies.mp3",
        forPart: AllPartType
    },
    {
        title: "Lockdown",
        artist: "Mavine",
        file: "/audio/lofigirl/MP3 - Mavine - Inference/Lockdown.mp3",
        forPart: AllPartType
    },
    // "Before It’s Late, Pt. 2",
    {
        title: "Morning Brew",
        artist: "Hevi x Paper Ocean",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Morning Brew (feat. Paper Ocean).mp3",
        forPart: AllPartType
    },
    {
        title: "Summer Evenings",
        artist: "Hevi x Dimension32",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Summer Evenings (feat. Dimension32).mp3",
        forPart: AllPartType
    },
    {
        title: "Warm Waves",
        artist: "Hevi x Hoogway",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Warm Waves (feat. Hoogway).mp3",
        forPart: AllPartType
    },
    {
        title: "Looking Back",
        artist: "Hevi x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Looking Back (feat. Mondo Loops).mp3",
        forPart: AllPartType
    },
    {
        title: "And Then I Woke Up",
        artist: "Hevi x no one’s perfect",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/and then i woke up (feat. no one's perfect).mp3",
        forPart: AllPartType
    },
    {
        title: "Dusk",
        artist: "Hevi x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Dusk (feat. Lawrence Walther).mp3",
        forPart: AllPartType
    },
    {
        title: "Circles",
        artist: "Hevi x Kurt Stewart",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Circles (feat. Kurt Stewart).mp3",
        forPart: AllPartType
    },
    {
        title: "Ghosts",
        artist: "Hevi x no one’s perfect",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/ghosts (feat. no one's perfect).mp3",
        forPart: AllPartType
    },
    {
        title: "Drift",
        artist: "Hevi x no one’s perfect",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/Drift (feat. no one's perfect).mp3",
        forPart: AllPartType
    },
    {
        title: "Homecoming",
        artist: "Hevi x Bert",
        file: "/audio/lofigirl/MP3 - Hevi - Before It's Late, Pt. 2/homecoming (feat. Bert).mp3",
        forPart: AllPartType
    },
    // "Distance Love",
    {
        title: "miss you",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/1. miss you (master).mp3",
        forPart: AllPartType
    },
    {
        title: "good morning, love",
        artist: "Tibeauthetraveler x Hoogway",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/2. good morning, love (ft. Hoogway) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "soul searching",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/3. soul searching (master).mp3",
        forPart: AllPartType
    },
    {
        title: "bloom",
        artist: "Tibeauthetraveler x Krynoze",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/4. bloom (ft. Krynoze) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "looking at the moon",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/5. looking at the moon (master).mp3",
        forPart: AllPartType
    },
    {
        title: "faraway",
        artist: "Tibeauthetraveler x Antonius B",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/6. faraway (ft. Antonius B) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "come closer",
        artist: "Tibeauthetraveler ",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/7. come closer (master).mp3",
        forPart: AllPartType
    },
    {
        title: "your eyes",
        artist: "Tibeauthetraveler x JinSei x Sam Cross",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/8. your eyes (ft. JinSei & Sam Cross) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "station to station",
        artist: "Tibeauthetraveler x Banks x Bcalm",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/9. station to station (ft. Banks & Bcalm) (master).mp3",
        forPart: AllPartType
    },
    {
        title: "it’s ok",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Tibeauthetraverler - Distance Love/10. It's ok (master).mp3",
        forPart: AllPartType
    },
    // "Alley Of Trees",
    {
        title: "Alley of Trees",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Alley Of Trees x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Words on Water",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Words On Water x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Only You",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Only You x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Saudade",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Saudade x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Lune",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Lune x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Seaside Farewell",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Seaside Farewell x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Les Nuages",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Nuages x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Open Skies",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Open Skies.mp3",
        forPart: AllPartType
    },
    {
        title: "Frozen Waters",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Frozen Waters x Softy .mp3",
        forPart: AllPartType
    },
    {
        title: "Faded Hills",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Faded Hills x Softy.mp3",
        forPart: AllPartType
    },
    {
        title: "Golden Lakes",
        artist: "Hoogway x Softy",
        file: "/audio/lofigirl/MP3 - HoogWay x Softy - Alley of Trees/Golden Lakes x Softy.mp3",
        forPart: AllPartType
    },
    // "A Spirit’s Tale",
    {
        title: "Distant Voices",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x møndberg - Distant Voices.mp3",
        forPart: AllPartType
    },
    {
        title: "Memories",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x møndberg - Memories.mp3",
        forPart: AllPartType
    },
    {
        title: "Wisdom",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x møndberg - Wisdom.mp3",
        forPart: AllPartType
    },
    {
        title: "Letting Go",
        artist: "BVG x møndberg x Trix.",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x Trix. - Letting Go (ft.møndberg).mp3",
        forPart: AllPartType
    },
    {
        title: "Moon Lake",
        artist: "BVG x Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x Tibeauthetraveler - Moon Lake.mp3",
        forPart: AllPartType
    },
    {
        title: "Solemn Winds",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x møndberg - Solemn Winds.mp3",
        forPart: AllPartType
    },
    {
        title: "Sands Of Time",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x møndberg - Sands Of Time.mp3",
        forPart: AllPartType
    },
    {
        title: "The Other Side",
        artist: "BVG",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG - The Other Side.mp3",
        forPart: AllPartType
    },
    {
        title: "Serenity",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - BVG - A Spirit's Tale/BVG x møndberg - Serenity.mp3",
        forPart: AllPartType
    },
    // "Time To Go", ダウンロードリンクなし
    // {
    //   title: "Drift Away",
    //   artist: "mell-ø x Ambulo",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Clocks",
    //   artist: "mell-ø",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Alder",
    //   artist: "mell-ø",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Forest Trails",
    //   artist: "mell-ø x no one's perfect",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Currents",
    //   artist: "mell-ø x mtch.",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Away From Home",
    //   artist: "mell-ø",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Northern Lights",
    //   artist: "mell-ø x Osaki",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Passage",
    //   artist: "mell-ø x Ambulo",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // "Lost World",
    {
        title: "Lost World",
        artist: "squeeda",
        file: "/audio/lofigirl/MP3 - Squeeda - Lost World/1 Lost World.mp3",
        forPart: AllPartType
    },
    {
        title: "Summer Eyes",
        artist: "squeeda x No Spirit",
        file: "/audio/lofigirl/MP3 - Squeeda - Lost World/2 Summer Eyes (w No Spirit).mp3",
        forPart: AllPartType
    },
    {
        title: "Timepaint",
        artist: "squeeda",
        file: "/audio/lofigirl/MP3 - Squeeda - Lost World/3 Timepaint.mp3",
        forPart: AllPartType
    },
    {
        title: "Field Trip",
        artist: "squeeda",
        file: "/audio/lofigirl/MP3 - Squeeda - Lost World/4 Field Trip.mp3",
        forPart: AllPartType
    },
    {
        title: "Invisible Medicine",
        artist: "squeeda x Enluv",
        file: "/audio/lofigirl/MP3 - Squeeda - Lost World/5 Invisible Medicine (w Enluv).mp3",
        forPart: AllPartType
    },
    {
        title: "Dreamsand",
        artist: "squeeda x Ambulo",
        file: "/audio/lofigirl/MP3 - Squeeda - Lost World/6 Dreamsand (w Ambulo).mp3",
        forPart: AllPartType
    },
    // "The Way Back", ダウンロードリンクがない
    // {
    //   title: "The Way Back",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Silver Silver",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Spanish Castle",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Blazing Sun",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "After The Storm",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Western Point",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Wild Horses",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Everything We Left",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Heartland",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Diamond Dust",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Harbour",
    //   artist: "WYS x Sweet Medicine",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // "Soothing Breeze",
    {
        title: "Cherry Tree",
        artist: "Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/01 Tibeauthetraveler - Cherry Tree (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "The Guiding Wind",
        artist: "Tenno",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/02 Tenno - The Guiding Wind (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Kaigan",
        artist: "Raimu x Tophat Panda",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/03 Raimu _ Tophat Panda - Kaigan (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Windmills",
        artist: "Ambulo",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/04 Ambulo - Windmills  (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Shibui",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/05 jhove - shibui (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Mystic Mountain",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/06 Purrple Cat - Mystic Mountain (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "In Love With The Sky",
        artist: "Raimu x DaniSogen",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/07 Raimu _ DaniSogen - In Love With The Sky (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "The View From The Monastery",
        artist: "Celestial Alignment",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/08 Celestial Alignment - The View From The Monastery (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Winter Gardens",
        artist: " Midnight Alpha x Nothingtosay",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/09 Midnight Alpha - Winter Gardens (w Nothingtosay) (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Lushan Sun",
        artist: "Sweet Medicine",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/10 Sweet Medicine - Lushan Sun (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Wander",
        artist: "Dryhope",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/11 Dryhope - Wander (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Until Dawn",
        artist: "Kanisan",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/12 Kanisan - Until Dawn (Kupla Master 2.0).mp3",
        forPart: AllPartType
    },
    {
        title: "West Of Zhuhai",
        artist: "Yestalgia x Loafy Building",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/13 Yestalgia X Loafy Building - West Of Zhuhai (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "The Path You Choose",
        artist: "BVG",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/14 BVG - The Path You Choose (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Neon TIger",
        artist: "Purrple Cat",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/15 Purrple Cat - Neon Tiger (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Tsuyu",
        artist: "Otaam x C4C",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/16 Otaam x C4C - Tsuyu (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Waterfall",
        artist: "BVG x møndberg",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/17 BVG x møndberg - Waterfall (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Koi",
        artist: "Phlocalyst x Living Room x Myríad",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/18 Phlocalyst _ Living Room _ Myríad - Koi (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Fuji",
        artist: "Living Room x Otaam ",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/19 Living Room x Otaam - Fuji (Kupla Master).mp3",
        forPart: AllPartType
    },
    {
        title: "Danso Lullaby",
        artist: "Mondo Loops x softy",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/20 Mondo Loops - Danso Lullaby (w Softy) (Kupla MAster).mp3",
        forPart: AllPartType
    },
    {
        title: "High Sun",
        artist: "Jhove",
        file: "/audio/lofigirl/MP3 - Compilation 7 - Soothing Breeze/21 Jhove- High Sun (Kupla Master).mp3",
        forPart: AllPartType
    },
    // "Cloud Shapes", ダウンロードリンクがない
    // {
    //   title: "Parhelia",
    //   artist: "Leavv",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Cloud Shapes",
    //   artist: "Leavv",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Backyard Shower",
    //   artist: "Leavv",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Fields",
    //   artist: "Leavv",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Travelogue",
    //   artist: "Leavv x C4C",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // "Better Days",
    {
        title: "Panacea",
        artist: "Mujo x Sweet Medicine x juniorodeo",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/01 - Mujo x Sweet Medicine x juniorodeo - Panacea MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Everything Gone",
        artist: "Mujo x Sweet Medicine x Jhove",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/02 - Mujo x Sweet Medicine x Jhove - Everything Gone MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Flooded With Light",
        artist: "Mujo x Sweet Medicine",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/03 - Mujo x Sweet Medicine - Flooded With Light MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Backwards",
        artist: "Mujo x Sweet Medicine x Purrple Cat",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/04 - Mujo x Sweet Medicine x Purrple Cat - Backwards MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Evergreen",
        artist: "Mujo x Sweet Medicine x G Mills",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/05 - Mujo x Sweet Medicine x G Mills - Evergreen MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "All The Good Times",
        artist: "Mujo x Sweet Medicine x Hoogway",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/06 - Mujo x Sweet Medicine x Hoogway - All The Good Times MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Peace Of Mind",
        artist: "Mujo x Sweet Medicine",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/07 - Mujo x Sweet Medicine - Peace Of Mind MASTER.mp3",
        forPart: AllPartType
    },
    {
        title: "Healing Winds",
        artist: "Mujo x Sweet Medicine",
        file: "/audio/lofigirl/MP3 - Mujo x Sweet Medicine - Better Days/08 - Mujo x Sweet Medicine - Healing Winds MASTER.mp3",
        forPart: AllPartType
    },
    // "blindsighted",
    {
        title: "clear eyes, blind sight",
        artist: "Kainbeats",
        file: "/audio/lofigirl/MP3 - kainbeats - blindsighted/1. clear eyes, blind sight.mp3",
        forPart: AllPartType
    },
    {
        title: "where light can’t reach",
        artist: "Kainbeats x Sleepermane",
        file: "/audio/lofigirl/MP3 - kainbeats - blindsighted/2. where light can_t reach (ft. Sleepermane).mp3",
        forPart: AllPartType
    },
    {
        title: "timeless gift",
        artist: "Kainbeats x Hoogway",
        file: "/audio/lofigirl/MP3 - kainbeats - blindsighted/3. timeless gift ft. Hoogway mastered.mp3",
        forPart: AllPartType
    },
    {
        title: "something dear",
        artist: "Kainbeats x Towerz",
        file: "/audio/lofigirl/MP3 - kainbeats - blindsighted/4. something dear (ft. Towerz).mp3",
        forPart: AllPartType
    },
    {
        title: "beauty in everything",
        artist: "Kainbeats",
        file: "/audio/lofigirl/MP3 - kainbeats - blindsighted/5. beauty in everything.mp3",
        forPart: AllPartType
    },
    {
        title: "lovely glow",
        artist: "Kainbeats",
        file: "/audio/lofigirl/MP3 - kainbeats - blindsighted/6. lovely glow.mp3",
        forPart: AllPartType
    },
    // "One Way Ticket",
    {
        title: "One Way Ticke",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/1.One Way Ticket.mp3",
        forPart: AllPartType
    },
    {
        title: "Warm Country",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/2.Warm Country.mp3",
        forPart: AllPartType
    },
    {
        title: "Summer Nights",
        artist: "l’Outlander x Pandrezz",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/3.Summer Nights ft.Pandrezz.mp3",
        forPart: AllPartType
    },
    {
        title: "Hamsin",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/4.Hamsin.mp3",
        forPart: AllPartType
    },
    {
        title: "City On A Hill",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/5.City On A Hill.mp3",
        forPart: AllPartType
    },
    {
        title: "Soul Searching",
        artist: "l’Outlander",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/6.Soul Searching.mp3",
        forPart: AllPartType
    },
    {
        title: "Forever Young",
        artist: "l’Outlander x hoogway",
        file: "/audio/lofigirl/MP3 - l'outlander - One Way Ticket/7.Forever Young ft.hoogway.mp3",
        forPart: AllPartType
    },
    // "Feelin Better",
    {
        title: "I Hope U Feel Better Now",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/1. i hope u feel better now.mp3",
        forPart: AllPartType
    },
    {
        title: "Friday Night With You",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/2. Friday Night With You.mp3",
        forPart: AllPartType
    },
    {
        title: "Shivers",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/3. Shivers.mp3",
        forPart: AllPartType
    },
    {
        title: "Feelin Warm",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/4. Feelin Warm-1.mp3",
        forPart: AllPartType
    },
    {
        title: "Misty Village",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/5. Pandrezz - Misty Village.mp3",
        forPart: AllPartType
    },
    {
        title: "Could Have Done More",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/6. Could Have Done More.mp3",
        forPart: AllPartType
    },
    {
        title: "Beginner",
        artist: "Pandrezz x Kronomuzik",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/7. Beginner (ft Kronomuzik).mp3",
        forPart: AllPartType
    },
    {
        title: "Single Star",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/8. Single Star.mp3",
        forPart: AllPartType
    },
    {
        title: "Lonely Friday Night",
        artist: "Pandrezz",
        file: "/audio/lofigirl/MP3 - Pandrezz - Feelin Better/9. Lonely Friday Night.mp3",
        forPart: AllPartType
    },
    // "Elements",
    {
        title: "times with you",
        artist: "Bcalm x softy",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/1. Bcalm _ softy - times with you.mp3",
        forPart: AllPartType
    },
    {
        title: "skyblue",
        artist: "Bcalm x Purrple Cat",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/2. Bcalm _ Purrple Cat - skyblue.mp3",
        forPart: AllPartType
    },
    {
        title: "cutie",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/3. Bcalm _ Banks - cutie.mp3",
        forPart: AllPartType
    },
    {
        title: "traveller",
        artist: "Bcalm x Purrple Cat",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/4. Bcalm _ Purrple Cat - traveller.mp3",
        forPart: AllPartType
    },
    {
        title: "rose fields",
        artist: "Bcalm x Banks",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/5. Bcalm _ Banks - rose fields.mp3",
        forPart: AllPartType
    },
    {
        title: "pebbles",
        artist: "Bcalm x Banks x Mondo Loops",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/6. Bcalm _ Banks _ Mondo Loops - pebbles.mp3",
        forPart: AllPartType
    },
    {
        title: "within",
        artist: "Bcalm x Hoogway",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/7. Bcalm _ Hoogway - within.mp3",
        forPart: AllPartType
    },
    {
        title: "signals",
        artist: "Bcalm x Kainbeats",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/8. Bcalm _ Kainbeats - signals.mp3",
        forPart: AllPartType
    },
    {
        title: "daisy",
        artist: "Bcalm x Banks x Purrple Cat",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/9. Bcalm _ Banks _ Purrple Cat - daisy.mp3",
        forPart: AllPartType
    },
    {
        title: "hope",
        artist: "Bcalm x Purrple Cat",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/10. Bcalm _ Purrple Cat - hope.mp3",
        forPart: AllPartType
    },
    {
        title: "your eyes",
        artist: "Bcalm x Banks x No Spirit",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/11. Bcalm _ Banks _ No Spirit - your eyes.mp3",
        forPart: AllPartType
    },
    {
        title: "time",
        artist: "Bcalm x Hendy",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/12. Bcalm _ Hendy - time.mp3",
        forPart: AllPartType
    },
    {
        title: "traces",
        artist: "Bcalm x cxl",
        file: "/audio/lofigirl/MP3 - Bcalm - Elements/13. Bcalm _ cxlt - traces.mp3",
        forPart: AllPartType
    },
    // "At Long Last",
    {
        title: "from me to you",
        artist: "towerz x edelwize x kokoro",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/1. towerz _ edelwize ft. kokoro - from me to you.mp3",
        forPart: AllPartType
    },
    {
        title: "day by day",
        artist: "towerz x edelwize x spencer hunt",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/2. towerz _ edelwize ft. spencer hunt - day by day.mp3",
        forPart: AllPartType
    },
    {
        title: "reckless",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/3. towerz _ edelwize - reckless.mp3",
        forPart: AllPartType
    },
    {
        title: "tomorrow never came",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/4. towerz _ edelwize - tomorrow never came.mp3",
        forPart: AllPartType
    },
    {
        title: "in the cold",
        artist: "towerz x edelwize x spencer hunt",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/5. towerz _ edelwize ft. spencer hunt - in the cold.mp3",
        forPart: AllPartType
    },
    {
        title: "trusting hands",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/6. towerz _ edelwize - trusting hands.mp3",
        forPart: AllPartType
    },
    {
        title: "at long last",
        artist: "towerz x edelwize x umbriel ",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/7. towerz _ edelwize ft. umbriel - at long last.mp3",
        forPart: AllPartType
    },
    {
        title: "mayflower",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/8. towerz _ edelwize - mayflower.mp3",
        forPart: AllPartType
    },
    {
        title: "sandscape",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/9. towerz _ edelwize - sandscape.mp3",
        forPart: AllPartType
    },
    {
        title: "soft hands",
        artist: "towerz x edelwize x  jhove",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/10. towerz _ edelwize ft. jhove - soft hands.mp3",
        forPart: AllPartType
    },
    {
        title: "follow me",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/11. towerz _ edelwize - follow me.mp3",
        forPart: AllPartType
    },
    {
        title: "folding house",
        artist: "towerz x edelwize x hi jude",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/12. towerz _ edelwize ft. hi jude - folding house.mp3",
        forPart: AllPartType
    },
    {
        title: "to fall",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/13. towerz _ edelwize - to fall.mp3",
        forPart: AllPartType
    },
    {
        title: "channel 67",
        artist: "towerz x edelwize",
        file: "/audio/lofigirl/MP3 - Towerz - At Long Last/14. towerz _ edelwize - channel 67.mp3",
        forPart: AllPartType
    },
    // "Blue Hour",
    {
        title: "Places",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/01 - Places.mp3",
        forPart: AllPartType
    },
    {
        title: "Azure",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/02 - Azure.mp3",
        forPart: AllPartType
    },
    {
        title: "Ballads",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/03 - Ballads.mp3",
        forPart: AllPartType
    },
    {
        title: "Velvet",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/04 - Velvet.mp3",
        forPart: AllPartType
    },
    {
        title: "Autumn",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/05 - Autumn.mp3",
        forPart: AllPartType
    },
    {
        title: "Old Feelings",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/06 - Old Feelings.mp3",
        forPart: AllPartType
    },
    {
        title: "Anywhere But Here",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/07 - Anywhere But Here.mp3",
        forPart: AllPartType
    },
    {
        title: "Let Go",
        artist: "ENRA x dr. niar",
        file: "/audio/lofigirl/MP3 - ENRA x dr. niar - Blue Hour/08 - Let Go.mp3",
        forPart: AllPartType
    },
    // "Scenery",
    {
        title: "Scenery",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/1. Scenery (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Childlike Wonder",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/2. Childlike Wonder (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Longing",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/3. Longing (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Holiday",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/4. Holiday (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Memory Lane",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/5. Memory Lane (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Neighbordhood",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/6. Neighborhood (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Whispers",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/7. Whispers (test master).mp3",
        forPart: AllPartType
    },
    {
        title: "Soft Breeze",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/8. Soft Breeze (master).mp3",
        forPart: AllPartType
    },
    {
        title: "Liberate",
        artist: "Tibeauthetraveler x Lawrence Walther",
        file: "/audio/lofigirl/MP3 - Tibeauthetraveler x lawrence - Scenery/9. Liberate (master).mp3",
        forPart: AllPartType
    },
    // "Belonging",
    {
        title: "Horizon",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Forest Friends",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Willow",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Belonging",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Patience",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Teardrops",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Beyond",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    {
        title: "Gentle",
        artist: "Laffey x softy",
        file: "xxxxxxxxxxxx",
        forPart: AllPartType
    },
    // "Ballerina",
    {
        title: "Ballerina",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/1. Ballerina.mp3",
        forPart: AllPartType
    },
    {
        title: "Waterfall",
        artist: "Epona x Elijah Lee",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/2. Waterfall (with Elijah Lee).mp3",
        forPart: AllPartType
    },
    {
        title: "Just Another Day",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/3. Just Another Day.mp3",
        forPart: AllPartType
    },
    {
        title: "Meditations",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/4. Meditations.mp3",
        forPart: AllPartType
    },
    {
        title: "Daisies",
        artist: "Epona x Phlocalyst",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/5. Daisies (with Phlocalyst).mp3",
        forPart: AllPartType
    },
    {
        title: "Wandering",
        artist: "Epona x Epifania",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/6. Wandering (with Epifania).mp3",
        forPart: AllPartType
    },
    {
        title: "Misty",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/7. Misty.mp3",
        forPart: AllPartType
    },
    {
        title: "Monday",
        artist: "Epona x Sebastian Kamae",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/8. Monday (with Sebastian Kamae).mp3",
        forPart: AllPartType
    },
    {
        title: "Rainfall",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/9. Rainfall.mp3",
        forPart: AllPartType
    },
    {
        title: "Strangers",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/10. Strangers.mp3",
        forPart: AllPartType
    },
    {
        title: "Moonlight",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/11. Moonlight.mp3",
        forPart: AllPartType
    },
    {
        title: "My Ocean",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/12. My Ocean.mp3",
        forPart: AllPartType
    },
    {
        title: "Matcha",
        artist: "Epona x Ruby",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/13. Matcha (with Ruby).mp3",
        forPart: AllPartType
    },
    {
        title: "Grounding",
        artist: "Epona x Epifania",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/14. Grounding (with Epifania).mp3",
        forPart: AllPartType
    },
    {
        title: "Drifter",
        artist: "Epona",
        file: "/audio/lofigirl/MP3 - Epona - Ballerina/15. Drifter.mp3",
        forPart: AllPartType
    },
    // "finding comfort",
    {
        title: "snowfall",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/snowfall.mp3",
        forPart: AllPartType
    },
    {
        title: "take it easy",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/take it easy (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "ready when you are",
        artist: "Blurred Figures x another silent weekend x fourwalls",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/ready when you are (ft. fourwalls).mp3",
        forPart: AllPartType
    },
    {
        title: "beige palette",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/beige palette (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "i’m with you",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/im with you.mp3",
        forPart: AllPartType
    },
    {
        title: "no worries",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/no worries (mastered).mp3",
        forPart: AllPartType
    },
    {
        title: "everything goes past",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/everything goes past.mp3",
        forPart: AllPartType
    },
    {
        title: "kermode",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/kermode.mp3",
        forPart: AllPartType
    },
    {
        title: "goodnight",
        artist: "Blurred Figures x another silent weekend",
        file: "/audio/lofigirl/MP3 - Blurred figured x another silent weekend - finding comfort/goodnight.mp3",
        forPart: AllPartType
    },
    // "Sleepovers",
    {
        title: "Cozy Cuddles",
        artist: "LESKY x Sitting Duck x Waywell",
        file: "/audio/lofigirl/MP3 - LESKY - Sleepovers/01 Cozy Cuddles (ft. Sitting Duck _ Waywell).mp3",
        forPart: AllPartType
    },
    {
        title: "White Sheets",
        artist: "LESKY x Phlocalyst x Waywell",
        file: "/audio/lofigirl/MP3 - LESKY - Sleepovers/02 White Sheets (ft. Phlocalyst _ Waywell).mp3",
        forPart: AllPartType
    },
    {
        title: "Bathroom Marble",
        artist: "LESKY x  Akin x Cuebe",
        file: "/audio/lofigirl/MP3 - LESKY - Sleepovers/03 Bathroom Marble (ft. Akin _ Cuebe).mp3",
        forPart: AllPartType
    },
    {
        title: "Midas",
        artist: "LESKY x Waywell",
        file: "/audio/lofigirl/MP3 - LESKY - Sleepovers/04 Midas (ft. Waywell).mp3",
        forPart: AllPartType
    },
    {
        title: "Nightingale",
        artist: "LESKY x M E A D O W x Mowlvoorph",
        file: "/audio/lofigirl/MP3 - LESKY - Sleepovers/05 Nightingale (ft. M e a d o w _ Mowlvoorph).mp3",
        forPart: AllPartType
    },
    {
        title: "Dawnstar",
        artist: "LESKY x Waywell x Phlocalyst x Sátyr",
        file: "/audio/lofigirl/MP3 - LESKY - Sleepovers/06 Dawnstar (ft. Waywell _ Phlocalyst _ Sátyr).mp3",
        forPart: AllPartType
    },
    // "Moments To Keep",
    {
        title: "Blossom",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Blossom x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Inhale",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Inhale x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Keep You Safe",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Keep You Safe x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Haze",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Haze x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Say When",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Say When x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Morning Sun",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Morning Sun x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Late Signs",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Late Signs x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Silhouette",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Silhouettes x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Just Wait",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Just Wait x Nowun.mp3",
        forPart: AllPartType
    },
    {
        title: "Everything We Need",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Everything We Need.mp3",
        forPart: AllPartType
    },
    {
        title: "Moments To Keep",
        artist: "Hoogway x Nowun",
        file: "/audio/lofigirl/MP3 - Hoogway x Nowun - Moments To Keep/Moments To Keep.mp3",
        forPart: AllPartType
    },
    // "Silent Emotions", 音源のダウンロードリンクなし
    // {
    //   title: "Nostalgic",
    //   artist: "Dimension 32 x L’Outlander",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Mindfulness",
    //   artist: "Dimension 32 x Hoogway x Bhxa",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Point Me Home",
    //   artist: "Dimension 32 x  cxlt.",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Raining In My Head",
    //   artist: "Dimension 32 x Banks",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Nuit Blanche",
    //   artist: "Dimension 32 x L’Outlander",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Silent Emotions",
    //   artist: "Dimension 32 x Softy",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Amnesia",
    //   artist: "Dimension 32 x Hevi",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Lunar Rotations",
    //   artist: "Dimension 32 x S N U G",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // {
    //   title: "Night Vision",
    //   artist: "Dimension 32 x Hevi x Bhxa",
    //   file: "xxxxxxxxxxxx",
    //   forPart: AllPartType
    // },
    // "When I’m Gone",
    {
        title: "Ethereal",
        artist: "Hevi x H.1",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/1) Ethereal (feat H.1).mp3",
        forPart: AllPartType
    },
    {
        title: "Above Skies",
        artist: "Hevi x H.1",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/2) Above Skies (feat. H.1).mp3",
        forPart: AllPartType
    },
    {
        title: "Don’t Hurt Yourself",
        artist: "Hevi",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/3) Don_t Hurt Yourself.mp3",
        forPart: AllPartType
    },
    {
        title: "When I’m Gone",
        artist: "Hevi",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/4) When I_m Gone.mp3",
        forPart: AllPartType
    },
    {
        title: "Dream On",
        artist: "Hevi x Casiio",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/5) Dream On (feat. Casiio).mp3",
        forPart: AllPartType
    },
    {
        title: "I’m Sorry",
        artist: "Hevi",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/6) I_m Sorry.mp3",
        forPart: AllPartType
    },
    {
        title: "Closer",
        artist: "Hevi",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/7) Closer.mp3",
        forPart: AllPartType
    },
    {
        title: "Frames",
        artist: "Hevi",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/8) Frames.mp3",
        forPart: AllPartType
    },
    {
        title: "Blurry",
        artist: "Hevi",
        file: "/audio/lofigirl/MP3 - Hevi - When i'm Gone/9) Blurry.mp3",
        forPart: AllPartType
    },
    // "Seeing Beauty in Everything",
    {
        title: "Exchange",
        artist: "Ky akasha",
        file: "/audio/lofigirl/MP3 - Ky akasha - Seeing Beauty in Everything/1 Exchange.mp3",
        forPart: AllPartType
    },
    {
        title: "Stellar Wind",
        artist: "Ky akasha",
        file: "/audio/lofigirl/MP3 - Ky akasha - Seeing Beauty in Everything/2 Stellar Wind.mp3",
        forPart: AllPartType
    },
    {
        title: "Seeing Beauty in Everything",
        artist: "Ky akasha",
        file: "/audio/lofigirl/MP3 - Ky akasha - Seeing Beauty in Everything/3 Seeing Beauty in Everything.mp3",
        forPart: AllPartType
    },
    {
        title: "Vide",
        artist: "Ky akasha",
        file: "/audio/lofigirl/MP3 - Ky akasha - Seeing Beauty in Everything/4 Vide.mp3",
        forPart: AllPartType
    },
    {
        title: "Last Resort",
        artist: "Ky akasha",
        file: "/audio/lofigirl/MP3 - Ky akasha - Seeing Beauty in Everything/5 Last Resort.mp3",
        forPart: AllPartType
    },
    {
        title: "Epok",
        artist: "Ky akasha",
        file: "/audio/lofigirl/MP3 - Ky akasha - Seeing Beauty in Everything/6 Epok.mp3",
        forPart: AllPartType
    },
    // "Layover",
    {
        title: "we’ll be waiting a while",
        artist: "S N U G x tender spring x Rook1e",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/we_ll be waiting a while ft. Rook1e _ tender spring.mp3",
        forPart: AllPartType
    },
    {
        title: "notion",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/bloom.mp3",
        forPart: AllPartType
    },
    {
        title: "autumn warmth",
        artist: "S N U G x Rook1e",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/autumn warmth ft. Rook1e.mp3",
        forPart: AllPartType
    },
    {
        title: "leap of faith",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/leap of faith.mp3",
        forPart: AllPartType
    },
    {
        title: "bloom",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/bloom.mp3",
        forPart: AllPartType
    },
    {
        title: "drifting into the sunset",
        artist: "S N U G x Mondo Loops x Rook1e",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/drifting into the sunset ft. Rook1e _ Mondo Loops.mp3",
        forPart: AllPartType
    },
    {
        title: "hazelnut",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/hazelnut.mp3",
        forPart: AllPartType
    },
    {
        title: "convo",
        artist: "S N U G",
        file: "/audio/lofigirl/MP3 - S N U G - Layover/convo.mp3",
        forPart: AllPartType
    },
    // "A World After",
    {
        title: "Germination",
        artist: "Krynoze x aMess",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/01 - Germination (ft. Amess).mp3",
        forPart: AllPartType
    },
    {
        title: "Submarine Embrace",
        artist: "Krynoze x Hoogway",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/02 - Submarine Embrace (ft. Hoogway).mp3",
        forPart: AllPartType
    },
    {
        title: "Sediments",
        artist: "Krynoze x Dimension 32",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/03 - Sediments (ft. Dimension 32).mp3",
        forPart: AllPartType
    },
    {
        title: "Unfamiliar Beds",
        artist: "Krynoze x Hoogway",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/04 - Unfamiliar Beds (ft. Hoogway).mp3",
        forPart: AllPartType
    },
    {
        title: "Crackling Woods",
        artist: "Krynoze x Goson",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/05 - Crackling Woods (ft. Goson).mp3",
        forPart: AllPartType
    },
    {
        title: "Reins",
        artist: "Krynoze x Sweet Medicine",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/06 - Reins (ft. Sweet Medicine).mp3",
        forPart: AllPartType
    },
    {
        title: "Breaking Dawn",
        artist: "Krynoze x Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/07 - Breaking Dawn (ft. Tibeauthetraveler).mp3",
        forPart: AllPartType
    },
    {
        title: "Turnings",
        artist: "Krynoze x WYS",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/08 - Turnings (ft. WYS).mp3",
        forPart: AllPartType
    },
    {
        title: "Drippin' Love",
        artist: "Krynoze x Slowheal",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/09 - Drippin_ Love (ft. Slowheal).mp3",
        forPart: AllPartType
    },
    {
        title: "Reverie",
        artist: "Krynoze x Tibeauthetraveler",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/10 - Reverie (ft. Tibeauthetraveler).mp3",
        forPart: AllPartType
    },
    {
        title: "Ripples",
        artist: "Krynoze x Devon Rea",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/11 - Ripples (ft. Devon Rea).mp3",
        forPart: AllPartType
    },
    {
        title: "Blooming Dales",
        artist: "Krynoze x Diiolme",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/12 - Blooming Dales (ft. Diiolme).mp3",
        forPart: AllPartType
    },
    {
        title: "Homecoming",
        artist: "Krynoze x Matchbox Youth",
        file: "/audio/lofigirl/MP3 - Krynoze - A World After/13 - Homecoming (ft. Matchbox Youth).mp3",
        forPart: AllPartType
    }

    // 
    // {
    //     title: '',
    //     artist: '',
    //     file: '',
    //     forPart: AllPartType,
    // },
    // {
    //     title: '',
    //     artist: '',
    //     file: '',
    //     forPart: AllPartType,
    // },
]

