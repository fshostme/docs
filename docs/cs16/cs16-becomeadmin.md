---
slug: becomeadmin
id: cs16-becomeadmin
title: "CS1.6: Become a Server Admin"
description: "How to Become a Server Admin on Your CS16 Server"
sidebar_label: "Become as Server Admin"
---

## Information
**How do I become an admin on a CS1.6 server?**<br />
To become an admin on a CS 1.6 server, connect to the server and open the in-game console. Follow the steps to authenticate or configure admin privileges according to the server's guidelines.

:::tip
Remember to keep your RCON password safe. If you've closed your browser, you can reopen it to retrieve the password from where it was saved or noted. [Free Server Panel](https://fshost.me/free-panel)
:::

When you open the in-game console, enter the RCON password you previously saved.

Here’s an example of a console screenshot:
![image](https://help.fshost.me/img/cs16-console.png)

To verify everything is working correctly, type the following command in the console: `rcon say hello`.
![image](https://help.fshost.me/img/cs16-console2.png)

In this example, we can confirm the RCON is functioning properly.
![image](https://help.fshost.me/img/cs16-say.png)

### Important
:::danger
**We highly recommend avoiding entering your password directly. If you’ve already done so and encounter an error message, 'You have no entry to the server...' <br /><br />Please contact our support team immediately.**
:::

## Become Admin Command (Example)
`rcon amx_addadmin "nickname" "flags"`

**Below is a complete example with a reference screenshot.**
![image](https://help.fshost.me/img/cs16-console3.png)

Congratulations! You are now an administrator on the CS 1.6 server. Access the admin menu through the in-game console command: `amxmodmenu`.

:::note
**Please note that our free CS 1.6 service does not offer permanent admin privileges**.

For permanent admin privileges on your CS 1.6 server, consider exploring this product: [Pro](https://fshost.me/pro)
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
