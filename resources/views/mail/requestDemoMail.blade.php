<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Demo</title>
</head>

<body>
    <h1>Request a Demo</h1>
    <p>Dear {{ $customerName }},</p>
    <p>We have received your request for {{ $productName }}.</p>

    <p style="text-decoration: underline; font-weight: semi-bold;">Your chosen plan details:</p>
    <ul>
        <li>Package Name: {{ $packageName }}</li>
        <li>Product Price: {{ $productPrice }}</li>
    </ul>

    <p>Our team will contact you soon.</p>
    <p>Thank you for choosing us.</p>
    <p>Best regards,</p>
    <p>R-SoftBD</p>
</body>

</html>
