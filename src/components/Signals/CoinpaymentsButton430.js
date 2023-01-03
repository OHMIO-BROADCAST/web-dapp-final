import React from 'react'

function CoinpaymentsButton430(userID) {
    return (
        <form action="https://www.coinpayments.net/index.php" method="post">
            <input type="hidden" name="cmd" defaultValue="_pay" />
            <input type="hidden" name="reset" defaultValue={1} />
            <input
                type="hidden"
                name="merchant"
                defaultValue="048990b0c04fc240a473e0dbbc801327"
            />
            <input type="hidden" name="item_name" defaultValue="FX-TRIMESTRAL" />
            <input type="hidden" name="item_number" defaultValue={1} />
            <input type="hidden" name="currency" defaultValue="USD" />
            <input type="hidden" name="amountf" defaultValue={430.0} />
            <input type="hidden" name="quantity" defaultValue={1} />
            <input type="hidden" name="allow_quantity" defaultValue={0} />
            {/* <input type="hidden" name="ov1" defaultValue={userID} /> */}
            <input type="hidden" name="want_shipping" defaultValue={1} />
            <input
                type="hidden"
                name="success_url"
                defaultValue="https://app.bmaker.pro/success-purchase"
            />
            <input
                type="hidden"
                name="cancel_url"
                defaultValue="https://app.bmaker.pro/"
            />
            <input type="hidden" name="ipn_url" defaultValue="https://ipn.bmaker.pro/" />
            <input type="hidden" name="allow_extra" defaultValue={0} />
            <input
                type="image"
                src="https://www.coinpayments.net/images/pub/buynow-med-grey.png"
                alt="Comprar ahora con CoinPayments.net"
            />
        </form>


    )
}

export default CoinpaymentsButton430