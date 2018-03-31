import React from 'react'
import { Link } from 'react-router-dom'

const Donate = () => (
  <div>
    <p>Ready to make a donation?</p>
    <p>Is it damaged?</p>
    <div>
      <Link to={{
        pathname: '/results',
        state: { donate: false }
      }}>
      <button>Yes</button>
      </Link>
      <Link to={{
        pathname: '/results',
        state: { donate: true }
      }}>
      <button>No</button>
      </Link>
    </div>
    <form>
    </form>
  </div>
)

export default Donate