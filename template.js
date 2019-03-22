/**
 * Build Template.
 *
 * @param {Object} fieldValues
 */

const buildTemplate = (fieldValues) => {
  if (fieldValues !== null) {
    var templateHTML = `<!-- Subject: VIT EAS Email Template  -->

  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

  <head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <link rel="shortcut icon" type="image/x-icon" href="https://internal.varian.com/sites/corp/unityhelp/SiteAssets/Images/vit-curled-favicon-32x21.ico" />
    <title>VIT EAS</title> <!-- The title tag shows in email notifications, like Android 4.4. -->

    <!-- Web Font / @font-face : BEGIN -->
    <!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->

    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
    <!--[if mso]>
          <style>
              * {
                  font-family: sans-serif !important;
              }
          </style>
      <![endif]-->

    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
    <!--[if !mso]><!-->
    <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->
    <!--<![endif]-->

    <!-- Web Font / @font-face : END -->

    <!-- CSS Reset : BEGIN -->
    <!-- TODO :: Review what CSS is actually needed -->
    <style>
      /* What it does: Remove spaces around the email design added by some email clients. */
      /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto !important;
      }

      table table table {
        table-layout: auto;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode: bicubic;
      }

      li {
        position: relative;
      }

      ul {
        margin: 0;
      }

      ul.pin {
        list-style-type: none;
      }

      ul.pin>li:before {
        content: "📌";
        color: red;
        position: absolute;
        left: -2em;
      }

      ul.check {
        list-style-type: none;
      }

      ul.check>li:before {
        content: "✔";
        color: green;
        position: absolute;
        left: -2em;
      }

      /* What it does: A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],
      /* iOS */
      .x-gmail-data-detectors,
      /* Gmail */
      .x-gmail-data-detectors *,
      .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }

      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img+div {
        display: none !important;
      }

      /* What it does: Prevents underlining the button text in Windows 10 */
      .button-link {
        text-decoration: none !important;
      }

      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */
      /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {

        /* iPhone 6 and 6+ */
        .email-container {
          min-width: 375px !important;
        }
      }
    </style>
    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>
      /* What it does: Hover styles for buttons */
      .button-td,
      .button-a {
        transition: all 100ms ease-in;
      }

      .button-td:hover,
      .button-a:hover {
        background: #555555 !important;
        border-color: #555555 !important;
        color: #ffffff !important;
      }

      /* Media Queries */
      @media screen and (max-width: 600px) {

        .email-container {
          width: 100% !important;
          margin: auto !important;
        }

        /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
        .fluid {
          max-width: 100% !important;
          height: auto !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        /* What it does: Forces table cells into full-width rows. */
        .stack-column,
        .stack-column-center {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          direction: ltr !important;
        }

        /* And center justify these ones. */
        .stack-column-center {
          text-align: center !important;
        }

        /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
        .center-on-narrow {
          text-align: center !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
          float: none !important;
        }

        table.center-on-narrow {
          display: inline-block !important;
        }

        /* What it does: Adjust typography on small screens to improve readability */
        .email-container p {
          font-size: 12px !important;
          line-height: 16px !important;
        }
      }
    </style>
    <!-- Progressive Enhancements : END -->

    <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
    <!--[if gte mso 9]>
      <xml>
          <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->

  </head>

  <body width="100%" bgcolor="#ffffff" style="margin: 0; mso-line-height-rule: exactly;">
    <center style="width: 100%; background: #ffffff; text-align: left; padding-top: 5px;">

      <!-- Visually Hidden Preheader Text : BEGIN -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
        ${fieldValues.subheader}
      </div>

      <!-- This forces blank space after the carefully crafted subheader -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      </div>
      <!-- Visually Hidden Preheader Text : END -->

      <!-- Full Bleed Email Header Section : BEGIN -->
      <table role="presentation" bgcolor="#3A4B57" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
        <tr>
          <td valign="top" align="center">
            <div style="max-width: 1000px; margin: auto;" class="email-container">
              <!--[if mso]>
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="1000" align="center">
                        <tr>
                        <td>
                        <![endif]-->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: left; color: white; padding-left: 10px; height: 100px;">
                    [Insert varian-logo-110px]
                  </td>
                  <td style="text-align: right; color: white; padding-right: 20px; height: 100px;">
                    [Insert varian-ellipses-80px]
                  </td>
                </tr>
              </table>
              <!--[if mso]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
            </div>
          </td>
        </tr>
      </table>
      <!-- Full Bleed Email Header Section : END -->

      <!-- Email Body : BEGIN -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="1000" style="margin: auto;" class="email-container">
        <tr>
          <td bgcolor="#ffffff" align="center" style="padding-top: 20px;">
            [Insert eas-banner-1000px]
          </td>
        </tr>

        <!-- Thumbnail Right, Text Left : BEGIN -->
        <tr>
          <td bgcolor="#ffffff" dir="rtl" align="center" valign="top" width="100%" style="padding: 10px;">
            <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <!-- Column : BEGIN -->
                <td width="33.33%" class="stack-column-center">
                  <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td dir="ltr" valign="top" style="font-family: sans-serif; font-size: 15px; line-height: 20px;  padding: 0 10px 30px; border-top: 5px solid #682E86;">
                        <ul class="check">
                          ${fieldValues.benefits}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td dir="ltr" valign="top" style="font-family: sans-serif; font-size: 15px; line-height: 20px; padding: 0 10px 30px; border-top: 5px solid #FFBC3E;">
                        <ul class="pin">
                          ${fieldValues.kpi}
                        </ul>
                      </td>
                    </tr>
                  </table>
                </td>
                <!-- Column : END -->

                <!-- Column : BEGIN -->
                <td width="66.66%" class="stack-column-center">
                  <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td dir="ltr" valign="top" style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px; text-align: left;" class="center-on-narrow">
                        <p style="padding: 5; text-align: left;">${fieldValues['project-details']}</p>

                        <p style="padding: 5; text-align: left;">[Optional - You can insert your own image here or delete this.]</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <!-- Column : END -->
              </tr>
            </table>
          </td>
        </tr>
        <!-- Thumbnail Right, Text Left : END -->

        <!-- Clear Spacer : BEGIN -->
        <tr>
          <td aria-hidden="true" height="0" style="font-size: 0; line-height: 0;">
            &nbsp;
          </td>
        </tr>
        <!-- Clear Spacer : END -->

        <tr>
          <td bgcolor="#ffffff" style="padding: 20px 20px 10px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;">
            <p style="padding: 5; text-align: left;">[This is not updated using the Email Accelerator. If you want to add an additional long form - full width - paragraph, replace this text. Else, delete this]</p>

            <p style="padding: 5; text-align: left;"><span style="color:#00A8E1; font-weight:bold;">Project Manager:</span> ${fieldValues['project-manager']} <span style="color:#00A8E1; font-weight:bold;">VIT Manager:</span> ${fieldValues['vit-manager']} <span style="color:#00A8E1; font-weight:bold;">Project Team:</span> ${fieldValues['project-team']} <span style="color:#00A8E1; font-weight:bold;">Business Sponsors:</span> ${fieldValues['business-sponsor']}</p>
          </td>
        </tr>
      </table>
      <!-- Email Body : END -->

      <!-- Full Bleed Background Section : BEGIN -->
      <table role="presentation" bgcolor="#E7EAEB" cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
        <tr>
          <td valign="top" align="center">
            <div style="max-width: 1000px; margin: auto;" class="email-container">
              <!--[if mso]>
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="1000" align="center">
                      <tr>
                      <td>
                      <![endif]-->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center; height: 100px; font-family: sans-serif; font-size: 20px; line-height: 30px;">
                    Technology
                    &nbsp;
                    <span style="font-size: 16px;">[Insert varian-amp-24px]</span>
                    &nbsp;
                    People
                  </td>
                </tr>
              </table>
              <!--[if mso]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
            </div>
          </td>
        </tr>
      </table>
      <!-- Full Bleed Background Section : END -->
    </center>
  </body>

  </html>`;
    startDownload(templateHTML);
  }
};

/**
 * Show Download Button.
 *
 * @param {String} templateText
 */

const startDownload = (templateText) => {
  const downloadButton = document.getElementById('download');
  const submitButton = document.getElementById('submit');
  if (downloadButton !== null && submitButton !== null) {
    downloadButton.setAttribute(
      'href',
      'data:text/html;charset=utf-8,' + encodeURIComponent(templateText)
    );
    downloadButton.setAttribute('download', 'email-template.html');
    downloadButton.click();
  }
};