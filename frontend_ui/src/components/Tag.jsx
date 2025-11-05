import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Tag - Small label/badge used to show tags.
 */
function Tag({ text, color = 'blue' }) {
  const className = color === 'amber' ? 'badge badge-amber' : 'badge';
  return <span className={className}>#{text}</span>;
}

export default Tag;
