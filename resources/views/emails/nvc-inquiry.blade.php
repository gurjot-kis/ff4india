<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">

    <title>NVC Inquiry Confirmation</title>
</head>

<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, Helvetica, sans-serif; color: #333333;">

    <div style="max-width: 700px; margin: 30px auto; background: #ffffff; padding: 30px; border: 1px solid #dddddd;">

        <p>
            Please do not reply to this email.
            NVC will answer your inquiry in the order in which it was received.
            Consult
            <a href="http://f4india.com/" target="_blank">
                http://f4india.com/
            </a>
            to find out when you can expect a response.
            We will not respond substantively to mail sent directly to this address.
            Follow-up inquiries may be made at
            <a href="http://f4india.com/" target="_blank">
                http://f4india.com/
            </a>.
        </p>

        <p>
            Please retain this email as a record of your contact with NVC.
        </p>

        <hr style="border: 0; border-top: 1px solid #dddddd; margin: 25px 0;">

        <p>
            <strong>Case Number:</strong><br>
            {{ $inquiry->case_number ?: 'N/A' }}
        </p>

        <p>
            <strong>Principal Name:</strong><br>
            {{ $inquiry->principal_name ?: 'N/A' }}
        </p>

        <p>
            <strong>Date of Birth:</strong><br>

            @if($inquiry->dob)
            {{ \Carbon\Carbon::parse($inquiry->dob)->format('d/F/Y') }}
            @else
            N/A
            @endif
        </p>

        <p>
            <strong>Category:</strong><br>

            @if(!empty($inquiry->visa_category))
            {{ implode(', ', $inquiry->visa_category) }}
            @else
            N/A
            @endif
        </p>

        <p>
            <strong>Petitioner Name:</strong><br>
            {{ $inquiry->petitioner_name ?: 'N/A' }}
        </p>

        <p>
            <strong>Inquirer:</strong><br>
            {{ $inquiry->inquirer ?: 'N/A' }}
        </p>

        <p>
            <strong>Attorney of Record Name:</strong><br>
            {{ $inquiry->aor_name ?: 'N/A' }}
        </p>

        <p>
            <strong>Attorney Additional Information:</strong><br>
            {{ $inquiry->aor_law_office ?: 'N/A' }}
        </p>

        <p>
            <strong>Inquirer Name:</strong><br>
            {{ $inquiry->inquirer_name ?: 'N/A' }}
        </p>

        <p>
            <strong>Inquirer Email:</strong><br>

            @if($inquiry->email)
            <a href="mailto:{{ $inquiry->email }}">
                {{ $inquiry->email }}
            </a>
            @else
            N/A
            @endif
        </p>

        <p>
            <strong>Your Question(s):</strong><br>
            {!! nl2br(e($inquiry->comments ?: 'N/A')) !!}
        </p>

    </div>

</body>

</html>