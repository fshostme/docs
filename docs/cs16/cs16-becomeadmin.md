---
slug: becomeadmin
id: cs16-becomeadmin
title: "CS 1.6: Become an admin on your own server"
description: Information on how to become an admin on your CS 1.6 server from FSHOST
sidebar_label: Become admin
---

**How can I become admin on CS1.6 server?**<br />
First, connect to the CS1.6 server and open your console in the game

:::tip
You need to remember the RCON Password you has made. if you have closed the browser down, you can open it again to find the passwords. [this panel](https://fshost.me/free-panel)
:::

When you open the console in the game, we need the RCON password we have saved.

Here is a **example console** screenshot:
![image](https://help.fshost.me/img/cs16-console.png)

We want to make sure it works, so we type this command on the console: `rcon say hello` 
![image](https://help.fshost.me/img/cs16-console2.png)

On this screenshot, we can confirm our RCON work
![image](https://help.fshost.me/img/cs16-say.png)

:::danger
**We do NOT recommend entering a password, if you have done so, please contact support so we can remove it!**
:::

`rcon amx_addadmin "nickname" "flags"`

**Here below, we will show you a full example (screenshot)**:

![image](https://help.fshost.me/img/cs16-console3.png)

Done, you are now an administrator on the CS1.6 server and you have access to this command: `amxmodmenu`.

:::note
**You do not get permanent admin on our free CS 1.6 service.**

If you want permanent admin for CS 1.6 server, we recommend taking a look at this product: [Pro](https://fshost.me/pro)
:::


**Authorization level**

| Authorization level | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| a                   | immunity (can't be kicked/baned/slayed/slaped and affected by other commmands) |
| b                   | reservation (can join on reserved slots)                     |
| c                   | amx_kick command                                             |
| d                   | amx_ban and amx_unban commands                               |
| e                   | amx_slay and amx_slap commands                               |
| f                   | amx_map command                                              |
| g                   | amx_cvar command (not all cvars will be available)           |
| h                   | amx_cfg command                                              |
| i                   | amx_chat and other chat commands                             |
| j                   | amx_vote and other vote commands                             |
| k                   | access to sv_password cvar (by amx_cvar command)             |
| l                   | access to amx_rcon command and rcon_password cvar (by amx_cvar command) |
| m                   | custom level A (for additional plugins)                      |
| n                   | custom level B (for additional plugins)                      |
| o                   | custom level C (for additional plugins)                      |
| p                   | custom level D (for additional plugins)                      |
| q                   | custom level E (for additional plugins)                      |
| r                   | custom level F (for additional plugins)                      |
| s                   | custom level G (for additional plugins)                      |
| t                   | custom level H (for additional plugins)                      |
| u                   | menu access                                                  |
