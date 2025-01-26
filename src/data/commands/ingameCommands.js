const ingameCommands = [
  {
    title: "In-Game Commands",
    commands: [
      {
        command: "/casual",
        description: "Switches to Casual Game Mode for a more relaxed experience.",
        example: "/casual",
        syntax: "css_casual",
      },
      {
        command: "/comp",
        description: "Activates Competitive Game Mode **without MatchZy**.",
        example: "/comp",
        syntax: "css_comp",
      },
      {
        command: "/dmmulticfg",
        description: "Switches to Multi-CFG Deathmatch Mode.",
        example: "/dmmulticfg",
        syntax: "css_dmon",
      },
      {
        command: "/dmvalve",
        description: "Activates VALVe-style Deathmatch Mode.",
        example: "/dmvalve",
        syntax: "css_dmvalve",
      },
      {
        command: "/help",
        description: "Lists all available commands in chat.",
        example: "/help",
        syntax: "css_help",
      },
      {
        command: "/map",
        description: "Changes the map to the one specified.",
        example: "/map de_dust2",
        syntax: "css_map mapname",
        arguments: {
          "mapname": "Required: The name of the map to switch to."
        },
      },
      {
        command: "/maps",
        description: "Displays a list of available map commands in chat.",
        example: "/maps",
        syntax: "css_maps",
      },
      {
        command: "/matchzy",
        description: "Switches back to MatchZy/Practice Mode if another mode was used previously.",
        example: "/matchzy",
        syntax: "css_matchzy",
      },
      {
        command: "/pracc",
        description: "Switches back to MatchZy/Practice Mode if another mode was used previously.",
        example: "/pracc",
        syntax: "css_pracc",
      },
      {
        command: "/prefireon",
        description: "Activates OpenPrefirePrac mode.",
        example: "/prefireon",
        syntax: "css_prefireon",
      },
      {
        command: "/rcon",
        description: "Runs RCON commands for server management.",
        example: "/rcon",
        syntax: "css_rcon",
      },
      {
        command: "/retake",
        description: "Activates Retake Mode for retake-focused gameplay.",
        example: "/retake",
        syntax: "css_retake",
      },
      {
        command: "/wingman",
        description: "Switches to Wingman Game Mode, designed for 2v2 matches.",
        example: "/wingman",
        syntax: "css_wingman",
      },
      {
        command: "/wsmap",
        description: "Loads a workshop map using its name or Workshop ID.",
        example: "/wsmap 3331819777",
        syntax: "css_wsmap name or id",
      },
    ],
  },
  {
    title: "Maps Commands",
    commands: [
      {
        command: "/ancient",
        description: "Switch to Ancient, a map with a jungle and ruins setting.",
        example: "/ancient",
        syntax: "css_ancient",
      },
      {
        command: "/anubis",
        description: "Set Anubis as the next map, featuring Egyptian themes.",
        example: "/anubis",
        syntax: "css_anubis",
      },
      {
        command: "/dust2",
        description: "Go to Dust2, the most famous CS map ever.",
        example: "/dust2",
        syntax: "css_dust2",
      },
      {
        command: "/inferno",
        description: "Set the map to Inferno, a fan-favorite with alleys and bombsites.",
        example: "/inferno",
        syntax: "css_inferno",
      },
      {
        command: "/mirage",
        description: "Change the current map to Mirage, a classic bomb map.",
        example: "/mirage",
        syntax: "css_mirage",
      },
      {
        command: "/nuke",
        description: "Switch to Nuke, an iconic map with vertical gameplay.",
        example: "/nuke",
        syntax: "css_nuke",
      },
      {
        command: "/overpass",
        description: "Switch to Overpass, a map known for its tight chokepoints.",
        example: "/overpass",
        syntax: "css_overpass",
      },
      {
        command: "/train",
        description: "Change the map to Train, a map with unique train yard layouts.",
        example: "/train",
        syntax: "css_train",
      },
      {
        command: "/vertigo",
        description: "Move to Vertigo, a unique high-rise construction map.",
        example: "/vertigo",
        syntax: "css_vertigo",
      },
    ],
  },
];

export default ingameCommands;
