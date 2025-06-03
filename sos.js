// שמירת הנתונים בלחיצה על כפתור שליחה
document.querySelector('.send_file').addEventListener('click', function () {
  const shem = document.getElementById('shem ').value.trim();
  const mishpaha = document.getElementById('shem mshpaha').value.trim();
  const notenEsra = document.getElementById('shem noten esra').value.trim();
  const phone = document.getElementById('telefon').value.trim();
  const phoneEmergency = document.getElementById('telefon herom').value.trim();

  const data = {
    shem,
    mishpaha,
    notenEsra,
    phone,
    phoneEmergency
  };

  localStorage.setItem('sosData', JSON.stringify(data));
  alert('הפרטים נשמרו בהצלחה!');
});


// הצגת הנתונים בלחיצה על כפתור SOS
document.querySelector('.button-sos').addEventListener('click', function () {
  const stored = localStorage.getItem('sosData');

  if (!stored) {
    alert('לא נמצאו פרטי חירום. אנא מלא/י את הטופס קודם.');
    return;
  }

  const data = JSON.parse(stored);

  const message =
    `🆘 פרטי החירום:\n` +
    `שם: ${data.shem} ${data.mishpaha}\n` +
    `נותן עזרה: ${data.notenEsra}\n` +
    `טלפון אישי: ${data.phone}\n` +
    `טלפון חירום: ${data.phoneEmergency}`;

  alert(message);
});


