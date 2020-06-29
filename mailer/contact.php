<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "Contact from imharshm";
    $message = $_POST['message'];
    $to = 'hmahajan38@gmail.com'; 
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: ' . $email . "\r\n";
    // $headers .= 'BCC: hmahajan38@gmail.com '. "\r\n";
   
    $body = "<html>
            <body>
            <div
            style='background: #f0f0f0; border-radius: 10px; padding: 15px; font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
            <table width='100%' border='0' cellpadding='0' cellspacing='0'>
                <tbody>
                    <tr>
                        <td
                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
        
                            <table border='0' width='100%' cellpadding='0' cellspacing='0'>
                                <tbody>
                                    <tr>
                                        <td valign='top'
                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
                                            <table align='center' height='100%' width='100%' border='0' cellspacing='0'
                                                cellpadding='0' bgcolor='#f0f0f0'>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
                                                            <table width='580' align='center' border='0' cellspacing='0'
                                                                cellpadding='0'>
                                                                <tbody>
                                                                    <tr>
                                                                        <td align='center' width='100%'
                                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
                                                                            <table align='center' width='580' border='0'
                                                                                cellspacing='0' cellpadding='0' style='
            background: #31313a;
        '>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width='100%' height='16'
                                                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align='center' width='100%'
                                                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
        
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                                            <a href='http://imharshm.tech/'
                                                                                                style='color: #1dc8cd;text-decoration:none;border:0;font-size: 25px;font-weight: 600;font-family: serif;'
                                                                                                target='_blank'>&nbsp;
                                                                                                imharshm</a>
                                                                                            <table width='290' align='center'
                                                                                                border='0' cellspacing='0'
                                                                                                cellpadding='0'>
        
        
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <table width='290' align='right'
                                                                                                border='0' cellspacing='0'
                                                                                                cellpadding='0'>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px;text-align: right;'>
                                                                                                            <a href='https://www.facebook.com/imharshm'
                                                                                                                style='color:#ababab;text-decoration:none;border:0'
                                                                                                                target='_blank'>
                                                                                                                <img src='http://imharshm.tech/images/social-media/facebook.png'
                                                                                                                    width='24'
                                                                                                                    alt='Facebook'
                                                                                                                    border='0'
                                                                                                                    style='border:none'
                                                                                                                    class='CToWUd'></a>&nbsp;
                                                                                                            <a href='https://www.linkedin.com/in/imharshm'
                                                                                                                style='color:#ababab;text-decoration:none;border:0'
                                                                                                                target='_blank'>
                                                                                                                <img src='http://imharshm.tech/images/social-media/linkedin.png'
                                                                                                                    width='24'
                                                                                                                    alt='Twitter'
                                                                                                                    border='0'
                                                                                                                    style='border:none'
                                                                                                                    class='CToWUd'></a>&nbsp;
                                                                                                            <a href='https://www.instagram.com/imharshm'
                                                                                                                style='color:#ababab;text-decoration:none;border:0'
                                                                                                                target='_blank'>
                                                                                                                <img width='24'
                                                                                                                    src='http://imharshm.tech/images/social-media/instagram.png'
                                                                                                                    alt='Instagram'
                                                                                                                    border='0'
                                                                                                                    style='border:none'
                                                                                                                    class='CToWUd'></a>
                                                                                                            &nbsp;&nbsp;&nbsp;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td width='100%' height='19'
                                                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table align='center' height='100%' width='100%' border='0' cellspacing='0'
                                                cellpadding='0' bgcolor='#f0f0f0'>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#242424;font-size:14px'>
                                                            <table width='580' align='center' border='0' cellspacing='0'
                                                                cellpadding='0'>
                                                                <tbody>
                                                                    <tr bgcolor='#ffffff'>
                                                                        <td align='left'
                                                                            style='padding:55px 45px 53px 45px;font-family:Helvetica,Arial,sans-serif;line-height:24px;color: #000000;font-size:16px;font-weight:normal;background: #d4d4d4;'>
                                                                            Dear <strong>Harshal</strong>,
                                                                            <br><br>
                                                                            I am <strong>$name</strong>, I want to know about \"<strong>$message</strong>\"
                                                                            <br>
                                                                            Please revert with your reply on this - $email
                                                                            <br><br>
                                                                            Regards,
                                                                            <br>
                                                                            $name
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign='top'
                                            style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                            <div
                                                style='font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                <table align='center' width='100%' border='0' cellspacing='0' cellpadding='0'
                                                    bgcolor='#f0f0f0' style='width:100%;min-width:100%;background:#f0f0f0'>
                                                    <tbody>
                                                        <tr>
                                                            <td align='center'
                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px;padding-left:16px;padding-right:16px'>
                                                                <table width='580' align='center' border='0' cellspacing='0'
                                                                    cellpadding='0'
                                                                    style='min-width:580px;width:580px;background: #31313a;'>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width='100%' height='32'
                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align='center'
                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:18px;color: #c1c1c1;font-size:12px;text-decoration:none;'>
                                                                                © 2020 imharshm. All Rights Reserved.<br><a
                                                                                    style='text-decoration:none;border:0;color: #c1c1c1;'>Pune,
                                                                                    Maharashtra</a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height='8' width='100%'
                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                            </td>
                                                                        </tr>
        
                                                                        <tr>
                                                                            <td height='16' width='100%'
                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align='center' width='100%'
                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                                <table width='auto' align='center' border='0'
                                                                                    cellspacing='0' cellpadding='0'>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                                                <a href='https://www.facebook.com/imharshm'
                                                                                                    style='color:#ababab;text-decoration:none;border:0'
                                                                                                    target='_blank'>
                                                                                                    <img src='http://imharshm.tech/images/social-media/facebook.png'
                                                                                                        width='24'
                                                                                                        alt='Facebook'
                                                                                                        border='0'
                                                                                                        style='border:none'
                                                                                                        class='CToWUd'></a>&nbsp;
                                                                                                <a href='https://www.linkedin.com/in/imharshm'
                                                                                                    style='color:#ababab;text-decoration:none;border:0'
                                                                                                    target='_blank'>
                                                                                                    <img src='http://imharshm.tech/images/social-media/linkedin.png'
                                                                                                        width='24' alt='Twitter'
                                                                                                        border='0'
                                                                                                        style='border:none'
                                                                                                        class='CToWUd'></a>&nbsp;
                                                                                                <a href='https://www.instagram.com/imharshm'
                                                                                                    style='color:#ababab;text-decoration:none;border:0'
                                                                                                    target='_blank'>
                                                                                                    <img width='24'
                                                                                                        src='http://imharshm.tech/images/social-media/instagram.png'
                                                                                                        alt='Instagram'
                                                                                                        border='0'
                                                                                                        style='border:none'
                                                                                                        class='CToWUd'></a>&nbsp;
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width='100%' height='32'
                                                                                style='padding:0;font-family:Helvetica,Arial,sans-serif;line-height:125%;color:#ababab;font-size:14px'>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            </body>
            </html>";
            
    
    if (mail ($to, $subject, $body, $headers )) {
        echo "success";
    }
    else {
        echo "failed, try again";
    }
?>