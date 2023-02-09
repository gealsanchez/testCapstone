const commentCounter = () => {
    const commentCount = document.getElementsByClassName('comment').length;
    return commentCount;
  };
  
  export default commentCounter;