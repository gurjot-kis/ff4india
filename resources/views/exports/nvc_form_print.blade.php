<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>NVC Inquiries</title>

    <style>
        @page {
            size: A3 landscape;
            margin: 10mm;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 30px;
            color: #222;
        }

        .print-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }

        h1 {
            margin: 0;
            font-size: 24px;
        }

        .print-button {
            padding: 8px 15px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 12px;
        }

        th,
        td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
            vertical-align: top;
            word-wrap: break-word;
            overflow-wrap: anywhere;
        }

        th {
            background: #f3f4f6;
            font-weight: bold;
        }

        .text-center {
            text-align: center;
        }

        .footer {
            margin-top: 15px;
            text-align: right;
            font-size: 12px;
        }

        @media print {
            .no-print {
                display: none !important;
            }

            body {
                margin: 0;
            }

            table {
                font-size: 10px;
            }

            th,
            td {
                padding: 5px;
            }

            thead {
                display: table-header-group;
            }

            tr {
                page-break-inside: avoid;
            }
        }
    </style>
</head>

<body>

    <div class="print-header">
        <h1>NVC Inquiries</h1>

        <button type="button" class="print-button no-print" onclick="window.print()">
            Print
        </button>
    </div>

    <table>

        <thead>
            <tr>
               <th class="text-center" width="3%">#</th>
                <th width="8%">Email</th>
                <th width="6%">Filing Status</th>
                <th width="6%">Case Number</th>
                <th width="7%">Principal Name</th>
                <th width="6%">DOB</th>
                <th width="7%">Petitioner Name</th>
                <th width="7%">Who Are You?</th>
                <th width="9%">Visa Category</th>
                <th width="15%">Comments</th>
                <th width="20%">Attachments</th>
                <th width="6%">Created At</th>
            </tr>
        </thead>

        <tbody>

            @forelse($inquiries as $index => $item)

                <tr>

                    <td class="text-center">
                        {{ $index + 1 }}
                    </td>

                    <td>
                        {{ $item->email ?: '-' }}
                    </td>

                    <td>
                        {{ $item->filing_status
                            ? ucwords(str_replace('_', ' ', $item->filing_status))
                            : '-' }}
                    </td>

                    <td>
                        {{ $item->case_number ?: '-' }}
                    </td>

                    <td>
                        {{ $item->principal_name ?: '-' }}
                    </td>

                    <td>
                        {{ $item->dob ? $item->dob->format('d M Y') : '-' }}
                    </td>

                    <td>
                        {{ $item->petitioner_name ?: '-' }}
                    </td>

                    <td>
                        {{ $item->inquirer ?: '-' }}
                    </td>

                    <td>
                        {{ !empty($item->visa_category)
                            ? implode(', ', $item->visa_category)
                            : '-' }}
                    </td>

                    <td>
                        {{ $item->comments ?: '-' }}
                    </td>

                    <td>
                        @forelse($item->attachments as $attachment)
                            <img style="max-width: 100px; max-height: 100px;" src="{{ asset('storage/' . $attachment->file_path) }}" alt="{{ $attachment->original_name }}" /><br>
                        @empty
                            -
                        @endforelse
                    </td>

                    <td>
                        {{ $item->created_at
                            ? $item->created_at->format('d M Y H:i')
                            : '-' }}
                    </td>

                </tr>

            @empty

                <tr>
                    <td colspan="15" class="text-center">
                        No NVC inquiries found.
                    </td>
                </tr>

            @endforelse

        </tbody>

    </table>

    <div class="footer">
        Total Records: {{ $inquiries->count() }}
    </div>

    <script>
        window.onload = function () {
            window.print();
        };
    </script>

</body>
</html>