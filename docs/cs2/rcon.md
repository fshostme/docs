---
slug: rcon
id: cs2-rcon
title: "RCON Commands"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

## RCON Access Guide

:::danger RCON INFO
The RCON provided by Valve is currently broken and non-functional. Please use `fake_rcon` instead.
:::

## Accessing Admin Commands

Open your in-game console and use the following commands to log in as an admin on your server.

<Tabs>
  <TabItem value="free" label="Free Server" default>
    <h3>Temporary Admin Access on Free Server</h3>
    
    <p>The RCON password will be displayed on your <a href="/docs/server-panel">Free server panel</a>.</p>
    
    <h4>Step 1: Enter your RCON password</h4>
    
    ```
    fake_rcon_password type_rcon_pass_here
    ```
    
    <h4>Step 2: Verify your access</h4>
    
    ```
    fake_rcon say hi
    ```
    
    <div className="code-example">
      <div className="terminal-window">
        <div className="terminal-header">CONSOLE</div>
        <div className="terminal-content">
          <span className="terminal-prompt">></span> <span className="terminal-command">fake_rcon_password rcon1337</span><br/>
          <span className="terminal-output">[Client] You can now use the fake_rcon command</span><br/>
          <span className="terminal-prompt">></span> <span className="terminal-command">fake_rcon say hi</span><br/>
          <span className="terminal-output">Console: hi</span>
        </div>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="pro" label="Pro Server">
    <h3>Server Admin Access on Pro Server</h3>
    
    :::tip Pro Server Tip
    If you have a Pro server and want to learn how to become a Server Admin on CS2, click the link below for more information.
    
    <a href="/docs/cs2/becomeadmin" className="button button--primary">Server Admin Guide</a>
    :::
  </TabItem>
</Tabs>

## Common RCON Commands

After gaining RCON access, you can use these commands to manage your server:

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>fake_rcon status</code></td>
        <td>Shows all connected players and server info</td>
        <td><code>fake_rcon status</code></td>
      </tr>
      <tr>
        <td><code>fake_rcon kick &lt;name/id&gt;</code></td>
        <td>Kicks a player from the server</td>
        <td><code>fake_rcon kick "Player1"</code></td>
      </tr>
      <tr>
        <td><code>fake_rcon say &lt;message&gt;</code></td>
        <td>Broadcasts a message to all players</td>
        <td><code>fake_rcon say "Match starts in 2 minutes"</code></td>
      </tr>
      <tr>
        <td><code>fake_rcon mp_restartgame &lt;seconds&gt;</code></td>
        <td>Restarts the game after specified seconds</td>
        <td><code>fake_rcon mp_restartgame 5</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Troubleshooting

<div className="troubleshooting">
  <h3>Common Issues</h3>
  
  <details>
    <summary>RCON command not working</summary>
    <p>Make sure you've correctly entered the <code>fake_rcon_password</code> command first. Check for any typos in the password.</p>
  </details>
  
  <details>
    <summary>Message not appearing in game</summary>
    <p>Some commands may require quotes around text with spaces. Try: <code>fake_rcon say "Your message here"</code></p>
  </details>
  
  <details>
    <summary>Can't see console output</summary>
    <p>Make sure your developer console is enabled in game settings. Press ~ (tilde) to open it.</p>
  </details>
</div>

<style>
{`
  .terminal-window {
    background-color: #1e1e1e;
    border-radius: 6px;
    margin: 20px 0;
    overflow: hidden;
  }
  
  .terminal-header {
    background-color: #333;
    color: #ddd;
    padding: 8px 15px;
    text-align: center;
    font-family: monospace;
    font-weight: bold;
  }
  
  .terminal-content {
    padding: 15px;
    font-family: monospace;
    color: #f1f1f1;
    line-height: 1.5;
  }
  
  .terminal-prompt {
    color: #888;
  }
  
  .terminal-command {
    color: #fff;
  }
  
  .terminal-output {
    color: #4CAF50;
  }
  
  .button {
    display: inline-block;
    margin-top: 10px;
  }
  
  .troubleshooting {
    background-color: #f8f8f8;
    border-left: 4px solid #1a73e8;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;
  }
  
  [data-theme='dark'] .troubleshooting {
    background-color: #2d2d2d;
    border-left: 4px solid #4285f4;
  }
`}
</style>

## Map Commands

### Display Available Maps
Shows a list of all maps that can be loaded on the server.
```
fake_rcon maps *
```

### Change Current Map
Changes the current map to any available map on the server.

**Format:**
```
say !map <mapname>
```
OR
```
say_team !map <mapname>
```

**Examples:**
```
say !map dust2
say_team !map nuke
say !map inferno
```

## Game Configuration

### Restart Game
Restarts the game after a specified number of seconds. *(FREE server only)*

**Format:**
```
fake_rcon mp_restartgame <seconds>
```

**Examples:**
```
fake_rcon mp_restartgame 3    // Restart after 3 seconds
fake_rcon mp_restartgame 10   // Restart after 10 seconds
```

### Starting Money
Sets the amount of money players receive at the beginning of each half. Default is 800.

