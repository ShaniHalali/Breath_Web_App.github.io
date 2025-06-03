let answer = 0;

window.question1 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) פריז\n2) לונדון\n3) מילאנו \n4) רומא");
  if (response == "1") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

window.question2 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) אריה\n2) צב\n3) צ'יטה \n4) סוס");
  if (response == "3") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

window.question3 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) 13\n2) 45\n3) 1\n4) 50");
  if (response == "4") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

window.question4= function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) חמצן\n2) מימן\n3) מים\n4) פחמן דו חמצני");
  if (response == "3") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

window.question5 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) כינור\n2) פסנתר\n3) חליל\n4) גיטרה");
  if (response == "2") 
    answer++;

      alert("תמשיכו לשאלה הבאה");

  };

  window.question5 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) כינור\n2) פסנתר\n3) חליל\n4) גיטרה");
  if (response == "2") 
    answer++;
      alert("תמשיכו לשאלה הבאה");

  };

  window.question6 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) הר כרמל\n2) הר האוורסט\n3) ים המלח \n4) הר פוג'י");
  if (response == "2") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

window.question7 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) אריק איינשטין\n2) אנטואן דה סנט-אכזופרי\n3) CHAT GPT\n4) הארי פוטר");
  if (response == "2") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

window.question8 = function () {
  alert("כיתבו רק את המספר של התשובה!");
  const response = prompt("1) ניו יורק\n2) שיקגו\n3) תל אביב\n4) לוד");
  if (response == "1") {
    answer++;
  }
  alert("תמשיכו לשאלה הבאה");
};

// חישוב תוצאה
window.how = function () {
  alert("סיימתם את השאלון! התוצאה שלכם היא: " + answer + " מתוך 8");
  if (answer < 5) {
    alert(" ניסיון נחמד! מומלץ לנסות שוב.");
  } else if (answer == 5 || answer == 6 || answer == 7) {
    alert("תוצאה טובה! המשיכו כך.");
  } else if (answer == 8) {
    alert("תוצאה מצוינת! כל הכבוד!");
  } else {
    alert("נראה שקרתה טעות. אנא נסו שוב.");
  }

  alert("תודה על השתתפותכם בשאלון!");
  // איפוס לתוצאה חדשה
  answer = 0;
};