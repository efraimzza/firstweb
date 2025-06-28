function uploadZip() {
    const fileInput = document.getElementById('zipFile');
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        alert("אנא בחר קובץ ZIP.");
        return;
    }

    const file = fileInput.files[0];
    alert("הקובץ מועלה...");

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://androidapp-1.onrender.com/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        if (data && data.downloadUrl) {
            window.location.href = `https://efraimzza.github.io/upload?apk=${encodeURIComponent(data.downloadUrl)}`;
        } else {
            alert("השגיאה: לא התקבל קישור להורדה.");
        }
    })
    .catch(error => {
        console.error(error);
        alert("שגיאה בהעלאה.");
    });
}
