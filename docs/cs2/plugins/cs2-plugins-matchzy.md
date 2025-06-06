---
slug: matchzy
id: cs2-plugins-matchzy
title: "MatchZy w/ PracticeMode"
description: ""
---

# MatchZy | Match Management Plugin

MatchZy streamlines management for practice, PUGs, scrims, and matches.

Most of the commands can also be used using ! prefix instead of . (like !ready, /ready)

## 🎮 Commands

- `.ready` Marks the player ready (Alias: `.r`)
- `.unready` Marks the player unready (Alias: `.ur`, `.notready`)
- `.forceready` Force-readies the player's team (Only works when using Match setup using JSON/Get5)
- `.pause` Pauses the match in freezetime (Tactical or normal pause, depends on `matchzy_use_pause_command_for_tactical_pause`).
- `.tech` Pauses the match in freezetime.
- `.unpause` Request for unpausing the match. Both teams need to type .unpause to unpause the match
- `.stay` Stays on the same side (For knife winner, after the knife round)
- `.switch`/`.swap` Switches the side (For knife winner, after the knife round)
- `.ct`/`.t` Switches the side (For knife winner, after the knife round)
- `.stop` Restore the backup of the current round (Both teams need to type .stop to restore the current round)
- `.tac` Starts a tactical timeout
- `.coach <side>` Starts coaching the specified side. Example: `.coach t` to start coaching terrorist side!
- `.uncoach` Leaves coaching slot

## Practice Mode Commands

- `.spawn <number>` Spawns to the provided competitive spawn number of same team
- `.ctspawn <number>` Spawns to the provided competitive spawn number of CT (Alias: `.cts`)
- `.tspawn <number>` Spawns to the provided competitive spawn number of T (Alias: `.ts`)
- `.bestspawn` Teleports you to your team's closest spawn from your current position
- `.worstspawn` Teleports you to your team's furthest spawn from your current position
- `.bestctspawn` Teleports you to CT team's closest spawn from your current position
- `.worstctspawn` Teleports you to CT team's furthest spawn from your current position
- `.besttspawn` Teleports you to T team's closest spawn from your current position
- `.worsttspawn` Teleports you to T team's furthest spawn from your current position
- `.showspawns` Highlights all the competitive spawns
- `.hidespawns` Hides the highlighted spawns
- `.bot` Adds a bot on user's current position
- `.crouchbot` / `.cbot` Adds a crouched bot on user's current position (Alias: `.cbot`)
- `.boost` Adds a bot on current position and boosts player on it
- `.break` Breaks all breakable entities (glass, doors, vents).
- `.crouchboost` Adds a crouched bot on current position and boosts player on it
- `.ct`, `.t`, `.spec` Changes player team to the requested team
- `.fas` / `.watchme` Forces all players into spectator except the player who called this command
- `.nobreak` Restore all breakable entities (glass, doors, vents).
- `.nobot` Removes one bot each
- `.nobots` Removes all the bots
- `.clear` Clears all the active smokes, molotoves and incendiaries
- `.fastforward` Fastforwards the server time to 20 seconds (Alias: `.ff`)
- `.noflash` Toggles immunity for flashbang (it will still blind others with noflash disabled. Alias: `.noblind`)
- `.dryrun` Turns on dry-run mode (Alias: `.dry`)
- `.god` Turns on god mode
- `.savenade / .sn <name> <optional description>` Saves a lineup (Alias: `.sn`)
- `.loadnade <name>` Loads a lineup (Alias: `.sn`)
- `.deletenade <name>` Deletes a lineup from file (Alias: `.dn`)
- `.importnade <code>` Upon saving a lineup a code will be printed to chat, alternatively those can be retrieved from the savednades.cfg (Alias: `.in`)
- `.listnades <optional filter>` Lists either all saved lineups ever or if given a filter only those that match the filter (Alias: `.lin`)
- `.break` Breaks all the breakable entities (glass windows, wooden doors, vents, etc)
- `.rethrow` / `.rt` Rethrows your last thrown grenade (Alias: `.rt`)
- `.timer` Starts a timer immediately and stops it when you type .timer again, telling you the duration of time
- `.last` Teleports you back to where you threw your last grenade from
- `.back <number>` Teleports you back to the provided position in your grenade history
- `.delay <delay_in_seconds>` Sets a delay on your last grenade. This is only used when using .rethrow or .throwindex
- `.throwindex <index> <optional index> <optional index>` Throws grenade of provided position(s) from your grenade thrown history. Example: `.throwindex 1 2` will throw your 1st and 2nd grenade. `.throwindex 4 5 8 9` will throw your 4th, 5th, 8th and 9th grenade (If you've added delay in grenades, they'll be thrown with their specific delay).
- `.lastindex` Prints index number of your last thrown grenade.
- `.rethrowsmoke` Throws your last thrown smoke grenade.
- `.rethrownade` Throws your last thrown HE grenade.
- `.rethrowflash` Throws your last thrown flash.
- `.rethrowmolotov` Throws your last thrown molotov.
- `.rethrowdecoy` Throws your last thrown decoy.
- `.solid` Toggles mp_solid_teammates
- `.impacts` Toggles sv_showimpacts
- `.traj` Toggles sv_grenade_trajectory_prac_pipreview

## Admin Commands

- `.match` Activates Match mode with knife round enabled - Standard 24 rounds
- `.start` Force starts a match. (Alias: `.force`)
- `.restart` Force restarts/resets a match. (Alias: `.endmatch`, `.forceend`, `.end`, `.endgame`, `.endmatch`)
- `.forcepause` Pauses the match as an admin (Players cannot unpause the admin-paused match). (Alias: `.fp`)
- `.forceunpause` Force unpauses the match. (Alias: `.fup`)
- `.restore <round>` Restores the backup of provided round number.
- `.skipveto` / `.sv` Skips the current veto phase.
- `.knife` / `.rk` Toggles the knife round. If disabled, match will directly go from Warmup phase to Live phase.
- `.playout` / `.scrim` Toggles playout (If playout is enabled, all rounds would be played irrespective of winner. Useful in scrims!)
- `.whitelist` Toggles whitelisting of players. To whitelist a player, add the steam64id in `cfg/MatchZy/whitelist.cfg`
- `.readyrequired <number>` (Example: `.readyrequired 5`) Sets the number of ready players required to start the match. If set to 0, all connected players will have to ready-up to start the match.
- `.settings` Displays the current setting, like whether knife is enabled or not, value of readyrequired  players, etc.
- `.asay <message>` Say as an admin in all chat
- `.team1 <name>` Sets name for Team CT (Alias: `.ctname`)
- `.team2 <name>` Sets name for Team Terrorist (Alias: `.tname`)
- `.prac` Starts Practice Mode (Alias: `.tactics`)
- `.exitprac` Exits from practice mode and loads Match mode.
- `.exitdry` Exits DryRun mode to Practice mode.
