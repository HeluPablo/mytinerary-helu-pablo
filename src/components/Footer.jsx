import React from 'react'

function AppFooter() {
  return (
    <div>
        <footer>

      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          width: '6%',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 20px',
          fontSize: '20px',
          backgroundColor: 'rgb(0, 183, 255)',
          color: '#fff',
          borderRadius: '30px',
          marginRight: '10vh'
        }}
      >
        To top
      </button>

        </footer>
    </div>
  )
}

export default AppFooter