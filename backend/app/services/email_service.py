import os

import sib_api_v3_sdk

from sib_api_v3_sdk.rest import ApiException


def send_newsletter_welcome_email(

    email: str

):

    configuration = sib_api_v3_sdk.Configuration()

    configuration.api_key['api-key'] = os.getenv(
        "BREVO_API_KEY"
    )

    api_instance = sib_api_v3_sdk.TransactionalEmailsApi(

        sib_api_v3_sdk.ApiClient(
            configuration
        )

    )

    sender = {

        "name": os.getenv(
            "MAIL_FROM_NAME"
        ),

        "email": os.getenv(
            "MAIL_FROM"
        )

    }

    html_content = """

    <h1>Welcome to Desi Stitch 🌿</h1>

    <p>

      Thank you for joining the

      <strong>Desi Stitch Journal</strong>.

    </p>

    <p>

      You'll be among the first to know about:

    </p>

    <ul>

      <li>New collections</li>

      <li>Block print launches</li>

      <li>Ikkat arrivals</li>

      <li>Exclusive offers</li>

    </ul>

    <p>

      Thank you for supporting handcrafted fashion.

    </p>

    <p>

      With love,<br/>

      Shivika Kalsi<br/>

      Desi Stitch

    </p>

    """

    email_data = sib_api_v3_sdk.SendSmtpEmail(

        to=[{

            "email": email

        }],

        sender=sender,

        subject="Welcome to Desi Stitch",

        html_content=html_content

    )

    try:

        api_instance.send_transac_email(
            email_data
        )

    except ApiException as e:

        print(e)