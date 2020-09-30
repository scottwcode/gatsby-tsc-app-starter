import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { Link } from "gatsby"

// // Old code that supposedly worked without interface to url
// type Props = RouteComponentProps

// export const RandomBiz: React.FC<Props> = () => {
//   return <div>hello</div>
// }

// // Test of table with click-sort headers and search
// type Props = RouteComponentProps

export const BizListingTable: React.FC<Props> = () => {
  // export const BizListingTable: React.FC = () => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 50,
      }}
    >
      <Link to="/">Go back to the homepage</Link>
      <br></br>
      {/* <html> */}
      <head>
        <meta charset="utf-8" />
        <title>Grid Data Table</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/1.10.19/css/datatables.bootstrap.min.css"
        />
      </head>
      <body>
        <div className="container mb-3 mt-3">
          <table
            className="table table-responsive-md table-striped table-bordered mydatatable"
            // style={{
            //   margin: `0 auto`,
            //   maxWidth: 960,
            //   padding: `0px 1.0875rem 1.45rem`,
            //   paddingTop: 0,
            // }}
            // style="width: 100%"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Asking_Price</th>
                <th>Cash_Flow</th>
                <th>PE</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Health and Personal Care Amazon FBA eCommerce Retailer - Solid
                  YOY Growth
                </td>
                <td>4,7000,000</td>
                <td>1,779,435</td>
                <td>5.35</td>
                <th>Richmond</th>
                <th>VA</th>
              </tr>
              <tr>
                <td>
                  Social Media Driven eCommerce Retailer - Women's Fashion - All
                  Sales on Branded Website - Massive Growth
                </td>
                <td>3,000,000</td>
                <td>870,005</td>
                <td>4.22</td>
                <th>Richmond</th>
                <th>VA</th>
              </tr>
              <tr>
                <td>
                  Branded Amazon FBA Office Supplies and Kitchen Goods eCommerce
                  Retailer
                </td>
                <td>450,000</td>
                <td>170,785</td>
                <td>3.26</td>
                <th>Richmond</th>
                <th>VA</th>
              </tr>
            </tbody>
          </table>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
        <script>$('.mydatatable').DataTable();</script>
      </body>
      {/* </html> */}
    </div>
  )
}
