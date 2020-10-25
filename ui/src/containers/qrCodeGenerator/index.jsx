import React, { useState } from 'react';
import QRCodeGeneratorForm from '../../components/qrCodeGeneratorForm';
import { generateQRCode } from '../../utils/generateQRCode';

const QRCodeGenerator = () => {
    const [error, setError] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');

    const handleTableNumberChange = (e) => {
        setTableNumber(e.target.value);
    };

    const onGenerate = (e) => {
        e.preventDefault();
        if (!tableNumber.trim()) {
            setError('Table number must be specified!');
            return;
        }
        const qrCode = generateQRCode(tableNumber);
        setQrCodeValue(qrCode);
    };

    return (
        <QRCodeGeneratorForm
            error={error}
            tableNumber={tableNumber}
            onTableNumberChange={handleTableNumberChange}
            qrCodeValue={qrCodeValue}
            onGenerate={onGenerate}
        />
    );
};

export default QRCodeGenerator;
