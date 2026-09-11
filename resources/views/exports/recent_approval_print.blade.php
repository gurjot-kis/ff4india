<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <title>Recent Approvals</title>

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 30px;
            color: #222;
            font-size: 14px;
        }

        h1 {
            margin: 0 0 25px 0;
            font-size: 26px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #ccc;
            padding: 12px;
            text-align: left;
            vertical-align: middle;
            font-size: 13px;
        }

        th {
            background: #f3f4f6;
            font-weight: bold;
            font-size: 14px;
        }

        .status-active {
            color: #15803d;
            font-weight: bold;
        }

        .image-cell {
            text-align: center;
            vertical-align: middle;
        }

        .approval-image {
            width: 90px;
            height: 90px;
            object-fit: contain;
            border-radius: 4px;
        }

        .status-inactive {
            color: #dc2626;
            font-weight: bold;
        }

        .approval-image {
            width: 90px;
            height: 90px;
            object-fit: contain;
            border-radius: 4px;
        }

        @media print {
            .no-print {
                display: none !important;
            }

            body {
                margin: 10px;
                font-size: 13px;
            }

            table {
                font-size: 13px;
            }

            th,
            td {
                padding: 10px;
                font-size: 13px;
            }

            .approval-image {
                width: 90px;
                height: 90px;
            }
        }
    </style>
</head>

<body>



    <h1>Recent Approvals</h1>




    <table>

        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Approval Date</th>
                <th>Visa Category</th>
                <th>Status</th>
                <th>Created At</th>
            </tr>
        </thead>

        <tbody>

            @forelse($preferences as $index => $item)

            <tr>

                <td>
                    {{ $index + 1 }}
                </td>

                <td>
                    {{ $item->name }}
                </td>

                <td class="image-cell">
                    @if($item->image)
                    <img
                        src="{{ asset('storage/' . $item->image) }}"
                        alt="{{ $item->name }}"
                        class="approval-image">
                    @else
                    -
                    @endif
                </td>

                <td>
                    {{ $item->approval_date
                            ? \Carbon\Carbon::parse($item->approval_date)->format('d M Y')
                            : '-'
                        }}
                </td>

                <td>
                    {{ $item->visa_category }}
                </td>

                <td>
                    @if($item->status)
                    <span class="status-active">
                        Active
                    </span>
                    @else
                    <span class="status-inactive">
                        Inactive
                    </span>
                    @endif
                </td>

                <td>
                    {{ $item->created_at
                            ? $item->created_at->format('d M Y H:i')
                            : '-'
                        }}
                </td>

            </tr>

            @empty

            <tr>
                <td colspan="7" style="text-align:center;">
                    No recent approvals found.
                </td>
            </tr>

            @endforelse

        </tbody>

    </table>

</body>

</html>

<script>
    window.onload = function() {
        window.print();
    }
</script>