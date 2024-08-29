document.getElementById('factoring-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const numSolicitud = document.getElementById('num-solicitud').value;
    const nombreCliente = document.getElementById('nombre-cliente').value;
    const rucCliente = document.getElementById('ruc-cliente').value;
    const fechaEmision = document.getElementById('fecha-emision').value;
    const numDoc = document.getElementById('num-doc').value;
    const montoDoc = document.getElementById('monto-doc').value;
    const fechaVcmto = document.getElementById('fecha-vcmto').value;
    const importeNeto = document.getElementById('importe-neto').value;
    const anticipoBruto = document.getElementById('anticipo-bruto').value;
    const excedente = document.getElementById('excedente').value;

    generatePDF(numSolicitud, nombreCliente, rucCliente, fechaEmision, numDoc, montoDoc, fechaVcmto, importeNeto, anticipoBruto, excedente);
});

function generatePDF(numSolicitud, nombreCliente, rucCliente, fechaEmision, numDoc, montoDoc, fechaVcmto, importeNeto, anticipoBruto, excedente) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(`Hoja Resumen Comercial Nº Solicitud: ${numSolicitud}`, 10, 10);
    doc.text(`Nombre: ${nombreCliente}`, 10, 20);
    doc.text(`RUC: ${rucCliente}`, 10, 30);
    doc.text(`Fecha de emisión: ${fechaEmision}`, 10, 40);
    
    doc.text(`Deudores`, 10, 50);
    doc.text(`Número de documento: ${numDoc}`, 10, 60);
    doc.text(`Monto documento: $${montoDoc}`, 10, 70);
    doc.text(`Fecha Vcmto.: ${fechaVcmto}`, 10, 80);
    doc.text(`Importe neto a pagar: $${importeNeto}`, 10, 90);
    doc.text(`Anticipo bruto: $${anticipoBruto}`, 10, 100);
    doc.text(`Excedente: $${excedente}`, 10, 110);

    doc.save(`hoja_resumen_${numSolicitud}.pdf`);
}
