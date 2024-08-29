document.getElementById('factoring-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const ruc = document.getElementById('ruc').value;
    const razonSocial = document.getElementById('razon-social').value;
    const monto = document.getElementById('monto').value;
    const fecha = new Date().toLocaleDateString('es-ES');

    generatePDF(ruc, razonSocial, monto, fecha);
});

function generatePDF(ruc, razonSocial, monto, fecha) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text("Registro de Operaciones - Factoring", 10, 10);
    doc.text(`Fecha: ${fecha}`, 10, 20);
    doc.text(`RUC Cliente: ${ruc}`, 10, 30);
    doc.text(`Razón Social: ${razonSocial}`, 10, 40);
    doc.text(`Monto: $${monto}`, 10, 50);

    doc.save(`factoring_${ruc}_${fecha}.pdf`);
}
