---
slug: matchzy
id: cs2-plugins-matchzy
title: "MatchZy"
---

MatchZy is a plugin for CS2 that runs and manages practice/pugs/scrims/matches with easy configuration!

## What can MatchZy do?
MatchZy can solve a lot of match management requirements. It provides basic commands like `!ready`, `!unready`, `!pause`, `!unpause`, `!tac`, `!tech`, match stats, and much more!

**Feature highlights:**
- Practice Mode many more commands!
- Warmup with infinite money 🤑
- Knife round (With expected logic, i.e., the team with the most players wins. If the same number of players, then the team with HP advantage wins. If the same HP, the winner is decided randomly)
- Start live match (after knife winner makes side selection. Knife round can also be disabled by the `!kniferound`, `!kr` and `!rk` commands).
- Automatically starts demo recording and stops recording when the match is ended
- Coaching system - **(Coach need to join team, before `.coach ct` or `.coach t` work)**
- Damage report after every round
- Support for round restore (Currently using the vanilla valve's backup system)
- Provides easy configuration

## Usage Commands
Most of the commands can also be used using ! prefix instead of . (like !ready or /ready)

| Chat Commands         | Description                                                                                      |
|-----------------------|--------------------------------------------------------------------------------------------------|
| `.coach team-side-here` | Starts coaching the specified side. Example: `.coach t` to start coaching the terrorist side!   |
| `.ready`              | Marks the player ready.                                                                         |
| `.unready`            | Marks the player unready.                                                                       |
| `.unpause`            | Request for unpausing the match. Both teams need to type `.unpause` to unpause the match.       |
| `.pause`              | Pauses the match in freezetime (Normal pause).                                                  |
| `.stay`               | Stays on the same side (For knife winner, after the knife round).                               |
| `.switch` **or** `.swap`  | Switches the side (For knife winner, after the knife round).                                    |
| `.stop`               | Restore the backup of the current round. Both teams need to type `.stop` to restore the current round. |
| `.tac`                | Starts a tactical timeout.                                                                      |
| `.tech`               | Pauses the match in freezetime (Technical issues).                                              |

### Practice Commands

| Chat Commands                   | Description                                                                                                           |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `.spawn <number>`               | Spawns to the provided competitive spawn number of the same team.                                                     |
| `.ctspawn <number>`             | Spawns to the provided competitive spawn number of CT (Alias: `.cts`).                                                |
| `.tspawn <number>`              | Spawns to the provided competitive spawn number of T (Alias: `.ts`).                                                  |
| `.bot`                          | Adds a bot on the user's current position.                                                                            |
| `.nobots`                       | Removes all the bots.                                                                                                 |
| `.crouchbot`                    | Adds a crouched bot on the user's current position.                                                                   |
| `.boost`                        | Adds a bot on the current position and boosts the player on it.                                                       |
| `.crouchboost`                  | Adds a crouched bot on the current position and boosts the player on it.                                              |
| `.ct`, `.t`, `.spec`            | Changes player team to the requested team.                                                                            |
| `.fas` / `.watchme`             | Forces all players into spectator except the player who called this command.                                          |
| `.clear`                        | Clears all active smokes, molotovs, and incendiaries.                                                                 |
| `.fastforward`                  | Fast-forwards the server time to 20 seconds (Alias: `.ff`).                                                           |
| `.noflash`                      | Toggles immunity to flashbangs (it will still blind others with noflash disabled).                                     |
| `.dryrun`                       | Turns on dry-run mode (Alias: `.dry`).                                                                                |
| `.god`                          | Turns on god mode.                                                                                                    |
| `.savenade <name> <description>`| Saves a lineup (Alias: `.sn`).                                                                                        |
| `.loadnade <name>`              | Loads a lineup (Alias: `.ln`).                                                                                        |
| `.deletenade <name>`            | Deletes a lineup from file (Alias: `.dn`).                                                                            |
| `.importnade <code>`            | Imports a lineup using a provided code (Alias: `.in`).                                                                |
| `.listnades <filter>`           | Lists all saved lineups or those matching the given filter (Alias: `.lin`).                                           |
| `.break`                        | Breaks all breakable entities (glass windows, wooden doors, vents, etc.).                                             |
| `.rethrow`                      | Rethrows your last thrown grenade (Alias: `.rt`).                                                                     |
| `.timer`                        | Starts a timer and stops it on the second execution, showing the duration.                                            |
| `.last`                         | Teleports you back to where you threw your last grenade from.                                                         |
| `.back <number>`                | Teleports you back to the provided position in your grenade history.                                                  |
| `.delay <seconds>`              | Sets a delay on your last grenade for use with `.rethrow` or `.throwindex`.                                           |
| `.throwindex <index>...`        | Throws grenades from specific positions in your history. Example: `.throwindex 1 2` throws your 1st and 2nd grenades. |
| `.lastindex`                    | Prints the index number of your last thrown grenade.                                                                  |
| `.rethrowsmoke`                 | Rethrows your last thrown smoke grenade.                                                                              |
| `.rethrownade`                  | Rethrows your last thrown HE grenade.                                                                                 |
| `.rethrowflash`                 | Rethrows your last thrown flashbang.                                                                                  |
| `.rethrowmolotov`               | Rethrows your last thrown molotov.                                                                                    |
| `.rethrowdecoy`                 | Rethrows your last thrown decoy.                                                                                      |
| `.solid`                        | Toggles `mp_solid_teammates` in practice mode.                                                                        |
| `.impacts`                      | Toggles `sv_showimpacts` in practice mode.                                                                            |
| `.nadecam`                      | Toggles `sv_grenade_trajectory_prac_pipreview` in practice mode.                                                      |

### Admin Commands

| Chat Commands               | Description                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| `.start`                    | Force starts a match.                                                                          |
| `.force`                    | Force starts a match.                                                                          |
| `.restart`                  | Forcefully restarts or resets a match or scrim. (Also available commands: `.end`, `.endgame`, `.endmatch`, `.forceend`, `.stopmatch`) |
| `.forcepause`               | Pauses the match as an admin (Players cannot unpause the admin-paused game). (`.fp` for a shorter command) |
| `.forceunpause`             | Force unpauses the match. (`.fup` for a shorter command)                                       |
| `.restore <round-number>`   | Restores the backup of the provided round number.                                              |
| `.knife` / `.rk`              | Toggles the knife round. If disabled, the match will skip the Warmup phase and go directly to the Live phase. (Shortcut commands: `!kr`, `!kniferound`) |
| `.match`                    | Activates match mode. **All 10 players must ready up, knife round enabled by default in this mode.** |
| `.scrim`                    | Activates scrim mode. **All 10 players must ready up, knife round is disabled** - All rounds would be played irrespective of the winner. Useful in scrims! |
| `.readyrequired <number>`   | Sets the number of ready players required to start the match. **All connected players must be ready to start the game.** |
| `.settings`                 | Displays the current settings, like whether knife is enabled or not, value of ready-required players, etc. |
| `.ctname <teamname>` / `.tname <teamname>` | Sets team name for Team CT / Team T.                                                        |
| `.prac`                     | Starts Practice Mode.                                                                          |
| `.exitprac`                 | Exits Practice mode and loads Match mode.                                                     |
| `.exitdry`                  | Exits DryRun mode and loads back to Practice Mode.                                             |
