import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

function Comment() {
  return (
    <div>
      <div className='addcomment'>
        
        <div className='likes'>
          <div className='like'><AiOutlineLike/></div>
          <div className='comments'>Comment</div>
        </div>

      <input type="text"  placeholder='add comment' />
      </div>
    </div>
  )
}

export default Comment