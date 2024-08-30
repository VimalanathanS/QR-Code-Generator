async function clicked()
{
    const s=document.getElementById('inpt').value;
    try
    {
        if(s.length==0)
        {
            window.alert('Enter the value to convert...');                    
        }
        const  qrCodeContainer=document.getElementById('qrcode');
        qrCodeContainer.innerHTML='';
        new QRCode(qrCodeContainer, {
            text: s,
            width: 200,
            height: 200 ,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
    }
    catch{}
    if(s.length!=0)
    {
        document.getElementById('h2').innerHTML="QR Code Generated Successfully";
    }
}   
