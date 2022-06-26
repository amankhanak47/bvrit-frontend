import React from 'react'
import { Link } from 'react-router-dom'

const FacultyAllOptions = () => {
  return (
    <div>
          <ul>
              <li>
                  <Link to={'/faculty-co-po-mapping'}>Co Po mapping</Link>
              </li>
      </ul>
    </div>
  )
}

export default FacultyAllOptions
