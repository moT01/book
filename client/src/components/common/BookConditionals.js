import React from 'react';

export function GetIfIsMyBook(props) {
  //if not logged in    
  if(!props.userID) {
    return <div></div>  
  }
  
  //if my book
  if(props.username === props.book.current_owner) {
    return <div className="btn btn-danger bookButtonRight">delete</div>
  }
  
  //if not my book 
  return <div className="btn btn-primary bookButtonRight">request</div>
}