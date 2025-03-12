const simpleAdminCommands = [
  {
    title: "Admin Commands",
    commands: [
      {
        command: "css_hide / !hide",
        description: "Hide admin on scoreboard and commands action.",
        example: "css_hide",
      },
      {
        command: "css_admin / !admin",
        description: "Display all admin commands (Only for this plugin).",
        example: "css_admin",
      },
      {
        command: "css_who <#userid or name> / !who <#userid or name>",
        description: "Display information about a player.",
        example: "css_who 1",
        arguments: {
          "#userid or name": "Required: The user's ID or name."
        },
      },
      {
        command: "css_players",
        description: "Display a list of players currently on the server.",
        example: "css_players",
      },
      {
        command: "css_godmode <#userid or name>",
        description: "Turn on godmode for the player",
        example: "css_godmode fshost",
        arguments: {
          "#userid or name": "Required: The user's ID or name."
        },
      },
      {
        command: "css_ban / !ban <#userid or name> [time in minutes/0 perm] [reason]",
        description: "Ban a player by user ID or name for a specific time with an optional reason.",
        example: "css_ban 1 60 Cheating",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          "time": "Optional: Time in minutes (0 for permanent).",
          "reason": "Optional: The reason for the ban."
        },
      },
      {
        command: "css_addban / !addban <steamid> [time in minutes/0 perm] [reason]",
        description: "Ban a player by their Steam ID for a specific time with an optional reason.",
        example: "css_addban STEAM_1:0:123456 30 Griefing",
        arguments: {
          steamid: "Required: The player's Steam ID.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for the ban."
        },
      },
      {
        command: "css_banip / !banip <ip> [time in minutes/0 perm] [reason]",
        description: "Ban a player by their IP address for a specific time with an optional reason.",
        example: "css_banip 192.168.1.1 60 Suspicious activity",
        arguments: {
          ip: "Required: The player's IP address.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for the ban."
        },
      },
      {
        command: "css_unban / !unban <steamid or name or ip>",
        description: "Unban a player by Steam ID, name, or IP address.",
        example: "css_unban STEAM_1:0:123456",
        arguments: {
          "steamid or name or ip": "Required: The Steam ID, name, or IP address of the player to unban."
        },
      },
      {
        command: "css_kick / !kick <#userid or name> [reason]",
        description: "Kick a player by their user ID or name with an optional reason.",
        example: "css_kick 1 AFK",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          reason: "Optional: The reason for kicking the player."
        },
      },
      {
        command: "css_gag <#userid or name> [time in minutes/0 perm] [reason]",
        description: "Prevent a player from using chat for a specific time with an optional reason.",
        example: "css_gag 1 10 Spamming",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for gagging."
        },
      },
      {
        command: "css_addgag <steamid> [time in minutes/0 perm] [reason]",
        description: "Prevent a player from using chat via their Steam ID for a specific time with an optional reason.",
        example: "css_addgag STEAM_1:0:123456 30 Toxic behavior",
        arguments: {
          steamid: "Required: The player's Steam ID.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for gagging."
        },
      },
      {
        command: "css_ungag <steamid or name>",
        description: "Remove a gag from a player by their Steam ID or name.",
        example: "css_ungag STEAM_1:0:123456",
        arguments: {
          "steamid or name": "Required: The Steam ID or name of the player to ungag."
        },
      },
      {
        command: "css_money <#userid or name> [money]",
        description: "Set player money",
        example: "css_money fshost 1337",
        arguments: {
          "name": "Required: The name of the player to give money."
        },
      },
      {
        command: "css_noclip <#userid or name>",
        description: "Turn on the player's noclip",
        example: "css_noclip fshost",
        arguments: {
          "name": "Required: The name of the player to turn on noclip."
        },
      },
      {
        command: "css_mute <#userid or name> [time in minutes/0 perm] [reason]",
        description: "Mute a player by user ID or name for a specific time with an optional reason.",
        example: "css_mute 1 5 Disruptive behavior",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for muting."
        },
      },
      {
        command: "css_addmute <steamid> [time in minutes/0 perm] [reason]",
        description: "Mute a player via their Steam ID for a specific time with an optional reason.",
        example: "css_addmute STEAM_1:0:123456 30 Excessive mic use",
        arguments: {
          steamid: "Required: The player's Steam ID.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for muting."
        },
      },
      {
        command: "css_unmute <steamid or name>",
        description: "Remove a mute from a player by their Steam ID or name.",
        example: "css_unmute STEAM_1:0:123456",
        arguments: {
          "steamid or name": "Required: The Steam ID or name of the player to unmute."
        },
      },
      {
        command: "css_silence <#userid or name> [time in minutes/0 perm] [reason]",
        description: "Silence a player, preventing both chat and voice use.",
        example: "css_silence 1 15 Toxic behavior",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          time: "Optional: Time in minutes (0 for permanent).",
          reason: "Optional: The reason for silencing."
        },
      },
      {
        command: "css_unsilence <steamid or name>",
        description: "Remove silence from a player by their Steam ID or name.",
        example: "css_unsilence STEAM_1:0:123456",
        arguments: {
          "steamid or name": "Required: The Steam ID or name of the player to unsilence."
        },
      },
      {
        command: "css_give <#userid or name> <WeaponName>",
        description: "Gives a weapon to a player.",
        example: "css_give 1 AK-47",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          WeaponName: "Required: The name of the weapon."
        },
      },
      {
        command: "css_respawn <#userid or name>",
        description: "Respawn a player by their user ID or name.",
        example: "css_respawn 1",
        arguments: {
          "#userid or name": "Required: The user's ID or name."
        },
      },
      {
        command: "css_csay <message>",
        description: "Send a message as admin in the center of the screen.",
        example: "css_csay Server will restart in 5 minutes",
        arguments: {
          message: "Required: The message to display."
        },
      },
      {
        command: "css_hsay <message>",
        description: "Send a message as admin in the HUD.",
        example: "css_hsay Welcome to the server!",
        arguments: {
          message: "Required: The message to display."
        },
      },
      {
        command: "css_hp <#userid or name> <health>",
        description: "Set the player's health",
        example: "css_hp fshost 101",
        arguments: {
          "#userid or name": "Required: The user's ID or name."
        },
      },
      {
        command: "css_freeze <#userid or name> [duration]",
        description: "Freeze a player for a specific duration.",
        example: "css_freeze 1 30",
        arguments: {
          "#userid or name": "Required: The user's ID or name.",
          duration: "Optional: Time in seconds to freeze the player."
        },
      },
      {
        command: "css_unfreeze <#userid or name>",
        description: "Unfreeze a player by their user ID or name.",
        example: "css_unfreeze 1",
        arguments: {
          "#userid or name": "Required: The user's ID or name."
        },
      },
      {
        command: "team_chat @Message",
        description: "Send a private message to all admins.",
        example: "team_chat @Server maintenance in 10 minutes",
        arguments: {
          Message: "Required: The message to send to admins."
        },
      },
    ],
  },
];

export default simpleAdminCommands;
