<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>Contact Forms</title>

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
        }

        th {
            background-color: #f3f4f6;
            border: 1px solid #999;
            padding: 8px;
            font-size: 10px;
            font-weight: bold;
            text-align: left;
        }

        td {
            border: 1px solid #999;
            padding: 7px;
            font-size: 9px;
            vertical-align: middle;
        }

        .text-center {
            text-align: center;
        }

        .status-active {
            color: #15803d;
            font-weight: bold;
        }

        .status-inactive {
            color: #dc2626;
            font-weight: bold;
        }

        .approval-image {
            width: 55px;
            height: 55px;
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
            Contact Forms
        </h2>

        <div class="header-line"></div>

    </div>


    <table>

        <thead>

            <tr>

                <th
                    class="text-center"
                    width="5%"
                >
                    #
                </th>

                <th width="20%">
                    Name
                </th>

                <th
                    class="text-center"
                    width="12%"
                >
                    Email
                </th>

                <th width="15%">
                    Phone
                </th>

                <th width="24%">
                    Message
                </th>
 

                <th width="18%">
                    Created At
                </th>

            </tr>

        </thead>


        <tbody>

            @forelse($preferences as $index => $item)

                <tr>

                    <td class="text-center">
                        {{ $index + 1 }}
                    </td>


                    <td>
                        {{ $item->name }}
                    </td>

                    <td>
                        {{ $item->email }}
                    </td>
                    <td>
                        $item->phone
                            ? $item->phone
                            : '-'
                    </td>
                    <td>
                        {{ $item->message }}
                    </td>
 

                    <td>

                        {{ $item->created_at
                            ? $item->created_at->format(
                                'd M Y H:i'
                            )
                            : '-'
                        }}

                    </td>

                </tr>

            @empty

                <tr>

                    <td
                        colspan="7"
                        class="no-data"
                    >
                        No recent approvals found.
                    </td>

                </tr>

            @endforelse

        </tbody>

    </table>


    <div class="footer">

        Total Records:
        {{ $preferences->count() }}

    </div>

</body>

</html>