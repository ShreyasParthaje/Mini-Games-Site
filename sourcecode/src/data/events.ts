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
      'Your team becomes a living neural network, learning to hit a target number through feedback and collaboration.',
    detailed:
      'Teams of 5–7 members physically arrange themselves as layers of a neural network. Each person acts as a neuron, receiving a number from the previous layer, applying a simple operation (add, multiply, threshold), and passing the result forward. The team must collectively learn to produce a target output number through iterative rounds of feedback — mimicking backpropagation in real life. No calculators allowed; this is pure teamwork and mental math.',
    image: '',
    teamSize: '5–7 members',
    rules: [
      'Each neuron may only perform one mathematical operation per round.',
      'Communication is only allowed between adjacent layers.',
      'Teams get 6 rounds to reach the target number within ±2.',
      'No electronic devices or calculators permitted.',
      'Time limit: 20 minutes total.',
    ],
    judgingCriteria: [
      'Accuracy — how close the final output is to the target.',
      'Speed — fewer rounds to converge means higher score.',
      'Teamwork — effective communication and coordination.',
      'Strategy — clarity and adaptability of the chosen approach.',
    ],
  },
  {
    id: 2,
    title: "Optimizer's Dilemma",
    brief:
      'Navigate a landscape of hidden costs and rewards — choose your path wisely to find the global minimum.',
    detailed:
      'Inspired by gradient descent, teams navigate a physical grid (or digital map) where each cell has a hidden cost value. Starting from a random position, teams choose directions to move in each turn, receiving only the cost of their current cell as feedback. The goal is to reach the lowest-cost cell in the fewest moves. Watch out for local minima that trap the unwary — sometimes you need to go uphill to find the true optimum.',
    image: '',
    teamSize: '3–4 members',
    rules: [
      'Teams may move one cell in any cardinal direction per turn.',
      'Only the current cell cost is revealed after each move.',
      'Maximum of 15 moves allowed.',
      'Teams must document their strategy before starting.',
      'Bonus points for explaining the analogy to real optimization.',
    ],
    judgingCriteria: [
      'Final position cost — lower is better.',
      'Efficiency — reaching the minimum in fewer moves.',
      'Strategy documentation — quality of the written approach.',
      'Understanding — ability to explain optimization concepts.',
    ],
  },
  {
    id: 3,
    title: 'Prompt Engineering Showdown',
    brief:
      'Craft the perfect prompts to coax an AI into producing exactly the output you need — precision is everything.',
    detailed:
      'Participants are given a series of target outputs (images, text, code snippets) and must craft prompts for a large language model to reproduce them as closely as possible. Each round increases in difficulty — from simple text generation to complex structured outputs. This event tests creativity, precision, and deep understanding of how language models interpret instructions. Prompt length limits add an extra layer of challenge.',
    image: '',
    teamSize: '2–3 members',
    rules: [
      'Each team gets 3 attempts per challenge to refine their prompt.',
      'Prompt length must not exceed 200 words per challenge.',
      'No copy-pasting from external sources during the event.',
      'Teams must work with the provided AI model only.',
      'Time limit: 8 minutes per challenge, 5 challenges total.',
    ],
    judgingCriteria: [
      'Output accuracy — closeness to the target output.',
      'Prompt efficiency — achieving results with fewer words.',
      'Creativity — novel approaches to difficult prompts.',
      'Consistency — performance across all challenges.',
    ],
  },
  {
    id: 4,
    title: 'Data Detective',
    brief:
      'Uncover hidden patterns and outliers in messy datasets — your analytical instincts are the only tool you need.',
    detailed:
      'Teams receive a dataset with intentionally introduced anomalies, missing values, and hidden patterns. Using only basic tools (spreadsheets, pen and paper, or a simple notebook environment), they must identify the anomalies, explain the patterns, and make predictions. This event simulates real-world data science work where understanding the data is more important than fancy algorithms.',
    image: '',
    teamSize: '3–4 members',
    rules: [
      'Only basic tools are permitted (no ML libraries).',
      'Teams must submit a written report of findings.',
      'All anomalies must be explained, not just identified.',
      'Predictions must include confidence reasoning.',
      'Time limit: 30 minutes.',
    ],
    judgingCriteria: [
      'Anomaly detection — number of correct identifications.',
      'Pattern explanation — depth and accuracy of analysis.',
      'Prediction quality — accuracy of data-driven predictions.',
      'Report clarity — well-organized and readable findings.',
    ],
  },
  {
    id: 5,
    title: 'AI Art Gallery',
    brief:
      'Create stunning AI-generated artwork under constraints — then defend your creative vision to the judges.',
    detailed:
      'Each team is given a theme and a set of constraints (style, color palette, subject matter) and must use AI image generation tools to create a cohesive collection of 3 artworks. But there is a twist — teams must also write artist statements explaining their creative process and how they guided the AI. Judging considers both the visual impact and the thoughtfulness of the human–AI collaboration.',
    image: '',
    teamSize: '2–3 members',
    rules: [
      'All artwork must be generated during the event window.',
      'Each collection must contain exactly 3 related pieces.',
      'Artist statement required for each piece (100 words max).',
      'Must adhere to the given theme and at least 2 of 3 constraints.',
      'Time limit: 45 minutes.',
    ],
    judgingCriteria: [
      'Visual impact — overall aesthetic quality of the collection.',
      'Theme adherence — how well the art matches the assigned theme.',
      'Artist statement — clarity and depth of creative reasoning.',
      'Constraint creativity — elegant solutions within limitations.',
    ],
  },
  {
    id: 6,
    title: 'Model Showdown',
    brief:
      'Build, train, and battle your ML models head-to-head on a surprise dataset — may the best model win.',
    detailed:
      'Teams are given a surprise dataset and a prediction task at the start of the event. They must choose an approach, preprocess the data, build a model, and submit predictions — all within the time limit. Models are evaluated on a held-out test set, and a live leaderboard tracks performance. No pre-trained models allowed; this is about fundamentals, feature engineering, and smart decisions under pressure.',
    image: '',
    teamSize: '3–4 members',
    rules: [
      'No pre-trained or pre-built models allowed.',
      'Standard ML libraries are permitted (scikit-learn, etc.).',
      'Maximum of 3 submissions to the leaderboard.',
      'Code must be original and written during the event.',
      'Time limit: 60 minutes.',
    ],
    judgingCriteria: [
      'Prediction accuracy on the held-out test set.',
      'Code quality — clean, readable, well-structured code.',
      'Approach — thoughtfulness of feature engineering and model choice.',
      'Efficiency — model training time and resource usage.',
    ],
  },
  {
    id: 7,
    title: 'Bias Busters',
    brief:
      'Find and fix hidden biases in AI systems — fairness is not optional, it is the objective.',
    detailed:
      'Teams are presented with pre-built AI systems (classifiers, recommendation engines, or text generators) that contain intentional biases. Their task is to identify what biases exist, explain why they are harmful, and propose concrete fixes. This event raises awareness about responsible AI while challenging participants to think critically about fairness, representation, and ethical deployment of machine learning systems.',
    image: '',
    teamSize: '3–5 members',
    rules: [
      'Teams must identify at least 3 distinct biases per system.',
      'Each bias must include an explanation of potential real-world harm.',
      'Proposed fixes must be technically feasible.',
      'Presentation limited to 5 minutes per team.',
      'Time limit: 35 minutes for analysis, 5 minutes for presentation.',
    ],
    judgingCriteria: [
      'Bias identification — correctness and completeness.',
      'Harm analysis — understanding of real-world implications.',
      'Fix quality — feasibility and effectiveness of proposed solutions.',
      'Presentation — clarity, structure, and persuasiveness.',
    ],
  },
  {
    id: 8,
    title: 'AI Escape Room',
    brief:
      'Solve AI-themed puzzles and riddles to unlock clues and escape before time runs out.',
    detailed:
      'Teams enter a themed room (or virtual environment) filled with puzzles rooted in AI and ML concepts. Decode a cipher using a substitution learned from training data, solve a classification puzzle to unlock a box, or arrange algorithm cards in the correct order to reveal a clue. Each solved puzzle leads to the next, culminating in a final challenge that requires combining all learned concepts. Speed and accuracy both matter.',
    image: '',
    teamSize: '4–6 members',
    rules: [
      'All team members must stay in the room for the duration.',
      'No external resources, phones, or internet access.',
      'Hints are available but cost time penalties (2 min each).',
      'Puzzles must be solved in the presented order.',
      'Time limit: 45 minutes.',
    ],
    judgingCriteria: [
      'Completion — number of puzzles solved.',
      'Speed — total time to escape (including penalties).',
      'Teamwork — observed collaboration and communication.',
      'Concept understanding — ability to explain the AI concepts behind puzzles.',
    ],
  },
];
