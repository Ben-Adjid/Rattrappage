document.getElementById('generateBtn').addEventListener('click', () => {
    const qrInput = document.getElementById('qrInput').value;

    if (qrInput.trim() === '') {
        alert('Veuillez entrer un texte ou une URL.');
        return;
    }

    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        type: "svg",
        data: qrInput,
        image: "",
        dotsOptions: {
            color: "#000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#fff",
        }
    });

    document.getElementById('qrCode').innerHTML = '';
    qrCode.append(document.getElementById('qrCode'));
});
