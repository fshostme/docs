---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become a Server Admin on Pro Server"
description: "How to Become a Server Admin on Your CS2 Pro Server"
sidebar_label: "Become as Server Admin"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution PRO SERVER ONLY
These admin commands are only available on Pro servers.

**This does NOT work on FREE server!**
:::

## Introduction

Wondering how to set yourself up as an admin on your CS2 Pro server? Follow these step-by-step instructions to get started.

## Web Management Interface

You can also add and remove in-game admins from the web interface.

<div className="web-admin-container">
  <div className="web-admin-steps">
    <h3>How to Access</h3>
    <ol>
      <li>Go to your server edit page</li>
      <li>Click "Manage Admins" button</li>
    </ol>
  </div>
  
  <div className="web-admin-benefits">
    <h3>Benefits</h3>
    <ul>
      <li>See Steam profile avatars for easy identification</li>
      <li>Manage admins without using in-game commands</li>
      <li>Keep track of all admins in one place</li>
    </ul>
  </div>
</div>

<style>
{`
  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 25px 0;
  }
  
  .step-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  
  .step-number {
    background-color: var(--ifm-color-primary);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  .step-content {
    flex: 1;
  }
  
  .step-content p {
    margin: 0 0 5px 0;
  }
  
  .step-note {
    color: var(--ifm-color-emphasis-600);
    font-size: 0.9rem;
    font-style: italic;
  }
  
  .command-example {
    background-color: var(--ifm-code-background);
    padding: 10px 15px;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  .command-example code {
    display: block;
    margin-bottom: 5px;
  }
  
  .command-note {
    font-size: 0.9rem;
    color: var(--ifm-color-emphasis-600);
    margin: 0;
  }
  
  .terminal-example {
    background-color: #1e1e1e;
    padding: 15px;
    border-radius: 5px;
    margin: 20px 0;
    font-family: monospace;
  }
  
  .admin-message {
    margin: 5px 0;
    line-height: 1.4;
  }
  
  .success-message {
    color: #4CAF50;
  }
  
  .table-wrapper {
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th {
    background-color: var(--ifm-table-head-background);
    text-align: left;
    padding: 12px;
  }
  
  table td {
    padding: 12px;
    border-top: 1px solid var(--ifm-table-border-color);
  }
  
  .common-tasks {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .task-card {
    background-color: var(--ifm-card-background-color);
    border-radius: 8px;
    box-shadow: var(--ifm-global-shadow-lw);
    padding: 15px;
  }
  
  .task-card h3 {
    margin-top: 0;
    font-size: 1.2rem;
    border-bottom: 1px solid var(--ifm-color-emphasis-200);
    padding-bottom: 10px;
  }
  
  .task-card ul {
    padding-left: 20px;
    margin-bottom: 0;
  }
  
  .task-card li {
    margin-bottom: 8px;
  }
  
  .web-admin-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .web-admin-steps,
  .web-admin-benefits {
    background-color: var(--ifm-card-background-color);
    border-radius: 8px;
    box-shadow: var(--ifm-global-shadow-lw);
    padding: 20px;
  }
  
  .web-admin-steps h3,
  .web-admin-benefits h3 {
    margin-top: 0;
    font-size: 1.2rem;
    border-bottom: 1px solid var(--ifm-color-emphasis-200);
    padding-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    .common-tasks,
    .web-admin-container {
      grid-template-columns: 1fr;
    }
  }
`}
</style>

## Getting Admin Access

<div className="steps-container">
  <div className="step-item">
    <div className="step-number">1</div>
    <div className="step-content">
      <p>Enter the RCON password you set for your CS2 Pro Server</p>
      <p className="step-note">This is the password you configured when setting up your server</p>
    </div>
  </div>
  
  <div className="step-item">
    <div className="step-number">2</div>
    <div className="step-content">
      <p>Connect to your CS2 Pro Server</p>
      <p className="step-note">Join your server through the in-game server browser or direct connect</p>
    </div>
  </div>
  
  <div className="step-item">
    <div className="step-number">3</div>
    <div className="step-content">
      <p>Open your <code>say</code> chat and type the login command</p>
      <div className="command-example">
        <code>/login RconPass</code>
        <p className="command-note">Replace RconPass with your actual RCON password</p>
      </div>
    </div>
  </div>
</div>

### Success Example

When successfully logged in, you'll see confirmation messages in chat:

<div className="terminal-example">
  <div className="admin-message success-message">[Admin Manager] Processing login request...</div>
  <div className="admin-message success-message">[Admin Manager] Login successful. You are now an admin.</div>
</div>

## Admin Commands

<Tabs>
  <TabItem value="chat" label="Chat Commands" default>
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/login [RconPass]</code></td>
            <td>-</td>
            <td>Gives you server admin access using RCON password</td>
          </tr>
          <tr>
            <td><code>/addadmin &lt;SteamID64|Name&gt; &lt;immunity&gt; &lt;flags&gt;</code></td>
            <td><code>/addadmin 76561198975357634 99 z</code></td>
            <td>Add admin with SteamID64</td>
          </tr>
          <tr>
            <td><code>/addadmin &lt;SteamID64|Name&gt; &lt;role&gt;</code></td>
            <td><code>/addadmin 76561198975357634 Helper</code></td>
            <td>Add admin with a role</td>
          </tr>
          <tr>
            <td><code>/removeadmin [target]</code></td>
            <td><code>/removeadmin 76561198975357634</code></td>
            <td>Removes admin by SteamID64 or name</td>
          </tr>
          <tr>
            <td><code>/admins</code></td>
            <td>-</td>
            <td>Shows list of admins</td>
          </tr>
          <tr>
            <td><code>/addadmin help</code></td>
            <td>-</td>
            <td>Lists <code>/addadmin</code> usage</td>
          </tr>
          <tr>
            <td><code>/rolehelp</code></td>
            <td>-</td>
            <td>Lists role-related commands</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TabItem>
  <TabItem value="roles" label="Role Management">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/css_addrole VIP ao 10</code></td>
            <td>VIP role with reservation, immunity 10</td>
          </tr>
          <tr>
            <td><code>/css_addrole Moderator abdh 50</code></td>
            <td>Moderator role with ban/kick/chat, immunity 50</td>
          </tr>
          <tr>
            <td><code>/css_addrole Admin abcdefghijklmn 100</code></td>
            <td>Full admin role, immunity 100</td>
          </tr>
          <tr>
            <td><code>/css_addrole Owner z 100</code></td>
            <td>Full permissions, max immunity</td>
          </tr>
          <tr>
            <td><code>/css_addadmin [PlayerName|SteamID64] VIP</code></td>
            <td>Gives player VIP role</td>
          </tr>
          <tr>
            <td><code>/css_removeRole Owner</code></td>
            <td>Deletes Owner role</td>
          </tr>
          <tr>
            <td><code>/css_roles</code></td>
            <td>Lists all roles</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TabItem>
  <TabItem value="common" label="Common Tasks">
    <div className="common-tasks">
      <div className="task-card">
        <h3>Player Management</h3>
        <ul>
          <li><code>/css_kick &lt;player&gt; [reason]</code> - Kick a player</li>
          <li><code>/css_ban &lt;player&gt; &lt;minutes&gt; [reason]</code> - Ban a player (0 = permanent)</li>
          <li><code>/css_mute &lt;player&gt;</code> - Mute a player</li>
        </ul>
      </div>      
    </div>
  </TabItem>
</Tabs>
