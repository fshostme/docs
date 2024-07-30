---
id: cod4-promodlive
title: "Promod Live"
description: Information about Promod Live
---

Promod, a Competition Mod for Call of Duty 4: Modern Warfare

## PROMOD MODES

The promod_mode dvar follows a specific syntax. However the game accepts the bits between underscores ( _ ) in any order.
| Command               | Description           |
|:----------------------|:----------------------|
| <span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> <span style={{color: '#81C784'}}>match</span> | Match mode, may not be used with knockout mode. Round limit = mr#*2 |
| <span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> <span style={{color: '#81C784'}}>knockout</span> | Knockout match mode, may not be used with standard match mode. |
| <span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> <span style={{color: '#81C784'}}>match_mrX</span> | Maxrounds - Default is 10. Works only in Search & Destroy and Sabotage. |
| <span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> lan | g_antilag 0, PunkBuster messages turned off, may not be used with pb mode. |
| <span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> hc | Hardcore mode (disables some HUD elements and reduces health level to 30). |
| <span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> knife | Adds a knife round and an extra ready-up mode to Search & Destroy matches. |
|<span style={{color: '#f9a8d4'}}>/rcon promod_mode</span> 1v1/2v2 | Disables Demolitions and Sniper classes. |


For example `/rcon promod_mode match_mr10_knife_pb` will enable knife round and disable PunkBuster warnings in standard maxrounds 10 mode.
