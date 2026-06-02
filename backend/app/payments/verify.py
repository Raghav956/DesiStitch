@router.post("/verify")
def verify_payment(
    payload: dict
):

    razorpay = RazorpayService()

    razorpay.verify_payment(
        payload
    )

    return {
        "success": True
    }