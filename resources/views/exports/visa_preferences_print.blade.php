<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">

    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 9px;
        }

        h2 {
            text-align: center;
            margin-bottom: 15px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #000;
            padding: 4px;
            text-align: center;
            vertical-align: middle;
        }

        thead th {
            background: #e5e5e5;
            font-weight: bold;
        }
    </style>
</head>

<body>

<h2>Visa Bulletin Preferences</h2>

<table>

    <thead>

        <tr>

            <th rowspan="2">Session</th>

            <th colspan="5">F1</th>

            <th colspan="5">F2A</th>

            <th colspan="5">F2B</th>

            <th colspan="5">F3</th>

            <th colspan="5">F4</th>

        </tr>

        <tr>

            <th>All</th>
            <th>China</th>
            <th>India</th>
            <th>Mexico</th>
            <th>Philippines</th>

            <th>All</th>
            <th>China</th>
            <th>India</th>
            <th>Mexico</th>
            <th>Philippines</th>

            <th>All</th>
            <th>China</th>
            <th>India</th>
            <th>Mexico</th>
            <th>Philippines</th>

            <th>All</th>
            <th>China</th>
            <th>India</th>
            <th>Mexico</th>
            <th>Philippines</th>

            <th>All</th>
            <th>China</th>
            <th>India</th>
            <th>Mexico</th>
            <th>Philippines</th>

        </tr>

    </thead>

    <tbody>

    @foreach($preferences as $row)

        <tr>

            <td>{{ $row->session }}</td>

            <td>{{ $row->pref_f1_all }}</td>
            <td>{{ $row->pref_f1_china }}</td>
            <td>{{ $row->pref_f1_india }}</td>
            <td>{{ $row->pref_f1_mexico }}</td>
            <td>{{ $row->pref_f1_philippines }}</td>

            <td>{{ $row->pref_f2a_all }}</td>
            <td>{{ $row->pref_f2a_china }}</td>
            <td>{{ $row->pref_f2a_india }}</td>
            <td>{{ $row->pref_f2a_mexico }}</td>
            <td>{{ $row->pref_f2a_philippines }}</td>

            <td>{{ $row->pref_f2b_all }}</td>
            <td>{{ $row->pref_f2b_china }}</td>
            <td>{{ $row->pref_f2b_india }}</td>
            <td>{{ $row->pref_f2b_mexico }}</td>
            <td>{{ $row->pref_f2b_philippines }}</td>

            <td>{{ $row->pref_f3_all }}</td>
            <td>{{ $row->pref_f3_china }}</td>
            <td>{{ $row->pref_f3_india }}</td>
            <td>{{ $row->pref_f3_mexico }}</td>
            <td>{{ $row->pref_f3_philippines }}</td>

            <td>{{ $row->pref_f4_all }}</td>
            <td>{{ $row->pref_f4_china }}</td>
            <td>{{ $row->pref_f4_india }}</td>
            <td>{{ $row->pref_f4_mexico }}</td>
            <td>{{ $row->pref_f4_philippines }}</td>

        </tr>

    @endforeach

    </tbody>

</table>

</body>
</html>

<script>
window.onload = function () {
    window.print();
}
</script>