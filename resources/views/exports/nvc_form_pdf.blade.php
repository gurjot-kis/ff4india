<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>NVC Inquiries</title>

    <style>

        @page {
            margin: 25px;
        }

        body {
            font-family: DejaVu Sans, Arial, Helvetica, sans-serif;
            color: #222;
            font-size: 11px;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header h2 {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
        }

        .header-line {
            border-bottom: 2px solid #222;
            margin-top: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            table-layout: fixed;
        }

        th {
            background-color: #f3f4f6;
            border: 1px solid #999;
            padding: 6px;
            font-size: 8px;
            font-weight: bold;
            text-align: left;
            word-wrap: break-word;
        }

        td {
            border: 1px solid #999;
            padding: 5px;
            font-size: 8px;
            vertical-align: top;
            word-wrap: break-word;
        }

        .text-center {
            text-align: center;
        }

        .no-data {
            text-align: center;
            padding: 15px;
        }

        .footer {
            margin-top: 15px;
            text-align: right;
            font-size: 9px;
        }

    </style>

</head>

<body>

    <div class="header">

        <h2>
            NVC Inquiries
        </h2>

        <div class="header-line"></div>

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
                            : '' }}
                    </td>

                </tr>

            @empty

                <tr>

                    <td
                        colspan="15"
                        class="no-data"
                    >
                        No NVC inquiries found.
                    </td>

                </tr>

            @endforelse

        </tbody>

    </table>


    <div class="footer">

        Total Records:
        {{ $inquiries->count() }}

    </div>

</body>

</html>