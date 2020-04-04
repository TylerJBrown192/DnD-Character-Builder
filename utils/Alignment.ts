// http://easydamus.com/alignment.html

/**
 A creature's general moral and personal attitudes are represented by its alignment: lawful good, neutral good, chaotic good, lawful neutral, neutral, chaotic neutral, lawful evil, neutral evil, or chaotic evil.

 Alignment is a tool for developing your character's identity. It is not a straitjacket for restricting your character. Each alignment represents a broad range of personality types or personal philosophies, so two characters of the same alignment can still be quite different from each other. In addition, few people are completely consistent.
*/
export enum Alignment {
    /**
    */
    LAWFUL_GOOD,

    /**
    */
    NEUTRAL_GOOD,

    /**
    */
    CHAOTIC_GOOD,

    /**
    */
    LAWFUL_NEUTRAL,

    /**
    */
    NEUTRAL,

    /**
    */
    CHAOTIC_NEUTRAL,

    /**
    */
    LAWFUL_EVIL,

    /**
    */
    NEUTRAL_EVIL,

    /**
    */
    CHAOTIC_EVIL,
}

export class AlignmentClassifications {
    GOOD_BEHAVIOR = Alignment.LAWFUL_GOOD || Alignment.NEUTRAL_GOOD || Alignment.CHAOTIC_GOOD;
    NEUTRAL_BEHAVIOR = Alignment.LAWFUL_NEUTRAL || Alignment.NEUTRAL || Alignment.CHAOTIC_NEUTRAL;
    EVIL_BEHAVIOR = Alignment.LAWFUL_EVIL || Alignment.NEUTRAL_EVIL || Alignment.CHAOTIC_EVIL;

    LAWFUL_BELIEF = Alignment.LAWFUL_GOOD || Alignment.LAWFUL_NEUTRAL || Alignment.LAWFUL_EVIL;
    NEUTRAL_BELIEF = Alignment.NEUTRAL_GOOD || Alignment.NEUTRAL || Alignment.NEUTRAL_EVIL;
    CHAOTIC_BELIEF = Alignment.CHAOTIC_GOOD || Alignment.NEUTRAL_EVIL || Alignment.CHAOTIC_EVIL;
}


/**
 * Lawful characters tell the truth, keep their word, respect authority, honor tradition, and judge those who fall short of their duties.

    Chaotic characters follow their consciences, resent being told what to do, favor new ideas over tradition, and do what they promise if they feel like it.

    "Law" implies honor, trustworthiness, obedience to authority, and reliability. On the downside, lawfulness can include close-mindedness, reactionary adherence to tradition, judgmentalness, and a lack of adaptability. Those who consciously promote lawfulness say that only lawful behavior creates a society in which people can depend on each other and make the right decisions in full confidence that others will act as they should.

    "Chaos" implies freedom, adaptability, and flexibility. On the downside, chaos can include recklessness, resentment toward legitimate authority, arbitrary actions, and irresponsibility. Those who promote chaotic behavior say that only unfettered personal freedom allows people to express themselves fully and lets society benefit from the potential that its individuals have within them.

    Someone who is neutral with respect to law and chaos has a normal respect for authority and feels neither a compulsion to obey nor a compulsion to rebel. She is honest but can be tempted into lying or deceiving others.

    Devotion to law or chaos may be a conscious choice, but more often it is a personality trait that is recognized rather than being chosen. Neutrality on the lawful-chaotic axis is usually simply a middle state, a state of not feeling compelled toward one side or the other. Some few such neutrals, however, espouse neutrality as superior to law or chaos, regarding each as an extreme with its own blind spots and drawbacks.

    Animals and other creatures incapable of moral action are neutral. Dogs may be obedient and cats free-spirited, but they do not have the moral capacity to be truly lawful or chaotic.
 */
