function uploadZip() {
    alert("הקובץ מועלה...");

    const file = document.getElementById('zipFile').files[0];
    if (!file) {
        alert("אנא בחר קובץ ZIP.");
        return;
    }

    // שליחת הקובץ לעמוד ההמרה
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://androidapp-1.onrender.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = `https://efraimzz.github.io/upload?apk=${data.downloadUrl}`;
    })
    .catch(error => {
        alert("שגיאה בהעלאה.");
    });
}
