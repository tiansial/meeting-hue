# Meeting Hue

This Chrome extension automatically updates your Philips Hue light states based on your meeting activities. It supports various meeting platforms like Google Meet, Zoom, and Microsoft Teams.

## Features

- **Automatic Light Control:** Automatically turns your Philips Hue lights on when you join a meeting on supported platforms and off when you leave.
- **Supported Meeting Platforms:** Google Meet (`meet.google.com`), Zoom (`zoom.us`), Microsoft Teams (`teams.microsoft.com`), with the ability to add more platforms as needed.

## Prerequisites

Before you start using this extension, ensure you have:

- **Philips Hue Bridge** connected to your network.
- **Philips Hue Lights** set up and connected to your Philips Hue Bridge.
- **Hue API Key:** A valid API key (username) generated from your Philips Hue Bridge. Get yours using this guide: [How to develop for Hue?](https://developers.meethue.com/develop/get-started-2/)

## Installation

1. Clone this repository to your local machine.
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable Developer Mode by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned the repository.
5. Ensure you update the `HUE_ENDPOINT` in the script with your Philips Hue Bridge API endpoint.

## Configuration

You will need to modify the `HUE_ENDPOINT` variable in the script to match your Philips Hue setup. The endpoint typically looks like this:

```
http://<bridge_ip_address>/api/<hue_api_key>/lights/<light_id>/state
```

Replace `<bridge_ip_address>`, `<hue_api_key>`, and `<light_id>` with your specific details.

## Usage

Once installed, the extension works automatically. When you navigate to any of the supported meeting platforms in Chrome, it triggers your Philips Hue lights to turn on. When you leave the meeting or close the tab, the lights will turn off.

## Adding More Meeting Platforms

To add more meeting platforms, simply update the `MEETING_PLATFORMS` array in the script with the base URL of the new platform.

## Contributing

Contributions are welcome! If you'd like to add more features or support for additional meeting platforms, please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
