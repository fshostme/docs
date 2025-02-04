---
slug: rcon
id: cod4-rcon
title: "RCON Commands"
---

## Log into RCON
Open console in-game (~) and run the login command to gain access to all the following commands. The RCON password will be displayed on your [free panel](https://fshost.me/free-panel) or [Pro server settings](https://fshost.me/pro/servers).  
`/rcon login type_rcon_pass_here`

## General Settings

### Map
You can change the current map to any stock one or we have a custom map list.  
`/rcon map mp_mapnamehere`

After changing any map settings, like the game mode, it is required to restart the map so it can change.  
`/rcon map_restart`

Reset the scores and map.  
`/rcon fast_restart`

### Password
You can change or remove the password to join your server by leaving the value empty.  
`/rcon g_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you are required to keep the advert part in the hostname.**
`/rcon sv_hostname "^6CUSTOM HOSTNAME ^7- free @ fshost.me"`

### Game Modes
Changing the game mode is done with these commands, but it will only take effect after a map change or restart.  
`/rcon g_gametype gametypehere`  
then  
`/rcon map_restart`

### Map Rotation
Changing the gametype and map rotation (Example)
<br />`/rcon sv_maprotation "gametype sd map mp_backlot map mp_citystreets map mp_crash map mp_strike map mp_crossfire"`

| Command                | Name                      |
|------------------------|---------------------------|
| /rcon g_gametype dm    | Free For All / Deathmatch |
| /rcon g_gametype war   | Team Deathmatch           |
| /rcon g_gametype sd    | Search & Destroy          |
| /rcon g_gametype dom   | Domination                |
| /rcon g_gametype koth  | Headquarters              |
| /rcon g_gametype sab   | Sabotage                  |


## Policing Your Server

### Status
- Shows the Slot Number, Name, GUID, IP, and other info of the players connected.  
`/rcon status`

**Players**
- Get PB player list, if PB is enabled
<br />`/rcon pb_sv_plist`

- Kick a player
<br />`/rcon clientkick clientslot`

- Kick all players
<br />`/rcon kickall`

## Screenshots
:::tip
You can view screenshots taken on our servers by [clicking here](https://fshost.me/screenshots). We cache the images every few minutes so please allow time for them to be added.
::: 
