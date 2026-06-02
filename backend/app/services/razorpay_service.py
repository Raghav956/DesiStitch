import razorpay
import os


class RazorpayService:

    def __init__(self):

        self.client = razorpay.Client(
            auth=(
                os.getenv("RAZORPAY_KEY_ID"),
                os.getenv("RAZORPAY_KEY_SECRET")
            )
        )

    def create_order(
        self,
        amount
    ):

        return self.client.order.create({

            "amount": amount,

            "currency": "INR",

            "payment_capture": 1

        })

    def verify_payment(
        self,
        data
    ):

        self.client.utility.verify_payment_signature(
            data
        )

        return True