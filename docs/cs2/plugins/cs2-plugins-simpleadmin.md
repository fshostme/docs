---
slug: cs2-simpleadmin
id: cs2-plugins-simpleadmin
title: CS2-SimpleAdmin
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Command Reference

<Admonition type="info">
  Most of the commands can also be used using prefix instead of slash (e.g., <code>!</code> marks or <code>/</code>).
</Admonition>

## Admin Commands

<Tabs>
  <TabItem value="userManagement" label="User Management" default>
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">/css_ban</div>
        <div className="command-description">
          Adds admin ban. STEAM or Name must be in quotes. Time is minutes/0=permanent.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_ban &lt;player&gt; [time] [reason]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_ban "Player" 30 "Cheating"</div>
        </div>
        <div className="command-details">
          <ul>
            <li>Bans a player by name or Steam ID</li>
            <li>Time is in minutes (0 = permanent)</li>
            <li>Reason must be in quotes if it contains spaces</li>
          </ul>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_addban</div>
        <div className="command-description">
          Add ban for offline player. Time is minutes/0=permanent.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_addban &lt;SteamID64&gt; [time] [reason]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_addban "SteamID64" 30 "Cheating"</div>
        </div>
        <div className="command-details">
          <ul>
            <li>Bans a player by SteamID</li>
            <li>Time is in minutes (0 = permanent)</li>
            <li>Reason must be in quotes if it contains spaces</li>
          </ul>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_kick</div>
        <div className="command-description">
          Kicks a player from the server with an optional reason.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_kick &lt;player&gt; [reason]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_kick "STEAM_1:0:1234"</div>
        </div>
        <div className="command-details">
          <ul>
            <li>Player can be name, partial name, or Steam ID</li>
            <li>Reason is optional but recommended</li>
          </ul>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_banip</div>
        <div className="command-description">
          Bans an IP address for a specific time with an optional reason.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_banip &lt;ip&gt; [time] [reason]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_banip 192.168.1.1 60 "Suspected VPN"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_unban</div>
        <div className="command-description">
          Removes a ban matching the given Steam ID or IP address.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_unban &lt;steamid|ip&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_unban STEAM_1:0:12345</div>
        </div>
      </div>
    </div>
  </TabItem>

  <TabItem value="serverManagement" label="Server Management">
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">/css_rcon</div>
        <div className="command-description">
          Executes an RCON command from the server console.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_rcon &lt;command&gt; [args]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_rcon sv_cheats 1</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_cvar</div>
        <div className="command-description">
          Shows or sets the value of a CVAR.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_cvar &lt;cvar&gt; [value]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_cvar sv_gravity 600</div>
        </div>
      </div>
    </div>
  </TabItem>

  <TabItem value="playerManagement" label="Player Management">
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">/css_slap</div>
        <div className="command-description">
          Slaps a player with optional damage.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_slap &lt;player&gt; [damage]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_slap "Player" 5</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_slay</div>
        <div className="command-description">
          Kills a player instantly.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_slay &lt;player&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_slay "Player"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_gag</div>
        <div className="command-description">
          Prevents a player from using voice chat.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_gag &lt;player&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_gag "Player"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_mute</div>
        <div className="command-description">
          Prevents a player from using text chat.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_mute &lt;player&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_mute "Player"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_silence</div>
        <div className="command-description">
          Prevents a player from using both text and voice chat.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_silence &lt;player&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_silence "Player"</div>
        </div>
      </div>
    </div>
  </TabItem>

  <TabItem value="communication" label="Communication">
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">/css_say</div>
        <div className="command-description">
          Sends a message to all players.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_say &lt;message&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_say "Next map: de_dust2"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_csay</div>
        <div className="command-description">
          Sends a message to the center of the screen.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_csay &lt;message&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_csay "Match starting in 1 minute!"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_hsay</div>
        <div className="command-description">
          Sends a hint message to all players.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_hsay &lt;message&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_hsay "Type !help for commands"</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">/css_psay</div>
        <div className="command-description">
          Sends a private message to a player.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">/css_psay &lt;player&gt; &lt;message&gt;</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">/css_psay "Player" "Please follow server rules"</div>
        </div>
      </div>
    </div>
  </TabItem>
</Tabs>

## User Commands

<div className="command-list">
  <div className="command-card">
    <div className="command-header">/help /commands</div>
    <div className="command-description">
      Shows all available commands for your access level.
    </div>
    <div className="command-syntax">
      <div className="syntax-label">Syntax:</div>
      <div className="syntax-code">/help</div>
    </div>
  </div>

  <div className="command-card">
    <div className="command-header">/timeleft</div>
    <div className="command-description">
      Shows the remaining time on the current map.
    </div>
    <div className="command-syntax">
      <div className="syntax-label">Syntax:</div>
      <div className="syntax-code">/timeleft</div>
    </div>
  </div>

  <div className="command-card">
    <div className="command-header">/nextmap</div>
    <div className="command-description">
      Shows the next map in the rotation.
    </div>
    <div className="command-syntax">
      <div className="syntax-label">Syntax:</div>
      <div className="syntax-code">/nextmap</div>
    </div>
  </div>
</div>

<div className="footer-note">
  <p>If you are looking for more commands, you can find them at <a href="https://cs2-simpleadmin.daffyy.dev/" target="_blank">this CS2 Wiki</a>.</p>
</div>

<style>
{`
/* Dark Theme Command Layout Styles */
:root {
  --primary-color: #4caf50;
  --card-bg: #1a1a1a;
  --header-bg: #1e1e1e;
  --border-color: #333;
  --text-color: #e0e0e0;
  --label-color: #9e9e9e;
}

body {
  background-color: var(--darker-bg);
  color: var(--text-color);
}

.search-container {
  margin: 20px 0;
}

.command-search {
  width: 100%;
  padding: 12px;
  background-color: var(--dark-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-color);
  font-size: 16px;
}

.command-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
}

.command-card {
  background-color: var(--card-bg);
  border-left: 4px solid var(--primary-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
}

.command-header {
  background-color: var(--header-bg);
  color: var(--primary-color);
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
}

.command-description {
  color: var(--text-color);
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
}

.command-syntax, .command-example {
  display: flex;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border-color);
}

.syntax-label, .example-label {
  color: var(--label-color);
  width: 80px;
  font-weight: bold;
}

.syntax-code, .example-code {
  color: var(--text-color);
  font-family: monospace;
  background-color: #333;
  padding: 2px 6px;
  border-radius: 3px;
}

.command-details {
  padding: 8px 16px;
}

.command-details ul {
  margin: 0;
  padding-left: 20px;
}

.command-details li {
  margin-bottom: 4px;
  color: var(--label-color);
}

.footer-note {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  color: var(--label-color);
  font-size: 14px;
  text-align: center;
}

.footer-note a {
  color: var(--primary-color);
  text-decoration: none;
}

.footer-note a:hover {
  text-decoration: underline;
}

/* Tab styling */
[data-theme='tabs'] {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--border-color) !important;
}

[data-theme='tabs-item'] {
  color: var(--text-color) !important;
}

[data-theme='tabs-item-active'] {
  background-color: var(--header-bg) !important;
  color: var(--primary-color) !important;
}
`}
</style>
