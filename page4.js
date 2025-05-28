let answer = 0;

window.question = function () {
  alert("כתוב רק את המספר של התשובה!");
  const response = prompt("1) כן\n2) לא");
  if (response == "1") {
    answer++;
  }
  alert("תמשיך לשאלה הבאה");
};

// חישוב תוצאה
window.how = function () {
  if (answer == 0) {
    alert("לא זוהו סימנים של פוסט טראומה לפי השאלון.");
  } else if (answer == 1 || answer == 2 || answer == 3 || answer == 4) {
    alert("ייתכן שישנם סימנים. מומלץ להתייעץ עם גורם מקצועי.");
  } else {
    alert("כמות סימנים גבוהה - מומלץ בחום לפנות לאיש מקצוע.");
  }

  // איפוס לתוצאה חדשה
  answer = 0;
};