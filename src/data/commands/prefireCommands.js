const prefireCommands = [
  {
    title: "Prefire Practice Commands",
    commands: [
      {
        command: "!prefire prac [number]",
        description: "Start practicing on a selected route.",
        example: "!prefire prac 1",
        arguments: {
          number: "Optional: The route number to practice."
        },
      },
      {
        command: "!prefire map [map name]",
        description: "Switch to another map.",
        example: "!prefire map de_dust2",
        arguments: {
          "map name": "Required: The name of the map to switch to."
        },
      },
      {
        command: "!prefire df [1-6]",
        description: "Set the difficulty level for the practice.",
        example: "!prefire df 3",
        arguments: {
          "1-6": "Required: Difficulty level ranging from 1 to 6."
        },
      },
      {
        command: "!prefire mode [rand/full]",
        description: "Set the training mode.",
        example: "!prefire mode rand",
        arguments: {
          "rand/full": "Required: Choose between 'rand' (random) or 'full' (entire route)."
        },
      },
      {
        command: "!prefire bw [rand/ump/ak/sct/awp]",
        description: "Set the weapons for bots during practice.",
        example: "!prefire bw ak",
        arguments: {
          "rand/ump/ak/sct/awp": "Required: Select a weapon for bots, or use 'rand' for random."
        },
      },
      {
        command: "!prefire lang [en/pt/zh]",
        description: "Set the language for practice mode messages.",
        example: "!prefire lang en",
        arguments: {
          "en/pt/zh": "Required: Select 'en' for English, 'pt' for Portuguese, or 'zh' for Chinese."
        },
      },
      {
        command: "!prefire exit",
        description: "Stop practicing and exit the prefire practice mode.",
        example: "!prefire exit",
      },
    ],
  },
];

export default prefireCommands;
