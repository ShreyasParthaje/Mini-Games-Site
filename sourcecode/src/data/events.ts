export interface EventData {
  id: number;
  title: string;
  brief: string;
  detailed: string;
  image: string;
  teamSize: string;
  rules: string[];
  judgingCriteria: string[];
}

export const events: EventData[] = [
  {
    id: 1,
    title: 'Neural Network Human Chain',
    brief:
      'Your team becomes a living neural network, learning to hit a target number through feedback.',
    detailed:
      'Your team becomes a living neural network, learning to hit a target number through feedback.',
    image: '',
    teamSize: '3-5',
    rules: [
      'Players stand in a line (Input → Hidden Layers → Output)',
      'Volunteer secretly assigns each player a random math rule on a hidden card (examples: x2, +5, -3, ÷2)',
      'Volunteer announces a target number (e.g., "Target is 20")',
      'Volunteer gives an input number to the first player (e.g., "Input is 3")',
      'Player 1 applies their secret rule mentally and announces only their output',
      'Player 2 takes that number, applies their rule, announces their output',
      'Continue down the chain until the last player announces the final output',
      'Volunteer calculates the "loss" and announces: "You got 16, target is 20, you\'re off by 4"',
      'Team has 45 seconds to discuss - each player can independently choose to change their rule (write new rule on their card)',
      'Players CANNOT tell each other what their rules are',
      'Repeat for up to 6 rounds',
    ],
    judgingCriteria: [
      'Hit the target number exactly (or within +1 or -1) within 6 attempts',
    ],
  },
  {
    id: 2,
    title: "Optimizer's Dilemma",
    brief:
      "Maximize your team's total score through strategic card trading, but you can't see anyone else's hand.",
    detailed:
      "Maximize your team's total score through strategic card trading, but you can't see anyone else's hand.",
    image: '',
    teamSize: '4-5',
    rules: [
      'Each player receives 5 random cards face-down - only you can see your own hand',
      'Players sit in a circle',
      'Scoring system (kept in your own hand):',
      'Base points = sum of card values (A=1, 2-10=face value, J=11, Q=12, K=13)',
      'Pair (two same cards): +5 bonus | Three of a kind: +15 bonus',
      'Straight (3+ sequential cards): +10 bonus | Full house (pair + three of a kind): +25 bonus',
      'All 5 different values: +8 bonus',
      'Team goal: collectively reach 200+ points',
      'Players verbally communicate what they have (can be honest, vague, or misleading)',
      'Trading constraints:',
      'Only 10 total trades allowed for the team',
      'Each player can make maximum 3 trades',
      'Can only trade with players sitting next to you (adjacency rule)',
      'Must trade one card for one card',
      '6 minute time limit',
      'After time/trades expire, everyone reveals their hands and calculates total score',
    ],
    judgingCriteria: [
      "Team's combined score reaches 200+ points",
    ],
  },
  {
    id: 3,
    title: 'Feature Extraction Pictionary',
    brief:
      'Draw objects using only primitive geometric shapes, like how AI breaks down complex images.',
    detailed:
      'Draw objects using only primitive geometric shapes, like how AI breaks down complex images.',
    image: '',
    teamSize: '3-5',
    rules: [
      'Every member gets one word to draw.',
      'Drawer can ONLY draw using basic geometric shapes:',
      '  * Circles, Straight lines, Triangles, Squares/rectangles',
      '  * NO curves (except circles), NO shading, NO details, NO letters/numbers',
      'Drawing roles rotate among all members.',
      'No one can skip their first turn.',
      'Once everyone has drawn, members draw again with new words.',
      'On their second turn, a member may skip one word, but they cannot help their team guess that skipped word.',
    ],
    judgingCriteria: [
      'Each question is worth 10 points',
      'Team correctly guesses 5 or more out of 10 words to qualify',
    ],
  },
  {
    id: 4,
    title: 'Truth Sleuth',
    brief: 'The mischievous AI states 4 facts of which 3 are truth and 1 is a lie. The participants will have to figure out which is the lie.',
    detailed: 'The mischievous AI states 4 facts of which 3 are truth and 1 is a lie. The participants will have to figure out which is the lie.',
    image: '',
    teamSize: '3-5',
    rules: [
      'Only 1 attempt of 10 questions per team',
      'Total of 10 questions',
      '+10 for correct answer, 0 for wrong answer'
    ],
    judgingCriteria: [
      'Team with maximum number of points wins the game',
    ],
  },
  {
    id: 5,
    title: 'Badly Explained Concepts',
    brief:
      "AI explains everyday objects in ridiculously technical or vague language. Decode what it's describing.",
    detailed:
      "AI explains everyday objects in ridiculously technical or vague language. Decode what it's describing.",
    image: '',
    teamSize: '3-5',
    rules: [
      'Volunteer has access to an AI and a secret list of 10 common objects/concepts',
      'Before the game starts, volunteer enters the first term and prompts AI to explain it badly (overly technical, verbose, or obscure language)',
      'Example: "Pizza" might become "Circular flatbread substrate with tomato-based reduction, coagulated dairy protein layer, and optional vegetable supplements, subjected to high-temperature thermal processing"',
      "Volunteer reads AI's explanation to the team",
      'Team discusses and debates what the concept is',
      'This is LIVE - team can ask volunteer to get AI to give hints or rephrase if completely stuck',
      'Team locks in their guess and volunteer reveals the answer',
      'Continue with remaining terms',
    ],
    judgingCriteria: [
      'Correctly guess 7 or more out of 10 concepts within 10 minutes',
    ],
  },
  {
    id: 6,
    title: 'Bot or Not',
    brief:
      'Examine images, text, and media - decide if each was made by AI or a human.',
    detailed:
      'Examine images, text, and media - decide if each was made by AI or a human.',
    image: '',
    teamSize: '3-5',
    rules: [
      'Volunteer has prepared 15 items in advance:',
      '  Mix of images, text snippets, short video clips, audio samples',
      '  Roughly half are AI-generated, half are human-made',
      '  Items should vary in difficulty (some obvious, some tricky)',
      'Team sees each item one at a time',
      'For each item, team discusses and debates: "AI-generated or human-made?"',
      'Team can examine details, discuss reasoning, look for telltale signs',
      'Team locks in their vote for each item',
      'After all 15 items, volunteer reveals which were AI vs human and tallies correct answers',
    ],
    judgingCriteria: [
      'Correctly identify 11 or more out of 15 items (73%+ accuracy)',
    ],
  },
  {
    id: 7,
    title: 'AI Gartic Phone',
    brief:
      'Telephone game meets AI image generation - watch concepts transform and degrade through the chain.',
    detailed:
      'Telephone game meets AI image generation - watch concepts transform and degrade through the chain.',
    image: '',
    teamSize: '4-5',
    rules: [
      'Player 1 writes a text prompt for an image (e.g., "a cat wearing a top hat riding a skateboard")',
      'Volunteer inputs prompt into AI image generator, shows result to Player 2 ONLY',
      'Player 2 (who did NOT see the original prompt) writes a description of what they see in the image',
      'Volunteer generates new image from Player 2\'s description, shows to Player 3 ONLY',
      'Player 3 writes a description of the new image',
      'Continue the chain through all players',
      'Final player writes description of the last image',
      'Reveal the journey: original prompt → image 1 → description 1 → image 2 → description 2 → ... → final image',
      'Compare original prompt to final image',
    ],
    judgingCriteria: [
      'Final image is still recognizably similar to the original concept OR embrace the chaos and award points for most creative derailment',
    ],
  },
  {
    id: 8,
    title: 'Infinite Craft Bingo',
    brief:
      'Combine basic elements to create complex items and complete a bingo card.',
    detailed:
      'Combine basic elements to create complex items and complete a bingo card.',
    image: '',
    teamSize: '3-5',
    rules: [
      'Team receives a bingo card (3x3) with random target concepts',
      'Examples: "Dragon", "Computer", "Rainbow", "Democracy", "Pizza", "Time Travel", "Music"',
      'Team uses Infinite Craft (infinitecraft.com)',
      'Start with 4 basic elements: Water, Fire, Earth, Air',
      'Combine elements to create new elements (e.g., Water + Fire = Steam)',
      'Continue combining to work toward items on the bingo card',
      'Team strategizes together which items to attempt first',
      'Volunteer verifies when team successfully creates a bingo card item',
      'Mark off completed items on the card',
    ],
    judgingCriteria: [
      'Complete one full row, column, or diagonal on the bingo card within 12 minutes',
    ],
  },
];
