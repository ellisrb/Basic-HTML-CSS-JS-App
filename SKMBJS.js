
function GetValueComp() {
    var CompInfo = new Array("CTRL+C = Copy", "CTRL+X = Cut", "To find files on a Windows operating system you would use the file Explorer<br /> And on a Mac it is easiest to search for the file or open the search window and go to one of the choices e.g. Documents.", "Press the PrtScn key. Your screenshot is now stored in the computer’s memory. Paste to see it!","Press F2 to rename a document quickly. Otherwise, you can right click and look for rename on the pop-up menu. ");
    var random = CompInfo[Math.floor(Math.random()* CompInfo.length)];
    document.getElementById("computerInfo").innerHTML=random;
}

function GetValueSaftey() {
    var CompInfo = new Array("Always be on the look out for over used plug sockets!", "No raw foods <br /> with Cooked foods!", "More injuries occur in the household than any other place.", "Risks have to be managed in the home/workplace!", "Types on injuries that happen in the home:<br /> <strong>Burns.</strong> <br /><strong> Drowning.</strong> <br /><strong> Poisoning.</strong> <br /> <strong>Falls.</strong> <br /> <strong>Suffocating.</strong>","Dictionary defines FIRST AID as: <br /> <i>“The initial assistance or treatment given to someone who is injured or suddenly taken ill”</i>","");
    var random = CompInfo[Math.floor(Math.random()* CompInfo.length)];
    document.getElementById("safteyAtHomeInfo").innerHTML=random;
}
function GetValueCPR() {
    var CompInfo = new Array("30 Chest compressions!","<strong>Two</strong> rescue breaths!","As soon as you arrive at an incident, check for danger and call for help.");
    var random = CompInfo[Math.floor(Math.random()* CompInfo.length)];
    document.getElementById("CPRInfo").innerHTML=random;
}
function GetValueleaderShip() {
    var CompInfo = new Array("Use empathy to help understand what your employees are going through!", "Employee <strong>engagement</strong> is very important to productivity!", "Trust is essential to an effective team.","If you want to build trust within your team, then lead by example , and show your people that you trust others.","You need to get everyone on your team talking to one another in an honest, meaningful way","Not all requests should be negotiated. Sometimes when your boss or others asks you to do something, you need to say <strong>'no'.</strong>");
    var random = CompInfo[Math.floor(Math.random()* CompInfo.length)];
    document.getElementById("leaderShipInfo").innerHTML=random;
}
///////////////////////////////////*/
checkButton.onclick = function() {
  var score = 0

  if (q1.value == 'correct') {
    score++
  }
  if (q2.value == 'correct'){
    score++
  }
  if (q3.value == 'correct'){
    score++
  }
  if (score == 0){
    alert("Sorry, you got them all wrong!")
  } else if (score == 3) {
    alert("Congratulations, you got them all correct!")
  } else {
    alert("You got " + score + "/3")
  }

}
