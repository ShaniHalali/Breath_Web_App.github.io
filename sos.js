// שמירת הנתונים בלחיצה על כפתור שליחה (ב-page2.html)
document.addEventListener('DOMContentLoaded', function () {
  const sendBtn = document.querySelector('.send_file');
  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      const shem = document.getElementById('shem').value.trim();
      const mishpaha = document.getElementById('shem_mishpaha').value.trim();
      const notenEsra = document.getElementById('noten_esra').value.trim();
      const phone = document.getElementById('telefon').value.trim();
      const phoneEmergency = document.getElementById('telefon_herom').value.trim();

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
  }

  // הצגת הנתונים בלחיצה על כפתור SOS (בכל עמוד)
  const sosBtn = document.querySelector('.button-sos');
  if (sosBtn) {
    sosBtn.addEventListener('click', function () {
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
  }
});
