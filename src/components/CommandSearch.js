import React, { useState } from 'react';

export default function CommandSearch({ commandCategories }) {
  const [search, setSearch] = useState('');

  // Helper function to check if the search matches the command, description, aliases, syntax, example, or arguments
  const matchCommand = (cmd, searchTerm) => {
    const searchLower = searchTerm.toLowerCase();

    return (
      cmd.command.toLowerCase().includes(searchLower) ||
      (cmd.description && cmd.description.toLowerCase().includes(searchLower)) ||
      (cmd.syntax && cmd.syntax.toLowerCase().includes(searchLower)) || // Match syntax
      (Array.isArray(cmd.aliases) && cmd.aliases.some((alias) => alias.toLowerCase().includes(searchLower))) ||
      (cmd.arguments &&
        typeof cmd.arguments === 'object' &&
        Object.entries(cmd.arguments).some(
          ([key, value]) =>
            key.toLowerCase().includes(searchLower) || // Match argument name
            (value && value.toLowerCase().includes(searchLower)) // Match argument description
        )) ||
      (cmd.example && cmd.example.toLowerCase().includes(searchLower)) // Match the example
    );
  };

  // Filter the commands for each category
  const filteredCategories = commandCategories
    .map((category) => ({
      ...category,
      commands: category.commands.filter((cmd) => matchCommand(cmd, search)),
    }))
    .filter((category) => category.commands.length > 0); // Remove empty categories

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a command, syntax, alias, or argument..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          fontSize: '16px',
        }}
      />
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <div key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.commands.map((cmd, cmdIndex) => (
                <li key={cmdIndex}>
                  <strong>{cmd.command}</strong>
                  {cmd.syntax && (
                    <div style={{ marginTop: '5px', color: '#1a73e8', fontStyle: 'italic' }}>
                      <strong>Syntax:</strong> {cmd.syntax}
                    </div>
                  )}
                  {cmd.aliases && Array.isArray(cmd.aliases) && cmd.aliases.length > 0 && (
                    <span style={{ marginLeft: '10px', color: '#888' }}>
                      (Aliases: {cmd.aliases.join(', ')})
                    </span>
                  )}
                  <br />
                  {cmd.description}
                  {cmd.example && (
                    <div style={{ marginTop: '5px', color: '#1a73e8', fontWeight: 'bold' }}>
                      <strong>Example:</strong> {cmd.example}
                    </div>
                  )}
                  {cmd.arguments && typeof cmd.arguments === 'object' && (
                    <div style={{ marginTop: '5px', color: '#555', fontStyle: 'italic' }}>
                      <strong>Arguments:</strong>
                      <ul style={{ margin: '5px 0 0 15px', padding: 0, listStyleType: 'disc' }}>
                        {Object.entries(cmd.arguments).map(([argName, argDesc], index) => (
                          <li key={index}>
                            <strong>{argName}</strong>: {argDesc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No commands found.</p>
      )}
    </div>
  );
}
