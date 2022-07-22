const axios = require('axios')

module.exports = {
  ForgotPass: (email, code) => {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3000/api/v1/auth/forgot-pass?email=${email}&code=${code}`
      axios({
        method: 'POST',
        url: 'https://api.sendinblue.com/v3/smtp/email',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'api-key': process.env.API_KEY_SENDINBLUE
        },
        data: JSON.stringify({
          "sender": {
            "email": `${process.env.EMAIL_SENDER}`,
          },
          "to": [
            {
              "email": `${email}`,
            }
          ],
          "subject": "Reset your password!",
          "htmlContent": `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office">
          
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title></title>
            <style type="text/css" emogrify="no">
              #outlook a {
                padding: 0;
              }
          
              .ExternalClass {
                width: 100%;
              }
          
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%;
              }
          
              table td {
                border-collapse: collapse;
                mso-line-height-rule: exactly;
              }
          
              .editable.image {
                font-size: 0 !important;
                line-height: 0 !important;
              }
          
              .nl2go_preheader {
                display: none !important;
                mso-hide: all !important;
                mso-line-height-rule: exactly;
                visibility: hidden !important;
                line-height: 0px !important;
                font-size: 0px !important;
              }
          
              body {
                width: 100% !important;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                margin: 0;
                padding: 0;
              }
          
              img {
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
          
              a img {
                border: none;
              }
          
              table {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
          
              th {
                font-weight: normal;
                text-align: left;
              }
          
              *[class="gmail-fix"] {
                display: none !important;
              }
            </style>
            <style type="text/css" emogrify="no">
              @media (max-width: 600px) {
                .gmx-killpill {
                  content: " 03D1";
                }
              }
            </style>
            <style type="text/css" emogrify="no">
              @media (max-width: 600px) {
                .gmx-killpill {
                  content: " 03D1";
                }
          
                .r0-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 320px !important;
                }
          
                .r1-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 320px !important;
                }
          
                .r2-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 100% !important;
                }
          
                .r3-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 100% !important;
                }
          
                .r4-i {
                  background-color: #ffffff !important;
                  padding-bottom: 20px !important;
                  padding-left: 15px !important;
                  padding-right: 15px !important;
                  padding-top: 20px !important;
                }
          
                .r5-c {
                  box-sizing: border-box !important;
                  display: block !important;
                  valign: top !important;
                  width: 100% !important;
                }
          
                .r6-o {
                  border-style: solid !important;
                  width: 100% !important;
                }
          
                .r7-i {
                  padding-left: 0px !important;
                  padding-right: 0px !important;
                }
          
                .r8-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 200px !important;
                }
          
                .r9-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 200px !important;
                }
          
                .r10-i {
                  padding-bottom: 15px !important;
                  padding-top: 15px !important;
                }
          
                .r11-i {
                  background-color: #ffffff !important;
                  padding-bottom: 20px !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
                  padding-top: 20px !important;
                }
          
                .r12-c {
                  box-sizing: border-box !important;
                  text-align: left !important;
                  valign: top !important;
                  width: 100% !important;
                }
          
                .r13-o {
                  border-style: solid !important;
                  margin: 0 auto 0 0 !important;
                  width: 100% !important;
                }
          
                .r14-i {
                  padding-top: 15px !important;
                  text-align: left !important;
                }
          
                .r15-i {
                  padding-bottom: 15px !important;
                  padding-top: 15px !important;
                  text-align: left !important;
                }
          
                .r16-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  margin-bottom: 15px !important;
                  margin-top: 15px !important;
                  width: 100% !important;
                }
          
                .r17-i {
                  text-align: center !important;
                }
          
                .r18-r {
                  background-color: #5f2eea !important;
                  border-radius: 4px !important;
                  border-width: 0px !important;
                  box-sizing: border-box;
                  height: initial !important;
                  padding-bottom: 12px !important;
                  padding-left: 5px !important;
                  padding-right: 5px !important;
                  padding-top: 12px !important;
                  text-align: center !important;
                  width: 100% !important;
                }
          
                .r19-c {
                  box-sizing: border-box !important;
                  width: 100% !important;
                }
          
                .r20-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  width: 100% !important;
                }
          
                .r21-i {
                  font-size: 0px !important;
                  padding-bottom: 15px !important;
                  padding-left: 105px !important;
                  padding-right: 105px !important;
                  padding-top: 15px !important;
                }
          
                .r22-c {
                  box-sizing: border-box !important;
                  width: 32px !important;
                }
          
                .r23-o {
                  border-style: solid !important;
                  margin-right: 8px !important;
                  width: 32px !important;
                }
          
                .r24-i {
                  padding-bottom: 5px !important;
                  padding-top: 5px !important;
                }
          
                .r25-i {
                  background-color: #eff2f7 !important;
                  padding-bottom: 20px !important;
                  padding-left: 15px !important;
                  padding-right: 15px !important;
                  padding-top: 20px !important;
                }
          
                .r26-i {
                  padding-bottom: 0px !important;
                  padding-top: 15px !important;
                  text-align: center !important;
                }
          
                .r27-i {
                  padding-bottom: 0px !important;
                  padding-top: 0px !important;
                  text-align: center !important;
                }
          
                .r28-i {
                  padding-bottom: 15px !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
                  padding-top: 0px !important;
                }
          
                .r29-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 129px !important;
                }
          
                .r30-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 129px !important;
                }
          
                body {
                  -webkit-text-size-adjust: none;
                }
          
                .nl2go-responsive-hide {
                  display: none;
                }
          
                .nl2go-body-table {
                  min-width: unset !important;
                }
          
                .mobshow {
                  height: auto !important;
                  overflow: visible !important;
                  max-height: unset !important;
                  visibility: visible !important;
                  border: none !important;
                }
          
                .resp-table {
                  display: inline-table !important;
                }
          
                .magic-resp {
                  display: table-cell !important;
                }
              }
            </style>
            <!--[if !mso]><!-->
            <style type="text/css" emogrify="no">
              @import url("https://fonts.googleapis.com/css2?family=Montserrat");
            </style>
            <!--<![endif]-->
            <style type="text/css">
              p,
              h1,
              h2,
              h3,
              h4,
              ol,
              ul {
                margin: 0;
              }
          
              a,
              a:link {
                color: #0092ff;
                text-decoration: underline;
              }
          
              .nl2go-default-textstyle {
                color: #3b3f44;
                font-family: arial, helvetica, sans-serif;
                font-size: 16px;
                line-height: 1.5;
              }
          
              .default-button {
                border-radius: 4px;
                color: #ffffff;
                font-family: arial, helvetica, sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: normal;
                line-height: 1.15;
                text-decoration: none;
                width: 50%;
              }
          
              .default-heading1 {
                color: #1f2d3d;
                font-family: arial, helvetica, sans-serif;
                font-size: 36px;
              }
          
              .default-heading2 {
                color: #1f2d3d;
                font-family: arial, helvetica, sans-serif;
                font-size: 32px;
              }
          
              .default-heading3 {
                color: #1f2d3d;
                font-family: arial, helvetica, sans-serif;
                font-size: 24px;
              }
          
              .default-heading4 {
                color: #1f2d3d;
                font-family: arial, helvetica, sans-serif;
                font-size: 18px;
              }
          
              a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
              }
          
              .no-show-for-you {
                border: none;
                display: none;
                float: none;
                font-size: 0;
                height: 0;
                line-height: 0;
                max-height: 0;
                mso-hide: all;
                overflow: hidden;
                table-layout: fixed;
                visibility: hidden;
                width: 0;
              }
            </style>
            <!--[if mso
                ]><xml>
                  <o:OfficeDocumentSettings>
                    <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                </xml><!
              [endif]-->
            <style type="text/css">
              a:link {
                color: #0092ff;
                text-decoration: underline;
              }
            </style>
          </head>
          
          <body text="#3b3f44" link="#0092ff" yahoo="fix" style="">
            <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%"
              style="width: 100%">
              <tr>
                <td align="center" class="r0-c">
                  <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" class="r1-o"
                    style="table-layout: fixed; width: 600px">
                    <tr>
                      <td valign="top" class="">
                        <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                          <tr>
                            <td class="r2-c" align="center">
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o"
                                style="table-layout: fixed; width: 100%">
                                <!-- -->
          
                                <tr>
                                  <td class="r4-i" style="background-color: #ffffff">
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                      <tr>
                                        <th width="100%" valign="top" class="r5-c" style="font-weight: normal">
                                          <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                            class="r6-o" style="table-layout: fixed; width: 100%">
                                            <!-- -->
                                            <tr>
                                              <td class="nl2go-responsive-hide" width="15"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
          
                                              <td class="nl2go-responsive-hide" width="15"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #ffffff;
                                      ">
                                    ­
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="r2-c" align="center">
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o"
                                style="table-layout: fixed; width: 100%">
                                <!-- -->
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #ffffff;
                                      ">
                                    ­
                                  </td>
                                </tr>
                                <tr>
                                  <td class="r11-i" style="background-color: #ffffff">
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                      <tr>
                                        <th width="100%" valign="top" class="r5-c" style="font-weight: normal">
                                          <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                            class="r6-o" style="table-layout: fixed; width: 100%">
                                            <!-- -->
                                            <tr>
                                              <td valign="top" class="r7-i">
                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                  role="presentation">
                                                  <tr>
                                                    <td class="r12-c" align="left">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r13-o" style="
                                                            table-layout: fixed;
                                                            width: 100%;
                                                          ">
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" valign="top" class="r14-i nl2go-default-textstyle"
                                                            style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 16px;
                                                                line-height: 1.5;
                                                                text-align: left;
                                                              ">
                                                            <div>
                                                              <h2 class="default-heading2" style="
                                                                    margin: 0;
                                                                    color: #1f2d3d;
                                                                    font-family: arial,
                                                                      helvetica,
                                                                      sans-serif;
                                                                    font-size: 32px;
                                                                    text-align: center;
                                                                  ">
                                                                Daily <span class="default-heading2" style="
                                                                margin: 0;
                                                                color: #edc046;
                                                                font-family: arial,
                                                                  helvetica,
                                                                  sans-serif;
                                                                font-size: 32px;
                                                                text-align: center;">News</span>
                                                              </h2>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td class=" r12-c" align="left">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r13-o" style="
                                                            table-layout: fixed;
                                                            width: 100%;
                                                          ">
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" valign="top" class="r15-i nl2go-default-textstyle"
                                                            style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 16px;
                                                                line-height: 1.5;
                                                                text-align: center;
                                                              ">
                                                            <div>
                                                              <p style="margin: 0">
                                                                Please click the button below to reset your password.
                                                              </p>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td class="r2-c" align="center">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="290" class="r16-o" style="
                                                            table-layout: fixed;
                                                            width: 290px;
                                                          ">
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td height="18" align="center" valign="top"
                                                            class="r17-i nl2go-default-textstyle" style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 16px;
                                                                line-height: 1.5;
                                                              ">
                                                            <a class="r18-r default-button" href="${url}" target="_blank"
                                                              data-btn="1" style="
                                                                  font-style: normal;
                                                                  font-weight: normal;
                                                                  line-height: 1.15;
                                                                  text-decoration: none;
                                                                  border-style: solid;
                                                                  display: inline-block;
                                                                  -webkit-text-size-adjust: none;
                                                                  mso-hide: all;
                                                                  background-color: #000000;
                                                                  border-color: #000000;
                                                                  border-radius: 4px;
                                                                  border-width: 0px;
                                                                  color: #ffffff;
                                                                  font-family: arial,
                                                                    helvetica, sans-serif;
                                                                  font-size: 16px;
                                                                  height: 18px;
                                                                  padding-bottom: 12px;
                                                                  padding-left: 5px;
                                                                  padding-right: 5px;
                                                                  padding-top: 12px;
                                                                  width: 280px;
                                                                ">
                                                              <p style="margin: 0">
                                                                Reset password
                                                              </p>
                                                            </a>
                                                            <!--<![endif]-->
                                                          </td>
                                                        </tr>
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                              <td class="nl2go-responsive-hide" width="10"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #ffffff;
                                      ">
                                    ­
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="r2-c" align="center">
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o"
                                style="table-layout: fixed; width: 100%">
                                <!-- -->
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #ffffff;
                                      ">
                                    ­
                                  </td>
                                </tr>
                                <tr>
                                  <td class="r4-i" style="background-color: #ffffff">
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                      <tr>
                                        <th width="100%" valign="top" class="r5-c" style="font-weight: normal">
                                          <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                            class="r6-o" style="table-layout: fixed; width: 100%">
                                            <!-- -->
                                            <tr>
                                              <td class="nl2go-responsive-hide" width="15"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
                                              <td valign="top" class="r7-i">
                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                  role="presentation">
                                                  <tr>
                                                    <td class="r19-c">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="570" class="r6-o" style="
                                                            table-layout: fixed;
                                                            width: 570px;
                                                          ">
                                                        <!-- -->
                                                        <tr>
                                                          <td valign="top" class="">
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                              role="presentation">
                                                              <tr>
                                                                <td class="r20-c" align="center" style="
                                                                      display: inline-block;
                                                                    ">
                                                                  <table cellspacing="0" cellpadding="0" border="0"
                                                                    role="presentation" width="570" class="r3-o" style="
                                                                        table-layout: fixed;
                                                                        width: 570px;
                                                                      ">
                                                                    <!-- -->
                                                                    <tr class="nl2go-responsive-hide">
                                                                      <td height="15" width="245" style="
                                                                            font-size: 15px;
                                                                            line-height: 15px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                      <td height="15" style="
                                                                            font-size: 15px;
                                                                            line-height: 15px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                      <td height="15" width="245" style="
                                                                            font-size: 15px;
                                                                            line-height: 15px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                    </tr>
                                                                    <tr>
                                                                      <td class="nl2go-responsive-hide" width="245" style="
                                                                            font-size: 0px;
                                                                            line-height: 1px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                      <td class="r21-i">
                                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                                          border="0" role="presentation">
                                                                          <tr>
                                                                            <th width="40" valign=""
                                                                              class="r22-c mobshow resp-table" style="
                                                                                  font-weight: normal;
                                                                                ">
                                                                              <table cellspacing="0" cellpadding="0" border="0"
                                                                                role="presentation" width="100%" class="r23-o"
                                                                                style="
                                                                                    table-layout: fixed;
                                                                                    width: 100%;
                                                                                  ">
                                                                                <!-- -->
                                                                                <tr class="nl2go-responsive-hide">
                                                                                  <td height="5" style="
                                                                                        font-size: 5px;
                                                                                        line-height: 5px;
                                                                                      ">
                                                                                    ­
                                                                                  </td>
                                                                                  <td height="5" width="8" style="
                                                                                        font-size: 5px;
                                                                                        line-height: 5px;
                                                                                      ">
                                                                                    ­
                                                                                  </td>
                                                                                </tr>
                                                                                <tr>
                                                                                  <td class="r24-i" style="
                                                                                        font-size: 0px;
                                                                                        line-height: 0px;
                                                                                      ">
                                                                                    <a href="https://github.com/bracket-technology"
                                                                                      target="_blank" style="
                                                                                          color: #0092ff;
                                                                                          text-decoration: underline;
                                                                                        ">
                                                                                      <img
                                                                                        src="https://sendinblue-templates.s3.eu-west-3.amazonaws.com/icons/rounded_colored/github_32px.png"
                                                                                        width="32" border="0" class="" style="
                                                                                            display: block;
                                                                                            width: 100%;
                                                                                          " /></a>
                                                                                  </td>
                                                                                  <td class="nl2go-responsive-hide" width="8"
                                                                                    style="
                                                                                        font-size: 0px;
                                                                                        line-height: 1px;
                                                                                      ">
                                                                                    ­
                                                                                  </td>
                                                                                </tr>
                                                                                <tr class="nl2go-responsive-hide">
                                                                                  <td height="5" style="
                                                                                        font-size: 5px;
                                                                                        line-height: 5px;
                                                                                      ">
                                                                                    ­
                                                                                  </td>
                                                                                  <td height="5" width="8" style="
                                                                                        font-size: 5px;
                                                                                        line-height: 5px;
                                                                                      ">
                                                                                    ­
                                                                                  </td>
                                                                                </tr>
                                                                              </table>
                                                                            </th>
          
                                                                          </tr>
                                                                        </table>
                                                                      </td>
                                                                      <td class="nl2go-responsive-hide" width="245" style="
                                                                            font-size: 0px;
                                                                            line-height: 1px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                    </tr>
                                                                    <tr class="nl2go-responsive-hide">
                                                                      <td height="15" width="245" style="
                                                                            font-size: 15px;
                                                                            line-height: 15px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                      <td height="15" style="
                                                                            font-size: 15px;
                                                                            line-height: 15px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                      <td height="15" width="245" style="
                                                                            font-size: 15px;
                                                                            line-height: 15px;
                                                                          ">
                                                                        ­
                                                                      </td>
                                                                    </tr>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                              <td class="nl2go-responsive-hide" width="15"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #ffffff;
                                      ">
                                    ­
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="r2-c" align="center">
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o"
                                style="table-layout: fixed; width: 100%">
                                <!-- -->
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #eff2f7;
                                      ">
                                    ­
                                  </td>
                                </tr>
                                <tr>
                                  <td class="r25-i" style="background-color: #eff2f7">
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                      <tr>
                                        <th width="100%" valign="top" class="r5-c" style="font-weight: normal">
                                          <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                            class="r6-o" style="table-layout: fixed; width: 100%">
                                            <!-- -->
                                            <tr>
                                              <td class="nl2go-responsive-hide" width="15"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
                                              <td valign="top" class="r7-i">
                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                  role="presentation">
                                                  <tr>
                                                    <td class="r12-c" align="left">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r13-o" style="
                                                            table-layout: fixed;
                                                            width: 100%;
                                                          ">
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" valign="top" class="r26-i nl2go-default-textstyle"
                                                            style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 18px;
                                                                line-height: 1.5;
                                                                text-align: center;
                                                              ">
                                                            <div>
                                                              <p style="margin: 0">
                                                                Daily News
                                                              </p>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td class="r12-c" align="left">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r13-o" style="
                                                            table-layout: fixed;
                                                            width: 100%;
                                                          ">
                                                        <tr>
                                                          <td align="center" valign="top" class="r27-i nl2go-default-textstyle"
                                                            style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 18px;
                                                                line-height: 1.5;
                                                                text-align: center;
                                                              ">
                                                            <div>
                                                              <p style="
                                                                    margin: 0;
                                                                    font-size: 14px;
                                                                  ">
                                                                Jendral Sudirman Street
                                                                No. 23 Jakarta,
                                                                Indonesia
                                                              </p>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td class="r12-c" align="left">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r13-o" style="
                                                            table-layout: fixed;
                                                            width: 100%;
                                                          ">
                                                        <tr class="nl2go-responsive-hide">
                                                          <td height="15" style="
                                                                font-size: 15px;
                                                                line-height: 15px;
                                                              ">
                                                            ­
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" valign="top" class="r26-i nl2go-default-textstyle"
                                                            style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 18px;
                                                                line-height: 1.5;
                                                                text-align: center;
                                                              ">
                                                            <div>
                                                              <p style="
                                                                    margin: 0;
                                                                    font-size: 14px;
                                                                  ">
                                                                This email was sent to
                                                                ${email}
                                                              </p>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td class="r12-c" align="left">
                                                      <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r13-o" style="
                                                            table-layout: fixed;
                                                            width: 100%;
                                                          ">
                                                        <tr>
                                                          <td align="center" valign="top" class="r27-i nl2go-default-textstyle"
                                                            style="
                                                                color: #3b3f44;
                                                                font-family: arial,
                                                                  helvetica, sans-serif;
                                                                font-size: 18px;
                                                                line-height: 1.5;
                                                                text-align: center;
                                                              ">
                                                            <div>
                                                              <p style="
                                                                    margin: 0;
                                                                    font-size: 14px;
                                                                  ">
                                                                You've received this
                                                                email because you're want to recover your password.
                                                              </p>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                              <td class="nl2go-responsive-hide" width="15"
                                                style="font-size: 0px; line-height: 1px">
                                                ­
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr class="nl2go-responsive-hide">
                                  <td height="20" style="
                                        font-size: 20px;
                                        line-height: 20px;
                                        background-color: #eff2f7;
                                      ">
                                    ­
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          
          </html>`

        })
      })
        .then(result => resolve(true))
        .catch(err => reject(false))
    })
  }
}