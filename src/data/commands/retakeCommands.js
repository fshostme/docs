const retakeCommands = [
  {
    title: "Retake Commands",
    commands: [
      {
        command: ".guns / .gun",
        description: "Opens the Weapon Chat Menu.",
        example: ".guns",
      },
      {
        command: "!guns / !gun",
        description: "Opens the Weapon Chat Menu.",
        example: "!guns",
      },
      {
        command: "!gunsmenu / !gunmenu / .gunmenus",
        description: "Opens the Weapon Center Chat Menu.",
        example: "!gunsmenu",
      },
      {
        command: "!showspawns",
        description: "Displays the spawns for the specified bombsite.",
        example: "!showspawns A",
        arguments: {
          "A / B": "Required: Specify the bombsite (A or B)."
        },
      },
      {
        command: "!addspawn",
        description: "Adds a retake spawn point for the bombsite spawns currently shown.",
        example: "!addspawn CT Y",
        arguments: {
          "CT/T": "Required: Specify Counter-Terrorists (CT) or Terrorists (T).",
          "Y / N": "Required: Indicate if the spawn point can be for a planter (Y/N)."
        },
      },
      {
        command: "!removespawn",
        description: "Removes the nearest spawn point for the bombsite currently shown.",
        example: "!removespawn",
      },
      {
        command: "!nearestspawn",
        description: "Teleports the player to the nearest spawn point.",
        example: "!nearestspawn",
      },
      {
        command: "!hidespawns",
        description: "Exits the spawn editing mode.",
        example: "!hidespawns",
      },
      {
        command: "!scramble",
        description: "Scrambles the teams for the next round.",
        example: "!scramble",
      },
    ],
  },
];

export default retakeCommands;
