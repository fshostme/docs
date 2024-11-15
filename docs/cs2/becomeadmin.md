---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become as Server Admin"
description: "How can I become a serveradmin on my CS2 Pro server"
sidebar_label: "Become as Server Admin"
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction
How can I become an administrator on my CS2 Pro server for the first time? Below, we've provided step-by-step instructions to guide you through the process.

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>PRO only</span>

**There are two different methods to do this, as shown in the videos below.**
<details>
  <summary>How to use the `/login <rcon password>` command with Say / Say_Team In-Game?</summary>

<video playsinline autoPlay muted width="100%">
  <source src="https://dl.fsho.st/videos/cs2-admin-login2.mp4"/>
</video>
</details>

<details>
 <summary>How to use the `login <rcon password>` command with my ingame console? (Open the console first)</summary>

<video playsinline autoPlay muted width="100%">
  <source src="https://dl.fsho.st/videos/cs2-admin-console-login.mp4" type="video/mp4"/>
</video>
</details>

:::note[You can use the `Say` or `Say_team` commands directly from your in-game chat.]
1. What RCON password did you set for your CS2 Pro Server? (Make sure to remember it!)
2. Join your CS2Pro Server
3. **Say**/**Say_team**: `/login YourGameServer's RCON Password`
4. **Say**/**Say_team**: `/addadmin YourSteamID64` to add yourself or your friend as admin.
:::

:::note[Open your console, from your in-game]
1. What RCON password did you set for your CS2 Pro Server? (Make sure to remember it!)
2. Join your CS2Pro Server
3. `login YourGameServer's RCON Password` 
4. `addadmin YourSteamID64` to add yourself or your friend as admin.
:::

**This is an example of what it looks like after you've added yourself as a server admin.**
![2024-08-22_13-24](https://github.com/user-attachments/assets/74a456ce-627a-4508-ab33-c827415b6593)


| Chat Command | Description |
| ------------ | ----------- |
| `/addadmin [target]` | To add a new administrator to your CS2 server, you can enter their SteamID64 |
| `/removeadmin [target]` | To remove an administrator from the server, you can enter their SteamID64 |
| `/listadmins` | Show a list of administrators on your CS2 server along with their SteamID64 and nickname. |
