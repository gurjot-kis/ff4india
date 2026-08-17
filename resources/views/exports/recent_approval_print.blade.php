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
        }

        th,
        td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
            vertical-align: middle;
        }

        th {
            background: #f3f4f6;
            font-weight: bold;
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
            width: 70px;
            height: 70px;
            object-fit: cover;
            border-radius: 4px;
        }

        @media print {
            .no-print {
                display: none !important;
            }

            body {
                margin: 10px;
            }

            table {
                font-size: 12px;
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

                    <td>
                        @if($item->image)
                            <img
                                src="{{ asset('storage/' . $item->image) }}"
                                alt="{{ $item->name }}"
                                class="approval-image"
                            >
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
window.onload = function () {
    window.print();
}
</script> 