**Format:**
```
fake_rcon mp_startmoney <amount>
```

**Examples:**
```
fake_rcon mp_startmoney 1000  // Give players $1000 at start
fake_rcon mp_startmoney 16000 // Give players max money at start
```

### Maximum Rounds
Sets the maximum number of rounds the server will play.

**Format:**
```
fake_rcon mp_maxrounds <amount>
```

**Examples:**
```
fake_rcon mp_maxrounds 15    // Play 15 rounds before restart
fake_rcon mp_maxrounds 30    // Play 30 rounds before restart
```

## Player Movement

### Auto Bunny Hopping
When enabled (set to 1), players will automatically bunny hop by holding down the space bar. Default is disabled (0).

**Format:**
```
fake_rcon sv_autobunnyhopping <0 / 1>
```

**Examples:**
```
fake_rcon sv_autobunnyhopping 1    // Enable auto bunnyhopping
fake_rcon sv_autobunnyhopping 0    // Disable auto bunnyhopping
```

## Server Security

### Server Password
Sets or removes the password required to join your server. Leave empty to remove password.

**Format:**
```
fake_rcon sv_password "<password>"
```

**Examples:**
```
fake_rcon sv_password "secretpass"    // Set password to "secretpass"
fake_rcon sv_password ""              // Remove password
```

## Server Identity

### Server Hostname
Changes the server's name that appears in the server browser and in-game.

**Format:**
```
fake_rcon hostname "<custom name>"
```

> **⚠️ Important:** You must keep the advert part in the hostname.

**Example:**
```
fake_rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"
```

## Cheat Commands

### Enable Cheats
Enables or disables sv_cheats on the server.

**Format:**
```
fake_rcon sv_cheats <0 / 1>
```

**Examples:**
```
fake_rcon sv_cheats 1    // Enable cheats
fake_rcon sv_cheats 0    // Disable cheats
```

## Game Configuration Commands

:::caution Free server only
These commands load predefined game settings through chat commands.
:::

## How to Use

Type these commands in chat using `say` or `say_team` followed by the command.

<Tabs>
  <TabItem value="say" label="say" default>
  ```
  say <command>
  ```
  </TabItem>
  <TabItem value="say_team" label="say_team">
  ```
  say_team <command>
  ```
  </TabItem>
</Tabs>

## Available Configurations

### Game Modes

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>!dm</code></td>
        <td>Deathmatch Gamemode</td>
        <td>Classic free-for-all deathmatch</td>
      </tr>
      <tr>
        <td><code>!wingman</code></td>
        <td>Wingman Gamemode</td>
        <td>2v2 competitive format</td>
      </tr>
      <tr>
        <td><code><s>!retake</s></code></td>
        <td><s>Retake Gamemode</s></td>
        <td><b>Disabled</b> due to bug with Valve's retake mode</td>
      </tr>
    </tbody>
  </table>
</div>

### ESL & Practice Configurations

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>!esl5on5</code></td>
        <td>Standard ESL 5on5 configuration</td>
        <td><i>Note: A ready system is not included</i></td>
      </tr>
      <tr>
        <td><code>!scrim</code></td>
        <td>Configuration for scrims</td>
        <td>All rounds enabled<br /><i>Note: Pause and unpause commands are not available</i></td>
      </tr>
      <tr>
        <td><code>!prac</code></td>
        <td>Default practice configuration</td>
        <td>
          <i>Note: Public commands like <code>.throw</code>, <code>.bot</code> are not accessible</i><br />
          To use these commands, a Pro server is required
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Map Commands

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Map</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>!map ancient</code></td>
        <td>Ancient</td>
        <td>Loads the Ancient map</td>
      </tr>
      <tr>
        <td><code>!map anubis</code></td>
        <td>Anubis</td>
        <td>Loads the Anubis map</td>
      </tr>
      <tr>
        <td><code>!map dust2</code></td>
        <td>Dust II</td>
        <td>Loads the Dust II map</td>
      </tr>
      <tr>
        <td><code>!map inferno</code></td>
        <td>Inferno</td>
        <td>Loads the Inferno map</td>
      </tr>
      <tr>
        <td><code>!map mirage</code></td>
        <td>Mirage</td>
        <td>Loads the Mirage map</td>
      </tr>
      <tr>
        <td><code>!map nuke</code></td>
        <td>Nuke</td>
        <td>Loads the Nuke map</td>
      </tr>
      <tr>
        <td><code>!map overpass</code></td>
        <td>Overpass</td>
        <td>Loads the Overpass map</td>
      </tr>
      <tr>
        <td><code>!map vertigo</code></td>
        <td>Vertigo</td>
        <td>Loads the Vertigo map</td>
      </tr>
      <tr>
        <td><code>!map train</code></td>
        <td>Train</td>
        <td>Loads the Train map</td>
      </tr>
    </tbody>
  </table>
</div>

## Usage Examples

```bash
say !esl5on5       # Load ESL 5on5 configuration
say_team !prac     # Load practice configuration 
say !map dust2     # Change map to Dust II
say_team !dm       # Switch to Deathmatch mode
```
