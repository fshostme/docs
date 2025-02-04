---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become a Server Admin"
description: "How to Become a Server Admin on Your CS2 Pro Server"
sidebar_label: "Become as Server Admin"
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction
Wondering how to set yourself as an admin on your CS2 Pro server? Follow these step-by-step instructions to get started.

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>PRO server only</span>

**There are two different methods to do this, as shown in the videos below.**
<details style={{
  '--docusaurus-details-summary-arrow-size': '0',
  '--docusaurus-details-summary-arrow': 'none',
  position: 'relative',
  border: '1px solid #3d3d40',
  borderRadius: '8px',
  backgroundColor: '#1c1c1e',
  cursor: 'pointer',
  overflow: 'hidden',
}}>
<summary style={{
    fontWeight: 'bold',
    color: '#00ff88',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
}}>

How to use the `/login RconPass` command with `say`/`say_team`? (**Watch Video**)
</summary>
<video playsinline autoPlay muted width="100%">
  <source src="https://dl.fsho.st/videos/cs2-admin-login2.mp4"/>
</video>
</details>

<details style={{
  '--docusaurus-details-summary-arrow-size': '0',
  '--docusaurus-details-summary-arrow': 'none',
  position: 'relative',
  border: '1px solid #3d3d40',
  borderRadius: '8px',
  backgroundColor: '#1c1c1e',
  cursor: 'pointer',
  overflow: 'hidden',
}}>
<summary style={{
    fontWeight: 'bold',
    color: '#00ff88',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
}}>

How to use the `login RconPass` command in the in-game console? (**Watch Video**)
</summary>

<video playsinline autoPlay muted width="100%">
  <source src="https://dl.fsho.st/videos/cs2-admin-console-login.mp4" type="video/mp4"/>
</video>
</details>

:::note
1. Enter the RCON password you set for your CS2 Pro Server. (Don’t forget it!)
2. Connect to your CS2 Pro Server.
3. Open your `say` chat and type: `/login RconPass` replace RconPass with your actual RCON password.
4. Open your `say` chat and type: `/addadmin YourSteamID64` to add yourself or a friend as an admin.
:::


**Here's an example of how it looks after adding yourself as a server admin.**
![2024-08-22_13-24](https://github.com/user-attachments/assets/74a456ce-627a-4508-ab33-c827415b6593)


| Chat Command      | Example                             | Description                                                                                     |
|-------------------|-------------------------------------|-------------------------------------------------------------------------------------------------|
| /addadmin [target] | `/addadmin 76561198975357634`       | To add a new administrator to your CS2 server, you need to input their SteamID64. Alternatively, you can add their Steam nickname, but they must be actively connected to the game server for this to work. |
| /removeadmin [target] | `/removeadmin 76561198975357634` | To remove an administrator from your server, simply enter their SteamID64 or Steam nickname.    |
| /listadmins       | the command make sense             | Show a list of administrators on your CS2 server along with their SteamID64 and nickname.      |
