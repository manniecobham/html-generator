import { ServiceProvider, Task } from "@taskmanagement/taskapp-model";
import moment from "moment";

/**
 *
 * @param data Array of Task Done
 * @param customer Object of customer
 * @returns string
 */
export function invoiceHtmlString(data: Task[], customer: ServiceProvider) {
    /**
     *
     * @param data
     */
    const tableData = data.map((item) => {
        return `
              <tr>
                <td>${item.ticketNumber}</td>
                <td>${item.requestedBy?.firstName} ${item.requestedBy?.lastName}</td>
                <td>${item.percentage}</td>
                <td>${item.price}</td>
              </tr>
            `;
    });
    const totalPrice = data.reduce((acc, item) => acc + item.price, 0)

    const html =
        `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Invoice</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            border: 1px solid #ccc;
            border-radius: 20px;
            box-shadow: 2px 5px lightgray;
        }

        .invoice {
            /* width: 80%; */
            margin: 0 auto;
            padding: 20px;
        }

        .customer-info {
            line-height: 1em;
            border: 1px solid #ccc;
            border-radius: 20px;
            max-width: 180px;
            margin: 10px;
            padding: 10px;
            text-align: center;
            float: right;
        }

        .companydet {
            line-height: 1em;
            border: 1px solid #ccc;
            border-radius: 20px;
            max-width: 180px;
            margin: 10px;
            padding: 10px;
            text-align: center;
            float: left;
        }

        .invoice-desc {
            text-align: center;
            clear: both;
            margin: 0 auto;
            width: 80%;
            padding: 50px;
        }

        .header {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .info {
            text-align: end;
            padding: 10px;
        }

        .total {
            text-align: right;
            margin-top: 20px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
        }

        .table th,
        .table td {
            border: 1px solid #ccc;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }

        .clearfix::after {
            content: "";
            display: table;
            clear: both;
        }

        .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            background-color: #ccc;
            border-radius: 0px 0px 20px 20px;
            height: 80px;
        }
    </style>
</head>

<body>
    <div class="detail-desc">
        <div class="invoice">
            <div class="header">
                Invoice
            </div>
            <div class="clearfix">
                <div class="companydet">
                    <p>Your Company Name <br>
                        Your Address <br>
                        Your City, State, ZIP <br>
                        your@email.com <br>
                    </p>
                </div>
                <div class="customer-info">
                    ${customer.firstName} ${customer.lastName} <br>
                    ${customer.address} <br>
                    ${customer.postalCode} <br>
                    ${customer.email}
                </div>
            </div>
            <div class="info">
                Date: ${moment().format("L")} <br>
                Invoice #: 12345
            </div>
            <div class="invoice-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi temporibus asperiores, voluptatum
                accusantium quis adipisci. Iste corrupti repellat sequi. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Consectetur earum odit ipsa, cupiditate amet assumenda doloribus similique in pariatur
                quasi. Eos fuga maiores qui asperiores quo cumque ratione dolores quasi.
            </div>
            <table class="table" id="html-data-table">
                <thead>
                    <tr>
                        <th>Ticket Nummer</th>
                        <th>Arbeit Bei</th>
                        <th>Prozentsatz (%)</th>
                        <th>Price (€)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableData}
                </tbody>
            </table>
            <div class="total">
                Subtotal: $85.00 <br>
                Tax (7%): $5.95 <br>
                Total: € ${totalPrice.toFixed(2)}
            </div>
        </div>
        <div class="footer">
            &copy; Copyright 2023
        </div>
    </div>
</body>

</html>
`;
    return html;
}

