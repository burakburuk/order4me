import React from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QRCodeGeneratorForm = ({
    error,
    qrCodeValue,
    tableNumber,
    onTableNumberChange,
    onGenerate,
}) => (
    <div>
        <div>
            <Input
                value={tableNumber}
                placeholder="Table number"
                onChange={onTableNumberChange}
            />
        </div>
        <div>{qrCodeValue && <QRCode value={qrCodeValue} />}</div>
        <div>
            {error && <Alert message={error} showIcon closable />}
            <Button type="primary" onClick={onGenerate}>
                Generate QR code
            </Button>
        </div>
    </div>
);

QRCodeGeneratorForm.propTypes = {
    error: PropTypes.string.isRequired,
    qrCodeValue: PropTypes.string.isRequired,
    tableNumber: PropTypes.string.isRequired,
    onTableNumberChange: PropTypes.func.isRequired,
    onGenerate: PropTypes.func.isRequired,
};

export default QRCodeGeneratorForm;
