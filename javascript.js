let i=0;

function commentus(){
    if(i==0){
    let comment1=prompt("what is your comment for our product");
  if(comment1!=null){
    i++;
    document.getElementById("comment1").innerHTML
    ="Our first customer latest comment is "+comment1;
  }}
  else if(i==1){
    let comment2=prompt("what is your comment for our product");
  if(comment2!=null){
    i++;
    document.getElementById("comment2").innerHTML
    ="Our second customer latest comment is "+comment2;
  }}else{
    let comment3=prompt("what is your comment for our product");
  if(comment3!=null){
    i=0;
    document.getElementById("comment3").innerHTML
    ="Our third customer latest comment is "+comment3;
  }
  }}


  function reply(){
    if(i==1){
    let reply1=prompt("What you wants to reply");
    if(reply1!=null){
    document.getElementById("reply1").innerHTML
    ="Replies:  "+reply1;
    }}
    if(i==2){
        let reply2=prompt("What you wants to reply");
    if(reply2!=null){
    document.getElementById("reply2").innerHTML
    ="Replies:  "+reply2;
    }}
    else{
        let reply3=prompt("What you wants to reply");
        if(reply3!=null){
        document.getElementById("reply3").innerHTML
        ="Replies:  "+reply3;
        }
    }
    
}