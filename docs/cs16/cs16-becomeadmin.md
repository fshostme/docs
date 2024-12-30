---
slug: becomeadmin
id: cs16-becomeadmin
title: "CS 1.6: Become an admin on FSHOST server"
description: "Information on how to become an admin on your CS 1.6 server from FSHOST"
sidebar_label: "Become admin"
---

## Information
**How can I become admin on CS1.6 server?**<br />
To become an admin on a CS 1.6 server, start by connecting to the server and opening the in-game console. From there, follow the necessary steps to authenticate or set up admin privileges, as directed by the server's guidelines.

:::tip
Make sure to remember the RCON password you created. If you've closed your browser, you can reopen it to retrieve the password from where it was saved or noted. [Free Server Panel](https://fshost.me/free-panel)
:::

When you open the in-game console, you'll need to enter the RCON password that you previously saved.

Here is an **example of a console** screenshot:
![image](https://help.fshost.me/img/cs16-console.png)

To ensure everything is working correctly, type the following command in the console: `rcon say hello`.
![image](https://help.fshost.me/img/cs16-console2.png)

In this screenshot, we can confirm that our RCON is functioning correctly.
![image](https://help.fshost.me/img/cs16-say.png)

### Important
:::danger
**We strongly recommend that you avoid entering your password directly. If you have already done so and encounter the error message, 'You have no entry to the server...' <br /><br />Please contact our support team immediately.**
:::

## Become Admin Command (Example)
`rcon amx_addadmin "nickname" "flags"`

**Below, we will provide a full example with a screenshot for reference.**
![image](https://help.fshost.me/img/cs16-console3.png)

Congratulations! You are now an administrator on the CS 1.6 server. You can access the admin menu using the command: `amxmodmenu`.

:::note
**Please note that our free CS 1.6 service does not grant permanent admin privileges.**

If you're interested in obtaining permanent admin privileges for your CS 1.6 server, we recommend checking out this product: [Pro](https://fshost.me/pro)
:::


### Admin Levels
| Access level | Description                                                  |
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
