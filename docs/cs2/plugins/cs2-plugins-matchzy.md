---
slug: matchzy
id: cs2-plugins-matchzy
title: "MatchZy w/ Practice Mode"
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
| `.pause`              | Pauses the match in freezetime (Normal pause).                                                  |
| `.ready`              | Marks the player ready.                                                                         |
| `.stay`               | Stays on the same side (For knife winner, after the knife round).                               |
| `.stop`               | Restore the backup of the current round. Both teams need to type `.stop` to restore the current round. |
| `.switch` **or** `.swap`  | Switches the side (For knife winner, after the knife round).                                    |
| `.tac`                | Starts a tactical timeout.                                                                      |
| `.tech`               | Pauses the match in freezetime (Technical issues).                                              |
| `.unpause`            | Request for unpausing the match. Both teams need to type `.unpause` to unpause the match.       |
| `.unready`            | Marks the player unready.                                                                       | 

### Practice Commands
| Chat Commands                   | Description                                                                                                           |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `.back <number>`                | Teleports you back to the provided position in your grenade history.                                                  |
| `.bot`                          | Adds a bot on the user's current position.                                                                            |
| `.break`                        | Breaks all breakable entities (glass windows, wooden doors, vents, etc.).                                             |
| `.clear`                        | Clears all active smokes, molotovs, and incendiaries.                                                                 |
| `.crouchboost`                  | Adds a crouched bot on the current position and boosts the player on it.                                              |
| `.crouchbot`                    | Adds a crouched bot on the user's current position.                                                                   |
| `.ct`, `.t`, `.spec`            | Changes player team to the requested team.                                                                            |
| `.ctspawn <number>`             | Spawns to the provided competitive spawn number of CT (Alias: `.cts`).                                                |
| `.delay <seconds>`              | Sets a delay on your last grenade for use with `.rethrow` or `.throwindex`.                                           |
| `.deletenade <name>`            | Deletes a lineup from file (Alias: `.dn`).                                                                            |
| `.dryrun`                       | Turns on dry-run mode (Alias: `.dry`).                                                                                |
| `.fas` / `.watchme`             | Moves all players into spectator except the player who called this command.                                          |
| `.fastforward`                  | Fast-forwards the server time to 20 seconds (Alias: `.ff`).                                                           |
| `.god`                          | Turns on god mode.                                                                                                    |
| `.impacts`                      | Toggles `sv_showimpacts` in practice mode.                                                                            |
| `.importnade <code>`            | Imports a lineup using a provided code (Alias: `.in`).                                                                |
| `.last`                         | Teleports you back to where you threw your last grenade from.                                                         |
| `.lastindex`                    | Prints the index number of your last thrown grenade.                                                                  |
| `.listnades <filter>`           | Lists all saved lineups or those matching the given filter (Alias: `.lin`).                                           |
| `.loadnade <name>`              | Loads a lineup (Alias: `.ln`).                                                                                        |
| `.nadecam` / `.traj`            | Toggles `sv_grenade_trajectory_prac_pipreview` in practice mode.                                                      |
| `.nobots`                       | Removes all bots.                                                                                                 |
| `.noflash`                      | Toggles immunity to flashbangs (it will still blind others with noflash disabled).                                    |
| `.rethrow`                      | Rethrows your last thrown grenade (Alias: `.rt`).                                                                     |
| `.rethrowdecoy`                 | Rethrows your last thrown decoy.                                                                                      |
| `.rethrowflash`                 | Rethrows your last thrown flashbang.                                                                                  |
| `.rethrownade`                  | Rethrows your last thrown HE grenade.                                                                                 |
| `.rethrowsmoke`                 | Rethrows your last thrown smoke grenade.                                                                              |
| `.rethrowmolotov`               | Rethrows your last thrown molotov.                                                                                    |
| `.savenade <name> <description>`| Saves a lineup (Alias: `.sn`).                                                                                        |
| `.solid`                        | Set whether team mates are solid.                                                                        |
| `.spawn <number>`               | Spawns to the provided competitive spawn number of the same team.                                                     |
| `.tspawn <number>`              | Spawns to the provided competitive spawn number of T (Alias: `.ts`).                                                  |
| `.throwindex <index>...`        | Throws grenades from specific positions in your history. Example: `.throwindex 1 2` throws your 1st and 2nd grenades. |
| `.timer`                        | Starts a timer and stops it on the second execution, showing the duration.                                            |

### Admin Commands
| Chat Commands               | Description                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| `.ctname <teamname>` / `.tname <teamname>` | Sets team name for Team CT / Team T.                                             |
| `.exitdry`                  | Exits DryRun mode and returns to Practice Mode.                                                 |
| `.exitprac`                 | Exits Practice Mode and switches to Match Mode.                                                 |
| `.force`                    | Force-starts a match.                                                                           |
| `.forcepause`               | Pauses the match as an admin (players cannot unpause an admin-paused game).                     |
| `.forceunpause`             | Force-unpauses the match.                                                                       |
| `.knife` / `.rk`            | Toggles the knife round. If disabled, the match skips the Warmup phase and goes directly to the Live phase. Shortcut commands: `!kr`, `!kniferound`. |
| `.match`                    | Activates Match Mode. **All 10 players must ready up, with the knife round enabled by default**. |
| `.prac`                     | Starts Practice Mode.                                                                           |
| `.readyrequired <number>`   | Sets the required number of ready players to start the match. **All connected players must be ready for the game to begin.** |
| `.restore <round-number>`   | Restores the backup of the specified round number.                                               |
| `.restart`                  | Forcefully restarts or resets a match or scrim. Also available: `.end`, `.endgame`, `.endmatch`, `.forceend`, `.stopmatch` |
| `.scrim`                    | Activates Scrim Mode. All 10 players must ready up, with the knife round disabled. All rounds will be played regardless of the winner—ideal for scrims! |
| `.settings`                 | Displays the current settings, including whether the knife round is enabled, the required number of ready players, and more. |
| `.start`                    | Force-starts a match.                                                                           |
