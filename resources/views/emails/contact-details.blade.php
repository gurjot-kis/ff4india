<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Contact From f4india</title>
</head>

<body>

    <h2>New Contact From f4india</h2>

    <p>You have received a new contact From f4india.</p>

    <table cellpadding="10" cellspacing="0" border="1" width="100%">

        <tr>
            <td><strong>Full Name</strong></td>
            <td>{{ $contact->name }}</td>
        </tr>

        <tr>
            <td><strong>Email Address</strong></td>
            <td>{{ $contact->email }}</td>
        </tr>

        <tr>
            <td><strong>Phone Number</strong></td>
            <td>{{ $contact->phone ?? 'N/A' }}</td>
        </tr>

        <tr>
            <td><strong>Categories</strong></td>
            <td>{{ $contact->category }}</td>
        </tr>

        <tr>
            <td><strong>Message</strong></td>
            <td>{{ $contact->message }}</td>
        </tr>

    </table>

</body>
</html>