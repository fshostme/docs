---
slug: Simpleadmin
id: cs2-plugins-simpleadmin
title: CS2-SimpleAdmin
---

Manage your Counter-Strike 2 server by simple commands :)

### Commands
| Console / Chat Command | Description |
| ------- | ----------- |
| css_hide / !hide | Hide admin on scoreboard and commands action |
| css_admin / !admin | Display all admin commands (Only for this plugin) |
| css_who `<#userid or name>` / !who `<#userid or name>` | Display informations about player |
| css_players | Display player list |
| css_ban / !ban `<#userid or name>` [time in minutes/0 perm] [reason] | Ban Player |
| css_addban / !addban `<steamid>` [time in minutes/0 perm] [reason] | Ban player via steamid64 |
| css_banip / !banip  `<ip>` [time in minutes/0 perm] [reason] | Ban player via IP address |
| css_unban / !unban `<steamid or name or ip>` | Unban player |
| css_kick / !kick `<#userid or name>` [reason] | Kick player |
| css_gag `<#userid or name>` [time in minutes/0 perm] [reason] | Gag player |
| css_addgag `<steamid>` [time in minutes/0 perm] [reason] | Gag player via steamid64 |
| css_ungag `<steamid or name>` | Ungag player |
| css_mute `<#userid or name>` [time in minutes/0 perm] [reason] | Mute player |
| css_addmute `<steamid>` [time in minutes/0 perm] [reason] | Mute player via steamid64 |
| css_unmute `<steamid or name>` | Unmute player |
| css_silence `<#userid or name>` [time in minutes/0 perm] [reason] | Silence player |
| css_addsilence `<steamid>` [time in minutes/0 perm] [reason] | Silence player via steamid64 |
| css_unsilence `<steamid or name>` | Unsilence player |
| css_give `<#userid or name> <WeaponName>` | Gives a weapon to a Player |
| css_strip `<#userid or name>` | Takes all of the player weapons |
| css_hp `<#userid or name>` [health] | Set player health |
| css_speed `<#userid or name>` [speed] | Set player speed |
| css_god `<#userid or name>` | Toggle godmode for player |
| css_slay `<#userid or name>` | Kill player |
| css_slap `<#userid or name>` [damage] | Slap player |
| css_team `<#userid or name> [<ct/tt/spec/swap>]` | [-k] Change player team (swap - swap player team, -k - kill player) |
| css_vote ["Question?">] ["Answer1"] ["Answer2"] ... | Create vote |
| css_asay `<message>` | Say message to all admins |
| css_say `<message>` | Say message as admin in chat |
| css_psay `<#userid or name>` `<message>` | Sends private message to player |
| css_csay `<message>` | Say message as admin in center |
| css_hsay `<message>` | Say message as admin in hud |
| css_noclip `<#userid or name>` | Toggle noclip for player |
| css_freeze `<#userid or name>` [duration] | Freeze player |
| css_unfreeze `<#userid or name>` | Unfreeze player |
| css_rename `<#userid or name> <new name>` | Rename player |
| css_prename `<#userid or name> <new name>` | Permanently rename player (until the server restarts - don't set new name to remove perm rename) |
| css_respawn `<#userid or name>` | Respawn player |
| css_cvar `<cvar> <value>` | Change cvar value |
| team_chat @Message | Say message to all admins | 
