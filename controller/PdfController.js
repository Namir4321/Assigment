const puppeteer = require("puppeteer");

exports.PdfGenerator = async (req, res, next) => {
  const  data  = req.body;
  console.log(req.body)


  // Validate the incoming data to make sure the required fields are provided
  if (!data || !Array.isArray(data.products) || data.products.length === 0) {
    return res.status(400).json({ error: "Invalid or empty product data." });
  }

  try {
    // Launch Puppeteer browser instance
    const browser = await puppeteer.launch({
      headless: false, // true means headless, false would display browser UI
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // for containerized environments
    });

    const page = await browser.newPage();

    // Generate HTML content dynamically based on the incoming data
   const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice Generator</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          h4 { margin: 0; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
          th { background-color: #f2f2f2; }
          .total-charge-table { position: absolute; right: 20px; top: 50px; border: 1px solid #ddd; border-radius: 10px; padding: 10px; background-color: white; width: 250px; }
          .container { position: relative; padding-right: 270px; }
          .header, .invoice-header { background: #f5f5f5; padding: 16px 32px; display: flex; justify-content: space-between; align-items: center; }
          .footer { background-color: black; color: white; border-radius: 15px; padding: 15px; width: 80%; margin: 20px auto; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <!-- Left Section (Logo) -->
          <div><h4>Invoice Generator</h4></div>
          <!-- Right Section (Logo) -->
          <div><img src="path/to/frame.png" alt="Logo" style="height: 48px;"></div>
        </div>

        <div class="invoice-header" style="border-radius: 15px; padding: 1vh; margin-bottom: 40px; background-color: black; color: white;">
          <div style="flex: 1;">
            <p>Traveller Name: ${data.travellerName}</p>
            <p>Person Name: ${data.personName}</p>
            <p>Email: ${data.email}</p>
          </div>
          <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
            <p>Date: ${new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <!-- Invoice Items Section -->
        <section class="invoice-items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              ${data.products
                .map(
                  (product) => `
                  <tr>
                    <td>${product.productName}</td>
                    <td>${product.productQuantity}</td>
                    <td>${product.productPrice}</td>
                    <td>${product.totalPrice}</td>
                  </tr>
                `
                )
                .join("")}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Total Charges</td>
                <td>${data.subtotal}</td>
              </tr>
              <tr>
                <td colspan="3">GST (18%)</td>
                <td>${data.gst}</td>
              </tr>
              <tr>
                <td colspan="3">Total Amount</td>
                <td>${data.totalWithGST}</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <!-- Footer Section -->
        <div class="footer">
          We are pleased to provide any further information you may require and look forward to assisting with your next order. Rest assured, it will get our dedicated answer.
        </div>
      </body>
      </html>
    `;

    // Set the page content with the generated HTML
    await page.setContent(content);

    // Set up options for PDF generation
    const pdfOptions = {
      format: "A4",
      printBackground: true,
      margin: { top: "20px", bottom: "20px" }, // Optional: set margins
    };

    // Generate the PDF from the content
    const pdfBuffer = await page.pdf(pdfOptions);

    // Close Puppeteer browser
    // await browser.close();

    // Set appropriate headers to send the PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");

    // Send the generated PDF to the client
    res.status(200).send(pdfBuffer);
  } catch (err) {
    console.error("Error generating PDF:", err); // Log detailed error
    res
      .status(500)
      .json({ error: "Something went wrong while generating the PDF." });
  }
};
