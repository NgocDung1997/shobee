import React from 'react'

export default function MessageBox(pros) {
  return (
    <div className={`alert alert-${pros.variant || 'info'}`}>
        {pros.children}
    </div>
  )
}
