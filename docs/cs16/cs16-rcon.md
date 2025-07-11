---
slug: rcon
id: cs16-rcon
title: "RCON Commands"
---

## Log into RCON
Open console in-game by clicking § (below ESC) and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).
<br /> `rcon_password type_rcon_pass_here`

## General Settings
:::tip
If you want additional custom maps added that we don't already have, please [check here first](https://dl.fsho.st/cs16/maps/). If the maps you want are not there then [contact us](https://fshost.me/contact) with the map download links.

<br />**We suggest these site below**:
<br /> [Gamebanana](https://gamebanana.com/mods/cats/5474)
<br /> [CS-BG.info](https://maps.cs-bg.info/) 
<br /> [gamemaps.com](https://www.gamemaps.com/cs/maps)
<br /> [tsarvar.com](https://tsarvar.com/en/maps/counter-strike-1.6)
<br /> [7buddies.rocks](https://www.17buddies.rocks/17b2/View/Maps/Gam/1/Mod/1/Cat/0/All/0/Pag/1/Counter-Strike.html)
:::

**Maps**<br />
List all maps.
<br /> `rcon maps *`

Changing the map (any stock or custom map).
<br /> `rcon changelevel mapnamehere`

To restart the game after X amount of seconds.
<br /> `rcon sv_restart seconds`


**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `rcon sv_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you are required to keep the advert part in the hostname.**
`rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"`


## Policing Your Server

**Status**<br />
Shows the Slot Number, Name, SteamID, IP, and other info of the players connected.
<br />`rcon status`

**Players**<br />
Get players list
<br />`rcon users`

Kick a player
<br />`rcon kick #id or name`

## Other RCon Commands
| RCON Command | Description |
| ------------ | ----------- |
| rcon mp_buytime 2 | Designate the desired amount of buy time for each round. |
| rcon mp_startmoney 1337 | Sets the amount of money players start with. |
| rcon mp_timelimit 20 | Change the map timelimit |
| rcon mp_roundtime 2 | Sets the amount of roundtime |
| rcon mp_autokick 1 | Autokicks an idling person 1 is on, 0 is off |
| rcon mp_autoteambalance 1 | Toggles the forcing of clients to join teams to make it balanced – Setting of 1 = ‘on’, and 0 = ‘off’. |
| rcon mp_c4timer 45 | Sets the amount of time in between C4 placement and its explosion – ranges between 15 and 90 seconds. |
| rcon mp_freezetime 3 | Sets the amount of “freeze” time at the beginning of each round to buy weapons and equipment – Use a setting of ‘0’ to disable. |
| rcon mp_friendlyfire 1 | Toggles friendly fire. 1 is on, 0 is off |
| rcon sv_alltalk 1 | Toggles team only or entire server mic chat - 1 is on, 0 is off |
| rcon sv_voiceenable 1 | Allows clients to use mic - 1 is on, 0 is off |
| rcon sv_cheats 1 | Toggles cheats - 1 is on, 0 is off |
| rcon sv_gravity 800 | Sets the amount of gravity |
<br />
:::tip
If you want to make use of `impulse 101`, (client side) then you need to enable sv_cheats and do changemap to a random map.
:::


## PODBot Commands
<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Pro server only</span><br />
:::tip
You can use **amx_pbmenu** to control bots. You only need to be an admin on your CS1.6 server for this to be possible.

<br />You can find more commands from [this page](http://podbotmm.bots-united.com/doc_v3/html/pbmm_configuration.html)
:::

| RCON Command | Description |
| ------------ | ----------- |
| `rcon pb add [1-100]` | This command adds a Bot with parameters - skill You can write from 1 to 100 - **Example**: `rcon pb add 35` |
| `rcon pb_autokill 0/1` | Turns on/off auto killing bots if all human players are dead already. Default is off (0). |
| `rcon pb removebots` | This command kicks bots from Your server until reaching pb_minbots. |
